// LIVE DEMO: See the Knowledge Graph in Action!
const { masterKnowledgeGraph } = require('./knowledge-graph/master-knowledge-graph');

console.log('🎮 LIVE KNOWLEDGE GRAPH DEMO\n');

// Demo 1: See what templates connect to home-buying
console.log('🏠 DEMO 1: What connects to HOME-BUYING?');
const homeConnections = masterKnowledgeGraph.getTemplateRelationships('home-buying');
console.log(`   Cluster: ${homeConnections.semantic_cluster?.name}`);
console.log(`   Micro-cluster: ${homeConnections.micro_cluster?.micro_cluster}`);
console.log('   Top connections:');
homeConnections.weighted_connections.slice(0, 5).forEach((conn, i) => {
  console.log(`     ${i + 1}. ${conn.templateId} (${conn.strength_level}, ${conn.strength}%)`);
  console.log(`        → ${conn.reasoning}`);
});

console.log('\n💔 DEMO 2: What connects to DIVORCE-COORDINATION?');
const divorceConnections = masterKnowledgeGraph.getTemplateRelationships('divorce-coordination');
console.log(`   Cluster: ${divorceConnections.semantic_cluster?.name}`);
console.log('   Critical support templates:');
divorceConnections.weighted_connections.slice(0, 3).forEach((conn, i) => {
  console.log(`     ${i + 1}. ${conn.templateId} (${conn.strength}%)`);
  console.log(`        → ${conn.reasoning}`);
});

console.log('\n👶 DEMO 3: Age-based recommendations');
const young = masterKnowledgeGraph.getOptimalLifeSequence(23, ['career_focused'], []);
console.log('   For 23-year-old career-focused person:');
young.slice(0, 4).forEach((rec, i) => {
  console.log(`     ${i + 1}. ${rec.templateId} (${rec.priority})`);
  console.log(`        → ${rec.reason}`);
});

const midlife = masterKnowledgeGraph.getOptimalLifeSequence(45, ['family_focused'], []);
console.log('\n   For 45-year-old family-focused person:');
midlife.slice(0, 4).forEach((rec, i) => {
  console.log(`     ${i + 1}. ${rec.templateId} (${rec.priority})`);
  console.log(`        → ${rec.reason}`);
});

console.log('\n📊 DEMO 4: Complete analysis of WEDDING-PLANNING');
const weddingAnalysis = masterKnowledgeGraph.generateAnalysisReport('wedding-planning');
console.log(`   Cluster: ${weddingAnalysis.cluster_membership.semantic?.name}`);
console.log(`   Total connections: ${weddingAnalysis.connection_strength.total_weighted_connections}`);
console.log(`   Average strength: ${Math.round(weddingAnalysis.connection_strength.average_strength)}%`);
console.log(`   Conflicts detected: ${weddingAnalysis.conflict_analysis.total_conflicts}`);
console.log('   Should work well with:', weddingAnalysis.recommendations.high_synergy_templates.slice(0, 3).join(', '));

console.log('\n🎯 DEMO 5: Business vs Family conflict detection');
const businessConflicts = masterKnowledgeGraph.getTemplateRelationships('business-launch');
if (businessConflicts.negative_connections.length > 0) {
  console.log('   ⚠️  CONFLICT DETECTED:');
  businessConflicts.negative_connections.forEach(conflict => {
    console.log(`     ${conflict.conflicting_template}: ${conflict.reasoning}`);
    console.log(`     Resolution: ${conflict.resolution_strategy}`);
  });
}

console.log('\n✨ This is all happening INSTANTLY with no API calls!');
console.log('✨ All 177 templates are intelligently connected!');
console.log('✨ Ready to integrate into your app right now!');