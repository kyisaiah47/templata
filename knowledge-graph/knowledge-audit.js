const fs = require('fs');
const path = require('path');

function analyzeTemplateRegistry() {
  console.log('🧠 TEMPLATA KNOWLEDGE GRAPH ANALYSIS');
  console.log('=====================================\n');

  // Read the template registry file
  const registryPath = './src/registry/templates.ts';
  const registryContent = fs.readFileSync(registryPath, 'utf8');

  // Extract template entries using regex
  const templateMatches = registryContent.matchAll(/{\s*id:\s*"([^"]+)",\s*name:\s*capitalizeTemplateName\("([^"]+)"\),\s*description:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*icon:\s*"[^"]+",\s*url:\s*"[^"]+",\s*popular:\s*(true|false),\s*featured:\s*(true|false)/gs);

  const templates = [];
  for (const match of templateMatches) {
    templates.push({
      id: match[1],
      name: match[2],
      description: match[3],
      category: match[4],
      popular: match[5] === 'true',
      featured: match[6] === 'true'
    });
  }

  // 1. TEMPLATE ANALYSIS
  console.log('📋 TEMPLATE OVERVIEW');
  console.log(`Total Templates: ${templates.length}`);

  const categoryStats = {};
  const featuredCount = templates.filter(t => t.featured).length;
  const popularCount = templates.filter(t => t.popular).length;

  templates.forEach(template => {
    categoryStats[template.category] = (categoryStats[template.category] || 0) + 1;
  });

  console.log(`Featured Templates: ${featuredCount}`);
  console.log(`Popular Templates: ${popularCount}`);
  console.log('\n📊 Templates by Category:');
  Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count} templates`);
    });

  // 2. FEATURED & POPULAR ANALYSIS
  console.log('\n⭐ FEATURED TEMPLATES:');
  templates.filter(t => t.featured).forEach(t => {
    console.log(`  - ${t.name} (${t.category})`);
  });

  console.log('\n🔥 POPULAR TEMPLATES:');
  templates.filter(t => t.popular).forEach(t => {
    console.log(`  - ${t.name} (${t.category})`);
  });

  // 3. CATEGORY ANALYSIS
  console.log('\n🔍 CATEGORY INSIGHTS');

  const avgTemplatesPerCategory = templates.length / Object.keys(categoryStats).length;
  console.log(`Average templates per category: ${avgTemplatesPerCategory.toFixed(1)}`);

  const underrepresented = Object.entries(categoryStats)
    .filter(([, count]) => count < avgTemplatesPerCategory * 0.5)
    .sort(([,a], [,b]) => a - b);

  const overrepresented = Object.entries(categoryStats)
    .filter(([, count]) => count > avgTemplatesPerCategory * 1.5)
    .sort(([,a], [,b]) => b - a);

  if (underrepresented.length > 0) {
    console.log('\n⚠️  UNDERREPRESENTED CATEGORIES (need more templates):');
    underrepresented.forEach(([category, count]) => {
      console.log(`  - ${category}: ${count} templates (${(avgTemplatesPerCategory - count).toFixed(1)} below average)`);
    });
  }

  if (overrepresented.length > 0) {
    console.log('\n✅ WELL-REPRESENTED CATEGORIES:');
    overrepresented.forEach(([category, count]) => {
      console.log(`  - ${category}: ${count} templates (${(count - avgTemplatesPerCategory).toFixed(1)} above average)`);
    });
  }

  // 4. DISTRIBUTION ANALYSIS
  console.log('\n📈 DISTRIBUTION INSIGHTS');

  const categoryDistribution = Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .map(([category, count], index) => {
      const percentage = ((count / templates.length) * 100).toFixed(1);
      return { category, count, percentage, rank: index + 1 };
    });

  console.log('Top categories by template count:');
  categoryDistribution.slice(0, 5).forEach(item => {
    console.log(`  ${item.rank}. ${item.category}: ${item.count} templates (${item.percentage}%)`);
  });

  console.log('\nSmallest categories:');
  categoryDistribution.slice(-3).forEach(item => {
    console.log(`  ${item.rank}. ${item.category}: ${item.count} templates (${item.percentage}%)`);
  });

  // 5. FEATURE FLAGS ANALYSIS
  console.log('\n🏷️  FEATURE FLAGS ANALYSIS');

  const categoriesWithFeatured = {};
  const categoriesWithPopular = {};

  templates.forEach(template => {
    if (template.featured) {
      categoriesWithFeatured[template.category] = (categoriesWithFeatured[template.category] || 0) + 1;
    }
    if (template.popular) {
      categoriesWithPopular[template.category] = (categoriesWithPopular[template.category] || 0) + 1;
    }
  });

  console.log('Featured templates by category:');
  Object.entries(categoriesWithFeatured)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      const total = categoryStats[category];
      const percentage = ((count / total) * 100).toFixed(1);
      console.log(`  - ${category}: ${count}/${total} (${percentage}%)`);
    });

  console.log('\nPopular templates by category:');
  Object.entries(categoriesWithPopular)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      const total = categoryStats[category];
      const percentage = ((count / total) * 100).toFixed(1);
      console.log(`  - ${category}: ${count}/${total} (${percentage}%)`);
    });

  // 6. RECOMMENDATIONS
  console.log('\n💡 RECOMMENDATIONS');

  console.log('\n🎯 Content Strategy:');

  // Categories with no featured templates
  const categoriesWithoutFeatured = Object.keys(categoryStats).filter(cat => !categoriesWithFeatured[cat]);
  if (categoriesWithoutFeatured.length > 0) {
    console.log('Categories missing featured templates:');
    categoriesWithoutFeatured.forEach(cat => {
      console.log(`  - ${cat} (${categoryStats[cat]} templates, 0 featured)`);
    });
  }

  // Suggest balancing
  if (underrepresented.length > 0) {
    console.log('\nSuggested template additions:');
    underrepresented.forEach(([category, count]) => {
      const suggested = Math.ceil(avgTemplatesPerCategory - count);
      console.log(`  - Add ${suggested} templates to "${category}"`);
    });
  }

  console.log('\n✅ Analysis complete!');
  console.log('\nNext steps:');
  console.log('1. Review underrepresented categories for expansion');
  console.log('2. Add featured templates to categories that lack them');
  console.log('3. Consider splitting overrepresented categories');
  console.log('4. Run article and prompt analysis to find content gaps');
}

// Run the analysis
try {
  analyzeTemplateRegistry();
} catch (error) {
  console.error('Error running analysis:', error.message);
}