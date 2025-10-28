import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (15 questions - 27%)
  {
    id: 'long-distance-relationship-1',
    question: 'Write about 3 specific moments in the past 6 months when you felt closest to your partner. What were you doing? What made those moments feel different from regular interactions?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'long-distance-relationship-2',
    question: 'Think about the last time you had a conflict in this relationship. How did the distance affect how you handled it? What would have been different if you were in the same place?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'long-distance-relationship-3',
    question: 'Document your typical emotional pattern during a week apart. When do you miss them most? When do you feel most independent? What triggers anxiety or doubt?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'long-distance-relationship-4',
    question: 'Reflect on your past relationships. What emotional needs were met through physical presence? Which of those needs feel unmet now, and which have you found other ways to satisfy?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'long-distance-relationship-5',
    question: 'Write about a time in the past month when you felt jealous, insecure, or worried about the relationship. What specific trigger caused it? How did you handle it?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'long-distance-relationship-6',
    question: 'Think about your communication over the past two weeks. What percentage was logistical planning versus deep emotional connection? What does this ratio tell you?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'long-distance-relationship-7',
    question: 'Describe 3 moments when you felt frustrated with the distance. Not general frustration—specific incidents. What unmet need was underneath each one?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'long-distance-relationship-8',
    question: 'Reflect on how you spend your alone time now versus before the distance. What have you gained in terms of personal growth, hobbies, or friendships?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'long-distance-relationship-9',
    question: 'Write about the last visit or time together. What felt natural and easy? What felt awkward or forced? What does this tell you about your relationship foundation?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'long-distance-relationship-10',
    question: 'Think about Sunday nights (or the night before you both start your week). What emotion comes up? When did this pattern start? What need is driving it?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'long-distance-relationship-11',
    question: 'Document 3 times in your life when you successfully adapted to a major change. What strategies helped you? Which of those could apply to this distance?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'long-distance-relationship-12',
    question: 'Reflect on what "trust" means to you specifically. Not the dictionary definition—what behaviors, communication patterns, or reassurances make YOU feel secure?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'long-distance-relationship-13',
    question: 'Write about your social life right now. Are you withdrawing, overcompensating, or finding balance? What pattern from past difficult times are you repeating?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'long-distance-relationship-14',
    question: 'Think about the moment you decided to do long distance. What fear did you NOT voice out loud? How is that unspoken fear showing up now?',
    category: 'reflection',
    question_number: 14
  },
  {
    id: 'long-distance-relationship-15',
    question: 'Reflect on your partner\'s last expression of love or commitment. Did you fully receive it, or did doubt/distance make you discount it? What does your response pattern tell you?',
    category: 'reflection',
    question_number: 15
  },

  // RESEARCH QUESTIONS (13 questions - 24%)
  {
    id: 'long-distance-relationship-16',
    question: 'Track your communication for the next 3 days. Log each interaction: time, duration, topic, emotional quality (1-10). What patterns emerge?',
    category: 'research',
    question_number: 16
  },
  {
    id: 'long-distance-relationship-17',
    question: 'Research the end date or timeline. Is there a specific date when the distance ends? If not, what needs to happen first? Document the concrete steps and realistic timeline.',
    category: 'research',
    question_number: 17
  },
  {
    id: 'long-distance-relationship-18',
    question: 'Calculate the actual costs of your current visit frequency: flights, time off work, accommodations. Is this sustainable for 6 months? 1 year? 2 years?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'long-distance-relationship-19',
    question: 'Document your time zones and natural schedules. What are your overlapping "quality time" windows? How many hours per week of good-energy overlap do you actually have?',
    category: 'research',
    question_number: 19
  },
  {
    id: 'long-distance-relationship-20',
    question: 'List every communication technology you currently use (text, calls, video, apps). Rate each 1-10 for: emotional intimacy, conflict resolution, spontaneity, physical connection substitute.',
    category: 'research',
    question_number: 20
  },
  {
    id: 'long-distance-relationship-21',
    question: 'Research your support systems. Who in your physical location knows about your relationship struggles? Who can you call at 2am? Document specific people and what support they can offer.',
    category: 'research',
    question_number: 21
  },
  {
    id: 'long-distance-relationship-22',
    question: 'Gather data on your partner\'s daily life. What do you actually know about their typical Tuesday? Their coworkers? Their lunch spots? List what you know versus what you assume.',
    category: 'research',
    question_number: 22
  },
  {
    id: 'long-distance-relationship-23',
    question: 'Document your last 5 disagreements. For each: What triggered it? How long until you talked? How was it resolved? What pattern do you see in distance-specific conflicts?',
    category: 'research',
    question_number: 23
  },
  {
    id: 'long-distance-relationship-24',
    question: 'Track your relationship "check-in" frequency. How often do you explicitly talk about the relationship health? When was your last meta-conversation about how things are going?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'long-distance-relationship-25',
    question: 'Research the location logistics if you were to close the distance. Who would move? What would they give up? List the concrete career, financial, and social costs.',
    category: 'research',
    question_number: 25
  },
  {
    id: 'long-distance-relationship-26',
    question: 'Document your intimacy maintenance strategies. What are you currently doing to maintain emotional closeness, romance, and sexual connection? Rate effectiveness 1-10 for each.',
    category: 'research',
    question_number: 26
  },
  {
    id: 'long-distance-relationship-27',
    question: 'List the relationship "milestones" or decisions you\'re postponing because of distance. What life choices are on hold? How long can they wait?',
    category: 'research',
    question_number: 27
  },
  {
    id: 'long-distance-relationship-28',
    question: 'Research what success looks like. Find 2-3 couples who survived long distance. What specific strategies did they use? What made the difference between those who made it and those who didn\'t?',
    category: 'research',
    question_number: 28
  },

  // PLANNING QUESTIONS (15 questions - 27%)
  {
    id: 'long-distance-relationship-29',
    question: 'Design your ideal communication rhythm. Not what you\'re doing now—what would optimal look like? Daily check-ins? Weekly deep talks? What specific structure would serve both of you?',
    category: 'planning',
    question_number: 29
  },
  {
    id: 'long-distance-relationship-30',
    question: 'Create a plan for the next time one of you feels distant or disconnected. What are the specific steps? Who initiates? What conversation framework will you use?',
    category: 'planning',
    question_number: 30
  },
  {
    id: 'long-distance-relationship-31',
    question: 'Plan your visit strategy for the next 6 months. Not just dates—what will make each visit feel intentional versus just "catching up"? What do you want to experience or accomplish together?',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'long-distance-relationship-32',
    question: 'Design your boundaries and transparency agreements. What do you each need to share about your daily life? What level of detail feels secure versus suffocating?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'long-distance-relationship-33',
    question: 'Create a decision-making framework for your future. What needs to be true for you to commit to another year of distance? What would make you decide to end it? Define your criteria.',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'long-distance-relationship-34',
    question: 'Plan for the hard conversations you\'re avoiding. What topic makes you most anxious to bring up? When will you have it? What outcome are you hoping for?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'long-distance-relationship-35',
    question: 'Design your conflict resolution protocol for distance. How will you handle fights when you can\'t read body language or give a hug? What are the rules of engagement?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'long-distance-relationship-36',
    question: 'Create a plan for maintaining individual identities. What personal goals, hobbies, or friendships do you each want to prioritize? How will you support rather than resent these?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'long-distance-relationship-37',
    question: 'Plan your emotional check-in system. How will you regularly assess relationship health? What questions will you ask each other? What frequency feels right?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'long-distance-relationship-38',
    question: 'Design your strategy for building shared experiences despite distance. What rituals, games, shows, or activities could you do "together"? What would make you feel like a team?',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'long-distance-relationship-39',
    question: 'Create a roadmap for closing the distance. What are the decision points? What information do you need? When will you revisit this plan? Make it concrete with dates.',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'long-distance-relationship-40',
    question: 'Plan for crisis management. If one of you has a mental health crisis, family emergency, or major setback, what\'s the protocol? How can you support from afar?',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'long-distance-relationship-41',
    question: 'Design your jealousy and insecurity management strategy. What will you do when these feelings arise? What reassurance is reasonable to ask for? What\'s your responsibility to self-soothe?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'long-distance-relationship-42',
    question: 'Create a plan for integrating your separate lives. How will you stay connected to each other\'s friend groups, families, work lives? What level of involvement makes sense?',
    category: 'planning',
    question_number: 42
  },
  {
    id: 'long-distance-relationship-43',
    question: 'Plan your re-entry strategy for visits. How will you transition from independent life to together time? What expectations or routines need to be discussed beforehand?',
    category: 'planning',
    question_number: 43
  },

  // ACTION QUESTIONS (12 questions - 22%)
  {
    id: 'long-distance-relationship-44',
    question: 'Schedule a dedicated "state of the relationship" conversation this week. Pick a specific time, prepare 3 topics you need to discuss. Document what you want to say beforehand.',
    category: 'action',
    question_number: 44
  },
  {
    id: 'long-distance-relationship-45',
    question: 'Experiment with a new communication tool or format this week. Try voice memos, co-watching something, virtual date, or shared playlist. Note how it feels different.',
    category: 'action',
    question_number: 45
  },
  {
    id: 'long-distance-relationship-46',
    question: 'Send something physical this week—a letter, care package, or surprise delivery. Document why you chose what you sent and how it felt to do something tangible.',
    category: 'action',
    question_number: 46
  },
  {
    id: 'long-distance-relationship-47',
    question: 'Book your next visit right now, even if it\'s months away. Having a date on the calendar changes everything. Document how having it scheduled affects your anxiety level.',
    category: 'action',
    question_number: 47
  },
  {
    id: 'long-distance-relationship-48',
    question: 'Identify one recurring conflict or frustration and propose a specific solution to your partner this week. Not a complaint—an actual experiment to try differently.',
    category: 'action',
    question_number: 48
  },
  {
    id: 'long-distance-relationship-49',
    question: 'Reach out to someone in your physical location this week for connection—friend, family, community. Notice how local support affects your relationship anxiety.',
    category: 'action',
    question_number: 49
  },
  {
    id: 'long-distance-relationship-50',
    question: 'Create a shared document, playlist, photo album, or project you both contribute to. Start it this week. Document how having something tangible together feels.',
    category: 'action',
    question_number: 50
  },
  {
    id: 'long-distance-relationship-51',
    question: 'Set a boundary or make a request you\'ve been avoiding. Do it this week. Document what you asked for and how they responded.',
    category: 'action',
    question_number: 51
  },
  {
    id: 'long-distance-relationship-52',
    question: 'Invest in your individual life this week—pursue a hobby, deepen a friendship, work on a personal goal. Note how your relationship feels when you\'re more fulfilled independently.',
    category: 'action',
    question_number: 52
  },
  {
    id: 'long-distance-relationship-53',
    question: 'Research and commit to one concrete step toward closing the distance. Job application, apartment search, or tough conversation. Do it this week, even if it\'s scary.',
    category: 'action',
    question_number: 53
  },
  {
    id: 'long-distance-relationship-54',
    question: 'Ask your partner directly: "What would make you feel most loved and connected this week?" Then do that thing. Document what they said and how they responded.',
    category: 'action',
    question_number: 54
  },
  {
    id: 'long-distance-relationship-55',
    question: 'Write down your decision: Am I all-in on making this work, or am I one foot out? If you\'re uncertain, what specific information or timeframe would help you commit or walk away?',
    category: 'action',
    question_number: 55
  }
];

async function insertQuestions() {
  console.log('Inserting questions for long-distance-relationship guide...\n');

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    const { error } = await supabase
      .from('questions')
      .insert({
        id: q.id,
        question: q.question,
        category: q.category,
        template_id: 'long-distance-relationship',
        question_number: q.question_number
      });

    if (error) {
      console.error(`Error inserting question ${q.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${q.question_number}/${questions.length}`);
    }

    // Add delay to avoid rate limiting
    if (i < questions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify the insertion
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'long-distance-relationship');

  if (data) {
    const breakdown = data.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\n📊 Question Breakdown:');
    console.log(`Total: ${data.length} questions`);
    Object.entries(breakdown).forEach(([category, count]) => {
      const percentage = ((count / data.length) * 100).toFixed(1);
      console.log(`${category}: ${count} (${percentage}%)`);
    });
  }
}

insertQuestions().catch(console.error);
