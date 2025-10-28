import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-10) - 26.3%
  {
    id: 'travel-planning-1',
    question: 'Write about your 3 most memorable travel experiences - whether from childhood, adulthood, or recent years. For each, what specific moment still stands out? What made it feel different from regular life?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 1
  },
  {
    id: 'travel-planning-2',
    question: 'Reflect on the last time you felt truly relaxed and disconnected from daily stress. Where were you? Who were you with? What were you doing? How long did it take to reach that feeling?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 2
  },
  {
    id: 'travel-planning-3',
    question: 'Document your travel style patterns. Think about the last 5 trips you took (weekend getaways, vacations, work trips). For each, did you over-plan or wing it? Did you stick to tourist spots or explore off the beaten path? What pattern do you notice?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 3
  },
  {
    id: 'travel-planning-4',
    question: 'Write about a time when travel didn\'t go as planned - a missed flight, bad weather, cultural misunderstanding, or disappointing experience. How did you respond in the moment? What does that tell you about how you handle uncertainty?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 4
  },
  {
    id: 'travel-planning-5',
    question: 'Reflect on your relationship with planning vs spontaneity in daily life. When do you thrive on structure? When do you crave freedom? How does this show up in how you\'ve traveled before?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 5
  },
  {
    id: 'travel-planning-6',
    question: 'List 3-5 places you\'ve seen in photos, movies, or heard about from others that made you think "I want to go there someday." For each, what specifically drew you - the landscape, the culture, the activities, the vibe?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 6
  },
  {
    id: 'travel-planning-7',
    question: 'Think about the people you\'ve traveled with in the past. Write about one trip with each type of companion (partner, family, friends, solo, or strangers). Which dynamic felt most natural? Which was most challenging? What does that tell you about this trip?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 7
  },
  {
    id: 'travel-planning-8',
    question: 'Document your typical response to being outside your comfort zone. Write about 3 times in the past year when you tried something new or unfamiliar. Did you lean in or pull back? What made the difference?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 8
  },
  {
    id: 'travel-planning-9',
    question: 'Reflect on what "getting away" means to you right now. Are you running from something (stress, routine, conflict) or running toward something (adventure, discovery, rest)? Write honestly about what\'s driving this trip idea.',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 9
  },
  {
    id: 'travel-planning-10',
    question: 'Write about your relationship with technology while traveling. On your last trip, how often did you check your phone? Take photos? Share on social media? Post-trip, do you wish you\'d been more present or documented more?',
    category: 'reflection',
    template_id: 'travel-planning',
    question_number: 10
  },
  // Research Questions (11-19) - 23.7%
  {
    id: 'travel-planning-11',
    question: 'Research 5 potential destinations that match your initial interests. For each, document: peak season vs off-season timing, average daily budget, visa requirements for your citizenship, and flight duration from where you live. What pattern emerges about feasibility?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 11
  },
  {
    id: 'travel-planning-12',
    question: 'Pick your top 3 destination contenders. For each, find 3 blogs or vlogs from travelers who went in the past year (not tourism boards). Write down one thing each person loved and one thing they warned about. What themes repeat?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 12
  },
  {
    id: 'travel-planning-13',
    question: 'Research the weather and climate for your top destinations during your potential travel window. Document: average temperature, rainfall, seasonal events (monsoon, festivals, holidays), and daylight hours. How does this affect what you can actually do there?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 13
  },
  {
    id: 'travel-planning-14',
    question: 'Investigate accommodation options for each potential destination. Look at 3 different types (hotel, Airbnb, hostel) and note the cost per night in the area you\'d want to stay. Calculate the total lodging cost for your trip length. How does this compare to your rough budget?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 14
  },
  {
    id: 'travel-planning-15',
    question: 'Research transportation logistics for your top 2 destinations. Document: round-trip flight costs for your dates (use flexible date search), airport-to-city transport options and costs, and how you\'d get around once there (walkable, public transit, rental car needed). What\'s the total transportation budget?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 15
  },
  {
    id: 'travel-planning-16',
    question: 'Look up the current exchange rate and cost of living for your top destinations. Research typical costs for: a meal at a casual restaurant, a coffee, a beer, a day tour or museum entry, and a taxi ride. Create a realistic daily spending estimate beyond accommodation.',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 16
  },
  {
    id: 'travel-planning-17',
    question: 'Investigate safety and health requirements. For each destination, research: required or recommended vaccinations, current travel advisories from your government, health insurance coverage abroad, and any current health protocols (COVID requirements, etc.). What preparation is needed?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 17
  },
  {
    id: 'travel-planning-18',
    question: 'Research the cultural context of your top destinations. Look up: local customs around tipping, dress codes for religious sites, basic phrases in the local language, major cultural taboos, and current political/social climate. What do you need to learn before you go?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 18
  },
  {
    id: 'travel-planning-19',
    question: 'Explore the timing of your trip against local events. Research: major festivals or holidays during your window, peak tourist seasons, school vacation periods, and any events that might affect prices or crowds. Does this change when you\'d want to go?',
    category: 'research',
    template_id: 'travel-planning',
    question_number: 19
  },
  // Planning Questions (20-29) - 26.3%
  {
    id: 'travel-planning-20',
    question: 'Based on your research, choose your destination. Write down: which place you\'re choosing, the specific dates you\'re targeting, and the honest reason this one won out over the others. Then write down the one doubt you still have about this choice.',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 20
  },
  {
    id: 'travel-planning-21',
    question: 'Design your trip length and structure. Write out: total days (including travel days), how many locations you\'ll visit, how many nights in each place, and your philosophy for pacing (slow travel vs hit the highlights). What trade-offs are you making?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 21
  },
  {
    id: 'travel-planning-22',
    question: 'Create your budget breakdown. List every category: flights, accommodation, transportation, food, activities, shopping/souvenirs, emergency buffer, and pre-trip costs (gear, vaccinations, etc.). Assign a dollar amount to each. Does the total match what you can actually spend?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 22
  },
  {
    id: 'travel-planning-23',
    question: 'Plan your accommodation strategy. For each location, write down: neighborhood you want to stay in (and why), type of lodging that fits your travel style, specific amenities that matter to you (kitchen, location, workspace, social vibe), and your nightly budget. How will you book these?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 23
  },
  {
    id: 'travel-planning-24',
    question: 'Design your daily rhythm. Describe your ideal day during this trip: when you wake up, how you choose activities, when you eat, how much you plan vs wander, when you rest, how you end the day. Then compare this to your research - is this realistic for where you\'re going?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 24
  },
  {
    id: 'travel-planning-25',
    question: 'Map out your must-dos, want-to-dos, and would-be-nice. For your destination, list 3-5 experiences in each category. Then look at your trip length - can you actually fit all the musts? What will you cut if needed?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 25
  },
  {
    id: 'travel-planning-26',
    question: 'Plan for connection vs solitude. Write out: how much solo time you need to recharge, how you\'ll meet locals or other travelers if you want to, what you\'ll do if you feel lonely, and how you\'ll handle being "on" all the time if traveling with others. What\'s your balance strategy?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 26
  },
  {
    id: 'travel-planning-27',
    question: 'Design your food approach. Plan: how often you\'ll eat street food vs restaurants, whether you\'ll cook, if you want to take a food tour, dietary restrictions you need to communicate, and how much of your budget goes to meals. What culinary experiences are essential to this trip?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 27
  },
  {
    id: 'travel-planning-28',
    question: 'Create your documentation plan. Decide: what you want to remember from this trip, how you\'ll capture it (photos, journaling, nothing), whether you\'ll share in real-time or after, and what you\'ll do with these memories post-trip. How will you stay present while still preserving the experience?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 28
  },
  {
    id: 'travel-planning-29',
    question: 'Plan for the unexpected. Write down: what you\'ll do if you get sick, how you\'ll handle loneliness or homesickness, your backup plan if weather ruins key plans, and how you\'ll cope if the trip isn\'t living up to expectations. What\'s your resilience strategy?',
    category: 'planning',
    template_id: 'travel-planning',
    question_number: 29
  },
  // Action Questions (30-38) - 23.7%
  {
    id: 'travel-planning-30',
    question: 'Book your flights. Write down: the exact dates you\'re searching for, your maximum price, whether you need flexible tickets, and when you\'ll pull the trigger on booking (set a specific deadline). What needs to happen before you can commit to clicking "purchase"?',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 30
  },
  {
    id: 'travel-planning-31',
    question: 'Secure your first night\'s accommodation. Research and book where you\'ll sleep the first night (when you\'ll be most tired/vulnerable). Document: exact property name, confirmation number, address, check-in time, and backup plan if something goes wrong. Do this within the next 3 days.',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 31
  },
  {
    id: 'travel-planning-32',
    question: 'Handle your travel documents. Create a checklist and timeline: passport expiration date (needs 6 months validity), visa requirements and application deadlines, photocopies/digital backups of important docs, and travel insurance purchase deadline. What needs to happen this week?',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 32
  },
  {
    id: 'travel-planning-33',
    question: 'Set up your finances for travel. List the specific actions: notify your bank/credit cards of travel dates, research foreign transaction fees, order local currency or find ATM strategy, set up mobile payment options, and create a backup payment method. When will you do each of these?',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 33
  },
  {
    id: 'travel-planning-34',
    question: 'Make your health preparations. Schedule appointments: check-in with doctor for prescriptions, get required/recommended vaccinations, refill any medications, research pharmacy locations at destination. Write down appointment dates and what you need to ask each provider.',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 34
  },
  {
    id: 'travel-planning-35',
    question: 'Create your packing strategy. Write down: the bag you\'re taking (carry-on only or checked?), items you need to buy vs already own, clothes appropriate for the climate and culture, and your one-week-before packing list review date. What do you need to acquire before you can pack?',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 35
  },
  {
    id: 'travel-planning-36',
    question: 'Set up your away-from-home plan. Document: who will check your mail, how you\'ll handle work handoff, pet/plant care arrangements, bills on autopay, and home security. For each, write the specific person or action and when you\'ll confirm it\'s handled.',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 36
  },
  {
    id: 'travel-planning-37',
    question: 'Download and organize your trip essentials. This week, take action on: download offline maps for your destination, save confirmation emails to an offline folder, create a shared doc with emergency contacts and itinerary, screenshot important info (addresses, phone numbers). Set a deadline to complete this.',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 37
  },
  {
    id: 'travel-planning-38',
    question: 'Plan your re-entry. Before you leave, schedule: your first day back (take a buffer day?), when you\'ll do laundry and unpack, a debrief session with yourself to journal about the trip, and how you\'ll maintain any insights or habits from travel. How will you transition back to regular life?',
    category: 'action',
    template_id: 'travel-planning',
    question_number: 38
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for travel-planning...`);

  // First, delete any existing questions for this template
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .eq('template_id', 'travel-planning');

  if (deleteError) {
    console.error('Error deleting existing questions:', deleteError);
  } else {
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
    .eq('template_id', 'travel-planning');

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
