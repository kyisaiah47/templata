import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Car,
  Heart,
  Home,
  Briefcase,
  Target,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Sparkles,
  Shield,
  Zap,
  FileText,
  Calculator,
  Search,
  DollarSign,
  BarChart3,
  ClipboardList,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Car Buying Template | Navigate Your Car Purchase Like a Pro | Templata',
  description: 'Complete car buying planning template with budget calculator, vehicle comparison, financing guide, and negotiation tips. Save $3,000+ on your next car purchase. Used by 1,200+ smart buyers.',
  keywords: 'car buying guide, car purchase planner, car buying checklist, used car buying, new car buying, car financing calculator, car negotiation tips, vehicle comparison, car buying template, auto purchase guide',
  openGraph: {
    title: 'Car Buying Template - Navigate Your Car Purchase Like a Pro',
    description: 'Complete car buying system with budget planning, vehicle comparison, and negotiation strategies. Join 1,200+ buyers who saved money and avoided mistakes.',
    type: 'website',
    images: ['/car-buying-template-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/car-buying',
  },
}

const features = [
  {
    icon: Sparkles,
    title: "Smart Budget Planning",
    description: "Calculate true ownership costs including insurance, maintenance, and depreciation before you buy."
  },
  {
    icon: Shield,
    title: "Expert Negotiation Tips",
    description: "Professional strategies that help buyers save an average of $3,200 on their purchase."
  },
  {
    icon: Clock,
    title: "Time-Saving Process",
    description: "Structured approach saves 20+ hours of research and prevents costly mistakes."
  },
  {
    icon: CheckCircle2,
    title: "Complete Comparison Tool",
    description: "Side-by-side vehicle analysis helps you choose the perfect car for your needs."
  },
  {
    icon: Users,
    title: "Financing Guidance",
    description: "Pre-approval strategies and loan comparison tools to secure the best rates."
  },
  {
    icon: FileText,
    title: "Inspection Checklists",
    description: "Professional-grade checklists ensure you don't miss critical issues before buying."
  }
]

const corePages = [
  { 
    name: "Budget & Financing", 
    icon: Calculator, 
    description: "Calculate total ownership costs and secure optimal financing",
    benefits: [
      "True cost calculator including hidden fees",
      "Loan comparison and pre-approval guide", 
      "Insurance cost estimation tools"
    ]
  },
  { 
    name: "Vehicle Research & Comparison", 
    icon: Search, 
    description: "Research and compare vehicles that match your needs and budget",
    benefits: [
      "Side-by-side comparison matrix",
      "Reliability ratings and reviews",
      "Market value analysis tools"
    ]
  },
  { 
    name: "Dealership & Private Sales", 
    icon: Users, 
    description: "Navigate dealers and private sales with confidence",
    benefits: [
      "Negotiation scripts and strategies",
      "Red flags and warning signs",
      "Documentation and paperwork guide"
    ]
  },
  { 
    name: "Inspection & Test Drive", 
    icon: ClipboardList, 
    description: "Thoroughly evaluate vehicles before making your decision",
    benefits: [
      "Professional inspection checklist",
      "Test drive evaluation guide",
      "Mechanic inspection coordination"
    ]
  },
  { 
    name: "Final Purchase", 
    icon: DollarSign, 
    description: "Complete your purchase with all documentation and next steps",
    benefits: [
      "Final negotiation strategies",
      "Contract review checklist",
      "Post-purchase action items"
    ]
  },
]

