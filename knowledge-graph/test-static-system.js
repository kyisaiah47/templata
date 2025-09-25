// TEST THE STATIC KNOWLEDGE GRAPH SYSTEM
// Verifies that the static graph system works without API calls

const fs = require('fs');
const { knowledgeGraph } = require('./use-static-graph');

console.log('🧪 TESTING STATIC KNOWLEDGE GRAPH SYSTEM\n');

// Test 1: Check if static files exist
console.log('📁 Test 1: Checking static files...');
const requiredFiles = [
  'template-connections.json',
  'cross-template-prompts.json',
  'life-os-config.json'
];

let filesExist = true;
requiredFiles.forEach(file => {
  const exists = fs.existsSync(`./${file}`);
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) filesExist = false;
});

if (!filesExist) {
  console.log('\n❌ Static files missing. Run this first:');
  console.log('   export ANTHROPIC_API_KEY="your_key"');
  console.log('   node generate-static-graph.js\n');
  process.exit(1);
}

// Test 2: Test loading the knowledge graph
console.log('\n🔄 Test 2: Loading knowledge graph...');
try {
  if (knowledgeGraph.isAvailable()) {
    knowledgeGraph.load();
    console.log('   ✅ Knowledge graph loaded successfully');
  } else {
    console.log('   ❌ Knowledge graph not available');
  }
} catch (error) {
  console.log('   ❌ Failed to load:', error.message);
}

// Test 3: Test related templates functionality
console.log('\n🔗 Test 3: Testing related templates...');
const testTemplates = ['home-buying', 'wedding-planning', 'job-search', 'business-launch'];

testTemplates.forEach(templateId => {
  try {
    const related = knowledgeGraph.getRelatedTemplates(templateId, 3);
    console.log(`   📋 ${templateId}: ${related.length} related templates found`);
    related.slice(0, 2).forEach(rel => {
      console.log(`      → ${rel.templateId} (${rel.relationship})`);
    });
  } catch (error) {
    console.log(`   ❌ ${templateId}: ${error.message}`);
  }
});

// Test 4: Test cross-template prompts
console.log('\n💭 Test 4: Testing cross-template prompts...');
const testCombinations = [
  ['home-buying', 'wedding-planning'],
  ['job-search', 'career-change'],
  ['business-launch', 'freelance-business']
];

testCombinations.forEach(combo => {
  try {
    const prompts = knowledgeGraph.getCrossTemplatePrompts(combo, 2);
    console.log(`   💬 [${combo.join(', ')}]: ${prompts.length} prompts found`);
    prompts.slice(0, 1).forEach(p => {
      console.log(`      "${p.prompt}" (${p.type})`);
    });
  } catch (error) {
    console.log(`   ❌ [${combo.join(', ')}]: ${error.message}`);
  }
});

// Test 5: Test influence relationships
console.log('\n🎯 Test 5: Testing influence relationships...');
const influentialTemplates = ['divorce-coordination', 'job-loss-recovery', 'retirement-planning'];

influentialTemplates.forEach(templateId => {
  try {
    const influenced = knowledgeGraph.getInfluencedTemplates(templateId);
    console.log(`   🎯 ${templateId}: affects ${influenced.length} templates`);
    influenced.slice(0, 2).forEach(inf => {
      console.log(`      → ${inf.templateId} (${inf.impact})`);
    });
  } catch (error) {
    console.log(`   ❌ ${templateId}: ${error.message}`);
  }
});

// Test 6: Test semantic clusters
console.log('\n🏷️ Test 6: Testing semantic clusters...');
try {
  const clusters = knowledgeGraph.getSemanticClusters();
  const clusterNames = Object.keys(clusters);
  console.log(`   🏷️ Found ${clusterNames.length} semantic clusters:`);
  clusterNames.slice(0, 3).forEach(name => {
    const cluster = clusters[name];
    console.log(`      → ${name}: ${cluster.templates?.length || 0} templates`);
  });
} catch (error) {
  console.log(`   ❌ Semantic clusters: ${error.message}`);
}

// Test 7: Test Life OS configuration
console.log('\n⚙️ Test 7: Testing Life OS configuration...');
try {
  const config = knowledgeGraph.getLifeOSConfig();
  console.log(`   ⚙️ Life OS config loaded: ${Object.keys(config || {}).length} sections`);
} catch (error) {
  console.log(`   ❌ Life OS config: ${error.message}`);
}

console.log('\n✅ STATIC KNOWLEDGE GRAPH SYSTEM TEST COMPLETE');
console.log('\n📊 System Status:');
console.log(`   • Files exist: ${filesExist ? 'YES' : 'NO'}`);
console.log(`   • System loaded: ${knowledgeGraph.loaded ? 'YES' : 'NO'}`);
console.log(`   • Ready for use: ${filesExist && knowledgeGraph.loaded ? 'YES' : 'NO'}`);

if (filesExist && knowledgeGraph.loaded) {
  console.log('\n🚀 Your app can now use pre-generated knowledge graphs!');
  console.log('   No API calls needed during runtime.');
} else {
  console.log('\n❌ System not ready. Generate static files first.');
}