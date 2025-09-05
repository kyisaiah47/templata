"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Timeline() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Timeline & Countdown</h1>
        <p className="text-muted-foreground">Track important milestones and create your wedding day timeline.</p>
      </div>

      <Tabs defaultValue="early-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="early-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Early Planning</span>
            <span className="sm:hidden">Early</span>
          </TabsTrigger>
          <TabsTrigger value="mid-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Mid Planning</span>
            <span className="sm:hidden">Mid</span>
          </TabsTrigger>
          <TabsTrigger value="final-month" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Final Month</span>
            <span className="sm:hidden">Final</span>
          </TabsTrigger>
          <TabsTrigger value="wedding-day" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Wedding Day</span>
            <span className="sm:hidden">Day</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="early-planning">
          <GuidedNotePage
            title="Early Planning (12+ Months Before Wedding)"
            description="Foundation planning and major bookings"
            sections={[
              {
                title: "Initial Planning Questions",
                prompts: [
                  "What's your ideal wedding date and backup options?",
                  "What's your overall budget and how will you allocate it?",
                  "Who will be on your guest list and what's your target headcount?",
                  "What venues align with your vision and budget?",
                  "Do you want to hire a wedding planner and if so, when?"
                ],
                examples: [
                  "Consider multiple seasons and backup dates to increase venue availability",
                  "Typical budget allocation: 40% venue/catering, 15% photography, 10% flowers, 10% music",
                  "Start with must-have guests, then add nice-to-haves based on venue capacity",
                  "Visit venues during your preferred time/season to see lighting and atmosphere",
                  "Day-of coordinators cost less than full planners but handle logistics"
                ]
              },
              {
                title: "Venue & Date Planning",
                prompts: [
                  "What are your top 3 venue options and their pricing?",
                  "What season and day of the week work best for your budget?",
                  "What backup dates will you consider if your first choice isn't available?",
                  "How will venue choice impact your guest count and overall vision?",
                  "What questions will you ask during venue tours?"
                ],
                examples: [
                  "Compare total costs including service fees, taxes, and required vendors",
                  "Friday/Sunday weddings and off-season dates often cost 20-30% less",
                  "Have 3-5 backup dates spanning different months if possible",
                  "Indoor vs outdoor, formal vs casual, size restrictions all flow from venue choice",
                  "Ask about setup/breakdown time, noise restrictions, vendor requirements, and weather backup plans"
                ]
              },
              {
                title: "Budget & Guest List",
                prompts: [
                  "What's your total wedding budget and how will you fund it?",
                  "How will you prioritize budget allocation across different categories?",
                  "Who are your must-have guests vs. nice-to-have invites?",
                  "How will guest count impact your venue and catering choices?",
                  "What budget tracking system will you use throughout planning?"
                ],
                examples: [
                  "Include savings, family contributions, and realistic timeline for saving more",
                  "Venue/catering typically 40-50% of budget, photography 10-15%, flowers 8-10%",
                  "Start with immediate family and closest friends, then expand based on budget/space",
                  "Each guest typically adds $75-200 in catering costs depending on your choices",
                  "Use spreadsheet, wedding apps, or budgeting tools to track expenses vs. budget"
                ]
              },
              {
                title: "Early Vendor Research",
                prompts: [
                  "What photographers fit your style and budget?",
                  "When will you start dress shopping and what's your timeline?",
                  "What other vendors do you need to research early?",
                  "How will you track vendor contacts and pricing?",
                  "What questions will you ask each type of vendor?"
                ],
                examples: [
                  "Look at full wedding galleries, not just highlight reels, and meet in person",
                  "Start shopping 8-10 months before wedding to allow time for ordering and alterations",
                  "Florists, musicians/DJs, and hair/makeup artists also book up quickly",
                  "Create spreadsheet with vendor type, contact info, pricing, and notes",
                  "Ask about experience, backup plans, timeline requirements, and what's included in pricing"
                ]
              }
            ]}
            tips={[
              "Book your venue first as it impacts most other decisions and vendor availability",
              "Create a guest list early to determine venue size and catering needs",
              "Set your budget before making any major decisions to stay on track",
              "Popular photographers book up quickly, so start research early",
              "Consider hiring a day-of coordinator even if you don't want a full planner"
            ]}
          />
        </TabsContent>

        <TabsContent value="mid-planning">
          <GuidedNotePage
            title="Mid Planning (6 Months Before Wedding)"
            description="Vendor bookings and invitation planning"
            sections={[
              {
                title: "Remaining Vendor Bookings",
                prompts: [
                  "What vendors do you still need to book?",
                  "What's your catering style and menu preferences?",
                  "Who will officiate your ceremony and what's the booking process?",
                  "What florist fits your vision and budget for ceremony and reception?",
                  "What entertainment options (DJ, band, etc.) match your celebration style?"
                ],
                examples: [
                  "Focus on caterer, florist, DJ/band, officiant - these book up fastest",
                  "Buffet vs plated, dietary restrictions, cocktail hour appetizers, late-night snacks",
                  "Religious vs secular, friend/family vs professional, ceremony requirements",
                  "Bridal bouquet, centerpieces, ceremony arch/backdrop, budget per arrangement",
                  "Live band vs DJ, music style preferences, equipment needs, reception timeline"
                ]
              },
              {
                title: "Save-the-Dates & Invitations",
                prompts: [
                  "How will you communicate the date to guests through save-the-dates?",
                  "What style and design do you want for your wedding invitations?",
                  "What information needs to be included on your invitations?",
                  "How will you handle RSVP tracking and guest management?",
                  "What's your timeline for ordering, addressing, and sending invitations?"
                ],
                examples: [
                  "Send 6-8 months early, include venue city/state, wedding website URL",
                  "Match your wedding style - formal, rustic, modern, vintage, destination theme",
                  "Date, time, venue address, RSVP deadline, dress code, wedding website",
                  "Online RSVP system, spreadsheet tracking, meal choice collection",
                  "Order 4 months early, address 6 weeks before, send 8 weeks before wedding"
                ]
              },
              {
                title: "Guest Experience Planning",
                prompts: [
                  "What accommodations will you recommend for out-of-town guests?",
                  "How will you create a wedding website with all the details?",
                  "What special considerations do you have for elderly or disabled guests?",
                  "Will you plan any welcome events or post-wedding activities?",
                  "How will you handle dietary restrictions and special requests?"
                ],
                examples: [
                  "Block rooms at 2-3 hotels in different price ranges near venue",
                  "Include timeline, venue info, accommodations, registry, photos, RSVP system",
                  "Accessible seating, transportation assistance, dietary needs, early departure options",
                  "Welcome dinner, morning-after brunch, local activity recommendations",
                  "Collect dietary info with RSVP, communicate with caterer, label food stations"
                ]
              },
              {
                title: "Registry & Honeymoon Planning",
                prompts: [
                  "Where will you register for gifts and what items are priorities?",
                  "What's your honeymoon destination and booking timeline?",
                  "How will you balance honeymoon planning with wedding tasks?",
                  "What travel documents or preparations are needed for your honeymoon?",
                  "How will registry information be shared with guests?"
                ],
                examples: [
                  "2-3 stores with different price points, focus on home essentials and upgrades",
                  "Book 6+ months early for best rates, consider shoulder season dates",
                  "Plan honeymoon details in off-peak wedding planning weeks, delegate tasks",
                  "Check passport expiration, visa requirements, vaccinations, travel insurance",
                  "Wedding website, bridal shower invites, word-of-mouth through family"
                ]
              }
            ]}
            tips={[
              "Send save-the-dates 6-8 months before your wedding date",
              "Book your caterer early as they often get booked up quickly",
              "Create a wedding website to centralize information for guests",
              "Start your gift registry now so it's ready when invitations go out",
              "Plan your honeymoon early to get better deals and availability"
            ]}
          />
        </TabsContent>

        <TabsContent value="final-month">
          <GuidedNotePage
            title="Final Month Before Wedding"
            description="Final preparations and coordination"
            sections={[
              {
                title: "Final Headcount & Logistics",
                prompts: [
                  "What are your final headcount numbers from RSVPs?",
                  "How will you handle any last-minute guest changes?",
                  "What seating arrangements need to be finalized?",
                  "How will you communicate final details to your wedding party?",
                  "What transportation arrangements are needed for the wedding day?"
                ],
                examples: [
                  "Confirm final count 1 week before wedding, add 2-3 for safety",
                  "Have backup plan for last-minute cancellations or additions",
                  "Group people strategically, consider relationships and personalities",
                  "Create timeline cards for each person with their specific responsibilities",
                  "Arrange rides for elderly guests, coordinate hotel shuttles if needed"
                ]
              },
              {
                title: "Vendor Coordination",
                prompts: [
                  "How will you coordinate with all your vendors in the final weeks?",
                  "What final details need to be confirmed with each vendor?",
                  "Who will be your point person for vendor communication on wedding day?",
                  "What vendor contact sheet will you create for the wedding day?",
                  "How will you handle any vendor issues that arise?"
                ],
                examples: [
                  "Schedule final walkthrough calls with each vendor 1-2 weeks before",
                  "Timeline, setup requirements, final headcount, payment details, emergency contacts",
                  "Designate reliable family member or hire day-of coordinator",
                  "Include vendor names, arrival times, contact numbers, setup locations",
                  "Have backup vendors on standby, know cancellation/substitution policies"
                ]
              },
              {
                title: "Final Preparations",
                prompts: [
                  "When is your final dress fitting and what alterations are needed?",
                  "What beauty appointments are scheduled (hair trial, nails, etc.)?",
                  "How will you prepare your wedding party for their responsibilities?",
                  "What items need to be picked up or delivered before the wedding?",
                  "What emergency kit will you pack for the wedding day?"
                ],
                examples: [
                  "Schedule 1-2 weeks before, bring actual undergarments and shoes",
                  "Hair trial 1 month before, nails 2-3 days before, facial 1 week before",
                  "Send detailed timeline, hold rehearsal, assign specific duties",
                  "Flowers day before, cake day of, rentals delivered morning of",
                  "Safety pins, stain remover, tissues, backup makeup, snacks, phone chargers"
                ]
              },
              {
                title: "Rehearsal & Day-of Planning",
                prompts: [
                  "What are your rehearsal dinner plans and timeline?",
                  "How will you create a detailed day-of timeline for everyone?",
                  "Who's responsible for day-of coordination and problem-solving?",
                  "What honeymoon packing and preparation needs to be done?",
                  "How will you ensure you get rest and stay calm before the big day?"
                ],
                examples: [
                  "Night before wedding, casual dinner with wedding party and immediate family",
                  "Hour-by-hour schedule for vendors, wedding party, and family members",
                  "Day-of coordinator or designated family member with decision-making authority",
                  "Pack 2-3 days before, leave day after wedding or take break first",
                  "Delegate final tasks, schedule massage, get good sleep, eat breakfast"
                ]
              }
            ]}
            tips={[
              "Confirm final headcount with caterer and venue 1 week before",
              "Create a detailed day-of timeline and share with wedding party",
              "Pack an emergency kit with safety pins, stain remover, and backup makeup",
              "Delegate day-of responsibilities to reliable friends or family",
              "Focus on self-care and getting enough sleep the week before"
            ]}
          />
        </TabsContent>

        <TabsContent value="wedding-day">
          <GuidedNotePage
            title="Wedding Day & Beyond"
            description="Day-of timeline and post-wedding plans"
            sections={[
              {
                title: "Wedding Day Timeline",
                prompts: [
                  "What's your ideal hour-by-hour wedding day timeline?",
                  "What time should hair and makeup start for you and your wedding party?",
                  "When will photography begin and what shots are priorities?",
                  "What's your ceremony start time and how long will it be?",
                  "How will the reception flow from cocktails to dinner to dancing?"
                ],
                examples: [
                  "Work backwards from ceremony time, build in buffer time between activities",
                  "Start 4-6 hours before ceremony, bride last for hair, first for makeup",
                  "Begin 2-3 hours before ceremony for getting ready shots and first look",
                  "Plan 30-minute ceremony, allow time for processional and recessional",
                  "Cocktails during photos, dinner service, toasts, then dancing until end"
                ]
              },
              {
                title: "Day-of Logistics",
                prompts: [
                  "How will you handle any last-minute issues or changes?",
                  "Who are your emergency contacts and what are their responsibilities?",
                  "What special requests or unique elements are part of your day?",
                  "How will you stay calm and enjoy your wedding day?",
                  "What backup plans do you have for weather or other issues?"
                ],
                examples: [
                  "Designate point person to make decisions so you can focus on enjoying",
                  "Day-of coordinator, best man/maid of honor, parents, vendor contacts",
                  "Special readings, cultural traditions, surprise performances, unique vows",
                  "Take breaks, eat regularly, designate photo-free moments, stay present",
                  "Indoor ceremony option, tent rental, umbrella station, heater rentals"
                ]
              },
              {
                title: "Memory Preservation",
                prompts: [
                  "How will you preserve your wedding memories?",
                  "What moments do you most want to remember from your wedding day?",
                  "How will you collect cards, gifts, and mementos from guests?",
                  "What follow-up will you do with your photographer and videographer?",
                  "How will you share memories with friends and family after the wedding?"
                ],
                examples: [
                  "Professional photos/video, guest book alternatives, audio recordings",
                  "First look, ceremony processional, first dance, parent dances, toasts",
                  "Assign family member to collect cards, designated gift table attendant",
                  "Confirm delivery timeline, backup options, social media usage rights",
                  "Thank you cards with wedding photos, social media highlights, photo sharing"
                ]
              },
              {
                title: "Post-Wedding Plans",
                prompts: [
                  "What are your immediate post-wedding plans and timeline?",
                  "When will you leave for your honeymoon and how will you prepare?",
                  "What follow-up tasks need to be handled after the wedding?",
                  "How will you transition back to normal life after the celebration?",
                  "What traditions or habits do you want to start as a married couple?"
                ],
                examples: [
                  "Recovery day, gift opening, vendor cleanup coordination, photo viewing",
                  "Leave 1-2 days later for rest, or wait a week for full decompression",
                  "Thank you notes, vendor reviews, photo sharing, dress preservation",
                  "Gradual return to routine, process the experience, plan future together",
                  "Weekly date nights, annual anniversary trip, new shared hobbies or goals"
                ]
              }
            ]}
            tips={[
              "Start getting ready early to avoid feeling rushed on your wedding day",
              "Assign someone to be your point person for handling any day-of issues",
              "Take moments throughout the day to pause and soak in the experience",
              "Have someone collect cards and gifts so you don't have to worry about them",
              "Plan some downtime after the wedding before jumping into thank you notes"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}