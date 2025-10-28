import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Foundation Questions (1-14) - 25%
  {
    id: 'planning-funeral-1',
    question: 'Write about your earliest memory involving death or funerals. What was the experience like? What stood out to you about how people handled it - what felt comforting, what felt strange, what stayed with you?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 1
  },
  {
    id: 'planning-funeral-2',
    question: 'Reflect on 3 funerals or memorial services you\'ve attended. For each, note what made it meaningful or meaningful-less. What moments actually helped people grieve? What parts felt performative or empty?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 2
  },
  {
    id: 'planning-funeral-3',
    question: 'Think about how the person you\'re planning for talked about death in the past year. Write down any comments they made - jokes, serious statements, things they said about other people\'s funerals. What values or preferences were hidden in those comments?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 3
  },
  {
    id: 'planning-funeral-4',
    question: 'Document the moment you realized you needed to plan this funeral. Where were you? What triggered the realization? How did your body feel? Write about the specific thoughts that went through your mind.',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 4
  },
  {
    id: 'planning-funeral-5',
    question: 'Reflect on your relationship with the person. Write about 3 specific moments that capture who they were to you - not their accomplishments, but small, ordinary moments that showed their essence. What would be lost if these moments weren\'t honored?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 5
  },
  {
    id: 'planning-funeral-6',
    question: 'Think about the phrase "a good funeral" or "a good death." What does that mean to you, specifically? What would make you feel like you honored this person well? What would haunt you later if you missed it?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 6
  },
  {
    id: 'planning-funeral-7',
    question: 'List the family or cultural expectations you\'re aware of for this funeral. For each expectation, note: who holds it, how strongly, and whether it aligns with what you believe the deceased would have wanted. Where do you feel tension?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 7
  },
  {
    id: 'planning-funeral-8',
    question: 'Write about your own relationship with grief and emotion in public. When have you felt comfortable crying in front of others? When have you needed to be "strong"? How might this affect the decisions you make about the service?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 8
  },
  {
    id: 'planning-funeral-9',
    question: 'Reflect on the past week since you started thinking about this funeral. What decisions have you been avoiding? What thoughts wake you up at night? What feels too overwhelming to face right now?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 9
  },
  {
    id: 'planning-funeral-10',
    question: 'Think about how this person would want to be remembered. Not the sanitized, formal version - but the real them. Write about 3 qualities or quirks that were authentically them, even if they weren\'t always flattering. Should these be part of the service?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 10
  },
  {
    id: 'planning-funeral-11',
    question: 'Document the last meaningful conversation you had with this person. What did you talk about? What didn\'t you get to say? How might this "unfinished business" influence what you want the funeral to accomplish?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 11
  },
  {
    id: 'planning-funeral-12',
    question: 'Reflect on who you are in your family system. Are you the organizer, the peacemaker, the emotional one, the practical one? Write about how this role might affect your funeral planning and what support you might need to step out of that pattern if needed.',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 12
  },
  {
    id: 'planning-funeral-13',
    question: 'Think about the communities this person belonged to - work, hobbies, neighborhood, online groups, old friendships. For each, write down a specific way they showed up in that community. Which of these communities need to be part of the funeral, and which might need separate recognition?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 13
  },
  {
    id: 'planning-funeral-14',
    question: 'Write about your biggest fear regarding this funeral. Not abstract fears - the specific, concrete thing you\'re afraid will happen. What does this fear tell you about what really matters to you in this process?',
    category: 'reflection',
    template_id: 'planning-funeral',
    question_number: 14
  },
  // Research Questions (15-26) - 22%
  {
    id: 'planning-funeral-15',
    question: 'Research 3 funeral homes in your area. For each, document: pricing for basic services (get the general price list), reviews from families, whether they felt corporate or personal, and your gut reaction to their website/presence. What style feels right for this person?',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 15
  },
  {
    id: 'planning-funeral-16',
    question: 'Investigate the legal requirements in your state/region. Document: how quickly must the body be buried/cremated, what paperwork is required, who can legally make decisions, and what permits are needed. Write down what surprised you or what creates time pressure.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 16
  },
  {
    id: 'planning-funeral-17',
    question: 'Research the costs of burial versus cremation in your area. Document specific numbers: burial (casket, plot, opening/closing grave, headstone), cremation (basic cremation, urn, columbarium or scattering). Include what\'s NOT included in the base price that you\'d need to add.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 17
  },
  {
    id: 'planning-funeral-18',
    question: 'Look into any pre-planning documents the person may have created. Check for: written wishes, pre-paid funeral plans, will/estate documents, advance directives, conversations with other family members. Document what you found and what\'s still unknown.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 18
  },
  {
    id: 'planning-funeral-19',
    question: 'Research the religious or cultural traditions relevant to this funeral. Document specific practices: timing of burial, preparation of the body, who can attend, dress code, role of clergy, traditional prayers or readings. Note which traditions are required vs. optional vs. adaptable.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 19
  },
  {
    id: 'planning-funeral-20',
    question: 'Investigate the financial resources available. Check: life insurance policies (amount, beneficiary, how to claim), bank accounts, veteran benefits if applicable, Social Security death benefit, employer benefits. Write down confirmed amounts vs. what you\'re still tracking down.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 20
  },
  {
    id: 'planning-funeral-21',
    question: 'Research alternative funeral options beyond traditional burial/cremation. Look into: green burial, home funeral, body donation to science, aquamation, conservation burial. For each option, note: cost, legal status in your area, and whether it aligns with the person\'s values.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 21
  },
  {
    id: 'planning-funeral-22',
    question: 'Look into venue options for the service. Research 3 possible locations: funeral home chapel, religious building, community space, outdoor location, or family home. For each, document: capacity, cost, restrictions, availability, and what atmosphere it would create.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 22
  },
  {
    id: 'planning-funeral-23',
    question: 'Research what happens to the person\'s online presence. Investigate policies for: social media accounts, email, photos stored in cloud, websites they maintained, online communities they participated in. Document how to memorialize or close each account.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 23
  },
  {
    id: 'planning-funeral-24',
    question: 'Investigate options for memorialization beyond the funeral itself. Research: online memorial pages, charity donations in their name, memorial scholarships, planted trees, benches, ongoing community contributions. Note costs and coordination required for each.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 24
  },
  {
    id: 'planning-funeral-25',
    question: 'Look up the person\'s military service records if applicable. Research: eligibility for military honors, burial in national cemetery, flag presentation, veteran benefits available. Document what forms are needed and who to contact.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 25
  },
  {
    id: 'planning-funeral-26',
    question: 'Research grief support resources for yourself and family. Find: local grief counselors, support groups, online communities, books or resources specific to your type of loss. Document 3 specific resources with contact info that you could access in the weeks after the funeral.',
    category: 'research',
    template_id: 'planning-funeral',
    question_number: 26
  },
  // Planning Questions (27-42) - 29%
  {
    id: 'planning-funeral-27',
    question: 'Based on your research, write down your funeral budget in three tiers: bare minimum (what must happen), realistic (what you can afford), and ideal (if money weren\'t the main constraint). For each tier, specify the total cost and what it includes.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 27
  },
  {
    id: 'planning-funeral-28',
    question: 'Design the structure of the service. Map out the flow: gathering/visitation, formal service, committal/burial, reception. For each part, note: how long, who leads it, what tone you want, and which parts are negotiable if you run out of time or energy.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 28
  },
  {
    id: 'planning-funeral-29',
    question: 'Plan who will have active roles in the service. List specific people for: eulogy, readings, music, pallbearers, greeters, photo display curator. For each person, write why they\'re the right choice and have you actually asked them yet?',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 29
  },
  {
    id: 'planning-funeral-30',
    question: 'Create the notification strategy. Plan: who needs to be told immediately (inner circle), who needs to be informed soon (extended network), and who will learn via obituary/social media. For each group, write who will contact them and what method you\'ll use.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 30
  },
  {
    id: 'planning-funeral-31',
    question: 'Draft the core message about this person\'s life. Write 3-5 sentences capturing their essence - not achievements, but who they were, what they cared about, how they affected others. This will guide the obituary, eulogy, and how you talk about them.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 31
  },
  {
    id: 'planning-funeral-32',
    question: 'Plan the sensory experience of the funeral. Consider: what music (specific songs, live or recorded), what visuals (photos, videos, flowers, symbols), what physical objects (guest book, memory table, handouts). For each, write what feeling or memory you want it to evoke.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 32
  },
  {
    id: 'planning-funeral-33',
    question: 'Anticipate family conflicts or difficult dynamics. Write down: who might clash with whom, what past tensions could resurface, what decisions might cause disagreement, who might feel left out. For each potential conflict, plan: how you\'ll prevent it or how you\'ll handle it if it happens.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 33
  },
  {
    id: 'planning-funeral-34',
    question: 'Design how you\'ll handle your own grief during the service. Plan: who will be your support person, what will you do if you become overwhelmed, what tasks can you delegate, when will you give yourself permission to just be present. Write down your escape plan if you need to step away.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 34
  },
  {
    id: 'planning-funeral-35',
    question: 'Plan the timeline from death to service. Map out: when will viewing/visitation happen, how many days until the service, when is burial/cremation, when is reception. For each decision, note: what\'s driving this timeline (religion, family travel, your capacity, venue availability)?',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 35
  },
  {
    id: 'planning-funeral-36',
    question: 'Create the guest experience plan. Consider: how will out-of-town guests find lodging, what happens with young children during the service, how will elderly/disabled guests access the venue, what will people do between service and reception. Write down specific accommodations you\'ll arrange.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 36
  },
  {
    id: 'planning-funeral-37',
    question: 'Plan how to honor the person\'s wishes while managing family expectations. If there\'s a conflict between what the deceased wanted and what family expects, write out: what the conflict is, who will be upset by each choice, and what compromise (if any) honors both the person and the family.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 37
  },
  {
    id: 'planning-funeral-38',
    question: 'Design the participation opportunities for attendees. Plan: will there be open mic sharing, a memory book, photo contributions, charitable donations in lieu of flowers, a specific action people can take? For each option, note what you\'re asking people to do and how you\'ll facilitate it.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 38
  },
  {
    id: 'planning-funeral-39',
    question: 'Plan the obituary strategy. Decide: will you publish in newspapers (which ones, what cost), post online (which sites), share on social media (which platforms, who posts). Draft the key facts now: dates, survivors, service info, donation preferences. Who will write the full version?',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 39
  },
  {
    id: 'planning-funeral-40',
    question: 'Create your decision-making framework. Write down: what decisions you can make alone, what requires input from specific family members, what you\'ll delegate entirely, and what you simply won\'t compromise on. This is your boundary document.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 40
  },
  {
    id: 'planning-funeral-41',
    question: 'Plan the reception or gathering after the service. Decide: location (home, restaurant, venue), format (sit-down meal, casual reception, nothing formal), who will coordinate food, how long it will last. Write down what purpose this gathering serves - celebration, support, closure, or something else?',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 41
  },
  {
    id: 'planning-funeral-42',
    question: 'Design your own support structure for the week of the funeral. Plan: who will stay with you, who will handle practical tasks (feeding you, managing calls, driving), what you\'ll say when you need space, how you\'ll ask for help. Write down 3 people and their specific roles.',
    category: 'planning',
    template_id: 'planning-funeral',
    question_number: 42
  },
  // Action Questions (43-55) - 24%
  {
    id: 'planning-funeral-43',
    question: 'Choose and contact a funeral home or burial coordinator. Write down: which funeral home you\'ll call (specific name and phone), what questions you\'ll ask, what information you need to gather before the call. Schedule when you\'ll make this call (specific date and time).',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 43
  },
  {
    id: 'planning-funeral-44',
    question: 'Gather essential documents today. Create a physical folder with: death certificate (order copies), will, insurance policies, military discharge papers, marriage certificate, Social Security card. Write down what you have, what you\'re missing, and where to get it.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 44
  },
  {
    id: 'planning-funeral-45',
    question: 'Start the obituary draft right now. Write the basic framework: full name, dates, immediate family, service information, donation preferences. It doesn\'t need to be beautiful yet - just get the facts down. Who will review it before it\'s published?',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 45
  },
  {
    id: 'planning-funeral-46',
    question: 'Create the master task list and delegate. Write down every single task that needs to happen, then assign each task to a specific person with a specific deadline. Put one person in charge of tracking this list. When will you have your first coordination meeting?',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 46
  },
  {
    id: 'planning-funeral-47',
    question: 'Collect photos and memorabilia this week. Ask specific people: "Send me 3 photos of [person] that capture them at their best." Set a deadline. Create a shared folder (Google Drive, Dropbox) where people can upload. Who will curate these into a display?',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 47
  },
  {
    id: 'planning-funeral-48',
    question: 'Reach out to the people you want in active roles. For each person (eulogy, readings, music, pallbearer), send them a specific message today: what you\'re asking, why you chose them, that it\'s okay to say no. Don\'t wait - who will you contact first?',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 48
  },
  {
    id: 'planning-funeral-49',
    question: 'Set up the coordination system. Choose: shared document for tracking tasks (Google Doc, spreadsheet), group chat for family coordination (specific platform), and one point person for vendor communications. Create these systems today and share access with key people.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 49
  },
  {
    id: 'planning-funeral-50',
    question: 'Notify the inner circle immediately. Make a list of the 5-10 people who need to hear directly from you before they see it anywhere else. Call or text each of them today. Write down: who you told, how they responded, what support they offered.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 50
  },
  {
    id: 'planning-funeral-51',
    question: 'Make the burial versus cremation decision by [specific date]. Based on everything you know - the person\'s wishes, religious requirements, family input, budget, your own feelings - write down your decision and who needs to be informed. Schedule the conversation if needed.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 51
  },
  {
    id: 'planning-funeral-52',
    question: 'Book the venue and set the date. Call your chosen location today, check availability for your preferred dates, and make the reservation. Write down: venue name, date, time, deposit required, cancellation policy. Send this information to family immediately after booking.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 52
  },
  {
    id: 'planning-funeral-53',
    question: 'Create the one-page service outline. Write down the actual running order: what happens minute-by-minute, who does what, what music plays when, where people sit. Make this concrete enough that someone else could run the service if you\'re too overwhelmed. Share it with your officiant or coordinator.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 53
  },
  {
    id: 'planning-funeral-54',
    question: 'Schedule your own support for the week after the funeral. Right now, put 3 specific things in your calendar: grief counseling appointment, coffee with a trusted friend, one day where someone else handles logistics. Write down the dates and confirm with the people involved.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 54
  },
  {
    id: 'planning-funeral-55',
    question: 'Set the review checkpoint. Write down a date exactly 3 days before the funeral. On that date, you\'ll review everything: what\'s confirmed, what\'s still pending, what\'s falling through the cracks, who needs to be followed up with. Put this in your calendar now with a link to all your planning documents.',
    category: 'action',
    template_id: 'planning-funeral',
    question_number: 55
  }
];

