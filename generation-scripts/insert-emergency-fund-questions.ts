#!/usr/bin/env tsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (reflection)
  {
    id: 'building-emergency-fund-1',
    question: 'Think about the last 3 times in your life when something unexpected happened that cost you money. What were they? How did you handle paying for them? What feelings came up when you realized you needed that money?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 1
  },
  {
    id: 'building-emergency-fund-2',
    question: 'Write about your earliest memory of financial stress in your life - either yours or someone close to you. What happened? How did people react? How do you think this shapes how you think about emergency funds today?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 2
  },
  {
    id: 'building-emergency-fund-3',
    question: 'List 5 times in the past year when you said "I should be saving more" or felt guilty about not having savings. What triggered each thought? What did you do (or not do) after each moment?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 3
  },
  {
    id: 'building-emergency-fund-4',
    question: 'Document your current relationship with the idea of "safety" and money. When you think about having 6 months of expenses saved, what emotion comes first? Excitement? Anxiety? Doubt? Why do you think that is?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 4
  },
  {
    id: 'building-emergency-fund-5',
    question: 'Reflect on someone you know who has financial security. What do you notice about how they talk about money? How they make spending decisions? What\'s different from your current approach?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 5
  },
  {
    id: 'building-emergency-fund-6',
    question: 'Think about the last time you had $500+ in your checking account that wasn\'t earmarked for anything. What happened to it? Did you spend it? Save it? How did it feel having that cushion?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 6
  },
  {
    id: 'building-emergency-fund-7',
    question: 'Write down 3 financial decisions you made in the past 6 months that you\'d change if you could. What would you do differently? What pattern do you notice across these decisions?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 7
  },
  {
    id: 'building-emergency-fund-8',
    question: 'Document what "enough" means to you. If someone said "you have enough savings," what number pops into your head? Where does that number come from? Your parents? Media? A specific experience?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 8
  },
  {
    id: 'building-emergency-fund-9',
    question: 'Reflect on the difference between how you spend when you\'re stressed vs. calm. Think of specific examples from the past month. What does this tell you about building savings during different emotional states?',
    category: 'reflection',
    template_id: 'building-emergency-fund',
    question_number: 9
  },

  // Research Questions
  {
    id: 'building-emergency-fund-10',
    question: 'Document your true monthly expenses: Go through your last 3 months of transactions and categorize every expense over $20. What\'s your actual average monthly spending? What surprises you about this number?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 10
  },
  {
    id: 'building-emergency-fund-11',
    question: 'Calculate your current monthly "must-pay" baseline: Rent/mortgage, utilities, minimum debt payments, insurance, food, transportation. What\'s the absolute minimum you need to survive each month? Now add 20% - why?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 11
  },
  {
    id: 'building-emergency-fund-12',
    question: 'Research what emergencies have actually happened to people in your specific situation: Ask 5 people in similar life circumstances (age, job type, family situation) what unexpected expenses they\'ve faced in the past 3 years. What patterns do you see?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 12
  },
  {
    id: 'building-emergency-fund-13',
    question: 'List every source of money you could access in a true emergency today: Credit cards (available credit), people who might loan you money, items you could sell, side income possibilities. Total it up. How does this compare to your "must-pay" monthly baseline?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 13
  },
  {
    id: 'building-emergency-fund-14',
    question: 'Document your income stability: Is your income the same every month or does it vary? Write down the lowest and highest months in the past year. If you\'re salaried, what would happen to your income if you lost your job? How long does your industry typically take for job searches?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 14
  },
  {
    id: 'building-emergency-fund-15',
    question: 'Research high-yield savings accounts: Find 3 banks offering competitive rates right now. What are the rates? Any fees? Minimum balances? How easy is it to withdraw money? Which one feels right for you and why?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 15
  },
  {
    id: 'building-emergency-fund-16',
    question: 'Calculate your current "leak rate": Track every purchase under $20 for one week. What\'s your daily average on small purchases? Multiply by 365. What does this tell you about where emergency fund money might come from?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 16
  },
  {
    id: 'building-emergency-fund-17',
    question: 'Identify your financial obligations to others: Who depends on your income? Parents, kids, siblings, pets? For each, estimate what you\'d need monthly if something happened to you. How does this change your emergency fund target?',
    category: 'research',
    template_id: 'building-emergency-fund',
    question_number: 17
  },

  // Planning Questions
  {
    id: 'building-emergency-fund-18',
    question: 'Design your emergency fund target: Based on your must-pay baseline and your risk factors (job stability, dependents, health), decide: 3, 4, 5, or 6 months of expenses? Write out your reasoning for this specific number, not generic advice.',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 18
  },
  {
    id: 'building-emergency-fund-19',
    question: 'Create your funding timeline: If you could save $X per month realistically (not aspirationally), how long until you hit your target? Write out milestone goals: First $500, first $1000, one month of expenses, etc. What date would you hit each?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 19
  },
  {
    id: 'building-emergency-fund-20',
    question: 'Plan for the motivation valley: Most people start strong then quit around month 2-3. What specifically will you do when the excitement wears off and saving feels boring or pointless? Write 3 concrete strategies.',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 20
  },
  {
    id: 'building-emergency-fund-21',
    question: 'Map your expense variability: Which months of the year are expensive for you? (holidays, insurance premiums, back-to-school, etc.) How will you maintain emergency fund contributions during these months? What\'s your backup plan?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 21
  },
  {
    id: 'building-emergency-fund-22',
    question: 'Design your "definition of emergency": Create your personal rules for when you can touch this money. What counts as an emergency? What doesn\'t? How will you handle gray areas like "great deal on something I need"?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 22
  },
  {
    id: 'building-emergency-fund-23',
    question: 'Plan your account structure: Will you keep emergency savings in the same bank as checking or separate? Same login or purposely harder to access? What\'s your reasoning based on YOUR relationship with money and impulse control?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 23
  },
  {
    id: 'building-emergency-fund-24',
    question: 'Strategize your savings source: Look at your income and expenses. Will this money come from cutting spending, earning more, or both? For each source, write specific plans. If cutting spending, what exactly? If earning more, doing what?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 24
  },
  {
    id: 'building-emergency-fund-25',
    question: 'Create your celebration milestones: When will you acknowledge progress? Every $500? Every month of expenses? What will you do to celebrate that doesn\'t involve spending the money? Why is this important for you specifically?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 25
  },
  {
    id: 'building-emergency-fund-26',
    question: 'Plan for income disruption: If your income dropped by 30% suddenly, what would you do? Which savings contributions would you pause? Which expenses would you cut first? Having this plan now prevents panic decisions later.',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 26
  },
  {
    id: 'building-emergency-fund-27',
    question: 'Design your accountability system: How will you track this? Who (if anyone) will know about your goal? How often will you check progress? What will keep you honest when you want to skip a month?',
    category: 'planning',
    template_id: 'building-emergency-fund',
    question_number: 27
  },

  // Action Questions
  {
    id: 'building-emergency-fund-28',
    question: 'Set up your emergency fund account this week: Choose one of the accounts you researched. Write down exactly when you\'ll open it (day/time), what information you need ready, and what you\'ll name this account in your bank\'s system.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 28
  },
  {
    id: 'building-emergency-fund-29',
    question: 'Automate your first transfer: Decide on your starting monthly amount (even if it\'s small). Set up automatic transfer from checking to emergency savings the day after your paycheck hits. What day is that? What amount? Do it now or calendar when you will.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 29
  },
  {
    id: 'building-emergency-fund-30',
    question: 'Create your expense tracking system for next month: Choose one method (app, spreadsheet, notebook) and commit to tracking every expense for 30 days. What method? When each day will you log expenses? Set phone reminders if needed.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 30
  },
  {
    id: 'building-emergency-fund-31',
    question: 'Write your emergency fund reminder: Create something you\'ll see regularly - phone wallpaper, sticky note, whatever works for YOU. What will it say? Where will you put it? Make it this week.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 31
  },
  {
    id: 'building-emergency-fund-32',
    question: 'Schedule your first monthly check-in: Put a recurring calendar event to review your emergency fund. What day of the month? What will you check? (Balance, if you stuck to the plan, any adjustments needed.) Set it up now.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 32
  },
  {
    id: 'building-emergency-fund-33',
    question: 'Identify your first "easy cut": Look at your small purchases from this past week. Pick ONE thing you\'ll skip for the next month and redirect that money to emergency savings. What is it? Why did you choose this one? How much will it add up to?',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 33
  },
  {
    id: 'building-emergency-fund-34',
    question: 'Tell one person about this goal: Who will you tell? When will you tell them? What specifically will you ask them to do? (Check in monthly? Let you vent when it\'s hard? Celebrate milestones?) Write out what you\'ll say.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 34
  },
  {
    id: 'building-emergency-fund-35',
    question: 'Create your emergency fund vision: Write a detailed description of how your life will feel different when you have this money saved. Be specific - what will you stop worrying about? What will you feel when you see that balance? Read this whenever motivation drops.',
    category: 'action',
    template_id: 'building-emergency-fund',
    question_number: 35
  }
];

