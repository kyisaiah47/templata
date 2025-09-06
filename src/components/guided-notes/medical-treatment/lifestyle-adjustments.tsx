"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LifestyleAdjustments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Lifestyle Adjustments & Self-Care</h1>
        <p className="text-muted-foreground">Adapt your daily life to support your health and treatment goals.</p>
      </div>

      <Tabs defaultValue="daily-routine" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="daily-routine" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Daily Routine</span>
            <span className="sm:hidden">Daily</span>
          </TabsTrigger>
          <TabsTrigger value="diet-nutrition" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Diet & Nutrition</span>
            <span className="sm:hidden">Diet</span>
          </TabsTrigger>
          <TabsTrigger value="exercise-activity" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Exercise</span>
            <span className="sm:hidden">Exercise</span>
          </TabsTrigger>
          <TabsTrigger value="stress-wellness" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Stress & Wellness</span>
            <span className="sm:hidden">Wellness</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily-routine">
          <GuidedNotePage
            title="Daily Routine Adaptations"
            description="Modify your daily routines to accommodate treatment and promote healing"
            sections={[
              {
                title: "Morning Routines",
                prompts: [
                  "How will you adapt your morning routine to include medical care needs?",
                  "What time schedule works best for taking morning medications?",
                  "How do you plan to incorporate energy management into your morning?",
                  "What modifications do you need for personal care and getting ready?",
                  "How will you structure your morning to reduce stress and promote wellness?"
                ],
                examples: [
                  "Take medications with breakfast, allow extra time for slower movements",
                  "Set consistent time 30 minutes before breakfast, use phone alarms",
                  "Start slowly, plan lighter activities for low-energy days",
                  "Shower chair if needed, lay out clothes night before, simplify routine",
                  "Gentle stretching, meditation, avoid rushing, prepare night before"
                ]
              },
              {
                title: "Work & Productivity",
                prompts: [
                  "What workplace accommodations do you need for your medical condition?",
                  "How will you manage fatigue and energy levels during work hours?",
                  "What schedule modifications might help you maintain productivity?",
                  "How do you plan medical appointments around work responsibilities?",
                  "What backup plans do you need for days when symptoms flare?"
                ],
                examples: [
                  "Flexible hours, ergonomic equipment, frequent breaks, work-from-home options",
                  "Schedule demanding tasks during peak energy times, take regular rest breaks",
                  "Compressed work week, part-time options, flexible start times",
                  "Schedule early morning or end-of-day appointments when possible",
                  "Remote work capability, colleague coverage, project deadline flexibility"
                ]
              },
              {
                title: "Evening & Rest",
                prompts: [
                  "How will you create an evening routine that promotes better rest?",
                  "What modifications do you need for comfortable sleep?",
                  "How do you plan to wind down and manage treatment-related stress?",
                  "What evening medication schedule works best for your routine?",
                  "How will you prepare for the next day to reduce morning stress?"
                ],
                examples: [
                  "Consistent bedtime, limit screen time, gentle activities like reading",
                  "Supportive pillows, room temperature control, blackout curtains",
                  "Meditation, gentle music, journaling, warm bath, breathing exercises",
                  "Take evening meds 1-2 hours before bed, avoid late doses that disrupt sleep",
                  "Lay out clothes, prepare medications, check tomorrow's schedule"
                ]
              },
              {
                title: "Flexibility & Adaptation",
                prompts: [
                  "How will you maintain flexibility when symptoms or treatments change?",
                  "What core activities are most important to maintain in your routine?",
                  "How do you balance structure with the need for spontaneous adjustments?",
                  "What support do you need from family for routine modifications?",
                  "How will you track what modifications work best for your condition?"
                ],
                examples: [
                  "Have backup plans, simplified routine versions for difficult days",
                  "Focus on medication adherence, nutrition, rest - everything else is flexible",
                  "Plan core activities but allow buffer time, have 'good day' and 'bad day' routines",
                  "Help with household tasks, understanding when plans change, emotional support",
                  "Keep journal of what works, note energy patterns, track symptom changes"
                ]
              }
            ]}
            tips={[
              "Start with small changes to your routine and gradually build up to larger modifications",
              "Listen to your body and adjust your schedule based on energy levels and symptoms",
              "Communicate with family and coworkers about your needs for routine flexibility",
              "Prepare for both good days and challenging days by having multiple routine options",
              "Focus on maintaining the most essential activities and be flexible with everything else"
            ]}
          />
        </TabsContent>

        <TabsContent value="diet-nutrition">
          <GuidedNotePage
            title="Diet & Nutrition Management"
            description="Optimize your nutrition to support treatment and overall health"
            sections={[
              {
                title: "Treatment-Specific Nutrition",
                prompts: [
                  "What dietary restrictions or requirements come with your treatment?",
                  "How do your medications interact with foods or nutrients?",
                  "What nutritional needs are increased due to your medical condition?",
                  "How will you ensure adequate nutrition if appetite or taste changes?",
                  "What foods should you emphasize or avoid during treatment?"
                ],
                examples: [
                  "Low sodium for heart conditions, avoid grapefruit with certain medications",
                  "Take iron supplements away from dairy, some meds need empty stomach",
                  "Higher protein for healing, more calcium for bone health, extra vitamins",
                  "Smaller frequent meals, nutritional supplements, appealing food preparations",
                  "Anti-inflammatory foods, limit processed foods, stay hydrated"
                ]
              },
              {
                title: "Meal Planning & Preparation",
                prompts: [
                  "How will you plan and prepare meals when energy levels are low?",
                  "What cooking modifications make meal preparation easier?",
                  "How do you ensure you have nutritious options available when needed?",
                  "What support do you need with grocery shopping and meal preparation?",
                  "How will you maintain good nutrition during treatment periods?"
                ],
                examples: [
                  "Batch cooking on good days, slow cooker meals, pre-cut vegetables",
                  "Simpler recipes, one-pot meals, pre-made healthy options, kitchen tools that reduce effort",
                  "Stock freezer with healthy meals, keep easy protein sources available",
                  "Family help with shopping, meal delivery services, prepared meal options",
                  "Nutritional shakes, easy-to-digest foods, frequent small meals"
                ]
              },
              {
                title: "Managing Eating Challenges",
                prompts: [
                  "How will you handle changes in appetite or taste due to treatment?",
                  "What strategies help when nausea or digestive issues affect eating?",
                  "How do you maintain nutrition when swallowing or chewing is difficult?",
                  "What should you do if you lose or gain weight unexpectedly?",
                  "How will you stay hydrated, especially if fluids are difficult to tolerate?"
                ],
                examples: [
                  "Try different seasonings, cold foods may be better tolerated, small frequent meals",
                  "Ginger tea, bland foods, eat before treatment if possible, anti-nausea medications",
                  "Soft foods, smoothies, nutritional drinks, work with speech therapist if needed",
                  "Notify healthcare team, adjust portions, consider nutritional counseling",
                  "Ice chips, flavored water, popsicles, sports drinks if electrolytes needed"
                ]
              },
              {
                title: "Professional Support",
                prompts: [
                  "When should you consider working with a registered dietitian?",
                  "How do you coordinate nutrition recommendations with your medical team?",
                  "What nutrition resources are available through your healthcare system?",
                  "How do you evaluate nutrition information and avoid conflicting advice?",
                  "What role should supplements play in your nutrition plan?"
                ],
                examples: [
                  "Complex dietary needs, significant weight changes, multiple food restrictions",
                  "Share nutrition plans with all providers, ask about interactions with treatments",
                  "Hospital dietitians, outpatient nutrition counseling, diabetes education programs",
                  "Stick to advice from qualified professionals, be wary of internet nutrition claims",
                  "Only take supplements recommended by healthcare providers, avoid mega-doses"
                ]
              }
            ]}
            tips={[
              "Work with a registered dietitian if you have complex nutritional needs or restrictions",
              "Keep easy, nutritious snacks available for when appetite is poor or energy is low",
              "Stay hydrated but check with your doctor if you have fluid restrictions",
              "Don't make dramatic diet changes without consulting your healthcare team",
              "Focus on nutrient-dense foods and consider supplements only as recommended by providers"
            ]}
          />
        </TabsContent>

        <TabsContent value="exercise-activity">
          <GuidedNotePage
            title="Exercise & Physical Activity"
            description="Maintain safe, appropriate physical activity during treatment"
            sections={[
              {
                title: "Activity Assessment",
                prompts: [
                  "What physical activities are safe and recommended for your condition?",
                  "How has your treatment or condition affected your current activity level?",
                  "What exercise restrictions or modifications do you need to follow?",
                  "How will you gradually increase activity as your condition improves?",
                  "What warning signs should stop you from exercising?"
                ],
                examples: [
                  "Walking, swimming, gentle yoga may be appropriate for many conditions",
                  "Decreased endurance, joint stiffness, fatigue limiting previous activities",
                  "Avoid high-impact if bone issues, heart rate limits for cardiac conditions",
                  "Start with 5-10 minutes daily, increase by small increments weekly",
                  "Chest pain, severe shortness of breath, dizziness, unusual fatigue"
                ]
              },
              {
                title: "Exercise Planning",
                prompts: [
                  "How will you create a realistic exercise schedule that fits your treatment?",
                  "What types of activities do you enjoy that can be adapted for your needs?",
                  "How do you plan to stay motivated when energy levels fluctuate?",
                  "What equipment or resources do you need for safe exercise at home?",
                  "How will you track your activity and progress over time?"
                ],
                examples: [
                  "Schedule lighter exercise on treatment days, more activity on recovery days",
                  "Dancing, gardening, walking with friends - find activities you naturally enjoy",
                  "Set small achievable goals, have backup indoor activities, exercise with others",
                  "Resistance bands, yoga mat, supportive shoes, access to safe walking area",
                  "Use fitness apps, keep exercise journal, note energy levels and symptoms"
                ]
              },
              {
                title: "Adaptive Strategies",
                prompts: [
                  "How will you modify activities when symptoms or side effects flare?",
                  "What alternatives exist when your usual exercise routine isn't possible?",
                  "How do you balance rest and activity during treatment periods?",
                  "What support do you need to maintain safe exercise habits?",
                  "How will you prevent injury while managing your medical condition?"
                ],
                examples: [
                  "Shorter sessions, gentler activities, chair exercises, stretching instead of cardio",
                  "Indoor walking, seated exercises, breathing exercises, gentle stretches",
                  "Listen to body, rest when needed but try to stay gently active",
                  "Exercise buddy, physical therapy guidance, family encouragement",
                  "Proper warm-up, appropriate intensity, good form, gradual progression"
                ]
              },
              {
                title: "Professional Guidance",
                prompts: [
                  "When should you work with a physical therapist or exercise specialist?",
                  "How do you coordinate exercise plans with your medical treatment team?",
                  "What role should formal exercise programs or classes play in your routine?",
                  "How do you evaluate whether your exercise routine is helping or harmful?",
                  "What resources are available for condition-specific exercise guidance?"
                ],
                examples: [
                  "After surgery, for balance issues, chronic pain, or specific movement limitations",
                  "Get clearance before starting, share activity plans, report any concerning symptoms",
                  "Cardiac rehab, cancer exercise programs, arthritis classes, senior fitness",
                  "Improved energy and mood vs. increased pain or fatigue after exercise",
                  "Disease-specific foundations, hospital wellness programs, certified trainers"
                ]
              }
            ]}
            tips={[
              "Get clearance from your healthcare team before starting any new exercise program",
              "Start slowly and progress gradually - consistency is more important than intensity",
              "Listen to your body and rest when needed, but try to stay gently active",
              "Find activities you enjoy to increase the likelihood you'll stick with them",
              "Consider working with a physical therapist to develop a safe, effective exercise plan"
            ]}
          />
        </TabsContent>

        <TabsContent value="stress-wellness">
          <GuidedNotePage
            title="Stress Management & Wellness"
            description="Develop strategies for emotional wellbeing and stress reduction"
            sections={[
              {
                title: "Stress Assessment",
                prompts: [
                  "What are your main sources of stress related to your medical condition?",
                  "How does stress affect your symptoms and treatment response?",
                  "What stress management techniques have worked for you in the past?",
                  "How do you recognize early signs that stress levels are becoming problematic?",
                  "What aspects of your medical situation cause the most anxiety or worry?"
                ],
                examples: [
                  "Medical appointments, financial concerns, uncertainty about prognosis, treatment side effects",
                  "Stress may worsen pain, affect sleep, weaken immune system, interfere with healing",
                  "Deep breathing, exercise, talking to friends, listening to music, spending time in nature",
                  "Trouble sleeping, increased irritability, muscle tension, appetite changes",
                  "Fear of procedures, concern about family impact, worry about treatment effectiveness"
                ]
              },
              {
                title: "Coping Strategies",
                prompts: [
                  "What daily stress management practices will you incorporate into your routine?",
                  "How will you use relaxation techniques to manage medical anxiety?",
                  "What activities bring you joy and help you feel more like yourself?",
                  "How do you plan to maintain perspective during difficult treatment periods?",
                  "What mindfulness or meditation practices might benefit your situation?"
                ],
                examples: [
                  "Morning meditation, evening walks, regular check-ins with supportive friends",
                  "Deep breathing before appointments, guided imagery during procedures",
                  "Reading, crafts, music, time with pets, cooking, connecting with nature",
                  "Focus on one day at a time, celebrate small victories, remember past resilience",
                  "Meditation apps, yoga, progressive muscle relaxation, breathing exercises"
                ]
              },
              {
                title: "Emotional Support",
                prompts: [
                  "What emotional support do you need during your treatment journey?",
                  "How will you maintain connections with family and friends?",
                  "When might professional counseling or therapy be beneficial?",
                  "What support groups or peer connections could help your situation?",
                  "How do you plan to communicate your emotional needs to loved ones?"
                ],
                examples: [
                  "Someone to talk to, help with decisions, companionship during appointments",
                  "Regular phone calls, video chats, accepting help with visits and activities",
                  "Difficulty coping, depression, anxiety, major life adjustments",
                  "Disease-specific support groups, online communities, hospital support programs",
                  "Be specific about needs: listening, practical help, emotional support, space"
                ]
              },
              {
                title: "Mental Health Maintenance",
                prompts: [
                  "How will you monitor your mental health throughout your treatment?",
                  "What warning signs would indicate you need additional mental health support?",
                  "How do you maintain hope and motivation during challenging periods?",
                  "What role should mental health professionals play in your overall care?",
                  "How will you address depression or anxiety that may arise during treatment?"
                ],
                examples: [
                  "Regular self-check-ins, mood tracking, asking trusted friends for observations",
                  "Persistent sadness, loss of interest, panic attacks, thoughts of self-harm",
                  "Focus on treatment goals, connect with others who've had similar experiences",
                  "Therapy for coping skills, medication if needed, support group facilitation",
                  "Talk to primary doctor, seek therapy referral, consider medication evaluation"
                ]
              }
            ]}
            tips={[
              "Don't underestimate the impact of stress on your physical health and recovery",
              "Build a toolkit of stress management techniques to use in different situations",
              "Stay connected with supportive people even when you don't feel like socializing",
              "Consider professional mental health support as part of your overall treatment plan",
              "Practice self-compassion - managing a medical condition is inherently stressful and challenging"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}