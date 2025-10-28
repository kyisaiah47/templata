import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const guideId = 'ending-toxic-relationship';

// ROUND 1: FOUNDATION QUESTIONS (15 questions - 25%)
const foundationQuestions = [
  // Pattern Recognition
  "Write about 3 specific moments in the past 6 months when you felt your boundaries were violated. What happened? How did you feel in your body? What did you tell yourself afterward?",

  "Describe a time before this relationship when you felt genuinely respected by a partner or close friend. What did that person do differently? How did you feel around them compared to now?",

  "Document the last 5 times you apologized in this relationship. For each: What were you apologizing for? Did you actually do something wrong? How did you feel before vs after apologizing?",

  "Think about conversations with this person over the past month. Write about 3 instances when you felt confused, blamed, or questioned your own memory of events. What was said?",

  "Reflect on what you used to enjoy doing before this relationship intensified. What activities have you stopped? What friendships have faded? When did you notice these changes?",

  // Emotional Impact
  "Write about how you feel on Sunday nights or the night before seeing this person. What physical sensations come up? What thoughts run through your mind? When did this pattern start?",

  "Document 3 times in the past month when you felt happy or excited, then immediately felt guilty or anxious about feeling good. What triggered the happiness? What made you feel guilty?",

  "Describe how you talk to yourself now versus a year ago. What has changed about your inner voice? Write down specific phrases you say to yourself that you didn't before.",

  "Think about decisions you've made in the past 6 months - big or small. How many times did you second-guess yourself? What makes it hard to trust your own judgment now?",

  // Self-Worth & Identity
  "Write about 3 aspects of yourself that you've questioned because of this relationship. What did you used to believe about yourself? What do you doubt now? What caused each shift?",

  "Reflect on compliments or achievements from the past year. How did this person respond when good things happened to you? Write down their exact reactions to 3 specific wins you had.",

  // Early Warning Signs
  "Think back to the first 3 months of this relationship. What felt exciting then that you now recognize as a red flag? What did you dismiss or explain away?",

  "Document times when friends or family expressed concern about this relationship. What did they say? How did you defend or explain your partner's behavior? What do you think now?",

  // Cycle Recognition
  "Describe the pattern of conflict in this relationship. After a fight or incident, what happens? How long until things feel 'normal'? How many times has this cycle repeated?",

  "Write about a time you tried to leave or create distance in this relationship. What happened? What did the other person do or say? Why did you stay or come back?",
];

// ROUND 2: RESEARCH QUESTIONS (14 questions - 23%)
const researchQuestions = [
  // Safety Assessment
  "Document specific behaviors that made you feel unsafe (emotionally or physically). For each, rate severity 1-10 and note if frequency is increasing, staying same, or decreasing.",

  "Research warning signs of escalating abuse. Which ones match your situation? Note specific recent examples of each warning sign you identify.",

  // Support Mapping
  "List 5 people who you trust and who have shown they care about your wellbeing. For each: How close do you feel to them? Have they expressed concern? Could you call them at 3am?",

  "Research local resources: domestic violence hotlines, shelters, counseling services, legal aid. Write down 3 specific organizations with phone numbers and what services they offer.",

  "Identify one person who has successfully left a toxic relationship. What can you ask them about their experience? Write 5 specific questions you'd like answered.",

  // Financial Audit
  "Document all shared financial ties: joint accounts, leases, loans, bills, subscriptions. For each, note who has control and what steps would be needed to separate.",

  "Research your financial independence. How much money could you access immediately without your partner knowing? What accounts are solely yours? What's your credit situation?",

  "Calculate minimum monthly costs for independent living: rent, utilities, food, phone, transport. Compare this to money you could access. What's the gap? What would bridge it?",

  // Legal Research
  "Research tenant rights in your area if you share housing. What are legal requirements for your name on the lease? What's the eviction process? What are your rights?",

  "Look into protective orders or restraining orders in your jurisdiction. What's the process? What evidence is needed? What protection do they actually provide? Write down the steps.",

  // Professional Support
  "Research therapists or counselors who specialize in toxic relationships or trauma. Find 3 options that take your insurance or offer sliding scale. Note their contact info and specialties.",

  // Exit Research
  "Identify 3 safe places you could go immediately if you needed to leave right now: friend's house, family member, hotel, shelter. Write exact addresses and contact information.",

  "Research the safest time patterns for leaving. When is your partner most predictable? When are you most likely to have uninterrupted time? Document their schedule patterns.",

  // Documentation Research
  "Learn what evidence is useful for protective orders or legal proceedings. What should you document? How should you store it safely? What apps or methods are recommended?",
];

