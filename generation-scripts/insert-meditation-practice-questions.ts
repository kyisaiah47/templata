import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (9 questions - 25%)
  {
    id: 'meditation-practice-1',
    question: 'Write about the last time you sat completely still for 5+ minutes without your phone, TV, or any task. Where were you? What did you notice about how your mind behaved?',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 1
  },
  {
    id: 'meditation-practice-2',
    question: 'Describe 3 moments in the past month when you felt genuinely calm or present. What were you doing? What made those moments different from your usual mental state?',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 2
  },
  {
    id: 'meditation-practice-3',
    question: 'Think about your typical day from morning to night. When does your mind feel most cluttered or racing? When does it feel most settled? What patterns do you notice?',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 3
  },
  {
    id: 'meditation-practice-4',
    question: 'Document every time you\'ve tried meditation, mindfulness, or similar practices before. For each: How long did you stick with it? What made you stop? What did you actually experience?',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 4
  },
  {
    id: 'meditation-practice-5',
    question: 'Write about your relationship with boredom. When you\'re waiting in line, stuck in traffic, or have nothing to do - what happens? Do you immediately reach for distraction? How does that feel?',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 5
  },
  {
    id: 'meditation-practice-6',
    question: 'List the things you do to "relax" or "unwind" currently. For each, note: Does your mind actually quiet down, or are you just distracted from stress? How do you feel after?',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 6
  },
  {
    id: 'meditation-practice-7',
    question: 'Reflect on what you\'re actually hoping meditation will change. Be specific: Is it anxiety levels? Sleep? Focus at work? Emotional reactivity? Write about what being different would look like.',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 7
  },
  {
    id: 'meditation-practice-8',
    question: 'Think about the voice in your head during difficult moments. Is it harsh? Worried? Repetitive? Describe its typical patterns and how they affect your days.',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 8
  },
  {
    id: 'meditation-practice-9',
    question: 'Document your resistance to the idea of sitting still. What comes up? "I don\'t have time"? "I can\'t clear my mind"? "It won\'t work for me"? List every objection, then note where each one comes from.',
    category: 'reflection',
    template_id: 'meditation-practice',
    question_number: 9
  },

  // RESEARCH QUESTIONS (8 questions - 22%)
  {
    id: 'meditation-practice-10',
    question: 'Research 5 different meditation techniques (e.g., breath focus, body scan, loving-kindness, noting, mantra). For each, write: What does it involve? Who recommends it? What problem does it address?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 10
  },
  {
    id: 'meditation-practice-11',
    question: 'Try 3 different guided meditation apps or YouTube channels (5-10 min sessions each). For each, note: What was the voice/style like? Did it help or distract? What felt natural vs forced?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 11
  },
  {
    id: 'meditation-practice-12',
    question: 'Map out every available time slot in your typical week where you could meditate. For each slot, rate it 1-10 for: Energy level, likelihood of interruption, and mental readiness.',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 12
  },
  {
    id: 'meditation-practice-13',
    question: 'Identify 3-5 physical spaces where you could meditate (bedroom, office, outside, etc.). For each: Test sitting there for 5 minutes. What sounds do you hear? How comfortable is it? What distracts you?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 13
  },
  {
    id: 'meditation-practice-14',
    question: 'Research what experienced meditators say about the first 30 days. Find 3-5 accounts of what actually happens when starting. What challenges do they mention? What surprised them? What kept them going?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 14
  },
  {
    id: 'meditation-practice-15',
    question: 'Document the props and tools available to you: cushion, chair, timer app, headphones, blanket, etc. For each, note: Do you already own it? How might it help? Is it necessary or optional?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 15
  },
  {
    id: 'meditation-practice-16',
    question: 'Investigate meditation communities or resources in your area: local classes, online groups, apps with social features, friends who meditate. For each, note: How accessible is it? What\'s the commitment? What\'s the culture like?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 16
  },
  {
    id: 'meditation-practice-17',
    question: 'Research the science behind meditation benefits you care about. Find 2-3 specific studies or expert summaries. What do they actually say? What timescale for results? What practices were studied?',
    category: 'research',
    template_id: 'meditation-practice',
    question_number: 17
  },

  // PLANNING QUESTIONS (10 questions - 28%)
  {
    id: 'meditation-practice-18',
    question: 'Design your starter practice: Choose a time, duration (2-5 min to start), technique, and location based on your research. Write out exactly what you\'ll do from the moment you decide "now" to finishing.',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 18
  },
  {
    id: 'meditation-practice-19',
    question: 'Plan for the most likely obstacles in your first week. List 5 things that could derail you (too tired, too busy, forgot, felt stupid, etc.). For each, write your specific backup plan.',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 19
  },
  {
    id: 'meditation-practice-20',
    question: 'Create your "bad day" version of practice - the absolute minimum you\'ll do even when everything goes wrong. What\'s the smallest thing you can commit to? 2 minutes? 3 breaths? What makes it frictionless?',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 20
  },
  {
    id: 'meditation-practice-21',
    question: 'Design your environmental setup. What needs to happen in your chosen space? Phone in another room? Door closed? Specific cushion or chair? Timer set? What\'s your pre-meditation checklist?',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 21
  },
  {
    id: 'meditation-practice-22',
    question: 'Plan your progression strategy: If you start with 5 minutes, when will you add more time? What will trigger increasing duration or trying new techniques? Write your criteria for "ready to level up."',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 22
  },
  {
    id: 'meditation-practice-23',
    question: 'Create a realistic expectation framework. For weeks 1, 2, 3, and 4 - write what "success" actually looks like. Not perfection, but what consistency matters more than? What actually counts?',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 23
  },
  {
    id: 'meditation-practice-24',
    question: 'Design your approach to "busy mind" days. When meditation feels impossible because your mind won\'t settle - what\'s your plan? Push through? Try different technique? Count it as practice anyway? Be specific.',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 24
  },
  {
    id: 'meditation-practice-25',
    question: 'Plan how you\'ll remember without relying on motivation. What reminder system will you use? Phone alarm? Habit stacking? Visual cue? When motivation fades (it will), what structure keeps you going?',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 25
  },
  {
    id: 'meditation-practice-26',
    question: 'Create your recovery protocol for when you miss days. If you skip 2 days, 4 days, a week - what\'s your specific plan to restart? How will you be kind to yourself while still recommitting?',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 26
  },
  {
    id: 'meditation-practice-27',
    question: 'Design what you\'ll track and how. Daily checkmarks? Quality notes? Mind state before/after? Choose 2-3 simple metrics that help you learn without becoming another burden. What matters to observe?',
    category: 'planning',
    template_id: 'meditation-practice',
    question_number: 27
  },

  // ACTION QUESTIONS (8 questions - 25%)
  {
    id: 'meditation-practice-28',
    question: 'Set up your space right now. Move the cushion, set the chair, test the timer. Take a photo of your meditation spot. Make it ready so tomorrow there\'s zero setup friction.',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 28
  },
  {
    id: 'meditation-practice-29',
    question: 'Create your starter routine document: Write out the exact steps from deciding to meditate to finishing. Include: where you sit, how you set timer, what you focus on, how you end. Make it so clear you could follow it half-asleep.',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 29
  },
  {
    id: 'meditation-practice-30',
    question: 'Schedule your first 7 meditation sessions in your calendar right now. Treat them like meetings. Set phone reminders 5 minutes before. What specific times did you choose? Why those times?',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 30
  },
  {
    id: 'meditation-practice-31',
    question: 'Do a 3-minute test meditation right now using your chosen technique. Afterward, immediately write: What happened? Where did your mind go? What felt hard? What felt okay? What did you learn?',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 31
  },
  {
    id: 'meditation-practice-32',
    question: 'Create your tracking system today. Whether it\'s a simple calendar X, journal entry, or app - set it up and make your first entry. Write: What system did you choose? Why will it work for you?',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 32
  },
  {
    id: 'meditation-practice-33',
    question: 'Identify your accountability approach. Will you tell someone? Join a group? Use an app streak? Make a bet with yourself? Choose one method and implement it today. Who/what will help you stay honest?',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 33
  },
  {
    id: 'meditation-practice-34',
    question: 'Write your personal "why" statement - one paragraph about why you\'re starting this practice. Be honest about what you hope changes. Save it where you\'ll see it when you need motivation.',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 34
  },
  {
    id: 'meditation-practice-35',
    question: 'Commit to your 30-day experiment parameters: How many days will you practice? What\'s your minimum? What will you evaluate at the end? Write your commitment and sign/date it.',
    category: 'action',
    template_id: 'meditation-practice',
    question_number: 35
  }
];

