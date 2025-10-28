import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (reflection)
  {
    id: 'learning-guitar-1',
    question: 'Write about 3 specific moments in the past year when you heard guitar music that gave you chills or made you stop what you were doing. What was playing? Where were you? What did you feel in your body?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 1
  },
  {
    id: 'learning-guitar-2',
    question: 'Reflect on the last time you tried to learn something completely new (not guitar - anything). What kept you going? What made you want to quit? When did you feel most frustrated, and what did you do about it?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 2
  },
  {
    id: 'learning-guitar-3',
    question: 'Think about your relationship with music throughout your life. When have you felt most connected to music? When have you felt disconnected? What patterns do you notice?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 3
  },
  {
    id: 'learning-guitar-4',
    question: 'Document the exact moment you decided you wanted to learn guitar. What triggered it? What were you doing right before? What story did you tell yourself about what learning guitar would mean?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 4
  },
  {
    id: 'learning-guitar-5',
    question: 'Write about someone you know personally who plays an instrument (any instrument). What do you admire about their relationship with music? What do you want to avoid from what you\'ve observed?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 5
  },
  {
    id: 'learning-guitar-6',
    question: 'Reflect on your current Sunday evenings. If you spent 30 minutes practicing guitar instead of what you usually do, what would you be giving up? How does that feel?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 6
  },
  {
    id: 'learning-guitar-7',
    question: 'Think about the last 3 times you committed to a new habit or skill. Which one stuck? Which ones faded? What made the difference - be specific about what was different in your daily life, not just your "motivation."',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 7
  },
  {
    id: 'learning-guitar-8',
    question: 'Document a time in the past 5 years when you felt proud of something you made or performed, even if no one else saw it. What made that moment meaningful? How long did it take to get there?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 8
  },
  {
    id: 'learning-guitar-9',
    question: 'Write about your relationship with mistakes and imperfection. Think of a specific recent situation where you made a mistake in front of others. What did you feel? What did you do? What does this tell you about how you might handle wrong notes?',
    category: 'reflection',
    template_id: 'learning-guitar',
    question_number: 9
  },
  // RESEARCH QUESTIONS
  {
    id: 'learning-guitar-10',
    question: 'Research 3 guitar players whose style you want to emulate. For each, watch one full performance and note: What specifically draws you to their playing? What do they do that you\'ve never seen before? What looks impossible vs. what looks achievable?',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 10
  },
  {
    id: 'learning-guitar-11',
    question: 'Document your current living space. Walk through each room and note: Where could you keep a guitar where you\'d see it every day? Where would you actually practice? What would you need to move or change? Take photos if helpful.',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 11
  },
  {
    id: 'learning-guitar-12',
    question: 'List every time slot in your typical week where you currently have 15+ minutes of unstructured time. For each slot, note what you usually do and how easy it would be to replace with practice. Be honest about which slots are realistic.',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 12
  },
  {
    id: 'learning-guitar-13',
    question: 'Research the cost of starting guitar. Create a budget breakdown: guitar ($X), accessories ($X), lessons/apps ($X/month). Compare this to your last 5 discretionary purchases over $50. What does this comparison tell you about priority?',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 13
  },
  {
    id: 'learning-guitar-14',
    question: 'Investigate 3 different learning methods (private lessons, apps like Yousician, YouTube, etc.). For each, find one real person\'s progress story and note: How long until they played a full song? What frustrated them? What kept them going?',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 14
  },
  {
    id: 'learning-guitar-15',
    question: 'Document your current finger dexterity. Try this: touch your thumb to each fingertip on the same hand, one at a time, as fast as you can for 30 seconds. Which hand is easier? Do your fingers feel coordinated or clumsy? How does this make you feel about learning guitar?',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 15
  },
  {
    id: 'learning-guitar-16',
    question: 'Research local guitar communities. Find 3 places (online or in-person) where guitarists at your level gather. Join their space and observe for a week. What do beginners talk about? What questions do they ask? What excites or intimidates you?',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 16
  },
  {
    id: 'learning-guitar-17',
    question: 'List the last 5 products or services you paid for monthly subscriptions. Which ones do you use weekly? Which ones do you forget about? What pattern does this reveal about how you\'ll need to approach committing to lessons or practice apps?',
    category: 'research',
    template_id: 'learning-guitar',
    question_number: 17
  },
  // PLANNING QUESTIONS
  {
    id: 'learning-guitar-18',
    question: 'Create a vision of yourself 6 months from now. Write the scene in detail: Where are you playing? Who\'s listening (even if just you)? What song are you playing? How do your hands feel on the guitar? What expression is on your face?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 18
  },
  {
    id: 'learning-guitar-19',
    question: 'Plan your first-week practice schedule. For each day, specify: exact time, exact duration (be realistic - even 10 minutes counts), what you\'ll practice, and what you\'ll do immediately after to celebrate/wind down.',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 19
  },
  {
    id: 'learning-guitar-20',
    question: 'Design your guitar space. Sketch or describe: Where will the guitar sit? What will you see from your practice spot? What needs to be different from that space now? How will you make it inviting, not intimidating?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 20
  },
  {
    id: 'learning-guitar-21',
    question: 'Map out your frustration tolerance strategy. Think about your worst day in the next month - you\'re tired, the chord won\'t sound right, your fingers hurt. Write exactly what you\'ll do: Will you push through? Take a break? Do something specific? Who could you text?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 21
  },
  {
    id: 'learning-guitar-22',
    question: 'Plan your first song goal. Choose one specific song you want to play in 3 months. Break it down: What makes this song meaningful to you? What skills does it require? What\'s a simpler version you could master first?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 22
  },
  {
    id: 'learning-guitar-23',
    question: 'Create your progress tracking system. Decide: Will you video yourself weekly? Keep a practice journal? Use an app? What specific metrics will you track? What will tell you you\'re improving when everything feels hard?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 23
  },
  {
    id: 'learning-guitar-24',
    question: 'Design your accountability structure. Will you tell someone about your goal? Schedule practice with a friend? Join a beginner group? Share videos? Or keep it private? Write why that choice matches how you work best.',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 24
  },
  {
    id: 'learning-guitar-25',
    question: 'Plan for the 3-week slump. Most people hit resistance around week 3. Write now: What will you tell yourself then? What small win will you aim for? What will you do differently if you miss 3 days in a row?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 25
  },
  {
    id: 'learning-guitar-26',
    question: 'Map your milestone celebrations. Choose 3 specific milestones (first clean chord, first full song, first time playing for someone) and plan: How will you mark each one? What will make it feel real and worth continuing?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 26
  },
  {
    id: 'learning-guitar-27',
    question: 'Develop your practice evolution plan. Start with where you are now. How will your practice change at 1 month? 3 months? 6 months? What will you add? What will you phase out? How will you know when to level up?',
    category: 'planning',
    template_id: 'learning-guitar',
    question_number: 27
  },
  // ACTION QUESTIONS
  {
    id: 'learning-guitar-28',
    question: 'Schedule your first guitar purchase or rental. Choose a specific date this week when you\'ll go to a music store or order online. Write: What day? What time? What\'s your budget limit? Who will you bring or tell afterward?',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 28
  },
  {
    id: 'learning-guitar-29',
    question: 'Commit to your first learning resource. Today, choose ONE method (teacher, app, YouTube channel) and sign up or schedule. Write what you chose and why, then set a reminder to use it within 48 hours.',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 29
  },
  {
    id: 'learning-guitar-30',
    question: 'Create your Week 1 practice anchor. Pick the one time slot from your research that\'s most realistic. Set a recurring phone alarm for that time with a specific message you wrote. What will the alarm say?',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 30
  },
  {
    id: 'learning-guitar-31',
    question: 'Document your baseline. Before you start, record yourself (video or audio) trying to play anything on a guitar - borrow one if needed. Or write what you think it will feel like. You\'ll watch/read this in 3 months.',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 31
  },
  {
    id: 'learning-guitar-32',
    question: 'Set up your first accountability check-in. Text or email someone right now: "I\'m learning guitar. Can I send you a 10-second clip in 2 weeks?" Send this message before moving to the next question.',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 32
  },
  {
    id: 'learning-guitar-33',
    question: 'Create your day-1 celebration ritual. Decide exactly what you\'ll do after your first practice session - even if it\'s 5 minutes. Write it down. Make it specific and something you\'ll actually look forward to.',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 33
  },
  {
    id: 'learning-guitar-34',
    question: 'Build your quit-prevention tool. Write a note to your future self for the moment you want to quit (you will have this moment). What will you need to hear? Put this note where you\'ll practice.',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 34
  },
  {
    id: 'learning-guitar-35',
    question: 'Take your first micro-action today. Before bed tonight, do ONE guitar-related thing: watch one 5-minute video, touch a guitar, practice finger exercises, or read about your first chord. Write what you\'ll do and when.',
    category: 'action',
    template_id: 'learning-guitar',
    question_number: 35
  }
];

async function main() {
  console.log('Inserting questions for learning-guitar...');

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

  console.log('\nVerifying insertion...');
  const { data, error } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'learning-guitar');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    console.log(`\nTotal questions inserted: ${data.length}`);

    // Count by category
    const counts = data.reduce((acc: any, q: any) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});

    console.log('\nBreakdown by category:');
    Object.entries(counts).forEach(([category, count]) => {
      const percentage = ((count as number) / data.length * 100).toFixed(1);
      console.log(`  ${category}: ${count} (${percentage}%)`);
    });
  }
}

main();
