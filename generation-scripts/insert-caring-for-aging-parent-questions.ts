import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (1-15)
  {
    id: 'caring-for-aging-parent-1',
    question: 'Think back to the last 6 months. Write about 3 specific moments when you suddenly realized your parent had changed - what were they doing (or struggling to do) that made you notice?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 1
  },
  {
    id: 'caring-for-aging-parent-2',
    question: 'Reflect on your relationship with your parent before caregiving began. What are 3 activities or conversations you used to share that have shifted or disappeared? When did you first notice each one changing?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 2
  },
  {
    id: 'caring-for-aging-parent-3',
    question: 'Document the last 5 times your parent needed help with something they used to do independently. For each instance: What was it? How did they react when you helped? How did you feel?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 3
  },
  {
    id: 'caring-for-aging-parent-4',
    question: 'Write about a time in your childhood when your parent took care of you during illness or difficulty. What do you remember about how they handled it? How does that memory affect how you approach caring for them now?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 4
  },
  {
    id: 'caring-for-aging-parent-5',
    question: 'List every family member or close friend who\'s commented on your parent\'s changes in the past year. What specifically did each person notice? What patterns emerge across their observations?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 5
  },
  {
    id: 'caring-for-aging-parent-6',
    question: 'Think about your typical week. Write down every moment when you think "I should check on mom/dad" - what time of day, what triggers the thought, what you\'re usually doing when it hits?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 6
  },
  {
    id: 'caring-for-aging-parent-7',
    question: 'Reflect on the last time you and your parent disagreed about their care or independence. Write out the conversation as you remember it - what was said, what went unsaid, how it ended?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 7
  },
  {
    id: 'caring-for-aging-parent-8',
    question: 'Document 3 times in the past 3 months when caregiving conflicted with your other responsibilities (work, kids, relationships). What did you sacrifice or scramble to handle? What was the emotional cost?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 8
  },
  {
    id: 'caring-for-aging-parent-9',
    question: 'Write about your biggest fear regarding your parent\'s aging - not the generic "I don\'t want them to suffer," but the specific scenario that keeps you up at night. What details make it so frightening?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 9
  },
  {
    id: 'caring-for-aging-parent-10',
    question: 'Think about your siblings or other family members. For each person, write: their current level of involvement, the last time they helped with parent care, and what they say vs. what they actually do?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 10
  },
  {
    id: 'caring-for-aging-parent-11',
    question: 'Reflect on the last month. List every time you felt resentful, overwhelmed, or guilty about caregiving. What specifically triggered each feeling? What patterns do you notice?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 11
  },
  {
    id: 'caring-for-aging-parent-12',
    question: 'Write about what "being a good son/daughter" meant in your family growing up. Who defined it? How does that definition help or hurt you now as a caregiver?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 12
  },
  {
    id: 'caring-for-aging-parent-13',
    question: 'Document a recent interaction with your parent that felt like your roles had reversed - when you were the parent and they were the child. What happened? How did it make you feel about your relationship?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 13
  },
  {
    id: 'caring-for-aging-parent-14',
    question: 'Think about the last time you enjoyed time with your parent (not just caregiving tasks). What were you doing? Why was it different from your usual interactions? When was it?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 14
  },
  {
    id: 'caring-for-aging-parent-15',
    question: 'List 5 things about your parent\'s personality or preferences that haven\'t changed despite their aging. Why is it important to you that these things remain? How do you protect them?',
    category: 'reflection',
    template_id: 'caring-for-aging-parent',
    question_number: 15
  },

  // RESEARCH QUESTIONS (16-28)
  {
    id: 'caring-for-aging-parent-16',
    question: 'Document your parent\'s current medical situation: List every medication (with dosage and time taken), every doctor they see (with specialty and last visit), every diagnosed condition (with year diagnosed). What gaps in your knowledge did you discover while making this list?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 16
  },
  {
    id: 'caring-for-aging-parent-17',
    question: 'Research your parent\'s insurance coverage. For each policy (Medicare, supplemental, long-term care): write down the policy number, what it covers, what it doesn\'t cover, and one claim or coverage question you need to call about.',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 17
  },
  {
    id: 'caring-for-aging-parent-18',
    question: 'Map your parent\'s daily routine hour by hour for a typical Tuesday. For each activity (waking, eating, bathing, etc.): Who helps? How long does it take? What used to take 10 minutes that now takes 30? Where are the danger points?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 18
  },
  {
    id: 'caring-for-aging-parent-19',
    question: 'Investigate local care options: Call or visit 3 different senior care resources (adult day care, home health agency, assisted living). For each, document: cost per month, services included, availability, and your gut reaction when you walked in or talked to them.',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 19
  },
  {
    id: 'caring-for-aging-parent-20',
    question: 'Track your parent\'s cognitive patterns for one week. Each day, note: Time of day when they\'re sharpest vs. most confused, any repeated questions or stories, moments of clarity vs. disorientation. What patterns emerge?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 20
  },
  {
    id: 'caring-for-aging-parent-21',
    question: 'Research your parent\'s financial situation: List every income source (Social Security, pension, investments) with monthly amounts, every regular expense, every asset (house, accounts, vehicles), every debt. What surprised you? What\'s missing?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 21
  },
  {
    id: 'caring-for-aging-parent-22',
    question: 'Document your parent\'s social connections. Create a list: Who visits or calls them? How often? When was the last time? Who used to be in their life but isn\'t anymore? Why did those connections fade?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 22
  },
  {
    id: 'caring-for-aging-parent-23',
    question: 'Audit your parent\'s home safety: Walk through each room and photograph or list hazards (loose rugs, poor lighting, steep stairs, difficult bathroom). For each hazard: rate the urgency (1-10) and estimate cost to fix.',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 23
  },
  {
    id: 'caring-for-aging-parent-24',
    question: 'Research your family\'s medical history for patterns. List: What did your grandparents die from? At what age? What conditions run in the family? How did other relatives handle aging? What does this suggest about your parent\'s trajectory?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 24
  },
  {
    id: 'caring-for-aging-parent-25',
    question: 'Investigate legal documents: Locate (or note as missing) your parent\'s will, power of attorney, healthcare directive, living will, trust documents, property deeds. For each: where is it kept, when was it last updated, does it reflect current wishes?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 25
  },
  {
    id: 'caring-for-aging-parent-26',
    question: 'Track your caregiving time for one week. Log every call, visit, errand, appointment, worry session. Calculate: hours per week, cost in missed work, activities you skipped. What does the actual data show vs. what you assumed?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 26
  },
  {
    id: 'caring-for-aging-parent-27',
    question: 'Research costs of care: Get actual price quotes for home health aide (hourly), assisted living (monthly), memory care (monthly), nursing home (monthly) in your area. Compare these numbers to your parent\'s monthly income and savings. How long would savings last?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 27
  },
  {
    id: 'caring-for-aging-parent-28',
    question: 'Survey your support network: List every person who\'s offered to help (family, friends, neighbors, church). For each: what they specifically offered, when they offered it, whether you\'ve taken them up on it. Why haven\'t you called in more help?',
    category: 'research',
    template_id: 'caring-for-aging-parent',
    question_number: 28
  },

  // PLANNING QUESTIONS (29-45)
  {
    id: 'caring-for-aging-parent-29',
    question: 'Map out your parent\'s likely decline trajectory. Based on their conditions and your research: What abilities will they lose first? What changes in 6 months vs. 2 years? When will current living situation become unsafe? What\'s your threshold for each transition?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 29
  },
  {
    id: 'caring-for-aging-parent-30',
    question: 'Design your ideal care team. List: What specific help do you need (medical, daily care, respite, financial)? Who could provide each type? What would it cost? What\'s preventing you from building this team now?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 30
  },
  {
    id: 'caring-for-aging-parent-31',
    question: 'Create your parent\'s "red line" scenarios. For each scenario (can\'t live alone safely, needs memory care, needs feeding tube, etc.): What specific signs would trigger this? Who makes the decision? What\'s your plan to implement it?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 31
  },
  {
    id: 'caring-for-aging-parent-32',
    question: 'Plan the conversation with your parent about their wishes. Write out: When and where will you talk? What specific questions will you ask? What do you already know they want? What are you afraid to ask? Who else should be there?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 32
  },
  {
    id: 'caring-for-aging-parent-33',
    question: 'Strategize for sibling coordination (or note if you\'re an only child). For each family member: What\'s their capacity to help? What are they good at? What triggers conflict? How will you divide responsibilities fairly? What\'s your backup if someone drops out?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 33
  },
  {
    id: 'caring-for-aging-parent-34',
    question: 'Plan for your parent\'s resistance to help. List: What independence battles are you already fighting? Which ones matter for safety vs. dignity? Where can you let them "win"? Where must you override their wishes? How will you handle the guilt?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 34
  },
  {
    id: 'caring-for-aging-parent-35',
    question: 'Design your financial sustainability plan. Calculate: Current monthly cost of care, projected costs in 1 year and 3 years, available resources, the gap. How will you close the gap? What tough choices might you need to make?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 35
  },
  {
    id: 'caring-for-aging-parent-36',
    question: 'Map your parent\'s quality of life priorities. Based on who they\'ve always been: What brings them joy? What gives them dignity? What would be worse than death for them? How do you protect these things as they decline?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 36
  },
  {
    id: 'caring-for-aging-parent-37',
    question: 'Create your crisis response plan. For each emergency (fall, stroke, sudden confusion, hospitalization): Who do you call first? What information do you need ready? Who can get to them quickly? What triggers calling 911 vs. handling it yourself?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 37
  },
  {
    id: 'caring-for-aging-parent-38',
    question: 'Plan your own sustainability as a caregiver. Looking at your time tracking: What\'s not sustainable at current pace? What support would let you continue? What\'s your breaking point? What\'s your plan when you hit it?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 38
  },
  {
    id: 'caring-for-aging-parent-39',
    question: 'Strategize the living situation transition (if needed). Write: At what point can\'t they age in place? What are the 3 most viable alternatives? What does each cost? How will you convince them to move? What\'s your timeline?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 39
  },
  {
    id: 'caring-for-aging-parent-40',
    question: 'Design boundaries between caregiving and your own life. Define: Which hours are "off limits"? What requests can wait? Who else can your parent call? What do you need to say "no" to? How will you enforce these boundaries without guilt?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 40
  },
  {
    id: 'caring-for-aging-parent-41',
    question: 'Plan for the legal and financial conversations. List: Which documents need updating? Who needs to be named in POA and healthcare proxy? Who will have these difficult conversations with your parent? What happens if your parent refuses or can\'t understand?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 41
  },
  {
    id: 'caring-for-aging-parent-42',
    question: 'Create your parent\'s social and engagement plan. Identify: What keeps them connected to life? What activities are still possible? Who could help them maintain connections? How do you balance safety with isolation? What\'s worth the risk?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 42
  },
  {
    id: 'caring-for-aging-parent-43',
    question: 'Map the family dynamics and potential conflicts. Predict: What decisions will cause disagreement? Who has what misconceptions about parent\'s situation? What old family patterns will resurface? How will you handle dissent when you have to make hard calls?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 43
  },
  {
    id: 'caring-for-aging-parent-44',
    question: 'Plan your communication strategy with medical professionals. Define: How do you get doctors to take concerns seriously? What information do you bring to appointments? How do you ensure you\'re included in decisions? What do you do when recommendations conflict?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 44
  },
  {
    id: 'caring-for-aging-parent-45',
    question: 'Strategize for your parent\'s end-of-life wishes. Think through: What do they want (or what would they want if they could decide)? What makes you uncomfortable about honoring those wishes? How will you handle family members who disagree? What support do you need to follow through?',
    category: 'planning',
    template_id: 'caring-for-aging-parent',
    question_number: 45
  },

  // ACTION QUESTIONS (46-60)
  {
    id: 'caring-for-aging-parent-46',
    question: 'Schedule the medical coordination appointment. Choose one doctor (primary care or specialist) and make an appointment to attend with your parent. Write your list of questions to ask and information to share. When\'s the appointment?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 46
  },
  {
    id: 'caring-for-aging-parent-47',
    question: 'Create your parent\'s emergency information sheet. Compile on one page: medications, doctors with phone numbers, medical conditions, allergies, insurance info, emergency contacts, location of legal documents. Print 3 copies - where will you keep them?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 47
  },
  {
    id: 'caring-for-aging-parent-48',
    question: 'Start the legal documents conversation this week. Pick one specific time in the next 7 days to begin this discussion with your parent. Write out your opening sentence. Set the calendar reminder now - when is it?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 48
  },
  {
    id: 'caring-for-aging-parent-49',
    question: 'Reach out to 3 people who offered help. Text or call them today with one specific request each (grocery pickup, visit on Tuesday, research assisted living, etc.). Draft the messages now - what will you ask each person?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 49
  },
  {
    id: 'caring-for-aging-parent-50',
    question: 'Install one critical safety modification this month. Based on your home safety audit, pick the highest-priority change (grab bars, better lighting, remove rug, etc.). Put it on your calendar - when will you do it? How much will it cost?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 50
  },
  {
    id: 'caring-for-aging-parent-51',
    question: 'Join one caregiver support resource within 48 hours. Search for: local caregiver support group, online forum, or counselor who specializes in caregiver stress. Sign up or make an appointment before you talk yourself out of it. Which one will you choose?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 51
  },
  {
    id: 'caring-for-aging-parent-52',
    question: 'Document your parent\'s current baseline. This week, write down: their typical mood, cognitive sharpness, physical abilities, daily routine. Date it and save it. You\'ll need this comparison when deciding if changes are "normal" or require intervention.',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 52
  },
  {
    id: 'caring-for-aging-parent-53',
    question: 'Have the "what matters most" conversation. In the next 2 weeks, ask your parent: "If you had to choose between living longer but in a facility, or shorter but at home, what would you pick?" Write down their answer verbatim with the date. What did they say?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 53
  },
  {
    id: 'caring-for-aging-parent-54',
    question: 'Create your caregiving schedule for next month. Block out on calendar: doctor appointments, your respite time, who covers what days, when you check in by phone vs. visit. Share it with everyone involved. Does it look sustainable?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 54
  },
  {
    id: 'caring-for-aging-parent-55',
    question: 'Review your parent\'s medications with a pharmacist. Make an appointment (many offer free consultations) to review all medications, check for interactions, understand side effects. Schedule it this week - which pharmacy and when?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 55
  },
  {
    id: 'caring-for-aging-parent-56',
    question: 'Set up one automated system to reduce your mental load. Choose one recurring task (medication reminder, grocery delivery, bill pay, etc.) and automate it this week. What will you automate? How?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 56
  },
  {
    id: 'caring-for-aging-parent-57',
    question: 'Open the financial conversation. In the next 10 days, start with: "I want to make sure I can help you if something happens. Can we review your bank accounts and bills together?" Pick the date and time now. When will you do this?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 57
  },
  {
    id: 'caring-for-aging-parent-58',
    question: 'Establish your weekly check-in routine. Decide: What days and times will you call vs. visit? What signs will you look for each time? Who\'s backup if you can\'t make it? Start this week - what\'s your schedule?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 58
  },
  {
    id: 'caring-for-aging-parent-59',
    question: 'Test your crisis plan. Put all emergency numbers in your phone with labels (Parent\'s Doctor - Dr. Smith). Save the emergency info sheet to your phone. Do a practice run: if your parent fell right now, what would you do first? Write out the steps.',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 59
  },
  {
    id: 'caring-for-aging-parent-60',
    question: 'Take one action for your own wellbeing this week. Choose something that fills your tank: therapy appointment, dinner with friend, saying no to one caregiving request, gym session, full night\'s sleep. Schedule it now as non-negotiable. What will you do and when?',
    category: 'action',
    template_id: 'caring-for-aging-parent',
    question_number: 60
  }
];

