const fs = require('fs');

function doRealAnalysis() {
  console.log('🔍 REAL FUCKING ANALYSIS - WHAT ACTUALLY MATTERS');
  console.log('=================================================\n');

  const registryContent = fs.readFileSync('./src/registry/templates.ts', 'utf8');

  // Extract templates
  const templateMatches = registryContent.matchAll(/{\s*id:\s*"([^"]+)",\s*name:\s*capitalizeTemplateName\("([^"]+)"\),\s*description:\s*"([^"]+)",\s*category:\s*"([^"]+)"/gs);

  const templates = [];
  for (const match of templateMatches) {
    templates.push({
      id: match[1],
      name: match[2],
      category: match[4]
    });
  }

  console.log(`📊 TOTAL: ${templates.length} templates\n`);

  // Category breakdown
  const categories = {};
  templates.forEach(t => {
    categories[t.category] = (categories[t.category] || []).concat(t.name);
  });

  console.log('📋 CATEGORY BREAKDOWN:');
  Object.entries(categories)
    .sort(([,a], [,b]) => b.length - a.length)
    .forEach(([category, templateNames]) => {
      console.log(`\n${category}: ${templateNames.length} templates`);
      if (templateNames.length <= 5) {
        templateNames.forEach(name => console.log(`  - ${name}`));
      } else {
        templateNames.slice(0, 3).forEach(name => console.log(`  - ${name}`));
        console.log(`  ... and ${templateNames.length - 3} more`);
      }
    });

  // Find gaps and opportunities
  console.log('\n🎯 REAL INSIGHTS:');

  const smallCategories = Object.entries(categories).filter(([,templates]) => templates.length < 5);
  const bigCategories = Object.entries(categories).filter(([,templates]) => templates.length > 20);

  if (smallCategories.length > 0) {
    console.log('\n🚨 THIN CATEGORIES (need expansion):');
    smallCategories.forEach(([category, templates]) => {
      console.log(`  ${category}: only ${templates.length} templates`);
    });
  }

  if (bigCategories.length > 0) {
    console.log('\n📈 HEAVY CATEGORIES (maybe split?):');
    bigCategories.forEach(([category, templates]) => {
      console.log(`  ${category}: ${templates.length} templates - might need subcategories`);
    });
  }

  // Look for weird naming patterns
  console.log('\n🔤 NAMING ANALYSIS:');
  const shortNames = templates.filter(t => t.name.split(' ').length === 1);
  const longNames = templates.filter(t => t.name.split(' ').length > 4);

  if (shortNames.length > 0) {
    console.log(`Single-word templates: ${shortNames.length}`);
    shortNames.slice(0, 5).forEach(t => console.log(`  - ${t.name}`));
  }

  if (longNames.length > 0) {
    console.log(`Long-ass names (4+ words): ${longNames.length}`);
    longNames.slice(0, 5).forEach(t => console.log(`  - ${t.name}`));
  }

  // Check for template overlap/similarity
  console.log('\n🔄 POTENTIAL OVERLAPS:');
  const nameWords = new Map();
  templates.forEach(t => {
    t.name.toLowerCase().split(' ').forEach(word => {
      if (word.length > 3) { // Skip short words
        nameWords.set(word, (nameWords.get(word) || []).concat(t.name));
      }
    });
  });

  const commonWords = Array.from(nameWords.entries())
    .filter(([word, templates]) => templates.length > 3)
    .sort(([,a], [,b]) => b.length - a.length);

  commonWords.slice(0, 10).forEach(([word, templateNames]) => {
    console.log(`"${word}" appears in ${templateNames.length} templates:`);
    templateNames.slice(0, 4).forEach(name => console.log(`  - ${name}`));
    if (templateNames.length > 4) console.log(`  ... and ${templateNames.length - 4} more`);
    console.log('');
  });

  console.log('✅ DONE - These insights actually fucking matter for content strategy!');
}

doRealAnalysis();