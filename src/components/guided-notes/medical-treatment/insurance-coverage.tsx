"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InsuranceCoverage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Insurance Coverage & Financial Planning</h1>
        <p className="text-muted-foreground">Navigate insurance benefits and plan for medical expenses effectively.</p>
      </div>

      <Tabs defaultValue="understanding-benefits" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="understanding-benefits" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Understanding Benefits</span>
            <span className="sm:hidden">Benefits</span>
          </TabsTrigger>
          <TabsTrigger value="authorization-process" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Authorizations</span>
            <span className="sm:hidden">Auth</span>
          </TabsTrigger>
          <TabsTrigger value="claims-appeals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Claims & Appeals</span>
            <span className="sm:hidden">Claims</span>
          </TabsTrigger>
          <TabsTrigger value="financial-assistance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Financial Aid</span>
            <span className="sm:hidden">Aid</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="understanding-benefits">
          <GuidedNotePage
            title="Understanding Your Benefits"
            description="Decode your insurance plan and maximize your coverage"
            sections={[
              {
                title: "Policy Details",
                prompts: [
                  "What are your specific deductibles, copays, and coinsurance amounts?",
                  "What is your annual out-of-pocket maximum and how does it work?",
                  "Which providers and hospitals are in your insurance network?",
                  "What treatments or services require prior authorization from your plan?",
                  "How do your benefits differ for in-network vs. out-of-network care?"
                ],
                examples: [
                  "$2000 deductible, $30 specialist copay, 20% coinsurance after deductible",
                  "Out-of-pocket max $8000 - after this amount, insurance covers 100%",
                  "Check provider directory online or call to verify current network status",
                  "Specialty medications, imaging, surgeries, durable medical equipment often need approval",
                  "In-network: lower costs, covered services; Out-network: higher costs, may not be covered"
                ]
              },
              {
                title: "Coverage Verification",
                prompts: [
                  "How will you verify coverage for your specific treatments and procedures?",
                  "What information do you need to provide to check benefits accurately?",
                  "How do you find out what your insurance will pay for recommended treatments?",
                  "What questions should you ask when calling your insurance company?",
                  "How will you document coverage information for future reference?"
                ],
                examples: [
                  "Call member services with specific procedure codes, get pre-estimates for treatments",
                  "Member ID, date of birth, specific procedure/medication names, provider details",
                  "Ask for benefit summaries in writing, get procedure-specific coverage details",
                  "Is this covered? What's my cost share? Do I need authorization? Are there alternatives covered?",
                  "Keep notes with dates, reference numbers, names of representatives spoken to"
                ]
              },
              {
                title: "Provider Networks",
                prompts: [
                  "How do you verify that your doctors and hospitals are in your network?",
                  "What should you do if a recommended specialist is out-of-network?",
                  "How do network changes during the year affect your coverage?",
                  "What happens if you need emergency care at an out-of-network facility?",
                  "How do you research network options when choosing new providers?"
                ],
                examples: [
                  "Check online provider directory, call insurance and provider to double-check",
                  "Ask for in-network alternatives, request coverage exception, understand out-of-network costs",
                  "Providers can leave networks mid-year, verify network status before each appointment",
                  "Emergency care usually covered at in-network rates regardless of facility",
                  "Use insurance website tools, ask for referrals to in-network specialists"
                ]
              },
              {
                title: "Prescription Coverage",
                prompts: [
                  "How does your plan cover the medications prescribed for your condition?",
                  "What is your plan's formulary and how does it affect your medication costs?",
                  "What options do you have if your medication isn't covered or is expensive?",
                  "How do you use your pharmacy benefits most effectively?",
                  "What medication assistance programs might be available to you?"
                ],
                examples: [
                  "Check formulary for tier level, generic vs. brand coverage, specialty drug policies",
                  "Formulary lists covered drugs by tier - generic cheapest, brand name more expensive",
                  "Ask for generic alternatives, request formulary exception, explore patient assistance programs",
                  "Use preferred pharmacies, mail-order for maintenance meds, 90-day supplies",
                  "Manufacturer coupons, pharmacy assistance programs, state programs for low-income patients"
                ]
              }
            ]}
            tips={[
              "Keep your insurance card with you and verify coverage before every medical appointment",
              "Understand the difference between deductibles, copays, and coinsurance to predict your costs",
              "Always get pre-authorization when required - failing to do so can result in denied claims",
              "Keep detailed records of all insurance communications including dates, names, and reference numbers",
              "Review your benefits summary annually and understand any changes to your plan"
            ]}
          />
        </TabsContent>

        <TabsContent value="authorization-process">
          <GuidedNotePage
            title="Prior Authorization Process"
            description="Navigate prior authorization requirements effectively"
            sections={[
              {
                title: "Understanding Prior Auth",
                prompts: [
                  "Which of your treatments or medications require prior authorization?",
                  "What is the process for obtaining prior authorization from your insurance?",
                  "How long does the prior authorization process typically take?",
                  "What information does your doctor need to provide for authorization?",
                  "What happens if prior authorization is denied initially?"
                ],
                examples: [
                  "Specialty drugs, expensive procedures, MRI/CT scans, referrals to specialists",
                  "Doctor's office submits request with medical justification, insurance reviews and approves/denies",
                  "Urgent requests: 72 hours, standard requests: 14-30 days depending on plan",
                  "Medical necessity documentation, previous treatments tried, clinical notes, test results",
                  "Can appeal denial, try different approach, or consider alternative treatments"
                ]
              },
              {
                title: "Working with Providers",
                prompts: [
                  "How will your doctor's office help with the prior authorization process?",
                  "What information should you provide to help with authorization requests?",
                  "How do you follow up on pending authorization requests?",
                  "What should you do if your provider's office is slow with authorizations?",
                  "How do you ensure authorizations are obtained before scheduling procedures?"
                ],
                examples: [
                  "Most offices handle submissions, but you may need to follow up and provide insurance info",
                  "Detailed symptom history, previous treatments tried, other medical conditions",
                  "Call insurance directly for status updates, ask doctor's office for reference numbers",
                  "Be proactive with calls, offer to help with paperwork, consider changing providers",
                  "Confirm authorization status before appointment, get authorization numbers in writing"
                ]
              },
              {
                title: "Appeals & Denials",
                prompts: [
                  "What steps will you take if a prior authorization is denied?",
                  "What information strengthens your appeal for coverage?",
                  "How long do you have to submit an appeal and what's the process?",
                  "When should you consider involving patient advocates or external reviewers?",
                  "What alternatives exist if appeals are unsuccessful?"
                ],
                examples: [
                  "Request detailed denial reason, gather additional medical documentation for appeal",
                  "Medical literature supporting treatment, specialist letters, documentation of failed alternatives",
                  "Usually 60-180 days to appeal, may require multiple levels of review",
                  "Use if multiple appeals fail, for life-threatening conditions, or complex cases",
                  "Consider alternative treatments, cash-pay options, patient assistance programs"
                ]
              },
              {
                title: "Timing & Planning",
                prompts: [
                  "How will you plan treatment timelines around authorization requirements?",
                  "What should you do if you need urgent care but authorization is pending?",
                  "How do you coordinate authorizations for multiple treatments or providers?",
                  "What happens if your condition changes during the authorization process?",
                  "How do you avoid treatment delays due to authorization issues?"
                ],
                examples: [
                  "Start authorization process early, build buffer time into treatment schedules",
                  "Contact insurance for expedited review, ask doctor for urgent/emergency authorization",
                  "Keep list of all pending authorizations, coordinate timing between different requests",
                  "Notify insurance of changes, may need new authorization based on updated condition",
                  "Stay proactive with follow-up, have backup treatment plans, maintain open communication"
                ]
              }
            ]}
            tips={[
              "Start the prior authorization process as soon as your doctor recommends treatment",
              "Keep copies of all authorization approvals and bring them to medical appointments",
              "Don't assume authorization approval means the treatment will be fully covered - verify your costs",
              "If authorization is denied, ask for a written explanation and review your appeal options immediately",
              "Build relationships with your doctor's office staff who handle authorizations - they can be valuable allies"
            ]}
          />
        </TabsContent>

        <TabsContent value="claims-appeals">
          <GuidedNotePage
            title="Claims Management & Appeals"
            description="Handle insurance claims and navigate the appeals process"
            sections={[
              {
                title: "Claims Processing",
                prompts: [
                  "How will you track and monitor your insurance claims?",
                  "What should you do when you receive an Explanation of Benefits (EOB)?",
                  "How do you identify errors or issues with processed claims?",
                  "What timeline should you expect for claim processing and payment?",
                  "How do you coordinate claims when you have multiple insurance plans?"
                ],
                examples: [
                  "Check online portal regularly, keep spreadsheet of services and expected coverage",
                  "Review EOB carefully, check dates of service, verify provider info, understand payment amounts",
                  "Compare EOB to what you expected based on benefits, look for coding errors",
                  "Claims typically processed in 30-60 days, payments to providers may take additional time",
                  "Primary insurance processes first, secondary picks up remaining costs per coordination rules"
                ]
              },
              {
                title: "Denied Claims",
                prompts: [
                  "What are the common reasons for claim denials and how can you address them?",
                  "How do you determine if a claim denial is correct or should be appealed?",
                  "What information do you need to gather to challenge a denied claim?",
                  "How do you work with your provider's office to resolve claim issues?",
                  "What timeline do you have to address denied claims?"
                ],
                examples: [
                  "No prior authorization, out-of-network provider, service not covered, coding errors",
                  "Review your benefits, check if prior auth was required, verify provider network status",
                  "Medical records, receipts, authorization approvals, benefit summary, correspondence",
                  "Ask billing department to resubmit with corrected information or additional documentation",
                  "Usually have 1-2 years to appeal claims, but sooner is better for resolution"
                ]
              },
              {
                title: "Appeals Process",
                prompts: [
                  "What is the formal appeals process for your insurance company?",
                  "How do you prepare a strong appeal letter for a denied claim?",
                  "What documentation should you include with your appeal submission?",
                  "How long does the appeals process take and what are your options if unsuccessful?",
                  "When should you consider external review or legal assistance for appeals?"
                ],
                examples: [
                  "First level internal review, then external independent review if denied again",
                  "State specific reasons for disagreement, reference policy language, include medical justification",
                  "Medical records, doctor's letters, policy documents, previous correspondence",
                  "30-60 days for internal review, 45-90 days for external review, can go to state insurance commissioner",
                  "Complex cases, large dollar amounts, patterns of improper denials, life-threatening situations"
                ]
              },
              {
                title: "Financial Responsibility",
                prompts: [
                  "How do you handle bills while claims are being processed or appealed?",
                  "What are your rights and responsibilities regarding payment during disputes?",
                  "How do you negotiate payment arrangements for large medical bills?",
                  "What should you do if you receive bills for services you believe should be covered?",
                  "How do you protect your credit while resolving insurance and billing disputes?"
                ],
                examples: [
                  "Ask providers to hold billing while appeal pending, make partial payments if possible",
                  "You're generally not required to pay disputed amounts while appeals are pending",
                  "Contact provider billing department, request payment plans, ask about financial hardship programs",
                  "Don't pay immediately, verify with insurance first, appeal if necessary",
                  "Keep detailed records, communicate in writing, use certified mail for important correspondence"
                ]
              }
            ]}
            tips={[
              "Keep meticulous records of all medical bills, EOBs, and insurance communications",
              "Don't ignore claim denials - address them promptly while you have time to appeal",
              "Always appeal claim denials if you believe they're incorrect - many are overturned on appeal",
              "Work with your healthcare provider's billing office - they often have experience with insurance issues",
              "Consider hiring a medical billing advocate for complex or high-dollar claim disputes"
            ]}
          />
        </TabsContent>

        <TabsContent value="financial-assistance">
          <GuidedNotePage
            title="Financial Assistance & Support"
            description="Find and access financial help for medical expenses"
            sections={[
              {
                title: "Hospital Financial Aid",
                prompts: [
                  "What financial assistance programs are available at your hospital or medical center?",
                  "What are the eligibility requirements for financial aid programs?",
                  "How do you apply for charity care or payment reduction programs?",
                  "What documentation do you need to provide for financial assistance applications?",
                  "How do financial assistance programs affect your medical credit and future care?"
                ],
                examples: [
                  "Charity care, payment plans, sliding scale fees, prompt payment discounts",
                  "Usually based on federal poverty guidelines, typically 200-400% of poverty level",
                  "Complete application before or shortly after service, provide income/asset documentation",
                  "Tax returns, pay stubs, bank statements, proof of expenses, unemployment documentation",
                  "Usually doesn't affect credit if approved, may require reapplication annually"
                ]
              },
              {
                title: "Prescription Assistance",
                prompts: [
                  "What pharmaceutical assistance programs are available for your medications?",
                  "How do you apply for drug manufacturer patient assistance programs?",
                  "What state or federal programs help with prescription costs?",
                  "How do pharmacy discount programs work and when should you use them?",
                  "What are the eligibility requirements and application processes for drug assistance?"
                ],
                examples: [
                  "Manufacturer patient assistance, state pharmaceutical assistance, Medicare Extra Help",
                  "Apply directly through manufacturer websites or through healthcare provider",
                  "State programs for seniors, disability programs, Medicare Low Income Subsidy",
                  "GoodRx, pharmacy chains' programs, may be better than insurance for some medications",
                  "Income limits vary by program, some consider assets, others only income"
                ]
              },
              {
                title: "Community Resources",
                prompts: [
                  "What community organizations provide assistance with medical expenses?",
                  "How do you find disease-specific organizations that offer financial support?",
                  "What transportation assistance is available for medical appointments?",
                  "How can social workers help you navigate financial assistance options?",
                  "What government programs might help with medical costs and related expenses?"
                ],
                examples: [
                  "Local churches, United Way, cancer societies, disease foundations, community health centers",
                  "National organizations for your specific condition often have grant programs",
                  "Medical transport services, volunteer driver programs, public transit vouchers",
                  "Hospital social workers can identify programs, help with applications, coordinate resources",
                  "Medicaid, Medicare, disability benefits, food assistance, utility help programs"
                ]
              },
              {
                title: "Payment Strategies",
                prompts: [
                  "What payment options and arrangements can you negotiate with healthcare providers?",
                  "How do you prioritize multiple medical bills when resources are limited?",
                  "What are the pros and cons of medical credit cards or loans for healthcare expenses?",
                  "How do you handle collections while seeking financial assistance?",
                  "What strategies help you budget for ongoing medical expenses?"
                ],
                examples: [
                  "Interest-free payment plans, reduced lump-sum payments, extended payment terms",
                  "Prioritize critical ongoing care, negotiate smaller payments for older bills",
                  "Medical credit: often 0% interest initially, but high rates after promotional period",
                  "Communicate with billing offices, send letters explaining situation, keep payment records",
                  "Set aside funds monthly, use HSA/FSA accounts, budget for deductible reset annually"
                ]
              }
            ]}
            tips={[
              "Apply for financial assistance before receiving services when possible - it's easier to get approved",
              "Never ignore medical bills - contact billing offices immediately if you can't pay",
              "Many hospitals are required by law to offer charity care - ask specifically about these programs",
              "Keep detailed records of all financial assistance applications and communications",
              "Don't be embarrassed to ask for help - medical debt affects millions of people and assistance programs exist to help"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}