import { GuidanceTemplate } from '@/types/template';

export const template: GuidanceTemplate = {
  id: "car-buying",
  title: "Car Buying Guide",
  description: "A comprehensive template to help navigate the car buying process from research to purchase",
  category: "Life Planning",
  icon: "car",
  difficulty: "intermediate",
  estimatedTime: "2-4 weeks",
  tags: [
    "car buying",
    "vehicle purchase",
    "auto financing",
    "car loan",
    "dealership",
    "private seller",
    "trade-in",
    "down payment",
    "credit score",
    "car insurance",
    "vehicle inspection",
    "test drive",
    "negotiation",
    "warranty",
    "maintenance",
    "depreciation",
    "monthly payment",
    "interest rate",
    "car research",
    "vehicle history",
    "pre-approval",
    "car shopping",
    "automotive",
    "transportation"
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
};
