// COMPREHENSIVE KNOWLEDGE GRAPH EXPANSION
// Adding all 177 templates with detailed psychological connections

const fs = require('fs');

// Read all template IDs
function getAllTemplateIds() {
  const content = fs.readFileSync('./all-template-ids.txt', 'utf8');
  return content.trim().split('\n');
}

// Generate comprehensive semantic clusters
function generateComprehensiveConnections() {
  console.log('🧠 GENERATING COMPREHENSIVE KNOWLEDGE GRAPH\n');

  const allTemplates = getAllTemplateIds();
  console.log(`📊 Processing ${allTemplates.length} templates...\n`);

  // Massively expanded semantic clusters
  const comprehensiveConnections = {
    semantic_clusters: {
      // FOUNDATIONAL LIFE STAGES
      young_adult_foundation: {
        templates: [
          "college-selection", "job-search", "apartment-hunting", "first-serious-relationship",
          "first-job-transition", "roommate-navigation", "student-loan-strategy",
          "quarter-life-crisis", "fraternity-sorority-decisions", "study-abroad-planning",
          "internship-competition", "graduate-school-decisions", "college-to-career-transition",
          "financial-independence-college", "mental-health-college"
        ],
        reasoning: "Critical decisions young adults make when establishing independence and identity"
      },

      // FINANCIAL ECOSYSTEM
      financial_security_building: {
        templates: [
          "personal-finance", "debt-payoff", "investment-portfolio", "personal-finance-mastery",
          "investing-finance", "crypto-portfolio", "stock-trading", "insurance-optimization",
          "financial-independence", "bankruptcy-recovery", "financial-recovery",
          "peak-earning-optimization", "fixed-income-management", "real-estate-investing"
        ],
        reasoning: "Progressive financial planning and wealth building across life stages"
      },

      // FAMILY & RELATIONSHIP DYNAMICS
      family_life_transitions: {
        templates: [
          "first-serious-relationship", "wedding-planning", "home-buying", "baby-planning",
          "first-time-parent", "marriage-maintenance", "parenting-guidance", "caring-for-aging-parents",
          "sandwich-generation", "teenage-parenting", "blended-family", "blended-family-creation",
          "long-distance-relationship", "relationship-therapy", "family-therapy",
          "grandparent-role", "empty-nest", "empty-nest-syndrome"
        ],
        reasoning: "Major family formation and relationship decisions that shape life structure"
      },

      // CAREER & PROFESSIONAL GROWTH
      career_development_path: {
        templates: [
          "job-search", "early-career-advancement", "skill-development", "career-plateau",
          "first-management-role", "executive-leadership-transition", "professional-networking",
          "public-speaking", "job-transition", "workforce-reentry", "military-veteran-transition",
          "first-job-transition"
        ],
        reasoning: "Professional growth and career advancement decisions"
      },

      // ENTREPRENEURSHIP & BUSINESS
      entrepreneurship_business: {
        templates: [
          "business-launch", "freelance-business", "side-hustle-development", "online-business-launch",
          "content-creation-business", "coaching-business", "consulting-business", "tech-startup-guide",
          "saas-startup", "small-business-launch", "small-business", "mobile-app-startup",
          "e-commerce-store", "dropshipping", "affiliate-marketing", "social-entrepreneurship",
          "nonprofit-startup", "business-succession", "restaurant-opening", "photography-business"
        ],
        reasoning: "Building and running businesses across different models and stages"
      },

      // HEALTH & WELLNESS ECOSYSTEM
      health_wellness_journey: {
        templates: [
          "mental-health", "fitness-journey", "weight-loss", "meditation-journey",
          "mindfulness-meditation", "yoga-practice", "marathon-training", "habit-tracking",
          "stress-management", "chronic-illness", "medical-treatment", "health-crisis-management",
          "health-decline-navigation", "addiction-recovery", "mental-health-support",
          "personal-training", "meal-planning"
        ],
        reasoning: "Physical and mental health optimization and wellness maintenance"
      },

      // CRISIS & RECOVERY MANAGEMENT
      major_life_crises: {
        templates: [
          "divorce-coordination", "divorce-process", "job-loss-recovery", "job-loss-navigation",
          "grief-loss", "death-of-spouse", "health-crisis-management", "bankruptcy-recovery",
          "addiction-recovery", "midlife-crisis", "natural-disaster-recovery", "identity-theft-recovery",
          "identity-theft", "family-crisis-management", "legal-issue-management", "family-estrangement"
        ],
        reasoning: "Navigating significant life disruptions and recovery processes"
      },

      // CREATIVE & ARTISTIC PURSUITS
      creative_expression: {
        templates: [
          "creative-writing", "art-portfolio", "music-production", "photography-business",
          "fashion-design", "content-creation", "youtube-channel", "podcast-creation",
          "book-writing", "music-learning", "art-collecting", "hobby-photography",
          "dance-training", "reading-challenge"
        ],
        reasoning: "Artistic and creative pursuits for expression and potential income"
      },

      // RETIREMENT & AGING
      retirement_aging: {
        templates: [
          "retirement-planning", "retirement-transition", "retirement-lifestyle", "elder-care",
          "end-of-life-planning", "estate-planning", "fixed-income-management",
          "downsizing-decisions", "grandparent-role", "health-decline-navigation",
          "caring-for-aging-parents"
        ],
        reasoning: "Later-life planning and aging-related decisions"
      },

      // HOUSING & LOCATION
      housing_location: {
        templates: [
          "apartment-hunting", "home-buying", "moving-relocation", "geographic-relocation",
          "mortgage-management", "home-renovation", "rental-management", "real-estate-investing",
          "investment-property", "home-automation", "interior-design", "downsizing-decisions"
        ],
        reasoning: "Housing and location decisions that affect life stability"
      },

      // TECHNOLOGY & DIGITAL
      technology_digital: {
        templates: [
          "app-development", "tech-startup-guide", "saas-startup", "mobile-app-startup",
          "3d-printing", "arduino-programming", "home-automation", "digital-nomad-planning",
          "technology-digital", "digital-detox", "social-media-management", "online-course"
        ],
        reasoning: "Technology adoption, digital business, and tech-life balance"
      },

      // EDUCATION & LEARNING
      education_learning: {
        templates: [
          "college-selection", "graduate-school-decisions", "skill-development",
          "language-learning", "online-course", "study-abroad-planning", "reading-challenge",
          "student-loan-strategy", "academic-struggles"
        ],
        reasoning: "Formal and informal education throughout life"
      },

      // HOBBIES & LIFESTYLE
      hobbies_lifestyle: {
        templates: [
          "hobby-project", "birdwatching", "antique-collecting", "art-collecting",
          "book-collecting", "wine-collection", "astronomy-hobby", "camping-trips",
          "cooking-mastery", "garden-planning", "urban-gardening", "smart-garden",
          "boat-maintenance", "car-maintenance", "sports-team", "pet-care"
        ],
        reasoning: "Personal interests and lifestyle choices for fulfillment"
      },

      // SOCIAL & COMMUNITY
      social_community: {
        templates: [
          "book-club", "sports-team", "volunteer-work", "nonprofit-management",
          "community-involvement", "social-entrepreneurship", "event-planning",
          "climate-action", "sustainable-living"
        ],
        reasoning: "Community engagement and social impact activities"
      },

      // SPECIAL POPULATIONS & CIRCUMSTANCES
      special_circumstances: {
        templates: [
          "disability-accommodation", "immigration-journey", "coming-out",
          "military-veteran-transition", "addiction-family-support", "sandwich-generation",
          "digital-nomad-planning", "workforce-reentry", "transportation-planning"
        ],
        reasoning: "Templates for specific life circumstances and populations"
      }
    }
  };

  return comprehensiveConnections;
}

