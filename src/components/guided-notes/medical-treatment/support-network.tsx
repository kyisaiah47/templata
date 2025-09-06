"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SupportNetwork() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Building Your Support Network</h1>
        <p className="text-muted-foreground">Create a strong support system for your medical journey.</p>
      </div>

      <Tabs defaultValue="family-friends" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="family-friends" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Family & Friends</span>
            <span className="sm:hidden">Family</span>
          </TabsTrigger>
          <TabsTrigger value="medical-team" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Medical Team</span>
            <span className="sm:hidden">Medical</span>
          </TabsTrigger>
          <TabsTrigger value="peer-support" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Peer Support</span>
            <span className="sm:hidden">Peers</span>
          </TabsTrigger>
          <TabsTrigger value="community-resources" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Community</span>
            <span className="sm:hidden">Community</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="family-friends">
          <GuidedNotePage
            title="Family & Friends Support"
            description="Engage family and friends as key partners in your healthcare journey"
            sections={[
              {
                title: "Identifying Support Roles",
                prompts: [
                  "Which family members and friends can provide different types of support?",
                  "What specific help do you need with transportation and appointments?",
                  "Who can assist with household tasks and daily activities when needed?",
                  "Which people are best suited for emotional support and listening?",
                  "Who can help with medical advocacy and decision-making support?"
                ],
                examples: [
                  "Spouse for medical appointments, adult children for research, siblings for emotional support",
                  "Regular drivers for routine appointments, backup options for emergencies",
                  "Meal preparation, grocery shopping, cleaning, childcare, pet care",
                  "Close friends who are good listeners, family members who understand your communication style",
                  "Detail-oriented family member who can take notes, ask questions at appointments"
                ]
              },
              {
                title: "Communication Strategies",
                prompts: [
                  "How will you communicate your needs clearly to family and friends?",
                  "What information should you share about your condition and treatment?",
                  "How do you set appropriate boundaries while accepting help?",
                  "What's the best way to keep everyone informed without repeating yourself?",
                  "How will you handle different opinions or advice from family members?"
                ],
                examples: [
                  "Be specific about what you need: 'Can you drive me Tuesday?' rather than 'I need help'",
                  "Share diagnosis, treatment plan basics, but keep private details as desired",
                  "Accept help gracefully but specify preferences, maintain some independence",
                  "Group texts, email updates, designate one person to share updates with others",
                  "Listen respectfully but make clear that medical decisions are yours to make"
                ]
              },
              {
                title: "Managing Relationships",
                prompts: [
                  "How will you maintain your relationships while dealing with your medical condition?",
                  "What should you do when family or friends don't understand your situation?",
                  "How do you handle people who offer unwanted advice or 'miracle cures'?",
                  "What boundaries do you need to set to protect your energy and privacy?",
                  "How will you show appreciation for the support you receive?"
                ],
                examples: [
                  "Continue doing activities you enjoy together, even if modified for your condition",
                  "Share educational materials, explain how they can best support you",
                  "Thank them for caring, redirect to evidence-based treatments, change subject",
                  "Limit visits when not feeling well, ask people to call before stopping by",
                  "Written thank you notes, small gifts, verbal appreciation, reciprocate when possible"
                ]
              },
              {
                title: "Building Stronger Connections",
                prompts: [
                  "How can your medical journey strengthen relationships with loved ones?",
                  "What new connections might you form through your healthcare experience?",
                  "How do you include family in your medical journey without burdening them?",
                  "What role should children or grandchildren play in your support system?",
                  "How will you maintain social connections when energy or mobility is limited?"
                ],
                examples: [
                  "Share vulnerable moments, express gratitude, let others contribute meaningfully",
                  "Meet other patients' families, connect with caregivers in waiting rooms",
                  "Invite them to important appointments, share good news, ask for specific help",
                  "Age-appropriate involvement, focus on maintaining normal activities when possible",
                  "Video calls, shorter but more frequent visits, ask friends to come to you"
                ]
              }
            ]}
            tips={[
              "Be specific when asking for help - people want to help but don't know how",
              "Don't try to protect everyone from your diagnosis - let them support you",
              "Accept help gracefully, even if it's not done exactly how you would do it",
              "Maintain some independence and normal activities to preserve your sense of self",
              "Express gratitude regularly - supporting someone through illness can be emotionally challenging"
            ]}
          />
        </TabsContent>

        <TabsContent value="medical-team">
          <GuidedNotePage
            title="Medical Team Coordination"
            description="Build effective relationships with your healthcare providers"
            sections={[
              {
                title: "Care Team Assembly",
                prompts: [
                  "Who are all the healthcare professionals involved in your care?",
                  "How do you ensure good communication between different specialists?",
                  "Who serves as your primary point of contact for medical questions?",
                  "What role do nurses, physician assistants, and other staff play in your care?",
                  "How do you coordinate care when seeing multiple providers?"
                ],
                examples: [
                  "Primary care doctor, specialists, pharmacist, physical therapist, social worker",
                  "Request that providers communicate directly, share test results and treatment plans",
                  "Usually primary care doctor, but could be lead specialist for complex conditions",
                  "Nurses often handle day-to-day questions, PAs manage routine follow-ups",
                  "Maintain master provider list, share updates with all team members"
                ]
              },
              {
                title: "Communication Systems",
                prompts: [
                  "How will you maintain effective communication with your medical team?",
                  "What system will help you track and share information across providers?",
                  "How do you ensure all team members have current, accurate information?",
                  "What technology tools can improve coordination with your medical team?",
                  "How will you handle urgent questions or concerns between appointments?"
                ],
                examples: [
                  "Regular updates via patient portals, prepare questions in advance of appointments",
                  "Shared medical record, bring updated medication list to all appointments",
                  "Request copies of all test results, maintain personal health record",
                  "Patient portals, health apps, electronic health records that sync between providers",
                  "Know when to call, use nurse hotlines, understand after-hours protocols"
                ]
              },
              {
                title: "Advocacy & Partnership",
                prompts: [
                  "How do you advocate for yourself within the healthcare system?",
                  "What should you do if you feel your concerns aren't being heard?",
                  "How do you balance being an informed patient with trusting medical expertise?",
                  "When should family members or friends advocate on your behalf?",
                  "How do you address conflicts or disagreements within your care team?"
                ],
                examples: [
                  "Come prepared with questions, express concerns clearly, ask for explanations",
                  "Request longer appointment, seek second opinion, ask to speak with supervisor",
                  "Research your condition but defer to professional training and experience",
                  "When you're too sick to advocate, during complex procedures or major decisions",
                  "Address directly with providers involved, seek mediation through patient advocate"
                ]
              },
              {
                title: "Care Coordination",
                prompts: [
                  "How will you ensure continuity of care across different providers?",
                  "What happens if key team members leave or are unavailable?",
                  "How do you manage transitions between different levels of care?",
                  "What role should a case manager or patient navigator play in your care?",
                  "How will you evaluate whether your care team is working effectively?"
                ],
                examples: [
                  "Maintain complete medical records, ensure smooth handoffs between providers",
                  "Get contact info for coverage providers, ensure records are transferred",
                  "Clear discharge planning, follow-up appointments scheduled, medication reconciliation",
                  "Help coordinate complex care, insurance authorization, appointment scheduling",
                  "Good communication, coordinated treatment plans, improved outcomes, satisfied with care"
                ]
              }
            ]}
            tips={[
              "Treat your healthcare providers as partners in your care, not just service providers",
              "Keep organized records and bring them to appointments to improve care coordination",
              "Don't hesitate to ask for a case manager if you have complex medical needs",
              "Build relationships with nurses and staff - they often coordinate much of your day-to-day care",
              "Speak up if you feel like your care isn't well-coordinated - good coordination improves outcomes"
            ]}
          />
        </TabsContent>

        <TabsContent value="peer-support">
          <GuidedNotePage
            title="Peer Support & Communities"
            description="Connect with others who understand your medical journey"
            sections={[
              {
                title: "Finding Peer Support",
                prompts: [
                  "What support groups exist for people with your specific condition?",
                  "How do you find reputable online communities for your medical situation?",
                  "What should you look for in a good support group or peer network?",
                  "How do you balance online support with in-person connections?",
                  "What role should peer support play alongside professional medical care?"
                ],
                examples: [
                  "Hospital-sponsored groups, national organization local chapters, condition-specific foundations",
                  "Look for moderated groups, recommendations from healthcare providers, established organizations",
                  "Positive atmosphere, accurate information, diverse membership, respectful communication",
                  "Online for convenience and broader reach, in-person for deeper connections",
                  "Complement but never replace professional care, focus on emotional support and practical tips"
                ]
              },
              {
                title: "Engaging with Peers",
                prompts: [
                  "How will you participate in support groups or online communities?",
                  "What boundaries should you set in peer support relationships?",
                  "How do you share your experience while respecting others' privacy?",
                  "What should you do if you encounter negative or unhelpful peer interactions?",
                  "How can you contribute positively to peer support communities?"
                ],
                examples: [
                  "Start by listening, gradually share your own experience, ask questions",
                  "Don't give medical advice, respect confidentiality, limit sharing personal details",
                  "Focus on your own experience, avoid making generalizations about treatments",
                  "Leave negative groups, report inappropriate behavior, limit exposure to negativity",
                  "Share helpful resources, offer encouragement, mentor newly diagnosed members"
                ]
              },
              {
                title: "Learning from Others",
                prompts: [
                  "What practical tips and strategies can you learn from peers?",
                  "How do you evaluate advice and information from other patients?",
                  "What questions are most helpful to ask experienced patients?",
                  "How do you handle differences in treatment approaches or outcomes?",
                  "What can peers teach you that healthcare providers cannot?"
                ],
                examples: [
                  "Daily living strategies, coping techniques, insurance navigation, side effect management",
                  "Consider source credibility, verify with healthcare providers, look for multiple perspectives",
                  "How do you manage daily activities? What surprised you about treatment? What helped most?",
                  "Remember everyone's situation is different, focus on strategies rather than specific treatments",
                  "Real-world experience, emotional aspects, practical daily management, long-term perspective"
                ]
              },
              {
                title: "Giving and Receiving Support",
                prompts: [
                  "How will you balance receiving support with supporting others?",
                  "What unique perspective or experience can you offer to newly diagnosed patients?",
                  "How do you maintain hope when hearing about others' challenges?",
                  "What should you do if peer support becomes overwhelming or discouraging?",
                  "How can peer relationships continue to evolve as your condition changes?"
                ],
                examples: [
                  "Take what you need early on, give back as you feel stronger and more experienced",
                  "Your coping strategies, treatment experience, navigation tips, emotional insights",
                  "Focus on success stories, remember everyone's journey is different, limit exposure to negativity",
                  "Take breaks from groups, seek more positive communities, discuss with counselor",
                  "Relationships may deepen, some may fade, new connections form as needs change"
                ]
              }
            ]}
            tips={[
              "Look for peer support groups that are moderated and maintain a positive, supportive atmosphere",
              "Remember that everyone's medical journey is different - what works for others may not work for you",
              "Use peer support to complement, not replace, professional medical advice and care",
              "Be cautious about taking medical advice from other patients - always verify with your healthcare team",
              "Consider both giving and receiving support - helping others can be therapeutic for you too"
            ]}
          />
        </TabsContent>

        <TabsContent value="community-resources">
          <GuidedNotePage
            title="Community Resources & Services"
            description="Access community resources to support your healthcare needs"
            sections={[
              {
                title: "Healthcare Resources",
                prompts: [
                  "What community health resources are available in your area?",
                  "How can community health centers supplement your medical care?",
                  "What transportation services exist for medical appointments?",
                  "What home health services might benefit your situation?",
                  "How do you access emergency services and urgent care in your community?"
                ],
                examples: [
                  "Community health centers, free clinics, mobile health screenings, health fairs",
                  "Preventive care, health education, chronic disease management, pharmacy services",
                  "Medical transport services, volunteer driver programs, public transit medical discounts",
                  "Home nursing, physical therapy, meal delivery, medication management, personal care",
                  "Know locations of urgent care and emergency rooms, understand when to use each"
                ]
              },
              {
                title: "Social Services",
                prompts: [
                  "What social services can help with the challenges of managing your condition?",
                  "How do you access government assistance programs for healthcare costs?",
                  "What services exist to help with daily living activities?",
                  "How can social workers assist with your healthcare journey?",
                  "What disability services might be available to you?"
                ],
                examples: [
                  "Case management, benefits counseling, housing assistance, food programs",
                  "Medicaid, Medicare, disability benefits, prescription assistance programs",
                  "Meal delivery, housekeeping, personal care, respite care for caregivers",
                  "Navigate benefits, coordinate services, provide counseling, connect to resources",
                  "Vocational rehabilitation, assistive technology, accessible transportation, housing modifications"
                ]
              },
              {
                title: "Faith & Cultural Communities",
                prompts: [
                  "How can your faith or cultural community provide support during treatment?",
                  "What religious or spiritual resources might help with coping and healing?",
                  "How do you access culturally appropriate healthcare and support services?",
                  "What role should chaplains or spiritual counselors play in your care?",
                  "How can community traditions and practices support your healing process?"
                ],
                examples: [
                  "Prayer groups, meal trains, visitation, transportation, financial assistance",
                  "Chaplain services, meditation groups, spiritual counseling, healing prayers",
                  "Community health workers, translators, culturally competent providers",
                  "Emotional and spiritual support, help with difficult decisions, presence during procedures",
                  "Traditional healing practices that complement medical care, community celebrations adapted for your needs"
                ]
              },
              {
                title: "Advocacy & Legal Support",
                prompts: [
                  "What patient advocacy resources exist in your healthcare system?",
                  "How do you access legal assistance for healthcare-related issues?",
                  "What workplace rights and protections do you have regarding your medical condition?",
                  "How can disability rights organizations assist with access and discrimination issues?",
                  "What resources exist for healthcare decision-making and advance directives?"
                ],
                examples: [
                  "Hospital patient advocates, insurance advocates, patient ombudsman programs",
                  "Legal aid societies, pro bono legal clinics, disability law centers",
                  "FMLA leave, reasonable accommodations, disability protections, insurance continuation",
                  "ADA compliance, accessibility advocacy, discrimination complaints, rights education",
                  "Legal clinics for advance directives, healthcare proxy guidance, end-of-life planning"
                ]
              }
            ]}
            tips={[
              "Contact 211 (dial 2-1-1) to connect with local community resources and services",
              "Ask hospital social workers about community resources specific to your condition",
              "Many community resources are free or sliding-scale based on income",
              "Don't wait until you're in crisis to identify and connect with community resources",
              "Keep a list of community resources handy for when you or your family need assistance"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}