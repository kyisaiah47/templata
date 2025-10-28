import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-11)
  {
    id: 'dating-after-divorce-1',
    question: 'Write about the moment you knew your marriage was ending. What specific event, conversation, or realization made it clear? How do you feel about that moment now compared to when it happened?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 1
  },
  {
    id: 'dating-after-divorce-2',
    question: 'Document 3-5 times during your marriage when you felt most like yourself. What were you doing? Who were you with? What made those moments feel authentic to you?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 2
  },
  {
    id: 'dating-after-divorce-3',
    question: 'Reflect on the last 6 months of your marriage. What patterns do you notice in how you and your ex-spouse communicated (or didn\'t)? Which of these patterns do you recognize from previous relationships?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 3
  },
  {
    id: 'dating-after-divorce-4',
    question: 'List 5 things you compromised on in your marriage that you wouldn\'t compromise on again. For each, write why it mattered more than you realized at the time.',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 4
  },
  {
    id: 'dating-after-divorce-5',
    question: 'Write about a time in the past year when you felt genuinely happy or content, completely separate from dating or relationships. What were you doing? What does this tell you about what you need in your life?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 5
  },
  {
    id: 'dating-after-divorce-6',
    question: 'Document what you miss most about being married (not your ex-spouse specifically, but the state of being married). What does this reveal about what you\'re actually looking for?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 6
  },
  {
    id: 'dating-after-divorce-7',
    question: 'Reflect on how you\'ve changed since your wedding day. What values have shifted? What do you care about now that you didn\'t then? What matters less?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 7
  },
  {
    id: 'dating-after-divorce-8',
    question: 'Write about 3 moments in your marriage when you ignored your gut instinct. What were the red flags? What stopped you from listening to yourself? How can you recognize that feeling now?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 8
  },
  {
    id: 'dating-after-divorce-9',
    question: 'Think about the version of yourself your ex-spouse knew. What parts of that person do you want to keep? What parts were you performing or suppressing? Who are you when you\'re not trying to save a failing marriage?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 9
  },
  {
    id: 'dating-after-divorce-10',
    question: 'Document your relationship with being alone right now. When do you feel lonely versus when do you feel peacefully alone? What\'s the difference? What does this tell you about your readiness?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 10
  },
  {
    id: 'dating-after-divorce-11',
    question: 'List 3-5 beliefs you had about relationships before your marriage, and how those beliefs have changed. What did experience teach you that you couldn\'t have learned any other way?',
    category: 'reflection',
    template_id: 'dating-after-divorce',
    question_number: 11
  },

  // RESEARCH QUESTIONS (12-21)
  {
    id: 'dating-after-divorce-12',
    question: 'Research what\'s changed in the dating world since you last dated. What apps exist? What\'s the current etiquette? Document 5 specific things that are different from when you met your ex-spouse.',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 12
  },
  {
    id: 'dating-after-divorce-13',
    question: 'Interview 3 divorced friends who are dating about their experiences. What surprised them? What advice do they wish they\'d had? What did they learn the hard way?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 13
  },
  {
    id: 'dating-after-divorce-14',
    question: 'Write down your top 10 non-negotiable values in a partner. For each, note: Is this based on what you lacked in your marriage, or what you\'ve always needed? How will you recognize this value in someone new?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 14
  },
  {
    id: 'dating-after-divorce-15',
    question: 'Document your current life constraints and how they affect dating. Kids\' schedules? Co-parenting logistics? Work demands? Financial considerations? Be specific about the time and energy you actually have available.',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 15
  },
  {
    id: 'dating-after-divorce-16',
    question: 'Research and list 5 different ways people meet partners that don\'t involve dating apps. Which ones align with your interests and lifestyle? Which feel authentic to who you are now?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 16
  },
  {
    id: 'dating-after-divorce-17',
    question: 'Make a list of the last 5-10 people you felt attracted to or interested in (even if you didn\'t act on it). What common threads do you notice? How do these patterns compare to what attracted you to your ex-spouse?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 17
  },
  {
    id: 'dating-after-divorce-18',
    question: 'Document what your typical week looks like right now. Hour by hour, day by day. Where would dating actually fit? What would you need to change or sacrifice? Are you willing to make those changes?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 18
  },
  {
    id: 'dating-after-divorce-19',
    question: 'Write about the relationship dynamics you\'ve observed in 3-5 couples you admire. What makes their relationships work? What do you see in them that you want for yourself? What\'s different from what you had?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 19
  },
  {
    id: 'dating-after-divorce-20',
    question: 'Research the concept of attachment styles. Which style describes how you showed up in your marriage? Which describes how you want to show up in future relationships? What needs to change?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 20
  },
  {
    id: 'dating-after-divorce-21',
    question: 'List every reason you can think of for why you\'re "not ready" to date. For each reason, identify: Is this a legitimate concern that needs addressing, or is it fear/self-protection? What would "ready" actually look like?',
    category: 'research',
    template_id: 'dating-after-divorce',
    question_number: 21
  },

  // PLANNING QUESTIONS (22-33)
  {
    id: 'dating-after-divorce-22',
    question: 'Create a clear picture of what you\'re looking for in dating right now. Are you looking for companionship, casual dating, a serious relationship, or just exploring? Why this goal specifically, and how might it evolve?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 22
  },
  {
    id: 'dating-after-divorce-23',
    question: 'Write your personal "red flags" list based on your marriage and dating history. What behaviors, patterns, or situations mean you walk away immediately? Why these specifically?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 23
  },
  {
    id: 'dating-after-divorce-24',
    question: 'Document your "green flags" - the positive signs that someone is a good fit. What specific behaviors, values, or qualities indicate someone aligns with what you need now? How are these different from what you looked for before marriage?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 24
  },
  {
    id: 'dating-after-divorce-25',
    question: 'Plan how you\'ll handle questions about your divorce on dates. What will you share? What\'s private? How will you talk about your ex-spouse? Practice writing out a 2-3 sentence answer that\'s honest but boundaried.',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 25
  },
  {
    id: 'dating-after-divorce-26',
    question: 'Design your boundary system for physical and emotional intimacy. What\'s your timeline? What has to happen before you\'re comfortable with each level of closeness? What did moving too fast cost you in the past?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 26
  },
  {
    id: 'dating-after-divorce-27',
    question: 'Create a decision framework for when to introduce someone to your kids (if applicable). What criteria must be met? What timeline feels right? How will you prepare both your children and your partner?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 27
  },
  {
    id: 'dating-after-divorce-28',
    question: 'Write your plan for handling your ex-spouse\'s reaction to you dating. How will you communicate (or not communicate) about this? What boundaries need to be in place? How will you protect your new relationships from old drama?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 28
  },
  {
    id: 'dating-after-divorce-29',
    question: 'Plan how you\'ll maintain your own life while dating. What friendships, hobbies, routines, and personal time are non-negotiable? What did you give up in your marriage that you won\'t sacrifice again?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 29
  },
  {
    id: 'dating-after-divorce-30',
    question: 'Document your approach to dating apps versus in-person meeting. What percentage of your effort goes to each? Which aligns better with finding what you\'re actually looking for? What\'s your trial period before reassessing?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 30
  },
  {
    id: 'dating-after-divorce-31',
    question: 'Create criteria for when to keep dating someone versus when to end it. How many dates before you decide? What specific things are you evaluating? What did you tolerate too long in your marriage that you\'ll cut short now?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 31
  },
  {
    id: 'dating-after-divorce-32',
    question: 'Write your plan for dealing with rejection and disappointment. What will you do when dates don\'t work out? Who\'s in your support system? What self-care practices will you rely on? How will you avoid letting setbacks derail you?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 32
  },
  {
    id: 'dating-after-divorce-33',
    question: 'Plan your communication strategy for new relationships. What pace of texting/calling feels right? How will you express needs without the baggage from your marriage? What communication patterns do you need to actively avoid repeating?',
    category: 'planning',
    template_id: 'dating-after-divorce',
    question_number: 33
  },

  // ACTION QUESTIONS (34-45)
  {
    id: 'dating-after-divorce-34',
    question: 'Write your dating profile bio as if you\'re talking to someone who already knows you\'re divorced. What story do you tell about who you are now? What do you highlight about your life today? What feels authentic versus what feels like you\'re trying to prove something?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 34
  },
  {
    id: 'dating-after-divorce-35',
    question: 'Choose 5-7 photos for your dating profile and write why each one represents you well. What do you want potential matches to see? What versions of yourself are you leading with? Are these current, genuine representations?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 35
  },
  {
    id: 'dating-after-divorce-36',
    question: 'Identify 3 specific activities or venues where you could meet people organically. Sign up for one this week. What\'s holding you back from taking this step? What\'s the smallest version of this action you could take?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 36
  },
  {
    id: 'dating-after-divorce-37',
    question: 'Write out your "first date" plan. Where will you suggest meeting? What time/day works best with your life? What\'s your exit strategy if it\'s not going well? What feels safe and comfortable while still being open?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 37
  },
  {
    id: 'dating-after-divorce-38',
    question: 'Reach out to one person in your life and tell them you\'re ready to start dating. Who did you choose and why? How did it feel to say it out loud? What support do you need from them?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 38
  },
  {
    id: 'dating-after-divorce-39',
    question: 'Create a self-care plan for the emotional ups and downs of dating. List 5 specific things you\'ll do when you feel rejected, 5 things when you feel anxious, and 5 things when you need to reconnect with yourself. Be specific and actionable.',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 39
  },
  {
    id: 'dating-after-divorce-40',
    question: 'Practice saying no to someone you\'re not interested in. Write out 2-3 kind but clear ways to decline a second date or end things early. What makes this hard for you? What did saying yes when you meant no cost you in your marriage?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 40
  },
  {
    id: 'dating-after-divorce-41',
    question: 'Set a specific date to launch your dating profile or take your first action. What\'s the actual date? What preparation needs to happen before then? What\'s your backup plan if fear tries to delay you?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 41
  },
  {
    id: 'dating-after-divorce-42',
    question: 'Document how you\'ll track what\'s working and what\'s not in your dating approach. After each date or interaction, what will you reflect on? What patterns will you watch for? How will you course-correct?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 42
  },
  {
    id: 'dating-after-divorce-43',
    question: 'Write a letter to your future self 6 months from now. What do you hope to have learned about dating? About yourself? What do you hope you\'ll have tried, even if it didn\'t work out? What would success look like that isn\'t just "found someone"?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 43
  },
  {
    id: 'dating-after-divorce-44',
    question: 'Choose one fear about dating after divorce and do one small thing this week to face it. What\'s the fear? What\'s the small action? Who will you tell about it to create accountability?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 44
  },
  {
    id: 'dating-after-divorce-45',
    question: 'Create your "dating reset" ritual for when you need a break. What signals that you need to pause? How long will you step back? What will you do during that time instead? How will you know when you\'re ready to try again?',
    category: 'action',
    template_id: 'dating-after-divorce',
    question_number: 45
  }
];

async function main() {
  console.log('Inserting questions for dating-after-divorce guide...');

  for (const question of questions) {
    const { error } = await supabase
      .from('questions')
      .insert(question);

    if (error) {
      console.error(`Error inserting question ${question.question_number}:`, error);
    } else {
      console.log(`✓ Inserted question ${question.question_number}`);
    }
  }

  console.log('\nVerifying insertion...');
  const { data, error } = await supabase
    .from('questions')
    .select('id, category')
    .eq('template_id', 'dating-after-divorce');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    console.log(`\nTotal questions inserted: ${data.length}`);
    const byCat = data.reduce((acc: any, q: any) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});
    console.log('Breakdown by category:', byCat);
  }
}

main();
