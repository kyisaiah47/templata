import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15) - 25%
  {
    id: 'college-savings-1',
    question: "Think about your own college experience (or lack thereof). Write about 3 specific moments that shaped how you feel about higher education today. What emotions come up when you imagine your child's college journey?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 1
  },
  {
    id: 'college-savings-2',
    question: "Write about the last 3 times you made a major financial sacrifice for your child. What made you say yes? When have you said no? What does this pattern tell you about your financial decision-making as a parent?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 2
  },
  {
    id: 'college-savings-3',
    question: "Reflect on conversations about money in your childhood home. What was never discussed? What do you wish your parents had told you? How is this influencing what you want to do differently (or the same) with your child?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 3
  },
  {
    id: 'college-savings-4',
    question: "Document the last 5 times you felt pressure (from family, friends, social media) about what you 'should' provide for your child. Which expectations feel authentic to your values? Which feel like external noise?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 4
  },
  {
    id: 'college-savings-5',
    question: "Think about your current financial habits over the past 6 months. When have you prioritized long-term security over short-term pleasure? When have you done the opposite? What does this reveal about your natural saving tendencies?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 5
  },
  {
    id: 'college-savings-6',
    question: "Write about 3 people you know whose approach to paying for their kids' college you either admire or question. What specifically do you respect or reject about each approach? Why?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 6
  },
  {
    id: 'college-savings-7',
    question: "Reflect on a time in the past year when you had competing financial priorities (emergency fund, retirement, vacation, home repair). How did you decide? What does this tell you about how you'll balance college savings against other goals?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 7
  },
  {
    id: 'college-savings-8',
    question: "Think about your relationship with debt - student loans, credit cards, mortgage. Write about a moment when debt felt empowering versus suffocating. How do these experiences shape what you want for your child?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 8
  },
  {
    id: 'college-savings-9',
    question: "Document moments over the past year when your child showed intense interest in something. What did they pursue without being asked? What does this tell you about the type of education that might actually engage them?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 9
  },
  {
    id: 'college-savings-10',
    question: "Reflect on your career path. How much did your degree actually matter versus skills you learned elsewhere? When you imagine your child at 30, what matters more - the school name or what they learned to do?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 10
  },
  {
    id: 'college-savings-11',
    question: "Write about the last time you and your partner (if applicable) had a serious disagreement about money. How did you resolve it? What does this reveal about how you'll need to navigate college savings decisions together?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 11
  },
  {
    id: 'college-savings-12',
    question: "Think about your retirement planning right now. Write honestly: Do you feel ahead, on track, or behind? How does this reality affect your willingness to prioritize college savings?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 12
  },
  {
    id: 'college-savings-13',
    question: "Document the messages your child receives about college from school, friends, media, family. What narratives are they absorbing? Which align with your values and which concern you?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 13
  },
  {
    id: 'college-savings-14',
    question: "Reflect on a major long-term commitment you successfully kept (paying off debt, building savings, maintaining health habits). What made you stick with it? What made it hard? How can those insights apply to 18 years of college saving?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 14
  },
  {
    id: 'college-savings-15',
    question: "Write about what 'success' looks like for your child at age 25. Be specific. How much does a college degree factor into that picture? What else matters more or equally?",
    category: 'reflection',
    template_id: 'college-savings',
    question_number: 15
  },
  // RESEARCH QUESTIONS (16-29) - 23%
  {
    id: 'college-savings-16',
    question: "Research current costs for 3 different college scenarios: in-state public, out-of-state public, private university. For each, list: tuition, room & board, fees, books, total annual cost. Now project 18 years forward at 5% inflation. Write down the numbers.",
    category: 'research',
    template_id: 'college-savings',
    question_number: 16
  },
  {
    id: 'college-savings-17',
    question: "Calculate your true monthly discretionary spending: Track every non-essential dollar for the next 2 weeks. Categories: dining out, entertainment, subscriptions, impulse purchases. What's your realistic monthly average? How much could shift to college savings without pain?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 17
  },
  {
    id: 'college-savings-18',
    question: "Research 529 plans available in your state: List fees, investment options, tax benefits, contribution limits. Compare to your state's plan versus top-rated national plans. What are the actual differences in your situation?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 18
  },
  {
    id: 'college-savings-19',
    question: "Document your complete monthly cash flow for the past 3 months: All income sources, all fixed expenses, all variable expenses. Calculate true monthly surplus or deficit. Be brutally honest - this is your reality for college savings.",
    category: 'research',
    template_id: 'college-savings',
    question_number: 19
  },
  {
    id: 'college-savings-20',
    question: "Research scholarship opportunities: Find 10 scholarships your child might qualify for based on current interests, demographics, or achievements. For each, note: amount, requirements, competition level. What's realistically achievable?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 20
  },
  {
    id: 'college-savings-21',
    question: "Interview 3 parents whose kids are currently in college or recently graduated. Ask: What did college actually cost? What surprised you? What financial aid did you get? What would you do differently? Take detailed notes.",
    category: 'research',
    template_id: 'college-savings',
    question_number: 21
  },
  {
    id: 'college-savings-22',
    question: "Calculate your current savings rate: Total saved in the past 12 months across all accounts (retirement, emergency, other) divided by gross income. What percentage are you actually saving? Is there room for more?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 22
  },
  {
    id: 'college-savings-23',
    question: "Research alternative paths: Look up costs and outcomes for community college transfer, trade schools, apprenticeships, coding bootcamps, gap year programs. For 5 alternatives, note: total cost, time to completion, average starting salary.",
    category: 'research',
    template_id: 'college-savings',
    question_number: 23
  },
  {
    id: 'college-savings-24',
    question: "List every current debt you have: mortgage, car loans, student loans, credit cards. For each: balance, interest rate, minimum payment, payoff timeline. How do these obligations affect your capacity to save for college?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 24
  },
  {
    id: 'college-savings-25',
    question: "Research work-study and student employment: Find 10 typical on-campus jobs at target schools. Note: hours per week, pay rate, annual earnings potential. How much could your child realistically contribute?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 25
  },
  {
    id: 'college-savings-26',
    question: "Calculate the compound growth: If you save $X per month starting today until your child is 18, at 7% average return, what's the final amount? Try 5 different monthly amounts ($50, $100, $200, $300, $500). Which feels doable?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 26
  },
  {
    id: 'college-savings-27',
    question: "Research financial aid eligibility: Use 3 different FAFSA calculators with your real financial data. What's your Expected Family Contribution (EFC)? How does this compare to college costs you researched? What's the gap?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 27
  },
  {
    id: 'college-savings-28',
    question: "Document your income trajectory: List your household income for the past 5 years. Note raises, bonuses, side income. Project realistic growth over the next 10 years. How might this affect your ability to increase contributions?",
    category: 'research',
    template_id: 'college-savings',
    question_number: 28
  },
  {
    id: 'college-savings-29',
    question: "Research grandparent/family contribution options: Look up 529 gift contribution rules, tax implications, annual gift limits. If family wants to help, what's the most tax-efficient structure? Document specific options.",
    category: 'research',
    template_id: 'college-savings',
    question_number: 29
  },
  // PLANNING QUESTIONS (30-45) - 27%
  {
    id: 'college-savings-30',
    question: "Create your college savings philosophy statement: Based on your reflection and research, write 3-5 sentences about what you will and won't do financially for your child's education. What's your line?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 30
  },
  {
    id: 'college-savings-31',
    question: "Design your contribution strategy: Given your research, what monthly amount will you commit to? What triggers (raise, bonus, tax refund) would increase it? What circumstances would decrease it? Be specific.",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 31
  },
  {
    id: 'college-savings-32',
    question: "Map out your priority hierarchy: Rank these financial goals in order: emergency fund, retirement, college savings, debt payoff, home purchase, other children. Why this order? How much goes to each?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 32
  },
  {
    id: 'college-savings-33',
    question: "Plan your investment allocation strategy: Based on your child's age and your risk tolerance, what percentage stocks vs bonds? How will this shift over time? Use a target-date fund or manage yourself?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 33
  },
  {
    id: 'college-savings-34',
    question: "Create your coverage goal: Aim to cover 100% of state school costs? 50% of any school? First two years anywhere? Define your specific target dollar amount and rationale.",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 34
  },
  {
    id: 'college-savings-35',
    question: "Design your communication plan with your child: At what age will you discuss college costs? What will you tell them about savings? How will you frame expectations about their contribution? Write the key messages.",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 35
  },
  {
    id: 'college-savings-36',
    question: "Plan for multiple children: If you have or plan to have more kids, how will you handle equity? Equal amounts per child? Same percentage of costs? Different based on needs? What feels fair?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 36
  },
  {
    id: 'college-savings-37',
    question: "Map out Plan B scenarios: What if your child gets a full scholarship? Doesn't go to college? Goes to expensive school? Each scenario - what happens to the 529 money? What's your backup plan?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 37
  },
  {
    id: 'college-savings-38',
    question: "Create your student loan philosophy: Are you comfortable with your child taking some loans? If so, how much is reasonable? What amount would you consider harmful? Where's your boundary?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 38
  },
  {
    id: 'college-savings-39',
    question: "Design your account ownership structure: Who owns the 529 - you or grandparents? One account or multiple? How does this affect financial aid? Make a decision based on your research.",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 39
  },
  {
    id: 'college-savings-40',
    question: "Plan your values-based guidance: What non-financial criteria will you encourage for choosing a school? (fit, mental health, career outcomes, location, etc.) How will you balance these against cost?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 40
  },
  {
    id: 'college-savings-41',
    question: "Map your retirement vs college trade-offs: If you can't fully fund both, what's your strategy? What percentage of your savings capacity goes to each? Why? How does the 'you can't borrow for retirement' advice sit with you?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 41
  },
  {
    id: 'college-savings-42',
    question: "Create your review and adjustment plan: How often will you reassess your savings amount? What life changes trigger a review? (new job, another child, financial setback) Build in flexibility.",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 42
  },
  {
    id: 'college-savings-43',
    question: "Design your financial transparency approach: What will you share with your child about costs, savings, what you can afford? What will you keep private? At what ages does this change?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 43
  },
  {
    id: 'college-savings-44',
    question: "Plan your merit vs need positioning: Will you encourage your child toward schools where they might get merit aid? How do you balance prestige, fit, and financial reality in guiding their list?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 44
  },
  {
    id: 'college-savings-45',
    question: "Map out your partner alignment plan: If you have a partner, how will you ensure you're on the same page about amounts, sacrifices, expectations? What's your conflict resolution process for money disagreements?",
    category: 'planning',
    template_id: 'college-savings',
    question_number: 45
  },
  // ACTION QUESTIONS (46-60) - 25%
  {
    id: 'college-savings-46',
    question: "Open your 529 account this week: Choose your state's or a top-rated plan. Complete the application. Set up the initial transfer. Even if it's just $25, start. Document which plan you chose and why.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 46
  },
  {
    id: 'college-savings-47',
    question: "Set up automatic monthly contributions: Based on your planning, schedule automatic transfers from checking to 529. Make it happen the day after payday. Start with an amount that won't make you cancel it in 3 months.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 47
  },
  {
    id: 'college-savings-48',
    question: "Create your budget reallocation: Identify 3 specific expenses you'll reduce this month to fund college savings. Cancel a subscription? Reduce dining out? What exactly will you cut? Do it today.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 48
  },
  {
    id: 'college-savings-49',
    question: "Schedule a partner money meeting: Block 2 hours this week to discuss college savings together. Use your research and planning notes. Align on monthly amount, approach, and philosophy. Document agreements.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 49
  },
  {
    id: 'college-savings-50',
    question: "Set up gift contribution system: If grandparents or family want to contribute, send them the 529 account information and instructions. Create an easy way for birthday/holiday gifts to go to college fund.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 50
  },
  {
    id: 'college-savings-51',
    question: "Create your annual review calendar: Set recurring reminders to review college savings on specific date each year. Include: check balance, reassess contribution amount, review investment allocation, update college cost projections.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 51
  },
  {
    id: 'college-savings-52',
    question: "Document your decisions: Create a simple document with your college savings philosophy, target amount, monthly contribution, and reasoning. Save it. You'll want to remember why you made these choices.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 52
  },
  {
    id: 'college-savings-53',
    question: "Set up windfall allocation plan: Create a rule - when you get bonus, tax refund, or unexpected money, X% automatically goes to college savings. Set up separate account to hold these funds until transfer.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 53
  },
  {
    id: 'college-savings-54',
    question: "Build your scholarship tracking system: Create a spreadsheet or use a scholarship search tool. Set monthly reminder to add 5 new potential scholarships. Build this list years before your child applies.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 54
  },
  {
    id: 'college-savings-55',
    question: "Start the conversation with your child: This month, have an age-appropriate discussion about college and money. Don't lecture - ask questions about their dreams. Plant seeds about costs and planning.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 55
  },
  {
    id: 'college-savings-56',
    question: "Calculate and celebrate milestones: Set specific savings milestones ($1K, $5K, $10K, etc). Create a visual tracker. Plan small celebrations when you hit each goal. Make progress visible.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 56
  },
  {
    id: 'college-savings-57',
    question: "Optimize your investment allocation: Log into your 529 account. Review current allocation. Adjust based on your child's age and risk tolerance. Set calendar reminder to rebalance annually.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 57
  },
  {
    id: 'college-savings-58',
    question: "Research and apply for your state's tax deduction: Find your state's 529 tax benefit rules. Calculate your deduction. Ensure you're contributing enough to maximize it. Adjust if needed.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 58
  },
  {
    id: 'college-savings-59',
    question: "Create accountability check-ins: Find a friend also saving for college. Schedule quarterly coffee to share progress, challenges, tips. Or join an online community. Make this journey less lonely.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 59
  },
  {
    id: 'college-savings-60',
    question: "Start the learning habit: Sign up for one college planning newsletter or podcast. Commit to staying informed about costs, financial aid changes, and strategies as your child grows. Add to your routine.",
    category: 'action',
    template_id: 'college-savings',
    question_number: 60
  }
];

async function main() {
  console.log('🚀 Inserting 60 questions for college-savings...\n');

  // First, check for existing questions and delete them
  const { data: existing, error: fetchError } = await supabase
    .from('questions')
    .select('id')
    .eq('template_id', 'college-savings');

  if (fetchError) {
    console.error('❌ Error fetching existing questions:', fetchError);
  } else if (existing && existing.length > 0) {
    console.log(`Found ${existing.length} existing questions. Deleting...\n`);
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('template_id', 'college-savings');

    if (deleteError) {
      console.error('❌ Error deleting existing questions:', deleteError);
      return;
    }
    console.log('✅ Deleted existing questions\n');
  }

  // Insert new questions
  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`❌ Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✅ Inserted question ${question.question_number}: ${question.question.substring(0, 60)}...`);
    }
  }

  console.log('\n✨ All questions inserted successfully!');
}

main();
