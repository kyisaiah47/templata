import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15) - 25%
  {
    id: 'selling-home-1',
    question: "Write about the moment you first thought about selling this home. What triggered it? Was it one big thing or a gradual realization over time?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 1
  },
  {
    id: 'selling-home-2',
    question: "List every room in your home and note which one makes you think 'I'll miss this' vs 'I'm ready to let this go.' What patterns do you see in your emotional attachments?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 2
  },
  {
    id: 'selling-home-3',
    question: "Recall 3 times in the past year when someone visited and you felt either proud or embarrassed about your home. What did you notice? What did you apologize for or explain away?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 3
  },
  {
    id: 'selling-home-4',
    question: "Think about the last home you sold or left. What do you wish you'd done differently? What unexpected emotion surprised you during that transition?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 4
  },
  {
    id: 'selling-home-5',
    question: "Document every story you tell about 'why we're selling' to different people (family, friends, colleagues). Which version feels most true? Which feels like you're convincing yourself?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 5
  },
  {
    id: 'selling-home-6',
    question: "Write about your relationship with this house over time. When did it shift from 'our dream home' to 'the place we need to leave'? What specific moment marked that change?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 6
  },
  {
    id: 'selling-home-7',
    question: "List all the projects you said you'd do 'someday' in this home. Which ones make you feel guilty now? Which ones reveal what you actually wanted this home to be versus what it became?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 7
  },
  {
    id: 'selling-home-8',
    question: "Reflect on how you feel when you see 'For Sale' signs in your neighborhood. Excited? Anxious? Competitive? Relieved? What does that gut reaction tell you about your true readiness?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 8
  },
  {
    id: 'selling-home-9',
    question: "Think about walking through your front door for the last time after closing. What feeling comes up first? Relief? Sadness? Panic? Excitement? Write about why that specific emotion emerges.",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 9
  },
  {
    id: 'selling-home-10',
    question: "Document every reason family members or friends have given for why you should or shouldn't sell. Which concerns actually resonate with you versus which feel like outside pressure or projection?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 10
  },
  {
    id: 'selling-home-11',
    question: "List 5 homes you've visited recently (friends, family, open houses) where you thought 'I wish our home had that.' What do those specific wishes tell you about what you're really seeking?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 11
  },
  {
    id: 'selling-home-12',
    question: "Write about your neighborhood relationships. Who will you genuinely miss? Who makes you think 'this is one reason I'm ready to go'? Be completely honest with yourself.",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 12
  },
  {
    id: 'selling-home-13',
    question: "Recall the last 3 times you did maintenance or repairs on your home. Did you think 'good investment' or 'just get through this'? What does your mental framing reveal about your relationship with this house?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 13
  },
  {
    id: 'selling-home-14',
    question: "Document your Sunday evening feeling about your home over the past 3 months. Peaceful? Stressed about the to-do list? Eager to be somewhere else? When exactly did this pattern start?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 14
  },
  {
    id: 'selling-home-15',
    question: "Think about your ideal outcome 6 months after selling. What does success look like in specific detail? What would make you think 'we absolutely made the right choice'?",
    category: 'reflection',
    template_id: 'selling-home',
    question_number: 15
  },
  // RESEARCH QUESTIONS (16-29) - 23%
  {
    id: 'selling-home-16',
    question: "Research 10 comparable homes that sold in your neighborhood in the past 6 months. For each: list price, final sale price, days on market, price per square foot. What patterns emerge about pricing and timing?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 16
  },
  {
    id: 'selling-home-17',
    question: "Document every improvement you've made to your home: cost, date, current condition. Which ones actually add resale value? Which were personal choices that buyers might not care about?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 17
  },
  {
    id: 'selling-home-18',
    question: "Walk through your home room by room and list every issue a buyer or inspector might flag: cosmetic problems, functional issues, deferred maintenance. Be brutally honest about what you've been living with.",
    category: 'research',
    template_id: 'selling-home',
    question_number: 18
  },
  {
    id: 'selling-home-19',
    question: "Research current market conditions in your area: Is it buyer's market or seller's market? Average days on market? Sale price to list price ratio? What do recent trends tell you about timing?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 19
  },
  {
    id: 'selling-home-20',
    question: "Calculate your true financial position: Current mortgage balance, estimated home value, estimated selling costs (6-10% of sale price), moving costs, overlap costs. What's your realistic net proceeds?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 20
  },
  {
    id: 'selling-home-21',
    question: "Interview 3 real estate agents who've sold homes in your neighborhood recently. For each: their pricing opinion, suggested improvements, marketing strategy, commission structure. What differences stand out?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 21
  },
  {
    id: 'selling-home-22',
    question: "Research your home's unique selling points and drawbacks: Location factors, school district, lot size, layout, features. What makes your home stand out? What's honestly a compromise for buyers?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 22
  },
  {
    id: 'selling-home-23',
    question: "Document seasonal patterns in your local market: When do most homes list? When do they sell fastest? What's the worst time? How does this align with your personal timeline needs?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 23
  },
  {
    id: 'selling-home-24',
    question: "Get 3 professional estimates for repairs or staging that agents recommended. List each cost and the claimed value-add. Calculate ROI: Will you actually get this money back at sale?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 24
  },
  {
    id: 'selling-home-25',
    question: "Research selling costs beyond agent commission: Title insurance, attorney fees, transfer taxes, repairs/credits from inspection, moving costs. Create a complete expense breakdown with realistic estimates.",
    category: 'research',
    template_id: 'selling-home',
    question_number: 25
  },
  {
    id: 'selling-home-26',
    question: "Visit 5 open houses in your neighborhood currently on the market. For each: note the asking price, condition, how it's staged, what stands out. How does your home compare honestly?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 26
  },
  {
    id: 'selling-home-27',
    question: "Talk to 3 neighbors who've sold recently. Ask: What surprised them? What would they do differently? How was the emotional experience? What advice would they give you specifically?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 27
  },
  {
    id: 'selling-home-28',
    question: "Research disclosure requirements in your state: What must you legally reveal? What skeletons in your closet (flooding, foundation, neighbor disputes, noise) do you need to disclose? Get specific.",
    category: 'research',
    template_id: 'selling-home',
    question_number: 28
  },
  {
    id: 'selling-home-29',
    question: "Document your next move logistics: Where will you go? What's the timing? Do you need to sell first or can you carry two properties? What's your backup plan if the home doesn't sell quickly?",
    category: 'research',
    template_id: 'selling-home',
    question_number: 29
  },
  // PLANNING QUESTIONS (30-46) - 28%
  {
    id: 'selling-home-30',
    question: "Create your pricing strategy: Based on comps and agent input, what's your ideal listing price? Your absolute minimum? Your 'walk away' number? What's your justification for each?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 30
  },
  {
    id: 'selling-home-31',
    question: "Map out your pre-listing preparation timeline: What needs to be fixed, updated, cleaned, staged? Who's doing each task? By when? What's your total budget? Be realistic about your time and energy.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 31
  },
  {
    id: 'selling-home-32',
    question: "Plan your investment decision: Which repairs/updates will you do? Which will you skip and price accordingly? For each major item, calculate: cost now vs. price reduction later. What's your strategy?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 32
  },
  {
    id: 'selling-home-33',
    question: "Design your listing timing strategy: When will you list? Why that specific time? What market conditions are you betting on? What's your contingency if conditions change?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 33
  },
  {
    id: 'selling-home-34',
    question: "Develop your agent selection criteria: What qualities matter most to you? Local expertise? Marketing approach? Personality fit? Commission flexibility? Rank these and explain why.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 34
  },
  {
    id: 'selling-home-35',
    question: "Create your showing logistics plan: Where will you go during showings? How will you handle pets? Who's responsible for cleaning before each showing? What's your advance notice requirement?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 35
  },
  {
    id: 'selling-home-36',
    question: "Plan your negotiation boundaries: What concessions are you willing to make (repairs, closing costs, appliances)? What's non-negotiable? At what point do you walk away from a deal?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 36
  },
  {
    id: 'selling-home-37',
    question: "Map your financial bridge strategy: If there's a gap between selling and buying, how will you fund it? Rent? Stay with family? Bridge loan? What's the cost and stress of each option?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 37
  },
  {
    id: 'selling-home-38',
    question: "Design your marketing strategy with your agent: Professional photos? Virtual tour? Staging? Open houses? Which investments make sense for YOUR home and target buyer? What's the total cost?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 38
  },
  {
    id: 'selling-home-39',
    question: "Develop your contingency plan: What if you get no offers in 30 days? What if you only get lowball offers? At what point do you adjust price? By how much? Define your triggers now.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 39
  },
  {
    id: 'selling-home-40',
    question: "Plan your emotional management strategy: Who's your support system? How will you handle criticism during showings? What will you do when the stress peaks? Be specific about your coping mechanisms.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 40
  },
  {
    id: 'selling-home-41',
    question: "Create your offer evaluation framework: How will you compare multiple offers? Not just price - consider contingencies, financing strength, timeline, buyer motivation. Rank your priorities.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 41
  },
  {
    id: 'selling-home-42',
    question: "Map out your inspection negotiation strategy: What will you agree to fix? What will you offer credits for? What will you refuse? Set your dollar threshold for walking away.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 42
  },
  {
    id: 'selling-home-43',
    question: "Plan your decluttering and depersonalization strategy: What stays? What gets stored? What gets donated? What makes your home feel 'lived in' vs 'show ready'? Who's doing this work and when?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 43
  },
  {
    id: 'selling-home-44',
    question: "Design your communication strategy if selling with a partner or family: How will you make decisions? Who has veto power? How will you handle disagreements about price, offers, or concessions?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 44
  },
  {
    id: 'selling-home-45',
    question: "Develop your tax strategy: Capital gains implications? Primary residence exclusion? Loss deduction if underwater? Consult a tax professional and document your specific situation and strategy.",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 45
  },
  {
    id: 'selling-home-46',
    question: "Create your worst-case scenario plan: Home doesn't sell for 6 months. Inspection reveals major issue. Buyer backs out at closing. For each: what's your plan B? How will you handle it emotionally and financially?",
    category: 'planning',
    template_id: 'selling-home',
    question_number: 46
  },
  // ACTION QUESTIONS (47-60) - 23%
  {
    id: 'selling-home-47',
    question: "Schedule agent interviews this week: Contact 3-5 agents and set up in-person meetings. Prepare your list of questions about pricing, marketing, commission, and their recent sales in your area.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 47
  },
  {
    id: 'selling-home-48',
    question: "Get your home inspection now: Hire a pre-listing inspector this month. Identify issues before buyers do. Decide what to fix and what to disclose. No surprises later.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 48
  },
  {
    id: 'selling-home-49',
    question: "Start the purge: This weekend, walk through every room with garbage bags and donation boxes. Remove 50% of visible items. Be ruthless. Your home needs to feel spacious, not lived-in.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 49
  },
  {
    id: 'selling-home-50',
    question: "Document everything: Take detailed photos and videos of your home's current condition. This is your baseline for insurance and disputes. Store digitally with dates.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 50
  },
  {
    id: 'selling-home-51',
    question: "Deep clean now: Schedule professional deep cleaning (carpets, windows, walls, baseboards). If you can't afford it, block 2 full days and do it yourself. First impressions matter.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 51
  },
  {
    id: 'selling-home-52',
    question: "Address obvious issues: Fix that leaky faucet, patch wall holes, replace burnt-out bulbs, tighten loose handles. Make a punch list this week and knock out 10 small fixes.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 52
  },
  {
    id: 'selling-home-53',
    question: "Boost curb appeal: This weekend, power wash exterior, trim bushes, edge lawn, add fresh mulch, plant flowers. Budget $200-500. Take before and after photos.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 53
  },
  {
    id: 'selling-home-54',
    question: "Gather your documents: Locate property deed, mortgage statements, tax records, HOA docs, warranties, permits for improvements. Create a digital folder. Buyers will ask for these.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 54
  },
  {
    id: 'selling-home-55',
    question: "Research comparable listings: Spend 2 hours on Zillow/Redfin looking at active listings in your area. Save 10 that are similar to yours. Note their prices, photos, descriptions, days on market.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 55
  },
  {
    id: 'selling-home-56',
    question: "Create your showing protocol: Write down your game plan for short-notice showings. What needs to be done in 15 minutes? Make a checklist and post it where everyone can see.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 56
  },
  {
    id: 'selling-home-57',
    question: "Set up your feedback system: Tell your agent you want immediate feedback after every showing. Create a shared doc or email thread to track comments. Look for patterns.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 57
  },
  {
    id: 'selling-home-58',
    question: "Neutralize your space: This week, remove family photos, religious items, political statements, bold paint colors if possible. Your goal: help buyers imagine THEIR life here, not admire yours.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 58
  },
  {
    id: 'selling-home-59',
    question: "Plan your exit: Research temporary housing options (rental, hotel, family) for the gap between selling and moving. Get actual prices and availability. Book if needed.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 59
  },
  {
    id: 'selling-home-60',
    question: "Set up showing notifications: Install a lockbox or smart lock. Give your agent access. Turn on MLS showing notifications. Create your 'go bag' for quick exits. Be ready to leave in 10 minutes.",
    category: 'action',
    template_id: 'selling-home',
    question_number: 60
  }
];

async function main() {
  console.log('🚀 Inserting 60 questions for selling-home...\n');

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`❌ Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✅ Inserted question ${question.question_number}: ${question.question.substring(0, 60)}...`);
    }
  }

  console.log('\n✨ All questions inserted successfully!');
}

main();