const testimonials = [
  {
    name: "Mike & Sarah",
    text: "This template helped us save $3,500 on our SUV purchase and avoid a lemon. The inspection checklist alone was worth it!",
    rating: 5
  },
  {
    name: "Jennifer T.", 
    text: "I was dreading car shopping, but this template made it straightforward. Got pre-approved and negotiated confidently.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    text: "Used this for both new and used car purchases. The financing section helped me save 2% on my loan rate.",
    rating: 5
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Set Your Budget",
    description: "Use our calculator to determine your true budget including insurance, maintenance, and total ownership costs."
  },
  {
    step: "2", 
    title: "Research & Compare",
    description: "Find vehicles that match your needs and budget using our structured comparison framework."
  },
  {
    step: "3",
    title: "Inspect & Negotiate", 
    description: "Use professional checklists and negotiation strategies to evaluate and purchase confidently."
  },
  {
    step: "4",
    title: "Complete Purchase",
    description: "Finalize your purchase with proper documentation and get your new car ready for the road."
  }
]

const faqs = [
  {
    question: "What's included in the car buying template?",
    answer: "Everything you need: budget calculator with true ownership costs, vehicle comparison matrix, financing guide with pre-approval strategies, negotiation scripts, inspection checklists for both new and used cars, dealership evaluation guide, and post-purchase action items. Plus expert tips that help buyers save an average of $3,200."
  },
  {
    question: "How much money can this template help me save?",
    answer: "Users report saving an average of $3,200 on their car purchase through better negotiation, avoiding unnecessary add-ons, securing better financing rates, and preventing costly mistakes. The time saved on research alone is worth 20+ hours of your time."
  },
  {
    question: "Does this work for both new and used car purchases?",
    answer: "Yes! The template includes specific guidance for both new and used car purchases. Used car sections focus on inspection, history reports, and private seller negotiations, while new car sections cover dealer incentives, timing, and factory options."
  },
  {
    question: "How does the budget calculator work?",
    answer: "Our calculator goes beyond monthly payments to show true ownership costs including insurance, maintenance, fuel, depreciation, and registration fees. It helps you set a realistic budget and avoid becoming 'car poor' from an expensive purchase."
  },
  {
    question: "What if I'm buying from a private seller?",
    answer: "The template includes complete guidance for private party purchases including safety tips for meeting sellers, vehicle history verification, inspection protocols, and purchase agreement templates. Many buyers save even more buying private party."
  },
  {
    question: "Do I need to know about cars to use this template?",
    answer: "Not at all! The template is designed for first-time buyers and car experts alike. Everything is explained in simple terms with checklists and step-by-step guidance. You don't need mechanical knowledge - just follow the structured process."
  },
  {
    question: "How does the financing section help me get better rates?",
    answer: "We guide you through pre-approval strategies, credit preparation, loan shopping techniques, and dealer financing vs. bank financing comparisons. Most users secure rates 0.5-2% better than they would have otherwise."
  },
  {
    question: "What about electric vehicles and hybrids?",
    answer: "The template includes specific sections for EV and hybrid purchases covering charging infrastructure evaluation, tax incentives, battery warranty considerations, and total cost of ownership calculations unique to electric vehicles."
  },
  {
    question: "Can this help me avoid common car buying mistakes?",
    answer: "Absolutely! The template highlights the most common and expensive mistakes: inadequate budgeting, skipping pre-approval, poor negotiation, insufficient inspection, and unnecessary add-ons. Following our process helps you avoid these pitfalls."
  },
  {
    question: "How long does the car buying process take with this template?",
    answer: "Most buyers complete the planning phase in 2-3 hours, then spend 1-2 days actively shopping with confidence. The structured approach eliminates wasted time and helps you move quickly when you find the right vehicle."
  }
]

