import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-10)
  {
    id: 'workplace-conflict-1',
    question: 'Write about the last 3 workplace conflicts you\'ve experienced in the past 2 years. For each one: What triggered it? How did it escalate? How did it resolve (or not)? What patterns do you notice across these situations?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 1
  },
  {
    id: 'workplace-conflict-2',
    question: 'Describe the physical sensations you feel when this conflict comes up. Where in your body do you feel it? When does it hit hardest - before work, during specific meetings, after certain interactions? How has this changed over time?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 2
  },
  {
    id: 'workplace-conflict-3',
    question: 'Think about conflicts from your childhood or family. How did the adults around you handle disagreements? What did you learn about conflict - spoken and unspoken? How do you see those patterns showing up in your current workplace situation?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 3
  },
  {
    id: 'workplace-conflict-4',
    question: 'Document the moment you realized this was a serious conflict, not just a bad day. What specific incident made you think "this is a problem"? What had you been telling yourself before that moment? What changed?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 4
  },
  {
    id: 'workplace-conflict-5',
    question: 'Reflect on your "conflict style" in past situations. Do you tend to avoid, accommodate, compete, or collaborate? When do you switch between styles? What situations trigger your default pattern? Which style feels most authentic to who you are?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 5
  },
  {
    id: 'workplace-conflict-6',
    question: 'Write about what "winning" this conflict would look like to you. Not the professional answer, but what you actually want. What would feel like justice? What would let you sleep peacefully? Be brutally honest.',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 6
  },
  {
    id: 'workplace-conflict-7',
    question: 'List 5 moments in the past month when this conflict affected you outside of work. What were you doing? What thought or feeling interrupted you? Who in your personal life has noticed a change in you?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 7
  },
  {
    id: 'workplace-conflict-8',
    question: 'Think about your values that feel violated by this conflict. What matters to you that\'s being compromised - respect, fairness, autonomy, competence, belonging? When did you first develop these values? Why do they matter so much to you?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 8
  },
  {
    id: 'workplace-conflict-9',
    question: 'Describe the version of yourself you\'ve become during this conflict. Are you more withdrawn? More reactive? More political? More careful? How is this different from who you normally are? Who notices this change?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 9
  },
  {
    id: 'workplace-conflict-10',
    question: 'Write about what you\'re afraid will happen if this conflict doesn\'t resolve. Not just professional consequences, but the person you\'re afraid you\'ll become. What would it mean about you, your judgment, your career, your ability to handle hard things?',
    category: 'reflection',
    template_id: 'workplace-conflict',
    question_number: 10
  },
  // RESEARCH QUESTIONS (11-19)
  {
    id: 'workplace-conflict-11',
    question: 'Map the stakeholder landscape. Create a list with: Primary conflict person, their allies, your allies, neutral parties, decision-makers. For each person: What\'s their stake? What do they know? What do they believe about the situation?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 11
  },
  {
    id: 'workplace-conflict-12',
    question: 'Document the timeline of escalation. List every significant incident from first tension to now. For each: Date, what happened, who witnessed it, what was said/done, how each person responded. What does this timeline reveal?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 12
  },
  {
    id: 'workplace-conflict-13',
    question: 'Research the organizational context affecting this conflict. What pressures is your team under? What changes are happening? What\'s the performance review cycle? What are the company politics? How might these factors be fueling the conflict?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 13
  },
  {
    id: 'workplace-conflict-14',
    question: 'Gather data on the other person\'s perspective. What do they care about professionally? What pressures are they under? What past experiences might shape their behavior? What might they be afraid of? Where might they have a valid point?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 14
  },
  {
    id: 'workplace-conflict-15',
    question: 'Analyze the communication history. List every conversation about this conflict: Who initiated? What was said? What was avoided? What tone was used? What patterns emerge? What hasn\'t been said that needs to be?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 15
  },
  {
    id: 'workplace-conflict-16',
    question: 'Investigate similar conflicts in your organization. Ask trusted colleagues: How are conflicts typically handled here? What happens to people who escalate? Who has successfully navigated this? What\'s the unwritten code? What does HR actually do vs what they say?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 16
  },
  {
    id: 'workplace-conflict-17',
    question: 'Document the impact on your work performance. Track for one week: Time spent thinking about this conflict, tasks delayed, meetings you dreaded, quality of work affected, opportunities you avoided. What is this costing you professionally?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 17
  },
  {
    id: 'workplace-conflict-18',
    question: 'Research your leverage and constraints. List: Your formal power, your social capital, who respects you, what you\'re delivering, what you could walk away from, what you can\'t afford to lose. What\'s your real position in this negotiation?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 18
  },
  {
    id: 'workplace-conflict-19',
    question: 'Collect evidence and documentation. What exists: Emails, messages, meeting notes, performance reviews, project outcomes? What\'s missing? What should you start documenting? What patterns does the evidence show that you might be missing emotionally?',
    category: 'research',
    template_id: 'workplace-conflict',
    question_number: 19
  },
  // PLANNING QUESTIONS (20-30)
  {
    id: 'workplace-conflict-20',
    question: 'Design your ideal resolution scenario. Not what you think is possible, but what would actually satisfy you. What changes? What stays the same? What does your day-to-day look like? What does your relationship with this person look like? What needs to be acknowledged?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 20
  },
  {
    id: 'workplace-conflict-21',
    question: 'Identify your non-negotiables and your flexible zones. What absolutely must change for you to stay? What can you live with? What would be nice but isn\'t essential? What are you willing to compromise on? Where will you absolutely draw the line?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 21
  },
  {
    id: 'workplace-conflict-22',
    question: 'Map out the strategic options available to you. Consider: Direct conversation, mediated conversation, involving your manager, involving their manager, HR involvement, team restructuring, your transfer, their transfer, quiet quitting the relationship, leaving the company. What\'s the full menu?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 22
  },
  {
    id: 'workplace-conflict-23',
    question: 'Evaluate the risks and benefits of each strategic option. For your top 3 approaches: Best case outcome, worst case outcome, most likely outcome, time required, emotional energy required, career risk, relationship risk. What can you actually afford?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 23
  },
  {
    id: 'workplace-conflict-24',
    question: 'Plan for the "what if nothing changes" scenario. If this conflict continues exactly as is for 6 more months, what\'s your strategy? What boundaries would you need? What support would you need? What would make this sustainable vs unsustainable?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 24
  },
  {
    id: 'workplace-conflict-25',
    question: 'Think through the timing and sequencing of your approach. What needs to happen first? What depends on what? What conversations set up other conversations? What\'s urgent vs important? What\'s the right pace - immediate action or strategic patience?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 25
  },
  {
    id: 'workplace-conflict-26',
    question: 'Design your communication strategy. For the key conversation you need to have: What\'s your opening? What\'s your core message? What examples will you use? What do you want them to understand? What outcome are you requesting? How will you handle their defensive response?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 26
  },
  {
    id: 'workplace-conflict-27',
    question: 'Identify who you need in your corner. Who could be a sounding board? Who could mediate? Who could advocate for you? Who has influence with the other person? Who could provide air cover? Who shouldn\'t know about this? Why each person?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 27
  },
  {
    id: 'workplace-conflict-28',
    question: 'Plan for emotional regulation during difficult conversations. What are your triggers in this conflict? What physical signals tell you you\'re getting activated? What\'s your plan to pause? What grounding techniques work for you? Who can you debrief with after?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 28
  },
  {
    id: 'workplace-conflict-29',
    question: 'Consider the second-order consequences of each approach. If you escalate to HR, what ripples? If you have a direct confrontation, who hears about it? If you transfer, what story gets told? How might each choice affect your reputation, your network, your future at this company?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 29
  },
  {
    id: 'workplace-conflict-30',
    question: 'Develop your "Plan B" professional strategy. If this doesn\'t resolve, what are you building toward? What skills? What relationships? What external opportunities? How do you protect your career momentum regardless of how this conflict plays out?',
    category: 'planning',
    template_id: 'workplace-conflict',
    question_number: 30
  },
  // ACTION QUESTIONS (31-40)
  {
    id: 'workplace-conflict-31',
    question: 'Write out the specific conversation you need to have this week. Script your opening 2-3 sentences. What do you say? Where and when will you have it? How will you request the conversation? What\'s your backup plan if they decline or deflect?',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 31
  },
  {
    id: 'workplace-conflict-32',
    question: 'Create your documentation system starting today. What will you track? Where will you keep it? How often will you update it? What format works for potential HR involvement? What\'s your first entry? Set a reminder for when you\'ll review it.',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 32
  },
  {
    id: 'workplace-conflict-33',
    question: 'Identify your support system and schedule check-ins. Who\'s your emotional support person? Who\'s your strategic advisor? When will you talk to them? What do you need from each? How often? Reach out to them this week.',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 33
  },
  {
    id: 'workplace-conflict-34',
    question: 'Establish one boundary you\'ll enforce this week. What specific behavior will you not tolerate? What will you say when it happens? What will you do if they push back? Practice the exact words. When\'s the first moment you\'ll test this?',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 34
  },
  {
    id: 'workplace-conflict-35',
    question: 'Take one concrete action to shift the dynamic within 3 days. Could be: Requesting a direct conversation, sending a clear email, involving a mediator, changing how you show up in meetings, adjusting your response pattern. What\'s the smallest move that changes the game? When exactly will you do it?',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 35
  },
  {
    id: 'workplace-conflict-36',
    question: 'Prepare for the difficult conversation. Role-play with someone: You be them, they be you. What do they say that triggers you? Practice staying calm. What\'s your response to their likely defensiveness? Record yourself saying your main points. What do you notice?',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 36
  },
  {
    id: 'workplace-conflict-37',
    question: 'Create your self-care plan for the conflict period. What will you do daily to discharge stress? What\'s your line for when you need a mental health day? Who notices when you\'re not okay? What activities are non-negotiable for your wellbeing? Schedule them now.',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 37
  },
  {
    id: 'workplace-conflict-38',
    question: 'Decide on your escalation criteria and timeline. What specific things, if they happen, mean you escalate? What\'s your deadline for attempting direct resolution before involving others? What are the tripwires that mean you go to HR immediately? Write them down.',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 38
  },
  {
    id: 'workplace-conflict-39',
    question: 'Take steps to protect your professional standing. What project should you make visible? Who should you build relationships with? What wins should you communicate to your manager? What opportunities should you pursue? Do one of these this week.',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 39
  },
  {
    id: 'workplace-conflict-40',
    question: 'Set a review date to assess if your approach is working. Pick a date 2-4 weeks from now. What metrics will tell you if things are improving? What signs mean it\'s time to change strategy? What questions will you ask yourself? Put it in your calendar with these specific reflection questions.',
    category: 'action',
    template_id: 'workplace-conflict',
    question_number: 40
  }
];

async function main() {
  console.log('Inserting workplace-conflict questions...');

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
    .select('category')
    .eq('template_id', 'workplace-conflict');

  if (error) {
    console.error('Error verifying:', error);
  } else {
    console.log(`\nTotal questions inserted: ${data.length}`);
    const breakdown = data.reduce((acc: any, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});
    console.log('Breakdown by category:', breakdown);
  }
}

main();
