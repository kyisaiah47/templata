import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (16 questions, 27%)
  {
    id: 'family-estrangement-1',
    question: 'Write about the specific moment or incident when you realized the relationship had fundamentally changed. What was said or done? What did you feel in your body?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 1
  },
  {
    id: 'family-estrangement-2',
    question: 'Document three times in the past year when you thought about this family member unexpectedly. What triggered each memory? What emotion came with it?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 2
  },
  {
    id: 'family-estrangement-3',
    question: 'Reflect on your earliest memory of feeling unsafe or uncomfortable with this family member. How old were you? What pattern started then that continues now?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 3
  },
  {
    id: 'family-estrangement-4',
    question: 'List the last five interactions you had with this family member before the estrangement or distance increased. For each, note: Who initiated? What went wrong? How did you feel afterward?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 4
  },
  {
    id: 'family-estrangement-5',
    question: 'Write about a time when you tried to explain your feelings or needs to this family member. What did you say? How did they respond? What did that response teach you?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 5
  },
  {
    id: 'family-estrangement-6',
    question: 'Document what holidays or family events were like before the estrangement. What role did you play? What was expected of you? What did you dread?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 6
  },
  {
    id: 'family-estrangement-7',
    question: "Reflect on three moments when someone outside your family commented on your family dynamics. What did they notice that you hadn't named? How did you react to their observation?",
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 7
  },
  {
    id: 'family-estrangement-8',
    question: "Write about who you are when you're not around this family member versus who you become in their presence. What changes in your voice, posture, choices, or confidence?",
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 8
  },
  {
    id: 'family-estrangement-9',
    question: 'List every emotion you feel when you think about this family member—not just the main one, but all the contradictory feelings. Which one surprises you most?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 9
  },
  {
    id: 'family-estrangement-10',
    question: 'Document three specific things this family member said or did that you still think about. Why do these particular moments stick with you? What boundary did they cross?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 10
  },
  {
    id: 'family-estrangement-11',
    question: "Reflect on what you needed from this family member that you never received. When did you first realize they couldn't or wouldn't provide it?",
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 11
  },
  {
    id: 'family-estrangement-12',
    question: 'Write about the version of yourself you present to other family members about the estrangement. What do you emphasize? What do you minimize? Why?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 12
  },
  {
    id: 'family-estrangement-13',
    question: 'Document a time when you felt guilty about the estrangement. What triggered it? Whose voice or values were behind that guilt?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 13
  },
  {
    id: 'family-estrangement-14',
    question: 'Reflect on how you talk to yourself about this situation. What do you call yourself? What story do you tell yourself about why this happened?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 14
  },
  {
    id: 'family-estrangement-15',
    question: 'List three ways this estrangement has changed your identity or how you see yourself in the world. Are these changes losses, gains, or both?',
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 15
  },
  {
    id: 'family-estrangement-16',
    question: "Write about what you miss most and what you don't miss at all. What does this contrast tell you about what you actually needed versus what you wanted?",
    category: 'reflection',
    template_id: 'family-estrangement',
    question_number: 16
  },

  // RESEARCH QUESTIONS (13 questions, 22%)
  {
    id: 'family-estrangement-17',
    question: 'Map out your family system by creating a chart: Who takes what role (peacemaker, aggressor, victim, golden child, scapegoat)? What happens when someone steps out of their role?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 17
  },
  {
    id: 'family-estrangement-18',
    question: 'Research and document the concept of "enmeshment" or "emotional boundaries" in family systems. Which specific behaviors in your family match these patterns?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 18
  },
  {
    id: 'family-estrangement-19',
    question: "Identify three other family relationships that are estranged or strained. What's the common pattern across all of them? What does this reveal about your family's conflict resolution style?",
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 19
  },
  {
    id: 'family-estrangement-20',
    question: 'Document how conflict was handled in your family growing up. Who was allowed to be angry? Who had to apologize? Who got to be right? How does this pattern show up in the current estrangement?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 20
  },
  {
    id: 'family-estrangement-21',
    question: 'Research the concept of "trauma responses" (fight, flight, freeze, fawn). Write about which response you typically have with this family member and when you learned it.',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 21
  },
  {
    id: 'family-estrangement-22',
    question: 'List every person who knows about the estrangement—family, friends, therapist. What does each person say about it? Whose perspective challenges your own? Whose reinforces it?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 22
  },
  {
    id: 'family-estrangement-23',
    question: "Research local therapists who specialize in family estrangement or family systems therapy. Document three options: their approach, cost, availability. What's stopping you from reaching out?",
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 23
  },
  {
    id: 'family-estrangement-24',
    question: 'Identify three books, podcasts, or articles about family estrangement that others have recommended. For each, note: What resonated? What felt wrong for your situation? What made you defensive?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 24
  },
  {
    id: 'family-estrangement-25',
    question: 'Document what you know about this family member\'s own childhood and family relationships. What patterns did they inherit? What trauma might they be repeating?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 25
  },
  {
    id: 'family-estrangement-26',
    question: 'Research cultural or religious expectations around family in your community. Write about which expectations you\'ve internalized and which ones conflict with your wellbeing.',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 26
  },
  {
    id: 'family-estrangement-27',
    question: 'List three people you know who have healthy boundaries with difficult family members. What specifically do they do? What have they said when you asked for advice?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 27
  },
  {
    id: 'family-estrangement-28',
    question: "Research support groups for family estrangement (online or in-person). Document what's available and what would make you actually attend. What are you afraid you'd hear?",
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 28
  },
  {
    id: 'family-estrangement-29',
    question: 'Identify the signs or symptoms you\'ve experienced that might be related to the estrangement (anxiety, depression, physical symptoms, relationship patterns). What has gotten worse? What has surprisingly improved?',
    category: 'research',
    template_id: 'family-estrangement',
    question_number: 29
  },

  // PLANNING QUESTIONS (17 questions, 28%)
  {
    id: 'family-estrangement-30',
    question: "Define what \"reconciliation\" would actually look like for you. Not what you wish could happen, but what changes would need to be real and sustained? What's non-negotiable?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 30
  },
  {
    id: 'family-estrangement-31',
    question: 'Map out the different levels of contact you could have: no contact, minimal contact, structured contact, full relationship. For each level, write what would need to be true for you to choose it.',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 31
  },
  {
    id: 'family-estrangement-32',
    question: "Plan what you would need to see consistently for six months before considering any change in boundaries. What specific behaviors would count as evidence? What wouldn't be enough?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 32
  },
  {
    id: 'family-estrangement-33',
    question: 'Consider three scenarios: this family member reaches out apologizing, they reach out acting like nothing happened, they reach out blaming you. Write your ideal response to each. What would you actually do?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 33
  },
  {
    id: 'family-estrangement-34',
    question: "Identify which other family relationships would be affected by each decision (staying estranged, limited contact, reconciliation). Who would you lose or gain? What's the ripple effect?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 34
  },
  {
    id: 'family-estrangement-35',
    question: "Plan how you want to handle upcoming family events (holidays, weddings, funerals, graduations). For each scenario, what's your boundary? Who do you tell? What's your exit plan?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 35
  },
  {
    id: 'family-estrangement-36',
    question: 'Design what information-sharing looks like going forward. What will you share with family about your life? Through whom? What stays private forever? Why?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 36
  },
  {
    id: 'family-estrangement-37',
    question: 'Consider if there\'s anyone who could serve as a mediator or bridge. What would this person need to understand? What would you need them to do or not do?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 37
  },
  {
    id: 'family-estrangement-38',
    question: "Plan for the \"what ifs\": What if they get sick? What if someone dies? What if there's an emergency? For each, what's your boundary versus your fear-based reaction?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 38
  },
  {
    id: 'family-estrangement-39',
    question: 'Map out your support needs for different decisions. If you maintain estrangement, what support helps? If you attempt contact, what support do you need before, during, and after?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 39
  },
  {
    id: 'family-estrangement-40',
    question: 'Identify which relationships or parts of your life are healing because of the distance. How would you protect these if you changed your boundaries? What would you be risking?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 40
  },
  {
    id: 'family-estrangement-41',
    question: 'Consider what accountability would look like if reconciliation were possible. Who else needs to be involved? What would healing require beyond just you and this person?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 41
  },
  {
    id: 'family-estrangement-42',
    question: "Plan how you'll evaluate whether your decision is working. What signs would tell you it's helping? What would tell you it's harming you? When would you reassess?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 42
  },
  {
    id: 'family-estrangement-43',
    question: 'Design your ideal relationship with this family member in five years. Now work backward: what would have to happen in year 1, 2, 3, 4 to get there? Is this realistic?',
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 43
  },
  {
    id: 'family-estrangement-44',
    question: "Consider what you're protecting by maintaining distance. Your mental health, your children, your sense of self, your other relationships? Rank these by importance. What's the cost of protection?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 44
  },
  {
    id: 'family-estrangement-45',
    question: "Plan what you need to do before making any decision about contact. Therapy milestones? Conversations with others? Personal healing work? What's the timeline?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 45
  },
  {
    id: 'family-estrangement-46',
    question: "Identify the difference between what you want (fantasy) and what's actually possible given their patterns. What evidence suggests they can change? What evidence suggests they can't or won't?",
    category: 'planning',
    template_id: 'family-estrangement',
    question_number: 46
  },

  // ACTION QUESTIONS (14 questions, 23%)
  {
    id: 'family-estrangement-47',
    question: "Write the email, letter, or message you would send if you decided to communicate your boundaries. Don't send it—just write it. What's the core message? What tone feels true to you?",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 47
  },
  {
    id: 'family-estrangement-48',
    question: 'Create a crisis plan for when the estrangement feels overwhelming. List: three people to call, three things to do immediately, three thoughts to remind yourself. Post this somewhere visible.',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 48
  },
  {
    id: 'family-estrangement-49',
    question: "Practice the exact words you'll say when someone asks about your family at social events. Say it out loud three times. What feels honest without over-explaining? What shuts down follow-up questions?",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 49
  },
  {
    id: 'family-estrangement-50',
    question: 'Schedule one therapy session or call one therapist this week. Document what you want to address in the first session. What\'s the main question you need help with?',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 50
  },
  {
    id: 'family-estrangement-51',
    question: "Write a letter to your family member that you'll never send. Say everything—the hurt, the anger, the grief, the longing. Then write what you imagine they'd say back. What does this reveal?",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 51
  },
  {
    id: 'family-estrangement-52',
    question: 'Create a self-care plan for difficult days: what you do instead of reaching out impulsively, scrolling their social media, or ruminating. List specific, concrete actions you can take in 5 minutes.',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 52
  },
  {
    id: 'family-estrangement-53',
    question: 'Reach out to one person in your support system this week specifically to talk about the estrangement. What do you need them to understand? What support are you asking for?',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 53
  },
  {
    id: 'family-estrangement-54',
    question: "Document your current boundaries in writing: who knows what, what you will and won't do, what contact you'll have. Share this with one trusted person for accountability.",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 54
  },
  {
    id: 'family-estrangement-55',
    question: "Block, unfollow, or mute this family member on all social media platforms right now if you haven't. Document how you feel immediately after and one week later. What changed?",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 55
  },
  {
    id: 'family-estrangement-56',
    question: 'Start a journal specifically about this estrangement. Write one entry this week: What do you need to accept that you keep resisting? What\'s the cost of that resistance?',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 56
  },
  {
    id: 'family-estrangement-57',
    question: 'Identify one behavior pattern you learned from this relationship that shows up elsewhere. Choose one small action this week to do differently. What happens?',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 57
  },
  {
    id: 'family-estrangement-58',
    question: "Reach out to someone else in your family who might understand, or who you've been avoiding because it's complicated. What do you need to say? What do you need to know?",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 58
  },
  {
    id: 'family-estrangement-59',
    question: "Create a \"when they reach out\" protocol: what you'll do with a call, text, email, or message through others. Write the exact steps. Who will you tell? What's your response timeline?",
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 59
  },
  {
    id: 'family-estrangement-60',
    question: 'Reflect in writing one month from now: what decision did you make about contact or boundaries? What action did you take? How do you feel about it? Schedule this reflection now.',
    category: 'action',
    template_id: 'family-estrangement',
    question_number: 60
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for family-estrangement guide...`);

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

  console.log('\n✅ All questions inserted successfully!');

  // Verify the insertion
  const { data: verifyData, error: verifyError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'family-estrangement');

  if (verifyError) {
    console.error('Error verifying questions:', verifyError);
  } else {
    const categoryCounts = verifyData.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\n=== Question Breakdown ===');
    console.log(`Total: ${verifyData.length} questions`);
    console.log('\nBy category:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      const percentage = ((count / verifyData.length) * 100).toFixed(1);
      console.log(`  ${category}: ${count} (${percentage}%)`);
    });
  }
}

main();
