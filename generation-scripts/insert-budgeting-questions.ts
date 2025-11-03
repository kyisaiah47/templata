import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (9 questions - 25%)
  {
    id: 'budgeting-1',
    question: 'Think about the last time you felt stressed about money. What specific purchase or bill triggered it? What did you tell yourself in that moment?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 1
  },
  {
    id: 'budgeting-2',
    question: 'Write about your earliest money memory from childhood. What were you told about money? What did you observe about how adults handled it?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 2
  },
  {
    id: 'budgeting-3',
    question: 'Recall 3 times in the past year when you felt great about a money decision. What made those moments different from your usual spending?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 3
  },
  {
    id: 'budgeting-4',
    question: 'Document times when you\'ve tried to budget or "be better with money" before. What did you try? How long did it last? What made you stop?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 4
  },
  {
    id: 'budgeting-5',
    question: 'Think about someone you know who seems to handle money well. What specifically do they do differently? What have you noticed about their habits?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 5
  },
  {
    id: 'budgeting-6',
    question: 'Write about a purchase in the past month that you regret. Walk through the decision: What were you feeling? What did you tell yourself? What would you do differently?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 6
  },
  {
    id: 'budgeting-7',
    question: 'Reflect on your relationship with checking your bank balance. Do you avoid it? Check obsessively? Feel neutral? When did this pattern start?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 7
  },
  {
    id: 'budgeting-8',
    question: 'Think about the moments when you\'re most likely to overspend. What time of day? What emotional state? What situations? List specific patterns you\'ve noticed.',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 8
  },
  {
    id: 'budgeting-9',
    question: 'Write about what financial security would feel like for you. Not a dollar amount, but what would be different in your daily life? What would you stop worrying about?',
    category: 'reflection',
    template_id: 'budgeting',
    question_number: 9
  },

  // RESEARCH QUESTIONS (8 questions - 22%)
  {
    id: 'budgeting-10',
    question: 'List every source of income you received last month. For each: How reliable is it? Could it disappear? What\'s the actual take-home after taxes?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 10
  },
  {
    id: 'budgeting-11',
    question: 'Review your last 3 months of bank/credit card statements. Categorize your top 20 expenses. What surprises you? What categories are bigger than you thought?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 11
  },
  {
    id: 'budgeting-12',
    question: 'Document all your subscriptions and recurring charges. For each: When did you sign up? Do you still use it? What would happen if you cancelled it today?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 12
  },
  {
    id: 'budgeting-13',
    question: 'List your last 10 purchases over $50. For each note: Was it planned or impulse? Do you still value it? What does this pattern tell you about your spending?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 13
  },
  {
    id: 'budgeting-14',
    question: 'Create an inventory of all your debts. For each: Current balance, minimum payment, interest rate, how you feel when you think about it. Which one bothers you most?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 14
  },
  {
    id: 'budgeting-15',
    question: 'Track every purchase for the next 3 days, including the tiny ones (coffee, snacks, apps). At the end, what patterns emerge? Where did money "disappear"?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 15
  },
  {
    id: 'budgeting-16',
    question: 'Research the total amount you spent on each category last month: housing, food, transportation, entertainment, shopping. Which percentage of your income does each represent?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 16
  },
  {
    id: 'budgeting-17',
    question: 'Document your fixed expenses (rent, insurance, loan payments) vs variable expenses (groceries, entertainment). What\'s the split? Which variable expenses feel fixed to you?',
    category: 'research',
    template_id: 'budgeting',
    question_number: 17
  },

  // PLANNING QUESTIONS (10 questions - 28%)
  {
    id: 'budgeting-18',
    question: 'Design your "perfect month" budget based on your actual income. Allocate every dollar. What feels realistic? What feels aspirational? Where are you being too optimistic?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 18
  },
  {
    id: 'budgeting-19',
    question: 'Identify 3 spending categories where you could reduce by 20% without feeling deprived. For each: What specific changes would you make? What would you miss?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 19
  },
  {
    id: 'budgeting-20',
    question: 'Plan your savings strategy: How much can you realistically save each month? Where will it go? What are you saving FOR specifically in the next 3, 6, 12 months?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 20
  },
  {
    id: 'budgeting-21',
    question: 'Create your debt payoff strategy. Based on your inventory: Which debt will you tackle first? Why? How much extra can you put toward it monthly?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 21
  },
  {
    id: 'budgeting-22',
    question: 'Map out your "financial friction points" - the situations where sticking to a budget will be hardest. For each: What\'s your specific plan to handle it?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 22
  },
  {
    id: 'budgeting-23',
    question: 'Design your tracking system: Will you use an app, spreadsheet, or notebook? How often will you update it? What day/time will you review it? Be specific.',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 23
  },
  {
    id: 'budgeting-24',
    question: 'Plan for irregular expenses (car repairs, gifts, annual fees). List what might come up in the next year. How much should you set aside monthly to cover these?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 24
  },
  {
    id: 'budgeting-25',
    question: 'Create your "budget reset" protocol for when you overspend. What will you do? How will you adjust? How will you avoid the shame spiral that makes you quit?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 25
  },
  {
    id: 'budgeting-26',
    question: 'Develop your rewards system: What will you celebrate? At what milestones? What treats are meaningful to you that don\'t derail your budget?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 26
  },
  {
    id: 'budgeting-27',
    question: 'Plan how you\'ll handle social pressure to spend (dinners out, gifts, events). What specific phrases will you use? What boundaries feel right for you?',
    category: 'planning',
    template_id: 'budgeting',
    question_number: 27
  },

  // ACTION QUESTIONS (9 questions - 25%)
  {
    id: 'budgeting-28',
    question: 'Set up your budget tracking tool right now. Whether it\'s downloading an app, creating a spreadsheet, or buying a notebook - do it. Then input this week\'s transactions.',
    category: 'action',
    template_id: 'budgeting',
    question_number: 28
  },
  {
    id: 'budgeting-29',
    question: 'Cancel or downgrade one subscription today. Which one did you choose? How much will you save monthly? Where will that money go instead?',
    category: 'action',
    template_id: 'budgeting',
    question_number: 29
  },
  {
    id: 'budgeting-30',
    question: 'Automate one financial decision this week: Set up auto-transfer to savings, auto-pay for a bill, or spending alerts. What did you automate? When will it start?',
    category: 'action',
    template_id: 'budgeting',
    question_number: 30
  },
  {
    id: 'budgeting-31',
    question: 'Schedule your first "money date" - a specific time this week to review your budget. What day? What time? What will you review? Put it in your calendar now.',
    category: 'action',
    template_id: 'budgeting',
    question_number: 31
  },
  {
    id: 'budgeting-32',
    question: 'Implement one "spending speed bump" this week: Remove saved credit cards, delete a shopping app, or unsubscribe from marketing emails. What did you choose?',
    category: 'action',
    template_id: 'budgeting',
    question_number: 32
  },
  {
    id: 'budgeting-33',
    question: 'Create a visual reminder of your savings goal. Whether a chart on your wall, phone wallpaper, or sticky note - make something tangible. Where will you put it?',
    category: 'action',
    template_id: 'budgeting',
    question_number: 33
  },
  {
    id: 'budgeting-34',
    question: 'Communicate your budget goals to one person who will support you. Who will you tell? What specific support do you need from them? When will you have this conversation?',
    category: 'action',
    template_id: 'budgeting',
    question_number: 34
  },
  {
    id: 'budgeting-35',
    question: 'Test your budget for one week starting today. Track everything, stay within your planned amounts. At the end: What worked? What needs adjustment?',
    category: 'action',
    template_id: 'budgeting',
    question_number: 35
  },
  {
    id: 'budgeting-36',
    question: 'Set a specific date one month from now to evaluate your progress. What will you measure? What would count as success? Put this review date in your calendar now.',
    category: 'action',
    template_id: 'budgeting',
    question_number: 36
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for budgeting guide...`);

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
    .eq('template_id', 'budgeting');

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
