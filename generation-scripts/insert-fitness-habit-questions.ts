import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-10) - 25%
  {
    id: 'fitness-habit-1',
    question: 'Write about the last 3 times you tried to start exercising regularly. For each attempt, note: What type of exercise did you choose? How long did it last? What specific moment or reason made you stop?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 1
  },
  {
    id: 'fitness-habit-2',
    question: 'Think about the past month. List 3-5 moments when you felt physically energized or strong - even small moments like carrying groceries, playing with kids, or walking up stairs without getting winded. What were you doing? How did it feel different from your usual baseline?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 2
  },
  {
    id: 'fitness-habit-3',
    question: 'Reflect on your typical week. Write down what time you wake up, when you feel most alert, and when you feel most drained. Also note: when do you currently waste time (scrolling, TV, etc.)? What pattern do you see about when you have actual free time versus when you think you do?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 3
  },
  {
    id: 'fitness-habit-4',
    question: 'Document the last 5 times you chose not to exercise when you had planned to. For each time, write: What was your internal excuse? What did you do instead? Looking back, was the excuse legitimate or avoidance? What does this pattern tell you?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 4
  },
  {
    id: 'fitness-habit-5',
    question: 'Think about someone you know personally who exercises regularly (not a celebrity or influencer). Write down: What type of exercise do they do? When do they do it? What have they said about how they stay consistent? What about their approach feels realistic or unrealistic for you?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 5
  },
  {
    id: 'fitness-habit-6',
    question: 'Reflect on the last time you felt genuinely proud of your body - not how it looked, but what it DID. What was the moment? What had you accomplished? How long ago was it? What would it take to feel that way again?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 6
  },
  {
    id: 'fitness-habit-7',
    question: 'Write about your relationship with "should" around exercise. Complete these sentences: "I should exercise because..." "People would think I\'m lazy if..." "I feel guilty when..." What stories are you telling yourself about what exercise means about you as a person?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 7
  },
  {
    id: 'fitness-habit-8',
    question: 'Document the physical activities you actually enjoyed as a kid or teen - before exercise became a "should." What did you do? Who were you with? What made it fun? What\'s the closest adult equivalent you could imagine actually enjoying?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 8
  },
  {
    id: 'fitness-habit-9',
    question: 'Think about the last time you stuck with any new habit successfully (could be anything - meditation, reading, a morning routine). What made it stick? How long did it take to feel automatic? What specific strategies did you use? How is fitness different or similar?',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 9
  },
  {
    id: 'fitness-habit-10',
    question: 'Reflect on what you actually want from fitness, beyond the obvious "lose weight" or "get healthy." Complete this: In 6 months, if this fitness habit works, I want to feel... When I imagine my ideal self, what am I able to DO that I can\'t do now? Be specific about moments and feelings, not just appearance.',
    category: 'reflection',
    template_id: 'fitness-habit',
    question_number: 10
  },

  // Research Questions (11-19) - 22%
  {
    id: 'fitness-habit-11',
    question: 'Research 5 different types of exercise you could realistically do (running, yoga, weightlifting, dance classes, swimming, walking, sports, etc.). For each, document: Time required per session, cost (free to $$), skill level needed, and whether it requires other people or special equipment.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 11
  },
  {
    id: 'fitness-habit-12',
    question: 'Map out your actual available time windows this week. For each day, write: What time you wake up, what time you get home, when you eat meals, when you have hard commitments. Highlight 3-5 realistic 20-30 minute windows when exercise could actually happen. Not ideal time - ACTUAL time.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 12
  },
  {
    id: 'fitness-habit-13',
    question: 'Research workout options within 10 minutes of where you live or work. List: Gyms (with monthly cost), parks or trails, public pools, community centers, studios. For each, note hours of operation and whether you\'d realistically go there given the location and your routine.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 13
  },
  {
    id: 'fitness-habit-14',
    question: 'Investigate the actual cost of different exercise options. Create a list: gym membership ($X/month), home equipment ($X one-time), class packages ($X/month), apps or programs ($X/month), workout clothes you\'d need ($X). What\'s the minimum viable investment to start versus the "someday when I\'m serious" version?',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 14
  },
  {
    id: 'fitness-habit-15',
    question: 'Research beginner programs for your top 2-3 exercise types. For each, document: What a typical session looks like, how long until you see results, what the learning curve is like, and what beginners say about the first month. Screenshot or save 2-3 specific beginner programs you could start tomorrow.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 15
  },
  {
    id: 'fitness-habit-16',
    question: 'Identify 3 people in your life who you could potentially exercise with or who would support this goal. For each person, write: Their current fitness level, their schedule flexibility, whether they\'d push you or go at your pace, and whether being around them would make you more or less likely to stick with it.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 16
  },
  {
    id: 'fitness-habit-17',
    question: 'Document your current physical starting point honestly. Note: Any injuries or physical limitations, medications that affect exercise, when you last saw a doctor, how you feel after climbing two flights of stairs, and how long you can walk comfortably. This is your baseline - no judgment, just data.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 17
  },
  {
    id: 'fitness-habit-18',
    question: 'Research what "starting small" actually means for your chosen exercise type. Find 3 examples of beginner routines and write down: The time commitment (actual minutes), the frequency (days per week), what counts as "done," and what the first week typically looks like versus month 3.',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 18
  },
  {
    id: 'fitness-habit-19',
    question: 'Investigate your current obstacles. For the next 3 days, write down every time you think "I should exercise" but don\'t. Note the time, what you were doing, what stopped you (tired, no time, no motivation, etc.), and what you did instead. What patterns emerge about your actual barriers versus what you thought they were?',
    category: 'research',
    template_id: 'fitness-habit',
    question_number: 19
  },

  // Planning Questions (20-30) - 28%
  {
    id: 'fitness-habit-20',
    question: 'Design your "minimum viable workout" - the absolute smallest version that counts as a win. Write out: Exactly what you\'ll do (specific exercises or activity), how long (minutes, not "until tired"), when you\'ll do it (exact time of day), and where (specific location). Make it so easy you\'d feel silly NOT doing it.',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 20
  },
  {
    id: 'fitness-habit-21',
    question: 'Plan your trigger and reward. Complete this: "After I [existing habit], I will [exercise], and then I will [small reward]." Example: "After I make coffee, I will do 10 squats, then I will check my phone." Write 3 different versions linking exercise to something you already do daily.',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 21
  },
  {
    id: 'fitness-habit-22',
    question: 'Create your excuse prevention plan. List your top 3 most likely excuses (too tired, no time, too busy, etc.). For each one, write: The signal that excuse is coming, a pre-planned response, and the minimum you\'ll do anyway. Example: "Too tired" → Response: Do just 5 minutes, or switch to gentle stretching.',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 22
  },
  {
    id: 'fitness-habit-23',
    question: 'Design your environment for success. Write down: What you\'ll prepare the night before (clothes, water bottle, etc.), what you\'ll remove or hide (phone, TV remote during workout time), and what visual reminders you\'ll place where you\'ll see them. Make the good choice easier than the lazy choice.',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 23
  },
  {
    id: 'fitness-habit-24',
    question: 'Plan for the motivation crash. Imagine it\'s week 3, you\'ve missed 2 days, and you feel like quitting. Write down now: What you\'ll tell yourself, who you\'ll tell about the slip (accountability person), what "getting back on track" looks like (exactly what you\'ll do the next day), and what doesn\'t mean failure (missing one day vs missing one week).',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 24
  },
  {
    id: 'fitness-habit-25',
    question: 'Create your progression plan. Write down: Week 1-2 (minimum viable version), Week 3-4 (what you\'ll add if it\'s going well), Week 5-8 (the sustainable long-term version). What specific signal will tell you it\'s time to level up versus when to stay at the current level?',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 25
  },
  {
    id: 'fitness-habit-26',
    question: 'Plan your tracking method. Decide: Will you use an app, a calendar, a journal, or something else? Write down exactly what you\'ll track (days completed? how you felt? what you did?) and when you\'ll review it (daily check-in? weekly summary?). What will count as success - consistency or performance?',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 26
  },
  {
    id: 'fitness-habit-27',
    question: 'Design your flexibility rules. Define what "counts" in different scenarios: On travel days, what\'s the minimum? On sick days, what\'s the rule? On unusually busy days, what\'s the fallback? Write down 3-4 scenarios and your if/then plans so you don\'t have to decide in the moment.',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 27
  },
  {
    id: 'fitness-habit-28',
    question: 'Plan your social strategy. Decide: Who will you tell about this goal? Who will you NOT tell? Who would make this harder with their comments or "helpful" advice? How will you handle people who undermine you ("one skip won\'t hurt") or overpush you ("you should do more")? Write out your boundaries.',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 28
  },
  {
    id: 'fitness-habit-29',
    question: 'Create your definition of success for the first 30 days. Write down: How many days per week counts as winning (be honest - not 7), what progress you expect to see (energy? strength? consistency?), and what would make you call this experiment successful even if you don\'t hit every goal. What\'s good enough?',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 29
  },
  {
    id: 'fitness-habit-30',
    question: 'Plan your identity shift. Complete these sentences in present tense: "I am someone who..." "My body is..." "Exercise is..." Write the identity story of who you\'re becoming, not who you were. Read this daily for the first 2 weeks. What do you want to believe about yourself that you don\'t yet?',
    category: 'planning',
    template_id: 'fitness-habit',
    question_number: 30
  },

  // Action Questions (31-40) - 25%
  {
    id: 'fitness-habit-31',
    question: 'Schedule your first 7 sessions right now. Open your calendar and block specific times for each of the next 7 days. Write down: Day, time, location, and what you\'ll do. Treat these like doctor appointments - non-negotiable unless there\'s an emergency. What day is session #1?',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 31
  },
  {
    id: 'fitness-habit-32',
    question: 'Prepare your workout space or gear today. Write down what you need to do before tomorrow: Buy or dig out workout clothes? Download an app? Clear a space in your living room? Charge headphones? Do it now and write "DONE" next to each item. What\'s the specific next physical action?',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 32
  },
  {
    id: 'fitness-habit-33',
    question: 'Tell someone about your plan. Write down: Who you\'ll tell (choose wisely - someone supportive but honest), when you\'ll tell them (today), exactly what you\'ll say, and what specific support you want from them (check-ins? join you? just listen?). Then actually send the message.',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 33
  },
  {
    id: 'fitness-habit-34',
    question: 'Create your workout checklist or visual tracker. Right now, make: A calendar where you\'ll mark X\'s, a note where you\'ll track how you feel, or a simple checklist. Put it somewhere you\'ll see it daily (bathroom mirror, fridge, phone wallpaper). What will you use and where will you put it?',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 34
  },
  {
    id: 'fitness-habit-35',
    question: 'Do a test run of your minimum viable workout right now. Actually do it - even if it\'s just 5 minutes. Then write: How long did it actually take? What felt hard? What felt easier than expected? What will you adjust for the real first session? Proof you can do this.',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 35
  },
  {
    id: 'fitness-habit-36',
    question: 'Set up your environment tonight for tomorrow\'s workout. Physically lay out: Clothes you\'ll wear, water bottle, any equipment, your tracking method, your phone/music setup. Take a photo of everything ready to go. Tomorrow morning should require zero decisions - just execute.',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 36
  },
  {
    id: 'fitness-habit-37',
    question: 'Create your contingency plan for the first likely obstacle. Write down: What\'s the #1 thing most likely to derail you in week 1? (Meeting runs late? Too tired? Forgot?) What will you do instead in that specific scenario? Write the backup plan now - if X happens, I will Y.',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 37
  },
  {
    id: 'fitness-habit-38',
    question: 'Set 3 specific check-in points. Write down the exact dates: Day 3 (are you actually doing it?), Day 7 (what needs to adjust?), Day 30 (is this sustainable?). Put these in your calendar with prompts: "Review fitness habit - what\'s working and what\'s not?" When are these 3 dates?',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 38
  },
  {
    id: 'fitness-habit-39',
    question: 'Define your restart protocol now. Write down: If you miss one day, what\'s the rule? (Example: "Do it the next day, no exceptions") If you miss 3 days in a row, what\'s the reset process? Having the rule decided now means no negotiating with yourself later. What\'s your restart protocol?',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 39
  },
  {
    id: 'fitness-habit-40',
    question: 'Write your day-1 commitment. Complete this sentence and put it where you\'ll see it: "On [date], at [time], I will [specific action] at [location]. I am doing this because [the real reason - not "should" but actual want]." Sign and date it. This is your contract with yourself.',
    category: 'action',
    template_id: 'fitness-habit',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for fitness-habit...`);

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
    .eq('template_id', 'fitness-habit');

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

    console.log('\n=== Verification Summary ===');
    console.log(`Total questions: ${verifyData.length}`);
    console.log(`Foundation (Reflection): ${counts.reflection} (${(counts.reflection / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action / verifyData.length * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
