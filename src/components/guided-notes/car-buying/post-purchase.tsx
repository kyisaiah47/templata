"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PostPurchase() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Post-Purchase Setup</h1>
        <p className="text-muted-foreground">Complete essential tasks after your car purchase.</p>
      </div>

      <Tabs defaultValue="immediate-tasks" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="immediate-tasks" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Immediate Tasks</span>
            <span className="sm:hidden">Immediate</span>
          </TabsTrigger>
          <TabsTrigger value="registration-insurance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Registration & Insurance</span>
            <span className="sm:hidden">Registration</span>
          </TabsTrigger>
          <TabsTrigger value="maintenance-setup" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Maintenance Setup</span>
            <span className="sm:hidden">Maintenance</span>
          </TabsTrigger>
          <TabsTrigger value="long-term-care" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Long-Term Care</span>
            <span className="sm:hidden">Long-Term</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="immediate-tasks">
          <GuidedNotePage
            title="Immediate Post-Purchase Tasks"
            description="Essential tasks to complete in the first few days after purchase"
            sections={[
              {
                title: "Insurance & Legal Requirements",
                prompts: [
                  "When do you need to update your insurance coverage?",
                  "What documentation should you carry in the vehicle?",
                  "How quickly must you register your new vehicle?",
                  "What temporary permits or tags do you have and when do they expire?",
                  "Are there any immediate legal requirements you must fulfill?"
                ],
                examples: [
                  "Add vehicle to policy immediately, before driving off lot if possible",
                  "Insurance card, registration, title (if applicable), emergency contact info",
                  "Usually 10-30 days depending on state, don't delay past deadline",
                  "Temporary tags usually valid 30-90 days, mark expiration date clearly",
                  "Emissions testing, safety inspection, registration may be required immediately"
                ]
              },
              {
                title: "Vehicle Familiarization",
                prompts: [
                  "What vehicle systems and controls should you learn immediately?",
                  "How do you set up and customize driver settings?",
                  "What safety features and their operation should you understand?",
                  "Where are important vehicle components located?",
                  "What emergency procedures should you know?"
                ],
                examples: [
                  "Lights, wipers, climate control, infotainment, seat/mirror adjustments",
                  "Seat memory, mirror positions, radio presets, phone pairing, climate preferences",
                  "Airbag locations, ABS operation, stability control, parking assist features",
                  "Spare tire, jack, jumper cable connections, fuse box, oil dipstick",
                  "Flat tire changing, jump starting, emergency contact numbers, roadside assistance"
                ]
              },
              {
                title: "Documentation Organization",
                prompts: [
                  "What purchase and ownership documents should you organize?",
                  "Where should you store important vehicle paperwork?",
                  "What digital copies should you create and store?",
                  "How will you track vehicle expenses and maintenance going forward?",
                  "What information should you share with family members?"
                ],
                examples: [
                  "Purchase agreement, financing docs, title, registration, insurance, warranty info",
                  "Home filing system, glove box essentials, safe deposit box for title",
                  "Photos of all documents, cloud storage, backup copies in separate location",
                  "Create spreadsheet for fuel, maintenance, repairs, insurance, registration costs",
                  "Insurance info, emergency contacts, basic vehicle operation, spare key location"
                ]
              },
              {
                title: "Security & Access Setup",
                prompts: [
                  "How many keys did you receive and do you need additional copies?",
                  "What security features should you activate or customize?",
                  "Should you update or program any access codes or settings?",
                  "How will you secure your vehicle when parked?",
                  "What anti-theft measures should you consider?"
                ],
                examples: [
                  "Should have 2 keys minimum, get copies made if only received one",
                  "Alarm system, automatic locking, remote start (if equipped), immobilizer",
                  "Keyless entry codes, garage door programming, phone app setup",
                  "Park in secure areas, lock doors, hide valuables, remove GPS/phone mounts",
                  "Club/wheel lock, GPS tracking, comprehensive insurance, secure parking"
                ]
              }
            ]}
            tips={[
              "Complete insurance and registration requirements immediately to avoid legal issues",
              "Take time to thoroughly read owner's manual and understand all features",
              "Create organized filing system for all vehicle-related documents",
              "Make sure family members know basic vehicle operation and emergency procedures",
              "Set up expense tracking system from day one to monitor ownership costs"
            ]}
          />
        </TabsContent>

        <TabsContent value="registration-insurance">
          <GuidedNotePage
            title="Registration & Insurance Completion"
            description="Complete all legal requirements for vehicle ownership"
            sections={[
              {
                title: "Vehicle Registration Process",
                prompts: [
                  "What specific steps are required to register your vehicle?",
                  "What documents and fees will you need for registration?",
                  "Where and when should you complete registration?",
                  "Are there inspection or emissions requirements?",
                  "How do you handle registration if moving between states?"
                ],
                examples: [
                  "Visit DMV with required docs, complete application, pay fees, receive plates/registration",
                  "Title, bill of sale, insurance proof, ID, inspection certificates, payment",
                  "DMV office, online if available, within state deadline (usually 30 days)",
                  "Safety inspection, emissions testing - varies by location and vehicle age",
                  "Register in new state, may need new inspection, title transfer requirements"
                ]
              },
              {
                title: "License Plates & Tags",
                prompts: [
                  "How do you obtain permanent license plates?",
                  "Can you transfer plates from your previous vehicle?",
                  "What specialty or personalized plate options interest you?",
                  "How do you properly display and secure license plates?",
                  "What happens to temporary tags once permanent plates arrive?"
                ],
                examples: [
                  "Issued at registration or mailed within few weeks, DMV provides instructions",
                  "Usually yes if same vehicle type, saves money and time",
                  "Personalized plates, organizational plates, special designs cost extra but available",
                  "Front and rear plates where required, secure mounting, clean and visible",
                  "Remove and dispose of temporary tags properly, keep for records if needed"
                ]
              },
              {
                title: "Insurance Policy Finalization",
                prompts: [
                  "What final insurance policy details need confirmation?",
                  "How do you ensure all coverage limits are appropriate?",
                  "What additional drivers or family members need to be added?",
                  "Are there any policy discounts you haven't claimed yet?",
                  "How will you handle insurance payments and billing?"
                ],
                examples: [
                  "Coverage amounts, deductibles, additional drivers, vehicle information accuracy",
                  "Liability limits adequate for assets, comprehensive/collision appropriate for vehicle value",
                  "All household members who may drive, correct ages and driving records",
                  "Multi-car, homeowner, good driver, safety feature discounts",
                  "Set up automatic payments, understand billing cycle, know grace period"
                ]
              },
              {
                title: "Lender Requirements",
                prompts: [
                  "What insurance requirements must you meet for your loan?",
                  "How do you ensure lender is properly listed on insurance policy?",
                  "What happens if insurance lapses or coverage changes?",
                  "Are there additional lender requirements for GAP insurance?",
                  "How do you handle insurance claims when vehicle is financed?"
                ],
                examples: [
                  "Full coverage required, minimum liability limits, comprehensive and collision mandatory",
                  "Lender listed as loss payee or additional insured, provide proof to lender",
                  "Lender may purchase expensive coverage and charge you, maintain continuous coverage",
                  "May require GAP insurance, especially with small down payment or long loan term",
                  "Insurance check may go to lender, who releases funds after repair completion"
                ]
              }
            ]}
            tips={[
              "Don't delay registration - penalties and legal issues can result from late registration",
              "Keep insurance current and inform lender immediately of any changes",
              "Take advantage of all available discounts to reduce insurance costs",
              "Understand your state's specific requirements - they vary significantly",
              "Keep copies of all registration and insurance documents in vehicle and at home"
            ]}
          />
        </TabsContent>

        <TabsContent value="maintenance-setup">
          <GuidedNotePage
            title="Maintenance System Setup"
            description="Establish maintenance routines and service relationships"
            sections={[
              {
                title: "Service Provider Selection",
                prompts: [
                  "Should you use dealership service or independent shops?",
                  "How do you find reputable service providers in your area?",
                  "What factors should influence your service provider choice?",
                  "Are there warranty considerations for service location?",
                  "How do you establish relationship with chosen service provider?"
                ],
                examples: [
                  "Dealer for warranty work, independent often cheaper for routine maintenance",
                  "Online reviews, recommendations, Better Business Bureau ratings, personal referrals",
                  "Reputation, convenience, price, specialization, quality of work, customer service",
                  "Warranty work requires authorized service, routine maintenance can be done anywhere",
                  "Introduce yourself, explain your vehicle and needs, establish service history"
                ]
              },
              {
                title: "Maintenance Schedule Planning",
                prompts: [
                  "What does your vehicle's recommended maintenance schedule include?",
                  "How will you track and remember upcoming maintenance needs?",
                  "What seasonal maintenance considerations apply to your area?",
                  "Should you follow severe or normal maintenance schedules?",
                  "How do you budget for ongoing maintenance costs?"
                ],
                examples: [
                  "Oil changes, tire rotations, inspections, fluid changes, filter replacements per owner's manual",
                  "Calendar reminders, mileage tracking, service apps, stickers, maintenance log",
                  "Winter tire changes, air conditioning service, battery checks, coolant service",
                  "Severe conditions: short trips, extreme temperatures, dusty conditions, towing",
                  "Set aside $100-200 monthly for routine maintenance and repairs"
                ]
              },
              {
                title: "Initial Maintenance Tasks",
                prompts: [
                  "What immediate maintenance should you perform or schedule?",
                  "Are there any recalls or service bulletins for your vehicle?",
                  "What fluid levels and systems should you check regularly?",
                  "Should you perform any initial modifications or additions?",
                  "How do you establish baseline condition for future reference?"
                ],
                examples: [
                  "Oil change if needed, tire pressure check, fluid top-offs, air filter inspection",
                  "Check NHTSA database, manufacturer website, dealer service bulletins",
                  "Engine oil, coolant, brake fluid, windshield washer, tire pressure monthly",
                  "Floor mats, window tinting, paint protection, cargo accessories as desired",
                  "Photos of condition, mileage documentation, initial inspection record"
                ]
              },
              {
                title: "Record Keeping System",
                prompts: [
                  "How will you maintain comprehensive maintenance records?",
                  "What information should you track for each service?",
                  "Where should you store service receipts and documentation?",
                  "How do detailed records help with warranty and resale?",
                  "What digital tools can help with maintenance tracking?"
                ],
                examples: [
                  "Service log, receipt filing system, digital photos, mileage tracking",
                  "Date, mileage, service performed, parts used, cost, service provider, next due dates",
                  "Physical folder, digital scans, cloud storage, vehicle glove box copies",
                  "Warranty claims easier, resale value higher with complete service history",
                  "Car maintenance apps, spreadsheets, cloud storage, service provider apps"
                ]
              }
            ]}
            tips={[
              "Read your owner's manual thoroughly to understand maintenance requirements",
              "Establish relationship with trusted service provider early",
              "Keep detailed maintenance records from day one",
              "Budget for maintenance costs as part of ownership expenses",
              "Don't skip recommended maintenance - it prevents bigger problems later"
            ]}
          />
        </TabsContent>

        <TabsContent value="long-term-care">
          <GuidedNotePage
            title="Long-Term Vehicle Care"
            description="Plan for long-term ownership and vehicle preservation"
            sections={[
              {
                title: "Ownership Goals & Timeline",
                prompts: [
                  "How long do you plan to keep this vehicle?",
                  "What are your goals for vehicle condition and value retention?",
                  "How will your needs change over your ownership period?",
                  "Should you plan for major repairs or replacements?",
                  "What factors might influence when you replace this vehicle?"
                ],
                examples: [
                  "3-5 years for regular updates, 7-10+ years for maximum value, until major repairs needed",
                  "Maintain like-new condition, basic transportation, or maximum economic value",
                  "Family size changes, lifestyle changes, driving pattern changes, technology updates",
                  "Budget for major services: timing belt, transmission service, brake replacement",
                  "New technology, safety features, major repairs, lifestyle changes, financial changes"
                ]
              },
              {
                title: "Vehicle Preservation Strategies",
                prompts: [
                  "What steps will you take to preserve vehicle appearance?",
                  "How will you protect against common damage and wear?",
                  "What storage or parking considerations affect vehicle condition?",
                  "Should you invest in paint protection or interior preservation?",
                  "How do you balance preservation efforts with practical daily use?"
                ],
                examples: [
                  "Regular washing, waxing, interior cleaning, prompt repair of minor damage",
                  "Floor mats, seat covers, window tinting, paint chips repair, rust prevention",
                  "Garage parking ideal, covered parking helpful, avoid extreme weather exposure",
                  "Paint protection film, ceramic coating, fabric protection worth it for some",
                  "Reasonable care without obsessing, enjoy the vehicle while maintaining it well"
                ]
              },
              {
                title: "Financial Planning",
                prompts: [
                  "How will you budget for ongoing ownership costs?",
                  "What major expenses should you anticipate and when?",
                  "Should you set aside money for unexpected repairs?",
                  "How will depreciation affect your financial planning?",
                  "When might it make sense to trade in vs continue ownership?"
                ],
                examples: [
                  "Monthly budget for gas, insurance, maintenance, repairs, registration",
                  "Tires every 40-60k miles, major services, battery replacement, brake service",
                  "Emergency fund for repairs, or extended warranty if preferred",
                  "Vehicle loses value over time, factor into net worth calculations",
                  "When repair costs exceed monthly payment on newer vehicle, or safety/reliability concerns"
                ]
              },
              {
                title: "Technology & Updates",
                prompts: [
                  "How will you handle technology updates and obsolescence?",
                  "What aftermarket additions might enhance your ownership experience?",
                  "Should you plan for software updates or system upgrades?",
                  "How do you balance new technology desires with vehicle preservation?",
                  "What technology changes might affect your vehicle's utility over time?"
                ],
                examples: [
                  "Infotainment may become outdated, smartphone integration usually stays current",
                  "Dash cams, upgraded audio, navigation, remote start, security systems",
                  "Manufacturer may offer updates, aftermarket solutions for older systems",
                  "Minor updates okay, major modifications may affect reliability and value",
                  "Autonomous features, electric charging, connectivity standards may change significantly"
                ]
              }
            ]}
            tips={[
              "Set realistic expectations for how long you'll keep the vehicle",
              "Budget for maintenance and repairs as part of ownership costs",
              "Take good care of the vehicle but don't let preservation efforts overwhelm enjoyment",
              "Plan ahead for major maintenance items and replacement timeline",
              "Keep good records throughout ownership for warranty, service, and resale purposes"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}