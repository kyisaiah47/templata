import { GuidanceTemplate } from '@/types/template';

// Helper function to capitalize all words in a template name
function capitalizeTemplateName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

import { threeDPrintingTemplate } from '@/data/templates/template-3d-printing';
import { academicStrugglesTemplate } from '@/data/templates/template-academic-struggles';
import { addictionFamilySupportTemplate } from '@/data/templates/template-addiction-family-support';
import { addictionRecoveryTemplate } from '@/data/templates/template-addiction-recovery';
import { affiliateMarketingTemplate } from '@/data/templates/template-affiliate-marketing';
import { agingParentCareTemplate } from '@/data/templates/template-aging-parent-care';
import { antiqueCollectingTemplate } from '@/data/templates/template-antique-collecting';
import { apartmentHuntingTemplate } from '@/data/templates/template-apartment-hunting';
import { appDevelopmentTemplate } from '@/data/templates/template-app-development';
import { arduinoProgrammingTemplate } from '@/data/templates/template-arduino-programming';
import { artCollectingTemplate } from '@/data/templates/template-art-collecting';
import { artPortfolioTemplate } from '@/data/templates/template-art-portfolio';
import { astronomyHobbyTemplate } from '@/data/templates/template-astronomy-hobby';
import { babyPlanningTemplate } from '@/data/templates/template-baby-planning';
import { bankruptcyRecoveryTemplate } from '@/data/templates/template-bankruptcy-recovery';
import { birdwatchingTemplate } from '@/data/templates/template-birdwatching';
import { blendedFamilyCreationTemplate } from '@/data/templates/template-blended-family-creation';
import { blendedFamilyTemplate } from '@/data/templates/template-blended-family';
import { boatMaintenanceTemplate } from '@/data/templates/template-boat-maintenance';
import { bookClubTemplate } from '@/data/templates/template-book-club';
import { bookCollectingTemplate } from '@/data/templates/template-book-collecting';
import { bookWritingTemplate } from '@/data/templates/template-book-writing';
import { businessLaunchTemplate } from '@/data/templates/template-business-launch';
import { businessSuccessionTemplate } from '@/data/templates/template-business-succession';
import { campingTripsTemplate } from '@/data/templates/template-camping-trips';
import { carBuyingTemplate } from '@/data/templates/template-car-buying';
import { carMaintenanceTemplate } from '@/data/templates/template-car-maintenance';
import { careerPlateauTemplate } from '@/data/templates/template-career-plateau';
import { caringForAgingParentsTemplate } from '@/data/templates/template-caring-for-aging-parents';
import { chronicIllnessTemplate } from '@/data/templates/template-chronic-illness';
import { climateActionTemplate } from '@/data/templates/template-climate-action';
import { coachingBusinessTemplate } from '@/data/templates/template-coaching-business';
import { collegeSelectionTemplate } from '@/data/templates/template-college-selection';
import { collegeToCareerTransitionTemplate } from '@/data/templates/template-college-to-career-transition';
import { comingOutTemplate } from '@/data/templates/template-coming-out';
import { consultingBusinessTemplate } from '@/data/templates/template-consulting-business';
import { contentCreationBusinessTemplate } from '@/data/templates/template-content-creation-business';
import { contentCreationTemplate } from '@/data/templates/template-content-creation';
import { cookingMasteryTemplate } from '@/data/templates/template-cooking-mastery';
import { creativeFreelancingTemplate } from '@/data/templates/template-creative-freelancing';
import { creativeWritingTemplate } from '@/data/templates/template-creative-writing';
import { cryptoPortfolioTemplate } from '@/data/templates/template-crypto-portfolio';
import { danceTrainingTemplate } from '@/data/templates/template-dance-training';
import { deathOfSpouseTemplate } from '@/data/templates/template-death-of-spouse';
import { debtPayoffTemplate } from '@/data/templates/template-debt-payoff';
import { digitalDetoxTemplate } from '@/data/templates/template-digital-detox';
import { digitalNomadPlanningTemplate } from '@/data/templates/template-digital-nomad-planning';
import { disabilityAccommodationTemplate } from '@/data/templates/template-disability-accommodation';
import { divorceCoordinationTemplate } from '@/data/templates/template-divorce-coordination';
import { divorceProcessTemplate } from '@/data/templates/template-divorce-process';
import { downsizingDecisionsTemplate } from '@/data/templates/template-downsizing-decisions';
import { dropshippingTemplate } from '@/data/templates/template-dropshipping';
import { eCommerceStoreTemplate } from '@/data/templates/template-e-commerce-store';
import { earlyCareerAdvancementTemplate } from '@/data/templates/template-early-career-advancement';
import { elderCareTemplate } from '@/data/templates/template-elder-care';
import { emptyNestSyndromeTemplate } from '@/data/templates/template-empty-nest-syndrome';
import { emptyNestTemplate } from '@/data/templates/template-empty-nest';
import { endOfLifePlanningTemplate } from '@/data/templates/template-end-of-life-planning';
import { estatePlanningTemplate } from '@/data/templates/template-estate-planning';
import { eventPlanningTemplate } from '@/data/templates/template-event-planning';
import { executiveLeadershipTransitionTemplate } from '@/data/templates/template-executive-leadership-transition';
import { familyCrisisManagementTemplate } from '@/data/templates/template-family-crisis-management';
import { familyEstrangementTemplate } from '@/data/templates/template-family-estrangement';
import { familyTherapyTemplate } from '@/data/templates/template-family-therapy';
import { fashionDesignTemplate } from '@/data/templates/template-fashion-design';
import { financialIndependenceCollegeTemplate } from '@/data/templates/template-financial-independence-college';
import { financialIndependenceTemplate } from '@/data/templates/template-financial-independence';
import { financialRecoveryTemplate } from '@/data/templates/template-financial-recovery';
import { firstJobTransitionTemplate } from '@/data/templates/template-first-job-transition';
import { firstManagementRoleTemplate } from '@/data/templates/template-first-management-role';
import { firstSeriousRelationshipTemplate } from '@/data/templates/template-first-serious-relationship';
import { firstTimeParentTemplate } from '@/data/templates/template-first-time-parent';
import { fitnessJourneyTemplate } from '@/data/templates/template-fitness-journey';
import { fixedIncomeManagementTemplate } from '@/data/templates/template-fixed-income-management';
import { fraternitySororityDecisionsTemplate } from '@/data/templates/template-fraternity-sorority-decisions';
import { freelanceBusinessTemplate } from '@/data/templates/template-freelance-business';
import { gardenPlanningTemplate } from '@/data/templates/template-garden-planning';
import { geographicRelocationTemplate } from '@/data/templates/template-geographic-relocation';
import { graduateSchoolDecisionsTemplate } from '@/data/templates/template-graduate-school-decisions';
import { grandparentRoleTemplate } from '@/data/templates/template-grandparent-role';
import { griefLossTemplate } from '@/data/templates/template-grief-loss';
import { habitTrackingTemplate } from '@/data/templates/template-habit-tracking';
import { healthCrisisManagementTemplate } from '@/data/templates/template-health-crisis-management';
import { healthDeclineNavigationTemplate } from '@/data/templates/template-health-decline-navigation';
import { hobbyPhotographyTemplate } from '@/data/templates/template-hobby-photography';
import { hobbyProjectTemplate } from '@/data/templates/template-hobby-project';
import { homeAutomationTemplate } from '@/data/templates/template-home-automation';
import { homeBuyingTemplate } from '@/data/templates/template-home-buying';
import { homeRenovationTemplate } from '@/data/templates/template-home-renovation';
import { identityTheftRecoveryTemplate } from '@/data/templates/template-identity-theft-recovery';
import { identityTheftTemplate } from '@/data/templates/template-identity-theft';
import { immigrationJourneyTemplate } from '@/data/templates/template-immigration-journey';
import { insuranceOptimizationTemplate } from '@/data/templates/template-insurance-optimization';
import { interiorDesignTemplate } from '@/data/templates/template-interior-design';
import { internshipCompetitionTemplate } from '@/data/templates/template-internship-competition';
import { investingFinanceTemplate } from '@/data/templates/template-investing-finance';
import { investmentPortfolioTemplate } from '@/data/templates/template-investment-portfolio';
import { investmentPropertyTemplate } from '@/data/templates/template-investment-property';
import { jobLossNavigationTemplate } from '@/data/templates/template-job-loss-navigation';
import { jobLossRecoveryTemplate } from '@/data/templates/template-job-loss-recovery';
import { jobSearchTemplate } from '@/data/templates/template-job-search';
import { jobTransitionTemplate } from '@/data/templates/template-job-transition';
import { languageLearningTemplate } from '@/data/templates/template-language-learning';
import { legalIssueManagementTemplate } from '@/data/templates/template-legal-issue-management';
import { longDistanceRelationshipTemplate } from '@/data/templates/template-long-distance-relationship';
import { marathonTrainingTemplate } from '@/data/templates/template-marathon-training';
import { marriageMaintenanceTemplate } from '@/data/templates/template-marriage-maintenance';
import { mealPlanningTemplate } from '@/data/templates/template-meal-planning';
import { medicalTreatmentTemplate } from '@/data/templates/template-medical-treatment';
import { meditationJourneyTemplate } from '@/data/templates/template-meditation-journey';
import { mentalHealthCollegeTemplate } from '@/data/templates/template-mental-health-college';
import { mentalHealthSupportTemplate } from '@/data/templates/template-mental-health-support';
import { mentalHealthTemplate } from '@/data/templates/template-mental-health';
import { midlifeCrisisTemplate } from '@/data/templates/template-midlife-crisis';
import { midlifeHealthChangesTemplate } from '@/data/templates/template-midlife-health-changes';
import { militaryVeteranTransitionTemplate } from '@/data/templates/template-military-veteran-transition';
import { mindfulnessMeditationTemplate } from '@/data/templates/template-mindfulness-meditation';
import { mobileAppStartupTemplate } from '@/data/templates/template-mobile-app-startup';
import { mortgageManagementTemplate } from '@/data/templates/template-mortgage-management';
import { movingRelocationTemplate } from '@/data/templates/template-moving-relocation';
import { musicLearningTemplate } from '@/data/templates/template-music-learning';
import { musicProductionTemplate } from '@/data/templates/template-music-production';
import { naturalDisasterRecoveryTemplate } from '@/data/templates/template-natural-disaster-recovery';
import { nonprofitManagementTemplate } from '@/data/templates/template-nonprofit-management';
import { nonprofitStartupTemplate } from '@/data/templates/template-nonprofit-startup';
import { onlineBusinessLaunchTemplate } from '@/data/templates/template-online-business-launch';
import { onlineCourseTemplate } from '@/data/templates/template-online-course';
import { parentingGuidanceTemplate } from '@/data/templates/template-parenting-guidance';
import { peakEarningOptimizationTemplate } from '@/data/templates/template-peak-earning-optimization';
import { personalBrandingTemplate } from '@/data/templates/template-personal-branding';
import { personalFinanceMasteryTemplate } from '@/data/templates/template-personal-finance-mastery';
import { personalFinanceTemplate } from '@/data/templates/template-personal-finance';
import { personalTrainingTemplate } from '@/data/templates/template-personal-training';
import { petCareTemplate } from '@/data/templates/template-pet-care';
import { photographyBusinessTemplate } from '@/data/templates/template-photography-business';
import { podcastCreationTemplate } from '@/data/templates/template-podcast-creation';
import { professionalNetworkingTemplate } from '@/data/templates/template-professional-networking';
import { publicSpeakingTemplate } from '@/data/templates/template-public-speaking';
import { quarterLifeCrisisTemplate } from '@/data/templates/template-quarter-life-crisis';
import { readingChallengeTemplate } from '@/data/templates/template-reading-challenge';
import { realEstateInvestingTemplate } from '@/data/templates/template-real-estate-investing';
import { relationshipBreakupTemplate } from '@/data/templates/template-relationship-breakup';
import { relationshipCoachingTemplate } from '@/data/templates/template-relationship-coaching';
import { relationshipTherapyTemplate } from '@/data/templates/template-relationship-therapy';
import { rentalManagementTemplate } from '@/data/templates/template-rental-management';
import { restaurantOpeningTemplate } from '@/data/templates/template-restaurant-opening';
import { retirementLifestyleTemplate } from '@/data/templates/template-retirement-lifestyle';
import { retirementTransitionTemplate } from '@/data/templates/template-retirement-transition';
import { roommateNavigationTemplate } from '@/data/templates/template-roommate-navigation';
import { saasStartupTemplate } from '@/data/templates/template-saas-startup';
import { sandwichGenerationTemplate } from '@/data/templates/template-sandwich-generation';
import { sideHustleDevelopmentTemplate } from '@/data/templates/template-side-hustle-development';
import { skillDevelopmentTemplate } from '@/data/templates/template-skill-development';
import { smallBusinessLaunchTemplate } from '@/data/templates/template-small-business-launch';
import { smallBusinessTemplate } from '@/data/templates/template-small-business';
import { smartGardenTemplate } from '@/data/templates/template-smart-garden';
import { socialEntrepreneurshipTemplate } from '@/data/templates/template-social-entrepreneurship';
import { socialMediaManagementTemplate } from '@/data/templates/template-social-media-management';
import { spiritualAwakeningTemplate } from '@/data/templates/template-spiritual-awakening';
import { spiritualGrowthTemplate } from '@/data/templates/template-spiritual-growth';
import { sportsTeamTemplate } from '@/data/templates/template-sports-team';
import { stockTradingTemplate } from '@/data/templates/template-stock-trading';
import { stressManagementTemplate } from '@/data/templates/template-stress-management';
import { studentLoanStrategyTemplate } from '@/data/templates/template-student-loan-strategy';
import { studyAbroadPlanningTemplate } from '@/data/templates/template-study-abroad-planning';
import { sustainableLivingTemplate } from '@/data/templates/template-sustainable-living';
import { techStartupGuideTemplate } from '@/data/templates/template-tech-startup-guide';
import { technologyDigitalTemplate } from '@/data/templates/template-technology-digital';
import { teenageParentingTemplate } from '@/data/templates/template-teenage-parenting';
import { testTemplate } from '@/data/templates/template-test-template';
import { transportationPlanningTemplate } from '@/data/templates/template-transportation-planning';
import { urbanGardeningTemplate } from '@/data/templates/template-urban-gardening';
import { weightLossTemplate } from '@/data/templates/template-weight-loss';
import { wineCollectionTemplate } from '@/data/templates/template-wine-collection';
import { workforceReentryTemplate } from '@/data/templates/template-workforce-reentry';
import { yogaPracticeTemplate } from '@/data/templates/template-yoga-practice';
import { youtubeChannelTemplate } from '@/data/templates/template-youtube-channel';

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  popular?: boolean;
  featured?: boolean;
  expertVerified?: boolean;
  template: GuidanceTemplate;
}

