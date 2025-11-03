import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15)
  {
    id: 'buying-first-home-1',
    question: "Write about the last 3 times you felt 'at home' in a physical space. What specific details made each place feel that way? What patterns do you notice across these memories?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 1
  },
  {
    id: 'buying-first-home-2',
    question: "Document the last 5 major purchases over $1,000 you made. For each: How long did you research? Did you feel rushed or at peace with the decision? Do you still feel good about it? What does this pattern tell you about your decision-making style?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 2
  },
  {
    id: 'buying-first-home-3',
    question: "Think about the past year: When did you feel most constrained by your current living situation? Write about 3 specific moments when you thought 'I wish I had...' about your space.",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 3
  },
  {
    id: 'buying-first-home-4',
    question: "Reflect on your childhood home(s). What did you love? What did you hate? Which of those feelings still show up when you think about where you want to live now?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 4
  },
  {
    id: 'buying-first-home-5',
    question: "Write about a time in the past 2 years when an unexpected expense (medical, car, etc.) hit you. How did you handle it emotionally and financially? What does this tell you about your readiness for home ownership surprises?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 5
  },
  {
    id: 'buying-first-home-6',
    question: "Document your money habits over the past 6 months: When have you felt anxious about spending? When have you felt free? What purchases brought guilt versus satisfaction?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 6
  },
  {
    id: 'buying-first-home-7',
    question: "Think about Sunday evenings over the past 3 months. When you're at home, how do you feel? Restless? Content? What specific aspects of your space contribute to that feeling?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 7
  },
  {
    id: 'buying-first-home-8',
    question: "Write about 3 friends or family members whose homes you've visited recently. What did you envy? What made you think 'I'd never want that'? Why?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 8
  },
  {
    id: 'buying-first-home-9',
    question: "Reflect on the longest you've lived in one place. What made you stay? What made you eventually leave (or what would make you leave)? How does that inform what you're looking for now?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 9
  },
  {
    id: 'buying-first-home-10',
    question: "Document moments in the past year when you felt proud of maintaining or fixing something. What was satisfying about it? When have you felt overwhelmed by maintenance responsibilities?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 10
  },
  {
    id: 'buying-first-home-11',
    question: "Think about your commute over the past 6 months. What moments during your commute felt like wasted time? What moments felt valuable? What does this tell you about location priorities?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 11
  },
  {
    id: 'buying-first-home-12',
    question: "Write about the last time you had to choose between spending money now versus saving for the future. What did you choose? How did you feel about it afterward?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 12
  },
  {
    id: 'buying-first-home-13',
    question: "Reflect on your social life over the past 3 months. Where do you actually spend time? How far do you typically travel to see friends, go to places you love? What does this reveal about how location affects your life?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 13
  },
  {
    id: 'buying-first-home-14',
    question: "Document a time in the past year when you compromised on something important to you (relationship, job, living situation). How did it feel? What would make a compromise on a home feel okay versus resentful?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 14
  },
  {
    id: 'buying-first-home-15',
    question: "Think about your career trajectory over the next 5 years. Write down the 3 most likely scenarios (realistic, not just optimistic). How would each scenario affect where you'd want to live?",
    category: 'reflection',
    template_id: 'buying-first-home',
    question_number: 15
  },
  // RESEARCH QUESTIONS (16-28)
  {
    id: 'buying-first-home-16',
    question: "Create a spending snapshot: Track every dollar you spend for the next 2 weeks. Categorize into: Must-have, Should-have, Nice-to-have, Regret. What percentage goes to each? What could realistically shift toward a mortgage?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 16
  },
  {
    id: 'buying-first-home-17',
    question: "Research your current rent/housing cost for the past 12 months including all utilities, parking, fees. Calculate the total annual cost. Now calculate what percentage of your gross income that represents.",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 17
  },
  {
    id: 'buying-first-home-18',
    question: "Document your income stability: List your income for each of the past 24 months. Note any gaps, fluctuations, bonuses. What's your true 'guaranteed' monthly income you can count on?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 18
  },
  {
    id: 'buying-first-home-19',
    question: "Visit 3 neighborhoods you're considering at different times: weekday morning, weekday evening, weekend. For each visit, note: noise level, who you see, parking availability, how you feel. What patterns emerge?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 19
  },
  {
    id: 'buying-first-home-20',
    question: "Research home prices in your target area: Find 10 recent sales (past 6 months) of homes you'd consider. List price, sale price, days on market, price per square foot. What's the realistic range you're working with?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 20
  },
  {
    id: 'buying-first-home-21',
    question: "List every recurring monthly cost you'll have: student loans, car payment, subscriptions, insurance, phone, etc. Add them up. Now add estimated mortgage payment. Does this number make your stomach tight or feel manageable?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 21
  },
  {
    id: 'buying-first-home-22',
    question: "Research 5 homes currently listed in your target area and price range. For each, list: What you love, what's a dealbreaker, what you could live with, price per square foot. What trade-offs keep appearing?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 22
  },
  {
    id: 'buying-first-home-23',
    question: "Document your emergency fund: How many months of expenses could you cover if you lost your job today? How many months would you need to feel safe after a down payment and closing costs?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 23
  },
  {
    id: 'buying-first-home-24',
    question: "Call 3 mortgage lenders and get pre-qualification numbers. For each: max loan amount, estimated rate, estimated monthly payment, required down payment. What's the gap between what you're approved for and what feels comfortable?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 24
  },
  {
    id: 'buying-first-home-25',
    question: "Research property taxes, HOA fees, and insurance for 3 specific homes you're interested in. Calculate the total monthly cost beyond the mortgage. How does this change the affordability picture?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 25
  },
  {
    id: 'buying-first-home-26',
    question: "Map out your daily life: For 1 week, track everywhere you go (work, gym, groceries, social). How far is each from neighborhoods you're considering? Calculate actual commute times, not Google estimates.",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 26
  },
  {
    id: 'buying-first-home-27',
    question: "Interview 3 people who bought homes in the past 2 years. Ask: What surprised you about costs? What do you wish you'd known? What would you do differently? What are you glad you did?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 27
  },
  {
    id: 'buying-first-home-28',
    question: "Research closing costs for your price range in your area. List out all the fees: inspection, appraisal, title, attorney, etc. What's the total cash you need beyond the down payment?",
    category: 'research',
    template_id: 'buying-first-home',
    question_number: 28
  },
  // PLANNING QUESTIONS (29-45)
  {
    id: 'buying-first-home-29',
    question: "Create your non-negotiables list: Based on your reflection and research, what 3 things are absolute dealbreakers? What 3 things are absolute must-haves? Why each one?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 29
  },
  {
    id: 'buying-first-home-30',
    question: "Map out your financial buffer strategy: After down payment and closing costs, how much cash reserve do you need to feel safe? What's your plan to rebuild savings after purchase?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 30
  },
  {
    id: 'buying-first-home-31',
    question: "Design your home search timeline: When do you need to move? What's your ideal timeline? What's the latest you could push it? Build in buffers for each phase (search, offer, closing).",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 31
  },
  {
    id: 'buying-first-home-32',
    question: "Plan your trade-off framework: If you had to choose between location, size, condition, and price, rank them 1-4. Now write why. Test it against 3 real homes you've researched.",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 32
  },
  {
    id: 'buying-first-home-33',
    question: "Create your offer strategy: Based on current market research, what's your approach? Lowball and negotiate? Offer asking? Over asking? What contingencies are non-negotiable vs. nice-to-have?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 33
  },
  {
    id: 'buying-first-home-34',
    question: "Develop your worst-case financial plan: What if you lost your job 6 months after buying? What if major repair costs $15K in year one? Write out how you'd handle each scenario.",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 34
  },
  {
    id: 'buying-first-home-35',
    question: "Map your life stage transitions: What might change in the next 2 years? 5 years? (relationship, kids, aging parents, career). How does each potential home accommodate or block these futures?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 35
  },
  {
    id: 'buying-first-home-36',
    question: "Design your monthly budget for post-purchase: List every category with realistic numbers including home costs. Where will you cut from your current spending? What are you willing to give up?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 36
  },
  {
    id: 'buying-first-home-37',
    question: "Plan your inspection strategy: What issues are you willing to fix yourself? What requires professional repair? What's a walk-away issue? Set your dollar threshold for each.",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 37
  },
  {
    id: 'buying-first-home-38',
    question: "Create your neighborhood priority framework: Rank these by importance to YOUR life: walkability, schools, nightlife, quiet, diversity, appreciation potential, commute. Test against real neighborhoods.",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 38
  },
  {
    id: 'buying-first-home-39',
    question: "Develop your competition strategy: In your market, how fast do homes sell? What's your plan for seeing homes quickly? How will you make decisions under pressure while staying true to your must-haves?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 39
  },
  {
    id: 'buying-first-home-40',
    question: "Map out your support team needs: Who will you need? (agent, lender, attorney, inspector, etc.) What questions will you ask each to ensure they're right for you?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 40
  },
  {
    id: 'buying-first-home-41',
    question: "Plan your down payment strategy: 3.5%? 10%? 20%? What are the trade-offs of each for YOUR situation? (monthly payment, PMI, cash reserves, closing timeline)",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 41
  },
  {
    id: 'buying-first-home-42',
    question: "Design your house-poor prevention plan: What lifestyle costs are you unwilling to sacrifice? (travel, hobbies, going out) How do you ensure the house doesn't consume your life?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 42
  },
  {
    id: 'buying-first-home-43',
    question: "Create your decision-making framework: When you find a home you like, what's your process? Sleep on it? Trust your gut? Spreadsheet comparison? Who do you consult? What's your timeline?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 43
  },
  {
    id: 'buying-first-home-44',
    question: "Plan for the lifestyle shift: How will your daily life change? Morning routines? Social patterns? Weekend activities? What are you gaining versus losing? Are you at peace with this trade?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 44
  },
  {
    id: 'buying-first-home-45',
    question: "Develop your renovation vs. move-in ready strategy: What projects are you excited to tackle? What sounds exhausting? How much time/money/energy do you realistically have? What's your 'done enough' threshold?",
    category: 'planning',
    template_id: 'buying-first-home',
    question_number: 45
  },
  // ACTION QUESTIONS (46-60)
  {
    id: 'buying-first-home-46',
    question: "Schedule a budget review session: Block 2 hours this week to go through your last 3 months of spending. Create categories and calculate realistic post-home-purchase budget. Share with accountability partner.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 46
  },
  {
    id: 'buying-first-home-47',
    question: "Start your cash flow tracking: Set up a system (app or spreadsheet) to track every dollar for the next 30 days. Categorize ruthlessly. This is your real spending, not aspirational.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 47
  },
  {
    id: 'buying-first-home-48',
    question: "Get pre-approved (not just pre-qualified): Contact 3 lenders this week, submit full applications, get formal pre-approval letters. Compare rates, terms, and how each made you feel.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 48
  },
  {
    id: 'buying-first-home-49',
    question: "Visit 5 open houses this weekend in different neighborhoods: Don't filter by 'perfect match' - go to learn. For each, note what surprised you, what you loved, what was a dealbreaker.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 49
  },
  {
    id: 'buying-first-home-50',
    question: "Create your home search criteria document: Write down must-haves, nice-to-haves, dealbreakers. Include specific numbers (sq ft, bedrooms, max price, commute time). Share with your agent.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 50
  },
  {
    id: 'buying-first-home-51',
    question: "Build your home buying team: Research and schedule intro calls with 3 real estate agents this week. Ask about their experience, communication style, and how they handle competitive markets.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 51
  },
  {
    id: 'buying-first-home-52',
    question: "Set up automated savings: Based on your timeline, calculate how much more you need for down payment + closing + reserves. Set up automatic transfers to a separate account. Make it non-negotiable.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 52
  },
  {
    id: 'buying-first-home-53',
    question: "Create your home search alert system: Set up alerts on Zillow, Redfin, and Realtor.com with your specific criteria. Check daily. Track how long homes stay on market in your target area.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 53
  },
  {
    id: 'buying-first-home-54',
    question: "Schedule neighborhood reconnaissance: Pick 3 neighborhoods and visit each at different times. Talk to people at coffee shops, walk around, sit in parks. Document what you notice.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 54
  },
  {
    id: 'buying-first-home-55',
    question: "Audit your debt: List every debt with balance, interest rate, and minimum payment. Calculate debt-to-income ratio. If over 43%, create plan to pay down or increase income before purchasing.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 55
  },
  {
    id: 'buying-first-home-56',
    question: "Research homeowner's insurance: Get 3 quotes for a home in your target price range and area. Add this real number to your monthly cost calculation.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 56
  },
  {
    id: 'buying-first-home-57',
    question: "Attend a first-time homebuyer workshop: Find one offered by your city, credit union, or HUD. Go this month. Take notes. Ask questions about down payment assistance programs.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 57
  },
  {
    id: 'buying-first-home-58',
    question: "Create your home evaluation scorecard: Build a spreadsheet with your criteria (location, size, condition, price, etc.) weighted by importance. Test it on 5 current listings.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 58
  },
  {
    id: 'buying-first-home-59',
    question: "Schedule money conversation: If buying with partner, block 3 hours for honest discussion about finances, risk tolerance, must-haves, fears. If solo, have this conversation with trusted friend/family.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 59
  },
  {
    id: 'buying-first-home-60',
    question: "Document your gut check system: After each home you visit, immediately voice memo your first reaction. Wait 24 hours, write down rational thoughts. Compare. This is your decision-making data.",
    category: 'action',
    template_id: 'buying-first-home',
    question_number: 60
  }
];

async function main() {
  console.log('🚀 Inserting 60 questions for buying-first-home...\n');

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
