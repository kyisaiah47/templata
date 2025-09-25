#!/usr/bin/env node

// Audit template distribution by category to find gaps
const fs = require('fs');
const path = require('path');

function readRegistryFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

function extractCategoryData(registryContent) {
  const categories = {};

  // Extract template data from registry
  const templateMatches = registryContent.match(/\{[^}]*id:\s*['"]([^'"]+)['"][^}]*category:\s*['"]([^'"]+)['"][^}]*\}/g);

  if (templateMatches) {
    templateMatches.forEach(match => {
      const idMatch = match.match(/id:\s*['"]([^'"]+)['"]/);
      const categoryMatch = match.match(/category:\s*['"]([^'"]+)['"]/);

      if (idMatch && categoryMatch) {
        const templateId = idMatch[1];
        const category = categoryMatch[1];

        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(templateId);
      }
    });
  }

  return categories;
}

function analyzeGaps(categories) {
  const gaps = {
    underrepresented: [],
    missing: [],
    suggestions: []
  };

  // Categories that should have more templates
  Object.entries(categories).forEach(([category, templates]) => {
    if (templates.length < 10) {
      gaps.underrepresented.push({
        category,
        count: templates.length,
        templates
      });
    }
  });

  // Common life categories we might be missing
  const expectedCategories = [
    'Daily Life & Organization',
    'Time Management',
    'Personal Productivity',
    'Spiritual & Religious',
    'Recreation & Entertainment',
    'Emergency Preparedness',
    'Legal Planning',
    'Insurance & Protection',
    'Social Connections',
    'Community Involvement',
    'Volunteer Work',
    'Learning & Development',
    'Cultural Exploration',
    'Environmental Sustainability',
    'Technology & Digital Life',
    'Transportation',
    'Food & Nutrition',
    'Sleep & Rest',
    'Pain Management',
    'Medical Planning',
    'Accessibility Planning'
  ];

  expectedCategories.forEach(category => {
    if (!categories[category]) {
      gaps.missing.push(category);
    }
  });

  return gaps;
}

function suggestNewTemplates(gaps, categories) {
  const suggestions = [];

  // Suggestions for underrepresented categories
  gaps.underrepresented.forEach(({ category, count }) => {
    switch (category) {
      case 'Personal Life':
        suggestions.push(
          'daily-routine-optimization',
          'time-management-mastery',
          'personal-organization-system',
          'work-life-balance',
          'morning-routine-creation',
          'evening-routine-planning',
          'seasonal-life-planning',
          'goal-setting-framework'
        );
        break;
      case 'Health & Wellness':
        suggestions.push(
          'sleep-optimization',
          'nutrition-planning',
          'chronic-pain-management',
          'preventive-health-planning',
          'mental-wellness-routine',
          'physical-therapy-journey',
          'medical-appointment-management',
          'health-emergency-planning'
        );
        break;
      case 'Technology':
        suggestions.push(
          'digital-declutter',
          'cybersecurity-planning',
          'tech-skills-development',
          'online-privacy-management',
          'digital-legacy-planning',
          'remote-work-setup',
          'social-media-detox',
          'tech-addiction-recovery'
        );
        break;
      case 'Education':
        suggestions.push(
          'lifelong-learning-plan',
          'skill-certification-path',
          'online-education-strategy',
          'professional-development-plan',
          'knowledge-sharing-setup',
          'mentorship-program',
          'teaching-skills-development',
          'research-project-planning'
        );
        break;
    }
  });

  // Suggestions for missing categories
  const missingSuggestions = {
    'Daily Life & Organization': [
      'morning-routine-optimization',
      'evening-routine-planning',
      'weekend-planning',
      'household-management',
      'personal-space-organization',
      'digital-life-organization'
    ],
    'Emergency Preparedness': [
      'natural-disaster-prep',
      'medical-emergency-planning',
      'financial-emergency-fund',
      'family-emergency-plan',
      'power-outage-preparation',
      'evacuation-planning'
    ],
    'Legal Planning': [
      'will-and-testament-planning',
      'power-of-attorney-setup',
      'legal-document-organization',
      'contract-management',
      'dispute-resolution-prep',
      'legal-compliance-planning'
    ],
    'Social Connections': [
      'friendship-building',
      'community-integration',
      'social-skills-development',
      'networking-outside-work',
      'family-reunion-planning',
      'social-event-hosting'
    ],
    'Spiritual & Religious': [
      'faith-journey-planning',
      'religious-practice-routine',
      'spiritual-retreat-planning',
      'meditation-practice-setup',
      'religious-education-path',
      'spiritual-community-building'
    ]
  };

  gaps.missing.forEach(category => {
    if (missingSuggestions[category]) {
      suggestions.push(...missingSuggestions[category]);
    }
  });

  return [...new Set(suggestions)]; // Remove duplicates
}

function main() {
  console.log('🔍 Auditing Template Category Distribution');
  console.log('=========================================\n');

  // Read registry file
  const registryPath = path.join(__dirname, '..', 'src/registry/templates.ts');
  const registryContent = readRegistryFile(registryPath);

  if (!registryContent) {
    console.error('Could not read registry file');
    return;
  }

  // Extract category data
  const categories = extractCategoryData(registryContent);

  // Show current distribution
  console.log('📊 CURRENT CATEGORY DISTRIBUTION');
  console.log('=================================');
  Object.entries(categories)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([category, templates]) => {
      const status = templates.length < 5 ? '⚠️ ' : templates.length < 10 ? '🟡' : '✅';
      console.log(`${status} ${category}: ${templates.length} templates`);
    });

  console.log(`\nTotal categories: ${Object.keys(categories).length}`);
  console.log(`Total templates: ${Object.values(categories).flat().length}`);

  // Analyze gaps
  const gaps = analyzeGaps(categories);

  console.log('\n🚨 UNDERREPRESENTED CATEGORIES');
  console.log('==============================');
  gaps.underrepresented.forEach(({ category, count, templates }) => {
    console.log(`\n${category} (${count} templates):`);
    templates.forEach(template => console.log(`  - ${template}`));
  });

  console.log('\n❌ MISSING CATEGORIES');
  console.log('=====================');
  gaps.missing.forEach(category => {
    console.log(`- ${category}`);
  });

  // Generate suggestions
  const suggestions = suggestNewTemplates(gaps, categories);

  console.log('\n💡 SUGGESTED NEW TEMPLATES');
  console.log('===========================');
  console.log(`${suggestions.length} new templates to consider:\n`);

  suggestions.slice(0, 50).forEach((template, index) => {
    console.log(`${(index + 1).toString().padStart(2)}. ${template}`);
  });

  if (suggestions.length > 50) {
    console.log(`... and ${suggestions.length - 50} more`);
  }

  // Summary
  console.log('\n📋 SUMMARY');
  console.log('==========');
  console.log(`- ${gaps.underrepresented.length} underrepresented categories (< 10 templates)`);
  console.log(`- ${gaps.missing.length} completely missing categories`);
  console.log(`- ${suggestions.length} new template suggestions`);
  console.log(`- Target: Add 50-100 new templates to balance coverage`);
}

if (require.main === module) {
  main();
}

module.exports = { extractCategoryData, analyzeGaps, suggestNewTemplates };