async function insertQuestions() {
  console.log('Starting question insertion...');

  for (const question of questions) {
    try {
      const { data, error } = await supabase
        .from('questions')
        .insert(question);

      if (error) {
        console.error(`Error inserting question ${question.question_number}:`, error);
      } else {
        console.log(`✅ Inserted question ${question.question_number}`);
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (err) {
      console.error(`Exception inserting question ${question.question_number}:`, err);
    }
  }

  console.log('\n✅ Question insertion complete!');
  console.log(`Total questions inserted: ${questions.length}`);

  // Verify counts by category
  const foundationCount = questions.filter(q => q.category === 'reflection').length;
  const researchCount = questions.filter(q => q.category === 'research').length;
  const planningCount = questions.filter(q => q.category === 'planning').length;
  const actionCount = questions.filter(q => q.category === 'action').length;

  console.log('\nBreakdown by category:');
  console.log(`Foundation (reflection): ${foundationCount} questions (${(foundationCount/questions.length*100).toFixed(1)}%)`);
  console.log(`Research: ${researchCount} questions (${(researchCount/questions.length*100).toFixed(1)}%)`);
  console.log(`Planning: ${planningCount} questions (${(planningCount/questions.length*100).toFixed(1)}%)`);
  console.log(`Action: ${actionCount} questions (${(actionCount/questions.length*100).toFixed(1)}%)`);
}

insertQuestions();