async function insertQuestions() {
  console.log(`Inserting ${questions.length} questions for planning-funeral guide...`);

  // First, delete any existing questions
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .eq('template_id', 'planning-funeral');

  if (deleteError) {
    console.log('Note: No existing questions to delete (or error deleting):', deleteError.message);
  } else {
    console.log('✅ Cleared any existing questions');
  }

  // Insert new questions
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
    .eq('template_id', 'planning-funeral');

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

    const total = verifyData.length;
    console.log('\n=== VERIFICATION SUMMARY ===');
    console.log(`Total questions: ${total}`);
    console.log(`\nBreakdown by category:`);
    console.log(`Foundation (reflection): ${counts.reflection} questions (${((counts.reflection/total)*100).toFixed(1)}%)`);
    console.log(`Research: ${counts.research} questions (${((counts.research/total)*100).toFixed(1)}%)`);
    console.log(`Planning: ${counts.planning} questions (${((counts.planning/total)*100).toFixed(1)}%)`);
    console.log(`Action: ${counts.action} questions (${((counts.action/total)*100).toFixed(1)}%)`);

    console.log(`\n=== TARGET RANGES ===`);
    console.log(`Foundation: 20-30% (Target: 25%)`);
    console.log(`Research: 20-25% (Target: 22%)`);
    console.log(`Planning: 25-30% (Target: 29%)`);
    console.log(`Action: 20-25% (Target: 24%)`);
  }
}

insertQuestions();
