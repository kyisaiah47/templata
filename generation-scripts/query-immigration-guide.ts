import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local file
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

console.log('Supabase URL:', supabaseUrl ? 'Found' : 'Missing');
console.log('Service Role Key:', supabaseKey ? 'Found' : 'Missing');

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const guideId = 'immigration-process';

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
    } else {
      console.log('No existing questions found.');
    }
  }

  // Get guide context
  const { data: guide, error: guideError } = await supabase
    .from('guides')
    .select('id, name, description, category, tags')
    .eq('id', guideId)
    .single();

  if (guideError) {
    console.error('Error fetching guide:', guideError);
  } else if (guide) {
    console.log(`\n=== Guide Context ===`);
    console.log(`ID: ${guide.id}`);
    console.log(`Name: ${guide.name}`);
    console.log(`Category: ${guide.category}`);
    console.log(`Description: ${guide.description}`);
    console.log(`Tags: ${guide.tags ? guide.tags.join(', ') : 'None'}`);
  } else {
    console.log('\n=== Guide Not Found ===');
    console.log(`No guide found with ID: ${guideId}`);
  }
}

main();
