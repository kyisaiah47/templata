# PROMPT 7: SEO Landing Page Specification

## Overview
Create a comprehensive marketing landing page that sells your template's value and drives conversions. This is the public-facing page that introduces users to your template before they enter the application.

## Study Reference File
Examine the wedding template landing page structure:
- `/src/app/wedding-planning/page.tsx` (for structure and patterns only)
- **DO NOT COPY CONTENT** - create unique content for your domain

## Required Implementation

### 1. Replace Landing Page: `/src/app/[template-name]/page.tsx`

```tsx
import { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  // Domain-specific icons
  CheckCircle2,
  Star,
  Users,
  Clock,
  Target,
  ArrowRight,
  Calendar,
  FileText,
  BarChart3
} from "lucide-react"

export const metadata: Metadata = {
  title: '[Template Display Name] - Complete [Domain] Planning Template | Templata',
  description: 'Professional [domain] planning template with guided notes, progress tracking, and expert resources. Save 40+ hours of research and planning.',
  keywords: '[domain] planning, [domain] template, [domain] organization, [specific domain keywords]',
  openGraph: {
    title: '[Template Display Name] - Complete [Domain] Planning Template',
    description: 'Professional [domain] planning template with guided notes, progress tracking, and expert resources.',
    type: 'website',
    url: 'https://templata.com/[template-name]',
    images: [
      {
        url: '/og-[template-name].jpg',
        width: 1200,
        height: 630,
        alt: '[Template Display Name] Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Template Display Name] - Complete [Domain] Planning Template',
    description: 'Professional [domain] planning template with guided notes, progress tracking, and expert resources.',
    images: ['/og-[template-name].jpg'],
  },
}

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[Template Display Name] Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete [domain] planning template with guided notes, progress tracking, and expert resources",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}

export default function TemplateNameLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/shift.svg"
                alt="Templata"
                width={28}
                height={28}
                className="dark:invert"
              />
              <span className="font-bold text-xl">Templata</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/templates" className="text-muted-foreground hover:text-foreground">
                Templates
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </nav>
            
            <Button asChild>
              <Link href="/[template-name]/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Professional [Domain] Planning
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                [Compelling Headline About Your Domain]
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Save 40+ Hours of Planning
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete [domain] planning template with guided notes, progress tracking, 
                and expert resources. Skip the research and get organized in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/[template-name]/app">
                    Start Planning Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 1,200+ people
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>No Signup Required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Expert Created</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Highlight Your 6 Core Pages */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">
                <Target className="mr-2 h-4 w-4" />
                Complete Solution
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Everything You Need for
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Successful [Domain] Planning
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six comprehensive planning areas that guide you through every aspect of your [domain] journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feature 1 - Overview Dashboard */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Progress Dashboard</CardTitle>
                  <CardDescription>
                    Track your overall progress and key milestones at a glance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Real-time progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Key metrics and deadlines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quick action shortcuts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2-6 - Your Core Pages */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>[Core Page 1 Name]</CardTitle>
                  <CardDescription>
                    [Description of what this core page helps users accomplish]
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      [Key benefit 1]
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      [Key benefit 2]
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      [Key benefit 3]
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Repeat for all 6 core pages with different icons and content */}
              
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Simple Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Get Organized in
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Just 4 Easy Steps
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Answer a few questions to personalize your planning experience
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">[Step 2 Title]</h3>
                  <p className="text-muted-foreground text-sm">
                    [Description of what users do in step 2]
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">[Step 3 Title]</h3>
                  <p className="text-muted-foreground text-sm">
                    [Description of what users do in step 3]
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">[Step 4 Title]</h3>
                  <p className="text-muted-foreground text-sm">
                    [Description of what users achieve in step 4]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline">
                    <Star className="mr-2 h-4 w-4" />
                    Why Choose Our Template
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Skip the Research,
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Start Planning Smart
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our [domain] template is built by experts and used by thousands. 
                    Get the insights and organization you need without the overwhelm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">[Benefit 1 Title]</h3>
                      <p className="text-muted-foreground text-sm">
                        [Specific benefit explanation - how it saves time/money/stress]
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">[Benefit 2 Title]</h3>
                      <p className="text-muted-foreground text-sm">
                        [Another specific benefit with concrete value]
                      </p>
                    </div>
                  </div>

                  {/* Add 4-6 benefits total */}
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats/testimonials cards */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">40+ Hours</div>
                    <p className="text-muted-foreground">
                      Average time saved using our structured approach vs. starting from scratch
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-muted-foreground">
                      Of users report feeling more confident and organized in their [domain] planning
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                    <p className="text-muted-foreground">
                      People have successfully used this template for their [domain] journey
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our [domain] planning template
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Is this template really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! This template is completely free to use. No hidden fees, no trials, no credit card required. 
                  Just visit the template, complete the quick setup, and start planning immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  How is this different from generic planning tools?
                </AccordionTrigger>
                <AccordionContent>
                  Our template is specifically designed for [domain] planning by domain experts. Instead of blank 
                  spreadsheets, you get structured guidance, relevant questions, and proven frameworks that 
                  have helped thousands of people successfully navigate their [domain] journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  [Domain-specific question about timeline/process]?
                </AccordionTrigger>
                <AccordionContent>
                  [Domain-specific answer that demonstrates expertise and builds trust]
                </AccordionContent>
              </AccordionItem>

              {/* Add 8-10 total FAQ items relevant to your domain */}

              <AccordionItem value="faq-8">
                <AccordionTrigger>
                  Can I export my data or notes?
                </AccordionTrigger>
                <AccordionContent>
                  All your data is stored locally in your browser and belongs to you. You can export your notes 
                  and planning data at any time. We also provide printing and PDF export options for easy sharing 
                  with family, advisors, or professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9">
                <AccordionTrigger>
                  What if I need help or have questions?
                </AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive resources and guides within the template. If you need additional help, 
                  you can reach out through our contact form, and we typically respond within 24 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                [Domain] Planning?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of others who have successfully organized their [domain] journey 
              with our expert-designed template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/[template-name]/app">
                  Start Planning Now - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/templates">
                  Browse All Templates
                </Link>
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              No signup required • Works in your browser • Your data stays private
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/shift.svg"
                    alt="Templata"
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                  <span className="font-bold text-xl">Templata</span>
                </Link>
                <p className="text-muted-foreground text-sm">
                  Professional templates for life's biggest moments.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Templates</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/templates" className="hover:text-foreground transition-colors">
                      Browse All Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/wedding-planning" className="hover:text-foreground transition-colors">
                      Wedding Planning
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/about" className="hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-foreground transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © 2024 Templata. Professional planning templates.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
```

