import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (15 questions - 25%)
  {
    id: 'parenting-teens-1',
    question: 'Think about the moment you realized your child was becoming a teenager. What specific change did you notice? What did you feel? How did you respond?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 1
  },
  {
    id: 'parenting-teens-2',
    question: 'Recall a conversation with your teen from the past month that went well. What were you talking about? What did you do differently? What made them open up?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 2
  },
  {
    id: 'parenting-teens-3',
    question: 'Write about a time in the past year when you and your teen clashed. What triggered it? What did you each say? What do you wish you\'d done differently?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 3
  },
  {
    id: 'parenting-teens-4',
    question: 'Reflect on your own teenage years. What did you need most from your parents? What did they do that helped? What hurt?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 4
  },
  {
    id: 'parenting-teens-5',
    question: 'Document the last 3 times you said "no" to your teen. What were they asking for? What was your reason? How did they react? What does this pattern reveal?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 5
  },
  {
    id: 'parenting-teens-6',
    question: 'Think about when you feel most connected to your teen. What are you doing together? What time of day? What makes those moments different from the rest?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 6
  },
  {
    id: 'parenting-teens-7',
    question: 'Write about a recent moment when your teen surprised you - either positively or negatively. What assumptions did you have? What does this tell you about how well you know them now?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 7
  },
  {
    id: 'parenting-teens-8',
    question: 'Recall how your parents handled your teenage years. What rules did they have? How did you feel about it then? How do you feel about it now?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 8
  },
  {
    id: 'parenting-teens-9',
    question: 'Reflect on the parent you imagined you\'d be versus who you are with your teen. What\'s different? What\'s harder than you expected? What matters less than you thought?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 9
  },
  {
    id: 'parenting-teens-10',
    question: 'Think about your teen\'s other parent or co-parent (if applicable). How do your parenting styles differ? When does this cause conflict? When does it actually help?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 10
  },
  {
    id: 'parenting-teens-11',
    question: 'Document times in the past 6 months when you felt proud of your teen. What were they doing? Did you tell them? Why or why not?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 11
  },
  {
    id: 'parenting-teens-12',
    question: 'Write about a fear you have about your teen\'s future. When did this fear start? How does it affect your daily decisions? Is it based on their reality or your projection?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 12
  },
  {
    id: 'parenting-teens-13',
    question: 'Reflect on how your relationship with your teen has changed in the past year. What conversations have stopped? What new tensions have appeared? What do you miss?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 13
  },
  {
    id: 'parenting-teens-14',
    question: 'Think about other parents of teens you know. What do you envy about their relationship with their teen? What do you judge? What does this tell you about your values?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 14
  },
  {
    id: 'parenting-teens-15',
    question: 'Write about the last time your teen came to you for help or advice. What did they need? How did you respond? What made them choose to ask you?',
    category: 'reflection',
    template_id: 'parenting-teens',
    question_number: 15
  },

  // RESEARCH QUESTIONS (13 questions - 22%)
  {
    id: 'parenting-teens-16',
    question: 'Track your teen\'s mood patterns over the next week. Note: What time of day are they most approachable? When are they most irritable? What patterns emerge?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 16
  },
  {
    id: 'parenting-teens-17',
    question: 'Document all the ways your teen communicates with you in a typical week: texts, in-person talks, grunts, silence. Which mode works best for real conversations? What topics work in which format?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 17
  },
  {
    id: 'parenting-teens-18',
    question: 'List your current rules and boundaries for your teen. For each: When was it established? Do they follow it? What happens when they don\'t? Which ones cause the most conflict?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 18
  },
  {
    id: 'parenting-teens-19',
    question: 'Observe your teen\'s friend group. Who do they spend time with? What do you know about these friends? Which friendships do you trust? Which ones worry you, and why?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 19
  },
  {
    id: 'parenting-teens-20',
    question: 'Create an inventory of your teen\'s screen time and social media use. What platforms? How many hours daily? What do they do on them? When does it interfere with family time or responsibilities?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 20
  },
  {
    id: 'parenting-teens-21',
    question: 'Research what your teen is actually dealing with at school. What classes stress them out? What social dynamics? What do they look forward to? What do they dread?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 21
  },
  {
    id: 'parenting-teens-22',
    question: 'Document the last 5 conflicts or arguments you\'ve had with your teen. What were they about? What time of day? How did each one end? What\'s the pattern?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 22
  },
  {
    id: 'parenting-teens-23',
    question: 'Track how much one-on-one time you spend with your teen in a typical week. When? Doing what? How much of it is lectures vs. actual conversation?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 23
  },
  {
    id: 'parenting-teens-24',
    question: 'List all the responsibilities your teen currently handles: chores, homework, job, etc. Which do they do without reminding? Which require constant nagging? What does this reveal?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 24
  },
  {
    id: 'parenting-teens-25',
    question: 'Observe how your teen talks about their future. Do they have goals? What excites them? What worries them? How concrete or vague are their plans?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 25
  },
  {
    id: 'parenting-teens-26',
    question: 'Research your teen\'s sleep patterns. What time do they actually fall asleep? Wake up? How does this affect their mood and behavior? Where\'s the conflict with your rules?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 26
  },
  {
    id: 'parenting-teens-27',
    question: 'Document warning signs you\'ve noticed: changes in mood, behavior, friend groups, grades, interests. When did they start? How severe? What have you done about it?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 27
  },
  {
    id: 'parenting-teens-28',
    question: 'Track your own stress levels and triggers around parenting your teen this week. What situations set you off? What time of day? What\'s the pattern between your stress and your reactions?',
    category: 'research',
    template_id: 'parenting-teens',
    question_number: 28
  },

  // PLANNING QUESTIONS (17 questions - 28%)
  {
    id: 'parenting-teens-29',
    question: 'Design your ideal communication rhythm with your teen. How often would you talk meaningfully? About what? In what format? What boundaries would you respect? What would you insist on?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 29
  },
  {
    id: 'parenting-teens-30',
    question: 'Map out which battles are worth fighting and which aren\'t. For each current conflict point: Rate its importance to safety, values, and their future. Which 3 matter most? Which can you let go?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 30
  },
  {
    id: 'parenting-teens-31',
    question: 'Create your approach to their social media and phone use. What will you monitor? What\'s private? How will you balance safety and trust? What are your non-negotiables?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 31
  },
  {
    id: 'parenting-teens-32',
    question: 'Plan how you\'ll handle the peer pressure and social influence. What conversations will you have? When? How will you know if their friends are a problem? What\'s your intervention plan?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 32
  },
  {
    id: 'parenting-teens-33',
    question: 'Develop your strategy for building trust. What freedoms can you offer? What do they need to earn first? How will you show you trust them while still keeping them safe?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 33
  },
  {
    id: 'parenting-teens-34',
    question: 'Design your family rules for the teenage years. Which childhood rules need updating? What new boundaries are needed? How will you enforce them? What are the consequences?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 34
  },
  {
    id: 'parenting-teens-35',
    question: 'Plan how you and your co-parent will present a united front. Where do you need to align? How will you handle disagreements? When will you compromise? What\'s your communication system?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 35
  },
  {
    id: 'parenting-teens-36',
    question: 'Map out your teen\'s path to independence. What life skills do they need? What freedoms correspond to what responsibilities? What\'s the timeline for the next 2-3 years?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 36
  },
  {
    id: 'parenting-teens-37',
    question: 'Create your strategy for the difficult conversations: sex, drugs, alcohol, mental health, relationships. When will you have them? How will you start? What\'s your goal - lecture or dialogue?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 37
  },
  {
    id: 'parenting-teens-38',
    question: 'Plan your response protocol for different crisis scenarios. If they break a major rule: what happens? If you suspect substance use: what do you do? If grades tank: how do you respond?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 38
  },
  {
    id: 'parenting-teens-39',
    question: 'Design your approach to their privacy. What spaces are theirs alone? What requires transparency? How will you handle discovering something concerning? Where\'s the line?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 39
  },
  {
    id: 'parenting-teens-40',
    question: 'Develop your system for staying involved in their life without being intrusive. What will you ask about? How? When do you back off? How do you show interest without interrogating?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 40
  },
  {
    id: 'parenting-teens-41',
    question: 'Plan how to nurture your relationship during these years. What shared activities can survive adolescence? How will you create connection time? What traditions will you protect?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 41
  },
  {
    id: 'parenting-teens-42',
    question: 'Create your strategy for supporting their identity exploration. How will you respond to changing interests, styles, beliefs? What\'s acceptable experimentation? Where are your limits? How will you communicate them?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 42
  },
  {
    id: 'parenting-teens-43',
    question: 'Map out your approach to academic pressure and expectations. What grades/effort do you require? How will you support without taking over? When do you push vs. when do you ease up?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 43
  },
  {
    id: 'parenting-teens-44',
    question: 'Design your plan for handling their romantic relationships. What rules will you have about dating? How will you talk about it? What role do you want to play? What boundaries matter?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 44
  },
  {
    id: 'parenting-teens-45',
    question: 'Plan how you\'ll maintain your authority while respecting their growing autonomy. What decisions are still yours? What can they make? How will this evolve? What\'s negotiable?',
    category: 'planning',
    template_id: 'parenting-teens',
    question_number: 45
  },

  // ACTION QUESTIONS (15 questions - 25%)
  {
    id: 'parenting-teens-46',
    question: 'Initiate one conversation with your teen this week that isn\'t about logistics or problems. Pick a topic they care about. Listen more than you talk. What did you learn?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 46
  },
  {
    id: 'parenting-teens-47',
    question: 'Identify one rule or boundary that\'s causing constant conflict but isn\'t actually about safety or core values. Relax it this week. What changed in your relationship?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 47
  },
  {
    id: 'parenting-teens-48',
    question: 'Schedule a weekly one-on-one time with your teen - even 20 minutes. Let them pick the activity. Put it in your calendar now. When? What will you do?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 48
  },
  {
    id: 'parenting-teens-49',
    question: 'Write your teen a note (physical or text) sharing one specific thing you appreciate about them. Not generic praise - something you noticed recently. When will you give it to them?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 49
  },
  {
    id: 'parenting-teens-50',
    question: 'Have the talk you\'ve been avoiding. Pick one difficult topic. Plan when and how you\'ll bring it up. Actually do it this week. How did it go?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 50
  },
  {
    id: 'parenting-teens-51',
    question: 'Implement one change to give them more autonomy this week. Extended curfew? More privacy? Decision-making power? What did you choose? What boundaries did you set?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 51
  },
  {
    id: 'parenting-teens-52',
    question: 'Meet one of their friends or friends\' parents. Ask your teen to introduce you, or arrange a casual meetup. What did you learn? How did it change your perspective?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 52
  },
  {
    id: 'parenting-teens-53',
    question: 'Create a family meeting ritual - weekly or biweekly. First meeting: let your teen help set the agenda. What will you discuss? When? Who leads? Start this week.',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 53
  },
  {
    id: 'parenting-teens-54',
    question: 'Apologize for one specific thing you did wrong recently as a parent. Be genuine, take responsibility, don\'t justify. How did your teen respond?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 54
  },
  {
    id: 'parenting-teens-55',
    question: 'Set up a co-parenting check-in with your partner or co-parent. Discuss one area where you\'re misaligned. Come to agreement. When will you meet? What will you discuss?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 55
  },
  {
    id: 'parenting-teens-56',
    question: 'Remove one form of surveillance or checking up that\'s based on anxiety, not evidence. Stop checking their location? Reading their texts? Going through their room? What did you stop?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 56
  },
  {
    id: 'parenting-teens-57',
    question: 'Teach your teen one practical life skill this month. Cooking a meal? Budgeting? Laundry? Car maintenance? Schedule the lesson. When? What skill? How will you make it collaborative, not a lecture?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 57
  },
  {
    id: 'parenting-teens-58',
    question: 'Identify your biggest trigger moment with your teen (time of day, situation, behavior). Next time it happens, try a different response. What will you do instead?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 58
  },
  {
    id: 'parenting-teens-59',
    question: 'Connect with one other parent of a teen for support. Share your struggles honestly. Ask about theirs. Who will you reach out to? When? What do you need from this connection?',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 59
  },
  {
    id: 'parenting-teens-60',
    question: 'Create a visual reminder of one core value you want to guide your parenting through these years. What is it? How will you remember it when things get hard? Put it somewhere you\'ll see daily.',
    category: 'action',
    template_id: 'parenting-teens',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for parenting-teens guide...`);

  // First, delete any existing questions
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .eq('template_id', 'parenting-teens');

  if (deleteError) {
    console.error('Error deleting existing questions:', deleteError);
    process.exit(1);
  }

  // Insert new questions
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
    .eq('template_id', 'parenting-teens');

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
