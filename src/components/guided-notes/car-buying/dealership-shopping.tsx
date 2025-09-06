"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DealershipShopping() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dealership Shopping Strategy</h1>
        <p className="text-muted-foreground">Navigate dealerships effectively and find the right dealer for your purchase.</p>
      </div>

      <Tabs defaultValue="dealer-research" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 h-auto">
          <TabsTrigger value="dealer-research" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Dealer Research</span>
            <span className="sm:hidden">Research</span>
          </TabsTrigger>
          <TabsTrigger value="first-visit" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">First Visit</span>
            <span className="sm:hidden">Visit</span>
          </TabsTrigger>
          <TabsTrigger value="sales-process" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Sales Process</span>
            <span className="sm:hidden">Process</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dealer-research">
          <GuidedNotePage
            title="Dealer Research & Selection"
            description="Find reputable dealers and prepare for your visits"
            sections={[
              {
                title: "Dealer Reputation Research",
                prompts: [
                  "Which dealers in your area sell the vehicles you're considering?",
                  "What do online reviews say about each dealer's sales experience?",
                  "How is each dealer's service department rated by customers?",
                  "Are there any Better Business Bureau complaints or issues?",
                  "Which dealers offer the best customer service reputation?"
                ],
                examples: [
                  "Use manufacturer website dealer locator, Google Maps for all nearby options",
                  "Check Google, Yelp, DealerRater reviews focusing on sales process comments",
                  "Service quality matters for warranty work and long-term relationship",
                  "Check BBB ratings and complaint patterns, especially unresolved issues",
                  "Ask friends/family about their experiences, prioritize dealers with good reputations"
                ]
              },
              {
                title: "Inventory & Pricing Research",
                prompts: [
                  "Which dealers have the specific models and trim levels you want?",
                  "How do prices compare between dealers for similar vehicles?",
                  "Are there any special incentives or promotions available?",
                  "Which dealers are most willing to work on price negotiations?",
                  "Should you consider dealers further away for better selection or pricing?"
                ],
                examples: [
                  "Check dealer websites, call to confirm inventory and availability",
                  "Compare advertised prices, but watch for differences in included options",
                  "Manufacturer rebates, dealer cash, special APR offers, loyalty programs",
                  "Some dealers are 'no-haggle', others expect negotiation - research their style",
                  "Factor travel time/cost against potential savings, consider delivery options"
                ]
              },
              {
                title: "Contact Strategy",
                prompts: [
                  "Should you call ahead or visit dealers unannounced?",
                  "What information should you prepare before contacting dealers?",
                  "How many dealers should you contact initially?",
                  "Should you work with internet sales departments vs floor salespeople?",
                  "What questions will you ask when first contacting dealers?"
                ],
                examples: [
                  "Call ahead for specific models, visit unannounced for browsing and pressure assessment",
                  "Have list of desired features, financing pre-approval info, trade-in details ready",
                  "Contact 3-5 dealers to get range of options and compare approaches",
                  "Internet departments often less pressure, more straightforward pricing",
                  "Availability of specific models, pricing, appointment scheduling, trade-in appraisals"
                ]
              },
              {
                title: "Timing & Scheduling",
                prompts: [
                  "What's the best time to visit dealerships for better deals?",
                  "How should you schedule multiple dealer visits efficiently?",
                  "Should you visit alone or bring someone for support?",
                  "How much time should you plan for each dealer visit?",
                  "What's the best day of the week for dealer negotiations?"
                ],
                examples: [
                  "End of month/quarter/year for sales pressure, weekdays less busy than weekends",
                  "Schedule same-day visits to multiple dealers, or spread over few days to compare",
                  "Bring trusted advisor who won't be emotional about purchase decisions",
                  "Plan 2-3 hours minimum for serious shopping, longer if test driving multiple cars",
                  "Tuesday-Thursday often best, avoid busy weekends unless you want less attention"
                ]
              }
            ]}
            tips={[
              "Research dealer reputation before visiting - bad dealers aren't worth any discount",
              "Get quotes from multiple dealers to leverage competitive pricing",
              "Consider both local dealers and those slightly farther away for better selection",
              "Internet sales departments often provide more straightforward pricing",
              "Don't rush - good dealers will work with your timeline"
            ]}
          />
        </TabsContent>

        <TabsContent value="first-visit">
          <GuidedNotePage
            title="First Dealer Visit Strategy"
            description="Make the most of your initial dealer interactions"
            sections={[
              {
                title: "Visit Preparation",
                prompts: [
                  "What documents and information should you bring?",
                  "How will you present yourself to get the best treatment?",
                  "What's your strategy for handling sales pressure?",
                  "Should you reveal your budget or financing plans early?",
                  "How will you maintain control of the sales process?"
                ],
                examples: [
                  "Driver's license, insurance card, pre-approval letter, trade-in title if applicable",
                  "Dress decently, be polite but firm, show you're serious but not desperate",
                  "Be prepared to walk away, don't feel pressured to buy same day",
                  "Keep budget private initially, focus on vehicle and features first",
                  "Set agenda, ask questions, take notes, don't let salesperson rush you"
                ]
              },
              {
                title: "Initial Interaction Assessment",
                prompts: [
                  "How does the salesperson approach and treat you initially?",
                  "Are they knowledgeable about the vehicles you're interested in?",
                  "Do they listen to your needs or just try to sell what's available?",
                  "How transparent are they about pricing and options?",
                  "Does the dealer environment feel trustworthy and professional?"
                ],
                examples: [
                  "Good: asks about needs, explains options; Bad: high pressure, dismissive attitude",
                  "Should know features, specifications, options without constantly checking",
                  "Good salespeople match recommendations to stated needs and budget",
                  "Should provide clear pricing breakdown, explain all fees upfront",
                  "Clean facilities, organized inventory, professional staff behavior"
                ]
              },
              {
                title: "Vehicle Inspection & Questions",
                prompts: [
                  "What should you inspect on the vehicles you're considering?",
                  "What questions will you ask about vehicle history and condition?",
                  "How will you evaluate the dealer's inventory and selection?",
                  "What warranty and service information do you need?",
                  "Should you ask about upcoming model changes or incentives?"
                ],
                examples: [
                  "Exterior condition, interior wear, tire condition, mileage, cleanliness",
                  "Previous owners, accidents, service history, remaining warranty coverage",
                  "Range of trim levels, colors, options available now and coming soon",
                  "Factory warranty details, extended warranty options, included maintenance",
                  "New model year timing, end-of-year clearance sales, seasonal incentives"
                ]
              },
              {
                title: "Information Gathering",
                prompts: [
                  "What pricing information will you collect?",
                  "How will you document vehicle specifications and options?",
                  "What financing options will the dealer present?",
                  "Should you get trade-in appraisal during first visit?",
                  "What follow-up commitments will you make or avoid?"
                ],
                examples: [
                  "MSRP, dealer discount, rebates, final price, all fees itemized",
                  "Take photos of window stickers, write down VIN numbers, option packages",
                  "APR offers, term lengths, down payment requirements, monthly payments",
                  "Yes, but don't commit - use for comparison with other dealers",
                  "Don't sign anything, don't leave deposits, get everything in writing"
                ]
              }
            ]}
            tips={[
              "Don't buy on your first visit - take time to compare and think",
              "Ask lots of questions and take notes to evaluate dealer knowledge and honesty",
              "Get everything in writing, including verbal promises and pricing",
              "Trust your instincts about the dealer and salesperson",
              "Remember you're interviewing them as much as they're selling to you"
            ]}
          />
        </TabsContent>

        <TabsContent value="sales-process">
          <GuidedNotePage
            title="Dealership Sales Process"
            description="Understand and navigate the typical dealer sales process"
            sections={[
              {
                title: "Traditional Sales Steps",
                prompts: [
                  "What are the typical steps in the dealer sales process?",
                  "How will you handle each stage to maintain control?",
                  "What happens in the finance office and how should you prepare?",
                  "When and how should you negotiate each component?",
                  "What red flags should you watch for during the process?"
                ],
                examples: [
                  "Greeting, needs assessment, vehicle presentation, test drive, trade appraisal, negotiation, finance",
                  "Set your own pace, ask questions, don't feel rushed between steps",
                  "Final paperwork, extended warranties, add-ons - prepare to say no to extras",
                  "Negotiate car price first, then trade value, finally financing terms separately",
                  "Pressure tactics, 'today only' deals, refusing to provide written quotes"
                ]
              },
              {
                title: "Common Sales Tactics",
                prompts: [
                  "What high-pressure tactics might dealers use?",
                  "How will you respond to 'four-square' pricing presentations?",
                  "What should you do if they won't give you a straight price?",
                  "How will you handle 'manager approval' delays and back-and-forth?",
                  "What add-ons and extras will they try to sell you?"
                ],
                examples: [
                  "'This price good today only', 'manager special deal', artificial urgency",
                  "Focus on total price, not monthly payment; negotiate each element separately",
                  "Ask for itemized pricing, be willing to leave if they won't be transparent",
                  "These are often sales tactics; real managers can make decisions quickly",
                  "Extended warranties, paint protection, gap insurance, service contracts"
                ]
              },
              {
                title: "Negotiation Strategies",
                prompts: [
                  "What's your strategy for negotiating the best price?",
                  "Should you negotiate based on monthly payment or total price?",
                  "How will you use competing dealer quotes?",
                  "What's your walk-away point and how will you communicate it?",
                  "How will you handle pushback and pressure to close the deal?"
                ],
                examples: [
                  "Research fair market value, start below target, negotiate total price first",
                  "Always focus on total price - monthly payments hide true cost",
                  "Get written quotes from multiple dealers, use best offer to negotiate with others",
                  "Set maximum total cost including all fees, be prepared to leave if exceeded",
                  "Stay calm, reiterate your position, don't get emotional or personal"
                ]
              },
              {
                title: "Closing & Paperwork",
                prompts: [
                  "What should you review carefully before signing any documents?",
                  "Which add-ons or services are worth considering vs skipping?",
                  "How will you handle financing paperwork and final terms?",
                  "What should you verify about vehicle condition and delivery?",
                  "What documentation should you keep after purchase?"
                ],
                examples: [
                  "Final price matches negotiated amount, no surprise fees, correct vehicle/options",
                  "Gap insurance maybe, extended warranty questionable, cosmetic protection usually not worth it",
                  "Confirm APR, term length, payment amount match what was discussed",
                  "Full tank of gas, all accessories included, clean vehicle, all keys/manuals",
                  "Purchase agreement, financing docs, warranty info, registration papers, dealer contact info"
                ]
              }
            ]}
            tips={[
              "Never feel pressured to buy immediately - good deals will wait",
              "Negotiate total price, not monthly payments to avoid confusion",
              "Get all promises in writing before signing anything",
              "Be prepared to walk away if the deal isn't right",
              "Remember that you can say no to any add-ons in the finance office"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}