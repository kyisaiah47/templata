import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-9) - Reflection
  {
    id: 'gardening-1',
    question: 'Write about 3 specific moments from your childhood or past when you remember being outside with plants or nature. What were you doing? Who were you with? What do you remember feeling or noticing?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 1
  },
  {
    id: 'gardening-2',
    question: 'Reflect on the last time you ate something really fresh - from a farmers market, a friend\'s garden, or homegrown. What made it different from store-bought? What did you notice about the taste, texture, or experience?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 2
  },
  {
    id: 'gardening-3',
    question: 'Document the plants currently in your life (houseplants, trees you pass, parks you visit). For each, note: how did it get there? Do you notice it daily or forget it exists? What does this pattern tell you about your relationship with plants?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 3
  },
  {
    id: 'gardening-4',
    question: 'Think about the past year. Write about 2-3 times when you felt most calm, grounded, or present. Where were you? Was nature or outdoor space part of that moment? What does this tell you about what you\'re looking for in a garden?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 4
  },
  {
    id: 'gardening-5',
    question: 'Reflect on your current eating habits. List 5 vegetables or herbs you use most often. For each: do you actually like it, or just tolerate it? Have you ever seen it growing? What would change if you grew it yourself?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 5
  },
  {
    id: 'gardening-6',
    question: 'Write about someone you know (or know of) who gardens. What do you admire about their garden or approach? What do you definitely NOT want to replicate? What does your reaction tell you about your own garden vision?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 6
  },
  {
    id: 'gardening-7',
    question: 'Document your past attempts at keeping things alive - plants, pets, sourdough starter, anything. What died? What thrived? What pattern do you notice about what helps you stay consistent vs what makes you lose interest?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 7
  },
  {
    id: 'gardening-8',
    question: 'Think about Sunday mornings or your most relaxed time of week. Write down what you currently do during that time. Now imagine: could you see yourself spending 20 minutes in a garden during that time? What would need to be true for that to feel restorative rather than like another chore?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 8
  },
  {
    id: 'gardening-9',
    question: 'Reflect on the last 5 times you bought fresh produce, flowers, or plants. Which purchases made you happy? Which felt wasteful? What were you hoping for when you bought them vs what actually happened?',
    category: 'reflection',
    template_id: 'gardening',
    question_number: 9
  },
  // Research Questions (10-17)
  {
    id: 'gardening-10',
    question: 'Research your specific growing zone (USDA hardiness zone) using your zip code. Write down: your zone number, average last frost date, average first frost date, and length of growing season. What does this mean for what you can grow?',
    category: 'research',
    template_id: 'gardening',
    question_number: 10
  },
  {
    id: 'gardening-11',
    question: 'Document your available space with specifics. For each potential garden spot (yard, balcony, windowsill): measure the dimensions, note sun exposure throughout one full day (morning, midday, evening), observe where water pools after rain. What are you actually working with?',
    category: 'research',
    template_id: 'gardening',
    question_number: 11
  },
  {
    id: 'gardening-12',
    question: 'Research 3 local resources for gardeners in your area: community gardens, local nurseries, gardening clubs, or extension offices. For each, note: distance from you, what they offer, cost, and whether they seem beginner-friendly. Which feels most accessible to you?',
    category: 'research',
    template_id: 'gardening',
    question_number: 12
  },
  {
    id: 'gardening-13',
    question: 'Identify 5 plants that are recommended for beginners in your specific growing zone. For each, research: how long until harvest/bloom, how much space needed, water needs, and what commonly kills it. Which sounds both achievable AND exciting to you?',
    category: 'research',
    template_id: 'gardening',
    question_number: 13
  },
  {
    id: 'gardening-14',
    question: 'Research the soil situation in your area. Look up: your region\'s native soil type, common deficiencies, and whether soil testing is available locally. If you\'re container gardening, research 3 potting soil options and their prices. What\'s the reality of what you\'ll need to buy or amend?',
    category: 'research',
    template_id: 'gardening',
    question_number: 14
  },
  {
    id: 'gardening-15',
    question: 'Document your current schedule over the next week. Write down: when you have 15-30 minute blocks of free time, which blocks feel energizing vs draining, when you\'re actually outside. Based on this, when would garden time realistically happen?',
    category: 'research',
    template_id: 'gardening',
    question_number: 15
  },
  {
    id: 'gardening-16',
    question: 'Research water access for your potential garden space. Note: where\'s the nearest spigot or water source, how far would you carry watering cans, is drip irrigation or soaker hoses an option, what would setup cost. What\'s the easiest way to actually keep plants watered in YOUR situation?',
    category: 'research',
    template_id: 'gardening',
    question_number: 16
  },
  {
    id: 'gardening-17',
    question: 'Look up what\'s growing RIGHT NOW in your area. Check local farmers markets, ask neighbors what\'s in their garden, or search "[your city] + seasonal planting calendar." What could you plant this month? What do you need to wait for?',
    category: 'research',
    template_id: 'gardening',
    question_number: 17
  },
  // Planning Questions (18-27)
  {
    id: 'gardening-18',
    question: 'Based on your space research, sketch or describe your ideal garden layout. Be specific: what goes where, how many plants, paths or access points, containers or ground. Don\'t design your dream garden - design what would actually work in YOUR specific space.',
    category: 'planning',
    template_id: 'gardening',
    question_number: 18
  },
  {
    id: 'gardening-19',
    question: 'Create your garden priority list. Rank these goals in order of importance to you: grow food you\'ll actually eat, create beautiful space, learn a new skill, get outside more, save money on groceries, connect with neighbors, relax/meditate. Your top 3 priorities will guide every decision.',
    category: 'planning',
    template_id: 'gardening',
    question_number: 19
  },
  {
    id: 'gardening-20',
    question: 'Plan your starter list. Based on your research, write down exactly 3-5 plants you\'ll start with (not 20, not "lots of tomatoes" - specific varieties and quantities). For each, explain: why this one first, where it will go, when you\'ll plant it.',
    category: 'planning',
    template_id: 'gardening',
    question_number: 20
  },
  {
    id: 'gardening-21',
    question: 'Design your failure recovery plan. Write down: what will you do when (not if) something dies or fails? How will you figure out what went wrong? Who will you ask for help? What would make you quit entirely vs try again?',
    category: 'planning',
    template_id: 'gardening',
    question_number: 21
  },
  {
    id: 'gardening-22',
    question: 'Map out your startup timeline. Write down specific dates for: buying supplies, prepping space, planting first seeds/transplants, expected first harvest or bloom. Base this on the real calendar, your schedule, and your research - not fantasy timing.',
    category: 'planning',
    template_id: 'gardening',
    question_number: 22
  },
  {
    id: 'gardening-23',
    question: 'Calculate your startup budget. List everything you need to buy for your FIRST season: seeds/plants, containers or raised bed materials, soil, tools, fertilizer, water setup. Price each item. Write down your total, then your "absolute minimum" version. What\'s realistic for you to spend?',
    category: 'planning',
    template_id: 'gardening',
    question_number: 23
  },
  {
    id: 'gardening-24',
    question: 'Plan for your knowledge gaps. Write down the 3 biggest things you don\'t know how to do yet (transplant seedlings, deal with pests, know when to harvest, etc.). For each, write: how will you learn this - YouTube, book, asking someone, trial and error?',
    category: 'planning',
    template_id: 'gardening',
    question_number: 24
  },
  {
    id: 'gardening-25',
    question: 'Design your garden routine. Based on your schedule research, write out what a typical week of garden care looks like: which days you\'ll water, when you\'ll weed, weekend time for bigger tasks. Make it specific enough that you could actually follow it.',
    category: 'planning',
    template_id: 'gardening',
    question_number: 25
  },
  {
    id: 'gardening-26',
    question: 'Consider your backup systems. Write down: if you go on vacation, who waters? If you get sick for a week, what dies vs survives? If it rains for 10 days straight, where does water go? What backup plan feels realistic vs what\'s wishful thinking?',
    category: 'planning',
    template_id: 'gardening',
    question_number: 26
  },
  {
    id: 'gardening-27',
    question: 'Plan your success metrics. Complete this: "I\'ll consider my first garden season successful if I _____." Write 3 different versions: best case scenario, realistic case, and minimum viable success. Which one would actually make you feel good?',
    category: 'planning',
    template_id: 'gardening',
    question_number: 27
  },
  // Action Questions (28-35)
  {
    id: 'gardening-28',
    question: 'Take photos or measurements today. Document your garden space from multiple angles, at different times of day if possible. Save these dated photos. You\'ll reference them constantly and be amazed looking back.',
    category: 'action',
    template_id: 'gardening',
    question_number: 28
  },
  {
    id: 'gardening-29',
    question: 'Schedule your first garden work session. Write down: specific date and time (in the next 2 weeks), what you\'ll do (measure space, buy first supplies, prep soil), how long you\'ll spend. Put it in your calendar right now with everything you need to bring.',
    category: 'action',
    template_id: 'gardening',
    question_number: 29
  },
  {
    id: 'gardening-30',
    question: 'Order or buy your first round of seeds or starter plants this week. Based on your starter list, make the purchase. Write down: where you bought from, what you got, total cost, when they should arrive or when you\'ll pick up.',
    category: 'action',
    template_id: 'gardening',
    question_number: 30
  },
  {
    id: 'gardening-31',
    question: 'Create your garden journal or note system. Set up wherever you\'ll track what you planted, when, observations, questions. Write your first entry today: date, what you\'re planning to grow, what you\'re most excited and most worried about.',
    category: 'action',
    template_id: 'gardening',
    question_number: 31
  },
  {
    id: 'gardening-32',
    question: 'Identify one experienced gardener you can text or call with questions. This could be a neighbor, family member, online community, or local extension office. Write down their contact info. Send them a message this week introducing yourself and asking one specific question.',
    category: 'action',
    template_id: 'gardening',
    question_number: 32
  },
  {
    id: 'gardening-33',
    question: 'Prep your space this weekend. Based on your plan, complete the first physical task: clear the area, set up containers, buy soil, install irrigation, build a raised bed - whatever comes first. Don\'t wait for perfect conditions.',
    category: 'action',
    template_id: 'gardening',
    question_number: 33
  },
  {
    id: 'gardening-34',
    question: 'Set up your reminder system for watering. Decide how you\'ll remember to water (phone alarm, routine tied to morning coffee, calendar). Set it up today for your planned watering schedule. Test it for a week even before plants arrive.',
    category: 'action',
    template_id: 'gardening',
    question_number: 34
  },
  {
    id: 'gardening-35',
    question: 'Schedule your one-month check-in. Write down the date exactly one month from your first planting. On that date, review your journal and write: what\'s growing, what died, what surprised you, what you\'re changing. Put this in your calendar with a link to your garden notes.',
    category: 'action',
    template_id: 'gardening',
    question_number: 35
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for gardening guide...`);

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
    .eq('template_id', 'gardening');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${(counts.reflection/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning/verifyData.length*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action/verifyData.length*100).toFixed(1)}%)`);
  }
}

insertQuestions();
