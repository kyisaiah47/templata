import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // ROUND 1: Foundation Questions (1-15) - 25%
  {
    id: 'preparing-for-baby-1',
    question: 'Write about 3 moments in the past year when you felt completely unprepared for something important. What happened? How did you handle it? What does this tell you about how you typically cope when life changes dramatically?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 1
  },
  {
    id: 'preparing-for-baby-2',
    question: 'Reflect on the last time you saw a parent struggling with their child in public (grocery store, restaurant, airport). What did you feel? What judgment or story did you tell yourself? What does your reaction reveal about your own fears or expectations about parenthood?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 2
  },
  {
    id: 'preparing-for-baby-3',
    question: 'Think about your own childhood. Write about 3 specific things your parent(s) did that you want to repeat with your child, and 3 specific things you want to do differently. For each, note a concrete memory that explains why.',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 3
  },
  {
    id: 'preparing-for-baby-4',
    question: 'Document the last 5 conversations you\'ve had about becoming a parent. Who initiated each conversation? What specific questions or comments did people make? Which conversations left you feeling confident vs. anxious? What pattern do you notice?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 4
  },
  {
    id: 'preparing-for-baby-5',
    question: 'Write about a typical weekday and a typical weekend day right now - hour by hour. What activities would be impossible with a baby? What would be harder? What might actually be easier or more meaningful? Which losses feel hardest to imagine?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 5
  },
  {
    id: 'preparing-for-baby-6',
    question: 'Reflect on the last time you had to care for someone or something completely dependent on you (a pet, a sick family member, a friend in crisis). How did you feel about the responsibility? When did you feel resentful vs. fulfilled? What does this tell you about your capacity for caretaking?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 6
  },
  {
    id: 'preparing-for-baby-7',
    question: 'Think about your identity right now. List 5 words you use to describe yourself to others. Then write: which of these will still be true after the baby comes? Which might disappear? What new words might replace them? How do you feel about that shift?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 7
  },
  {
    id: 'preparing-for-baby-8',
    question: 'Document 3 times in the past 6 months when you and your partner disagreed about something important (money, family, priorities, decisions). How did you resolve it? Who compromised? What does your conflict pattern suggest about how you\'ll handle parenting disagreements?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 8
  },
  {
    id: 'preparing-for-baby-9',
    question: 'Write about the moment you first seriously thought about having a baby. Where were you? What triggered it? Was it a gradual realization or a specific moment? How has that initial feeling evolved since then?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 9
  },
  {
    id: 'preparing-for-baby-10',
    question: 'Reflect on your current sleep patterns. What happens when you get less than 6 hours of sleep? How does it affect your mood, patience, and decision-making? Write about a time you were sleep-deprived and how you handled it.',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 10
  },
  {
    id: 'preparing-for-baby-11',
    question: 'Think about the parent friends you already have. Write about 3 different parenting styles you\'ve observed. Which one resonates with you? Which one makes you uncomfortable? What does your reaction tell you about your own values?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 11
  },
  {
    id: 'preparing-for-baby-12',
    question: 'Document your biggest fear about becoming a parent - the one you don\'t usually say out loud. Where does this fear come from? Is it based on something you witnessed, experienced, or imagined? What would it mean if this fear came true?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 12
  },
  {
    id: 'preparing-for-baby-13',
    question: 'Write about the last time something didn\'t go according to plan (trip, event, project). How did you react in the moment? Did you adapt quickly or spiral? What helps you regain control when things feel chaotic?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 13
  },
  {
    id: 'preparing-for-baby-14',
    question: 'Reflect on whose approval or validation matters most to you about this decision. Your parents? Your partner? Friends? Society? Write about why their opinion carries weight and whether that\'s serving you.',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 14
  },
  {
    id: 'preparing-for-baby-15',
    question: 'Think about the last major life transition you went through (new job, moving, relationship change). What part was harder than expected? What part was easier? What helped you get through it? What can you learn from that experience?',
    category: 'reflection',
    template_id: 'preparing-for-baby',
    question_number: 15
  },

  // ROUND 2: Research Questions (16-29) - 23%
  {
    id: 'preparing-for-baby-16',
    question: 'Research the cost of childcare in your area. Find 3 options: daycare center, in-home daycare, and nanny. For each, document: monthly cost, waitlist time, hours of operation, and any red flags from reviews. How does this compare to your current income?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 16
  },
  {
    id: 'preparing-for-baby-17',
    question: 'Calculate your true first-year baby costs. Research and list out: hospital/birth costs after insurance, diapers (estimate 8-12 per day × $0.25-0.35 each), formula if not breastfeeding ($150-200/month), basic gear (crib, car seat, stroller), and increased healthcare. What\'s your realistic total?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 17
  },
  {
    id: 'preparing-for-baby-18',
    question: 'Research your company\'s parental leave policy. Document exactly: how many weeks are offered, what percentage of pay, whether it\'s available to both parents, whether it\'s consecutive or can be broken up. Then research your partner\'s company\'s policy. What\'s the gap between what you wish existed and what\'s real?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 18
  },
  {
    id: 'preparing-for-baby-19',
    question: 'Find 3 parents (different life stages: newborn, toddler, school-age) and ask them the same question: "What do you wish someone had told you before you had kids?" Document their answers word-for-word. What themes emerge? What surprises you?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 19
  },
  {
    id: 'preparing-for-baby-20',
    question: 'Research pediatricians in your area. Find 3 options that take your insurance and document: their approach to common issues (vaccines, sleep training, feeding), office hours, after-hours support, and patient reviews about wait times. Which one aligns with your values?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 20
  },
  {
    id: 'preparing-for-baby-21',
    question: 'Look up your hospital or birth center\'s statistics. Research: C-section rate, epidural rate, NICU availability, rooming-in policy, lactation support offered, partner overnight policy. Compare 2-3 options in your area. What matters most to you?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 21
  },
  {
    id: 'preparing-for-baby-22',
    question: 'Research baby sleep approaches. Find 3 different philosophies (attachment parenting/co-sleeping, sleep training/Ferber, middle ground/gentle methods). For each, document: core principles, typical timeline, pros/cons from parent reviews. Which resonates with you and your partner?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 22
  },
  {
    id: 'preparing-for-baby-23',
    question: 'Calculate your current monthly budget. List all expenses, then model three scenarios: (1) one parent stops working, (2) both parents work with childcare, (3) both parents work part-time. Which scenario is financially viable? Which feels right emotionally?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 23
  },
  {
    id: 'preparing-for-baby-24',
    question: 'Research your health insurance. Document exactly: prenatal coverage (copays, tests included), delivery costs (hospital, doctor, anesthesiologist), well-baby visits covered in first year, breast pump coverage, postpartum mental health coverage. Call if needed. What will you actually pay out of pocket?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 24
  },
  {
    id: 'preparing-for-baby-25',
    question: 'Find local parent resources. Research: hospital parenting classes, breastfeeding support groups, new parent groups, postpartum doula services, emergency pediatric care locations. Create a list with contact info and costs. What\'s available vs. what would you have to pay for?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 25
  },
  {
    id: 'preparing-for-baby-26',
    question: 'Research feeding approaches. Look into: breastfeeding challenges and support needed, formula feeding costs and prep time, combination feeding, pumping schedules for working parents. Read 5 real parent experiences with each. What sounds most realistic for your lifestyle?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 26
  },
  {
    id: 'preparing-for-baby-27',
    question: 'Look up developmental milestones for the first year. Document what happens at: 2 months, 4 months, 6 months, 9 months, 12 months. What surprises you? What sounds harder than you expected? What sounds amazing?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 27
  },
  {
    id: 'preparing-for-baby-28',
    question: 'Research your legal and financial protections. Find out: do you have life insurance (how much coverage?), disability insurance, a will, guardianship plan? What documents do you need to create? What would happen to your child if something happened to you?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 28
  },
  {
    id: 'preparing-for-baby-29',
    question: 'Find and read 3 brutally honest parent blogs or social media accounts (not highlight reels). Document: what do they struggle with? What do they celebrate? What problems keep recurring? What makes you think "I hadn\'t considered that"?',
    category: 'research',
    template_id: 'preparing-for-baby',
    question_number: 29
  },

  // ROUND 3: Planning Questions (30-45) - 27%
  {
    id: 'preparing-for-baby-30',
    question: 'Design your ideal parental leave arrangement. Write out week-by-week: who will take off when, for how long, whether it\'s paid or unpaid, when each parent returns to work. Now write what\'s actually realistic given your jobs and finances. What\'s the gap?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 30
  },
  {
    id: 'preparing-for-baby-31',
    question: 'Create your division of labor plan. List all recurring baby tasks (feeding, diaper changes, doctor visits, nighttime wake-ups, laundry, meal prep, etc.). For each, note: who\'s responsible, who\'s backup, what happens when you disagree. How will you revisit this if it\'s not working?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 31
  },
  {
    id: 'preparing-for-baby-32',
    question: 'Map out your support system. Create concentric circles: who can help with what? (Emergency middle-of-night? Meal delivery? Emotional support? Babysitting? Advice?) For each person, note: their availability, their boundaries, what you\'re comfortable asking from them.',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 32
  },
  {
    id: 'preparing-for-baby-33',
    question: 'Plan your space. Draw or describe your current living situation. Where will the baby sleep (your room? own room? how long?)? Where will you change diapers? Store supplies? Do nighttime feedings? What needs to change physically in your home before the baby arrives?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 33
  },
  {
    id: 'preparing-for-baby-34',
    question: 'Design your decision-making framework with your partner. For major parenting decisions (sleep, feeding, discipline, childcare, medical), write down: how will you decide? What happens if you disagree? Who has veto power on what? When will you seek outside input?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 34
  },
  {
    id: 'preparing-for-baby-35',
    question: 'Create your financial buffer plan. Calculate: your emergency fund current size, 3-6 months of expenses with a baby, the gap between them. Write out: how much you need to save, by when, what expenses you can cut now, what subscriptions or habits to pause.',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 35
  },
  {
    id: 'preparing-for-baby-36',
    question: 'Plan your relationship maintenance strategy. Write down specific ways you\'ll protect your partnership: weekly check-ins (when?), date nights (how often? who arranges childcare?), individual time (when? doing what?). What will you do when you\'re too tired or resentful to follow through?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 36
  },
  {
    id: 'preparing-for-baby-37',
    question: 'Map out your return-to-work plan if applicable. Document: exact date you\'re going back, childcare starting (same day or trial week?), pumping schedule and location, backup plan for sick days, how you\'ll handle guilt or grief. What would make this easier?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 37
  },
  {
    id: 'preparing-for-baby-38',
    question: 'Create your "if things go wrong" scenarios. Plan for: medical complications during birth, NICU stay, breastfeeding doesn\'t work, severe postpartum depression, job loss, baby has special needs. For each, write: who would you call? What resources exist? What\'s your first step?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 38
  },
  {
    id: 'preparing-for-baby-39',
    question: 'Design your information filter system. With your partner, decide: whose parenting advice will you consider? Whose will you politely ignore? What sources will you trust for medical info? How will you handle contradictory advice? What\'s your plan when family members overstep?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 39
  },
  {
    id: 'preparing-for-baby-40',
    question: 'Plan your mental health protection strategy. Write down: warning signs that you\'re struggling (for both parents), who will check in on you, where you\'ll go for help, what therapy or support groups you\'ll access. How will you distinguish normal hard from concerning symptoms?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 40
  },
  {
    id: 'preparing-for-baby-41',
    question: 'Create your boundary script collection. Write out exactly what you\'ll say to: unsolicited advice ("Thanks, we\'ll consider that"), visitors who overstay ("We need rest now"), pressure to parent a certain way ("This works for us"), requests to hold baby when you don\'t want to share ("Maybe next time").',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 41
  },
  {
    id: 'preparing-for-baby-42',
    question: 'Map out your priorities. Rank these from most to least important to you: baby sleeping through the night early, breastfeeding success, maintaining career momentum, equal parenting split, keeping house clean, social life, physical recovery, mental health. What are you willing to sacrifice? What\'s non-negotiable?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 42
  },
  {
    id: 'preparing-for-baby-43',
    question: 'Plan your survival systems for the first 3 months. Brainstorm: meal solutions (prep freezer meals? delivery? family help?), household help (cleaning service? ask for help? let it go?), errand strategies (delivery everything? batch trips?). What will you outsource or eliminate entirely?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 43
  },
  {
    id: 'preparing-for-baby-44',
    question: 'Design your communication system with your partner for hard moments. Decide: what code word means "I need a break NOW"? How will you ask for help without resentment? What happens during a 3am fight when you\'re both exhausted? What\'s your de-escalation plan?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 44
  },
  {
    id: 'preparing-for-baby-45',
    question: 'Create your "good enough" standards. For each area, write what "good enough" looks like: feeding (fed is best?), sleep (survival mode?), development (trust the timeline?), house (clean enough?), your appearance (realistic?). What perfectionist expectations can you release now?',
    category: 'planning',
    template_id: 'preparing-for-baby',
    question_number: 45
  },

  // ROUND 4: Action Questions (46-60) - 25%
  {
    id: 'preparing-for-baby-46',
    question: 'Schedule the essential conversations. This week, set up time to discuss with your partner: birth preferences, parenting philosophy, division of labor, and finances. Write down: when you\'ll have each conversation (specific day/time), where (not in bed/not when tired), and one question you each need answered.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 46
  },
  {
    id: 'preparing-for-baby-47',
    question: 'Set up your financial foundation today. Create a separate savings account labeled "baby fund," calculate how much you need, set up automatic transfer. Document: account name, transfer amount, transfer date, goal amount, goal date. What\'s the first expense this will cover?',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 47
  },
  {
    id: 'preparing-for-baby-48',
    question: 'Book your essential appointments. Make these calls this week: schedule prenatal visit, tour 2-3 birth locations, tour 2-3 childcare options if needed, find pediatrician for consultation. Write down: who you called, appointment dates, what questions to bring to each.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 48
  },
  {
    id: 'preparing-for-baby-49',
    question: 'Start your parent brain trust. Identify 3 parents you trust who have different parenting styles. Reach out to each this week and ask: "Can I text you questions when I\'m freaking out?" Document who said yes and what their specialty is (real talk? medical knowledge? emotional support?).',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 49
  },
  {
    id: 'preparing-for-baby-50',
    question: 'Create your essential baby registry. Focus only on true first-month needs: safe sleep space, car seat, basic clothes, diapers, feeding supplies. Write the list today. Set a deadline to actually purchase or register for these items. What can you borrow? What must you buy new?',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 50
  },
  {
    id: 'preparing-for-baby-51',
    question: 'Initiate the work conversation. Draft the email or meeting request to your manager about parental leave. Write it today: mention wanting to discuss leave timeline, transition plan, and return-to-work options. When will you send it? What\'s your ideal outcome?',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 51
  },
  {
    id: 'preparing-for-baby-52',
    question: 'Document your current life. This week, take photos of your space, your daily routine, your freedom. Write a letter to yourself about what your life is like right now - the good and the hard. Seal it. You\'ll open it one year after baby arrives.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 52
  },
  {
    id: 'preparing-for-baby-53',
    question: 'Test your support system. This week, practice asking for help with something small (pick up groceries? watch your pet? bring you dinner?). Write down: who you asked, how it felt to ask, their response, whether you\'d ask them for bigger help later.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 53
  },
  {
    id: 'preparing-for-baby-54',
    question: 'Create your resource library. Today, bookmark or save: your hospital\'s lactation support number, your insurance nurse line, local emergency pediatric care, postpartum depression hotline, your pediatrician\'s after-hours protocol. Put them somewhere you can access at 3am in a panic.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 54
  },
  {
    id: 'preparing-for-baby-55',
    question: 'Prepare your space physically. This weekend, complete one baby-prep task: set up sleep area, install car seat, organize changing station, prep freezer meals. Document: what you did, what still needs doing, what you\'re procrastinating on. Why?',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 55
  },
  {
    id: 'preparing-for-baby-56',
    question: 'Have the grandparent conversation. Schedule time this month to discuss boundaries with each set of grandparents: visiting expectations, advice-giving, childcare help, respect for your decisions. Write down what you need to say. Practice it out loud before the conversation.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 56
  },
  {
    id: 'preparing-for-baby-57',
    question: 'Build your knowledge foundation. Register for one prenatal or parenting class (hospital birth class, infant CPR, breastfeeding, newborn care). Book it for a specific date. What questions do you most need answered? Write them down to bring with you.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 57
  },
  {
    id: 'preparing-for-baby-58',
    question: 'Create your couple\'s ritual. Starting this week, establish one weekly check-in (Sunday morning coffee? Wednesday evening walk?). During this time, ask each other: "How are you feeling about the baby?" and "What do you need from me this week?" Put it in your calendar as recurring.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 58
  },
  {
    id: 'preparing-for-baby-59',
    question: 'Set up your recovery support. If giving birth: research and order postpartum recovery supplies (peri bottle, ice packs, comfortable clothes). Schedule one meal train or grocery delivery for the first 2 weeks. Write down: what you ordered, who\'s bringing food, what would help most.',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 59
  },
  {
    id: 'preparing-for-baby-60',
    question: 'Create your decision checkpoint. Set a calendar reminder for 3 months from today. On that date, revisit these questions and write: What actually happened vs. what you planned? What surprised you? What would you tell your past self? What do you need to adjust going forward?',
    category: 'action',
    template_id: 'preparing-for-baby',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✅ Successfully inserted all questions!');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'preparing-for-baby');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
  } else {
    const counts = {
      reflection: 0,
      research: 0,
      planning: 0,
      action: 0
    };

    verifyData.forEach(q => {
      counts[q.category as keyof typeof counts]++;
    });

    console.log('\n=== Verification ===');
    console.log(`Total questions: ${verifyData.length}`);
    console.log(`Reflection (Foundation): ${counts.reflection} (${(counts.reflection/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action/verifyData.length*100).toFixed(1)}%)`);
  }
}

insertQuestions();
