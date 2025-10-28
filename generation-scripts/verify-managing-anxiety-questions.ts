import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyQuestions() {
  const { data, error } = await supabase
    .from('questions')
    .select('category')
    .eq('template_id', 'managing-anxiety');

  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  const counts = data.reduce((acc: any, q: any) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  const total = data.length;
  console.log('Total questions:', total);
  console.log('\nBreakdown:');
  console.log('Foundation (reflection):', counts.reflection || 0, '(' + ((counts.reflection || 0) / total * 100).toFixed(1) + '%)');
  console.log('Research:', counts.research || 0, '(' + ((counts.research || 0) / total * 100).toFixed(1) + '%)');
  console.log('Planning:', counts.planning || 0, '(' + ((counts.planning || 0) / total * 100).toFixed(1) + '%)');
  console.log('Action:', counts.action || 0, '(' + ((counts.action || 0) / total * 100).toFixed(1) + '%)');
}

verifyQuestions().catch(console.error);
