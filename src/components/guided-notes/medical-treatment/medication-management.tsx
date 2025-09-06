"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MedicationManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Medication Management & Safety</h1>
        <p className="text-muted-foreground">Safely manage your medications and optimize treatment effectiveness.</p>
      </div>

      <Tabs defaultValue="medication-organization" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="medication-organization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Organization</span>
            <span className="sm:hidden">Organize</span>
          </TabsTrigger>
          <TabsTrigger value="adherence-monitoring" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Adherence</span>
            <span className="sm:hidden">Adhere</span>
          </TabsTrigger>
          <TabsTrigger value="side-effects" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Side Effects</span>
            <span className="sm:hidden">Effects</span>
          </TabsTrigger>
          <TabsTrigger value="pharmacy-coordination" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Pharmacy</span>
            <span className="sm:hidden">Pharm</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="medication-organization">
          <GuidedNotePage
            title="Medication Organization & Tracking"
            description="Create systems to safely organize and track your medications"
            sections={[
              {
                title: "Medication Inventory",
                prompts: [
                  "What system will you use to maintain an accurate list of all your medications?",
                  "How will you track dosages, frequencies, and prescribing doctors for each medication?",
                  "What information should you include about each medication beyond basic dosing?",
                  "How will you keep your medication list current as prescriptions change?",
                  "Where will you store your medication information for easy access during emergencies?"
                ],
                examples: [
                  "Spreadsheet, medication app, wallet card, or notebook with complete medication details",
                  "Include medication name, dose, frequency, prescriber, pharmacy, date started",
                  "Add purpose, special instructions, food restrictions, common side effects",
                  "Update list immediately when medications are added, changed, or discontinued",
                  "Keep copies in wallet, phone, emergency contacts, medical alert bracelet"
                ]
              },
              {
                title: "Storage & Organization",
                prompts: [
                  "How will you safely store your medications to maintain effectiveness?",
                  "What organization system will help you avoid medication errors?",
                  "How do you ensure medications are stored away from children and pets?",
                  "What should you do with expired or discontinued medications?",
                  "How will you organize medications for travel or time away from home?"
                ],
                examples: [
                  "Cool, dry place away from sunlight, avoid bathroom medicine cabinets if humid",
                  "Pill organizers with days/times, separate storage for different family members",
                  "Locked cabinet, high shelves, child-resistant caps, secure location",
                  "Return to pharmacy take-back programs, don't flush unless specifically instructed",
                  "Carry medications in original bottles, bring extra supply, research travel regulations"
                ]
              },
              {
                title: "Daily Management Systems",
                prompts: [
                  "What daily routine will help you take medications consistently?",
                  "How will you remember to take medications at the correct times?",
                  "What backup systems will you use when your routine is disrupted?",
                  "How will you track whether you've taken your medications each day?",
                  "What should you do if you miss a dose of medication?"
                ],
                examples: [
                  "Link medication times to daily activities like meals or bedtime routine",
                  "Phone alarms, pill reminder apps, family member reminders, automatic dispensers",
                  "Travel pill organizers, backup alarms, written schedules for caregivers",
                  "Check pill organizer, mark calendar, use apps that track adherence",
                  "Follow specific instructions for each medication - some can be doubled, others cannot"
                ]
              },
              {
                title: "Communication & Coordination",
                prompts: [
                  "How will you share medication information with all your healthcare providers?",
                  "What should you communicate about your medications during medical appointments?",
                  "How do you ensure all providers know about over-the-counter medications and supplements?",
                  "What medication information should you share with family members or caregivers?",
                  "How will you coordinate medication management if multiple people are involved in your care?"
                ],
                examples: [
                  "Bring updated medication list to every appointment, update patient portals",
                  "Discuss adherence issues, side effects, effectiveness, need for changes",
                  "Include vitamins, herbal supplements, occasional medications like pain relievers",
                  "Share medication list, emergency instructions, pharmacy contact information",
                  "Clear roles for who fills prescriptions, gives reminders, monitors effectiveness"
                ]
              }
            ]}
            tips={[
              "Keep your medication list updated and bring it to every medical appointment",
              "Use a pill organizer to reduce the risk of missed doses or double-dosing",
              "Set consistent times for taking medications and link them to daily routines",
              "Store medications in their original containers with prescription labels intact",
              "Review your complete medication list with your pharmacist periodically to check for interactions"
            ]}
          />
        </TabsContent>

        <TabsContent value="adherence-monitoring">
          <GuidedNotePage
            title="Adherence & Effectiveness Monitoring"
            description="Track medication adherence and monitor treatment effectiveness"
            sections={[
              {
                title: "Adherence Strategies",
                prompts: [
                  "What barriers might interfere with taking your medications as prescribed?",
                  "How will you maintain medication adherence when you feel better or worse?",
                  "What strategies will help you remember to take medications consistently?",
                  "How do you handle medication schedules during illness, travel, or disruptions?",
                  "What should you do if cost or access issues affect your ability to get medications?"
                ],
                examples: [
                  "Forgetting, side effects, cost concerns, complex schedules, feeling better",
                  "Continue medications even when symptoms improve unless doctor advises otherwise",
                  "Daily routines, alarms, pill organizers, family support, smartphone apps",
                  "Adjust timing temporarily but maintain frequency, bring extra supply when traveling",
                  "Contact doctor about alternatives, apply for patient assistance programs, use pharmacy discount programs"
                ]
              },
              {
                title: "Effectiveness Tracking",
                prompts: [
                  "How will you monitor whether your medications are working effectively?",
                  "What symptoms or measurements should you track to assess medication effectiveness?",
                  "How long should you expect to wait before seeing improvement from new medications?",
                  "What changes warrant contacting your doctor about medication adjustments?",
                  "How do you distinguish between medication effects and natural disease progression?"
                ],
                examples: [
                  "Track symptoms, energy levels, pain scales, mood, functional abilities",
                  "Specific symptoms your medication targets, quality of life measures, lab values",
                  "Some work within days, others take weeks or months - ask doctor for timeline",
                  "Worsening symptoms, new concerning symptoms, unexpected side effects",
                  "Keep detailed logs to show patterns, discuss changes with healthcare provider"
                ]
              },
              {
                title: "Adherence Challenges",
                prompts: [
                  "How will you address medication side effects that interfere with adherence?",
                  "What strategies help when medications are difficult to remember or coordinate?",
                  "How do you manage medications when you're dealing with depression or low motivation?",
                  "What support do you need from family or caregivers for medication management?",
                  "How will you handle medications that require special timing or food restrictions?"
                ],
                examples: [
                  "Discuss side effects with doctor, try timing changes, ask about alternatives",
                  "Simplify regimens when possible, use technology aids, involve family support",
                  "Ask family for help, use automatic dispensers, discuss with mental health provider",
                  "Help with reminders, prescription pickups, organizing pills, transportation to appointments",
                  "Set specific alarms, prepare foods in advance, create visual reminders"
                ]
              },
              {
                title: "Medication Reviews",
                prompts: [
                  "How often should you review your complete medication regimen with healthcare providers?",
                  "What questions should you ask during medication reviews?",
                  "How do you prepare for productive medication review appointments?",
                  "What changes in your condition or life might necessitate medication adjustments?",
                  "How will you track patterns and trends to share during medication reviews?"
                ],
                examples: [
                  "At least annually, or whenever starting new medications or having health changes",
                  "Are all medications still necessary? Any interactions? More effective alternatives?",
                  "Bring current medication list, track adherence and side effects, list concerns",
                  "New diagnoses, changes in kidney/liver function, weight changes, pregnancy",
                  "Keep medication diary, track effectiveness and side effects, note patterns"
                ]
              }
            ]}
            tips={[
              "Never stop prescription medications abruptly without consulting your healthcare provider",
              "Keep a medication diary to track effectiveness, side effects, and adherence patterns",
              "Ask your pharmacist about medication interactions when starting new prescriptions",
              "Set up automatic refills for chronic medications to avoid running out",
              "Be honest with your healthcare providers about adherence challenges - they can help find solutions"
            ]}
          />
        </TabsContent>

        <TabsContent value="side-effects">
          <GuidedNotePage
            title="Side Effects & Safety Monitoring"
            description="Recognize, manage, and report medication side effects safely"
            sections={[
              {
                title: "Side Effect Recognition",
                prompts: [
                  "What are the common and serious side effects of each of your medications?",
                  "How will you distinguish between medication side effects and disease symptoms?",
                  "What side effects require immediate medical attention vs. routine follow-up?",
                  "How do you identify potential drug interactions or cumulative effects?",
                  "What should you do if you experience an allergic reaction to a medication?"
                ],
                examples: [
                  "Read medication guides, ask pharmacist about what to watch for",
                  "Track timing of symptoms relative to medication doses, discuss with provider",
                  "Severe allergic reactions, difficulty breathing, chest pain need emergency care",
                  "New symptoms after starting combinations, unusual severity of known side effects",
                  "Stop medication immediately, seek emergency care for severe reactions, contact prescriber"
                ]
              },
              {
                title: "Side Effect Management",
                prompts: [
                  "What strategies can help minimize or manage common side effects?",
                  "How do you decide whether to continue a medication despite side effects?",
                  "What modifications to timing, food, or other medications might reduce side effects?",
                  "When should you contact your healthcare provider about side effects?",
                  "What alternatives exist if side effects are intolerable?"
                ],
                examples: [
                  "Take with food for nausea, increase fluids for constipation, take at bedtime for drowsiness",
                  "Weigh benefits vs. side effects, consider if side effects are temporary or permanent",
                  "Split doses, change timing, add supportive medications, adjust other treatments",
                  "Any concerning changes, side effects affecting daily function, or worsening symptoms",
                  "Different medications in same class, alternative treatment approaches, dose adjustments"
                ]
              },
              {
                title: "Monitoring Requirements",
                prompts: [
                  "What lab tests or monitoring do your medications require?",
                  "How often do you need monitoring tests and who schedules them?",
                  "What results or changes would indicate problems with your medications?",
                  "How do you keep track of required monitoring and test schedules?",
                  "What should you do if monitoring tests show concerning results?"
                ],
                examples: [
                  "Blood levels for certain medications, liver function tests, kidney function, blood counts",
                  "Varies by medication - some monthly, others annually, usually coordinated by prescriber",
                  "Abnormal liver enzymes, kidney function changes, blood counts outside normal range",
                  "Calendar reminders, healthcare provider coordination, tracking spreadsheet or app",
                  "Contact prescriber immediately, may need medication adjustment or discontinuation"
                ]
              },
              {
                title: "Safety Precautions",
                prompts: [
                  "What safety precautions should you take while on your specific medications?",
                  "How do your medications affect your ability to drive, work, or perform activities?",
                  "What medications, foods, or substances should you avoid while on treatment?",
                  "How do you handle medications during illness or when other treatments are needed?",
                  "What emergency information should others know about your medications?"
                ],
                examples: [
                  "Avoid alcohol with certain medications, stay hydrated, use sun protection",
                  "Drowsiness, dizziness, or cognitive effects may impair driving or operating machinery",
                  "Other medications that interact, certain foods, alcohol, over-the-counter medications",
                  "Some medications need adjustment during illness, others interact with anesthesia",
                  "Medical alert bracelet, emergency contact card with medication list and allergies"
                ]
              }
            ]}
            tips={[
              "Report any side effects to your healthcare provider, even if they seem minor",
              "Keep a log of side effects with timing, severity, and duration to share with providers",
              "Don't stop medications due to side effects without first discussing alternatives with your doctor",
              "Learn the signs of serious medication reactions and seek immediate help when needed",
              "Ask your pharmacist about ways to minimize side effects through timing or food interactions"
            ]}
          />
        </TabsContent>

        <TabsContent value="pharmacy-coordination">
          <GuidedNotePage
            title="Pharmacy Coordination & Resources"
            description="Work effectively with pharmacies and utilize pharmaceutical resources"
            sections={[
              {
                title: "Pharmacy Relationships",
                prompts: [
                  "How do you choose the right pharmacy for your medication needs?",
                  "What services can your pharmacist provide beyond dispensing medications?",
                  "How do you build a productive relationship with your pharmacy team?",
                  "What should you do if your pharmacy doesn't stock your specialty medications?",
                  "How do you coordinate between multiple pharmacies if needed?"
                ],
                examples: [
                  "Consider location, hours, insurance acceptance, specialty services, customer service",
                  "Medication counseling, interaction checks, immunizations, medication therapy management",
                  "Use same pharmacy consistently, ask questions, provide complete medication history",
                  "Ask about ordering medications, consider specialty pharmacy options, plan ahead for refills",
                  "Keep master medication list, inform each pharmacy of medications from others"
                ]
              },
              {
                title: "Prescription Management",
                prompts: [
                  "How will you manage prescription refills to avoid running out of medications?",
                  "What system will help you track prescription renewals and doctor approvals?",
                  "How do you handle insurance issues that delay prescription filling?",
                  "What should you do when prescriptions are more expensive than expected?",
                  "How do you manage prescriptions during travel or emergencies?"
                ],
                examples: [
                  "Set up automatic refills, use pharmacy apps, order refills 5-7 days early",
                  "Track renewal dates, know when prescriptions expire, coordinate with doctor visits",
                  "Call insurance for prior authorization, ask pharmacy about alternatives covered",
                  "Ask about generic alternatives, manufacturer coupons, pharmacy discount programs",
                  "Transfer prescriptions to destination, carry extra supply, keep prescription info handy"
                ]
              },
              {
                title: "Cost Management",
                prompts: [
                  "How can you minimize the cost of your prescription medications?",
                  "What programs or resources help with medication affordability?",
                  "How do you compare prices between different pharmacies?",
                  "When should you consider mail-order pharmacy services?",
                  "What strategies help you budget for medication expenses?"
                ],
                examples: [
                  "Generic medications, 90-day supplies, pharmacy discount programs, manufacturer coupons",
                  "Patient assistance programs, state programs, Medicare Extra Help, pharmacy foundation programs",
                  "Call pharmacies for pricing, use apps like GoodRx, check insurance preferred pharmacies",
                  "Maintenance medications, better pricing, convenient for stable regimens",
                  "Use HSA/FSA accounts, set aside monthly amount, plan for annual deductible reset"
                ]
              },
              {
                title: "Specialty Services",
                prompts: [
                  "What specialty pharmacy services might benefit your medication management?",
                  "How do you access pharmaceutical care services like medication therapy management?",
                  "What support is available for complex medication regimens or injectable drugs?",
                  "How can pharmacists help coordinate your care with your medical team?",
                  "What resources exist for medication education and support?"
                ],
                examples: [
                  "Specialty pharmacies for complex medications, clinical pharmacy services, immunization clinics",
                  "Ask your insurance about covered MTM services, many pharmacies offer comprehensive reviews",
                  "Injection training, home delivery, adherence support, side effect management",
                  "Communication with prescribers, medication reconciliation, therapy recommendations",
                  "Medication classes, printed materials, online resources, patient support programs"
                ]
              }
            ]}
            tips={[
              "Develop a relationship with one primary pharmacy so they can track all your medications",
              "Take advantage of free pharmacy services like medication reviews and interaction checks",
              "Ask your pharmacist about cost-saving options - they often know about available discounts",
              "Use pharmacy apps and online services to manage refills and track medication history",
              "Don't hesitate to ask your pharmacist questions - they're highly trained medication experts"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}