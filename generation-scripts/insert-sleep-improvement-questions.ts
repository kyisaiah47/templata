import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-10) - 25%
  {
    id: 'sleep-improvement-1',
    question: 'Write about 3 specific nights in the past month when you slept really well. What was different about those days? What did you do (or not do) leading up to those nights?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 1
  },
  {
    id: 'sleep-improvement-2',
    question: 'Reflect on the past 2 weeks. Document what time you actually went to bed each night and what you were doing in the hour before. What patterns do you notice about when you stay up later than you planned?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 2
  },
  {
    id: 'sleep-improvement-3',
    question: 'Think about your childhood and teenage years. Write about how you slept back then compared to now. When did your sleep start feeling like a problem? What changed in your life around that time?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 3
  },
  {
    id: 'sleep-improvement-4',
    question: 'Document the last 5 times you woke up feeling genuinely rested. What time did you wake up? How many hours had you slept? What made those mornings feel different from your usual wake-ups?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 4
  },
  {
    id: 'sleep-improvement-5',
    question: 'Reflect on a typical night when you can\'t fall asleep. Walk through what\'s actually happening in your mind and body. What are you thinking about? Where do you feel tension? How long does this usually last?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 5
  },
  {
    id: 'sleep-improvement-6',
    question: 'Write about your relationship with sleep over the past year. When you think about bedtime, what emotion comes up first - relief, dread, anxiety, indifference? What\'s the story you tell yourself about why you sleep the way you do?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 6
  },
  {
    id: 'sleep-improvement-7',
    question: 'Think about the last time you had a full week of good sleep (if ever). What was going on in your life? Were you on vacation, at home, somewhere else? What conditions existed that week that don\'t exist now?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 7
  },
  {
    id: 'sleep-improvement-8',
    question: 'Document 3 moments in the past month when you felt exhausted during the day. What time was it? What were you trying to do? How did the poor sleep from the night before actually affect your day?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 8
  },
  {
    id: 'sleep-improvement-9',
    question: 'Reflect on what you\'ve already tried to fix your sleep. List every strategy, app, supplement, or change you\'ve attempted. For each, write: how long you tried it, why you stopped, and whether anything about it actually helped.',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 9
  },
  {
    id: 'sleep-improvement-10',
    question: 'Write about Sunday nights specifically over the past few months. How do you sleep Sunday night compared to other nights? What\'s different about your thoughts, feelings, or behaviors on Sundays?',
    category: 'reflection',
    template_id: 'sleep-improvement',
    question_number: 10
  },
  // Research Questions (11-19) - 22%
  {
    id: 'sleep-improvement-11',
    question: 'Document your sleep environment right now. Walk through your bedroom and write down: light sources (windows, electronics, street lights), noise sources (traffic, neighbors, partner, pets), temperature, mattress age, pillow situation. What\'s one thing that bothers you but you\'ve been ignoring?',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 11
  },
  {
    id: 'sleep-improvement-12',
    question: 'Track your caffeine intake for the past 3 days. List every caffeinated item (coffee, tea, soda, energy drinks, chocolate) with the time you consumed it. What\'s your last caffeine of the day typically, and how many hours before bed is that?',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 12
  },
  {
    id: 'sleep-improvement-13',
    question: 'Research your evening screen time by checking your phone\'s screen time report for the past week. What time do you typically pick up your phone in bed? Which apps do you use most in the hour before trying to sleep? How many minutes total are you on screens after 9pm?',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 13
  },
  {
    id: 'sleep-improvement-14',
    question: 'Document your exercise patterns over the past 2 weeks. On which days did you exercise? What time of day? What intensity? On the days you exercised, did you sleep better or worse that night? Write what you notice.',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 14
  },
  {
    id: 'sleep-improvement-15',
    question: 'Create a log of evening eating and drinking for the past week. For each night, write: what you ate/drank after 7pm, what time you finished eating, and how you slept that night. What patterns do you see between late meals/drinks and sleep quality?',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 15
  },
  {
    id: 'sleep-improvement-16',
    question: 'Research your current sleep schedule variability. For the past 2 weeks, write down what time you went to bed and woke up each day (including weekends). Calculate the range - what\'s the biggest difference between your earliest and latest bedtime? Same for wake time.',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 16
  },
  {
    id: 'sleep-improvement-17',
    question: 'Document any health factors that might affect your sleep. List: current medications and when you take them, any diagnosed conditions, pain or discomfort you experience at night, whether you snore or wake up gasping, and your typical alcohol consumption patterns.',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 17
  },
  {
    id: 'sleep-improvement-18',
    question: 'Investigate your bedroom temperature across the night. What\'s your thermostat set to (if you have one)? Do you wake up hot or cold? What are you wearing to bed? How many blankets? Write down whether temperature might be disrupting your sleep without you realizing it.',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 18
  },
  {
    id: 'sleep-improvement-19',
    question: 'Research your work schedule and life constraints. Write down: what time you must wake up on weekdays, how much flexibility you have with this time, whether your schedule is consistent week-to-week, and any obligations (kids, pets, caregiving) that affect when you can sleep.',
    category: 'research',
    template_id: 'sleep-improvement',
    question_number: 19
  },
  // Planning Questions (20-30) - 28%
  {
    id: 'sleep-improvement-20',
    question: 'Based on everything you\'ve documented, identify your top 3 sleep disruptors - the specific things that most consistently interfere with your sleep. For each, write one realistic change you could make that would address it.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 20
  },
  {
    id: 'sleep-improvement-21',
    question: 'Design your ideal evening wind-down routine working backwards from your target sleep time. Write down: what time you need to be asleep, what time you\'ll get in bed, what time you\'ll start winding down, and what 3-5 specific activities you\'ll do in that wind-down period.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 21
  },
  {
    id: 'sleep-improvement-22',
    question: 'Plan your caffeine strategy. Based on your current intake and sleep patterns, write: what\'s a realistic caffeine cutoff time for you, how you\'ll handle the afternoon slump without caffeine, and what alternatives you\'ll try (tea, water, walk, etc.).',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 22
  },
  {
    id: 'sleep-improvement-23',
    question: 'Create your bedroom environment improvement plan. From your environment audit, list 3 changes in priority order: easiest/quickest win, medium investment, and bigger project. For each, estimate cost and time to implement.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 23
  },
  {
    id: 'sleep-improvement-24',
    question: 'Design a realistic sleep schedule that accounts for your actual life. Write down: your ideal bedtime and wake time, how this compares to your current pattern, what barriers exist to this schedule (partner, kids, work, social life), and how you\'ll handle weekends.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 24
  },
  {
    id: 'sleep-improvement-25',
    question: 'Plan how you\'ll handle racing thoughts at night. Write down 3 specific techniques you\'ll try when your mind won\'t shut off (brain dump journal, worry list for tomorrow, breathing exercise, etc.). For each, write exactly where you\'ll keep the supplies and when you\'ll try it first.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 25
  },
  {
    id: 'sleep-improvement-26',
    question: 'Create your screen reduction strategy. Write down: what time you\'ll aim to stop screens, what you\'ll do instead, where you\'ll put your phone at night, and what you\'ll do if you wake up at 3am and want to check it. Be specific about your plan for those middle-of-the-night wake-ups.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 26
  },
  {
    id: 'sleep-improvement-27',
    question: 'Design your exercise-sleep optimization plan. Based on your exercise patterns and sleep data, write: what time of day you\'ll aim to work out, how you\'ll adjust intensity based on sleep quality, and what you\'ll do on days when you\'re too tired to exercise as planned.',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 27
  },
  {
    id: 'sleep-improvement-28',
    question: 'Plan how you\'ll handle the adjustment period. Write down: how many weeks you\'ll commit to trying your new routine before evaluating, how you\'ll track whether it\'s working, and what you\'ll do if you slip up or have a bad night. What\'s your plan for staying motivated when progress is slow?',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 28
  },
  {
    id: 'sleep-improvement-29',
    question: 'Create your social life balance strategy. Write about how your sleep goals fit with your actual social life - late dinners, evening events, friend hangouts. Which activities are negotiable (can shift earlier)? Which are non-negotiable (worth the occasional bad sleep)? How will you decide in the moment?',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 29
  },
  {
    id: 'sleep-improvement-30',
    question: 'Design your problem-solving framework. Write down: how you\'ll know if something isn\'t working (what metrics matter to you - how you feel, hours slept, wake-ups?), how long you\'ll try each change before adjusting, and who you\'ll talk to if you\'re stuck (doctor, therapist, sleep specialist).',
    category: 'planning',
    template_id: 'sleep-improvement',
    question_number: 30
  },
  // Action Questions (31-40) - 25%
  {
    id: 'sleep-improvement-31',
    question: 'Set up your bedroom for better sleep tonight. Before bed today, do these specific things: cover or remove light sources, adjust temperature, move your phone charger away from bed, and prepare whatever supplies you need for your wind-down routine. Document what you actually changed.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 31
  },
  {
    id: 'sleep-improvement-32',
    question: 'Create your sleep tracking system. Decide right now: will you use an app, a notebook, or a simple notes file? Set it up today. Write down the 3-5 metrics you\'ll track each morning (how you feel, hours slept, times you woke up, etc.) and commit to tracking for at least 2 weeks.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 32
  },
  {
    id: 'sleep-improvement-33',
    question: 'Schedule your caffeine cutoff experiment. Pick a specific time you\'ll stop caffeine starting today (e.g., "no caffeine after 2pm"). Write down exactly what you\'ll drink instead when cravings hit, and commit to trying this for one full week before evaluating.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 33
  },
  {
    id: 'sleep-improvement-34',
    question: 'Build your wind-down kit tonight. Gather everything you need: book, journal, tea, low lighting option, any comfort items. Put them in a specific place in your bedroom. Write down where they are and commit to using them for at least 3 nights this week.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 34
  },
  {
    id: 'sleep-improvement-35',
    question: 'Create your phone shutdown ritual. Right now, decide where your phone will sleep tonight (not on your nightstand). Set up charging there. If you use your phone as an alarm, write down what alternative you\'ll use (buy an actual alarm clock, use a watch, ask someone to wake you).',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 35
  },
  {
    id: 'sleep-improvement-36',
    question: 'Write your evening reminder. Create an alarm or calendar reminder for 1 hour before your target bedtime with the message "Start wind-down now." Set it to repeat daily. What time will this reminder go off? Turn it on before tonight.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 36
  },
  {
    id: 'sleep-improvement-37',
    question: 'Document your accountability plan. Write down: who you\'ll tell about your sleep improvement goals (partner, friend, roommate), what specifically you\'ll ask them to help with (not suggesting late plans, reminding you at bedtime, asking how you slept), and when you\'ll tell them (today?).',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 37
  },
  {
    id: 'sleep-improvement-38',
    question: 'Schedule your first check-in. Look at your calendar and pick a specific date 2 weeks from today. Set a calendar reminder titled "Sleep improvement check-in." In that reminder, include these questions: "How many nights did I follow my plan? What\'s working? What\'s not? What will I adjust?"',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 38
  },
  {
    id: 'sleep-improvement-39',
    question: 'Prepare for slip-ups tonight. Write down exactly what you\'ll do if you can\'t fall asleep after 20 minutes in bed (get up, go to another room, do your specific activity). Where will you go? What will you do? Decide now so you don\'t have to decide at midnight.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 39
  },
  {
    id: 'sleep-improvement-40',
    question: 'Start tonight. Write down your specific commitments for tonight: exact time you\'ll start wind-down, exact time you\'ll get in bed, exactly what you\'ll do in between. Then tomorrow morning, come back and write: what time you actually fell asleep, how it went, and what you\'ll do differently tonight.',
    category: 'action',
    template_id: 'sleep-improvement',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✅ Successfully inserted all questions!');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'sleep-improvement');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
  } else {
    const counts = {
      reflection: 0,
      research: 0,
      planning: 0,
      action: 0
    };

    verifyData.forEach(q => {
      counts[q.category as keyof typeof counts]++;
    });

    console.log('\n=== Verification ===');
    console.log(`Total questions: ${verifyData.length}`);
    console.log(`Reflection (Foundation): ${counts.reflection} (${((counts.reflection / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${((counts.research / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${((counts.planning / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${((counts.action / verifyData.length) * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
