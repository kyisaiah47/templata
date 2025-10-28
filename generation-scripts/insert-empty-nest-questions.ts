import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15)
  {
    id: 'empty-nest-1',
    question: 'Write about the last time someone asked "What do you do?" and you realized your answer was mostly about your kids. What did that moment feel like?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 1
  },
  {
    id: 'empty-nest-2',
    question: 'Document 3 specific moments in the past 6 months when you had unexpected free time. What did you do? What did that reveal about who you are now?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 2
  },
  {
    id: 'empty-nest-3',
    question: 'Reflect on a typical Tuesday evening before kids left. Now describe a Tuesday evening today. What disappeared? What do you miss? What don\'t you miss?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 3
  },
  {
    id: 'empty-nest-4',
    question: 'List 5 things you used to love doing before you had kids. For each one, note: Do you still love it? Have you tried it recently? Why or why not?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 4
  },
  {
    id: 'empty-nest-5',
    question: 'Write about the last conversation you had with your partner that wasn\'t about logistics, kids, or household management. When was it? What made it different?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 5
  },
  {
    id: 'empty-nest-6',
    question: 'Document 3 times in your parenting years when you thought "I can\'t wait until I have time to..." What were those things? Have you pursued any of them yet?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 6
  },
  {
    id: 'empty-nest-7',
    question: 'Reflect on your friendships over the past 5 years. Which ones were primarily "parent friendships"? Which ones existed beyond that? What does that mix tell you?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 7
  },
  {
    id: 'empty-nest-8',
    question: 'Write about a moment in the past month when you felt genuinely proud of yourself for something unrelated to your children. What was it? Why did it matter?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 8
  },
  {
    id: 'empty-nest-9',
    question: 'Document the last 3 times you said "I don\'t have time for that." Were they before or after kids left? What does your answer pattern reveal?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 9
  },
  {
    id: 'empty-nest-10',
    question: 'Reflect on how you spent last Saturday. If someone watched you all day, what would they say your priorities are based on your actions (not intentions)?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 10
  },
  {
    id: 'empty-nest-11',
    question: 'List the last 5 times you felt truly energized and alive in the past year. What were you doing? Who were you with? What patterns emerge?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 11
  },
  {
    id: 'empty-nest-12',
    question: 'Write about your relationship with your home over the past month. Which rooms feel different now? Which rooms do you avoid? Why?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 12
  },
  {
    id: 'empty-nest-13',
    question: 'Document 3 specific moments when you\'ve felt the absence most acutely. What triggered those feelings? What time of day? What were you doing?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 13
  },
  {
    id: 'empty-nest-14',
    question: 'Reflect on the stories you tell about yourself. What percentage are about your kids? What percentage are about you? What does that ratio mean?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 14
  },
  {
    id: 'empty-nest-15',
    question: 'Write about the last time you made a decision purely for yourself without considering anyone else\'s needs. What was it? How did it feel? When was it?',
    category: 'reflection',
    template_id: 'empty-nest',
    question_number: 15
  },
  // RESEARCH QUESTIONS (16-28)
  {
    id: 'empty-nest-16',
    question: 'Research 3 people you admire who are 5-10 years ahead of you in this transition. For each, document: What do they do with their time? What seems to bring them joy? What could you learn from their path?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 16
  },
  {
    id: 'empty-nest-17',
    question: 'Interview your partner about their hopes for this next chapter. Ask: What do they want more of? Less of? What surprised you about their answers?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 17
  },
  {
    id: 'empty-nest-18',
    question: 'Survey your current weekly calendar. Count hours in these categories: work, household tasks, social time, personal growth, rest. What does the actual data show vs. what you thought?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 18
  },
  {
    id: 'empty-nest-19',
    question: 'Research 3 activities or communities in your area that interest you. For each, find: When do they meet? What\'s the time commitment? What\'s holding you back from trying one?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 19
  },
  {
    id: 'empty-nest-20',
    question: 'Document conversations with 3 friends about how they spend their time now. For each, note: What do they prioritize? What do they struggle with? What resonates with you?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 20
  },
  {
    id: 'empty-nest-21',
    question: 'Investigate your financial picture for this next chapter. Review: What income changes are coming? What expenses are dropping? What new possibilities does this create?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 21
  },
  {
    id: 'empty-nest-22',
    question: 'Research what your adult children actually want from your relationship now. Ask them directly: How often do they want contact? What kind of support matters? What boundaries do they need?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 22
  },
  {
    id: 'empty-nest-23',
    question: 'Audit your home room by room. For each space, assess: Is it still serving its original purpose? What would make it more aligned with your current life? What changes feel scary vs. exciting?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 23
  },
  {
    id: 'empty-nest-24',
    question: 'Study your energy patterns over the past 2 weeks. Track: What times of day do you feel most alive? What activities drain you? What gives you energy? What patterns emerge?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 24
  },
  {
    id: 'empty-nest-25',
    question: 'Research career or learning opportunities you\'ve been curious about. For 3 options, find: What would it actually take to start? What\'s the time commitment? What\'s the first tiny step?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 25
  },
  {
    id: 'empty-nest-26',
    question: 'Investigate how other couples in your life have navigated this transition. Ask 3 couples: What worked? What was hard? What advice would they give? What surprised them?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 26
  },
  {
    id: 'empty-nest-27',
    question: 'Audit your current friendships. List each friend and note: How did you meet? Is it reciprocal? Does it energize or drain you? What would "enough" social connection look like?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 27
  },
  {
    id: 'empty-nest-28',
    question: 'Research the concept of "identity refresh" - read 2 articles or books about life transitions. Document: What resonated? What felt true? What gave you language for what you\'re experiencing?',
    category: 'research',
    template_id: 'empty-nest',
    question_number: 28
  },
  // PLANNING QUESTIONS (29-45)
  {
    id: 'empty-nest-29',
    question: 'Design your ideal week 6 months from now. Map out: What would each day include? What balance of structure vs. spontaneity feels right? What\'s non-negotiable?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 29
  },
  {
    id: 'empty-nest-30',
    question: 'Create a vision for your relationship with your adult children. Define: What role do you want to play in their lives? What boundaries matter? How will you know it\'s working?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 30
  },
  {
    id: 'empty-nest-31',
    question: 'Map out 3 possible versions of how you could spend the next 2 years. For each scenario, consider: What would you prioritize? What would you sacrifice? Which feels most alive?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 31
  },
  {
    id: 'empty-nest-32',
    question: 'Plan how you and your partner will reconnect. Brainstorm: What experiments could you try? What conversations need to happen? What would "good" look like in 6 months?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 32
  },
  {
    id: 'empty-nest-33',
    question: 'Design a system for processing the emotional waves of this transition. Consider: What helps when grief hits? Who can you talk to? What practices ground you?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 33
  },
  {
    id: 'empty-nest-34',
    question: 'Outline what "meaningful work" could look like in this chapter. Define: Does it need to be paid? Part-time or full? What impact matters? What\'s the timeline?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 34
  },
  {
    id: 'empty-nest-35',
    question: 'Create a framework for decision-making in this new phase. Determine: What criteria matter most? What are you saying yes to? What are you deliberately saying no to?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 35
  },
  {
    id: 'empty-nest-36',
    question: 'Map your social ecosystem for this next chapter. Plan: What mix of friendships do you need? How much alone time? What communities align with who you\'re becoming?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 36
  },
  {
    id: 'empty-nest-37',
    question: 'Design rituals or routines that mark this new chapter. Brainstorm: What daily practices ground you? What weekly rhythms create structure? What would help this feel intentional?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 37
  },
  {
    id: 'empty-nest-38',
    question: 'Plan how you\'ll handle the "empty rooms" - both literal and metaphorical. Consider: What deserves to stay? What needs to change? What wants to be created?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 38
  },
  {
    id: 'empty-nest-39',
    question: 'Outline your approach to personal growth in this season. Define: What skills intrigue you? What delayed dreams deserve attention? What\'s the right pace?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 39
  },
  {
    id: 'empty-nest-40',
    question: 'Create a financial plan that supports your vision. Map: What lifestyle do you want? What trade-offs are you willing to make? What investments in yourself matter most?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 40
  },
  {
    id: 'empty-nest-41',
    question: 'Design boundaries with your adult children that honor both connection and independence. Plan: What requests will you say yes to? What will you decline? How will you communicate this?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 41
  },
  {
    id: 'empty-nest-42',
    question: 'Map out how you\'ll build new friendships beyond parent connections. Strategy: Where will you meet people? What makes a friendship worth investing in? What\'s your criteria?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 42
  },
  {
    id: 'empty-nest-43',
    question: 'Plan experiments for rediscovering yourself. List: 5 small things you could try in the next month, each taking under 3 hours. What would reveal something about who you are now?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 43
  },
  {
    id: 'empty-nest-44',
    question: 'Design your home to reflect this new chapter. For each room that needs rethinking, plan: What purpose could it serve? What would make you want to spend time there? What\'s phase 1?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 44
  },
  {
    id: 'empty-nest-45',
    question: 'Create a communication plan with your partner about this transition. Outline: How often will you check in? What questions will you ask each other? What signals that one of you is struggling?',
    category: 'planning',
    template_id: 'empty-nest',
    question_number: 45
  },
  // ACTION QUESTIONS (46-60)
  {
    id: 'empty-nest-46',
    question: 'Schedule one "experiment day" in the next 2 weeks where you try something you\'ve been curious about. Write: What will you try? When exactly? How will you hold yourself accountable?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 46
  },
  {
    id: 'empty-nest-47',
    question: 'Book a specific conversation with your partner in the next week about your relationship in this new chapter. Decide: Where will you talk? What questions will you ask? What outcome would make it worthwhile?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 47
  },
  {
    id: 'empty-nest-48',
    question: 'Reach out to one person whose post-kid life you admire and ask to meet for coffee. Draft: The exact message you\'ll send. When will you send it?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 48
  },
  {
    id: 'empty-nest-49',
    question: 'Choose one room in your home that needs rethinking and make one small change this week. Commit: What room? What change? By when?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 49
  },
  {
    id: 'empty-nest-50',
    question: 'Sign up for one class, workshop, or community event in the next month that aligns with your interests (not your kids\'). Register: What is it? When? What\'s drawing you to it?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 50
  },
  {
    id: 'empty-nest-51',
    question: 'Create a weekly "date" with yourself for the next 4 weeks - non-negotiable solo time. Block: What day and time? What will you do? What will make it feel special?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 51
  },
  {
    id: 'empty-nest-52',
    question: 'Text your adult child(ren) with one specific question about what kind of contact feels good to them right now. Write: What will you ask? What are you hoping to learn?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 52
  },
  {
    id: 'empty-nest-53',
    question: 'Start one tiny daily practice that\'s just for you - 10 minutes or less. Commit: What practice? What time of day? How will you remember?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 53
  },
  {
    id: 'empty-nest-54',
    question: 'Invite one friend (not a parent friend) to do something in the next 2 weeks. Plan: Who? What activity? When will you reach out?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 54
  },
  {
    id: 'empty-nest-55',
    question: 'Set up a monthly "state of us" check-in with your partner starting this month. Schedule: What date? What questions will anchor the conversation? Where will you do it?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 55
  },
  {
    id: 'empty-nest-56',
    question: 'Make one concrete change to your daily routine that reflects your new reality. Implement: What will you change? Starting when? What will make it stick?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 56
  },
  {
    id: 'empty-nest-57',
    question: 'Write a letter to your adult child(ren) about who you\'re becoming in this chapter - send it or save it. Complete: When will you write it? What tone feels right? Will you send it?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 57
  },
  {
    id: 'empty-nest-58',
    question: 'Clear out one physical space that\'s tied to their childhood and reimagine it. Act: What space? What will it become? What\'s the first step this week?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 58
  },
  {
    id: 'empty-nest-59',
    question: 'Join one online community or group related to a personal interest you want to explore. Find: What community? When will you join? What\'s your first post or introduction?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 59
  },
  {
    id: 'empty-nest-60',
    question: 'Schedule a quarterly "life design" session with yourself to assess how this transition is going. Book: What date? What questions will you ask yourself? How will you track growth?',
    category: 'action',
    template_id: 'empty-nest',
    question_number: 60
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for empty-nest guide...`);

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${question.question_number}`);
    }
  }

  console.log('\nVerifying insertion...');
  const { data, error } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'empty-nest');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    console.log(`\nTotal questions inserted: ${data.length}`);
    const breakdown = data.reduce((acc: any, q: any) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});
    console.log('Breakdown by category:', breakdown);
  }
}

main();
