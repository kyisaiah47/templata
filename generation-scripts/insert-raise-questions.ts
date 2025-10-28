import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-9)
  {
    id: 'asking-for-raise-1',
    question: 'Write about the last 3 times someone at work (colleague, client, manager) specifically mentioned or praised something you did. What was the situation each time? What impact did your work have on them?',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 1
  },
  {
    id: 'asking-for-raise-2',
    question: 'Reflect on a typical week over the past 3 months. List 3-5 tasks or projects where YOU were the go-to person - where people specifically came to you, not someone else. What made you the right person for those situations?',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 2
  },
  {
    id: 'asking-for-raise-3',
    question: 'Document 3 moments in the past year when you went significantly beyond your job description. What triggered you to do more? What would have happened if you hadn\'t stepped in?',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 3
  },
  {
    id: 'asking-for-raise-4',
    question: 'Think about your last salary conversation (raise, promotion, job offer - whenever it was). Write down how you felt during that conversation, what you said, and what you wish you\'d said differently.',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 4
  },
  {
    id: 'asking-for-raise-5',
    question: 'List the last 5 times you\'ve talked about money with anyone (splitting bills, discussing costs, negotiating price, etc.). Which felt comfortable? Which felt awkward? What pattern do you notice about when you advocate for yourself vs when you don\'t?',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 5
  },
  {
    id: 'asking-for-raise-6',
    question: 'Reflect on the past 6 months. Write about 2-3 times when you noticed someone else getting recognition or advancement. What did you feel? What story did you tell yourself about why they got it and you didn\'t?',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 6
  },
  {
    id: 'asking-for-raise-7',
    question: 'Document a specific project or achievement from the past year that you\'re genuinely proud of - where you know you made a real difference. Now write: who else at the company knows about this? How did they find out?',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 7
  },
  {
    id: 'asking-for-raise-8',
    question: 'Think about the coworker or colleague whose career progression you most admire. What do they do differently than you in terms of visibility, speaking up, or positioning their work? Write down specific behaviors you\'ve observed.',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 8
  },
  {
    id: 'asking-for-raise-9',
    question: 'Reflect on the last time someone asked you "What do you do?" at a social event. Write down exactly what you said. Then write what you WISH you could say that would make someone respond "Wow, that\'s impressive."',
    category: 'reflection',
    template_id: 'asking-for-raise',
    question_number: 9
  },
  // Research Questions (10-17)
  {
    id: 'asking-for-raise-10',
    question: 'Research 5 job postings for roles similar to yours (same title or responsibilities). For each, document: company name, listed salary range (if shown), required years of experience, and key responsibilities. What patterns do you see in how your role is valued in the market?',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 10
  },
  {
    id: 'asking-for-raise-11',
    question: 'Identify 3 people in your professional network (LinkedIn, former colleagues, industry contacts) who have a similar role to yours. Without asking them directly about salary, research their: company size, location, years of experience, and any public info about their company\'s compensation philosophy. What does this tell you about the range you should be targeting?',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 11
  },
  {
    id: 'asking-for-raise-12',
    question: 'Document your company\'s recent financial news over the past 6 months. List: revenue announcements, new funding, layoffs, hiring freezes, executive statements about growth. Based on this, write whether your company is in expansion, maintenance, or survival mode - and what that means for your timing.',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 12
  },
  {
    id: 'asking-for-raise-13',
    question: 'Research the salary bands for your role on 3 different sources (Glassdoor, Levels.fyi, Payscale, LinkedIn Salary, etc.). Write down the range from each source, then note: what\'s the lowest number you\'re seeing? The highest? The median? How does your current salary compare?',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 13
  },
  {
    id: 'asking-for-raise-14',
    question: 'Create a list of your company\'s recent wins or positive changes in the past 3-6 months (new clients, successful launches, positive press, department growth). For each, note if and how you contributed to it. This is your "company is doing well" evidence.',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 14
  },
  {
    id: 'asking-for-raise-15',
    question: 'Research your manager\'s situation. Document: How long have they been in their role? Are they new? When was their last promotion? Are they being publicly praised or under pressure? Write how their current position might affect their ability or willingness to advocate for your raise.',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 15
  },
  {
    id: 'asking-for-raise-16',
    question: 'List all the benefits and perks your company currently offers (beyond salary): retirement match, equity, bonus structure, insurance, PTO, remote work, professional development budget, etc. For each, note the current value and whether there\'s room to negotiate if salary flexibility is limited.',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 16
  },
  {
    id: 'asking-for-raise-17',
    question: 'Research 3 competitors or peer companies in your industry. For each, document: how they position themselves, what they\'re known for paying, and their glassdoor/employee sentiment ratings. If you were to leave, which of these would be realistic options for you?',
    category: 'research',
    template_id: 'asking-for-raise',
    question_number: 17
  },
  // Planning Questions (18-27)
  {
    id: 'asking-for-raise-18',
    question: 'Based on your research, write down three numbers: your current salary, the salary you want (your ideal), and the salary you\'d accept (your minimum). For each, write one sentence explaining why that number feels right to you.',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 18
  },
  {
    id: 'asking-for-raise-19',
    question: 'Create a list of your 5 most significant contributions from the past year. For each, translate it into business impact using this format: "I [action] which resulted in [measurable outcome] that [benefited the company by...]." Focus on numbers, time saved, revenue, or risk prevented.',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 19
  },
  {
    id: 'asking-for-raise-20',
    question: 'Map out the timing for your ask. Write down: when is your next performance review? When does your company do budget planning? When did you last get a raise? When is your manager least stressed? Based on this, what\'s your ideal timeline for having this conversation?',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 20
  },
  {
    id: 'asking-for-raise-21',
    question: 'Draft your opening line for the conversation. Write 2-3 different versions of how you\'ll actually start the conversation with your manager. Which version feels most authentic to how you actually talk? Which version would you never say but wish you could?',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 21
  },
  {
    id: 'asking-for-raise-22',
    question: 'Anticipate 3 specific objections your manager might raise ("budget is tight," "you just got a raise," "we need to see more," etc.). For each objection, write out: what you\'ll say in response, what evidence you\'ll cite, and what alternative you\'ll propose.',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 22
  },
  {
    id: 'asking-for-raise-23',
    question: 'Plan your narrative arc. Write out the story you\'ll tell about your growth: where you started when you joined/were promoted, what you\'ve learned, how you\'ve expanded your role, and where you can go next. This should take 2-3 minutes to say out loud.',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 23
  },
  {
    id: 'asking-for-raise-24',
    question: 'Consider your alternatives. Write down what you\'ll do if they say: (1) Yes immediately, (2) Maybe/need to think about it, (3) No, but here\'s something else, (4) Hard no. For each scenario, what\'s your next sentence?',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 24
  },
  {
    id: 'asking-for-raise-25',
    question: 'Design your negotiation range strategy. If your target is $X, write down: what\'s your opening ask (higher than target), what\'s your walkaway number (minimum acceptable), and what non-salary items could make up the difference (title, equity, flexibility, etc.)?',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 25
  },
  {
    id: 'asking-for-raise-26',
    question: 'Create your confidence plan. Write down 3 specific things you\'ll do in the 24 hours before the conversation to feel prepared (review your wins doc, talk to a friend, practice out loud, etc.). What tends to make you feel most confident?',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 26
  },
  {
    id: 'asking-for-raise-27',
    question: 'Plan the follow-up. Write down what you\'ll do immediately after the conversation for each scenario: if they say yes, if they say "let me think," if they say no. What will you send in writing? When will you check in again?',
    category: 'planning',
    template_id: 'asking-for-raise',
    question_number: 27
  },
  // Action Questions (28-35)
  {
    id: 'asking-for-raise-28',
    question: 'Schedule the conversation. Write down: when you\'ll ask your manager for a meeting (specific date), what you\'ll say when you ask ("I\'d like to discuss my compensation and growth"), and how much time you\'ll request (suggest 30 minutes minimum).',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 28
  },
  {
    id: 'asking-for-raise-29',
    question: 'Create your one-page impact summary. Document your top 5 achievements in bullet points, with numbers and outcomes. This is the physical doc you\'ll reference during the conversation or send as follow-up. Write it now in a format you could actually send.',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 29
  },
  {
    id: 'asking-for-raise-30',
    question: 'Practice out loud. Pick one person you trust and schedule time to practice your pitch with them this week. Write down: who you\'ll ask, when you\'ll do it, and what specific feedback you want them to give you (clarity? confidence? salary number delivery?).',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 30
  },
  {
    id: 'asking-for-raise-31',
    question: 'Document your evidence. Gather the receipts: save emails where people thanked you, screenshot metrics that show your impact, compile the list of projects you led. Create a folder (digital or physical) with everything you might need to reference. Do this today.',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 31
  },
  {
    id: 'asking-for-raise-32',
    question: 'Write your manager an email requesting the meeting. Actually draft it right now - subject line and body. Make it specific enough that they know it\'s important but not so detailed that they can address it via email. When will you send it?',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 32
  },
  {
    id: 'asking-for-raise-33',
    question: 'Create your post-ask action plan. Write down: If they say "let me think about it," when will you follow up (exact date)? If they say no, when will you update your resume (exact date)? If they say yes, how will you make sure the change actually happens (get it in writing? HR confirmation?)?',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 33
  },
  {
    id: 'asking-for-raise-34',
    question: 'Identify your decision trigger. Complete this sentence: "If they offer me [specific number or specific response], I will [specific action - accept/decline/counter/start job searching]." Write down 3 different trigger scenarios.',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 34
  },
  {
    id: 'asking-for-raise-35',
    question: 'Set your accountability check-in. Write down the date exactly one month from today. On that date, you\'ll review this document and write down: Did I have the conversation? What was the outcome? What\'s my next step? Put this date in your calendar right now with a link to these notes.',
    category: 'action',
    template_id: 'asking-for-raise',
    question_number: 35
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
    .eq('template_id', 'asking-for-raise');

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
    console.log(`Reflection (Foundation): ${counts.reflection}`);
    console.log(`Research: ${counts.research}`);
    console.log(`Planning: ${counts.planning}`);
    console.log(`Action: ${counts.action}`);
  }
}

insertQuestions();
