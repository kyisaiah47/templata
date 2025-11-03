import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-14) - 25%
  {
    id: 'going-back-to-school-1',
    question: 'Write about 3 specific moments in the past year when you thought "I wish I had studied this" or "I need to go back to school." What triggered each thought? What were you doing at the time? What did that moment reveal about what\'s missing in your life right now?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 1
  },
  {
    id: 'going-back-to-school-2',
    question: 'Reflect on the last time you were in school (high school, college, training program - whenever it was). Write down: What did you love about being a student? What did you hate? What study habits did you have? How is the person you are now different from the student you were then?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 2
  },
  {
    id: 'going-back-to-school-3',
    question: 'Think about Sunday nights over the past 6 months. What specific feeling comes up about Monday morning? Now imagine Sunday night as a student again - what comes up? Write about the difference between these two feelings and what that tells you about your readiness for this change.',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 3
  },
  {
    id: 'going-back-to-school-4',
    question: 'Document 3 times in the past 2 years when you taught yourself something new (a skill, software, hobby, anything). For each: How did you learn it? What kept you motivated? When did you want to quit? What does this pattern tell you about how you learn best as an adult?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 4
  },
  {
    id: 'going-back-to-school-5',
    question: 'List everyone in your life who has an opinion about you going back to school (partner, parents, kids, friends, boss). For each person, write: What do you think they\'ll say? What do you wish they\'d say? Whose opinion matters most to you, and why?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 5
  },
  {
    id: 'going-back-to-school-6',
    question: 'Reflect on your relationship with being "the student" versus "the expert." Write about a recent situation where you were the least knowledgeable person in the room. How did that feel? When was the last time you admitted you didn\'t know something? What does this reveal about your comfort with being a beginner again?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 6
  },
  {
    id: 'going-back-to-school-7',
    question: 'Think about your current daily routine over the past month. Write down: What time do you wake up? When do you have free time? When is your brain sharpest? When are you most exhausted? Based on this pattern, when would you realistically study if you were in school tomorrow?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 7
  },
  {
    id: 'going-back-to-school-8',
    question: 'Document the last 3 major commitments you made and either kept or broke (gym membership, project deadline, promise to someone, side hustle, etc.). For each: Did you follow through? What helped or prevented you? What does this pattern tell you about how you\'ll handle the commitment of school?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 8
  },
  {
    id: 'going-back-to-school-9',
    question: 'Write about someone you know personally who went back to school as an adult. What do you admire about their experience? What scared you about their journey? What would you do differently than they did? If you don\'t know anyone, what does that tell you about your support network?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 9
  },
  {
    id: 'going-back-to-school-10',
    question: 'Reflect on the last time you failed at something or got a bad grade/review. Write down: How did you react? How long did it take you to recover? Did you try again or give up? What does this tell you about how you\'ll handle academic setbacks or challenging coursework?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 10
  },
  {
    id: 'going-back-to-school-11',
    question: 'Think about the person you\'ll become with this degree versus without it. Write two different versions of your life 5 years from now - one where you went back to school, one where you didn\'t. Be specific: What does a typical Tuesday look like in each version? Which version feels more like the life you want?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 11
  },
  {
    id: 'going-back-to-school-12',
    question: 'Document your history with academic confidence. Write about: What subjects did you excel at? What did you struggle with? When did you feel smart? When did you feel behind? Are there any subjects or skills you\'ve been avoiding because you "just aren\'t good at that"? What evidence do you have that adult-you couldn\'t learn it now?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 12
  },
  {
    id: 'going-back-to-school-13',
    question: 'Reflect on what "success" means for this decision. Complete these sentences: I\'ll know going back to school was worth it if... I\'ll regret this decision if... The bare minimum outcome I need to feel good about this is... What do your answers reveal about your real motivations?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 13
  },
  {
    id: 'going-back-to-school-14',
    question: 'Write about the story you tell yourself about why you didn\'t finish or continue school before (if applicable), or why you\'re considering it now. What\'s the narrative you\'ve carried? Is that story serving you or holding you back? If you could rewrite that story starting today, what would the new version say?',
    category: 'reflection',
    template_id: 'going-back-to-school',
    question_number: 14
  },

  // Research Questions (15-26) - 22%
  {
    id: 'going-back-to-school-15',
    question: 'Research 5 specific programs that could match your goals. For each, document: program name, school, format (online/hybrid/in-person), total cost, duration, and accreditation status. Create a spreadsheet or table comparing these key factors side by side.',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 15
  },
  {
    id: 'going-back-to-school-16',
    question: 'Identify 3 people who graduated from programs you\'re considering (use LinkedIn, alumni networks, or school websites). For each person, research: Where did they work before? Where do they work now? How long after graduation did they change roles? What does their career trajectory tell you about the ROI of that program?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 16
  },
  {
    id: 'going-back-to-school-17',
    question: 'Document the total true cost for your top 2 program choices. Include: tuition, fees, books, technology, transportation/parking, childcare if needed, lost income if reducing work hours. Write the total number for each program. Does seeing the real number change how you feel about this decision?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 17
  },
  {
    id: 'going-back-to-school-18',
    question: 'Research 3 different funding options available to you specifically (scholarships, employer tuition reimbursement, federal aid, payment plans, etc.). For each, document: exact amount available, eligibility requirements, application deadline, and any strings attached (work commitment, grade requirements, etc.).',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 18
  },
  {
    id: 'going-back-to-school-19',
    question: 'Find and read 5 honest student reviews for each of your top program choices (Reddit, GradCafe, student blogs, not official school sites). Document the most common complaint and the most common praise for each program. What red flags or green flags do you see?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 19
  },
  {
    id: 'going-back-to-school-20',
    question: 'Research the job market for your intended field. Look up 10 recent job postings for roles you want 2-3 years after graduation. Document: How many require this degree? How many say "preferred" versus "required"? What salaries are listed? What other qualifications appear frequently? Is the degree actually necessary or just nice to have?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 20
  },
  {
    id: 'going-back-to-school-21',
    question: 'Document the time commitment for your top program choices. Find the actual course schedule or syllabus examples. Write down: hours per week in class (synchronous), estimated homework/study time, whether classes are during work hours, any required in-person residencies or intensives. Calculate total hours per week realistically.',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 21
  },
  {
    id: 'going-back-to-school-22',
    question: 'Research whether your employer offers education benefits. Document: Do they have tuition reimbursement? What\'s the annual cap? Do you have to stay X years after? Will they let you adjust your schedule? Have other employees used this benefit? Ask HR or check your employee handbook - get the specific policy.',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 22
  },
  {
    id: 'going-back-to-school-23',
    question: 'Find 3 alternatives to a traditional degree program that could achieve similar goals (bootcamps, certificates, MOOCs, apprenticeships, etc.). For each, document: cost, time commitment, industry recognition, and career outcomes. Could any of these get you 80% of what you want for 20% of the investment?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 23
  },
  {
    id: 'going-back-to-school-24',
    question: 'Research the application requirements for your top 2 programs. Create a checklist: transcripts needed, test scores (GRE/GMAT?), letters of recommendation (how many?), essays, application fee, deadlines, portfolio/work samples. Which of these do you already have? Which will take significant time or money to obtain?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 24
  },
  {
    id: 'going-back-to-school-25',
    question: 'Document the support services each program offers for adult learners specifically. Research: Do they have career services for career changers? Childcare resources? Flexible deadlines for parents? Evening/weekend advising? Tutoring? What accommodations exist for people juggling work and life?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 25
  },
  {
    id: 'going-back-to-school-26',
    question: 'Research the academic prerequisites and technology requirements. Document: What knowledge do they assume you have coming in? Will you need to take remedial or catch-up courses? What software, equipment, or internet speed is required? Are there any prerequisites you\'d need to complete before even applying? What would that add to your timeline?',
    category: 'research',
    template_id: 'going-back-to-school',
    question_number: 26
  },

  // Planning Questions (27-41) - 28%
  {
    id: 'going-back-to-school-27',
    question: 'Create a realistic weekly schedule for your first semester. Use your current weekly calendar and block out: work hours, sleep, family time, commute, and existing commitments. Now add class time and study hours. What has to give? What are you willing to sacrifice? What\'s non-negotiable?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 27
  },
  {
    id: 'going-back-to-school-28',
    question: 'Design your financial plan for the entire duration of the program. Document: total cost, how much you\'ll pay from savings, from income, from loans, from aid. Create a month-by-month budget showing when payments are due. If you\'re taking loans, calculate what your monthly payment will be after graduation. Can you actually afford this?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 28
  },
  {
    id: 'going-back-to-school-29',
    question: 'Plan the conversation with your family or partner. Write out: When will you tell them? What will you say? What are you asking from them specifically (support, sacrifice, patience)? What objections do you anticipate? How will you address their concerns? Draft your actual talking points.',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 29
  },
  {
    id: 'going-back-to-school-30',
    question: 'Map out your work transition plan. Document: Will you tell your boss? When? Will you reduce hours, go part-time, or quit entirely? What\'s your timeline for making that change? How will you position this to keep good relationships? What\'s your backup plan if they react negatively?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 30
  },
  {
    id: 'going-back-to-school-31',
    question: 'Plan for the first month specifically. Write down: What will you do about meals (prep ahead? order out more?)? Who will handle your current responsibilities? What will you drop or delegate? How will you handle the first all-nighter or stressful week? What\'s your specific stress management plan?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 31
  },
  {
    id: 'going-back-to-school-32',
    question: 'Design your study environment and routine. Write down: Where will you study at home? Do you need to create a dedicated space? What time of day will you study? How will you signal to family that you\'re "in class" or studying? What boundaries do you need to set?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 32
  },
  {
    id: 'going-back-to-school-33',
    question: 'Plan your support network. List 3-5 specific people who will be in your corner. For each, write: What type of support can they offer (childcare, study buddy, emotional support, career advice, financial help)? Have you asked them yet? When will you have that conversation?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 33
  },
  {
    id: 'going-back-to-school-34',
    question: 'Create your contingency plan. Document: What will you do if you fail a class? If you can\'t keep up with work and school? If you run out of money halfway through? If your family situation changes? For each scenario, write your specific response plan - not "I\'ll figure it out" but actual steps.',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 34
  },
  {
    id: 'going-back-to-school-35',
    question: 'Plan your "identity transition" strategy. Write down: How will you introduce yourself (still your old role, or as a student)? How will you explain this to professional contacts? What will you update on LinkedIn and when? How do you want people to perceive this decision?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 35
  },
  {
    id: 'going-back-to-school-36',
    question: 'Map out the complete timeline from application to graduation. Document: Application deadline (exact date), when you\'ll hear back, when you need to decide, program start date, semester/quarter schedule, expected graduation date. Add 6 months to your expected graduation "just in case" - does that change your plans?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 36
  },
  {
    id: 'going-back-to-school-37',
    question: 'Plan your technology and learning setup. Document: What equipment do you need (laptop, software, webcam, printer)? Do you have reliable internet? Do you know how to use online learning platforms? When will you practice/set this up? What\'s your tech troubleshooting plan for the first week of class?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 37
  },
  {
    id: 'going-back-to-school-38',
    question: 'Design your self-care and sustainability plan. Write down: What activities keep you sane that you can\'t give up (exercise, hobbies, social time)? How will you protect that time? What are your early warning signs of burnout? What will you do when you hit that point?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 38
  },
  {
    id: 'going-back-to-school-39',
    question: 'Plan for maintaining your current skills and network. Document: How will you stay relevant in your current field during school? What professional development or networking can you NOT let slide? How will you prevent your skills from getting rusty if you\'re changing careers?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 39
  },
  {
    id: 'going-back-to-school-40',
    question: 'Map out your career transition timeline post-graduation. Write down: When will you start job searching (during school or after)? When will you update your resume? When will you start networking in your new field? What\'s your plan if you don\'t get a job immediately after graduation? How long can you sustain yourself?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 40
  },
  {
    id: 'going-back-to-school-41',
    question: 'Plan your "celebration and reward" system. Document: What will you do after finishing your first assignment? First semester? First year? Graduation? How will you acknowledge this achievement along the way? What specific rewards will keep you motivated when it gets hard?',
    category: 'planning',
    template_id: 'going-back-to-school',
    question_number: 41
  },

  // Action Questions (42-55) - 25%
  {
    id: 'going-back-to-school-42',
    question: 'Request information from 3 programs this week. Write down: Which programs will you contact? What specific questions will you ask (beyond what\'s on the website)? When will you make these calls or submit these forms? Add the deadline to your calendar right now.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 42
  },
  {
    id: 'going-back-to-school-43',
    question: 'Schedule informational interviews with 2 people who have the degree you want or work in your target field. Write down: Who will you contact? What will you ask them? When will you reach out (specific date)? Draft the exact message you\'ll send today.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 43
  },
  {
    id: 'going-back-to-school-44',
    question: 'Create your application tracking system right now. Make a spreadsheet or doc with columns for: program name, deadline, requirements, status, and next action. Fill in what you know for your top 3 programs. What\'s the very next thing you need to do for each one?',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 44
  },
  {
    id: 'going-back-to-school-45',
    question: 'Order your transcripts this week. Write down: Which schools do you need transcripts from? What\'s the process for each (online portal, mail request, in-person)? What\'s the cost and turnaround time? When will you submit these requests (specific date)? Do it before Friday.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 45
  },
  {
    id: 'going-back-to-school-46',
    question: 'Take one free class or audit a course this month to test the waters. Document: What will you take (Coursera, edX, YouTube series, local community college)? When will you start? How many hours per week will you commit? This is your pilot test - schedule it now.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 46
  },
  {
    id: 'going-back-to-school-47',
    question: 'Have the money conversation with your partner or family this week. Write down: When will you have this talk (exact day and time)? What numbers will you show them? What are you asking for specifically? Schedule this conversation in the next 7 days.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 47
  },
  {
    id: 'going-back-to-school-48',
    question: 'Research and apply for 2 scholarships or financial aid options this month. Document: Which scholarships match your profile? What are the deadlines? What do the applications require? Block time on your calendar this week to work on applications. Set a reminder.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 48
  },
  {
    id: 'going-back-to-school-49',
    question: 'Meet with HR or your boss about education benefits within 2 weeks. Write down: When will you schedule this meeting? What will you ask? What documentation do you need to bring? Draft your talking points now. Send the meeting invite this week.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 49
  },
  {
    id: 'going-back-to-school-50',
    question: 'Attend a virtual information session or campus tour for your top choice program. Document: When is the next session? Have you registered? What questions will you ask? Add it to your calendar. If there isn\'t one scheduled, email admissions today to ask when the next one is.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 50
  },
  {
    id: 'going-back-to-school-51',
    question: 'Identify and reach out to 2 potential recommenders this week. Write down: Who will you ask for letters of recommendation? When did you last talk to them? What will you say in your request? Draft the email now and send it within 3 days. Give them at least 4 weeks notice.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 51
  },
  {
    id: 'going-back-to-school-52',
    question: 'Set up a dedicated education fund account this week. Document: Where will you open it (separate savings account, 529 plan, etc.)? How much will you deposit now? How much will you contribute monthly? Set up automatic transfers. Do this within 5 business days.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 52
  },
  {
    id: 'going-back-to-school-53',
    question: 'Create your study space this weekend. Write down: Where will it be? What do you need to buy or set up (desk, chair, lighting, supplies)? When will you do this (specific day)? Take a photo of the space before and after. This makes it real.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 53
  },
  {
    id: 'going-back-to-school-54',
    question: 'Start building one "student habit" this week before you even enroll. Choose one: read for 30 minutes daily, practice time blocking, use a planner, take notes on something you\'re learning. Document: Which habit will you start? When each day will you do it? Track it for 2 weeks. Start tomorrow.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 54
  },
  {
    id: 'going-back-to-school-55',
    question: 'Set your decision deadline. Write down: What\'s the date you\'ll make your final decision about whether to apply/enroll? What information do you need to decide? Who do you need to talk to before then? What will you do on that exact date to either commit or walk away? Put it in your calendar with an alarm.',
    category: 'action',
    template_id: 'going-back-to-school',
    question_number: 55
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for going-back-to-school...`);

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
    .eq('template_id', 'going-back-to-school');

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

    const total = verifyData.length;
    console.log('\n=== GENERATION COMPLETE ===');
    console.log(`Total questions: ${total}`);
    console.log(`\nBreakdown by category:`);
    console.log(`Foundation (reflection): ${counts.reflection} (${Math.round(counts.reflection/total*100)}%)`);
    console.log(`Research: ${counts.research} (${Math.round(counts.research/total*100)}%)`);
    console.log(`Planning: ${counts.planning} (${Math.round(counts.planning/total*100)}%)`);
    console.log(`Action: ${counts.action} (${Math.round(counts.action/total*100)}%)`);
  }
}

insertQuestions();
