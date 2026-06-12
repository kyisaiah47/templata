// Seed the community feed with generated public playbooks.
// Usage: node scripts/seed-community.mts
import { readFileSync } from 'fs';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';
import { buildPlaybookPrompt, type GeneratedPlaybook } from '../src/lib/playbook-prompt.ts';

for (const line of readFileSync(new URL('../.env.local', import.meta.url), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

const CONTEXTS = [
  'Planning a wedding in Brooklyn next September, around 90 guests, $45k budget. We both have big families and want a non-religious outdoor ceremony.',
  'Switching careers from high school teaching to UX design within a year. No design degree, can study about 10 hours a week.',
  "Buying our first home in Denver this fall, $520k budget, haven't started pre-approval yet. We have two big dogs so a yard matters.",
  "Moving from Chicago to Lisbon in January for a remote job. Need to figure out the visa, don't speak Portuguese, never lived abroad.",
  'Launching a weekend coffee cart business in Austin with $8k in savings while keeping my full-time day job.',
  'Getting out of $32k of credit card debt in 18 months on a $75k salary, while still putting a little into savings.',
  'Training for my first marathon in 6 months. I currently run a 5k twice a week. 34 years old, no injuries.',
  'Backpacking Southeast Asia solo for 2 months starting in March. First big solo trip, $4k total budget.',
  'Getting a golden retriever puppy while living in a 2-bedroom apartment. Both of us work hybrid, gone 3 days a week.',
  "Starting a part-time master's in data science while working full-time as an analyst. Need to pick a program and not burn out.",
];

for (const context of CONTEXTS) {
  process.stdout.write(`Generating: ${context.slice(0, 60)}... `);
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8096,
    messages: [{ role: 'user', content: buildPlaybookPrompt(context) }],
  });
  const rawText = message.content[0].type === 'text' ? message.content[0].text : '';
  const cleaned = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
  const generated: GeneratedPlaybook = JSON.parse(cleaned);

  const { data: playbook, error } = await supabase
    .from('playbooks')
    .insert({
      user_id: null,
      title: generated.title,
      description: generated.description,
      context,
      is_public: true,
      is_forked: false,
      forked_from: null,
    })
    .select('id')
    .single();
  if (error || !playbook) throw new Error(`playbook insert failed: ${error?.message}`);

  const { error: itemsError } = await supabase.from('items').insert(
    generated.items.map(item => ({
      playbook_id: playbook.id,
      type: item.type,
      content: item.content,
      phase: item.phase ?? null,
      position: item.position,
      completed: false,
      resource_type: item.resource_type ?? null,
      url: item.url ?? null,
    })),
  );
  if (itemsError) throw new Error(`items insert failed: ${itemsError.message}`);
  console.log(`done (${generated.items.length} items) — ${generated.title}`);
}
console.log('Seeding complete.');
