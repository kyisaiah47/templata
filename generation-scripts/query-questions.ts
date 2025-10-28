import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const guideId = process.argv[2];

  if (!guideId) {
    console.error('Usage: npx tsx query-questions.ts <guide-id>');
    process.exit(1);
  }

  // Check existing questions
  const { data: questions, error: questionsError } = await supabase
    .from('questions')
    .select('id, question, category')
    .eq('template_id', guideId);

  if (questionsError) {
    console.error('Error fetching questions:', questionsError);
  } else {
    console.log(`\n=== Existing Questions for ${guideId} ===`);
    console.log(`Total: ${questions.length}`);
    if (questions.length > 0) {
      questions.forEach((q, i) => {
        console.log(`${i + 1}. [${q.category}] ${q.question.substring(0, 80)}...`);
      });
    }
  }

  // Get guide context
  const { data: guide, error: guideError } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', guideId)
    .single();

  if (guideError) {
    console.error('Error fetching guide:', guideError);
  } else {
    console.log(`\n=== Guide Context ===`);
    console.log(`ID: ${guide.id}`);
    console.log(`Title: ${guide.title}`);
    console.log(`Category: ${guide.category}`);
    console.log(`Description: ${guide.description}`);
  }
}

main();
