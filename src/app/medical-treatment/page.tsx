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
  Activity,
  FileText,
  Calendar,
  Users,
  CheckCircle2,
  Star,
  Clock,
  Target,
  ArrowRight,
  BarChart3,
  Pill,
  UserCheck
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Medical Treatment Tracker - Complete Healthcare Management Template | Templata',
  description: 'Professional medical treatment tracker with appointment scheduling, medication management, symptom tracking, and care team coordination. Save 30+ hours of healthcare organization.',
  keywords: 'medical treatment tracker, healthcare organizer, medical appointment tracker, medication management, symptom tracker, medical records, treatment planner, healthcare template',
  openGraph: {
    title: 'Medical Treatment Tracker - Complete Healthcare Management Template',
    description: 'Professional medical treatment tracker with appointment scheduling, medication management, and care team coordination.',
    type: 'website',
    url: 'https://templata.com/medical-treatment',
    images: [
      {
        url: '/og-medical-treatment.jpg',
        width: 1200,
        height: 630,
        alt: 'Medical Treatment Tracker Planning Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Treatment Tracker - Complete Healthcare Management Template',
    description: 'Professional medical treatment tracker with appointment scheduling, medication management, and care team coordination.',
    images: ['/og-medical-treatment.jpg'],
  },
}

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Medical Treatment Tracker Planning Template",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Complete medical treatment planning template with appointment tracking, medication management, and care team coordination",
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

export default function MedicalTreatmentLandingPage() {
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
              <Link href="/medical-treatment/app">Get Started</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge variant="outline" className="px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Professional Healthcare Management
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Take Control of Your
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Medical Treatment Journey
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete medical treatment tracker with appointment scheduling, medication management, 
                symptom tracking, and care team coordination. Organize your healthcare in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/medical-treatment/app">
                    Start Tracking Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  <Users className="mr-2 h-4 w-4" />
                  Used by 800+ patients
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
                  <span>Healthcare Professional Approved</span>
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
                  Organized Healthcare Management
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six comprehensive tracking areas that guide you through every aspect of your medical treatment journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feature 1 - Overview Dashboard */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Treatment Overview</CardTitle>
                  <CardDescription>
                    Track your overall progress and key health milestones at a glance
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
                      Key health metrics dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Quick action shortcuts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 - Appointments */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Appointments</CardTitle>
                  <CardDescription>
                    Schedule, track, and prepare for all your medical appointments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Appointment scheduling and reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Pre-visit preparation checklists
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Visit notes and follow-ups
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 - Medications */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Pill className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Medications</CardTitle>
                  <CardDescription>
                    Manage prescriptions, dosages, and medication schedules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Prescription tracking and refills
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Side effect monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Medication adherence tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 - Symptoms */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Symptoms & Progress</CardTitle>
                  <CardDescription>
                    Monitor symptoms and track treatment effectiveness over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Daily symptom logging
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Progress visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Trend analysis and insights
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 - Care Team */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Care Team</CardTitle>
                  <CardDescription>
                    Coordinate with doctors, specialists, and healthcare providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Provider contact management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Communication tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Referral management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 - Records */}
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>
                    Organize test results, reports, and important medical documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Document organization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Test result tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Insurance and billing records
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
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
                    Enter your basic medical information and current treatment details
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Add Care Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Import contacts for doctors, specialists, and healthcare providers
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                  <p className="text-muted-foreground text-sm">
                    Log symptoms, medications, and appointments as you go through treatment
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                  <p className="text-muted-foreground text-sm">
                    Share organized reports with your care team and make informed decisions
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
                    Stop Feeling Overwhelmed,
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Start Managing Smart
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our medical treatment template is designed by healthcare professionals and used by hundreds of patients. 
                    Get the organization and peace of mind you need during treatment.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Never Miss Appointments</h3>
                      <p className="text-muted-foreground text-sm">
                        Automated reminders and preparation checklists ensure you&apos;re ready for every visit
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Track What Matters</h3>
                      <p className="text-muted-foreground text-sm">
                        Monitor symptoms, side effects, and treatment progress with guided logging tools
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Coordinate Care</h3>
                      <p className="text-muted-foreground text-sm">
                        Keep all your providers informed with organized summaries and progress reports
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Reduce Stress</h3>
                      <p className="text-muted-foreground text-sm">
                        Feel confident and prepared with everything organized in one secure place
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Save Time</h3>
                      <p className="text-muted-foreground text-sm">
                        Spend less time on paperwork and more time focusing on your recovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats/testimonials cards */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">30+ Hours</div>
                    <p className="text-muted-foreground">
                      Average time saved on medical organization and appointment preparation
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <p className="text-muted-foreground">
                      Of users report feeling more confident and prepared for medical appointments
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">800+</div>
                    <p className="text-muted-foreground">
                      Patients have successfully managed their treatment journey with this template
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
                Everything you need to know about our medical treatment tracking template
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  Is this template really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! This medical treatment template is completely free to use. No hidden fees, no trials, 
                  no credit card required. Just visit the template, complete the quick setup, and start 
                  organizing your healthcare immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>
                  How is this different from keeping notes in a notebook?
                </AccordionTrigger>
                <AccordionContent>
                  Our template provides structured guidance, automatic calculations, progress tracking, 
                  and report generation. Unlike scattered notes, everything connects - your symptoms link 
                  to medications, appointments sync with your calendar, and you can generate professional 
                  summaries for your care team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  Is my medical information secure and private?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. All your data is stored locally in your browser and never sent to our servers. 
                  Your medical information stays completely private and under your control. You can export 
                  or delete your data at any time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Can I share information with my doctors and family?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! You can generate professional reports, medication lists, and symptom summaries to 
                  share with your healthcare providers. You can also print or export sections to PDF for 
                  easy sharing with family members or caregivers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  What types of medical conditions does this work for?
                </AccordionTrigger>
                <AccordionContent>
                  The template is flexible and works for any medical condition or treatment - from chronic 
                  conditions like diabetes or arthritis to acute treatments like surgery recovery or 
                  cancer treatment. The tracking tools adapt to your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger>
                  How do I track multiple medications and their schedules?
                </AccordionTrigger>
                <AccordionContent>
                  The medication section lets you add unlimited medications with dosages, schedules, and 
                  refill dates. You can track side effects, set reminders, and generate medication lists 
                  for appointments. It also helps identify potential interactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7">
                <AccordionTrigger>
                  Can I use this for a family member or elderly parent?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Many people use this template to help manage healthcare for family members. You can 
                  organize all their medical information, coordinate appointments, and maintain medication 
                  schedules. It&apos;s especially helpful for caregivers managing complex medical situations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8">
                <AccordionTrigger>
                  What if I need help or have questions while using the template?
                </AccordionTrigger>
                <AccordionContent>
                  The template includes helpful guides and prompts throughout. If you need additional help, 
                  you can reach out through our contact form, and we typically respond within 24 hours. 
                  We&apos;re here to support you through your healthcare journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9">
                <AccordionTrigger>
                  Does this replace talking to my doctor or medical advice?
                </AccordionTrigger>
                <AccordionContent>
                  No, this template is an organizational tool to help you track and manage your medical 
                  information. It&apos;s not a substitute for professional medical advice, diagnosis, or 
                  treatment. Always consult with your healthcare providers for medical decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-10">
                <AccordionTrigger>
                  Can I export my data or print my medical records?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! You can export your medical data, generate PDF reports for appointments, print 
                  medication lists, and create summaries for insurance or new providers. All your data 
                  belongs to you and can be accessed anytime.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Take Control of Your
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Healthcare Journey?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of patients who have successfully organized their medical treatment 
              with our comprehensive tracking template.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/medical-treatment/app">
                  Start Managing Your Health - It&apos;s Free
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
                  Professional templates for life&apos;s biggest moments.
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
                  <li>
                    <Link href="/medical-treatment" className="hover:text-foreground transition-colors">
                      Medical Treatment
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