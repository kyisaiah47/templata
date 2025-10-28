import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function queryGuideAndQuestions() {
  // Get guide info
  const { data: guideData, error: guideError } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', 'retirement-transition')
    .single();

  if (guideError) {
    console.error('Error fetching guide:', guideError);
    process.exit(1);
  }

  console.log('=== GUIDE INFO ===');
  console.log(JSON.stringify(guideData, null, 2));

  // Check for existing questions
  const { data: questionsData, error: questionsError } = await supabase
    .from('questions')
    .select('id, question')
    .eq('template_id', 'retirement-transition');

  if (questionsError) {
    console.error('Error fetching questions:', questionsError);
    process.exit(1);
  }

  console.log('\n=== EXISTING QUESTIONS ===');
  console.log(`Found ${questionsData.length} existing questions`);
  if (questionsData.length > 0) {
    console.log('First 3:');
    questionsData.slice(0, 3).forEach(q => {
      console.log(`- ${q.id}: ${q.question.substring(0, 80)}...`);
    });
  }
}

queryGuideAndQuestions();
