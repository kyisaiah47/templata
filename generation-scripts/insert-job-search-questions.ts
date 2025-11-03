import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (14 questions - 25%)
  {
    id: 'job-search-1',
    question: 'Write about the last time you were excited to go to work. What specific project or interaction made that day different? When did you last feel that way?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 1
  },
  {
    id: 'job-search-2',
    question: 'List the last 5 jobs or roles you seriously considered (even if you didn\'t apply). For each, note: What attracted you? What made you hesitate? What pattern do you see?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 2
  },
  {
    id: 'job-search-3',
    question: 'Think about the worst job you\'ve had. What specifically made it bad - the work itself, the people, the environment, the expectations? Which of those factors would be dealbreakers now?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 3
  },
  {
    id: 'job-search-4',
    question: 'Reflect on moments in the past 6 months when you felt genuinely proud of your work. What were you doing? Who noticed? What does this tell you about what you need in your next role?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 4
  },
  {
    id: 'job-search-5',
    question: 'Document 3 times in your career when you were learning fast and felt challenged in a good way. What conditions made that possible? What was different about those environments?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 5
  },
  {
    id: 'job-search-6',
    question: 'Write about your job search history. How did you find your last 2-3 jobs? What worked? What was frustrating? What would you do differently this time?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 6
  },
  {
    id: 'job-search-7',
    question: 'Think about Sunday evenings. When you imagine starting a new job, what specific worry or anxiety comes up? Where does that fear come from - past experience or assumption?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 7
  },
  {
    id: 'job-search-8',
    question: 'List the feedback or compliments you\'ve received in the past year. What themes emerge? What do others see in you that you might undervalue?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 8
  },
  {
    id: 'job-search-9',
    question: 'Reflect on the last time you turned down a job offer or opportunity. What made you say no? Was it the right call? What does that reveal about your priorities?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 9
  },
  {
    id: 'job-search-10',
    question: 'Write about 3 people in your network whose careers you admire. What specifically do you admire - their role, company, work-life balance, impact? What\'s different about their paths versus yours?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 10
  },
  {
    id: 'job-search-11',
    question: 'Think about your energy patterns at work. What tasks drain you? What tasks energize you? When do you find yourself procrastinating versus diving in? What does this tell you about fit?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 11
  },
  {
    id: 'job-search-12',
    question: 'Document the moments when you\'ve felt underutilized or bored at work. What was missing? What were you capable of that wasn\'t being used? How did you handle it?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 12
  },
  {
    id: 'job-search-13',
    question: 'Reflect on your commute and work environment preferences. Think about specific days when location/setup affected your productivity or mood. What patterns emerge about what you actually need?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 13
  },
  {
    id: 'job-search-14',
    question: 'Write about a time when you stayed in a job longer than you should have. What kept you there? What finally made you leave? What would you tell yourself now about recognizing those signs earlier?',
    category: 'reflection',
    template_id: 'job-search',
    question_number: 14
  },

  // RESEARCH QUESTIONS (12 questions - 22%)
  {
    id: 'job-search-15',
    question: 'Research 5 job postings that genuinely interest you. For each, note: What excites you? What concerns you? What skills do they emphasize that you have/lack? What salary range appears?',
    category: 'research',
    template_id: 'job-search',
    question_number: 15
  },
  {
    id: 'job-search-16',
    question: 'Identify 3 companies you\'d want to work for. For each, research: Recent news, growth trajectory, Glassdoor reviews (focus on cons), employee tenure patterns. What red or green flags emerge?',
    category: 'research',
    template_id: 'job-search',
    question_number: 16
  },
  {
    id: 'job-search-17',
    question: 'Find 3 people on LinkedIn who have your target role. Study their backgrounds: How did they get there? What\'s their career path pattern? What credentials or experiences do they share?',
    category: 'research',
    template_id: 'job-search',
    question_number: 17
  },
  {
    id: 'job-search-18',
    question: 'Research salary data for your target role in your location using 3 different sources (Glassdoor, Levels.fyi, Payscale, etc.). Document the range and what factors (experience, company size, industry) affect it most.',
    category: 'research',
    template_id: 'job-search',
    question_number: 18
  },
  {
    id: 'job-search-19',
    question: 'Investigate the job boards and platforms where your target roles are actually posted. Check 10 recent postings: Where do they appear? Are they on niche sites, LinkedIn, company sites? Where should you focus?',
    category: 'research',
    template_id: 'job-search',
    question_number: 19
  },
  {
    id: 'job-search-20',
    question: 'Research 3 recruiting agencies or headhunters in your industry. Note: What roles do they typically place? What\'s their reputation? How do they prefer to be contacted? Are they worth engaging?',
    category: 'research',
    template_id: 'job-search',
    question_number: 20
  },
  {
    id: 'job-search-21',
    question: 'Find 3 recent layoff announcements or hiring freezes in your target industry. What companies are affected? What roles are safe vs. risky? How does this change your targeting strategy?',
    category: 'research',
    template_id: 'job-search',
    question_number: 21
  },
  {
    id: 'job-search-22',
    question: 'Investigate the typical interview process for your target role. Search Glassdoor, Reddit, or YouTube for specific companies. What stages? What types of questions? Technical assessments? How long does it typically take?',
    category: 'research',
    template_id: 'job-search',
    question_number: 22
  },
  {
    id: 'job-search-23',
    question: 'Research alternative titles for the role you want. Search LinkedIn for "people who do X are called Y at different companies." List 5-7 title variations you should be searching for.',
    category: 'research',
    template_id: 'job-search',
    question_number: 23
  },
  {
    id: 'job-search-24',
    question: 'Find 5 professionals in your target role who are active on LinkedIn or Twitter. What do they post about? What skills/tools/trends do they discuss? What does this tell you about the role?',
    category: 'research',
    template_id: 'job-search',
    question_number: 24
  },
  {
    id: 'job-search-25',
    question: 'Research the key skills and tools mentioned across 10 job postings for your target role. Create a frequency count: Which appear most often? Which do you have? Which are learnable? Which are dealbreakers?',
    category: 'research',
    template_id: 'job-search',
    question_number: 25
  },
  {
    id: 'job-search-26',
    question: 'Investigate your target companies\' employee value propositions. Check their careers pages, LinkedIn posts, and Glassdoor. What do they emphasize? What matters to you? Where\'s the alignment or mismatch?',
    category: 'research',
    template_id: 'job-search',
    question_number: 26
  },

  // PLANNING QUESTIONS (15 questions - 27%)
  {
    id: 'job-search-27',
    question: 'Create your target company list by tier: Tier 1 (dream companies, lower odds), Tier 2 (solid fit, realistic), Tier 3 (safe bets, might not be perfect). Aim for 3-5 in each tier. What\'s your application strategy for each tier?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 27
  },
  {
    id: 'job-search-28',
    question: 'Map out your competitive advantages for your target role. What do you have that most candidates don\'t? What\'s your unique angle? How will you lead with this in applications and interviews?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 28
  },
  {
    id: 'job-search-29',
    question: 'Plan your job search timeline based on your current situation. If employed: How many hours per week realistically? If unemployed: What\'s your financial runway? What milestones should you hit weekly?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 29
  },
  {
    id: 'job-search-30',
    question: 'Design your tracking system for applications. What information do you need to capture (company, role, date, contact, status, follow-up dates)? How will you stay organized without it becoming overwhelming?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 30
  },
  {
    id: 'job-search-31',
    question: 'Develop your strategy for the resume gap or career change explanation. What\'s the honest but strategic story? Practice writing it in 2-3 sentences. How does it position you as stronger, not defensive?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 31
  },
  {
    id: 'job-search-32',
    question: 'Plan your networking approach based on your personality and current network. Are you starting cold or leveraging existing connections? What\'s realistic for you - coffee chats, LinkedIn messages, events? What\'s your weekly goal?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 32
  },
  {
    id: 'job-search-33',
    question: 'Create your interview preparation system. What stories do you need ready? (Achievement, failure, conflict, leadership) How will you practice? Who can do mock interviews? What\'s your timeline?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 33
  },
  {
    id: 'job-search-34',
    question: 'Map out the skills or credentials you\'re missing for your target role. Which are must-haves you can acquire quickly (online course, certification)? Which can you learn on the job? Which are negotiable with the right story?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 34
  },
  {
    id: 'job-search-35',
    question: 'Develop your strategy for currently employed job searching. How will you handle time off for interviews? What\'s your story if you need to leave during work hours? When will you tell your current employer?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 35
  },
  {
    id: 'job-search-36',
    question: 'Plan how you\'ll evaluate offers when they come. What are your non-negotiables (salary floor, benefits, location, culture)? What are nice-to-haves? How will you compare multiple offers objectively?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 36
  },
  {
    id: 'job-search-37',
    question: 'Create your outreach message template strategy. What\'s your approach for cold outreach vs. warm introductions? What value can you offer? How will you personalize at scale? Draft your core framework.',
    category: 'planning',
    template_id: 'job-search',
    question_number: 37
  },
  {
    id: 'job-search-38',
    question: 'Design your daily/weekly job search routine. What will you do each day? How will you balance applying vs. networking vs. skill-building? What prevents burnout while maintaining momentum?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 38
  },
  {
    id: 'job-search-39',
    question: 'Plan your approach to the "Why are you leaving?" question. What\'s the honest reason? What\'s the strategic framing? How do you talk about it without badmouthing your current/former employer?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 39
  },
  {
    id: 'job-search-40',
    question: 'Map your LinkedIn optimization strategy. What needs updating - headline, summary, experience, skills? Who do you need endorsements from? What content could you post to build visibility? What\'s your action plan?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 40
  },
  {
    id: 'job-search-41',
    question: 'Develop your follow-up strategy for applications and interviews. When do you follow up? What do you say? How persistent is too persistent? What system ensures you don\'t forget or over-do it?',
    category: 'planning',
    template_id: 'job-search',
    question_number: 41
  },

  // ACTION QUESTIONS (14 questions - 25%)
  {
    id: 'job-search-42',
    question: 'Write your professional summary/elevator pitch right now. Time yourself - it should be 30 seconds. Record it or say it out loud. What feels awkward? What\'s missing? Revise until it feels natural.',
    category: 'action',
    template_id: 'job-search',
    question_number: 42
  },
  {
    id: 'job-search-43',
    question: 'Send 3 networking messages this week. Identify specific people (former colleagues, alumni, industry contacts) and draft personalized messages. What specific ask or value can you offer each person?',
    category: 'action',
    template_id: 'job-search',
    question_number: 43
  },
  {
    id: 'job-search-44',
    question: 'Update your resume for your top target role today. Remove irrelevant experience, emphasize relevant skills, quantify achievements. Have one other person review it. What feedback surprises you?',
    category: 'action',
    template_id: 'job-search',
    question_number: 44
  },
  {
    id: 'job-search-45',
    question: 'Apply to 5 jobs this week that genuinely interest you (not just easy applications). For each, customize your resume and write a real cover letter. Track: company, role, date, what made you excited.',
    category: 'action',
    template_id: 'job-search',
    question_number: 45
  },
  {
    id: 'job-search-46',
    question: 'Prepare answers to the 5 most common interview questions for your field. Write them out, then practice saying them out loud. Time yourself. Which answers ramble? Which feel authentic? Refine.',
    category: 'action',
    template_id: 'job-search',
    question_number: 46
  },
  {
    id: 'job-search-47',
    question: 'Reach out to 2 people who have your target role for informational interviews. Draft your outreach message. What questions will you ask? What value can you offer them in return?',
    category: 'action',
    template_id: 'job-search',
    question_number: 47
  },
  {
    id: 'job-search-48',
    question: 'Set up job alerts on 3 platforms where your target roles are posted. Configure them to be useful, not overwhelming. What search terms? How often? Where will you track new postings?',
    category: 'action',
    template_id: 'job-search',
    question_number: 48
  },
  {
    id: 'job-search-49',
    question: 'Identify one skill gap you can start addressing this week. Enroll in a course, watch tutorials, or practice a tool. What can you add to your resume in 2 weeks that addresses a common requirement?',
    category: 'action',
    template_id: 'job-search',
    question_number: 49
  },
  {
    id: 'job-search-50',
    question: 'Clean up your online presence today. Google yourself. Check your LinkedIn, Twitter, GitHub, personal site. What would a recruiter find? What needs updating or removing? Make 3 specific changes.',
    category: 'action',
    template_id: 'job-search',
    question_number: 50
  },
  {
    id: 'job-search-51',
    question: 'Prepare 5 thoughtful questions to ask in interviews. These should reveal company culture, role expectations, team dynamics, growth opportunities. Write them down. Which ones genuinely help you evaluate fit?',
    category: 'action',
    template_id: 'job-search',
    question_number: 51
  },
  {
    id: 'job-search-52',
    question: 'Schedule 2 coffee chats or video calls this week with people in your network. Set specific calendar time. Prepare what you\'ll ask. What help or insight do you need from each person?',
    category: 'action',
    template_id: 'job-search',
    question_number: 52
  },
  {
    id: 'job-search-53',
    question: 'Create your interview story bank today. Write down 3 specific examples: a major achievement, a failure you learned from, a conflict you resolved. Use the STAR format. Practice saying them out loud.',
    category: 'action',
    template_id: 'job-search',
    question_number: 53
  },
  {
    id: 'job-search-54',
    question: 'Audit your references right now. List 3 people who would give you a strong reference. When did you last talk to them? Reach out to reconnect before you need the reference. What would you want them to emphasize?',
    category: 'action',
    template_id: 'job-search',
    question_number: 54
  },
  {
    id: 'job-search-55',
    question: 'Take one action today that scares you in your job search. Apply to a reach company, message someone senior, admit a skill gap in your application. What\'s holding you back from this action? Do it anyway.',
    category: 'action',
    template_id: 'job-search',
    question_number: 55
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for job-search guide...`);

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.id}:`, error);
    } else {
      console.log(`✓ Inserted: ${question.id}`);
    }
  }

  console.log('\n✅ All questions inserted successfully!');
}

main();
