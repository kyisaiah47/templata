import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local file
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-16) - Reflection category
  {
    id: 'immigration-process-1',
    question: 'Write about the first time you seriously thought about moving to another country. What triggered that thought? What did you imagine your life would be like?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 1
  },
  {
    id: 'immigration-process-2',
    question: 'Reflect on the past 3 years - list 3-5 moments when you felt most disconnected from where you currently live. What was happening? What were you missing or longing for?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 2
  },
  {
    id: 'immigration-process-3',
    question: 'Document your history with change and transitions. Write about the last 2-3 major life changes (job, city, relationship). How did you handle the uncertainty? What pattern do you notice in how you adapt?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 3
  },
  {
    id: 'immigration-process-4',
    question: 'Think about your relationship with your home country. List 5 things you would genuinely miss if you left, and 5 things you wouldn\'t miss at all. Which list was easier to write?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 4
  },
  {
    id: 'immigration-process-5',
    question: 'Reflect on any time you\'ve spent living abroad or far from home (even short trips). Write about a specific moment when you felt "this could be home" and another moment when you felt "I don\'t belong here."',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 5
  },
  {
    id: 'immigration-process-6',
    question: 'List the last 5 times someone asked "where are you from?" Write down how you answered each time. What does your answer reveal about where you feel you belong?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 6
  },
  {
    id: 'immigration-process-7',
    question: 'Write about your family\'s history with migration or staying put. Who left? Who stayed? What stories did they tell about their choices? How does that history influence how you think about immigrating?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 7
  },
  {
    id: 'immigration-process-8',
    question: 'Document 3 specific situations in the past year where you felt limited by your current location or visa status. What couldn\'t you do? How did that make you feel?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 8
  },
  {
    id: 'immigration-process-9',
    question: 'Reflect on the people closest to you. Write about how 3 different people in your life have reacted when you\'ve mentioned the possibility of immigrating. What did their reactions tell you?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 9
  },
  {
    id: 'immigration-process-10',
    question: 'Think about your identity - language, culture, community ties. Write about a moment when you realized some aspect of your identity might change or be challenged by moving to another country.',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 10
  },
  {
    id: 'immigration-process-11',
    question: 'List your last 5 major decisions (career, relationship, financial, etc.). For each: Did you make it quickly or slowly? Did you research extensively or go with your gut? What pattern do you see in how you make big decisions?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 11
  },
  {
    id: 'immigration-process-12',
    question: 'Write about a time when you felt like an outsider or newcomer somewhere (new job, new city, new group). How long did it take to feel comfortable? What helped or hindered that process?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 12
  },
  {
    id: 'immigration-process-13',
    question: 'Document your tolerance for bureaucracy and paperwork. Think of the last 2-3 times you had to deal with complex administrative processes. How did you handle it? What frustrated you most?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 13
  },
  {
    id: 'immigration-process-14',
    question: 'Reflect on Sunday nights over the past 3 months. When you think about Monday, what feeling comes up about your current life situation? When did this feeling start?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 14
  },
  {
    id: 'immigration-process-15',
    question: 'Write about 3 people you know who immigrated to another country. For each: What surprised you about their experience? What did they say was harder than expected? What was better than expected?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 15
  },
  {
    id: 'immigration-process-16',
    question: 'Think about the moment you started seriously researching immigration. What specific event or conversation or realization pushed you from "maybe someday" to "I need to figure this out now"?',
    category: 'reflection',
    template_id: 'immigration-process',
    question_number: 16
  },
  // Research Questions (17-30) - Research category
  {
    id: 'immigration-process-17',
    question: 'Research and list all visa categories that could potentially apply to your situation (work, family, student, investor, etc.). For each, note the basic eligibility criteria and what immediately disqualifies you or makes you eligible.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 17
  },
  {
    id: 'immigration-process-18',
    question: 'Identify 3 immigration lawyers or consultants who specialize in your target country. For each, document: their expertise areas, consultation fees, client reviews, and whether they offer a free initial consultation.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 18
  },
  {
    id: 'immigration-process-19',
    question: 'Create a comprehensive cost breakdown by researching actual numbers: visa application fees, legal fees (if using a lawyer), required medical exams, document translation/certification, travel for interviews/appointments. What\'s the total financial commitment just to apply?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 19
  },
  {
    id: 'immigration-process-20',
    question: 'Research the processing timeline for your most likely visa pathway. Document: average processing time, fastest cases you can find, slowest cases, and what factors caused delays. When realistically could you expect a decision?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 20
  },
  {
    id: 'immigration-process-21',
    question: 'List and research 5 people on social media, blogs, or forums who recently went through immigration to your target country from your current country. What visa path did they take? What unexpected challenges did they mention?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 21
  },
  {
    id: 'immigration-process-22',
    question: 'Research your target country\'s requirements for your specific profession or degree. Document: Do you need credential assessment? Professional licensing? Additional education? What\'s the process and cost for each?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 22
  },
  {
    id: 'immigration-process-23',
    question: 'Investigate the financial requirements for your visa category. Research and document: required bank balance, proof of income, financial sponsorship options, and how long you need to maintain these amounts.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 23
  },
  {
    id: 'immigration-process-24',
    question: 'Research housing costs in 3 specific cities where you\'re considering living. For each city, find actual listings and document: rent for your typical living situation, security deposits, typical lease terms, and whether landlords accept people on your visa status.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 24
  },
  {
    id: 'immigration-process-25',
    question: 'Look up healthcare requirements and costs. Research: mandatory health insurance for your visa, cost of health insurance plans, whether your current health conditions affect eligibility, and how healthcare access works during the visa application period.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 25
  },
  {
    id: 'immigration-process-26',
    question: 'Research the job market in your field. Document specific findings: 5 actual job postings in your field, salary ranges, whether employers typically sponsor visas, required qualifications, and which companies are known for hiring immigrants.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 26
  },
  {
    id: 'immigration-process-27',
    question: 'Investigate language requirements for your visa. Research: required test scores, accepted test types, test costs and locations, preparation course costs, and score validity periods. Do you need to take a test?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 27
  },
  {
    id: 'immigration-process-28',
    question: 'Research tax implications of your immigration. Document: will you owe taxes in both countries? What\'s the tax filing process? Are there tax treaties? What records do you need to keep? Find 2-3 resources (accountants, guides) that specialize in this.',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 28
  },
  {
    id: 'immigration-process-29',
    question: 'Look into banking and credit considerations. Research: can you open a bank account before arriving? Will your credit history transfer? How do people typically handle the first few months financially? What do recent immigrants recommend?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 29
  },
  {
    id: 'immigration-process-30',
    question: 'Research family implications if applicable. Document: can your spouse work on a dependent visa? What\'s the process for dependent visas? Are there education costs for children? Healthcare for dependents? How do other families in your situation typically handle this?',
    category: 'research',
    template_id: 'immigration-process',
    question_number: 30
  },
  // Planning Questions (31-47) - Planning category
  {
    id: 'immigration-process-31',
    question: 'Based on your research, map out your visa pathway decision. Write down: your top 2 visa options, why each one fits your situation, which one you\'re leaning toward, and what information you still need to make a final decision.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 31
  },
  {
    id: 'immigration-process-32',
    question: 'Create a realistic timeline working backward from your ideal move date. Document: application submission deadline, document gathering period, financial preparation time, job search period (if needed), and current situation wind-down time. Is your target date realistic?',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 32
  },
  {
    id: 'immigration-process-33',
    question: 'Plan your financial runway. Calculate and document: total immigration costs, living expenses for first 6 months without income, emergency fund, and current savings. Create a month-by-month savings plan to reach your target number.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 33
  },
  {
    id: 'immigration-process-34',
    question: 'Design your contingency plan. Write out what you\'ll do if: (1) visa is denied, (2) visa is approved but you can\'t find work, (3) you get there and realize it\'s not right for you within 6 months, (4) your situation changes (relationship, family emergency). What\'s your backup for each?',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 34
  },
  {
    id: 'immigration-process-35',
    question: 'Map out your career transition strategy. Document: Will you search for jobs before or after moving? Which companies typically sponsor your visa? Do you need to pivot your role or industry? What\'s your network-building plan? Write your 3-month and 6-month career milestones.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 35
  },
  {
    id: 'immigration-process-36',
    question: 'Plan your document collection process. List every document you need (birth certificates, education credentials, work references, police clearances, medical records, financial statements). For each: where will you get it, how long it takes, cost, and whether it needs translation/certification.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 36
  },
  {
    id: 'immigration-process-37',
    question: 'Create your information gap list. Based on everything you\'ve researched, write down the 5-10 most important questions you still can\'t answer. For each question, note who could answer it (lawyer, immigrant community, embassy, forum) and by when you need the answer.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 37
  },
  {
    id: 'immigration-process-38',
    question: 'Design your two-location life plan if applicable. If you\'ll maintain ties to your current country, document: What will you keep (property, bank accounts, phone number)? What will you close? How will you handle taxes? Who can help with home country matters? What\'s the cost of maintaining both?',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 38
  },
  {
    id: 'immigration-process-39',
    question: 'Plan your relationship with home. Map out: How often realistically can you visit? What relationships need proactive maintenance? What communication patterns need to change? Who needs to know what about your plans and when? What traditions or connections are you committed to preserving?',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 39
  },
  {
    id: 'immigration-process-40',
    question: 'Strategize your support system building. Document: Are there immigrant communities from your country? Professional networks? Online communities? How will you meet people in the first 3 months? Write down 5 specific things you\'ll do to build connections before feeling lonely or isolated.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 40
  },
  {
    id: 'immigration-process-41',
    question: 'Plan for the emotional rollercoaster. Based on your patterns (from foundation questions), write down: What will you do when you feel overwhelmed by paperwork? When you doubt your decision? When you miss home intensely? Create specific coping strategies, not generic "stay positive" advice.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 41
  },
  {
    id: 'immigration-process-42',
    question: 'Map out your current-location exit strategy. Document: If you rent, what\'s your lease situation and exit timing? If you own, sell or rent out? What about your job - how much notice, what will you say, when? What belongings will you ship, sell, or store? Create a month-by-month unwinding plan.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 42
  },
  {
    id: 'immigration-process-43',
    question: 'Design your landing plan. For your first 2 weeks in the new country, create a day-by-day plan: Where will you stay? What administrative tasks must happen immediately (bank, phone, registration)? What can wait? Who will help you? Build in rest time, not just efficiency.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 43
  },
  {
    id: 'immigration-process-44',
    question: 'Plan your skill/credential gap bridging. If you need additional certifications, language skills, or credentials, map out: What exactly do you need? How will you obtain it (online, in-person, before or after moving)? Timeline and cost? How will you maintain your current income while doing this?',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 44
  },
  {
    id: 'immigration-process-45',
    question: 'Create your decision framework. Write down the specific criteria that will make you say "yes, I\'m doing this" vs "no, I\'m not" or "not yet." What needs to be true about: finances, visa approval odds, job prospects, family situation, and your gut feeling? Be specific with numbers and conditions.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 45
  },
  {
    id: 'immigration-process-46',
    question: 'Plan your trial run if possible. Is there a way to spend 2-4 weeks in your target location before fully committing? Map out: when you could do this, what you\'d test/explore, who you\'d meet, what questions you\'d answer. If not possible, write down why and what you\'ll do instead to reduce uncertainty.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 46
  },
  {
    id: 'immigration-process-47',
    question: 'Strategize your narrative. You\'ll need to explain your immigration decision to: current employer, potential new employers, family, friends, visa officers. For each audience, write out your 2-3 sentence explanation that feels authentic to you and addresses their likely concerns.',
    category: 'planning',
    template_id: 'immigration-process',
    question_number: 47
  },
  // Action Questions (48-60) - Action category
  {
    id: 'immigration-process-48',
    question: 'Schedule a consultation with an immigration lawyer or consultant this week. Write down: who you\'ll contact, when you\'ll reach out, what questions you\'ll prepare, and what documents you\'ll bring to the consultation.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 48
  },
  {
    id: 'immigration-process-49',
    question: 'Create your master immigration folder right now (digital and/or physical). Set up the structure: Documents, Research, Financials, Timeline, Contacts, Questions. Start filling it with everything you\'ve gathered so far.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 49
  },
  {
    id: 'immigration-process-50',
    question: 'Reach out to 3 people who have immigrated to your target country. Draft the actual message you\'ll send asking for a 20-minute conversation. What specific questions will you ask them? Send these messages this week.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 50
  },
  {
    id: 'immigration-process-51',
    question: 'Start one immediate credential or document process today. Pick the single most time-consuming document (police clearance, credential assessment, etc.) and take the first action step right now. Document what you did and what the next step is.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 51
  },
  {
    id: 'immigration-process-52',
    question: 'Open a dedicated savings account for immigration costs. Calculate your monthly savings target and set up automatic transfers. Write down: account name, target amount, monthly contribution, and target date to reach your goal.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 52
  },
  {
    id: 'immigration-process-53',
    question: 'Create your visa application checklist. Based on your target visa category, list every single requirement. For each item, mark: have it, can get quickly, need time to obtain, or need help getting. Identify your 3 biggest gaps and write when you\'ll address each.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 53
  },
  {
    id: 'immigration-process-54',
    question: 'Take a language test practice exam this week if language proficiency is required. Even if you\'re not ready for the real test, do a full practice test. Document your scores and the gap between current and required scores. Create a study plan.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 54
  },
  {
    id: 'immigration-process-55',
    question: 'Join 2 online communities of people going through immigration to your target country. Introduce yourself with your specific situation. Ask one specific question you\'re struggling with. Document the community names and set a reminder to check daily for 2 weeks.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 55
  },
  {
    id: 'immigration-process-56',
    question: 'Draft your visa application answers to the most common questions: purpose of immigration, ties to home country, financial means, employment plans. Write the actual answers you\'ll give, not just thinking about them. Are you comfortable with what you wrote?',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 56
  },
  {
    id: 'immigration-process-57',
    question: 'Book a exploratory trip if you haven\'t visited your target location recently (or ever). Pick specific dates in the next 3-6 months. If you can\'t travel yet, write down why and what you\'ll do instead to gather on-the-ground information.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 57
  },
  {
    id: 'immigration-process-58',
    question: 'Have the conversation with your partner/family if you haven\'t already. Schedule it for this week. Prepare what you\'ll say about: why you\'re considering this, what you\'re asking from them, what concerns you understand they might have, and what you need from them right now (support? input? patience?).',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 58
  },
  {
    id: 'immigration-process-59',
    question: 'Start building your professional network in the target country. Identify 5 people in your industry who are based there (LinkedIn, professional associations, conferences). Send connection requests or emails this week. What will you say?',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 59
  },
  {
    id: 'immigration-process-60',
    question: 'Set your decision deadline and accountability check-in. Write down the exact date by which you\'ll make a go/no-go decision on immigration. Put it in your calendar. Add a weekly 30-minute appointment with yourself to review progress until that deadline. Write what you\'ll assess each week to track if you\'re on path to decide.',
    category: 'action',
    template_id: 'immigration-process',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for immigration-process...`);

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
    .eq('template_id', 'immigration-process');

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
    console.log(`Foundation (Reflection): ${counts.reflection} (${Math.round(counts.reflection / verifyData.length * 100)}%)`);
    console.log(`Research: ${counts.research} (${Math.round(counts.research / verifyData.length * 100)}%)`);
    console.log(`Planning: ${counts.planning} (${Math.round(counts.planning / verifyData.length * 100)}%)`);
    console.log(`Action: ${counts.action} (${Math.round(counts.action / verifyData.length * 100)}%)`);
  }
}

insertQuestions();
