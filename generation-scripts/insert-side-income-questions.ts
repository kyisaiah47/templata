import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-10) - reflection category
  {
    id: 'side-income-1',
    question: 'Write about 3 times in the past year when someone (friend, colleague, stranger) asked you for help or advice and you thought "I could charge for this." What were you helping with? What made you think it had value?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 1
  },
  {
    id: 'side-income-2',
    question: 'Reflect on your typical week over the past 3 months. List all the moments when you had free time but didn\'t know what to do with it - Sunday afternoons, evenings after dinner, Saturday mornings. What were you actually doing during those times? What pattern do you notice?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 2
  },
  {
    id: 'side-income-3',
    question: 'Document 3-5 skills or activities where people have specifically told you "you\'re really good at this" or "you should do this professionally." For each, write: who said it, what prompted them to say it, and whether you believed them.',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 3
  },
  {
    id: 'side-income-4',
    question: 'Think about the last time you needed extra money (unexpected expense, wanted something specific, felt financially stressed). Write down what happened, how much you needed, how you handled it, and how you felt about your options at the time.',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 4
  },
  {
    id: 'side-income-5',
    question: 'List the last 5 times you spent money on a service someone else provided (haircut, home repair, consulting, coaching, creative work, etc.). For each, write: did you think "I could do this myself"? What made you pay instead?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 5
  },
  {
    id: 'side-income-6',
    question: 'Reflect on hobbies or interests you\'ve had over the past 5 years. Which ones did you stick with? Which did you abandon? What pattern do you notice about what keeps you engaged vs what loses your interest after the initial excitement?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 6
  },
  {
    id: 'side-income-7',
    question: 'Write about a time when you tried to start something on the side before (side project, freelance work, small business, content creation). What happened? Why did you start it? Why did it continue or why did it stop?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 7
  },
  {
    id: 'side-income-8',
    question: 'Document your current relationship with money and work. Complete these sentences: "I work my day job because..." "Extra money would mean I could..." "The idea of working more hours makes me feel..."',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 8
  },
  {
    id: 'side-income-9',
    question: 'Think about your energy patterns over a typical week. Write down when you feel most energized and creative (specific days/times), when you feel depleted, and when you\'re just going through the motions. What does this tell you about when you\'d actually have capacity for side work?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 9
  },
  {
    id: 'side-income-10',
    question: 'Reflect on the people in your life who have side income or run their own thing. Write down: who are they, what do they do, what do you admire about their situation, and what do you think "I could never do that" about their situation?',
    category: 'reflection',
    template_id: 'side-income',
    question_number: 10
  },
  // Research Questions (11-19) - research category
  {
    id: 'side-income-11',
    question: 'Research 5 people online (Fiverr, Upwork, Instagram, YouTube, local Facebook groups) who are doing something you could potentially do. For each, document: what service they offer, how they describe it, what they charge, and how much demand they seem to have (reviews, followers, engagement). What patterns do you see?',
    category: 'research',
    template_id: 'side-income',
    question_number: 11
  },
  {
    id: 'side-income-12',
    question: 'Identify 3-5 online communities or groups where your target customers hang out (subreddits, Facebook groups, Discord servers, LinkedIn groups). For each, spend 30 minutes lurking and document: what problems are people asking about? What are they willing to pay for? What frustrations do they express?',
    category: 'research',
    template_id: 'side-income',
    question_number: 12
  },
  {
    id: 'side-income-13',
    question: 'Research pricing for services or products similar to what you\'re considering. Find 10 examples and document: the range (lowest to highest), what the cheap options offer vs expensive options, and where most people seem to be priced. Based on your skill level, where would you realistically fit?',
    category: 'research',
    template_id: 'side-income',
    question_number: 13
  },
  {
    id: 'side-income-14',
    question: 'List 5-7 people in your existing network (friends, colleagues, former coworkers, acquaintances) who might need what you\'re considering offering. For each, write: what\'s their situation, why would they need this, would they actually pay you, and what\'s awkward about asking them?',
    category: 'research',
    template_id: 'side-income',
    question_number: 14
  },
  {
    id: 'side-income-15',
    question: 'Research the practical requirements for what you\'re considering. Document: what equipment/tools you\'d need (and cost), what platforms or marketplaces you\'d use, what legal/tax considerations exist, and what certifications or credentials (if any) people expect.',
    category: 'research',
    template_id: 'side-income',
    question_number: 15
  },
  {
    id: 'side-income-16',
    question: 'Find 3 specific competitors who are 1-2 steps ahead of where you\'d be starting (not the mega-successful ones, but people in their first year or two). Research: how did they get their first customers? What do their early reviews say? What seems to be working for them?',
    category: 'research',
    template_id: 'side-income',
    question_number: 16
  },
  {
    id: 'side-income-17',
    question: 'Document your day job constraints. Write down: your employment contract terms (any non-compete or moonlighting clauses?), your company\'s policy on side work, your industry\'s norms about this, and whether you\'d need to disclose or hide your side income. What\'s actually allowed vs what feels risky?',
    category: 'research',
    template_id: 'side-income',
    question_number: 17
  },
  {
    id: 'side-income-18',
    question: 'Research the time investment required. Find 3-5 people doing what you\'re considering and document: how many hours per week they report working on it, how long it took to get their first paying customer, and how long until it generated meaningful income (if they share that info).',
    category: 'research',
    template_id: 'side-income',
    question_number: 18
  },
  {
    id: 'side-income-19',
    question: 'Investigate the "boring but necessary" parts. For your idea, research and document: how do people handle payments? How do they find customers consistently? What do they wish they\'d known before starting? Look for "1 year later" reflections or "what I learned" posts.',
    category: 'research',
    template_id: 'side-income',
    question_number: 19
  },
  // Planning Questions (20-30) - planning category
  {
    id: 'side-income-20',
    question: 'Define your income target. Write down three numbers: the minimum extra monthly income that would make this worth your time, a realistic target for year one, and your dream number. For each, write one sentence about what that money would specifically let you do.',
    category: 'planning',
    template_id: 'side-income',
    question_number: 20
  },
  {
    id: 'side-income-21',
    question: 'Map out your available time realistically. Create a weekly calendar showing: your day job hours (including commute), family commitments, self-care time (sleep, exercise), and social time. Highlight the actual pockets where you could work on this. How many hours is that really?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 21
  },
  {
    id: 'side-income-22',
    question: 'Design your minimum viable offering. Describe the simplest version of what you\'d sell - not the full-featured dream version, but the most basic thing someone would pay for. What would it include? What would you explicitly NOT include (yet)? How long would it take you to deliver?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 22
  },
  {
    id: 'side-income-23',
    question: 'Plan your pricing strategy. Based on your research, write down: your starting price (knowing you\'re new), what you\'ll include for that price, and your reasoning. Then write: at what point would you raise prices, and what would need to be true (skill level, demand, reviews)?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 23
  },
  {
    id: 'side-income-24',
    question: 'Create your customer acquisition strategy. Write down 3 specific ways you\'ll find your first 5 customers (not "social media" but "post in r/specificsubreddit," not "word of mouth" but "ask these 3 specific people"). For each method, note: how much time it\'ll take and why you think it\'ll actually work.',
    category: 'planning',
    template_id: 'side-income',
    question_number: 24
  },
  {
    id: 'side-income-25',
    question: 'Plan your boundaries. Write down your rules for: what hours you will/won\'t work on this, what types of clients/projects you\'ll say no to, how you\'ll handle urgent requests, and what signs would tell you this is taking over your life in an unhealthy way.',
    category: 'planning',
    template_id: 'side-income',
    question_number: 25
  },
  {
    id: 'side-income-26',
    question: 'Design your "relationship management" approach for your day job. Write out: will you tell your manager about this? If yes, what exactly will you say? If no, how will you keep it separate? What will you do if it comes up in conversation?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 26
  },
  {
    id: 'side-income-27',
    question: 'Plan your money management. Document: will this income go into a separate account? How will you track expenses? What percentage will you save for taxes? What will you invest back into the side income vs keep as profit? What\'s your system for not spending it all immediately?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 27
  },
  {
    id: 'side-income-28',
    question: 'Create your quality vs speed strategy. Write down: when you\'re tired from your day job, what\'s your minimum acceptable quality? How will you handle a client wanting something by tomorrow when you have no time? What\'s your policy on over-delivering vs protecting your boundaries?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 28
  },
  {
    id: 'side-income-29',
    question: 'Plan your first 90 days. Break it into three 30-day chunks and write what success looks like for each: Month 1 goal (setup and first customer?), Month 2 goal (consistent process?), Month 3 goal (regular income?). Be specific about metrics.',
    category: 'planning',
    template_id: 'side-income',
    question_number: 29
  },
  {
    id: 'side-income-30',
    question: 'Design your sustainability check. Write down 3 early warning signs that would tell you this isn\'t working (no customers after X weeks? Feeling burned out? Spouse complaining?). For each sign, write what you\'d do in response: adjust, pivot, or quit?',
    category: 'planning',
    template_id: 'side-income',
    question_number: 30
  },
  // Action Questions (31-40) - action category
  {
    id: 'side-income-31',
    question: 'Create your one-sentence pitch. Write how you\'d describe what you do to a potential customer in one clear sentence. Then write it 3 different ways and pick the one that feels most natural to say out loud. Test it: would someone immediately understand what you\'re offering and who it\'s for?',
    category: 'action',
    template_id: 'side-income',
    question_number: 31
  },
  {
    id: 'side-income-32',
    question: 'Set up your infrastructure this week. Write down: what you\'ll name this (even if just for yourself), where you\'ll take payments (Venmo, PayPal, Stripe?), and how people will contact you (email, phone, DM?). Set a specific day to actually create these accounts.',
    category: 'action',
    template_id: 'side-income',
    question_number: 32
  },
  {
    id: 'side-income-33',
    question: 'Identify your first 3 potential customers by name. Write down: who they are, why they\'d need what you offer, what you\'ll say when you reach out, and when (specific date this week) you\'ll contact each one. Actually write the message you\'ll send.',
    category: 'action',
    template_id: 'side-income',
    question_number: 33
  },
  {
    id: 'side-income-34',
    question: 'Create your "proof of legitimacy" package. Document: what will you show people to prove you\'re real and capable? (portfolio samples, testimonials, credentials, social media presence?). List what you have now and what you need to create this week.',
    category: 'action',
    template_id: 'side-income',
    question_number: 34
  },
  {
    id: 'side-income-35',
    question: 'Design your first offer. Write out exactly what you\'ll deliver for your first 3 customers: what\'s included, what\'s the timeline, what\'s the price, and what guarantee or promise will you make? Make it specific enough that you could send it to someone today.',
    category: 'action',
    template_id: 'side-income',
    question_number: 35
  },
  {
    id: 'side-income-36',
    question: 'Schedule your work sessions. Open your calendar and block specific times in the next two weeks for working on this. Write down: which 3-4 time blocks you\'re committing to, what you\'ll do in each one, and what you\'ll tell family/roommates about this time being protected.',
    category: 'action',
    template_id: 'side-income',
    question_number: 36
  },
  {
    id: 'side-income-37',
    question: 'Create your tracking system. Set up a simple way (spreadsheet, notion, paper notebook) to track: leads contacted, customers acquired, money earned, hours spent, and lessons learned. Do this today before you forget. What will you use?',
    category: 'action',
    template_id: 'side-income',
    question_number: 37
  },
  {
    id: 'side-income-38',
    question: 'Plan your announcement (or secret-keeping). Write down: who will you tell about this? What will you say? Who are you NOT telling yet and why? If you\'re testing it quietly, when will you decide to go public? Draft the social post or message you might send.',
    category: 'action',
    template_id: 'side-income',
    question_number: 38
  },
  {
    id: 'side-income-39',
    question: 'Set up your first milestone check-in. Write today\'s date and then the date exactly 30 days from now. On that day, you\'ll review: How many people did you reach out to? Did you get a customer? How much time did you spend? What surprised you? Put this in your calendar now with a reminder.',
    category: 'action',
    template_id: 'side-income',
    question_number: 39
  },
  {
    id: 'side-income-40',
    question: 'Create your decision trigger. Complete this sentence: "I\'ll know this is worth continuing if [specific measurable outcome] happens by [specific date]." Also complete: "I\'ll know it\'s time to stop or pivot if [specific situation] happens." Write down both - these are your guardrails.',
    category: 'action',
    template_id: 'side-income',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

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
    .eq('template_id', 'side-income');

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
    console.log(`Reflection (Foundation): ${counts.reflection} (${(counts.reflection / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${(counts.research / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${(counts.planning / verifyData.length * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${(counts.action / verifyData.length * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
