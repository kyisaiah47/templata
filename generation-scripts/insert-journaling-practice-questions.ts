import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const questions = [
  // FOUNDATION QUESTIONS (9 questions - 25%)
  {
    id: 'journaling-practice-1',
    question: 'Write about 3 specific moments in the past year when you felt overwhelmed or confused. What was swirling in your head? If you had journaled that day, what would you have needed to get out on paper?',
    category: 'reflection',
    question_number: 1
  },
  {
    id: 'journaling-practice-2',
    question: 'Reflect on a time when talking or writing helped you figure something out. What changed between feeling stuck and feeling clear? What did the process of externalizing your thoughts do for you?',
    category: 'reflection',
    question_number: 2
  },
  {
    id: 'journaling-practice-3',
    question: 'Think about the last time you tried to journal or keep any kind of regular writing practice. What did the first week feel like versus the last week? What specific thing made you stop?',
    category: 'reflection',
    question_number: 3
  },
  {
    id: 'journaling-practice-4',
    question: 'Document the times of day when your mind feels most "noisy" or when thoughts loop. What patterns do you notice? Morning anxiety? Evening rumination? Specific situations that trigger mental clutter?',
    category: 'reflection',
    question_number: 4
  },
  {
    id: 'journaling-practice-5',
    question: 'Write about how you currently process difficult emotions or decisions. Do you talk to someone? Pace around? Scroll on your phone? What is your default coping mechanism when you need to think through something?',
    category: 'reflection',
    question_number: 5
  },
  {
    id: 'journaling-practice-6',
    question: 'List 5 recurring thoughts or worries that took up mental space in the past month. For each, note: Is this something I can control? Have I been avoiding dealing with it? What would help me move forward?',
    category: 'reflection',
    question_number: 6
  },
  {
    id: 'journaling-practice-7',
    question: 'Reflect on the difference between your "performance self" (what you show others) and your "private self" (what you really think/feel). Where is the gap biggest? What thoughts do you not say out loud to anyone?',
    category: 'reflection',
    question_number: 7
  },
  {
    id: 'journaling-practice-8',
    question: 'Think about a decision you made in the past year that you felt really confident about. What made you feel certain? Did you write anything down, talk it through, or just "know"? What was your clarity process?',
    category: 'reflection',
    question_number: 8
  },
  {
    id: 'journaling-practice-9',
    question: 'Write about what "growth" or "progress" means to you personally, not what you think it should mean. If no one ever knew, what internal shifts would matter most to you? What would make you feel like you are moving forward?',
    category: 'reflection',
    question_number: 9
  },

  // RESEARCH QUESTIONS (8 questions - 22%)
  {
    id: 'journaling-practice-10',
    question: 'Research 3 different journaling methods (morning pages, bullet journal, gratitude journal, stream of consciousness, etc.). For each, note: What problem does it solve? What type of person would this work for? Does this match your style?',
    category: 'research',
    question_number: 10
  },
  {
    id: 'journaling-practice-11',
    question: 'Document examples of journal prompts or questions that feel too generic versus ones that make you actually want to write. What is the difference? What makes a prompt feel relevant to you versus performative?',
    category: 'research',
    question_number: 11
  },
  {
    id: 'journaling-practice-12',
    question: 'Explore different journaling formats: long-form writing, bullet points, voice memos transcribed, drawing/visual journaling. Try each for 5 minutes. Which felt most natural? Which helped you think more clearly?',
    category: 'research',
    question_number: 12
  },
  {
    id: 'journaling-practice-13',
    question: 'Research the concept of "therapeutic writing" versus "reflective writing" versus "expressive writing". What are the different goals? Which goal resonates with what you need right now?',
    category: 'research',
    question_number: 13
  },
  {
    id: 'journaling-practice-14',
    question: 'Find 2-3 examples of people who journal regularly (from interviews, articles, podcasts). What do they get from it? What obstacles do they mention? What similarities do you see with your own situation?',
    category: 'research',
    question_number: 14
  },
  {
    id: 'journaling-practice-15',
    question: 'Investigate digital versus paper journaling. Write down the pros/cons for YOUR specific life. Consider: Do you lose physical items? Do you type faster? Does handwriting help you slow down? What fits your reality?',
    category: 'research',
    question_number: 15
  },
  {
    id: 'journaling-practice-16',
    question: 'Research common reasons people quit journaling (perfectionism, time pressure, not knowing what to write, feeling silly). Which of these resonate? What has stopped you in the past from maintaining any regular practice?',
    category: 'research',
    question_number: 16
  },
  {
    id: 'journaling-practice-17',
    question: 'Look into the idea of journaling as a "second brain" or thinking tool (not just emotional processing). Find examples of how people use journaling for problem-solving, decision-making, or creative thinking. Does this reframe appeal to you?',
    category: 'research',
    question_number: 17
  },

  // PLANNING QUESTIONS (10 questions - 28%)
  {
    id: 'journaling-practice-18',
    question: 'Map out your current daily routine hour by hour. Where is there a 10-15 minute window that exists naturally? Not where you "should" journal, but where there is actually space in your real life right now?',
    category: 'planning',
    question_number: 18
  },
  {
    id: 'journaling-practice-19',
    question: 'Design your ideal journaling environment. What does the space look like? What time of day? What would need to be true about your mental state? What would you need to have ready (coffee, music, silence, specific location)?',
    category: 'planning',
    question_number: 19
  },
  {
    id: 'journaling-practice-20',
    question: 'Create a list of "journaling triggers" - specific situations where you will journal. Examples: After a difficult conversation, when you feel decision paralysis, Sunday evening weekly review. What are YOUR triggers?',
    category: 'planning',
    question_number: 20
  },
  {
    id: 'journaling-practice-21',
    question: 'Plan for obstacles. Write down 3 specific scenarios that will make you skip journaling (busy morning, tired evening, feeling blocked). For each, create a backup plan. What is the minimum viable version?',
    category: 'planning',
    question_number: 21
  },
  {
    id: 'journaling-practice-22',
    question: 'Decide on your journaling "metric". How will you know this is working? Feeling less anxious? Making decisions faster? Clarity on a specific issue? Define what success looks like for you, not what it "should" be.',
    category: 'planning',
    question_number: 22
  },
  {
    id: 'journaling-practice-23',
    question: 'Create a "starter menu" of 10 questions or prompts you can use when you sit down to journal and do not know what to write. Base these on your foundation reflections - what do you actually need to process regularly?',
    category: 'planning',
    question_number: 23
  },
  {
    id: 'journaling-practice-24',
    question: 'Plan your first week: When exactly will you journal? For how long? What will you write about each day? Make it so specific that you could follow this plan even if you were on autopilot.',
    category: 'planning',
    question_number: 24
  },
  {
    id: 'journaling-practice-25',
    question: 'Design a review system. How often will you look back at past entries? What are you looking for? How will you track patterns over time? What would make reviewing past entries actually useful versus overwhelming?',
    category: 'planning',
    question_number: 25
  },
  {
    id: 'journaling-practice-26',
    question: 'Create a "journaling identity" statement. Not "I want to journal" but "I am someone who..." How do you need to see yourself for this to stick? What belief about yourself needs to shift?',
    category: 'planning',
    question_number: 26
  },
  {
    id: 'journaling-practice-27',
    question: 'Plan how you will handle private/sensitive content. Where will you keep this journal? What if someone reads it? What boundaries do you need to feel safe being fully honest?',
    category: 'planning',
    question_number: 27
  },

  // ACTION QUESTIONS (9 questions - 25%)
  {
    id: 'journaling-practice-28',
    question: 'Choose your journaling method right now based on your research. Write down: I will use [specific method] because [specific reason based on my patterns]. Set up whatever you need (buy notebook, create digital doc, download app).',
    category: 'action',
    question_number: 28
  },
  {
    id: 'journaling-practice-29',
    question: 'Set a concrete commitment for this week. Write down: I will journal [X times] at [specific time] in [specific location]. Put it in your calendar as a non-negotiable appointment.',
    category: 'action',
    question_number: 29
  },
  {
    id: 'journaling-practice-30',
    question: 'Do your first journal entry right now. Spend 10 minutes writing about what you hope to get from this practice and what you are nervous about. Just start. Do not edit, do not perform, just write.',
    category: 'action',
    question_number: 30
  },
  {
    id: 'journaling-practice-31',
    question: 'Create an accountability system. Who will know you are doing this? How will you track it? Set up a simple tracking method (habit app, calendar marks, tell a friend). Make it visible.',
    category: 'action',
    question_number: 31
  },
  {
    id: 'journaling-practice-32',
    question: 'Identify the first obstacle you will hit and prepare for it now. If the obstacle is "not knowing what to write", write your starter prompts on the first page. If it is "forgetting", set a daily alarm. Take action on the barrier before it stops you.',
    category: 'action',
    question_number: 32
  },
  {
    id: 'journaling-practice-33',
    question: 'Schedule your first review checkpoint. Put a reminder in your calendar for 2 weeks from now. Write down what you will assess: Did you journal as planned? What worked? What needs to adjust?',
    category: 'action',
    question_number: 33
  },
  {
    id: 'journaling-practice-34',
    question: 'Connect journaling to an existing habit. Write down: Right after I [existing habit], I will journal for [X minutes]. Example: Right after my morning coffee, I will journal for 10 minutes. Link it to something that already happens.',
    category: 'action',
    question_number: 34
  },
  {
    id: 'journaling-practice-35',
    question: 'Prepare your environment today. If you are journaling in the morning, set out your journal and pen tonight. If digital, create the doc and bookmark it. Remove friction between you and starting.',
    category: 'action',
    question_number: 35
  },
  {
    id: 'journaling-practice-36',
    question: 'Write a note to your future self for when you want to quit. What would you tell yourself about why this matters? What would you remind yourself about what you learned from these questions? Seal it and read it when you hit resistance.',
    category: 'action',
    question_number: 36
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for journaling-practice guide...`);

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const { error } = await supabase
      .from('questions')
      .insert({
        id: q.id,
        question: q.question,
        category: q.category,
        template_id: 'journaling-practice',
        question_number: q.question_number
      });

    if (error) {
      console.error(`Error inserting question ${q.id}:`, error);
      throw error;
    }

    console.log(`✓ Inserted question ${i + 1}/${questions.length}: ${q.id}`);

    // Add delay to avoid rate limits
    if (i < questions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log('\n✅ All questions inserted successfully!');

  // Verify insertion
  const { data, error } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'journaling-practice')
    .order('question_number');

  if (error) {
    console.error('Error verifying questions:', error);
    throw error;
  }

  console.log(`\n📊 Verification: ${data.length} questions found in database`);

  // Count by category
  const counts = data.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\nBreakdown by category:');
  console.log(`- Foundation (reflection): ${counts.reflection || 0} questions`);
  console.log(`- Research: ${counts.research || 0} questions`);
  console.log(`- Planning: ${counts.planning || 0} questions`);
  console.log(`- Action: ${counts.action || 0} questions`);
}

insertQuestions().catch(console.error);
