"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DaySchedule() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Day Schedule</h1>
        <p className="text-muted-foreground">Create a detailed timeline to keep your wedding day running smoothly for everyone involved.</p>
      </div>

      <Tabs defaultValue="morning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="morning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Morning Prep</span>
            <span className="sm:hidden">Morning</span>
          </TabsTrigger>
          <TabsTrigger value="vendors" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Vendor Coordination</span>
            <span className="sm:hidden">Vendors</span>
          </TabsTrigger>
          <TabsTrigger value="ceremony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Ceremony & Photos</span>
            <span className="sm:hidden">Ceremony</span>
          </TabsTrigger>
          <TabsTrigger value="reception" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Reception Flow</span>
            <span className="sm:hidden">Reception</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="morning">
          <GuidedNotePage
            title="Morning Preparation Schedule"
            description="Coordinate getting ready activities and pre-ceremony preparations"
            sections={[
              {
                title: "Getting Ready Timeline",
                prompts: [
                  "What time do you need to start getting ready to be ceremony-ready on time?",
                  "How will you coordinate hair and makeup timing for the wedding party?",
                  "What's your plan for breakfast and keeping everyone fed during preparations?",
                  "How much buffer time will you build in for unexpected delays or touch-ups?"
                ],
                examples: [
                  "Start at 8am for 4pm ceremony - allows time for photos and relaxation",
                  "Stagger appointments: hair 8-10am, makeup 10-12pm, overlap for efficiency",
                  "Light breakfast delivered, snacks available, avoid messy foods near dresses",
                  "Build in 30-45 minutes extra for each major activity, plan for Murphy's Law"
                ]
              },
              {
                title: "Wedding Party Coordination",
                prompts: [
                  "How will you coordinate the wedding party's arrival and preparation schedule?",
                  "What's your plan for keeping everyone organized and on track?",
                  "How will you handle different preparation needs for bridesmaids vs. groomsmen?",
                  "What's your strategy for managing family members and their preparation needs?"
                ],
                examples: [
                  "Bridesmaids arrive 8am for hair/makeup, groomsmen arrive noon for photos",
                  "Designated point person with timeline, group chat for updates",
                  "Bridesmaids get ready together, groomsmen meet separately then join for photos",
                  "Parents arrive for family photos 1 hour before ceremony"
                ]
              },
              {
                title: "Final Preparations & Details",
                prompts: [
                  "What's your timeline for getting dressed and doing final preparations?",
                  "How will you handle last-minute details like boutonnieres and bouquets?",
                  "When and where will the wedding party gather before the ceremony?",
                  "What's your plan for final photos and emotional moments before the ceremony?"
                ],
                examples: [
                  "Get dressed 90 minutes before ceremony, final touch-ups 30 minutes before",
                  "Florist delivers bouquets at 2pm, wedding party pins boutonnieres at 2:30pm",
                  "Meet at venue 45 minutes before ceremony for final instructions",
                  "Private first look photos, family photos, wedding party photos before guests arrive"
                ]
              }
            ]}
            tips={[
              "Share detailed timeline with wedding party and family members in advance",
              "Assign reliable people to help keep everyone on schedule throughout the day",
              "Plan for inevitable delays and build buffer time into your schedule",
              "Have someone else manage timeline details so you can focus on enjoying the day"
            ]}
          />
        </TabsContent>

        <TabsContent value="vendors">
          <GuidedNotePage
            title="Vendor Coordination & Setup"
            description="Manage vendor arrivals and coordinate all wedding day services"
            sections={[
              {
                title: "Vendor Arrival & Setup Schedule",
                prompts: [
                  "When do each of your vendors need to arrive and complete their setup?",
                  "How will you coordinate vendors who need to work in the same spaces?",
                  "What's the timeline for ceremony vs. reception setup if they're in different locations?",
                  "How will you handle vendor delays or setup issues that arise?"
                ],
                examples: [
                  "Florist 10am setup, caterer 12pm prep, DJ 2pm sound check, photographer 1pm arrival",
                  "Florist finishes before caterer sets up, DJ coordinates with venue coordinator",
                  "Ceremony setup complete by 3pm, reception setup during ceremony time",
                  "Backup plans for each vendor, emergency contacts, designated vendor coordinator"
                ]
              },
              {
                title: "Vendor Communication & Coordination",
                prompts: [
                  "Who will be the main point of contact for vendors on wedding day?",
                  "How will you communicate timeline changes or last-minute adjustments to vendors?",
                  "What information do vendors need about the timeline and other vendors?",
                  "How will you ensure vendors have everything they need to succeed?"
                ],
                examples: [
                  "Wedding coordinator or designated family member as single point of contact",
                  "Group chat, phone tree, or designated coordinator to relay information",
                  "Vendor timeline with contact info, venue details, setup requirements",
                  "Venue access, power requirements, setup spaces, vendor meal arrangements"
                ]
              },
              {
                title: "Final Setup & Quality Check",
                prompts: [
                  "What's your plan for final setup inspection and quality check?",
                  "How will you handle last-minute vendor setup adjustments or fixes?",
                  "When will final decorating touches and details be completed?",
                  "What's your backup plan if a vendor has significant problems?"
                ],
                examples: [
                  "Walk-through 90 minutes before ceremony, final adjustments 60 minutes before",
                  "Designated family member or coordinator to handle vendor issues",
                  "Final touches complete 30 minutes before guests arrive",
                  "Emergency vendor contacts, family/friends ready to step in if needed"
                ]
              }
            ]}
            tips={[
              "Create a detailed vendor timeline and share it with everyone involved",
              "Designate one person to handle all vendor communication on wedding day",
              "Have emergency contact information for all vendors easily accessible",
              "Do a venue walkthrough with key vendors before the wedding day"
            ]}
          />
        </TabsContent>

        <TabsContent value="ceremony">
          <GuidedNotePage
            title="Ceremony & Photo Timeline"
            description="Coordinate ceremony logistics and post-ceremony photography"
            sections={[
              {
                title: "Pre-Ceremony Logistics",
                prompts: [
                  "What's your detailed timeline for guest arrival and seating?",
                  "How will you coordinate the wedding party lineup and processional order?",
                  "What's your plan for managing family seating and special guests?",
                  "How will you handle any pre-ceremony music or special elements?"
                ],
                examples: [
                  "Guests seated 30 minutes before ceremony, ushers direct to appropriate sides",
                  "Wedding party lines up 10 minutes before processional, practice order beforehand",
                  "Ushers seat immediate family 15 minutes before, grandparents get special escort",
                  "Prelude music starts when first guests arrive, special songs for family seating"
                ]
              },
              {
                title: "Ceremony Execution & Timing",
                prompts: [
                  "What's your minute-by-minute ceremony timeline from processional to recessional?",
                  "How will you coordinate with your officiant on timing and cues?",
                  "What's your plan for any unity ceremonies or special traditions?",
                  "How will you handle the transition from ceremony to cocktail hour?"
                ],
                examples: [
                  "Processional 5 minutes, ceremony 20 minutes, recessional 5 minutes",
                  "Coordinate music cues, processional pace, any special ceremony elements",
                  "Unity candle after vows, cultural traditions, family involvement moments",
                  "Guests directed to cocktail area immediately, couple stays for photos"
                ]
              },
              {
                title: "Post-Ceremony Photo Schedule",
                prompts: [
                  "How long do you need for post-ceremony photos before joining guests?",
                  "What's your strategy for organizing family groups efficiently for photos?",
                  "How will you balance photo time with guest enjoyment during cocktail hour?",
                  "What's your plan for couple photos vs. family photos vs. wedding party photos?"
                ],
                examples: [
                  "45 minutes total: 15 minutes family, 20 minutes couples, 10 minutes wedding party",
                  "Assign family members to gather groups, pre-planned photo list for photographer",
                  "Keep cocktail hour engaging while couple does photos, rejoin guests for key moments",
                  "Prioritize family photos first (they can leave), then intimate couple shots"
                ]
              }
            ]}
            tips={[
              "Practice processional timing and spacing during your rehearsal",
              "Assign specific people to help coordinate family members for photos",
              "Keep post-ceremony photos under 45 minutes to not miss cocktail hour",
              "Have a backup plan for outdoor ceremony weather issues"
            ]}
          />
        </TabsContent>

        <TabsContent value="reception">
          <GuidedNotePage
            title="Reception Timeline & Event Flow"
            description="Coordinate reception events and maintain good energy flow throughout the evening"
            sections={[
              {
                title: "Reception Timeline & Key Events",
                prompts: [
                  "How will you structure the reception flow from cocktail hour to dancing?",
                  "What's your timeline for dinner service and coordinating with caterers?",
                  "When will you schedule speeches, toasts, and other special moments?",
                  "How will you pace events to maintain energy and guest engagement?"
                ],
                examples: [
                  "5:30pm cocktails, 6:30pm dinner, 8:00pm dancing, 11:00pm last dance",
                  "Salad served after couple entrance, main course after toasts",
                  "Toasts during dinner, first dance after dessert, cake cutting at 9pm",
                  "Mix of scheduled events with natural break points, read the room energy"
                ]
              },
              {
                title: "Special Dances & Traditions",
                prompts: [
                  "What's your timeline for first dance, parent dances, and other special dances?",
                  "How will you incorporate cultural traditions or family customs?",
                  "What's your plan for bouquet toss, garter toss, or other reception traditions?",
                  "How will you coordinate special surprises or performances?"
                ],
                examples: [
                  "First dance at 8pm, parent dances at 8:15pm, open dance floor at 8:30pm",
                  "Cultural dances, anniversary dance, family tradition moments",
                  "Bouquet toss at 9:30pm, fun traditions that match your style",
                  "Surprise performances coordinated with DJ, special announcements"
                ]
              },
              {
                title: "Reception Wind-Down & Departure",
                prompts: [
                  "How will you handle the final hour and wind-down of the reception?",
                  "What's your plan for the last dance and any send-off activities?",
                  "How will you coordinate cleanup and vendor wrap-up?",
                  "What's your strategy for guest departures and after-party coordination?"
                ],
                examples: [
                  "Slow songs in final hour, announce last dance, sparkler send-off",
                  "Romantic last dance, coordinated exit with sparklers or bubbles",
                  "Designated family/friends to handle gifts, decorations, vendor coordination",
                  "After-party at nearby location, transportation for those continuing celebration"
                ]
              }
            ]}
            tips={[
              "Build flexibility into your reception timeline to adapt to the crowd's energy",
              "Coordinate with your DJ/band on timing for key events and energy management",
              "Have someone else manage timeline announcements so you can enjoy the moment",
              "Plan for guest transportation and safety for end of night departures"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}