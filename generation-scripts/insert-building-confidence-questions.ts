import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-9) - Reflection category
  {
    id: 'building-confidence-1',
    question: 'Write about 3 specific moments in the past 6 months when you felt genuinely confident - when you were completely sure of yourself. For each moment, note: what were you doing, who were you with, and what made that moment different from how you usually feel?',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 1
  },
  {
    id: 'building-confidence-2',
    question: 'Document 3 situations in the past month where you held back, stayed quiet, or didn\'t speak up when you wanted to. For each, write: what did you want to say or do, what stopped you, and what story were you telling yourself about what would happen if you did?',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 2
  },
  {
    id: 'building-confidence-3',
    question: 'Think about the last time someone gave you a genuine compliment about your abilities or character. Write down exactly what they said, how you responded, and what you immediately thought to yourself after (did you believe it, dismiss it, deflect it?).',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 3
  },
  {
    id: 'building-confidence-4',
    question: 'Reflect on your childhood and teenage years. Write about 2-3 specific experiences that you think shaped how confident (or not confident) you are today. What messages did you receive about your capabilities? Who delivered those messages?',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 4
  },
  {
    id: 'building-confidence-5',
    question: 'List 5 different social or professional contexts (team meetings, family gatherings, one-on-one conversations, presentations, social events, etc.). For each, rate your typical confidence level 1-10 and write one sentence about why it\'s that number in that specific context.',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 5
  },
  {
    id: 'building-confidence-6',
    question: 'Recall the last time you tried something new and it went badly or you failed publicly. Write about how you talked to yourself afterward - the exact words or thoughts that went through your mind. Now write how you\'d talk to a close friend if they experienced the same thing.',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 6
  },
  {
    id: 'building-confidence-7',
    question: 'Think about someone in your life (past or present) who seems genuinely confident in a way you admire. Write about 3-5 specific behaviors they demonstrate that signal confidence to you. Which of those behaviors feel impossible for you vs. just uncomfortable?',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 7
  },
  {
    id: 'building-confidence-8',
    question: 'Document your confidence pattern across a typical week. For each day, note: what time of day do you feel most confident? Least confident? What\'s different about those times (energy level, who you\'re around, what you\'re doing, how you slept)?',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 8
  },
  {
    id: 'building-confidence-9',
    question: 'Write about a skill or area where you actually ARE objectively competent or good at something, but you still don\'t feel confident about it. What evidence do you have that you\'re good at it? Why doesn\'t that evidence translate to feeling confident?',
    category: 'reflection',
    template_id: 'building-confidence',
    question_number: 9
  },
  // Research Questions (10-17)
  {
    id: 'building-confidence-10',
    question: 'Track your self-talk for 3 days. Each day, write down 5-7 thoughts you had about yourself or your abilities (both positive and negative). At the end, count: how many were critical vs. supportive? What patterns do you notice in when the critical thoughts appear?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 10
  },
  {
    id: 'building-confidence-11',
    question: 'Research confidence vs. competence in one specific area of your life. List 10 concrete pieces of evidence that you\'re competent (accomplishments, feedback, results). Then rate your confidence level 1-10. What\'s the gap between the evidence and how you feel?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 11
  },
  {
    id: 'building-confidence-12',
    question: 'Document your body language patterns. For one week, notice and write down: How do you typically stand in meetings? Where do you put your hands? Do you make eye contact? How\'s your posture when you\'re nervous vs. comfortable? Ask someone you trust to tell you what they notice.',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 12
  },
  {
    id: 'building-confidence-13',
    question: 'Identify 5 people in your life right now. For each person, write: Do you feel MORE confident or LESS confident when you\'re around them? What specifically do they do or say that affects your confidence? What does this pattern tell you about your environment?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 13
  },
  {
    id: 'building-confidence-14',
    question: 'Research your actual track record. List the last 10 times you tried something new, difficult, or scary over the past year. For each, document: what you attempted, what actually happened (success/failure/mixed), and what you learned. What\'s your actual success rate vs. what you expected?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 14
  },
  {
    id: 'building-confidence-15',
    question: 'Investigate your preparation patterns. Think about the last 5 times you had to do something that made you nervous. For each, write: how much did you prepare, did you over-prepare or wing it, and how did that preparation level affect your confidence and the outcome?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 15
  },
  {
    id: 'building-confidence-16',
    question: 'Study your voice patterns. Record yourself speaking in 3 different contexts (casual conversation, asking for something, presenting an idea). Listen back and document: pace, volume, filler words, hesitations. What changes when you\'re nervous vs. confident? What do you notice that surprises you?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 16
  },
  {
    id: 'building-confidence-17',
    question: 'Document your comparison habits. For one week, write down every time you compare yourself to someone else (social media, at work, in conversation). Note: who you compared to, what aspect you compared, and whether it made you feel better or worse. How much mental energy are you spending on this?',
    category: 'research',
    template_id: 'building-confidence',
    question_number: 17
  },
  // Planning Questions (18-27)
  {
    id: 'building-confidence-18',
    question: 'Based on your patterns, identify your top 3 confidence drains - specific situations, people, or thoughts that consistently undermine your confidence. For each drain, write: why it affects you, how often you encounter it, and one concrete boundary or change you could experiment with.',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 18
  },
  {
    id: 'building-confidence-19',
    question: 'Design your confidence ladder for one specific area where you want to feel more confident. List 8-10 challenges in order from \'slightly uncomfortable\' to \'terrifying.\' The first step should feel like a 3/10 difficulty, not a 10/10. What\'s your actual first step?',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 19
  },
  {
    id: 'building-confidence-20',
    question: 'Create your confidence toolkit - 5 specific techniques you\'ll use when you notice confidence dropping. For each technique, write: what you\'ll do (specific action), when you\'ll use it (specific trigger), and why you think it might work for you based on what you\'ve learned about yourself.',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 20
  },
  {
    id: 'building-confidence-21',
    question: 'Plan your self-talk reframe strategy. Choose 3 of your most common critical thoughts. For each, write: the critical thought, why it\'s not helpful, and an alternative thought that\'s both realistic AND supportive (not toxic positivity, actual truth-based encouragement).',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 21
  },
  {
    id: 'building-confidence-22',
    question: 'Develop your pre-game routine for situations where you typically lack confidence. Write out a step-by-step routine you\'ll do in the 24 hours before a confidence-testing moment: physical preparation, mental preparation, environmental setup, support activation. Make it specific enough to actually follow.',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 22
  },
  {
    id: 'building-confidence-23',
    question: 'Map your confidence support system. List people who genuinely boost your confidence vs. those who drain it. For the boosters: how can you spend more time with them or involve them when you need support? For the drainers: what boundaries do you need to protect your confidence?',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 23
  },
  {
    id: 'building-confidence-24',
    question: 'Create your competence inventory. List 15-20 things you\'re genuinely good at (skills, character traits, experiences, knowledge). Include both professional and personal. For each, rate: competence level (1-10) and confidence level (1-10). Where are the biggest gaps? What would it take to close them?',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 24
  },
  {
    id: 'building-confidence-25',
    question: 'Design your celebration and evidence-gathering system. Plan how you\'ll capture and save evidence of your capabilities: compliments, wins, positive feedback, successful outcomes. What specific method will you use (journal, folder, app)? When will you review this evidence?',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 25
  },
  {
    id: 'building-confidence-26',
    question: 'Plan your body language and presence experiments. Based on your research, identify 3 specific physical changes you want to try (posture, eye contact, hand position, vocal pace, etc.). For each, write: the current habit, the new behavior to try, and in what specific context you\'ll practice it.',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 26
  },
  {
    id: 'building-confidence-27',
    question: 'Develop your failure response protocol. Write down exactly what you\'ll do the next time you fail, mess up, or face rejection: Step 1 (immediate response), Step 2 (within 24 hours), Step 3 (within one week). Make it specific enough that you won\'t have to think about it in the moment.',
    category: 'planning',
    template_id: 'building-confidence',
    question_number: 27
  },
  // Action Questions (28-35)
  {
    id: 'building-confidence-28',
    question: 'Schedule your first confidence ladder step. Write down: the specific challenge you\'ll attempt, the exact date and time you\'ll do it, and who (if anyone) you\'ll tell about it for accountability. Make it something you\'ll actually do this week, not \'someday.\'',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 28
  },
  {
    id: 'building-confidence-29',
    question: 'Create your wins document today. Right now, open a note/doc and write down 10 things you\'ve accomplished in the past year that you\'re proud of - big or small. Set a recurring calendar reminder to add to this list every Sunday for the next 8 weeks.',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 29
  },
  {
    id: 'building-confidence-30',
    question: 'Practice your confident body language. Choose one specific context where you want to appear more confident (meetings, dates, presentations, etc.). This week, deliberately practice: standing/sitting tall, making eye contact, and speaking at a steady pace. Write down what happened and how it felt.',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 30
  },
  {
    id: 'building-confidence-31',
    question: 'Identify and execute one micro-confidence action today. Choose something small that scares you slightly (speak up in a meeting, ask a question, give someone a compliment, post something online, etc.). Do it within 48 hours. Document what happened.',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 31
  },
  {
    id: 'building-confidence-32',
    question: 'Have a confidence conversation with someone you trust. Schedule a specific time this week to talk to one person about your confidence journey. Share: one pattern you\'ve noticed, one thing you\'re working on, and one way they could support you. Actually schedule this conversation, don\'t just think about it.',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 32
  },
  {
    id: 'building-confidence-33',
    question: 'Start your self-talk tracking practice. For the next 7 days, set 3 random alarms on your phone. Each time the alarm goes off, write down whatever thought you were just having about yourself. At the end of the week, analyze: what\'s the ratio of supportive to critical? Where are the patterns?',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 33
  },
  {
    id: 'building-confidence-34',
    question: 'Set up your environment for confidence. This week, make one change to your physical environment that could support confidence: change your workspace setup, update your wardrobe for an important meeting, create a pump-up playlist, organize your wins folder. Do this by [specific date].',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 34
  },
  {
    id: 'building-confidence-35',
    question: 'Create your 30-day confidence check-in. Write down today\'s date plus 30 days. On that date, you\'ll review all these questions and write: What confidence experiments did I try? What worked? What didn\'t? What\'s one thing that\'s different about my confidence now vs. 30 days ago? Put this in your calendar right now.',
    category: 'action',
    template_id: 'building-confidence',
    question_number: 35
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  // First, check if questions already exist and delete them
  const { data: existingData, error: checkError } = await supabase
    .from('questions')
    .select('id')
    .eq('template_id', 'building-confidence');

  if (checkError) {
    console.error('Error checking for existing questions:', checkError);
  } else if (existingData && existingData.length > 0) {
    console.log(`Found ${existingData.length} existing questions. Deleting...`);
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('template_id', 'building-confidence');

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
    .eq('template_id', 'building-confidence');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${((counts.reflection / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${((counts.research / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${((counts.planning / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${((counts.action / verifyData.length) * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
