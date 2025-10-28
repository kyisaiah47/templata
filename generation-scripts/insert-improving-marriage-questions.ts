import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const questions = [
    // FOUNDATION QUESTIONS (14)
    {
      id: 'improving-marriage-1',
      question: 'Write about 3 specific moments in the past 6 months when you felt genuinely happy with your partner. What were you doing? What made those moments feel different from your everyday interactions?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 1
    },
    {
      id: 'improving-marriage-2',
      question: 'Reflect on the last time you had a conflict that left you feeling disconnected for more than a day. What was the pattern - what triggered it, how did it escalate, how did it resolve (or not)?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 2
    },
    {
      id: 'improving-marriage-3',
      question: 'Think back to the first year of your relationship. Write down 5 things you used to do together that made you feel close. Which of these still happen? When did they stop?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 3
    },
    {
      id: 'improving-marriage-4',
      question: 'Document 3 times in the past month when you wanted to share something with your partner but didn\'t. What stopped you? What does this pattern tell you?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 4
    },
    {
      id: 'improving-marriage-5',
      question: 'Reflect on how you and your partner handle stress. When one of you is overwhelmed, what typically happens to the other person? Write about a recent example.',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 5
    },
    {
      id: 'improving-marriage-6',
      question: 'Think about your parents\' marriages or the relationships you witnessed growing up. What patterns from those relationships do you see showing up in your own marriage?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 6
    },
    {
      id: 'improving-marriage-7',
      question: 'Write about a time when you felt truly understood by your partner. What did they do or say? When was the last time you felt this way?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 7
    },
    {
      id: 'improving-marriage-8',
      question: 'Reflect on the division of household responsibilities and mental load. Which tasks cause the most friction? What does this conflict really represent?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 8
    },
    {
      id: 'improving-marriage-9',
      question: 'Document your physical intimacy patterns over the past 3 months. When do you feel most connected physically? What gets in the way? What does this pattern reveal?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 9
    },
    {
      id: 'improving-marriage-10',
      question: 'Think about the last 5 decisions you made together (big or small). How did those conversations go? What pattern emerges about how you make choices as a couple?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 10
    },
    {
      id: 'improving-marriage-11',
      question: 'Reflect on what you needed from a partner when you first got married versus what you need now. How have your needs evolved? Have you communicated these changes?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 11
    },
    {
      id: 'improving-marriage-12',
      question: 'Write about a moment when you felt lonely despite being with your partner. What was missing in that moment? How often does this happen?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 12
    },
    {
      id: 'improving-marriage-13',
      question: 'Think about your different communication styles - when do they complement each other, and when do they clash? Write about a recent example of each.',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 13
    },
    {
      id: 'improving-marriage-14',
      question: 'Reflect on the last time you felt proud of your partner. What were they doing? When was the last time you told them about it?',
      category: 'reflection',
      template_id: 'improving-marriage',
      question_number: 14
    },
    // RESEARCH QUESTIONS (12)
    {
      id: 'improving-marriage-15',
      question: 'Track your interactions for the next 3 days: How many times do you have meaningful conversations (not logistics)? How many times do you touch affectionately? What patterns do you notice?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 15
    },
    {
      id: 'improving-marriage-16',
      question: 'Research the "Five Love Languages" framework. Write down your primary and secondary love languages, and what you think your partner\'s are. Document 3 recent examples that support your assessment.',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 16
    },
    {
      id: 'improving-marriage-17',
      question: 'Create a timeline of your relationship\'s major transitions (marriage, moves, job changes, kids, losses). Mark which periods felt strongest and which felt most strained. What correlations do you see?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 17
    },
    {
      id: 'improving-marriage-18',
      question: 'Document your typical weekday evening routine hour by hour. How much quality time do you actually spend together? What\'s competing for your attention?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 18
    },
    {
      id: 'improving-marriage-19',
      question: 'List the last 10 times you or your partner apologized. What was the apology for? Did it feel genuine? Was the issue actually resolved? What pattern emerges?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 19
    },
    {
      id: 'improving-marriage-20',
      question: 'Research the Gottman "Four Horsemen" (criticism, contempt, defensiveness, stonewalling). For each one, write down a recent example from your relationship, if applicable.',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 20
    },
    {
      id: 'improving-marriage-21',
      question: 'Track your emotional check-ins: Over the next week, note when you ask "How was your day?" and what kind of answer you get. Are these real connections or just routines?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 21
    },
    {
      id: 'improving-marriage-22',
      question: 'Create a list of topics that reliably lead to arguments. For each, write down: What\'s the surface issue? What\'s the deeper need underneath?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 22
    },
    {
      id: 'improving-marriage-23',
      question: 'Document your alone time versus couple time over the past month. What\'s the ratio? How does each of you feel about this balance?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 23
    },
    {
      id: 'improving-marriage-24',
      question: 'Research common stressors in your life stage (early marriage, parenting years, empty nest, etc.). Which of these are affecting your relationship right now? Be specific.',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 24
    },
    {
      id: 'improving-marriage-25',
      question: 'List all the people and commitments that take your time and energy (work, kids, extended family, hobbies, friends). Where does your marriage rank in actual time invested?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 25
    },
    {
      id: 'improving-marriage-26',
      question: 'Track moments of appreciation: For the next 5 days, note when you feel grateful for something your partner did and whether you expressed it. What\'s your ratio of felt gratitude to expressed gratitude?',
      category: 'research',
      template_id: 'improving-marriage',
      question_number: 26
    },
    // PLANNING QUESTIONS (15)
    {
      id: 'improving-marriage-27',
      question: 'Based on your reflection so far, identify 3 specific patterns you want to change. For each, write what you\'ll do differently and what support you need from your partner.',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 27
    },
    {
      id: 'improving-marriage-28',
      question: 'Design your ideal weekly rhythm as a couple. What would make you feel connected? How much time would you spend together? Doing what? Be realistic about constraints.',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 28
    },
    {
      id: 'improving-marriage-29',
      question: 'Plan a conversation with your partner about your relationship. What do you want them to know? What questions do you want to ask them? What outcome would make this conversation feel successful?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 29
    },
    {
      id: 'improving-marriage-30',
      question: 'Think about the conflicts you documented earlier. For each recurring issue, design a different approach - what could you do or say differently next time?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 30
    },
    {
      id: 'improving-marriage-31',
      question: 'Create a vision for your relationship 1 year from now. What does "better" look like specifically? What would you be doing differently? How would you be feeling?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 31
    },
    {
      id: 'improving-marriage-32',
      question: 'Plan how to rebuild one aspect of your relationship that has eroded (date nights, deep conversations, physical intimacy, shared activities). What\'s the first step? What\'s the smallest version you could try?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 32
    },
    {
      id: 'improving-marriage-33',
      question: 'Design a system for regular emotional check-ins. When would they happen? What questions would you ask each other? What would make these feel safe, not forced?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 33
    },
    {
      id: 'improving-marriage-34',
      question: 'Think about the unmet needs you\'ve identified. Which ones can you meet for yourself? Which ones truly require your partner? Plan how to communicate the ones your partner needs to know.',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 34
    },
    {
      id: 'improving-marriage-35',
      question: 'Map out the external stressors affecting your marriage. For each one, plan: Is this temporary or ongoing? What\'s in your control? What support would help?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 35
    },
    {
      id: 'improving-marriage-36',
      question: 'Plan how to create more moments like the happy ones you documented earlier. What conditions made those moments possible? How can you create those conditions more regularly?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 36
    },
    {
      id: 'improving-marriage-37',
      question: 'Design a framework for making big decisions together that honors both of your needs. What\'s worked before? What hasn\'t? What structure would help?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 37
    },
    {
      id: 'improving-marriage-38',
      question: 'Think about your different love languages. Plan 3 specific ways you could "speak" your partner\'s love language this month, even if it doesn\'t come naturally to you.',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 38
    },
    {
      id: 'improving-marriage-39',
      question: 'Create a strategy for managing the division of household tasks. What needs to change? What conversation needs to happen? What trade-offs might work for both of you?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 39
    },
    {
      id: 'improving-marriage-40',
      question: 'Plan how to protect your relationship during particularly stressful times. What boundaries do you need? What support structures? What can you let go of temporarily?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 40
    },
    {
      id: 'improving-marriage-41',
      question: 'Design a repair process for when you hurt each other. What does a real apology look like for each of you? What helps you move forward versus staying stuck?',
      category: 'planning',
      template_id: 'improving-marriage',
      question_number: 41
    },
    // ACTION QUESTIONS (14)
    {
      id: 'improving-marriage-42',
      question: 'Schedule a specific date and time for a relationship conversation with your partner this week. Write down where you\'ll have it and what you want to discuss. Put it in your calendar.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 42
    },
    {
      id: 'improving-marriage-43',
      question: 'Choose one small way to show appreciation today. Do it, then document what you did and how your partner responded.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 43
    },
    {
      id: 'improving-marriage-44',
      question: 'Identify one recurring conflict and write out your script for handling it differently next time it comes up. Include what you\'ll say and what you\'ll do if you start to feel defensive.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 44
    },
    {
      id: 'improving-marriage-45',
      question: 'Create a list of 10 low-effort, high-connection activities you could do together this month. Schedule at least 2 of them now.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 45
    },
    {
      id: 'improving-marriage-46',
      question: 'Write down 3 specific things you want to tell your partner but haven\'t. Choose the most important one and plan when and how you\'ll say it this week.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 46
    },
    {
      id: 'improving-marriage-47',
      question: 'Research one resource that could help your relationship (book, podcast, therapist, workshop). Commit to one specific action: buy the book, schedule the appointment, or share the recommendation with your partner.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 47
    },
    {
      id: 'improving-marriage-48',
      question: 'Implement one boundary that would protect your relationship. Write down what it is, why it matters, and how you\'ll maintain it. Start this week.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 48
    },
    {
      id: 'improving-marriage-49',
      question: 'Try speaking your partner\'s love language in one specific way tomorrow. Document what you did and what happened.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 49
    },
    {
      id: 'improving-marriage-50',
      question: 'Take one item from your mental load and either delegate it, automate it, or discuss sharing it with your partner. Act on this within 48 hours.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 50
    },
    {
      id: 'improving-marriage-51',
      question: 'Set up one recurring time for connection (morning coffee, evening walk, Sunday check-in). Put it in your calendar and protect it for the next 4 weeks.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 51
    },
    {
      id: 'improving-marriage-52',
      question: 'Address one unmet need by taking action - either meeting it yourself or having a direct conversation with your partner about it. Do this within the next 3 days.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 52
    },
    {
      id: 'improving-marriage-53',
      question: 'Create a shared list (digital or physical) where you both can add date ideas, conversation topics, or things you appreciate about each other. Add your first 3 entries today.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 53
    },
    {
      id: 'improving-marriage-54',
      question: 'Identify one external stressor you can reduce or eliminate. Take the first concrete step toward that this week.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 54
    },
    {
      id: 'improving-marriage-55',
      question: 'Commit to one change in your evening routine that would create more quality time together. Implement it starting tonight and reassess after one week.',
      category: 'action',
      template_id: 'improving-marriage',
      question_number: 55
    }
  ];

  console.log(`Inserting ${questions.length} questions for improving-marriage...`);

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

  console.log('\n✅ All questions inserted successfully!');
}

main();
