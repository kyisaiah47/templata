// TEMPLATE FAMILIES - Groups of templates that share keywords/concepts
// These families can share prompts, resources, and cross-reference each other

const TEMPLATE_FAMILIES = {
  business: {
    name: "Business & Entrepreneurship",
    templates: [
      "affiliate-marketing",
      "business-launch",
      "business-succession",
      "coaching-business",
      "consulting-business",
      "content-creation-business",
      "freelance-business",
      "mobile-app-startup",
      "photography-business",
      "saas-startup"
    ],
    shared_concepts: ["revenue", "customers", "marketing", "scaling", "competition"]
  },

  management: {
    name: "Management & Leadership",
    templates: [
      "family-crisis-management",
      "first-management-role",
      "fixed-income-management",
      "health-crisis-management",
      "health-decline-navigation",
      "legal-issue-management",
      "nonprofit-management",
      "rental-management",
      "social-media-management",
      "stress-management"
    ],
    shared_concepts: ["decision-making", "responsibility", "communication", "problem-solving", "coordination"]
  },

  planning: {
    name: "Planning & Preparation",
    templates: [
      "baby-planning",
      "digital-nomad-planning",
      "end-of-life-planning",
      "estate-planning",
      "event-planning",
      "garden-planning",
      "meal-planning",
      "study-abroad-planning",
      "transportation-planning"
    ],
    shared_concepts: ["timeline", "budget", "logistics", "contingencies", "milestones"]
  },

  transition: {
    name: "Life Transitions",
    templates: [
      "college-to-career-transition",
      "executive-leadership-transition",
      "first-job-transition",
      "job-transition",
      "military-veteran-transition",
      "retirement-transition"
    ],
    shared_concepts: ["change", "adaptation", "identity", "new-environment", "uncertainty"]
  },

  recovery: {
    name: "Recovery & Rebuilding",
    templates: [
      "addiction-recovery",
      "bankruptcy-recovery",
      "financial-recovery",
      "identity-theft-recovery",
      "job-loss-recovery",
      "natural-disaster-recovery"
    ],
    shared_concepts: ["rebuilding", "resilience", "support-systems", "healing", "fresh-start"]
  },

  health: {
    name: "Health & Wellness",
    templates: [
      "health-crisis-management",
      "health-decline-navigation",
      "mental-health-college",
      "mental-health-support",
      "mental-health",
      "midlife-health-changes"
    ],
    shared_concepts: ["self-care", "medical-decisions", "lifestyle-changes", "support", "prevention"]
  },

  relationships: {
    name: "Relationships & Family",
    templates: [
      "first-serious-relationship",
      "long-distance-relationship",
      "relationship-breakup",
      "relationship-coaching",
      "relationship-therapy"
    ],
    shared_concepts: ["communication", "boundaries", "trust", "conflict-resolution", "emotional-intimacy"]
  },

  college: {
    name: "College & Education",
    templates: [
      "college-selection",
      "college-to-career-transition",
      "financial-independence-college",
      "mental-health-college"
    ],
    shared_concepts: ["academic-success", "campus-life", "career-preparation", "independence", "financial-planning"]
  },

  creative: {
    name: "Creative Pursuits",
    templates: [
      "content-creation",
      "podcast-creation",
      "blended-family-creation",
      "content-creation-business"
    ],
    shared_concepts: ["expression", "audience", "consistency", "skill-development", "monetization"]
  }
};

module.exports = { TEMPLATE_FAMILIES };