import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Y3N0Y2FqY3RxYnhkZG9zZGJmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzk3OTcwNywiZXhwIjoyMDczNTU1NzA3fQ.PjcGj6uFV1M5yFju1YYvbxG3ld55llauMUPlrjow6I4';

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-15) - reflection category
  {
    id: 'depression-recovery-1',
    question: 'Write about the last time you felt genuinely okay - not happy, just okay. What were you doing that day? Who were you with? What was different about that day compared to today?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 1
  },
  {
    id: 'depression-recovery-2',
    question: 'Document 3 specific moments in the past month when the heaviness felt slightly lighter, even for an hour. What were you doing right before? What happened during? What changed after?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 2
  },
  {
    id: 'depression-recovery-3',
    question: 'Think about the past 2 weeks. List the times when getting out of bed felt impossible vs times when it felt slightly easier. What pattern do you notice about days or situations?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 3
  },
  {
    id: 'depression-recovery-4',
    question: 'Reflect on a previous difficult period in your life (not depression, just hard times). Write about 2-3 things you did then that helped you get through it. Are any of those things available to you now?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 4
  },
  {
    id: 'depression-recovery-5',
    question: 'Write down the last 5 times someone asked "How are you?" What did you say to each person? Who (if anyone) did you tell the truth to? What made that person different?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 5
  },
  {
    id: 'depression-recovery-6',
    question: 'Think about your daily routine 6 months ago vs now. List 3 specific things you used to do regularly that you\'ve stopped doing. When did each one drop off? Did it happen suddenly or gradually?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 6
  },
  {
    id: 'depression-recovery-7',
    question: 'Document the last time you cried. What triggered it? Did it feel like relief or did it make things worse? What did you do right after?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 7
  },
  {
    id: 'depression-recovery-8',
    question: 'Reflect on the voice in your head when depression is worst. Write down 3 specific things it tells you about yourself. When did you first start hearing these messages?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 8
  },
  {
    id: 'depression-recovery-9',
    question: 'Think about the past week. List 3 moments when you felt numb or disconnected vs 3 moments when you felt something (even if it was painful). What\'s the difference between those moments?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 9
  },
  {
    id: 'depression-recovery-10',
    question: 'Write about someone in your life who has struggled with mental health. What did you notice about their behavior? What do you wish they had done differently? What did they do that helped?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 10
  },
  {
    id: 'depression-recovery-11',
    question: 'Document your energy patterns over a typical week. Write down which days/times you have the most energy vs the least. What pattern emerges? Has it always been this way?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 11
  },
  {
    id: 'depression-recovery-12',
    question: 'Think about the activities you used to enjoy. Pick 3 and write: when you last did each one, how it felt, and what stopped you from doing it again.',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 12
  },
  {
    id: 'depression-recovery-13',
    question: 'Reflect on your sleep over the past 2 weeks. List the nights you slept too much, too little, or restlessly. What happened during the day before each bad night? Any pattern?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 13
  },
  {
    id: 'depression-recovery-14',
    question: 'Write about a time in the past year when someone said or did something that made you feel slightly less alone. What specifically did they say/do? Why did it land differently than other attempts to help?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 14
  },
  {
    id: 'depression-recovery-15',
    question: 'Think about the last time you felt angry (not sad, but angry). What was it about? How did you express it or not express it? What does your relationship with anger tell you about how you\'re coping?',
    category: 'reflection',
    template_id: 'depression-recovery',
    question_number: 15
  },
  // Research Questions (16-27) - research category
  {
    id: 'depression-recovery-16',
    question: 'Research 3 therapists or counselors in your area (or online) who specialize in depression. For each, document: their approach (CBT, talk therapy, etc.), cost per session, whether they take your insurance, and availability. Which one feels most accessible to you right now?',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 16
  },
  {
    id: 'depression-recovery-17',
    question: 'List all the people in your life who know you\'re struggling. For each person, write: how they found out, what kind of support they\'ve offered, and whether their support has actually helped or added pressure.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 17
  },
  {
    id: 'depression-recovery-18',
    question: 'Research your current health insurance coverage for mental health services. Document: how many therapy sessions are covered per year, whether medication is covered, if there\'s a copay, and what the process is to find in-network providers.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 18
  },
  {
    id: 'depression-recovery-19',
    question: 'Identify 3 crisis resources available to you right now. Write down: the phone number/website, when they\'re available (24/7 or specific hours), what services they offer (hotline, text, chat), and save them in your phone.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 19
  },
  {
    id: 'depression-recovery-20',
    question: 'Research 5 depression support groups (in-person or online). For each, document: meeting frequency, format (moderated, peer-led, therapy-based), cost (free/paid), and time commitment. Which one has the lowest barrier to entry?',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 20
  },
  {
    id: 'depression-recovery-21',
    question: 'List all medications you\'ve tried for depression (if any). For each, write: when you took it, how long, what it helped with, what side effects you experienced, and why you stopped. If you haven\'t tried medication, write why not.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 21
  },
  {
    id: 'depression-recovery-22',
    question: 'Document your current healthcare access. Write down: who your primary care doctor is, when you last saw them, whether they know about your depression, and how easy it is to get an appointment. Do you have a doctor you trust?',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 22
  },
  {
    id: 'depression-recovery-23',
    question: 'Research 3 different types of therapy approaches for depression (CBT, DBT, psychodynamic, EMDR, etc.). For each, write a 2-sentence summary of how it works and which one resonates most with how you think you need help.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 23
  },
  {
    id: 'depression-recovery-24',
    question: 'Create a list of physical health factors that might be affecting your mental health. Document: last time you had bloodwork done, any chronic conditions you have, medications you take for other things, sleep disorders, thyroid issues, etc. What needs to be ruled out or addressed?',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 24
  },
  {
    id: 'depression-recovery-25',
    question: 'Research workplace mental health resources. Document: does your company offer an EAP (Employee Assistance Program), do you have mental health days or sick leave, is there disability coverage for mental health, who would you need to tell to access these benefits?',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 25
  },
  {
    id: 'depression-recovery-26',
    question: 'List 3 people in your life who have been through therapy or taken medication for mental health. For each, write: what you know about their experience, whether they\'ve talked openly about it, and if you feel comfortable asking them questions.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 26
  },
  {
    id: 'depression-recovery-27',
    question: 'Research the cost and process of taking medical leave if needed. Document: how many hours/days you have available, whether you need documentation from a doctor, how much notice is required, and what the financial impact would be.',
    category: 'research',
    template_id: 'depression-recovery',
    question_number: 27
  },
  // Planning Questions (28-42) - planning category
  {
    id: 'depression-recovery-28',
    question: 'Design your minimal viable day. Write down the smallest set of actions that would make you feel like you survived the day (not thrived, just survived). What does "bare minimum success" look like for you right now?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 28
  },
  {
    id: 'depression-recovery-29',
    question: 'Map out your support structure. Create a list with 3 tiers: (1) People you could call at 3am in crisis, (2) People you could text when having a bad day, (3) People who are supportive but not for emergency contact. Who goes in each tier?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 29
  },
  {
    id: 'depression-recovery-30',
    question: 'Plan your energy budget for a typical week. List all your obligations (work, family, household tasks). For each, write whether it drains or sustains you. What can you reduce, delegate, or eliminate for the next month?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 30
  },
  {
    id: 'depression-recovery-31',
    question: 'Create your warning signs checklist. List 5 specific behaviors or thoughts that signal you\'re getting worse (not "feeling sad" but concrete signs like "stopped showering for 3 days" or "avoiding all texts"). What\'s your early warning system?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 31
  },
  {
    id: 'depression-recovery-32',
    question: 'Design your emergency protocol. Write out exactly what you\'ll do if you hit a crisis point: who you\'ll call first, second, third; where you\'ll go if you can\'t be alone; what you\'ll tell them you need. Make this specific and actionable.',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 32
  },
  {
    id: 'depression-recovery-33',
    question: 'Plan your professional life management strategy. Write down: what your manager/colleagues currently know vs what they need to know, what accommodations would actually help (flexible hours, WFH, reduced load), and how you\'ll ask for them if needed.',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 33
  },
  {
    id: 'depression-recovery-34',
    question: 'Map out your treatment timeline. If you started therapy this week, write your ideal progression: first month (finding right therapist, weekly sessions), 3 months (regular appointments, possibly medication), 6 months (noticeable improvement?), 1 year (sustainable habits). What does realistic progress look like?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 34
  },
  {
    id: 'depression-recovery-35',
    question: 'Create your relationship management plan. List people in your life and what you need from each: who needs updates on how you\'re doing, who you need space from, who helps by distracting you, who helps by listening. How will you communicate these different needs?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 35
  },
  {
    id: 'depression-recovery-36',
    question: 'Design your daily structure experiment. Pick 3 specific time blocks for this week and assign an anchor activity to each (morning: 10-minute walk, afternoon: eat something, evening: 5-minute phone call). What\'s the minimal structure that might help?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 36
  },
  {
    id: 'depression-recovery-37',
    question: 'Plan your social boundary strategy. Write down 3 types of social situations and your current capacity: (1) One-on-one with close friend, (2) Small group gathering, (3) Large event/party. For each, what\'s your honest limit right now and how will you communicate it?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 37
  },
  {
    id: 'depression-recovery-38',
    question: 'Map out your medication decision tree if considering it. Write: What would need to be true for you to try medication? What are your biggest fears about it? What would success look like? Who will you consult before deciding?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 38
  },
  {
    id: 'depression-recovery-39',
    question: 'Create your environment optimization plan. List 5 aspects of your living space that affect your mood (light, clutter, noise, temperature, etc.). For each, write one small change you could make this week.',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 39
  },
  {
    id: 'depression-recovery-40',
    question: 'Design your progress tracking system. Decide what you\'ll track (mood, sleep, activities, social contact?) and how often (daily, weekly?). What\'s the simplest system you\'d actually use for a month?',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 40
  },
  {
    id: 'depression-recovery-41',
    question: 'Plan your relapse prevention strategy. Write down 3 scenarios that could trigger a setback (job stress, relationship conflict, seasonal change). For each, list 2 specific things you\'ll do to catch it early.',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 41
  },
  {
    id: 'depression-recovery-42',
    question: 'Create your meaning and purpose exploration plan. List 3 small activities that used to give you a sense of purpose or connection (work projects, creative hobbies, helping others, learning). For each, write what the smallest version of that activity looks like now.',
    category: 'planning',
    template_id: 'depression-recovery',
    question_number: 42
  },
  // Action Questions (43-60) - action category
  {
    id: 'depression-recovery-43',
    question: 'Text one person right now. It can be: "Having a rough day" or "Can we talk later?" or just "hey". Pick the person who feels safest and send it before you finish this question. Write down who you texted and what happened.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 43
  },
  {
    id: 'depression-recovery-44',
    question: 'Schedule one appointment this week. It can be: therapy intake call, doctor visit to discuss mental health, or even just a haircut/routine appointment that forces you to leave the house. Write down what you\'re scheduling and when you\'ll make the call.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 44
  },
  {
    id: 'depression-recovery-45',
    question: 'Delete or mute 3 sources of negative input for the next week. This could be: news apps, social media accounts that trigger comparison, group chats that drain you, or YouTube recommendations. Write down what you\'re removing and commit to one week without them.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 45
  },
  {
    id: 'depression-recovery-46',
    question: 'Create your crisis contact card right now. Open your phone notes and write: (1) Crisis hotline: 988, (2) Name + number of person to call first, (3) Name + number of backup person, (4) Your therapist\'s office number (or "find therapist" if you don\'t have one), (5) Nearest ER address. Save it where you can find it at 3am.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 46
  },
  {
    id: 'depression-recovery-47',
    question: 'Set 3 alarms for this week labeled with tiny actions: "drink water", "step outside", "text someone". Pick realistic times when you\'re usually awake. Write down what times and what actions.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 47
  },
  {
    id: 'depression-recovery-48',
    question: 'Do one small physical thing in the next hour: 5-minute walk around the block, open a window for fresh air, take a shower, do 10 jumping jacks, or sit in sunlight for 5 minutes. Write down what you\'ll do and when.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 48
  },
  {
    id: 'depression-recovery-49',
    question: 'Reach out to one professional resource today. This could be: calling your insurance to ask about mental health coverage, googling "therapists near me", texting a friend who\'s been through therapy to ask for a referral, or scheduling with your primary care doctor. Do one thing today. Write what you did.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 49
  },
  {
    id: 'depression-recovery-50',
    question: 'Clear one physical space in the next 24 hours. Pick something manageable: your nightstand, one corner of your room, the dishes in the sink, or just making your bed. Write down what space you\'ll clear and when.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 50
  },
  {
    id: 'depression-recovery-51',
    question: 'Set one boundary this week. Write down: one person you\'ll say "no" to, one social event you\'ll skip without guilt, one text you won\'t respond to immediately, or one work request you\'ll push back on. What\'s the one boundary and how will you communicate it?',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 51
  },
  {
    id: 'depression-recovery-52',
    question: 'Start a 1-sentence daily note today. For the next 7 days, write just one sentence about your day before bed - can be mood, what you did, or what you\'re grateful for (or just "survived"). Create the note right now titled "7-day check-in" and write today\'s sentence.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 52
  },
  {
    id: 'depression-recovery-53',
    question: 'Prep one easy meal or snack today that you can grab tomorrow. It can be: cutting fruit and putting it in a container, making a sandwich and wrapping it, or just putting granola bars on your nightstand. Write what you\'re prepping and do it within the next hour.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 53
  },
  {
    id: 'depression-recovery-54',
    question: 'Send one honest message to someone who\'s asked how you are. Don\'t say "fine". Try: "Actually struggling but working on it" or "Not great, appreciate you asking". Pick one person and send it today. Write down who and what you said.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 54
  },
  {
    id: 'depression-recovery-55',
    question: 'Commit to one week of micro-movement. Write down your commitment: "5 minutes of walking every day" or "stretching in bed each morning" or "standing outside for 2 minutes". What\'s your specific commitment and when does your week start?',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 55
  },
  {
    id: 'depression-recovery-56',
    question: 'Book one thing to look forward to in the next 2 weeks. It can be small: ordering your favorite takeout on Friday, scheduling a call with a friend, buying a book, or planning to watch a specific movie. Write what it is and put it in your calendar with a reminder.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 56
  },
  {
    id: 'depression-recovery-57',
    question: 'Reduce one major stressor for the next month. Write what you\'re reducing and how: taking time off work, asking someone to cover a responsibility, pausing a project, or saying no to a commitment. What\'s the one thing and what\'s your action today to reduce it?',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 57
  },
  {
    id: 'depression-recovery-58',
    question: 'Create your morning routine card. Write down the 3-5 smallest things you\'ll try to do each morning for one week: drink water, open blinds, take medication (if prescribed), get out of bed by [time]. Make this your lock screen or write it on paper by your bed.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 58
  },
  {
    id: 'depression-recovery-59',
    question: 'Join one online space for support this week. Research and join (you don\'t have to post): a depression support subreddit, a mental health Discord server, a therapy app community, or a moderated support group. Write down which one and when you\'ll join.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 59
  },
  {
    id: 'depression-recovery-60',
    question: 'Set your check-in date. Pick a date exactly 2 weeks from today. On that date, you\'ll return to these notes and write: What improved even slightly? What got harder? What\'s one thing you\'ll do in the next 2 weeks? Add this to your calendar right now with a link to these notes. Write down the date.',
    category: 'action',
    template_id: 'depression-recovery',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for depression-recovery guide...`);

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
    .eq('template_id', 'depression-recovery');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${(counts.reflection / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action / verifyData.length * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
