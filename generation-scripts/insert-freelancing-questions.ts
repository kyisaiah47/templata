import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-14) - 25%
  {
    id: 'freelancing-1',
    question: 'Write about the last 3 times in the past year when you felt most energized and "in flow" at work. What were you doing? Who were you working with? What made those moments feel different from your regular workday?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 1
  },
  {
    id: 'freelancing-2',
    question: 'Reflect on a typical Monday morning over the past 3 months. Write down the specific thoughts or feelings you have about starting your work week. When did this pattern start? What does it tell you about your current work situation?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 2
  },
  {
    id: 'freelancing-3',
    question: 'Document 3-5 moments in your career when you had complete control over HOW you did your work (not just what you did). What did you choose to do differently? How did that autonomy feel?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 3
  },
  {
    id: 'freelancing-4',
    question: 'Think about the last time you worked with a difficult colleague, manager, or client. Write down what made it difficult. Now reflect: would this situation exist if you could choose who you work with?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 4
  },
  {
    id: 'freelancing-5',
    question: 'List the last 5 times you\'ve talked about money or negotiated price in any context (work salary, freelance rate, splitting bills, buying something). Which felt comfortable? Which felt awkward? What pattern do you notice about your relationship with pricing your own value?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 5
  },
  {
    id: 'freelancing-6',
    question: 'Reflect on your past 6 months of work. Write about 2-3 projects where YOU made the key decisions vs. projects where you executed someone else\'s decisions. Which type of work energized you more? What does that tell you?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 6
  },
  {
    id: 'freelancing-7',
    question: 'Document a time in the past year when you had an idea for how to do something better but couldn\'t implement it due to company constraints. What was the idea? What stopped you? What would you have done differently if you\'d had full control?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 7
  },
  {
    id: 'freelancing-8',
    question: 'Think about your childhood or early career. Write about a time when you created something or started something from scratch (could be a lemonade stand, school project, side hustle, anything). How did you feel? What motivated you?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 8
  },
  {
    id: 'freelancing-9',
    question: 'Reflect on the people in your life (family, partner, close friends). List 3-5 recent conversations where you talked about work. What did you say? What didn\'t you say? Who knows you\'re thinking about freelancing?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 9
  },
  {
    id: 'freelancing-10',
    question: 'Write about your relationship with stability vs. uncertainty. Describe a past situation where something felt uncertain or unstable (job change, move, relationship). How did you handle it? What did you learn about yourself?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 10
  },
  {
    id: 'freelancing-11',
    question: 'Document the last time you worked on a personal project or side hustle outside your main job. What was it? Why did you start it? What happened to it? What does this tell you about your entrepreneurial energy?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 11
  },
  {
    id: 'freelancing-12',
    question: 'Think about someone you know who is freelancing or running their own business. Write down: what do you admire about their situation? What concerns you about it? Be specific.',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 12
  },
  {
    id: 'freelancing-13',
    question: 'Reflect on your past year\'s biggest work achievement - something you\'re genuinely proud of. Write down: what percentage of the credit was yours vs. your team/company? If you\'d done this as a freelancer, what would have been different?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 13
  },
  {
    id: 'freelancing-14',
    question: 'Write about what "success" looks like to you in 3 years. Not what you think you should want - what do you actually picture? Where are you working? Who are you working with? What does a Tuesday afternoon look like?',
    category: 'reflection',
    template_id: 'freelancing',
    question_number: 14
  },
  // Research Questions (15-27) - 23%
  {
    id: 'freelancing-15',
    question: 'Research 10 people who do work similar to what you want to freelance in. For each, document: their title/niche, where you found them (LinkedIn, personal site, platform), how they describe their services, and one thing that stands out about their positioning.',
    category: 'research',
    template_id: 'freelancing',
    question_number: 15
  },
  {
    id: 'freelancing-16',
    question: 'Investigate 5 freelance marketplaces or platforms in your field (Upwork, Toptal, Fiverr, Contra, industry-specific platforms). For each, note: typical project rates, client reviews, how competitive it looks, whether your skillset fits. Which 2-3 feel most aligned with your work?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 16
  },
  {
    id: 'freelancing-17',
    question: 'Research the financials of freelancing in your area. Calculate: your current monthly take-home pay, your monthly essential expenses, your current benefits value (health insurance, retirement match, PTO), and estimate what the freelance equivalent would cost you. What\'s the gap?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 17
  },
  {
    id: 'freelancing-18',
    question: 'Document your current work situation\'s hard facts. List: your salary, benefits, PTO days, work-from-home policy, typical hours, commute time, how much control you have over projects, upcoming promotions or raises. What\'s the total package worth?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 18
  },
  {
    id: 'freelancing-19',
    question: 'Research 3 competitors or established freelancers in your exact niche. For each, document: their pricing (if public), their client testimonials, their portfolio/case studies, their years of experience. How do you compare? What\'s your competitive advantage?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 19
  },
  {
    id: 'freelancing-20',
    question: 'Investigate the legal and business setup for your location. Research: do you need an LLC or can you start as sole proprietor? What\'s required to register? What are the tax implications? What licenses or certifications are needed? List specific resources you found.',
    category: 'research',
    template_id: 'freelancing',
    question_number: 20
  },
  {
    id: 'freelancing-21',
    question: 'Research your potential market size. Calculate or estimate: how many businesses or individuals might need your service in your target geography, what they typically pay, how often they need this service, and what percentage you\'d need to capture to hit your income goals.',
    category: 'research',
    template_id: 'freelancing',
    question_number: 21
  },
  {
    id: 'freelancing-22',
    question: 'Document your network\'s freelance potential. Go through your LinkedIn connections, past colleagues, and professional contacts. List 10-15 people who: (1) might hire you, (2) know people who might hire you, or (3) are freelancing and could give you advice. Note your last interaction with each.',
    category: 'research',
    template_id: 'freelancing',
    question_number: 22
  },
  {
    id: 'freelancing-23',
    question: 'Research your industry\'s freelance timing and seasonality. Look for patterns: when do companies typically hire freelancers? Are there busy seasons or slow periods? When do budgets refresh? What does this mean for your launch timing?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 23
  },
  {
    id: 'freelancing-24',
    question: 'Investigate tools and systems you\'ll need. Research and list: invoicing software, project management tools, time tracking, contracts/proposals, accounting, website/portfolio platform. For your top 3 choices in each category, note the cost and learning curve.',
    category: 'research',
    template_id: 'freelancing',
    question_number: 24
  },
  {
    id: 'freelancing-25',
    question: 'Research insurance and risk management. Calculate costs for: health insurance (if leaving employer coverage), liability insurance, disability insurance, equipment insurance. What\'s the total monthly cost? What happens if you can\'t work for 3 months?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 25
  },
  {
    id: 'freelancing-26',
    question: 'Document your skills gap. List the top 10 services or deliverables in your field. For each, honestly rate yourself 1-10. Which 3 skills would make you most hireable if you improved them? What would it take to improve?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 26
  },
  {
    id: 'freelancing-27',
    question: 'Research your current employer\'s policies. Find out: non-compete clauses in your contract, intellectual property agreements, policies about moonlighting or side work, notice period requirements. What constraints do these create?',
    category: 'research',
    template_id: 'freelancing',
    question_number: 27
  },
  // Planning Questions (28-42) - 27%
  {
    id: 'freelancing-28',
    question: 'Calculate your freelance financial runway. Based on your research, write down: your monthly essential expenses as a freelancer (including insurance), how many months of savings you currently have, how much you\'d need before you feel comfortable leaving your job. What\'s your target date to hit that number?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 28
  },
  {
    id: 'freelancing-29',
    question: 'Design your service offering. Write out 3-5 specific services you\'ll offer. For each, describe: exactly what\'s included, how long it takes, who it\'s for, and what transformation or outcome the client gets. Make them concrete enough that you could list them on a website today.',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 29
  },
  {
    id: 'freelancing-30',
    question: 'Create your pricing strategy. For your main service offerings, write down: your ideal rate, your "getting started" rate, your "I\'m desperate" minimum, and your "dream client" rate. For each rate, explain your reasoning. What rate will you lead with?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 30
  },
  {
    id: 'freelancing-31',
    question: 'Plan your transition timeline. Map out the next 12 months in quarters. For each quarter, write: what you\'ll accomplish while still employed, when you\'ll start taking clients, when you\'ll go full-time, and what financial or client milestones need to happen first.',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 31
  },
  {
    id: 'freelancing-32',
    question: 'Design your ideal client profile. Describe in detail: company size, industry, decision-maker title, budget range, project type, and values/culture. Now write about 3 specific companies or people who fit this profile. How will you reach them?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 32
  },
  {
    id: 'freelancing-33',
    question: 'Map out your client acquisition strategy. For your first 5 clients, write down: where you\'ll find them (personal network, platform, outreach, etc.), what you\'ll say to them, why they\'d hire you over someone else, and when you\'ll start this outreach.',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 33
  },
  {
    id: 'freelancing-34',
    question: 'Plan your positioning and differentiation. Complete these sentences: "I help [specific type of client] achieve [specific outcome] through [your unique approach]." Write 3 different versions. Which feels most authentic? Which would make someone say "that\'s exactly what I need"?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 34
  },
  {
    id: 'freelancing-35',
    question: 'Create your boundary framework. Define your rules for: working hours, response time to clients, weekend/evening availability, project scope changes, difficult clients, and when you\'ll say no. What are your non-negotiables?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 35
  },
  {
    id: 'freelancing-36',
    question: 'Design your business model evolution. Write about: how you\'ll start (hourly? project-based? retainer?), what you\'ll transition to in year 2, and what your ideal business looks like in year 3. What would let you work less but earn more?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 36
  },
  {
    id: 'freelancing-37',
    question: 'Plan your safety net and worst-case scenario. Write down: if you get no clients for 3 months, what will you do? If you hate freelancing after 6 months, what\'s your backup plan? What would make you go back to employment? Have you researched how long it takes to get hired in your field?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 37
  },
  {
    id: 'freelancing-38',
    question: 'Map out your learning and skill development plan. Based on your skills gap research, identify: the top 3 skills you\'ll develop, how you\'ll develop them (courses, practice projects, mentorship), and when you\'ll work on this while transitioning.',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 38
  },
  {
    id: 'freelancing-39',
    question: 'Create your marketing and visibility strategy. Plan how you\'ll be findable: will you have a website? What will you post on LinkedIn? Will you write content? Speak at events? Join communities? List 5-7 specific, repeated actions you\'ll take to stay visible.',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 39
  },
  {
    id: 'freelancing-40',
    question: 'Design your onboarding and delivery process. Write out step-by-step: how someone goes from "interested" to "signed client" to "completed project." What happens at each stage? What documents do you need? What\'s your communication cadence?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 40
  },
  {
    id: 'freelancing-41',
    question: 'Plan your relationship with your current employer. Decide: will you tell them you\'re building a freelance business? When? Will you ask to transition to part-time? Will you offer to freelance for them? What\'s your notice period strategy?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 41
  },
  {
    id: 'freelancing-42',
    question: 'Create your sustainability plan. Write down: how many clients per month is sustainable? How many hours per week will you work? How will you handle time off? What will you do to avoid burnout? When will you start saying no to projects?',
    category: 'planning',
    template_id: 'freelancing',
    question_number: 42
  },
  // Action Questions (43-56) - 25%
  {
    id: 'freelancing-43',
    question: 'Create your portfolio or work samples. This week, gather 3-5 examples of your best work. For each, write: the project context, your role, the outcome, and client testimonial (even if internal). Format this in a way you could share with a potential client today.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 43
  },
  {
    id: 'freelancing-44',
    question: 'Draft your service descriptions for your website or pitch. Write the exact copy you\'d use to describe your top 3 services. Include: what it is, who it\'s for, what\'s included, the outcome, and the starting price or range. Read it out loud - does it sound like you?',
    category: 'action',
    template_id: 'freelancing',
    question_number: 44
  },
  {
    id: 'freelancing-45',
    question: 'Set up your basic business infrastructure this week. Choose and create accounts for: invoicing software, email for business, project management tool, and contract template. Even if you don\'t launch for months, having these ready removes friction.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 45
  },
  {
    id: 'freelancing-46',
    question: 'Write your outreach message template. Draft the email or message you\'ll send to your first 10 potential clients. Include: brief intro, what you do, why you\'re reaching out to them specifically, and a clear call-to-action. Test it with one person this week.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 46
  },
  {
    id: 'freelancing-47',
    question: 'Create your rate card and pricing document. Make a simple one-page doc with: your services, your rates (or starting rates), what\'s included, payment terms, and any package deals. This is for YOU to reference when someone asks "how much do you charge?"',
    category: 'action',
    template_id: 'freelancing',
    question_number: 47
  },
  {
    id: 'freelancing-48',
    question: 'Schedule 3 coffee chats or video calls this month with people who are already freelancing. Prepare specific questions: how they got their first client, how they price, what surprised them, what they wish they\'d known, and if they\'d do it again.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 48
  },
  {
    id: 'freelancing-49',
    question: 'Set up your "freelance launch" savings account today. Open a separate account if needed, and set up automatic transfers. Calculate: how much you need total, how much you\'ll save per month, and what date you\'ll hit your target. Make the first transfer now.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 49
  },
  {
    id: 'freelancing-50',
    question: 'Write your resignation or transition conversation plan. Draft exactly what you\'ll say to your manager when the time comes. Practice it out loud. What\'s your ideal notice period? What projects will you transition? When will you have this conversation?',
    category: 'action',
    template_id: 'freelancing',
    question_number: 50
  },
  {
    id: 'freelancing-51',
    question: 'Create your client contract template. Research standard freelance contracts in your industry, and draft your version covering: scope, payment terms, timeline, revisions, cancellation, intellectual property. Consider having a lawyer review it. Get this done before you need it.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 51
  },
  {
    id: 'freelancing-52',
    question: 'Build your initial outreach list. Create a spreadsheet with 25-50 potential clients or referral sources. For each, note: name, company, why they\'re a good fit, how you\'ll reach them, and any existing connection. Rank them by priority.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 52
  },
  {
    id: 'freelancing-53',
    question: 'Set up your tracking and accountability system. Create a simple doc or spreadsheet to track: client conversations, proposals sent, revenue, expenses, and hours worked. Decide what metrics matter to you. Set a weekly time to review these numbers.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 53
  },
  {
    id: 'freelancing-54',
    question: 'Take one small paid project this month. Even if it\'s tiny - $100, 5 hours, for a friend. The goal is to practice the full cycle: proposal, contract, work, invoice, getting paid. Document what went smoothly and what felt awkward.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 54
  },
  {
    id: 'freelancing-55',
    question: 'Write your "why I\'m going freelance" story. Draft a 3-paragraph LinkedIn post or email explaining your decision. Not polished PR - authentic reasoning. What are you moving toward? Practice saying this out loud until it feels natural.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 55
  },
  {
    id: 'freelancing-56',
    question: 'Schedule your monthly check-in for the next 6 months. Put recurring calendar blocks (30 min each) to review: financial progress, client pipeline, what\'s working, what\'s not, and next month\'s priorities. Commit to showing up for these, even when busy.',
    category: 'action',
    template_id: 'freelancing',
    question_number: 56
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for freelancing guide...`);

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
    .eq('template_id', 'freelancing');

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

    const total = verifyData.length;
    console.log('\n=== Verification ===');
    console.log(`Total questions: ${total}`);
    console.log(`Foundation (reflection): ${counts.reflection} (${Math.round(counts.reflection/total*100)}%)`);
    console.log(`Research: ${counts.research} (${Math.round(counts.research/total*100)}%)`);
    console.log(`Planning: ${counts.planning} (${Math.round(counts.planning/total*100)}%)`);
    console.log(`Action: ${counts.action} (${Math.round(counts.action/total*100)}%)`);
  }
}

insertQuestions();