async function main() {
  console.log('Inserting emergency fund questions...');

  // First, delete any existing questions
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .eq('template_id', 'building-emergency-fund');

  if (deleteError) {
    console.error('Error deleting existing questions:', deleteError);
  } else {
    console.log('✓ Cleared existing questions');
  }

  // Insert new questions
  const { error: insertError } = await supabase
    .from('questions')
    .insert(questions);

  if (insertError) {
    console.error('Error inserting questions:', insertError);
    process.exit(1);
  }

  console.log(`✓ Inserted ${questions.length} questions`);

  // Verify counts
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'building-emergency-fund');

  if (!error && data) {
    const counts = {
      reflection: data.filter(q => q.category === 'reflection').length,
      research: data.filter(q => q.category === 'research').length,
      planning: data.filter(q => q.category === 'planning').length,
      action: data.filter(q => q.category === 'action').length
    };

    console.log('\nBreakdown by category:');
    console.log(`  Reflection: ${counts.reflection} (${Math.round(counts.reflection/35*100)}%)`);
    console.log(`  Research: ${counts.research} (${Math.round(counts.research/35*100)}%)`);
    console.log(`  Planning: ${counts.planning} (${Math.round(counts.planning/35*100)}%)`);
    console.log(`  Action: ${counts.action} (${Math.round(counts.action/35*100)}%)`);
  }
}

main().catch(console.error);
