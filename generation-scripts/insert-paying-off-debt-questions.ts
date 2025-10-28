import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (10 questions - 25%)
  {
    id: 'paying-off-debt-1',
    question: 'Think about the moment you realized your debt was a real problem. What triggered that realization? What did you feel? What did you tell yourself?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 1
  },
  {
    id: 'paying-off-debt-2',
    question: 'Write about your earliest memories of debt - either your own or watching family members deal with it. What messages did you absorb? What patterns do you recognize now?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 2
  },
  {
    id: 'paying-off-debt-3',
    question: 'Recall 3 specific purchases or decisions that led to your current debt. For each: What were you feeling at the time? What were you hoping would happen? What actually happened?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 3
  },
  {
    id: 'paying-off-debt-4',
    question: 'Reflect on times you\'ve tried to pay down debt before. What strategies did you try? How long did they last? What made you stop or give up?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 4
  },
  {
    id: 'paying-off-debt-5',
    question: 'Think about how you feel when you see the balance on your highest debt. Describe the physical sensation. When did you start feeling this way? What does it remind you of?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 5
  },
  {
    id: 'paying-off-debt-6',
    question: 'Document the stories you tell yourself about your debt. \'I\'m bad with money,\' \'It\'s not that much,\' \'Everyone has debt\' - what narratives run through your mind? Where did they come from?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 6
  },
  {
    id: 'paying-off-debt-7',
    question: 'Write about someone you know who successfully paid off debt. What did they do? What do you imagine was different about their situation or personality? What assumptions are you making?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 7
  },
  {
    id: 'paying-off-debt-8',
    question: 'Recall the last time you added to your debt. Walk through that decision minute by minute: What happened right before? What were you telling yourself? What would you do differently now?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 8
  },
  {
    id: 'paying-off-debt-9',
    question: 'Think about what life would feel like without this debt. Not just \'I\'d have more money\' but specifically - what would you do on a Tuesday morning? What would stop worrying you?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 9
  },
  {
    id: 'paying-off-debt-10',
    question: 'Reflect on the relationship between your debt and your self-worth. When do you feel shame about it? When do you justify it? What does this debt mean about you in your own mind?',
    category: 'reflection',
    template_id: 'paying-off-debt',
    question_number: 10
  },

  // RESEARCH QUESTIONS (9 questions - 22.5%)
  {
    id: 'paying-off-debt-11',
    question: 'Create a complete debt inventory. For each debt, document: creditor name, current balance, interest rate, minimum payment, due date, and total amount you\'ve already paid on it. What patterns emerge?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 11
  },
  {
    id: 'paying-off-debt-12',
    question: 'Calculate your total monthly debt payments vs. your total monthly take-home income. What percentage of your income goes to debt? How does seeing that number make you feel?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 12
  },
  {
    id: 'paying-off-debt-13',
    question: 'Research the interest you\'re actually paying. For each debt, calculate how much you paid in interest alone last month. Add it all up. What could you have done with that money instead?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 13
  },
  {
    id: 'paying-off-debt-14',
    question: 'List every source of income you have. For each: How much (after taxes)? How reliable? Could it change? What\'s the absolute minimum you can count on monthly?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 14
  },
  {
    id: 'paying-off-debt-15',
    question: 'Track your spending for the past month using bank/credit card statements. Categorize everything. What percentage goes to: essentials, debt payments, discretionary spending? What surprises you?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 15
  },
  {
    id: 'paying-off-debt-16',
    question: 'Document any assets you own that have value: savings accounts, retirement accounts, items you could sell. For each: current value, and would selling/using it to pay debt actually make sense?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 16
  },
  {
    id: 'paying-off-debt-17',
    question: 'Research the specific terms of your debts. For each: Can you defer payments? Are there hardship programs? What happens if you miss a payment? What are the actual consequences vs. what you\'ve assumed?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 17
  },
  {
    id: 'paying-off-debt-18',
    question: 'Calculate your \'debt-free date\' at current payment rates. For each debt, if you only paid minimums, when would it be paid off? How much total would you pay including interest? Let yourself feel that number.',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 18
  },
  {
    id: 'paying-off-debt-19',
    question: 'List expenses you\'ve cut or tried to cut in the past 6 months. For each: Did it stick? If not, why not? What does this tell you about what\'s actually cuttable vs. what you think should be?',
    category: 'research',
    template_id: 'paying-off-debt',
    question_number: 19
  },

  // PLANNING QUESTIONS (11 questions - 27.5%)
  {
    id: 'paying-off-debt-20',
    question: 'Design your debt payoff strategy: Will you use avalanche (highest interest first), snowball (smallest balance first), or hybrid? Based on your personality and what you learned about yourself, which will actually work for YOU?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 20
  },
  {
    id: 'paying-off-debt-21',
    question: 'Calculate how much extra you can realistically put toward debt each month beyond minimums. Not what you \'should\' - what you actually can sustain for 6+ months without burning out? Show your math.',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 21
  },
  {
    id: 'paying-off-debt-22',
    question: 'Map out your payoff timeline based on your chosen strategy and extra payment amount. Create a month-by-month projection: Which debt gets paid off when? When do you reach key milestones?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 22
  },
  {
    id: 'paying-off-debt-23',
    question: 'Plan for the irregular expenses that derail debt payoff (car repairs, medical, gifts, emergencies). List what might come up in the next year. How will you handle these without adding more debt?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 23
  },
  {
    id: 'paying-off-debt-24',
    question: 'Identify your 3 highest-risk spending triggers - the situations where you\'re most likely to use credit or overspend. For each specific trigger: What\'s your emergency plan to avoid it?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 24
  },
  {
    id: 'paying-off-debt-25',
    question: 'Design your \'good enough\' budget that supports debt payoff. Where will you cut? Where won\'t you cut? What\'s the minimum quality of life you need to sustain this long-term without rebellion?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 25
  },
  {
    id: 'paying-off-debt-26',
    question: 'Create your debt consolidation decision framework. Does it make sense for any of your debts? What are the real pros/cons for your situation? What would you need to research before deciding?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 26
  },
  {
    id: 'paying-off-debt-27',
    question: 'Plan how you\'ll handle the money freed up as each debt gets paid off. Will you redirect to the next debt? Split between debt and savings? What\'s your rule to prevent lifestyle inflation?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 27
  },
  {
    id: 'paying-off-debt-28',
    question: 'Develop your social strategy. What will you say when friends want to spend money you don\'t have? How will you handle gift-giving? What boundaries do you need that you haven\'t set?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 28
  },
  {
    id: 'paying-off-debt-29',
    question: 'Map out your \'fell off the wagon\' recovery plan. When you overspend or add new debt (not if, when), what exactly will you do? How will you get back on track without spiraling?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 29
  },
  {
    id: 'paying-off-debt-30',
    question: 'Create your milestone reward system. What will you celebrate? At what points? What treats are meaningful to you that don\'t involve spending money you don\'t have?',
    category: 'planning',
    template_id: 'paying-off-debt',
    question_number: 30
  },

  // ACTION QUESTIONS (10 questions - 25%)
  {
    id: 'paying-off-debt-31',
    question: 'Set up your debt tracking system right now. Whether it\'s a spreadsheet, app, or notebook - create it. Enter all your debts, payment dates, and amounts. When is your first check-in?',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 31
  },
  {
    id: 'paying-off-debt-32',
    question: 'Make your first extra debt payment this week, even if it\'s just $10. Which debt will you put it toward? When exactly will you make the payment? Document how it feels to take this first step.',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 32
  },
  {
    id: 'paying-off-debt-33',
    question: 'Automate your debt payments today. Set up autopay for at least your minimum payments. Which debts did you automate? What day of the month? How does removing that decision feel?',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 33
  },
  {
    id: 'paying-off-debt-34',
    question: 'Cut or reduce one expense this week and redirect that money to debt. What will you cut? How much will it save? Which debt gets the extra money? When will you make the first redirected payment?',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 34
  },
  {
    id: 'paying-off-debt-35',
    question: 'Remove one spending temptation from your life today. Delete a shopping app, unsubscribe from marketing emails, remove saved payment info, or freeze a credit card. What did you choose? Why that one?',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 35
  },
  {
    id: 'paying-off-debt-36',
    question: 'Schedule your weekly \'debt date\' - a specific recurring time to review progress and update your tracker. What day? What time? What will you review each week? Put it in your calendar right now.',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 36
  },
  {
    id: 'paying-off-debt-37',
    question: 'Tell one person about your debt payoff goal. Who will you tell? What specific support do you need from them? When will you have this conversation? What will you actually say?',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 37
  },
  {
    id: 'paying-off-debt-38',
    question: 'Create a physical visual tracker for your debt payoff progress. Whether it\'s a chart on your wall, phone wallpaper, or thermometer drawing - make it tangible. Where will you put it to see it daily?',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 38
  },
  {
    id: 'paying-off-debt-39',
    question: 'Research and sign up for one new income source this week - selling items, freelance work, overtime, anything. What will you try? When will you start? Where does this money go? (Hint: debt.)',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 39
  },
  {
    id: 'paying-off-debt-40',
    question: 'Set your 30-day review date. One month from today, you\'ll evaluate what\'s working and what\'s not. What will you measure? What would count as success? Put this date in your calendar with specific review questions.',
    category: 'action',
    template_id: 'paying-off-debt',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for paying-off-debt guide...`);

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
    .eq('template_id', 'paying-off-debt');

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
