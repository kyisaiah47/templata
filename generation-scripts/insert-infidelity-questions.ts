import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-15) - 25%
  {
    id: 'recovering-from-infidelity-1',
    question: 'Write about the moment you found out about the infidelity. What did you physically feel in your body? What was the first thought that went through your mind? What did you do in the first hour after you found out?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 1
  },
  {
    id: 'recovering-from-infidelity-2',
    question: 'Reflect on the past 6 months before you discovered the infidelity. List 3-5 specific moments when something felt off but you couldn\'t name it. What did you notice? What did you tell yourself to explain it away?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 2
  },
  {
    id: 'recovering-from-infidelity-3',
    question: 'Think about your reaction when you first found out compared to how you feel right now. Write about what\'s changed in how you\'re processing this. What feels different? What still hits you the same way?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 3
  },
  {
    id: 'recovering-from-infidelity-4',
    question: 'Document the times in the past month when the betrayal hits you hardest. What triggers it? (Certain times of day? Places? Activities?) What pattern do you notice about when you spiral vs when you feel more stable?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 4
  },
  {
    id: 'recovering-from-infidelity-5',
    question: 'Reflect on past relationships or betrayals in your life (family, friends, previous partners). Write about a time before this when someone broke your trust. How did you respond then? What does that tell you about how you handle betrayal?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 5
  },
  {
    id: 'recovering-from-infidelity-6',
    question: 'Write about the story you told yourself about your relationship before the infidelity. What did you believe about your partner? About yourself? About your relationship? How has that story shattered or changed?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 6
  },
  {
    id: 'recovering-from-infidelity-7',
    question: 'Think about the last 3 times you felt truly safe and loved in this relationship (before the infidelity). What was happening? What did your partner do that made you feel that way? Can you imagine feeling that way again with them?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 7
  },
  {
    id: 'recovering-from-infidelity-8',
    question: 'Document your emotional patterns over the past 2 weeks. When do you feel: angry vs numb vs sad vs surprisingly okay? Is there a pattern? What helps you move through the hard emotions vs what keeps you stuck?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 8
  },
  {
    id: 'recovering-from-infidelity-9',
    question: 'Reflect on who you\'ve told about the infidelity and who you haven\'t. For each person, write why you chose to tell them or not. What does this pattern tell you about what you need right now?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 9
  },
  {
    id: 'recovering-from-infidelity-10',
    question: 'Write about a moment in the past month when you felt like yourself - even briefly. What were you doing? What made that moment different from the times when you feel consumed by the betrayal?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 10
  },
  {
    id: 'recovering-from-infidelity-11',
    question: 'Think about your self-worth before this happened vs now. Write about what you believed about yourself 6 months ago. What has this experience made you question about yourself? What remains unchanged?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 11
  },
  {
    id: 'recovering-from-infidelity-12',
    question: 'Reflect on the best relationship you\'ve ever witnessed (parents, friends, mentors). What made that relationship work? What did trust look like in that relationship? How does that compare to what you have now?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 12
  },
  {
    id: 'recovering-from-infidelity-13',
    question: 'Document 3 times in your relationship when you compromised something important to you (a value, a boundary, a need). What did you compromise? Why? What pattern do you see in what you\'re willing to sacrifice for this relationship?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 13
  },
  {
    id: 'recovering-from-infidelity-14',
    question: 'Write about your gut instinct right now. If you quiet all the other voices (what others think, fear of being alone, sunk cost, hope), what is your gut actually telling you? When did you first feel that instinct?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 14
  },
  {
    id: 'recovering-from-infidelity-15',
    question: 'Reflect on what "trust" means to you specifically. Not the dictionary definition - what does it actually feel like in your body when you trust someone? When did you last feel that with your partner? Can you imagine feeling it again?',
    category: 'reflection',
    template_id: 'recovering-from-infidelity',
    question_number: 15
  },
  // Research Questions (16-27) - 20%
  {
    id: 'recovering-from-infidelity-16',
    question: 'Research what couples therapists say about recovering from infidelity. Find 3 articles or expert sources and document: What do they say is necessary for rebuilding trust? What are the success factors? What are the warning signs that reconciliation won\'t work?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 16
  },
  {
    id: 'recovering-from-infidelity-17',
    question: 'Document the full disclosure conversation. Write down everything you need to know about what happened (timeline, how many times, who they told, if protection was used, emotional vs physical, if it\'s ongoing). Don\'t ask yet - just list what you need to know to make a decision.',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 17
  },
  {
    id: 'recovering-from-infidelity-18',
    question: 'Research your partner\'s behavior since the disclosure. Document specific actions: Have they taken full responsibility? Are they defensive or remorseful? Have they cut off contact with the other person? Have they offered transparency? List concrete behaviors you\'ve observed.',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 18
  },
  {
    id: 'recovering-from-infidelity-19',
    question: 'Investigate what rebuilding trust actually requires. Find 2-3 frameworks from therapists or books and document: What are the specific stages? What does the betrayed partner need? What does the partner who cheated need to do? How long does it typically take?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 19
  },
  {
    id: 'recovering-from-infidelity-20',
    question: 'Research your support options. List: therapists in your area who specialize in infidelity (with availability and cost), support groups (online or in-person), friends/family who\'ve been through this, books or resources recommended for this situation. Don\'t commit yet - just gather options.',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 20
  },
  {
    id: 'recovering-from-infidelity-21',
    question: 'Document the practical realities of your two paths. Research: If you stay - what would need to change (therapy cost, time commitment, emotional toll)? If you leave - what would that look like (housing, finances, logistics)? Write down the concrete facts for both scenarios.',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 21
  },
  {
    id: 'recovering-from-infidelity-22',
    question: 'Investigate relationship patterns in your partnership. Look back at old texts, photos, or journal entries from the past year. Document: What was the state of your relationship before the infidelity? Were there signs? What was your intimacy like? What does the evidence actually show?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 22
  },
  {
    id: 'recovering-from-infidelity-23',
    question: 'Research what others in your situation did. Find 3 stories (Reddit, articles, people you know) of people who stayed after infidelity and 3 who left. For each, document: What was their decision based on? Do they have regrets? What advice do they give? What patterns do you notice?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 23
  },
  {
    id: 'recovering-from-infidelity-24',
    question: 'Document your partner\'s infidelity history. Research (gently or directly): Have they cheated before? On you or in past relationships? What do their previous partners say about them? What does their track record actually show about their capacity for fidelity?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 24
  },
  {
    id: 'recovering-from-infidelity-25',
    question: 'Investigate your own readiness to forgive. Research what forgiveness actually means (not forgetting, not excusing). Read 2-3 articles about forgiveness after betrayal and document: What does it require? What\'s the difference between forgiveness and reconciliation? What would forgiveness look like for you?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 25
  },
  {
    id: 'recovering-from-infidelity-26',
    question: 'Research the warning signs that this relationship was vulnerable to infidelity. Document: What do experts say makes relationships susceptible? (Communication patterns, unmet needs, external stressors) Which of these were present in your relationship?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 26
  },
  {
    id: 'recovering-from-infidelity-27',
    question: 'Document your financial reality. Research the practical implications: What are your shared assets? What\'s in your name vs theirs? What would separation cost (lawyer fees, new housing, split assets)? What\'s the actual financial picture - not the emotional one?',
    category: 'research',
    template_id: 'recovering-from-infidelity',
    question_number: 27
  },
  // Planning Questions (28-45) - 30%
  {
    id: 'recovering-from-infidelity-28',
    question: 'Create your decision framework. Write down the 5 most important factors in deciding whether to stay or leave (trust rebuilding potential, your emotional capacity, their actions, your values, impact on others, etc.). For each factor, rate where you are right now (1-10) and what would need to change.',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 28
  },
  {
    id: 'recovering-from-infidelity-29',
    question: 'Map out what "staying" would actually require. Write down: What specific changes would your partner need to make? What would you need from them daily, weekly, monthly? What timeline feels realistic? What would be your breaking point if things don\'t improve?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 29
  },
  {
    id: 'recovering-from-infidelity-30',
    question: 'Map out what "leaving" would actually look like. Write down your 30/60/90 day plan: Where would you live? What would you tell people? How would you handle the logistics? What support would you need? Make it concrete, not abstract.',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 30
  },
  {
    id: 'recovering-from-infidelity-31',
    question: 'Plan for the trust verification you\'d need if you stay. Write down: What transparency would you need (phone access, location sharing, checking in)? For how long? How would you handle the urge to monitor them? What would cross the line into unhealthy surveillance?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 31
  },
  {
    id: 'recovering-from-infidelity-32',
    question: 'Design your healing timeline for both paths. If you stay: what does month 1 look like vs month 6 vs year 1? If you leave: same question. For each milestone, what would "progress" look like? How will you know if you\'re healing vs staying stuck?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 32
  },
  {
    id: 'recovering-from-infidelity-33',
    question: 'Anticipate the hard conversations ahead. List the 5 conversations you need to have (with partner, with family, with friends, with kids if applicable). For each: What do you need to say? What do you need to hear? What outcome would feel like progress?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 33
  },
  {
    id: 'recovering-from-infidelity-34',
    question: 'Plan for emotional triggers and setbacks. Write down: What situations will be hardest (seeing them, certain places, anniversaries, intimacy)? For each trigger, what\'s your plan? Who will you call? What will you do when you spiral?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 34
  },
  {
    id: 'recovering-from-infidelity-35',
    question: 'Create your non-negotiable boundaries. Write down: What behaviors are absolute deal-breakers going forward? What would make you walk away even if you choose to try? What boundaries do you need right now to feel safe enough to even make a decision?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 35
  },
  {
    id: 'recovering-from-infidelity-36',
    question: 'Design your support system strategy. Write down who serves what role: Who can you vent to without judgment? Who will tell you hard truths? Who will help with practical things? Who should you NOT talk to about this and why?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 36
  },
  {
    id: 'recovering-from-infidelity-37',
    question: 'Plan your communication strategy with your partner. Write down: How often should you talk about the infidelity vs try to have normal interactions? What topics are safe vs triggering? How will you signal when you need space vs when you need to connect?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 37
  },
  {
    id: 'recovering-from-infidelity-38',
    question: 'Map out the impact on others. Write down how each path affects: your children (if applicable), your family, your friends, your work, your living situation. For each person/area, what\'s the best case and worst case scenario for both staying and leaving?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 38
  },
  {
    id: 'recovering-from-infidelity-39',
    question: 'Create your self-care sustainability plan. Write down: What do you need daily to stay sane (sleep, exercise, therapy, alone time)? What are you currently sacrificing that you can\'t keep sacrificing? How will you protect your basic needs while going through this?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 39
  },
  {
    id: 'recovering-from-infidelity-40',
    question: 'Plan for the financial implications of each path. If staying: what does couples therapy cost, what financial transparency do you need? If leaving: what\'s the separation timeline, what assets need dividing, what\'s your 6-month budget solo? Make it specific.',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 40
  },
  {
    id: 'recovering-from-infidelity-41',
    question: 'Design your truth-seeking vs peace-seeking balance. Write down: What details do you genuinely need to know vs what would just hurt more? How much disclosure helps you heal vs how much keeps you stuck? Where\'s your line between informed and obsessed?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 41
  },
  {
    id: 'recovering-from-infidelity-42',
    question: 'Anticipate your future self\'s perspective. Imagine yourself 5 years from now having stayed vs 5 years from now having left. For each scenario, write: What would make future-you grateful for the decision? What would make future-you regret it?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 42
  },
  {
    id: 'recovering-from-infidelity-43',
    question: 'Create your decision deadline and criteria. Write down: When do you need to make a decision (date)? What would you need to see from your partner by then? What would you need to feel internally? What would tip you toward staying vs leaving?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 43
  },
  {
    id: 'recovering-from-infidelity-44',
    question: 'Plan for the reality that this might take longer than you want. Write down: If you\'re still undecided in 3 months, what would that mean? Is it okay to be in limbo, or does indecision harm you? What\'s the longest you\'re willing to stay in uncertainty?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 44
  },
  {
    id: 'recovering-from-infidelity-45',
    question: 'Design your identity reconstruction plan. Whether you stay or leave, write down: Who are you outside of this betrayal? What parts of yourself got lost in this relationship? What do you want to reclaim regardless of which path you choose?',
    category: 'planning',
    template_id: 'recovering-from-infidelity',
    question_number: 45
  },
  // Action Questions (46-60) - 25%
  {
    id: 'recovering-from-infidelity-46',
    question: 'Schedule the full disclosure conversation with your partner. Write down: When will you have it (specific date/time)? Where (private, safe place)? What are the 5 specific questions you need answered? How will you stay grounded if you get triggered during the conversation?',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 46
  },
  {
    id: 'recovering-from-infidelity-47',
    question: 'Create your crisis response toolkit. Document right now: 3 people you can call at 3am, 3 activities that ground you when you\'re spiraling, 3 phrases you can tell yourself when the intrusive thoughts hit. Save this somewhere you can access when you\'re in crisis mode.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 47
  },
  {
    id: 'recovering-from-infidelity-48',
    question: 'Book a therapy session this week. Write down: Which therapist will you call (from your research)? When will you call them (specific time today or tomorrow)? What will you say when you call? If they\'re not available, who\'s your backup option?',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 48
  },
  {
    id: 'recovering-from-infidelity-49',
    question: 'Set up a transparency system if you\'re trying to rebuild trust. Write down: What specific access do you need (phone, social media, location)? How will you ask for it? What will you do with that access (check daily, only when triggered, random checks)? When will you re-evaluate if this is helping or harming?',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 49
  },
  {
    id: 'recovering-from-infidelity-50',
    question: 'Create a no-contact or minimal-contact plan with the other person. Write down: What specifically needs to happen (blocking, job change, social circle adjustment)? Who enforces it - you or your partner? How will you verify? What happens if contact occurs?',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 50
  },
  {
    id: 'recovering-from-infidelity-51',
    question: 'Document your emotional state daily for the next 2 weeks. Set a phone reminder for 9pm every night. Write down: How you felt today (1-10), what triggered you, what helped, what you need tomorrow. This creates data for noticing patterns and progress.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 51
  },
  {
    id: 'recovering-from-infidelity-52',
    question: 'Tell one trusted person the full truth this week. Write down: Who will you tell? When will you reach out to them (specific date)? What do you need from them (just listening, advice, distraction)? Practice saying out loud: "Something happened and I need to talk to you about it."',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 52
  },
  {
    id: 'recovering-from-infidelity-53',
    question: 'Establish immediate boundaries with your partner. Write down: What physical boundaries do you need right now (separate beds, space, no touching)? What communication boundaries (daily check-ins, no surprise visits)? Tell your partner these boundaries today in writing or in person.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 53
  },
  {
    id: 'recovering-from-infidelity-54',
    question: 'Create evidence of your current state for future reference. Write a dated journal entry right now describing: how you feel, what you know, what you\'re thinking. Seal it and label it "open in 3 months." Future-you will need to see where you started.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 54
  },
  {
    id: 'recovering-from-infidelity-55',
    question: 'Remove or modify immediate triggers in your environment. Write down: What physical items remind you of the betrayal (photos, gifts, clothes)? What digital triggers (social media, shared playlists)? Choose 3 to address this week - hide them, delete them, or modify them.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 55
  },
  {
    id: 'recovering-from-infidelity-56',
    question: 'Schedule a financial audit conversation. Write down: When will you have this conversation (within 2 weeks)? What accounts do you need to review? What documentation do you need to gather? If you\'re considering leaving, what do you need to protect or separate right now?',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 56
  },
  {
    id: 'recovering-from-infidelity-57',
    question: 'Create your weekly self-care non-negotiables. Write down: What 3 things will you do EVERY week no matter what (therapy, exercise, friend time, hobby)? Put them in your calendar right now as recurring events. Treat them as unbreakable appointments.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 57
  },
  {
    id: 'recovering-from-infidelity-58',
    question: 'Draft the letter you\'ll never send. Write everything you want to say to your partner (or the other person) with no filter - rage, grief, questions, everything. Don\'t send it. Save it. Re-read it in a week. What does it tell you about what you need?',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 58
  },
  {
    id: 'recovering-from-infidelity-59',
    question: 'Identify your decision checkpoint date. Write it in your calendar right now: the date you\'ll re-evaluate whether to stay or leave. It should be far enough to gather information (at least 1 month) but not so far you stay in limbo forever (not more than 3 months). On that date, you\'ll review all these questions and decide.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
    question_number: 59
  },
  {
    id: 'recovering-from-infidelity-60',
    question: 'Create your action plan for the next 72 hours. Write down: What are you doing today to take care of yourself? Tomorrow? The day after? Make it specific (calling therapist, going for a walk, asking friend to dinner). These first days are critical - make a plan you can actually follow.',
    category: 'action',
    template_id: 'recovering-from-infidelity',
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
    .eq('template_id', 'recovering-from-infidelity');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${((counts.reflection / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${((counts.research / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${((counts.planning / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${((counts.action / verifyData.length) * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
