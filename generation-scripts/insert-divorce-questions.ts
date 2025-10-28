#!/usr/bin/env npx tsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // ROUND 1: FOUNDATION QUESTIONS (15 questions - self-discovery, patterns, relationship history)
  {
    id: 'navigating-divorce-1',
    question: 'Write about the exact moment you first thought \'maybe this marriage isn\'t working.\' Where were you? What triggered it? How long ago was that moment compared to now?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 1
  },
  {
    id: 'navigating-divorce-2',
    question: 'Document 5 specific conflicts or moments of disconnection from the past year. For each: What happened? What did you need that you didn\'t get? What pattern do you see across all 5?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 2
  },
  {
    id: 'navigating-divorce-3',
    question: 'Think back to the last time you felt genuinely happy and connected in your marriage. Describe that day in detail. When was it? What made it different? Why can\'t you recreate those moments now?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 3
  },
  {
    id: 'navigating-divorce-4',
    question: 'Reflect on your relationship with your parents\' marriage. What did you learn about marriage from watching them? How has that shaped what you expect, tolerate, or fear in your own?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 4
  },
  {
    id: 'navigating-divorce-5',
    question: 'List every attempt you\'ve made to fix or improve the relationship in the past 2 years. For each: What did you try? How did your partner respond? What does this pattern tell you?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 5
  },
  {
    id: 'navigating-divorce-6',
    question: 'Write about a time in the past 6 months when you imagined your life without your spouse. What were you doing? What emotion came up - relief, fear, sadness, excitement? What does that feeling tell you?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 6
  },
  {
    id: 'navigating-divorce-7',
    question: 'Document how you talk about your spouse to others. What do you say to close friends versus acquaintances? When did you stop defending them or making excuses? What changed?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 7
  },
  {
    id: 'navigating-divorce-8',
    question: 'Think about intimacy - emotional and physical - over the past year. Map the decline or changes. What specific moments marked shifts? Did you stop trying or did they?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 8
  },
  {
    id: 'navigating-divorce-9',
    question: 'Reflect on what you\'re grieving or afraid to lose. Is it the person, the idea of marriage, the lifestyle, the family structure, your identity as a spouse, or something else?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 9
  },
  {
    id: 'navigating-divorce-10',
    question: 'Write about 3 times you stayed silent instead of speaking up about something that bothered you. What were you protecting - the peace, their feelings, your image, the marriage itself?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 10
  },
  {
    id: 'navigating-divorce-11',
    question: 'Document your physical and emotional symptoms over the past 6 months. Sleep changes? Anxiety? Depression? Anger? When do these symptoms intensify - around your spouse, thinking about the future, or always?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 11
  },
  {
    id: 'navigating-divorce-12',
    question: 'Think about the version of yourself from 5 years ago. What would surprise them about who you\'ve become in this marriage? What parts of yourself have you lost or hidden?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 12
  },
  {
    id: 'navigating-divorce-13',
    question: 'Reflect on conversations you\'ve had (or avoided) about divorce. Who did you talk to first? What made you finally say it out loud? How did naming it change things?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 13
  },
  {
    id: 'navigating-divorce-14',
    question: 'List your core values - authenticity, peace, growth, family unity, commitment, happiness. For each, write how staying vs. leaving aligns or conflicts with that value.',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 14
  },
  {
    id: 'navigating-divorce-15',
    question: 'Write about what staying for another year would look like. Be specific: same patterns, therapy attempts, separate bedrooms? What would have to change for staying to feel right? Is that change realistic?',
    category: 'reflection',
    template_id: 'navigating-divorce',
    question_number: 15
  },

  // ROUND 2: RESEARCH QUESTIONS (14 questions - data-gathering about legal, financial, practical aspects)
  {
    id: 'navigating-divorce-16',
    question: 'Research your state\'s divorce laws. What are the grounds for divorce? Is it a no-fault state? What\'s the typical timeline? How does legal separation differ from divorce in your jurisdiction?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 16
  },
  {
    id: 'navigating-divorce-17',
    question: 'Gather all financial documents you can access. List: bank accounts, retirement accounts, investments, debts, mortgages, credit cards, insurance policies. What\'s missing? What\'s only in your spouse\'s name?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 17
  },
  {
    id: 'navigating-divorce-18',
    question: 'Calculate your complete household finances. Document: combined monthly income, all expenses, shared debts, assets. What\'s the total picture? What don\'t you know?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 18
  },
  {
    id: 'navigating-divorce-19',
    question: 'Research 3-5 divorce attorneys in your area. For each: What\'s their fee structure? Do they offer consultations? What\'s their approach (collaborative, aggressive, mediation-focused)? Read their reviews.',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 19
  },
  {
    id: 'navigating-divorce-20',
    question: 'Investigate different divorce processes available to you. Compare: litigation, mediation, collaborative divorce, DIY/uncontested. What are costs, timelines, and requirements for each?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 20
  },
  {
    id: 'navigating-divorce-21',
    question: 'Look into custody arrangements if you have children. Research: legal vs. physical custody, joint vs. sole custody, typical parenting time schedules in your area. What arrangements exist beyond 50/50?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 21
  },
  {
    id: 'navigating-divorce-22',
    question: 'Calculate potential child support amounts using your state\'s calculator. Input current incomes, custody split, health insurance costs, childcare. What are different scenarios based on custody arrangements?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 22
  },
  {
    id: 'navigating-divorce-23',
    question: 'Research spousal support/alimony in your state. What factors determine it? How is it calculated? What\'s the typical duration? Does your situation likely qualify?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 23
  },
  {
    id: 'navigating-divorce-24',
    question: 'Investigate your separate vs. marital property. Document: What did each of you bring into the marriage? What was inherited? What was purchased together? How does your state divide property (community vs. equitable)?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 24
  },
  {
    id: 'navigating-divorce-25',
    question: 'Explore your housing options. Research: rental costs in your area, ability to refinance to buy out spouse, selling timeline and costs, temporary living with family/friends. What\'s realistic on a single income?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 25
  },
  {
    id: 'navigating-divorce-26',
    question: 'Look into therapists and support resources. Find: individual therapists who specialize in divorce, divorce support groups (in-person or online), co-parenting counselors, financial advisors who work with divorcing clients. What\'s covered by insurance?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 26
  },
  {
    id: 'navigating-divorce-27',
    question: 'Research the impact on your employment benefits. Check: health insurance (COBRA costs if on spouse\'s plan), life insurance beneficiaries, retirement account division (QDRO process), stock options or equity, dependent care FSA.',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 27
  },
  {
    id: 'navigating-divorce-28',
    question: 'Investigate tax implications. Research: filing status for this year vs. next, dependency exemptions for children, dividing tax refunds/debts, deductibility of alimony (pre/post-2019 divorces), capital gains on home sale.',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 28
  },
  {
    id: 'navigating-divorce-29',
    question: 'Find out about temporary orders. Research: What can you request before divorce is final (custody, support, who stays in home)? What\'s the process? How long do they take? When should you file?',
    category: 'research',
    template_id: 'navigating-divorce',
    question_number: 29
  },

  // ROUND 3: PLANNING QUESTIONS (16 questions - strategic thinking for transition)
  {
    id: 'navigating-divorce-30',
    question: 'Map out your ideal divorce process. Would you prefer mediation, collaborative, or litigation? What factors matter most - speed, cost, maintaining civility, protecting assets, custody control? Why?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 30
  },
  {
    id: 'navigating-divorce-31',
    question: 'Design your post-divorce living situation. Describe: where you\'ll live, how children will transition between homes (if applicable), what neighborhood/school district, timeline for moving. What makes this plan realistic or unrealistic?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 31
  },
  {
    id: 'navigating-divorce-32',
    question: 'Create a co-parenting framework if you have children. Plan: communication methods with ex-spouse, decision-making process for major choices, how to handle schedule conflicts, maintaining consistency across households, handling new partners eventually.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 32
  },
  {
    id: 'navigating-divorce-33',
    question: 'Plan your financial independence strategy. Calculate: your solo income, necessary budget cuts, additional income needed (second job, side work), building emergency fund, separating finances. What\'s your timeline to financial stability?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 33
  },
  {
    id: 'navigating-divorce-34',
    question: 'Strategize how to tell your children (if applicable). Plan: what you\'ll say together vs. separately, what details to share at their age, how to answer tough questions, maintaining stability in their routine, resources to support them. When and how?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 34
  },
  {
    id: 'navigating-divorce-35',
    question: 'Design your support system for the transition. Identify: 3 people you can call in crisis, who can help with kids/logistics, who provides emotional support vs. practical help, what professional support you need, who to limit contact with during this time.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 35
  },
  {
    id: 'navigating-divorce-36',
    question: 'Plan the conversation with your spouse about divorce. Outline: what you\'ll say, when and where (neutral location?), your non-negotiables, what you\'re open to discussing, how to stay calm, what to do if they react with anger or denial.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 36
  },
  {
    id: 'navigating-divorce-37',
    question: 'Map out your negotiation priorities. Rank: keeping the house, custody arrangement, retirement accounts, avoiding alimony, specific belongings, pet custody, timeline. What are you willing to compromise on? What\'s non-negotiable?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 37
  },
  {
    id: 'navigating-divorce-38',
    question: 'Strategize your career during this transition. Consider: is now the time to job search or stay stable? Can you ask for flexibility? Should you pursue that promotion or avoid new stress? How will custody affect work schedule?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 38
  },
  {
    id: 'navigating-divorce-39',
    question: 'Plan how to maintain your children\'s stability (if applicable). Map: keeping them in same school, continuing their activities, protecting their friendships, maintaining relationships with both families, creating new traditions, therapy or support groups for them.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 39
  },
  {
    id: 'navigating-divorce-40',
    question: 'Design boundaries with your spouse during the divorce. Define: communication methods (text only? email for records?), what topics are off-limits, how to handle being in same space, introducing new partners, managing family events together.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 40
  },
  {
    id: 'navigating-divorce-41',
    question: 'Create a timeline for major decisions. Plan: when to consult attorney, when to tell children, when to tell extended family, when to file, when to physically separate, when to sell house, when to finalize. What\'s the optimal sequence?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 41
  },
  {
    id: 'navigating-divorce-42',
    question: 'Strategize protecting yourself legally and financially. Plan: opening separate bank account, documenting assets now, securing important documents, changing passwords, consulting attorney before big moves, keeping records of everything. What can\'t wait?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 42
  },
  {
    id: 'navigating-divorce-43',
    question: 'Plan your new identity and future life. Envision: keeping or changing your name, where you see yourself in 2 years, what you want your life to look like, new goals or dreams you\'ve put aside, rebuilding your social life, dating eventually. What excites or scares you?',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 43
  },
  {
    id: 'navigating-divorce-44',
    question: 'Design your emotional survival strategy. Plan: therapy frequency, coping mechanisms for hard days, what to do when you doubt your decision, maintaining health (sleep, eating, exercise), protecting your mental health, allowing yourself to grieve.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 44
  },
  {
    id: 'navigating-divorce-45',
    question: 'Strategize how to handle external reactions. Prepare for: judgmental family members, choosing what to share publicly vs. privately, dealing with mutual friends taking sides, responding to intrusive questions, protecting children from others\' opinions, managing social media.',
    category: 'planning',
    template_id: 'navigating-divorce',
    question_number: 45
  },

  // ROUND 4: ACTION QUESTIONS (15 questions - concrete next steps)
  {
    id: 'navigating-divorce-46',
    question: 'Schedule consultations with 3 divorce attorneys this week. Compare their approaches, fees, and your comfort level. Choose one and book a formal intake appointment. Document what each one recommended.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 46
  },
  {
    id: 'navigating-divorce-47',
    question: 'Secure all financial documents today. Make copies of: last 2 years tax returns, pay stubs, bank statements, retirement account statements, mortgage/lease, car titles, insurance policies. Store them somewhere safe outside your home.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 47
  },
  {
    id: 'navigating-divorce-48',
    question: 'Open a separate bank account in your name only this week. Start depositing at least part of your income there. Track what you spend to understand your solo budget. Don\'t drain joint accounts - document everything.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 48
  },
  {
    id: 'navigating-divorce-49',
    question: 'Make a list of every shared asset and its approximate value - house, cars, furniture, electronics, collections, jewelry. Photograph valuable items and sentimental belongings. Update this inventory weekly until separation.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 49
  },
  {
    id: 'navigating-divorce-50',
    question: 'Schedule an appointment with a therapist who specializes in divorce within the next 2 weeks. If cost is an issue, research sliding scale options or divorce support groups you can start attending this month.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 50
  },
  {
    id: 'navigating-divorce-51',
    question: 'Have the conversation with your spouse about wanting a divorce (if you haven\'t yet). Set a specific date and time this week. Write down your main points beforehand. Stick to \'I\' statements and your decision, not a negotiation.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 51
  },
  {
    id: 'navigating-divorce-52',
    question: 'Create a crisis plan for when emotions overwhelm you. Write down: 3 people you can call, grounding techniques that help you, what you\'ll do instead of fighting/begging/panicking. Keep this list on your phone.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 52
  },
  {
    id: 'navigating-divorce-53',
    question: 'Set up separate passwords for all accounts this week - email, banking, social media, phone, computer. Change shared streaming/subscription logins. Enable two-factor authentication. Document all accounts in a secure password manager.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 53
  },
  {
    id: 'navigating-divorce-54',
    question: 'Start your financial independence plan today. List: what expenses you can cut, what you need to earn, what skills you could monetize, what assets you could liquidate. Apply for one side income opportunity or update your resume this week.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 54
  },
  {
    id: 'navigating-divorce-55',
    question: 'Identify and reach out to your support network this week. Tell 2-3 trusted people what\'s happening and specifically what you need from them (listening, childcare help, distraction, accountability). Accept help when offered.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 55
  },
  {
    id: 'navigating-divorce-56',
    question: 'Research and join one divorce support community this month - online forum, local support group, divorce coaching program, or social media group. Introduce yourself and ask one question. Notice you\'re not alone.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 56
  },
  {
    id: 'navigating-divorce-57',
    question: 'Create a document to track everything starting today. Record: all conversations with spouse about divorce, financial transactions, agreements or disagreements, children\'s reactions/needs, attorney consultations. Date and detail everything - this is your evidence.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 57
  },
  {
    id: 'navigating-divorce-58',
    question: 'Plan and execute one act of self-care today that has nothing to do with your divorce. Take a walk, call a friend, do something you loved before this crisis. Put it on your calendar weekly. Practice remembering you exist outside this situation.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 58
  },
  {
    id: 'navigating-divorce-59',
    question: 'Make temporary living arrangements if you need to separate before divorce is final. Within the next week: research options, calculate costs, determine timeline. If one of you is moving out, agree in writing who leaves and when.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 59
  },
  {
    id: 'navigating-divorce-60',
    question: 'Take one concrete step toward your post-divorce future today. Update your resume, research apartments, plan a trip you\'ve always wanted to take, reconnect with a friend you lost touch with. Make this divorce the beginning of something, not just an ending.',
    category: 'action',
    template_id: 'navigating-divorce',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const { data, error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.id}:`, error);
      process.exit(1);
    }

    console.log(`✓ Inserted ${i + 1}/${questions.length}: ${question.id}`);

    // Add delay to avoid rate limiting
    if (i < questions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  console.log('\n✅ All questions inserted successfully!');
}

insertQuestions();
