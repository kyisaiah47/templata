import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-11) - reflection category
  {
    id: 'public-speaking-1',
    question: 'Write about the last 3 times you had to speak in front of others (work presentation, toast, meeting, class, etc.). For each: What was the situation? What did you feel in your body right before you started? What\'s one moment from each that still sticks with you?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 1
  },
  {
    id: 'public-speaking-2',
    question: 'Reflect on someone you know personally who seems comfortable speaking in groups - not a celebrity, but someone you\'ve actually observed. What do they do differently than you? Write down 3-5 specific behaviors you\'ve noticed (how they pause, make eye contact, use their hands, etc.).',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 2
  },
  {
    id: 'public-speaking-3',
    question: 'Think about the last time you had something important to say in a group setting but didn\'t speak up. What was the moment you decided to stay quiet? What story did you tell yourself about why you shouldn\'t talk? What do you wish you had said?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 3
  },
  {
    id: 'public-speaking-4',
    question: 'Document 3 moments from your past (childhood, school, early career) when speaking in front of others didn\'t go well. For each: What happened? Who was there? What conclusion did you draw about yourself as a speaker? Do you still believe that conclusion?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 4
  },
  {
    id: 'public-speaking-5',
    question: 'Reflect on the times when you DO feel comfortable speaking - maybe with close friends, family, or small groups. What\'s different about those situations? What are you doing in those moments that you\'re NOT doing when you\'re anxious?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 5
  },
  {
    id: 'public-speaking-6',
    question: 'Write about a time when someone gave you feedback (positive or negative) about how you communicate or present. What did they say? How did it land? How has that feedback shaped the way you show up when speaking?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 6
  },
  {
    id: 'public-speaking-7',
    question: 'List the last 5-7 times you were in a meeting, class, or group setting. For each, note: Did you speak? If yes, how long after the meeting started? If no, what stopped you? What pattern do you notice?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 7
  },
  {
    id: 'public-speaking-8',
    question: 'Think about your "speaking voice" versus your "regular voice." How do they differ? When do you shift into "speaking mode"? What happens to your voice, pace, or word choice? Does it feel authentic or like you\'re performing?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 8
  },
  {
    id: 'public-speaking-9',
    question: 'Reflect on the last presentation or speech you heard that genuinely moved you or stuck with you. What made it memorable? Was it the content, the delivery, the speaker\'s energy? What specifically can you remember about it?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 9
  },
  {
    id: 'public-speaking-10',
    question: 'Document a time when you were explaining something you deeply care about (a hobby, idea, story) and got really animated. Who were you talking to? What made you forget to be self-conscious? What does that tell you about when you\'re at your best?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 10
  },
  {
    id: 'public-speaking-11',
    question: 'Write about your earliest memory of speaking in front of a group. How old were you? What was the context? What do you remember feeling? How do you think that early experience shapes how you feel about public speaking now?',
    category: 'reflection',
    template_id: 'public-speaking',
    question_number: 11
  },
  // Research Questions (12-20)
  {
    id: 'public-speaking-12',
    question: 'Research 3 speakers (TED talks, keynotes, podcasts, YouTube) who speak on topics you care about. For each, watch/listen and document: What do they do in the first 30 seconds? How do they handle pauses? What makes their delivery feel authentic vs. rehearsed? What\'s one technique you could steal?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 12
  },
  {
    id: 'public-speaking-13',
    question: 'Identify 3-5 upcoming opportunities in your life where you could practice speaking (team meetings, social events, toasts, volunteer opportunities, local meetups). For each: What\'s the context? How many people? What\'s your relationship to them? Which feels like the lowest-stakes place to start?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 13
  },
  {
    id: 'public-speaking-14',
    question: 'Study your target audience. Pick the group you most want/need to speak to (work team, conference attendees, community group, etc.). Research: What do they care about? What problems keep them up at night? What communication style resonates with them? What speakers do THEY respect?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 14
  },
  {
    id: 'public-speaking-15',
    question: 'Analyze 3 presentations or talks you\'ve given (or meetings where you spoke). For each, gather evidence: Emails or messages people sent after? Feedback forms? Things people mentioned later? What actually landed with your audience versus what you thought was important?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 15
  },
  {
    id: 'public-speaking-16',
    question: 'Research your physical speaking patterns. Record yourself speaking for 2-3 minutes (presentation, story, explanation - anything). Watch it back and document: What do you do with your hands? Where do your eyes go? What filler words do you use? What surprised you about how you come across?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 16
  },
  {
    id: 'public-speaking-17',
    question: 'Map out the speaking landscape in your world. List 5-10 places where public speaking happens in your industry, community, or interests (conferences, meetups, panels, workshops, podcasts, lunch-and-learns). For each: How do people get invited to speak? What\'s the typical format? Which feels most accessible to you?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 17
  },
  {
    id: 'public-speaking-18',
    question: 'Study how experts handle nerves. Find 3 interviews or articles where accomplished speakers talk about managing anxiety or fear. Document their specific techniques (not just "practice more" but actual tactical strategies). Which resonates with something you could actually try?',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 18
  },
  {
    id: 'public-speaking-19',
    question: 'Research the practical logistics. For the next presentation or speaking opportunity you have: What\'s the room setup? How\'s the audio? Will there be slides? How many people? What time of day? What happens right before you speak? Gather every detail you can so there are fewer surprises.',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 19
  },
  {
    id: 'public-speaking-20',
    question: 'Analyze what makes you credible. List your experiences, expertise, or unique perspectives that give you authority to speak on topics you care about. What do you know that others don\'t? What have you lived through? What patterns have you observed? This is your "why should they listen to me" inventory.',
    category: 'research',
    template_id: 'public-speaking',
    question_number: 20
  },
  // Planning Questions (21-31)
  {
    id: 'public-speaking-21',
    question: 'Design your signature opening. Draft 3 different ways you could start your next talk or presentation: (1) a personal story, (2) a surprising fact or question, (3) a bold statement. Write out the first 2-3 sentences for each. Which feels most like you? Which would grab YOUR attention if you were in the audience?',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 21
  },
  {
    id: 'public-speaking-22',
    question: 'Plan your core message. For your next speaking opportunity, complete this sentence: "If the audience remembers only ONE thing from what I say, it should be ___." Then write 3 stories, examples, or pieces of evidence that support that single message. Everything else is optional.',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 22
  },
  {
    id: 'public-speaking-23',
    question: 'Map out your anxiety management strategy. List the specific physical symptoms you get when nervous (shaky hands, racing heart, dry mouth, etc.). For each, write one concrete technique you\'ll use to manage it (breathing pattern, power pose, holding something, arriving early, etc.). This is your pre-talk protocol.',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 23
  },
  {
    id: 'public-speaking-24',
    question: 'Create your content structure. Take one topic you might speak on and outline it using the rule of three: What are the 3 main points you want to make? For each point, what\'s one story or example? What\'s your opening hook and closing call-to-action? Keep it to one page.',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 24
  },
  {
    id: 'public-speaking-25',
    question: 'Design your practice progression. Plan a sequence of speaking challenges that build in difficulty: (1) lowest stakes (speak to who, about what?), (2) medium stakes, (3) higher stakes. What\'s the timeline? What would success look like at each level? How will you know you\'re ready to move to the next level?',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 25
  },
  {
    id: 'public-speaking-26',
    question: 'Plan for the worst-case scenario. Write down your biggest fear about public speaking (going blank, saying something stupid, people looking bored, etc.). Then plan: What would you actually DO if that happened? What\'s your recovery line? How would you move forward? Having a plan makes the fear smaller.',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 26
  },
  {
    id: 'public-speaking-27',
    question: 'Outline your vocal variety strategy. Take one section of content you might present (2-3 minutes worth). Mark where you\'ll: pause for emphasis, speed up for energy, slow down for importance, change volume, ask a rhetorical question. How will you use your voice as an instrument, not just a delivery mechanism?',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 27
  },
  {
    id: 'public-speaking-28',
    question: 'Design your feedback loop. Identify 3 people who could give you honest, useful feedback on your speaking (not just "great job!" but specific observations). For each person, write: What\'s their relationship to you? What specific aspect should they watch for (content clarity? body language? pacing?)? How will you ask them?',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 28
  },
  {
    id: 'public-speaking-29',
    question: 'Plan your body language defaults. When you\'re nervous, what do you do with your hands? Where do you look? How do you stand? Write down your current defaults, then write your intentional alternatives: "Instead of crossing my arms, I will ___. Instead of looking at my notes, I will ___. Instead of rocking back and forth, I will ___."',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 29
  },
  {
    id: 'public-speaking-30',
    question: 'Create your confidence bank. List 5-7 past moments when you communicated well - could be one-on-one, small groups, written, anything. For each, write what you did well and why it worked. This is evidence you\'ll review before speaking to remind yourself you CAN do this.',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 30
  },
  {
    id: 'public-speaking-31',
    question: 'Plan your closing strong. Design 3 different ways to end your next talk: (1) a call-to-action (what should they DO?), (2) a callback to your opening, (3) a powerful final image or thought. Write out the last 2-3 sentences for each. Which leaves them thinking? Which leaves them energized?',
    category: 'planning',
    template_id: 'public-speaking',
    question_number: 31
  },
  // Action Questions (32-40)
  {
    id: 'public-speaking-32',
    question: 'Record yourself today. Pick any topic you could talk about for 2 minutes (hobby, work project, opinion on something). Set a timer, record yourself on your phone, and talk. Don\'t prepare, just go. Then watch it once without judgment, just observing. What did you notice?',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 32
  },
  {
    id: 'public-speaking-33',
    question: 'Commit to your next speaking opportunity. Write down: What\'s the next time you\'ll speak in front of others (even if it\'s just asking a question in a meeting)? What\'s the exact date/context? What will you say or contribute? Put it in your calendar with a reminder to prepare.',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 33
  },
  {
    id: 'public-speaking-34',
    question: 'Practice the physical feeling of confidence. Right now, stand up and embody how you\'d stand if you felt completely confident speaking. What changes in your posture, shoulders, eye level, breathing? Hold that position for 2 minutes. Write down what that felt like and how you\'ll recreate it before you speak.',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 34
  },
  {
    id: 'public-speaking-35',
    question: 'Schedule deliberate practice. Block time on your calendar this week to practice speaking out loud - not in your head, actually out loud. 15-20 minutes. No audience needed. Just you, working through content, getting comfortable hearing your voice. When exactly will you do this?',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 35
  },
  {
    id: 'public-speaking-36',
    question: 'Create your pre-talk ritual. Design the exact sequence you\'ll do in the 10 minutes before you speak: arrive early, breathe, review notes, do a power pose, whatever works for you. Write it down as a checklist. Execute this ritual before your next speaking opportunity, even if it\'s low-stakes.',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 36
  },
  {
    id: 'public-speaking-37',
    question: 'Find your speaking buddy. Identify one person who will practice with you or listen to you rehearse. Message them this week and ask: "Would you be willing to let me practice a short presentation with you?" Set a specific date to do it. Who will you ask?',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 37
  },
  {
    id: 'public-speaking-38',
    question: 'Join or create a practice space. Research one option where you could practice speaking regularly: Toastmasters chapter, speaking club, work presentation practice group, or create your own with 2-3 colleagues. Take one concrete action this week toward joining or starting it. What\'s the action?',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 38
  },
  {
    id: 'public-speaking-39',
    question: 'Document your first win. After your next speaking moment (even if small), immediately write down: What went better than expected? What felt surprisingly okay? What\'s one thing you\'d do again? This is how you build evidence that you\'re improving. Set a reminder to do this after your next talk.',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 39
  },
  {
    id: 'public-speaking-40',
    question: 'Set your 3-month speaking goal. Write down one specific, measurable speaking accomplishment you want to achieve in 3 months: "Give a 10-minute presentation at team meeting," "Speak up 3 times per meeting," "Deliver a toast at a friend\'s event." What\'s yours? What\'s the first step toward it? When will you take that step?',
    category: 'action',
    template_id: 'public-speaking',
    question_number: 40
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✅ Successfully inserted all questions!');

  // Verify
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'public-speaking');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
  } else {
    const counts = {
      reflection: 0,
      research: 0,
      planning: 0,
      action: 0
    };

    verifyData.forEach(q => {
      counts[q.category as keyof typeof counts]++;
    });

    console.log('\n=== Verification ===');
    console.log(`Total questions: ${verifyData.length}`);
    console.log(`Reflection (Foundation): ${counts.reflection} (${((counts.reflection / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} (${((counts.research / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} (${((counts.planning / verifyData.length) * 100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} (${((counts.action / verifyData.length) * 100).toFixed(1)}%)`);
  }
}

insertQuestions();
