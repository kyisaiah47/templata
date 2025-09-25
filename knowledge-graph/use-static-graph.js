// STATIC KNOWLEDGE GRAPH USAGE
// Functions for using pre-generated template connections in your app
// No API calls needed - all connections are pre-computed

const fs = require('fs');
const path = require('path');

class StaticKnowledgeGraph {
  constructor() {
    this.connections = null;
    this.prompts = null;
    this.config = null;
    this.loaded = false;
  }

  // Load pre-generated static files
  load() {
    try {
      const graphPath = path.join(__dirname, 'template-connections.json');
      const promptsPath = path.join(__dirname, 'cross-template-prompts.json');
      const configPath = path.join(__dirname, 'life-os-config.json');

      if (!fs.existsSync(graphPath)) {
        throw new Error('Static knowledge graph not found. Run: node generate-static-graph.js');
      }

      this.connections = JSON.parse(fs.readFileSync(graphPath, 'utf8'));
      this.prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf8'));
      this.config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      this.loaded = true;

      console.log('✅ Static knowledge graph loaded successfully');
    } catch (error) {
      console.error('❌ Failed to load static knowledge graph:', error);
      throw error;
    }
  }

  // Get templates related to a specific template
  getRelatedTemplates(templateId, limit = 5) {
    if (!this.loaded) this.load();

    const related = [];

    // Check semantic clusters
    Object.entries(this.connections.semantic_clusters || {}).forEach(([clusterName, cluster]) => {
      if (cluster.templates.includes(templateId)) {
        cluster.templates.forEach(id => {
          if (id !== templateId) {
            related.push({
              templateId: id,
              relationship: `semantic_cluster:${clusterName}`,
              strength: 'high',
              reason: cluster.reasoning
            });
          }
        });
      }
    });

    // Check cross-connections
    const crossConnections = this.connections.cross_connections || {};
    if (crossConnections[templateId]) {
      const strongly = crossConnections[templateId].strongly_connected || [];
      strongly.forEach(id => {
        related.push({
          templateId: id,
          relationship: 'cross_connected',
          strength: 'high',
          reason: crossConnections[templateId].reasoning
        });
      });
    }

    // Check life sequences
    (this.connections.life_sequences || []).forEach(sequence => {
      const index = sequence.sequence.indexOf(templateId);
      if (index !== -1) {
        // Add previous and next templates in sequence
        if (index > 0) {
          related.push({
            templateId: sequence.sequence[index - 1],
            relationship: `sequence_previous:${sequence.name}`,
            strength: 'medium',
            reason: `Previous step in ${sequence.name}`
          });
        }
        if (index < sequence.sequence.length - 1) {
          related.push({
            templateId: sequence.sequence[index + 1],
            relationship: `sequence_next:${sequence.name}`,
            strength: 'medium',
            reason: `Next step in ${sequence.name}`
          });
        }
      }
    });

    // Remove duplicates and sort by strength
    const uniqueRelated = related.reduce((acc, item) => {
      const existing = acc.find(r => r.templateId === item.templateId);
      if (!existing || item.strength === 'high') {
        acc = acc.filter(r => r.templateId !== item.templateId);
        acc.push(item);
      }
      return acc;
    }, []);

    const strengthOrder = { 'high': 3, 'medium': 2, 'low': 1 };
    uniqueRelated.sort((a, b) => strengthOrder[b.strength] - strengthOrder[a.strength]);

    return uniqueRelated.slice(0, limit);
  }

  // Get cross-template prompts for multiple active templates
  getCrossTemplatePrompts(templateIds, limit = 3) {
    if (!this.loaded) this.load();

    const applicablePrompts = [];

    // Check cluster prompts
    Object.entries(this.connections.semantic_clusters || {}).forEach(([clusterName, cluster]) => {
      const overlap = templateIds.filter(id => cluster.templates.includes(id));
      if (overlap.length >= 2) {
        const clusterPrompts = this.prompts.cluster_prompts?.[clusterName] || [];
        clusterPrompts.forEach(prompt => {
          applicablePrompts.push({
            prompt,
            type: 'cluster',
            source: clusterName,
            applicableTemplates: overlap,
            priority: overlap.length // More overlap = higher priority
          });
        });
      }
    });

    // Check connection prompts
    templateIds.forEach(templateId1 => {
      templateIds.forEach(templateId2 => {
        if (templateId1 !== templateId2) {
          const connectionKey = `${templateId1}_${templateId2}`;
          const reverseKey = `${templateId2}_${templateId1}`;

          const connectionPrompts = this.prompts.connection_prompts?.[connectionKey] ||
                                  this.prompts.connection_prompts?.[reverseKey] || [];

          connectionPrompts.forEach(prompt => {
            applicablePrompts.push({
              prompt,
              type: 'connection',
              source: `${templateId1} ↔ ${templateId2}`,
              applicableTemplates: [templateId1, templateId2],
              priority: 2
            });
          });
        }
      });
    });

    // Check sequence prompts
    (this.connections.life_sequences || []).forEach(sequence => {
      const templateInSequence = templateIds.some(id => sequence.sequence.includes(id));
      if (templateInSequence) {
        const sequencePrompts = this.prompts.sequence_prompts?.[sequence.name] || [];
        sequencePrompts.forEach(prompt => {
          applicablePrompts.push({
            prompt,
            type: 'sequence',
            source: sequence.name,
            applicableTemplates: templateIds.filter(id => sequence.sequence.includes(id)),
            priority: 1
          });
        });
      }
    });

    // Sort by priority and remove duplicates
    const uniquePrompts = applicablePrompts
      .sort((a, b) => b.priority - a.priority)
      .reduce((acc, item) => {
        if (!acc.find(p => p.prompt === item.prompt)) {
          acc.push(item);
        }
        return acc;
      }, []);

    return uniquePrompts.slice(0, limit);
  }

  // Get templates that might be influenced by a decision
  getInfluencedTemplates(templateId) {
    if (!this.loaded) this.load();

    const influenced = [];
    const influences = this.connections.influence_relationships || {};

    Object.entries(influences).forEach(([targetTemplate, influence]) => {
      if (influence.triggers?.includes(templateId)) {
        influenced.push({
          templateId: targetTemplate,
          impact: 'triggers',
          reason: influence.reasoning
        });
      }
    });

    return influenced;
  }

  // Get Life OS configuration
  getLifeOSConfig() {
    if (!this.loaded) this.load();
    return this.config;
  }

  // Get all semantic clusters
  getSemanticClusters() {
    if (!this.loaded) this.load();
    return this.connections.semantic_clusters || {};
  }

  // Check if knowledge graph is available
  isAvailable() {
    return fs.existsSync(path.join(__dirname, 'template-connections.json'));
  }
}

// Export singleton instance
const knowledgeGraph = new StaticKnowledgeGraph();

module.exports = {
  knowledgeGraph,
  StaticKnowledgeGraph
};

// Usage examples:
// const { knowledgeGraph } = require('./use-static-graph');
//
// // Get related templates
// const related = knowledgeGraph.getRelatedTemplates('home-buying');
//
// // Get cross-template prompts for multiple templates
// const prompts = knowledgeGraph.getCrossTemplatePrompts(['home-buying', 'wedding-planning']);
//
// // Get templates influenced by a decision
// const influenced = knowledgeGraph.getInfluencedTemplates('divorce-coordination');