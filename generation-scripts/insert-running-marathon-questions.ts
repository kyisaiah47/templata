import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (10 questions - 28%)
  {
    id: 'running-marathon-1',
    question: 'Think about the moment you first considered running a marathon. What triggered that thought? What did you imagine it would feel like to cross the finish line?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 1
  },
  {
    id: 'running-marathon-2',
    question: 'Write about your current relationship with running. How often do you run now? When you finish a run, what do you typically feel - energized, exhausted, proud, relieved?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 2
  },
  {
    id: 'running-marathon-3',
    question: 'Recall 3 times in your life when you committed to a physically challenging goal. What did you do? How long did you stick with it? What made you stop or succeed?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 3
  },
  {
    id: 'running-marathon-4',
    question: 'Document any past running injuries or physical issues that affected your training. What happened? How did your body respond? What patterns do you notice?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 4
  },
  {
    id: 'running-marathon-5',
    question: 'Think about the longest run you\'ve ever done. What mile did it get hardest? What were you telling yourself? What got you through it?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 5
  },
  {
    id: 'running-marathon-6',
    question: 'Write about a time when you wanted to quit something physical but pushed through anyway. What was happening in your body? What changed in your mind?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 6
  },
  {
    id: 'running-marathon-7',
    question: 'Reflect on mornings when you\'ve skipped a planned workout. What reasons did you give yourself? Looking back, which were legitimate and which were excuses?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 7
  },
  {
    id: 'running-marathon-8',
    question: 'Think about someone you know who has run a marathon. What do you admire about their experience? What scares you about following a similar path?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 8
  },
  {
    id: 'running-marathon-9',
    question: 'Document times in the past year when you felt genuinely strong and capable physically. What were you doing? What conditions made you feel that way?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 9
  },
  {
    id: 'running-marathon-10',
    question: 'Write about your relationship with your body. When you push yourself physically, do you feel like you\'re working with your body or against it? What does that tell you?',
    category: 'reflection',
    template_id: 'running-marathon',
    question_number: 10
  },

  // RESEARCH QUESTIONS (8 questions - 22%)
  {
    id: 'running-marathon-11',
    question: 'Research 3 different marathon training plans (beginner, intermediate, advanced). For each, note: weekly mileage, number of days running, longest run, total weeks. Which aligns with your current fitness?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 11
  },
  {
    id: 'running-marathon-12',
    question: 'Document your current weekly schedule hour by hour. Highlight when you could realistically fit runs. How many training days per week can you commit to without disrupting work, family, or sleep?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 12
  },
  {
    id: 'running-marathon-13',
    question: 'Find 5 marathons that interest you. For each, list: date, location, course elevation, average temperature, time limit, registration cost. Which feels most achievable for your first attempt?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 13
  },
  {
    id: 'running-marathon-14',
    question: 'Research proper running form and common technique mistakes. Watch 3 videos or read 3 articles. Note: What are you doing wrong right now? What should you change first?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 14
  },
  {
    id: 'running-marathon-15',
    question: 'Investigate injury prevention strategies for marathon training. List 5 specific exercises or habits (stretching, strength work, foam rolling). Which ones address your weakest areas?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 15
  },
  {
    id: 'running-marathon-16',
    question: 'Research nutrition for marathon training - before runs, during long runs, recovery meals. Document 3 specific changes you need to make to your current eating habits.',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 16
  },
  {
    id: 'running-marathon-17',
    question: 'Look up running shoes appropriate for your gait and foot type. Visit a running store or read guides. What type of shoe do you need? How much should you budget?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 17
  },
  {
    id: 'running-marathon-18',
    question: 'Find 3 stories of people who completed their first marathon. Read their training logs or race reports. What surprised them? What do they wish they knew earlier?',
    category: 'research',
    template_id: 'running-marathon',
    question_number: 18
  },

  // PLANNING QUESTIONS (10 questions - 28%)
  {
    id: 'running-marathon-19',
    question: 'Create a timeline working backwards from your target marathon date. When do you need to start training? What are the milestone weeks (first 10-miler, first 20-miler, taper week)?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 19
  },
  {
    id: 'running-marathon-20',
    question: 'Map out your weekly training schedule. Which days for easy runs, speed work, long runs, rest? How does this fit with your work meetings, family obligations, social life?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 20
  },
  {
    id: 'running-marathon-21',
    question: 'Plan your strategy for the hardest training weeks. When you\'re exhausted or injured or doubting, what will you tell yourself? Who will you reach out to?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 21
  },
  {
    id: 'running-marathon-22',
    question: 'Design your injury prevention routine. Which stretches, strength exercises, or recovery practices will you do daily? When exactly will you do them?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 22
  },
  {
    id: 'running-marathon-23',
    question: 'Outline your nutrition plan for training. What will you eat before morning runs? After long runs? How will you fuel during runs over 90 minutes?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 23
  },
  {
    id: 'running-marathon-24',
    question: 'Plan for weather challenges. What will you do when it\'s raining? Too hot? Dark outside? What gear do you need for different conditions?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 24
  },
  {
    id: 'running-marathon-25',
    question: 'Create your race day logistics plan. How will you get to the start? What will you eat that morning? What gear will you bring? Who will meet you at the finish?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 25
  },
  {
    id: 'running-marathon-26',
    question: 'Develop your pacing strategy. What pace will you target for easy runs? Long runs? Race day? How will you hold yourself back in the early miles?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 26
  },
  {
    id: 'running-marathon-27',
    question: 'Plan how you\'ll track progress. What metrics matter - weekly mileage, pace improvement, how you feel? How will you know if you need to adjust your plan?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 27
  },
  {
    id: 'running-marathon-28',
    question: 'Strategize how to handle setbacks. If you miss a week due to illness, injury, or life chaos, what\'s your comeback plan? How will you adjust without giving up?',
    category: 'planning',
    template_id: 'running-marathon',
    question_number: 28
  },

  // ACTION QUESTIONS (8 questions - 22%)
  {
    id: 'running-marathon-29',
    question: 'Register for your target marathon right now. Write down the confirmation number, date, and location. How does making it official change how you feel?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 29
  },
  {
    id: 'running-marathon-30',
    question: 'Schedule your first training week in your calendar. Block specific times for each run. What will you do tomorrow for your first workout?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 30
  },
  {
    id: 'running-marathon-31',
    question: 'Get properly fitted for running shoes this week. Book an appointment at a running store or order shoes based on your gait analysis. What day will you do this?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 31
  },
  {
    id: 'running-marathon-32',
    question: 'Tell 3 specific people about your marathon goal today. Who will you tell? What will you ask them for (accountability, training company, race day support)?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 32
  },
  {
    id: 'running-marathon-33',
    question: 'Join a running community this week - find a local running group, online community, or training partner. Where will you look? When will you show up?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 33
  },
  {
    id: 'running-marathon-34',
    question: 'Complete your baseline assessment run. Go run 3 miles at a comfortable pace and note: your time, how you felt, where it got hard. When will you do this?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 34
  },
  {
    id: 'running-marathon-35',
    question: 'Set up your tracking system today. Choose an app, journal, or spreadsheet. Log your first workout. What system will you use?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 35
  },
  {
    id: 'running-marathon-36',
    question: 'Commit to your first milestone. What will you accomplish in the next 4 weeks? Write it down where you\'ll see it daily. What\'s your commitment?',
    category: 'action',
    template_id: 'running-marathon',
    question_number: 36
  }
];

async function insertQuestions() {
  console.log('Checking for existing questions...');

  // Check if questions already exist
  const { data: existing } = await supabase
    .from('questions')
    .select('id')
    .eq('template_id', 'running-marathon');

  if (existing && existing.length > 0) {
    console.log(`Found ${existing.length} existing questions. Deleting...`);
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('template_id', 'running-marathon');

    if (deleteError) {
      console.error('Error deleting existing questions:', deleteError);
      return;
    }
    console.log('Existing questions deleted.');
  }

  console.log(`Inserting ${questions.length} questions...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
  } else {
    console.log('Successfully inserted all questions!');
    console.log('\n=== SUMMARY ===');
    console.log(`Total questions: ${questions.length}`);

    const breakdown = questions.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\nBreakdown by category:');
    Object.entries(breakdown).forEach(([category, count]) => {
      const percentage = ((count / questions.length) * 100).toFixed(1);
      console.log(`  ${category}: ${count} questions (${percentage}%)`);
    });
  }
}

insertQuestions();
