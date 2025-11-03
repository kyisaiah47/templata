import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbd.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15)
  {
    id: 'chronic-illness-1',
    question: "Write about the first time you noticed something was wrong with your health. What were you doing? What made you realize this wasn't normal? How long did it take you to seek help?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 1
  },
  {
    id: 'chronic-illness-2',
    question: "Document 3 specific moments in the past 6 months when your symptoms significantly impacted your day. What were you trying to do? What did you have to give up or modify? How did that make you feel?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 2
  },
  {
    id: 'chronic-illness-3',
    question: "Reflect on how you described your illness to yourself 6 months ago versus now. What words have changed? What does this shift tell you about your journey?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 3
  },
  {
    id: 'chronic-illness-4',
    question: "List the activities you used to do effortlessly that now require planning or energy. For each one, note: Do you miss it? Have you found alternatives? Or have you let it go?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 4
  },
  {
    id: 'chronic-illness-5',
    question: 'Write about a time when someone said "but you don\'t look sick." What was happening? How did you respond? What do you wish you had said?',
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 5
  },
  {
    id: 'chronic-illness-6',
    question: "Think about your best day and worst day in the past month. What made them different? What patterns do you notice about what helps versus what hurts?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 6
  },
  {
    id: 'chronic-illness-7',
    question: "Document the times of day when you typically feel your best and worst. What's your energy pattern? How does this compare to your pre-illness rhythm?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 7
  },
  {
    id: 'chronic-illness-8',
    question: "Reflect on who you were before this diagnosis. What parts of that person do you still have? What have you had to grieve? What new strengths have you discovered?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 8
  },
  {
    id: 'chronic-illness-9',
    question: "Write about 3 relationships that changed after your diagnosis - for better or worse. What specifically shifted? What does this tell you about what you need from people now?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 9
  },
  {
    id: 'chronic-illness-10',
    question: "List the assumptions you had about chronic illness before you had one. Which ones were wrong? What do you know now that you wish you could tell your past self?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 10
  },
  {
    id: 'chronic-illness-11',
    question: "Document the last time you pushed through symptoms and paid for it later. What were you trying to prove or accomplish? What did this cost you? What would you do differently now?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 11
  },
  {
    id: 'chronic-illness-12',
    question: "Reflect on how you talk about your illness to different people - family, friends, coworkers, strangers. What do these different versions reveal about what you're protecting or trying to control?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 12
  },
  {
    id: 'chronic-illness-13',
    question: "Write about a moment when you felt truly understood in your experience. Who was it? What did they say or do? Why did it resonate so deeply?",
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 13
  },
  {
    id: 'chronic-illness-14',
    question: 'Think about the identity shift from "temporarily sick" to "chronically ill." When did that mental transition happen for you? What triggered it? How are you making peace with it?',
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 14
  },
  {
    id: 'chronic-illness-15',
    question: 'Document what "a good life" meant to you before versus what it means now. What had to change in that definition? What feels like loss? What feels like growth?',
    category: 'reflection',
    template_id: 'chronic-illness',
    question_number: 15
  },

  // RESEARCH QUESTIONS (16-28)
  {
    id: 'chronic-illness-16',
    question: "Research your specific condition and list 3 treatment approaches your current doctor hasn't mentioned. For each, note: Is there evidence? What would it require? Is it worth exploring?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 16
  },
  {
    id: 'chronic-illness-17',
    question: "Document every medication and supplement you take. For each, note: What's it supposed to do? What side effects have you noticed? When did you last evaluate if it's actually helping?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 17
  },
  {
    id: 'chronic-illness-18',
    question: "Create a symptom tracker for one week. For each significant symptom, note: time, severity (1-10), what you were doing before, what helped (if anything). What patterns emerge?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 18
  },
  {
    id: 'chronic-illness-19',
    question: "List all your current healthcare providers. For each, note: How did you find them? Do they listen to you? Do they coordinate with your other providers? Would you recommend them to someone else with your condition?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 19
  },
  {
    id: 'chronic-illness-20',
    question: "Research patient communities for your condition (online forums, Facebook groups, local support groups). Join 2 and observe for a week. What are people talking about? What questions come up repeatedly? What advice seems helpful versus harmful?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 20
  },
  {
    id: 'chronic-illness-21',
    question: "Document your insurance coverage in plain language. What does your plan actually cover for your condition? What are your out-of-pocket maximums? What hoops do you have to jump through for specialist visits or treatments?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 21
  },
  {
    id: 'chronic-illness-22',
    question: "List the last 5 medical appointments you had. For each: What was accomplished? What was a waste of time? What question did you forget to ask? What would make the next one more productive?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 22
  },
  {
    id: 'chronic-illness-23',
    question: "Research workplace accommodations for your specific condition. List 5 that could help you. For each: Is it reasonable? How would you request it? What documentation would you need?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 23
  },
  {
    id: 'chronic-illness-24',
    question: "Create an inventory of your current energy management strategies. For each: Where did you learn it? Does it actually work for you? What's the evidence versus what's just hopeful thinking?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 24
  },
  {
    id: 'chronic-illness-25',
    question: "Document every specialist you've seen for this condition. For each: What did they tell you? Did their advice conflict with others? Who did you trust and why?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 25
  },
  {
    id: 'chronic-illness-26',
    question: "Research the typical progression of your condition. What does the medical literature say about 5-year, 10-year outlook? How does this compare to what your doctor has told you? What questions does this raise?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 26
  },
  {
    id: 'chronic-illness-27',
    question: "List all the diagnostic tests you've had in the past year. For each: What were they looking for? What did they find (or not find)? What did you learn? What questions remain unanswered?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 27
  },
  {
    id: 'chronic-illness-28',
    question: "Research emergency protocols for your condition. What symptoms require immediate medical attention? What should you do first? Who should you call? What information do paramedics need to know about your condition?",
    category: 'research',
    template_id: 'chronic-illness',
    question_number: 28
  },

  // PLANNING QUESTIONS (29-45)
  {
    id: 'chronic-illness-29',
    question: "Map out your ideal week given your current energy levels. What activities are non-negotiable? What can flex? What needs to be eliminated? How far is this from your actual week?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 29
  },
  {
    id: 'chronic-illness-30',
    question: "Plan how you'll handle your next flare-up differently than the last one. What early warning signs will you watch for? What will you do in the first 24 hours? What help will you line up in advance?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 30
  },
  {
    id: 'chronic-illness-31',
    question: 'Design your "minimum viable day" - the baseline that counts as success when you\'re struggling. What does it include? What doesn\'t make the cut? How will you remind yourself that this is enough?',
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 31
  },
  {
    id: 'chronic-illness-32',
    question: "Create a decision framework for when to push through versus when to rest. What factors matter? What are your red lines? What has experience taught you about the cost of getting this wrong?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 32
  },
  {
    id: 'chronic-illness-33',
    question: "Plan how you'll talk about your illness at work over the next 6 months. Who needs to know what? What accommodations will you request? What's your script for different scenarios?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 33
  },
  {
    id: 'chronic-illness-34',
    question: "Map your support network. Who can you call for medical emergencies? Who's good for practical help? Who provides emotional support? Where are the gaps? How will you fill them?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 34
  },
  {
    id: 'chronic-illness-35',
    question: "Design your medication and appointment management system. How will you track what you take? How will you remember appointments? How will you organize medical records? What's sustainable for you?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 35
  },
  {
    id: 'chronic-illness-36',
    question: "Plan your financial strategy for the next year. What are your expected medical costs? What can you do to reduce them? What savings do you need for emergencies? What trade-offs are you willing to make?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 36
  },
  {
    id: 'chronic-illness-37',
    question: "Create boundaries around your illness. When will you talk about it versus when will you not? What questions will you answer versus deflect? How will you protect your energy from other people's curiosity or advice?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 37
  },
  {
    id: 'chronic-illness-38',
    question: "Plan how you'll maintain relationships that matter despite your limitations. What can you realistically commit to? What needs to change? How will you communicate these changes honestly?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 38
  },
  {
    id: 'chronic-illness-39',
    question: "Design your self-advocacy strategy for medical appointments. How will you prepare? What documentation will you bring? How will you push back when dismissed? What's your plan if a provider isn't listening?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 39
  },
  {
    id: 'chronic-illness-40',
    question: "Map out how your condition affects your career trajectory over the next 3 years. What's realistic to pursue? What might you need to let go of? What alternative paths could work better?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 40
  },
  {
    id: 'chronic-illness-41',
    question: "Create a plan for protecting your mental health alongside your physical health. What are your early warning signs of depression or burnout? What interventions work for you? Who will you tell if you're struggling?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 41
  },
  {
    id: 'chronic-illness-42',
    question: "Plan how you'll handle \"good days\" without sabotaging yourself. What's worth doing with extra energy? What's a trap that will cost you tomorrow? How will you find the balance?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 42
  },
  {
    id: 'chronic-illness-43',
    question: "Design your rest and recovery protocol. What actually restores your energy? What just fills time? How much rest do you actually need? How will you give yourself permission to take it?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 43
  },
  {
    id: 'chronic-illness-44',
    question: "Map out the conversations you need to have with family members about your illness. Who needs to understand what? What support do you need from them? What's not their business? How will you communicate your needs clearly?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 44
  },
  {
    id: 'chronic-illness-45',
    question: "Plan your approach to trying new treatments or interventions. What criteria will you use to evaluate them? How long will you give something before deciding? How will you avoid the desperation trap of trying everything?",
    category: 'planning',
    template_id: 'chronic-illness',
    question_number: 45
  },

  // ACTION QUESTIONS (46-60)
  {
    id: 'chronic-illness-46',
    question: "Write down 3 questions you'll ask at your next doctor's appointment. Make them specific. Practice saying them out loud. What information do you need to make decisions?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 46
  },
  {
    id: 'chronic-illness-47',
    question: "Schedule one task this week to improve your health management - organizing medical records, researching a new provider, setting up a medication system. What will you do? When exactly will you do it?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 47
  },
  {
    id: 'chronic-illness-48',
    question: "Document your current treatment plan in writing. What are you taking? Why? What's the expected outcome? What side effects are you monitoring? When will you re-evaluate?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 48
  },
  {
    id: 'chronic-illness-49',
    question: "Identify one relationship where you need to set a boundary about your illness. What will you say? When will you have this conversation? What outcome do you want?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 49
  },
  {
    id: 'chronic-illness-50',
    question: "Create a one-page medical summary to carry with you. What are your key diagnoses? Current medications? Allergies? Emergency contacts? Where will you keep it?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 50
  },
  {
    id: 'chronic-illness-51',
    question: "Choose one energy-draining obligation to eliminate or modify this month. What is it? How will you communicate this change? What will you do with the freed-up energy?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 51
  },
  {
    id: 'chronic-illness-52',
    question: "Write an email to your manager requesting one specific accommodation. What do you need? Why will it help? What documentation can you provide? When will you send it?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 52
  },
  {
    id: 'chronic-illness-53',
    question: "Identify one doctor or specialist who isn't serving you well. What makes them inadequate? What will you do about it? When will you start looking for a replacement?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 53
  },
  {
    id: 'chronic-illness-54',
    question: 'Document three concrete ways someone can help you this week. Be specific - not "support me" but actual tasks. Who will you ask? How will you ask?',
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 54
  },
  {
    id: 'chronic-illness-55',
    question: "Create a crisis plan for your next bad day or flare-up. What will you do first? Who will you notify? What can you postpone? What help do you have lined up? Where will you keep this plan?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 55
  },
  {
    id: 'chronic-illness-56',
    question: "Schedule a mental health check-in - with a therapist, counselor, or trusted friend. When will it be? What do you need to talk through? What support are you seeking?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 56
  },
  {
    id: 'chronic-illness-57',
    question: "Join one patient community for your condition this week. Introduce yourself. Ask one question you've been struggling with. What do you hope to learn?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 57
  },
  {
    id: 'chronic-illness-58',
    question: "Review your calendar for the next month. Identify 3 commitments that aren't worth your limited energy. How will you reduce, delegate, or cancel them? When will you take action?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 58
  },
  {
    id: 'chronic-illness-59',
    question: "Start tracking one specific symptom or pattern for the next two weeks. What will you track? How will you record it? What are you trying to learn? When will you review the data?",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 59
  },
  {
    id: 'chronic-illness-60',
    question: "Write a letter to yourself about what you've learned about living with chronic illness. What wisdom would you share with someone newly diagnosed? What do you want to remember on hard days? Keep it somewhere you can find it when you need it.",
    category: 'action',
    template_id: 'chronic-illness',
    question_number: 60
  }
];

async function insertQuestions() {
  try {
    // First delete existing questions
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('template_id', 'chronic-illness');

    if (deleteError) {
      console.error('Error deleting existing questions:', deleteError);
      // Continue anyway - might not exist
    }

    // Insert new questions
    const { data, error } = await supabase
      .from('questions')
      .insert(questions);

    if (error) {
      console.error('Error inserting questions:', error);
      process.exit(1);
    }

    console.log(`✅ Successfully inserted ${questions.length} questions for chronic-illness guide`);
  } catch (err) {
    console.error('Exception:', err);
    process.exit(1);
  }
}

insertQuestions();
