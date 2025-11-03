import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (16 total - 27%)
  {
    id: 'coping-with-infertility-1',
    question: 'Write about the moment you first realized getting pregnant might not be straightforward. What were you doing? Who were you with? What thoughts went through your mind in the days that followed?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'coping-with-infertility-2',
    question: 'Think back to the past 6 months. List 3-5 specific moments when infertility hit you emotionally - a pregnancy announcement, a baby shower invitation, Mother\'s Day. For each, note: Where were you? What did you feel? How did you respond in the moment vs. what you felt inside?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'coping-with-infertility-3',
    question: 'Reflect on your relationship with your body right now. What thoughts come up when you see yourself in the mirror? How has this changed from before you started trying to conceive? What do you find yourself saying to your body - out loud or in your head?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'coping-with-infertility-4',
    question: 'Document the story you had in your head about how parenthood would happen. What age did you imagine? What circumstances? How does the current reality differ from that story? What does this gap feel like?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'coping-with-infertility-5',
    question: 'Think about your identity before infertility. Write down 5-7 words you would have used to describe yourself. Now write 5-7 words you\'d use today. What shifted? What stayed the same? Which parts of yourself do you miss most?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'coping-with-infertility-6',
    question: 'List the last 5 times someone asked you "when are you having kids?" or made a related comment. For each instance: Who asked? What did you say? What did you want to say? How long did it affect your mood afterward?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'coping-with-infertility-7',
    question: 'Reflect on your grief patterns over the past 3 months. On a scale of 1-10, rate your emotional intensity each week. What patterns do you notice? Are there predictable hard times (ovulation, period, holidays)? When do you feel most stable?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'coping-with-infertility-8',
    question: 'Write about a moment in the past month when you felt genuinely happy or at peace - even briefly. What were you doing? Who were you with? What made that moment different? How can you recognize these moments more often?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'coping-with-infertility-9',
    question: 'Think about your partner (if applicable). Write about 3 specific moments in the past few months when you felt connected vs. 3 moments when you felt completely alone in this experience. What made the difference? What was happening in each scenario?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'coping-with-infertility-10',
    question: 'Document your relationship with hope right now. Do you let yourself hope? Do you protect yourself by expecting disappointment? Write about the last time you felt hopeful about conceiving - what triggered it and how long did it last?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'coping-with-infertility-11',
    question: 'Reflect on how infertility has changed your friendships. List 3 people you\'ve become closer to and 3 you\'ve drifted from. What\'s different about each group? What do the people you feel closer to understand that others don\'t?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'coping-with-infertility-12',
    question: 'Think about your parents or the family you grew up in. What messages did you receive about having children? What would they say (or have they said) about your infertility journey? How does this affect how you\'re processing this experience?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'coping-with-infertility-13',
    question: 'Write about what "success" used to mean to you vs. what feels meaningful now. Have your life priorities shifted? What accomplishments feel hollow? What unexpected things bring you satisfaction?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'coping-with-infertility-14',
    question: 'Document the different versions of your future you\'ve imagined in the past 6 months. Life with biological children? Adoption? Child-free? For each scenario, what emotions come up? Which visions feel like "settling" vs. genuine possibility?',
    category: 'reflection',
    question_number: 14
  },
  {
    id: 'coping-with-infertility-15',
    question: 'Think about your coping mechanisms right now. List everything you\'ve tried to manage the emotional weight - therapy, meditation, exercise, avoiding baby content, etc. For each, note: Does it actually help or just numb? Is it sustainable?',
    category: 'reflection',
    question_number: 15
  },
  {
    id: 'coping-with-infertility-16',
    question: 'Reflect on moments when you\'ve felt guilt or shame about infertility. What specifically triggers these feelings? What story are you telling yourself about why this is happening? If your best friend felt this way, what would you tell them?',
    category: 'reflection',
    question_number: 16
  },

  // RESEARCH QUESTIONS (14 total - 23%)
  {
    id: 'coping-with-infertility-17',
    question: 'Research your current diagnosis and treatment options. For each option (IUI, IVF, medication, surgery, etc.), document: Success rates for your age/situation, typical timeline, physical demands. Which sources feel trustworthy vs. overwhelming?',
    category: 'research',
    question_number: 17
  },
  {
    id: 'coping-with-infertility-18',
    question: 'Document your insurance coverage in detail. List: What fertility treatments are covered, annual caps, lifetime limits, requirements for coverage (waiting periods, pre-authorization). What gaps exist? What would you pay out-of-pocket for each treatment option?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'coping-with-infertility-19',
    question: 'Create a comprehensive cost breakdown for your treatment path. Include: Medical procedures, medications, monitoring appointments, travel costs, time off work, childcare for appointments. What\'s the realistic total for 6 months? 1 year? 2 years?',
    category: 'research',
    question_number: 19
  },
  {
    id: 'coping-with-infertility-20',
    question: 'Research your current fertility clinic and doctor. Look up: Success rates by age group, reviews from other patients, doctor\'s experience with your specific diagnosis, clinic culture and communication style. Do these align with what you\'ve experienced? What questions does this raise?',
    category: 'research',
    question_number: 20
  },
  {
    id: 'coping-with-infertility-21',
    question: 'Investigate alternative paths to parenthood. For adoption, fostering, embryo adoption, and donor options: Note initial costs, timeline, emotional considerations, legal requirements. Which paths have you dismissed without research? What surprises you about each option?',
    category: 'research',
    question_number: 21
  },
  {
    id: 'coping-with-infertility-22',
    question: 'Research mental health support specifically for infertility. Find: Therapists specializing in reproductive health, infertility support groups (in-person and online), peer support options. List 3-5 specific resources with contact info, cost, and availability.',
    category: 'research',
    question_number: 22
  },
  {
    id: 'coping-with-infertility-23',
    question: 'Document your workplace policies around fertility treatment. Research: Parental leave policies, flexibility for medical appointments, benefits for fertility coverage, FMLA options, colleagues who\'ve navigated this. What accommodations are you entitled to that you haven\'t used?',
    category: 'research',
    question_number: 23
  },
  {
    id: 'coping-with-infertility-24',
    question: 'Research the side effects of your current or planned medications. For each medication, list: Common physical symptoms, emotional/mood impacts, how long they last, when they peak. Talk to 2-3 people who\'ve taken them - what do they wish they\'d known?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'coping-with-infertility-25',
    question: 'Investigate second opinion options. Research: 3 other fertility specialists in your area or nationally recognized centers, costs for consultation, what records you\'d need, questions to ask. What would make seeking a second opinion worth it vs. staying with your current doctor?',
    category: 'research',
    question_number: 25
  },
  {
    id: 'coping-with-infertility-26',
    question: 'Research financial assistance and grants for fertility treatment. Find: Organizations offering grants, income requirements, application deadlines, success rates. List 5 specific programs you could apply to with URLs and next steps.',
    category: 'research',
    question_number: 26
  },
  {
    id: 'coping-with-infertility-27',
    question: 'Document the lifestyle factors that might impact fertility. Research evidence for: Diet changes, supplements, exercise, stress reduction, sleep, alcohol, caffeine. For each, note: Quality of evidence, effort required, cost, realistic sustainability for you.',
    category: 'research',
    question_number: 27
  },
  {
    id: 'coping-with-infertility-28',
    question: 'Research what "success" actually looks like statistically. For your age and diagnosis, find: Cumulative success rates over multiple cycles, average number of cycles before success, percentage who conceive naturally after treatment starts. How does this data change your perspective?',
    category: 'research',
    question_number: 28
  },
  {
    id: 'coping-with-infertility-29',
    question: 'Investigate your family medical history for fertility issues. Talk to relatives: Who else struggled to conceive? What treatments worked? What patterns exist? What information has been hidden or not discussed? How does this context inform your journey?',
    category: 'research',
    question_number: 29
  },
  {
    id: 'coping-with-infertility-30',
    question: 'Research child-free communities and perspectives. Explore: Child-free by choice vs. circumstance communities, books/podcasts about fulfilling life without children, people who stopped treatment. What resonates? What feels threatening? Why?',
    category: 'research',
    question_number: 30
  },

  // PLANNING QUESTIONS (17 total - 28%)
  {
    id: 'coping-with-infertility-31',
    question: 'Create a decision framework for how long to pursue treatment. Define: Your financial limit (total dollars you\'re willing to spend), emotional limit (signs that continuing is causing harm), time limit (months or years), physical limit (procedures you will/won\'t do). What would make you stop?',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'coping-with-infertility-32',
    question: 'Plan your communication strategy with your partner. Decide: How often to check in emotionally (daily, weekly?), how to handle disagreements about treatment, how to protect intimacy, signals when one of you needs space vs. connection. What\'s working? What needs adjustment?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'coping-with-infertility-33',
    question: 'Design your boundary system for intrusive questions. Prepare: 3 responses for "when are you having kids" (deflect, honest, shut down), who gets the full truth vs. surface answer, how to handle pregnancy announcements, strategy for declining baby showers. Practice writing these out word-for-word.',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'coping-with-infertility-34',
    question: 'Create a financial roadmap for the next 12 months. Map out: Treatment costs by month, adjustments to savings/spending, potential loans or financing, what you\'ll cut back on, emergency fund needs. How does this change your lifestyle? What tradeoffs are you making?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'coping-with-infertility-35',
    question: 'Plan for the hardest times of year. Identify: Mother\'s Day, Father\'s Day, holidays, your due date(s) from losses, friends\' due dates. For each, decide: Will you participate or opt out? What support do you need? How will you honor your grief?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'coping-with-infertility-36',
    question: 'Design your treatment calendar for the next 3-6 months. Schedule: Medical appointments, medication schedules, two-week waits, expected period dates, windows when you need flexibility at work. What conflicts do you see? What accommodations do you need?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'coping-with-infertility-37',
    question: 'Create a self-care protocol for the two-week wait. Plan: Activities that keep you grounded (not just distracted), people who support without pressuring, thoughts/mantras for anxiety spirals, how you\'ll handle negative pregnancy tests. What worked before? What made things worse?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'coping-with-infertility-38',
    question: 'Plan your support team structure. Identify: Who can handle the medical/logistical talk, who\'s for emotional support, who can distract you, who needs to be kept at arm\'s length. Assign specific people to specific roles - don\'t expect everyone to provide everything.',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'coping-with-infertility-39',
    question: 'Design your relationship maintenance plan. Schedule: Regular date nights unrelated to fertility, intimacy that\'s not about conception, individual therapy and/or couples counseling, fun activities you both enjoy. How will you protect your relationship from becoming only about fertility?',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'coping-with-infertility-40',
    question: 'Create a decision tree for the next treatment decision point. Map: If current treatment fails, what\'s next? If it succeeds, what changes? If you get pregnant, what support do you need? If you face loss, what\'s your recovery plan? Having this mapped out now reduces crisis decisions later.',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'coping-with-infertility-41',
    question: 'Plan how to maintain other life goals during treatment. List: Career goals, hobbies, friendships, health goals that aren\'t fertility-related. How can you protect time and energy for these? What would prevent your entire identity from revolving around infertility?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'coping-with-infertility-42',
    question: 'Design your social media boundaries. Decide: Will you unfollow pregnant friends? Mute certain words? Share your journey publicly or stay private? How will you handle the algorithms showing you baby content? What digital environment helps vs. harms your mental health?',
    category: 'planning',
    question_number: 42
  },
  {
    id: 'coping-with-infertility-43',
    question: 'Create a work strategy for managing appointments and privacy. Plan: How much to disclose to your manager, how to handle frequent absences, whether to use FMLA, how to maintain performance, backup plans for urgent appointment conflicts. What\'s your minimum viable transparency?',
    category: 'planning',
    question_number: 43
  },
  {
    id: 'coping-with-infertility-44',
    question: 'Plan your transition strategy if you decide to stop treatment. Envision: How you\'ll know it\'s time, how you\'ll communicate the decision, what you\'ll do with remaining medications/supplies, how you\'ll mark this transition. What would "closure" look like for you?',
    category: 'planning',
    question_number: 44
  },
  {
    id: 'coping-with-infertility-45',
    question: 'Design a monthly review process. Set: One day each month to assess emotional health, financial situation, relationship quality, treatment progress. What questions will you ask yourself? What would trigger a significant change in approach?',
    category: 'planning',
    question_number: 45
  },
  {
    id: 'coping-with-infertility-46',
    question: 'Create contingency plans for potential complications. Consider: Multiple pregnancy, severe OHSS, miscarriage, ectopic pregnancy, needed surgery. For each scenario: Who will you call? What support do you need? What would recovery look like? This isn\'t pessimism - it\'s preparedness.',
    category: 'planning',
    question_number: 46
  },
  {
    id: 'coping-with-infertility-47',
    question: 'Plan how you\'ll measure progress beyond pregnancy. Define: Improvements in emotional resilience, relationship strength, self-understanding, boundaries, life satisfaction. How will you recognize growth even if treatment doesn\'t work? What "wins" matter besides conception?',
    category: 'planning',
    question_number: 47
  },

  // ACTION QUESTIONS (13 total - 22%)
  {
    id: 'coping-with-infertility-48',
    question: 'Write down three questions you need to ask your doctor at your next appointment. Make them specific: about your diagnosis, about treatment modifications, about success rates, about alternatives. Don\'t leave until you get clear answers.',
    category: 'action',
    question_number: 48
  },
  {
    id: 'coping-with-infertility-49',
    question: 'Schedule a dedicated conversation with your partner about treatment boundaries. Set a specific date and time in the next week. Prepare: your emotional limits, financial concerns, timeline questions. Agree that either person can call for a pause or reassessment anytime.',
    category: 'action',
    question_number: 49
  },
  {
    id: 'coping-with-infertility-50',
    question: 'Join one infertility support community this week - online or in-person. Find: a local RESOLVE group, Reddit r/infertility, a Facebook group, or a therapist-led group. Attend or post once. Notice how it feels to be with people who understand without explanation.',
    category: 'action',
    question_number: 50
  },
  {
    id: 'coping-with-infertility-51',
    question: 'Create a physical comfort kit for treatment days. Gather: heating pad, favorite snacks, cozy clothes, noise-cancelling headphones, something that smells comforting, entertainment that doesn\'t require much focus. Put it in one place so it\'s ready when you need it.',
    category: 'action',
    question_number: 51
  },
  {
    id: 'coping-with-infertility-52',
    question: 'Reach out to one person who\'s been through infertility. Ask them: What do you wish you\'d known? What helped? What made things harder? What questions should I be asking? Their hindsight can shortcut your learning curve.',
    category: 'action',
    question_number: 52
  },
  {
    id: 'coping-with-infertility-53',
    question: 'Set up one non-fertility-related activity or goal for this month. Sign up for: a class, a trip, a project, a hobby. Something that reminds you that your life exists beyond this struggle. Put it on the calendar now.',
    category: 'action',
    question_number: 53
  },
  {
    id: 'coping-with-infertility-54',
    question: 'Practice your boundary script three times out loud. Choose your response to "when are you having kids?" Say it to yourself in the mirror. Say it to your partner. Say it until it feels natural. You\'ll need this muscle memory when caught off guard.',
    category: 'action',
    question_number: 54
  },
  {
    id: 'coping-with-infertility-55',
    question: 'Audit your phone and social media right now. Unfollow or mute accounts that trigger pain - pregnancy announcements, parenting content, "just relax" wellness culture. Your mental health matters more than staying connected to everyone. You can reconnect later if you want.',
    category: 'action',
    question_number: 55
  },
  {
    id: 'coping-with-infertility-56',
    question: 'Schedule a check-in with yourself for one month from today. Set a calendar reminder to revisit these questions and assess: Is treatment working? Is your mental health stable? Are your relationships okay? Is your financial plan sustainable? Give yourself permission to change course.',
    category: 'action',
    question_number: 56
  },
  {
    id: 'coping-with-infertility-57',
    question: 'Write a letter to your future self - the one who\'s on the other side of this. What do you want to remember about who you are right now? What do you hope you\'ll have learned? What matters most? Seal it and date it for one year from now.',
    category: 'action',
    question_number: 57
  },
  {
    id: 'coping-with-infertility-58',
    question: 'Identify your next specific medical step and take one action toward it today. This could be: calling to schedule an appointment, requesting medical records, researching a medication, emailing your doctor with questions. One concrete step moves you forward.',
    category: 'action',
    question_number: 58
  },
  {
    id: 'coping-with-infertility-59',
    question: 'Create a "bad day protocol" document. List: people to call, activities that help, thoughts that ground you, things to avoid, reminders of your strength. Save it somewhere easily accessible. On the hardest days, you won\'t have energy to figure this out - you\'ll just need the list.',
    category: 'action',
    question_number: 59
  },
  {
    id: 'coping-with-infertility-60',
    question: 'Do something kind for yourself today that has nothing to do with fertility. Take a bath, buy flowers, watch a favorite show, call a friend, take a walk, sleep in. Practice treating yourself with the compassion you\'d show someone you love going through this.',
    category: 'action',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log('Starting to insert questions...');

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    try {
      const { error } = await supabase
        .from('questions')
        .insert({
          id: q.id,
          question: q.question,
          category: q.category,
          template_id: 'coping-with-infertility',
          question_number: q.question_number
        });

      if (error) {
        console.error(`Error inserting question ${i + 1}:`, error);
      } else {
        console.log(`✓ Inserted question ${i + 1}/${questions.length}`);
      }

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (err) {
      console.error(`Failed to insert question ${i + 1}:`, err);
    }
  }

  console.log('\nCompleted!');
  console.log(`Total questions: ${questions.length}`);
  console.log(`Foundation (reflection): 16 questions (27%)`);
  console.log(`Research: 14 questions (23%)`);
  console.log(`Planning: 17 questions (28%)`);
  console.log(`Action: 13 questions (22%)`);
}

insertQuestions();
