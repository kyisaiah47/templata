import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (15 total - 25%)
  {
    id: 'managing-anxiety-1',
    question: 'Write about 3 specific moments in the past month when anxiety felt overwhelming. What were you doing? What physical sensations did you notice? What thoughts were running through your mind?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'managing-anxiety-2',
    question: 'Document the earliest memory you have of feeling anxious. How old were you? What was happening? How did the adults around you respond?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'managing-anxiety-3',
    question: 'Reflect on a time when you successfully navigated through intense anxiety. What did you do? What made that situation different from times when you felt stuck?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'managing-anxiety-4',
    question: 'List 5 physical sensations that signal anxiety is starting for you. Which one appears first? Which one is the most uncomfortable? When did you first become aware of each?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'managing-anxiety-5',
    question: 'Think about your anxiety over the past year. Has it been getting better, worse, or staying the same? What life changes coincided with any shifts in intensity?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'managing-anxiety-6',
    question: 'Write about what you believe causes your anxiety. What story do you tell yourself about why you feel this way? Where did this explanation come from?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'managing-anxiety-7',
    question: 'Document 3 times when you avoided something because of anxiety. What did you miss out on? How did you feel afterwards - relieved, regretful, both?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'managing-anxiety-8',
    question: 'Reflect on how your family talks about anxiety, stress, or mental health. What messages did you receive growing up about these feelings? How do those messages show up in your life now?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'managing-anxiety-9',
    question: 'List the activities where you feel least anxious. What do they have in common? Are you alone or with others? Moving or still? Inside or outside?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'managing-anxiety-10',
    question: 'Write about a period of your life when anxiety was lower or more manageable. What was different then - your circumstances, your habits, your support system, your mindset?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'managing-anxiety-11',
    question: 'Document your self-talk when anxiety spikes. Write down 5 things you typically tell yourself. Are you harsh, supportive, analytical, catastrophic?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'managing-anxiety-12',
    question: 'Reflect on whether your anxiety feels more like fear about specific things or a general sense of unease. How does this distinction help or confuse your understanding?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'managing-anxiety-13',
    question: 'Think about the last time someone told you to "just relax" or "calm down." What did that feel like? What would have been more helpful in that moment?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'managing-anxiety-14',
    question: 'Write about how anxiety affects your sense of yourself. Do you see anxiety as part of who you are, or as something happening to you? How does this perspective impact your relationship with it?',
    category: 'reflection',
    question_number: 14
  },
  {
    id: 'managing-anxiety-15',
    question: 'Document the difference between your "anxious self" and your "calm self." How do you think, speak, move, and make decisions differently in each state?',
    category: 'reflection',
    question_number: 15
  },

  // RESEARCH QUESTIONS (13 total - 22%)
  {
    id: 'managing-anxiety-16',
    question: 'Track your anxiety for one week using this framework: Each day, rate intensity (1-10), note the time it peaked, list what triggered it, and describe what helped it subside. What patterns emerge?',
    category: 'research',
    question_number: 16
  },
  {
    id: 'managing-anxiety-17',
    question: 'Research your sleep patterns for the past 2 weeks. Document: average hours per night, quality (restful/restless), dreams/nightmares, what time you went to bed, what you did before bed. How does sleep correlate with anxiety levels?',
    category: 'research',
    question_number: 17
  },
  {
    id: 'managing-anxiety-18',
    question: 'Document your caffeine, alcohol, and sugar intake for 5 days. For each, note: quantity, timing, how you felt 1 hour later, how you slept that night. What relationship do you notice with anxiety?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'managing-anxiety-19',
    question: 'List every coping strategy you\'ve tried for anxiety. For each, rate effectiveness (1-5), note how often you use it, and explain why you do or don\'t use it regularly.',
    category: 'research',
    question_number: 19
  },
  {
    id: 'managing-anxiety-20',
    question: 'Research 3 times zones in your typical week when anxiety tends to spike (morning, afternoon, evening, specific days). What\'s usually happening during these windows? What\'s different about the times when anxiety is lower?',
    category: 'research',
    question_number: 20
  },
  {
    id: 'managing-anxiety-21',
    question: 'Document your screen time and social media use for 3 days. Note how long on each platform, what content you consumed, how you felt before and after. What impact does this have on your anxiety?',
    category: 'research',
    question_number: 21
  },
  {
    id: 'managing-anxiety-22',
    question: 'List all the people in your life and categorize: increases my anxiety, decreases my anxiety, neutral. For those who increase it, what specifically about the interaction is triggering?',
    category: 'research',
    question_number: 22
  },
  {
    id: 'managing-anxiety-23',
    question: 'Research your physical activity over the past week. Document: type, duration, intensity, how you felt immediately after and 2 hours later. How does movement affect your anxiety?',
    category: 'research',
    question_number: 23
  },
  {
    id: 'managing-anxiety-24',
    question: 'Track your anxious thoughts for 2 days. Write down each worry as it appears. Then categorize: things I can control, things I can\'t control, things that might not happen, things happening now. What percentage falls into each?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'managing-anxiety-25',
    question: 'Document your living/work environment. Note: noise levels, lighting, clutter, temperature, smells, who else is present. Which environmental factors make anxiety better or worse?',
    category: 'research',
    question_number: 25
  },
  {
    id: 'managing-anxiety-26',
    question: 'Research your breathing patterns during calm vs. anxious moments. For each state, note: breathing rate, chest vs. belly breathing, shallow vs. deep, any breath-holding. What\'s different?',
    category: 'research',
    question_number: 26
  },
  {
    id: 'managing-anxiety-27',
    question: 'List your current responsibilities and commitments. For each, rate: how much anxiety it causes (1-10), whether it\'s optional or required, and whether it aligns with your values. What stands out?',
    category: 'research',
    question_number: 27
  },
  {
    id: 'managing-anxiety-28',
    question: 'Document any physical health conditions, medications, or hormonal changes you\'ve experienced. When did they start relative to your anxiety? Have doctors explored any connections?',
    category: 'research',
    question_number: 28
  },

  // PLANNING QUESTIONS (17 total - 28%)
  {
    id: 'managing-anxiety-29',
    question: 'Based on your triggers and patterns, design your ideal morning routine that would set you up for lower anxiety. Be specific about timing, activities, and what you\'d need to make it happen.',
    category: 'planning',
    question_number: 29
  },
  {
    id: 'managing-anxiety-30',
    question: 'Create a plan for the next time you feel a panic attack starting. List 3 physical strategies, 2 mental strategies, and 1 person you could reach out to. Where will you keep this plan so you can access it quickly?',
    category: 'planning',
    question_number: 30
  },
  {
    id: 'managing-anxiety-31',
    question: 'Map out which anxiety-increasing factors you identified are within your control to change. For each, brainstorm: small changes you could make this week, bigger changes that need more time, and what\'s preventing each change.',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'managing-anxiety-32',
    question: 'Design a "anxiety first aid kit" - a physical or digital collection of things that help when anxiety spikes. What would you include? Where would you keep it? What barriers might prevent you from using it?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'managing-anxiety-33',
    question: 'Plan how you\'ll talk to 3 important people in your life about your anxiety. For each: What do you want them to understand? What specific support would help? What boundaries do you need to set?',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'managing-anxiety-34',
    question: 'Create a schedule for the upcoming week that builds in "anxiety buffer time" - space for when anxiety makes things take longer. What activities would you prioritize? What would you deprioritize?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'managing-anxiety-35',
    question: 'Map out your therapy/professional support options. Research: what types of therapy work for anxiety, what\'s covered by your insurance, what\'s available in your area or online, what\'s your financial capacity. What\'s your next step?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'managing-anxiety-36',
    question: 'Design an experiment to test one coping strategy consistently for 2 weeks. What will you try? How will you track whether it helps? What obstacles might come up? How will you stay consistent?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'managing-anxiety-37',
    question: 'Plan what lifestyle changes might reduce your baseline anxiety level. Consider: sleep, exercise, diet, substance use, work schedule, social commitments. Which one feels most achievable to address first?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'managing-anxiety-38',
    question: 'Create a boundary plan for anxiety-inducing relationships or situations you can\'t avoid. For each: What boundary would help? How will you communicate it? What consequences will you enforce? What support do you need?',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'managing-anxiety-39',
    question: 'Map out your "gradual exposure" plan for one thing you avoid due to anxiety. Break it into 5 steps from easiest to hardest. What support or preparation would you need for each step?',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'managing-anxiety-40',
    question: 'Design your ideal work environment and schedule considering your anxiety patterns. What changes are immediately possible? What would require negotiation? What would require a job change?',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'managing-anxiety-41',
    question: 'Plan how you\'ll build a support system specifically for anxiety management. Who could you talk to? What communities or groups might help? What professional support do you need? What barriers exist to reaching out?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'managing-anxiety-42',
    question: 'Create a medication/supplement research plan if you\'re considering this route. What questions do you have? What doctors would you need to see? What information do you need to gather? What concerns need addressing?',
    category: 'planning',
    question_number: 42
  },
  {
    id: 'managing-anxiety-43',
    question: 'Map out the financial implications of treating your anxiety. Consider: therapy costs, medication, time off work, lifestyle changes, preventive care. What\'s affordable now? What would you need to plan for?',
    category: 'planning',
    question_number: 43
  },
  {
    id: 'managing-anxiety-44',
    question: 'Design a "low anxiety day" from morning to night based on everything you\'ve learned. What activities, people, environments, and practices would you include? What would you deliberately exclude?',
    category: 'planning',
    question_number: 44
  },
  {
    id: 'managing-anxiety-45',
    question: 'Plan how you\'ll handle setbacks and high-anxiety periods. What\'s your crisis plan? Who\'s your emergency contact? What\'s the threshold for seeking immediate help? What resources would you need?',
    category: 'planning',
    question_number: 45
  },

  // ACTION QUESTIONS (15 total - 25%)
  {
    id: 'managing-anxiety-46',
    question: 'Schedule one appointment this week related to your anxiety management: doctor, therapist, psychiatrist, or wellness practitioner. Write down when you\'ll make the call and what you need to prepare.',
    category: 'action',
    question_number: 46
  },
  {
    id: 'managing-anxiety-47',
    question: 'Practice one grounding technique right now for 5 minutes (5-4-3-2-1 senses, box breathing, body scan, etc.). Document: What did you try? How did your body feel before and after? Will you use this again?',
    category: 'action',
    question_number: 47
  },
  {
    id: 'managing-anxiety-48',
    question: 'Text or call one person today to share that you\'re working on managing anxiety. You don\'t need to share details - just open the door. Write down who you\'ll contact and what you\'ll say.',
    category: 'action',
    question_number: 48
  },
  {
    id: 'managing-anxiety-49',
    question: 'Remove or reduce one anxiety trigger from your life this week. What will you eliminate or minimize? What obstacles might come up? What replacement will you put in its place?',
    category: 'action',
    question_number: 49
  },
  {
    id: 'managing-anxiety-50',
    question: 'Create a physical anxiety tracking system today - whether it\'s a journal, app, or chart. Set a specific time each day when you\'ll use it. Track it for 3 days, then revisit what you\'re learning.',
    category: 'action',
    question_number: 50
  },
  {
    id: 'managing-anxiety-51',
    question: 'Do one thing today that you\'ve been avoiding due to anxiety. Start small. Document: What did you do? What was the actual outcome vs. what you feared would happen?',
    category: 'action',
    question_number: 51
  },
  {
    id: 'managing-anxiety-52',
    question: 'Set up your sleep environment tonight for better rest. Make 3 specific changes: temperature, darkness, noise, pre-bed routine, screen time cutoff. Commit to trying this for 3 nights.',
    category: 'action',
    question_number: 52
  },
  {
    id: 'managing-anxiety-53',
    question: 'Move your body for 20 minutes today in whatever way feels manageable: walk, stretch, dance, yoga. Don\'t aim for a "workout" - aim for movement that reduces anxiety. How do you feel after?',
    category: 'action',
    question_number: 53
  },
  {
    id: 'managing-anxiety-54',
    question: 'Research and save 3 mental health resources today: crisis hotlines, therapy directories, online support groups, or educational resources. Put them somewhere you\'ll remember when you need them.',
    category: 'action',
    question_number: 54
  },
  {
    id: 'managing-anxiety-55',
    question: 'Practice saying no to one commitment this week that increases your anxiety. Write the message or script now. How does it feel to prioritize your mental health this way?',
    category: 'action',
    question_number: 55
  },
  {
    id: 'managing-anxiety-56',
    question: 'Reduce your caffeine intake tomorrow by half. Replace it with water or herbal tea. Track your anxiety levels throughout the day compared to a typical day.',
    category: 'action',
    question_number: 56
  },
  {
    id: 'managing-anxiety-57',
    question: 'Set a social media time limit on your phone today for your most anxiety-inducing platforms. Choose a specific daily limit. What will you do with that reclaimed time instead?',
    category: 'action',
    question_number: 57
  },
  {
    id: 'managing-anxiety-58',
    question: 'Write down your anxious thoughts for the next 2 hours in a dedicated "worry notebook." Don\'t engage with them or try to solve them - just capture them. What do you notice about the patterns?',
    category: 'action',
    question_number: 58
  },
  {
    id: 'managing-anxiety-59',
    question: 'Identify one environmental change you can make in your space today that might reduce anxiety: declutter one area, adjust lighting, add a plant, create a calm corner. Make that change right now.',
    category: 'action',
    question_number: 59
  },
  {
    id: 'managing-anxiety-60',
    question: 'Schedule a weekly "anxiety check-in" with yourself. Pick a day and time. In your first check-in, review: What helped this week? What made it worse? What will you try next week? Set a reminder now.',
    category: 'action',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for managing-anxiety guide...`);

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const { error } = await supabase
      .from('questions')
      .insert({
        id: q.id,
        question: q.question,
        category: q.category,
        template_id: 'managing-anxiety',
        question_number: q.question_number
      });

    if (error) {
      console.error(`Error inserting question ${q.id}:`, error);
      process.exit(1);
    }

    console.log(`✓ Inserted question ${i + 1}/${questions.length}: ${q.id}`);

    // Rate limiting: wait 100ms between insertions
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify the counts
  const { data: foundationCount } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('template_id', 'managing-anxiety')
    .eq('category', 'reflection');

  const { data: researchCount } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('template_id', 'managing-anxiety')
    .eq('category', 'research');

  const { data: planningCount } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('template_id', 'managing-anxiety')
    .eq('category', 'planning');

  const { data: actionCount } = await supabase
    .from('questions')
    .select('id', { count: 'exact', head: true })
    .eq('template_id', 'managing-anxiety')
    .eq('category', 'action');

  console.log('\nBreakdown by category:');
  console.log(`Foundation (reflection): ${foundationCount} questions`);
  console.log(`Research: ${researchCount} questions`);
  console.log(`Planning: ${planningCount} questions`);
  console.log(`Action: ${actionCount} questions`);
}

insertQuestions().catch(console.error);
