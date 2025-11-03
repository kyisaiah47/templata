import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-10)
  {
    id: 'digital-minimalism-1',
    question: 'Write about the last 3 times you felt truly present and engaged with the person in front of you. What was different about those moments compared to your typical interactions?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 1
  },
  {
    id: 'digital-minimalism-2',
    question: "Reflect on a recent evening when you got to the end of the day and couldn't remember what you did online. What feeling did that leave you with?",
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 2
  },
  {
    id: 'digital-minimalism-3',
    question: 'Document 3-5 moments in the past month when you reached for your phone automatically. What were you avoiding or escaping from in each moment?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 3
  },
  {
    id: 'digital-minimalism-4',
    question: 'Think about the last time you had 2+ hours with no phone or computer. When was it? What did you do? How did it feel different from your normal state?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 4
  },
  {
    id: 'digital-minimalism-5',
    question: 'Write about someone you admire who has a healthy relationship with technology. What specifically do they do differently than you?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 5
  },
  {
    id: 'digital-minimalism-6',
    question: 'Reflect on your attention span now versus 5 years ago. When did you first notice it changing? What were you doing differently back then?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 6
  },
  {
    id: 'digital-minimalism-7',
    question: 'List the 5 things you most value in life (relationships, creativity, health, learning, etc.). For each, write honestly how much focused time you gave it last week versus time spent scrolling.',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 7
  },
  {
    id: 'digital-minimalism-8',
    question: 'Think about Sunday nights or early mornings before anyone else is awake. When you have quiet time alone with your thoughts, what recurring feelings come up about your technology use?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 8
  },
  {
    id: 'digital-minimalism-9',
    question: 'Document a time in the past year when you were really proud of something you created or accomplished. How much uninterrupted focus time did it require? When was the last time you had a block like that?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 9
  },
  {
    id: 'digital-minimalism-10',
    question: 'Write about the person you want to be in 5 years. If you met that future version of yourself, what would they say about how you currently spend your attention?',
    category: 'reflection',
    template_id: 'digital-minimalism',
    question_number: 10
  },
  // RESEARCH QUESTIONS (11-19)
  {
    id: 'digital-minimalism-11',
    question: 'Check your screen time data for the past 7 days. List each app over 30 minutes total and note: Did you intend to spend that much time? What did you actually get from it?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 11
  },
  {
    id: 'digital-minimalism-12',
    question: 'Document every notification you received yesterday. Which ones represented something you truly needed to know immediately versus something that could have waited?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 12
  },
  {
    id: 'digital-minimalism-13',
    question: 'Track one full day: Every time you pick up your phone, write what triggered it (notification, boredom, specific need). What patterns emerge?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 13
  },
  {
    id: 'digital-minimalism-14',
    question: 'List every app and platform where you have an account. For each, write the last time you got genuine value from it versus the last time you used it out of habit.',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 14
  },
  {
    id: 'digital-minimalism-15',
    question: 'Research your most-used app: Open it right now and track exactly how long before it shows you something algorithmically recommended versus something you specifically sought out. What does that ratio tell you?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 15
  },
  {
    id: 'digital-minimalism-16',
    question: 'Document your physical responses to technology over 48 hours: When do you feel your shoulders tense? When do you get a slight dopamine hit? When do you feel drained afterward?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 16
  },
  {
    id: 'digital-minimalism-17',
    question: 'Map your environment: Walk through your home and list every place your phone, laptop, or tablet lives. How does their placement shape your behavior throughout the day?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 17
  },
  {
    id: 'digital-minimalism-18',
    question: 'Identify your "tech triggers": What specific emotional states (stressed, lonely, bored, tired, anxious) send you reaching for your phone? Note 3 recent examples of each.',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 18
  },
  {
    id: 'digital-minimalism-19',
    question: 'Research your "just checking" behavior: For 3 days, mark every time you check something "real quick" (email, messages, social media). Time how long those checks actually take. What\'s the gap between intended and actual?',
    category: 'research',
    template_id: 'digital-minimalism',
    question_number: 19
  },
  // PLANNING QUESTIONS (20-30)
  {
    id: 'digital-minimalism-20',
    question: 'Define what "essential" means for your digital life: What specific outcomes would make technology worth your time and attention? What\'s the minimum digital presence needed to achieve them?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 20
  },
  {
    id: 'digital-minimalism-21',
    question: 'Design your ideal week: If you reclaimed 2 hours per day from your phone, what specific activities would fill that time? Be concrete: What day, what time, what exactly would you do?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 21
  },
  {
    id: 'digital-minimalism-22',
    question: 'Plan your "minimum viable socialization": Which digital communications are actually maintaining relationships versus giving you the illusion of connection? How could you maintain the real connections with less digital overhead?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 22
  },
  {
    id: 'digital-minimalism-23',
    question: 'Strategize around work obligations: Which digital tools are truly required for your job? Which feel required but have offline or less-intrusive alternatives? What\'s worth negotiating with your employer?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 23
  },
  {
    id: 'digital-minimalism-24',
    question: 'Create your replacement menu: For each emotional trigger you identified (boredom, stress, loneliness), list 3 specific offline activities that address that need. Make them as easy to start as opening an app.',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 24
  },
  {
    id: 'digital-minimalism-25',
    question: 'Design your digital boundaries: What specific rules would protect your values? (Examples: No phone before 9am, no social media on weekdays, phone stays in another room after 8pm). Why those specific boundaries?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 25
  },
  {
    id: 'digital-minimalism-26',
    question: 'Plan your communication expectations: How quickly do people actually need responses from you? What new expectations do you need to set with family, friends, colleagues? How will you communicate these changes?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 26
  },
  {
    id: 'digital-minimalism-27',
    question: 'Strategize your environment redesign: Based on where your devices currently live, where should they live instead? What friction can you add to mindless use and what ease can you add to intentional use?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 27
  },
  {
    id: 'digital-minimalism-28',
    question: 'Plan your content diet: What specific sources of information, entertainment, or inspiration deserve your attention? What quality bar should something meet before it earns your time?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 28
  },
  {
    id: 'digital-minimalism-29',
    question: 'Design your transition strategy: Which changes happen immediately versus gradually? What\'s the specific sequence? What\'s Week 1 versus Week 4 versus Month 3?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 29
  },
  {
    id: 'digital-minimalism-30',
    question: 'Create your contingency plans: When you\'re trapped waiting with nothing to do, what\'s your alternative to phone scrolling? When you\'re genuinely anxious or struggling, what\'s your healthier escape than digital distraction?',
    category: 'planning',
    template_id: 'digital-minimalism',
    question_number: 30
  },
  // ACTION QUESTIONS (31-40)
  {
    id: 'digital-minimalism-31',
    question: 'Delete or log out: Right now, which 3 apps could you delete or log out of immediately? Do it, then write how it feels and what resistance came up.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 31
  },
  {
    id: 'digital-minimalism-32',
    question: 'Set up your phone for success: Turn off all non-essential notifications right now. Which ones are you keeping? Write your specific criteria for what earns notification privileges.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 32
  },
  {
    id: 'digital-minimalism-33',
    question: 'Create physical boundaries: Before tomorrow morning, decide where your phone will sleep tonight (not your bedroom). Set it up, then document where you\'ll charge it going forward.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 33
  },
  {
    id: 'digital-minimalism-34',
    question: 'Establish your first sacred time: Block out one specific daily time period starting tomorrow where your phone is in another room. What time? What will you do instead? Put it in your calendar.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 34
  },
  {
    id: 'digital-minimalism-35',
    question: 'Build your offline toolkit: Today, gather the physical items you\'ll need for your replacement activities (book, journal, art supplies, running shoes, etc.). Make them as visible and accessible as your phone currently is.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 35
  },
  {
    id: 'digital-minimalism-36',
    question: 'Communicate your changes: Draft and send a message to your 5 most frequent contacts explaining your new response time expectations. What specifically will you say?',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 36
  },
  {
    id: 'digital-minimalism-37',
    question: 'Redesign one daily routine: Pick one part of your day that currently involves automatic phone use (morning, commute, lunch, before bed). Write the specific alternative routine and start it tomorrow.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 37
  },
  {
    id: 'digital-minimalism-38',
    question: 'Create your accountability structure: Who will check in with you about this? Schedule the specific day/time for your first check-in. What will you report on?',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 38
  },
  {
    id: 'digital-minimalism-39',
    question: 'Prepare for withdrawal: You\'ll likely feel uncomfortable, bored, or anxious in the first week. Write down 5 specific things you\'ll do when those feelings hit instead of reaching for your phone.',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 39
  },
  {
    id: 'digital-minimalism-40',
    question: 'Define your success metrics: How will you know this is working? Write 3 specific concrete changes you\'ll be able to observe in 30 days (not just "less screen time" but observable life changes).',
    category: 'action',
    template_id: 'digital-minimalism',
    question_number: 40
  }
];

async function main() {
  console.log('Inserting 40 questions for digital-minimalism guide...\n');

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${question.question_number}`);
    }
  }

  console.log('\n✓ All questions inserted successfully!');

  // Verify
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'digital-minimalism');

  if (!error && data) {
    const counts = data.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\n=== Verification ===');
    console.log(`Total: ${data.length} questions`);
    console.log('Breakdown by category:');
    Object.entries(counts).forEach(([category, count]) => {
      const percentage = ((count / data.length) * 100).toFixed(1);
      console.log(`  ${category}: ${count} (${percentage}%)`);
    });
  }
}

main();
