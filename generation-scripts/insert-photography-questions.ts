import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-9) - reflection category
  {
    id: 'photography-hobby-1',
    question: 'Write about 3 specific moments in the past year when you stopped to really LOOK at something - a scene, light, person, or detail that made you pause. What caught your attention each time? What did you want to remember about it?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 1
  },
  {
    id: 'photography-hobby-2',
    question: 'Reflect on the photos currently on your phone or camera roll. Scroll through the last 50 photos - what patterns do you notice in what you capture? What do you photograph multiple times? What do these patterns reveal about what you\'re drawn to?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 2
  },
  {
    id: 'photography-hobby-3',
    question: 'Think about a place you visit regularly (your commute, neighborhood walk, local park). Describe 3 things about that place you\'ve never actually looked at closely. What details have you been walking past without really seeing?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 3
  },
  {
    id: 'photography-hobby-4',
    question: 'Document the last time you saw a photo (on social media, in a magazine, someone\'s work) that made you stop and think "I wish I could create something like that." What specifically drew you to it? What feeling did it evoke?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 4
  },
  {
    id: 'photography-hobby-5',
    question: 'Write about your earliest memory of wanting to capture a moment. What were you trying to preserve? Did you have a camera? What happened to that moment - did you capture it or lose it?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 5
  },
  {
    id: 'photography-hobby-6',
    question: 'Reflect on the past 6 months. List 3-5 times when you\'ve said or thought "I wish I had my camera" or "I should have taken a photo of that." What were those moments? What pattern do you see in what you wanted to capture?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 6
  },
  {
    id: 'photography-hobby-7',
    question: 'Think about creative activities you\'ve tried in the past (drawing, writing, music, crafts, cooking, etc.). Which ones stuck? Which ones didn\'t? For each, write down what made you continue or quit - this reveals how you learn creative skills.',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 7
  },
  {
    id: 'photography-hobby-8',
    question: 'Document your current relationship with your phone camera or any camera you own. When do you use it? When do you avoid using it? What stops you from taking photos more often - is it technical overwhelm, self-consciousness, not knowing what to shoot?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 8
  },
  {
    id: 'photography-hobby-9',
    question: 'Reflect on people in your life who are creative or artistic. What do you admire about how they approach their craft? What do you notice about their process that\'s different from how you typically approach learning something new?',
    category: 'reflection',
    template_id: 'photography-hobby',
    question_number: 9
  },
  // Research Questions (10-17) - research category
  {
    id: 'photography-hobby-10',
    question: 'Research 3 photographers whose work you admire (Instagram, websites, books - anywhere). For each, document: what subjects they shoot, what you love about their style, what feeling their photos give you, and one specific photo that stands out. What commonalities do you see across these three?',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 10
  },
  {
    id: 'photography-hobby-11',
    question: 'Explore 5 different photography styles/genres (portrait, landscape, street, macro, wildlife, food, architectural, etc.) by looking at example photos of each. For each style, rate your interest level 1-5 and note: would you want to CREATE this or just look at it? What draws you in or pushes you away?',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 11
  },
  {
    id: 'photography-hobby-12',
    question: 'Research cameras and equipment for your top 2 photography interests. For each interest, document: what type of camera do pros use (DSLR, mirrorless, phone), what\'s the minimum investment to start, and what\'s one specific limitation of starting with just a phone camera?',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 12
  },
  {
    id: 'photography-hobby-13',
    question: 'Find 3 YouTube channels, online courses, or learning resources about photography. For each, watch or skim the first lesson/video and note: teaching style, technical level (beginner-friendly?), does their approach match how you learn best, and whether you could see yourself actually following through with this resource.',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 13
  },
  {
    id: 'photography-hobby-14',
    question: 'Research local photography opportunities in your area. Document: are there photography walks, clubs, or meetups within 30 minutes of you? Any specific locations known for good photo opportunities? Local photographers who teach workshops? Write down 3 concrete options with dates/times if available.',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 14
  },
  {
    id: 'photography-hobby-15',
    question: 'Investigate the technical triangle (aperture, shutter speed, ISO) by finding 3 side-by-side photo comparisons that show how each setting affects an image. For each comparison, write down: what changed in the photo, and do you understand WHY that setting creates that effect?',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 15
  },
  {
    id: 'photography-hobby-16',
    question: 'Research your phone or camera\'s capabilities if you already own one. List: what manual controls does it have (can you adjust exposure, focus, etc.)? What are its limitations? What could you learn to do with it before needing to invest in new equipment?',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 16
  },
  {
    id: 'photography-hobby-17',
    question: 'Explore photography communities online (Reddit, Instagram hashtags, photography forums). Find 3 communities and note: what\'s the skill level (beginners welcome?), what\'s the vibe (supportive or competitive?), do people share technical advice or just post photos, and could you see yourself participating?',
    category: 'research',
    template_id: 'photography-hobby',
    question_number: 17
  },
  // Planning Questions (18-26) - planning category
  {
    id: 'photography-hobby-18',
    question: 'Design your ideal photography learning journey. Based on your research, map out 3 phases: (1) What you\'ll learn in your first month, (2) What you\'ll tackle in months 2-3, (3) What you\'ll explore in months 4-6. For each phase, name 1-2 specific skills or concepts you want to master.',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 18
  },
  {
    id: 'photography-hobby-19',
    question: 'Plan your equipment strategy. Write down: what you\'ll start with (phone? borrowed camera? budget purchase?), what you\'ll learn to master with that equipment before upgrading, and what your "someday" gear wish list looks like. What\'s your timeline for each stage?',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 19
  },
  {
    id: 'photography-hobby-20',
    question: 'Create your practice schedule based on your actual life. Document: which days of the week have pockets of time for photography, what time of day works best (morning light? evening? weekend adventures?), and how much time you can realistically commit per week. Be honest - 30 focused minutes beats aspirational 3-hour blocks you\'ll never use.',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 20
  },
  {
    id: 'photography-hobby-21',
    question: 'Map out your shooting locations for the next month. List 5 specific places you can practice (your home/room for still life, a specific street for street photography, a park, your daily commute route, etc.). For each location, note: what subjects/lighting are available there, what you could practice, and when you could go.',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 21
  },
  {
    id: 'photography-hobby-22',
    question: 'Plan your learning mix. Based on how you learn best, design your ratio: what percentage of your photography time will be (1) watching tutorials/reading, (2) studying other photographers\' work, (3) actually shooting, and (4) reviewing/editing your own work? Aim for at least 60% actually shooting.',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 22
  },
  {
    id: 'photography-hobby-23',
    question: 'Design your feedback strategy. Write down: who could give you honest feedback on your photos (friend, family, online community)? How often do you want feedback (weekly? monthly? after each shoot?)? What specific feedback are you ready to hear vs what would discourage you right now?',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 23
  },
  {
    id: 'photography-hobby-24',
    question: 'Create your "photography triggers" system. Plan 3 specific ways you\'ll remind yourself to actually practice: (1) calendar blocks for shooting time? (2) a daily photo challenge? (3) a project with a deadline? Which approach matches your motivation style - are you deadline-driven, habit-driven, or inspiration-driven?',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 24
  },
  {
    id: 'photography-hobby-25',
    question: 'Plan your skill progression path. For your top photography interest, break it down: what\'s the FIRST thing you need to learn to take a decent photo in that style? What\'s the second? Third? Create a logical sequence where each skill builds on the previous one, not a random list of everything you could eventually learn.',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 25
  },
  {
    id: 'photography-hobby-26',
    question: 'Design your creative boundaries. Write down your constraints: will you limit yourself to one subject for a month? One camera setting to master? One location? Black and white only? Constraints often fuel creativity - what limitation would force you to be more creative rather than less?',
    category: 'planning',
    template_id: 'photography-hobby',
    question_number: 26
  },
  // Action Questions (27-35) - action category
  {
    id: 'photography-hobby-27',
    question: 'Take 20 photos today or tomorrow with whatever camera you have right now. Don\'t wait for better gear or better knowledge - just shoot 20 photos of anything. After you\'re done, review them and write: which 3 photos are you most drawn to and why? What do you wish you\'d done differently?',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 27
  },
  {
    id: 'photography-hobby-28',
    question: 'Choose your first photography project starting this week. Write down: what\'s the specific theme or subject (portraits of your pet, your morning coffee routine, shadows in your home, etc.), how many photos will you take (suggest 20-30), what\'s your deadline (give yourself 1-2 weeks), and where will you share them (even if just with one friend)?',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 28
  },
  {
    id: 'photography-hobby-29',
    question: 'Schedule your first dedicated "photo walk" in your calendar. Document: specific date and time, exact location (the route or spot), how long you\'ll spend (suggest 30-60 minutes), and what you\'ll focus on practicing (composition? lighting? capturing movement?). Set a phone reminder for 1 day before.',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 29
  },
  {
    id: 'photography-hobby-30',
    question: 'Set up your photography learning system today. Create: a folder/album for your practice photos, a note or doc for things you want to learn, a way to save inspiring photos you see (Pinterest board? Instagram saves?), and bookmarks for your top 2-3 learning resources. Do this setup now, not later.',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 30
  },
  {
    id: 'photography-hobby-31',
    question: 'Identify your photography accountability partner and reach out to them this week. Write down: who is it (friend who\'d be encouraging? another beginner? someone who knows photography?), what you\'ll ask them to do (check in weekly? review photos monthly? join you for shoots?), and draft the exact message you\'ll send them.',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 31
  },
  {
    id: 'photography-hobby-32',
    question: 'Join one photography community this week. Choose from your research: which specific community will you join (subreddit? Instagram hashtag? local meetup?), when will you introduce yourself or post your first photo (set a date), and what will you say about yourself and your goals?',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 32
  },
  {
    id: 'photography-hobby-33',
    question: 'Master one manual setting on your camera this week. Pick ONE: aperture, shutter speed, or ISO. Document your commitment: which one you\'ll focus on, which tutorial you\'ll watch to understand it, and the specific thing you\'ll photograph to practice it (moving subjects for shutter speed? depth experiments for aperture? low-light scenes for ISO?).',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 33
  },
  {
    id: 'photography-hobby-34',
    question: 'Create your first photography milestone marker. Write down: what will success look like in 30 days (a completed project? comfort with manual settings? a portfolio of 50 photos you\'re proud of?), how you\'ll measure it, and what you\'ll reward yourself with when you hit it. Put a calendar reminder for 30 days from now to review your progress.',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 34
  },
  {
    id: 'photography-hobby-35',
    question: 'Commit to your "one photo per day" practice. Start tomorrow: take and save one deliberate photo every day for the next week (not a snapshot, but a photo where you thought about it for 10 seconds). Write down: where you\'ll save these photos, what time of day you\'ll take them, and how you\'ll remember (morning alarm? evening routine? associated with another daily habit?).',
    category: 'action',
    template_id: 'photography-hobby',
    question_number: 35
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for photography-hobby guide...`);

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
    .eq('template_id', 'photography-hobby');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${((counts.reflection/verifyData.length)*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${((counts.research/verifyData.length)*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${((counts.planning/verifyData.length)*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${((counts.action/verifyData.length)*100).toFixed(1)}%)`);
  }
}

insertQuestions();
