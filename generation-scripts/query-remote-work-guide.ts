import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function queryGuide() {
  const { data: guide } = await supabase
    .from('guides')
    .select('id, title, description, category')
    .eq('id', 'remote-work')
    .single();

  const { data: questions } = await supabase
    .from('questions')
    .select('id, question')
    .eq('template_id', 'remote-work');

  console.log('GUIDE:', JSON.stringify(guide, null, 2));
  console.log('\nEXISTING QUESTIONS:', questions?.length || 0);
  if (questions && questions.length > 0) {
    console.log('Sample:', questions[0]);
  }
}

queryGuide();
