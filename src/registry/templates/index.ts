// Template-specific blog exports
import { manualBlogPosts as homeBuyingBlogs } from './home-buying-blogs';
import { manualBlogPosts as weddingPlanningBlogs } from './wedding-planning-blogs';
import { manualBlogPosts as babyPlanningBlogs } from './baby-planning-blogs';
import { manualBlogPosts as jobSearchBlogs } from './job-search-blogs';
import { manualBlogPosts as collegePlanningBlogs } from './college-planning-blogs';
import { manualBlogPosts as budgetPlanningBlogs } from './budget-planning-blogs';
import { manualBlogPosts as fitnessJourneyBlogs } from './fitness-journey-blogs';
import { manualBlogPosts as travelPlanningBlogs } from './travel-planning-blogs';
import { manualBlogPosts as movingRelocationBlogs } from './moving-relocation-blogs';
import { manualBlogPosts as retirementPlanningBlogs } from './retirement-planning-blogs';

import type { BlogPost } from '../blogs';

// Combine all template-generated articles
export const allTemplateBlogPosts: BlogPost[] = [
  ...homeBuyingBlogs,
  ...weddingPlanningBlogs,
  ...babyPlanningBlogs,
  ...jobSearchBlogs,
  ...collegePlanningBlogs,
  ...budgetPlanningBlogs,
  ...fitnessJourneyBlogs,
  ...travelPlanningBlogs,
  ...movingRelocationBlogs,
  ...retirementPlanningBlogs,
];

// Export individual template collections for template-specific queries
export {
  homeBuyingBlogs,
  weddingPlanningBlogs,
  babyPlanningBlogs,
  jobSearchBlogs,
  collegePlanningBlogs,
  budgetPlanningBlogs,
  fitnessJourneyBlogs,
  travelPlanningBlogs,
  movingRelocationBlogs,
  retirementPlanningBlogs,
};

// Helper to get blogs by template name
export const getBlogsByTemplate = (templateName: string): BlogPost[] => {
  switch (templateName) {
    case 'home-buying':
      return homeBuyingBlogs;
    case 'wedding-planning':
      return weddingPlanningBlogs;
    case 'baby-planning':
      return babyPlanningBlogs;
    case 'job-search':
      return jobSearchBlogs;
    case 'college-planning':
      return collegePlanningBlogs;
    case 'budget-planning':
      return budgetPlanningBlogs;
    case 'fitness-journey':
      return fitnessJourneyBlogs;
    case 'travel-planning':
      return travelPlanningBlogs;
    case 'moving-relocation':
      return movingRelocationBlogs;
    case 'retirement-planning':
      return retirementPlanningBlogs;
    default:
      return [];
  }
};