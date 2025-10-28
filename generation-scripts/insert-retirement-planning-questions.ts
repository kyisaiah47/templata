import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (15 questions - 25%)
  {
    id: 'retirement-planning-1',
    question: 'Think about the last 5 times you imagined being retired. What were you doing in each vision? Who was with you? What specific activities or moments made you smile?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'retirement-planning-2',
    question: 'Write about your parents\' or grandparents\' retirement experience. What did they get right? What would you do differently? What specific moments from their retirement stuck with you?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'retirement-planning-3',
    question: 'Document 3 weeks in the past year when you had extended time off. How did you spend your days? What patterns emerged by day 3? By day 7? What does this reveal about your retirement readiness?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'retirement-planning-4',
    question: 'List the last 10 purchases over $100. For each: Was it an experience or a thing? Shared or solo? Planned or spontaneous? What does this pattern reveal about how you might spend in retirement?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'retirement-planning-5',
    question: 'Reflect on the times in your life when you felt most purposeful. What were you doing? What needs were you meeting? How much of that purpose is tied to your current job title?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'retirement-planning-6',
    question: 'Think about your current weekly routine. Which parts drain you? Which energize you? If you removed work tomorrow, what would you miss? What would be relief?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'retirement-planning-7',
    question: 'Write about 3 people you know who retired in the past 5 years. Within 6 months, how had their daily life changed? Their relationships? Their sense of identity? What surprised them?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'retirement-planning-8',
    question: 'Document your relationship with money growing up. What messages did you receive? What fears do you carry? How do these shape your retirement timeline?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'retirement-planning-9',
    question: 'List every time in the past month you said "when I retire..." or "after I retire...". What were you postponing? Which of these could you start now?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'retirement-planning-10',
    question: 'Reflect on your health patterns over the past 5 years. What changed? What stayed the same? If you project this forward 20 years, what do you need to address now?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'retirement-planning-11',
    question: 'Think about the people you spend time with now. How many of these relationships are tied to work? Who would you still see weekly if you retired tomorrow? What does this reveal?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'retirement-planning-12',
    question: 'Write about a time you had "enough" - enough money, enough stuff, enough of something. What did that feel like? How did you know? What changed after that?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'retirement-planning-13',
    question: 'Document the last 3 times you felt envious of someone else\'s life situation. What specifically did you envy? What does this reveal about your retirement priorities?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'retirement-planning-14',
    question: 'Reflect on your risk tolerance: Think about the 3 biggest financial risks you\'ve taken in your life. What made you take them? How did they turn out? What does your gut tell you about market volatility in retirement?',
    category: 'reflection',
    question_number: 14
  },
  {
    id: 'retirement-planning-15',
    question: 'Think about your identity. Write 10 sentences starting with "I am...". How many are tied to your job? If those disappeared tomorrow, what would remain? How does that feel?',
    category: 'reflection',
    question_number: 15
  },

  // RESEARCH QUESTIONS (14 questions - 23%)
  {
    id: 'retirement-planning-16',
    question: 'Calculate your current annual spending by category: housing, food, transportation, healthcare, entertainment, other. Which categories will increase in retirement? Which will decrease? What surprises you?',
    category: 'research',
    question_number: 16
  },
  {
    id: 'retirement-planning-17',
    question: 'Research your Social Security projected benefits at ages 62, 67, and 70. Document the monthly difference. Calculate the break-even age for waiting. What does your family health history suggest?',
    category: 'research',
    question_number: 17
  },
  {
    id: 'retirement-planning-18',
    question: 'List every source of retirement income you expect: Social Security, 401k, IRA, pension, rental income, part-time work, other. Estimate monthly amounts. What\'s the total? What\'s missing?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'retirement-planning-19',
    question: 'Document your current investment allocation: stocks %, bonds %, cash %, other %. Now research recommended allocations for someone retiring in your timeframe. What needs to change?',
    category: 'research',
    question_number: 19
  },
  {
    id: 'retirement-planning-20',
    question: 'Research Medicare coverage: What does Part A, B, C, D cover? What does it NOT cover? Calculate your estimated healthcare costs in retirement including premiums, deductibles, and gaps.',
    category: 'research',
    question_number: 20
  },
  {
    id: 'retirement-planning-21',
    question: 'List all your current debts: mortgage, car loans, credit cards, other. Note the balance, interest rate, and payoff date for each. Which will be paid off before retirement? Which will carry over?',
    category: 'research',
    question_number: 21
  },
  {
    id: 'retirement-planning-22',
    question: 'Research the cost of living in 3 places you might retire. Compare: housing, taxes, healthcare, entertainment. Document specific neighborhoods or communities. What trade-offs emerge?',
    category: 'research',
    question_number: 22
  },
  {
    id: 'retirement-planning-23',
    question: 'Calculate your current savings rate: monthly contributions to retirement accounts. At this rate, what will your nest egg be at retirement? Use a compound interest calculator. Is this enough?',
    category: 'research',
    question_number: 23
  },
  {
    id: 'retirement-planning-24',
    question: 'Research long-term care costs in your area: nursing home, assisted living, in-home care. Document monthly costs. Calculate: how many years would your savings cover? What insurance options exist?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'retirement-planning-25',
    question: 'Document your employer retirement benefits: 401k match, pension, retiree health insurance, other. What do you get if you retire at 55? 60? 65? What\'s the cost of leaving early?',
    category: 'research',
    question_number: 25
  },
  {
    id: 'retirement-planning-26',
    question: 'Research the 4% rule and alternative withdrawal strategies. Calculate what your nest egg would provide annually at 3%, 4%, and 5% withdrawal rates. Which feels right given your risk tolerance?',
    category: 'research',
    question_number: 26
  },
  {
    id: 'retirement-planning-27',
    question: 'List every recurring subscription and membership you have. Calculate the annual cost. Which would you keep in retirement? Which could you drop? What would you add?',
    category: 'research',
    question_number: 27
  },
  {
    id: 'retirement-planning-28',
    question: 'Research required minimum distributions (RMDs) for your retirement accounts. At what age do they start? Calculate your estimated RMD. How will this affect your taxes and spending?',
    category: 'research',
    question_number: 28
  },
  {
    id: 'retirement-planning-29',
    question: 'Document your current tax situation: federal bracket, state taxes, deductions. Research how this changes in retirement with Social Security, RMDs, and different income sources. What strategies could lower your tax burden?',
    category: 'research',
    question_number: 29
  },

  // PLANNING QUESTIONS (16 questions - 27%)
  {
    id: 'retirement-planning-30',
    question: 'Create a detailed vision of your ideal retirement day at age 70. What time do you wake up? What fills your morning? Afternoon? Evening? Who do you interact with? What gives the day meaning?',
    category: 'planning',
    question_number: 30
  },
  {
    id: 'retirement-planning-31',
    question: 'Design your retirement in phases: Year 1-5 (go-go years), Year 6-15 (slow-go years), Year 16+ (no-go years). What activities fit each phase? How do costs differ? What preparation does each require?',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'retirement-planning-32',
    question: 'Plan your healthcare strategy: When will you enroll in Medicare? What supplemental coverage do you need? How will you cover costs between retirement and Medicare eligibility? What\'s your backup plan?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'retirement-planning-33',
    question: 'Map out your Social Security strategy: At what age will you claim? If married, what\'s your spousal strategy? How does this coordinate with other income sources? What if you change your mind?',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'retirement-planning-34',
    question: 'Design your portfolio transition strategy: What\'s your allocation today? What should it be at retirement? Create a year-by-year plan to shift from growth to income. When will you rebalance?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'retirement-planning-35',
    question: 'Plan your withdrawal strategy: Which accounts will you tap first? How will you minimize taxes? What\'s your plan for market downturns? How much cash buffer will you keep?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'retirement-planning-36',
    question: 'Create a debt elimination timeline: Which debts will you pay off before retirement? What\'s your monthly payment plan? What would you do with that monthly payment once the debt is gone?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'retirement-planning-37',
    question: 'Design your housing strategy: Will you stay, downsize, relocate, or split time between places? When will you make this move? What needs to happen first? What\'s plan B?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'retirement-planning-38',
    question: 'Plan your purpose and identity transition: What will give you meaning beyond work? How will you introduce yourself? What communities will you join? What commitments will fill your calendar?',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'retirement-planning-39',
    question: 'Map your family considerations: Do you plan to help kids financially? Support aging parents? Leave an inheritance? How do these goals affect your retirement timeline and spending?',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'retirement-planning-40',
    question: 'Create contingency plans for: market crash, unexpected health costs, outliving your money, losing a spouse. For each scenario, what specific actions would you take? What buffers do you need?',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'retirement-planning-41',
    question: 'Design your work-to-retirement transition: Cold turkey or gradual? Part-time work? Consulting? Phased retirement? What does year -2, year -1, and year 1 of retirement look like?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'retirement-planning-42',
    question: 'Plan your legacy: What do you want to leave behind? To whom? In what form? What charitable causes matter? Create specific amounts and vehicles (accounts, insurance, trusts).',
    category: 'planning',
    question_number: 42
  },
  {
    id: 'retirement-planning-43',
    question: 'Map out your bucket list for retirement: 10 experiences you want to have. For each: estimated cost, best timing, who joins you, what preparation is needed. Which are non-negotiable?',
    category: 'planning',
    question_number: 43
  },
  {
    id: 'retirement-planning-44',
    question: 'Design your monthly retirement budget by category. Be specific about amounts. Include: fixed expenses, variable expenses, fun money, emergency buffer, healthcare. What\'s your total? How does it compare to your income?',
    category: 'planning',
    question_number: 44
  },
  {
    id: 'retirement-planning-45',
    question: 'Create your retirement document checklist: What legal documents do you need? (will, power of attorney, healthcare directive, beneficiary designations). Who needs copies? When will you review them?',
    category: 'planning',
    question_number: 45
  },

  // ACTION QUESTIONS (15 questions - 25%)
  {
    id: 'retirement-planning-46',
    question: 'Open or log into your Social Security account at ssa.gov today. Review your earnings history for errors. Document your projected benefit at different claiming ages. Take screenshots for your records.',
    category: 'action',
    question_number: 46
  },
  {
    id: 'retirement-planning-47',
    question: 'Schedule a meeting with your 401k or IRA provider within the next 2 weeks. Prepare 5 specific questions about fees, allocation, and withdrawal options. Document what you learn.',
    category: 'action',
    question_number: 47
  },
  {
    id: 'retirement-planning-48',
    question: 'Calculate your retirement number today: Annual spending needed × 25 = retirement nest egg target. Write this number down. How close are you? What monthly savings would close the gap?',
    category: 'action',
    question_number: 48
  },
  {
    id: 'retirement-planning-49',
    question: 'Review all your retirement account beneficiaries this week. Are they current? Do they reflect your wishes? Update any that are outdated. Document where each account is held.',
    category: 'action',
    question_number: 49
  },
  {
    id: 'retirement-planning-50',
    question: 'Increase your retirement contribution by 1% starting next paycheck. Calculate what this adds to your nest egg by retirement. If 1% is too much, start with 0.5%. Set a reminder to increase again in 6 months.',
    category: 'action',
    question_number: 50
  },
  {
    id: 'retirement-planning-51',
    question: 'Track every dollar you spend for the next 30 days. Use an app, spreadsheet, or notebook. Categorize each expense. At the end, identify 3 spending patterns that need to change before retirement.',
    category: 'action',
    question_number: 51
  },
  {
    id: 'retirement-planning-52',
    question: 'Schedule a physical exam this month and be honest about your health. Ask your doctor: What health issues should I address now to ensure a healthy retirement? Document their advice and create action steps.',
    category: 'action',
    question_number: 52
  },
  {
    id: 'retirement-planning-53',
    question: 'Find and interview 2 people who retired in the past 3 years. Ask: What surprised you most? What do you wish you\'d known? What would you do differently? Document their insights.',
    category: 'action',
    question_number: 53
  },
  {
    id: 'retirement-planning-54',
    question: 'Choose one activity from your retirement vision and do it this month. Block 4 hours on your calendar. How does it feel? Do you want more or less of this? What did you learn?',
    category: 'action',
    question_number: 54
  },
  {
    id: 'retirement-planning-55',
    question: 'Create a specific action step for your biggest retirement concern. Write: "By [date], I will [specific action] to address [concern]." Share this commitment with someone who will follow up.',
    category: 'action',
    question_number: 55
  },
  {
    id: 'retirement-planning-56',
    question: 'Consolidate your retirement accounts if you have more than 3. Research rollover options this week. Make a list of all accounts, balances, and institutions. Create a plan to simplify by quarter-end.',
    category: 'action',
    question_number: 56
  },
  {
    id: 'retirement-planning-57',
    question: 'Set up automatic monthly transfers to your retirement accounts today. Even if it\'s just $50. Link your checking to your IRA or 401k. Make it automatic so you never have to think about it.',
    category: 'action',
    question_number: 57
  },
  {
    id: 'retirement-planning-58',
    question: 'Review your investment fees this week. Check expense ratios on all funds. Calculate total annual fees you\'re paying. Research lower-cost alternatives. High fees can cost you hundreds of thousands by retirement.',
    category: 'action',
    question_number: 58
  },
  {
    id: 'retirement-planning-59',
    question: 'Create a one-page retirement snapshot today: Current age, target retirement age, current savings, monthly contribution, projected nest egg, monthly income needed. Update this quarterly.',
    category: 'action',
    question_number: 59
  },
  {
    id: 'retirement-planning-60',
    question: 'Schedule your next retirement planning session: Pick a date 3 months from now. Block 2 hours on your calendar. Set an agenda: review progress, adjust strategy, tackle one new area. Make this a quarterly habit.',
    category: 'action',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for retirement-planning guide...`);

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert({
        id: question.id,
        question: question.question,
        category: question.category,
        template_id: 'retirement-planning',
        question_number: question.question_number
      });

    if (error) {
      console.error(`Error inserting question ${question.id}:`, error);
    } else {
      console.log(`✓ Inserted question ${question.question_number}`);
    }

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n✓ All questions inserted successfully!');

  // Verify counts
  const { data: insertedQuestions, error: countError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'retirement-planning');

  if (countError) {
    console.error('Error counting questions:', countError);
    return;
  }

  const categoryCounts = {
    reflection: 0,
    research: 0,
    planning: 0,
    action: 0
  };

  insertedQuestions?.forEach((q: any) => {
    categoryCounts[q.category as keyof typeof categoryCounts]++;
  });

  console.log('\n=== QUESTION BREAKDOWN ===');
  console.log(`Total: ${insertedQuestions?.length} questions`);
  console.log(`Foundation (reflection): ${categoryCounts.reflection} (${(categoryCounts.reflection / insertedQuestions!.length * 100).toFixed(1)}%)`);
  console.log(`Research: ${categoryCounts.research} (${(categoryCounts.research / insertedQuestions!.length * 100).toFixed(1)}%)`);
  console.log(`Planning: ${categoryCounts.planning} (${(categoryCounts.planning / insertedQuestions!.length * 100).toFixed(1)}%)`);
  console.log(`Action: ${categoryCounts.action} (${(categoryCounts.action / insertedQuestions!.length * 100).toFixed(1)}%)`);
}

insertQuestions();
