import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uvcstcajctqbxddosdbf.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function insertQuestions() {
  const questions = [
    // ROUND 1: FOUNDATION QUESTIONS (9 questions, 26%)
    {
      id: 'morning-routine-1',
      question: 'Document your actual morning for the past 5 days: What time did you wake up? What was the first thing you did? When did you finally feel "awake"? Look for patterns, not ideals.',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 1
    },
    {
      id: 'morning-routine-2',
      question: 'Write about 3 mornings in the past month when you felt energized and ready by 9am. What happened differently those mornings? What time did you actually go to bed the night before?',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 2
    },
    {
      id: 'morning-routine-3',
      question: 'Think about the moment your alarm goes off. What thoughts run through your head? What emotions come up? Write the actual internal monologue, not what you wish you thought.',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 3
    },
    {
      id: 'morning-routine-4',
      question: 'List every morning routine you\'ve tried to start in the past 3 years. For each: How long did it last? What specific thing made you stop? What were you trying to fix?',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 4
    },
    {
      id: 'morning-routine-5',
      question: 'Document your energy levels by hour: Rate 1-10 how energized you feel at 6am, 7am, 8am, 9am, 10am for a typical week. When do you naturally wake up? When do you actually feel capable?',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 5
    },
    {
      id: 'morning-routine-6',
      question: 'Write about the last time you woke up excited to start the day. What were you excited about? Was it the day ahead or something about the morning itself? What made that different?',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 6
    },
    {
      id: 'morning-routine-7',
      question: 'Reflect on your childhood mornings: What was your family\'s morning like? How did your parents wake up? What patterns or beliefs about mornings did you absorb? Which still affect you?',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 7
    },
    {
      id: 'morning-routine-8',
      question: 'Think about your worst mornings in the past month. What happened the night before each one? What specific choices at 9pm, 10pm, 11pm led to that morning? Trace the pattern backward.',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 8
    },
    {
      id: 'morning-routine-9',
      question: 'Document what you\'re actually trying to get from a morning routine: More time? Less stress? Sense of control? Productivity? Write why that specific thing matters to YOUR life right now.',
      category: 'reflection',
      template_id: 'morning-routine',
      question_number: 9
    },

    // ROUND 2: RESEARCH QUESTIONS (8 questions, 23%)
    {
      id: 'morning-routine-10',
      question: 'Track your sleep data for 7 days: Bedtime, wake time, how you felt rating 1-10, what you did in the hour before bed. Look for the correlation between evening choices and morning energy.',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 10
    },
    {
      id: 'morning-routine-11',
      question: 'Research your chronotype: Take the online MCTQ or AutoMEQ assessment. Document your results. Are you actually a morning person trying to force it, or a night owl fighting your biology?',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 11
    },
    {
      id: 'morning-routine-12',
      question: 'Document every distraction and decision point in your current morning: Phone check? Snooze? What to wear? Coffee or not? Count how many micro-decisions you make before 9am.',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 12
    },
    {
      id: 'morning-routine-13',
      question: 'List 5 people you know who have mornings you admire. For each, research what they actually do: Ask them specific questions about timing, sequence, what they do on bad days.',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 13
    },
    {
      id: 'morning-routine-14',
      question: 'Audit your current morning environment: Where is your phone when you sleep? How dark is your room? Temperature? What do you see first when you wake up? Take photos and note everything.',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 14
    },
    {
      id: 'morning-routine-15',
      question: 'Document your caffeine dependency: What time is your first coffee? How do you feel before it vs after? What happens on days you skip it? Be honest about the role it plays.',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 15
    },
    {
      id: 'morning-routine-16',
      question: 'Research your actual time constraints: When do you NEED to be functional? Factor in: commute, kids, meetings, personal care. What\'s the real deadline, not the aspirational 5am wake-up?',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 16
    },
    {
      id: 'morning-routine-17',
      question: 'List every app, notification, and digital interrupt in your first hour awake. Check your screen time data. What percentage of your morning is reactive vs intentional?',
      category: 'research',
      template_id: 'morning-routine',
      question_number: 17
    },

    // ROUND 3: PLANNING QUESTIONS (10 questions, 29%)
    {
      id: 'morning-routine-18',
      question: 'Design your minimum viable morning: If you only had 15 minutes from wake to functional, what are the 3 non-negotiable things you need? Build from this foundation, not from a 2-hour ideal.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 18
    },
    {
      id: 'morning-routine-19',
      question: 'Create your evening routine blueprint: Work backward from your target wake time. What needs to happen at 10pm, 9pm, 8pm to make that morning possible? Include wind-down activities.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 19
    },
    {
      id: 'morning-routine-20',
      question: 'Plan your habit triggers: For each morning activity you want, identify the specific trigger. Not "after I wake up" but "after I put feet on floor" or "after first bathroom trip." Be concrete.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 20
    },
    {
      id: 'morning-routine-21',
      question: 'Design your phone strategy: Where will it be at night? Face up or down? Do Not Disturb settings? First app you CAN check? Last app you allow before bed? Map out specific rules.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 21
    },
    {
      id: 'morning-routine-22',
      question: 'Create your bad day protocol: When you sleep through alarms or feel terrible, what\'s version 2.0 of your routine? Plan the acceptable compromise that keeps the habit alive.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 22
    },
    {
      id: 'morning-routine-23',
      question: 'Plan your environment redesign: What needs to be visible? Hidden? Prepped the night before? Draw a layout of your bedroom and morning space with specific changes to make.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 23
    },
    {
      id: 'morning-routine-24',
      question: 'Design your wake-up mechanism: Natural light? Specific alarm sound? Sleep cycle app? Partner agreement? Alarm across the room? Choose based on your patterns, not aspirations.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 24
    },
    {
      id: 'morning-routine-25',
      question: 'Create your morning sequence: Write the exact order of activities with specific time allocations. Include: How long does each actually take? What can be done simultaneously? Where are the bottlenecks?',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 25
    },
    {
      id: 'morning-routine-26',
      question: 'Plan for your specific obstacles: Kids? Partner\'s schedule? Pets? Anxiety? Depression? Design workarounds for YOUR specific constraints, not a generic routine.',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 26
    },
    {
      id: 'morning-routine-27',
      question: 'Design your motivation system: What will you track? How will you measure success? What reward makes sense? How will you remember WHY you\'re doing this on day 23 when it\'s hard?',
      category: 'planning',
      template_id: 'morning-routine',
      question_number: 27
    },

    // ROUND 4: ACTION QUESTIONS (8 questions, 23%)
    {
      id: 'morning-routine-28',
      question: 'Set up your experiment: Choose 1 specific change to test for the next 7 days. Document your hypothesis: "If I do X, I expect Y to happen." Commit to the exact timeframe.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 28
    },
    {
      id: 'morning-routine-29',
      question: 'Prepare tonight: Do 3 things right now that make tomorrow morning easier. Lay out clothes? Prep coffee? Set phone location? Charge devices? Do them, then document what you did.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 29
    },
    {
      id: 'morning-routine-30',
      question: 'Create your tracking system: Design a simple daily check-in. What 3 data points will you track each morning? Set up the spreadsheet, app, or journal page you\'ll actually use.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 30
    },
    {
      id: 'morning-routine-31',
      question: 'Schedule your first review: Put a calendar event for 7 days from now. Write what you\'ll evaluate: Did the routine happen? How did you feel? What needs adjustment? Set the actual reminder.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 31
    },
    {
      id: 'morning-routine-32',
      question: 'Implement one environment change today: Move your phone charger, set up your coffee maker differently, adjust your curtains - make ONE physical change that supports your new routine.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 32
    },
    {
      id: 'morning-routine-33',
      question: 'Set your bedtime alarm: Not your wake-up alarm - your GO TO BED alarm. Pick a time that allows your target sleep duration. Set it now. Decide what you\'ll do when it goes off.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 33
    },
    {
      id: 'morning-routine-34',
      question: 'Write your commitment statement: "For the next 7 days, I will wake up at [time] and immediately do [action] because [reason that matters to me]." Put it where you\'ll see it when the alarm rings.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 34
    },
    {
      id: 'morning-routine-35',
      question: 'Identify your accountability: Who will know you\'re doing this? How will they know? Set up the specific check-in method - text, shared tracker, morning photo - that creates real commitment.',
      category: 'action',
      template_id: 'morning-routine',
      question_number: 35
    }
  ];

  console.log(`Inserting ${questions.length} questions...`);

  for (const q of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(q);

    if (error) {
      console.error(`Error inserting question ${q.id}:`, error);
      throw error;
    }
    console.log(`✓ Inserted ${q.id}`);
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify counts
  const { data: allQuestions, error: countError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'morning-routine');

  if (countError) throw countError;

  const counts = {
    reflection: allQuestions.filter(q => q.category === 'reflection').length,
    research: allQuestions.filter(q => q.category === 'research').length,
    planning: allQuestions.filter(q => q.category === 'planning').length,
    action: allQuestions.filter(q => q.category === 'action').length
  };

  console.log('\nQuestion Breakdown:');
  console.log(`Foundation (reflection): ${counts.reflection} questions (${Math.round(counts.reflection/questions.length*100)}%)`);
  console.log(`Research: ${counts.research} questions (${Math.round(counts.research/questions.length*100)}%)`);
  console.log(`Planning: ${counts.planning} questions (${Math.round(counts.planning/questions.length*100)}%)`);
  console.log(`Action: ${counts.action} questions (${Math.round(counts.action/questions.length*100)}%)`);
  console.log(`Total: ${questions.length} questions`);
}

insertQuestions().catch(console.error);
