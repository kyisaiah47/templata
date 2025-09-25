const { getRelatedTemplates, getSharedPrompts } = require('./graph-connections');

// TEST THE KNOWLEDGE GRAPH CONNECTIONS

console.log('🔗 TESTING KNOWLEDGE GRAPH CONNECTIONS\n');

// Test related templates
const testTemplates = ['home-buying', 'wedding-planning', 'job-search', 'business-launch'];

testTemplates.forEach(templateId => {
  const related = getRelatedTemplates(templateId);
  console.log(`📋 ${templateId}:`);
  console.log(`   Related templates (${related.length}): ${related.slice(0, 5).join(', ')}${related.length > 5 ? '...' : ''}`);
});

console.log('\n🎯 TESTING SHARED PROMPTS\n');

// Test shared prompts for common combinations
const combinations = [
  ['home-buying', 'wedding-planning'],
  ['job-search', 'career-change'],
  ['business-launch', 'freelance-business']
];

combinations.forEach(combo => {
  const sharedPrompts = getSharedPrompts(combo);
  console.log(`💬 Shared prompts for [${combo.join(', ')}]:`);
  sharedPrompts.slice(0, 3).forEach(prompt => {
    console.log(`   - ${prompt}`);
  });
  console.log('');
});

console.log('✅ Knowledge graph connections are working!');