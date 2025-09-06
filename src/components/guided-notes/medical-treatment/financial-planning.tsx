"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinancialPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Planning & Medical Expenses</h1>
        <p className="text-muted-foreground">Plan and manage the financial aspects of your medical treatment.</p>
      </div>

      <Tabs defaultValue="cost-estimation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="cost-estimation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cost Estimation</span>
            <span className="sm:hidden">Costs</span>
          </TabsTrigger>
          <TabsTrigger value="budgeting-savings" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Budgeting</span>
            <span className="sm:hidden">Budget</span>
          </TabsTrigger>
          <TabsTrigger value="payment-strategies" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Payment</span>
            <span className="sm:hidden">Payment</span>
          </TabsTrigger>
          <TabsTrigger value="long-term-impact" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Long-term Impact</span>
            <span className="sm:hidden">Impact</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cost-estimation">
          <GuidedNotePage
            title="Medical Cost Estimation"
            description="Understand and estimate the costs associated with your treatment"
            sections={[
              {
                title: "Treatment Cost Breakdown",
                prompts: [
                  "What are the estimated costs for your recommended treatment plan?",
                  "How will you research and verify cost estimates for procedures and medications?",
                  "What hidden or unexpected costs should you plan for?",
                  "How do costs vary between different treatment options you're considering?",
                  "What factors might cause your medical costs to be higher or lower than estimates?"
                ],
                examples: [
                  "Surgery fees, hospital stays, medications, follow-up care, rehabilitation",
                  "Call insurance, get estimates from providers, research online cost calculators",
                  "Complications, extended recovery, additional testing, travel costs",
                  "Compare total costs including follow-up care, not just upfront procedure costs",
                  "Complications, insurance changes, need for additional treatments, geographic location"
                ]
              },
              {
                title: "Insurance Coverage Analysis",
                prompts: [
                  "What portion of your treatment costs will be covered by insurance?",
                  "What are your out-of-pocket maximums and how quickly might you reach them?",
                  "How do you get accurate benefit estimates for your specific treatments?",
                  "What coverage limitations or exclusions apply to your situation?",
                  "How will insurance coverage change if you need ongoing or extended treatment?"
                ],
                examples: [
                  "Calculate deductibles, copays, coinsurance amounts for each service",
                  "Track expenses toward annual out-of-pocket maximum, plan for reset dates",
                  "Contact insurance with specific procedure codes, get written estimates",
                  "Experimental treatments, out-of-network providers, cosmetic aspects",
                  "Annual benefit limits, lifetime maximums, changes in employment/insurance"
                ]
              },
              {
                title: "Additional Expense Planning",
                prompts: [
                  "What non-medical expenses will you incur due to your treatment?",
                  "How will your treatment affect your ability to work and earn income?",
                  "What support services or equipment will you need to purchase?",
                  "How will travel and accommodation costs impact your treatment budget?",
                  "What household expenses might increase due to your medical condition?"
                ],
                examples: [
                  "Childcare, pet care, housekeeping, meal delivery, transportation",
                  "Time off work, reduced hours, disability leave, career changes",
                  "Medical equipment, mobility aids, home modifications, comfort items",
                  "Travel to specialists, hotel stays, parking fees, family travel costs",
                  "Prepared foods, cleaning services, utility increases, medication storage"
                ]
              },
              {
                title: "Cost Comparison Strategies",
                prompts: [
                  "How will you compare costs between different providers or treatment facilities?",
                  "What questions should you ask when shopping for medical services?",
                  "How do you balance cost considerations with quality of care?",
                  "What resources help you find cost-effective options for your treatment?",
                  "When is it worth paying more for premium care or convenience?"
                ],
                examples: [
                  "Get itemized estimates, compare total packages, factor in travel costs",
                  "What's included in the price? What additional fees might apply? Payment options?",
                  "Research provider credentials, outcomes, and patient satisfaction alongside costs",
                  "Hospital price transparency tools, insurance provider directories, patient advocacy groups",
                  "Complex procedures, high-risk situations, when convenience significantly impacts recovery"
                ]
              }
            ]}
            tips={[
              "Get cost estimates in writing from providers and insurance companies to avoid surprises",
              "Factor in all related expenses, not just direct medical costs, when planning your budget",
              "Ask about payment plans and financial assistance before choosing expensive treatment options",
              "Keep detailed records of all medical expenses for insurance claims and tax purposes",
              "Consider seeking treatment at teaching hospitals or participating in clinical trials for cost savings"
            ]}
          />
        </TabsContent>

        <TabsContent value="budgeting-savings">
          <GuidedNotePage
            title="Budgeting & Savings Strategies"
            description="Create a budget and savings plan for medical expenses"
            sections={[
              {
                title: "Medical Expense Budget",
                prompts: [
                  "How will you create a comprehensive budget for your medical expenses?",
                  "What expenses should you prioritize if you have limited financial resources?",
                  "How will you adjust your regular budget to accommodate medical costs?",
                  "What emergency fund do you need for unexpected medical expenses?",
                  "How will you track medical expenses against your budget throughout treatment?"
                ],
                examples: [
                  "List all expected costs, include insurance portions, add 20% buffer for unexpected expenses",
                  "Essential treatments first, then supportive care, comfort items last",
                  "Reduce discretionary spending, delay major purchases, use savings strategically",
                  "3-6 months of medical expenses beyond insurance coverage",
                  "Spreadsheet tracking, receipt organization, regular budget reviews"
                ]
              },
              {
                title: "Healthcare Savings Accounts",
                prompts: [
                  "How can Health Savings Accounts (HSA) or Flexible Spending Accounts (FSA) help?",
                  "What medical expenses qualify for tax-advantaged account reimbursement?",
                  "How should you plan HSA/FSA contributions to maximize tax benefits?",
                  "What happens to unused FSA funds and how can you avoid losing money?",
                  "How do you use HSA/FSA funds effectively for ongoing medical expenses?"
                ],
                examples: [
                  "Pre-tax contributions reduce taxable income, funds grow tax-free for medical expenses",
                  "Doctor visits, prescriptions, medical equipment, some over-the-counter items",
                  "Estimate annual medical expenses, contribute maximum if possible, adjust as needed",
                  "FSA use-it-or-lose-it rule, some plans allow small rollover or grace period",
                  "Save receipts, use debit cards when available, reimburse yourself strategically"
                ]
              },
              {
                title: "Income Protection",
                prompts: [
                  "How will you protect your income during medical treatment?",
                  "What disability insurance coverage do you have through work or privately?",
                  "How do Family and Medical Leave Act (FMLA) protections apply to your situation?",
                  "What options exist if you need to reduce work hours or change jobs?",
                  "How will you handle benefits continuation if you can't work temporarily?"
                ],
                examples: [
                  "Short-term and long-term disability insurance, sick leave, vacation time",
                  "Check employer benefits, consider supplemental disability insurance",
                  "Job protection for qualified medical leave, understand eligibility requirements",
                  "Part-time work, work-from-home, career changes, retraining programs",
                  "COBRA insurance, spouse's insurance, marketplace plans, Medicaid eligibility"
                ]
              },
              {
                title: "Debt Management",
                prompts: [
                  "How will medical expenses affect your existing debt and financial obligations?",
                  "What debts should you prioritize paying during your medical treatment?",
                  "How can you avoid accumulating excessive medical debt?",
                  "What should you do if medical bills threaten your financial stability?",
                  "How will you rebuild your finances after major medical expenses?"
                ],
                examples: [
                  "May need to defer some payments, negotiate with creditors, prioritize essential expenses",
                  "Secured debts (mortgage, car), essential services, then unsecured debts",
                  "Negotiate payment plans, seek financial assistance, avoid high-interest medical credit",
                  "Contact creditors early, seek credit counseling, consider bankruptcy as last resort",
                  "Create recovery plan, rebuild emergency fund, improve credit score gradually"
                ]
              }
            ]}
            tips={[
              "Start building your medical expense fund as soon as you know you'll need treatment",
              "Take advantage of tax-advantaged healthcare savings accounts to reduce costs",
              "Don't ignore your regular financial obligations - communicate with creditors if needed",
              "Consider the long-term impact of medical debt on your financial goals and plan accordingly",
              "Seek help from financial advisors or credit counselors if medical expenses overwhelm your budget"
            ]}
          />
        </TabsContent>

        <TabsContent value="payment-strategies">
          <GuidedNotePage
            title="Payment Strategies & Options"
            description="Explore different ways to pay for medical expenses"
            sections={[
              {
                title: "Payment Plan Negotiations",
                prompts: [
                  "How will you negotiate payment plans with healthcare providers?",
                  "What payment arrangements are typically available for large medical bills?",
                  "How do you approach providers about reducing or forgiving medical debt?",
                  "What documentation do you need to qualify for financial hardship programs?",
                  "How will payment plans affect your credit and future medical care?"
                ],
                examples: [
                  "Contact billing departments early, explain financial situation, request payment plans",
                  "Interest-free monthly payments, reduced lump-sum settlements, extended payment terms",
                  "Demonstrate financial hardship, ask about charity care programs, negotiate based on ability to pay",
                  "Income statements, tax returns, expense documentation, asset information",
                  "Most payment plans don't affect credit if maintained, may require agreements about future care"
                ]
              },
              {
                title: "Alternative Funding Sources",
                prompts: [
                  "What alternative funding sources are available for medical expenses?",
                  "How do you evaluate medical loans and credit options safely?",
                  "What crowdfunding or community fundraising options might help?",
                  "How can family and friends contribute to your medical expenses effectively?",
                  "What grants or assistance programs exist for your specific condition?"
                ],
                examples: [
                  "Medical loans, credit cards, home equity, retirement fund loans, family assistance",
                  "Compare interest rates, terms, fees; avoid predatory lending; consider alternatives first",
                  "GoFundMe, local fundraisers, church or community support, workplace collections",
                  "Set up dedicated accounts, be transparent about needs, express gratitude appropriately",
                  "Disease-specific foundations, pharmaceutical assistance, hospital charity programs"
                ]
              },
              {
                title: "Timing & Cash Flow",
                prompts: [
                  "How will you time payments to optimize your cash flow and benefits?",
                  "What strategies help manage large medical expenses across multiple providers?",
                  "How do you coordinate payments with insurance reimbursements?",
                  "What should you do if you receive bills before insurance has processed claims?",
                  "How will you handle payment timing for ongoing or extended treatments?"
                ],
                examples: [
                  "Schedule expensive procedures near beginning of year after deductible resets",
                  "Negotiate with all providers, coordinate payment dates, track total expenses",
                  "Wait for insurance processing when possible, track reimbursements, apply to balances",
                  "Contact providers to delay payment, verify insurance claim status, avoid duplicate payments",
                  "Budget monthly amounts, use automatic payments, coordinate with income timing"
                ]
              },
              {
                title: "Financial Protection",
                prompts: [
                  "How will you protect your credit score during medical financial challenges?",
                  "What legal protections exist for medical debt and collections?",
                  "How do you avoid scams targeting people with medical debt?",
                  "What should you do if medical bills go to collections?",
                  "How will you document payments and maintain financial records?"
                ],
                examples: [
                  "Communicate with creditors, make some payments when possible, seek credit counseling",
                  "State laws on medical debt, collection limitations, bankruptcy protections",
                  "Work directly with providers, verify credentials of assistance programs",
                  "Verify debt validity, negotiate payment arrangements, understand your rights",
                  "Keep all receipts, payment confirmations, correspondence, insurance statements"
                ]
              }
            ]}
            tips={[
              "Don't ignore medical bills - contact providers immediately if you can't pay",
              "Negotiate payment arrangements before bills go to collections to protect your credit",
              "Be wary of high-interest medical credit cards and loans - explore other options first",
              "Keep detailed records of all payments and communications about medical debt",
              "Ask about discounts for prompt payment or lump-sum settlements if you have savings available"
            ]}
          />
        </TabsContent>

        <TabsContent value="long-term-impact">
          <GuidedNotePage
            title="Long-term Financial Impact"
            description="Plan for the lasting financial effects of medical treatment"
            sections={[
              {
                title: "Financial Recovery Planning",
                prompts: [
                  "How will medical expenses affect your long-term financial goals?",
                  "What financial goals might you need to delay or modify due to medical costs?",
                  "How will you rebuild your emergency fund after medical expenses?",
                  "What changes to your financial planning are needed based on your health condition?",
                  "How long will it take to recover financially from your medical expenses?"
                ],
                examples: [
                  "Delayed retirement, reduced savings, postponed major purchases, modified investment strategies",
                  "Home purchase, vacation plans, education funding, retirement contributions",
                  "Gradual rebuilding through automatic transfers, prioritize emergency fund restoration",
                  "Increased health insurance needs, disability insurance, long-term care planning",
                  "Create timeline based on debt repayment, income recovery, expense normalization"
                ]
              },
              {
                title: "Career & Income Considerations",
                prompts: [
                  "How might your medical condition affect your career and earning potential?",
                  "What career modifications or accommodations might you need?",
                  "How will you handle potential gaps in employment or reduced income?",
                  "What retraining or skill development might benefit your career prospects?",
                  "How do you balance career ambitions with health management needs?"
                ],
                examples: [
                  "Physical limitations, schedule flexibility needs, stress management requirements",
                  "Remote work, flexible hours, job sharing, different role responsibilities",
                  "Disability benefits, spouse income, part-time work, consulting opportunities",
                  "Technology skills, different industry knowledge, accommodation strategies",
                  "Prioritize health while maintaining career growth, seek supportive employers"
                ]
              },
              {
                title: "Insurance Planning",
                prompts: [
                  "How will your medical history affect future insurance coverage and costs?",
                  "What insurance changes should you consider based on your health condition?",
                  "How do you evaluate insurance options if you need to change employers?",
                  "What supplemental insurance might benefit your long-term financial security?",
                  "How will aging and your medical condition affect insurance needs over time?"
                ],
                examples: [
                  "May face higher premiums, exclusions for pre-existing conditions, limited options",
                  "Higher coverage limits, better prescription benefits, disability insurance",
                  "Carefully compare benefits, consider COBRA timing, evaluate network providers",
                  "Long-term disability, supplemental health, critical illness, long-term care insurance",
                  "Plan for Medicare transition, long-term care needs, increased medical expenses"
                ]
              },
              {
                title: "Estate & Legacy Planning",
                prompts: [
                  "How does your medical condition affect your estate planning needs?",
                  "What documents need updating based on your health situation?",
                  "How will ongoing medical expenses affect what you can leave to beneficiaries?",
                  "What provisions should you make for potential long-term care needs?",
                  "How do you plan for healthcare decisions if you become incapacitated?"
                ],
                examples: [
                  "May need more comprehensive planning, earlier implementation of plans",
                  "Wills, trusts, beneficiary designations, power of attorney, healthcare directives",
                  "Factor in ongoing medical costs, long-term care, reduced ability to accumulate wealth",
                  "Long-term care insurance, Medicaid planning, care facility research",
                  "Healthcare proxy, living will, detailed healthcare preferences documentation"
                ]
              }
            ]}
            tips={[
              "Factor medical expenses into all long-term financial planning and adjust goals realistically",
              "Consider how your condition might progress and plan for increasing healthcare costs over time",
              "Don't let medical debt derail all your financial goals - balance current needs with future security",
              "Review and update insurance coverage regularly as your health and financial situation changes",
              "Seek professional financial planning help if medical expenses significantly impact your long-term finances"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}