export default function CarBuyingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Car Buying Planning Template",
    "description": "Complete car buying planning template with budget calculator, vehicle comparison, financing guide, and negotiation strategies. Save money and time on your car purchase.",
    "url": "https://templata.com/car-buying",
    "applicationCategory": "ProductivityApplication", 
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1200"
    },
    "creator": {
      "@type": "Organization",
      "name": "Templata"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org", 
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/shift.svg" alt="Templata" width={28} height={28} className="dark:invert" />
              <span className="font-bold text-2xl">Templata</span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-6 p-6 w-[500px]">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Personal Life</h4>
                        <NavigationMenuLink asChild>
                          <Link href="/wedding-planning" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Heart className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Wedding Planning</div>
                                <div className="text-sm text-muted-foreground">Complete wedding organization</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/home-buying" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Home className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Home Buying</div>
                                <div className="text-sm text-muted-foreground">Navigate the home buying process</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/car-buying" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Car className="h-4 w-4 text-primary mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Car Buying</div>
                                <div className="text-sm text-muted-foreground">Smart car purchase planning</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Career & Business</h4>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Briefcase className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Job Search</div>
                                <div className="text-sm text-muted-foreground">Track applications & interviews</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="block group p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-start space-x-3">
                              <Target className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <div className="font-semibold group-hover:text-primary transition-colors">Business Launch</div>
                                <div className="text-sm text-muted-foreground">Start your business right</div>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/faq" className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">FAQ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/templates">Browse Templates</Link>
              </Button>
              <Button className="text-base font-medium" asChild>
                <Link href="/car-buying/app">Start Planning</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-24"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <Car className="w-4 h-4 mr-2" />
              Complete Car Buying System
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
              Navigate Your Car Purchase
              <span className="block text-primary">
                Like a Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
              Complete car buying template with budget planning, vehicle comparison, and negotiation strategies. 
              Save $3,000+ and avoid costly mistakes with our expert-designed system. Also explore our{" "}
              <Link href="/home-buying" className="text-primary hover:underline">home buying template</Link>{" "}
              and <Link href="/wedding-planning" className="text-primary hover:underline">wedding planner</Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href="/car-buying/app">
                  Start Planning Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" asChild>
                <Link href="#features">
                  See Features
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Save $3,000+ on your purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Avoid costly buying mistakes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Used by 1,200+ smart buyers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Expert System
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Smart Buyers Choose Our Template
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional strategies and tools that help you save money, save time, and avoid the common pitfalls of car buying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Car Buying in 4 Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From budget planning to driving away in your perfect car. Join 1,200+ buyers who used our system to save money and buy confidently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <BarChart3 className="w-4 h-4 mr-2" />
              Complete Planning System
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Buy Smart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five comprehensive planning areas that guide you through every aspect of the car buying process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Progress Dashboard */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Progress Dashboard</CardTitle>
                <CardDescription>
                  Track your car buying progress and key milestones at a glance
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
                    Budget and timeline overview
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    Quick action shortcuts
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Core Pages */}
            {corePages.map((page, index) => {
              const Icon = page.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{page.name}</CardTitle>
                    <CardDescription>
                      {page.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {page.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Smart Car Buyers
            </h2>
            <p className="text-xl text-muted-foreground">
              See what real buyers are saying about our car purchasing template.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </CardDescription>
                  <CardTitle className="text-lg">— {testimonial.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Car Buying FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about buying your next car with our template.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <Car className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Buy Your Perfect Car?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of smart buyers who have saved money and bought confidently with our comprehensive template. 
              After your car purchase, check out our <Link href="/templates" className="text-primary hover:underline">other life planning templates</Link> for your next big milestone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 h-auto" asChild>
              <Link href="/car-buying/app">
                Start Planning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto" asChild>
              <Link href="/templates">
                Browse All Templates
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free to start • No credit card required • Set up in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/shift.svg" alt="Templata" width={24} height={24} className="dark:invert" />
                <span className="font-bold text-xl">Templata</span>
              </Link>
              <p className="text-muted-foreground">
                Skip the blank page. Start with proven templates for life&apos;s biggest moments.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Templates</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/car-buying" className="hover:text-foreground transition-colors">Car Buying</Link></li>
                <li><Link href="/wedding-planning" className="hover:text-foreground transition-colors">Wedding Planning</Link></li>
                <li><Link href="/home-buying" className="hover:text-foreground transition-colors">Home Buying</Link></li>
                <li><Link href="/templates" className="hover:text-foreground transition-colors">View All</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 Templata. Organize your life with templates.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}