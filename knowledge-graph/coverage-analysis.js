// COVERAGE ANALYSIS - Find gaps in knowledge graph connections

const fs = require('fs');

function analyzeCoverage() {
  console.log('🔍 ANALYZING KNOWLEDGE GRAPH COVERAGE\n');

  // Read all templates from registry
  const registryContent = fs.readFileSync('../src/registry/templates.ts', 'utf8');
  const templateMatches = registryContent.matchAll(/{\\s*id:\\s*"([^"]+)"/g);

  const allTemplates = [];
  for (const match of templateMatches) {
    allTemplates.push(match[1]);
  }

  // Read current connections
  const connections = JSON.parse(fs.readFileSync('./template-connections.json', 'utf8'));

  console.log(`📊 Total templates: ${allTemplates.length}`);

  // Analyze cluster coverage
  console.log('\\n🏷️ CLUSTER COVERAGE:');
  const clusteredTemplates = new Set();
  Object.entries(connections.semantic_clusters).forEach(([name, cluster]) => {
    console.log(`   ${name}: ${cluster.templates.length} templates`);
    cluster.templates.forEach(t => clusteredTemplates.add(t));
  });

  const unclustered = allTemplates.filter(t => !clusteredTemplates.has(t));
  console.log(`\\n❌ UNCLUSTERED TEMPLATES (${unclustered.length}):`);
  unclustered.slice(0, 20).forEach(t => console.log(`   - ${t}`));
  if (unclustered.length > 20) console.log(`   ... and ${unclustered.length - 20} more`);

  // Analyze cross-connection coverage
  console.log('\\n🔗 CROSS-CONNECTION COVERAGE:');
  const connectedTemplates = new Set(Object.keys(connections.cross_connections));
  console.log(`   Templates with explicit connections: ${connectedTemplates.size}`);

  const unconnected = allTemplates.filter(t => !connectedTemplates.has(t));
  console.log(`\\n❌ UNCONNECTED TEMPLATES (${unconnected.length}):`);
  unconnected.slice(0, 15).forEach(t => console.log(`   - ${t}`));
  if (unconnected.length > 15) console.log(`   ... and ${unconnected.length - 15} more`);

  // Analyze sequence coverage
  console.log('\\n📅 LIFE SEQUENCE COVERAGE:');
  const sequencedTemplates = new Set();
  connections.life_sequences.forEach(seq => {
    seq.sequence.forEach(t => sequencedTemplates.add(t));
  });
  console.log(`   Templates in sequences: ${sequencedTemplates.size}`);

  // Find potential missing connections
  console.log('\\n🧠 SUGGESTED IMPROVEMENTS:');

  // Templates that appear in many cluster names - should be highly connected
  const keywordTemplates = allTemplates.filter(t =>
    t.includes('planning') || t.includes('management') || t.includes('business') ||
    t.includes('health') || t.includes('finance') || t.includes('career')
  );

  const underconnectedKeywords = keywordTemplates.filter(t => !connectedTemplates.has(t));
  console.log(`   Key templates missing connections (${underconnectedKeywords.length}):`);
  underconnectedKeywords.slice(0, 10).forEach(t => console.log(`   - ${t}`));

  // Find templates that should probably be in clusters
  const businessTemplates = allTemplates.filter(t =>
    t.includes('business') || t.includes('startup') || t.includes('entrepreneur') ||
    t.includes('freelance') || t.includes('consulting')
  );
  const businessInCluster = businessTemplates.filter(t => clusteredTemplates.has(t));
  console.log(`\\n   Business templates: ${businessTemplates.length} total, ${businessInCluster.length} clustered`);

  const healthTemplates = allTemplates.filter(t =>
    t.includes('health') || t.includes('mental') || t.includes('medical') ||
    t.includes('wellness') || t.includes('fitness') || t.includes('recovery')
  );
  const healthInCluster = healthTemplates.filter(t => clusteredTemplates.has(t));
  console.log(`   Health templates: ${healthTemplates.length} total, ${healthInCluster.length} clustered`);

  const financeTemplates = allTemplates.filter(t =>
    t.includes('finance') || t.includes('money') || t.includes('budget') ||
    t.includes('investment') || t.includes('debt') || t.includes('retirement')
  );
  const financeInCluster = financeTemplates.filter(t => clusteredTemplates.has(t));
  console.log(`   Finance templates: ${financeTemplates.length} total, ${financeInCluster.length} clustered`);

  // Coverage percentage
  const totalCoverage = (clusteredTemplates.size / allTemplates.length * 100).toFixed(1);
  console.log(`\\n📈 OVERALL COVERAGE: ${totalCoverage}% of templates are in semantic clusters`);

  // Return data for further analysis
  return {
    total: allTemplates.length,
    clustered: clusteredTemplates.size,
    connected: connectedTemplates.size,
    sequenced: sequencedTemplates.size,
    unclustered,
    unconnected,
    suggestions: {
      business: businessTemplates.filter(t => !clusteredTemplates.has(t)),
      health: healthTemplates.filter(t => !clusteredTemplates.has(t)),
      finance: financeTemplates.filter(t => !clusteredTemplates.has(t)),
      keywords: underconnectedKeywords
    }
  };
}

// Run analysis
if (require.main === module) {
  const results = analyzeCoverage();

  console.log('\\n🎯 NEXT ACTIONS:');
  console.log('1. Add missing templates to semantic clusters');
  console.log('2. Create cross-connections for high-value templates');
  console.log('3. Add more life sequences');
  console.log('4. Consider creating micro-clusters for granular connections');
}

module.exports = { analyzeCoverage };