// AI-ENHANCED KNOWLEDGE GRAPH CONNECTIONS
// Uses semantic analysis to find smarter template relationships

const fs = require('fs');

// Semantic keywords for AI-powered clustering
const SEMANTIC_CLUSTERS = {
  life_transitions: ["change", "transition", "new", "first", "beginning", "start", "shift", "move"],
  financial_planning: ["money", "budget", "finance", "cost", "investment", "savings", "debt", "income"],
  relationship_dynamics: ["family", "partner", "relationship", "marriage", "divorce", "support", "communication"],
  health_wellness: ["health", "mental", "physical", "wellness", "medical", "recovery", "illness", "care"],
  professional_growth: ["career", "job", "work", "business", "professional", "skill", "management", "leadership"],
  creative_expression: ["art", "creative", "design", "writing", "music", "content", "expression", "artistic"],
  learning_development: ["education", "learning", "study", "college", "school", "skill", "training", "development"],
  crisis_management: ["crisis", "emergency", "disaster", "recovery", "support", "help", "management", "navigation"]
};

// AI-powered template similarity scoring
function calculateTemplateSimilarity(template1, template2) {
  const words1 = template1.name.toLowerCase().split(/[\s-]+/);
  const words2 = template2.name.toLowerCase().split(/[\s-]+/);

  let score = 0;

  // Direct word matches (high weight)
  const commonWords = words1.filter(word => words2.includes(word));
  score += commonWords.length * 3;

  // Semantic cluster matches (medium weight)
  Object.values(SEMANTIC_CLUSTERS).forEach(cluster => {
    const template1InCluster = words1.some(word => cluster.includes(word));
    const template2InCluster = words2.some(word => cluster.includes(word));
    if (template1InCluster && template2InCluster) {
      score += 2;
    }
  });

  // Category match (low weight)
  if (template1.category === template2.category) {
    score += 1;
  }

  return score;
}

// AI-powered prompt theme extraction
function extractPromptThemes(templateName, templateCategory) {
  const themes = [];
  const words = templateName.toLowerCase().split(/[\s-]+/);

  // Financial theme detection
  if (words.some(w => ['budget', 'money', 'financial', 'cost', 'investment'].includes(w)) ||
      templateCategory.includes('Finance')) {
    themes.push('financial_planning');
  }

  // Relationship theme detection
  if (words.some(w => ['family', 'relationship', 'marriage', 'partner', 'divorce'].includes(w)) ||
      templateCategory.includes('Relationships')) {
    themes.push('relationship_impact');
  }

  // Transition theme detection
  if (words.some(w => ['transition', 'change', 'first', 'new', 'career'].includes(w)) ||
      templateCategory.includes('Transitions')) {
    themes.push('life_transitions');
  }

  // Health theme detection
  if (words.some(w => ['health', 'mental', 'medical', 'wellness', 'recovery'].includes(w)) ||
      templateCategory.includes('Health')) {
    themes.push('health_wellness');
  }

  // Planning theme detection
  if (words.some(w => ['planning', 'preparation', 'strategy', 'management'].includes(w))) {
    themes.push('planning_strategy');
  }

  return themes;
}

// Generate AI-powered connections
function generateAIConnections(templates) {
  const connections = {
    similarity_based: {},
    theme_based: {},
    ai_recommended: {}
  };

  // Calculate all pairwise similarities
  templates.forEach((template1, i) => {
    connections.similarity_based[template1.id] = [];

    templates.forEach((template2, j) => {
      if (i !== j) {
        const similarity = calculateTemplateSimilarity(template1, template2);
        if (similarity >= 3) { // Threshold for meaningful connection
          connections.similarity_based[template1.id].push({
            templateId: template2.id,
            score: similarity,
            reason: `Similarity score: ${similarity}`
          });
        }
      }
    });

    // Sort by similarity score
    connections.similarity_based[template1.id].sort((a, b) => b.score - a.score);
  });

  // Generate theme-based connections
  templates.forEach(template => {
    const themes = extractPromptThemes(template.name, template.category);
    connections.theme_based[template.id] = themes;
  });

  // AI recommendations for cross-template prompts
  templates.forEach(template => {
    const themes = connections.theme_based[template.id];
    const recommendations = [];

    if (themes.includes('financial_planning')) {
      recommendations.push("What's your budget for this decision?");
      recommendations.push("How does this fit into your long-term financial goals?");
    }

    if (themes.includes('relationship_impact')) {
      recommendations.push("How will this affect your relationships?");
      recommendations.push("Who needs to be involved in this decision?");
    }

    if (themes.includes('life_transitions')) {
      recommendations.push("What support do you need during this change?");
      recommendations.push("How will you measure success in this transition?");
    }

    if (themes.includes('planning_strategy')) {
      recommendations.push("What's your timeline for this decision?");
      recommendations.push("What could go wrong and how will you handle it?");
    }

    connections.ai_recommended[template.id] = recommendations;
  });

  return connections;
}

// Smart prompt suggestion based on user's active templates
function suggestCrossTemplatePrompts(activeTemplates) {
  const allThemes = new Set();

  // Collect all themes from active templates
  activeTemplates.forEach(templateName => {
    const themes = extractPromptThemes(templateName, ''); // Category not needed for this
    themes.forEach(theme => allThemes.add(theme));
  });

  const suggestions = [];

  // Generate cross-cutting prompts based on theme overlap
  if (allThemes.has('financial_planning') && allThemes.has('relationship_impact')) {
    suggestions.push("How do your financial decisions align with your relationship goals?");
    suggestions.push("What financial discussions do you need to have with your partner?");
  }

  if (allThemes.has('life_transitions') && allThemes.has('planning_strategy')) {
    suggestions.push("How will you manage the uncertainty during this transition?");
    suggestions.push("What milestones will help you track progress through this change?");
  }

  if (allThemes.has('health_wellness') && allThemes.has('life_transitions')) {
    suggestions.push("How will you maintain your wellbeing during this transition?");
    suggestions.push("What self-care practices do you need during this change?");
  }

  return suggestions;
}

// Export for use in Life OS
module.exports = {
  calculateTemplateSimilarity,
  extractPromptThemes,
  generateAIConnections,
  suggestCrossTemplatePrompts,
  SEMANTIC_CLUSTERS
};