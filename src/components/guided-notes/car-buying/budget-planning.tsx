"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BudgetPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Car Buying Budget & Financing</h1>
        <p className="text-muted-foreground">Plan your car purchase budget and explore financing options.</p>
      </div>

      <Tabs defaultValue="total-budget" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="total-budget" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Total Budget</span>
            <span className="sm:hidden">Budget</span>
          </TabsTrigger>
          <TabsTrigger value="financing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Financing</span>
            <span className="sm:hidden">Finance</span>
          </TabsTrigger>
          <TabsTrigger value="ongoing-costs" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Ongoing Costs</span>
            <span className="sm:hidden">Costs</span>
          </TabsTrigger>
          <TabsTrigger value="trade-in" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Trade-In</span>
            <span className="sm:hidden">Trade</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="total-budget">
          <GuidedNotePage
            title="Total Budget Planning"
            description="Determine your realistic car buying budget"
            sections={[
              {
                title: "Income & Affordability Assessment",
                prompts: [
                  "What is your monthly take-home income after taxes?",
                  "What percentage of your income should you allocate to transportation?",
                  "What other major monthly expenses do you have?",
                  "How much emergency savings will you maintain after the car purchase?",
                  "What is your debt-to-income ratio including this potential car payment?"
                ],
                examples: [
                  "Include salary, bonuses, side income - use net pay, not gross",
                  "Financial experts recommend 10-20% max for total transportation costs",
                  "Rent, utilities, groceries, insurance, student loans, credit cards",
                  "Keep 3-6 months of expenses in emergency fund after car down payment",
                  "Total monthly debt payments should stay under 40% of gross income"
                ]
              },
              {
                title: "Down Payment Planning",
                prompts: [
                  "How much can you put down without touching emergency savings?",
                  "What sources will you use for your down payment?",
                  "Should you put down more to lower monthly payments?",
                  "How does down payment affect loan terms and interest rates?",
                  "What's the minimum down payment you're comfortable with?"
                ],
                examples: [
                  "Aim for 20% down for new cars, 10% for used cars if possible",
                  "Savings, gifts from family, tax refund, side job earnings",
                  "Higher down payment = lower monthly payment but less cash on hand",
                  "More down payment often means better interest rates and loan approval",
                  "Some loans require as little as $1,000 down, but more is better"
                ]
              },
              {
                title: "Maximum Purchase Price",
                prompts: [
                  "What's the maximum monthly payment you can comfortably afford?",
                  "What total purchase price does this payment support?",
                  "How do taxes, fees, and extras affect your budget?",
                  "Should you buy at the top of your budget or leave room?",
                  "How will seasonal income changes affect your payment ability?"
                ],
                examples: [
                  "Use 20% rule: max payment = 20% of take-home income",
                  "Use online calculators with your down payment, interest rate, loan term",
                  "Add 8-12% to car price for taxes, registration, dealer fees, warranty",
                  "Stay 10-20% below max to handle unexpected expenses",
                  "Consider bonuses, overtime, seasonal work fluctuations"
                ]
              },
              {
                title: "New vs Used Budget Impact",
                prompts: [
                  "How does choosing new vs used affect your budget?",
                  "What are the total cost differences over time?",
                  "How do insurance costs differ between new and used cars?",
                  "What maintenance and repair costs should you budget for?",
                  "How does depreciation affect your financial decision?"
                ],
                examples: [
                  "New cars cost more upfront but may have lower repair costs initially",
                  "Used cars save money upfront but may need more repairs sooner",
                  "Full coverage required for financed cars; new cars cost more to insure",
                  "Used cars may need $1,000-3,000 in repairs in first few years",
                  "New cars lose 20% value in first year, 60% in first 5 years"
                ]
              }
            ]}
            tips={[
              "Use the 20/4/10 rule: 20% down, 4-year max loan, 10% of income for payment",
              "Get pre-approved for financing to know your real budget before shopping",
              "Factor in insurance, registration, and maintenance costs to your budget",
              "Leave room in your budget for unexpected repairs and maintenance",
              "Consider certified pre-owned as middle ground between new and used"
            ]}
          />
        </TabsContent>

        <TabsContent value="financing">
          <GuidedNotePage
            title="Financing Options & Comparison"
            description="Compare different financing sources and loan terms"
            sections={[
              {
                title: "Financing Sources",
                prompts: [
                  "Should you get pre-approved through your bank or credit union?",
                  "How do dealer financing offers compare to outside lenders?",
                  "What credit score do you need for the best rates?",
                  "Are there special manufacturer financing incentives available?",
                  "Should you consider paying cash vs financing?"
                ],
                examples: [
                  "Credit unions often offer best rates; apply to 2-3 lenders before shopping",
                  "Dealers may match or beat outside offers but verify all terms carefully",
                  "740+ credit gets best rates, 620+ for approval, below 620 may need co-signer",
                  "0% APR or cash back offers, but read fine print on term requirements",
                  "Consider opportunity cost: could you invest cash and earn more than loan rate?"
                ]
              },
              {
                title: "Loan Terms Comparison",
                prompts: [
                  "What loan term length makes the most financial sense?",
                  "How do different loan terms affect your monthly payment?",
                  "What's the total interest cost difference between loan terms?",
                  "Should you choose shorter term with higher payments?",
                  "How does loan term affect when you'll have positive equity?"
                ],
                examples: [
                  "36-60 months typical, avoid 72+ months if possible due to higher interest",
                  "Longer terms = lower payments but much more total interest paid",
                  "60-month vs 36-month could mean $2,000+ more in total interest",
                  "Shorter terms build equity faster and cost less total, if you can afford it",
                  "Most cars go underwater immediately; shorter loans get you positive equity faster"
                ]
              },
              {
                title: "Interest Rates & APR",
                prompts: [
                  "What interest rate should you expect based on your credit?",
                  "How can you improve your chances of getting a better rate?",
                  "What's the difference between promotional rates and standard rates?",
                  "Should you consider refinancing options later?",
                  "How do you calculate the true cost of different APR offers?"
                ],
                examples: [
                  "Excellent credit (740+): 3-5%, Good (680-739): 5-8%, Fair (620-679): 8-12%",
                  "Pay down credit cards, don't apply for new credit, save larger down payment",
                  "0% APR may require top credit and forfeiture of cash rebates",
                  "You can refinance auto loans later if rates drop or credit improves",
                  "Use online calculators to compare total interest paid over loan life"
                ]
              },
              {
                title: "Pre-approval Strategy",
                prompts: [
                  "How many lenders should you get pre-approved with?",
                  "What documents do you need for pre-approval?",
                  "How long are pre-approval offers valid?",
                  "Can you use pre-approval to negotiate with dealers?",
                  "What should you look for in pre-approval terms?"
                ],
                examples: [
                  "Apply to 2-4 lenders within 14-day window to minimize credit impact",
                  "Pay stubs, bank statements, tax returns, ID, proof of insurance",
                  "Most pre-approvals valid 30-90 days, some up to 120 days",
                  "Yes, use pre-approval rate to negotiate dealer financing or get rate matching",
                  "Check APR, loan term, maximum amount, any fees or prepayment penalties"
                ]
              }
            ]}
            tips={[
              "Get pre-approved from multiple lenders before visiting dealerships",
              "Keep loan terms as short as you can comfortably afford",
              "Shop around for rates - even 1% difference saves hundreds over loan term",
              "Read all financing paperwork carefully before signing",
              "Consider credit union membership for potentially better rates"
            ]}
          />
        </TabsContent>

        <TabsContent value="ongoing-costs">
          <GuidedNotePage
            title="Ongoing Ownership Costs"
            description="Budget for insurance, maintenance, and other ownership expenses"
            sections={[
              {
                title: "Insurance Cost Planning",
                prompts: [
                  "What insurance coverage do you need and what will it cost?",
                  "How do different cars affect your insurance premiums?",
                  "What factors influence your insurance rates most?",
                  "Should you bundle auto insurance with other policies?",
                  "How can you reduce insurance costs without sacrificing coverage?"
                ],
                examples: [
                  "Full coverage required for financed cars: liability, collision, comprehensive",
                  "Sports cars, luxury cars, and cars with high theft rates cost more to insure",
                  "Your age, driving record, credit score, location, annual mileage",
                  "Often saves 5-25% to bundle with home/renters insurance",
                  "Higher deductibles, good student discounts, defensive driving courses, safe driving apps"
                ]
              },
              {
                title: "Maintenance & Repairs",
                prompts: [
                  "What are typical maintenance costs for the cars you're considering?",
                  "How do maintenance costs differ between brands and models?",
                  "Should you budget for major repairs and when might they occur?",
                  "Are extended warranties worth the cost for your situation?",
                  "How will you handle maintenance - dealer, independent shop, or DIY?"
                ],
                examples: [
                  "Expect $500-1,500 annually: oil changes, tires, brakes, fluids",
                  "Luxury brands typically cost more; some brands known for reliability",
                  "Budget $1,000-2,000 annually after warranty expires for potential repairs",
                  "Usually not worth it for reliable brands, maybe yes for luxury/complex cars",
                  "Dealer most expensive but warranty-compliant, independent shops good middle ground"
                ]
              },
              {
                title: "Fuel & Operating Costs",
                prompts: [
                  "How much will you spend on fuel annually?",
                  "How do different fuel types affect your operating costs?",
                  "What's the impact of fuel efficiency on your budget?",
                  "Should you consider electric or hybrid to reduce fuel costs?",
                  "How do your driving habits affect fuel consumption?"
                ],
                examples: [
                  "Calculate: (annual miles ÷ MPG) × average gas price in your area",
                  "Premium gas adds $300-500 annually, diesel may cost more but get better MPG",
                  "30 MPG vs 20 MPG saves $500-800 annually at 15,000 miles/year",
                  "Factor in electricity costs, charging equipment, potential tax credits",
                  "Highway vs city driving, climate control use, driving style affect MPG significantly"
                ]
              },
              {
                title: "Registration & Other Costs",
                prompts: [
                  "What are the registration and licensing costs in your state?",
                  "Are there additional fees for different types of vehicles?",
                  "What about tolls, parking, or other regular transportation costs?",
                  "Should you budget for accessories or modifications?",
                  "How do these ongoing costs fit into your monthly budget?"
                ],
                examples: [
                  "Varies by state: $30-300 annually, often based on car value or weight",
                  "Electric vehicles may have different fees, luxury cars may cost more",
                  "City parking ($100-300/month), toll roads, car washes, detailing",
                  "Floor mats, phone mounts, cargo organizers - budget $200-500",
                  "Total monthly: payment + insurance + fuel + maintenance + registration/12"
                ]
              }
            ]}
            tips={[
              "Get insurance quotes before buying to avoid payment shock",
              "Research reliability ratings to estimate future repair costs",
              "Budget 15-20% of car value annually for insurance, maintenance, and repairs",
              "Consider total cost of ownership, not just purchase price",
              "Keep a car maintenance fund for unexpected repairs"
            ]}
          />
        </TabsContent>

        <TabsContent value="trade-in">
          <GuidedNotePage
            title="Trade-In & Current Car Value"
            description="Maximize your current car's value and plan the trade-in process"
            sections={[
              {
                title: "Current Car Value Assessment",
                prompts: [
                  "What is your current car worth through different channels?",
                  "How do trade-in, private sale, and dealer offers compare?",
                  "What factors most affect your car's value?",
                  "Should you invest in repairs before selling/trading?",
                  "What documentation do you need to maximize value?"
                ],
                examples: [
                  "Check KBB, Edmunds, NADA - private sale usually 15-25% higher than trade",
                  "Trade-in convenient but lower value, private sale higher but more work",
                  "Mileage, condition, service history, accidents, market demand for your model",
                  "Minor cosmetic fixes may help, major repairs usually not worth it",
                  "Service records, clean title, owner's manual, spare keys increase value"
                ]
              },
              {
                title: "Trade-In Process Strategy",
                prompts: [
                  "Should you negotiate trade-in value separately from new car price?",
                  "How can you prepare your car to maximize trade-in value?",
                  "What paperwork do you need for the trade-in process?",
                  "Are there tax advantages to trading in vs selling privately?",
                  "Should you get multiple trade-in appraisals?"
                ],
                examples: [
                  "Yes, negotiate each separately to avoid confusion and get best overall deal",
                  "Clean inside/out, minor touch-ups, gather service records, fix obvious issues",
                  "Title (if owned), registration, service records, spare keys, owner's manual",
                  "Trade-ins reduce taxable amount on new car purchase in most states",
                  "Get appraisals from 2-3 dealers, CarMax, or other car buying services"
                ]
              },
              {
                title: "Private Sale Considerations",
                prompts: [
                  "Is selling privately worth the extra effort for your situation?",
                  "How do you safely handle private sale transactions?",
                  "What are the legal requirements for private sales in your state?",
                  "How do you price your car competitively for private sale?",
                  "What are the risks and how do you mitigate them?"
                ],
                examples: [
                  "Consider time, effort, and hassle vs extra money - usually $2,000-5,000 more",
                  "Meet in public places, accept only cash/certified funds, verify buyer ID",
                  "Title transfer, bill of sale, odometer disclosure, emissions (varies by state)",
                  "Price slightly above market to allow negotiation room, highlight best features",
                  "Scams, non-payment, liability issues - keep insurance until title transfers"
                ]
              },
              {
                title: "Timing Your Trade/Sale",
                prompts: [
                  "When is the best time to sell or trade your current car?",
                  "How do seasonal factors affect car values?",
                  "Should you sell before shopping for new car or coordinate timing?",
                  "How do you handle the gap between selling and buying?",
                  "What if your current car needs major repairs soon?"
                ],
                examples: [
                  "Spring/summer typically better for convertibles, 4WD better before winter",
                  "Avoid selling right after new model year launches (your model year drops value)",
                  "Coordinate timing to avoid being without transportation, or arrange rental",
                  "Consider short-term rental car, borrowing car, or ride-sharing costs",
                  "Sell before major repairs needed, but disclose known issues honestly"
                ]
              }
            ]}
            tips={[
              "Clean your car thoroughly inside and out before any appraisal",
              "Get multiple quotes - trade-in values can vary significantly between dealers",
              "Keep detailed maintenance records to prove good care",
              "Consider tax savings of trade-in vs higher value of private sale",
              "Time your sale/trade to avoid being without transportation"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}