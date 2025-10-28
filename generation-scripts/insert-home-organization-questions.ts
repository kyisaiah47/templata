import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // FOUNDATION QUESTIONS (9 questions, 25%)
  {
    id: 'home-organization-1',
    question: 'Write about the last time you couldn\'t find something important in your home. What were you looking for? How long did you search? What did that moment feel like?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 1
  },
  {
    id: 'home-organization-2',
    question: 'Document 3 spaces in your home where clutter accumulates fastest. For each space, note: When did it last feel organized? What happened between then and now?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 2
  },
  {
    id: 'home-organization-3',
    question: 'Reflect on an item you\'ve moved from surface to surface (counter to table to chair) without putting away. How long has this been happening? What makes it hard to find a home for this item?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 3
  },
  {
    id: 'home-organization-4',
    question: 'Think about your morning routine. What do you search for, trip over, or work around every single morning? Write down each physical obstacle and when it first appeared.',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 4
  },
  {
    id: 'home-organization-5',
    question: 'List 5 things you\'ve purchased duplicates of because you couldn\'t find the original. For each, note: Where did you eventually find it? What does this pattern tell you about your storage?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 5
  },
  {
    id: 'home-organization-6',
    question: 'Write about a time you felt embarrassed or stressed about the state of your home. What triggered that feeling? Who was involved? What specifically made you feel that way?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 6
  },
  {
    id: 'home-organization-7',
    question: 'Document the last 3 times you said "I\'ll deal with that later" about something in your home. What were those things? Are they still waiting? Why?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 7
  },
  {
    id: 'home-organization-8',
    question: 'Reflect on a possession you\'ve kept for over 5 years but never use. Where is it now? When do you notice it? What stops you from getting rid of it?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 8
  },
  {
    id: 'home-organization-9',
    question: 'Think about someone whose home you admire. What specifically feels different when you\'re in their space compared to yours? What do you notice about how they live day-to-day?',
    category: 'reflection',
    template_id: 'home-organization',
    question_number: 9
  },

  // RESEARCH QUESTIONS (8 questions, 23%)
  {
    id: 'home-organization-10',
    question: 'Walk through each room in your home and photograph one "clutter hotspot" per room. For each photo, note: What items are there? Who put them there? When?',
    category: 'research',
    template_id: 'home-organization',
    question_number: 10
  },
  {
    id: 'home-organization-11',
    question: 'Open your 3 most-used storage spaces (closet, drawer, cabinet). List what percentage is: stuff you use weekly, stuff you use occasionally, stuff you forgot was there. Estimate honestly.',
    category: 'research',
    template_id: 'home-organization',
    question_number: 11
  },
  {
    id: 'home-organization-12',
    question: 'Track every time you say "where is my..." for one full day. Document: What were you looking for? Where was it supposed to be? Where was it actually?',
    category: 'research',
    template_id: 'home-organization',
    question_number: 12
  },
  {
    id: 'home-organization-13',
    question: 'Choose one category of items (clothes, kitchen tools, papers, toys). Count how many you own. Then count how many you\'ve used in the past month. Calculate the percentage.',
    category: 'research',
    template_id: 'home-organization',
    question_number: 13
  },
  {
    id: 'home-organization-14',
    question: 'Research 3 organizing systems you\'ve tried before (apps, bins, methods, etc.). For each, document: When did you try it? How long did it last? What made you stop using it?',
    category: 'research',
    template_id: 'home-organization',
    question_number: 14
  },
  {
    id: 'home-organization-15',
    question: 'Map out your daily movement patterns. Draw or describe: What path do you walk when you get home? Where do things land? What surfaces do you touch most?',
    category: 'research',
    template_id: 'home-organization',
    question_number: 15
  },
  {
    id: 'home-organization-16',
    question: 'Audit your "flat surface inventory." Count: How many counters, tables, chairs, or floors are currently covered with stuff? What\'s on each?',
    category: 'research',
    template_id: 'home-organization',
    question_number: 16
  },
  {
    id: 'home-organization-17',
    question: 'Time yourself doing a common task (making breakfast, getting ready for work, finding keys). Document: How many unnecessary steps? What slowed you down? What couldn\'t you find?',
    category: 'research',
    template_id: 'home-organization',
    question_number: 17
  },

  // PLANNING QUESTIONS (10 questions, 29%)
  {
    id: 'home-organization-18',
    question: 'Design a decision rule for one category of stuff. Write out: "I keep [category] if it meets these specific criteria: ___, ___, ___. Everything else goes."',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 18
  },
  {
    id: 'home-organization-19',
    question: 'Plan where 5 items you use daily should live. For each, describe: Where will it live? Why that spot? What\'s the first step to getting there? What\'s the 2-second action to return it?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 19
  },
  {
    id: 'home-organization-20',
    question: 'Map your "drop zones" - places where stuff naturally lands. For each, decide: Should this be an official landing spot (add storage) or break the habit (remove the temptation)?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 20
  },
  {
    id: 'home-organization-21',
    question: 'Create a space priority list. Rank all rooms/areas by: Which organized space would improve your daily life most? What\'s your reasoning for each ranking?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 21
  },
  {
    id: 'home-organization-22',
    question: 'Design a "processing station" for incoming stuff (mail, purchases, papers). Describe: Where will it be? What categories will you sort into? What happens to each category?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 22
  },
  {
    id: 'home-organization-23',
    question: 'Plan your "one-touch rule" strategy. Identify 5 specific items you currently handle multiple times before putting away. For each, design: Where should it go immediately? What needs to change to make that possible?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 23
  },
  {
    id: 'home-organization-24',
    question: 'Outline your donation/discard system. Define: What are your 3-5 categories? Where will things physically sit while waiting? What\'s your weekly removal routine?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 24
  },
  {
    id: 'home-organization-25',
    question: 'Create "zones" for one room. Sketch or describe: What activities happen here? What items support each activity? Where should each zone be located and why?',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 25
  },
  {
    id: 'home-organization-26',
    question: 'Design your maintenance schedule. Break down: What needs daily reset (5 min)? Weekly tidying (30 min)? Monthly deep work (2 hrs)? Assign specific tasks to each.',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 26
  },
  {
    id: 'home-organization-27',
    question: 'Plan for your specific obstacles. List 3 things that will definitely derail your organization. For each, write: What\'s my if/then rule? "If [obstacle], then I will [specific action]."',
    category: 'planning',
    template_id: 'home-organization',
    question_number: 27
  },

  // ACTION QUESTIONS (8 questions, 23%)
  {
    id: 'home-organization-28',
    question: 'Start with one drawer. Empty it completely and decide for each item: Keep (use regularly), Relocate (belongs elsewhere), or Remove (donate/trash). Document your totals for each category.',
    category: 'action',
    template_id: 'home-organization',
    question_number: 28
  },
  {
    id: 'home-organization-29',
    question: 'Set a 15-minute timer and tackle your most visible clutter hotspot. Work until timer ends. Document: What did you accomplish? What surprised you? What\'s the next 15-minute session?',
    category: 'action',
    template_id: 'home-organization',
    question_number: 29
  },
  {
    id: 'home-organization-30',
    question: 'Create your "outbox" right now. Find a box or bag, place it somewhere accessible, and put the first 3 things in it that you know you don\'t need. Schedule when you\'ll take it out.',
    category: 'action',
    template_id: 'home-organization',
    question_number: 30
  },
  {
    id: 'home-organization-31',
    question: 'Choose one category to tackle this week. Write your commitment: "By [specific day], I will have made keep/remove decisions on every [category] in my [specific space]."',
    category: 'action',
    template_id: 'home-organization',
    question_number: 31
  },
  {
    id: 'home-organization-32',
    question: 'Implement one "home" for something you use daily but currently leaves out. Right now: Clear the spot, put the item there, take a photo. Set a phone reminder to check if it\'s still working in 3 days.',
    category: 'action',
    template_id: 'home-organization',
    question_number: 32
  },
  {
    id: 'home-organization-33',
    question: 'Schedule your first decluttering session. Block specific time: Date, start time, end time, which space. Add to calendar now. Plan what you\'ll need (bags, boxes, music?).',
    category: 'action',
    template_id: 'home-organization',
    question_number: 33
  },
  {
    id: 'home-organization-34',
    question: 'Identify one organizing product you actually need (not want). Based on your research, write: What specific problem will it solve? What are the exact dimensions required? Where will you buy it and when?',
    category: 'action',
    template_id: 'home-organization',
    question_number: 34
  },
  {
    id: 'home-organization-35',
    question: 'Start your daily reset routine tonight. List the exact 5-minute sequence: What will you do first, second, third? Set a phone alarm for the time you\'ll do it. Do it today.',
    category: 'action',
    template_id: 'home-organization',
    question_number: 35
  }
];

async function main() {
  console.log(`Inserting ${questions.length} questions for home-organization...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('✅ Successfully inserted all questions!');

  // Verify insertion
  const { data: inserted, error: verifyError } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'home-organization');

  if (verifyError) {
    console.error('Error verifying:', verifyError);
  } else {
    const breakdown = inserted.reduce((acc: any, q: any) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {});

    console.log('\n=== Breakdown by Category ===');
    console.log(`Total: ${inserted.length}`);
    Object.entries(breakdown).forEach(([cat, count]) => {
      const percentage = ((count as number) / inserted.length * 100).toFixed(1);
      console.log(`${cat}: ${count} (${percentage}%)`);
    });
  }
}

main();
