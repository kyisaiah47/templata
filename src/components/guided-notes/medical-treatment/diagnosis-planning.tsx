"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DiagnosisPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Diagnosis Planning & Understanding</h1>
        <p className="text-muted-foreground">Navigate the diagnostic process and understand your medical condition thoroughly.</p>
      </div>

      <Tabs defaultValue="initial-symptoms" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="initial-symptoms" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Initial Symptoms</span>
            <span className="sm:hidden">Symptoms</span>
          </TabsTrigger>
          <TabsTrigger value="diagnostic-process" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Diagnostic Process</span>
            <span className="sm:hidden">Process</span>
          </TabsTrigger>
          <TabsTrigger value="understanding-diagnosis" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Understanding Diagnosis</span>
            <span className="sm:hidden">Diagnosis</span>
          </TabsTrigger>
          <TabsTrigger value="second-opinion" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Second Opinion</span>
            <span className="sm:hidden">Opinion</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="initial-symptoms">
          <GuidedNotePage
            title="Initial Symptoms & Concerns"
            description="Document and track your symptoms systematically"
            sections={[
              {
                title: "Symptom Documentation",
                prompts: [
                  "What are your primary symptoms and when did they first appear?",
                  "How severe are your symptoms on a scale of 1-10?",
                  "What triggers or activities make your symptoms worse or better?",
                  "How do your symptoms affect your daily activities and quality of life?",
                  "Have you noticed any patterns in when symptoms occur?"
                ],
                examples: [
                  "Example: 'Chest pain started 3 weeks ago, sharp, worse when lying down'",
                  "Track pain levels throughout the day to identify peak times",
                  "Note if symptoms worsen with stress, certain foods, or physical activity",
                  "Document missed work days, activity limitations, sleep disruption",
                  "Keep a symptom diary noting time of day, activities, and severity"
                ]
              },
              {
                title: "Medical History Review",
                prompts: [
                  "What is your relevant family medical history for this condition?",
                  "What medications are you currently taking?",
                  "Have you experienced similar symptoms in the past?",
                  "What previous medical conditions or surgeries are relevant?",
                  "What lifestyle factors might be contributing to your condition?"
                ],
                examples: [
                  "List relatives with similar conditions, age of onset, outcomes",
                  "Include prescription drugs, supplements, over-the-counter medications",
                  "Note any previous episodes, treatments tried, and their effectiveness",
                  "Include surgeries, chronic conditions, hospitalizations, allergies",
                  "Consider diet, exercise, smoking, alcohol, stress levels, sleep patterns"
                ]
              },
              {
                title: "Initial Healthcare Contact",
                prompts: [
                  "Which healthcare provider should you contact first for your symptoms?",
                  "What information should you prepare before your first appointment?",
                  "How will you describe your symptoms clearly and accurately?",
                  "What questions do you want to ask during your initial consultation?",
                  "How urgent is your situation and do you need immediate care?"
                ],
                examples: [
                  "Start with primary care doctor unless emergency symptoms present",
                  "Symptom timeline, medication list, family history, insurance cards",
                  "Use specific terms: 'sharp stabbing pain' vs 'discomfort'",
                  "Ask about possible causes, next steps, warning signs to watch for",
                  "Seek emergency care for severe pain, breathing problems, or concerning changes"
                ]
              },
              {
                title: "Preparing for Medical Visits",
                prompts: [
                  "How will you track and document your symptoms before appointments?",
                  "What support person might accompany you to important visits?",
                  "How will you organize your medical information for easy access?",
                  "What insurance and financial considerations need addressing upfront?",
                  "How will you ensure you remember important information from visits?"
                ],
                examples: [
                  "Use smartphone apps, journals, or photos to track symptoms daily",
                  "Bring trusted family member or friend who can take notes and ask questions",
                  "Create folder with insurance cards, medication list, test results, referrals",
                  "Verify coverage for tests/procedures, understand copays and deductibles",
                  "Bring notebook, record visits if allowed, ask for written instructions"
                ]
              }
            ]}
            tips={[
              "Keep a detailed symptom diary with dates, times, and severity ratings",
              "Take photos or videos of visible symptoms to show your doctor",
              "Bring a trusted person to appointments for support and note-taking",
              "Don't minimize symptoms - be honest about their impact on your life",
              "Prepare questions in advance and write down answers during visits"
            ]}
          />
        </TabsContent>

        <TabsContent value="diagnostic-process">
          <GuidedNotePage
            title="Navigating the Diagnostic Process"
            description="Understanding tests, procedures, and timelines"
            sections={[
              {
                title: "Diagnostic Testing",
                prompts: [
                  "What tests has your doctor recommended and what do they rule out?",
                  "How should you prepare for each diagnostic test or procedure?",
                  "What are the risks and benefits of recommended diagnostic procedures?",
                  "How long will you wait for test results and how will you receive them?",
                  "What happens if initial tests don't provide clear answers?"
                ],
                examples: [
                  "Blood work to check inflammation, imaging to rule out structural problems",
                  "Fasting requirements, medication holds, arrival times, what to bring",
                  "Understand radiation exposure, contrast allergies, procedure complications",
                  "Ask for specific timeline, preferred contact method, follow-up plan",
                  "Discuss additional testing options, specialist referrals, monitoring approach"
                ]
              },
              {
                title: "Working with Specialists",
                prompts: [
                  "What type of specialist do you need and how do you get a referral?",
                  "How will you research and choose the right specialist for your condition?",
                  "What should you expect during your first specialist appointment?",
                  "How will specialists coordinate with your primary care doctor?",
                  "What questions should you ask about the specialist's experience and approach?"
                ],
                examples: [
                  "Primary care doctor provides referral, insurance may require pre-authorization",
                  "Check credentials, read reviews, ask about wait times and communication style",
                  "Comprehensive evaluation, additional tests, treatment plan discussion",
                  "Request reports be sent to primary doctor, clarify who manages ongoing care",
                  "Ask about years treating your condition, typical outcomes, treatment philosophy"
                ]
              },
              {
                title: "Understanding Test Results",
                prompts: [
                  "How will your doctor explain test results and their significance?",
                  "What do normal vs. abnormal results mean for your specific situation?",
                  "Should you request copies of all test results for your records?",
                  "How do you research and understand medical terminology in your results?",
                  "What follow-up is needed based on your test findings?"
                ],
                examples: [
                  "Ask for plain-language explanation, not just 'normal' or 'abnormal'",
                  "Understand reference ranges, how your results compare, clinical significance",
                  "Keep personal medical file with all lab results, imaging reports, pathology",
                  "Use reputable medical websites, but discuss findings with your doctor",
                  "Schedule next appointment, additional testing, specialist referral, or monitoring plan"
                ]
              },
              {
                title: "Timeline Management",
                prompts: [
                  "What is the realistic timeline for getting a clear diagnosis?",
                  "How will you manage anxiety and uncertainty during the diagnostic process?",
                  "When should you follow up if symptoms worsen or new ones appear?",
                  "How will you balance diagnostic process with work and family obligations?",
                  "What are the signs that you need to expedite the diagnostic process?"
                ],
                examples: [
                  "Some diagnoses take weeks to months, especially for complex conditions",
                  "Join support groups, practice stress management, stay connected with loved ones",
                  "Contact doctor immediately for worsening symptoms or concerning changes",
                  "Plan time off for appointments, arrange childcare, communicate with employer",
                  "Severe symptoms, rapid progression, or gut feeling something is seriously wrong"
                ]
              }
            ]}
            tips={[
              "Ask for copies of all test results and keep them organized in one place",
              "Don't hesitate to ask your doctor to explain medical terms you don't understand",
              "Consider bringing a list of questions to each appointment to stay focused",
              "Research your potential diagnoses, but avoid self-diagnosing based on internet searches",
              "Trust your instincts - advocate for further testing if something doesn't feel right"
            ]}
          />
        </TabsContent>

        <TabsContent value="understanding-diagnosis">
          <GuidedNotePage
            title="Understanding Your Diagnosis"
            description="Processing and comprehending your medical condition"
            sections={[
              {
                title: "Diagnosis Comprehension",
                prompts: [
                  "What exactly is your diagnosis and how does it affect your body?",
                  "What caused your condition and what are the contributing factors?",
                  "How serious is your condition and what is the typical prognosis?",
                  "What are the potential complications if left untreated?",
                  "How common is your condition and what does current research show?"
                ],
                examples: [
                  "Ask doctor to explain in simple terms, use diagrams or models if helpful",
                  "Understand genetic, environmental, lifestyle, or unknown factors involved",
                  "Learn about mild vs. severe forms, typical progression, life expectancy impact",
                  "Know warning signs to watch for and when to seek immediate medical attention",
                  "Look up reputable medical organizations' information about your condition"
                ]
              },
              {
                title: "Impact Assessment",
                prompts: [
                  "How will your diagnosis affect your daily life and activities?",
                  "What limitations or restrictions will you need to consider?",
                  "How might your condition impact your work and career plans?",
                  "What effects might there be on your relationships and family life?",
                  "How will your diagnosis influence major life decisions going forward?"
                ],
                examples: [
                  "Consider physical limitations, energy levels, cognitive effects, pain management",
                  "Understand activity restrictions, dietary changes, medication requirements",
                  "Discuss workplace accommodations, disability benefits, career modifications",
                  "Communicate openly with family, consider counseling, plan for increased support needs",
                  "Evaluate family planning, travel plans, major purchases, insurance decisions"
                ]
              },
              {
                title: "Emotional Processing",
                prompts: [
                  "What emotions are you experiencing about your diagnosis?",
                  "How are you coping with the uncertainty and lifestyle changes ahead?",
                  "What support do you need emotionally during this adjustment period?",
                  "How will you communicate your diagnosis to family and friends?",
                  "What strategies will help you maintain mental health and positivity?"
                ],
                examples: [
                  "Acknowledge feelings of fear, anger, sadness, relief, or confusion as normal",
                  "Allow time to grieve losses while focusing on what you can control",
                  "Consider counseling, support groups, trusted friends, spiritual guidance",
                  "Plan what to share, when to share it, and how much detail to provide",
                  "Practice gratitude, maintain hobbies, set realistic goals, celebrate small wins"
                ]
              },
              {
                title: "Information Gathering",
                prompts: [
                  "What reliable sources will you use to learn more about your condition?",
                  "How will you connect with others who have the same diagnosis?",
                  "What questions do you still need answered about your condition?",
                  "How will you stay updated on new treatments and research?",
                  "What information should you gather to help family members understand?"
                ],
                examples: [
                  "Use medical organizations' websites, peer-reviewed articles, doctor recommendations",
                  "Join online support groups, local meetups, disease-specific organizations",
                  "Write down questions between appointments, prioritize most important ones",
                  "Sign up for medical newsletters, follow reputable health organizations",
                  "Gather easy-to-understand explanations, success stories, practical tips"
                ]
              }
            ]}
            tips={[
              "Take time to process your diagnosis emotionally - it's normal to need adjustment time",
              "Ask your doctor to recommend reliable websites and resources specific to your condition",
              "Connect with support groups to learn from others' experiences and coping strategies",
              "Keep a journal to track your thoughts, questions, and progress over time",
              "Remember that many conditions are manageable with proper treatment and lifestyle adjustments"
            ]}
          />
        </TabsContent>

        <TabsContent value="second-opinion">
          <GuidedNotePage
            title="Seeking Second Opinions"
            description="When and how to get additional medical perspectives"
            sections={[
              {
                title: "When to Seek Second Opinion",
                prompts: [
                  "What situations warrant seeking a second medical opinion?",
                  "How do you know if you're comfortable with your current diagnosis?",
                  "What red flags might indicate you need another perspective?",
                  "How serious or life-changing does a diagnosis need to be to justify second opinion?",
                  "What should you do if your gut feeling conflicts with your doctor's assessment?"
                ],
                examples: [
                  "Major surgery recommendations, rare diagnoses, cancer, or life-threatening conditions",
                  "Feel rushed, unclear explanations, treatment options not fully explored",
                  "Doctor seems dismissive, diagnosis doesn't match symptoms, or treatment isn't working",
                  "Any diagnosis that significantly impacts your life quality or longevity",
                  "Trust your instincts - patient advocacy is important for optimal outcomes"
                ]
              },
              {
                title: "Choosing Second Opinion Doctor",
                prompts: [
                  "What type of specialist or medical center should you choose for second opinion?",
                  "How will you research credentials and experience of potential doctors?",
                  "Should you seek second opinion at a different hospital system?",
                  "What questions will you ask when scheduling the second opinion appointment?",
                  "How will insurance coverage work for second opinion consultations?"
                ],
                examples: [
                  "Choose specialist with extensive experience in your specific condition",
                  "Check board certifications, research publications, patient reviews, hospital affiliations",
                  "Different hospital systems may have different protocols and perspectives",
                  "Ask about appointment availability, what records to bring, consultation vs. full workup",
                  "Many insurance plans cover second opinions, especially for serious conditions"
                ]
              },
              {
                title: "Preparing for Second Opinion",
                prompts: [
                  "What medical records and test results do you need to gather?",
                  "How will you present your case objectively to the second opinion doctor?",
                  "What specific questions do you want answered during the consultation?",
                  "Should you tell the second doctor about your first diagnosis upfront?",
                  "How will you manage the logistics of getting records transferred?"
                ],
                examples: [
                  "Collect all imaging, lab results, pathology reports, treatment summaries",
                  "Present symptoms and timeline without leading the doctor toward first diagnosis",
                  "Ask about alternative diagnoses, treatment options, prognosis, urgency of treatment",
                  "Some prefer independent assessment, others want to discuss first opinion",
                  "Request records in advance, allow time for transfer, bring copies to appointment"
                ]
              },
              {
                title: "Evaluating Second Opinion",
                prompts: [
                  "How will you compare and evaluate different medical opinions?",
                  "What should you do if the second opinion contradicts the first?",
                  "When might you need to seek a third opinion or additional perspectives?",
                  "How will you make treatment decisions when opinions differ?",
                  "How do you maintain good relationships with all your healthcare providers?"
                ],
                examples: [
                  "Compare explanations, treatment approaches, urgency levels, long-term outlooks",
                  "Seek third opinion from tie-breaker specialist, research treatment outcomes",
                  "Significant disagreement, complex rare conditions, major treatment differences",
                  "Consider getting opinions from multidisciplinary team, weigh risks and benefits",
                  "Be honest about seeking multiple opinions, frame as wanting best possible care"
                ]
              }
            ]}
            tips={[
              "Most doctors support patients seeking second opinions for serious diagnoses",
              "Don't feel guilty about questioning your doctor's recommendations - it's your health",
              "Academic medical centers often provide excellent second opinion consultations",
              "Bring all your medical records organized chronologically to second opinion visits",
              "Consider the reputation and specialization of the institution, not just individual doctors"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}