"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EmergencyPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Emergency Planning & Preparedness</h1>
        <p className="text-muted-foreground">Plan for medical emergencies and urgent situations related to your condition.</p>
      </div>

      <Tabs defaultValue="emergency-contacts" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="emergency-contacts" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Emergency Contacts</span>
            <span className="sm:hidden">Contacts</span>
          </TabsTrigger>
          <TabsTrigger value="medical-information" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Medical Info</span>
            <span className="sm:hidden">Info</span>
          </TabsTrigger>
          <TabsTrigger value="action-plans" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Action Plans</span>
            <span className="sm:hidden">Plans</span>
          </TabsTrigger>
          <TabsTrigger value="supplies-documents" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Supplies</span>
            <span className="sm:hidden">Supplies</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="emergency-contacts">
          <GuidedNotePage
            title="Emergency Contact System"
            description="Organize essential contacts for medical emergencies"
            sections={[
              {
                title: "Primary Emergency Contacts",
                prompts: [
                  "Who should be contacted first in case of a medical emergency?",
                  "What backup contacts should be available if primary contacts are unreachable?",
                  "How will you ensure emergency contacts have current information about your condition?",
                  "What contact information should be immediately accessible during emergencies?",
                  "Who has authority to make medical decisions if you cannot?"
                ],
                examples: [
                  "Spouse, adult children, closest family member who can respond quickly",
                  "Siblings, close friends, other family members in different locations",
                  "Share diagnosis, medications, allergies, and any advance directives",
                  "Cell phones, work numbers, addresses, relationship to you",
                  "Healthcare proxy, power of attorney, or legally designated decision-maker"
                ]
              },
              {
                title: "Healthcare Provider Contacts",
                prompts: [
                  "What are the emergency contact numbers for your primary care doctor?",
                  "How do you reach your specialists during after-hours emergencies?",
                  "What pharmacy information should be available for emergency medication needs?",
                  "Which hospital does your doctor prefer for emergency situations?",
                  "How do you contact your insurance company for emergency authorization?"
                ],
                examples: [
                  "Office number, after-hours service, hospital where they have privileges",
                  "Call service numbers, hospital affiliations, backup specialist contacts",
                  "24-hour pharmacy locations, prescription numbers, pharmacy phone numbers",
                  "Preferred emergency room, know which hospitals are in your insurance network",
                  "Member services number, policy number, group number, emergency authorization process"
                ]
              },
              {
                title: "Contact Accessibility",
                prompts: [
                  "Where will you store emergency contact information for easy access?",
                  "How will you ensure others can find your emergency contacts when needed?",
                  "What contact information should you carry with you at all times?",
                  "How will you keep emergency contact information current?",
                  "What technology tools can help manage and access emergency contacts?"
                ],
                examples: [
                  "Phone contacts, wallet card, refrigerator magnet, medical alert bracelet",
                  "Share locations with family, label clearly, keep multiple copies available",
                  "Medical alert bracelet, wallet card, phone ICE (In Case of Emergency) contacts",
                  "Review quarterly, update when contacts move or change numbers",
                  "Medical ID on smartphone, cloud storage, family sharing of contact lists"
                ]
              },
              {
                title: "Communication Plans",
                prompts: [
                  "How will emergency contacts be notified and kept informed during a crisis?",
                  "Who will serve as the main communicator to coordinate information sharing?",
                  "What information should be shared with different levels of contacts?",
                  "How will you handle communication if you're unable to speak for yourself?",
                  "What social media or technology considerations are important for emergency communication?"
                ],
                examples: [
                  "Designate one person to call others, set up group text or email list",
                  "Usually spouse or adult child who can stay at hospital and coordinate",
                  "Immediate family gets full details, extended family gets general updates",
                  "Healthcare proxy speaks for you, advance directives guide decisions",
                  "Privacy settings, who can post updates, how to reach people who don't use technology"
                ]
              }
            ]}
            tips={[
              "Keep emergency contacts in multiple easily accessible places - wallet, phone, refrigerator",
              "Make sure your emergency contacts know they're your emergency contacts and agree to serve",
              "Update emergency contact information whenever there are changes in phone numbers or relationships",
              "Include both local and out-of-area contacts in case of regional disasters",
              "Program emergency contacts into your phone as 'ICE' (In Case of Emergency) contacts"
            ]}
          />
        </TabsContent>

        <TabsContent value="medical-information">
          <GuidedNotePage
            title="Essential Medical Information"
            description="Organize critical medical information for emergency situations"
            sections={[
              {
                title: "Medical Summary",
                prompts: [
                  "What are your current diagnoses that emergency responders should know about?",
                  "What medications are you currently taking and what are the dosages?",
                  "What allergies or adverse drug reactions do you have?",
                  "What medical devices or implants do you have that affect emergency care?",
                  "What recent surgeries or major medical procedures are relevant to emergency care?"
                ],
                examples: [
                  "Diabetes, heart disease, seizure disorder - conditions that affect emergency treatment",
                  "Complete list with generic and brand names, dosages, frequency of administration",
                  "Drug allergies, food allergies, latex allergy, specific reactions experienced",
                  "Pacemaker, insulin pump, joint replacements, stents, hearing aids",
                  "Recent surgery details, current recovery restrictions, post-op complications"
                ]
              },
              {
                title: "Emergency-Specific Information",
                prompts: [
                  "What symptoms or situations would constitute an emergency for your condition?",
                  "What should emergency responders know about your specific medical condition?",
                  "What treatments or medications should be avoided in emergency situations?",
                  "What special considerations does your condition require during emergencies?",
                  "What baseline vital signs or lab values are normal for you?"
                ],
                examples: [
                  "Chest pain, difficulty breathing, severe headache, loss of consciousness",
                  "Diabetic - check blood sugar, cardiac patient - may have atypical symptoms",
                  "Avoid certain medications due to interactions, allergies, or medical conditions",
                  "Special positioning needs, communication difficulties, mobility limitations",
                  "Your normal blood pressure, heart rate, blood sugar ranges if different from standard"
                ]
              },
              {
                title: "Documentation Storage",
                prompts: [
                  "Where will you store copies of important medical documents for emergencies?",
                  "What medical documents should be immediately accessible during a crisis?",
                  "How will you ensure emergency responders can access your medical information?",
                  "What digital storage options work best for emergency medical information?",
                  "How will you keep your emergency medical information current and accurate?"
                ],
                examples: [
                  "Refrigerator folder, bedside table, car glove compartment, wallet",
                  "Insurance cards, medication list, advance directives, emergency contacts",
                  "Medical alert bracelet, wallet card, refrigerator magnet, phone medical ID",
                  "Cloud storage, phone apps, USB drive, password-protected but accessible files",
                  "Review monthly, update when medications change, keep multiple copies current"
                ]
              },
              {
                title: "Advance Directives",
                prompts: [
                  "What advance directives do you have in place for emergency medical care?",
                  "Who is designated to make healthcare decisions if you cannot?",
                  "What are your preferences for life-sustaining treatments in emergencies?",
                  "How will emergency responders know about your advance directives?",
                  "What should your family know about your emergency care preferences?"
                ],
                examples: [
                  "Living will, healthcare proxy, POLST form, do-not-resuscitate order",
                  "Healthcare agent/proxy who knows your values and has legal authority",
                  "Preferences about CPR, mechanical ventilation, feeding tubes, dialysis",
                  "Keep copies with medical information, inform emergency contacts, wear medical alert",
                  "Discuss your values and preferences, make sure they understand your wishes"
                ]
              }
            ]}
            tips={[
              "Keep your medical information summary to one page for quick reference by emergency responders",
              "Use a medical alert bracelet or necklace if you have serious allergies or medical conditions",
              "Store medical information in standard locations like the refrigerator where responders expect to find it",
              "Make sure your advance directives are legally valid in your state and properly executed",
              "Review and update your emergency medical information whenever your condition or treatments change"
            ]}
          />
        </TabsContent>

        <TabsContent value="action-plans">
          <GuidedNotePage
            title="Emergency Action Plans"
            description="Create specific action plans for different emergency scenarios"
            sections={[
              {
                title: "Condition-Specific Emergencies",
                prompts: [
                  "What specific emergencies are you most at risk for based on your condition?",
                  "What are the warning signs that would trigger emergency action?",
                  "What immediate actions should you or others take when emergencies occur?",
                  "When should you call 911 vs. contact your doctor vs. go to urgent care?",
                  "What information should you provide to emergency services when calling?"
                ],
                examples: [
                  "Heart attack, stroke, diabetic emergency, severe allergic reaction, seizure",
                  "Chest pain, sudden weakness, difficulty breathing, severe headache, altered consciousness",
                  "Call 911, take prescribed emergency medication, position safely, stay calm",
                  "Call 911 for life-threatening, doctor for urgent concerns, urgent care for non-life-threatening",
                  "Your location, nature of emergency, your medical condition, medications, consciousness level"
                ]
              },
              {
                title: "Medication Emergencies",
                prompts: [
                  "What medication-related emergencies might you experience?",
                  "What should you do if you miss multiple doses of critical medications?",
                  "How do you handle medication side effects that seem severe or dangerous?",
                  "What emergency medications do you need to keep readily available?",
                  "Who should you contact for medication-related emergencies after hours?"
                ],
                examples: [
                  "Severe allergic reaction, overdose, dangerous drug interactions, withdrawal symptoms",
                  "Contact doctor immediately, do not double dose, may need monitoring",
                  "Stop medication, seek immediate medical attention, bring medication bottle",
                  "Rescue inhaler, EpiPen, nitroglycerin, glucose tablets, emergency pain medication",
                  "Pharmacy on-call service, doctor's answering service, poison control center"
                ]
              },
              {
                title: "Family Action Plans",
                prompts: [
                  "What should family members do if they find you in a medical emergency?",
                  "How will you train family members to recognize your emergency warning signs?",
                  "What specific actions should different family members take during emergencies?",
                  "How do you prepare children or elderly family members for medical emergencies?",
                  "What should family members never attempt to do during your medical emergency?"
                ],
                examples: [
                  "Check responsiveness, call 911, follow posted emergency instructions",
                  "Teach warning signs, practice emergency responses, review action plans regularly",
                  "One person calls 911, another gathers medications, someone stays with patient",
                  "Age-appropriate training, simple instructions, when to get adult help",
                  "Don't move you if spinal injury possible, don't give medications unless prescribed"
                ]
              },
              {
                title: "Recovery & Follow-up Plans",
                prompts: [
                  "What follow-up care is needed after emergency treatment?",
                  "How will you coordinate care between emergency providers and your regular doctors?",
                  "What modifications to your treatment plan might be needed after emergencies?",
                  "How do you document emergency episodes for your medical records?",
                  "What can you learn from emergency situations to prevent future occurrences?"
                ],
                examples: [
                  "Contact primary doctor within 24-48 hours, schedule follow-up appointments",
                  "Share emergency room reports with regular providers, ensure medication reconciliation",
                  "Medication adjustments, activity restrictions, additional monitoring requirements",
                  "Keep copies of ER records, note what triggered emergency, treatment received",
                  "Review what preceded emergency, identify warning signs, adjust prevention strategies"
                ]
              }
            ]}
            tips={[
              "Practice your emergency action plans with family members so everyone knows their role",
              "Keep written emergency action plans posted in visible locations like the refrigerator",
              "Know the fastest route to your nearest emergency room and have backup options",
              "Keep a 'go bag' ready with essential medical information and supplies for emergency situations",
              "After any emergency, review what happened and update your emergency plans based on lessons learned"
            ]}
          />
        </TabsContent>

        <TabsContent value="supplies-documents">
          <GuidedNotePage
            title="Emergency Supplies & Documents"
            description="Prepare essential supplies and documentation for medical emergencies"
            sections={[
              {
                title: "Emergency Medical Kit",
                prompts: [
                  "What medical supplies should you keep readily available for emergencies?",
                  "Where will you store your emergency medical supplies for easy access?",
                  "What medications should be part of your emergency supply?",
                  "How will you maintain and update your emergency medical supplies?",
                  "What medical equipment specific to your condition should be readily available?"
                ],
                examples: [
                  "First aid supplies, thermometer, blood pressure monitor, glucose meter",
                  "Kitchen, bedroom, car - multiple easily accessible locations",
                  "Emergency rescue medications, pain relief, anti-nausea, basic first aid medications",
                  "Check expiration dates monthly, replace used items immediately, update supply list",
                  "Rescue inhaler, EpiPen, oxygen tank, mobility aids, communication devices"
                ]
              },
              {
                title: "Important Documents",
                prompts: [
                  "What documents should be immediately available during medical emergencies?",
                  "How will you organize important papers for quick access by others?",
                  "What copies of documents should you keep in multiple locations?",
                  "How will you ensure documents remain current and legally valid?",
                  "What digital backup systems will you use for important documents?"
                ],
                examples: [
                  "Insurance cards, medication list, advance directives, emergency contacts, photo ID",
                  "Emergency folder clearly labeled, keep in standard location, tell family where it is",
                  "Keep copies at home, in car, with trusted family member, in safe deposit box",
                  "Review annually, update when changes occur, ensure signatures and dates are current",
                  "Cloud storage, secure email, family member has digital copies, password-protected files"
                ]
              },
              {
                title: "Communication Tools",
                prompts: [
                  "What communication devices should be available during emergencies?",
                  "How will you ensure you can communicate if technology fails?",
                  "What backup power sources do you need for medical devices and communication?",
                  "How will you communicate with emergency responders if you have speech difficulties?",
                  "What emergency communication plan works if you're away from home?"
                ],
                examples: [
                  "Charged cell phone, landline phone, medical alert device, two-way radio",
                  "Written emergency information, neighbor contacts, whistle or bell for attention",
                  "Battery packs, generator, car charger, backup batteries for medical devices",
                  "Written cards with common phrases, communication board, speech app on phone",
                  "ICE contacts in phone, emergency wallet card, medical alert jewelry, hotel notification"
                ]
              },
              {
                title: "Financial & Legal Preparedness",
                prompts: [
                  "What financial information should be accessible during medical emergencies?",
                  "How will you handle emergency medical expenses and insurance claims?",
                  "What legal documents are needed for emergency medical decision-making?",
                  "How will someone access your accounts to pay for emergency medical care?",
                  "What advance planning reduces financial stress during medical emergencies?"
                ],
                examples: [
                  "Insurance cards, credit cards, bank account information, emergency cash",
                  "Know copay amounts, keep receipts, understand insurance emergency procedures",
                  "Healthcare proxy, power of attorney, advance directives, guardianship papers",
                  "Joint accounts, authorized signers, power of attorney, emergency access to funds",
                  "Emergency fund, adequate insurance coverage, clear documentation of wishes"
                ]
              }
            ]}
            tips={[
              "Keep emergency supplies in waterproof containers and check them regularly for freshness",
              "Make sure multiple people know where your emergency supplies and documents are located",
              "Consider keeping smaller emergency kits in your car and workplace in addition to your home kit",
              "Label everything clearly so others can find and use emergency supplies when needed",
              "Review and update your emergency supplies and documents at least twice a year"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}