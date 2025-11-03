#!/usr/bin/env npx tsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // ROUND 1: FOUNDATION QUESTIONS (14 questions - self-discovery, patterns, burnout recognition)
  {
    id: 'career-burnout-1',
    question: 'Write about the exact moment you first noticed something was wrong. What were you doing? What physical sensation or thought made you stop and think "this isn\'t normal"?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 1
  },
  {
    id: 'career-burnout-2',
    question: 'Document 5 specific times in the past 3 months when you felt completely drained. For each: What day/time was it? What had you just finished? How long did it take to recover?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 2
  },
  {
    id: 'career-burnout-3',
    question: 'Think back to a time (6+ months ago) when you felt energized by your work. Describe a specific day. What did you do? How did you feel at the end of it? What\'s different now?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 3
  },
  {
    id: 'career-burnout-4',
    question: 'List every symptom you\'re experiencing right now - physical, emotional, cognitive. For each, note when it started and how often it happens. What patterns emerge?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 4
  },
  {
    id: 'career-burnout-5',
    question: 'Reflect on your Sunday nights over the past month. What specific thoughts or physical sensations come up? When did this pattern start - was there a triggering event?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 5
  },
  {
    id: 'career-burnout-6',
    question: 'Write about 3 times in the past year when you said "yes" to work but everything in you wanted to say "no". What stopped you from declining? What happened afterward?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 6
  },
  {
    id: 'career-burnout-7',
    question: 'Document how your relationships have changed in the past 6 months. Who have you seen less? What invitations have you declined? What do these patterns tell you?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 7
  },
  {
    id: 'career-burnout-8',
    question: 'Think about the activities that used to bring you joy outside of work. When was the last time you did each one? What\'s been getting in the way?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 8
  },
  {
    id: 'career-burnout-9',
    question: 'Describe your energy levels throughout a typical week. Which days/times are worst? Which are slightly better? What happens during the better moments?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 9
  },
  {
    id: 'career-burnout-10',
    question: 'Write about a recent time you snapped at someone or felt disproportionately irritated by something small. What was really bothering you underneath?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 10
  },
  {
    id: 'career-burnout-11',
    question: 'Reflect on your work boundaries from 1 year ago versus now. What boundaries have eroded? When did you start checking email at night, working weekends, or skipping lunch?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 11
  },
  {
    id: 'career-burnout-12',
    question: 'List 5 core values that matter to you (like creativity, family time, growth, autonomy, helping others). For each, write how your current work situation aligns or conflicts with it.',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 12
  },
  {
    id: 'career-burnout-13',
    question: 'Think about the last time you felt proud of something you accomplished. How long ago was it? What made it meaningful? Why don\'t you have more moments like that?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 13
  },
  {
    id: 'career-burnout-14',
    question: 'Document your self-talk over the past week. What critical things have you said to yourself about your performance, worth, or capability? Where did these messages originate?',
    category: 'reflection',
    template_id: 'career-burnout',
    question_number: 14
  },

  // ROUND 2: RESEARCH QUESTIONS (12 questions - data-gathering about causes, work environment, options)
  {
    id: 'career-burnout-15',
    question: 'Track your actual working hours for the past 2 weeks. For each day: start time, end time, breaks taken, evening/weekend work. Calculate your true average weekly hours.',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 15
  },
  {
    id: 'career-burnout-16',
    question: 'List every recurring meeting on your calendar. For each, note: Is it necessary? Could you delegate attendance? What would happen if you skipped it?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 16
  },
  {
    id: 'career-burnout-17',
    question: 'Document all your current work responsibilities and projects. For each, identify: Who assigned it? Is it in your job description? What\'s the actual business impact?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 17
  },
  {
    id: 'career-burnout-18',
    question: 'Research your company\'s policies on: PTO/sick leave, mental health days, flexible hours, remote work, leaves of absence. What options exist that you haven\'t explored?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 18
  },
  {
    id: 'career-burnout-19',
    question: 'Identify 3-5 people at your company who seem to have healthy work-life balance. What do you observe about their habits, boundaries, or approach to work?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 19
  },
  {
    id: 'career-burnout-20',
    question: 'Analyze your manager\'s communication patterns. When do they send emails/messages? What are their expectations about response times? Are these explicit or assumed?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 20
  },
  {
    id: 'career-burnout-21',
    question: 'Look at your company reviews on Glassdoor, Blind, or similar sites. What do people say about work-life balance, burnout, or turnover? Do their experiences match yours?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 21
  },
  {
    id: 'career-burnout-22',
    question: 'Map out who depends on you for what at work. For each dependency: Is it sustainable? Could someone else do it? What would break if you took a 2-week vacation tomorrow?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 22
  },
  {
    id: 'career-burnout-23',
    question: 'Research burnout recovery timelines and professional resources. What therapists, coaches, or support groups specialize in burnout? What does your insurance cover?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 23
  },
  {
    id: 'career-burnout-24',
    question: 'Calculate your financial runway. How long could you survive on savings? What if you went to part-time? What\'s your absolute minimum monthly budget?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 24
  },
  {
    id: 'career-burnout-25',
    question: 'Identify other roles within your company that might be less demanding. What internal transfers are possible? Who could you talk to about them?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 25
  },
  {
    id: 'career-burnout-26',
    question: 'Gather data on your industry\'s work culture. Are other companies in your field known for better work-life balance? What would a job search timeline realistically look like?',
    category: 'research',
    template_id: 'career-burnout',
    question_number: 26
  },

  // ROUND 3: PLANNING QUESTIONS (15 questions - strategic recovery planning, boundary setting)
  {
    id: 'career-burnout-27',
    question: 'Design your ideal recovery week. What would you do each day? How much rest versus gentle activity? What would make you feel most restored?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 27
  },
  {
    id: 'career-burnout-28',
    question: 'Create a 3-tier priority system for your current work. Critical (business breaks), Important (can wait a week), Can drop (low impact). What can you eliminate or delegate?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 28
  },
  {
    id: 'career-burnout-29',
    question: 'Plan specific boundaries you need to set. For each: What\'s the boundary? Who needs to know? How will you communicate it? What will you do when it\'s tested?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 29
  },
  {
    id: 'career-burnout-30',
    question: 'Map out a sustainable weekly schedule. What are your non-negotiable work hours? When will you fully disconnect? What personal activities must be protected?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 30
  },
  {
    id: 'career-burnout-31',
    question: 'Develop a conversation plan with your manager. What do you need to say? What specific changes do you need? What\'s your backup plan if they\'re unsupportive?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 31
  },
  {
    id: 'career-burnout-32',
    question: 'Design your transition strategy if you need to leave this job. What\'s the timeline? What preparation is needed? What\'s your exit criteria?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 32
  },
  {
    id: 'career-burnout-33',
    question: 'Create a daily recovery routine. What will you do each morning and evening to support healing? What environmental changes would help (workspace, bedroom, morning routine)?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 33
  },
  {
    id: 'career-burnout-34',
    question: 'Plan how to rebuild your energy reserves. What activities recharge you? How can you incorporate them weekly? What obstacles need to be removed?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 34
  },
  {
    id: 'career-burnout-35',
    question: 'Strategize how to handle urgent requests and "emergencies". What\'s your criteria for true urgency? How will you push back on false urgency?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 35
  },
  {
    id: 'career-burnout-36',
    question: 'Design a support system for your recovery. Who can you confide in? Who will hold you accountable to boundaries? What professional help do you need?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 36
  },
  {
    id: 'career-burnout-37',
    question: 'Plan how to manage perfectionism or overwork tendencies. What are your triggers? What new thought patterns would help? What will you do when you catch yourself overworking?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 37
  },
  {
    id: 'career-burnout-38',
    question: 'Create a relapse prevention plan. What early warning signs will you watch for? What will you do if symptoms return? Who will help you notice?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 38
  },
  {
    id: 'career-burnout-39',
    question: 'Map out your career path beyond this burnout. What do you want your work life to look like in 1 year? 3 years? What needs to change to make that possible?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 39
  },
  {
    id: 'career-burnout-40',
    question: 'Plan how to reconnect with your purpose or meaning in work. What drew you to this field originally? What aspects of your work still feel meaningful? How can you do more of that?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 40
  },
  {
    id: 'career-burnout-41',
    question: 'Strategize time off and recovery. When can you take extended time off? How will you prepare your team? What will ensure you actually rest during that time?',
    category: 'planning',
    template_id: 'career-burnout',
    question_number: 41
  },

  // ROUND 4: ACTION QUESTIONS (14 questions - concrete recovery steps, prevention measures)
  {
    id: 'career-burnout-42',
    question: 'Schedule a complete health check-up this week. Book appointments for: primary care doctor, therapist/counselor, and any specialists needed. Set calendar reminders now.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 42
  },
  {
    id: 'career-burnout-43',
    question: 'Block out protected time on your calendar for the next 2 weeks. Mark specific hours as "unavailable" for recovery activities. What will you do during those blocks?',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 43
  },
  {
    id: 'career-burnout-44',
    question: 'Draft an email to your manager requesting a conversation about workload. Write what you\'ll say. When will you send it? What meeting time will you propose?',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 44
  },
  {
    id: 'career-burnout-45',
    question: 'Implement one boundary TODAY. Turn off work notifications after 6pm, stop checking email on weekends, or decline one unnecessary meeting. Document how it feels.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 45
  },
  {
    id: 'career-burnout-46',
    question: 'Reach out to 3 trusted people today. Tell them you\'re dealing with burnout and ask for support. Who will you contact? What specifically will you ask for?',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 46
  },
  {
    id: 'career-burnout-47',
    question: 'Take one complete day off this week with zero work. Mark it on your calendar. Set up auto-responder. Plan exactly what restorative activities you\'ll do instead.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 47
  },
  {
    id: 'career-burnout-48',
    question: 'Delegate or drop 3 tasks from your plate by end of week. For each, decide: Who can do it? How will you hand it off? Or can you just stop doing it?',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 48
  },
  {
    id: 'career-burnout-49',
    question: 'Start a daily check-in practice. Each evening for the next week, spend 5 minutes noting: energy level (1-10), what drained you, what helped. Review patterns on day 7.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 49
  },
  {
    id: 'career-burnout-50',
    question: 'Remove work access from your phone for one weekend. Delete Slack, email apps, or move them to a folder you can\'t see. Notice what changes about your anxiety and rest.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 50
  },
  {
    id: 'career-burnout-51',
    question: 'Schedule 3 activities this month that used to bring you joy. Put them on the calendar with the same priority as work meetings. Treat them as unmovable appointments.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 51
  },
  {
    id: 'career-burnout-52',
    question: 'Create a physical separation between work and life. Set up a dedicated workspace if you work from home, or establish a "commute" ritual to transition home. Implement this week.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 52
  },
  {
    id: 'career-burnout-53',
    question: 'Practice saying "no" to one request this week. Script exactly what you\'ll say. Role-play it if needed. Then do it and document how it went.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 53
  },
  {
    id: 'career-burnout-54',
    question: 'Start exploring exit options if needed. This week: update your resume, reach out to one recruiter or colleague about opportunities, or research companies with better cultures.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 54
  },
  {
    id: 'career-burnout-55',
    question: 'Establish a weekly review practice. Every Sunday, assess: What worked for recovery this week? What didn\'t? What one thing will you adjust next week? Do your first review this Sunday.',
    category: 'action',
    template_id: 'career-burnout',
    question_number: 55
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const { data, error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.id}:`, error);
      process.exit(1);
    }

    console.log(`✓ Inserted ${i + 1}/${questions.length}: ${question.id}`);

    // Add delay to avoid rate limiting
    if (i < questions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  console.log('\n✅ All questions inserted successfully!');
}

insertQuestions();
