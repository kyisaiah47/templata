"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PrePurchaseInspection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pre-Purchase Inspection</h1>
        <p className="text-muted-foreground">Thoroughly inspect vehicles before purchase to avoid costly problems.</p>
      </div>

      <Tabs defaultValue="visual-inspection" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="visual-inspection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Visual Inspection</span>
            <span className="sm:hidden">Visual</span>
          </TabsTrigger>
          <TabsTrigger value="mechanical-check" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Mechanical Check</span>
            <span className="sm:hidden">Mechanical</span>
          </TabsTrigger>
          <TabsTrigger value="professional-inspection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Professional Inspection</span>
            <span className="sm:hidden">Pro</span>
          </TabsTrigger>
          <TabsTrigger value="documentation-review" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Documentation Review</span>
            <span className="sm:hidden">Docs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visual-inspection">
          <GuidedNotePage
            title="Visual Inspection Checklist"
            description="Perform comprehensive visual inspection of exterior and interior"
            sections={[
              {
                title: "Exterior Body Inspection",
                prompts: [
                  "What should you look for when examining the vehicle's paint and body?",
                  "How do you identify signs of accident damage or repairs?",
                  "What panel gap and alignment issues indicate problems?",
                  "How do you spot rust, corrosion, or other body deterioration?",
                  "What exterior trim and accessory issues should concern you?"
                ],
                examples: [
                  "Color matching, paint chips, scratches, dents, fade patterns, texture differences",
                  "Mismatched paint, ripples in metal, overspray, new parts on old car",
                  "Uneven gaps between panels, doors that don't close flush, hood/trunk alignment",
                  "Rust bubbles under paint, corrosion around wheel wells, door frames, trim",
                  "Missing trim pieces, damaged bumpers, cracked lights, worn weatherstripping"
                ]
              },
              {
                title: "Tire & Wheel Assessment",
                prompts: [
                  "What tire wear patterns indicate potential problems?",
                  "How do you assess remaining tire life and replacement needs?",
                  "What wheel and rim condition issues should you note?",
                  "Are all tires the same brand, type, and appropriate size?",
                  "What do tire pressure and general condition tell you about maintenance?"
                ],
                examples: [
                  "Even wear normal, edge wear suggests alignment issues, cupping indicates suspension problems",
                  "Tread depth measurement, cracking, age of tires (check date codes)",
                  "Curb damage, corrosion, bent rims, missing center caps or lug nuts",
                  "Mismatched tires suggest repairs or poor maintenance, check size matches door sticker",
                  "Proper inflation suggests good maintenance, very low/high suggests neglect"
                ]
              },
              {
                title: "Interior Condition Evaluation",
                prompts: [
                  "What interior wear patterns are normal vs concerning?",
                  "How do you assess seat condition and functionality?",
                  "What electronic and control functionality should you test?",
                  "Are there signs of damage from smoking, pets, or flooding?",
                  "How do you evaluate interior cleanliness and maintenance?"
                ],
                examples: [
                  "Normal wear on high-touch areas, excessive wear suggests high mileage or abuse",
                  "Tears, sagging, stains, all adjustments work, heating/cooling if equipped",
                  "All lights, switches, controls, infotainment, climate control, power accessories",
                  "Smoke smell, pet hair/odors, water damage, musty smells, water stains",
                  "Overall cleanliness suggests owner care, excessive dirt/stains concerning"
                ]
              },
              {
                title: "Lights & Electrical Systems",
                prompts: [
                  "Which lights and electrical systems should you test?",
                  "How do you check that all warning lights function properly?",
                  "What charging system and battery condition signs should you note?",
                  "Are there aftermarket electrical modifications to be concerned about?",
                  "What interior electrical accessories should you verify work?"
                ],
                examples: [
                  "Headlights, taillights, brake lights, turn signals, hazards, interior lights",
                  "Turn key to 'on' - warning lights should illuminate then go off when running",
                  "Battery terminals clean/tight, alternator charging properly, no electrical smells",
                  "Aftermarket stereos, alarms, remote starters may cause problems",
                  "Power windows, locks, seats, mirrors, charging ports, infotainment system"
                ]
              }
            ]}
            tips={[
              "Inspect in good lighting conditions, preferably daylight",
              "Walk around the vehicle multiple times from different angles",
              "Don't be afraid to get down and look under the vehicle",
              "Take photos of any issues you discover for reference",
              "Minor cosmetic issues are normal, but major damage is concerning"
            ]}
          />
        </TabsContent>

        <TabsContent value="mechanical-check">
          <GuidedNotePage
            title="Basic Mechanical Inspection"
            description="Check key mechanical systems and components"
            sections={[
              {
                title: "Engine Bay Inspection",
                prompts: [
                  "What should you look for when examining the engine bay?",
                  "How do you check fluid levels and condition?",
                  "What signs indicate engine problems or poor maintenance?",
                  "Are there leaks, unusual wear, or damaged components?",
                  "What aftermarket modifications might affect reliability?"
                ],
                examples: [
                  "General cleanliness, corrosion, worn belts/hoses, fluid leaks, unusual noises",
                  "Oil level/color, coolant level/color, brake fluid, power steering fluid",
                  "Oil sludge, milky fluids, corrosion, excessive wear on belts/hoses",
                  "Oil leaks on engine/ground, coolant leaks, power steering leaks, fuel smells",
                  "Cold air intakes, exhaust modifications, engine tuning may void warranties"
                ]
              },
              {
                title: "Suspension & Steering Check",
                prompts: [
                  "How do you test suspension components for wear?",
                  "What steering system issues can you identify visually?",
                  "Are there signs of alignment problems or uneven wear?",
                  "What noises or handling issues suggest suspension problems?",
                  "How do you check shock absorbers and struts?"
                ],
                examples: [
                  "Push down on corners - should bounce once and stop, not continue bouncing",
                  "Power steering fluid leaks, worn steering components, loose connections",
                  "Tire wear patterns, vehicle pulling to one side, steering wheel off-center",
                  "Clunking over bumps, squealing when turning, excessive body roll",
                  "Leaking shocks/struts, uneven vehicle height, excessive bounce"
                ]
              },
              {
                title: "Brake System Assessment",
                prompts: [
                  "What brake system components can you inspect visually?",
                  "How do you assess brake pad and rotor condition?",
                  "What brake fluid condition and level should you check?",
                  "Are there signs of brake system leaks or problems?",
                  "What brake pedal feel and function should you test?"
                ],
                examples: [
                  "Look through wheel spokes at brake pads, rotors, calipers, brake lines",
                  "Pad thickness visible, rotor surface condition, scoring or warping",
                  "Brake fluid should be clear, not dark/contaminated, reservoir full",
                  "Brake fluid leaks at wheels, lines, master cylinder, brake pedal spongy",
                  "Pedal should feel firm, not sink to floor, brakes should engage smoothly"
                ]
              },
              {
                title: "Exhaust & Emissions Systems",
                prompts: [
                  "What exhaust system condition should you evaluate?",
                  "How do you check for exhaust leaks or damage?",
                  "Are there signs of catalytic converter or emissions problems?",
                  "What exhaust smoke or odors indicate engine issues?",
                  "Are there aftermarket exhaust modifications?"
                ],
                examples: [
                  "Look for rust, holes, loose connections, damaged hangers throughout system",
                  "Listen for unusual exhaust noise, look for black soot around connections",
                  "Check engine light, excessive emissions, rattling from catalytic converter",
                  "Blue smoke (oil burning), white smoke (coolant), black smoke (rich fuel)",
                  "Aftermarket exhausts may be louder, affect emissions compliance"
                ]
              }
            ]}
            tips={[
              "Don't attempt complex mechanical inspection unless you're knowledgeable",
              "Focus on obvious signs of problems rather than detailed diagnosis",
              "Ask seller about any known mechanical issues or recent repairs",
              "Consider bringing a knowledgeable friend for mechanical assessment",
              "When in doubt, invest in professional inspection for expensive vehicles"
            ]}
          />
        </TabsContent>

        <TabsContent value="professional-inspection">
          <GuidedNotePage
            title="Professional Inspection Services"
            description="When and how to use professional pre-purchase inspections"
            sections={[
              {
                title: "When to Get Professional Inspection",
                prompts: [
                  "Which vehicles warrant professional pre-purchase inspection?",
                  "How do you decide if inspection cost is justified?",
                  "What are the benefits of professional vs self-inspection?",
                  "Should you get inspection for certified pre-owned vehicles?",
                  "What situations absolutely require professional inspection?"
                ],
                examples: [
                  "Expensive vehicles, luxury cars, high-mileage cars, vehicles with known issues",
                  "If inspection cost is small percentage of purchase price and potential repair costs",
                  "Professional training, proper tools, comprehensive checklist, liability coverage",
                  "Maybe not essential but still valuable for complete peace of mind",
                  "Suspected flood damage, major accident history, unusual modifications, rare vehicles"
                ]
              },
              {
                title: "Choosing Inspection Services",
                prompts: [
                  "How do you find qualified pre-purchase inspection services?",
                  "What qualifications and certifications should inspectors have?",
                  "Should you use dealer service departments or independent shops?",
                  "What should a comprehensive inspection include?",
                  "How much should professional inspection cost?"
                ],
                examples: [
                  "ASE-certified mechanics, mobile inspection services, independent shops, AAA services",
                  "ASE certifications, specific brand experience, good local reputation",
                  "Independent shops often more objective, dealer service departments more thorough brand knowledge",
                  "All major systems, road test, written report with photos, cost estimates for needed repairs",
                  "Usually $100-300 depending on vehicle type and inspection comprehensiveness"
                ]
              },
              {
                title: "Inspection Process Management",
                prompts: [
                  "How do you arrange inspection with seller and inspector?",
                  "What should you expect during the inspection process?",
                  "How long should comprehensive inspection take?",
                  "Should you be present during the inspection?",
                  "What if seller refuses to allow professional inspection?"
                ],
                examples: [
                  "Schedule convenient time, confirm inspector can access vehicle fully, arrange payment",
                  "Thorough examination of all systems, road test, written report with findings",
                  "Usually 2-4 hours for comprehensive inspection depending on vehicle complexity",
                  "Yes, if possible - ask questions and learn about any issues found",
                  "Big red flag - consider walking away or insist on inspection contingency"
                ]
              },
              {
                title: "Using Inspection Results",
                prompts: [
                  "How do you interpret professional inspection reports?",
                  "Which findings should affect your purchase decision?",
                  "Can you use inspection results to negotiate price?",
                  "What repair cost estimates should you get?",
                  "When should inspection results make you walk away?"
                ],
                examples: [
                  "Understand immediate vs future repairs, safety vs maintenance issues, cost implications",
                  "Safety issues, major repairs needed soon, expensive system failures",
                  "Yes, use repair cost estimates to negotiate lower purchase price",
                  "Get multiple estimates for major repairs identified in inspection",
                  "Major safety issues, expensive repairs exceeding vehicle value, flood/accident damage"
                ]
              }
            ]}
            tips={[
              "Professional inspection is worth the cost for expensive or questionable vehicles",
              "Choose certified, reputable inspectors with experience in your vehicle type",
              "Be present during inspection to ask questions and understand findings",
              "Use inspection results to negotiate price or walk away from bad deals",
              "Don't skip inspection to save money on vehicles where it's warranted"
            ]}
          />
        </TabsContent>

        <TabsContent value="documentation-review">
          <GuidedNotePage
            title="Documentation & History Review"
            description="Review vehicle history and maintenance documentation"
            sections={[
              {
                title: "Vehicle History Reports",
                prompts: [
                  "What information do vehicle history reports provide?",
                  "Which vehicle history services should you use?",
                  "How do you interpret accident and damage history?",
                  "What red flags in vehicle history should concern you?",
                  "Are there limitations to what history reports show?"
                ],
                examples: [
                  "Accident history, title issues, service records, ownership history, mileage verification",
                  "Carfax, AutoCheck, provide VIN to get reports from multiple sources",
                  "Understand severity of accidents, structural damage more serious than cosmetic",
                  "Multiple accidents, flood damage, lemon titles, odometer rollbacks, many owners",
                  "Not all accidents reported, recent damage may not appear, incomplete service records"
                ]
              },
              {
                title: "Maintenance Records Review",
                prompts: [
                  "What maintenance documentation should you request?",
                  "How do you evaluate maintenance history completeness?",
                  "What maintenance gaps or issues should concern you?",
                  "Are dealer service records better than independent shop records?",
                  "How do you verify mileage consistency in service records?"
                ],
                examples: [
                  "Service receipts, oil change records, major repair documentation, recall completion",
                  "Regular oil changes, scheduled maintenance, consistent service intervals",
                  "Missed oil changes, deferred maintenance, signs of neglect or abuse",
                  "Dealer records often more complete, but good independent shops fine too",
                  "Check mileage progression makes sense, watch for potential odometer tampering"
                ]
              },
              {
                title: "Title & Ownership Verification",
                prompts: [
                  "What should you verify about the vehicle title?",
                  "How do you confirm the seller owns the vehicle legally?",
                  "What title issues or designations should you avoid?",
                  "Are there liens or financial obligations on the vehicle?",
                  "What happens if title has problems or discrepancies?"
                ],
                examples: [
                  "Clean title, correct VIN, current owner name, no alterations or corrections",
                  "Seller name matches title, ID verification, power of attorney if applicable",
                  "Salvage, flood, lemon, rebuilt titles significantly affect value and insurability",
                  "Outstanding loans must be paid off, lien releases required",
                  "Title problems must be resolved before purchase, can be complex and expensive"
                ]
              },
              {
                title: "Recall & Safety Information",
                prompts: [
                  "How do you check for outstanding recalls on the vehicle?",
                  "What safety recalls should be completed before purchase?",
                  "Are there known issues or problems with this model?",
                  "Should recalls affect your purchase decision?",
                  "How do you verify recall work has been completed?"
                ],
                examples: [
                  "Check NHTSA recall database using VIN, manufacturer websites, dealer service records",
                  "Safety-related recalls should be completed, non-safety recalls less critical",
                  "Research model-specific problems on forums, consumer reports, technical service bulletins",
                  "Serious safety recalls yes, minor recalls usually not deal-breakers",
                  "Ask for documentation of recall completion, verify with dealer service department"
                ]
              }
            ]}
            tips={[
              "Always get vehicle history report before serious consideration",
              "Review all available maintenance records for completeness and consistency",
              "Verify title is clean and seller is legal owner",
              "Check for outstanding recalls and ensure safety recalls are completed",
              "Don't rely solely on seller's word - verify all claims independently"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}