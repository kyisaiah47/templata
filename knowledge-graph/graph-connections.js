const { TEMPLATE_FAMILIES } = require('./template-families');

// KNOWLEDGE GRAPH CONNECTIONS
// Defines how templates and families connect to each other

const GRAPH_CONNECTIONS = {
  // Cross-family connections (templates that bridge multiple domains)
  cross_family: {
    "business-launch": ["business", "planning", "transition"],
    "job-transition": ["transition", "management"],
    "financial-recovery": ["recovery", "planning"],
    "mental-health-college": ["health", "college", "transition"],
    "content-creation-business": ["creative", "business"],
    "relationship-coaching": ["relationships", "business"],
    "executive-leadership-transition": ["transition", "management"],
    "family-crisis-management": ["management", "relationships", "health"],
    "first-management-role": ["management", "transition"],
    "military-veteran-transition": ["transition", "recovery"]
  },

  // Life stage connections (templates commonly used together)
  life_stage_clusters: {
    young_adult: [
      "college-selection",
      "first-job-transition",
      "first-serious-relationship",
      "apartment-hunting",
      "student-loan-strategy"
    ],

    career_building: [
      "job-search",
      "skill-development",
      "professional-networking",
      "first-management-role",
      "side-hustle-development"
    ],

    family_formation: [
      "wedding-planning",
      "home-buying",
      "baby-planning",
      "financial-independence",
      "family-therapy"
    ],

    midlife: [
      "career-change",
      "caring-for-aging-parents",
      "midlife-crisis",
      "investment-portfolio",
      "marriage-maintenance"
    ],

    later_life: [
      "retirement-planning",
      "estate-planning",
      "health-decline-navigation",
      "downsizing-decisions",
      "grandparent-role"
    ]
  },

  // Common decision intersections (templates that often influence each other)
  decision_intersections: {
    "home-buying": ["job-search", "wedding-planning", "baby-planning", "retirement-planning"],
    "job-search": ["home-buying", "relationship-therapy", "family-crisis-management"],
    "wedding-planning": ["home-buying", "baby-planning", "debt-payoff"],
    "baby-planning": ["home-buying", "wedding-planning", "career-change"],
    "career-change": ["home-buying", "relationship-therapy", "financial-recovery"],
    "retirement-planning": ["home-buying", "estate-planning", "health-decline-navigation"],
    "divorce-coordination": ["home-buying", "job-search", "financial-recovery", "child-custody"]
  },

  // Shared prompt themes that cross multiple templates
  shared_themes: {
    financial_planning: {
      templates: ["home-buying", "wedding-planning", "baby-planning", "retirement-planning", "business-launch"],
      shared_prompts: [
        "What's your realistic budget range?",
        "How will this impact your long-term financial goals?",
        "What are your non-negotiable financial requirements?",
        "How much financial risk are you comfortable with?"
      ]
    },

    relationship_impact: {
      templates: ["career-change", "home-buying", "baby-planning", "retirement-planning"],
      shared_prompts: [
        "How will this decision affect your relationship?",
        "What does your partner think about this change?",
        "How will you handle disagreements about this decision?",
        "What relationship support do you need during this transition?"
      ]
    },

    timing_considerations: {
      templates: ["job-search", "home-buying", "wedding-planning", "baby-planning", "business-launch"],
      shared_prompts: [
        "What's your ideal timeline for this decision?",
        "What external factors might affect your timing?",
        "What needs to happen before you can move forward?",
        "How flexible can you be with timing?"
      ]
    },

    support_systems: {
      templates: ["addiction-recovery", "divorce-coordination", "job-loss-recovery", "mental-health"],
      shared_prompts: [
        "Who are your key support people?",
        "What professional help do you need?",
        "How will you ask for help when you need it?",
        "What support systems are missing in your life?"
      ]
    }
  }
};

// Function to get related templates for Life OS
function getRelatedTemplates(templateId) {
  const related = new Set();

  // Check cross-family connections
  const families = GRAPH_CONNECTIONS.cross_family[templateId] || [];
  families.forEach(familyName => {
    const family = TEMPLATE_FAMILIES[familyName];
    if (family) {
      family.templates.forEach(t => related.add(t));
    }
  });

  // Check decision intersections
  const intersections = GRAPH_CONNECTIONS.decision_intersections[templateId] || [];
  intersections.forEach(t => related.add(t));

  // Check life stage clusters
  Object.values(GRAPH_CONNECTIONS.life_stage_clusters).forEach(cluster => {
    if (cluster.includes(templateId)) {
      cluster.forEach(t => related.add(t));
    }
  });

  // Remove the original template
  related.delete(templateId);

  return Array.from(related);
}

// Function to get shared prompts for multiple templates
function getSharedPrompts(templateIds) {
  const sharedPrompts = [];

  Object.values(GRAPH_CONNECTIONS.shared_themes).forEach(theme => {
    const hasOverlap = templateIds.some(id => theme.templates.includes(id));
    if (hasOverlap) {
      sharedPrompts.push(...theme.shared_prompts);
    }
  });

  return [...new Set(sharedPrompts)]; // Remove duplicates
}

module.exports = {
  GRAPH_CONNECTIONS,
  getRelatedTemplates,
  getSharedPrompts
};