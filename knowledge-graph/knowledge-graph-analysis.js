const fs = require('fs');
const path = require('path');

// Import the registries
const { templateRegistry } = require('./src/registry/templates.ts');
const { manualBlogPosts } = require('./src/registry/blogs.ts');
const { getPromptsByTemplate } = require('./src/registry/prompts.ts');

function analyzeKnowledgeGraph() {
  console.log('🧠 TEMPLATA KNOWLEDGE GRAPH ANALYSIS');
  console.log('=====================================\n');

  // 1. TEMPLATE ANALYSIS
  console.log('📋 TEMPLATE OVERVIEW');
  console.log(`Total Templates: ${templateRegistry.length}`);

  const categoryStats = {};
  const featuredCount = templateRegistry.filter(t => t.featured).length;
  const popularCount = templateRegistry.filter(t => t.popular).length;

  templateRegistry.forEach(template => {
    categoryStats[template.category] = (categoryStats[template.category] || 0) + 1;
  });

  console.log(`Featured Templates: ${featuredCount}`);
  console.log(`Popular Templates: ${popularCount}`);
  console.log('\nTemplates by Category:');
  Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });

  // 2. CONTENT GAPS ANALYSIS
  console.log('\n🔍 CONTENT GAPS ANALYSIS');

  const templatesWithoutResources = [];
  const templatesWithFewPrompts = [];

  templateRegistry.forEach(template => {
    // Check resources
    const resourceCount = template.template.resources?.length || 0;
    if (resourceCount === 0) {
      templatesWithoutResources.push(template.name);
    }

    // Check prompts (if we can access them)
    try {
      const prompts = getPromptsByTemplate(template.id);
      if (prompts.length < 10) {
        templatesWithFewPrompts.push(`${template.name} (${prompts.length} prompts)`);
      }
    } catch (e) {
      // Skip if can't access prompts for this template
    }
  });

  console.log(`Templates without resources: ${templatesWithoutResources.length}`);
  if (templatesWithoutResources.length > 0) {
    templatesWithoutResources.slice(0, 10).forEach(name => console.log(`  - ${name}`));
    if (templatesWithoutResources.length > 10) {
      console.log(`  ... and ${templatesWithoutResources.length - 10} more`);
    }
  }

  console.log(`Templates with few prompts (<10): ${templatesWithFewPrompts.length}`);
  if (templatesWithFewPrompts.length > 0) {
    templatesWithFewPrompts.slice(0, 10).forEach(name => console.log(`  - ${name}`));
  }

  // 3. ARTICLE ANALYSIS
  console.log('\n📚 ARTICLE ANALYSIS');
  console.log(`Total Articles: ${manualBlogPosts.length}`);

  const articleCategories = {};
  const articleTypes = {};
  const articleDifficulties = {};

  manualBlogPosts.forEach(article => {
    articleCategories[article.category] = (articleCategories[article.category] || 0) + 1;
    articleTypes[article.type] = (articleTypes[article.type] || 0) + 1;
    articleDifficulties[article.difficulty] = (articleDifficulties[article.difficulty] || 0) + 1;
  });

  console.log('\nArticles by Category:');
  Object.entries(articleCategories)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });

  console.log('\nArticles by Type:');
  Object.entries(articleTypes)
    .sort(([,a], [,b]) => b - a)
    .forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });

  // 4. CROSS-REGISTRY CONNECTIONS
  console.log('\n🔗 CROSS-REGISTRY CONNECTIONS');

  // Find template categories not covered in articles
  const templateCategories = new Set(templateRegistry.map(t => t.category));
  const articleCategorySet = new Set(Object.keys(articleCategories));

  const uncoveredCategories = [...templateCategories].filter(cat => !articleCategorySet.has(cat));
  const overCoveredCategories = [...articleCategorySet].filter(cat => !templateCategories.has(cat));

  console.log(`Template categories without articles: ${uncoveredCategories.length}`);
  uncoveredCategories.forEach(cat => console.log(`  - ${cat}`));

  console.log(`Article categories without templates: ${overCoveredCategories.length}`);
  overCoveredCategories.forEach(cat => console.log(`  - ${cat}`));

  // 5. RECOMMENDATIONS
  console.log('\n💡 RECOMMENDATIONS');

  // Find underrepresented categories
  const avgTemplatesPerCategory = templateRegistry.length / Object.keys(categoryStats).length;
  const underrepresentedCategories = Object.entries(categoryStats)
    .filter(([, count]) => count < avgTemplatesPerCategory * 0.5)
    .map(([category]) => category);

  if (underrepresentedCategories.length > 0) {
    console.log('Underrepresented template categories (need more templates):');
    underrepresentedCategories.forEach(cat => console.log(`  - ${cat} (${categoryStats[cat]} templates)`));
  }

  // Find categories with many templates but few articles
  const articleCoverage = Object.entries(categoryStats).map(([category, templateCount]) => {
    const articleCount = articleCategories[category] || 0;
    return {
      category,
      templateCount,
      articleCount,
      ratio: articleCount / templateCount
    };
  }).filter(item => item.ratio < 0.5 && item.templateCount > 3);

  if (articleCoverage.length > 0) {
    console.log('\nCategories needing more articles (high templates, low articles):');
    articleCoverage
      .sort((a, b) => a.ratio - b.ratio)
      .forEach(item => {
        console.log(`  - ${item.category}: ${item.templateCount} templates, ${item.articleCount} articles (ratio: ${item.ratio.toFixed(2)})`);
      });
  }

  console.log('\n✅ Analysis complete! Use these insights for content planning.');
}

// Run the analysis
try {
  analyzeKnowledgeGraph();
} catch (error) {
  console.error('Error running analysis:', error);
  console.log('Note: This script may need adjustments based on your exact registry structure.');
}