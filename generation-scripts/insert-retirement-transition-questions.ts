import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (16 questions - 25%)
  {
    id: 'retirement-transition-1',
    question: 'Think about Monday mornings over the past year. What specific feeling comes up when your alarm goes off? When did you first notice this pattern?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 1
  },
  {
    id: 'retirement-transition-2',
    question: 'Write about 3 times in the past month when someone asked "What do you do?" - how did you answer? How much of your identity is wrapped up in your job title?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 2
  },
  {
    id: 'retirement-transition-3',
    question: 'Recall the last time you had 2 weeks off work. What did you do? How did you feel by day 10? What does this tell you about extended free time?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 3
  },
  {
    id: 'retirement-transition-4',
    question: 'Reflect on your parents\' or mentors\' retirement experiences. What did you observe? What do you want to do differently? What worried you about what you saw?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 4
  },
  {
    id: 'retirement-transition-5',
    question: 'Think about a typical Saturday when you have no obligations. How do you structure your day? Do you feel energized or aimless? What does this reveal?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 5
  },
  {
    id: 'retirement-transition-6',
    question: 'Write about your relationship with work over the years. What has it given you beyond money? What has it cost you? What will you miss most?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 6
  },
  {
    id: 'retirement-transition-7',
    question: 'Recall the moments in the past year when you felt most alive and engaged. How many were work-related? What were you doing in the non-work moments?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 7
  },
  {
    id: 'retirement-transition-8',
    question: 'Think about your work friendships. How many would continue if you weren\'t colleagues? When did you last see work friends outside of work hours?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 8
  },
  {
    id: 'retirement-transition-9',
    question: 'Reflect on what gives you a sense of purpose and contribution. How much comes from work? What other sources of purpose exist in your life right now?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 9
  },
  {
    id: 'retirement-transition-10',
    question: 'Write about the version of yourself you\'ve always wanted to become. What parts of that vision did work prevent? What did work enable?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 10
  },
  {
    id: 'retirement-transition-11',
    question: 'Think about your daily routines. Which ones exist only because of work? Which ones would you keep? Which would you be relieved to drop?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 11
  },
  {
    id: 'retirement-transition-12',
    question: 'Recall times you\'ve said "When I retire, I\'ll finally..." - list those statements. Why haven\'t you done them yet? What does this pattern tell you?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 12
  },
  {
    id: 'retirement-transition-13',
    question: 'Reflect on how you want to be remembered professionally. What legacy matters to you? What do you still need to do or communicate before leaving?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 13
  },
  {
    id: 'retirement-transition-14',
    question: 'Think about the last major life transition you went through. How did you handle it? What coping strategies worked? What do you wish you\'d done differently?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 14
  },
  {
    id: 'retirement-transition-15',
    question: 'Write about your fears regarding retirement. What specific scenarios worry you? What\'s the worst that could happen? How realistic are these fears?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 15
  },
  {
    id: 'retirement-transition-16',
    question: 'Reflect on what "successful retirement" means to you. Not what others say - what would make YOU feel like you\'re thriving in this next phase?',
    category: 'reflection',
    template_id: 'retirement-transition',
    question_number: 16
  },

  // RESEARCH QUESTIONS (14 questions - 22%)
  {
    id: 'retirement-transition-17',
    question: 'List all your income sources in retirement: pension, social security, 401k, savings, other. For each, note: monthly amount, reliability, tax implications.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 17
  },
  {
    id: 'retirement-transition-18',
    question: 'Document your current monthly expenses, then categorize which will increase, decrease, or stay the same in retirement. What surprises you in this analysis?',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 18
  },
  {
    id: 'retirement-transition-19',
    question: 'Research healthcare options for your situation: Medicare parts, supplemental insurance, prescription coverage. List costs, coverage gaps, enrollment deadlines.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 19
  },
  {
    id: 'retirement-transition-20',
    question: 'Calculate your "retirement number" - how much you need monthly to maintain your desired lifestyle. What\'s the gap between this and your projected income?',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 20
  },
  {
    id: 'retirement-transition-21',
    question: 'Interview 3 people who retired in the past 5 years. Ask: What surprised you? What do you wish you\'d known? What advice would you give? Document their answers.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 21
  },
  {
    id: 'retirement-transition-22',
    question: 'Research community activities available where you live: senior centers, volunteer opportunities, classes, clubs. List 10 options with contact info and schedule details.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 22
  },
  {
    id: 'retirement-transition-23',
    question: 'Investigate continuing education options: local colleges, online courses, workshops in your interests. Find 5 specific programs with costs and time commitments.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 23
  },
  {
    id: 'retirement-transition-24',
    question: 'Document your current social network: work friends, family, other friends, community connections. Rate each relationship\'s depth and how often you actually connect.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 24
  },
  {
    id: 'retirement-transition-25',
    question: 'Research housing options if you\'re considering a move: costs, healthcare access, proximity to family, climate, community feel. Create a comparison matrix.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 25
  },
  {
    id: 'retirement-transition-26',
    question: 'List all your current hobbies and interests. For each, note: last time you did it, equipment/resources needed, time required, cost to pursue regularly.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 26
  },
  {
    id: 'retirement-transition-27',
    question: 'Research part-time work or consulting opportunities in your field. What\'s available? What would it pay? How many hours? Would you enjoy it?',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 27
  },
  {
    id: 'retirement-transition-28',
    question: 'Investigate fitness options for your age and ability: gyms, classes, walking groups, sports leagues. Find 5 options with schedules, costs, and trial availability.',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 28
  },
  {
    id: 'retirement-transition-29',
    question: 'Document all benefits you\'ll lose from work: health insurance, life insurance, disability, gym membership, other perks. What needs replacing? At what cost?',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 29
  },
  {
    id: 'retirement-transition-30',
    question: 'Research tax implications of your retirement income sources. Will you owe more or less? What estimated quarterly payments might you need? Should you consult a tax advisor?',
    category: 'research',
    template_id: 'retirement-transition',
    question_number: 30
  },

  // PLANNING QUESTIONS (18 questions - 28%)
  {
    id: 'retirement-transition-31',
    question: 'Design your ideal weekly schedule for the first 6 months of retirement. Block out time for activities, rest, social connection, and purposeful work. Be specific with days and times.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 31
  },
  {
    id: 'retirement-transition-32',
    question: 'Create a financial sustainability plan: monthly budget, emergency fund size, withdrawal strategy from retirement accounts. When will you review and adjust this plan?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 32
  },
  {
    id: 'retirement-transition-33',
    question: 'Plan your purpose portfolio: 3-5 activities that will give you meaning and contribution. For each, note: time commitment, how to start, what success looks like.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 33
  },
  {
    id: 'retirement-transition-34',
    question: 'Map out your social connection strategy. How will you maintain current relationships? Build new ones? How often do you need social interaction to feel connected?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 34
  },
  {
    id: 'retirement-transition-35',
    question: 'Design your health and wellness plan: exercise routine, preventive care schedule, mental health practices, sleep habits. What specific changes from your working life?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 35
  },
  {
    id: 'retirement-transition-36',
    question: 'Plan your retirement announcement strategy: who to tell first, what to say, how to handle reactions, timeline for telling different groups. Write out key talking points.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 36
  },
  {
    id: 'retirement-transition-37',
    question: 'Create your knowledge transfer plan if applicable: what needs documenting, who to train, what projects to close out, what timeline makes sense for a good exit.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 37
  },
  {
    id: 'retirement-transition-38',
    question: 'Design your "first 90 days" plan. What will you try? What trips might you take? What projects will you tackle? Include some structure alongside freedom.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 38
  },
  {
    id: 'retirement-transition-39',
    question: 'Plan how you\'ll handle the emotional transition. What support do you need? Who can you talk to? What practices will help you process the identity shift?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 39
  },
  {
    id: 'retirement-transition-40',
    question: 'Map out your learning goals for the next 2 years. What skills do you want to develop? What knowledge do you want to gain? Create a realistic timeline.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 40
  },
  {
    id: 'retirement-transition-41',
    question: 'Plan your relationship with work post-retirement: Will you stay in touch with colleagues? Mentor? Consult? Completely disconnect? What boundaries feel right?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 41
  },
  {
    id: 'retirement-transition-42',
    question: 'Create your travel plan if that\'s a priority: destinations, budget, timeline, who with, how long. Balance adventure with realistic physical and financial constraints.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 42
  },
  {
    id: 'retirement-transition-43',
    question: 'Design your home environment for retirement life. What changes would make your space more functional? Do you need a dedicated hobby space? Office? Garden?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 43
  },
  {
    id: 'retirement-transition-44',
    question: 'Plan how you\'ll handle the question "What do you do now?" - craft a 30-second answer that feels authentic and doesn\'t diminish your new identity.',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 44
  },
  {
    id: 'retirement-transition-45',
    question: 'Create a decision framework for opportunities that will come up: When will you say yes to commitments? What criteria matter? How will you protect your time?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 45
  },
  {
    id: 'retirement-transition-46',
    question: 'Plan your volunteer or giving-back strategy: causes that matter to you, time commitment, skills you can offer, organizations to research. What legacy do you want to build?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 46
  },
  {
    id: 'retirement-transition-47',
    question: 'Design your routine for maintaining professional identity if desired: industry events, professional associations, staying current in your field. How much energy for this?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 47
  },
  {
    id: 'retirement-transition-48',
    question: 'Plan check-in points: 3 months, 6 months, 1 year. What will you evaluate? How will you know if adjustments are needed? What would trigger a major course correction?',
    category: 'planning',
    template_id: 'retirement-transition',
    question_number: 48
  },

  // ACTION QUESTIONS (16 questions - 25%)
  {
    id: 'retirement-transition-49',
    question: 'Schedule a meeting with a financial advisor this month. Bring your retirement income sources, expense projections, and healthcare research. What specific questions will you ask?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 49
  },
  {
    id: 'retirement-transition-50',
    question: 'Try your retirement schedule for one week while still working. Wake at your planned time, structure your evenings as you envision retirement. What did you learn?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 50
  },
  {
    id: 'retirement-transition-51',
    question: 'Sign up for one new activity this month that you want to pursue in retirement: a class, club meeting, volunteer orientation. Actually show up and evaluate the experience.',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 51
  },
  {
    id: 'retirement-transition-52',
    question: 'Have the retirement conversation with your partner or closest confidant this week. Share your plans, fears, and expectations. What did you learn about their perspective?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 52
  },
  {
    id: 'retirement-transition-53',
    question: 'Enroll in Medicare or research your healthcare transition. Complete the paperwork, understand your coverage, set enrollment reminders. When is this done?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 53
  },
  {
    id: 'retirement-transition-54',
    question: 'Set up automatic transfers for your retirement budget: savings, bills, discretionary spending. Test your system for one month before retirement. What needs adjusting?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 54
  },
  {
    id: 'retirement-transition-55',
    question: 'Create a list of "retirement conversations" you need to have at work: manager, HR, direct reports, key colleagues. Schedule them over the next 2 months with specific dates.',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 55
  },
  {
    id: 'retirement-transition-56',
    question: 'Start one hobby or interest this month that you\'ve been putting off. Invest in the equipment, sign up for the class, block the time. How does it feel?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 56
  },
  {
    id: 'retirement-transition-57',
    question: 'Schedule a complete physical with your doctor before retirement. Discuss your plans, get baseline health metrics, update preventive care. What health goals will you set?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 57
  },
  {
    id: 'retirement-transition-58',
    question: 'Reach out to 3 non-work friends or family members this week. Make plans to see them. How does it feel to prioritize these relationships? Will you continue?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 58
  },
  {
    id: 'retirement-transition-59',
    question: 'Create a retirement transition binder or digital folder: financial docs, healthcare info, contact lists, plans, important dates. Organize everything in one accessible place.',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 59
  },
  {
    id: 'retirement-transition-60',
    question: 'Test living on your retirement budget for 3 months before you retire. Track where you struggle. What expenses are harder to cut than expected? Adjust accordingly.',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 60
  },
  {
    id: 'retirement-transition-61',
    question: 'Visit or tour 3 places you\'re considering spending time in retirement: cities, senior centers, community groups. Talk to people there. Where do you feel most comfortable?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 61
  },
  {
    id: 'retirement-transition-62',
    question: 'Begin your knowledge transfer at work now. Document processes, train replacements, close loose ends. Set a goal: what must be complete 2 weeks before your last day?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 62
  },
  {
    id: 'retirement-transition-63',
    question: 'Join one group or community this month that aligns with your retirement vision: a club, volunteer organization, religious community, or social group. Attend 3 times before deciding.',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 63
  },
  {
    id: 'retirement-transition-64',
    question: 'Set your retirement date and announce it formally. Put it in writing to your employer, mark it on your calendar, tell key people. What emotions come up when you make it official?',
    category: 'action',
    template_id: 'retirement-transition',
    question_number: 64
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for retirement-transition guide...`);

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
    .eq('template_id', 'retirement-transition');

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
