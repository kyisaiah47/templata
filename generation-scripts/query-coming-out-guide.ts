import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  // List all guides
  const { data: allGuides, error: allGuidesError } = await supabase
    .from('guides')
    .select('id, title, category');

  if (allGuidesError) {
    console.error('Error fetching guides:', allGuidesError);
  } else {
    console.log('All Available Guides:');
    allGuides?.forEach(g => console.log(`- ${g.id}: ${g.title} (${g.category})`));
  }

  // Get guide details
  const { data: guide, error: guideError } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', 'coming-out')
    .maybeSingle();

  if (guideError) {
    console.error('\nError fetching coming-out guide:', guideError);
  } else if (!guide) {
    console.log('\n⚠️ coming-out guide does not exist in database');
  } else {
    console.log('\nGuide Details:');
    console.log(JSON.stringify(guide, null, 2));
  }

  // Check for existing questions
  const { data: questions, error: questionsError } = await supabase
    .from('questions')
    .select('id, question')
    .eq('template_id', 'coming-out');

  if (questionsError) {
    console.error('Error fetching questions:', questionsError);
  } else {
    console.log(`\nExisting questions: ${questions?.length || 0}`);
    if (questions && questions.length > 0) {
      console.log('First 3 questions:');
      questions.slice(0, 3).forEach(q => {
        console.log(`- ${q.id}: ${q.question.substring(0, 80)}...`);
      });
    }
  }
}

main();
