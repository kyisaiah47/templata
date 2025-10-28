import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (11 questions - 25%)
  {
    id: 'minimalist-lifestyle-1',
    question: 'Think about the last time you bought something to make yourself feel better. What were you actually feeling? Did the purchase work? How long did the feeling last?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 1
  },
  {
    id: 'minimalist-lifestyle-2',
    question: 'Write about your earliest memory of accumulating possessions. What did you collect or save? What did keeping those things mean to you then?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 2
  },
  {
    id: 'minimalist-lifestyle-3',
    question: 'Recall 3 times in the past year when you felt overwhelmed by your stuff. What specifically triggered that feeling? What did you do about it?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 3
  },
  {
    id: 'minimalist-lifestyle-4',
    question: 'Think about the most peaceful, clutter-free space you\'ve ever been in. Where was it? What made it feel different? How did you feel in that environment?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 4
  },
  {
    id: 'minimalist-lifestyle-5',
    question: 'Reflect on someone you know who lives simply. What specifically do they do differently? What have you noticed about how they make decisions about possessions?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 5
  },
  {
    id: 'minimalist-lifestyle-6',
    question: 'Write about a time you let go of something meaningful (moved, donated, sold). How did you feel before? During? Six months later? What surprised you about that experience?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 6
  },
  {
    id: 'minimalist-lifestyle-7',
    question: 'Think about what you say yes to that you wish you could say no to. What commitments drain you? When did these obligations start? Why do you keep them?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 7
  },
  {
    id: 'minimalist-lifestyle-8',
    question: 'Recall moments in the past month when you felt like you had "enough" - enough stuff, enough activities, enough connection. What made those moments different?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 8
  },
  {
    id: 'minimalist-lifestyle-9',
    question: 'Write about what you\'re afraid might happen if you got rid of more things. What specific scenarios worry you? Where do those fears come from?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 9
  },
  {
    id: 'minimalist-lifestyle-10',
    question: 'Think about the difference between "simple" and "empty" in your mind. What would make a minimal life feel rich versus depriving? What do you need to feel full?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 10
  },
  {
    id: 'minimalist-lifestyle-11',
    question: 'Reflect on your patterns around acquiring things. Do you shop when bored? Stressed? Celebrating? What are you really seeking when you buy something new?',
    category: 'reflection',
    template_id: 'minimalist-lifestyle',
    question_number: 11
  },

  // RESEARCH QUESTIONS (10 questions - 22%)
  {
    id: 'minimalist-lifestyle-12',
    question: 'Document every item in your bedroom (excluding built-in furniture). For each category: How many do you have? How many do you actually use? What surprises you?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 12
  },
  {
    id: 'minimalist-lifestyle-13',
    question: 'Open your closet and count: Total clothing items, items worn in past month, items with tags still on, items that don\'t fit. What do these numbers tell you?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 13
  },
  {
    id: 'minimalist-lifestyle-14',
    question: 'Review your digital clutter: How many unread emails? Unused apps on your phone? Files on your desktop? What percentage of your digital stuff do you actively use?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 14
  },
  {
    id: 'minimalist-lifestyle-15',
    question: 'Track your time for one typical weekday. For each activity: Did you choose it or feel obligated? Does it align with your values? What would you eliminate if you could?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 15
  },
  {
    id: 'minimalist-lifestyle-16',
    question: 'List all your current commitments (subscriptions, memberships, regular activities, standing obligations). For each: When did you start? What would happen if you stopped?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 16
  },
  {
    id: 'minimalist-lifestyle-17',
    question: 'Inventory one problem area (junk drawer, storage unit, garage). Document what\'s actually in there. When did you last use each category of items? Why are you keeping them?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 17
  },
  {
    id: 'minimalist-lifestyle-18',
    question: 'Count how many duplicates you own: pens, phone chargers, water bottles, bags, scissors. What does this redundancy pattern reveal about your relationship with stuff?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 18
  },
  {
    id: 'minimalist-lifestyle-19',
    question: 'Review your purchases from the past 3 months. Which items are you still using weekly? Which have you forgotten about? What pattern do you notice?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 19
  },
  {
    id: 'minimalist-lifestyle-20',
    question: 'Document your "just in case" items - things you keep because you might need them someday. How long have you had them? Have you needed them? What\'s the actual cost of storing them?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 20
  },
  {
    id: 'minimalist-lifestyle-21',
    question: 'List all the relationships in your life. For each: Does it energize or drain you? Do you spend time together out of genuine desire or obligation? Which feel cluttered?',
    category: 'research',
    template_id: 'minimalist-lifestyle',
    question_number: 21
  },

  // PLANNING QUESTIONS (13 questions - 28%)
  {
    id: 'minimalist-lifestyle-22',
    question: 'Define what "enough" looks like for you in 3 key areas (possessions, commitments, digital presence). What specific threshold would feel right? What would feel too much?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 22
  },
  {
    id: 'minimalist-lifestyle-23',
    question: 'Create your personal decision framework: When you\'re considering keeping something, what 3-5 questions will you ask? What criteria must it meet to stay?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 23
  },
  {
    id: 'minimalist-lifestyle-24',
    question: 'Design your ideal daily routine with minimal commitments. What stays? What goes? What specific hours would be protected for what matters most to you?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 24
  },
  {
    id: 'minimalist-lifestyle-25',
    question: 'Plan your decluttering sequence: Which room or category will you tackle first? Why? What order makes sense for your specific situation? What would derail you?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 25
  },
  {
    id: 'minimalist-lifestyle-26',
    question: 'Develop your "one in, one out" strategy. For which categories will you implement this? What specific system will you use to track it? What are your exceptions?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 26
  },
  {
    id: 'minimalist-lifestyle-27',
    question: 'Map out your "friction points" - situations where you\'ll be tempted to accumulate (gifts, sales, free stuff). For each: What specific boundary will you set?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 27
  },
  {
    id: 'minimalist-lifestyle-28',
    question: 'Create your plan for sentimental items. Which categories will you keep (photos, letters, etc.)? What specific limit will you set? How will you honor memories without keeping everything?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 28
  },
  {
    id: 'minimalist-lifestyle-29',
    question: 'Design your digital minimalism strategy: Which apps stay? What notification settings? How will you manage email? What boundaries around screen time feel right?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 29
  },
  {
    id: 'minimalist-lifestyle-30',
    question: 'Plan how you\'ll handle social pressure to consume (birthday gifts, holiday traditions, keeping up with others). What phrases will you use? What alternative suggestions can you offer?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 30
  },
  {
    id: 'minimalist-lifestyle-31',
    question: 'Develop your maintenance system: What daily habits will prevent re-cluttering? What weekly reviews? What monthly check-ins? Be specific about timing and triggers.',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 31
  },
  {
    id: 'minimalist-lifestyle-32',
    question: 'Create your decision protocol for new commitments. When someone asks for your time/energy: What questions will you ask yourself? How long will you wait before answering? What\'s your default response?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 32
  },
  {
    id: 'minimalist-lifestyle-33',
    question: 'Plan your relationship with shopping: Which stores/sites will you unsubscribe from? What waiting period before purchases? What question will you ask before buying anything?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 33
  },
  {
    id: 'minimalist-lifestyle-34',
    question: 'Design your "reset" protocol for when clutter creeps back in. What specific triggers will prompt a reset? What exact actions will you take? How will you prevent the shame spiral?',
    category: 'planning',
    template_id: 'minimalist-lifestyle',
    question_number: 34
  },

  // ACTION QUESTIONS (11 questions - 25%)
  {
    id: 'minimalist-lifestyle-35',
    question: 'Clear one visible surface right now (desk, counter, nightstand). Remove everything, wipe it clean, return only what you used this week. How does it feel?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 35
  },
  {
    id: 'minimalist-lifestyle-36',
    question: 'Fill one bag/box with items to donate today. Set a 20-minute timer and gather things you haven\'t used in 6+ months. Where will you take it this week?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 36
  },
  {
    id: 'minimalist-lifestyle-37',
    question: 'Unsubscribe from 10 email lists right now. Which ones did you choose? How much mental clutter will this eliminate? What time will you save weekly?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 37
  },
  {
    id: 'minimalist-lifestyle-38',
    question: 'Delete 5 apps from your phone immediately. Which ones? What were you using them for? What will you do instead when you reach for them out of habit?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 38
  },
  {
    id: 'minimalist-lifestyle-39',
    question: 'Decline one commitment this week that you\'ve been dreading. What will you say no to? What specific words will you use? What will you do with that freed time?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 39
  },
  {
    id: 'minimalist-lifestyle-40',
    question: 'Implement a 30-day list starting today. Before buying anything non-essential, add it to this list. Where will you keep the list? What date will you review it?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 40
  },
  {
    id: 'minimalist-lifestyle-41',
    question: 'Schedule your first decluttering session. What specific day/time? Which area will you tackle? How long will you work? Put it in your calendar now.',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 41
  },
  {
    id: 'minimalist-lifestyle-42',
    question: 'Create a "maybe box" for items you\'re unsure about. Box them up today, seal it, date it for 3 months from now. What will you do if you don\'t open it?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 42
  },
  {
    id: 'minimalist-lifestyle-43',
    question: 'Take before photos of your three most cluttered spaces right now. Store them where you\'ll see them weekly. What date will you take "after" photos?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 43
  },
  {
    id: 'minimalist-lifestyle-44',
    question: 'Share your minimalism goal with one person who will support you (not judge). Who will you tell? What specific support do you need? When will you have this conversation?',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 44
  },
  {
    id: 'minimalist-lifestyle-45',
    question: 'Set a specific date 30 days from now to evaluate your progress. What will you measure? What would count as success? Put this review in your calendar now.',
    category: 'action',
    template_id: 'minimalist-lifestyle',
    question_number: 45
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for minimalist-lifestyle guide...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✓ Successfully inserted all questions');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'minimalist-lifestyle');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
    process.exit(1);
  }

  const counts = verifyData.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\nBreakdown by category:');
  console.log(`- Reflection (Foundation): ${counts.reflection || 0} questions (${Math.round((counts.reflection || 0) / questions.length * 100)}%)`);
  console.log(`- Research: ${counts.research || 0} questions (${Math.round((counts.research || 0) / questions.length * 100)}%)`);
  console.log(`- Planning: ${counts.planning || 0} questions (${Math.round((counts.planning || 0) / questions.length * 100)}%)`);
  console.log(`- Action: ${counts.action || 0} questions (${Math.round((counts.action || 0) / questions.length * 100)}%)`);
  console.log(`\nTotal: ${verifyData.length} questions`);
}

insertQuestions();