// ROUND 3: PLANNING QUESTIONS (16 questions - 27%)
const planningQuestions = [
  // Boundary Planning
  "Write down 3 boundaries you need to set or reinforce. For each: What's the exact boundary? What will you say? What will you do if it's violated? What's your backup plan?",

  "Plan how to maintain emotional boundaries while still in the relationship. What topics will you avoid? What responses can you prepare? How will you protect your energy?",

  // Exit Strategy
  "Design your ideal exit scenario. What day/time? Who will be there? Where will you go immediately after? What will you take? What will you say (if anything)?",

  "Create a backup exit plan for if things escalate suddenly. What can you grab in 5 minutes? Who can you call? Where's the nearest safe location? What's your escape route?",

  "Plan the conversation (if you're having one). Write out what you'll say in 3-4 sentences. What objections or manipulations do you expect? How will you respond to each?",

  "Strategize for post-exit contact. Will you block immediately? Allow one-way communication? Have a third party mediate? What's your plan if they show up at your work/home?",

  // Logistics Planning
  "Plan what to take vs what to leave behind. Critical items to grab immediately? Things you can get later with police escort? What are you willing to lose to get out?",

  "Create a timeline for separation steps. Week 1: what? Month 1: what? 3 months out: what? What needs to happen in what order for legal, financial, housing aspects?",

  "Map out your support schedule for the first month after leaving. Who can you stay with when? Who can you call on difficult days? How will you handle weekends/nights?",

  // Financial Planning
  "Plan financial separation. Which accounts to close first? How to split shared bills? When to change passwords? What's the sequence to minimize conflict and protect your money?",

  "Strategize income stability. If you're financially dependent, what can you do now to build independence? Can you secure a job, increase hours, save secretly, build credit?",

  // Social Management
  "Plan what you'll tell mutual friends. Who gets the full story? Who gets a simple version? Who might you lose? How will you handle social events where you might both be present?",

  "Strategize family conversations. Who do you tell first? What do you need them to understand? What boundaries will you set about their involvement? What support do you need?",

  // Recovery Planning
  "Design your first week of freedom. What will you do to feel safe? Who will you see? What will you avoid? How will you handle the urge to reach out or go back?",

  "Plan how to counter the inevitable self-doubt. What will you read/watch to remind yourself why you left? Who will you call? What evidence will you review? Write 3 phrases to tell yourself.",

  "Strategize long-term healing. What type of therapy? What books or resources? What new routines or boundaries in future relationships? How will you rebuild trust in yourself?",
];

// ROUND 4: ACTION QUESTIONS (15 questions - 25%)
const actionQuestions = [
  // Immediate Documentation
  "Start a private log (in a safe, password-protected place). Document today: What happened recently that made you seek help? Include dates, specific quotes, and how you felt.",

  "Create a safety folder (physical or digital in secure cloud). Gather: copies of important documents, evidence of abuse, photos of injuries, threatening messages, financial records. What can you collect today?",

  "Take photos of important documents you can't take originals of yet: IDs, birth certificates, financial records, medical records, insurance cards. Store them in a secure email or cloud account they can't access.",

  // Safety Actions
  "Set up a code word or signal with one trusted person that means 'I need help now.' Tell them what action to take if you use it. Write down: Who? What word/signal? What should they do?",

  "Change passwords on your personal accounts to something your partner couldn't guess. Enable two-factor authentication. Check: email, banking, social media, phone backup. Do this from a private device if possible.",

  "Prepare a go-bag and hide it somewhere safe (friend's house, car trunk, work locker). Include: clothes, medications, copies of documents, cash, phone charger, spare key. Where will you hide it?",

  // Financial Actions
  "Open a new bank account at a different bank in your name only. Use paperless statements sent to a private email. Transfer small amounts regularly if possible. Set this up this week.",

  "Gather cash in small amounts that won't be noticed. Hide it somewhere safe outside your home. Goal amount based on one month expenses. Track: where hidden, how much, when you can add more.",

  // Support Actions
  "Reach out to one trusted person today. Tell them what's really happening. Ask if you can use them as emergency contact, safe place, or just someone to check in with. Who will you contact?",

  "Call a domestic violence hotline (National: 1-800-799-7233). You don't have to leave today - just gather information. Prepare 3 questions to ask. When can you call from a safe location?",

  "Schedule an appointment with a therapist or counselor this week. If cost is a barrier, research sliding scale options. Making the appointment is the action - you can cancel if you're not ready.",

  // Boundary Actions
  "Practice saying no to one small thing this week. Notice what happens - to you, to them. Document the response. This is practice for bigger boundaries.",

  "Create a self-soothing toolkit for after difficult interactions. List 5 specific things you can do in 5 minutes to calm yourself: breathing technique, grounding exercise, person to text, song to play, physical movement.",

  // Decision Actions
  "Write a letter to yourself about why you're considering leaving. Seal it. Put it somewhere safe. This is for future-you when you doubt yourself. Date it and describe what happened this week.",

  "Take one concrete step toward independence this week. Options: job application, apartment search, consult with a lawyer, visit a shelter, reconnect with an old friend. Choose one and do it. What will it be?",
];

async function insertQuestions() {
  let questionNumber = 1;
  const allQuestions = [];

  // Process all questions in order
  const questionSets = [
    { questions: foundationQuestions, category: 'reflection' },
    { questions: researchQuestions, category: 'research' },
    { questions: planningQuestions, category: 'planning' },
    { questions: actionQuestions, category: 'action' },
  ];

  for (const set of questionSets) {
    for (const question of set.questions) {
      allQuestions.push({
        id: `${guideId}-${questionNumber}`,
        question: question,
        category: set.category,
        template_id: guideId,
        question_number: questionNumber,
      });
      questionNumber++;
    }
  }

  console.log(`\n=== Inserting ${allQuestions.length} questions for ${guideId} ===\n`);

  // Insert all questions
  const { data, error } = await supabase
    .from('questions')
    .insert(allQuestions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log(`✅ Successfully inserted ${allQuestions.length} questions`);

  // Verify counts by category
  const { data: verification } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', guideId);

  if (verification) {
    const counts = verification.reduce((acc: any, q: any) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});

    console.log('\n=== Question Count by Category ===');
    console.log(`Reflection (Foundation): ${counts.reflection || 0}`);
    console.log(`Research: ${counts.research || 0}`);
    console.log(`Planning: ${counts.planning || 0}`);
    console.log(`Action: ${counts.action || 0}`);
    console.log(`Total: ${verification.length}`);
  }
}

insertQuestions();
