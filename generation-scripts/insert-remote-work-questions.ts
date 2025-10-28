import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (10 questions - 25%)
  {
    id: 'remote-work-1',
    question: 'Think about your first week working remotely. What surprised you most? What did you expect to love but didn\'t? What unexpected challenge showed up?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 1
  },
  {
    id: 'remote-work-2',
    question: 'Recall 3 specific days in the past month when remote work felt great. What made those days different? What time did you start? What did you accomplish? How did you feel at the end?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 2
  },
  {
    id: 'remote-work-3',
    question: 'Write about a time when working from home made you feel isolated or disconnected. What triggered it? What did you do? What would have helped in that moment?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 3
  },
  {
    id: 'remote-work-4',
    question: 'Document your natural energy patterns working from home. When do you feel most focused? When does your energy crash? What\'s different from when you worked in an office?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 4
  },
  {
    id: 'remote-work-5',
    question: 'Reflect on how you currently end your workday. What\'s your transition ritual (or lack of one)? When did this pattern start? How do you feel about it?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 5
  },
  {
    id: 'remote-work-6',
    question: 'Think about someone you know who seems to thrive working remotely. What specifically do they do differently? What boundaries have you noticed? What habits stand out?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 6
  },
  {
    id: 'remote-work-7',
    question: 'Write about your relationship with "being visible" at work remotely. Do you over-communicate to be seen? Feel forgotten? Feel relieved by less scrutiny? When did this pattern emerge?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 7
  },
  {
    id: 'remote-work-8',
    question: 'Recall the moments in the past week when you felt most distracted at home. What were you doing? What pulled your attention? What pattern do you notice?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 8
  },
  {
    id: 'remote-work-9',
    question: 'Reflect on your current workspace. How did it evolve to what it is now? What compromises did you make? What bothers you about it but you haven\'t fixed?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 9
  },
  {
    id: 'remote-work-10',
    question: 'Think about Sunday evenings before a remote work week vs. when you worked in-office. What\'s different in how you feel? What does this tell you about your remote work experience?',
    category: 'reflection',
    template_id: 'remote-work',
    question_number: 10
  },

  // RESEARCH QUESTIONS (9 questions - 22%)
  {
    id: 'remote-work-11',
    question: 'Track your actual work hours for the next 3 days. When did you start? When did you truly stop? How many times did you check work after "done"? What pattern emerges?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 11
  },
  {
    id: 'remote-work-12',
    question: 'Audit your current workspace setup. List every item: desk, chair, monitor, lighting, noise level. Rate each 1-10 for functionality. What\'s causing the most physical discomfort?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 12
  },
  {
    id: 'remote-work-13',
    question: 'Review your calendar from the past 2 weeks. Count: video calls, phone calls, async work blocks, meeting-free days. What percentage of your time is synchronous vs. asynchronous?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 13
  },
  {
    id: 'remote-work-14',
    question: 'Document all the places you\'ve worked from home in the past month. For each location: how long, how productive (1-10), what made it work or not work?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 14
  },
  {
    id: 'remote-work-15',
    question: 'List every interruption or distraction you experienced yesterday. For each: what was it, how long did it take to refocus, could it have been prevented?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 15
  },
  {
    id: 'remote-work-16',
    question: 'Research your team\'s communication patterns. Count messages/emails you received yesterday by: urgent, important-not-urgent, could-wait, unnecessary. What\'s the ratio?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 16
  },
  {
    id: 'remote-work-17',
    question: 'Inventory your remote work tools and subscriptions. Which do you use daily? Weekly? Never? Which feel essential vs. which add complexity?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 17
  },
  {
    id: 'remote-work-18',
    question: 'Track your movement throughout one workday. How many times did you leave your desk? For how long? How does this compare to office days?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 18
  },
  {
    id: 'remote-work-19',
    question: 'Document your "career visibility" in the past month. List: presentations given, ideas shared publicly, 1-on-1s with leadership, projects you led. How visible are you actually?',
    category: 'research',
    template_id: 'remote-work',
    question_number: 19
  },

  // PLANNING QUESTIONS (11 questions - 28%)
  {
    id: 'remote-work-20',
    question: 'Design your ideal remote work routine from wake-up to shutdown. Hour by hour: what would you do differently? What would you keep? Where are you being unrealistic?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 20
  },
  {
    id: 'remote-work-21',
    question: 'Plan your workspace upgrade within your current constraints (budget, space, living situation). What 3 changes would have the biggest impact? What\'s your timeline?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 21
  },
  {
    id: 'remote-work-22',
    question: 'Create your communication strategy with your team. For each type of update: which channel, how often, what level of detail? What boundaries will you set?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 22
  },
  {
    id: 'remote-work-23',
    question: 'Map out your "focus architecture" for deep work. When will you schedule it? How will you protect it? What will you say when interrupted? Be specific.',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 23
  },
  {
    id: 'remote-work-24',
    question: 'Develop your visibility strategy for the next quarter. What will you make sure leadership sees? How will you share wins? What opportunities will you create to be seen?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 24
  },
  {
    id: 'remote-work-25',
    question: 'Plan your work-life boundary system. What will signal "work mode" vs. "home mode"? What time boundaries feel right? How will you enforce them with yourself and others?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 25
  },
  {
    id: 'remote-work-26',
    question: 'Design your remote relationship-building approach. Who do you need to connect with more? How often? What format works for you (coffee chats, co-working, async check-ins)?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 26
  },
  {
    id: 'remote-work-27',
    question: 'Create your meeting optimization strategy. Which meetings could be async? Where do you need to speak up more? Which should you decline? What\'s your plan?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 27
  },
  {
    id: 'remote-work-28',
    question: 'Plan for the scenarios where remote work gets hard. Loneliness? Burnout? Distraction? For each: what\'s your early warning sign and your specific response?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 28
  },
  {
    id: 'remote-work-29',
    question: 'Develop your professional development plan while remote. What skills do you want to build? How will you learn without office osmosis? What\'s your 6-month goal?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 29
  },
  {
    id: 'remote-work-30',
    question: 'Design your "remote work reset" routine for when things feel off. What will you assess? What experiments will you try? How will you know what\'s working?',
    category: 'planning',
    template_id: 'remote-work',
    question_number: 30
  },

  // ACTION QUESTIONS (10 questions - 25%)
  {
    id: 'remote-work-31',
    question: 'Optimize one aspect of your workspace today. Whether it\'s lighting, chair height, or monitor position - make one physical change right now. What did you improve?',
    category: 'action',
    template_id: 'remote-work',
    question_number: 31
  },
  {
    id: 'remote-work-32',
    question: 'Block your first "deep work" session for this week. Put it in your calendar with a specific focus. What day? What time? What will you work on? Do it now.',
    category: 'action',
    template_id: 'remote-work',
    question_number: 32
  },
  {
    id: 'remote-work-33',
    question: 'Create your end-of-day shutdown ritual starting today. Choose 3 specific actions that signal work is done. What are they? When will you start this routine?',
    category: 'action',
    template_id: 'remote-work',
    question_number: 33
  },
  {
    id: 'remote-work-34',
    question: 'Reach out to one person on your team for a non-work connection this week. Who will you contact? What will you suggest? Schedule it now or send the message.',
    category: 'action',
    template_id: 'remote-work',
    question_number: 34
  },
  {
    id: 'remote-work-35',
    question: 'Set up one automation or tool that will improve your remote work this week. Calendar time blocking? Slack status automation? Focus mode? Implement it now.',
    category: 'action',
    template_id: 'remote-work',
    question_number: 35
  },
  {
    id: 'remote-work-36',
    question: 'Decline or delegate one meeting on your calendar this week. Which one doesn\'t need you? How will you communicate the change? Do it today.',
    category: 'action',
    template_id: 'remote-work',
    question_number: 36
  },
  {
    id: 'remote-work-37',
    question: 'Schedule your first "remote work review" session one week from today. Put it in your calendar. What will you assess? What questions will you ask yourself?',
    category: 'action',
    template_id: 'remote-work',
    question_number: 37
  },
  {
    id: 'remote-work-38',
    question: 'Implement one boundary this week: no work after X time, no Slack on phone, lunch away from desk. Which boundary will you try? How will you enforce it?',
    category: 'action',
    template_id: 'remote-work',
    question_number: 38
  },
  {
    id: 'remote-work-39',
    question: 'Create one artifact that increases your visibility this week: a project update, a contribution to team docs, or sharing a win. What will you create? When will you share it?',
    category: 'action',
    template_id: 'remote-work',
    question_number: 39
  },
  {
    id: 'remote-work-40',
    question: 'Test one routine change for 3 days starting tomorrow. Different start time? Morning walk? Dedicated lunch break? What will you experiment with? Track how it feels.',
    category: 'action',
    template_id: 'remote-work',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for remote-work guide...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✓ Successfully inserted all questions');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'remote-work');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
    process.exit(1);
  }

  const counts = verifyData.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\nBreakdown by category:');
  console.log(`- Reflection (Foundation): ${counts.reflection || 0} questions (${Math.round((counts.reflection || 0) / questions.length * 100)}%)`);
  console.log(`- Research: ${counts.research || 0} questions (${Math.round((counts.research || 0) / questions.length * 100)}%)`);
  console.log(`- Planning: ${counts.planning || 0} questions (${Math.round((counts.planning || 0) / questions.length * 100)}%)`);
  console.log(`- Action: ${counts.action || 0} questions (${Math.round((counts.action || 0) / questions.length * 100)}%)`);
  console.log(`\nTotal: ${verifyData.length} questions`);
}

insertQuestions();
