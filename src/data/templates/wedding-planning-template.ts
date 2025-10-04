import { GuidanceTemplate } from '@/types/template';

export const template: GuidanceTemplate = {
  id: "wedding-planning",
  title: "Complete Wedding Planning Guide",
  description: "A comprehensive step-by-step guide to planning your dream wedding from engagement to honeymoon, covering all essential aspects including budget, venue, vendors, timeline, and logistics",
  category: "Life Planning",
  icon: "heart",
  difficulty: "intermediate",
  estimatedTime: "6-12 months",
  tags: [
    "wedding planning",
    "marriage",
    "budget planning",
    "venue selection",
    "vendor management",
    "guest list",
    "invitations",
    "catering",
    "photography",
    "videography",
    "flowers",
    "music",
    "entertainment",
    "timeline",
    "checklist",
    "bridal party",
    "ceremony",
    "reception",
    "honeymoon",
    "legal requirements",
    "dress shopping",
    "suit selection",
    "rings",
    "decorations",
    "seating arrangements"
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
};
