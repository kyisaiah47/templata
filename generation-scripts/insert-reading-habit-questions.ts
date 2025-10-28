import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-9) - 25%
  {
    id: 'reading-habit-1',
    question: 'Write about the last 3 books you actually finished. For each: When did you read it? Where were you? What made you keep reading instead of abandoning it halfway through?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 1
  },
  {
    id: 'reading-habit-2',
    question: 'Think about the past 6 months. List 3-5 specific moments when you wanted to read but didn\'t. What were you doing instead? What stopped you from picking up a book in that moment?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 2
  },
  {
    id: 'reading-habit-3',
    question: 'Reflect on your childhood or teenage reading habits. Write about a time when you were completely absorbed in a book - lost track of time, stayed up late, couldn\'t put it down. What was different then compared to now?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 3
  },
  {
    id: 'reading-habit-4',
    question: 'Document the last 5 books you started but never finished. For each: How far did you get? What made you stop? Looking at the pattern, what does this tell you about what you actually want to read vs what you think you should read?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 4
  },
  {
    id: 'reading-habit-5',
    question: 'Write about your current evening routine from dinner to bed. Be specific about what you actually do (not what you wish you did). Where in this routine could reading fit naturally without feeling forced?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 5
  },
  {
    id: 'reading-habit-6',
    question: 'Think about the last time someone asked "What are you reading?" or "Read any good books lately?" Write down exactly how you felt and what you said. What does your response reveal about how you see yourself as a reader?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 6
  },
  {
    id: 'reading-habit-7',
    question: 'List the last 10 times you consumed a story or learned something new (books, articles, podcasts, videos, social media). How many were reading vs other formats? What does this pattern tell you about how you actually prefer to learn?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 7
  },
  {
    id: 'reading-habit-8',
    question: 'Reflect on your attention span over the past month. Write about 3 different activities: one where you were completely focused, one where you were somewhat distracted, and one where you couldn\'t focus at all. What environmental factors were different in each situation?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 8
  },
  {
    id: 'reading-habit-9',
    question: 'Document a book or genre that you secretly enjoy but feel embarrassed about or \'shouldn\'t\' read. What makes you feel that way? Who told you (directly or indirectly) that this kind of reading \'doesn\'t count\'?',
    category: 'reflection',
    template_id: 'reading-habit',
    question_number: 9
  },
  // Research Questions (10-17) - 22%
  {
    id: 'reading-habit-10',
    question: 'Track your phone/screen time for the past week. Document: total hours per day, top 3 apps, and what time of day you use them most. If you converted just 20% of this time to reading, how many minutes per day would that be?',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 10
  },
  {
    id: 'reading-habit-11',
    question: 'Map out your typical weekday hour-by-hour from wake-up to sleep. For each block, mark: high energy vs low energy, alone vs with others, required vs flexible time. Identify 3 specific windows where reading could realistically fit.',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 11
  },
  {
    id: 'reading-habit-12',
    question: 'Research your reading environment. For each place you spend time (bedroom, living room, commute, lunch break, etc.), note: lighting quality, noise level, seating comfort, phone accessibility, what you naturally do there now. Which space is most reading-friendly?',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 12
  },
  {
    id: 'reading-habit-13',
    question: 'Document your current book discovery process. List the last 5 books you added to your reading list or bought. For each: where did you hear about it? Why did it appeal to you? Have you started it? This reveals your actual book selection pattern.',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 13
  },
  {
    id: 'reading-habit-14',
    question: 'Survey your physical and digital reading setup. List: what books do you own but haven\'t read? What\'s on your e-reader? How many library apps do you have? Where are books physically located in your home? Is your setup making reading easier or harder?',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 14
  },
  {
    id: 'reading-habit-15',
    question: 'Research 5 books you\'ve been \'meaning to read\' for over 6 months. For each: write down why you think you should read it, who recommended it, and honestly whether you actually want to read it or feel obligated. What\'s the pattern?',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 15
  },
  {
    id: 'reading-habit-16',
    question: 'Track a single day in detail. Every time you wait (in line, for an appointment, for food, for someone) or have a transition moment (between meetings, after email, before bed), note: how long was it? What did you do? Could you have read instead?',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 16
  },
  {
    id: 'reading-habit-17',
    question: 'Investigate your retention from past reading. Pick 3 books you finished in the past year. For each: what was it about? What\'s one specific thing you remember? Did you take notes? Did you apply anything? This shows your current retention baseline.',
    category: 'research',
    template_id: 'reading-habit',
    question_number: 17
  },
  // Planning Questions (18-27) - 28%
  {
    id: 'reading-habit-18',
    question: 'Design your minimum viable reading habit. Based on your actual schedule and energy, write down: how many pages or minutes feels achievable daily without willpower? What time of day? What triggers it (after coffee, before bed, during lunch)? Make it so small it feels almost too easy.',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 18
  },
  {
    id: 'reading-habit-19',
    question: 'Create your book selection filter. Based on what you\'ve learned about books you finish vs abandon, write 3-5 criteria a book must meet for you to actually read it (e.g., under 300 pages, fast-paced, recommended by specific person, fiction not self-help). This is YOUR filter, not what you think it should be.',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 19
  },
  {
    id: 'reading-habit-20',
    question: 'Plan your reading environment optimization. List 3 specific changes you\'ll make to one space to make reading the easiest option: what will you add (book stand, better light, bookmark)? What will you remove or hide (phone charger, TV remote)? Be concrete.',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 20
  },
  {
    id: 'reading-habit-21',
    question: 'Design your book rotation system. Write down: how many books will you have \'in progress\' at once? What types (one fiction, one non-fiction)? Where will each live (one by bed, one in bag)? How will you decide what to read when?',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 21
  },
  {
    id: 'reading-habit-22',
    question: 'Create your reading momentum strategy. Write out what you\'ll do when you finish a book to maintain momentum: do you start the next one immediately? Take a break? Write notes first? Also, what you\'ll do when you want to quit a book: give it 50 pages? Drop immediately? Set it aside for later?',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 22
  },
  {
    id: 'reading-habit-23',
    question: 'Plan your retention approach. Based on why you want to read more, choose your method: will you take notes while reading? Highlight and review after? Discuss with someone? Write summaries? Do nothing and just enjoy? Match the method to your actual goal.',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 23
  },
  {
    id: 'reading-habit-24',
    question: 'Design your progress tracking. Write down what metric actually motivates you: pages per day? Books per month? Time spent reading? Streak of consecutive days? Pick one you\'ll actually check, and decide where you\'ll track it (app, journal, calendar).',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 24
  },
  {
    id: 'reading-habit-25',
    question: 'Create your \'reading instead of scrolling\' plan. Pick your #1 mindless scrolling trigger (waiting, bored, before bed, morning coffee). Write down the specific physical action you\'ll take to choose reading instead: where will the book be? What will you do with your phone?',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 25
  },
  {
    id: 'reading-habit-26',
    question: 'Plan for obstacles. List 3 specific scenarios that will definitely derail your reading (travel, busy work week, visitors, illness). For each, write your backup plan: what\'s the absolute minimum to maintain the habit? What counts as \'good enough\' during that time?',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 26
  },
  {
    id: 'reading-habit-27',
    question: 'Design your accountability system. Write down how you\'ll maintain this habit: will you tell someone your goal? Join a book club? Track publicly? Schedule it in your calendar? Have a weekly review? Pick one method that matches how you actually stay accountable.',
    category: 'planning',
    template_id: 'reading-habit',
    question_number: 27
  },
  // Action Questions (28-35) - 25%
  {
    id: 'reading-habit-28',
    question: 'Choose your first book right now. Based on your selection criteria and what you actually finish, write down: the specific title you\'ll start with, why this one will work for you, and where you\'ll get it (buy, library, already own). Commit to one specific book.',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 28
  },
  {
    id: 'reading-habit-29',
    question: 'Set up your reading space today. Write down the 3 actions you\'ll take in the next 24 hours: what will you physically move, add, or remove to make your chosen reading spot more inviting? Be specific (e.g., \'put phone charger in different room,\' not \'reduce distractions\').',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 29
  },
  {
    id: 'reading-habit-30',
    question: 'Schedule your first reading session. Write down: the exact date and time of your first reading block (within the next 48 hours), how long (start with 10-20 minutes), where you\'ll be, and what you\'ll do 5 minutes before to prepare (make tea, turn off phone, etc.).',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 30
  },
  {
    id: 'reading-habit-31',
    question: 'Create your tracking system now. Open whatever tool you chose (app, calendar, notebook) and set it up: create the entry for today, define what you\'re measuring, and write down what \'success\' looks like for this week. Make it concrete enough that you\'ll know if you did it.',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 31
  },
  {
    id: 'reading-habit-32',
    question: 'Eliminate the biggest obstacle. Based on what you know stops you from reading, take one physical action today: delete an app, move your phone charger, buy a book light, set a phone reminder, tell someone your plan. Do the single action that removes your #1 barrier.',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 32
  },
  {
    id: 'reading-habit-33',
    question: 'Start your book today. Read the first chapter or 20 pages of your chosen book before the end of today. Afterward, write down: did you enjoy it? Was it easier or harder than expected? Do you want to continue? If no, pick a different book immediately.',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 33
  },
  {
    id: 'reading-habit-34',
    question: 'Create your weekly reading review. Schedule a specific time one week from now (put it in your calendar) to review: how many days did you read? What worked? What didn\'t? Based on that, what\'s the ONE thing you\'ll adjust for next week?',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 34
  },
  {
    id: 'reading-habit-35',
    question: 'Establish your accountability check-in. Within the next 24 hours, do one of these: tell one person your specific reading goal, post about it, join a reading community/book club, or schedule your first review. Write down who you told or where you posted, and when you\'ll report back.',
    category: 'action',
    template_id: 'reading-habit',
    question_number: 35
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
    .eq('template_id', 'reading-habit');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${((counts.reflection/verifyData.length)*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${((counts.research/verifyData.length)*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${((counts.planning/verifyData.length)*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${((counts.action/verifyData.length)*100).toFixed(1)}%)`);
  }
}

insertQuestions();
