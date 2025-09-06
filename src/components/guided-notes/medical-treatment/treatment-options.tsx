"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TreatmentOptions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Treatment Options & Decision Making</h1>
        <p className="text-muted-foreground">Evaluate and compare different treatment approaches for your condition.</p>
      </div>

      <Tabs defaultValue="treatment-research" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="treatment-research" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Treatment Research</span>
            <span className="sm:hidden">Research</span>
          </TabsTrigger>
          <TabsTrigger value="comparing-options" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Comparing Options</span>
            <span className="sm:hidden">Compare</span>
          </TabsTrigger>
          <TabsTrigger value="risk-benefit" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Risk & Benefit</span>
            <span className="sm:hidden">Risks</span>
          </TabsTrigger>
          <TabsTrigger value="decision-making" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Decision Making</span>
            <span className="sm:hidden">Decide</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="treatment-research">
          <GuidedNotePage
            title="Treatment Research & Understanding"
            description="Learn about all available treatment options for your condition"
            sections={[
              {
                title: "Treatment Categories",
                prompts: [
                  "What are all the treatment categories available for your condition?",
                  "Which treatments are considered first-line vs. second-line options?",
                  "What newer or experimental treatments are being researched?",
                  "How do treatment options vary based on the stage or severity of your condition?",
                  "What combination therapies might be recommended for your situation?"
                ],
                examples: [
                  "Medical management, surgical options, radiation, physical therapy, lifestyle changes",
                  "First-line: proven effective with fewest side effects, second-line: if first fails",
                  "Clinical trials, new medications in development, cutting-edge procedures",
                  "Early-stage might have more options, advanced stages may limit choices",
                  "Multiple medications together, surgery plus rehabilitation, integrated approaches"
                ]
              },
              {
                title: "Understanding Each Option",
                prompts: [
                  "How does each treatment option work to address your condition?",
                  "What is the typical timeline and process for each treatment?",
                  "What level of evidence supports each treatment option?",
                  "How successful is each treatment for your specific type of condition?",
                  "What are the requirements and eligibility criteria for each treatment?"
                ],
                examples: [
                  "Medication blocks specific pathways, surgery removes diseased tissue",
                  "Daily medication for months, surgery with 6-week recovery, weekly therapy sessions",
                  "Randomized trials, observational studies, case reports, expert opinion",
                  "Success rates for your exact diagnosis, stage, and patient demographics",
                  "Age limits, other health conditions, insurance approval, facility availability"
                ]
              },
              {
                title: "Provider Expertise",
                prompts: [
                  "Which doctors or medical centers specialize in your treatment options?",
                  "How important is provider experience for your specific treatments?",
                  "What questions should you ask about a provider's expertise and outcomes?",
                  "How do you research the track record of potential treatment providers?",
                  "What role does hospital volume play in treatment success rates?"
                ],
                examples: [
                  "High-volume centers, specialists with fellowship training, research hospitals",
                  "Complex surgeries require experienced surgeons, some treatments need specialized teams",
                  "Ask about years of experience, number of procedures, complication rates",
                  "Check hospital websites, medical society directories, published research",
                  "Hospitals doing more procedures typically have better outcomes and lower complications"
                ]
              },
              {
                title: "Treatment Availability",
                prompts: [
                  "Where are your treatment options available geographically?",
                  "What is the typical wait time for each treatment option?",
                  "How does insurance coverage vary between different treatments?",
                  "What treatments might require travel or relocation for access?",
                  "Are there clinical trials available that might provide additional options?"
                ],
                examples: [
                  "Local hospital, regional medical center, or specialized national centers",
                  "Medication may start immediately, surgery could have 2-month wait",
                  "Generic medications covered, newer treatments may need prior authorization",
                  "Specialized procedures only at major medical centers, proton therapy centers",
                  "Search ClinicalTrials.gov, ask about eligibility, consider experimental options"
                ]
              }
            ]}
            tips={[
              "Ask your doctor for written information about each treatment option",
              "Research treatment options on reputable medical websites and patient advocacy sites",
              "Consider the experience level of your medical team when choosing treatment locations",
              "Don't rush your decision unless there's true urgency - take time to understand options",
              "Look for patient testimonials and connect with others who've had similar treatments"
            ]}
          />
        </TabsContent>

        <TabsContent value="comparing-options">
          <GuidedNotePage
            title="Comparing Treatment Options"
            description="Systematically evaluate the pros and cons of each approach"
            sections={[
              {
                title: "Effectiveness Comparison",
                prompts: [
                  "What are the success rates and outcomes for each treatment option?",
                  "How do treatments compare in terms of symptom relief and disease progression?",
                  "Which treatments offer the best long-term prognosis for your condition?",
                  "How do age, health status, and other factors affect treatment effectiveness?",
                  "What backup options exist if your first choice treatment doesn't work?"
                ],
                examples: [
                  "Surgery: 85% success rate, Medication: 70% response rate, combined: 90%",
                  "Treatment A reduces symptoms faster, Treatment B prevents progression better",
                  "Surgery may cure condition, medication manages it long-term",
                  "Younger patients have better surgical outcomes, older patients may prefer medication",
                  "If medication fails, surgery still possible; if surgery fails, limited options"
                ]
              },
              {
                title: "Side Effects & Complications",
                prompts: [
                  "What are the potential side effects and complications of each treatment?",
                  "How likely are serious complications with each treatment option?",
                  "Which side effects are temporary vs. permanent?",
                  "How do side effect profiles compare between different treatments?",
                  "What can be done to minimize or manage potential side effects?"
                ],
                examples: [
                  "Medication: nausea, fatigue; Surgery: infection risk, scarring",
                  "Serious complications occur in 2% of surgeries, 5% severe medication reactions",
                  "Post-surgery pain temporary, medication side effects may persist",
                  "Treatment A has more daily side effects, Treatment B has rare but serious risks",
                  "Pre-medications, gradual dose increases, supportive care, monitoring protocols"
                ]
              },
              {
                title: "Quality of Life Impact",
                prompts: [
                  "How will each treatment affect your daily life and activities?",
                  "What lifestyle changes or restrictions come with each treatment?",
                  "How will treatments impact your work, relationships, and social life?",
                  "Which treatment allows you to maintain your current quality of life best?",
                  "What support will you need during and after each treatment option?"
                ],
                examples: [
                  "Daily pills vs. monthly infusions vs. one-time surgery with recovery",
                  "Dietary restrictions, activity limitations, regular medical appointments",
                  "Time off work for treatments, energy levels, travel restrictions",
                  "Minimal disruption with oral medication vs. major lifestyle change with surgery",
                  "Help with daily tasks during recovery, transportation to appointments, emotional support"
                ]
              },
              {
                title: "Cost & Practical Considerations",
                prompts: [
                  "What are the total costs associated with each treatment option?",
                  "How do insurance coverage and out-of-pocket expenses compare?",
                  "What hidden costs might you encounter with each treatment?",
                  "How do treatments compare in terms of time commitment and scheduling?",
                  "What logistical challenges exist for each treatment option?"
                ],
                examples: [
                  "Surgery: $50,000 upfront, Medication: $2,000/month ongoing",
                  "Surgery covered 80%, new medications may need prior authorization",
                  "Travel costs for specialized centers, time off work, childcare needs",
                  "Daily pills at home vs. weekly clinic visits vs. one-time procedure",
                  "Finding specialized providers, coordinating multiple appointments, travel requirements"
                ]
              }
            ]}
            tips={[
              "Create a comparison chart listing pros, cons, and key factors for each treatment",
              "Ask your doctor to help you understand how your specific situation affects treatment choices",
              "Consider your personal values and priorities when weighing treatment options",
              "Don't just focus on effectiveness - consider how treatment fits your lifestyle and goals",
              "Seek input from family members who will be affected by your treatment choice"
            ]}
          />
        </TabsContent>

        <TabsContent value="risk-benefit">
          <GuidedNotePage
            title="Risk & Benefit Analysis"
            description="Weigh the potential risks against expected benefits"
            sections={[
              {
                title: "Benefit Assessment",
                prompts: [
                  "What specific benefits can you expect from each treatment option?",
                  "How likely are you to achieve the desired outcomes with each treatment?",
                  "What is the timeline for seeing benefits from each treatment approach?",
                  "How do the benefits compare to your current quality of life?",
                  "What happens if you choose no treatment or delay treatment?"
                ],
                examples: [
                  "Symptom reduction, disease progression halt, cure potential, improved function",
                  "70% chance of significant improvement, 20% chance of complete resolution",
                  "Medication effects in 2-4 weeks, surgery benefits after 3-month recovery",
                  "Treatment may restore normal activities vs. current severe limitations",
                  "Natural disease progression, symptom worsening, potential for complications"
                ]
              },
              {
                title: "Risk Evaluation",
                prompts: [
                  "What are the short-term and long-term risks of each treatment?",
                  "How do your personal risk factors affect the safety of each option?",
                  "What is your risk tolerance and how does it apply to treatment choices?",
                  "Which risks are manageable vs. potentially life-changing?",
                  "How do treatment risks compare to the risks of not treating your condition?"
                ],
                examples: [
                  "Surgery: immediate surgical risks, long-term complications; Medication: side effects, organ damage",
                  "Age, other medical conditions, previous surgeries affect your personal risk level",
                  "Some people prefer one big risk vs. ongoing smaller risks",
                  "Temporary nausea manageable, permanent nerve damage life-changing",
                  "Treatment risks 5% serious complications vs. 30% disease progression without treatment"
                ]
              },
              {
                title: "Probability & Statistics",
                prompts: [
                  "How do you interpret the statistics and probabilities for each treatment?",
                  "What do success rates and complication rates mean for your individual case?",
                  "How reliable are the statistics based on the research available?",
                  "What factors might make your outcomes different from average statistics?",
                  "How do you weigh high-probability small benefits vs. low-probability large benefits?"
                ],
                examples: [
                  "90% success rate means 1 in 10 patients don't have good outcomes",
                  "Your age, health status, disease severity may affect your personal odds",
                  "Large studies more reliable than small case series or single-center data",
                  "Younger age, good health, early-stage disease may improve your odds",
                  "Certain medication improvement vs. small chance surgery provides cure"
                ]
              },
              {
                title: "Decision Framework",
                prompts: [
                  "How will you systematically weigh risks and benefits for your decision?",
                  "What decision-making tools or frameworks might help you choose?",
                  "Who should be involved in your risk-benefit analysis?",
                  "How do you account for uncertainty in your decision-making process?",
                  "What would help you feel confident about your treatment decision?"
                ],
                examples: [
                  "Assign weights to factors like effectiveness, side effects, lifestyle impact",
                  "Decision trees, pro/con lists, shared decision-making tools with doctor",
                  "Medical team, family members, counselors, patients with similar experience",
                  "Consider best-case, worst-case, and most likely scenarios for each option",
                  "Multiple expert opinions, patient testimonials, time to process information"
                ]
              }
            ]}
            tips={[
              "Ask your doctor to explain risks and benefits in terms of natural frequencies, not just percentages",
              "Consider your personal values and what outcomes matter most to you",
              "Don't let fear of low-probability risks drive your decision if benefits are significant",
              "Remember that no treatment also carries risks - maintain perspective on your options",
              "Take time to process the information - major medical decisions don't need to be rushed unless urgent"
            ]}
          />
        </TabsContent>

        <TabsContent value="decision-making">
          <GuidedNotePage
            title="Making Your Treatment Decision"
            description="Navigate the decision-making process and commit to your choice"
            sections={[
              {
                title: "Values & Priorities",
                prompts: [
                  "What are your most important values and priorities regarding treatment?",
                  "How do you weigh quality of life vs. quantity of life in your decision?",
                  "What role does your family situation play in your treatment choice?",
                  "How important is maintaining independence and normal activities?",
                  "What are your fears and concerns about each treatment option?"
                ],
                examples: [
                  "Prioritize effectiveness over convenience, or prefer less invasive options",
                  "Some prefer aggressive treatment for best outcomes, others prioritize comfort",
                  "Consider impact on spouse, children, caregiving responsibilities",
                  "Ability to work, drive, travel, participate in hobbies and social activities",
                  "Fear of surgery, concern about medication side effects, worry about costs"
                ]
              },
              {
                title: "Support System Input",
                prompts: [
                  "How will you involve your family and loved ones in the decision process?",
                  "What input do you want from your medical team vs. personal decision?",
                  "Who are the most important people to consult before deciding?",
                  "How will you handle differing opinions from family or doctors?",
                  "What boundaries will you set about who gets a say in your treatment choice?"
                ],
                examples: [
                  "Family meeting to discuss options, but final decision remains yours",
                  "Ask doctor for recommendation, but consider your personal preferences",
                  "Spouse, adult children, best friend, mentor, spiritual advisor",
                  "Listen respectfully but remember this is your body and your choice",
                  "Welcome input from close family, but don't feel obligated to follow all advice"
                ]
              },
              {
                title: "Final Decision Process",
                prompts: [
                  "What decision-making approach will you use to make your final choice?",
                  "How much time do you need to make a thoughtful decision?",
                  "What additional information or consultations do you need?",
                  "How will you know when you're ready to commit to a treatment plan?",
                  "What would make you reconsider or change your treatment decision?"
                ],
                examples: [
                  "Pro/con lists, discuss with trusted advisor, sleep on it, trust gut feeling",
                  "Take a week to research and discuss, but don't delay unnecessarily",
                  "Second opinion, talk to other patients, research specific doctors/facilities",
                  "Feel peace about choice, have answered major questions, family support",
                  "New information, change in condition, different doctor recommendation, side effects"
                ]
              },
              {
                title: "Moving Forward",
                prompts: [
                  "How will you communicate your treatment decision to your medical team?",
                  "What steps are needed to begin your chosen treatment plan?",
                  "How will you prepare mentally and practically for your chosen treatment?",
                  "What contingency plans will you make in case your treatment doesn't work?",
                  "How will you stay positive and committed to your treatment choice?"
                ],
                examples: [
                  "Clear communication about your choice and reasoning to all providers",
                  "Schedule procedures, start medications, arrange time off work, insurance approval",
                  "Research what to expect, arrange support, modify environment, stress management",
                  "Discuss backup treatment options, timeline for evaluating effectiveness",
                  "Focus on reasons for your choice, connect with others having same treatment"
                ]
              }
            ]}
            tips={[
              "Trust yourself - you know your body, values, and life situation better than anyone",
              "Don't let others pressure you into treatments that don't feel right for your situation",
              "Consider writing down your reasoning for your choice to reference later if you have doubts",
              "Remember that for most conditions, there isn't one 'right' choice - different options work for different people",
              "Stay flexible - you can often modify or change your treatment approach if needed"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}