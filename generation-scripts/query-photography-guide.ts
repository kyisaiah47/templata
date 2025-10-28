import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function queryPhotographyGuide() {
  // Check for existing questions
  const { data: existingQuestions, error: questionsError } = await supabase
    .from('questions')
    .select('id, question')
    .eq('template_id', 'photography-hobby');

  if (questionsError) {
    console.error('Error querying questions:', questionsError);
  } else {
    console.log(`\n=== Existing Questions ===`);
    console.log(`Found ${existingQuestions.length} existing questions`);
    if (existingQuestions.length > 0) {
      existingQuestions.forEach(q => console.log(`- ${q.id}`));
    }
  }

  // Get guide context
  const { data: guide, error: guideError } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', 'photography-hobby')
    .single();

  if (guideError) {
    console.error('Error querying guide:', guideError);
  } else {
    console.log(`\n=== Guide Context ===`);
    console.log(`ID: ${guide.id}`);
    console.log(`Title: ${guide.title}`);
    console.log(`Description: ${guide.description}`);
    console.log(`Category: ${guide.category}`);
  }
}

queryPhotographyGuide();
