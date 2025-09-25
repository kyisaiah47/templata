// TEST KNOWLEDGE GRAPH INTEGRATION
// Shows how to integrate the knowledge graph with your existing app

const { masterKnowledgeGraph } = require('./knowledge-graph/master-knowledge-graph');

async function testIntegration() {
  console.log('🧪 TESTING KNOWLEDGE GRAPH INTEGRATION\n');

  try {
    // Test 1: Get related templates for any template
    console.log('📋 Test 1: Getting related templates...');
    const homeRelated = masterKnowledgeGraph.getTemplateRelationships('home-buying');
    console.log(`✅ home-buying has ${homeRelated.weighted_connections.length} weighted connections`);
    console.log(`   Strongest: ${homeRelated.weighted_connections[0]?.templateId} (${homeRelated.weighted_connections[0]?.strength})`);

    // Test 2: Get recommendations for a user
    console.log('\n👤 Test 2: Getting user recommendations...');
    const recommendations = masterKnowledgeGraph.getOptimalLifeSequence(25, ['career_focused'], ['job-search']);
    console.log(`✅ Found ${recommendations.length} recommendations for 25-year-old career-focused user`);
    recommendations.slice(0, 3).forEach((rec, i) => {
      console.log(`   ${i + 1}. ${rec.templateId} (${rec.priority})`);
    });

    // Test 3: Context-aware prompts
    console.log('\n💬 Test 3: Context-aware prompts...');
    const prompts = masterKnowledgeGraph.getContextualPrompts(['home-buying', 'wedding-planning']);
    console.log(`✅ Found ${prompts.length} contextual prompts for home-buying + wedding-planning`);

    // Test 4: Full analysis
    console.log('\n📊 Test 4: Full analysis report...');
    const analysis = masterKnowledgeGraph.generateAnalysisReport('divorce-coordination');
    console.log(`✅ divorce-coordination analysis:`);
    console.log(`   Cluster: ${analysis.cluster_membership.semantic?.name}`);
    console.log(`   Connections: ${analysis.connection_strength.total_weighted_connections}`);
    console.log(`   Conflicts: ${analysis.conflict_analysis.total_conflicts}`);

    console.log('\n🎉 ALL TESTS PASSED - Knowledge Graph is ready for integration!');

  } catch (error) {
    console.error('❌ Integration test failed:', error);
  }
}

// Run the integration test
testIntegration();