import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Y3N0Y2FqY3RxYnhkZG9zZGJmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzk3OTcwNywiZXhwIjoyMDczNTU1NzA3fQ.PjcGj6uFV1M5yFju1YYvbxG3ld55llauMUPlrjow6I4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function query() {
  // Check for existing questions
  const { data: existingQuestions, error: qError } = await supabase
    .from('questions')
    .select('id, question')
    .eq('template_id', 'depression-recovery');

  console.log('=== EXISTING QUESTIONS ===');
  if (qError) {
    console.log('Error:', qError);
  } else {
    console.log('Count:', existingQuestions?.length || 0);
    if (existingQuestions && existingQuestions.length > 0) {
      console.log('First few:', existingQuestions.slice(0, 3));
    }
  }

  // Get guide context
  const { data: guide, error: gError } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', 'depression-recovery')
    .single();

  console.log('\n=== GUIDE CONTEXT ===');
  if (gError) {
    console.log('Error:', gError);
  } else {
    console.log(JSON.stringify(guide, null, 2));
  }
}

query();
