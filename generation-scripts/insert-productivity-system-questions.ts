import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-10) - 25% - Self-discovery, patterns, past experiences
  {
    id: 'productivity-system-1',
    question: 'Think about the last 5 times you felt genuinely productive (not just busy). Write down what you were doing, where you were, what time of day it was, and what made those moments feel different from your usual work.',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 1
  },
  {
    id: 'productivity-system-2',
    question: 'Document 3 specific moments in the past month when your productivity system (or lack of one) completely failed you. What was the situation? What broke down? What did you do instead?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 2
  },
  {
    id: 'productivity-system-3',
    question: 'Write about your energy patterns over the past week. For each day, note: when did you feel most alert? When did you hit a wall? What were you doing during your peak vs low energy times?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 3
  },
  {
    id: 'productivity-system-4',
    question: 'List every productivity method, app, or system you\'ve tried in the past 3 years. For each one, write: how long did you use it, why did you stop, and what (if anything) actually worked about it?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 4
  },
  {
    id: 'productivity-system-5',
    question: 'Reflect on the last time you felt "in flow" - completely absorbed in what you were doing, losing track of time. What were you working on? What conditions made that possible? How long has it been since you felt that way?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 5
  },
  {
    id: 'productivity-system-6',
    question: 'Think about someone whose productivity you admire (colleague, friend, public figure). Write down specifically what they do differently than you. Not vague traits like "disciplined" - actual behaviors you\'ve observed or know about.',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 6
  },
  {
    id: 'productivity-system-7',
    question: 'Document your biggest productivity guilt. Complete this sentence and expand on it: "I always tell myself I should ___, but I never actually do it because ___." What does this reveal about the gap between your ideal and reality?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 7
  },
  {
    id: 'productivity-system-8',
    question: 'Write about the last week: What important task did you keep postponing? When did you finally do it (or are you still postponing it)? What were you doing instead? What does this pattern tell you?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 8
  },
  {
    id: 'productivity-system-9',
    question: 'Reflect on your relationship with "productivity porn" - articles, videos, apps promising the perfect system. When do you consume this content? How do you feel after? Has it ever actually helped, or does it become another form of procrastination?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 9
  },
  {
    id: 'productivity-system-10',
    question: 'Think about the difference between how you work alone vs with others watching. Describe a specific recent example of each. When are you more productive? When does the work feel more authentic? What does this tell you about accountability?',
    category: 'reflection',
    template_id: 'productivity-system',
    question_number: 10
  },

  // RESEARCH QUESTIONS (11-19) - 22.5% - Data-gathering with frameworks
  {
    id: 'productivity-system-11',
    question: 'Track one full day in detail. For each hour, write: what you did, how energized you felt (1-10), whether it was planned or reactive, and whether it was important or just urgent. What patterns emerge?',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 11
  },
  {
    id: 'productivity-system-12',
    question: 'Audit your current tools. List every productivity app, notebook, calendar, or system you currently use (even if barely). For each, note: last time you used it, what % of its features you actually use, and whether it helps or adds friction.',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 12
  },
  {
    id: 'productivity-system-13',
    question: 'Map your contexts. List all the different "modes" you operate in (deep work, meetings, admin, creative, family time, etc.). For each, write: how much time per week, what environment works best, what tools you need, and what kills productivity in that context.',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 13
  },
  {
    id: 'productivity-system-14',
    question: 'Analyze your interruptions. For 2-3 typical workdays, track what breaks your focus: when it happens, what caused it (notification, person, self-interruption), and how long it took to refocus. Calculate the true cost of your interruptions.',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 14
  },
  {
    id: 'productivity-system-15',
    question: 'Research your natural chronotype. Document when you naturally wake up (without alarms) on free days, when you feel most creative, when you feel most analytical, and when you hit energy dips. How does this compare to your current schedule?',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 15
  },
  {
    id: 'productivity-system-16',
    question: 'Conduct a "tolerance audit." List 5-10 things in your current work setup that you tolerate but that create friction (slow computer, cluttered desk, bad chair, noisy environment, inefficient process). For each, estimate: how often it bothers you and impact on productivity (1-10).',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 16
  },
  {
    id: 'productivity-system-17',
    question: 'Interview yourself about task types. Create 3 categories of work you do regularly. For each category, note: approximate time per week, your skill level, your energy level while doing it, and whether you could eliminate, automate, or delegate any of it.',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 17
  },
  {
    id: 'productivity-system-18',
    question: 'Investigate your decision fatigue. Track decisions you made yesterday from morning to evening (what to wear, eat, work on, respond to, etc.). Count them. When did you feel most decisive vs most drained? What decisions could you automate or eliminate?',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 18
  },
  {
    id: 'productivity-system-19',
    question: 'Research what "done" looks like for you. Choose 3 recent projects or tasks. For each, write: when you initially thought you\'d be done, when you were actually done, what "done" meant (perfect? good enough? shipped?), and why the gap existed.',
    category: 'research',
    template_id: 'productivity-system',
    question_number: 19
  },

  // PLANNING QUESTIONS (20-30) - 27.5% - Strategic system design
  {
    id: 'productivity-system-20',
    question: 'Design your ideal day structure. Based on your energy patterns and contexts, map out when you\'d do different types of work. Don\'t think about your current obligations - just design the pattern that would work best for your brain.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 20
  },
  {
    id: 'productivity-system-21',
    question: 'Define your non-negotiables. Write down 3-5 productivity practices that, based on your reflection, you know actually work for you and that you\'re committed to building your system around. Why are these specifically non-negotiable for you?',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 21
  },
  {
    id: 'productivity-system-22',
    question: 'Plan your capture system. Based on how you actually work (not how you think you should), design where and how you\'ll capture ideas, tasks, and commitments. What will you use? When will you check it? How will you know if something is captured?',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 22
  },
  {
    id: 'productivity-system-23',
    question: 'Create your task triage criteria. Write down your decision framework for when something comes in: How will you decide what to do now vs later vs never? What questions will you ask yourself? Be specific enough that you could follow this in the moment.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 23
  },
  {
    id: 'productivity-system-24',
    question: 'Design your review cadence. Plan when and how you\'ll review your system: daily (what time? how long? reviewing what?), weekly (when? what questions?), monthly (what are you checking for?). Make this realistic for your actual life.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 24
  },
  {
    id: 'productivity-system-25',
    question: 'Build your environment strategy. For each context you identified (deep work, meetings, admin, etc.), plan: where you\'ll do it, when you\'ll do it, what needs to be in place, and what needs to be removed or blocked.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 25
  },
  {
    id: 'productivity-system-26',
    question: 'Plan your "start work" ritual. Design a 5-15 minute routine that will transition you into focused work mode. What specific actions will you take? What will signal to your brain "now we work"? Why will this work for you specifically?',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 26
  },
  {
    id: 'productivity-system-27',
    question: 'Create your "end of day" shutdown routine. Plan exactly how you\'ll close out your work: what will you review, what will you capture for tomorrow, what will you close, what will signal "work is done"? Write the specific 5-10 minute sequence.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 27
  },
  {
    id: 'productivity-system-28',
    question: 'Design your "system is breaking" alert signals. Write down 3-5 specific red flags that will tell you your system needs adjustment (feeling overwhelmed? missing deadlines? not checking your list? working late?). For each, plan what adjustment you\'ll make.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 28
  },
  {
    id: 'productivity-system-29',
    question: 'Plan your constraint strategy. Based on your research, what will you intentionally limit? (Number of apps? Meeting hours? Projects at once? Daily tasks?). For each constraint, write why this specific limit matters for you.',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 29
  },
  {
    id: 'productivity-system-30',
    question: 'Create your integration plan. Write specifically how this system will work with existing obligations: your job requirements, family commitments, side projects. Where will you compromise? What do you refuse to compromise on?',
    category: 'planning',
    template_id: 'productivity-system',
    question_number: 30
  },

  // ACTION QUESTIONS (31-40) - 25% - Concrete implementation steps
  {
    id: 'productivity-system-31',
    question: 'Set up your capture tool today. Choose ONE place where you\'ll capture everything (app, notebook, etc.). Set it up right now. Test it by capturing 5 things currently in your head. Write down what you chose and why.',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 31
  },
  {
    id: 'productivity-system-32',
    question: 'Eliminate one major friction point this week. From your tolerance audit, choose the highest-impact issue and write your specific plan to fix it: what will you do, when will you do it, what will success look like?',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 32
  },
  {
    id: 'productivity-system-33',
    question: 'Schedule your first weekly review. Put it in your calendar right now - specific day and time. Write down what you\'ll review during this 30 minutes. Set a recurring reminder. What day and time did you choose?',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 33
  },
  {
    id: 'productivity-system-34',
    question: 'Run your first daily shutdown today. At the end of today, execute your shutdown routine exactly as planned. Afterwards, write: How long did it take? What worked? What felt awkward? What will you adjust tomorrow?',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 34
  },
  {
    id: 'productivity-system-35',
    question: 'Block your deep work time for next week. Look at your calendar and block specific 2-3 hour chunks for your most important work, matching your peak energy times. What days and times did you block? What will you work on during these blocks?',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 35
  },
  {
    id: 'productivity-system-36',
    question: 'Create your done-for-the-day trigger. Decide on ONE specific criterion that means work is done (time? tasks completed? energy level?). Write it down and commit to stopping when you hit it tomorrow, even if you "could" do more.',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 36
  },
  {
    id: 'productivity-system-37',
    question: 'Do a tool purge today. Delete or archive every productivity app you\'re not actively using. Unsubscribe from productivity newsletters you don\'t read. Write down what you eliminated and how it feels.',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 37
  },
  {
    id: 'productivity-system-38',
    question: 'Test your system for one week. Starting Monday, commit to following your system exactly as designed for 7 days. Set a reminder for the end of the week to evaluate. What specific date will you review how it went?',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 38
  },
  {
    id: 'productivity-system-39',
    question: 'Identify your adjustment trigger. After your test week, write down: What worked exactly as planned? What felt forced? What surprised you? Based on this, what ONE thing will you change for week two?',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 39
  },
  {
    id: 'productivity-system-40',
    question: 'Create your accountability mechanism. Decide how you\'ll stay honest with yourself about using this system. Will you track it? Tell someone? Review it weekly? Write your specific commitment and who/what will keep you accountable.',
    category: 'action',
    template_id: 'productivity-system',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for productivity-system...`);

  // First, check if any questions already exist and delete them
  const { data: existing, error: checkError } = await supabase
    .from('questions')
    .select('id')
    .eq('template_id', 'productivity-system');

  if (checkError) {
    console.error('Error checking existing questions:', checkError);
  } else if (existing && existing.length > 0) {
    console.log(`Found ${existing.length} existing questions. Deleting...`);
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('template_id', 'productivity-system');

    if (deleteError) {
      console.error('Error deleting existing questions:', deleteError);
      process.exit(1);
    }
    console.log('✅ Deleted existing questions');
  }

  // Insert new questions
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
    .eq('template_id', 'productivity-system');

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

    console.log('\n=== VERIFICATION ===');
    console.log(`Total questions: ${verifyData.length}`);
    console.log(`Foundation (reflection): ${counts.reflection} (${(counts.reflection/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action/verifyData.length*100).toFixed(1)}%)`);
  }
}

insertQuestions();
