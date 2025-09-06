"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TestDrive() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Test Drive & Vehicle Evaluation</h1>
        <p className="text-muted-foreground">Thoroughly evaluate vehicles through comprehensive test driving.</p>
      </div>

      <Tabs defaultValue="test-drive-prep" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="test-drive-prep" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Test Drive Prep</span>
            <span className="sm:hidden">Prep</span>
          </TabsTrigger>
          <TabsTrigger value="driving-evaluation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Driving Evaluation</span>
            <span className="sm:hidden">Driving</span>
          </TabsTrigger>
          <TabsTrigger value="interior-comfort" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Interior & Comfort</span>
            <span className="sm:hidden">Interior</span>
          </TabsTrigger>
          <TabsTrigger value="technology-features" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Technology & Features</span>
            <span className="sm:hidden">Tech</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="test-drive-prep">
          <GuidedNotePage
            title="Test Drive Preparation"
            description="Prepare for effective test drives and vehicle evaluations"
            sections={[
              {
                title: "Pre-Drive Planning",
                prompts: [
                  "What specific aspects will you evaluate during each test drive?",
                  "How long should you plan for a thorough test drive?",
                  "What driving conditions will you try to experience?",
                  "Should you bring items to test cargo space and daily usability?",
                  "What documentation do you need for test driving?"
                ],
                examples: [
                  "Acceleration, braking, steering feel, noise levels, comfort, visibility",
                  "Minimum 30 minutes, ideally 45-60 minutes for serious consideration",
                  "City streets, highway, parking, hills if available, different weather if possible",
                  "Car seats for kids, golf clubs, typical cargo to test real-world fit",
                  "Valid driver's license, insurance verification, possibly co-driver license"
                ]
              },
              {
                title: "Multiple Vehicle Strategy",
                prompts: [
                  "How many vehicles should you test drive before deciding?",
                  "Should you test drive the same model at different dealers?",
                  "How will you fairly compare vehicles driven on different days?",
                  "What's your strategy for testing similar competing models?",
                  "Should you bring a trusted advisor or drive alone?"
                ],
                examples: [
                  "Test top 3-4 finalists, don't overwhelm yourself with too many",
                  "Yes, if concerned about vehicle condition or to compare dealer experiences",
                  "Take notes immediately, use consistent route if possible, consider weather differences",
                  "Drive back-to-back same day if possible, or create standardized evaluation criteria",
                  "Bring someone whose opinion you value, but ensure you both get to drive"
                ]
              },
              {
                title: "Inspection Before Driving",
                prompts: [
                  "What should you inspect on the exterior before test driving?",
                  "How will you evaluate the vehicle's current condition?",
                  "What questions will you ask about the vehicle's history?",
                  "Should you check fluid levels and mechanical basics?",
                  "What warning signs would stop you from test driving?"
                ],
                examples: [
                  "Paint condition, panel gaps, tire wear patterns, obvious damage or repairs",
                  "Interior wear, seat condition, electronics functionality, cleanliness",
                  "Previous owners, accident history, maintenance records, any known issues",
                  "Check oil level, coolant, look for leaks under car, battery condition",
                  "Major body damage, engine warning lights, unusual noises, strong odors"
                ]
              },
              {
                title: "Legal & Insurance Considerations",
                prompts: [
                  "What insurance coverage applies during test drives?",
                  "Who is liable if you have an accident during a test drive?",
                  "What should you verify about the dealer's insurance?",
                  "Are there restrictions on where you can drive the vehicle?",
                  "What happens if the vehicle is damaged during your test drive?"
                ],
                examples: [
                  "Your insurance may cover, dealer insurance may cover, verify before driving",
                  "Varies by state and situation - dealer insurance typically primary",
                  "Ask dealer about their coverage limits and any restrictions",
                  "Some dealers restrict highway driving or distance limits",
                  "Report immediately, don't admit fault, document with photos if safe to do so"
                ]
              }
            ]}
            tips={[
              "Bring your driver's license and proof of insurance to every test drive",
              "Plan a route that includes city, highway, parking, and hills if available",
              "Take detailed notes immediately after each test drive",
              "Don't let salespeople rush your test drive - take the time you need",
              "Test drive during similar conditions to your typical daily driving"
            ]}
          />
        </TabsContent>

        <TabsContent value="driving-evaluation">
          <GuidedNotePage
            title="Driving Performance Evaluation"
            description="Assess how the vehicle drives and performs"
            sections={[
              {
                title: "Engine & Transmission Performance",
                prompts: [
                  "How does the engine respond during acceleration from stops?",
                  "Is there adequate power for highway merging and passing?",
                  "How smooth are the transmission shifts?",
                  "Does the engine feel strained or effortless under load?",
                  "Are there any unusual noises, vibrations, or hesitation?"
                ],
                examples: [
                  "Test 0-30 mph acceleration from traffic lights, should feel responsive",
                  "Try highway on-ramps and passing slower traffic at highway speeds",
                  "Automatic should shift smoothly, manual clutch should engage progressively",
                  "Adequate power means not flooring it for normal driving situations",
                  "Engine knock, transmission slip, rough idle, unusual exhaust sounds"
                ]
              },
              {
                title: "Handling & Steering",
                prompts: [
                  "How does the vehicle feel in turns and lane changes?",
                  "Is the steering responsive and appropriately weighted?",
                  "Does the car track straight without constant steering corrections?",
                  "How stable does it feel at highway speeds?",
                  "Are there any concerning handling characteristics?"
                ],
                examples: [
                  "Should feel stable in turns, minimal body roll for the vehicle type",
                  "Not too light/vague or too heavy, should provide good road feel",
                  "Shouldn't pull to one side or require constant steering adjustments",
                  "No wandering, vibration, or nervousness at normal highway speeds",
                  "Excessive body roll, vague steering, pulling, unusual tire noise"
                ]
              },
              {
                title: "Braking & Safety",
                prompts: [
                  "How do the brakes feel during normal and emergency stops?",
                  "Is the brake pedal firm with consistent feel?",
                  "Do safety systems like ABS work properly if activated?",
                  "How is visibility from the driver's seat in all directions?",
                  "Are there significant blind spots to be aware of?"
                ],
                examples: [
                  "Should stop smoothly without pulling, grabbing, or excessive pedal travel",
                  "Pedal shouldn't feel spongy or require excessive force",
                  "ABS should engage smoothly in hard braking without vibration concern",
                  "Check A-pillar blind spots, rear visibility, side mirror coverage",
                  "Large trucks/SUVs may have significant blind spots - know where they are"
                ]
              },
              {
                title: "Ride Quality & Comfort",
                prompts: [
                  "How does the vehicle handle bumps, potholes, and road imperfections?",
                  "What is the noise level at city and highway speeds?",
                  "How comfortable are the seats during the test drive?",
                  "Is the climate control effective and easy to use?",
                  "Does anything about the driving experience feel fatiguing?"
                ],
                examples: [
                  "Should absorb bumps without harsh impacts or excessive bouncing",
                  "Road/wind/engine noise shouldn't require raised voices for conversation",
                  "Seats should be supportive without pressure points or discomfort",
                  "Climate should reach desired temperature quickly and maintain it",
                  "Seat position, controls reach, visibility issues that might cause fatigue"
                ]
              }
            ]}
            tips={[
              "Drive the vehicle like you normally would - don't baby it",
              "Test different driving conditions: city, highway, parking, hills",
              "Pay attention to your comfort level and any concerning characteristics",
              "Don't ignore minor issues - they may become major annoyances over time",
              "Trust your instincts about how the vehicle feels to drive"
            ]}
          />
        </TabsContent>

        <TabsContent value="interior-comfort">
          <GuidedNotePage
            title="Interior & Comfort Assessment"
            description="Evaluate interior space, comfort, and daily usability"
            sections={[
              {
                title: "Seating Position & Comfort",
                prompts: [
                  "Can you find a comfortable driving position easily?",
                  "How is the seat support for your body type and size?",
                  "Are all controls within easy reach without stretching?",
                  "How comfortable would passengers be in all seating positions?",
                  "Do the seats accommodate different body types in your household?"
                ],
                examples: [
                  "Adjust seat height, distance, backrest angle - should feel natural",
                  "Good lumbar support, thigh support, not too soft or firm for your preference",
                  "Steering wheel, gear shifter, climate controls, radio within easy reach",
                  "Sit in back seat, check headroom, legroom, comfort for typical passengers",
                  "Have other drivers in family adjust seat and test comfort/visibility"
                ]
              },
              {
                title: "Interior Space & Storage",
                prompts: [
                  "Is there adequate headroom and legroom for all occupants?",
                  "How practical are the interior storage compartments?",
                  "Can you fit your typical cargo in the trunk or cargo area?",
                  "How easy is it to get in and out of the vehicle?",
                  "Are there enough cup holders and charging ports for your needs?"
                ],
                examples: [
                  "Check front and rear headroom, legroom for tall passengers",
                  "Door pockets, center console, glove box size and placement",
                  "Test with golf clubs, stroller, groceries, weekend luggage",
                  "Consider ease for elderly passengers, kids, anyone with mobility issues",
                  "Count cup holders, USB ports, 12V outlets for devices and drinks"
                ]
              },
              {
                title: "Visibility & Ergonomics",
                prompts: [
                  "How is your visibility in all directions from the driver's seat?",
                  "Can you easily see the instrument cluster and mirrors?",
                  "Are there problematic blind spots or visibility restrictions?",
                  "How intuitive are the control locations and operation?",
                  "Can you operate key functions without taking eyes off road?"
                ],
                examples: [
                  "Check forward, side, and rear visibility including A-pillar blind spots",
                  "Instruments clear and easy to read, mirrors properly positioned",
                  "Thick pillars, high beltlines, small rear windows can limit visibility",
                  "Climate, radio, turn signals should be logically placed and easy to use",
                  "Test climate adjustment, radio volume, other common functions while 'driving'"
                ]
              },
              {
                title: "Interior Quality & Features",
                prompts: [
                  "How do the interior materials look and feel?",
                  "Are the controls and switches solid and well-built?",
                  "What interior features enhance daily usability?",
                  "How does the interior compare to other vehicles in this price range?",
                  "Are there any interior aspects that feel cheap or concerning?"
                ],
                examples: [
                  "Touch dashboard, door panels, seats - should feel appropriate for price",
                  "Buttons, knobs, switches should operate smoothly without rattling",
                  "Heated seats, power adjustments, ambient lighting, storage solutions",
                  "Compare materials, fit/finish, features to similar priced competitors",
                  "Hard plastic where you touch frequently, cheap-feeling switches, poor fit/finish"
                ]
              }
            ]}
            tips={[
              "Spend time adjusting the seat and controls to your preferences",
              "Have all regular passengers test the seating and comfort",
              "Check how your typical cargo fits in the storage areas",
              "Pay attention to build quality and materials at the price point",
              "Consider how interior features will hold up over years of use"
            ]}
          />
        </TabsContent>

        <TabsContent value="technology-features">
          <GuidedNotePage
            title="Technology & Features Testing"
            description="Evaluate infotainment, connectivity, and technology features"
            sections={[
              {
                title: "Infotainment System",
                prompts: [
                  "How intuitive is the infotainment system to navigate?",
                  "Does smartphone integration work properly with your device?",
                  "How is the audio quality and speaker system?",
                  "Can you easily adjust settings while driving safely?",
                  "Are there physical controls for key functions or only touchscreen?"
                ],
                examples: [
                  "Test menu navigation, response time, logical organization of functions",
                  "Connect your phone via Apple CarPlay/Android Auto, test functionality",
                  "Play different music types, test at various volume levels, check all speakers",
                  "Climate, volume, radio presets should be accessible without menu diving",
                  "Physical knobs/buttons for volume, climate, radio tuning preferred for safety"
                ]
              },
              {
                title: "Driver Assistance Features",
                prompts: [
                  "Which driver assistance features are included and how do they work?",
                  "Are adaptive cruise control and lane keeping easy to use?",
                  "How intrusive are safety warnings and alerts?",
                  "Can driver assistance features be customized to your preferences?",
                  "Do the features enhance safety without being annoying?"
                ],
                examples: [
                  "Test adaptive cruise, lane keeping, automatic emergency braking if equipped",
                  "Should engage smoothly, maintain appropriate following distance and lane position",
                  "Blind spot warnings, collision alerts should be noticeable but not startling",
                  "Ability to adjust sensitivity, turn off features you don't want",
                  "Features should feel helpful, not like the car is fighting your driving"
                ]
              },
              {
                title: "Connectivity & Convenience",
                prompts: [
                  "How well does Bluetooth connectivity work with your devices?",
                  "Are there enough charging ports and connectivity options?",
                  "How functional are voice commands and hands-free features?",
                  "Can you easily access navigation and traffic information?",
                  "What convenience features actually improve daily usability?"
                ],
                examples: [
                  "Test phone pairing, music streaming, call quality through car speakers",
                  "USB ports, wireless charging, 12V outlets for all your device needs",
                  "Voice commands for phone, navigation, climate should work reliably",
                  "Built-in nav vs smartphone integration, real-time traffic updates",
                  "Keyless entry/start, automatic climate, memory settings, remote start"
                ]
              },
              {
                title: "Feature Value Assessment",
                prompts: [
                  "Which technology features will you actually use regularly?",
                  "Are premium features worth the extra cost for your usage?",
                  "How likely are these features to become outdated quickly?",
                  "Do complex features have simpler backup options?",
                  "Which features enhance safety vs just convenience?"
                ],
                examples: [
                  "Identify must-have vs nice-to-have based on your daily driving habits",
                  "Premium audio, advanced nav, luxury features vs basic functionality",
                  "Smartphone integration ages better than built-in systems",
                  "Physical backup controls for critical functions when technology fails",
                  "Safety features like blind spot monitoring vs entertainment features"
                ]
              }
            ]}
            tips={[
              "Test all technology features with your actual devices and accounts",
              "Focus on features you'll use daily rather than impressive but rarely-used ones",
              "Make sure critical functions have physical controls as backup to touchscreens",
              "Consider how well features will age - smartphone integration often better than built-in",
              "Don't pay extra for features you won't actually use regularly"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}