import { LucideIcon } from 'lucide-react';
import { 
  Rocket, Shield, Heart, Clock, TrendingUp, Lightbulb, FileText, DollarSign, Target, Users,
  Briefcase, Search, Handshake, Award, BookOpen,
  Baby, Stethoscope, Calendar, Activity,
  Home, MapPin, CreditCard, HandCoins, Truck,
  Sparkles, CheckCircle2, Zap, Camera, Music
} from 'lucide-react';

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HeroCard {
  badge: string;
  badgeVariant?: 'default' | 'secondary' | 'outline';
  content: string;
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

interface GuidedNote {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface HeroBenefit {
  text: string;
}

export interface LandingPageData {
  // SEO & Metadata (optional)
  metadata?: any;
  jsonLd?: any;
  faqJsonLd?: any;

  // Hero Section
  badgeIcon: LucideIcon;
  badgeText: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  ctaText: string;
  appPath: string;
  heroCards?: HeroCard[];
  heroBenefits?: HeroBenefit[];

  // Process Section
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];

  // Benefits Section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: Benefit[];

  // Features Section
  featuresIcon: LucideIcon;
  featuresTitle: string;
  featuresDescription: string;
  features: string[];

  // Optional Sections
  howItWorks?: HowItWorksStep[];
  guidedNotes?: GuidedNote[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];

  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  finalCtaText: string;
}

export const landingPageRegistry: Record<string, LandingPageData> = {
  'wedding-planning': {
    // SEO metadata
    metadata: {
      title: 'Wedding Planning Template | Save 50+ Hours Planning Your Perfect Wedding | Templata',
      description: 'Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Used by 10,000+ couples. Save 50+ hours of planning time. Free to start.',
      keywords: 'wedding planning template, wedding budget tracker, wedding guest list, wedding checklist, wedding planner spreadsheet, wedding vendor list, wedding timeline template, wedding planning guide, wedding organization, wedding planning tools',
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Wedding Planning Template",
      "description": "Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Save 50+ hours of planning time.",
      "url": "https://templata.com/wedding-planning",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "10000"
      },
      "creator": {
        "@type": "Organization",
        "name": "Templata"
      }
    },
    badgeIcon: Heart,
    badgeText: 'Most Popular Wedding Template',
    heroTitle: 'Plan Your Perfect',
    heroHighlight: 'Wedding Day',
    heroDescription: 'Everything you need to organize your dream wedding in one beautiful template. From budget tracking to guest management, we\'ve got every detail covered.',
    ctaText: 'Start Planning Free',
    appPath: '/wedding-planning/app',
    heroBenefits: [
      { text: 'Save 50+ hours of planning time' },
      { text: 'Track budgets up to $100K+' },
      { text: 'Manage 300+ guest weddings' }
    ],
    processTitle: 'Complete Wedding Planning System',
    processDescription: 'Our comprehensive framework guides you through every aspect of wedding planning with expert guidance.',
    processSteps: [
      {
        icon: DollarSign,
        title: 'Budget & Finance Planning',
        description: 'Set your budget, track expenses, and manage vendor payments with detailed financial planning tools.'
      },
      {
        icon: MapPin,
        title: 'Venue Selection & Booking',
        description: 'Research venues, compare options, and secure your perfect location with booking checklists.'
      },
      {
        icon: Users,
        title: 'Guest Management & RSVPs',
        description: 'Organize guest lists, track RSVPs, manage plus-ones, and create seating arrangements.'
      },
      {
        icon: Briefcase,
        title: 'Vendor Coordination',
        description: 'Find, evaluate, and coordinate with photographers, caterers, florists, and other vendors.'
      },
      {
        icon: Heart,
        title: 'Ceremony & Reception Planning',
        description: 'Plan your ceremony details, reception timeline, and special moments for your perfect day.'
      },
      {
        icon: Sparkles,
        title: 'Final Details & Execution',
        description: 'Coordinate final details, create day-of timelines, and ensure everything runs smoothly.'
      }
    ],
    benefitsTitle: 'Why Choose Our Wedding Template',
    benefitsDescription: 'Built by experts, designed for busy couples who want to plan their perfect day without the stress.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Setup in Minutes',
        description: 'Quick guided wizard gets you started with all your wedding details in under 5 minutes.'
      },
      {
        icon: Shield,
        title: 'Expert Created',
        description: 'Built by professional wedding planners with 15+ years of industry experience.'
      },
      {
        icon: Clock,
        title: 'Progress Tracking',
        description: 'Visual dashboards and timelines keep you on schedule and stress-free.'
      },
      {
        icon: CheckCircle2,
        title: 'Complete System',
        description: 'Everything in one place - no more scattered spreadsheets or forgotten tasks.'
      },
      {
        icon: Users,
        title: 'Share & Collaborate',
        description: 'Invite your partner, family, and wedding party to collaborate on planning.'
      },
      {
        icon: FileText,
        title: 'Export & Print',
        description: 'Generate beautiful PDFs and printable checklists for vendors and venues.'
      }
    ],
    howItWorks: [
      {
        step: "1",
        title: "Quick Setup Wizard",
        description: "Answer 8 simple questions about your wedding vision, budget, and timeline. Takes just 3 minutes."
      },
      {
        step: "2", 
        title: "Personalized Template",
        description: "Get a fully customized wedding planning workspace with your details, vendors, and timeline pre-filled."
      },
      {
        step: "3",
        title: "Plan & Track Progress",
        description: "Use guided checklists, budget trackers, and timeline tools to plan every detail stress-free."
      },
      {
        step: "4",
        title: "Perfect Wedding Day",
        description: "Execute your perfectly planned wedding with printable timelines, vendor contacts, and day-of schedules."
      }
    ],
    guidedNotes: [
      { name: "Wedding Timeline & Countdown", icon: Calendar, description: "Plan every detail with expert timing guidance" },
      { name: "Vendor Questions & Contracts", icon: FileText, description: "Essential questions to ask each vendor type" },
      { name: "Guest RSVP Tracking", icon: Users, description: "Manage invitations and responses seamlessly" },
      { name: "Seating Arrangements", icon: MapPin, description: "Create perfect table arrangements" },
      { name: "Wedding Day Emergency Kit", icon: Shield, description: "Be prepared for any situation" },
      { name: "Photography Shot List", icon: Camera, description: "Capture every important moment" },
      { name: "Music & Playlist Planning", icon: Music, description: "Perfect soundtrack for your day" },
      { name: "Vows & Ceremony Script", icon: Heart, description: "Write meaningful vows and plan ceremony flow" }
    ],
    testimonials: [
      {
        name: "Sarah & Michael",
        text: "This template saved us over 50 hours of planning time and kept us organized throughout the entire 12-month process!",
        rating: 5
      },
      {
        name: "Emily & James", 
        text: "The budget tracker helped us save $3,200 by catching vendor overcharges. We stayed under budget and had our dream wedding.",
        rating: 5
      },
      {
        name: "Lisa & David",
        text: "Managing 15+ vendors became effortless. The contract tracking alone prevented 3 major scheduling conflicts.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What's included in the wedding planning template?",
        answer: "Everything you need: budget tracker with 50+ expense categories, guest list manager with RSVP tracking, vendor contact database, wedding timeline builder, seating chart planner, photography shot lists, music playlist organizer, and 12+ guided planning checklists written by professional wedding planners."
      },
      {
        question: "How long does it take to set up the wedding planner?",
        answer: "Just 3-5 minutes! Our guided setup wizard asks 8 key questions about your wedding date, budget, guest count, and venue preferences. The template automatically customizes all sections with your information, so you can start planning immediately."
      },
      {
        question: "Can I track my wedding budget with this template?",
        answer: "Yes! The budget tracker includes 50+ pre-loaded expense categories (venue, catering, photography, flowers, etc.), payment schedule tracking, vendor deposit monitoring, and automatic calculations. You'll see exactly where every dollar goes and get alerts when approaching budget limits."
      },
      {
        question: "Does the template help with guest list management?",
        answer: "Absolutely. Manage unlimited guests with RSVP tracking, meal preferences, plus-one management, address collection for invitations, and an integrated seating chart planner. Export guest lists for vendors and track responses in real-time."
      },
      {
        question: "How does the vendor coordination feature work?",
        answer: "Store all vendor contacts, contracts, and communications in one place. Track payment schedules, contract deadlines, and vendor availability. Includes templates for 15+ vendor types with essential questions to ask each one."
      },
      {
        question: "Is this better than using spreadsheets for wedding planning?",
        answer: "Much better! Unlike scattered spreadsheets, everything connects - your guest count affects catering costs, vendor schedules sync with your timeline, and budget changes update automatically. Plus you get professional guidance and checklists spreadsheets don't provide."
      },
      {
        question: "Can my fiancé and family help with planning using this template?",
        answer: "Yes! Share your planning workspace with your partner, parents, or wedding party. Set permissions for who can edit vs view different sections. Everyone stays updated on progress and can contribute to planning."
      },
      {
        question: "What if I'm planning a small/large wedding?",
        answer: "The template scales perfectly. Whether you're planning an intimate 20-person ceremony or a 300-guest celebration, all tools adapt to your guest count and budget. Small weddings can skip sections like extensive seating charts, while large weddings get detailed coordination tools."
      },
      {
        question: "How far in advance should I start using this wedding planner?",
        answer: "Ideally 12-18 months before your wedding date, but it's helpful at any stage. The template includes timeline recommendations for booking vendors 6-12 months out, sending invitations 8 weeks before, and final confirmations 1 week prior."
      },
      {
        question: "Can I print or export my wedding plans?",
        answer: "Yes! Generate beautiful PDFs for vendors, printable timelines for your wedding day, guest lists for venues, and emergency contact sheets. Export individual sections or your complete wedding plan in multiple formats."
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need for Your Perfect Day',
    featuresDescription: 'Comprehensive wedding planning toolkit with expert guidance, templates, and organizational tools.',
    features: [
      'Complete budget tracker with 50+ expense categories',
      'Guest list manager with RSVP tracking',
      'Vendor contact database and contract tracking',
      'Wedding timeline builder and countdown',
      'Seating chart planner and table arrangements',
      'Photography shot lists and must-have moments',
      'Music playlist organizer for ceremony and reception',
      'Day-of emergency kit and coordination tools'
    ],
    ctaTitle: 'Start Planning Your Dream Wedding Today',
    ctaDescription: 'Join thousands of couples who have organized their perfect wedding day with our comprehensive template.',
    finalCtaText: 'Start Planning Free',
  },
  'business-launch': {
    badgeIcon: Rocket,
    badgeText: 'Business Launch',
    heroTitle: 'Launch Your',
    heroHighlight: 'Dream Business',
    heroDescription: 'Complete step-by-step guidance from idea validation to successful launch. Build a sustainable business with expert frameworks and proven strategies.',
    ctaText: 'Start Building',
    appPath: '/business-launch/app',
    heroCards: [
      {
        badge: 'Market Research',
        content: 'Validated business idea with clear target market analysis'
      },
      {
        badge: 'Legal Setup',
        badgeVariant: 'secondary',
        content: 'Proper business structure and compliance framework'
      },
      {
        badge: 'Funding',
        badgeVariant: 'outline',
        content: 'Financial plan with clear funding strategy and projections'
      },
      {
        badge: 'Marketing',
        content: 'Brand identity and customer acquisition strategy'
      }
    ],
    processTitle: 'Complete Business Launch Framework',
    processDescription: 'Our systematic 6-phase approach takes you from idea to successful launch with expert guidance at every step.',
    processSteps: [
      {
        icon: Lightbulb,
        title: 'Business Validation & Market Research',
        description: 'Validate your business idea, research target market, and analyze competitors to ensure market fit.'
      },
      {
        icon: FileText,
        title: 'Legal Structure & Compliance',
        description: 'Choose the right business entity, register your business, and ensure legal compliance from day one.'
      },
      {
        icon: DollarSign,
        title: 'Financial Planning & Funding',
        description: 'Create financial projections, explore funding options, and establish accounting systems.'
      },
      {
        icon: Target,
        title: 'Brand Development & Marketing Strategy',
        description: 'Build your brand identity, develop marketing strategy, and create customer acquisition plan.'
      },
      {
        icon: Users,
        title: 'Operations & Systems Setup',
        description: 'Establish operational processes, hire team members, and implement business systems.'
      },
      {
        icon: Rocket,
        title: 'Launch Preparation & Growth Planning',
        description: 'Execute your launch strategy, measure performance, and plan for sustainable growth.'
      }
    ],
    benefitsTitle: 'Why Entrepreneurs Choose Our Framework',
    benefitsDescription: 'Proven methodology used by thousands of successful businesses to minimize risk and accelerate growth.',
    benefits: [
      {
        icon: Shield,
        title: 'Reduced Risk',
        description: 'Comprehensive validation and planning minimize costly mistakes and business failures'
      },
      {
        icon: Heart,
        title: 'Expert Guidance',
        description: 'Proven frameworks and advice from successful entrepreneurs and business experts'
      },
      {
        icon: Clock,
        title: 'Faster Launch',
        description: 'Structured approach accelerates time-to-market and reduces decision paralysis'
      },
      {
        icon: TrendingUp,
        title: 'Scalable Foundation',
        description: 'Build systems and processes designed for growth from the very beginning'
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need for Business Success',
    featuresDescription: 'Comprehensive toolkit covering every aspect of business launch with frameworks, templates, and expert insights.',
    features: [
      'Market validation frameworks and customer research methods',
      'Business structure selection and legal compliance guidance',
      'Financial modeling templates and funding strategy roadmaps',
      'Brand development toolkit and marketing launch plans',
      'Operations setup checklists and team building guides',
      'Launch timeline templates and performance tracking systems',
      'Investor pitch deck frameworks and fundraising strategies',
      'Post-launch growth planning and scaling methodologies'
    ],
    ctaTitle: 'Ready to Launch Your Business?',
    ctaDescription: 'Join thousands of entrepreneurs who have successfully launched their businesses using our comprehensive framework and expert guidance.',
    finalCtaText: 'Start Your Business Launch Journey',
  },

  'job-search': {
    badgeIcon: Briefcase,
    badgeText: 'Career Strategy',
    heroTitle: 'Land Your Dream Job',
    heroHighlight: 'Strategically',
    heroDescription: 'Master the job search process with expert guidance, proven strategies, and actionable frameworks that get results.',
    ctaText: 'Start Your Job Search',
    appPath: '/job-search/app',
    heroCards: [
      {
        badge: 'Resume',
        content: 'ATS-optimized format with quantified achievements'
      },
      {
        badge: 'Interview',
        badgeVariant: 'secondary',
        content: 'STAR method stories prepared for behavioral questions'
      },
      {
        badge: 'Network',
        badgeVariant: 'outline',
        content: 'Strategic connections in target companies'
      },
      {
        badge: 'Offer',
        content: 'Negotiated 25% above initial offer'
      }
    ],
    processTitle: 'Strategic Job Search Process',
    processDescription: 'Our proven 6-step framework takes you from career uncertainty to landing offers at your target companies.',
    processSteps: [
      {
        icon: Target,
        title: 'Career Assessment & Goals',
        description: 'Define your target roles, assess your skills, and identify your unique value proposition in the market.'
      },
      {
        icon: FileText,
        title: 'Application Materials',
        description: 'Create compelling resumes, cover letters, and portfolios optimized for ATS and hiring managers.'
      },
      {
        icon: Search,
        title: 'Strategic Job Search',
        description: 'Execute multi-channel search strategy using networking, job boards, and recruiter relationships.'
      },
      {
        icon: Users,
        title: 'Interview Preparation',
        description: 'Master STAR method storytelling, company research, and technical preparation for all interview formats.'
      },
      {
        icon: Handshake,
        title: 'Offer Evaluation',
        description: 'Negotiate compensation packages and evaluate opportunities to make the best career decisions.'
      },
      {
        icon: TrendingUp,
        title: 'Career Development',
        description: 'Build long-term career success through continuous learning and professional growth strategies.'
      }
    ],
    benefitsTitle: 'Why Our Approach Works',
    benefitsDescription: 'Data-driven strategies and expert guidance that deliver measurable results.',
    benefits: [
      {
        icon: Clock,
        title: 'Accelerated Timeline',
        description: 'Strategic approach reduces average job search time from 6+ months to 2-3 months'
      },
      {
        icon: TrendingUp,
        title: 'Higher Compensation',
        description: 'Negotiation strategies and positioning tactics typically result in 15-25% higher offers'
      },
      {
        icon: Target,
        title: 'Better Role Fit',
        description: 'Systematic evaluation process leads to roles that align with career goals and values'
      },
      {
        icon: Award,
        title: 'Professional Growth',
        description: 'Develop career management skills that benefit you throughout your professional journey'
      }
    ],
    featuresIcon: BookOpen,
    featuresTitle: 'Everything You Need to Succeed',
    featuresDescription: 'Comprehensive toolkit with templates, guides, and expert strategies used by career professionals.',
    features: [
      'Career assessment and goal-setting framework',
      'ATS-optimized resume templates and strategies',
      'LinkedIn profile optimization guide',
      'Interview preparation with STAR method training',
      'Salary negotiation tactics and market research',
      'Networking strategies and relationship building',
      'Application tracking and follow-up systems',
      'Professional development planning'
    ],
    ctaTitle: 'Ready to Transform Your Career?',
    ctaDescription: 'Join thousands of professionals who have successfully navigated their job search with our strategic framework.',
    finalCtaText: 'Start Your Job Search Strategy',
  },

  'baby-planning': {
    badgeIcon: Baby,
    badgeText: 'Baby Planning',
    heroTitle: 'Prepare for Your',
    heroHighlight: 'Little One',
    heroDescription: 'Complete guidance for expecting parents from pregnancy through baby\'s first year. Feel confident and prepared for parenthood.',
    ctaText: 'Start Planning',
    appPath: '/baby-planning/app',
    heroCards: [
      {
        badge: 'Prenatal Care',
        content: 'Scheduled appointments and health monitoring timeline'
      },
      {
        badge: 'Nursery',
        badgeVariant: 'secondary',
        content: 'Safe, functional space designed for baby and parents'
      },
      {
        badge: 'Budget',
        badgeVariant: 'outline',
        content: 'First-year costs planned and savings strategies in place'
      },
      {
        badge: 'Birth Plan',
        content: 'Labor preferences and hospital logistics organized'
      }
    ],
    processTitle: 'Complete Baby Planning Journey',
    processDescription: 'Our comprehensive 6-step framework guides you through every aspect of preparing for parenthood.',
    processSteps: [
      {
        icon: Stethoscope,
        title: 'Pregnancy Preparation & Health',
        description: 'Essential health preparations, prenatal care, and lifestyle adjustments for a healthy pregnancy.'
      },
      {
        icon: DollarSign,
        title: 'Financial Planning & Insurance',
        description: 'Budget for baby expenses, understand insurance coverage, and plan for parental leave.'
      },
      {
        icon: Home,
        title: 'Nursery Setup & Baby Gear',
        description: 'Plan the nursery layout, select essential gear, and prepare your home for baby\'s arrival.'
      },
      {
        icon: Calendar,
        title: 'Birth Planning & Hospital Preparation',
        description: 'Create your birth plan, prepare for labor and delivery, and organize hospital logistics.'
      },
      {
        icon: Baby,
        title: 'Newborn Care & Feeding',
        description: 'Learn essential newborn care skills, establish feeding routines, and understand baby development.'
      },
      {
        icon: Activity,
        title: 'Work-Life Balance & Future Planning',
        description: 'Plan your return to work, establish childcare, and adapt to life as new parents.'
      }
    ],
    benefitsTitle: 'Why Parents Choose Our Guide',
    benefitsDescription: 'Trusted by thousands of expecting parents for comprehensive, expert-backed guidance.',
    benefits: [
      {
        icon: Shield,
        title: 'Comprehensive Preparation',
        description: 'Cover every aspect of pregnancy and baby preparation with expert guidance'
      },
      {
        icon: Heart,
        title: 'Reduced Anxiety',
        description: 'Feel confident and prepared for parenthood with clear, actionable steps'
      },
      {
        icon: Clock,
        title: 'Time-Efficient Planning',
        description: 'Organized approach saves time and ensures nothing important is forgotten'
      },
      {
        icon: Target,
        title: 'Expert-Backed Guidance',
        description: 'Evidence-based recommendations from healthcare professionals and experienced parents'
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need for Confident Parenting',
    featuresDescription: 'Comprehensive toolkit covering pregnancy through baby\'s first year with expert guidance and practical resources.',
    features: [
      'Prenatal care scheduling and health monitoring',
      'Complete baby budget breakdown and cost-saving strategies',
      'Nursery design and safety checklist',
      'Birth plan templates and hospital bag packing lists',
      'Newborn care skill tutorials and feeding guidance',
      'Childcare research and work transition planning',
      'Insurance and legal planning (wills, guardianship)',
      'Postpartum support and recovery planning'
    ],
    ctaTitle: 'Ready to Welcome Your Baby?',
    ctaDescription: 'Join thousands of parents who felt confident and prepared for their baby\'s arrival with our comprehensive planning guide.',
    finalCtaText: 'Start Your Baby Planning Journey',
  },

  'home-buying': {
    badgeIcon: Home,
    badgeText: 'Home Buying',
    heroTitle: 'Find Your',
    heroHighlight: 'Dream Home',
    heroDescription: 'Navigate the home buying process with confidence. Complete guidance from financial readiness to closing day.',
    ctaText: 'Start House Hunting',
    appPath: '/home-buying/app',
    heroCards: [
      {
        badge: 'Pre-Approval',
        content: 'Mortgage pre-approved with clear budget boundaries'
      },
      {
        badge: 'Home Search',
        badgeVariant: 'secondary',
        content: 'Strategic search based on location and lifestyle needs'
      },
      {
        badge: 'Offer Strategy',
        badgeVariant: 'outline',
        content: 'Competitive offers that win in today\'s market'
      },
      {
        badge: 'Closing',
        content: 'Smooth closing process with all paperwork organized'
      }
    ],
    processTitle: 'Complete Home Buying Process',
    processDescription: 'Our step-by-step framework takes you from financial preparation to keys in hand.',
    processSteps: [
      {
        icon: DollarSign,
        title: 'Financial Readiness',
        description: 'Assess your finances, improve credit score, and determine your home buying budget.'
      },
      {
        icon: MapPin,
        title: 'Location & Preferences',
        description: 'Define your ideal location, commute requirements, and lifestyle preferences.'
      },
      {
        icon: Home,
        title: 'Home Specifications',
        description: 'Identify must-haves vs nice-to-haves for your perfect home.'
      },
      {
        icon: CreditCard,
        title: 'Mortgage & Financing',
        description: 'Get pre-approved, compare lenders, and secure the best mortgage terms.'
      },
      {
        icon: Search,
        title: 'House Hunting',
        description: 'Strategic property search and professional home inspections.'
      },
      {
        icon: HandCoins,
        title: 'Making Offers',
        description: 'Competitive offer strategy and skilled negotiation tactics.'
      },
      {
        icon: FileText,
        title: 'Closing Process',
        description: 'Navigate inspections, appraisals, and final closing procedures.'
      },
      {
        icon: Truck,
        title: 'Moving & Settling',
        description: 'Organized moving process and new home setup checklist.'
      }
    ],
    benefitsTitle: 'Why Buyers Choose Our Guide',
    benefitsDescription: 'Proven process that saves time, money, and reduces the stress of home buying.',
    benefits: [
      {
        icon: Shield,
        title: 'Avoid Costly Mistakes',
        description: 'Expert guidance prevents common first-time buyer errors that cost thousands'
      },
      {
        icon: Clock,
        title: 'Faster Process',
        description: 'Organized approach reduces time from search to closing by 30-40%'
      },
      {
        icon: TrendingUp,
        title: 'Better Deals',
        description: 'Strategic negotiation and market analysis help you win in competitive markets'
      },
      {
        icon: Heart,
        title: 'Reduced Stress',
        description: 'Clear roadmap and expert support make home buying enjoyable, not overwhelming'
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need to Buy Smart',
    featuresDescription: 'Complete toolkit with checklists, calculators, and expert insights for confident home buying.',
    features: [
      'Home affordability calculator and budget planning',
      'Credit score improvement strategies',
      'Neighborhood research and comparison tools',
      'Home inspection and appraisal checklists',
      'Mortgage comparison and pre-approval guidance',
      'Offer strategy and negotiation tactics',
      'Closing timeline and document organization',
      'Moving timeline and new home setup guide'
    ],
    ctaTitle: 'Ready to Buy Your Dream Home?',
    ctaDescription: 'Join thousands of successful homeowners who navigated the buying process with confidence using our comprehensive guide.',
    finalCtaText: 'Start Your Home Buying Journey',
  }
};

export const getLandingPageData = (templateId: string): LandingPageData | undefined => {
  return landingPageRegistry[templateId];
};