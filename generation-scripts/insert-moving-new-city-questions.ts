import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (14 questions - 25%)
  {
    id: 'moving-new-city-1',
    question: 'Think about the moment you first seriously considered moving to this new city. What sparked it? What were you feeling about your current life at that time?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 1
  },
  {
    id: 'moving-new-city-2',
    question: 'Recall 3 times in your life when you felt truly at home somewhere. What made those places feel like home? What specific elements created that feeling?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 2
  },
  {
    id: 'moving-new-city-3',
    question: 'Write about your earliest memory of moving or being in a completely new place. What did that experience teach you about yourself? What patterns from that experience still show up today?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 3
  },
  {
    id: 'moving-new-city-4',
    question: 'Reflect on your current city: What will you miss most when you think about your daily life? Not the big things, but the small moments - where you get coffee, your walking route, the sounds outside your window.',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 4
  },
  {
    id: 'moving-new-city-5',
    question: 'Document times when you\'ve felt like an outsider or newcomer before. How did you handle it? What strategies worked? What made you feel like you belonged eventually?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 5
  },
  {
    id: 'moving-new-city-6',
    question: 'Think about your social energy: Are you someone who makes friends easily or does it take time? Recall specific examples from the past 5 years. What does this tell you about building community in your new city?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 6
  },
  {
    id: 'moving-new-city-7',
    question: 'Write about a time when you took a big risk or made a major change. What did you learn about how you handle uncertainty? What coping mechanisms emerged?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 7
  },
  {
    id: 'moving-new-city-8',
    question: 'Reflect on your relationship with "home" as a concept. Is it about people, places, routines, or something else? When have you felt most grounded, and what created that feeling?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 8
  },
  {
    id: 'moving-new-city-9',
    question: 'Think about Sunday evenings in your current life. What\'s your routine? What gives you comfort? What anxieties come up? How might this change, and how do you feel about that?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 9
  },
  {
    id: 'moving-new-city-10',
    question: 'Document your support system right now: Who do you call when things go wrong? Who celebrates with you? How will distance affect these relationships, and how do you feel about that?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 10
  },
  {
    id: 'moving-new-city-11',
    question: 'Recall times when you\'ve felt lonely or isolated. What triggered those feelings? What helped you through them? What didn\'t help but you tried anyway?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 11
  },
  {
    id: 'moving-new-city-12',
    question: 'Think about your identity in your current city - how people know you, your reputation, your "place" in various circles. What does it feel like to start over with a blank slate?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 12
  },
  {
    id: 'moving-new-city-13',
    question: 'Write about what you\'re running toward vs. running away from with this move. Be honest - what are you hoping will be different? What are you hoping to leave behind?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 13
  },
  {
    id: 'moving-new-city-14',
    question: 'Reflect on how you recharge and take care of yourself currently. What spaces, activities, or routines are essential to your wellbeing? How transferable are these to your new city?',
    category: 'reflection',
    template_id: 'moving-new-city',
    question_number: 14
  },

  // RESEARCH QUESTIONS (13 questions - 23%)
  {
    id: 'moving-new-city-15',
    question: 'Research the total cost of living difference between your current city and your new city. Break it down: rent, groceries, transportation, entertainment. What\'s the actual dollar difference monthly?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 15
  },
  {
    id: 'moving-new-city-16',
    question: 'Document all the logistics you\'ll need to handle: utility transfers, address changes, subscriptions, memberships. Create a comprehensive list - what specific companies and services need to be notified or cancelled?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 16
  },
  {
    id: 'moving-new-city-17',
    question: 'Investigate the housing market in your target neighborhood. Look at 10 actual listings in your price range. What compromises will you need to make compared to your current place?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 17
  },
  {
    id: 'moving-new-city-18',
    question: 'Research the transportation situation: How will you get around? What\'s the commute to work/key places? Map out actual routes and times for your typical week - what does this reveal?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 18
  },
  {
    id: 'moving-new-city-19',
    question: 'List every single item you currently own that won\'t make the move. For each major item: sell it, donate it, trash it, store it? What\'s your actual plan and timeline?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 19
  },
  {
    id: 'moving-new-city-20',
    question: 'Investigate the social scene: Find 5 specific groups, clubs, or recurring events that align with your interests. Read about them - which ones genuinely appeal to you? Why?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 20
  },
  {
    id: 'moving-new-city-21',
    question: 'Research practical services you use weekly: gym, grocery stores, healthcare providers, coffee shops. Find your new equivalents - what are they? How do they compare?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 21
  },
  {
    id: 'moving-new-city-22',
    question: 'Document the moving cost breakdown: Get actual quotes from movers, or calculate DIY costs (truck, gas, helpers, supplies). What\'s the real number, including hidden costs?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 22
  },
  {
    id: 'moving-new-city-23',
    question: 'Investigate the job market in your new city, even if you have a job lined up. What\'s the landscape in your field? What are salary ranges? What companies are there? What does this tell you about options?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 23
  },
  {
    id: 'moving-new-city-24',
    question: 'Research the cultural differences: Read local subreddits, blogs, news. What do locals complain about? What do they love? What unwritten rules or norms keep coming up?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 24
  },
  {
    id: 'moving-new-city-25',
    question: 'List everyone you know (even loosely) in or near your new city. For each: How well do you know them? When did you last connect? Would you actually reach out to them?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 25
  },
  {
    id: 'moving-new-city-26',
    question: 'Investigate your new neighborhood\'s daily rhythms: Use Google Street View to "walk" around at different times. Read local reviews. What\'s the vibe? Does it match what you need?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 26
  },
  {
    id: 'moving-new-city-27',
    question: 'Research the timeline and requirements for establishing yourself: driver\'s license, voter registration, bank account, healthcare provider. What\'s required? What\'s the sequence? How long will each take?',
    category: 'research',
    template_id: 'moving-new-city',
    question_number: 27
  },

  // PLANNING QUESTIONS (15 questions - 27%)
  {
    id: 'moving-new-city-28',
    question: 'Design your move timeline working backwards from your move date. What needs to happen 3 months out? 2 months? 1 month? 2 weeks? 1 week? 2 days? Moving day? Be specific about tasks and deadlines.',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 28
  },
  {
    id: 'moving-new-city-29',
    question: 'Plan your budget for the entire move and first 3 months. Include: moving costs, deposits, new furniture/supplies, higher rent, emergency fund padding. What\'s the total? Do you have it? If not, what\'s your plan?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 29
  },
  {
    id: 'moving-new-city-30',
    question: 'Create your housing search strategy: What are your must-haves vs. nice-to-haves? What\'s your radius? What\'s your plan for visiting/viewing places? How many places will you see? When will you decide?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 30
  },
  {
    id: 'moving-new-city-31',
    question: 'Map out your plan for the first week in your new city. Day by day: What will you set up? Who will you contact? What will you explore? How will you balance productivity and self-care?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 31
  },
  {
    id: 'moving-new-city-32',
    question: 'Develop your social connection strategy: How will you meet people in the first month? Second month? Third month? Be specific - which groups will you join? What events will you attend? What\'s your goal for each?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 32
  },
  {
    id: 'moving-new-city-33',
    question: 'Plan how you\'ll maintain your important current relationships. For your top 5 people: How often will you connect? What format (calls, visits, texts)? When will you schedule the first post-move catch-up?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 33
  },
  {
    id: 'moving-new-city-34',
    question: 'Design your new routine: Based on your new commute/location, what will your mornings look like? Evenings? Weekends? How will you recreate the parts of your current routine that ground you?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 34
  },
  {
    id: 'moving-new-city-35',
    question: 'Create your contingency plans: What if the housing falls through? What if you hate it in the first month? What if you run out of money faster than expected? For each: what\'s your backup plan?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 35
  },
  {
    id: 'moving-new-city-36',
    question: 'Map out your workspace setup if you work from home: What furniture do you need? Internet setup? When will you order things? How long until you can actually work effectively?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 36
  },
  {
    id: 'moving-new-city-37',
    question: 'Plan your goodbye process: Who needs a proper goodbye? What format (dinner, coffee, call)? When will you reach out? How will you handle the emotional labor of leaving?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 37
  },
  {
    id: 'moving-new-city-38',
    question: 'Develop your "getting to know the city" plan: What will you explore in week 1? Month 1? Month 3? How will you push yourself to try new neighborhoods, not just stick to familiar patterns?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 38
  },
  {
    id: 'moving-new-city-39',
    question: 'Create your financial safety net strategy: How much buffer do you need? What expenses might spike? What will you cut if money gets tight? What\'s your absolute minimum runway?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 39
  },
  {
    id: 'moving-new-city-40',
    question: 'Plan how you\'ll handle the emotional difficulty: What will you do when you feel lonely? Overwhelmed? Regretful? Who will you call? What self-care will you prioritize? Be specific about your support plan.',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 40
  },
  {
    id: 'moving-new-city-41',
    question: 'Map out your professional integration: How will you build credibility in your new workplace/city? What networking will you do? What professional groups will you join? What\'s your 6-month career plan?',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 41
  },
  {
    id: 'moving-new-city-42',
    question: 'Design your "this is home now" milestones: What will signal that you\'re truly settled? Having people over? Knowing your way around? Finding "your" spots? Identify 5-7 specific markers and timeline for each.',
    category: 'planning',
    template_id: 'moving-new-city',
    question_number: 42
  },

  // ACTION QUESTIONS (14 questions - 25%)
  {
    id: 'moving-new-city-43',
    question: 'Visit your new city (virtually or in person) this week. If in person: walk the neighborhood, visit 3 local spots. If virtual: spend 2 hours on Street View. Document what you notice - what feels exciting? What feels off?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 43
  },
  {
    id: 'moving-new-city-44',
    question: 'Reach out to one person in your new city today. Whether you know them well or barely, send a message. Ask them one specific question about living there. What did you learn?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 44
  },
  {
    id: 'moving-new-city-45',
    question: 'Start your moving logistics today: Get 3 quotes from movers, or price out the DIY option. Make a spreadsheet with real numbers. What\'s your decision and why?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 45
  },
  {
    id: 'moving-new-city-46',
    question: 'Book or plan your housing search trip right now. Pick dates, book travel if needed, line up viewings. Put specific times in your calendar. What did you schedule?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 46
  },
  {
    id: 'moving-new-city-47',
    question: 'Create your master moving checklist today. Use a tool that works for you - spreadsheet, app, notebook. Input your timeline and tasks from your planning. Set 3 reminders for this week.',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 47
  },
  {
    id: 'moving-new-city-48',
    question: 'Join one online community for your new city today. Local subreddit, Facebook group, neighborhood forum. Post an introduction or read the last week of posts. What did you learn about the culture?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 48
  },
  {
    id: 'moving-new-city-49',
    question: 'Tackle one difficult conversation this week: Tell someone important that you\'re moving. Choose who. When will you tell them? How? Document how it went and what came up.',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 49
  },
  {
    id: 'moving-new-city-50',
    question: 'Set up one practical thing for your new city this week: Open a utility account, register to vote, schedule a first appointment with a doctor. What did you choose? What did you learn about the process?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 50
  },
  {
    id: 'moving-new-city-51',
    question: 'Visit one group or event related to your interests this month (in your current city) specifically to practice introducing yourself as "someone moving to [new city]". How did it feel? What questions did people ask?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 51
  },
  {
    id: 'moving-new-city-52',
    question: 'Make one financial move this week: Transfer money to savings for the move, open a buffer account, or sell one major item. What did you do? How much closer are you to your financial target?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 52
  },
  {
    id: 'moving-new-city-53',
    question: 'Complete one room/category of packing decisions today: Go through your books, kitchen, clothes, or another category. For each item: definitely taking, definitely leaving, or unsure. How many are in each pile?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 53
  },
  {
    id: 'moving-new-city-54',
    question: 'Schedule your goodbyes: Put 3 specific goodbye plans in your calendar this month. Who, when, where. Reach out to those people today to confirm. Who did you choose and why them first?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 54
  },
  {
    id: 'moving-new-city-55',
    question: 'Take one self-care action today that you\'ll need to recreate in your new city. Your yoga class, your walking route, your Sunday ritual. Do it mindfully, noticing what makes it restorative. What will you need to replicate this feeling?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 55
  },
  {
    id: 'moving-new-city-56',
    question: 'Create one concrete anchor for your first week in your new city. Make a specific reservation, buy tickets to something, or schedule a commitment that will force you to leave your apartment. What did you commit to?',
    category: 'action',
    template_id: 'moving-new-city',
    question_number: 56
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for moving-new-city guide...`);

  // First, delete any existing questions
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .eq('template_id', 'moving-new-city');

  if (deleteError) {
    console.error('Error deleting existing questions:', deleteError);
    process.exit(1);
  }

  console.log('✓ Deleted existing questions (if any)');

  // Insert new questions
  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✓ Successfully inserted all questions');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'moving-new-city');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
    process.exit(1);
  }

  const counts = verifyData.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\nBreakdown by category:');
  console.log(`- Reflection (Foundation): ${counts.reflection || 0} questions (${Math.round((counts.reflection || 0) / questions.length * 100)}%)`);
  console.log(`- Research: ${counts.research || 0} questions (${Math.round((counts.research || 0) / questions.length * 100)}%)`);
  console.log(`- Planning: ${counts.planning || 0} questions (${Math.round((counts.planning || 0) / questions.length * 100)}%)`);
  console.log(`- Action: ${counts.action || 0} questions (${Math.round((counts.action || 0) / questions.length * 100)}%)`);
  console.log(`\nTotal: ${verifyData.length} questions`);
}

insertQuestions();
