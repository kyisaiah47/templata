import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (14 questions - 25%)
  {
    id: 'weight-loss-journey-1',
    question: 'Think about the last time you felt truly comfortable and confident in your body. When was it? What was different then - your habits, mindset, life circumstances, or relationships?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 1
  },
  {
    id: 'weight-loss-journey-2',
    question: 'Write about your earliest memory of thinking about your weight or body. What triggered it? Who was involved? How did that moment shape how you see yourself now?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 2
  },
  {
    id: 'weight-loss-journey-3',
    question: 'Recall 3 times in the past year when you ate for emotional reasons (stress, boredom, celebration, sadness). What were you actually feeling? What did eating give you in those moments?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 3
  },
  {
    id: 'weight-loss-journey-4',
    question: 'Document every weight loss attempt you\'ve made in your life. For each: What method? How long did it last? What made you stop? What pattern do you notice across all attempts?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 4
  },
  {
    id: 'weight-loss-journey-5',
    question: 'Think about someone you know who maintains a healthy weight effortlessly. What specifically do they do differently? What beliefs do they seem to have about food and exercise that you don\'t?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 5
  },
  {
    id: 'weight-loss-journey-6',
    question: 'Reflect on your relationship with the scale. Do you avoid it? Weigh daily? Feel controlled by the number? When did this relationship start and what does it tell you about your mindset?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 6
  },
  {
    id: 'weight-loss-journey-7',
    question: 'Write about a time when you stuck to healthy habits successfully (even if just for a week or month). What made it work then? What was different about your motivation, environment, or support?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 7
  },
  {
    id: 'weight-loss-journey-8',
    question: 'Think about your "trigger foods" - the ones you can\'t stop eating once you start. For each one: When do you crave it? What emotion precedes the craving? What does eating it give you emotionally?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 8
  },
  {
    id: 'weight-loss-journey-9',
    question: 'Reflect on how you talk to yourself about your body. Write down the exact phrases you use in your head. Would you ever speak to a friend this way? Where did these voices come from?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 9
  },
  {
    id: 'weight-loss-journey-10',
    question: 'Recall moments in the past month when you felt physically good in your body (energized, strong, capable). What were you doing? What had you eaten? What does this tell you about what "healthy" feels like for YOU?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 10
  },
  {
    id: 'weight-loss-journey-11',
    question: 'Think about your relationship with exercise. Write about your earliest gym/sports memories. Were they positive or shameful? How do those experiences affect your current willingness to move your body?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 11
  },
  {
    id: 'weight-loss-journey-12',
    question: 'Document the times of day or situations when you\'re most vulnerable to overeating or unhealthy choices. What pattern emerges? What\'s the common thread - time, emotion, people, or environment?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 12
  },
  {
    id: 'weight-loss-journey-13',
    question: 'Reflect on what "success" would actually feel like, beyond a number on the scale. How would you move through your day differently? What would you stop thinking about? What new possibilities would open up?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 13
  },
  {
    id: 'weight-loss-journey-14',
    question: 'Write about the part of you that resists weight loss. What does it fear? What does staying the same protect you from? What would you have to give up or face if you succeeded?',
    category: 'reflection',
    template_id: 'weight-loss-journey',
    question_number: 14
  },

  // RESEARCH QUESTIONS (12 questions - 22%)
  {
    id: 'weight-loss-journey-15',
    question: 'Track everything you eat and drink for 3 consecutive days (including weekends). For each item note: What time? How hungry were you (1-10)? What were you feeling? Were you eating alone or with others?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 15
  },
  {
    id: 'weight-loss-journey-16',
    question: 'Document your current physical measurements: weight, body fat percentage (if accessible), waist circumference, and how your clothes fit. Take progress photos from front, side, and back. Where will you store these privately?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 16
  },
  {
    id: 'weight-loss-journey-17',
    question: 'Research your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using online calculators. What\'s your current estimated caloric intake vs. what you need? What\'s the gap?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 17
  },
  {
    id: 'weight-loss-journey-18',
    question: 'List all the physical activities you currently do in a typical week. For each: How many minutes? How does it make you feel physically and emotionally? What\'s your consistency level (1-10)?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 18
  },
  {
    id: 'weight-loss-journey-19',
    question: 'Audit your current eating environment. What foods are visible in your home? What\'s in your fridge, pantry, desk drawer? How many steps to healthy vs. unhealthy options? What needs to change?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 19
  },
  {
    id: 'weight-loss-journey-20',
    question: 'Research 5 physical activities that interest you (not "should" interest you). For each: What appeals to you? What\'s the barrier to starting? What would it cost in time and money?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 20
  },
  {
    id: 'weight-loss-journey-21',
    question: 'Document your sleep patterns for a week: Hours slept, sleep quality (1-10), energy levels next day. What correlation do you notice between sleep and your eating or exercise choices?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 21
  },
  {
    id: 'weight-loss-journey-22',
    question: 'List everyone in your life who would be affected by your weight loss journey. For each person: Will they be supportive, neutral, or potentially undermining? What specific behaviors might you encounter?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 22
  },
  {
    id: 'weight-loss-journey-23',
    question: 'Track your water intake for 3 days. How much are you actually drinking? When do you drink most? What do you drink instead of water? What\'s your pattern?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 23
  },
  {
    id: 'weight-loss-journey-24',
    question: 'Identify all your current health conditions, medications, or physical limitations that might affect weight loss. For each: How does it impact your options? Do you need medical clearance before certain activities?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 24
  },
  {
    id: 'weight-loss-journey-25',
    question: 'Research your family health history related to weight, diabetes, heart disease, or metabolism issues. What genetic factors might you be working with? What does this mean for your approach?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 25
  },
  {
    id: 'weight-loss-journey-26',
    question: 'Document your current stress levels and coping mechanisms. Rate your stress (1-10). What are your top 3 stressors? How do you currently cope? Which coping mechanisms involve food?',
    category: 'research',
    template_id: 'weight-loss-journey',
    question_number: 26
  },

  // PLANNING QUESTIONS (15 questions - 28%)
  {
    id: 'weight-loss-journey-27',
    question: 'Design your specific, measurable weight loss goal. What\'s your target weight? By when? What\'s a healthy weekly loss rate for you? Break it into monthly milestones that feel achievable.',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 27
  },
  {
    id: 'weight-loss-journey-28',
    question: 'Create your "why hierarchy" - list every reason you want to lose weight, then rank them by which would sustain you through hard times. What\'s your #1 reason that goes deeper than appearance?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 28
  },
  {
    id: 'weight-loss-journey-29',
    question: 'Plan your nutrition approach based on your research. What eating pattern feels sustainable for you (calorie counting, portion control, meal planning, intuitive eating)? Why will THIS work when others didn\'t?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 29
  },
  {
    id: 'weight-loss-journey-30',
    question: 'Design your realistic exercise routine. What activities will you do? Which days? What time? How will you start small enough that you\'ll actually do it consistently?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 30
  },
  {
    id: 'weight-loss-journey-31',
    question: 'Map out your high-risk situations for the next month (parties, work events, family dinners, travel). For each: What\'s your specific plan? What will you eat? How will you handle pressure?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 31
  },
  {
    id: 'weight-loss-journey-32',
    question: 'Create your environmental design plan. What will you remove from your space? What will you add? How will you make healthy choices the easiest choice in your daily environment?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 32
  },
  {
    id: 'weight-loss-journey-33',
    question: 'Plan your tracking system. What will you track (food, exercise, weight, measurements, mood)? How often? What tool will you use? When specifically will you do the tracking each day?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 33
  },
  {
    id: 'weight-loss-journey-34',
    question: 'Design your "emergency protocol" for emotional eating urges. What will you do when the craving hits? What 3 alternatives can you try? Who can you call? What reminder will you give yourself?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 34
  },
  {
    id: 'weight-loss-journey-35',
    question: 'Create your weekly meal planning system. Which day will you plan? Which day will you shop? Will you meal prep? What\'s realistic for your schedule and cooking ability?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 35
  },
  {
    id: 'weight-loss-journey-36',
    question: 'Plan how you\'ll handle social eating situations. What will you say when offered food you don\'t want? How will you handle questions about your choices? What boundaries feel right for you?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 36
  },
  {
    id: 'weight-loss-journey-37',
    question: 'Design your plateau protocol. When weight loss stalls (it will), what will you do? How long will you wait before adjusting? What metrics besides the scale will you track?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 37
  },
  {
    id: 'weight-loss-journey-38',
    question: 'Create your "get back on track" plan for when you have a bad day or week. What specific steps will you take? How will you talk to yourself? What will prevent the shame spiral?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 38
  },
  {
    id: 'weight-loss-journey-39',
    question: 'Plan your support system. Who will you tell about your goals? What specific support do you need (accountability, meal prep buddy, workout partner, someone to vent to)? How will you ask for it?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 39
  },
  {
    id: 'weight-loss-journey-40',
    question: 'Design your reward system for non-scale victories. What will you celebrate (workout consistency, measurements, energy levels, new habits)? What rewards are meaningful to you that don\'t involve food?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 40
  },
  {
    id: 'weight-loss-journey-41',
    question: 'Create your long-term maintenance plan. Once you reach your goal, what will change? What habits will you keep? How will you prevent regaining? What does "maintenance mode" look like?',
    category: 'planning',
    template_id: 'weight-loss-journey',
    question_number: 41
  },

  // ACTION QUESTIONS (14 questions - 25%)
  {
    id: 'weight-loss-journey-42',
    question: 'Schedule a comprehensive health checkup with your doctor this week. Call right now and book it. What date did you book? What specific questions will you ask about your weight loss plan?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 42
  },
  {
    id: 'weight-loss-journey-43',
    question: 'Set up your tracking tool today. Whether it\'s an app (MyFitnessPal, Lose It), spreadsheet, or journal - download or create it right now. Then log everything you eat today.',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 43
  },
  {
    id: 'weight-loss-journey-44',
    question: 'Clean out your kitchen tonight. Remove or relocate 5 foods that trigger overeating. What did you remove? Where did you put them or who did you give them to? How does your space feel now?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 44
  },
  {
    id: 'weight-loss-journey-45',
    question: 'Do one form of physical activity today, even if just for 10 minutes. What did you do? How did you feel during and after? What made you choose that specific activity?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 45
  },
  {
    id: 'weight-loss-journey-46',
    question: 'Take your baseline measurements and photos today. Weight, waist, hips, chest, and photos from 3 angles. Where will you store these privately? When will you take progress photos next?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 46
  },
  {
    id: 'weight-loss-journey-47',
    question: 'Tell one supportive person about your weight loss goal this week. Who will you tell? When will you tell them? What specific support will you ask for? Schedule this conversation now.',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 47
  },
  {
    id: 'weight-loss-journey-48',
    question: 'Plan and shop for your meals for the next 3 days. Write your meal plan right now. Make your grocery list. When will you shop? What\'s your backup plan if you can\'t cook?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 48
  },
  {
    id: 'weight-loss-journey-49',
    question: 'Create a visual reminder of your "why" and put it somewhere you\'ll see daily. What did you create (vision board, photo, note)? Where did you put it? What will you feel when you see it?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 49
  },
  {
    id: 'weight-loss-journey-50',
    question: 'Schedule your exercise for next week right now. Put specific times in your calendar for each workout. Treat these like non-negotiable appointments. What days and times did you block off?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 50
  },
  {
    id: 'weight-loss-journey-51',
    question: 'Implement one "friction" strategy today to make unhealthy choices harder: delete food delivery apps, put treats in opaque containers, or prep healthy snacks. What did you implement?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 51
  },
  {
    id: 'weight-loss-journey-52',
    question: 'Start a weight loss journal today. Write your first entry: What\'s your current state? How do you feel? What are you hopeful about? What are you scared of? Set a reminder to write weekly.',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 52
  },
  {
    id: 'weight-loss-journey-53',
    question: 'Practice one mindful eating technique at your next meal. Eat without screens, chew slowly, put your fork down between bites. What did you notice? What was hard? What felt different?',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 53
  },
  {
    id: 'weight-loss-journey-54',
    question: 'Set up your weekly check-in ritual. Choose a specific day and time each week to review progress, take measurements, and plan ahead. What day and time did you choose? Put it in your calendar now.',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 54
  },
  {
    id: 'weight-loss-journey-55',
    question: 'Commit to your plan for the next 30 days. Write a contract to yourself: What will you do daily? What will you track? How will you measure success beyond the scale? Sign and date it.',
    category: 'action',
    template_id: 'weight-loss-journey',
    question_number: 55
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for weight-loss-journey guide...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✓ Successfully inserted all questions');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'weight-loss-journey');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
    process.exit(1);
  }

  const counts = verifyData.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\nBreakdown by category:');
  console.log(`- Reflection (Foundation): ${counts.reflection || 0} questions (${Math.round((counts.reflection || 0) / questions.length * 100)}%)`);
  console.log(`- Research: ${counts.research || 0} questions (${Math.round((counts.research || 0) / questions.length * 100)}%)`);
  console.log(`- Planning: ${counts.planning || 0} questions (${Math.round((counts.planning || 0) / questions.length * 100)}%)`);
  console.log(`- Action: ${counts.action || 0} questions (${Math.round((counts.action || 0) / questions.length * 100)}%)`);
  console.log(`\nTotal: ${verifyData.length} questions`);
}

insertQuestions();
