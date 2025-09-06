"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DoctorConsultations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Doctor Consultations & Communication</h1>
        <p className="text-muted-foreground">Maximize the effectiveness of your medical appointments and communications.</p>
      </div>

      <Tabs defaultValue="appointment-prep" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="appointment-prep" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Appointment Prep</span>
            <span className="sm:hidden">Prep</span>
          </TabsTrigger>
          <TabsTrigger value="effective-communication" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Communication</span>
            <span className="sm:hidden">Comm</span>
          </TabsTrigger>
          <TabsTrigger value="managing-relationships" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Relationships</span>
            <span className="sm:hidden">Relate</span>
          </TabsTrigger>
          <TabsTrigger value="follow-up" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Follow-up</span>
            <span className="sm:hidden">Follow</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="appointment-prep">
          <GuidedNotePage
            title="Appointment Preparation"
            description="Prepare thoroughly for productive medical consultations"
            sections={[
              {
                title: "Pre-Visit Organization",
                prompts: [
                  "What medical records and test results should you bring to your appointment?",
                  "How will you organize your medication list and dosage information?",
                  "What symptoms or changes have occurred since your last visit?",
                  "What specific questions do you want to ask during this appointment?",
                  "How will you document your appointment goals and priorities?"
                ],
                examples: [
                  "Recent lab results, imaging reports, specialist letters, previous visit summaries",
                  "List medication names, doses, frequency, any side effects experienced",
                  "New symptoms, worsening conditions, improvements, medication effects",
                  "Write down 3-5 most important questions to avoid forgetting during visit",
                  "Set clear objectives: get diagnosis, discuss treatment options, address concerns"
                ]
              },
              {
                title: "Information Gathering",
                prompts: [
                  "What family medical history is relevant to share with your doctor?",
                  "How will you track and report your symptoms accurately?",
                  "What lifestyle factors should you discuss that might impact your health?",
                  "What concerns or fears do you have that you want to address?",
                  "How do you want to involve family members in your appointment?"
                ],
                examples: [
                  "Family history of similar conditions, genetic factors, age of onset in relatives",
                  "Keep symptom diary with dates, severity scales, triggers, duration",
                  "Diet changes, exercise habits, stress levels, sleep patterns, work environment",
                  "Worry about prognosis, fear of procedures, concern about side effects",
                  "Bring spouse for support, include adult children in serious discussions"
                ]
              },
              {
                title: "Logistical Preparation",
                prompts: [
                  "How will you ensure you arrive on time and prepared for your appointment?",
                  "What insurance and payment information do you need to bring?",
                  "Who can accompany you for support and note-taking assistance?",
                  "How much time should you plan for the appointment and any procedures?",
                  "What follow-up scheduling might be needed after your visit?"
                ],
                examples: [
                  "Allow extra travel time, confirm appointment time, bring contact information",
                  "Insurance cards, photo ID, list of copayments, understanding of coverage",
                  "Trusted family member or friend who can ask questions and remember information",
                  "Plan for extended visit if discussing complex issues or having procedures",
                  "May need to schedule tests, procedures, or follow-up appointments before leaving"
                ]
              },
              {
                title: "Expectations & Goals",
                prompts: [
                  "What are your specific goals and expectations for this appointment?",
                  "What decisions do you hope to make during or after this visit?",
                  "How will you prioritize multiple concerns if time is limited?",
                  "What information do you need to make informed decisions about your care?",
                  "How will you handle unexpected news or recommendations during the visit?"
                ],
                examples: [
                  "Get clear diagnosis, understand treatment options, address medication side effects",
                  "Choose between treatment options, schedule procedures, adjust medications",
                  "Address most serious concern first, save routine questions for end",
                  "Understand risks and benefits, timeline for decisions, second opinion options",
                  "Stay calm, ask for time to process, request written information to review"
                ]
              }
            ]}
            tips={[
              "Bring a written list of questions and take notes during your appointment",
              "Arrive early to complete paperwork and settle in before your appointment",
              "Consider bringing a trusted person to help listen and ask questions",
              "Be honest about all symptoms, concerns, and medication adherence",
              "Don't hesitate to ask your doctor to repeat or clarify information you don't understand"
            ]}
          />
        </TabsContent>

        <TabsContent value="effective-communication">
          <GuidedNotePage
            title="Effective Communication"
            description="Communicate clearly and get the most from your medical visits"
            sections={[
              {
                title: "Clear Communication",
                prompts: [
                  "How will you describe your symptoms clearly and accurately to your doctor?",
                  "What communication style works best for you in medical settings?",
                  "How do you ensure your doctor understands your concerns and priorities?",
                  "What should you do if you don't understand medical terminology?",
                  "How will you advocate for yourself if you feel unheard or dismissed?"
                ],
                examples: [
                  "Use specific terms: 'stabbing pain' vs 'discomfort', rate severity 1-10",
                  "Some prefer direct questions, others need time to explain background",
                  "State your main concern upfront: 'My biggest worry is...'",
                  "Ask for explanations in plain language, request diagrams or written materials",
                  "Politely persist: 'I'm still concerned about...' or 'Can we discuss this further?'"
                ]
              },
              {
                title: "Active Listening",
                prompts: [
                  "How will you ensure you fully understand your doctor's explanations?",
                  "What techniques can help you remember important information from visits?",
                  "How do you verify that you've understood instructions correctly?",
                  "What should you do if you feel overwhelmed by information during the visit?",
                  "How will you follow up on information you didn't fully grasp?"
                ],
                examples: [
                  "Take notes, ask clarifying questions, request written instructions",
                  "Bring recorder if allowed, have companion take notes, write down key points",
                  "Repeat back instructions: 'So you're saying I should...'",
                  "Ask to slow down, take a break, or schedule follow-up to discuss further",
                  "Call nurse line with questions, request patient portal messages, schedule phone call"
                ]
              },
              {
                title: "Asking Questions",
                prompts: [
                  "What are the most important questions to ask about your condition and treatment?",
                  "How do you ask about sensitive or embarrassing health concerns?",
                  "What questions should you ask about any recommended tests or procedures?",
                  "How do you inquire about alternative treatment options?",
                  "What follow-up questions ensure you have complete information?"
                ],
                examples: [
                  "What caused this? What's the prognosis? What are my treatment options?",
                  "Frame concerns medically: 'I've noticed changes in...' rather than avoiding topic",
                  "Why is this test needed? What are the risks? What happens if I decline?",
                  "Are there other approaches? What do guidelines recommend? What would you do?",
                  "What should I watch for? When should I call? What's the next step?"
                ]
              },
              {
                title: "Documentation & Records",
                prompts: [
                  "How will you keep track of important information from your medical visits?",
                  "What system will you use to organize your medical records and communications?",
                  "How do you ensure important details don't get lost between appointments?",
                  "What information should you always request in writing?",
                  "How will you share relevant information with other healthcare providers?"
                ],
                examples: [
                  "Keep appointment journal, use smartphone to record notes, save visit summaries",
                  "Organize by date, keep copies of all test results, maintain medication list",
                  "Review previous visit notes before each appointment, track symptom changes",
                  "Treatment plans, medication changes, follow-up instructions, test results",
                  "Request copies of reports to forward, use patient portals, maintain master file"
                ]
              }
            ]}
            tips={[
              "Don't leave an appointment without understanding the next steps in your care",
              "It's okay to ask your doctor to slow down or repeat information you didn't catch",
              "Bring your most important questions written down so you don't forget them",
              "If you disagree with your doctor's assessment, express your concerns respectfully but clearly",
              "Follow up within a few days if you have additional questions that arise after your visit"
            ]}
          />
        </TabsContent>

        <TabsContent value="managing-relationships">
          <GuidedNotePage
            title="Managing Healthcare Relationships"
            description="Build strong, productive relationships with your medical team"
            sections={[
              {
                title: "Doctor-Patient Relationship",
                prompts: [
                  "What qualities do you value most in your healthcare providers?",
                  "How do you establish trust and rapport with new doctors?",
                  "What should you do if you don't feel comfortable with a healthcare provider?",
                  "How do you balance being an informed patient with respecting medical expertise?",
                  "What boundaries are appropriate in your doctor-patient relationships?"
                ],
                examples: [
                  "Good listener, explains things clearly, involves you in decisions, available for questions",
                  "Be open about concerns, ask about their experience, follow through on recommendations",
                  "Discuss concerns directly, seek second opinion, or find new provider if needed",
                  "Research your condition but defer to medical training, ask for rationale behind recommendations",
                  "Respect time limits, stay focused on medical issues, maintain professional relationship"
                ]
              },
              {
                title: "Coordinating Multiple Providers",
                prompts: [
                  "How will you coordinate care between multiple doctors and specialists?",
                  "Who will serve as your primary point of contact for medical decisions?",
                  "How do you ensure all your providers have complete and current information?",
                  "What should you do when different doctors give conflicting advice?",
                  "How will you manage communication between your various healthcare providers?"
                ],
                examples: [
                  "Keep all providers informed of treatments, share test results, coordinate appointments",
                  "Usually primary care doctor, but sometimes lead specialist for complex conditions",
                  "Bring updated medication lists, share test results, provide contact info for other doctors",
                  "Ask each doctor about the other's recommendation, seek additional opinion if needed",
                  "Use patient portals, request providers communicate directly, maintain master record"
                ]
              },
              {
                title: "Advocacy & Self-Representation",
                prompts: [
                  "How do you advocate for yourself when you feel your concerns aren't being heard?",
                  "What should you do if you disagree with a medical recommendation?",
                  "How do you push for additional testing or referrals when needed?",
                  "What role should family members play in advocating for your care?",
                  "How do you balance being assertive without being confrontational?"
                ],
                examples: [
                  "Clearly state concerns, ask for explanations, request second opinion if needed",
                  "Ask for rationale, express your concerns, discuss alternatives respectfully",
                  "Explain why you think testing is needed, provide additional symptoms or history",
                  "Family can support your concerns, ask questions you forget, provide different perspective",
                  "Use 'I' statements, stay focused on medical issues, remain respectful but persistent"
                ]
              },
              {
                title: "Difficult Situations",
                prompts: [
                  "How do you handle situations where you feel rushed or dismissed by providers?",
                  "What should you do if you receive bad news or an unexpected diagnosis?",
                  "How do you manage disagreements about treatment approaches?",
                  "What steps can you take if you're not satisfied with your care?",
                  "How do you maintain your healthcare relationships during stressful times?"
                ],
                examples: [
                  "Politely ask for more time, state that you have important concerns to discuss",
                  "Ask for time to process, request written information, bring support person next time",
                  "Ask for explanation of reasoning, discuss your concerns, consider seeking another opinion",
                  "Speak with patient advocate, file complaint if needed, consider changing providers",
                  "Communicate openly about stress, ask for extra support, focus on shared goals"
                ]
              }
            ]}
            tips={[
              "Remember that you and your doctor are partners in your healthcare - work as a team",
              "Don't be afraid to change doctors if the relationship isn't working for you",
              "Keep communication professional but don't hesitate to express your concerns clearly",
              "Building good relationships with healthcare staff can improve your overall care experience",
              "Patient advocates at hospitals can help resolve communication issues and concerns"
            ]}
          />
        </TabsContent>

        <TabsContent value="follow-up">
          <GuidedNotePage
            title="Follow-up & Continuity"
            description="Maintain continuity of care and effective follow-up"
            sections={[
              {
                title: "Post-Visit Actions",
                prompts: [
                  "What actions do you need to take immediately after your appointment?",
                  "How will you process and organize the information you received?",
                  "What appointments or tests need to be scheduled based on your visit?",
                  "How do you ensure you understand and will follow through on treatment plans?",
                  "What questions or concerns have arisen since your appointment?"
                ],
                examples: [
                  "Schedule recommended tests, fill prescriptions, contact insurance for approvals",
                  "Review notes with family, research recommended treatments, organize new information",
                  "Specialist referrals, follow-up appointments, diagnostic tests, procedures",
                  "Set reminders for medications, create treatment schedule, plan lifestyle changes",
                  "Write down new questions, concerns about side effects, need for clarification"
                ]
              },
              {
                title: "Monitoring & Tracking",
                prompts: [
                  "How will you monitor your symptoms and treatment response between visits?",
                  "What tracking system will help you report changes accurately at future appointments?",
                  "How do you know when changes in your condition warrant immediate medical attention?",
                  "What measurements or observations should you track regularly?",
                  "How will you communicate changes to your healthcare provider between visits?"
                ],
                examples: [
                  "Daily symptom diary, medication response tracking, side effect monitoring",
                  "Use apps, journals, or charts to track symptoms, medications, and improvements",
                  "Know warning signs that require immediate contact with doctor or emergency care",
                  "Pain levels, energy, sleep quality, medication adherence, side effects",
                  "Patient portal messages, nurse hotline calls, scheduled check-in calls"
                ]
              },
              {
                title: "Treatment Adherence",
                prompts: [
                  "How will you ensure you follow through on all treatment recommendations?",
                  "What barriers might prevent you from adhering to your treatment plan?",
                  "How do you manage multiple medications and treatment requirements?",
                  "What support do you need to maintain your treatment regimen?",
                  "How will you communicate with your provider if you can't follow recommendations?"
                ],
                examples: [
                  "Set medication reminders, create treatment schedule, track compliance",
                  "Cost concerns, side effects, complex schedules, lack of understanding",
                  "Pill organizers, medication apps, calendar reminders, family support",
                  "Family help with reminders, transportation to appointments, emotional support",
                  "Be honest about challenges, ask for alternatives, discuss concerns openly"
                ]
              },
              {
                title: "Long-term Coordination",
                prompts: [
                  "How will you maintain continuity of care over time?",
                  "What system will help you prepare for future appointments efficiently?",
                  "How do you ensure important health information doesn't get lost over time?",
                  "What regular health maintenance should you continue alongside your treatment?",
                  "How will you evaluate whether your current treatment approach is working?"
                ],
                examples: [
                  "Regular appointment schedule, maintain complete records, provider contact list",
                  "Keep running list of questions, update medication list, track changes",
                  "Maintain personal health record, back up digital records, share with family",
                  "Annual physicals, preventive screenings, vaccines, dental care",
                  "Regular assessment of symptoms, quality of life, treatment goals, side effects"
                ]
              }
            ]}
            tips={[
              "Always leave appointments with clear understanding of next steps and follow-up plans",
              "Don't hesitate to contact your healthcare provider if you have questions between visits",
              "Keep a master list of all your healthcare providers and their contact information",
              "Use patient portals and health apps to stay organized and communicate with your team",
              "Review your treatment goals periodically to ensure your care plan still aligns with your priorities"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}