#!/usr/bin/env npx tsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyQuestions() {
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'career-burnout');

  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  const counts = data.reduce((acc: Record<string, number>, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  const total = data.length;

  console.log('\n📊 QUESTION BREAKDOWN:\n');
  console.log(`Total Questions: ${total}\n`);

  Object.entries(counts).forEach(([category, count]) => {
    const percentage = ((count as number / total) * 100).toFixed(1);
    console.log(`${category}: ${count} questions (${percentage}%)`);
  });
}

verifyQuestions();
