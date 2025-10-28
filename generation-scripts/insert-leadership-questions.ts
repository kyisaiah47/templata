import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (14 total - 25%)
  {
    id: 'leadership-transition-1',
    question: 'Write about 3 specific moments in the past year when someone came to you for advice or looked to you for direction. What was happening? What did they need from you? What felt natural vs. uncomfortable?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'leadership-transition-2',
    question: 'Think about a time you had to deliver critical feedback to a peer. What did you do well? What would you do differently now? What does this reveal about your leadership instincts?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'leadership-transition-3',
    question: 'Document the last 5 times you stayed late or worked weekends in your current role. For each: Was it because of your workload or helping others? What pattern emerges about how you spend your energy?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'leadership-transition-4',
    question: 'List 3 leaders you\'ve worked with who you respected. For each, write one specific behavior or decision that earned your respect. What do these examples tell you about the leader you want to be?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'leadership-transition-5',
    question: 'Reflect on a project where you were responsible for outcomes but not in charge. How did you influence without authority? What worked? What frustrated you?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'leadership-transition-6',
    question: 'Think about your current role: What will you genuinely miss doing yourself? What tasks are you secretly relieved to delegate? Be honest about what gives you energy.',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'leadership-transition-7',
    question: 'Write about a time you saw a leader fail or lose their team\'s trust. What specifically went wrong? What did you learn about what NOT to do?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'leadership-transition-8',
    question: 'Document your typical week: How many hours do you spend in heads-down work vs. meetings vs. helping others? How will this need to change in a leadership role?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'leadership-transition-9',
    question: 'Think about conflict: Describe your gut reaction when two people come to you with opposing views. Do you avoid, jump to fix, or lean in? When has this served you well or poorly?',
    category: 'reflection',
    question_number: 9
  },
  {
    id: 'leadership-transition-10',
    question: 'Reflect on your relationship with being liked. Write about a time you chose being respected over being liked. How did it feel? What was the outcome?',
    category: 'reflection',
    question_number: 10
  },
  {
    id: 'leadership-transition-11',
    question: 'List the professional achievements you\'re most proud of. For each, note: Did you do it alone or through others? What does this tell you about your transition to leadership?',
    category: 'reflection',
    question_number: 11
  },
  {
    id: 'leadership-transition-12',
    question: 'Write about your best manager and your worst manager. For each, describe one specific moment that defined the relationship. What patterns do you want to repeat or avoid?',
    category: 'reflection',
    question_number: 12
  },
  {
    id: 'leadership-transition-13',
    question: 'Think about your identity: Complete this sentence 5 different ways: "I\'m someone who..." How many of these are about what YOU do vs. what you enable others to do?',
    category: 'reflection',
    question_number: 13
  },
  {
    id: 'leadership-transition-14',
    question: 'Document a time you had to make a decision with incomplete information. What process did you use? Who did you consult? What would you do the same or differently as a leader?',
    category: 'reflection',
    question_number: 14
  },

  // RESEARCH QUESTIONS (12 total - 22%)
  {
    id: 'leadership-transition-15',
    question: 'Research each person on your new team: For each member, document their role, tenure, and one thing they\'ve accomplished. What gaps in knowledge do you notice?',
    category: 'research',
    question_number: 15
  },
  {
    id: 'leadership-transition-16',
    question: 'Map your key stakeholders: List everyone whose support you need (peers, leadership, cross-functional). For each, note: What do they care about? What do they need from your team?',
    category: 'research',
    question_number: 16
  },
  {
    id: 'leadership-transition-17',
    question: 'Investigate your team\'s recent history: What projects succeeded or failed in the past 6 months? Who was involved? What does this tell you about team dynamics and capabilities?',
    category: 'research',
    question_number: 17
  },
  {
    id: 'leadership-transition-18',
    question: 'Document the context of your transition: Are you replacing someone (why did they leave)? Promoted from within? New to the company? How does this context shape expectations?',
    category: 'research',
    question_number: 18
  },
  {
    id: 'leadership-transition-19',
    question: 'Research your organization\'s leadership culture: How do successful leaders operate here? What behaviors are rewarded? What causes leaders to struggle or fail?',
    category: 'research',
    question_number: 19
  },
  {
    id: 'leadership-transition-20',
    question: 'Map the informal power structure: Beyond org charts, who has influence? Who do people go to for advice? Who are the connectors and the gatekeepers?',
    category: 'research',
    question_number: 20
  },
  {
    id: 'leadership-transition-21',
    question: 'Investigate current team pain points: Review recent surveys, retros, or feedback. What keeps coming up? What are people frustrated about? What\'s not being said publicly?',
    category: 'research',
    question_number: 21
  },
  {
    id: 'leadership-transition-22',
    question: 'Research your skip-level manager: What are their priorities for the next quarter? What challenges are they facing? How does your team fit into their strategy?',
    category: 'research',
    question_number: 22
  },
  {
    id: 'leadership-transition-23',
    question: 'Document your team\'s current commitments: What projects are in flight? What deadlines are coming? What dependencies exist? Where are the risks?',
    category: 'research',
    question_number: 23
  },
  {
    id: 'leadership-transition-24',
    question: 'Gather data on team capacity: Who\'s overloaded? Who has bandwidth? Who\'s at flight risk? What does their workload distribution reveal?',
    category: 'research',
    question_number: 24
  },
  {
    id: 'leadership-transition-25',
    question: 'Research industry best practices for first 90 days: Read 3 articles or talk to 3 leaders who\'ve made similar transitions. What advice resonates? What doesn\'t apply to your situation?',
    category: 'research',
    question_number: 25
  },
  {
    id: 'leadership-transition-26',
    question: 'Investigate your predecessor\'s approach: If replacing someone, what did they do well? What did the team wish was different? What can you learn from their tenure?',
    category: 'research',
    question_number: 26
  },

  // PLANNING QUESTIONS (16 total - 29%)
  {
    id: 'leadership-transition-27',
    question: 'Design your listening tour: Plan 1-on-1s with each team member. For each conversation, what 3-5 questions will you ask? What do you want to learn vs. what do you want to share?',
    category: 'planning',
    question_number: 27
  },
  {
    id: 'leadership-transition-28',
    question: 'Plan your first team meeting: What tone do you want to set? What will you share about yourself? What questions will you ask? What will you explicitly NOT promise?',
    category: 'planning',
    question_number: 28
  },
  {
    id: 'leadership-transition-29',
    question: 'Identify your quick wins: What 2-3 things could you improve in the first 30 days that would build credibility? Choose things that matter to the team, not just to leadership.',
    category: 'planning',
    question_number: 29
  },
  {
    id: 'leadership-transition-30',
    question: 'Design your communication cadence: How often will you meet 1-on-1 with each person? Team meetings? Skip-levels? What channels will you use for what types of updates?',
    category: 'planning',
    question_number: 30
  },
  {
    id: 'leadership-transition-31',
    question: 'Plan how you\'ll build relationships with peers: Which peer leaders do you need to connect with first? What do you need from them? What can you offer them?',
    category: 'planning',
    question_number: 31
  },
  {
    id: 'leadership-transition-32',
    question: 'Create your learning plan: What leadership skills do you need to develop? How will you learn (books, mentors, courses, practice)? What timeline is realistic?',
    category: 'planning',
    question_number: 32
  },
  {
    id: 'leadership-transition-33',
    question: 'Plan your delegation strategy: List the work you currently do. For each item, decide: Keep doing, delegate immediately, delegate after training someone, or stop doing entirely.',
    category: 'planning',
    question_number: 33
  },
  {
    id: 'leadership-transition-34',
    question: 'Design your decision-making framework: What decisions will you make yourself vs. delegate? How will you involve the team? What\'s your process for tough calls?',
    category: 'planning',
    question_number: 34
  },
  {
    id: 'leadership-transition-35',
    question: 'Map your 30-60-90 day priorities: Month 1 - What? Month 2 - What? Month 3 - What? How will you know you\'re on track?',
    category: 'planning',
    question_number: 35
  },
  {
    id: 'leadership-transition-36',
    question: 'Plan how you\'ll handle former peers: If promoted from within, what boundaries need to change? What relationships need to evolve? How will you address this directly?',
    category: 'planning',
    question_number: 36
  },
  {
    id: 'leadership-transition-37',
    question: 'Design your feedback approach: How will you give regular feedback? How will you solicit feedback on your leadership? What systems will you put in place?',
    category: 'planning',
    question_number: 37
  },
  {
    id: 'leadership-transition-38',
    question: 'Create your support system: Who will you turn to for advice? Who can you vent to safely? Who will give you honest feedback? How will you maintain these relationships?',
    category: 'planning',
    question_number: 38
  },
  {
    id: 'leadership-transition-39',
    question: 'Plan your work-life boundaries: What hours will you work? When will you disconnect? What will you protect? How will you model healthy boundaries for your team?',
    category: 'planning',
    question_number: 39
  },
  {
    id: 'leadership-transition-40',
    question: 'Design your team vision: What do you want this team to be known for in 6 months? What culture do you want to build? How will you communicate this vision?',
    category: 'planning',
    question_number: 40
  },
  {
    id: 'leadership-transition-41',
    question: 'Plan how you\'ll handle inevitable mistakes: When you mess up (you will), how will you acknowledge it? Who will you tell? How will you course-correct?',
    category: 'planning',
    question_number: 41
  },
  {
    id: 'leadership-transition-42',
    question: 'Create your metrics for success: Beyond company metrics, how will YOU measure if you\'re succeeding as a leader? What leading indicators will you track?',
    category: 'planning',
    question_number: 42
  },

  // ACTION QUESTIONS (13 total - 24%)
  {
    id: 'leadership-transition-43',
    question: 'Schedule your first conversations: Book 1-on-1s with each team member this week. Send a brief note beforehand about what you want to discuss. When will these happen?',
    category: 'action',
    question_number: 43
  },
  {
    id: 'leadership-transition-44',
    question: 'Set up your first meeting with your manager: Prepare 3 specific questions about their expectations for you. What support do you need? When will you meet?',
    category: 'action',
    question_number: 44
  },
  {
    id: 'leadership-transition-45',
    question: 'Create your personal operating manual: Write a 1-page doc about how you work (communication preferences, meeting style, pet peeves, strengths). Share it with your team. When will you do this?',
    category: 'action',
    question_number: 45
  },
  {
    id: 'leadership-transition-46',
    question: 'Identify one thing you need to stop doing immediately: What task or behavior from your old role will you consciously stop this week? How will you redirect people who expect you to keep doing it?',
    category: 'action',
    question_number: 46
  },
  {
    id: 'leadership-transition-47',
    question: 'Reach out to 2 mentors or peers who\'ve made similar transitions: Schedule 30-minute calls to ask about their experience. Who will you contact? What will you ask?',
    category: 'action',
    question_number: 47
  },
  {
    id: 'leadership-transition-48',
    question: 'Document your first observations: After your first week, write down 3 things you noticed about the team, culture, or challenges. Don\'t judge yet, just observe. When will you do this?',
    category: 'action',
    question_number: 48
  },
  {
    id: 'leadership-transition-49',
    question: 'Set up a forcing function for reflection: Block 30 minutes every Friday for the next 8 weeks to review what you learned and adjust your approach. Put it on your calendar now.',
    category: 'action',
    question_number: 49
  },
  {
    id: 'leadership-transition-50',
    question: 'Communicate one clear priority to your team this week: What is the most important thing for them to know right now? How will you tell them? When?',
    category: 'action',
    question_number: 50
  },
  {
    id: 'leadership-transition-51',
    question: 'Identify your first delegation: Choose one task you\'re currently doing that someone else could own. Who will you delegate to? How will you set them up for success? When will you start?',
    category: 'action',
    question_number: 51
  },
  {
    id: 'leadership-transition-52',
    question: 'Schedule coffee with 3 peer leaders in the next 2 weeks: Focus on building relationships, not transactional asks. Who will you reach out to? What do you want to learn about them?',
    category: 'action',
    question_number: 52
  },
  {
    id: 'leadership-transition-53',
    question: 'Create a decision log: Start documenting key decisions you make, why you made them, and what you learned. Review monthly. Set up the system this week.',
    category: 'action',
    question_number: 53
  },
  {
    id: 'leadership-transition-54',
    question: 'Ask for feedback explicitly: In your first 1-on-1s, ask each person: "What should I know that I haven\'t asked about?" Take notes without defending. What will you do with what you hear?',
    category: 'action',
    question_number: 54
  },
  {
    id: 'leadership-transition-55',
    question: 'Establish one personal boundary this week: What will you protect (dinner time, no weekend emails, morning workout)? Communicate it clearly. Hold yourself accountable.',
    category: 'action',
    question_number: 55
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    const { data, error } = await supabase
      .from('questions')
      .insert({
        id: q.id,
        question: q.question,
        category: q.category,
        template_id: 'leadership-transition',
        question_number: q.question_number
      });

    if (error) {
      console.error(`Error inserting question ${q.id}:`, error);
      process.exit(1);
    }

    console.log(`Inserted ${i + 1}/${questions.length}: ${q.id}`);

    // Rate limiting: wait 100ms between insertions
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify counts
  const { data: allQuestions, error: countError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'leadership-transition');

  if (countError) {
    console.error('Error counting questions:', countError);
    process.exit(1);
  }

  const counts = allQuestions.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\n📊 Question Breakdown:');
  console.log(`Total: ${allQuestions.length} questions`);
  console.log(`- Reflection (Foundation): ${counts.reflection || 0} (${((counts.reflection / allQuestions.length) * 100).toFixed(1)}%)`);
  console.log(`- Research: ${counts.research || 0} (${((counts.research / allQuestions.length) * 100).toFixed(1)}%)`);
  console.log(`- Planning: ${counts.planning || 0} (${((counts.planning / allQuestions.length) * 100).toFixed(1)}%)`);
  console.log(`- Action: ${counts.action || 0} (${((counts.action / allQuestions.length) * 100).toFixed(1)}%)`);
}

insertQuestions();
