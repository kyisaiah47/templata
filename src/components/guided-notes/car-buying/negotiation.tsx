"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Negotiation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Car Buying Negotiation</h1>
        <p className="text-muted-foreground">Master the art of negotiating the best deal on your car purchase.</p>
      </div>

      <Tabs defaultValue="preparation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="preparation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Preparation</span>
            <span className="sm:hidden">Prep</span>
          </TabsTrigger>
          <TabsTrigger value="pricing-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Pricing Strategy</span>
            <span className="sm:hidden">Pricing</span>
          </TabsTrigger>
          <TabsTrigger value="negotiation-tactics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Negotiation Tactics</span>
            <span className="sm:hidden">Tactics</span>
          </TabsTrigger>
          <TabsTrigger value="closing-deal" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Closing the Deal</span>
            <span className="sm:hidden">Closing</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preparation">
          <GuidedNotePage
            title="Negotiation Preparation"
            description="Research and prepare for effective car buying negotiations"
            sections={[
              {
                title: "Market Research & Pricing",
                prompts: [
                  "What is the fair market value for the specific vehicle you want?",
                  "How do you determine a realistic target price for negotiation?",
                  "What incentives and rebates are currently available?",
                  "How does local market demand affect pricing in your area?",
                  "What seasonal factors might impact your negotiating power?"
                ],
                examples: [
                  "Use KBB, Edmunds, TrueCar for market pricing, factor in condition and mileage",
                  "Start 10-15% below market value, aim for 5-8% below market as final target",
                  "Manufacturer rebates, dealer cash, special APR offers, loyalty programs",
                  "High demand models have less negotiation room, slow sellers more flexible",
                  "End of model year, end of month/quarter, winter for convertibles affects leverage"
                ]
              },
              {
                title: "Multiple Dealer Strategy",
                prompts: [
                  "How many dealers should you get quotes from?",
                  "Should you be upfront about shopping multiple dealers?",
                  "How will you use competing offers in negotiations?",
                  "What's the best way to communicate with multiple dealers?",
                  "When should you reveal your best competing offer?"
                ],
                examples: [
                  "Contact 3-5 dealers for quotes, more wastes time, fewer limits leverage",
                  "Yes, dealers expect it and it shows you're serious about getting best price",
                  "Get written quotes, use best offer to negotiate with others, create bidding situation",
                  "Email often better than phone for written record and less pressure",
                  "After initial negotiations, use best offer to get final bids from others"
                ]
              },
              {
                title: "Personal Negotiation Strategy",
                prompts: [
                  "What's your maximum budget and walk-away price?",
                  "How will you handle emotional attachment during negotiations?",
                  "What's your timeline and how does it affect your leverage?",
                  "Should you negotiate alone or bring support?",
                  "How will you handle high-pressure tactics and manipulation?"
                ],
                examples: [
                  "Set firm maximum including all fees, taxes, extras - stick to it",
                  "Stay detached, don't fall in love with one car, always have alternatives",
                  "No rush = better deals, but don't drag out indefinitely",
                  "Bring trusted advisor who won't get emotional, but make your own decisions",
                  "Recognize manipulation tactics, stay calm, be willing to walk away"
                ]
              },
              {
                title: "Documentation & Preparation",
                prompts: [
                  "What documentation should you bring to negotiations?",
                  "How will you track different dealer offers and terms?",
                  "What questions will you prepare to ask during negotiations?",
                  "Should you get pre-approved financing before negotiating?",
                  "How will you verify that written offers match verbal promises?"
                ],
                examples: [
                  "Pre-approval letters, competing quotes, trade-in appraisals, research printouts",
                  "Spreadsheet with dealer, vehicle, price, terms, trade value, financing options",
                  "Out-the-door price, included options, fees breakdown, delivery timeline",
                  "Yes, gives you leverage and prevents financing manipulation during negotiations",
                  "Read all paperwork carefully, match numbers to quotes, question discrepancies"
                ]
              }
            ]}
            tips={[
              "Knowledge is power - research thoroughly before any negotiation",
              "Set your maximum price in advance and stick to it",
              "Get multiple competitive quotes to maximize your leverage",
              "Stay emotionally detached and be prepared to walk away",
              "Get everything in writing before making any commitments"
            ]}
          />
        </TabsContent>

        <TabsContent value="pricing-strategy">
          <GuidedNotePage
            title="Pricing Strategy & Structure"
            description="Understand pricing components and develop your negotiation approach"
            sections={[
              {
                title: "Understanding Total Cost",
                prompts: [
                  "What components make up the total 'out-the-door' price?",
                  "Which fees are negotiable vs non-negotiable?",
                  "How do you separate car price from financing and trade-in value?",
                  "What's included in destination fees and dealer preparation?",
                  "How do taxes and registration fees affect your total cost?"
                ],
                examples: [
                  "Vehicle price, taxes, registration, dealer fees, optional add-ons, financing charges",
                  "Dealer prep, doc fees may be negotiable; taxes, registration usually fixed",
                  "Negotiate each separately to avoid confusion and manipulation",
                  "Destination fee set by manufacturer, dealer prep often inflated profit",
                  "Sales tax on purchase price minus trade value in most states"
                ]
              },
              {
                title: "Starting Offers & Counteroffers",
                prompts: [
                  "What should your initial offer be relative to asking price?",
                  "How do you respond to dealer counteroffers effectively?",
                  "When should you make concessions vs stand firm?",
                  "How many rounds of negotiation are typical?",
                  "What signals indicate the dealer's bottom line?"
                ],
                examples: [
                  "Start 15-20% below asking for used cars, 10-15% for new cars",
                  "Move up slowly, $500-1000 increments, ask them to move down more",
                  "Stand firm on total budget, make small concessions to show good faith",
                  "Usually 3-5 rounds, more may indicate dealer not serious about selling",
                  "Manager involvement, 'this is our best price', walking away without counter"
                ]
              },
              {
                title: "Trade-In Negotiation",
                prompts: [
                  "Should you negotiate trade-in value separately from purchase price?",
                  "How do you maximize your trade-in value?",
                  "When should you consider selling privately vs trading in?",
                  "How do you handle low-ball trade-in offers?",
                  "What documentation helps justify your trade-in value?"
                ],
                examples: [
                  "Yes, negotiate each separately to avoid confusion and bundling tactics",
                  "Clean car thoroughly, provide maintenance records, get multiple appraisals",
                  "If trade value significantly below private sale value, consider selling yourself",
                  "Counter with your research, get written appraisals from other dealers",
                  "Service records, recent repairs, maintenance receipts, clean title"
                ]
              },
              {
                title: "Financing Integration",
                prompts: [
                  "How do you negotiate financing terms effectively?",
                  "Should you reveal your pre-approval during price negotiations?",
                  "What financing tactics do dealers use to increase profits?",
                  "How do you compare total cost across different financing options?",
                  "When is dealer financing better than outside financing?"
                ],
                examples: [
                  "Negotiate APR, term length, down payment separate from vehicle price",
                  "Keep pre-approval private until price negotiated, then use as leverage",
                  "Marking up interest rates, extending terms to lower payments, financing add-ons",
                  "Calculate total interest paid over loan life, not just monthly payment",
                  "When dealer offers lower APR or special incentives tied to their financing"
                ]
              }
            ]}
            tips={[
              "Always negotiate the total 'out-the-door' price, not monthly payments",
              "Separate vehicle price, trade-in value, and financing negotiations",
              "Don't focus solely on monthly payment - total cost matters most",
              "Get detailed written breakdown of all charges and fees",
              "Use your pre-approved financing as leverage for better dealer terms"
            ]}
          />
        </TabsContent>

        <TabsContent value="negotiation-tactics">
          <GuidedNotePage
            title="Negotiation Tactics & Techniques"
            description="Master effective negotiation techniques and counter dealer tactics"
            sections={[
              {
                title: "Effective Negotiation Techniques",
                prompts: [
                  "What tone and approach work best in car negotiations?",
                  "How do you build rapport while maintaining negotiating position?",
                  "When should you be flexible vs firm in your demands?",
                  "How do you handle multiple negotiation points simultaneously?",
                  "What non-verbal communication affects negotiation success?"
                ],
                examples: [
                  "Be polite but firm, businesslike rather than emotional or confrontational",
                  "Be friendly but don't become friends - maintain professional distance",
                  "Be flexible on timing, color, minor options; firm on total price budget",
                  "Focus on one major point at a time, don't get overwhelmed by multiple issues",
                  "Confident posture, steady eye contact, take notes to show seriousness"
                ]
              },
              {
                title: "Common Dealer Tactics",
                prompts: [
                  "What are the most common high-pressure sales tactics?",
                  "How do you recognize and counter manipulation attempts?",
                  "What should you do when dealers use 'manager approval' delays?",
                  "How do you handle 'this deal expires today' pressure?",
                  "What red flags indicate you should walk away immediately?"
                ],
                examples: [
                  "'Four-square' pricing, focusing only on payments, fake urgency, emotional manipulation",
                  "Stay focused on your goals, don't get distracted by side issues or personal attacks",
                  "Set time limits, ask to speak with manager directly, be prepared to leave",
                  "Most 'today only' deals are artificial pressure - good deals will usually wait",
                  "Refusal to provide written quotes, bait-and-switch tactics, aggressive behavior"
                ]
              },
              {
                title: "Leverage & Timing",
                prompts: [
                  "How do you maximize your negotiating leverage?",
                  "What timing factors give you more negotiating power?",
                  "When should you be willing to walk away from a deal?",
                  "How do you use competition between dealers effectively?",
                  "What circumstances weaken your negotiating position?"
                ],
                examples: [
                  "Multiple alternatives, no time pressure, cash/pre-approved financing, trade alternatives",
                  "End of month/quarter/year, slow sales periods, model year changeover",
                  "When price exceeds budget, dealer won't negotiate fairly, pressure tactics used",
                  "Get written competing offers, let dealers know you're shopping around",
                  "Emotional attachment to specific car, urgent timeline, limited alternatives"
                ]
              },
              {
                title: "Communication Strategies",
                prompts: [
                  "How do you communicate your position clearly and firmly?",
                  "What questions help you understand the dealer's real position?",
                  "How do you handle objections and pushback professionally?",
                  "When should you negotiate via email vs in person?",
                  "How do you maintain control of the negotiation process?"
                ],
                examples: [
                  "State your target price clearly, explain your research, stick to your budget",
                  "'What's your best price?' 'What can you do to earn my business today?'",
                  "Listen to their concerns, acknowledge them, but return to your position",
                  "Email for initial quotes and documentation, in-person for final negotiations",
                  "Set agenda, ask questions, take breaks when needed, don't rush decisions"
                ]
              }
            ]}
            tips={[
              "Stay calm and professional even when faced with pressure tactics",
              "Be prepared to walk away - it's your strongest negotiating tool",
              "Don't take negotiation personally - it's just business",
              "Use silence effectively - let them fill uncomfortable pauses",
              "Always get the final agreed terms in writing before signing"
            ]}
          />
        </TabsContent>

        <TabsContent value="closing-deal">
          <GuidedNotePage
            title="Closing the Deal"
            description="Finalize negotiations and complete the purchase process"
            sections={[
              {
                title: "Final Agreement Terms",
                prompts: [
                  "What should be included in the final written agreement?",
                  "How do you verify all negotiated terms are accurately reflected?",
                  "What happens if the dealer tries to change terms at signing?",
                  "Should you get a deposit receipt with specific terms?",
                  "How do you handle last-minute add-on attempts?"
                ],
                examples: [
                  "Vehicle details, final price, trade value, financing terms, delivery date, all fees",
                  "Compare final paperwork to your notes and verbal agreements line by line",
                  "Refuse to sign, renegotiate, or walk away if terms change without agreement",
                  "Yes, deposit receipt should specify exact vehicle, price, terms, delivery timeline",
                  "Just say no to extended warranties, paint protection, other add-ons you didn't negotiate"
                ]
              },
              {
                title: "Finance Office Process",
                prompts: [
                  "What should you expect in the dealer finance office?",
                  "How do you handle extended warranty and add-on sales pitches?",
                  "What financing paperwork requires your careful review?",
                  "Are there legitimate add-ons worth considering?",
                  "How do you verify financing terms match your agreement?"
                ],
                examples: [
                  "Final paperwork, loan documents, extended warranty sales, add-on product pitches",
                  "Politely decline unless you specifically want them - most aren't worth the cost",
                  "Loan agreement, payment amount, APR, term length, payment due dates",
                  "Gap insurance maybe, extended warranty questionable, cosmetic protection usually not",
                  "Check APR, monthly payment, term length match what was negotiated"
                ]
              },
              {
                title: "Vehicle Delivery & Inspection",
                prompts: [
                  "What should you inspect when taking delivery of the vehicle?",
                  "How do you verify the vehicle matches what you purchased?",
                  "What documentation should you receive at delivery?",
                  "What should you do if you find issues during final inspection?",
                  "How do you ensure warranty and service records are properly set up?"
                ],
                examples: [
                  "Exterior/interior condition, all options present, full tank of gas, cleanliness",
                  "Check VIN, color, trim level, options against purchase agreement",
                  "Title, registration, warranty info, owner's manual, all keys, service records",
                  "Document with photos, negotiate repair or compensation before taking possession",
                  "Verify warranty registration, get service department contact info, schedule first service"
                ]
              },
              {
                title: "Post-Purchase Follow-Up",
                prompts: [
                  "What follow-up actions should you take after purchase?",
                  "How do you handle any issues discovered after driving home?",
                  "What records should you keep from the purchase process?",
                  "Should you leave reviews about your dealer experience?",
                  "How do you prepare for ongoing relationship with the dealer?"
                ],
                examples: [
                  "Register vehicle, update insurance, schedule first service, review owner's manual",
                  "Contact dealer immediately, document issues, know your rights under lemon laws",
                  "Purchase agreement, financing docs, warranty info, all communications with dealer",
                  "Yes, honest reviews help other buyers and give feedback to dealers",
                  "Get to know service department, understand warranty requirements, keep service records"
                ]
              }
            ]}
            tips={[
              "Don't sign anything until you've read and understood every detail",
              "Stick to your negotiated agreement - don't let them change terms at signing",
              "Inspect the vehicle thoroughly before accepting delivery",
              "Keep all purchase documentation organized for future reference",
              "Build a good relationship with the service department for ongoing needs"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}