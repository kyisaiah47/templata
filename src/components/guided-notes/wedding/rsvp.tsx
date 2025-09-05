"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RSVP() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Guest RSVP Tracking</h1>
        <p className="text-muted-foreground">Track guest responses and manage your final headcount for vendors.</p>
      </div>

      <Tabs defaultValue="organization" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="organization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Guest Organization</span>
            <span className="sm:hidden">Organize</span>
          </TabsTrigger>
          <TabsTrigger value="collection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">RSVP Collection</span>
            <span className="sm:hidden">Collect</span>
          </TabsTrigger>
          <TabsTrigger value="tracking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Response Tracking</span>
            <span className="sm:hidden">Track</span>
          </TabsTrigger>
          <TabsTrigger value="headcount" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Final Headcount</span>
            <span className="sm:hidden">Final</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="organization">
          <GuidedNotePage
            title="Guest List Organization"
            description="Structure your guest list for easy RSVP management and tracking"
            sections={[
              {
                title: "Guest Categories & Structure",
                prompts: [
                  "How will you categorize your guests (family, friends, work, etc.)?",
                  "What information do you need to collect from each guest?",
                  "How will you organize contact information and addresses?",
                  "What system will you use to track guest relationships and priorities?"
                ],
                examples: [
                  "Family (immediate, extended), Friends (close, college, work), Colleagues",
                  "Names, dietary restrictions, contact info, meal choice, plus-one status",
                  "Collect addresses during RSVP process or from family/friends beforehand",
                  "Spreadsheet with columns for category, relationship, and VIP status"
                ]
              },
              {
                title: "Plus-One Management",
                prompts: [
                  "How will you track plus-ones and their confirmation status?",
                  "What information do you need from plus-one guests?",
                  "How will you handle last-minute plus-one requests?",
                  "What's your plan for seating unknown plus-ones?"
                ],
                examples: [
                  "Note if +1 is confirmed and get their name when possible",
                  "Plus-one names, dietary restrictions, and any special needs",
                  "Set clear deadline and communicate plus-one policy upfront",
                  "Group unknown plus-ones with friendly, outgoing guests"
                ]
              },
              {
                title: "Guest List Logistics",
                prompts: [
                  "What's your process for handling late additions to the guest list?",
                  "How will you manage different invitation waves (save the dates, invitations)?",
                  "What's your backup plan for guests who don't fit your venue capacity?",
                  "How will you handle children and family situations?"
                ],
                examples: [
                  "Set guest list deadline 8 weeks before invitations go out",
                  "Save the dates to all guests, invitations based on final capacity",
                  "Create A-list and B-list, send B-list invites after A-list RSVPs",
                  "Decide on child policy and communicate clearly on invitations"
                ]
              }
            ]}
            tips={[
              "Create your guest list categories early and stick to them for consistency",
              "Collect guest addresses during engagement parties or through family",
              "Use a shared spreadsheet so both partners can update guest information",
              "Be clear about plus-one policies from the beginning to avoid confusion"
            ]}
          />
        </TabsContent>

        <TabsContent value="collection">
          <GuidedNotePage
            title="RSVP Collection Process"
            description="Establish an effective system for gathering guest responses"
            sections={[
              {
                title: "RSVP Timeline & Deadlines",
                prompts: [
                  "What's your RSVP deadline and how will you communicate it clearly?",
                  "How far in advance will you send invitations?",
                  "What's your timeline for following up with non-responders?",
                  "How will you handle the gap between RSVP deadline and vendor deadlines?"
                ],
                examples: [
                  "RSVP by [date] - 3-4 weeks before wedding date",
                  "Send invitations 6-8 weeks before wedding",
                  "Follow up with non-responders 1 week after deadline",
                  "Plan 1-week buffer between RSVP deadline and final vendor counts"
                ]
              },
              {
                title: "Response Methods & Tools",
                prompts: [
                  "How will guests submit their responses (online, mail, phone)?",
                  "What information will you include on RSVP cards or forms?",
                  "How will you make the RSVP process easy and clear for guests?",
                  "What backup methods will you provide for tech-challenged guests?"
                ],
                examples: [
                  "Wedding website RSVP form, mail-in cards, or phone/text options",
                  "Attendance, meal choice, dietary restrictions, song requests",
                  "Clear instructions, pre-addressed stamped envelopes for mail",
                  "Phone number for older relatives who prefer calling"
                ]
              },
              {
                title: "Information Collection Strategy",
                prompts: [
                  "What specific details do you need from each guest?",
                  "How will you collect dietary restrictions and special requests?",
                  "What's your approach for handling incomplete responses?",
                  "How will you verify guest information accuracy?"
                ],
                examples: [
                  "Full names, attendance confirmation, meal selection, contact info",
                  "Specific dietary needs form field with examples (vegetarian, gluten-free)",
                  "Follow up personally for missing information within 24 hours",
                  "Send confirmation email or text with their RSVP details"
                ]
              }
            ]}
            tips={[
              "Include stamped return envelopes to make mail RSVPs as easy as possible",
              "Set up RSVP tracking from day one to monitor response rates",
              "Make dietary restriction questions specific with examples to get better info",
              "Have a family member help with phone follow-ups for non-responders"
            ]}
          />
        </TabsContent>

        <TabsContent value="tracking">
          <GuidedNotePage
            title="Response Tracking & Management"
            description="Maintain organized records of guest responses as they arrive"
            sections={[
              {
                title: "Daily Response Management",
                prompts: [
                  "How will you track responses as they come in each day?",
                  "What system will you use for recording guest details?",
                  "Who will be responsible for updating the tracking system?",
                  "How often will you review and update your response records?"
                ],
                examples: [
                  "Check wedding website and mail daily, update spreadsheet immediately",
                  "Master spreadsheet with response date, attendance, meal, dietary needs",
                  "One person handles all updates to avoid duplicates and errors",
                  "Review weekly and create status reports for wedding planning"
                ]
              },
              {
                title: "Vendor Communication",
                prompts: [
                  "What's your system for updating vendors with headcounts?",
                  "How often will you provide vendors with updated numbers?",
                  "What format will you use to communicate guest information to caterers?",
                  "How will you handle last-minute changes to vendor counts?"
                ],
                examples: [
                  "Weekly email updates to caterer with running headcount",
                  "Provide updates every Friday until final count deadline",
                  "Organized list by meal choice and dietary restrictions",
                  "Same-day communication for any changes within 48 hours of wedding"
                ]
              },
              {
                title: "Special Requests & Dietary Needs",
                prompts: [
                  "How will you organize and communicate dietary restrictions to vendors?",
                  "What's your process for handling special seating requests?",
                  "How will you track accessibility needs and accommodations?",
                  "What's your plan for managing last-minute special requests?"
                ],
                examples: [
                  "Separate document listing all dietary needs by guest name",
                  "Note special seating requests in main spreadsheet with reasons",
                  "Track wheelchair access, hearing assistance, and mobility needs",
                  "Evaluate requests case-by-case within 24 hours of receiving them"
                ]
              }
            ]}
            tips={[
              "Update your tracking system immediately when responses come in",
              "Create separate summary documents for vendors with just what they need",
              "Back up your tracking system regularly in case of technical issues",
              "Use color coding in spreadsheets to quickly see response status"
            ]}
          />
        </TabsContent>

        <TabsContent value="headcount">
          <GuidedNotePage
            title="Final Headcount Planning"
            description="Finalize guest numbers for vendors and complete your wedding logistics"
            sections={[
              {
                title: "Final Count Timeline",
                prompts: [
                  "When do you need to give final numbers to each vendor?",
                  "How will you handle the gap between RSVP deadline and vendor deadline?",
                  "What's your strategy for confirming uncertain RSVPs?",
                  "How will you prepare for potential no-shows on wedding day?"
                ],
                examples: [
                  "Caterer: 1 week before, DJ: 3 days before, venue: 1 week before",
                  "Personal follow-up calls to non-responders in the final week",
                  "Call or text unclear RSVPs to get definitive yes/no answers",
                  "Plan for 5-10% no-show rate when giving final counts to vendors"
                ]
              },
              {
                title: "Seating & Logistics Coordination",
                prompts: [
                  "How will you use final RSVPs to create your seating chart?",
                  "What's your plan for organizing guest information for the wedding day?",
                  "How will you communicate final details to confirmed guests?",
                  "What information do day-of coordinators need about your guests?"
                ],
                examples: [
                  "Transfer confirmed guests to seating chart template by table",
                  "Create guest list printout for check-in table with meal preferences",
                  "Send final wedding details email with timeline and logistics",
                  "Guest list with dietary needs, special requests, and VIP notes"
                ]
              },
              {
                title: "Last-Minute Management",
                prompts: [
                  "What's your protocol for handling last-minute RSVPs or changes?",
                  "How will you manage unexpected plus-ones or cancellations?",
                  "What contingency plans do you have for vendor count adjustments?",
                  "How will you handle day-of guest issues or no-shows?"
                ],
                examples: [
                  "Accept late RSVPs only if under final vendor capacity limits",
                  "Keep 2-3 seats flexible for unexpected changes",
                  "Communicate any changes to vendors within 24 hours",
                  "Assign wedding coordinator to handle day-of guest questions"
                ]
              }
            ]}
            tips={[
              "Build relationships with vendors who are flexible about final count timing",
              "Keep detailed notes about any promises made to guests during RSVP process",
              "Create a final guest summary document for all wedding day vendors",
              "Celebrate reaching your RSVP deadline - it's a major wedding planning milestone!"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}