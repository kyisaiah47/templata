"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Insurance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Car Insurance Planning</h1>
        <p className="text-muted-foreground">Secure appropriate insurance coverage before and after your purchase.</p>
      </div>

      <Tabs defaultValue="coverage-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="coverage-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Coverage Planning</span>
            <span className="sm:hidden">Coverage</span>
          </TabsTrigger>
          <TabsTrigger value="shopping-quotes" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Shopping & Quotes</span>
            <span className="sm:hidden">Shopping</span>
          </TabsTrigger>
          <TabsTrigger value="cost-optimization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cost Optimization</span>
            <span className="sm:hidden">Savings</span>
          </TabsTrigger>
          <TabsTrigger value="policy-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Policy Management</span>
            <span className="sm:hidden">Management</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="coverage-planning">
          <GuidedNotePage
            title="Insurance Coverage Planning"
            description="Determine the right types and amounts of coverage for your situation"
            sections={[
              {
                title: "Required vs Optional Coverage",
                prompts: [
                  "What auto insurance coverage is legally required in your state?",
                  "What additional coverage should you consider beyond the minimum?",
                  "How do financing requirements affect your coverage needs?",
                  "What personal factors influence your coverage decisions?",
                  "Are there state-specific insurance requirements you need to understand?"
                ],
                examples: [
                  "All states require liability; some require PIP, uninsured motorist, medical payments",
                  "Comprehensive, collision, gap insurance, higher liability limits than minimum",
                  "Lenders require full coverage (liability, comprehensive, collision) with specific limits",
                  "Age, driving record, financial assets, risk tolerance, vehicle value",
                  "No-fault states, minimum coverage amounts, proof of insurance requirements"
                ]
              },
              {
                title: "Liability Coverage Amounts",
                prompts: [
                  "What liability limits should you choose for bodily injury?",
                  "How much property damage liability coverage do you need?",
                  "Should you carry more than your state's minimum requirements?",
                  "How do your assets and income affect liability coverage needs?",
                  "What happens if you cause damage exceeding your coverage limits?"
                ],
                examples: [
                  "Consider 100/300k or 250/500k rather than state minimums (often 25/50k)",
                  "At least $50k property damage, preferably $100k+ in areas with expensive vehicles",
                  "Minimums often inadequate for serious accidents - consider much higher limits",
                  "Higher assets mean higher lawsuit risk - need more coverage to protect wealth",
                  "You're personally liable for amounts exceeding coverage - could face financial ruin"
                ]
              },
              {
                title: "Comprehensive & Collision Coverage",
                prompts: [
                  "When does comprehensive and collision coverage make financial sense?",
                  "What deductible amounts should you choose?",
                  "How do you determine if coverage is worth the cost for older vehicles?",
                  "What does comprehensive coverage protect against specifically?",
                  "How does your driving and parking situation affect coverage needs?"
                ],
                examples: [
                  "Required for financed vehicles, optional for paid-off cars worth over $3-5k",
                  "$250-1000 deductibles - higher deductibles mean lower premiums but more out-of-pocket",
                  "Drop if annual premium exceeds 10% of vehicle value or vehicle worth under $3k",
                  "Theft, vandalism, weather damage, animal strikes, falling objects",
                  "Urban parking increases theft/vandalism risk, rural areas increase animal strike risk"
                ]
              },
              {
                title: "Additional Protection Options",
                prompts: [
                  "Should you add uninsured/underinsured motorist coverage?",
                  "Is gap insurance worth purchasing for your vehicle?",
                  "What rental car coverage limits make sense for your situation?",
                  "Do you need personal injury protection or medical payments coverage?",
                  "Are there specialty coverages worth considering for your situation?"
                ],
                examples: [
                  "Highly recommended - protects when at-fault driver has no/inadequate insurance",
                  "Essential for new cars with small down payment, not needed after 2-3 years typically",
                  "$30-50/day sufficient for most, higher if you prefer luxury rentals",
                  "Covers medical bills regardless of fault, may duplicate health insurance coverage",
                  "Roadside assistance, custom equipment coverage, rideshare coverage if applicable"
                ]
              }
            ]}
            tips={[
              "Don't skimp on liability coverage - lawsuits can be financially devastating",
              "Consider your total financial picture when choosing coverage limits",
              "Gap insurance is crucial for new cars with minimal down payment",
              "Uninsured motorist coverage protects you from irresponsible drivers",
              "Review coverage annually as your vehicle value and situation change"
            ]}
          />
        </TabsContent>

        <TabsContent value="shopping-quotes">
          <GuidedNotePage
            title="Insurance Shopping & Quotes"
            description="Compare insurance companies and get accurate quotes"
            sections={[
              {
                title: "Insurance Company Research",
                prompts: [
                  "Which insurance companies should you get quotes from?",
                  "How do you research insurer financial stability and customer service?",
                  "What factors differentiate insurance companies beyond price?",
                  "Should you prioritize national companies vs regional insurers?",
                  "How important are agent relationships vs direct/online companies?"
                ],
                examples: [
                  "Get quotes from at least 4-6 companies: major national, regional, direct insurers",
                  "Check A.M. Best ratings, J.D. Power customer satisfaction, complaint ratios",
                  "Claims handling reputation, local agent availability, digital tools, discounts offered",
                  "National companies often have more resources, regional may have better local service",
                  "Agents provide personal service, direct insurers often have lower prices"
                ]
              },
              {
                title: "Getting Accurate Quotes",
                prompts: [
                  "What information do you need to provide for accurate quotes?",
                  "How do you ensure you're comparing equivalent coverage?",
                  "Should you get quotes before or after choosing your specific vehicle?",
                  "What factors significantly affect your insurance premium?",
                  "How often should you get new quotes to ensure competitive pricing?"
                ],
                examples: [
                  "Driving record, vehicle details, coverage limits, deductibles, annual mileage",
                  "Use identical coverage limits and deductibles across all quote comparisons",
                  "Get quotes for vehicles you're considering - premiums vary significantly by model",
                  "Age, location, driving record, credit score, vehicle type, coverage amounts",
                  "Shop annually, or when major life changes occur (move, marriage, new car)"
                ]
              },
              {
                title: "Quote Comparison Process",
                prompts: [
                  "How do you effectively compare quotes from different insurers?",
                  "What should you look for beyond the premium amount?",
                  "How do you evaluate different payment options and billing cycles?",
                  "What questions should you ask each insurance representative?",
                  "Are online quotes as accurate as speaking with agents?"
                ],
                examples: [
                  "Create spreadsheet comparing coverage, deductibles, premiums, discounts applied",
                  "Claims process, customer service hours, local agent availability, policy features",
                  "Monthly vs 6-month payments, automatic payment discounts, full-pay discounts",
                  "Claims process, discount eligibility, policy changes, cancellation terms",
                  "Online quotes good for initial comparison, speak with agent for final accuracy"
                ]
              },
              {
                title: "Timing Your Insurance Purchase",
                prompts: [
                  "When should you purchase insurance relative to buying your car?",
                  "How do you handle the transition from your current policy?",
                  "Can you add a new vehicle to existing policy vs getting new coverage?",
                  "What happens if you need insurance immediately for car pickup?",
                  "How do you avoid gaps in coverage during the transition?"
                ],
                examples: [
                  "Have quotes ready, can bind coverage with phone call before picking up car",
                  "Don't cancel old policy until new one is active, coordinate effective dates",
                  "Adding to existing policy often simpler, but shop around to ensure best overall rate",
                  "Most insurers can bind coverage immediately over phone with credit card payment",
                  "Overlap coverage briefly rather than risk any gap - gaps can cause rate increases"
                ]
              }
            ]}
            tips={[
              "Get quotes from multiple company types - national, regional, and direct insurers",
              "Ensure you're comparing identical coverage limits across all quotes",
              "Don't just focus on price - claims service and financial stability matter",
              "Get quotes for the specific vehicles you're considering purchasing",
              "Have insurance lined up before you need it - don't wait until pickup day"
            ]}
          />
        </TabsContent>

        <TabsContent value="cost-optimization">
          <GuidedNotePage
            title="Insurance Cost Optimization"
            description="Reduce insurance costs while maintaining appropriate coverage"
            sections={[
              {
                title: "Available Discounts",
                prompts: [
                  "What discounts are you eligible for with different insurers?",
                  "How can you maximize multi-policy and multi-vehicle discounts?",
                  "Are there behavioral discounts you can take advantage of?",
                  "What vehicle safety features reduce your insurance premiums?",
                  "Are there membership or affiliation discounts available to you?"
                ],
                examples: [
                  "Good driver, good student, military, senior, homeowner, loyalty discounts",
                  "Bundle auto with homeowners/renters, insure multiple vehicles with same company",
                  "Safe driving apps, defensive driving courses, low mileage discounts",
                  "Anti-theft systems, airbags, ABS, electronic stability control",
                  "AAA, alumni associations, professional organizations, employer groups"
                ]
              },
              {
                title: "Deductible Strategy",
                prompts: [
                  "What deductible amounts make the most financial sense?",
                  "How do different deductibles affect your premium savings?",
                  "Should you have the same deductible for comprehensive and collision?",
                  "Can you afford to pay your chosen deductible if needed?",
                  "How do deductibles interact with vehicle value over time?"
                ],
                examples: [
                  "Higher deductibles ($500-1000) significantly reduce premiums vs $250",
                  "Calculate annual savings vs risk of paying deductible - usually worth higher amount",
                  "Can have different amounts, but same amount simpler to remember and budget",
                  "Keep deductible amount in emergency fund - don't choose more than you can afford",
                  "As car depreciates, higher deductibles make more sense relative to vehicle value"
                ]
              },
              {
                title: "Coverage Optimization",
                prompts: [
                  "Which coverage areas offer the best opportunities for savings?",
                  "How do you balance cost savings with adequate protection?",
                  "Should you drop certain coverages on older vehicles?",
                  "What coverage limits provide the best value for your situation?",
                  "Are there coverage options you're paying for but don't need?"
                ],
                examples: [
                  "Adjust comprehensive/collision on older cars, optimize liability limits for your assets",
                  "Don't sacrifice essential protection for minor premium savings",
                  "Consider dropping comp/collision when vehicle worth less than $3-5k",
                  "Higher liability limits often cheap, but excessive medical coverage may duplicate health insurance",
                  "Rental coverage if you have other transportation, roadside if covered by AAA/credit card"
                ]
              },
              {
                title: "Long-Term Cost Management",
                prompts: [
                  "How can you maintain good driving record to keep rates low?",
                  "What vehicle choices affect long-term insurance costs?",
                  "Should you consider usage-based insurance programs?",
                  "How do credit scores affect insurance premiums?",
                  "What life changes could impact your insurance costs?"
                ],
                examples: [
                  "Avoid tickets/accidents, take defensive driving courses, drive less if possible",
                  "Avoid high-theft vehicles, sports cars, luxury cars that cost more to insure",
                  "Telematics/usage-based programs can save money for safe, low-mileage drivers",
                  "Good credit often means lower premiums - maintain good credit for insurance savings",
                  "Marriage, homeownership, age milestones, moving often reduce premiums"
                ]
              }
            ]}
            tips={[
              "Higher deductibles usually provide significant premium savings",
              "Bundle policies when it saves money, but don't assume bundling is always cheaper",
              "Maintain good credit and driving record for the best rates",
              "Review and adjust coverage annually as your vehicle depreciates",
              "Ask about all available discounts - insurers don't always volunteer them"
            ]}
          />
        </TabsContent>

        <TabsContent value="policy-management">
          <GuidedNotePage
            title="Insurance Policy Management"
            description="Effectively manage your auto insurance policy ongoing"
            sections={[
              {
                title: "Policy Setup & Documentation",
                prompts: [
                  "What information should you verify when your policy begins?",
                  "How should you organize and store your insurance documents?",
                  "What proof of insurance do you need to carry?",
                  "How do you ensure your lender receives required insurance information?",
                  "What contact information should you keep readily available?"
                ],
                examples: [
                  "Verify vehicle details, coverage amounts, deductibles, premium amount, payment schedule",
                  "Keep physical and digital copies of policy, ID cards, payment records",
                  "Insurance card in vehicle, digital copy on phone as backup",
                  "Provide lender with policy info showing them as lienholder/additional insured",
                  "Agent phone, claims reporting number, policy number, customer service contact"
                ]
              },
              {
                title: "Claims Process Preparation",
                prompts: [
                  "What steps should you take immediately after an accident?",
                  "How do you report claims efficiently to your insurance company?",
                  "What information should you document at accident scenes?",
                  "How do you choose repair shops and handle claim settlements?",
                  "What rights do you have if you disagree with claim decisions?"
                ],
                examples: [
                  "Ensure safety, call police if needed, exchange information, document scene",
                  "Report claims immediately, provide accurate information, ask about rental coverage",
                  "Photos of damage, contact information, police report number, witness information",
                  "Choose reputable shops, get multiple estimates, understand settlement process",
                  "Appeal decisions, request supervisors, consult state insurance departments"
                ]
              },
              {
                title: "Policy Updates & Changes",
                prompts: [
                  "When should you notify your insurer of changes?",
                  "How do address changes, new drivers, or vehicle modifications affect coverage?",
                  "What happens when you pay off your vehicle loan?",
                  "How do you handle adding or removing vehicles from your policy?",
                  "What changes require immediate notification vs can wait until renewal?"
                ],
                examples: [
                  "Address changes, new drivers, vehicle modifications, major life changes immediately",
                  "Address affects rates, new drivers increase premiums, modifications may void coverage",
                  "Can drop comprehensive/collision if desired, remove lender as loss payee",
                  "Call to add vehicles before driving, removing vehicles may reduce premiums immediately",
                  "Coverage changes immediate, rate adjustments often wait until renewal"
                ]
              },
              {
                title: "Annual Review & Optimization",
                prompts: [
                  "What should you review annually about your auto insurance?",
                  "How do you determine if your coverage levels are still appropriate?",
                  "Should you shop for new coverage every year?",
                  "What life changes should trigger insurance reviews?",
                  "How do you handle policy renewals and rate increases?"
                ],
                examples: [
                  "Coverage amounts, deductibles, vehicle values, discount eligibility, claims history",
                  "Consider asset growth, vehicle depreciation, family changes, driving patterns",
                  "Shop every 2-3 years or when rates increase significantly",
                  "Marriage, divorce, new home, kids driving, job changes, retirement",
                  "Review renewal notices, question increases, shop if rates rise significantly"
                ]
              }
            ]}
            tips={[
              "Keep insurance documents organized and easily accessible",
              "Report claims promptly and provide complete, accurate information",
              "Review your policy annually and after major life changes",
              "Understand your claims process before you need to use it",
              "Don't hesitate to ask questions - make sure you understand your coverage"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}