"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VendorQuestions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vendor Questions & Contracts</h1>
        <p className="text-muted-foreground">Essential questions to ask potential vendors and important contract details to track</p>
      </div>

      <Tabs defaultValue="research" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="research" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Research & Pricing</span>
            <span className="sm:hidden">Research</span>
          </TabsTrigger>
          <TabsTrigger value="logistics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Logistics</span>
            <span className="sm:hidden">Logistics</span>
          </TabsTrigger>
          <TabsTrigger value="contracts" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Contracts</span>
            <span className="sm:hidden">Contract</span>
          </TabsTrigger>
          <TabsTrigger value="vendor-specific" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">By Vendor Type</span>
            <span className="sm:hidden">Vendors</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="research">
          <GuidedNotePage
            title="Initial Research & Pricing"
            description="Key questions for first vendor contacts and pricing evaluation"
            sections={[
              {
                title: "Pricing & Package Questions",
                prompts: [
                  "What is your pricing structure and what's included in the base package?",
                  "Are there any additional fees I should know about?",
                  "What is your payment schedule and when are payments due?",
                  "Do you offer payment plans or financing options?",
                  "What happens if we need to cancel or postpone?"
                ],
                examples: [
                  "Ask for detailed breakdown of base vs premium packages",
                  "Service charges, gratuity, overtime fees, travel costs",
                  "Typical: 25% deposit, 50% 30 days before, 25% day-of",
                  "Some vendors offer 6-12 month payment plans",
                  "Look for clear cancellation policy and refund terms"
                ]
              },
              {
                title: "Services & Customization",
                prompts: [
                  "Can you walk me through what's included in each package?",
                  "Do you offer customizable packages?",
                  "What are your most popular add-ons?",
                  "How do you handle special requests or dietary restrictions?",
                  "Do you have backup plans for weather or emergencies?"
                ],
                examples: [
                  "Request written itemized list of all services included",
                  "Many vendors allow swapping items between packages",
                  "Upgrades, extra hours, additional staff, premium options",
                  "Important for dietary restrictions, accessibility needs",
                  "Rain plan for outdoor events, backup equipment, substitute vendors"
                ]
              },
              {
                title: "Portfolio & References",
                prompts: [
                  "Can I see examples of your recent work?",
                  "Do you have references from recent clients I can contact?",
                  "How long have you been in business?",
                  "Are you available on our wedding date?",
                  "What makes you different from other vendors in your field?"
                ],
                examples: [
                  "Look at full galleries, not just highlight reels, recent work preferred",
                  "Ask for 3-5 recent references, actually call them",
                  "More experience often means better problem-solving skills",
                  "Confirm exact date, start/end times, and any prep time needed",
                  "Unique style, special services, problem-solving approach"
                ]
              }
            ]}
            tips={[
              "Always get written contracts before making any payments",
              "Ask for recent client references and actually contact them",
              "Take detailed notes during vendor meetings and follow up with emails",
              "Read online reviews but focus on recent ones and look for patterns",
              "Trust your gut - personality fit matters as much as skills"
            ]}
          />
        </TabsContent>

        <TabsContent value="logistics">
          <GuidedNotePage
            title="Availability & Logistics"
            description="Timeline, coordination, and setup requirements"
            sections={[
              {
                title: "Timing & Availability",
                prompts: [
                  "Are you available on our wedding date and time?",
                  "How many events do you typically book per day?",
                  "What is your arrival and setup timeline?",
                  "How much time do you need for setup and breakdown?",
                  "Do you work with an assistant or team?"
                ],
                examples: [
                  "Confirm exact date, start/end times, and any prep time needed",
                  "Look for vendors who limit bookings to ensure quality service",
                  "Know when they arrive to avoid conflicts with other vendors",
                  "Plan venue timeline around vendor setup/breakdown needs",
                  "Understand who will be working your event"
                ]
              },
              {
                title: "Coordination & Communication",
                prompts: [
                  "How do you coordinate with other vendors?",
                  "Do you have a preferred vendor list you work with?",
                  "What information do you need from us before the wedding?",
                  "How many planning meetings will we have?",
                  "What's your communication style and response time?"
                ],
                examples: [
                  "Good vendors communicate well with your other professionals",
                  "Can help streamline planning and ensure compatibility",
                  "Guest count, timeline, special requests, contact info",
                  "Typically 2-3 meetings: initial, mid-planning, final details",
                  "Prefer email, phone, text? How quickly do they typically respond?"
                ]
              },
              {
                title: "Equipment & Setup Requirements",
                prompts: [
                  "What equipment do you provide vs what do we need to rent?",
                  "Do you need power outlets or special setup requirements?",
                  "Are there venue restrictions we should know about?",
                  "When will items be delivered and who handles setup?",
                  "What happens if equipment fails on the wedding day?"
                ],
                examples: [
                  "Clarify what's included vs additional rental costs",
                  "Power needs, loading dock access, setup space requirements",
                  "Some venues have restrictions on decorations, noise, vendors",
                  "Delivery day-of vs day before, who sets up and breaks down",
                  "Backup equipment available, replacement procedures, emergency contacts"
                ]
              }
            ]}
            tips={[
              "Book your most important vendors (venue, photographer, caterer) first",
              "Ask about setup/teardown time included in venue rental",
              "Check if tables, chairs, linens are provided or extra cost",
              "Confirm vendor arrival times don't conflict with each other",
              "Get contact info for day-of point person, not just office number"
            ]}
          />
        </TabsContent>

        <TabsContent value="contracts">
          <GuidedNotePage
            title="Contract Essentials"
            description="Legal protections and contract must-haves"
            sections={[
              {
                title: "Critical Contract Terms",
                prompts: [
                  "What are the cancellation and postponement policies?",
                  "What happens if you can't fulfill the contract due to emergency?",
                  "Are you insured and bonded?",
                  "Who owns the rights to photos/video/recordings?",
                  "What is the exact scope of services provided?"
                ],
                examples: [
                  "Look for reasonable cancellation terms, avoid no-refund policies",
                  "Vendor should have backup plan or substitute arrangements",
                  "Verify liability insurance and ask for certificate",
                  "Negotiate usage rights for your own marketing/sharing",
                  "Detailed list prevents disputes about what's included"
                ]
              },
              {
                title: "Payment & Fees",
                prompts: [
                  "What are the payment terms and late fees?",
                  "Is there a force majeure clause?",
                  "Can the contract be modified after signing?",
                  "What additional costs might arise?",
                  "Are gratuities included or expected?"
                ],
                examples: [
                  "Understand when payments are due and penalty fees",
                  "Protects both parties from unforeseeable circumstances",
                  "Some flexibility should be allowed for reasonable changes",
                  "Overtime fees, additional guests, last-minute requests",
                  "Industry standard gratuity amounts, when to tip"
                ]
              },
              {
                title: "Red Flags to Avoid",
                prompts: [
                  "What contract terms should I be wary of?",
                  "How can I spot unprofessional vendors?",
                  "What payment requests are unreasonable?",
                  "What communication patterns are concerning?",
                  "When should I walk away from a vendor?"
                ],
                examples: [
                  "Requests for full payment upfront, very vague terms",
                  "Won't provide references, no business license, unrealistic promises",
                  "Demanding cash only, no receipt, pressure for immediate payment",
                  "Poor response time, unprofessional communication, evasive answers",
                  "If they make you uncomfortable, don't compromise on important terms"
                ]
              }
            ]}
            tips={[
              "Never sign a contract without reading every line carefully",
              "Get everything in writing - verbal agreements don't hold up",
              "Ask a trusted friend or family member to review important contracts",
              "Don't be afraid to negotiate, especially for off-peak dates",
              "Always ask about additional fees that might not be mentioned upfront"
            ]}
          />
        </TabsContent>

        <TabsContent value="vendor-specific">
          <GuidedNotePage
            title="Vendor-Specific Questions"
            description="Tailored questions for different types of wedding vendors"
            sections={[
              {
                title: "Photography & Videography",
                prompts: [
                  "How many hours of coverage are included?",
                  "Will you be the actual photographer at my wedding?",
                  "What is your backup plan if you're sick or have an emergency?",
                  "How many edited photos will I receive and when?",
                  "Can I see a full wedding gallery from a recent event?"
                ],
                examples: [
                  "Typical: 6-8 hours, consider engagement session inclusion",
                  "Some studios send associates, ensure you meet your actual photographer",
                  "Reputable photographers have trained backup shooters",
                  "Expect 50-100 edited photos per hour of coverage",
                  "Review full galleries to see consistency and style throughout event"
                ]
              },
              {
                title: "Catering & Bar Service",
                prompts: [
                  "What is included in the per-person price?",
                  "How do you handle dietary restrictions and allergies?",
                  "What is your staffing ratio for guests?",
                  "Can we do a tasting before finalizing the menu?",
                  "What happens to leftover food?"
                ],
                examples: [
                  "Food, service, linens, plates, glassware - get itemized list",
                  "Ask about gluten-free, vegan, kosher, allergy protocols",
                  "Standard: 1 server per 8-10 guests, 1 bartender per 75 guests",
                  "Most caterers include 1-2 tastings in their packages",
                  "Some caterers pack leftovers, others don't allow takeaway"
                ]
              },
              {
                title: "Music & Entertainment",
                prompts: [
                  "Do you provide sound equipment for the ceremony?",
                  "What is your music selection process?",
                  "Do you take requests from guests?",
                  "What happens if you're sick on the wedding day?",
                  "Can you provide music during cocktail hour and dinner?"
                ],
                examples: [
                  "Microphones for officiant, speakers for processional music",
                  "Some DJs let you approve all music, others trust their expertise",
                  "Discuss do-not-play lists and request policies",
                  "Professional DJs should have backup equipment and personnel",
                  "Confirm coverage for entire event, not just dancing portion"
                ]
              },
              {
                title: "Venue & Coordination",
                prompts: [
                  "What is included in the venue rental fee?",
                  "What are the setup and breakdown time restrictions?",
                  "Do you have a preferred vendor list we must use?",
                  "What is your inclement weather policy?",
                  "Are there noise restrictions or curfews?"
                ],
                examples: [
                  "Tables, chairs, linens, lighting, sound system, parking",
                  "Know exactly when you can access venue and when you must be out",
                  "Some venues require exclusive vendors, others just have recommendations",
                  "Important for outdoor venues - indoor backup options",
                  "Check local ordinances and venue policies for music/dancing"
                ]
              }
            ]}
            tips={[
              "Book your venue first as it impacts most other vendor decisions",
              "Meet your actual photographer/DJ in person, not just the company owner",
              "Ask vendors for their preferred vendor recommendations - they know who's reliable",
              "Get multiple quotes for comparison but don't always choose the cheapest",
              "Schedule vendor meetings when you're not rushed so you can ask thorough questions"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}