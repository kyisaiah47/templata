# AI-Powered Knowledge Graph Generation

## What This Does
Uses Claude API to intelligently analyze all 177 templates and create smart connections based on:
- Semantic relationships (actual meaning, not keywords)
- Real human decision-making patterns
- Life journey sequences
- Cross-template considerations

## How to Run

### 1. With Mock Data (Testing)
```bash
cd knowledge-graph
node ai-graph-generator.js
```

### 2. With Real Claude API
1. Get Claude API key from Anthropic
2. Update the `actualClaudeCall` function in `ai-graph-generator.js`
3. Replace `callClaude` with `actualClaudeCall`
4. Run the script

## What It Generates
- **Semantic clusters** - Templates grouped by life themes
- **Cross-connections** - Templates that influence each other
- **Life journey sequences** - Natural progressions of decisions
- **Shared prompts** - Cross-template questions
- **Life OS integration** - How to implement in the app

## Example Prompts Sent to Claude

### Analysis Prompt:
"You are an expert in life planning... analyze these 177 templates and identify semantic clusters, cross-connections, and life journey relationships..."

### Shared Prompts Generation:
"Generate cross-template prompts that address common concerns across connected templates..."

### Life OS Integration:
"Suggest how to implement this in a Life OS system where users work with multiple templates..."

## Output
Results saved to `ai-generated-connections.json` with:
- AI analysis of template relationships
- Generated shared prompts
- Life OS implementation suggestions
- Complete template data

## Next Steps
1. Run the analysis
2. Review AI-generated connections
3. Implement in Life OS
4. Test with real users

This approach will create ACTUALLY INTELLIGENT connections instead of hardcoded bullshit!