// Count coverage
function analyzeCoverage(connections) {
  const clusteredTemplates = new Set();
  Object.values(connections.semantic_clusters).forEach(cluster => {
    cluster.templates.forEach(t => clusteredTemplates.add(t));
  });

  const allTemplates = getAllTemplateIds();
  const unclustered = allTemplates.filter(t => !clusteredTemplates.has(t));

  console.log(`📈 COVERAGE ANALYSIS:`);
  console.log(`   Total templates: ${allTemplates.length}`);
  console.log(`   Clustered: ${clusteredTemplates.size}`);
  console.log(`   Coverage: ${(clusteredTemplates.size / allTemplates.length * 100).toFixed(1)}%`);
  console.log(`\\n❌ STILL MISSING (${unclustered.length}):`);
  unclustered.forEach(t => console.log(`   - ${t}`));

  return { clusteredTemplates, unclustered };
}

// Run comprehensive analysis
if (require.main === module) {
  // Load existing comprehensive connections instead of regenerating
  const existingConnections = JSON.parse(fs.readFileSync('./template-connections-comprehensive.json', 'utf8'));
  const analysis = analyzeCoverage(existingConnections);

  console.log('\\n✅ Using existing comprehensive connections file');
}

module.exports = { generateComprehensiveConnections, analyzeCoverage };