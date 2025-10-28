import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // ROUND 1: FOUNDATION QUESTIONS (15 questions - 25%)
  {
    id: 'writing-book-1',
    question: 'Write about 3 times in your life when you felt compelled to share a story or idea. What happened? Who was your audience? What did it feel like when they understood?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 1
  },
  {
    id: 'writing-book-2',
    question: 'Document every time you\'ve started writing something longer than a few pages (journal, blog, essays, previous book attempts). For each: How far did you get? When did you stop? What does this pattern tell you?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 2
  },
  {
    id: 'writing-book-3',
    question: 'Reflect on the last book you read that made you think "I wish I had written this." What specifically did you envy? The ideas? The voice? The impact it had?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 3
  },
  {
    id: 'writing-book-4',
    question: 'Write about a time when you lost track of time while writing or creating something. What were you working on? What made those hours disappear? When did you last feel that?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 4
  },
  {
    id: 'writing-book-5',
    question: 'List 5 stories or moments from your life that you\'ve told multiple times. For each: Why do you keep returning to it? What\'s the deeper meaning you\'re trying to convey?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 5
  },
  {
    id: 'writing-book-6',
    question: 'Document your relationship with criticism. Think of 3 times someone critiqued your writing or ideas. How did you react? What does this tell you about sharing your book?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 6
  },
  {
    id: 'writing-book-7',
    question: 'Reflect on your current relationship with writing. When you think "I should write today," what emotion comes up? When did this feeling start?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 7
  },
  {
    id: 'writing-book-8',
    question: 'Write about the voice in your head that says you can\'t write a book. What does it say exactly? Whose voice does it sound like? When did you first hear it?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 8
  },
  {
    id: 'writing-book-9',
    question: 'List every excuse you\'ve used to not write in the past month. Look for patterns. Which one shows up most? What\'s the real fear underneath it?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 9
  },
  {
    id: 'writing-book-10',
    question: 'Document 3 creative projects you\'ve completed (any medium - art, events, projects). For each: What helped you finish? What almost stopped you? What\'s different about this book?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 10
  },
  {
    id: 'writing-book-11',
    question: 'Reflect on who you want to become by writing this book. Not what you want to achieve - who will you be different as a person once you\'ve done this?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 11
  },
  {
    id: 'writing-book-12',
    question: 'Write about the moment you decided to write a book. What triggered it? What were you hoping it would change about your life?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 12
  },
  {
    id: 'writing-book-13',
    question: 'Think about your ideal writing day. Not just "morning routine" - but the specific feeling you want. What does your body feel like? What\'s your mental state? When have you felt this before?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 13
  },
  {
    id: 'writing-book-14',
    question: 'Document what you\'re afraid will happen if you finish this book. Then what you\'re afraid will happen if you don\'t. Which fear is stronger?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 14
  },
  {
    id: 'writing-book-15',
    question: 'List 5 people whose opinion about your book matters to you. For each: Why them? What are you hoping they\'ll say? What are you afraid they\'ll say?',
    category: 'reflection',
    template_id: 'writing-book',
    question_number: 15
  },

  // ROUND 2: RESEARCH QUESTIONS (14 questions - 23%)
  {
    id: 'writing-book-16',
    question: 'Research 5 books in your genre/category that sold well in the past 2 years. For each: What\'s the core promise? Who\'s the audience? What makes it different from competitors?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 16
  },
  {
    id: 'writing-book-17',
    question: 'Find 3 authors whose work is similar to what you want to create. Document their writing process (from interviews, social media). What surprised you about how they work?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 17
  },
  {
    id: 'writing-book-18',
    question: 'List 10 people who would be your ideal readers. For each specific person: What problem are they facing? What are they currently reading? Why would your book matter to them?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 18
  },
  {
    id: 'writing-book-19',
    question: 'Research 3 writing craft books relevant to your genre. For each: What\'s the core technique they teach? How could you apply it to your book? What resonates most?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 19
  },
  {
    id: 'writing-book-20',
    question: 'Find 5 one-star reviews of books similar to yours. What did readers hate? What were they expecting but didn\'t get? How will your book avoid these failures?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 20
  },
  {
    id: 'writing-book-21',
    question: 'Document your genre\'s conventions. What must your book include to satisfy readers? What can you subvert? What happens if you ignore these expectations?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 21
  },
  {
    id: 'writing-book-22',
    question: 'Research 3 successful authors who started late or took unconventional paths. What\'s their story? What gave them permission to write? What does this tell you?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 22
  },
  {
    id: 'writing-book-23',
    question: 'Find 3 communities where your ideal readers gather (Reddit, forums, Facebook groups). What questions do they ask repeatedly? What problems go unsolved? How does your book answer them?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 23
  },
  {
    id: 'writing-book-24',
    question: 'Look up 5 writers you admire on social media. How do they talk about their writing process? What struggles do they share? What makes you feel less alone?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 24
  },
  {
    id: 'writing-book-25',
    question: 'Research typical word counts and chapter structures for your genre. How long is too long? Too short? What does this tell you about reader expectations?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 25
  },
  {
    id: 'writing-book-26',
    question: 'Find 3 books that tried what you\'re attempting but failed. What went wrong? What would you do differently? What can you learn from their mistakes?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 26
  },
  {
    id: 'writing-book-27',
    question: 'Research 3 different publishing paths (traditional, indie, hybrid). For each: What\'s required? What\'s the timeline? What fits your goals and personality?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 27
  },
  {
    id: 'writing-book-28',
    question: 'Document writing tools and software successful authors in your genre use. What are the most recommended? What free alternatives exist? What feels right for you?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 28
  },
  {
    id: 'writing-book-29',
    question: 'Find 5 reviews of beloved books in your genre. What specific moments do readers rave about? What emotional experience are they describing? How can your book create that?',
    category: 'research',
    template_id: 'writing-book',
    question_number: 29
  },

  // ROUND 3: PLANNING QUESTIONS (17 questions - 28%)
  {
    id: 'writing-book-30',
    question: 'Write your book\'s one-sentence premise. Not a summary - the core idea that makes someone say "I need to read that." Test 5 versions. Which one makes YOU excited?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 30
  },
  {
    id: 'writing-book-31',
    question: 'Plan your book\'s structure. Will it be linear or non-linear? Chapters or sections? How many parts? Why does this structure serve your story/ideas best?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 31
  },
  {
    id: 'writing-book-32',
    question: 'Create a list of 15-20 chapter titles or major sections. Don\'t worry about order yet. What topics/scenes/ideas must be included? What would you regret leaving out?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 32
  },
  {
    id: 'writing-book-33',
    question: 'Map out your book\'s emotional arc. What does your reader feel at the start? Middle? End? Where are the peaks and valleys? Why does this journey matter?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 33
  },
  {
    id: 'writing-book-34',
    question: 'Define your writing schedule for the next 3 months. Specific days, times, word counts. Not ideal - what can you actually commit to? What needs to change in your life to protect this?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 34
  },
  {
    id: 'writing-book-35',
    question: 'Plan your writing environment. Where will you write? When? What needs to be different from your current setup? What specific distractions must you eliminate?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 35
  },
  {
    id: 'writing-book-36',
    question: 'Calculate your target word count and create milestones. If you write X words per session, Y sessions per week, when will you finish your first draft? Is this realistic?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 36
  },
  {
    id: 'writing-book-37',
    question: 'Identify your 3 biggest writing challenges (plot holes, description, dialogue, etc). For each: What book or resource will you study? Who can you ask for help?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 37
  },
  {
    id: 'writing-book-38',
    question: 'Plan your accountability system. Who will know about your daily/weekly progress? How will you track it? What happens when you miss a day?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 38
  },
  {
    id: 'writing-book-39',
    question: 'Design your pre-writing ritual. What will you do in the 10 minutes before writing to get into the zone? Music? Reading? Movement? What signals to your brain "it\'s time to write"?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 39
  },
  {
    id: 'writing-book-40',
    question: 'Map out potential obstacles in the next 6 months (holidays, work deadlines, travel). How will you keep writing momentum? What\'s your minimum viable writing practice during chaos?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 40
  },
  {
    id: 'writing-book-41',
    question: 'Plan your first draft strategy. Will you write chronologically or jump around? Outline first or discover as you go? What fits your personality and this project?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 41
  },
  {
    id: 'writing-book-42',
    question: 'Create your revision plan. How many drafts do you expect? What will each draft focus on? Who will read it at each stage? What\'s your timeline from first to final draft?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 42
  },
  {
    id: 'writing-book-43',
    question: 'Identify 5 people who will be your beta readers. Why them? What specific feedback do you need from each? When will you be ready to share?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 43
  },
  {
    id: 'writing-book-44',
    question: 'Plan how you\'ll handle resistance and doubt. What will you do when you don\'t want to write? Who will you call? What reminder do you need to hear? Write it now.',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 44
  },
  {
    id: 'writing-book-45',
    question: 'Define what "done" means for this book. Finished first draft? After revisions? Ready to query? Self-published? What\'s your actual finish line?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 45
  },
  {
    id: 'writing-book-46',
    question: 'Map your learning plan. What writing skills will you need to develop while drafting? Which can wait for revision? How will you learn without using it as procrastination?',
    category: 'planning',
    template_id: 'writing-book',
    question_number: 46
  },

  // ROUND 4: ACTION QUESTIONS (14 questions - 23%)
  {
    id: 'writing-book-47',
    question: 'Write the opening line of your book right now. Don\'t overthink it. Just write 5 different versions. Pick the one that makes you want to keep reading.',
    category: 'action',
    template_id: 'writing-book',
    question_number: 47
  },
  {
    id: 'writing-book-48',
    question: 'Set up your writing space today. Clear the desk, gather your tools, eliminate one distraction. What will you do in the next hour to make it easier to write tomorrow?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 48
  },
  {
    id: 'writing-book-49',
    question: 'Write 500 words of your book right now. Not the beginning, not perfect - just 500 words from anywhere in the book. What did you learn about your voice?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 49
  },
  {
    id: 'writing-book-50',
    question: 'Schedule your writing sessions for the next week. Put them in your calendar. What else is in those time slots now? What are you saying no to?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 50
  },
  {
    id: 'writing-book-51',
    question: 'Tell 3 people you\'re writing a book. Not "thinking about it" - "writing it." Notice what happens in your body when you say it out loud. How does accountability feel?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 51
  },
  {
    id: 'writing-book-52',
    question: 'Create a project folder/document for your book today. Name it. Set up your chapter structure. Make it real on your computer. What shifts when it exists?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 52
  },
  {
    id: 'writing-book-53',
    question: 'Write a letter to yourself to read when you want to quit. Why are you doing this? What will you regret if you stop? What do you need to hear in that moment?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 53
  },
  {
    id: 'writing-book-54',
    question: 'Join one writing community this week (online or in-person). Introduce yourself. Share your project. What support do you need? Who else is on this journey?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 54
  },
  {
    id: 'writing-book-55',
    question: 'Create a playlist or soundscape for your writing sessions. Test 3 different options this week. What helps you focus? What pulls you into your book\'s world?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 55
  },
  {
    id: 'writing-book-56',
    question: 'Write a scene or section you\'re excited about, even if it comes later in the book. Don\'t wait for permission. What happens when you follow your energy?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 56
  },
  {
    id: 'writing-book-57',
    question: 'Set one micro-goal for tomorrow: word count, time spent, or pages written. Make it small enough that you\'ll definitely do it. Commit to it now.',
    category: 'action',
    template_id: 'writing-book',
    question_number: 57
  },
  {
    id: 'writing-book-58',
    question: 'Eliminate your biggest writing distraction for one week. Phone on airplane mode? Social media blocked? What needs to disappear for you to focus?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 58
  },
  {
    id: 'writing-book-59',
    question: 'Create your tracking system today. Spreadsheet? Journal? App? Start tracking your daily word count or writing time. Make the first entry right now.',
    category: 'action',
    template_id: 'writing-book',
    question_number: 59
  },
  {
    id: 'writing-book-60',
    question: 'Write down your completion date. Month and year when you\'ll finish your first draft. Put it somewhere visible. How does having a deadline change your urgency?',
    category: 'action',
    template_id: 'writing-book',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log('Inserting questions...');

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    throw error;
  }

  console.log(`Successfully inserted ${questions.length} questions`);
}

insertQuestions();