## Content Guidelines

### Headlines and Copy Requirements
- ✅ **Value-Focused Headlines**: Lead with time/money savings or outcome benefits
- ✅ **Specific Numbers**: Use concrete metrics (40+ hours saved, 95% success rate)
- ✅ **Domain Expertise**: Language that demonstrates deep understanding of the field
- ✅ **Action-Oriented**: Clear calls-to-action that drive conversions
- ✅ **Trust Building**: Social proof, testimonials, usage statistics

### SEO Requirements
- ✅ **Title Tag**: Under 60 characters, includes primary keyword
- ✅ **Meta Description**: Under 160 characters, compelling and keyword-rich
- ✅ **Header Structure**: Proper H1, H2, H3 hierarchy
- ✅ **Internal Linking**: Links to relevant template features and pages
- ✅ **Schema Markup**: Structured data for rich snippets

### Content Structure
- ✅ **Hero Section**: Clear value proposition and immediate CTA
- ✅ **Features Section**: Highlight all 6 core pages with benefits
- ✅ **Process Section**: 4-step how-it-works explanation  
- ✅ **Benefits Section**: Why choose this vs alternatives
- ✅ **FAQ Section**: 8-10 questions addressing common concerns
- ✅ **Final CTA**: Strong conversion-focused call-to-action

## Domain-Specific Copy Examples

### Baby Planning Template
```
Hero: "Plan Your Perfect Pregnancy Journey - Save 40+ Hours of Research"
Subhead: "Complete pregnancy planning template with trimester guides, appointment tracking, and expert preparation checklists"
```

### Home Buying Template
```
Hero: "Navigate Home Buying Like a Pro - Your Complete Purchase Planner" 
Subhead: "Expert home buying template with property tracking, financing guides, and closing checklists used by 1,200+ successful buyers"
```

### Job Search Template
```
Hero: "Land Your Dream Job 3x Faster - Complete Career Transition Planner"
Subhead: "Professional job search template with application tracking, interview prep, and networking strategies from career experts"
```

### Fitness Journey Template
```
Hero: "Transform Your Body & Build Lasting Habits - Complete Fitness Planner"
Subhead: "Science-backed fitness template with workout planning, nutrition tracking, and progress monitoring for sustainable results"
```

## Technical Requirements

### Next.js Metadata
```tsx
export const metadata: Metadata = {
  title: '[Template Display Name] - [Key Benefit] | Templata',
  description: '[Compelling 150-character description with keywords]',
  keywords: '[5-8 relevant keywords separated by commas]',
  openGraph: {
    title: '[Template Display Name] - [Key Benefit]',
    description: '[Description for social sharing]',
    type: 'website',
    url: 'https://templata.com/[template-name]',
    images: ['/og-[template-name].jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Template Display Name] - [Key Benefit]',
    description: '[Twitter-optimized description]',
    images: ['/og-[template-name].jpg'],
  },
}
```

### Schema.org Markup
```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "[Template Display Name] Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "[Template description]",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating", 
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}
```

## Quality Checklist

### Content Quality
- ✅ All content is unique and domain-specific (no wedding content)
- ✅ Headlines focus on value and outcomes
- ✅ Copy addresses target audience pain points
- ✅ FAQs cover genuine user concerns
- ✅ Benefits are specific and quantified

### SEO Optimization
- ✅ Proper metadata with relevant keywords
- ✅ Schema.org structured data included
- ✅ Header hierarchy follows best practices
- ✅ Internal linking to template features
- ✅ Mobile-responsive design

### Conversion Optimization
- ✅ Clear primary CTA above the fold
- ✅ Multiple conversion opportunities throughout
- ✅ Trust indicators and social proof
- ✅ Address common objections in FAQ
- ✅ Strong final call-to-action

### Technical Implementation
- ✅ Proper Next.js metadata export
- ✅ Responsive design using design system
- ✅ No custom colors (uses theme colors only)
- ✅ All links work correctly
- ✅ Clean TypeScript with no errors

## Final Validation

### Required Commands
Both commands must pass with zero errors:

```bash
npm run lint:template
npm run build
```

### URL Testing
Verify these URLs work correctly:
- `/[template-name]/` - Shows marketing landing page
- `/[template-name]/app/` - Shows template application
- Navigation between landing page and app works
- Mobile responsive on all screen sizes

## Success Criteria

When complete, you should have:
- ✅ Professional marketing landing page with unique domain content
- ✅ Proper SEO metadata and Schema.org markup
- ✅ Clear value proposition and conversion-focused copy
- ✅ 8-10 relevant FAQ items addressing user concerns
- ✅ Mobile responsive design using design system
- ✅ Clean separation between marketing page and app
- ✅ Both lint and build commands pass without errors

**Output**: "TEMPLATE COMPLETE - ALL STEPS FINISHED" with URLs to test when SEO landing page is complete and validation commands pass.