import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15)
  {
    id: 'planning-wedding-1',
    question: 'Think about the last 5 weddings you attended. For each one, write what moment made you think "I want this at mine" or "I never want to do this" - what do these reactions tell you about your values?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 1
  },
  {
    id: 'planning-wedding-2',
    question: 'Describe 3 moments in your relationship where you felt most "us" - not performing for others, just authentically together. What made those moments different from everyday life?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 2
  },
  {
    id: 'planning-wedding-3',
    question: 'Write about a time when family expectations conflicted with what you actually wanted (in any area of life). How did you handle it? What does this tell you about how you might navigate wedding planning?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 3
  },
  {
    id: 'planning-wedding-4',
    question: 'Document the stories behind how you and your partner handle big decisions together. Think of 2-3 major choices you\'ve made - who tends to care more about which aspects? What patterns emerge?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 4
  },
  {
    id: 'planning-wedding-5',
    question: 'Reflect on your financial relationship so far: When have you two disagreed about money? When have you been aligned? What makes spending feel "worth it" vs wasteful to each of you?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 5
  },
  {
    id: 'planning-wedding-6',
    question: 'Think about the weddings your parents/close family members had (or didn\'t have). What messages did you absorb about what weddings "should" be? Which of these still feel true to you, and which don\'t?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 6
  },
  {
    id: 'planning-wedding-7',
    question: 'List 5 things you\'re typically private about in your life. Now think about a wedding where people will be watching you - what feels exciting about being seen vs. what makes you want to protect your privacy?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 7
  },
  {
    id: 'planning-wedding-8',
    question: 'Write down 3 times in the past year when you felt pressure to do something "for appearances" - from work, social media, family, anywhere. Did you do it? How did you feel after? What does this tell you about your wedding choices?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 8
  },
  {
    id: 'planning-wedding-9',
    question: 'Document your partner\'s relationship with their family\'s expectations. Think of specific examples where they\'ve either followed or pushed back against what their family wanted - what pattern do you see?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 9
  },
  {
    id: 'planning-wedding-10',
    question: 'Reflect on moments when you\'ve been to events that felt "too much" (too big, too fancy, too performed) vs "just right" - what was the difference? What does this tell you about the scale you\'re comfortable with?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 10
  },
  {
    id: 'planning-wedding-11',
    question: 'Think about the friends and family members whose opinions you actually trust about major life decisions. Write their names and what specifically makes their perspective valuable to you - these are your real advisors.',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 11
  },
  {
    id: 'planning-wedding-12',
    question: 'Describe a tradition (family, cultural, religious) that you\'ve kept even when it would be easier not to. Why does it matter? What traditions feel like empty obligations vs meaningful connections?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 12
  },
  {
    id: 'planning-wedding-13',
    question: 'Write about a time when you and your partner had completely different visions for something (a vacation, apartment, decision) - how did you get aligned? What did you learn about compromise vs. standing firm?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 13
  },
  {
    id: 'planning-wedding-14',
    question: 'Document the last time you spent a significant amount of money (over $500). Walk through the decision: How long did you think about it? Did you research? What made you finally commit? What does this tell you about how you\'ll handle wedding spending?',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 14
  },
  {
    id: 'planning-wedding-15',
    question: 'Think about how you want to feel the morning after your wedding. Not what you want people to remember - what do you want to feel when you wake up next to your partner? Work backward from there.',
    category: 'reflection',
    template_id: 'planning-wedding',
    question_number: 15
  },

  // RESEARCH QUESTIONS (16-28)
  {
    id: 'planning-wedding-16',
    question: 'Research 5 venues that match your initial vision (size, location, vibe). For each, note: realistic total cost, what\'s included, what surprised you about the pricing, and what hidden costs emerged.',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 16
  },
  {
    id: 'planning-wedding-17',
    question: 'Create a list of every single person you could possibly invite - don\'t edit yet, just brain dump. Count them. Then mark: Must be there (would feel wrong without them), Should be there (important but not essential), Could be there (nice but not necessary). What\'s your ratio?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 17
  },
  {
    id: 'planning-wedding-18',
    question: 'Research what weddings actually cost in your area by looking at 3 real budget breakdowns (Reddit, blogs, friends). For each, note what they spent the most on and what they regretted. What patterns do you see?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 18
  },
  {
    id: 'planning-wedding-19',
    question: 'Document your combined realistic wedding budget: Current savings, monthly saving capacity until wedding, family contributions that are actually committed (not hoped for), total available. Show your math.',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 19
  },
  {
    id: 'planning-wedding-20',
    question: 'Look up 3 photographers whose style you love. Note their pricing, what\'s included, and how far in advance they book. Then find 3 more that are half the price - what\'s the actual difference in what you get?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 20
  },
  {
    id: 'planning-wedding-21',
    question: 'Research your 3 favorite wedding venues\' available dates for your preferred season. Create a chart: date, venue, cost, what\'s available vs. already booked. What trade-offs emerge between timing and location?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 21
  },
  {
    id: 'planning-wedding-22',
    question: 'Find 5 real couples who had weddings similar to your vision (size, style, location). Document what they spent, what they prioritized, and what they wished they\'d done differently. What\'s consistent across all of them?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 22
  },
  {
    id: 'planning-wedding-23',
    question: 'Research the cultural or religious traditions you\'re considering including. For each one, document: its original meaning, how it\'s typically done now, what it would require (time, people, items), and whether it still resonates with its original purpose.',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 23
  },
  {
    id: 'planning-wedding-24',
    question: 'Create a vendor pricing matrix: For catering, photography, flowers, and music, get 3 quotes each. Note what\'s included at each price point and where the big jumps happen. What\'s driving the cost differences?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 24
  },
  {
    id: 'planning-wedding-25',
    question: 'Look into wedding timelines: Find 3 sample timelines for weddings similar to yours (ceremony length, reception style, guest count). Note how much time each element takes and what feels rushed vs. spacious. What surprises you?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 25
  },
  {
    id: 'planning-wedding-26',
    question: 'Research your guest demographics: Count how many are local, how many need to travel, how many need accommodations, how many have kids, how many are elderly/mobility-limited. What logistical requirements does this create?',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 26
  },
  {
    id: 'planning-wedding-27',
    question: 'Investigate your legal requirements: What\'s legally required for marriage in your location? How far in advance? What paperwork? Are there waiting periods? Document the actual bureaucratic timeline.',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 27
  },
  {
    id: 'planning-wedding-28',
    question: 'Research all-inclusive packages vs. piecing it together yourself in your area. Get specific numbers for both approaches for a wedding your size. Calculate the actual difference and what you\'re trading for convenience.',
    category: 'research',
    template_id: 'planning-wedding',
    question_number: 28
  },

  // PLANNING QUESTIONS (29-45)
  {
    id: 'planning-wedding-29',
    question: 'Based on your actual budget and research, map out your forced trade-offs: If you spend more on X, you must spend less on Y. Create 3 different budget allocation scenarios and note what each one says about your priorities.',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 29
  },
  {
    id: 'planning-wedding-30',
    question: 'Plan your guest list boundaries: Write down the specific criteria for who makes the cut (e.g., "seen in past year," "know both our names," "would invite us to theirs"). Apply these rules even to family. Who falls off? What conflicts does this create?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 30
  },
  {
    id: 'planning-wedding-31',
    question: 'Design your ceremony from scratch: If you removed everything traditional and started with a blank slate, what would you include? Now add back only the traditional elements that actually mean something to you. What stays and what goes?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 31
  },
  {
    id: 'planning-wedding-32',
    question: 'Plan how to navigate the biggest family expectation conflict you\'ve identified: Write the specific script for how you\'ll communicate your decision, who will say it, when, and how you\'ll handle pushback.',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 32
  },
  {
    id: 'planning-wedding-33',
    question: 'Create your "wedding day energy" plan: Hour by hour, map when you\'ll need quiet moments vs. social energy, when you\'ll eat, when you\'ll have private time with your partner. What needs to be protected in the schedule?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 33
  },
  {
    id: 'planning-wedding-34',
    question: 'Plan your budget conversation strategy with family: If someone offers money with strings attached, what strings are acceptable and which aren\'t? Write your "thank you but no" script for offers that come with too much control.',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 34
  },
  {
    id: 'planning-wedding-35',
    question: 'Design your seating chart philosophy: Not the actual chart yet, but the principles. Who needs to be separated? Who should be connected? What creates good table dynamics vs. awkward ones? What matters most: family together, friend groups together, or mixing?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 35
  },
  {
    id: 'planning-wedding-36',
    question: 'Map out your vendor decision-making system: For each vendor type (photographer, caterer, florist, DJ), rank what matters most (cost, style, personality, reviews, flexibility). When these conflict, what wins?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 36
  },
  {
    id: 'planning-wedding-37',
    question: 'Plan your wedding weekend (not just the day): If you have out-of-town guests, what\'s the experience from their arrival to departure? What\'s required vs. optional? What feels hospitable vs. exhausting?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 37
  },
  {
    id: 'planning-wedding-38',
    question: 'Create your personalization strategy: List 3-5 elements where you\'ll add personal touches that reflect YOUR story, not Pinterest. What specifically makes each one meaningful vs. decorative?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 38
  },
  {
    id: 'planning-wedding-39',
    question: 'Plan your ceremony participants: Who do you want to involve in the ceremony (officiant, readers, performers, attendants)? For each person, what role actually honors your relationship with them vs. obligation?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 39
  },
  {
    id: 'planning-wedding-40',
    question: 'Design your reception flow: Map out the sequence of events (dinner, dancing, toasts, cake, etc.). What traditions are you keeping, modifying, or skipping? What will make guests feel engaged vs. waiting around?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 40
  },
  {
    id: 'planning-wedding-41',
    question: 'Plan how you\'ll handle the top 3 things that could go wrong: Weather, vendor no-show, family drama, illness. For each scenario, what\'s your backup plan and who\'s responsible for executing it?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 41
  },
  {
    id: 'planning-wedding-42',
    question: 'Map your couples\' decision-making approach for wedding planning: What decisions do you each care deeply about vs. defer to the other? Where do you need to align completely? Create a responsibility matrix.',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 42
  },
  {
    id: 'planning-wedding-43',
    question: 'Plan your pre-wedding timeline: Work backward from your wedding date. When do you need to book each vendor to get what you want? What are the real deadlines vs. the arbitrary ones? Build your booking schedule.',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 43
  },
  {
    id: 'planning-wedding-44',
    question: 'Create your gift registry strategy (if having one): What do you actually need vs. what\'s expected? What\'s your philosophy on cash gifts? How will you handle cultural differences in gift-giving expectations?',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 44
  },
  {
    id: 'planning-wedding-45',
    question: 'Plan your communication boundaries: How much wedding planning will you share on social media? What stays private? Who gets info first - family, friends, public? Create your information-sharing tiers.',
    category: 'planning',
    template_id: 'planning-wedding',
    question_number: 45
  },

  // ACTION QUESTIONS (46-60)
  {
    id: 'planning-wedding-46',
    question: 'Book your venue: Based on your research and budget, identify your top choice. Write down what you need to ask before signing (payment schedule, cancellation policy, what\'s included, restrictions). Set a deadline to decide.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 46
  },
  {
    id: 'planning-wedding-47',
    question: 'Create your wedding planning project tracker: Set up a system (spreadsheet, app, notebook) with these columns: Task, Owner, Deadline, Status, Cost, Vendor Contact. Start populating it with everything from your research.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 47
  },
  {
    id: 'planning-wedding-48',
    question: 'Schedule your budget reality check: Set a specific date each month to review actual spending vs. budget. Create a system to track deposits paid, remaining balances, and unexpected costs that pop up.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 48
  },
  {
    id: 'planning-wedding-49',
    question: 'Write your first family boundary conversation: Pick the most urgent expectation conflict and draft the actual message or conversation you\'ll have. Include: acknowledgment of their input, your decision, and how you\'ll handle their reaction. Schedule when you\'ll have this conversation.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 49
  },
  {
    id: 'planning-wedding-50',
    question: 'Start your vendor outreach: Contact your top 3 choices for the most time-sensitive vendor (usually venue or photographer). Use a template message but personalize it. Track who responds, their availability, and next steps.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 50
  },
  {
    id: 'planning-wedding-51',
    question: 'Create your guest list spreadsheet: Set up columns for: Name, Relationship, Address, Save-the-Date sent, Invitation sent, RSVP status, Meal choice, Plus-one. Start filling in everyone from your brain-dump list.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 51
  },
  {
    id: 'planning-wedding-52',
    question: 'Draft your vows (early version): Even if your wedding is months away, write a rough draft now. What promises actually matter to you? What\'s performative vs. profound? You\'ll revise later, but start capturing the real stuff.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 52
  },
  {
    id: 'planning-wedding-53',
    question: 'Set up your wedding email and shared calendar: Create a dedicated email address for vendor communications and a shared calendar with your partner for all wedding tasks and deadlines. Migrate your timeline into it.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 53
  },
  {
    id: 'planning-wedding-54',
    question: 'Reach out to your wedding party (if having one): Have individual conversations about what you\'re asking of them. Be specific about time, money, and emotional support expectations. Give them an out if it\'s too much.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 54
  },
  {
    id: 'planning-wedding-55',
    question: 'Book your ceremony officiant: Whether religious leader, friend getting ordained, or professional, reach out to your top choice. Discuss their requirements, your vision, and customize-ability. Get them locked in.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 55
  },
  {
    id: 'planning-wedding-56',
    question: 'Create your day-of timeline: Build a minute-by-minute schedule for your wedding day from when you wake up to when you leave. Include: getting ready, photos, ceremony, cocktail hour, reception, exits. Share with key people.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 56
  },
  {
    id: 'planning-wedding-57',
    question: 'Start your vendor contract review system: For each contract you receive, create a checklist: Read carefully, note payment terms, check cancellation policy, verify what\'s included, flag concerns. Never sign same-day.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 57
  },
  {
    id: 'planning-wedding-58',
    question: 'Delegate your day-of responsibilities: List everything that needs managing on the day (vendor arrivals, guest questions, timeline, emergencies). Assign a specific person to each. Have the conversation about what you need from them.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 58
  },
  {
    id: 'planning-wedding-59',
    question: 'Schedule your marriage license appointment: Look up your local requirements and book the appointment to get your license. Add reminders for any waiting periods or documentation you need to bring.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 59
  },
  {
    id: 'planning-wedding-60',
    question: 'Create your week-before checklist: List everything that must happen in the final week (final payments, confirm vendor times, print materials, pack emergency kit, rehearsal, rest). Assign each item a specific day and person.',
    category: 'action',
    template_id: 'planning-wedding',
    question_number: 60
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for planning-wedding...`);

  for (const q of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(q);

    if (error) {
      console.error(`Error inserting question ${q.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${q.question_number}`);
    }
  }

  console.log('\nDone!');

  // Verify
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'planning-wedding');

  if (data) {
    const counts = data.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\nBreakdown by category:');
    console.log('reflection:', counts.reflection || 0);
    console.log('research:', counts.research || 0);
    console.log('planning:', counts.planning || 0);
    console.log('action:', counts.action || 0);
    console.log('TOTAL:', data.length);
  }
}

main();
