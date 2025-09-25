// DEMO: STATIC KNOWLEDGE GRAPH WITH MOCK DATA
// Shows how the system works without needing real API calls

const fs = require('fs');

// Create mock static data to demonstrate the system
function createMockStaticData() {
  console.log('🎭 Creating mock static data for demo...\n');

  const mockConnections = {
    semantic_clusters: {
      young_adult_foundation: {
        templates: ['college-selection', 'job-search', 'apartment-hunting', 'first-serious-relationship'],
        reasoning: 'Core decisions young adults make when establishing independence'
      },
      financial_security: {
        templates: ['budget-planning', 'debt-payoff', 'investment-portfolio', 'retirement-planning'],
        reasoning: 'Progressive financial planning across life stages'
      },
      family_transitions: {
        templates: ['wedding-planning', 'home-buying', 'baby-planning', 'caring-for-aging-parents'],
        reasoning: 'Major life decisions that involve family considerations'
      },
      business_entrepreneurship: {
        templates: ['business-launch', 'freelance-business', 'side-hustle-development', 'content-creation-business'],
        reasoning: 'Templates for starting and running businesses'
      }
    },
    cross_connections: {
      'home-buying': {
        strongly_connected: ['mortgage-management', 'budget-planning', 'marriage-maintenance', 'job-search'],
        reasoning: 'Home buying requires financial planning and often involves relationship decisions and job stability'
      },
      'wedding-planning': {
        strongly_connected: ['budget-planning', 'relationship-therapy', 'home-buying', 'baby-planning'],
        reasoning: 'Wedding planning intersects with financial decisions and future life planning'
      },
      'job-search': {
        strongly_connected: ['career-change', 'skill-development', 'apartment-hunting', 'budget-planning'],
        reasoning: 'Job searching affects location, income, and career development decisions'
      }
    },
    life_sequences: [
      {
        name: 'Young Adult Independence',
        sequence: ['college-selection', 'job-search', 'apartment-hunting', 'budget-planning'],
        reasoning: 'Natural progression from education to financial independence'
      },
      {
        name: 'Family Formation',
        sequence: ['first-serious-relationship', 'wedding-planning', 'home-buying', 'baby-planning'],
        reasoning: 'Common sequence of relationship and family development'
      },
      {
        name: 'Career Development',
        sequence: ['job-search', 'skill-development', 'career-change', 'executive-leadership-transition'],
        reasoning: 'Progressive career advancement path'
      }
    ],
    influence_relationships: {
      'divorce-coordination': {
        triggers: ['home-buying', 'retirement-planning', 'budget-planning', 'baby-planning'],
        reasoning: 'Divorce significantly impacts major financial and life decisions'
      },
      'job-loss-recovery': {
        triggers: ['budget-planning', 'career-change', 'apartment-hunting', 'debt-payoff'],
        reasoning: 'Job loss forces reconsideration of financial and living situations'
      }
    }
  };

  const mockPrompts = {
    cluster_prompts: {
      young_adult_foundation: [
        'How do these foundational decisions align with your 5-year vision?',
        'What support systems do you need for these major changes?',
        'How will you balance independence with family relationships?'
      ],
      financial_security: [
        'What percentage of your income should go toward each financial goal?',
        'How do your short-term financial needs affect long-term security?',
        'What financial risks are you willing to accept at this stage?'
      ],
      family_transitions: [
        'How will this decision impact your family dynamics?',
        'What conversations do you need to have with family members?',
        'How will you manage the stress of this transition on relationships?'
      ]
    },
    connection_prompts: {
      'home-buying_budget-planning': [
        'How does your home budget fit into your overall financial goals?',
        'What financial sacrifices are you willing to make for your ideal home?',
        'How will homeownership costs affect your other financial priorities?'
      ],
      'wedding-planning_budget-planning': [
        'How much of your savings should go toward your wedding vs. your future?',
        'What wedding expenses align with your values as a couple?',
        'How will wedding debt impact your post-marriage financial plans?'
      ]
    },
    sequence_prompts: {
      'Young Adult Independence': [
        'What skills from college will transfer to your career goals?',
        'How will you measure success in this transition to independence?',
        'What safety nets do you need during this transition?'
      ],
      'Family Formation': [
        'How will each step in this journey strengthen your relationship?',
        'What compromises are you both willing to make at each stage?',
        'How will you maintain individual identity while building a family?'
      ]
    }
  };

  const mockConfig = {
    ui_recommendations: {
      related_templates_display: 'Show 3-5 related templates in sidebar',
      cross_prompts_trigger: 'When user has 2+ active templates',
      workspace_organization: 'Group by semantic clusters'
    },
    ai_insights: {
      connection_explanations: true,
      sequence_guidance: true,
      influence_warnings: true
    }
  };

  // Write mock files
  fs.writeFileSync('./template-connections.json', JSON.stringify(mockConnections, null, 2));
  fs.writeFileSync('./cross-template-prompts.json', JSON.stringify(mockPrompts, null, 2));
  fs.writeFileSync('./life-os-config.json', JSON.stringify(mockConfig, null, 2));

  console.log('✅ Mock data created successfully!\n');
}

// Demo the system with mock data
function runDemo() {
  console.log('🚀 KNOWLEDGE GRAPH SYSTEM DEMO\n');

  // Create mock data
  createMockStaticData();

  // Import and test the system
  const { knowledgeGraph } = require('./use-static-graph');

  console.log('📊 DEMO RESULTS:\n');

  // Demo 1: Related templates
  console.log('🔗 Related Templates:');
  const related = knowledgeGraph.getRelatedTemplates('home-buying', 4);
  related.forEach(rel => {
    console.log(`   → ${rel.templateId} (${rel.strength}) - ${rel.reason.substring(0, 50)}...`);
  });

  // Demo 2: Cross-template prompts
  console.log('\\n💭 Cross-Template Prompts for [home-buying, wedding-planning]:');
  const prompts = knowledgeGraph.getCrossTemplatePrompts(['home-buying', 'wedding-planning'], 3);
  prompts.forEach((p, i) => {
    console.log(`   ${i + 1}. "${p.prompt}" (${p.type})`);
  });

  // Demo 3: Influenced templates
  console.log('\\n🎯 Templates Influenced by Divorce:');
  const influenced = knowledgeGraph.getInfluencedTemplates('divorce-coordination');
  influenced.forEach(inf => {
    console.log(`   → ${inf.templateId} (${inf.impact})`);
  });

  // Demo 4: Semantic clusters
  console.log('\\n🏷️ Semantic Clusters:');
  const clusters = knowledgeGraph.getSemanticClusters();
  Object.entries(clusters).forEach(([name, cluster]) => {
    console.log(`   → ${name}: ${cluster.templates.length} templates`);
    console.log(`     ${cluster.templates.slice(0, 3).join(', ')}...`);
  });

  console.log('\\n✅ DEMO COMPLETE!');
  console.log('\\n💡 This shows how your app will work with pre-generated connections:');
  console.log('   • No API calls during runtime');
  console.log('   • Instant responses');
  console.log('   • Intelligent psychological connections');
  console.log('   • Cross-template prompts that make sense');
  console.log('\\n🔄 To use with real data: Set ANTHROPIC_API_KEY and run generate-static-graph.js');
}

// Run the demo
runDemo();