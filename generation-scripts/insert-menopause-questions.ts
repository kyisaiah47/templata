import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

// COVERAGE FRAMEWORK:
// - Complexity: COMPLEX (50-70 questions) - life-changing transition, 4-7 years, multiple domains
// - Total: 55 questions
// - Foundation (25%): 14 questions - patterns, experiences, values, identity
// - Research (22%): 12 questions - medical info, symptom tracking, treatment research
// - Planning (28%): 15 questions - strategic thinking about lifestyle, relationships, health
// - Action (25%): 14 questions - concrete next steps, conversations, decisions
//
// Areas covered:
// 1. Symptom Recognition & Tracking
// 2. Medical Navigation
// 3. Physical Management
// 4. Emotional/Mental Health
// 5. Relationship Impact
// 6. Professional Life
// 7. Identity & Self-Perception
// 8. Support Systems
// 9. Long-term Health Planning
// 10. Self-Advocacy

const questions = [
  // ===== FOUNDATION QUESTIONS (14 questions, 25%) =====
  // Self-discovery: patterns, past experiences, values, identity

  {
    id: 'menopause-1',
    question: 'Write about 3 specific moments in the past year when you noticed your body felt different than before - not just "tired" or "hot," but what exactly changed in that moment? What were you doing? What did you notice first?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 1
  },
  {
    id: 'menopause-2',
    question: 'Think about the women in your family (mother, aunts, grandmothers) and their experiences with aging. What messages - spoken or unspoken - did you absorb about what happens to women\'s bodies over time? How do those messages show up in how you\'re approaching this transition?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 2
  },
  {
    id: 'menopause-3',
    question: 'Document your energy patterns over the past 3 months. When do you feel most like yourself? When does your energy crash? What patterns emerge - time of day, time of month, after certain activities or foods?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 3
  },
  {
    id: 'menopause-4',
    question: 'Reflect on a time in your life when your body changed significantly (puberty, pregnancy, illness, injury). How did you navigate it? What helped you adjust? What strategies from that time might be useful now?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 4
  },
  {
    id: 'menopause-5',
    question: 'Write down 5 things you used to be able to count on about your body or mind (sleep patterns, memory, temperature regulation, mood stability, physical strength). Which ones have shifted? How is that affecting your daily life?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 5
  },
  {
    id: 'menopause-6',
    question: 'Think about the last time someone made a comment or joke about menopause, aging, or "women of a certain age." What was your emotional reaction? What does that reaction tell you about how you\'re feeling about this transition?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 6
  },
  {
    id: 'menopause-7',
    question: 'Document 3 specific situations in the past month where you felt most frustrated or overwhelmed by symptoms. What was happening? Who were you with? What made it particularly hard in that moment?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 7
  },
  {
    id: 'menopause-8',
    question: 'Reflect on your relationship with your femininity and womanhood. How much of your identity has been connected to fertility, youth, or physical appearance? What shifts are you noticing as these change?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 8
  },
  {
    id: 'menopause-9',
    question: 'Write about a woman you know (personally or publicly) who is thriving in this life stage. What about her approach inspires you? What would it look like to adopt some of that in your own life?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 9
  },
  {
    id: 'menopause-10',
    question: 'Document your sleep over the past week. When do you wake up at night? What helps you fall back asleep (or doesn\'t)? What patterns connect poor sleep to next-day experiences?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 10
  },
  {
    id: 'menopause-11',
    question: 'Think about the coping mechanisms you\'ve relied on in the past (exercise, food, alcohol, staying busy, isolating). Which ones are serving you well right now? Which ones are making things harder?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 11
  },
  {
    id: 'menopause-12',
    question: 'Reflect on how you talk to yourself about aging and this transition. If a friend was going through this, what would you say to her? How different is that from what you say to yourself?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 12
  },
  {
    id: 'menopause-13',
    question: 'Write about what "thriving" (not just surviving) through menopause would look like for you. What would be different about your days? Your relationships? Your relationship with your body?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 13
  },
  {
    id: 'menopause-14',
    question: 'Document the moments in the past month when you felt most confident, capable, or at peace. What were you doing? What conditions allowed you to feel that way? How can you create more of those moments?',
    category: 'reflection',
    template_id: 'menopause',
    question_number: 14
  },

  // ===== RESEARCH QUESTIONS (12 questions, 22%) =====
  // Medical info gathering, symptom tracking, treatment research

  {
    id: 'menopause-15',
    question: 'Create a comprehensive symptom log for the next 2 weeks. Track: hot flashes (time, intensity, triggers), sleep disruptions, mood shifts, brain fog moments, physical pain, and energy levels. Note what you ate, activities, and stressors for each day.',
    category: 'research',
    template_id: 'menopause',
    question_number: 15
  },
  {
    id: 'menopause-16',
    question: 'Research 3 different healthcare providers who specialize in menopause (gynecologist, functional medicine, menopause specialist). For each, note: what\'s their approach to treatment? Do they take your insurance? What do patient reviews say about how they listen?',
    category: 'research',
    template_id: 'menopause',
    question_number: 16
  },
  {
    id: 'menopause-17',
    question: 'Document your current medications, supplements, and over-the-counter remedies. For each, note: when did you start it? What symptoms is it supposed to address? Is it actually helping? Any side effects?',
    category: 'research',
    template_id: 'menopause',
    question_number: 17
  },
  {
    id: 'menopause-18',
    question: 'Research the different types of hormone therapy (HRT): systemic estrogen, vaginal estrogen, combination therapy, bioidentical hormones. For each, list: what symptoms it addresses, contraindications for your health history, and questions you\'d need to ask your doctor.',
    category: 'research',
    template_id: 'menopause',
    question_number: 18
  },
  {
    id: 'menopause-19',
    question: 'Investigate non-hormonal treatment options for your 3 most challenging symptoms. For each symptom, find: what does research say works? What do real women report? What\'s the cost and time commitment?',
    category: 'research',
    template_id: 'menopause',
    question_number: 19
  },
  {
    id: 'menopause-20',
    question: 'Create a family health history document. List: when did your mother/aunts/grandmothers go through menopause? What symptoms did they have? Do you have family history of osteoporosis, heart disease, breast cancer, or blood clots? How does this affect your treatment options?',
    category: 'research',
    template_id: 'menopause',
    question_number: 20
  },
  {
    id: 'menopause-21',
    question: 'Research your health insurance coverage. What menopause-related care is covered? What requires pre-authorization? What\'s your out-of-pocket maximum? Are alternative providers (naturopaths, acupuncturists) covered?',
    category: 'research',
    template_id: 'menopause',
    question_number: 21
  },
  {
    id: 'menopause-22',
    question: 'Document what foods/drinks make your symptoms worse. Track for 1 week: how do you feel 30 minutes and 2 hours after caffeine, alcohol, sugar, spicy foods, large meals? What patterns emerge?',
    category: 'research',
    template_id: 'menopause',
    question_number: 22
  },
  {
    id: 'menopause-23',
    question: 'Research bone density and cardiovascular health screening. When should you get a DEXA scan? What blood work should you request? How often should these be monitored based on your risk factors?',
    category: 'research',
    template_id: 'menopause',
    question_number: 23
  },
  {
    id: 'menopause-24',
    question: 'Investigate cognitive changes during menopause. What does research say about "brain fog," memory issues, and concentration problems? Are they temporary? What interventions show promise?',
    category: 'research',
    template_id: 'menopause',
    question_number: 24
  },
  {
    id: 'menopause-25',
    question: 'Research workplace accommodations for menopause symptoms. What are other women asking for (temperature control, flexible scheduling, remote work)? What are your legal rights? What does your company already offer for health conditions?',
    category: 'research',
    template_id: 'menopause',
    question_number: 25
  },
  {
    id: 'menopause-26',
    question: 'Find 3 evidence-based resources about menopause (medical websites, books, podcasts, online communities). For each, evaluate: is the information current? What\'s their treatment philosophy? Do they address your specific concerns?',
    category: 'research',
    template_id: 'menopause',
    question_number: 26
  },

  // ===== PLANNING QUESTIONS (15 questions, 28%) =====
  // Strategic thinking about lifestyle, relationships, health

  {
    id: 'menopause-27',
    question: 'Design your ideal morning routine that accounts for how you actually feel right now - not how you think you "should" feel. What would set you up for success? What needs to change from your current routine?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 27
  },
  {
    id: 'menopause-28',
    question: 'Plan how you\'ll talk to your partner about what you\'re experiencing. What do you need them to understand? What specific support would help? What\'s not helpful? When and where will you have this conversation?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 28
  },
  {
    id: 'menopause-29',
    question: 'Create a symptom management plan for your worst symptoms. For each, identify: early warning signs, immediate relief strategies, who to call for help, and when to seek medical intervention.',
    category: 'planning',
    template_id: 'menopause',
    question_number: 29
  },
  {
    id: 'menopause-30',
    question: 'Design an exercise plan that works for your current energy levels and physical state - not what you did 5 years ago. What movement makes you feel better? What\'s realistic given your symptoms? How will you adjust when symptoms flare?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 30
  },
  {
    id: 'menopause-31',
    question: 'Plan how to build or strengthen your support system. Who in your life has been through this? Who is going through it now? Where can you find community (online, in-person)? What would make you feel less alone?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 31
  },
  {
    id: 'menopause-32',
    question: 'Create a decision-making framework for hormone therapy. What would need to be true for you to try it? What are your fears? What information would you need? Who needs to be part of this decision?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 32
  },
  {
    id: 'menopause-33',
    question: 'Plan modifications to your physical environment. What changes at home would help (bedroom temperature, bedding, clothing, lighting)? What about your workspace? Your car? What\'s worth the investment?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 33
  },
  {
    id: 'menopause-34',
    question: 'Design a mental health support plan. Given mood changes, anxiety, or depression risks, what\'s your baseline? When would you seek therapy? What type (talk therapy, cognitive behavioral, medication)? Who would you tell if you\'re struggling?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 34
  },
  {
    id: 'menopause-35',
    question: 'Create a professional life strategy. Do you need to tell anyone at work? What accommodations might help? How might this transition affect your career timeline or goals? What adjustments make sense?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 35
  },
  {
    id: 'menopause-36',
    question: 'Plan how you\'ll handle social situations when symptoms hit. What\'s your exit strategy for events? How will you explain if needed? What do you keep with you (fan, layers, water)? Who knows to check in on you?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 36
  },
  {
    id: 'menopause-37',
    question: 'Design a sleep optimization strategy. What changes to your bedroom environment? What pre-sleep routine? How will you handle night waking? When will you turn off screens? What will you try for 2 weeks consistently?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 37
  },
  {
    id: 'menopause-38',
    question: 'Create a nutrition plan that addresses your symptoms and long-term health. What changes would support bone health? Reduce hot flashes? Stabilize energy? What\'s realistic to implement? What might you need help with?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 38
  },
  {
    id: 'menopause-39',
    question: 'Plan how you\'ll maintain intimacy and sexual health through changes. What concerns do you have? What do you want to maintain? What conversations need to happen? What resources or medical support might help?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 39
  },
  {
    id: 'menopause-40',
    question: 'Design a long-term health monitoring plan. What health markers should you track? How often? What screenings do you need at this age? How will you stay on top of preventive care while managing current symptoms?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 40
  },
  {
    id: 'menopause-41',
    question: 'Create a self-care budget and time allocation. What support is worth paying for (therapy, healthcare, supplements, services that save energy)? What time do you need to protect? What can you stop doing or delegate?',
    category: 'planning',
    template_id: 'menopause',
    question_number: 41
  },

  // ===== ACTION QUESTIONS (14 questions, 25%) =====
  // Concrete next steps, conversations, decisions

  {
    id: 'menopause-42',
    question: 'Schedule an appointment with a healthcare provider who specializes in menopause. Write down your top 5 symptoms, 3 specific questions, and what you want to walk away with from this appointment.',
    category: 'action',
    template_id: 'menopause',
    question_number: 42
  },
  {
    id: 'menopause-43',
    question: 'Start one specific lifestyle change this week that research suggests helps your worst symptom. Document: what exactly will you do? When? How will you track whether it helps? When will you evaluate?',
    category: 'action',
    template_id: 'menopause',
    question_number: 43
  },
  {
    id: 'menopause-44',
    question: 'Reach out to one woman who has been through menopause and ask about her experience. Prepare 5 specific questions about what helped, what she wishes she\'d known, and what advice she has for you.',
    category: 'action',
    template_id: 'menopause',
    question_number: 44
  },
  {
    id: 'menopause-45',
    question: 'Create a "symptom emergency kit" for home, work, and car. List what you need in each (layers, fan, cold water, snacks, medications, etc.) and gather those items this week.',
    category: 'action',
    template_id: 'menopause',
    question_number: 45
  },
  {
    id: 'menopause-46',
    question: 'Have the conversation with your partner or closest family member about what you\'re experiencing and what you need. Write down the 3 most important things they should understand and commit to when you\'ll talk.',
    category: 'action',
    template_id: 'menopause',
    question_number: 46
  },
  {
    id: 'menopause-47',
    question: 'Join one community (online or in-person) where you can connect with other women going through menopause. Commit to introducing yourself and engaging at least once this week.',
    category: 'action',
    template_id: 'menopause',
    question_number: 47
  },
  {
    id: 'menopause-48',
    question: 'Request the bloodwork and screening tests you need based on your age and symptoms. Call your doctor\'s office, specify what you want tested, and schedule the appointment.',
    category: 'action',
    template_id: 'menopause',
    question_number: 48
  },
  {
    id: 'menopause-49',
    question: 'Eliminate or reduce one trigger you\'ve identified that makes symptoms worse (caffeine after 2pm, alcohol, skipping meals, etc.). Commit to this change for 2 weeks and track the impact.',
    category: 'action',
    template_id: 'menopause',
    question_number: 49
  },
  {
    id: 'menopause-50',
    question: 'Make one physical change to your sleeping environment this week that might improve sleep quality. Execute it, then assess after 5 nights whether it\'s making a difference.',
    category: 'action',
    template_id: 'menopause',
    question_number: 50
  },
  {
    id: 'menopause-51',
    question: 'Communicate one specific need to someone at work (temperature control, flexible timing, quiet space, etc.). Decide who to approach, what exactly to request, and have that conversation this week.',
    category: 'action',
    template_id: 'menopause',
    question_number: 51
  },
  {
    id: 'menopause-52',
    question: 'Try one stress-reduction practice this week (meditation, yoga, journaling, breathing exercises, therapy). Commit to doing it at least 3 times and evaluate whether it helps manage symptoms.',
    category: 'action',
    template_id: 'menopause',
    question_number: 52
  },
  {
    id: 'menopause-53',
    question: 'Schedule time for movement that feels good right now - not what you "should" do. Put 3 sessions on your calendar this week and actually do them, adjusting intensity based on how you feel that day.',
    category: 'action',
    template_id: 'menopause',
    question_number: 53
  },
  {
    id: 'menopause-54',
    question: 'Make a decision about one treatment option you\'ve been considering (hormone therapy, supplement, therapy, specialist appointment). Either schedule it or consciously decide to table it for now - no more limbo.',
    category: 'action',
    template_id: 'menopause',
    question_number: 54
  },
  {
    id: 'menopause-55',
    question: 'Review your symptom log from the past 2 weeks and identify your #1 priority for improvement. Write down 3 specific actions you\'ll take in the next week to address it, then take the first action today.',
    category: 'action',
    template_id: 'menopause',
    question_number: 55
  }
];

async function main() {
  console.log('Starting menopause question insertion...\n');
  console.log('Total questions to insert:', questions.length);
  console.log('\nBreakdown:');
  console.log('- Foundation (reflection):', questions.filter(q => q.question_number <= 14).length);
  console.log('- Research:', questions.filter(q => q.category === 'research').length);
  console.log('- Planning:', questions.filter(q => q.category === 'planning').length);
  console.log('- Action:', questions.filter(q => q.category === 'action').length);

  let successCount = 0;
  let errorCount = 0;

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.question_number}:`, error.message);
      errorCount++;
    } else {
      successCount++;
      if (successCount % 10 === 0) {
        console.log(`Inserted ${successCount} questions...`);
      }
    }
  }

  console.log('\n=== INSERTION COMPLETE ===');
  console.log(`Successfully inserted: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total: ${questions.length}`);
}

main();
