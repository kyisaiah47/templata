import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function queryGuide() {
  // Get guide info
  const { data: guide, error: guideError } = await supabase
    .from('guides')
    .select('*')
    .eq('id', 'productivity-system')
    .single();

  if (guideError) {
    console.error('Error fetching guide:', guideError);
  } else {
    console.log('\n=== Guide Info ===');
    console.log('ID:', guide.id);
    console.log('Title:', guide.title);
    console.log('Description:', guide.description);
    console.log('Category:', guide.category);
  }

  // Check for existing questions
  const { data: questions, error: questionsError } = await supabase
    .from('questions')
    .select('id, question, category')
    .eq('template_id', 'productivity-system')
    .order('question_number');

  if (questionsError) {
    console.error('Error fetching questions:', questionsError);
  } else {
    console.log('\n=== Existing Questions ===');
    console.log(`Total: ${questions.length}`);
    if (questions.length > 0) {
      questions.forEach(q => console.log(`- ${q.id}: ${q.question.substring(0, 80)}...`));
    } else {
      console.log('No existing questions found.');
    }
  }
}

queryGuide();
