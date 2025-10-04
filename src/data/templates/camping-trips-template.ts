import { GuidanceTemplate } from '@/types/template';

export const template: GuidanceTemplate = {
  id: "camping-trips",
  title: "Ultimate Camping Trip Planning Guide",
  description: "A comprehensive template to plan memorable and safe camping adventures, from gear preparation to campsite selection and activity planning",
  category: "Life Planning",
  icon: "tent",
  difficulty: "intermediate",
  estimatedTime: "2-4 hours",
  tags: [
    "camping",
    "outdoor adventure",
    "nature",
    "hiking",
    "backpacking",
    "wilderness",
    "gear checklist",
    "campsite selection",
    "meal planning",
    "safety preparation",
    "weather planning",
    "first aid",
    "navigation",
    "wildlife awareness",
    "leave no trace",
    "outdoor cooking",
    "shelter setup",
    "sleeping systems",
    "water purification",
    "fire safety",
    "emergency preparedness",
    "outdoor skills",
    "recreation planning",
    "family camping",
    "solo camping"
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
};