async function insertQuestions() {
  console.log('Starting to insert questions...');

  for (const question of questions) {
    try {
      const { data, error } = await supabase
        .from('questions')
        .insert([question]);

      if (error) {
        console.error(`Error inserting question ${question.question_number}:`, error);
      } else {
        console.log(`✓ Inserted question ${question.question_number}`);
      }

      // Wait 100ms between insertions to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (err) {
      console.error(`Failed to insert question ${question.question_number}:`, err);
    }
  }

  console.log('\nInsertion complete! Verifying counts...');

  // Verify counts
  const { data: allQuestions, error: countError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'meditation-practice');

  if (countError) {
    console.error('Error counting questions:', countError);
    return;
  }

  const counts = {
    reflection: allQuestions.filter(q => q.category === 'reflection').length,
    research: allQuestions.filter(q => q.category === 'research').length,
    planning: allQuestions.filter(q => q.category === 'planning').length,
    action: allQuestions.filter(q => q.category === 'action').length,
  };

  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

  console.log('\n=== VERIFICATION RESULTS ===');
  console.log(`Total questions: ${total}`);
  console.log(`Foundation (reflection): ${counts.reflection} (${((counts.reflection/total)*100).toFixed(1)}%)`);
  console.log(`Research: ${counts.research} (${((counts.research/total)*100).toFixed(1)}%)`);
  console.log(`Planning: ${counts.planning} (${((counts.planning/total)*100).toFixed(1)}%)`);
  console.log(`Action: ${counts.action} (${((counts.action/total)*100).toFixed(1)}%)`);
}

insertQuestions().catch(console.error);
