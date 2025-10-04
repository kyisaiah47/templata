import { GuidanceTemplate } from '@/types/template';

export const template: GuidanceTemplate = {
  id: "meal-planning",
  title: "Weekly Meal Planning & Prep Guide",
  description: "A comprehensive system for planning nutritious meals, managing grocery shopping, and streamlining meal preparation for busy lifestyles",
  category: "Health & Wellness",
  icon: "utensils",
  difficulty: "beginner",
  estimatedTime: "2-3 hours weekly",
  tags: [
    "meal planning",
    "nutrition",
    "grocery shopping",
    "meal prep",
    "healthy eating",
    "weekly planning",
    "food budget",
    "recipe organization",
    "kitchen efficiency",
    "time management",
    "family meals",
    "dietary restrictions",
    "portion control",
    "food waste reduction",
    "seasonal eating",
    "batch cooking",
    "menu planning",
    "pantry organization",
    "cooking schedule",
    "balanced diet",
    "food allergies",
    "vegetarian meals",
    "protein planning",
    "carb cycling",
    "clean eating"
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
};
