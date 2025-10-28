import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // ROUND 1: FOUNDATION QUESTIONS (15 questions - 25%)
  {
    id: 'managing-inheritance-1',
    question: 'Write about the moment you learned about this inheritance. What was your immediate emotional reaction—relief, guilt, sadness, anxiety, or something else entirely?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'managing-inheritance-2',
    question: 'Reflect on your relationship with the person who left you this inheritance. What would they want you to do with it? What would disappoint them?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'managing-inheritance-3',
    question: 'Document three specific memories about money or financial values from the person who left you this inheritance. What did their actions teach you?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'managing-inheritance-4',
    question: 'Write about how your family is handling this inheritance. Are there tensions, expectations, or unspoken assumptions about fairness?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'managing-inheritance-5',
    question: 'Think about the past year before this inheritance. What were your three biggest financial stressors? How does this inheritance change those specific situations?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'managing-inheritance-6',
    question: 'Reflect on your current relationship with money. Do you tend to hold tight or spend freely? How might this inheritance amplify your existing patterns?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'managing-inheritance-7',
    question: 'Write about a time you received unexpected money before (bonus, gift, windfall). What did you do with it? Do you feel good about those choices now?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'managing-inheritance-8',
    question: 'Document your immediate fears about this inheritance. What keeps you up at night—making the wrong decision, losing it, family conflict, lifestyle changes?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'managing-inheritance-9',
    question: 'Think about people in your life who have received inheritances. What did they do well? What mistakes did you observe?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'managing-inheritance-10',
    question: 'Reflect on whether you feel you "deserve" this inheritance. Where does that feeling come from? How might it influence your decisions?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'managing-inheritance-11',
    question: 'Write about how your life would look in 5 years if you made only fear-based decisions with this money versus only opportunity-based decisions. What does each path reveal?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'managing-inheritance-12',
    question: 'Document the financial values you want to pass on someday. How does managing this inheritance align with or contradict those values?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'managing-inheritance-13',
    question: 'Think about your current lifestyle and spending. What do you secretly hope this inheritance will allow you to change? What does that desire tell you?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'managing-inheritance-14',
    question: 'Reflect on who you have told about this inheritance and who you have kept it from. What is driving those choices?',
    category: 'reflection',
    question_number: 14
  },
  {
    id: 'managing-inheritance-15',
    question: 'Write about the timeline pressure you are feeling. What decisions feel urgent versus which ones could you make in 6-12 months?',
    category: 'reflection',
    question_number: 15
  },

  // ROUND 2: RESEARCH QUESTIONS (13 questions - 22%)
  {
    id: 'managing-inheritance-16',
    question: 'List every component of your inheritance (cash, property, investments, belongings). For each, note its approximate value and current location or status.',
    category: 'research',
    question_number: 16
  },
  {
    id: 'managing-inheritance-17',
    question: 'Research the tax implications of your specific inheritance. What taxes are due this year? What is the filing deadline? What documentation do you need?',
    category: 'research',
    question_number: 17
  },
  {
    id: 'managing-inheritance-18',
    question: 'Document your current debt situation. List each debt with its balance, interest rate, and minimum payment. Which debts are costing you the most?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'managing-inheritance-19',
    question: 'Calculate your current monthly expenses by category (housing, food, transportation, etc.). Which categories feel tight? Which have flexibility?',
    category: 'research',
    question_number: 19
  },
  {
    id: 'managing-inheritance-20',
    question: 'Research your current emergency fund status. How many months of expenses could you cover today? What is your target?',
    category: 'research',
    question_number: 20
  },
  {
    id: 'managing-inheritance-21',
    question: 'Document your current retirement savings. What accounts do you have? What is the total balance? Are you getting full employer match?',
    category: 'research',
    question_number: 21
  },
  {
    id: 'managing-inheritance-22',
    question: 'Research estate attorneys in your area. Find three with good reviews and specialization in inheritance matters. Note their consultation fees.',
    category: 'research',
    question_number: 22
  },
  {
    id: 'managing-inheritance-23',
    question: 'Look up fee-only financial advisors (CFP designation) in your area. What are their minimum asset requirements? What do they charge?',
    category: 'research',
    question_number: 23
  },
  {
    id: 'managing-inheritance-24',
    question: 'If your inheritance includes property, research its current market value, property taxes, insurance costs, and maintenance needs. What is the monthly carrying cost?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'managing-inheritance-25',
    question: 'Document any inherited investment accounts. What are the current holdings? What are the expense ratios? Are they aligned with your risk tolerance?',
    category: 'research',
    question_number: 25
  },
  {
    id: 'managing-inheritance-26',
    question: 'Research the step-up in basis rule. Does it apply to your inherited assets? How does it affect your tax situation if you sell?',
    category: 'research',
    question_number: 26
  },
  {
    id: 'managing-inheritance-27',
    question: 'Find three people who could give you financial advice (trusted friend, family member, mentor). For each, note what makes them qualified and what biases they might have.',
    category: 'research',
    question_number: 27
  },
  {
    id: 'managing-inheritance-28',
    question: 'Research your current insurance coverage (life, disability, umbrella). Given this inheritance, what gaps exist? What additional coverage might you need?',
    category: 'research',
    question_number: 28
  },

  // ROUND 3: PLANNING QUESTIONS (17 questions - 28%)
  {
    id: 'managing-inheritance-29',
    question: 'Create a waiting period plan. What decisions will you commit to NOT making for the next 30-90 days while emotions settle?',
    category: 'planning',
    question_number: 29
  },
  {
    id: 'managing-inheritance-30',
    question: 'Plan your immediate cash needs. How much should you keep liquid for taxes, estate costs, and your emergency fund? Where will you hold it?',
    category: 'planning',
    question_number: 30
  },
  {
    id: 'managing-inheritance-31',
    question: 'Design your debt payoff strategy. Which debts would you pay off immediately? Which would you keep? What is your reasoning for each?',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'managing-inheritance-32',
    question: 'Map out your investment timeline. What money do you need in 0-5 years? 5-10 years? 10+ years? How should each bucket be invested differently?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'managing-inheritance-33',
    question: 'Plan how to handle inherited property. Will you sell, rent, or keep it? What are the financial and emotional factors in that decision?',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'managing-inheritance-34',
    question: 'Design your investment allocation strategy. Based on your age, goals, and risk tolerance, what percentage should go to stocks, bonds, and cash?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'managing-inheritance-35',
    question: 'Create a family communication plan. Who needs to know about your inheritance decisions? What will you share and what will you keep private?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'managing-inheritance-36',
    question: 'Plan your professional help strategy. Which experts do you need (estate attorney, CPA, financial advisor)? In what order? What is your budget for this help?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'managing-inheritance-37',
    question: 'Map out your charitable giving intentions. Do you want to honor the deceased through giving? What causes align with their values and yours?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'managing-inheritance-38',
    question: 'Design your lifestyle boundaries. What lifestyle changes are you considering? Which ones honor the legacy versus which ones might be emotionally reactive?',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'managing-inheritance-39',
    question: 'Plan your own estate. With this inheritance, do you need to update your will, beneficiaries, or create a trust? What is your timeline?',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'managing-inheritance-40',
    question: 'Create a decision-making framework. For any major financial choice, what criteria will you use? Who will you consult? What is your process?',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'managing-inheritance-41',
    question: 'Map out your income strategy. Does any portion of this inheritance need to generate income? What are your options (dividends, interest, rental income)?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'managing-inheritance-42',
    question: 'Plan for lifestyle inflation. What spending increases feel right versus which ones would you regret in a year? How will you distinguish between the two?',
    category: 'planning',
    question_number: 42
  },
  {
    id: 'managing-inheritance-43',
    question: 'Design your learning plan. What financial knowledge gaps do you have? What books, courses, or resources will you use to fill them?',
    category: 'planning',
    question_number: 43
  },
  {
    id: 'managing-inheritance-44',
    question: 'Create a annual review system. How will you check in on these decisions in 1 year? What metrics will tell you if you are on track?',
    category: 'planning',
    question_number: 44
  },
  {
    id: 'managing-inheritance-45',
    question: 'Plan your risk management approach. What financial risks are you now exposed to (market volatility, property liability, identity theft)? How will you protect against each?',
    category: 'planning',
    question_number: 45
  },

  // ROUND 4: ACTION QUESTIONS (15 questions - 25%)
  {
    id: 'managing-inheritance-46',
    question: 'Schedule consultations with at least two estate attorneys this month. Prepare a list of your specific questions before each meeting.',
    category: 'action',
    question_number: 46
  },
  {
    id: 'managing-inheritance-47',
    question: 'Transfer all inherited cash to a high-yield savings account separate from your regular accounts. Track this account separately for the next 90 days.',
    category: 'action',
    question_number: 47
  },
  {
    id: 'managing-inheritance-48',
    question: 'Gather all inheritance documentation (will, death certificate, account statements, property deeds). Create a secure folder (physical or digital) to organize everything.',
    category: 'action',
    question_number: 48
  },
  {
    id: 'managing-inheritance-49',
    question: 'Meet with a CPA to review your specific tax situation. Bring all inheritance documents and your last two years of tax returns.',
    category: 'action',
    question_number: 49
  },
  {
    id: 'managing-inheritance-50',
    question: 'Set up a meeting with yourself in 90 days. Calendar it now. You will revisit all these questions and see what decisions you are ready to make.',
    category: 'action',
    question_number: 50
  },
  {
    id: 'managing-inheritance-51',
    question: 'Pay off your highest-interest debt if the math clearly makes sense. Document your reasoning and how it feels to make this choice.',
    category: 'action',
    question_number: 51
  },
  {
    id: 'managing-inheritance-52',
    question: 'Fund your emergency fund to 6 months of expenses if it is not already there. Choose a high-yield savings account and set this money aside.',
    category: 'action',
    question_number: 52
  },
  {
    id: 'managing-inheritance-53',
    question: 'Update all beneficiary designations on your own accounts (retirement, life insurance, bank accounts). Who should inherit if something happens to you?',
    category: 'action',
    question_number: 53
  },
  {
    id: 'managing-inheritance-54',
    question: 'Have one honest conversation with a family member about this inheritance. Practice transparency where it feels right and boundaries where it does not.',
    category: 'action',
    question_number: 54
  },
  {
    id: 'managing-inheritance-55',
    question: 'Create or update your own will. If you now have significant assets, you need a plan for them. Schedule this within 30 days.',
    category: 'action',
    question_number: 55
  },
  {
    id: 'managing-inheritance-56',
    question: 'Identify one small way to honor the person who left you this inheritance. Take that action this month—make a donation, share a memory, continue their tradition.',
    category: 'action',
    question_number: 56
  },
  {
    id: 'managing-inheritance-57',
    question: 'Max out your retirement contributions for this year if the inheritance makes that possible. Set up automatic contributions if you have not already.',
    category: 'action',
    question_number: 57
  },
  {
    id: 'managing-inheritance-58',
    question: 'Interview at least two fee-only financial advisors. Ask about their investment philosophy, fee structure, and how they would approach your specific situation.',
    category: 'action',
    question_number: 58
  },
  {
    id: 'managing-inheritance-59',
    question: 'Review and rebalance any inherited investment accounts. Work with an advisor if needed, but ensure the investments match your risk tolerance and timeline.',
    category: 'action',
    question_number: 59
  },
  {
    id: 'managing-inheritance-60',
    question: 'Write a letter to yourself documenting this moment—your feelings, your intentions, your fears, your hopes. Seal it and read it in one year.',
    category: 'action',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions.map(q => ({
      ...q,
      template_id: 'managing-inheritance'
    })));

  if (error) {
    console.error('Error inserting questions:', error);
    throw error;
  }

  console.log('Successfully inserted all questions!');

  // Verify counts
  const categoryCounts = questions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('\nBreakdown by category:');
  console.log(`- Reflection (Foundation): ${categoryCounts.reflection} (${((categoryCounts.reflection / questions.length) * 100).toFixed(1)}%)`);
  console.log(`- Research: ${categoryCounts.research} (${((categoryCounts.research / questions.length) * 100).toFixed(1)}%)`);
  console.log(`- Planning: ${categoryCounts.planning} (${((categoryCounts.planning / questions.length) * 100).toFixed(1)}%)`);
  console.log(`- Action: ${categoryCounts.action} (${((categoryCounts.action / questions.length) * 100).toFixed(1)}%)`);
  console.log(`\nTotal: ${questions.length} questions`);
}

insertQuestions();
