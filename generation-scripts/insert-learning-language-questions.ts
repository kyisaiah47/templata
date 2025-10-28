import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (9 questions - 25%)
  {
    id: 'learning-language-1',
    question: 'Think about the last 3 times you heard or saw this language (or a language you admired). Where were you? What were you doing? What specific feeling or thought made you notice it?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 1
  },
  {
    id: 'learning-language-2',
    question: 'Write about a time you tried to learn something difficult and stuck with it long enough to see real progress. What kept you going during the frustrating middle part? What was different about that experience?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 2
  },
  {
    id: 'learning-language-3',
    question: 'List 3 specific moments from the past year when knowing this language would have changed something for you. What exactly would have been different? How did it feel to not be able to communicate?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 3
  },
  {
    id: 'learning-language-4',
    question: 'Reflect on your past attempts to learn languages or similar skills. What pattern do you notice in what made you stop? Was it the method, the timing, the motivation, or something else?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 4
  },
  {
    id: 'learning-language-5',
    question: 'Think about how you naturally learn new things. Do you prefer structured lessons or figuring it out? Learning alone or with others? By listening, reading, or doing? Write about 2 examples that show your natural style.',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 5
  },
  {
    id: 'learning-language-6',
    question: 'Document the specific life situation that makes learning this language matter RIGHT NOW. What changed in the past 6 months? What will change in the next 6 months if you don\'t start?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 6
  },
  {
    id: 'learning-language-7',
    question: 'Write about someone you know who successfully learned a language as an adult. What did they do differently than others who tried and quit? What do you notice about their approach?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 7
  },
  {
    id: 'learning-language-8',
    question: 'List 5 situations in your regular life where you\'ll actually USE this language, not just study it. Be specific: Who will you talk to? What will you read? Where will you go?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 8
  },
  {
    id: 'learning-language-9',
    question: 'Reflect on what "fluent" actually means to you. Not the textbook definition - what specific things do you want to be able to DO with this language that you can\'t do now?',
    category: 'reflection',
    template_id: 'learning-language',
    question_number: 9
  },

  // RESEARCH QUESTIONS (8 questions - 22%)
  {
    id: 'learning-language-10',
    question: 'Research 3 different learning methods (apps, tutors, classes, immersion, etc.). For each, write down: cost, time required per week, and one thing that appeals to you and one that concerns you.',
    category: 'research',
    template_id: 'learning-language',
    question_number: 10
  },
  {
    id: 'learning-language-11',
    question: 'Find 3 people online who document their language learning journey in your target language. What patterns do you notice in how they practice? What mistakes do they warn about? What timeline did it take them?',
    category: 'research',
    template_id: 'learning-language',
    question_number: 11
  },
  {
    id: 'learning-language-12',
    question: 'Look up 5 ways to get real exposure to this language in your city or online. List each opportunity with: what it is, how often it meets, what level it\'s for, and what makes you hesitant or excited about it.',
    category: 'research',
    template_id: 'learning-language',
    question_number: 12
  },
  {
    id: 'learning-language-13',
    question: 'Research the specific dialect or variant you need. Compare what you\'ll learn in standard courses vs. what people actually speak where you\'ll use it. What differences matter most for your goals?',
    category: 'research',
    template_id: 'learning-language',
    question_number: 13
  },
  {
    id: 'learning-language-14',
    question: 'Find 3 native speakers on language exchange platforms. Look at their profiles - what are they interested in? Could you have real conversations about shared interests, or would you be forcing it?',
    category: 'research',
    template_id: 'learning-language',
    question_number: 14
  },
  {
    id: 'learning-language-15',
    question: 'Document your current schedule for one week. Highlight in different colors: time you could realistically study (be honest), time you could practice passively (listening/reading), and time that\'s truly untouchable.',
    category: 'research',
    template_id: 'learning-language',
    question_number: 15
  },
  {
    id: 'learning-language-16',
    question: 'Research the progression from beginner to intermediate in your target language. What specific grammar, vocabulary size, and skills mark each level? Which level do you actually need for your goals?',
    category: 'research',
    template_id: 'learning-language',
    question_number: 16
  },
  {
    id: 'learning-language-17',
    question: 'Look up 3 resources in your target language about topics you already care about (your hobbies, work, interests). Bookmark them. Try reading/watching one. How much can you understand right now?',
    category: 'research',
    template_id: 'learning-language',
    question_number: 17
  },

  // PLANNING QUESTIONS (10 questions - 28%)
  {
    id: 'learning-language-18',
    question: 'Map out what specific skills you need first based on how you\'ll use the language. If you need to read work emails, grammar comes before speaking. If you need to order food, speaking comes before writing. What\'s YOUR priority order?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 18
  },
  {
    id: 'learning-language-19',
    question: 'Design your ideal "language day" 6 months from now. What time do you study? What are you studying? Who are you practicing with? What feels different from today? Be specific about the schedule.',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 19
  },
  {
    id: 'learning-language-20',
    question: 'Create a backup plan for the week you know you\'ll want to quit (week 3-4 for most people). What will you do that week that\'s so easy you can\'t say no? What\'s the absolute minimum that counts as "not giving up"?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 20
  },
  {
    id: 'learning-language-21',
    question: 'Plan how you\'ll transition from "studying" to "using" the language. At what point will you force yourself to think in the language? When will you stop translating in your head? What\'s the trigger for each shift?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 21
  },
  {
    id: 'learning-language-22',
    question: 'Design your accountability system. Who will check on you? How often? What exactly will you report (hours studied? lessons completed? conversations had?)? What happens if you miss your commitment?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 22
  },
  {
    id: 'learning-language-23',
    question: 'Map out your "embarrassment tolerance" strategy. You WILL make mistakes in front of people. When will you start speaking before you\'re ready? How will you handle freezing up? Who feels safe to practice with first?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 23
  },
  {
    id: 'learning-language-24',
    question: 'Create a system for what to do when you forget something you studied. How will you track what you keep forgetting? When will you review? What\'s your strategy for moving from short-term to long-term memory?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 24
  },
  {
    id: 'learning-language-25',
    question: 'Plan your immersion strategy. What will you change in your environment to see/hear this language daily? Phone settings? Social media follows? Background music? What\'s one change you\'ll make TODAY?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 25
  },
  {
    id: 'learning-language-26',
    question: 'Design checkpoints to evaluate if your method is working. At 2 weeks, 1 month, and 3 months - what specific things should you be able to do? What\'s your "this isn\'t working" signal?',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 26
  },
  {
    id: 'learning-language-27',
    question: 'Create your personal curriculum for the first 30 days. Break it down week by week. What will you learn? How will you practice? What resources will you use? Be specific enough that you could start tomorrow.',
    category: 'planning',
    template_id: 'learning-language',
    question_number: 27
  },

  // ACTION QUESTIONS (9 questions - 25%)
  {
    id: 'learning-language-28',
    question: 'Write down your language learning goal as a specific sentence you want to be able to say or understand 6 months from now. Then record yourself trying to say it now. Save this - you\'ll need it later.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 28
  },
  {
    id: 'learning-language-29',
    question: 'Choose ONE primary resource or method for the next 30 days. Write down exactly what you\'re committing to: which app, class, or system, how many minutes per day, at what time. Then pay for it or sign up right now.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 29
  },
  {
    id: 'learning-language-30',
    question: 'Set up your environment for success today. Change your phone to the target language, find one podcast to subscribe to, follow 3 accounts that post in the language. Do these 3 things before you continue.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 30
  },
  {
    id: 'learning-language-31',
    question: 'Schedule your first conversation with a native speaker or tutor, even if it\'s 2 months away. Put the actual date and time in your calendar. What do you need to prepare to not cancel out of fear?',
    category: 'action',
    template_id: 'learning-language',
    question_number: 31
  },
  {
    id: 'learning-language-32',
    question: 'Create a physical or digital space for your language practice. Gather your materials, bookmark your resources, set up your notebook or app. Make it so easy to start that you have no excuse tomorrow.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 32
  },
  {
    id: 'learning-language-33',
    question: 'Write a text to someone who will hold you accountable. Tell them your specific goal, timeline, and how you want them to check on you. Send it now. Screenshot their response.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 33
  },
  {
    id: 'learning-language-34',
    question: 'Document your starting point. Test yourself with a free placement test, record yourself speaking for 30 seconds, write a paragraph in the target language. Save these. You\'ll forget how far you\'ve come.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 34
  },
  {
    id: 'learning-language-35',
    question: 'Create a reward system for milestones. At 1 week, 1 month, 3 months, and 6 months - what will you do to celebrate? Write it down. Make the rewards specific and actually motivating to you.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 35
  },
  {
    id: 'learning-language-36',
    question: 'Do your first study session right now. Even if it\'s just 5 minutes. Learn 5 words or phrases you can use tomorrow. Write them down. Use one of them in a sentence out loud. Start before you\'re ready.',
    category: 'action',
    template_id: 'learning-language',
    question_number: 36
  }
];

async function insertQuestions() {
  console.log('Starting to insert questions...');

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    throw error;
  }

  console.log('Successfully inserted all questions!');
  console.log('Total questions inserted:', questions.length);

  // Count by category
  const breakdown = questions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('\nBreakdown by category:');
  console.log('- Reflection:', breakdown.reflection || 0);
  console.log('- Research:', breakdown.research || 0);
  console.log('- Planning:', breakdown.planning || 0);
  console.log('- Action:', breakdown.action || 0);
}

insertQuestions();
