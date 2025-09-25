// STATIC KNOWLEDGE GRAPH GENERATOR
// Pre-generates template connections and saves them as static JSON files
// Run this script once to create the knowledge graph, then use the static files in the app

const fs = require('fs');
const { actualClaudeCall } = require('./ai-graph-generator');

async function generateStaticKnowledgeGraph() {
  console.log('🚀 GENERATING STATIC KNOWLEDGE GRAPH\n');

  // Read template registry
  const registryContent = fs.readFileSync('../src/registry/templates.ts', 'utf8');
  const templateMatches = registryContent.matchAll(/{\\s*id:\\s*"([^"]+)",\\s*name:\\s*capitalizeTemplateName\\("([^"]+)"\\),\\s*description:\\s*"([^"]+)",\\s*category:\\s*"([^"]+)"/gs);

  const templates = [];
  for (const match of templateMatches) {
    templates.push({
      id: match[1],
      name: match[2],
      description: match[3],
      category: match[4]
    });
  }

  console.log(`📊 Analyzing ${templates.length} templates with Claude AI...\n`);

  // Step 1: Analyze template relationships
  console.log('🔗 Step 1: Analyzing semantic relationships...');
  const relationshipPrompt = `
You are an expert in life planning and decision psychology. I have ${templates.length} life guidance templates. Analyze them and create intelligent connections based on real human behavior.

TEMPLATES:
${templates.map(t => `- ${t.name}: ${t.description} (Category: ${t.category})`).join('\\n')}

Create JSON with these sections:

1. SEMANTIC_CLUSTERS: Group templates by life themes (not just categories)
2. CROSS_CONNECTIONS: Templates that would naturally be used together
3. LIFE_SEQUENCES: Templates representing decision progressions
4. INFLUENCE_RELATIONSHIPS: How one template decision affects another

Focus on psychological connections, not keyword matching.

Format as valid JSON:
{
  "semantic_clusters": {
    "young_adult_foundation": {
      "templates": ["college-selection", "job-search", "apartment-hunting", "first-serious-relationship"],
      "reasoning": "Core decisions young adults make when establishing independence"
    },
    "financial_security": {
      "templates": ["budget-planning", "debt-payoff", "investment-portfolio", "retirement-planning"],
      "reasoning": "Progressive financial planning across life stages"
    }
  },
  "cross_connections": {
    "home-buying": {
      "strongly_connected": ["mortgage-management", "budget-planning", "marriage-maintenance"],
      "reasoning": "Home buying requires financial planning and often involves relationship decisions"
    }
  },
  "life_sequences": [
    {
      "name": "Career Development Path",
      "sequence": ["job-search", "early-career-advancement", "skill-development", "leadership-transition"],
      "reasoning": "Natural career progression sequence"
    }
  ],
  "influence_relationships": {
    "divorce-coordination": {
      "triggers": ["home-buying", "retirement-planning", "financial-independence"],
      "reasoning": "Divorce significantly impacts major financial and life decisions"
    }
  }
}`;

  try {
    const relationshipsResponse = await actualClaudeCall(relationshipPrompt);
    const relationships = JSON.parse(relationshipsResponse);

    // Step 2: Generate cross-template prompts
    console.log('💭 Step 2: Generating cross-template prompts...');
    const promptsPrompt = `
Based on these template relationships:
${JSON.stringify(relationships, null, 2)}

Generate cross-template prompts that help users think about connections between their life decisions.

Create prompts for:
1. Each semantic cluster (prompts that apply to the whole group)
2. Strong cross-connections (prompts bridging two specific templates)
3. Life sequences (prompts for decision transitions)

Format as JSON:
{
  "cluster_prompts": {
    "young_adult_foundation": [
      "How do these foundational decisions align with your 5-year vision?",
      "What support systems do you need for these major changes?"
    ]
  },
  "connection_prompts": {
    "home-buying_budget-planning": [
      "How does your home budget fit into your overall financial goals?",
      "What financial sacrifices are you willing to make for your ideal home?"
    ]
  },
  "sequence_prompts": {
    "Career Development Path": [
      "What skills from your current role will transfer to your next career step?",
      "How will you measure progress in your career development?"
    ]
  }
}`;

    const promptsResponse = await actualClaudeCall(promptsPrompt);
    const prompts = JSON.parse(promptsResponse);

    // Step 3: Generate implementation recommendations
    console.log('⚙️ Step 3: Creating Life OS integration plan...');
    const implementationPrompt = `
Given these template relationships and cross-prompts:

RELATIONSHIPS: ${JSON.stringify(relationships, null, 2)}
PROMPTS: ${JSON.stringify(prompts, null, 2)}

Create implementation recommendations for a "Life OS" system where users work with multiple templates simultaneously.

Provide specific recommendations for:
1. How to surface related templates to users
2. When to show cross-template prompts
3. How to organize multi-template workspaces
4. What AI insights to provide

Format as JSON with actionable recommendations.`;

    const implementationResponse = await actualClaudeCall(implementationPrompt);
    const implementation = JSON.parse(implementationResponse);

    // Combine all results
    const staticGraph = {
      generated_at: new Date().toISOString(),
      template_count: templates.length,
      version: "1.0",
      relationships,
      prompts,
      implementation,
      templates: templates // Include template data for reference
    };

    // Save static files
    fs.writeFileSync('./static-knowledge-graph.json', JSON.stringify(staticGraph, null, 2));

    // Create smaller, optimized files for app usage
    fs.writeFileSync('./template-connections.json', JSON.stringify(relationships, null, 2));
    fs.writeFileSync('./cross-template-prompts.json', JSON.stringify(prompts, null, 2));
    fs.writeFileSync('./life-os-config.json', JSON.stringify(implementation, null, 2));

    console.log('\\n✅ STATIC KNOWLEDGE GRAPH GENERATED!');
    console.log('📁 Files created:');
    console.log('   - static-knowledge-graph.json (complete dataset)');
    console.log('   - template-connections.json (relationships only)');
    console.log('   - cross-template-prompts.json (prompts only)');
    console.log('   - life-os-config.json (implementation config)');
    console.log('\\nNow your app can use these pre-generated connections without API calls!');

    return staticGraph;

  } catch (error) {
    console.error('❌ Failed to generate static knowledge graph:', error);
    throw error;
  }
}

// Helper function to load static connections in app
function loadStaticConnections() {
  if (!fs.existsSync('./template-connections.json')) {
    throw new Error('Static knowledge graph not found. Run generate-static-graph.js first.');
  }

  return {
    connections: JSON.parse(fs.readFileSync('./template-connections.json', 'utf8')),
    prompts: JSON.parse(fs.readFileSync('./cross-template-prompts.json', 'utf8')),
    config: JSON.parse(fs.readFileSync('./life-os-config.json', 'utf8'))
  };
}

module.exports = {
  generateStaticKnowledgeGraph,
  loadStaticConnections
};

// Run if called directly
if (require.main === module) {
  generateStaticKnowledgeGraph().catch(console.error);
}