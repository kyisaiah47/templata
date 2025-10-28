#!/usr/bin/env npx tsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // ROUND 1: FOUNDATION QUESTIONS (10 questions - 25% - self-discovery about mental health needs, patterns, past experiences)
  {
    id: 'therapy-journey-1',
    question: 'Write about the specific moment or series of events that made you think "I need to talk to someone". What was happening in your life? What feeling became too big to carry alone?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 1
  },
  {
    id: 'therapy-journey-2',
    question: 'Document 3-5 recurring patterns you\'ve noticed in yourself over the past year. These could be thoughts ("I\'m not good enough"), behaviors (avoiding conflict, overworking), or emotional reactions (anxiety before social events). When do these patterns show up most?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 2
  },
  {
    id: 'therapy-journey-3',
    question: 'Reflect on your past experiences with asking for help - from friends, family, doctors, or other professionals. What made it hard? What made it easier? What does this tell you about what you need from a therapist?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 3
  },
  {
    id: 'therapy-journey-4',
    question: 'Think about a time when someone truly listened to you without judgment. Who was it? What did they do (or not do) that made you feel safe? What would it take for you to feel that way with a therapist?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 4
  },
  {
    id: 'therapy-journey-5',
    question: 'List the main areas of your life that feel hardest right now (relationships, work, family, self-image, past trauma, daily functioning). For each, write 1-2 sentences about what specifically is painful or stuck.',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 5
  },
  {
    id: 'therapy-journey-6',
    question: 'Write about any mental health experiences from your past - previous therapy, medication, family history, significant struggles or crises. What worked? What didn\'t? What do you wish had been different?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 6
  },
  {
    id: 'therapy-journey-7',
    question: 'Reflect on your beliefs or fears about therapy. What have you heard from others? What worries you most - being judged, being vulnerable, it not working, the cost? Where did these concerns come from?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 7
  },
  {
    id: 'therapy-journey-8',
    question: 'Imagine yourself 6 months from now, after therapy has been helpful. What\'s different about how you feel, think, or navigate your day? What specific changes would tell you therapy is working?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 8
  },
  {
    id: 'therapy-journey-9',
    question: 'Think about your communication style when you\'re upset or struggling. Do you intellectualize, shut down, cry easily, get angry, minimize your feelings? How might this show up in therapy, and what would help a therapist work with you?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 9
  },
  {
    id: 'therapy-journey-10',
    question: 'Document your current support system. Who knows you\'re considering therapy? Who would be supportive? Who might not understand? How does this affect what you need from a therapist?',
    category: 'reflection',
    template_id: 'therapy-journey',
    question_number: 10
  },

  // ROUND 2: RESEARCH QUESTIONS (9 questions - 22% - data-gathering about therapist options, insurance, modalities)
  {
    id: 'therapy-journey-11',
    question: 'Research your insurance mental health coverage. What\'s your deductible? Copay per session? How many sessions are covered annually? Do you need pre-authorization? Is there an EAP (Employee Assistance Program) through work?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 11
  },
  {
    id: 'therapy-journey-12',
    question: 'Calculate your therapy budget if paying out-of-pocket or supplementing insurance. Weekly sessions cost how much per month? Can you afford it for 3-6 months minimum? What would you need to adjust to afford it?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 12
  },
  {
    id: 'therapy-journey-13',
    question: 'Research therapy modalities that address your specific needs. Look into: CBT (thoughts/behaviors), DBT (emotion regulation), psychodynamic (patterns from past), EMDR (trauma), ACT (acceptance). Which 2-3 resonate most with what you\'re struggling with?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 13
  },
  {
    id: 'therapy-journey-14',
    question: 'Investigate therapist directories and platforms: Psychology Today, Zocdoc, TherapyDen, OpenPath Collective, BetterHelp, your insurance provider directory. Which have therapists with your insurance, location/online preferences, and specialties?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 14
  },
  {
    id: 'therapy-journey-15',
    question: 'Research what credentials mean: psychiatrist (MD, can prescribe), psychologist (PhD/PsyD), licensed therapist (LCSW, LPC, LMFT). Based on your needs (medication vs. therapy vs. both), which makes sense to start with?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 15
  },
  {
    id: 'therapy-journey-16',
    question: 'Look up 5-7 potential therapists who seem like possible matches. For each, note: specialties, years of experience, modality, insurance accepted, availability, what stood out in their profile. What patterns do you notice in who you\'re drawn to?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 16
  },
  {
    id: 'therapy-journey-17',
    question: 'Research identity-specific considerations that matter to you. If LGBTQ+, BIPOC, neurodiverse, have chronic illness, or other identity factors - what therapists specialize in culturally competent care? Why does this matter for your comfort and effectiveness?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 17
  },
  {
    id: 'therapy-journey-18',
    question: 'Investigate practical logistics. What\'s your schedule flexibility? Morning, evening, weekend availability? In-person, telehealth, or hybrid? How far can you travel? What constraints affect your options?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 18
  },
  {
    id: 'therapy-journey-19',
    question: 'Look into your workplace mental health benefits beyond insurance - subsidized apps (Headspace, Calm), wellness stipends, flexible schedules for appointments, mental health days. What resources exist that you haven\'t tapped?',
    category: 'research',
    template_id: 'therapy-journey',
    question_number: 19
  },

  // ROUND 3: PLANNING QUESTIONS (11 questions - 28% - selecting therapist, preparing for sessions, tracking progress)
  {
    id: 'therapy-journey-20',
    question: 'Create your therapist evaluation criteria. Rank importance (1-10) for: specialization match, years of experience, therapy modality, identity/cultural understanding, personality fit, cost, convenience, insurance. What are your non-negotiables versus nice-to-haves?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 20
  },
  {
    id: 'therapy-journey-21',
    question: 'Draft your consultation call questions. Plan to ask 5-7 questions like: "How do you typically work with someone struggling with [your issue]?" "What does a successful client look like to you?" "How do you handle it when therapy feels stuck?" What else matters to you?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 21
  },
  {
    id: 'therapy-journey-22',
    question: 'Plan your first session preparation. What do you want to cover in 50 minutes? What\'s most important to communicate about your struggles? What questions do you have about how therapy will work? Write a brief outline to bring with you.',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 22
  },
  {
    id: 'therapy-journey-23',
    question: 'Design your therapy goals framework. Identify 2-3 main goals, and for each, define: What would "better" look like concretely? How would you know you\'re making progress? What timeline feels realistic?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 23
  },
  {
    id: 'therapy-journey-24',
    question: 'Strategize how to build trust with a therapist. What will you need from them in the first few sessions to feel safe? What might you hold back initially, and when might you be ready to share it? How will you communicate if something isn\'t working?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 24
  },
  {
    id: 'therapy-journey-25',
    question: 'Plan your therapy routine and logistics. What day/time works consistently? How will you get there or set up your space for telehealth? What will you do right before/after sessions to support yourself?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 25
  },
  {
    id: 'therapy-journey-26',
    question: 'Create a system for tracking your progress. Will you journal after sessions? Use a mood tracker app? Review goals monthly? How will you capture insights and notice patterns over time?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 26
  },
  {
    id: 'therapy-journey-27',
    question: 'Develop your plan for engaging between sessions. What homework or practices might help? How will you apply insights to real situations? What might get in the way of follow-through, and how will you address it?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 27
  },
  {
    id: 'therapy-journey-28',
    question: 'Plan how to handle difficult emotions that therapy might bring up. Who can you call if you feel worse after a session? What coping strategies work for you? When would you need crisis support, and what\'s that number?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 28
  },
  {
    id: 'therapy-journey-29',
    question: 'Strategize your commitment and evaluation timeline. Commit to how many sessions before evaluating fit? (usually 4-6 recommended) What specific signs would tell you this therapist isn\'t right? When would you reassess whether therapy is helping?',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 29
  },
  {
    id: 'therapy-journey-30',
    question: 'Map out potential obstacles and solutions. What might make you want to quit therapy? (feeling vulnerable, slow progress, logistics, cost) For each obstacle, plan how you\'ll address it before it derails you.',
    category: 'planning',
    template_id: 'therapy-journey',
    question_number: 30
  },

  // ROUND 4: ACTION QUESTIONS (10 questions - 25% - booking appointments, first session, ongoing engagement)
  {
    id: 'therapy-journey-31',
    question: 'Contact 3-4 therapists from your research list TODAY. Call or email requesting a brief consultation. Use this script: "I\'m looking for a therapist to help with [brief description]. Do you have availability and offer free consultations?" Track who you contacted and their responses.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 31
  },
  {
    id: 'therapy-journey-32',
    question: 'Schedule consultation calls with 2-3 therapists this week. Block 15-20 minutes for each. Prepare your questions list. After each call, immediately write notes: gut feeling, how they answered, red flags or green flags.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 32
  },
  {
    id: 'therapy-journey-33',
    question: 'Make your decision and book your first session. Choose based on your criteria and gut feeling. Schedule it within the next 2 weeks while motivation is high. Add it to your calendar with a reminder 24 hours before.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 33
  },
  {
    id: 'therapy-journey-34',
    question: 'Handle the administrative tasks this week. Complete intake paperwork, verify insurance coverage is active, save the therapist\'s contact info and emergency line, set up payment method. Get logistics out of the way before your first session.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 34
  },
  {
    id: 'therapy-journey-35',
    question: 'Write a one-page summary of what brought you to therapy to bring to your first session. Include: main struggles, what you hope to work on, relevant history, current symptoms. This helps when you\'re nervous and can\'t remember what to say.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 35
  },
  {
    id: 'therapy-journey-36',
    question: 'Attend your first session. Go even if you\'re anxious. Notice how you feel with this therapist - safe, judged, understood, confused? There\'s no perfect first session, but pay attention to whether you could imagine opening up to this person.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 36
  },
  {
    id: 'therapy-journey-37',
    question: 'After your first 2-3 sessions, actively engage with one thing the therapist suggested. Try the coping skill, notice the pattern, complete the reflection exercise. Therapy only works if you participate - test what happens when you engage.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 37
  },
  {
    id: 'therapy-journey-38',
    question: 'Speak up in session about something that\'s bothering you about the therapy process itself. Practice saying: "Can we talk about ___?" or "I noticed I shut down when we discussed ___" or "I\'re not sure this approach is working for me." See how the therapist responds.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 38
  },
  {
    id: 'therapy-journey-39',
    question: 'After 4-6 sessions, evaluate whether this is the right fit. Review your notes and initial goals. Are you making any progress? Do you feel comfortable? Can you be honest? If not, book a session to discuss your concerns or schedule a consultation with someone new.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 39
  },
  {
    id: 'therapy-journey-40',
    question: 'Establish your ongoing therapy practice. Schedule recurring appointments for the next month. Set a weekly reminder to reflect on what you want to discuss in the next session. Commit to showing up even when it feels hard - that\'s often when the real work happens.',
    category: 'action',
    template_id: 'therapy-journey',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const { data, error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.id}:`, error);
      process.exit(1);
    }

    console.log(`✓ Inserted ${i + 1}/${questions.length}: ${question.id}`);

    // Add delay to avoid rate limiting
    if (i < questions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  console.log('\n✅ All questions inserted successfully!');
}

insertQuestions();
