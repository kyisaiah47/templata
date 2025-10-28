import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (15 questions - 25%)
  {
    id: 'starting-business-1',
    question: 'Write about 3 specific moments in the past year when you thought "I could do this better as my own business." What were you doing? What frustrated you about how it was being done?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'starting-business-2',
    question: 'Document the last 5 times someone asked you for help or advice in your area of expertise. What specifically did they need? What does this pattern reveal about what people struggle with?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'starting-business-3',
    question: 'Reflect on a time in the past 3 years when you were so absorbed in a project that hours felt like minutes. What were you building or solving? What made it different from "regular work"?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'starting-business-4',
    question: 'List every side project, hobby, or "just for fun" thing you\'ve worked on in the past 2 years. Which one did you keep coming back to even when you were busy? Why?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'starting-business-5',
    question: 'Write about your relationship with money over the past 5 years. When have you felt most financially secure? Most anxious? What would need to be true for you to feel okay with irregular income?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'starting-business-6',
    question: 'Document 3 times you\'ve started something new (job, project, relationship). How did you handle the uncertainty? What patterns do you notice in how you react to risk?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'starting-business-7',
    question: 'Think about the worst professional failure you\'ve experienced. How long did it take you to recover? What does this tell you about your resilience for business setbacks?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'starting-business-8',
    question: 'Reflect on your current weekly schedule. Which 10 hours would you realistically cut to work on your business? What would you have to say no to?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'starting-business-9',
    question: 'Write about why you want to start a business NOW versus a year ago or a year from now. What changed? What\'s the real urgency?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'starting-business-10',
    question: 'Document every time in the past 6 months you complained about your current work situation. What specific patterns emerge? Are you running FROM something or TO something?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'starting-business-11',
    question: 'List 5 people you know who run their own businesses. For each: What do you envy about their situation? What looks harder than you expected? What surprises you?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'starting-business-12',
    question: 'Reflect on your energy patterns over a typical week. When are you most creative? Most drained? How does this match with when you\'d need to work on your business?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'starting-business-13',
    question: 'Write about a time you had to sell yourself or your ideas (job interview, persuading your team, asking for a raise). What felt natural? What felt forced? What does this reveal about how you\'ll sell your business?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'starting-business-14',
    question: 'Document your support system. Who in your life will celebrate wins with you? Who will help you process failures? Who might actively discourage you? How will you handle each?',
    category: 'reflection',
    question_number: 14
  },
  {
    id: 'starting-business-15',
    question: 'Think about the last major decision you made (moving, job change, ending relationship). How long did you deliberate? What finally pushed you to act? What does this tell you about your decision-making under uncertainty?',
    category: 'reflection',
    question_number: 15
  },

  // RESEARCH QUESTIONS (14 questions - 23%)
  {
    id: 'starting-business-16',
    question: 'Research and list 10 people or businesses currently solving the problem you want to solve. For each: What are they doing well? What gaps or complaints do you see in reviews/feedback?',
    category: 'research',
    question_number: 16
  },
  {
    id: 'starting-business-17',
    question: 'Find and interview 3 people who match your target customer profile. Ask them: What\'s the hardest part of [the problem]? What have they tried? What would make them switch to something new?',
    category: 'research',
    question_number: 17
  },
  {
    id: 'starting-business-18',
    question: 'Document the last 10 purchasing decisions you made in your business area. What made you choose one option over another? What would have made you pay more? What almost stopped you from buying?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'starting-business-19',
    question: 'Research your top 5 competitors. For each, document: their pricing, their main customer promise, what their customers complain about most, and what would need to be true for their customers to switch to you.',
    category: 'research',
    question_number: 19
  },
  {
    id: 'starting-business-20',
    question: 'Find 3 online communities where your target customers hang out. Spend 2 hours reading. What do they complain about? What questions come up repeatedly? What language do they use to describe their problems?',
    category: 'research',
    question_number: 20
  },
  {
    id: 'starting-business-21',
    question: 'Research the startup costs for your business idea. List every single expense you can think of for the first 6 months: one-time costs, monthly recurring, and unexpected buffers. What\'s the realistic total?',
    category: 'research',
    question_number: 21
  },
  {
    id: 'starting-business-22',
    question: 'Interview someone who started a similar business in the past 3 years. Ask: What surprised them most about the first 6 months? What would they do differently? What did they underestimate?',
    category: 'research',
    question_number: 22
  },
  {
    id: 'starting-business-23',
    question: 'Document your skills inventory. List 10 skills needed to run your business. For each: rate yourself 1-10, note who you know with that skill, and estimate cost to outsource if needed.',
    category: 'research',
    question_number: 23
  },
  {
    id: 'starting-business-24',
    question: 'Research 5 businesses that failed in your space in the past 5 years. What were they trying to do? Why did they shut down? What can you learn from their post-mortems or final updates?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'starting-business-25',
    question: 'Find and analyze pricing for 10 comparable products/services. Create a range: lowest price, average, highest. Where would you fit? What would justify your pricing to customers?',
    category: 'research',
    question_number: 25
  },
  {
    id: 'starting-business-26',
    question: 'Research the legal and regulatory requirements for your business type. List: business structure options, licenses needed, insurance required, and tax implications. What surprises you?',
    category: 'research',
    question_number: 26
  },
  {
    id: 'starting-business-27',
    question: 'Document all the tools and platforms you\'ll need (website hosting, payment processing, email, etc.). For each: research 3 options, compare costs, note which your competitors use.',
    category: 'research',
    question_number: 27
  },
  {
    id: 'starting-business-28',
    question: 'Find 5 YouTube videos, podcasts, or blog posts from people teaching others how to solve the problem you want to solve. What gets the most engagement? What questions appear in comments? What\'s missing?',
    category: 'research',
    question_number: 28
  },
  {
    id: 'starting-business-29',
    question: 'Research and document your market size. How many people have this problem? How many are currently paying for solutions? What percentage would you need to capture to hit your revenue goals?',
    category: 'research',
    question_number: 29
  },

  // PLANNING QUESTIONS (16 questions - 27%)
  {
    id: 'starting-business-30',
    question: 'Create your minimum viable offering. What\'s the simplest version of your product/service that would solve the core problem? What features are you tempted to add but could launch without?',
    category: 'planning',
    question_number: 30
  },
  {
    id: 'starting-business-31',
    question: 'Plan your financial runway. Calculate: monthly living expenses, monthly business costs, and total savings. How many months can you survive with zero revenue? What\'s your drop-dead date?',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'starting-business-32',
    question: 'Define your ideal first 10 customers. Be specific: What industry are they in? What\'s their budget? What problem keeps them up at night? Where do they currently look for solutions?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'starting-business-33',
    question: 'Map out your first 90 days week by week. What needs to happen in weeks 1-4, 5-8, 9-12? What are the critical milestones that indicate you\'re on track versus need to pivot?',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'starting-business-34',
    question: 'Design your testing strategy. How will you validate your idea with $500 or less? What specific result would prove people actually want this? What result would tell you to stop?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'starting-business-35',
    question: 'Plan your pricing strategy. List 3 different pricing models you could use. For each: estimate monthly revenue with 10, 50, 100 customers. Which model makes you feel most confident? Most nervous? Why?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'starting-business-36',
    question: 'Create your unique positioning. Complete this sentence 10 different ways: "Unlike [competitor], we [unique approach] so that [customer benefit]." Which version feels most true and most compelling?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'starting-business-37',
    question: 'Plan how you\'ll handle your current job during launch. Will you quit? Go part-time? Work nights/weekends? What conversations need to happen? What\'s the transition timeline?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'starting-business-38',
    question: 'Design your customer acquisition strategy. List 5 specific channels where you\'ll find customers. For each: estimate time investment, cost, and realistic number of customers in first 3 months.',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'starting-business-39',
    question: 'Map your decision triggers. What specific metrics or events would tell you to: keep going, change direction, or shut down? Be specific with numbers and timeframes.',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'starting-business-40',
    question: 'Plan your learning roadmap. List 5 critical skills/knowledge gaps. For each: find one specific resource (course, book, mentor) and schedule when you\'ll learn it before launch.',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'starting-business-41',
    question: 'Create your "good enough" standards. For website, branding, initial product - what\'s the minimum quality you need to launch versus what you\'re tempted to perfect? Where are you likely to over-invest time?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'starting-business-42',
    question: 'Design your risk mitigation plan. List your 5 biggest fears about starting this business. For each: what\'s the actual worst case? How would you recover? What can you do now to reduce the risk?',
    category: 'planning',
    question_number: 42
  },
  {
    id: 'starting-business-43',
    question: 'Plan your support and accountability. Who will you share your goals with? How often will you update them? Who can you ask for specific types of help (technical, emotional, business advice)?',
    category: 'planning',
    question_number: 43
  },
  {
    id: 'starting-business-44',
    question: 'Map your competitive advantage. Based on your research, what can you do better/different than existing solutions? What strengths do you have that competitors don\'t? Be brutally honest about what you\'re assuming versus what you know.',
    category: 'planning',
    question_number: 44
  },
  {
    id: 'starting-business-45',
    question: 'Create your revenue milestones. What monthly revenue would cover: just business costs, business + your minimum living expenses, business + comfortable salary? What customer numbers do you need for each milestone?',
    category: 'planning',
    question_number: 45
  },

  // ACTION QUESTIONS (15 questions - 25%)
  {
    id: 'starting-business-46',
    question: 'Write and send a message to 5 potential customers today. Describe the problem you want to solve and ask: Is this actually a problem for you? What have you tried? Would you pay for a better solution?',
    category: 'action',
    question_number: 46
  },
  {
    id: 'starting-business-47',
    question: 'Create a simple landing page this week. One headline describing what you do, three bullets on benefits, and a way for people to express interest. Share the link with 20 people and document their reactions.',
    category: 'action',
    question_number: 47
  },
  {
    id: 'starting-business-48',
    question: 'Schedule and complete 3 customer discovery calls this week. Prepare 5 questions. After each call, document: What surprised you? What invalidated your assumptions? What got them excited?',
    category: 'action',
    question_number: 48
  },
  {
    id: 'starting-business-49',
    question: 'Build or outline your absolute minimum product this week. If you had to deliver something to a customer in 2 weeks, what would it be? Create it or spec it out in detail.',
    category: 'action',
    question_number: 49
  },
  {
    id: 'starting-business-50',
    question: 'Reach out to 3 people who run businesses you admire. Ask for 20 minutes of their time. Prepare specific questions about their launch experience. Document their advice.',
    category: 'action',
    question_number: 50
  },
  {
    id: 'starting-business-51',
    question: 'Open a separate bank account for your business this week. Deposit your initial investment. This makes it real - document how it feels to take this concrete step.',
    category: 'action',
    question_number: 51
  },
  {
    id: 'starting-business-52',
    question: 'Create your first pitch. Write 3 versions: one sentence, one paragraph, one page. Practice the one-sentence version on 10 people. Document: Who immediately got it? Who looked confused? What questions came up?',
    category: 'action',
    question_number: 52
  },
  {
    id: 'starting-business-53',
    question: 'Set up your basic business infrastructure this week: register your business name, create email address, buy domain, set up simple website. Document what you learn and what takes longer than expected.',
    category: 'action',
    question_number: 53
  },
  {
    id: 'starting-business-54',
    question: 'Join 3 communities where your target customers spend time. Introduce yourself. Spend 30 minutes daily for a week just listening and helping. Document what you learn about their needs.',
    category: 'action',
    question_number: 54
  },
  {
    id: 'starting-business-55',
    question: 'Create your first offer and try to make one sale this month. Even if it\'s not perfect, even if you\'re nervous. Document: What objections did you hear? What made people hesitate? What would you change?',
    category: 'action',
    question_number: 55
  },
  {
    id: 'starting-business-56',
    question: 'Block out your business-building schedule for the next 4 weeks. Put specific tasks on your calendar. What will you work on Mon/Wed/Fri 6-8am? Sat mornings? Treat these like unmovable meetings.',
    category: 'action',
    question_number: 56
  },
  {
    id: 'starting-business-57',
    question: 'Document your first week in detail. What did you actually work on versus what you planned? Where did time disappear? What tasks energized you? What drained you? What will you change next week?',
    category: 'action',
    question_number: 57
  },
  {
    id: 'starting-business-58',
    question: 'Create accountability by going public. Post on social media or tell 10 people what you\'re building and what you hope to achieve in 30 days. Document your feelings before and after sharing.',
    category: 'action',
    question_number: 58
  },
  {
    id: 'starting-business-59',
    question: 'Set up a simple way to track key metrics from day one: conversations with potential customers, email signups, revenue, expenses. Review weekly. What trends do you notice after the first month?',
    category: 'action',
    question_number: 59
  },
  {
    id: 'starting-business-60',
    question: 'Review your first 30 days and make your continue/pivot/stop decision. Document the evidence: What validated your idea? What surprised you? What would you do differently if starting over today? What are your next 30-day goals?',
    category: 'action',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  for (const q of questions) {
    const { error } = await supabase
      .from('questions')
      .insert({
        id: q.id,
        question: q.question,
        category: q.category,
        template_id: 'starting-business',
        question_number: q.question_number
      });

    if (error) {
      console.error(`Error inserting question ${q.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${q.question_number}`);
    }

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\nDone! Verifying...');

  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'starting-business');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    const counts = {
      reflection: 0,
      research: 0,
      planning: 0,
      action: 0
    };

    data.forEach(q => {
      counts[q.category as keyof typeof counts]++;
    });

    console.log('\nBreakdown:');
    console.log(`Foundation (reflection): ${counts.reflection} questions (${((counts.reflection/data.length)*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} questions (${((counts.research/data.length)*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} questions (${((counts.planning/data.length)*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} questions (${((counts.action/data.length)*100).toFixed(1)}%)`);
    console.log(`Total: ${data.length} questions`);
  }
}

insertQuestions();
