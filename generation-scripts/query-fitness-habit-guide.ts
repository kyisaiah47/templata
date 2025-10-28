import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function queryGuide() {
  // Check for existing questions
  const { data: existingQuestions, error: questionsError } = await supabase
    .from('questions')
    .select('id, question')
    .eq('template_id', 'fitness-habit');

  if (questionsError) {
    console.error('Error querying questions:', questionsError);
  } else {
    console.log('\n=== Existing Questions ===');
    console.log(`Found ${existingQuestions?.length || 0} existing questions`);
    if (existingQuestions && existingQuestions.length > 0) {
      console.log('Will need to delete these before inserting new ones.');
    }
  }

  // Get guide context
  const { data: guide, error: guideError } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', 'fitness-habit')
    .single();

  if (guideError) {
    console.error('Error querying guide:', guideError);
  } else {
    console.log('\n=== Guide Context ===');
    console.log('ID:', guide.id);
    console.log('Title:', guide.title);
    console.log('Description:', guide.description);
    console.log('Category:', guide.category);
  }
}

queryGuide();
