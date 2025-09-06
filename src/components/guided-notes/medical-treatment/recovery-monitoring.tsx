"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RecoveryMonitoring() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recovery Monitoring & Progress Tracking</h1>
        <p className="text-muted-foreground">Track your recovery progress and monitor treatment effectiveness.</p>
      </div>

      <Tabs defaultValue="progress-tracking" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="progress-tracking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Progress Tracking</span>
            <span className="sm:hidden">Progress</span>
          </TabsTrigger>
          <TabsTrigger value="symptom-monitoring" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Symptoms</span>
            <span className="sm:hidden">Symptoms</span>
          </TabsTrigger>
          <TabsTrigger value="follow-up-care" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Follow-up</span>
            <span className="sm:hidden">Follow</span>
          </TabsTrigger>
          <TabsTrigger value="long-term-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Long-term</span>
            <span className="sm:hidden">Long-term</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="progress-tracking">
          <GuidedNotePage
            title="Recovery Progress Tracking"
            description="Monitor and document your recovery journey"
            sections={[
              {
                title: "Baseline Measurements",
                prompts: [
                  "What baseline measurements should you track before and during treatment?",
                  "How will you document your starting point for comparison during recovery?",
                  "What functional abilities should you measure to track improvement?",
                  "How do you establish realistic goals and milestones for your recovery?",
                  "What tools or methods will help you consistently track your progress?"
                ],
                examples: [
                  "Pain levels, energy, mobility, sleep quality, mood, daily functioning capacity",
                  "Photo documentation, measurement scales, functional assessments, quality of life surveys",
                  "Walking distance, stairs climbed, work hours, social activities, self-care tasks",
                  "Short-term weekly goals, monthly milestones, long-term recovery objectives",
                  "Smartphone apps, paper journals, wearable devices, photography, video recordings"
                ]
              },
              {
                title: "Daily Monitoring",
                prompts: [
                  "What should you track on a daily basis to monitor your recovery?",
                  "How will you maintain consistency in your daily tracking routine?",
                  "What patterns should you look for in your daily recovery data?",
                  "How do you balance thorough tracking with not becoming obsessive about measurements?",
                  "What daily tracking information is most important to share with your healthcare team?"
                ],
                examples: [
                  "Symptom severity, medication effectiveness, sleep hours, energy levels, activity completion",
                  "Set specific times for recording, use apps with reminders, keep tracking tools accessible",
                  "Improvements over time, setbacks, correlations between activities and symptoms",
                  "Focus on meaningful changes, don't get discouraged by day-to-day fluctuations",
                  "Significant changes, concerning patterns, medication side effects, functional improvements"
                ]
              },
              {
                title: "Weekly & Monthly Reviews",
                prompts: [
                  "How will you review and analyze your progress data regularly?",
                  "What trends or patterns should you look for in your recovery tracking?",
                  "How do you identify when you're making good progress vs. when you need help?",
                  "What questions should you ask yourself during regular progress reviews?",
                  "How will you adjust your recovery plan based on your progress data?"
                ],
                examples: [
                  "Weekly summary reviews, monthly detailed analysis, quarterly goal assessment",
                  "Gradual improvement, sudden changes, correlation between treatments and outcomes",
                  "Steady improvement = good progress, plateaus or declines = may need intervention",
                  "Am I meeting my goals? What's working? What needs adjustment? How do I feel overall?",
                  "Modify goals, adjust activities, change tracking methods, discuss with healthcare team"
                ]
              },
              {
                title: "Sharing Progress Data",
                prompts: [
                  "How will you organize and present your progress data to healthcare providers?",
                  "What progress information is most valuable for your medical team to see?",
                  "How do you communicate both improvements and concerns effectively?",
                  "What visual methods help illustrate your progress over time?",
                  "How will you use progress data to advocate for continued or modified treatment?"
                ],
                examples: [
                  "Create summaries, charts, or graphs; bring to appointments; use patient portals",
                  "Functional improvements, symptom changes, medication effects, quality of life measures",
                  "Highlight positive changes while clearly stating ongoing concerns or setbacks",
                  "Before/after photos, progress charts, timeline graphics, comparison tables",
                  "Show objective improvements to justify continuing treatment, or lack of progress to request changes"
                ]
              }
            ]}
            tips={[
              "Use simple, consistent tracking methods you can maintain long-term without burnout",
              "Focus on meaningful improvements in function and quality of life, not just numbers",
              "Don't get discouraged by temporary setbacks - recovery is rarely a straight line",
              "Celebrate small victories and progress milestones to maintain motivation",
              "Share your progress data with healthcare providers to help them adjust your treatment plan"
            ]}
          />
        </TabsContent>

        <TabsContent value="symptom-monitoring">
          <GuidedNotePage
            title="Symptom Monitoring & Management"
            description="Track symptoms and identify patterns that inform treatment decisions"
            sections={[
              {
                title: "Symptom Documentation",
                prompts: [
                  "What symptoms should you track consistently throughout your treatment?",
                  "How will you rate and describe symptom severity accurately?",
                  "What triggers or factors seem to worsen or improve your symptoms?",
                  "How do you document symptoms that are difficult to measure objectively?",
                  "What timing and frequency patterns are important to track for your symptoms?"
                ],
                examples: [
                  "Pain, fatigue, nausea, mood changes, sleep disturbances, cognitive function",
                  "Use 1-10 scales, describe quality (sharp, dull, burning), note duration",
                  "Weather, stress, food, activity level, medication timing, sleep quality",
                  "Mood and cognitive symptoms: use descriptive words, functional impact measures",
                  "Time of day symptoms occur, how long they last, frequency of episodes"
                ]
              },
              {
                title: "Pattern Recognition",
                prompts: [
                  "What patterns do you notice in your symptom tracking over time?",
                  "How do you identify what factors consistently affect your symptoms?",
                  "What symptom changes indicate your treatment is working effectively?",
                  "How do you distinguish between normal fluctuations and concerning changes?",
                  "What symptom patterns should prompt immediate contact with your healthcare provider?"
                ],
                examples: [
                  "Symptoms worse in morning, better after medication, triggered by stress",
                  "Keep detailed logs, look for correlations, track multiple variables simultaneously",
                  "Gradual reduction in severity, less frequent episodes, improved functional ability",
                  "Day-to-day variation is normal, sustained worsening or new symptoms are concerning",
                  "Sudden severe worsening, new concerning symptoms, symptoms not responding to usual treatments"
                ]
              },
              {
                title: "Intervention Tracking",
                prompts: [
                  "How will you track the effectiveness of different symptom management strategies?",
                  "What works best for managing your symptoms during flare-ups?",
                  "How do you evaluate whether medications are providing adequate symptom relief?",
                  "What non-medication interventions help manage your symptoms?",
                  "How do you adjust your symptom management approach based on what you learn?"
                ],
                examples: [
                  "Track symptoms before and after interventions, note timing and effectiveness",
                  "Rest, medication, heat/cold therapy, breathing exercises, distraction techniques",
                  "Compare symptom levels before and after medication changes, track side effects",
                  "Physical therapy, meditation, dietary changes, sleep hygiene, stress reduction",
                  "Emphasize strategies that work, modify or eliminate ineffective approaches"
                ]
              },
              {
                title: "Communication with Providers",
                prompts: [
                  "How will you effectively communicate your symptom patterns to your healthcare team?",
                  "What symptom information is most important for treatment decisions?",
                  "How do you describe symptoms that are difficult to put into words?",
                  "What questions should you ask about your symptoms and their management?",
                  "How will you work with providers to optimize your symptom management plan?"
                ],
                examples: [
                  "Bring symptom logs, use charts or graphs, describe specific examples and timing",
                  "Severity trends, functional impact, response to treatments, new or worsening symptoms",
                  "Use analogies, describe impact on activities, compare to familiar experiences",
                  "Are these symptoms expected? What treatments are available? When should I be concerned?",
                  "Discuss what's working, what isn't, request adjustments based on symptom patterns"
                ]
              }
            ]}
            tips={[
              "Track symptoms consistently using the same scale and methods for accurate comparison over time",
              "Look for patterns in your symptom data - timing, triggers, and responses to interventions",
              "Don't ignore or minimize symptoms - accurate reporting helps optimize your treatment",
              "Use technology tools like apps or wearables to make symptom tracking easier and more consistent",
              "Share symptom patterns with your healthcare team to guide treatment adjustments"
            ]}
          />
        </TabsContent>

        <TabsContent value="follow-up-care">
          <GuidedNotePage
            title="Follow-up Care Coordination"
            description="Manage ongoing follow-up appointments and continued care"
            sections={[
              {
                title: "Appointment Scheduling",
                prompts: [
                  "What follow-up appointments are needed for your ongoing care?",
                  "How will you schedule and track multiple follow-up appointments?",
                  "What preparation is needed for different types of follow-up visits?",
                  "How do you coordinate scheduling between multiple healthcare providers?",
                  "What should you do if you need to reschedule important follow-up appointments?"
                ],
                examples: [
                  "Regular check-ups, lab work, imaging studies, specialist consultations, therapy sessions",
                  "Use calendar apps, appointment reminder systems, coordinate with work schedule",
                  "Bring symptom logs, prepare questions, complete required tests beforehand",
                  "Schedule related appointments close together, share results between providers",
                  "Reschedule promptly, don't skip appointments, communicate with provider's office"
                ]
              },
              {
                title: "Monitoring Requirements",
                prompts: [
                  "What ongoing monitoring tests or assessments are required for your condition?",
                  "How often do you need different types of monitoring during your recovery?",
                  "What should you do to prepare for monitoring tests and appointments?",
                  "How will you track and follow up on test results?",
                  "What changes in monitoring results warrant immediate attention?"
                ],
                examples: [
                  "Blood tests, imaging, heart monitoring, bone density, functional assessments",
                  "Weekly, monthly, quarterly, or annual depending on test type and condition stability",
                  "Fasting requirements, medication holds, bring previous results for comparison",
                  "Request copies of results, maintain personal health record, follow up on abnormal findings",
                  "Significant changes from baseline, results outside normal ranges, unexpected findings"
                ]
              },
              {
                title: "Care Transitions",
                prompts: [
                  "How will your care transition as your condition improves or changes?",
                  "What happens when you move from active treatment to maintenance care?",
                  "How do you handle transitions between different healthcare providers?",
                  "What should you expect as follow-up care requirements change over time?",
                  "How will you maintain continuity during care transitions?"
                ],
                examples: [
                  "Less frequent appointments, different types of monitoring, shifting provider roles",
                  "Maintenance medications, lifestyle focus, less intensive monitoring",
                  "Ensure complete records transfer, maintain relationships with key providers",
                  "Fewer appointments but remain vigilant for changes, focus on prevention",
                  "Keep complete medical records, maintain contact with key providers"
                ]
              },
              {
                title: "Long-term Planning",
                prompts: [
                  "What long-term follow-up care will you need for your condition?",
                  "How will you maintain your health gains and prevent recurrence?",
                  "What ongoing lifestyle modifications are important for long-term success?",
                  "How do you plan for potential complications or disease progression?",
                  "What resources will support your long-term health maintenance?"
                ],
                examples: [
                  "Annual screenings, periodic specialist visits, ongoing medication management",
                  "Medication adherence, lifestyle modifications, regular monitoring, early intervention",
                  "Diet, exercise, stress management, sleep hygiene, avoiding risk factors",
                  "Know warning signs, have emergency plans, maintain strong healthcare relationships",
                  "Support groups, wellness programs, preventive care, health education resources"
                ]
              }
            ]}
            tips={[
              "Keep a master calendar of all follow-up appointments and required tests",
              "Don't skip follow-up appointments even if you're feeling well - prevention is key",
              "Maintain relationships with your healthcare team even as care intensity decreases",
              "Stay proactive about scheduling follow-up care rather than waiting for providers to call",
              "Use follow-up visits as opportunities to discuss any concerns or changes in your condition"
            ]}
          />
        </TabsContent>

        <TabsContent value="long-term-management">
          <GuidedNotePage
            title="Long-term Health Management"
            description="Develop strategies for ongoing health maintenance and quality of life"
            sections={[
              {
                title: "Maintenance Planning",
                prompts: [
                  "What ongoing treatments or interventions will you need long-term?",
                  "How will you maintain the health improvements you've achieved?",
                  "What lifestyle modifications need to become permanent habits?",
                  "How do you balance ongoing medical care with returning to normal life?",
                  "What support systems will help you maintain long-term health goals?"
                ],
                examples: [
                  "Maintenance medications, regular exercise, dietary changes, stress management",
                  "Continue successful strategies, regular monitoring, preventive care",
                  "Healthy diet, regular exercise, adequate sleep, stress reduction techniques",
                  "Integrate medical care into normal routine, prioritize health without letting it dominate life",
                  "Family support, healthcare team, peer groups, wellness programs"
                ]
              },
              {
                title: "Quality of Life Focus",
                prompts: [
                  "How has your medical journey affected your overall quality of life?",
                  "What activities and relationships are most important to prioritize going forward?",
                  "How do you maintain perspective and find meaning despite ongoing health challenges?",
                  "What goals do you have for your life beyond managing your medical condition?",
                  "How will you celebrate your recovery and acknowledge your resilience?"
                ],
                examples: [
                  "Physical function, emotional wellbeing, social connections, sense of purpose",
                  "Family time, meaningful work, hobbies, travel, community involvement",
                  "Focus on what you can control, practice gratitude, help others with similar conditions",
                  "Career advancement, family milestones, travel, volunteer work, creative pursuits",
                  "Acknowledge progress made, share your story, help others facing similar challenges"
                ]
              },
              {
                title: "Prevention & Monitoring",
                prompts: [
                  "What ongoing monitoring is needed to prevent recurrence or complications?",
                  "How will you recognize early warning signs that require medical attention?",
                  "What preventive measures can reduce your risk of future health problems?",
                  "How do you stay informed about new developments in your condition's treatment?",
                  "What role should preventive healthcare play in your long-term planning?"
                ],
                examples: [
                  "Regular screenings, blood work, imaging, functional assessments",
                  "Return of original symptoms, new concerning symptoms, changes in function",
                  "Healthy lifestyle, vaccination, screening tests, risk factor management",
                  "Medical journals, patient organizations, healthcare provider updates",
                  "Annual physicals, age-appropriate screenings, dental care, mental health check-ins"
                ]
              },
              {
                title: "Resilience & Adaptation",
                prompts: [
                  "What have you learned about yourself through your medical journey?",
                  "How has this experience changed your priorities and perspective on life?",
                  "What coping strategies will continue to serve you in the future?",
                  "How can you use your experience to help others facing similar challenges?",
                  "What wisdom would you share with someone just beginning a similar medical journey?"
                ],
                examples: [
                  "Personal strength, importance of support systems, value of health, resilience capacity",
                  "Focus on what matters most, appreciate good health, don't take things for granted",
                  "Stress management, problem-solving skills, communication techniques, support utilization",
                  "Mentoring newly diagnosed patients, volunteering, sharing your story",
                  "Take one day at a time, build strong support networks, advocate for yourself, maintain hope"
                ]
              }
            ]}
            tips={[
              "Focus on living well with your condition rather than just managing symptoms",
              "Maintain the healthy habits that supported your recovery even after you feel better",
              "Stay connected with your healthcare team and don't skip preventive care",
              "Consider how your experience can help others - sharing your story can be healing",
              "Remember that managing a chronic condition is a marathon, not a sprint - pace yourself for the long term"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}