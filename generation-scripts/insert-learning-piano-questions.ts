import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env.local
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-9) - reflection category
  {
    id: 'learning-piano-1',
    question: 'Write about 3 specific moments in your life when you heard live piano music or a piano recording that stopped you in your tracks. Where were you? What piece was it? What did you feel in that moment?',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 1
  },
  {
    id: 'learning-piano-2',
    question: 'Think back to your childhood and teenage years. List any experiences you had with music - lessons you took, instruments you tried, performances you gave, or times you sang. For each, note: How long did it last? Why did you stop (if you did)? What do you remember feeling about it?',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 2
  },
  {
    id: 'learning-piano-3',
    question: 'Reflect on the past 6 months. Write about 3-5 times when you listened to music intentionally (not just background). What were you doing? What kind of music? What made you choose to listen in those moments?',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 3
  },
  {
    id: 'learning-piano-4',
    question: 'Document a time in the past year when you watched someone perform music (live, on video, street performer - anything). What did you notice about them beyond the sound? Their hands? Their expression? Their focus? What struck you most?',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 4
  },
  {
    id: 'learning-piano-5',
    question: 'Think about your current daily routine. Write down the times when you naturally have energy and focus (not when you should, but when you actually do). What time of day? What day of the week? After what activities? Be specific about patterns you\'ve noticed.',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 5
  },
  {
    id: 'learning-piano-6',
    question: 'Reflect on the last 3 things you tried to learn (could be anything - cooking, language, software, sport). For each: How did you approach it? Did you take classes, use apps, learn from friends? Which approach felt most natural to you? Which one made you want to quit?',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 6
  },
  {
    id: 'learning-piano-7',
    question: 'Write about a skill you currently have that you\'re genuinely proud of - something you can do that you couldn\'t do 2+ years ago. How did you build it? What kept you going when it was hard? What specific moment made you realize "I can actually do this"?',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 7
  },
  {
    id: 'learning-piano-8',
    question: 'Think about Sunday evening or Monday morning. Complete these sentences: "The thought of committing to 30 minutes of practice 5 days a week makes me feel..." and "The version of me who plays piano is someone who..."',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 8
  },
  {
    id: 'learning-piano-9',
    question: 'Document 3 times in the past year when you said "I wish I could..." or "I\'ve always wanted to..." Write what you said, who you said it to, and what you did (or didn\'t do) about it afterward.',
    category: 'reflection',
    template_id: 'learning-piano',
    question_number: 9
  },
  // Research Questions (10-17) - research category
  {
    id: 'learning-piano-10',
    question: 'Research 3 different ways to access a piano or keyboard for practice. For each option, document: Type (acoustic piano, digital piano, keyboard, practice room, friend\'s piano), cost (purchase, rent, or free), space required, and what you\'d need to do this week to make it happen.',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 10
  },
  {
    id: 'learning-piano-11',
    question: 'Investigate 5 beginner piano learning resources (YouTube channels, apps, online courses, local teachers). For each, note: Teaching style (structured lessons, song-based, theory-heavy), cost, time commitment per week, and read 3 reviews about what frustrated students vs what they loved.',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 11
  },
  {
    id: 'learning-piano-12',
    question: 'Research the difference between acoustic pianos, digital pianos, and keyboards by watching comparison videos or visiting a music store. Document: What surprised you? Which sound did you prefer? Which features matter to you (weighted keys, portability, volume control)? What\'s realistic for your space and budget?',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 12
  },
  {
    id: 'learning-piano-13',
    question: 'Find 3 people in your extended network who play or have played piano (check Facebook, LinkedIn, ask friends). For each person, research or reach out to learn: How did they start? What resources did they use? What do they wish they\'d known at the beginning? If they stopped, why?',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 13
  },
  {
    id: 'learning-piano-14',
    question: 'Investigate local piano teachers by searching Google, asking on neighborhood groups, or visiting music schools. Document at least 3 options with: Lesson format (in-person, online, group), cost per lesson, teacher\'s background, and whether they offer trial lessons.',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 14
  },
  {
    id: 'learning-piano-15',
    question: 'Research time investment by watching 3 videos of adult beginners playing piano at the 3-month, 6-month, and 1-year mark. For each, note: What can they play? How does it sound? Does that level of progress feel exciting or disappointing to you? What does this tell you about realistic expectations?',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 15
  },
  {
    id: 'learning-piano-16',
    question: 'Create a list of physical setup needs by researching what beginners actually use. Document: Where will the instrument go? (measure the space), What accessories do you need? (bench, music stand, headphones, books), What\'s the total startup cost range (minimum vs ideal)?',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 16
  },
  {
    id: 'learning-piano-17',
    question: 'Research practice strategies by finding 3 sources (videos, articles, Reddit threads) from adult beginners sharing their practice routines. Document: How long do they practice? How often? What do they do in a session? What common mistakes or breakthroughs do they mention?',
    category: 'research',
    template_id: 'learning-piano',
    question_number: 17
  },
  // Planning Questions (18-27) - planning category
  {
    id: 'learning-piano-18',
    question: 'Map out your available practice time for the next month. Look at your actual calendar (not your ideal schedule) and mark: Which days have 30+ minutes you could realistically protect? What time of day? What currently fills that time? What would you need to move or say no to?',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 18
  },
  {
    id: 'learning-piano-19',
    question: 'Design your first-month learning path. Based on your research, write out: Week 1 goal (example: learn hand position and 3 notes), Week 2 goal, Week 3 goal, Week 4 goal. Make each goal specific enough that you\'d know if you achieved it.',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 19
  },
  {
    id: 'learning-piano-20',
    question: 'Plan your instrument decision. Write down: Your ideal choice (type of piano/keyboard), your realistic choice (considering budget/space), your absolute minimum (cheapest way to start this month), and your deadline for making this decision.',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 20
  },
  {
    id: 'learning-piano-21',
    question: 'Create your practice environment plan. Describe: Exact physical location where the instrument will go, what you need to move or buy to make that space work, how you\'ll minimize distractions there, and what will signal to your household that you\'re practicing.',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 21
  },
  {
    id: 'learning-piano-22',
    question: 'Outline your learning method strategy. Based on your research, decide: Will you start with a teacher, self-teach, or hybrid? Write your reasoning, your budget for this (per month), and when you\'ll reevaluate if it\'s working (specific date).',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 22
  },
  {
    id: 'learning-piano-23',
    question: 'Anticipate your obstacles. List 3 specific scenarios that would derail your practice in a typical week (late work day, family visit, illness, overwhelm). For each scenario, write: How likely is this? (1-10), what\'s my backup plan? When do I practice instead?',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 23
  },
  {
    id: 'learning-piano-24',
    question: 'Define what success looks like for you. Write down: In 3 months, I want to be able to... (specific piece or skill level). In 6 months, I want to... In 1 year, I want to... For each goal, explain why that particular milestone matters to you.',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 24
  },
  {
    id: 'learning-piano-25',
    question: 'Plan your motivation system. Think about what usually keeps you going with new habits. Write: How will you track progress? (journal, video recordings, app), who will you share this with? (accountability partner, teacher, online community, just yourself), what will you do when you feel like quitting?',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 25
  },
  {
    id: 'learning-piano-26',
    question: 'Design your first practice session structure. Break down 30 minutes into chunks: X minutes for warm-up/technique, X minutes for new material, X minutes for review/play. Make it specific enough that you could start tomorrow.',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 26
  },
  {
    id: 'learning-piano-27',
    question: 'Create your decision criteria for continuing vs pausing. Write: After 1 month, I\'ll continue if... (what has to be true). After 3 months, I\'ll continue if... What would make you pause or quit vs what would make you double down?',
    category: 'planning',
    template_id: 'learning-piano',
    question_number: 27
  },
  // Action Questions (28-35) - action category
  {
    id: 'learning-piano-28',
    question: 'Schedule your instrument research session. Write down: Specific date this week when you\'ll visit a music store or spend 2 hours researching keyboards online, what time, and what you need to prepare beforehand. Put it in your calendar right now.',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 28
  },
  {
    id: 'learning-piano-29',
    question: 'Make your first financial decision. Write down today: How much total are you willing to spend in month 1 to start (instrument + accessories + lessons)? What\'s your absolute maximum? Where will this money come from? (savings, budget reallocation, payment plan)',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 29
  },
  {
    id: 'learning-piano-30',
    question: 'Contact one real person who can help. Choose: A piano-playing friend to ask for advice, a teacher to inquire about lessons, or a music store to ask questions. Write exactly what you\'ll say/ask and when you\'ll do it (this week, specific day).',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 30
  },
  {
    id: 'learning-piano-31',
    question: 'Clear physical space for practice. This week, take these actions: Measure the space where an instrument would go, take a photo of that space, clear out what\'s currently there, and test sitting there for 30 minutes. Document: Does this location actually work? What needs to change?',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 31
  },
  {
    id: 'learning-piano-32',
    question: 'Book your trial session or start your first lesson. Take action: If going with a teacher, schedule a trial lesson for within 2 weeks. If self-teaching, buy/download your first learning resource and schedule your first 30-minute session. Write the exact date and time.',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 32
  },
  {
    id: 'learning-piano-33',
    question: 'Create your practice tracking system. Set up right now: A note on your phone, a spreadsheet, a journal, or an app where you\'ll log each practice session. Practice using it - write down today\'s date and "Planning session - 30 minutes" to start the record.',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 33
  },
  {
    id: 'learning-piano-34',
    question: 'Tell someone about your commitment. Choose one person you\'ll tell this week: "I\'m learning piano and I\'m practicing X times per week." Write who you\'ll tell, when, and what you want them to do (ask you about it weekly? nothing? celebrate with you after 1 month?).',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 34
  },
  {
    id: 'learning-piano-35',
    question: 'Schedule your first-month check-in. Put a calendar event exactly 30 days from today titled "Piano 1-month review." In your notes right now, write the questions you\'ll ask yourself then: What did I accomplish? How many times did I practice? Do I want to continue? What needs to change?',
    category: 'action',
    template_id: 'learning-piano',
    question_number: 35
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for learning-piano...`);

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
    .eq('template_id', 'learning-piano');

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
    console.log(`Foundation (reflection): ${counts.reflection} (${(counts.reflection / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action / verifyData.length * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
