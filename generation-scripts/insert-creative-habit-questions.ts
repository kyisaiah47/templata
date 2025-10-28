import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-10)
  {
    id: 'creative-habit-1',
    question: 'Write about 3-5 times in your life when you were fully absorbed in making something. What were you creating? What made those moments feel different from your typical day?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 1
  },
  {
    id: 'creative-habit-2',
    question: 'Document the last time you had a creative idea that excited you. What happened to it? Trace the path from initial excitement to where it is now.',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 2
  },
  {
    id: 'creative-habit-3',
    question: 'Reflect on your relationship with the phrase "I\'m creative." Does it feel true, aspirational, or uncomfortable? When did you first form this belief about yourself?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 3
  },
  {
    id: 'creative-habit-4',
    question: 'List 5 activities where you regularly lose track of time (creative or not). What patterns do you notice? What state of mind connects these experiences?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 4
  },
  {
    id: 'creative-habit-5',
    question: 'Write about a creative project you abandoned. What specific moment made you stop? What were you thinking and feeling right before you quit?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 5
  },
  {
    id: 'creative-habit-6',
    question: 'Document your internal dialogue when you think about starting something creative. Write down the exact thoughts - both encouraging and discouraging - that show up.',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 6
  },
  {
    id: 'creative-habit-7',
    question: 'Reflect on the creative people you admire. What specifically do you envy about their practice? What assumptions are you making about how they work?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 7
  },
  {
    id: 'creative-habit-8',
    question: 'Think about your childhood. What did you make or create regularly before anyone told you whether you were "good" at it? What happened to that activity?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 8
  },
  {
    id: 'creative-habit-9',
    question: 'Write about 3 times in the past year when you wanted to create something but didn\'t. What stopped you in each case? Look for patterns across these moments.',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 9
  },
  {
    id: 'creative-habit-10',
    question: 'Document how you currently define "being creative." What counts? What doesn\'t? Where did these definitions come from?',
    category: 'reflection',
    template_id: 'creative-habit',
    question_number: 10
  },

  // RESEARCH QUESTIONS (11-19)
  {
    id: 'creative-habit-11',
    question: 'Track your energy levels for one week using a simple 1-10 scale at 9am, 2pm, and 8pm. Note what you notice about when you feel most alert and open versus drained and closed off.',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 11
  },
  {
    id: 'creative-habit-12',
    question: 'Document your current morning routine from waking to starting your first obligation. Time each activity. Where could 15-30 minutes of creative time fit without breaking everything else?',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 12
  },
  {
    id: 'creative-habit-13',
    question: 'Research 5-7 creators whose work resonates with you. For each, find out: How did they start? What does their actual practice look like? What struggles have they shared?',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 13
  },
  {
    id: 'creative-habit-14',
    question: 'Audit your physical spaces. Take photos or write descriptions of: where you spend most of your time, where you keep creative materials (if any), where you feel most comfortable experimenting.',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 14
  },
  {
    id: 'creative-habit-15',
    question: 'List every commitment in your weekly calendar. For each, mark: non-negotiable, somewhat flexible, or could be reduced. What does this reveal about your actual vs perceived available time?',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 15
  },
  {
    id: 'creative-habit-16',
    question: 'Document where ideas currently come from. Over one week, note each time you have a creative impulse: what triggered it, where you were, what you were doing, whether you captured it.',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 16
  },
  {
    id: 'creative-habit-17',
    question: 'Research the tools and materials you\'d need to try the creative form you\'re drawn to. Get specific prices, time investments, and space requirements. What\'s the real barrier - cost, time, or something else?',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 17
  },
  {
    id: 'creative-habit-18',
    question: 'Track your phone and screen time for 3 days without changing behavior. Calculate: If you redirected just 30% of social media time to creative practice, how many hours per week would that be?',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 18
  },
  {
    id: 'creative-habit-19',
    question: 'Interview 2-3 people who maintain a creative practice (writers, artists, makers, musicians - anyone who creates regularly). Ask: What\'s their actual schedule? How do they handle resistance? What took them longest to figure out?',
    category: 'research',
    template_id: 'creative-habit',
    question_number: 19
  },

  // PLANNING QUESTIONS (20-30)
  {
    id: 'creative-habit-20',
    question: 'Design your ideal "minimum viable creative session." What\'s the shortest amount of time that would feel worthwhile? What would happen in that time? What would make it feel successful?',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 20
  },
  {
    id: 'creative-habit-21',
    question: 'Map out your existing weekly schedule visually. Block out all committed time. Now identify 3-4 potential creative windows - not ideal times, but real available slots.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 21
  },
  {
    id: 'creative-habit-22',
    question: 'Create a spectrum from "dabbling" to "committed practice." Where are you now? Where do you want to be in 6 months? What specific behaviors would need to change to move along that spectrum?',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 22
  },
  {
    id: 'creative-habit-23',
    question: 'Plan for your most common form of resistance. Based on past patterns, what usually stops you? Design 2-3 specific strategies for that exact obstacle, not generic motivation.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 23
  },
  {
    id: 'creative-habit-24',
    question: 'Define what "good enough" looks like for your practice. What would qualify as a successful session? A successful week? A successful month? Be specific and realistic.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 24
  },
  {
    id: 'creative-habit-25',
    question: 'Create a skills roadmap. If you practiced regularly for 6 months, what specific abilities do you want to develop? Break each into smaller, observable capabilities you could track.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 25
  },
  {
    id: 'creative-habit-26',
    question: 'Design your creative environment. Based on your space audit, what\'s the simplest setup that would remove friction? List exactly what needs to be different - not perfect, just less resistant.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 26
  },
  {
    id: 'creative-habit-27',
    question: 'Plan for integration with your existing life. Which current activities could incorporate creative elements? Which obligations might need to shift? What conversations need to happen with others?',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 27
  },
  {
    id: 'creative-habit-28',
    question: 'Map your creative cycle. Do you need variety or consistency? Deep focus or frequent switching? Solo time or collaborative energy? Design a rhythm that matches your actual patterns.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 28
  },
  {
    id: 'creative-habit-29',
    question: 'Create a "pre-game" ritual for creative sessions. What 2-3 small actions could signal to your brain "we\'re entering creative time now"? Make them specific and physically doable.',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 29
  },
  {
    id: 'creative-habit-30',
    question: 'Plan your skill development approach. Will you learn through courses, experimentation, copying masters, or something else? What matches both your learning style and available resources?',
    category: 'planning',
    template_id: 'creative-habit',
    question_number: 30
  },

  // ACTION QUESTIONS (31-40)
  {
    id: 'creative-habit-31',
    question: 'Commit to your first creative session this week. Write down: exact day, exact time, exact duration (even if it\'s just 15 minutes), exactly what you\'ll make or explore.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 31
  },
  {
    id: 'creative-habit-32',
    question: 'Set up your creative space today. Don\'t wait for perfect - just arrange what you have so that starting tomorrow requires one less decision. Document what you did.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 32
  },
  {
    id: 'creative-habit-33',
    question: 'Create your idea capture system. Choose one method (phone note, small notebook, voice memos, whatever you\'ll actually use) and put it in place today. Test it by capturing your next 3 ideas.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 33
  },
  {
    id: 'creative-habit-34',
    question: 'Schedule your first "creative appointment" in your calendar. Treat it like a doctor\'s appointment - same level of commitment. Set a reminder. Tell someone about it if that helps.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 34
  },
  {
    id: 'creative-habit-35',
    question: 'Start a creative log. Create a simple tracking system: date, time spent, what you did, how you felt. Keep it minimal - you\'ll actually maintain simple. Log your next session.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 35
  },
  {
    id: 'creative-habit-36',
    question: 'Join one community related to your creative interest this week. Find a subreddit, Discord, local meetup, or online forum. Lurk for a few days, then introduce yourself.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 36
  },
  {
    id: 'creative-habit-37',
    question: 'Complete one "bad" creative thing on purpose. Set a timer for 20 minutes and make something intentionally mediocre. Notice what happens to perfectionism when you\'re not trying.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 37
  },
  {
    id: 'creative-habit-38',
    question: 'Experiment with different creative windows. Try the same activity at three different times of day this week. Document which felt easiest, which produced the most flow, which you\'d most likely repeat.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 38
  },
  {
    id: 'creative-habit-39',
    question: 'Create a "restart protocol" for when you miss sessions. Write specific steps for getting back on track after a break. Include: no shame, what to do first, how to rebuild momentum.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 39
  },
  {
    id: 'creative-habit-40',
    question: 'Share something you create, even if it feels too early. Show one person - friend, online community, anyone. Focus on the act of sharing, not the response. Document what you learn about your resistance.',
    category: 'action',
    template_id: 'creative-habit',
    question_number: 40
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for creative-habit guide...`);

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${question.question_number}`);
    }
  }

  console.log('\nVerifying insertion...');
  const { data, error } = await supabase
    .from('questions')
    .select('id, question, category')
    .eq('template_id', 'creative-habit')
    .order('question_number');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    console.log(`\n✓ Successfully inserted ${data.length} questions`);

    // Count by category
    const counts = data.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\nBreakdown by category:');
    Object.entries(counts).forEach(([category, count]) => {
      console.log(`  ${category}: ${count} questions`);
    });
  }
}

main();
