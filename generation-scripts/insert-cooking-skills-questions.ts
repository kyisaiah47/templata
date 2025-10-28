import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const questions = [
    // FOUNDATION QUESTIONS (reflection)
    {
      id: 'cooking-skills-1',
      question: 'Write about the last 5 meals you cooked at home. For each, note: Did you feel confident or stressed? What went well? What frustrated you? What patterns do you notice?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 1
    },
    {
      id: 'cooking-skills-2',
      question: 'Think back to 3 specific moments in the past year when you felt proud of something you cooked. What made those moments special? What were you doing differently than usual?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 2
    },
    {
      id: 'cooking-skills-3',
      question: 'Document 3 times recently when you avoided cooking or ordered takeout instead. What was going through your mind? What specific barrier stopped you from cooking?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 3
    },
    {
      id: 'cooking-skills-4',
      question: 'Reflect on your earliest cooking memories - whether cooking yourself or watching someone cook. What feelings come up? How do those early experiences show up in your cooking today?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 4
    },
    {
      id: 'cooking-skills-5',
      question: 'List 5 dishes you wish you could make confidently. For each, note: Why this dish? Who would you cook it for? What\'s stopping you from trying it now?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 5
    },
    {
      id: 'cooking-skills-6',
      question: 'Write about a time when cooking felt joyful or meditative rather than stressful. What were the circumstances? Who were you cooking for? What made it feel different?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 6
    },
    {
      id: 'cooking-skills-7',
      question: 'Think about the cook you admire most (could be family, friend, chef, content creator). What specific qualities do they have that you want to develop? Be specific about skills, not just "they\'re good at cooking."',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 7
    },
    {
      id: 'cooking-skills-8',
      question: 'Document your Sunday evening feelings about the week ahead of meals. What specific thought or worry comes up about feeding yourself this week? When did this pattern start?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 8
    },
    {
      id: 'cooking-skills-9',
      question: 'Reflect on 3 cooking "failures" that still stick with you. What went wrong? What did you tell yourself afterward? How do these moments still influence what you\'re willing to try?',
      category: 'reflection',
      template_id: 'cooking-skills',
      question_number: 9
    },

    // RESEARCH QUESTIONS
    {
      id: 'cooking-skills-10',
      question: 'Inventory your kitchen tools and note: Which ones do you use weekly? Which haven\'t you touched in 6 months? Which tools do you reach for when feeling confident vs. when taking shortcuts?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 10
    },
    {
      id: 'cooking-skills-11',
      question: 'Research 3 cooking techniques you see in recipes but don\'t fully understand (like "sauté until translucent" or "fold in gently"). For each, find one video demonstration and note what you learned that text instructions missed.',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 11
    },
    {
      id: 'cooking-skills-12',
      question: 'Document your current pantry staples - what you always have on hand. Then look at 3 recipes you want to make: what ingredients keep appearing that you don\'t stock? What pattern does this reveal?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 12
    },
    {
      id: 'cooking-skills-13',
      question: 'Track your cooking time for the next 3 meals you make. For each, note: prep time, active cooking time, and when you felt rushed vs. in control. What does your time data tell you?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 13
    },
    {
      id: 'cooking-skills-14',
      question: 'Explore 3 cooking resources (YouTube channels, blogs, cookbooks, Instagram accounts) that appeal to you. For each, note: What style resonates? What makes their teaching click? What\'s one specific thing you learned?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 14
    },
    {
      id: 'cooking-skills-15',
      question: 'Research the 5 ingredients you use most often. For each, look up: ideal storage method, how to tell when it\'s gone bad, one technique for maximizing flavor. What did you learn that surprised you?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 15
    },
    {
      id: 'cooking-skills-16',
      question: 'Browse 10 recipes that interest you. For each, identify the core technique (roasting, braising, sautéing, etc.). What techniques show up most? Which ones are you avoiding?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 16
    },
    {
      id: 'cooking-skills-17',
      question: 'Document your meal timing patterns for the past week: When did you eat? When did you cook? When were you hungriest? What does this tell you about when you should actually be cooking?',
      category: 'research',
      template_id: 'cooking-skills',
      question_number: 17
    },

    // PLANNING QUESTIONS
    {
      id: 'cooking-skills-18',
      question: 'Design your "minimum viable meal" - the simplest thing you could make when exhausted that still feels nourishing. What ingredients? What technique? How can you make this so easy you\'ll actually do it?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 18
    },
    {
      id: 'cooking-skills-19',
      question: 'Map out your skill progression: Pick 3 techniques to master in sequence, from foundation to advanced. For each, note: Why this order? What does each unlock? What\'s your practice plan?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 19
    },
    {
      id: 'cooking-skills-20',
      question: 'Plan your "cooking confidence ladder" - identify 5 dishes ranging from "I could make this half-asleep" to "this would really stretch me." What makes each step up feel like the right challenge level?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 20
    },
    {
      id: 'cooking-skills-21',
      question: 'Create your ideal weekly cooking rhythm based on your actual schedule. Which days have time for experimenting? Which need quick meals? When could you batch cook? Be realistic about your energy levels.',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 21
    },
    {
      id: 'cooking-skills-22',
      question: 'Design a system for using recipes: How will you decide when to follow exactly vs. when to improvise? What criteria tell you a recipe matches your skill level? How will you capture what you learn?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 22
    },
    {
      id: 'cooking-skills-23',
      question: 'Plan how you\'ll build your pantry over time. If you could only add one ingredient per week, what order would you add them in? What would each new ingredient let you make that you can\'t now?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 23
    },
    {
      id: 'cooking-skills-24',
      question: 'Map your "cooking mistakes budget" - where are you willing to fail as you learn? How much money/time can you spend on experiments that might not work? What makes a failure worthwhile vs. demoralizing?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 24
    },
    {
      id: 'cooking-skills-25',
      question: 'Strategize how you\'ll cook when motivation is low. What\'s your system for these moments? What shortcuts are acceptable to you? What constitutes "good enough"?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 25
    },
    {
      id: 'cooking-skills-26',
      question: 'Plan your recipe testing approach: How will you try new dishes? Will you cook them alone first or for others? How will you track what worked? What\'s your "retry with changes" vs "never again" criteria?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 26
    },
    {
      id: 'cooking-skills-27',
      question: 'Design your learning environment: What needs to change in your kitchen setup, grocery routine, or schedule to make skill-building easier? What\'s one change that would remove the biggest current friction?',
      category: 'planning',
      template_id: 'cooking-skills',
      question_number: 27
    },

    // ACTION QUESTIONS
    {
      id: 'cooking-skills-28',
      question: 'Choose one technique you\'re avoiding and commit to practicing it 3 times this week. Document: What are you making? What specific aspect are you focusing on? How will you know you\'re improving?',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 28
    },
    {
      id: 'cooking-skills-29',
      question: 'Pick a dish you make regularly and experiment with one variation this week. Change one ingredient, technique, or seasoning. Document what you tried and what you learned about the dish and your palate.',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 29
    },
    {
      id: 'cooking-skills-30',
      question: 'Identify one cooking skill you want to master and create a 30-day practice plan. What will you cook each week? How will you increase difficulty? What progress markers will tell you you\'re improving?',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 30
    },
    {
      id: 'cooking-skills-31',
      question: 'Schedule your cooking sessions for next week right now. Block calendar time, decide what you\'re making, ensure you have ingredients. Make cooking an appointment you keep with yourself.',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 31
    },
    {
      id: 'cooking-skills-32',
      question: 'Choose one trusted recipe that intimidates you and break it down. What\'s the scariest step? Research that specific technique. Then commit to attempting this recipe within two weeks - set the date.',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 32
    },
    {
      id: 'cooking-skills-33',
      question: 'Start a cooking log for your next 10 meals. For each, quickly note: What you made, what went well, what you\'d change, how confident you felt (1-10). Track your pattern over time.',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 33
    },
    {
      id: 'cooking-skills-34',
      question: 'Commit to one "low-stakes experiment" this week - try a new ingredient, technique, or cuisine with no pressure for it to be perfect. Choose something where failure is cheap and fast. Document what happened.',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 34
    },
    {
      id: 'cooking-skills-35',
      question: 'Create your "cooking wins" collection. This week, take photos of 3 meals you\'re proud of - even if simple. Start building evidence that you can cook, for the moments when confidence dips.',
      category: 'action',
      template_id: 'cooking-skills',
      question_number: 35
    }
  ];

  console.log(`Inserting ${questions.length} questions for cooking-skills...`);

  for (const q of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(q);

    if (error) {
      console.error(`Error inserting question ${q.id}:`, error);
      process.exit(1);
    } else {
      console.log(`✓ Inserted: ${q.id}`);
    }
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'cooking-skills');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    const counts = data.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\n=== Verification ===');
    console.log(`Total questions: ${data.length}`);
    console.log('Breakdown by category:');
    Object.entries(counts).forEach(([cat, count]) => {
      const pct = ((count / data.length) * 100).toFixed(1);
      console.log(`  ${cat}: ${count} (${pct}%)`);
    });
  }
}

main();