export function getTemplate(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  return baseTemplate;
}

export const templateRegistry: TemplateRegistryEntry[] = [
  {
    id: "3d-printing",
    name: capitalizeTemplateName("3d printing"),
    description: "Comprehensive guidance and tools for 3d printing.",
    category: "Technology & Development",
    icon: "Box",
    url: "/3d-printing/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(threeDPrintingTemplate)
  },
  {
    id: "academic-struggles",
    name: capitalizeTemplateName("academic struggles"),
    description: "Comprehensive guidance and tools for academic struggles.",
    category: "Education & Learning",
    icon: "BookOpen",
    url: "/academic-struggles/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(academicStrugglesTemplate)
  },
  {
    id: "addiction-family-support",
    name: capitalizeTemplateName("addiction family support"),
    description: "Comprehensive guidance and tools for addiction family support.",
    category: "Health & Wellness",
    icon: "Users",
    url: "/addiction-family-support/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(addictionFamilySupportTemplate)
  },
  {
    id: "addiction-recovery",
    name: capitalizeTemplateName("addiction recovery"),
    description: "Comprehensive guidance and tools for addiction recovery.",
    category: "Health & Wellness",
    icon: "Shield",
    url: "/addiction-recovery/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(addictionRecoveryTemplate)
  },
  {
    id: "affiliate-marketing",
    name: capitalizeTemplateName("affiliate marketing"),
    description: "Comprehensive guidance and tools for affiliate marketing.",
    category: "Business & Career",
    icon: "Link",
    url: "/affiliate-marketing/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(affiliateMarketingTemplate)
  },
  {
    id: "aging-parent-care",
    name: capitalizeTemplateName("aging parent care"),
    description: "Comprehensive guidance and tools for aging parent care.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/aging-parent-care/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(agingParentCareTemplate)
  },
  {
    id: "antique-collecting",
    name: capitalizeTemplateName("antique collecting"),
    description: "Comprehensive guidance and tools for antique collecting.",
    category: "Hobbies & Interests",
    icon: "Clock",
    url: "/antique-collecting/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(antiqueCollectingTemplate)
  },
  {
    id: "apartment-hunting",
    name: capitalizeTemplateName("apartment hunting"),
    description: "Comprehensive guidance and tools for apartment hunting.",
    category: "Creative & Arts",
    icon: "Palette",
    url: "/apartment-hunting/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(apartmentHuntingTemplate)
  },
  {
    id: "app-development",
    name: capitalizeTemplateName("app development"),
    description: "Comprehensive guidance and tools for app development.",
    category: "Technology & Development",
    icon: "Code",
    url: "/app-development/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(appDevelopmentTemplate)
  },
  {
    id: "arduino-programming",
    name: capitalizeTemplateName("arduino programming"),
    description: "Comprehensive guidance and tools for arduino programming.",
    category: "Technology & Development",
    icon: "Circle",
    url: "/arduino-programming/template",
    popular: true,
    featured: false,
    expertVerified: false,
    template: getTemplate(arduinoProgrammingTemplate)
  },
  {
    id: "art-collecting",
    name: capitalizeTemplateName("art collecting"),
    description: "Comprehensive guidance and tools for art collecting.",
    category: "Creative & Arts",
    icon: "Palette",
    url: "/art-collecting/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(artCollectingTemplate)
  },
  {
    id: "art-portfolio",
    name: capitalizeTemplateName("art portfolio"),
    description: "Comprehensive guidance and tools for art portfolio.",
    category: "Creative & Arts",
    icon: "Palette",
    url: "/art-portfolio/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(artPortfolioTemplate)
  },
  {
    id: "astronomy-hobby",
    name: capitalizeTemplateName("astronomy hobby"),
    description: "Comprehensive guidance and tools for astronomy hobby.",
    category: "Hobbies & Interests",
    icon: "Star",
    url: "/astronomy-hobby/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(astronomyHobbyTemplate)
  },
  {
    id: "baby-planning",
    name: capitalizeTemplateName("baby planning"),
    description: "Comprehensive guidance and tools for baby planning.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/baby-planning/template",
    popular: false,
    featured: true,
    expertVerified: false,
    template: getTemplate(babyPlanningTemplate)
  },
  {
    id: "bankruptcy-recovery",
    name: capitalizeTemplateName("bankruptcy recovery"),
    description: "Comprehensive guidance and tools for bankruptcy recovery.",
    category: "Personal Life",
    icon: "AlertTriangle",
    url: "/bankruptcy-recovery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(bankruptcyRecoveryTemplate)
  },
  {
    id: "birdwatching",
    name: capitalizeTemplateName("birdwatching"),
    description: "Comprehensive guidance and tools for birdwatching.",
    category: "Hobbies & Interests",
    icon: "Eye",
    url: "/birdwatching/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(birdwatchingTemplate)
  },
  {
    id: "blended-family-creation",
    name: capitalizeTemplateName("blended family creation"),
    description: "Comprehensive guidance and tools for blended family creation.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/blended-family-creation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(blendedFamilyCreationTemplate)
  },
  {
    id: "blended-family",
    name: capitalizeTemplateName("blended family"),
    description: "Comprehensive guidance and tools for blended family.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/blended-family/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(blendedFamilyTemplate)
  },
  {
    id: "boat-maintenance",
    name: capitalizeTemplateName("boat maintenance"),
    description: "Comprehensive guidance and tools for boat maintenance.",
    category: "Travel & Transportation",
    icon: "Anchor",
    url: "/boat-maintenance/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(boatMaintenanceTemplate)
  },
  {
    id: "book-club",
    name: capitalizeTemplateName("book club"),
    description: "Comprehensive guidance and tools for book club.",
    category: "Creative & Arts",
    icon: "BookOpen",
    url: "/book-club/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(bookClubTemplate)
  },
  {
    id: "book-collecting",
    name: capitalizeTemplateName("book collecting"),
    description: "Comprehensive guidance and tools for book collecting.",
    category: "Creative & Arts",
    icon: "BookOpen",
    url: "/book-collecting/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(bookCollectingTemplate)
  },
  {
    id: "book-writing",
    name: capitalizeTemplateName("book writing"),
    description: "Comprehensive guidance and tools for book writing.",
    category: "Creative & Arts",
    icon: "BookOpen",
    url: "/book-writing/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(bookWritingTemplate)
  },
  {
    id: "business-launch",
    name: capitalizeTemplateName("business launch"),
    description: "Comprehensive guidance and tools for business launch.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/business-launch/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(businessLaunchTemplate)
  },
  {
    id: "business-succession",
    name: capitalizeTemplateName("business succession"),
    description: "Comprehensive guidance and tools for business succession.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/business-succession/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(businessSuccessionTemplate)
  },
  {
    id: "camping-trips",
    name: capitalizeTemplateName("camping trips"),
    description: "Comprehensive guidance and tools for camping trips.",
    category: "Hobbies & Interests",
    icon: "Tent",
    url: "/camping-trips/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(campingTripsTemplate)
  },
  {
    id: "car-buying",
    name: capitalizeTemplateName("car buying"),
    description: "Comprehensive guidance and tools for car buying.",
    category: "Travel & Transportation",
    icon: "Car",
    url: "/car-buying/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(carBuyingTemplate)
  },
  {
    id: "car-maintenance",
    name: capitalizeTemplateName("car maintenance"),
    description: "Comprehensive guidance and tools for car maintenance.",
    category: "Travel & Transportation",
    icon: "Car",
    url: "/car-maintenance/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(carMaintenanceTemplate)
  },
  {
    id: "career-plateau",
    name: capitalizeTemplateName("career plateau"),
    description: "Comprehensive guidance and tools for career plateau.",
    category: "Career Development",
    icon: "Target",
    url: "/career-plateau/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(careerPlateauTemplate)
  },
  {
    id: "caring-for-aging-parents",
    name: capitalizeTemplateName("caring for aging parents"),
    description: "Comprehensive guidance and tools for caring for aging parents.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/caring-for-aging-parents/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(caringForAgingParentsTemplate)
  },
  {
    id: "chronic-illness",
    name: capitalizeTemplateName("chronic illness"),
    description: "Comprehensive guidance and tools for chronic illness.",
    category: "Health & Wellness",
    icon: "Circle",
    url: "/chronic-illness/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(chronicIllnessTemplate)
  },
  {
    id: "climate-action",
    name: capitalizeTemplateName("climate action"),
    description: "Comprehensive guidance and tools for climate action.",
    category: "Personal Life",
    icon: "Leaf",
    url: "/climate-action/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(climateActionTemplate)
  },
  {
    id: "coaching-business",
    name: capitalizeTemplateName("coaching business"),
    description: "Comprehensive guidance and tools for coaching business.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/coaching-business/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(coachingBusinessTemplate)
  },
  {
    id: "college-selection",
    name: capitalizeTemplateName("college selection"),
    description: "Comprehensive guidance and tools for college selection.",
    category: "Education & Learning",
    icon: "GraduationCap",
    url: "/college-selection/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(collegeSelectionTemplate)
  },
  {
    id: "college-to-career-transition",
    name: capitalizeTemplateName("college to career transition"),
    description: "Comprehensive guidance and tools for college to career transition.",
    category: "Career Development",
    icon: "Target",
    url: "/college-to-career-transition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(collegeToCareerTransitionTemplate)
  },
  {
    id: "coming-out",
    name: capitalizeTemplateName("coming out"),
    description: "Comprehensive guidance and tools for coming out.",
    category: "Personal Growth",
    icon: "Circle",
    url: "/coming-out/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(comingOutTemplate)
  },
  {
    id: "consulting-business",
    name: capitalizeTemplateName("consulting business"),
    description: "Comprehensive guidance and tools for consulting business.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/consulting-business/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(consultingBusinessTemplate)
  },
  {
    id: "content-creation-business",
    name: capitalizeTemplateName("content creation business"),
    description: "Comprehensive guidance and tools for content creation business.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/content-creation-business/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(contentCreationBusinessTemplate)
  },
  {
    id: "content-creation",
    name: capitalizeTemplateName("content creation"),
    description: "Comprehensive guidance and tools for content creation.",
    category: "Creative & Arts",
    icon: "Circle",
    url: "/content-creation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(contentCreationTemplate)
  },
  {
    id: "cooking-mastery",
    name: capitalizeTemplateName("cooking mastery"),
    description: "Comprehensive guidance and tools for cooking mastery.",
    category: "Personal Life",
    icon: "ChefHat",
    url: "/cooking-mastery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(cookingMasteryTemplate)
  },
  {
    id: "creative-freelancing",
    name: capitalizeTemplateName("creative freelancing"),
    description: "Comprehensive guidance and tools for creative freelancing.",
    category: "Creative & Arts",
    icon: "Palette",
    url: "/creative-freelancing/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(creativeFreelancingTemplate)
  },
  {
    id: "creative-writing",
    name: capitalizeTemplateName("creative writing"),
    description: "Comprehensive guidance and tools for creative writing.",
    category: "Creative & Arts",
    icon: "Palette",
    url: "/creative-writing/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(creativeWritingTemplate)
  },
  {
    id: "crypto-portfolio",
    name: capitalizeTemplateName("crypto portfolio"),
    description: "Comprehensive guidance and tools for crypto portfolio.",
    category: "Finance & Money",
    icon: "Coins",
    url: "/crypto-portfolio/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(cryptoPortfolioTemplate)
  },
  {
    id: "dance-training",
    name: capitalizeTemplateName("dance training"),
    description: "Comprehensive guidance and tools for dance training.",
    category: "Hobbies & Interests",
    icon: "Circle",
    url: "/dance-training/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(danceTrainingTemplate)
  },
  {
    id: "death-of-spouse",
    name: capitalizeTemplateName("death of spouse"),
    description: "Comprehensive guidance and tools for death of spouse.",
    category: "Life Transitions",
    icon: "Circle",
    url: "/death-of-spouse/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(deathOfSpouseTemplate)
  },
  {
    id: "debt-payoff",
    name: capitalizeTemplateName("debt payoff"),
    description: "Comprehensive guidance and tools for debt payoff.",
    category: "Finance & Money",
    icon: "DollarSign",
    url: "/debt-payoff/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(debtPayoffTemplate)
  },
  {
    id: "digital-detox",
    name: capitalizeTemplateName("digital detox"),
    description: "Comprehensive guidance and tools for digital detox.",
    category: "Personal Life",
    icon: "Smartphone",
    url: "/digital-detox/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(digitalDetoxTemplate)
  },
  {
    id: "digital-nomad-planning",
    name: capitalizeTemplateName("digital nomad planning"),
    description: "Comprehensive guidance and tools for digital nomad planning.",
    category: "Travel & Transportation",
    icon: "Circle",
    url: "/digital-nomad-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(digitalNomadPlanningTemplate)
  },
  {
    id: "disability-accommodation",
    name: capitalizeTemplateName("disability accommodation"),
    description: "Comprehensive guidance and tools for disability accommodation.",
    category: "Crisis & Support",
    icon: "Accessibility",
    url: "/disability-accommodation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(disabilityAccommodationTemplate)
  },
  {
    id: "divorce-coordination",
    name: capitalizeTemplateName("divorce coordination"),
    description: "Comprehensive guidance and tools for divorce coordination.",
    category: "Family & Relationships",
    icon: "UserX",
    url: "/divorce-coordination/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(divorceCoordinationTemplate)
  },
  {
    id: "divorce-process",
    name: capitalizeTemplateName("divorce process"),
    description: "Comprehensive guidance and tools for divorce process.",
    category: "Family & Relationships",
    icon: "UserX",
    url: "/divorce-process/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(divorceProcessTemplate)
  },
  {
    id: "downsizing-decisions",
    name: capitalizeTemplateName("downsizing decisions"),
    description: "Comprehensive guidance and tools for downsizing decisions.",
    category: "Personal Life",
    icon: "Circle",
    url: "/downsizing-decisions/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(downsizingDecisionsTemplate)
  },
  {
    id: "dropshipping",
    name: capitalizeTemplateName("dropshipping"),
    description: "Comprehensive guidance and tools for dropshipping.",
    category: "Business & Career",
    icon: "Package",
    url: "/dropshipping/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(dropshippingTemplate)
  },
  {
    id: "e-commerce-store",
    name: capitalizeTemplateName("e commerce store"),
    description: "Comprehensive guidance and tools for e commerce store.",
    category: "Business & Career",
    icon: "ShoppingCart",
    url: "/e-commerce-store/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(eCommerceStoreTemplate)
  },
  {
    id: "early-career-advancement",
    name: capitalizeTemplateName("early career advancement"),
    description: "Comprehensive guidance and tools for early career advancement.",
    category: "Career Development",
    icon: "Target",
    url: "/early-career-advancement/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(earlyCareerAdvancementTemplate)
  },
  {
    id: "elder-care",
    name: capitalizeTemplateName("elder care"),
    description: "Comprehensive guidance and tools for elder care.",
    category: "Family & Relationships",
    icon: "Car",
    url: "/elder-care/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(elderCareTemplate)
  },
  {
    id: "empty-nest-syndrome",
    name: capitalizeTemplateName("empty nest syndrome"),
    description: "Comprehensive guidance and tools for empty nest syndrome.",
    category: "Life Transitions",
    icon: "Home",
    url: "/empty-nest-syndrome/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(emptyNestSyndromeTemplate)
  },
  {
    id: "empty-nest",
    name: capitalizeTemplateName("empty nest"),
    description: "Comprehensive guidance and tools for empty nest.",
    category: "Life Transitions",
    icon: "Home",
    url: "/empty-nest/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(emptyNestTemplate)
  },
  {
    id: "end-of-life-planning",
    name: capitalizeTemplateName("end of life planning"),
    description: "Comprehensive guidance and tools for end of life planning.",
    category: "Life Transitions",
    icon: "Circle",
    url: "/end-of-life-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(endOfLifePlanningTemplate)
  },
  {
    id: "estate-planning",
    name: capitalizeTemplateName("estate planning"),
    description: "Comprehensive guidance and tools for estate planning.",
    category: "Life Transitions",
    icon: "Circle",
    url: "/estate-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(estatePlanningTemplate)
  },
  {
    id: "event-planning",
    name: capitalizeTemplateName("event planning"),
    description: "Comprehensive guidance and tools for event planning.",
    category: "Personal Life",
    icon: "Circle",
    url: "/event-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(eventPlanningTemplate)
  },
  {
    id: "executive-leadership-transition",
    name: capitalizeTemplateName("executive leadership transition"),
    description: "Comprehensive guidance and tools for executive leadership transition.",
    category: "Personal Life",
    icon: "Crown",
    url: "/executive-leadership-transition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(executiveLeadershipTransitionTemplate)
  },
  {
    id: "family-crisis-management",
    name: capitalizeTemplateName("family crisis management"),
    description: "Comprehensive guidance and tools for family crisis management.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/family-crisis-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(familyCrisisManagementTemplate)
  },
  {
    id: "family-estrangement",
    name: capitalizeTemplateName("family estrangement"),
    description: "Comprehensive guidance and tools for family estrangement.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/family-estrangement/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(familyEstrangementTemplate)
  },
  {
    id: "family-therapy",
    name: capitalizeTemplateName("family therapy"),
    description: "Comprehensive guidance and tools for family therapy.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/family-therapy/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(familyTherapyTemplate)
  },
  {
    id: "fashion-design",
    name: capitalizeTemplateName("fashion design"),
    description: "Comprehensive guidance and tools for fashion design.",
    category: "Creative & Arts",
    icon: "Shirt",
    url: "/fashion-design/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(fashionDesignTemplate)
  },
  {
    id: "financial-independence-college",
    name: capitalizeTemplateName("financial independence college"),
    description: "Comprehensive guidance and tools for financial independence college.",
    category: "Finance & Money",
    icon: "GraduationCap",
    url: "/financial-independence-college/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(financialIndependenceCollegeTemplate)
  },
  {
    id: "financial-independence",
    name: capitalizeTemplateName("financial independence"),
    description: "Comprehensive guidance and tools for financial independence.",
    category: "Finance & Money",
    icon: "Circle",
    url: "/financial-independence/template",
    popular: false,
    featured: true,
    expertVerified: false,
    template: getTemplate(financialIndependenceTemplate)
  },
  {
    id: "financial-recovery",
    name: capitalizeTemplateName("financial recovery"),
    description: "Comprehensive guidance and tools for financial recovery.",
    category: "Finance & Money",
    icon: "Circle",
    url: "/financial-recovery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(financialRecoveryTemplate)
  },
  {
    id: "first-job-transition",
    name: capitalizeTemplateName("first job transition"),
    description: "Comprehensive guidance and tools for first job transition.",
    category: "Career Development",
    icon: "Target",
    url: "/first-job-transition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(firstJobTransitionTemplate)
  },
  {
    id: "first-management-role",
    name: capitalizeTemplateName("first management role"),
    description: "Comprehensive guidance and tools for first management role.",
    category: "Career Development",
    icon: "Circle",
    url: "/first-management-role/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(firstManagementRoleTemplate)
  },
  {
    id: "first-serious-relationship",
    name: capitalizeTemplateName("first serious relationship"),
    description: "Comprehensive guidance and tools for first serious relationship.",
    category: "Family & Relationships",
    icon: "Circle",
    url: "/first-serious-relationship/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(firstSeriousRelationshipTemplate)
  },
  {
    id: "first-time-parent",
    name: capitalizeTemplateName("first time parent"),
    description: "Comprehensive guidance and tools for first time parent.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/first-time-parent/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(firstTimeParentTemplate)
  },
  {
    id: "fitness-journey",
    name: capitalizeTemplateName("fitness journey"),
    description: "Comprehensive guidance and tools for fitness journey.",
    category: "Health & Wellness",
    icon: "Activity",
    url: "/fitness-journey/template",
    popular: false,
    featured: true,
    expertVerified: false,
    template: getTemplate(fitnessJourneyTemplate)
  },
  {
    id: "fixed-income-management",
    name: capitalizeTemplateName("fixed income management"),
    description: "Comprehensive guidance and tools for fixed income management.",
    category: "Personal Life",
    icon: "DollarSign",
    url: "/fixed-income-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(fixedIncomeManagementTemplate)
  },
  {
    id: "fraternity-sorority-decisions",
    name: capitalizeTemplateName("fraternity sorority decisions"),
    description: "Comprehensive guidance and tools for fraternity sorority decisions.",
    category: "Education & Learning",
    icon: "Users",
    url: "/fraternity-sorority-decisions/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(fraternitySororityDecisionsTemplate)
  },
  {
    id: "freelance-business",
    name: capitalizeTemplateName("freelance business"),
    description: "Comprehensive guidance and tools for freelance business.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/freelance-business/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(freelanceBusinessTemplate)
  },
  {
    id: "garden-planning",
    name: capitalizeTemplateName("garden planning"),
    description: "Comprehensive guidance and tools for garden planning.",
    category: "Home & Living",
    icon: "Leaf",
    url: "/garden-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(gardenPlanningTemplate)
  },
  {
    id: "geographic-relocation",
    name: capitalizeTemplateName("geographic relocation"),
    description: "Comprehensive guidance and tools for geographic relocation.",
    category: "Home & Living",
    icon: "Circle",
    url: "/geographic-relocation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(geographicRelocationTemplate)
  },
  {
    id: "graduate-school-decisions",
    name: capitalizeTemplateName("graduate school decisions"),
    description: "Comprehensive guidance and tools for graduate school decisions.",
    category: "Education & Learning",
    icon: "GraduationCap",
    url: "/graduate-school-decisions/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(graduateSchoolDecisionsTemplate)
  },
  {
    id: "grandparent-role",
    name: capitalizeTemplateName("grandparent role"),
    description: "Comprehensive guidance and tools for grandparent role.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/grandparent-role/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(grandparentRoleTemplate)
  },
  {
    id: "grief-loss",
    name: capitalizeTemplateName("grief loss"),
    description: "Comprehensive guidance and tools for grief loss.",
    category: "Life Transitions",
    icon: "Heart",
    url: "/grief-loss/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(griefLossTemplate)
  },
  {
    id: "habit-tracking",
    name: capitalizeTemplateName("habit tracking"),
    description: "Comprehensive guidance and tools for habit tracking.",
    category: "Personal Life",
    icon: "CheckCircle",
    url: "/habit-tracking/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(habitTrackingTemplate)
  },
  {
    id: "health-crisis-management",
    name: capitalizeTemplateName("health crisis management"),
    description: "Comprehensive guidance and tools for health crisis management.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/health-crisis-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(healthCrisisManagementTemplate)
  },
  {
    id: "health-decline-navigation",
    name: capitalizeTemplateName("health decline navigation"),
    description: "Comprehensive guidance and tools for health decline navigation.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/health-decline-navigation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(healthDeclineNavigationTemplate)
  },
  {
    id: "hobby-photography",
    name: capitalizeTemplateName("hobby photography"),
    description: "Comprehensive guidance and tools for hobby photography.",
    category: "Creative & Arts",
    icon: "Camera",
    url: "/hobby-photography/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(hobbyPhotographyTemplate)
  },
  {
    id: "hobby-project",
    name: capitalizeTemplateName("hobby project"),
    description: "Comprehensive guidance and tools for hobby project.",
    category: "Hobbies & Interests",
    icon: "Circle",
    url: "/hobby-project/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(hobbyProjectTemplate)
  },
  {
    id: "home-automation",
    name: capitalizeTemplateName("home automation"),
    description: "Comprehensive guidance and tools for home automation.",
    category: "Home & Living",
    icon: "Home",
    url: "/home-automation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(homeAutomationTemplate)
  },
  {
    id: "home-buying",
    name: capitalizeTemplateName("home buying"),
    description: "Comprehensive guidance and tools for home buying.",
    category: "Home & Living",
    icon: "Home",
    url: "/home-buying/template",
    popular: false,
    featured: true,
    expertVerified: false,
    template: getTemplate(homeBuyingTemplate)
  },
  {
    id: "home-renovation",
    name: capitalizeTemplateName("home renovation"),
    description: "Comprehensive guidance and tools for home renovation.",
    category: "Home & Living",
    icon: "Home",
    url: "/home-renovation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(homeRenovationTemplate)
  },
  {
    id: "identity-theft-recovery",
    name: capitalizeTemplateName("identity theft recovery"),
    description: "Comprehensive guidance and tools for identity theft recovery.",
    category: "Crisis & Support",
    icon: "Shield",
    url: "/identity-theft-recovery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(identityTheftRecoveryTemplate)
  },
  {
    id: "identity-theft",
    name: capitalizeTemplateName("identity theft"),
    description: "Comprehensive guidance and tools for identity theft.",
    category: "Crisis & Support",
    icon: "Shield",
    url: "/identity-theft/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(identityTheftTemplate)
  },
  {
    id: "immigration-journey",
    name: capitalizeTemplateName("immigration journey"),
    description: "Comprehensive guidance and tools for immigration journey.",
    category: "Crisis & Support",
    icon: "Globe",
    url: "/immigration-journey/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(immigrationJourneyTemplate)
  },
  {
    id: "insurance-optimization",
    name: capitalizeTemplateName("insurance optimization"),
    description: "Comprehensive guidance and tools for insurance optimization.",
    category: "Finance & Money",
    icon: "Shield",
    url: "/insurance-optimization/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(insuranceOptimizationTemplate)
  },
  {
    id: "interior-design",
    name: capitalizeTemplateName("interior design"),
    description: "Comprehensive guidance and tools for interior design.",
    category: "Personal Life",
    icon: "PaintBucket",
    url: "/interior-design/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(interiorDesignTemplate)
  },
  {
    id: "internship-competition",
    name: capitalizeTemplateName("internship competition"),
    description: "Comprehensive guidance and tools for internship competition.",
    category: "Career Development",
    icon: "PawPrint",
    url: "/internship-competition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(internshipCompetitionTemplate)
  },
  {
    id: "investing-finance",
    name: capitalizeTemplateName("investing finance"),
    description: "Comprehensive guidance and tools for investing finance.",
    category: "Finance & Money",
    icon: "DollarSign",
    url: "/investing-finance/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(investingFinanceTemplate)
  },
  {
    id: "investment-portfolio",
    name: capitalizeTemplateName("investment portfolio"),
    description: "Comprehensive guidance and tools for investment portfolio.",
    category: "Finance & Money",
    icon: "DollarSign",
    url: "/investment-portfolio/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(investmentPortfolioTemplate)
  },
  {
    id: "investment-property",
    name: capitalizeTemplateName("investment property"),
    description: "Comprehensive guidance and tools for investment property.",
    category: "Finance & Money",
    icon: "DollarSign",
    url: "/investment-property/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(investmentPropertyTemplate)
  },
  {
    id: "job-loss-navigation",
    name: capitalizeTemplateName("job loss navigation"),
    description: "Comprehensive guidance and tools for job loss navigation.",
    category: "Career Development",
    icon: "Target",
    url: "/job-loss-navigation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(jobLossNavigationTemplate)
  },
  {
    id: "job-loss-recovery",
    name: capitalizeTemplateName("job loss recovery"),
    description: "Comprehensive guidance and tools for job loss recovery.",
    category: "Career Development",
    icon: "Target",
    url: "/job-loss-recovery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(jobLossRecoveryTemplate)
  },
  {
    id: "job-search",
    name: capitalizeTemplateName("job search"),
    description: "Comprehensive guidance and tools for job search.",
    category: "Career Development",
    icon: "Target",
    url: "/job-search/template",
    popular: false,
    featured: true,
    expertVerified: false,
    template: getTemplate(jobSearchTemplate)
  },
  {
    id: "job-transition",
    name: capitalizeTemplateName("job transition"),
    description: "Comprehensive guidance and tools for job transition.",
    category: "Career Development",
    icon: "Target",
    url: "/job-transition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(jobTransitionTemplate)
  },
  {
    id: "language-learning",
    name: capitalizeTemplateName("language learning"),
    description: "Comprehensive guidance and tools for language learning.",
    category: "Education & Learning",
    icon: "GraduationCap",
    url: "/language-learning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(languageLearningTemplate)
  },
  {
    id: "legal-issue-management",
    name: capitalizeTemplateName("legal issue management"),
    description: "Comprehensive guidance and tools for legal issue management.",
    category: "Crisis & Support",
    icon: "Scale",
    url: "/legal-issue-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(legalIssueManagementTemplate)
  },
  {
    id: "long-distance-relationship",
    name: capitalizeTemplateName("long distance relationship"),
    description: "Comprehensive guidance and tools for long distance relationship.",
    category: "Family & Relationships",
    icon: "Circle",
    url: "/long-distance-relationship/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(longDistanceRelationshipTemplate)
  },
  {
    id: "marathon-training",
    name: capitalizeTemplateName("marathon training"),
    description: "Comprehensive guidance and tools for marathon training.",
    category: "Health & Wellness",
    icon: "Activity",
    url: "/marathon-training/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(marathonTrainingTemplate)
  },
  {
    id: "marriage-maintenance",
    name: capitalizeTemplateName("marriage maintenance"),
    description: "Comprehensive guidance and tools for marriage maintenance.",
    category: "Family & Relationships",
    icon: "Circle",
    url: "/marriage-maintenance/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(marriageMaintenanceTemplate)
  },
  {
    id: "meal-planning",
    name: capitalizeTemplateName("meal planning"),
    description: "Comprehensive guidance and tools for meal planning.",
    category: "Personal Life",
    icon: "ChefHat",
    url: "/meal-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mealPlanningTemplate)
  },
  {
    id: "medical-treatment",
    name: capitalizeTemplateName("medical treatment"),
    description: "Comprehensive guidance and tools for medical treatment.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/medical-treatment/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(medicalTreatmentTemplate)
  },
  {
    id: "meditation-journey",
    name: capitalizeTemplateName("meditation journey"),
    description: "Comprehensive guidance and tools for meditation journey.",
    category: "Health & Wellness",
    icon: "Sun",
    url: "/meditation-journey/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(meditationJourneyTemplate)
  },
  {
    id: "mental-health-college",
    name: capitalizeTemplateName("mental health college"),
    description: "Comprehensive guidance and tools for mental health college.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/mental-health-college/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mentalHealthCollegeTemplate)
  },
  {
    id: "mental-health-support",
    name: capitalizeTemplateName("mental health support"),
    description: "Comprehensive guidance and tools for mental health support.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/mental-health-support/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mentalHealthSupportTemplate)
  },
  {
    id: "mental-health",
    name: capitalizeTemplateName("mental health"),
    description: "Comprehensive guidance and tools for mental health.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/mental-health/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mentalHealthTemplate)
  },
  {
    id: "midlife-crisis",
    name: capitalizeTemplateName("midlife crisis"),
    description: "Comprehensive guidance and tools for midlife crisis.",
    category: "Life Transitions",
    icon: "Shield",
    url: "/midlife-crisis/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(midlifeCrisisTemplate)
  },
  {
    id: "midlife-health-changes",
    name: capitalizeTemplateName("midlife health changes"),
    description: "Comprehensive guidance and tools for midlife health changes.",
    category: "Health & Wellness",
    icon: "Heart",
    url: "/midlife-health-changes/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(midlifeHealthChangesTemplate)
  },
  {
    id: "military-veteran-transition",
    name: capitalizeTemplateName("military veteran transition"),
    description: "Comprehensive guidance and tools for military veteran transition.",
    category: "Career Development",
    icon: "Shield",
    url: "/military-veteran-transition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(militaryVeteranTransitionTemplate)
  },
  {
    id: "mindfulness-meditation",
    name: capitalizeTemplateName("mindfulness meditation"),
    description: "Comprehensive guidance and tools for mindfulness meditation.",
    category: "Health & Wellness",
    icon: "Sun",
    url: "/mindfulness-meditation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mindfulnessMeditationTemplate)
  },
  {
    id: "mobile-app-startup",
    name: capitalizeTemplateName("mobile app startup"),
    description: "Comprehensive guidance and tools for mobile app startup.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/mobile-app-startup/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mobileAppStartupTemplate)
  },
  {
    id: "mortgage-management",
    name: capitalizeTemplateName("mortgage management"),
    description: "Comprehensive guidance and tools for mortgage management.",
    category: "Finance & Money",
    icon: "Key",
    url: "/mortgage-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(mortgageManagementTemplate)
  },
  {
    id: "moving-relocation",
    name: capitalizeTemplateName("moving relocation"),
    description: "Comprehensive guidance and tools for moving relocation.",
    category: "Home & Living",
    icon: "Truck",
    url: "/moving-relocation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(movingRelocationTemplate)
  },
  {
    id: "music-learning",
    name: capitalizeTemplateName("music learning"),
    description: "Comprehensive guidance and tools for music learning.",
    category: "Education & Learning",
    icon: "GraduationCap",
    url: "/music-learning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(musicLearningTemplate)
  },
  {
    id: "music-production",
    name: capitalizeTemplateName("music production"),
    description: "Comprehensive guidance and tools for music production.",
    category: "Creative & Arts",
    icon: "Music",
    url: "/music-production/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(musicProductionTemplate)
  },
  {
    id: "natural-disaster-recovery",
    name: capitalizeTemplateName("natural disaster recovery"),
    description: "Comprehensive guidance and tools for natural disaster recovery.",
    category: "Crisis & Support",
    icon: "Shield",
    url: "/natural-disaster-recovery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(naturalDisasterRecoveryTemplate)
  },
  {
    id: "nonprofit-management",
    name: capitalizeTemplateName("nonprofit management"),
    description: "Comprehensive guidance and tools for nonprofit management.",
    category: "Business & Career",
    icon: "Heart",
    url: "/nonprofit-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(nonprofitManagementTemplate)
  },
  {
    id: "nonprofit-startup",
    name: capitalizeTemplateName("nonprofit startup"),
    description: "Comprehensive guidance and tools for nonprofit startup.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/nonprofit-startup/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(nonprofitStartupTemplate)
  },
  {
    id: "online-business-launch",
    name: capitalizeTemplateName("online business launch"),
    description: "Comprehensive guidance and tools for online business launch.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/online-business-launch/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(onlineBusinessLaunchTemplate)
  },
  {
    id: "online-course",
    name: capitalizeTemplateName("online course"),
    description: "Comprehensive guidance and tools for online course.",
    category: "Personal Life",
    icon: "Circle",
    url: "/online-course/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(onlineCourseTemplate)
  },
  {
    id: "parenting-guidance",
    name: capitalizeTemplateName("parenting guidance"),
    description: "Comprehensive guidance and tools for parenting guidance.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/parenting-guidance/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(parentingGuidanceTemplate)
  },
  {
    id: "peak-earning-optimization",
    name: capitalizeTemplateName("peak earning optimization"),
    description: "Comprehensive guidance and tools for peak earning optimization.",
    category: "Personal Life",
    icon: "TrendingUp",
    url: "/peak-earning-optimization/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(peakEarningOptimizationTemplate)
  },
  {
    id: "personal-branding",
    name: capitalizeTemplateName("personal branding"),
    description: "Comprehensive guidance and tools for personal branding.",
    category: "Personal Life",
    icon: "Circle",
    url: "/personal-branding/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(personalBrandingTemplate)
  },
  {
    id: "personal-finance-mastery",
    name: capitalizeTemplateName("personal finance mastery"),
    description: "Comprehensive guidance and tools for personal finance mastery.",
    category: "Finance & Money",
    icon: "DollarSign",
    url: "/personal-finance-mastery/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(personalFinanceMasteryTemplate)
  },
  {
    id: "personal-finance",
    name: capitalizeTemplateName("personal finance"),
    description: "Comprehensive guidance and tools for personal finance.",
    category: "Finance & Money",
    icon: "DollarSign",
    url: "/personal-finance/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(personalFinanceTemplate)
  },
  {
    id: "personal-training",
    name: capitalizeTemplateName("personal training"),
    description: "Comprehensive guidance and tools for personal training.",
    category: "Personal Life",
    icon: "Circle",
    url: "/personal-training/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(personalTrainingTemplate)
  },
  {
    id: "pet-care",
    name: capitalizeTemplateName("pet care"),
    description: "Comprehensive guidance and tools for pet care.",
    category: "Travel & Transportation",
    icon: "Car",
    url: "/pet-care/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(petCareTemplate)
  },
  {
    id: "photography-business",
    name: capitalizeTemplateName("photography business"),
    description: "Comprehensive guidance and tools for photography business.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/photography-business/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(photographyBusinessTemplate)
  },
  {
    id: "podcast-creation",
    name: capitalizeTemplateName("podcast creation"),
    description: "Comprehensive guidance and tools for podcast creation.",
    category: "Creative & Arts",
    icon: "Mic",
    url: "/podcast-creation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(podcastCreationTemplate)
  },
  {
    id: "professional-networking",
    name: capitalizeTemplateName("professional networking"),
    description: "Comprehensive guidance and tools for professional networking.",
    category: "Career Development",
    icon: "Users",
    url: "/professional-networking/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(professionalNetworkingTemplate)
  },
  {
    id: "public-speaking",
    name: capitalizeTemplateName("public speaking"),
    description: "Comprehensive guidance and tools for public speaking.",
    category: "Career Development",
    icon: "Mic",
    url: "/public-speaking/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(publicSpeakingTemplate)
  },
  {
    id: "quarter-life-crisis",
    name: capitalizeTemplateName("quarter life crisis"),
    description: "Comprehensive guidance and tools for quarter life crisis.",
    category: "Creative & Arts",
    icon: "Palette",
    url: "/quarter-life-crisis/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(quarterLifeCrisisTemplate)
  },
  {
    id: "reading-challenge",
    name: capitalizeTemplateName("reading challenge"),
    description: "Comprehensive guidance and tools for reading challenge.",
    category: "Hobbies & Interests",
    icon: "BookOpen",
    url: "/reading-challenge/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(readingChallengeTemplate)
  },
  {
    id: "real-estate-investing",
    name: capitalizeTemplateName("real estate investing"),
    description: "Comprehensive guidance and tools for real estate investing.",
    category: "Finance & Money",
    icon: "Building",
    url: "/real-estate-investing/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(realEstateInvestingTemplate)
  },
  {
    id: "relationship-breakup",
    name: capitalizeTemplateName("relationship breakup"),
    description: "Comprehensive guidance and tools for relationship breakup.",
    category: "Family & Relationships",
    icon: "Circle",
    url: "/relationship-breakup/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(relationshipBreakupTemplate)
  },
  {
    id: "relationship-coaching",
    name: capitalizeTemplateName("relationship coaching"),
    description: "Comprehensive guidance and tools for relationship coaching.",
    category: "Business & Career",
    icon: "Users",
    url: "/relationship-coaching/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(relationshipCoachingTemplate)
  },
  {
    id: "relationship-therapy",
    name: capitalizeTemplateName("relationship therapy"),
    description: "Comprehensive guidance and tools for relationship therapy.",
    category: "Family & Relationships",
    icon: "Circle",
    url: "/relationship-therapy/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(relationshipTherapyTemplate)
  },
  {
    id: "rental-management",
    name: capitalizeTemplateName("rental management"),
    description: "Comprehensive guidance and tools for rental management.",
    category: "Finance & Money",
    icon: "KeyRound",
    url: "/rental-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(rentalManagementTemplate)
  },
  {
    id: "restaurant-opening",
    name: capitalizeTemplateName("restaurant opening"),
    description: "Comprehensive guidance and tools for restaurant opening.",
    category: "Business & Career",
    icon: "UtensilsCrossed",
    url: "/restaurant-opening/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(restaurantOpeningTemplate)
  },
  {
    id: "retirement-lifestyle",
    name: capitalizeTemplateName("retirement lifestyle"),
    description: "Comprehensive guidance and tools for retirement lifestyle.",
    category: "Life Transitions",
    icon: "Clock",
    url: "/retirement-lifestyle/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(retirementLifestyleTemplate)
  },
  {
    id: "retirement-transition",
    name: capitalizeTemplateName("retirement transition"),
    description: "Comprehensive guidance and tools for retirement transition.",
    category: "Life Transitions",
    icon: "Clock",
    url: "/retirement-transition/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(retirementTransitionTemplate)
  },
  {
    id: "roommate-navigation",
    name: capitalizeTemplateName("roommate navigation"),
    description: "Comprehensive guidance and tools for roommate navigation.",
    category: "Personal Life",
    icon: "Circle",
    url: "/roommate-navigation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(roommateNavigationTemplate)
  },
  {
    id: "saas-startup",
    name: capitalizeTemplateName("saas startup"),
    description: "Comprehensive guidance and tools for saas startup.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/saas-startup/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(saasStartupTemplate)
  },
  {
    id: "sandwich-generation",
    name: capitalizeTemplateName("sandwich generation"),
    description: "Comprehensive guidance and tools for sandwich generation.",
    category: "Personal Life",
    icon: "Users",
    url: "/sandwich-generation/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(sandwichGenerationTemplate)
  },
  {
    id: "side-hustle-development",
    name: capitalizeTemplateName("side hustle development"),
    description: "Comprehensive guidance and tools for side hustle development.",
    category: "Personal Life",
    icon: "Zap",
    url: "/side-hustle-development/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(sideHustleDevelopmentTemplate)
  },
  {
    id: "skill-development",
    name: capitalizeTemplateName("skill development"),
    description: "Comprehensive guidance and tools for skill development.",
    category: "Career Development",
    icon: "Award",
    url: "/skill-development/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(skillDevelopmentTemplate)
  },
  {
    id: "small-business-launch",
    name: capitalizeTemplateName("small business launch"),
    description: "Comprehensive guidance and tools for small business launch.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/small-business-launch/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(smallBusinessLaunchTemplate)
  },
  {
    id: "small-business",
    name: capitalizeTemplateName("small business"),
    description: "Comprehensive guidance and tools for small business.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/small-business/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(smallBusinessTemplate)
  },
  {
    id: "smart-garden",
    name: capitalizeTemplateName("smart garden"),
    description: "Comprehensive guidance and tools for smart garden.",
    category: "Home & Living",
    icon: "Palette",
    url: "/smart-garden/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(smartGardenTemplate)
  },
  {
    id: "social-entrepreneurship",
    name: capitalizeTemplateName("social entrepreneurship"),
    description: "Comprehensive guidance and tools for social entrepreneurship.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/social-entrepreneurship/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(socialEntrepreneurshipTemplate)
  },
  {
    id: "social-media-management",
    name: capitalizeTemplateName("social media management"),
    description: "Comprehensive guidance and tools for social media management.",
    category: "Personal Life",
    icon: "Share2",
    url: "/social-media-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(socialMediaManagementTemplate)
  },
  {
    id: "spiritual-awakening",
    name: capitalizeTemplateName("spiritual awakening"),
    description: "Comprehensive guidance and tools for spiritual awakening.",
    category: "Personal Growth",
    icon: "Sun",
    url: "/spiritual-awakening/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(spiritualAwakeningTemplate)
  },
  {
    id: "spiritual-growth",
    name: capitalizeTemplateName("spiritual growth"),
    description: "Comprehensive guidance and tools for spiritual growth.",
    category: "Personal Growth",
    icon: "Sun",
    url: "/spiritual-growth/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(spiritualGrowthTemplate)
  },
  {
    id: "sports-team",
    name: capitalizeTemplateName("sports team"),
    description: "Comprehensive guidance and tools for sports team.",
    category: "Hobbies & Interests",
    icon: "Trophy",
    url: "/sports-team/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(sportsTeamTemplate)
  },
  {
    id: "stock-trading",
    name: capitalizeTemplateName("stock trading"),
    description: "Comprehensive guidance and tools for stock trading.",
    category: "Finance & Money",
    icon: "TrendingUp",
    url: "/stock-trading/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(stockTradingTemplate)
  },
  {
    id: "stress-management",
    name: capitalizeTemplateName("stress management"),
    description: "Comprehensive guidance and tools for stress management.",
    category: "Health & Wellness",
    icon: "Brain",
    url: "/stress-management/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(stressManagementTemplate)
  },
  {
    id: "student-loan-strategy",
    name: capitalizeTemplateName("student loan strategy"),
    description: "Comprehensive guidance and tools for student loan strategy.",
    category: "Education & Learning",
    icon: "GraduationCap",
    url: "/student-loan-strategy/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(studentLoanStrategyTemplate)
  },
  {
    id: "study-abroad-planning",
    name: capitalizeTemplateName("study abroad planning"),
    description: "Comprehensive guidance and tools for study abroad planning.",
    category: "Education & Learning",
    icon: "Globe",
    url: "/study-abroad-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(studyAbroadPlanningTemplate)
  },
  {
    id: "sustainable-living",
    name: capitalizeTemplateName("sustainable living"),
    description: "Comprehensive guidance and tools for sustainable living.",
    category: "Personal Life",
    icon: "Recycle",
    url: "/sustainable-living/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(sustainableLivingTemplate)
  },
  {
    id: "tech-startup-guide",
    name: capitalizeTemplateName("tech startup guide"),
    description: "Comprehensive guidance and tools for tech startup guide.",
    category: "Business & Career",
    icon: "Briefcase",
    url: "/tech-startup-guide/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(techStartupGuideTemplate)
  },
  {
    id: "technology-digital",
    name: capitalizeTemplateName("technology digital"),
    description: "Comprehensive guidance and tools for technology digital.",
    category: "Technology & Development",
    icon: "Code",
    url: "/technology-digital/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(technologyDigitalTemplate)
  },
  {
    id: "teenage-parenting",
    name: capitalizeTemplateName("teenage parenting"),
    description: "Comprehensive guidance and tools for teenage parenting.",
    category: "Family & Relationships",
    icon: "Users",
    url: "/teenage-parenting/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(teenageParentingTemplate)
  },
  {
    id: "test-template",
    name: capitalizeTemplateName("test template"),
    description: "Comprehensive guidance and tools for test template.",
    category: "Personal Life",
    icon: "TestTube",
    url: "/test-template/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(testTemplate)
  },
  {
    id: "transportation-planning",
    name: capitalizeTemplateName("transportation planning"),
    description: "Comprehensive guidance and tools for transportation planning.",
    category: "Travel & Transportation",
    icon: "Car",
    url: "/transportation-planning/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(transportationPlanningTemplate)
  },
  {
    id: "urban-gardening",
    name: capitalizeTemplateName("urban gardening"),
    description: "Comprehensive guidance and tools for urban gardening.",
    category: "Home & Living",
    icon: "Leaf",
    url: "/urban-gardening/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(urbanGardeningTemplate)
  },
  {
    id: "weight-loss",
    name: capitalizeTemplateName("weight loss"),
    description: "Comprehensive guidance and tools for weight loss.",
    category: "Health & Wellness",
    icon: "Circle",
    url: "/weight-loss/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(weightLossTemplate)
  },
  {
    id: "wine-collection",
    name: capitalizeTemplateName("wine collection"),
    description: "Comprehensive guidance and tools for wine collection.",
    category: "Hobbies & Interests",
    icon: "Wine",
    url: "/wine-collection/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(wineCollectionTemplate)
  },
  {
    id: "workforce-reentry",
    name: capitalizeTemplateName("workforce reentry"),
    description: "Comprehensive guidance and tools for workforce reentry.",
    category: "Career Development",
    icon: "Circle",
    url: "/workforce-reentry/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(workforceReentryTemplate)
  },
  {
    id: "yoga-practice",
    name: capitalizeTemplateName("yoga practice"),
    description: "Comprehensive guidance and tools for yoga practice.",
    category: "Health & Wellness",
    icon: "Activity",
    url: "/yoga-practice/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(yogaPracticeTemplate)
  },
  {
    id: "youtube-channel",
    name: capitalizeTemplateName("youtube channel"),
    description: "Comprehensive guidance and tools for youtube channel.",
    category: "Creative & Arts",
    icon: "Play",
    url: "/youtube-channel/template",
    popular: false,
    featured: false,
    expertVerified: false,
    template: getTemplate(youtubeChannelTemplate)
  }
];

// Helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};

export const getAllCategories = (): string[] => {
  const categories = Array.from(new Set(templateRegistry.map(template => template.category)));
  return categories.sort();
};

export const getTemplateCount = (): number => {
  return templateRegistry.length;
};

export const searchTemplates = (query: string): TemplateRegistryEntry[] => {
  const lowerQuery = query.toLowerCase();
  return templateRegistry.filter(template =>
    template.name.toLowerCase().includes(lowerQuery) ||
    template.description.toLowerCase().includes(lowerQuery) ||
    template.category.toLowerCase().includes(lowerQuery) ||
    template.template.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getResourcesAsBlogPosts = () => {
  return templateRegistry.flatMap(template =>
    template.template.resources?.map(resource => ({
      id: `${template.id}-${resource.title.toLowerCase().replace(/\s+/g, '-')}`,
      title: resource.title,
      excerpt: resource.description || template.description,
      content: resource.description || template.description,
      author: 'Templata Team',
      publishedAt: template.template.lastUpdated,
      readTime: '5 min read',
      category: template.category,
      featured: template.featured || false,
      tags: template.template.tags || [],
      slug: `${template.id}-${resource.title.toLowerCase().replace(/\s+/g, '-')}`,
      type: resource.type === 'article' ? 'article' : 'guide',
      difficulty: template.template.difficulty || 'beginner',
    })) || []
  );
};
