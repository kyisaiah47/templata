// AI-POWERED KNOWLEDGE GRAPH GENERATOR
// Uses Claude API to analyze templates and create intelligent connections

const fs = require('fs');

// Mock Claude API call (replace with actual API when ready)
async function callClaude(prompt) {
  // For now, return mock responses to show the structure
  // Replace this with actual Claude API call
  console.log('🤖 Calling Claude API...');
  console.log('Prompt:', prompt.substring(0, 100) + '...');

  // Mock response - replace with real API call
  return "Mock response - replace with actual Claude API";
}

// Generate AI-powered template connections
async function generateAIConnections() {
  console.log('🧠 GENERATING AI-POWERED KNOWLEDGE GRAPH\n');

  // Read template registry
  const registryContent = fs.readFileSync('../src/registry/templates.ts', 'utf8');
  const templateMatches = registryContent.matchAll(/{\s*id:\s*"([^"]+)",\s*name:\s*capitalizeTemplateName\("([^"]+)"\),\s*description:\s*"([^"]+)",\s*category:\s*"([^"]+)"/gs);

  const templates = [];
  for (const match of templateMatches) {
    templates.push({
      id: match[1],
      name: match[2],
      description: match[3],
      category: match[4]
    });
  }

  console.log(`📊 Analyzing ${templates.length} templates with AI...\n`);

  // Prompt Claude to analyze template relationships
  const analysisPrompt = `
You are an expert in life planning and decision-making. I have ${templates.length} life guidance templates with these names and descriptions:

${templates.map(t => `- ${t.name}: ${t.description} (Category: ${t.category})`).join('\n')}

Please analyze these templates and identify:

1. SEMANTIC CLUSTERS: Groups of templates that share common life themes or decision-making patterns
2. CROSS-TEMPLATE CONNECTIONS: Templates that would naturally be used together or influence each other
3. LIFE JOURNEY RELATIONSHIPS: Templates that represent sequential steps or parallel considerations in life

For each connection, explain WHY these templates relate to each other based on real human behavior and decision-making psychology.

Format your response as JSON:
{
  "semantic_clusters": {
    "cluster_name": {
      "templates": ["template-id-1", "template-id-2"],
      "reasoning": "Why these templates belong together"
    }
  },
  "cross_connections": {
    "template-id": {
      "connected_to": ["template-id-1", "template-id-2"],
      "reasoning": "Why these specific templates connect"
    }
  },
  "life_journey_sequences": [
    {
      "sequence_name": "Young Adult Journey",
      "templates": ["college-selection", "job-search", "apartment-hunting"],
      "reasoning": "Natural progression of decisions"
    }
  ]
}

Focus on connections that make psychological and practical sense, not just keyword overlap.
`;

  console.log('📝 Sending analysis request to Claude...');
  const aiAnalysis = await callClaude(analysisPrompt);

  // Generate shared prompts using AI
  const promptGenerationPrompt = `
Based on the template connections you identified, generate cross-template prompts that would be useful across multiple related templates.

For each cluster or connection, create 3-5 prompts that:
1. Address common concerns across the connected templates
2. Help users think about how their decisions interact
3. Are specific enough to be actionable but general enough to apply across templates

Format as JSON:
{
  "shared_prompts": {
    "cluster_or_connection_name": [
      "Prompt 1 that applies to multiple templates in this group",
      "Prompt 2 that addresses cross-template concerns"
    ]
  }
}

Make prompts practical and focused on real decision-making challenges.
`;

  console.log('💭 Generating shared prompts...');
  const sharedPrompts = await callClaude(promptGenerationPrompt);

  // Generate Life OS integration suggestions
  const lifeOSPrompt = `
Given the template relationships and shared prompts, suggest how to implement this in a "Life OS" system where users can work with multiple templates simultaneously.

Provide:
1. How to surface related templates to users
2. When to suggest cross-template prompts
3. How to organize the multi-template workspace
4. What AI-powered insights to show users

Focus on user experience and practical implementation.
`;

  console.log('🚀 Designing Life OS integration...');
  const lifeOSDesign = await callClaude(lifeOSPrompt);

  // Save results
  const results = {
    generated_at: new Date().toISOString(),
    template_count: templates.length,
    ai_analysis: aiAnalysis,
    shared_prompts: sharedPrompts,
    life_os_design: lifeOSDesign,
    templates_analyzed: templates
  };

  fs.writeFileSync('./ai-generated-connections.json', JSON.stringify(results, null, 2));

  console.log('\n✅ AI analysis complete!');
  console.log('📁 Results saved to: ai-generated-connections.json');
  console.log('\nNext steps:');
  console.log('1. Review the AI-generated connections');
  console.log('2. Implement the recommended Life OS features');
  console.log('3. Test the connections with real users');

  return results;
}

// Function to implement actual Claude API call
async function actualClaudeCall(prompt, apiKey = process.env.ANTHROPIC_API_KEY) {
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is required');
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Claude API call failed:', error);
    throw error;
  }
}

// Export functions
module.exports = {
  generateAIConnections,
  callClaude,
  actualClaudeCall
};

// Run if called directly
if (require.main === module) {
  generateAIConnections().catch(console.error);
}