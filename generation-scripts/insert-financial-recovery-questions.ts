import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-14)
  {
    id: 'financial-recovery-1',
    question: 'Write about the moment you realized your financial situation had become a crisis. What specific event or realization triggered this awareness? What were you doing when it hit you?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 1
  },
  {
    id: 'financial-recovery-2',
    question: 'Document 3 financial decisions from the past 2 years that felt uncomfortable or risky at the time. For each: What pressure were you under? Who influenced the decision? Looking back, what was the real driver?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 2
  },
  {
    id: 'financial-recovery-3',
    question: 'Reflect on your earliest money memory from childhood. What did your family teach you about money - through words or actions? How does that show up in your current situation?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 3
  },
  {
    id: 'financial-recovery-4',
    question: 'List the last 5 times in the past year you avoided looking at your bank balance or credit card statement. What were you afraid you\'d find? What does this pattern tell you?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 4
  },
  {
    id: 'financial-recovery-5',
    question: 'Think about the conversations you had (or avoided) with your partner, family, or close friends about money in the 6 months before the crisis. What didn\'t you say? Why?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 5
  },
  {
    id: 'financial-recovery-6',
    question: 'Write about a time before this crisis when you felt financially secure or in control. What was different then? What specific habits or systems did you have that you\'ve lost?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 6
  },
  {
    id: 'financial-recovery-7',
    question: 'Document the physical and emotional sensations that come up when you think about money now. Where do you feel it in your body? When during the day is it worst?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 7
  },
  {
    id: 'financial-recovery-8',
    question: 'Reflect on 3 purchases or financial commitments from the past year that you justified to yourself but deep down knew were risky. What were you actually seeking or avoiding?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 8
  },
  {
    id: 'financial-recovery-9',
    question: 'List the money advice you\'ve given other people in the past. What\'s one piece of advice you gave others but didn\'t follow yourself? Why the disconnect?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 9
  },
  {
    id: 'financial-recovery-10',
    question: 'Think about Sunday nights over the past 3 months. What specific thoughts about money keep you awake? When did this pattern start?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 10
  },
  {
    id: 'financial-recovery-11',
    question: 'Write about someone you know who went through financial difficulty. What did you think about their situation then? How does that perspective feel now?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 11
  },
  {
    id: 'financial-recovery-12',
    question: 'Document the last time you felt proud about a financial decision. What made it feel right? What\'s different between that decision and the ones that led here?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 12
  },
  {
    id: 'financial-recovery-13',
    question: 'Reflect on the story you\'ve been telling yourself about why this happened. What parts of that story might be protecting you from harder truths?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 13
  },
  {
    id: 'financial-recovery-14',
    question: 'List 3 moments in the past 6 months when you had a chance to change course but didn\'t. What stopped you each time?',
    category: 'reflection',
    template_id: 'financial-recovery',
    question_number: 14
  },

  // RESEARCH QUESTIONS (15-26)
  {
    id: 'financial-recovery-15',
    question: 'Create a brutal honesty cash flow snapshot for the next 30 days. List every dollar coming in (with dates) and every essential expense that cannot be delayed. What\'s the actual gap?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 15
  },
  {
    id: 'financial-recovery-16',
    question: 'Document every debt you currently have. For each: exact amount owed, to whom, interest rate, minimum payment, and whether it\'s secured or unsecured. Which ones are truly urgent?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 16
  },
  {
    id: 'financial-recovery-17',
    question: 'Research your legal options: bankruptcy chapter 7 vs 13, debt settlement, credit counseling. For each option, write down: timeline, cost, credit impact, what you\'d lose, what you\'d keep.',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 17
  },
  {
    id: 'financial-recovery-18',
    question: 'List every source of income available to you in the next 60 days - including the uncomfortable ones (selling possessions, borrowing from family, gig work, unused PTO payout). Put actual dollar amounts next to each.',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 18
  },
  {
    id: 'financial-recovery-19',
    question: 'Inventory your non-negotiable monthly expenses. For each one, research: Can it be paused? Reduced? Replaced with cheaper alternative? What\'s the actual lowest version of this expense?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 19
  },
  {
    id: 'financial-recovery-20',
    question: 'Document every automatic payment, subscription, and recurring charge hitting your accounts. Check your last 3 months of statements. What can be cancelled TODAY?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 20
  },
  {
    id: 'financial-recovery-21',
    question: 'Research the current market value of any assets you own: car, home equity, retirement accounts, valuables. What could realistically be liquidated within 90 days if needed?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 21
  },
  {
    id: 'financial-recovery-22',
    question: 'List every creditor who\'s contacted you. For each: date of last contact, what they said, what you said, any threats made, any documentation sent. What\'s the actual legal timeline you\'re facing?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 22
  },
  {
    id: 'financial-recovery-23',
    question: 'Research free resources in your area: food banks, utility assistance programs, rent relief, medical payment plans, legal aid. Write down specific locations, hours, and what documentation they require.',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 23
  },
  {
    id: 'financial-recovery-24',
    question: 'Document your current credit report details: credit score, every negative mark, when each will fall off, which accounts are in collections. What\'s the full damage?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 24
  },
  {
    id: 'financial-recovery-25',
    question: 'Research income protection available to you: unemployment benefits, disability insurance, emergency assistance programs. What\'s the application process for each? What documentation do you need?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 25
  },
  {
    id: 'financial-recovery-26',
    question: 'List every skill you have that people will pay for immediately - not dream jobs, actual gig work. Research going rates: tutoring, handiwork, pet sitting, delivery, freelancing. What could you start THIS week?',
    category: 'research',
    template_id: 'financial-recovery',
    question_number: 26
  },

  // PLANNING QUESTIONS (27-41)
  {
    id: 'financial-recovery-27',
    question: 'Design your 90-day crisis stabilization plan. What does financial stability look like 90 days from now? What are the 5 non-negotiable milestones that must happen to get there?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 27
  },
  {
    id: 'financial-recovery-28',
    question: 'Create your creditor communication strategy. Who do you need to contact? In what order? What exactly will you say? What can you realistically offer? Write the actual script.',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 28
  },
  {
    id: 'financial-recovery-29',
    question: 'Plan your income acceleration timeline. What are 3 concrete ways to increase income in the next 30, 60, and 90 days? Be specific about dollar amounts and start dates.',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 29
  },
  {
    id: 'financial-recovery-30',
    question: 'Design your "financial ICU" budget - the absolute minimum to keep the lights on and food on the table. What\'s the number? How does it compare to your current spending?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 30
  },
  {
    id: 'financial-recovery-31',
    question: 'Create your debt priority framework. If you can only pay some creditors, which ones and why? Consider: legal consequences, secured vs unsecured, essential services, family relationships.',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 31
  },
  {
    id: 'financial-recovery-32',
    question: 'Plan how you\'ll protect what\'s left. What assets or income sources must be preserved at all costs? What\'s your strategy to shield them? What professional help do you need?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 32
  },
  {
    id: 'financial-recovery-33',
    question: 'Design your relationship protection plan. Who needs to know about this situation? What will you tell them? How will you ask for help? What boundaries do you need to set?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 33
  },
  {
    id: 'financial-recovery-34',
    question: 'Create your timeline for major decisions: bankruptcy filing, debt settlement, asset liquidation, career change. What\'s the optimal sequence? What triggers each decision point?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 34
  },
  {
    id: 'financial-recovery-35',
    question: 'Plan your daily financial routine for the next 90 days. How often will you check balances? Update your tracking? Review progress? What system will keep you accountable?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 35
  },
  {
    id: 'financial-recovery-36',
    question: 'Design your early warning system for the future. What specific behaviors or numbers will trigger concern? At what point will you take action? Who will help you see the signs?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 36
  },
  {
    id: 'financial-recovery-37',
    question: 'Create your mental health protection strategy. What will you do when the shame or panic hits? Who can you call? What\'s your circuit breaker when you want to give up?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 37
  },
  {
    id: 'financial-recovery-38',
    question: 'Plan your skills development strategy for income rebuilding. What 2-3 skills could most quickly increase your earning power? What\'s the fastest, cheapest way to develop them?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 38
  },
  {
    id: 'financial-recovery-39',
    question: 'Design your credit rebuilding roadmap. What are the specific steps from where you are now to a decent credit score? What\'s the realistic timeline for each milestone?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 39
  },
  {
    id: 'financial-recovery-40',
    question: 'Create your expense reduction strategy without destroying your quality of life. What can you cut that won\'t make you miserable? What tiny luxuries must you keep for sanity?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 40
  },
  {
    id: 'financial-recovery-41',
    question: 'Plan your negotiation approach for each major creditor. What\'s your opening position? Your walk-away point? Your backup plan if they refuse? What leverage do you actually have?',
    category: 'planning',
    template_id: 'financial-recovery',
    question_number: 41
  },

  // ACTION QUESTIONS (42-55)
  {
    id: 'financial-recovery-42',
    question: 'Write the email or script you\'ll use to tell your closest person about this situation. When will you send it? What specific help will you ask for?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 42
  },
  {
    id: 'financial-recovery-43',
    question: 'Choose your legal path and document your decision. Will you file bankruptcy, attempt debt settlement, or try to manage it yourself? What made you choose this path? What\'s your deadline to start the process?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 43
  },
  {
    id: 'financial-recovery-44',
    question: 'Identify the single highest-impact action you can take this week to improve your situation. Write down the specific steps, time commitment, and expected outcome. When will you do it?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 44
  },
  {
    id: 'financial-recovery-45',
    question: 'Draft your creditor communication for the 3 most urgent debts. What exactly will you say? What can you offer? When will you make the calls? Write down the date and time.',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 45
  },
  {
    id: 'financial-recovery-46',
    question: 'Create your week-by-week action plan for the next 30 days. What specific tasks must happen each week? Who\'s responsible? What\'s the backup plan if something fails?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 46
  },
  {
    id: 'financial-recovery-47',
    question: 'Document your commitment to one immediate income-generating activity. What is it? When do you start? What\'s your target for the first 30 days? How will you measure success?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 47
  },
  {
    id: 'financial-recovery-48',
    question: 'Write down the 3 expenses you\'re cutting immediately and the specific date each cancellation takes effect. What\'s the total monthly savings? Where will that money go instead?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 48
  },
  {
    id: 'financial-recovery-49',
    question: 'Schedule your financial check-ins: daily, weekly, monthly. Put specific times in your calendar. What will you review at each check-in? Who will hold you accountable?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 49
  },
  {
    id: 'financial-recovery-50',
    question: 'Identify one person who will be your financial recovery accountability partner. Write down when you\'ll ask them, what you\'ll ask them to do, and how often you\'ll update them.',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 50
  },
  {
    id: 'financial-recovery-51',
    question: 'Create your emergency response protocol for when you can\'t pay a critical bill. Who will you call first? What will you say? What resources will you tap? Write the actual sequence of actions.',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 51
  },
  {
    id: 'financial-recovery-52',
    question: 'Document the first 3 steps of your credit rebuilding plan that you\'ll take in the next 60 days. Be specific: secured credit card application, dispute errors, payment arrangements?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 52
  },
  {
    id: 'financial-recovery-53',
    question: 'Write your personal "never again" rules - the specific financial behaviors you\'re committing to change permanently. How will you remember them? What\'s the consequence if you break one?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 53
  },
  {
    id: 'financial-recovery-54',
    question: 'Set up your basic tracking system for the next 90 days. Will you use an app, spreadsheet, notebook? When will you set it up? What numbers will you track daily?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 54
  },
  {
    id: 'financial-recovery-55',
    question: 'Schedule time to complete the rest of these questions and implement your plan. Block out specific hours in the next 7 days. What will you work on in each session?',
    category: 'action',
    template_id: 'financial-recovery',
    question_number: 55
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for financial-recovery guide...`);

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert([question]);

    if (error) {
      console.error(`Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${question.question_number}`);
    }
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify counts
  const { data: insertedQuestions, error: countError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'financial-recovery');

  if (!countError && insertedQuestions) {
    const counts = {
      reflection: insertedQuestions.filter(q => q.category === 'reflection').length,
      research: insertedQuestions.filter(q => q.category === 'research').length,
      planning: insertedQuestions.filter(q => q.category === 'planning').length,
      action: insertedQuestions.filter(q => q.category === 'action').length
    };

    console.log('\n📊 Question Breakdown:');
    console.log(`Foundation (reflection): ${counts.reflection} questions (${((counts.reflection / insertedQuestions.length) * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} questions (${((counts.research / insertedQuestions.length) * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} questions (${((counts.planning / insertedQuestions.length) * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} questions (${((counts.action / insertedQuestions.length) * 100).toFixed(1)}%)`);
    console.log(`Total: ${insertedQuestions.length} questions`);
  }
}

main();
