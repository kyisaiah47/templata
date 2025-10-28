import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (9 questions - 25%)
  {
    id: 'investing-basics-1',
    question: 'Think about the last time you had extra money (a bonus, tax refund, or unexpected windfall). What did you do with it? How did you feel about that decision 3 months later?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'investing-basics-2',
    question: 'Write about a time in the past 2 years when money felt tight or stressful. What was happening? How long did that feeling last? What did you learn about yourself?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'investing-basics-3',
    question: 'Recall 3 specific moments when you checked your bank account or credit card balance. What prompted you to check? What emotion came up? What does this pattern tell you about your relationship with money?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'investing-basics-4',
    question: 'Think about someone in your life who manages money in a way you admire. What specifically do they do? When did you first notice this? What makes their approach different from yours?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'investing-basics-5',
    question: 'Document your most recent impulse purchase over $100. What were you feeling right before you bought it? Do you still value it? What would you do differently now?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'investing-basics-6',
    question: 'Write about what your parents or caregivers taught you about money—both what they said explicitly and what you absorbed from watching them. Which of these lessons still influences you today?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'investing-basics-7',
    question: 'Think about a time in the past year when you almost invested or started investing but didn\'t. What stopped you? What were you afraid might happen? Is that fear still present?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'investing-basics-8',
    question: 'Imagine your bank account loses 20% of its value overnight. Write down the first three thoughts that come to mind. What would you actually DO in that moment? Be honest—not what you think you should do.',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'investing-basics-9',
    question: 'List 3 times in your life when you delayed a financial decision. What were you waiting for? Did waiting help or hurt? What pattern do you notice?',
    category: 'reflection',
    question_number: 9
  },

  // RESEARCH QUESTIONS (8 questions - 23%)
  {
    id: 'investing-basics-10',
    question: 'Research and document: What is your current savings account interest rate? When did you open it? How does it compare to current high-yield savings accounts (list 3 specific rates you find)?',
    category: 'research',
    question_number: 10
  },
  {
    id: 'investing-basics-11',
    question: 'Look up your employer\'s 401(k) match policy. Write down: the exact match percentage, whether you\'re currently contributing, and how much free money you\'re leaving on the table if not maximizing it.',
    category: 'research',
    question_number: 11
  },
  {
    id: 'investing-basics-12',
    question: 'Research the difference between a Traditional IRA and Roth IRA. Document: contribution limits, tax treatment, and which one makes more sense for YOUR current tax bracket (include your estimated tax rate).',
    category: 'research',
    question_number: 12
  },
  {
    id: 'investing-basics-13',
    question: 'Compare 3 specific investing platforms (like Vanguard, Fidelity, Schwab). For each, document: account minimum, trading fees, expense ratios on index funds, and what makes it different from the others.',
    category: 'research',
    question_number: 13
  },
  {
    id: 'investing-basics-14',
    question: 'Look up the historical performance of the S&P 500 over the past 20 years. Document: the best year, worst year, and average annual return. How does this compare to your savings account?',
    category: 'research',
    question_number: 14
  },
  {
    id: 'investing-basics-15',
    question: 'Research what "expense ratio" means. Find and document the expense ratios of 3 popular index funds (like VTSAX, FZROX, SWTSX). Calculate: how much this costs on a $10,000 investment annually.',
    category: 'research',
    question_number: 15
  },
  {
    id: 'investing-basics-16',
    question: 'Investigate target-date funds. Find one that matches your expected retirement year, document its allocation (% stocks vs bonds), and compare its expense ratio to building the same portfolio yourself.',
    category: 'research',
    question_number: 16
  },
  {
    id: 'investing-basics-17',
    question: 'Research your current debt situation. List each debt (credit cards, student loans, car loans) with: exact interest rate, minimum payment, and total balance. Which rates are higher than average investment returns?',
    category: 'research',
    question_number: 17
  },

  // PLANNING QUESTIONS (10 questions - 29%)
  {
    id: 'investing-basics-18',
    question: 'Map out your money timeline for the next 10 years. For each major goal (house, car, wedding, etc.), write: when you need it, how much it costs, and whether this money should be invested or kept in savings.',
    category: 'planning',
    question_number: 18
  },
  {
    id: 'investing-basics-19',
    question: 'Calculate your true emergency fund target. Write down: your monthly essential expenses, how many months you want covered (3-6), and how much you actually have saved right now. What\'s the gap?',
    category: 'planning',
    question_number: 19
  },
  {
    id: 'investing-basics-20',
    question: 'Design your investment priority waterfall. Number these in order for YOUR situation: max 401(k) match, build emergency fund, pay high-interest debt, max Roth IRA, increase 401(k), taxable investing.',
    category: 'planning',
    question_number: 20
  },
  {
    id: 'investing-basics-21',
    question: 'Determine your actual risk tolerance based on your past behavior. Write: What % drop would make you lose sleep? At what point would you be tempted to sell? What allocation (stocks vs bonds) matches this reality?',
    category: 'planning',
    question_number: 21
  },
  {
    id: 'investing-basics-22',
    question: 'Create your monthly cash flow plan. Document: total monthly income after taxes, fixed expenses, variable spending, current savings, and how much is realistically available to invest each month.',
    category: 'planning',
    question_number: 22
  },
  {
    id: 'investing-basics-23',
    question: 'Plan your investment automation strategy. Write: which accounts will auto-contribute, on what day of the month (and why that day), and what you\'ll do when you get a raise or bonus.',
    category: 'planning',
    question_number: 23
  },
  {
    id: 'investing-basics-24',
    question: 'Design your personal investment policy. Document: your target asset allocation, how often you\'ll check accounts (weekly/monthly/quarterly), and what would trigger you to change your strategy.',
    category: 'planning',
    question_number: 24
  },
  {
    id: 'investing-basics-25',
    question: 'Calculate the cost of waiting. If you invested $500/month starting today vs 5 years from now, what\'s the difference at age 65? (Use 7% annual return). Write how this makes you feel.',
    category: 'planning',
    question_number: 25
  },
  {
    id: 'investing-basics-26',
    question: 'Map your tax optimization strategy. Document: which accounts you\'ll fund in which order to minimize taxes this year AND in retirement. Include your current tax bracket and expected retirement bracket.',
    category: 'planning',
    question_number: 26
  },
  {
    id: 'investing-basics-27',
    question: 'Create your rebalancing plan. Write: your target allocation, how far it can drift before you act (5%? 10%?), and whether you\'ll rebalance by selling or by directing new contributions.',
    category: 'planning',
    question_number: 27
  },

  // ACTION QUESTIONS (8 questions - 23%)
  {
    id: 'investing-basics-28',
    question: 'Write down the one specific account you will open first. Include: the exact platform name, account type, and the date this week you\'ll start the application. No "maybes"—commit to one.',
    category: 'action',
    question_number: 28
  },
  {
    id: 'investing-basics-29',
    question: 'Document what information you need to gather before opening your first investment account: Social Security number, bank routing number, employment info, beneficiaries. Check off what you already have.',
    category: 'action',
    question_number: 29
  },
  {
    id: 'investing-basics-30',
    question: 'Commit to your first investment amount and date. Write: the exact dollar amount (start small if needed), which fund you\'ll buy, and the specific date you\'ll make this first investment.',
    category: 'action',
    question_number: 30
  },
  {
    id: 'investing-basics-31',
    question: 'Set up your automation today. Document: the monthly contribution amount, which day of the month it will auto-invest, and confirm you\'ve actually enabled automatic investing (not just scheduled it mentally).',
    category: 'action',
    question_number: 31
  },
  {
    id: 'investing-basics-32',
    question: 'Create your check-in calendar. Write: specific dates (like "1st Sunday of each quarter") when you\'ll review your investments, what you\'ll look at, and what you\'ll ignore to avoid panic selling.',
    category: 'action',
    question_number: 32
  },
  {
    id: 'investing-basics-33',
    question: 'Write down who you\'ll tell about starting to invest (accountability partner, friend, family). Plan when you\'ll tell them and what specific support you want from them.',
    category: 'action',
    question_number: 33
  },
  {
    id: 'investing-basics-34',
    question: 'Document your "circuit breaker" plan for market downturns. Write: the exact article or resource you\'ll read when you panic, who you\'ll call, and what you\'ll do INSTEAD of selling everything.',
    category: 'action',
    question_number: 34
  },
  {
    id: 'investing-basics-35',
    question: 'Create your 90-day investing roadmap. List specific actions with dates: Week 1 (open account), Week 2 (first investment), Week 4 (set up automation), Month 2 (increase contribution), Month 3 (first review).',
    category: 'action',
    question_number: 35
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for investing-basics...`);

  for (const q of questions) {
    const { error } = await supabase
      .from('questions')
      .insert({
        id: q.id,
        question: q.question,
        category: q.category,
        template_id: 'investing-basics',
        question_number: q.question_number
      });

    if (error) {
      console.error(`Error inserting question ${q.id}:`, error);
    } else {
      console.log(`✓ Inserted question ${q.question_number}`);
    }
  }

  console.log('\nInsertion complete!');
}

insertQuestions();
