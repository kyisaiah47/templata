"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CarResearch() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Car Research & Selection</h1>
        <p className="text-muted-foreground">Research and compare different vehicles to find your perfect match.</p>
      </div>

      <Tabs defaultValue="needs-assessment" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="needs-assessment" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Needs Assessment</span>
            <span className="sm:hidden">Needs</span>
          </TabsTrigger>
          <TabsTrigger value="model-comparison" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Model Comparison</span>
            <span className="sm:hidden">Compare</span>
          </TabsTrigger>
          <TabsTrigger value="reliability-safety" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Reliability & Safety</span>
            <span className="sm:hidden">Safety</span>
          </TabsTrigger>
          <TabsTrigger value="features-options" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Features & Options</span>
            <span className="sm:hidden">Features</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="needs-assessment">
          <GuidedNotePage
            title="Vehicle Needs Assessment"
            description="Define your transportation requirements and preferences"
            sections={[
              {
                title: "Primary Use & Lifestyle",
                prompts: [
                  "What will be your primary use for this vehicle?",
                  "How many people do you need to transport regularly?",
                  "What type of driving do you do most often?",
                  "Do you have specific cargo or towing requirements?",
                  "How important is fuel efficiency vs performance?"
                ],
                examples: [
                  "Daily commuting, weekend trips, family hauling, work transportation",
                  "Solo driver, couple, family of 4, need 7+ seats for large family",
                  "City driving, highway commuting, mixed driving, off-road/rural",
                  "Sports equipment, work tools, boat/trailer towing, moving furniture",
                  "Prioritize MPG for long commutes vs acceleration for highway merging"
                ]
              },
              {
                title: "Size & Body Style Preferences",
                prompts: [
                  "What vehicle size best fits your needs?",
                  "Which body styles are you considering?",
                  "Do you need SUV capability or would sedan/hatchback work?",
                  "How important is ease of parking and maneuverability?",
                  "Do you prefer higher seating position or lower, sporty feel?"
                ],
                examples: [
                  "Compact for city parking, midsize for balance, full-size for space/towing",
                  "Sedan, SUV, hatchback, truck, minivan, coupe, wagon",
                  "SUV for weather/cargo, sedan for fuel economy and handling",
                  "City dwellers may prefer compact, suburban drivers can handle larger",
                  "SUV for visibility and easier entry/exit, sedan for sportier driving"
                ]
              },
              {
                title: "Budget & Value Priorities",
                prompts: [
                  "What's most important: lowest purchase price or best value?",
                  "How long do you plan to keep this vehicle?",
                  "Do you prioritize low maintenance costs or luxury features?",
                  "Are you willing to pay more for better fuel economy?",
                  "Should resale value be a major consideration?"
                ],
                examples: [
                  "Cheapest car that meets needs vs best long-term ownership experience",
                  "3-5 years means prioritize reliability, 7+ years means prioritize durability",
                  "Basic reliable transportation vs comfort and convenience features",
                  "Calculate fuel savings over ownership period vs higher upfront cost",
                  "Important if you trade frequently, less so if you drive cars into ground"
                ]
              },
              {
                title: "Must-Have vs Nice-to-Have Features",
                prompts: [
                  "What safety features are absolutely required?",
                  "What comfort and convenience features matter most?",
                  "Do you need specific technology or connectivity features?",
                  "Are there any deal-breaker features or characteristics?",
                  "What features can you live without to save money?"
                ],
                examples: [
                  "Backup camera, blind spot monitoring, automatic emergency braking",
                  "Climate control, heated seats, power driver's seat, keyless entry",
                  "Apple CarPlay/Android Auto, built-in navigation, premium audio",
                  "Avoid: CVT transmission, sunroof (reliability), or specific colors",
                  "Leather vs cloth seats, premium audio, advanced driver assists"
                ]
              }
            ]}
            tips={[
              "Be honest about your actual needs vs wants to avoid overspending",
              "Consider your driving patterns over a full year, including seasonal needs",
              "Think about how your needs might change in the next few years",
              "Test drive different body styles to confirm your preferences",
              "Make a ranked list of priorities to guide your research and decisions"
            ]}
          />
        </TabsContent>

        <TabsContent value="model-comparison">
          <GuidedNotePage
            title="Model Comparison & Research"
            description="Compare specific vehicles and narrow down your choices"
            sections={[
              {
                title: "Initial Research Sources",
                prompts: [
                  "What online resources will you use for vehicle research?",
                  "How will you create a comparison list of potential vehicles?",
                  "What factors will you compare across different models?",
                  "Should you focus on specific model years or generations?",
                  "How will you track and organize your research findings?"
                ],
                examples: [
                  "Edmunds, KBB, Car and Driver, Consumer Reports, manufacturer websites",
                  "Start with 6-8 models, narrow to 3-4 favorites based on key criteria",
                  "Price, fuel economy, reliability, safety ratings, features, cargo space",
                  "Current generation for latest features, previous generation for value",
                  "Spreadsheet with models, key specs, pros/cons, and personal ratings"
                ]
              },
              {
                title: "Specification Comparison",
                prompts: [
                  "How do engine options and performance compare across models?",
                  "What are the fuel economy differences and real-world implications?",
                  "How do interior space and cargo capacity compare?",
                  "Which models offer the best feature-to-price ratio?",
                  "Are there significant differences in warranty coverage?"
                ],
                examples: [
                  "Horsepower, torque, acceleration times, towing capacity if needed",
                  "EPA ratings vs real-world MPG, cost difference over years of ownership",
                  "Front/rear seat room, headroom, cargo volume, rear seat folding",
                  "Compare similarly equipped trim levels, not base vs loaded models",
                  "Basic 3/36k vs extended 10/100k powertrain, roadside assistance included"
                ]
              },
              {
                title: "Trim Level Analysis",
                prompts: [
                  "Which trim level offers the best value for your needs?",
                  "What features are standard vs optional across trim levels?",
                  "Are higher trims worth the extra cost for your priorities?",
                  "Which options can be added later vs must be ordered from factory?",
                  "How do trim levels affect resale value?"
                ],
                examples: [
                  "Base may lack key features, top trim may have unnecessary luxury",
                  "Safety features often standard on higher trims, optional on lower",
                  "Calculate cost per feature to identify best value trim level",
                  "Sunroof, premium audio often factory-only; aftermarket electronics possible",
                  "Mid-level trims often best resale, base trims harder to sell"
                ]
              },
              {
                title: "Expert Reviews & Owner Feedback",
                prompts: [
                  "What do professional automotive reviews say about your top choices?",
                  "How do actual owner reviews compare to professional opinions?",
                  "What common complaints or issues do owners report?",
                  "Are there model years to avoid or particularly recommended years?",
                  "How does long-term owner satisfaction compare across your choices?"
                ],
                examples: [
                  "Read multiple professional reviews focusing on real-world testing",
                  "Owner reviews often mention daily usability issues professionals miss",
                  "Check forums, Reddit, owner surveys for recurring problems",
                  "First model year often has issues, mid-cycle updates usually best",
                  "Look for 3-5 year owner reviews, not just first-year honeymoon period"
                ]
              }
            ]}
            tips={[
              "Don't rely on just one source - cross-reference multiple reviews and data",
              "Focus on how differences affect your specific needs and priorities",
              "Consider certified pre-owned for luxury features at lower cost",
              "Look beyond specifications - real-world usability matters more",
              "Create a scoring system to objectively compare your top 3-4 choices"
            ]}
          />
        </TabsContent>

        <TabsContent value="reliability-safety">
          <GuidedNotePage
            title="Reliability & Safety Research"
            description="Evaluate long-term dependability and safety performance"
            sections={[
              {
                title: "Reliability Data & Ratings",
                prompts: [
                  "What reliability ratings do your top choices have?",
                  "How do different model years compare for reliability?",
                  "What are the most common problems reported by owners?",
                  "How do repair costs and parts availability compare?",
                  "What does the manufacturer's track record suggest about reliability?"
                ],
                examples: [
                  "J.D. Power, Consumer Reports reliability ratings (5-year data preferred)",
                  "Avoid first year of new generation, look for mid-cycle improvements",
                  "Transmission, electronics, engine issues most expensive to fix",
                  "Luxury brands often cost more for parts, imports may have delays",
                  "Toyota/Lexus generally top-rated, some domestic brands improving significantly"
                ]
              },
              {
                title: "Safety Ratings & Features",
                prompts: [
                  "What are the IIHS and NHTSA safety ratings for your choices?",
                  "Which active safety features are standard vs optional?",
                  "How do crash test results compare across your top models?",
                  "Are there any safety concerns or recalls to be aware of?",
                  "What safety features are most important for your situation?"
                ],
                examples: [
                  "Look for Top Safety Pick awards, 5-star overall ratings",
                  "Automatic emergency braking, blind spot monitoring, lane keeping assist",
                  "Focus on specific crash tests relevant to your concerns (side impact, etc.)",
                  "Check NHTSA recall database, see how quickly manufacturer responds",
                  "Families prioritize child seat compatibility, seniors may want easier entry/exit"
                ]
              },
              {
                title: "Long-Term Ownership Costs",
                prompts: [
                  "What are typical maintenance schedules and costs for your choices?",
                  "How do different powertrains affect long-term reliability?",
                  "What major repairs commonly occur and when?",
                  "Are there extended warranty options worth considering?",
                  "How do depreciation rates compare across your top choices?"
                ],
                examples: [
                  "Luxury brands often require premium oil, more frequent service",
                  "CVT transmissions may be less reliable than traditional automatics",
                  "Timing belt at 100k miles, transmission service, major engine repairs",
                  "May be worth it for complex luxury cars, usually not for reliable brands",
                  "Luxury cars depreciate fastest, reliable mainstream brands hold value best"
                ]
              },
              {
                title: "Owner Experience Research",
                prompts: [
                  "What do long-term owners say about living with these vehicles?",
                  "How is the dealership service experience for each brand?",
                  "Are there owner clubs or forums you can join for insights?",
                  "What would current owners do differently if buying again?",
                  "How satisfied are owners after 3-5 years of ownership?"
                ],
                examples: [
                  "Look for 50k+ mile owner reviews, not just new car impressions",
                  "Service quality varies by dealer, but brand trends exist",
                  "Reddit, brand-specific forums, Facebook groups for real owner experiences",
                  "Common regrets: not getting enough options, getting too many options",
                  "Long-term satisfaction surveys more valuable than initial reviews"
                ]
              }
            ]}
            tips={[
              "Prioritize models with strong long-term reliability records",
              "Don't assume newer is always better - proven models often more reliable",
              "Factor in local dealer service quality for your ownership experience",
              "Consider how safety technology will age - some becomes outdated quickly",
              "Balance reliability with features you actually need and will use"
            ]}
          />
        </TabsContent>

        <TabsContent value="features-options">
          <GuidedNotePage
            title="Features & Options Selection"
            description="Choose the right features and avoid unnecessary options"
            sections={[
              {
                title: "Essential Technology Features",
                prompts: [
                  "Which connectivity features are must-haves for your lifestyle?",
                  "How important are advanced driver assistance systems?",
                  "What infotainment features do you use most in your current car?",
                  "Should you prioritize built-in features or smartphone integration?",
                  "How quickly do technology features become outdated?"
                ],
                examples: [
                  "Apple CarPlay/Android Auto for seamless phone integration",
                  "Adaptive cruise control, lane centering for highway driving",
                  "Bluetooth, USB ports, voice commands, navigation vs using phone",
                  "Built-in nav gets outdated, phone integration stays current",
                  "Basic connectivity lasts longer than complex infotainment systems"
                ]
              },
              {
                title: "Comfort & Convenience Options",
                prompts: [
                  "Which comfort features matter most for your daily driving?",
                  "Are luxury features worth the cost for your usage patterns?",
                  "What convenience features actually save time or improve experience?",
                  "Should you prioritize interior quality over exterior appearance?",
                  "Which features can be added aftermarket vs must be factory-installed?"
                ],
                examples: [
                  "Climate control, heated seats for cold climates, lumbar support for long drives",
                  "Leather, premium audio worth it if you spend hours daily in car",
                  "Keyless entry/start, power tailgate, memory seats for multiple drivers",
                  "Interior quality affects daily experience more than exterior styling",
                  "Remote start, dash cams can be added; sunroof, premium audio typically factory-only"
                ]
              },
              {
                title: "Performance & Efficiency Options",
                prompts: [
                  "Which engine option provides the best balance for your needs?",
                  "Is all-wheel drive worth the cost and fuel economy penalty?",
                  "How do different transmission options affect your driving experience?",
                  "What performance features enhance safety vs just fun?",
                  "Should you prioritize proven technology or newest efficiency features?"
                ],
                examples: [
                  "Base engine sufficient for most, turbo for highway merging/towing",
                  "AWD helpful in snow but adds cost, weight, complexity, reduces MPG",
                  "CVT for fuel economy but less engaging, traditional auto more reliable",
                  "Good brakes, stability control improve safety; sport suspension mainly fun",
                  "Hybrid technology now mature, but adds complexity and potential repair costs"
                ]
              },
              {
                title: "Value-Oriented Feature Selection",
                prompts: [
                  "Which options provide the best return on investment?",
                  "What features significantly improve resale value?",
                  "Are there packages that bundle must-have features efficiently?",
                  "Which options should you skip to stay within budget?",
                  "How do options affect insurance costs and ownership expenses?"
                ],
                examples: [
                  "Safety features, popular options like sunroof, premium paint colors",
                  "AWD, navigation, leather seats typically help resale value",
                  "Safety packages often better value than individual options",
                  "Niche options like rear entertainment, exotic paint colors for resale",
                  "Performance packages may increase insurance; luxury features increase repair costs"
                ]
              }
            ]}
            tips={[
              "Focus on features you'll use daily rather than impressive but rarely-used options",
              "Research which options are dealer-installed vs factory-only",
              "Consider how features will age - some become outdated quickly",
              "Don't over-option a car beyond your planned ownership period",
              "Popular options help resale value more than personal preferences"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}