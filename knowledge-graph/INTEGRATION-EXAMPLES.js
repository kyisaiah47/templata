// KNOWLEDGE GRAPH INTEGRATION EXAMPLES
// Copy these examples into your actual app components

const { masterKnowledgeGraph } = require('./knowledge-graph/master-knowledge-graph');

// Example 1: Show related templates when user selects one
function getRelatedTemplatesForUI(templateId) {
  const relationships = masterKnowledgeGraph.getTemplateRelationships(templateId);

  return {
    currentTemplate: templateId,
    cluster: relationships.semantic_cluster?.name,
    recommendations: relationships.weighted_connections
      .filter(conn => conn.strength >= 70) // Only show strong connections
      .slice(0, 5) // Limit to top 5
      .map(conn => ({
        templateId: conn.templateId,
        reason: conn.reasoning,
        strength: conn.strength_level
      }))
  };
}

// Example 2: Get personalized recommendations for user
function getPersonalizedRecommendations(user) {
  const { age, goals = [], completedTemplates = [] } = user;

  const recommendations = masterKnowledgeGraph.getOptimalLifeSequence(
    age,
    goals,
    completedTemplates
  );

  return recommendations.slice(0, 6).map(rec => ({
    templateId: rec.templateId,
    priority: rec.priority,
    reason: rec.reason,
    lifeStage: rec.life_stage || 'general'
  }));
}

// Example 3: Multi-template workspace intelligence
function getMultiTemplatePrompts(activeTemplates, userScenario = null) {
  const prompts = masterKnowledgeGraph.getContextualPrompts(
    activeTemplates,
    userScenario
  );

  // Also check for conflicts
  const conflicts = [];
  activeTemplates.forEach(templateId => {
    const relationships = masterKnowledgeGraph.getTemplateRelationships(templateId);
    const templateConflicts = relationships.negative_connections
      .filter(conflict => activeTemplates.includes(conflict.conflicting_template));
    conflicts.push(...templateConflicts);
  });

  return {
    crossTemplatePrompts: prompts.slice(0, 3), // Limit to 3 most relevant
    conflicts: conflicts.map(conflict => ({
      template1: templateId,
      template2: conflict.conflicting_template,
      reason: conflict.reasoning,
      resolution: conflict.resolution_strategy
    }))
  };
}

// Example 4: Template selection page enhancement
function enhanceTemplateSelectionUI(selectedTemplate) {
  const analysis = masterKnowledgeGraph.generateAnalysisReport(selectedTemplate);

  return {
    templateId: selectedTemplate,
    cluster: {
      name: analysis.cluster_membership.semantic?.name,
      theme: analysis.cluster_membership.micro?.micro_theme
    },
    strongConnections: analysis.recommendations.high_synergy_templates,
    avoidSimultaneously: analysis.recommendations.avoid_simultaneously,
    optimalTiming: analysis.recommendations.optimal_timing,
    totalConnections: analysis.connection_strength.total_weighted_connections
  };
}

// Example 5: Dashboard widget for template discovery
function getTemplateDiscoveryWidget(user) {
  const { age, recentlyViewed = [], interests = [] } = user;

  // Get age-appropriate recommendations
  const ageRecs = masterKnowledgeGraph.getOptimalLifeSequence(age, interests, []);

  // Get related templates based on recently viewed
  const relatedRecs = [];
  recentlyViewed.forEach(templateId => {
    const relationships = masterKnowledgeGraph.getTemplateRelationships(templateId);
    relationships.weighted_connections
      .filter(conn => conn.strength >= 80)
      .slice(0, 2)
      .forEach(conn => relatedRecs.push({
        templateId: conn.templateId,
        reason: `Related to ${templateId}: ${conn.reasoning}`,
        strength: conn.strength
      }));
  });

  return {
    forYourAge: ageRecs.slice(0, 3),
    basedOnViewing: relatedRecs.slice(0, 3),
    trending: [] // Could add trending analysis later
  };
}

// Example usage in your React components:
/*

// In TemplateSelectionPage.jsx
const relatedTemplates = getRelatedTemplatesForUI(selectedTemplateId);

// In UserDashboard.jsx
const recommendations = getPersonalizedRecommendations({
  age: user.age,
  goals: user.goals,
  completedTemplates: user.completedTemplates
});

// In MultiTemplateWorkspace.jsx
const workspaceIntelligence = getMultiTemplatePrompts(
  activeTemplateIds,
  user.currentScenario
);

*/

module.exports = {
  getRelatedTemplatesForUI,
  getPersonalizedRecommendations,
  getMultiTemplatePrompts,
  enhanceTemplateSelectionUI,
  getTemplateDiscoveryWidget
};