import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  // First delete existing questions
  console.log('Deleting existing grief-loss questions...');
  const { error: deleteError } = await supabase
    .from('questions')
    .delete()
    .eq('template_id', 'grief-loss');

  if (deleteError) {
    console.error('Error deleting questions:', deleteError);
  } else {
    console.log('Deleted existing questions');
  }

  const questions = [
    // Part 1 will be added here
  ];

  console.log(`\nInserting ${questions.length} new questions...`);

  const { data, error } = await supabase
    .from('questions')
    .insert(questions);

  if (error) {
    console.error('Error inserting questions:', error);
    process.exit(1);
  }

  console.log('Successfully inserted all questions!');
}

main();
