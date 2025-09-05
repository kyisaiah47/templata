"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Seating() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Seating Arrangements</h1>
        <p className="text-muted-foreground">Plan your reception seating to create a comfortable and enjoyable experience for all guests.</p>
      </div>

      <Tabs defaultValue="grouping" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="grouping" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Guest Grouping</span>
            <span className="sm:hidden">Groups</span>
          </TabsTrigger>
          <TabsTrigger value="layout" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Table Layout</span>
            <span className="sm:hidden">Layout</span>
          </TabsTrigger>
          <TabsTrigger value="considerations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Special Needs</span>
            <span className="sm:hidden">Special</span>
          </TabsTrigger>
          <TabsTrigger value="execution" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Final Execution</span>
            <span className="sm:hidden">Execute</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grouping">
          <GuidedNotePage
            title="Guest Grouping Strategy"
            description="Organize guests into compatible groups for enjoyable table conversations"
            sections={[
              {
                title: "Relationship-Based Grouping",
                prompts: [
                  "How will you group guests by relationship (family, friends, work, etc.)?",
                  "Who are your VIP guests that need special consideration and prominent seating?",
                  "Which guests know each other and would enjoy sitting together?",
                  "Are there any guests who should be kept apart for family or personal reasons?"
                ],
                examples: [
                  "College friends together, family by generation, work colleagues at one table",
                  "Parents, grandparents, wedding party at tables closest to head table",
                  "Consider shared interests, life stages, and personality compatibility",
                  "Note divorced parents, family feuds, or ex-relationships to avoid awkward situations"
                ]
              },
              {
                title: "Personality & Interest Matching",
                prompts: [
                  "How will you balance different personality types at each table?",
                  "What shared interests or life stages can you use to group guests?",
                  "How will you mix extroverts with introverts for balanced conversations?",
                  "What age ranges work well together at your wedding?"
                ],
                examples: [
                  "Place outgoing guests with quieter ones to encourage conversation",
                  "Group guests who share hobbies, careers, or life experiences",
                  "Mix personality types but ensure at least 2-3 talkative guests per table",
                  "Consider mixing age groups thoughtfully based on interests and energy"
                ]
              },
              {
                title: "Strategic Seating Decisions",
                prompts: [
                  "How will you handle single guests to ensure they feel included?",
                  "What's your strategy for seating couples vs. individuals?",
                  "How will you manage guests who don't know many other attendees?",
                  "What's your plan for children and family seating arrangements?"
                ],
                examples: [
                  "Seat single guests with friendly, welcoming couples who will include them",
                  "Mix couples with singles and don't put all couples at one table",
                  "Place isolated guests with your most social and inclusive friends",
                  "Kids table with activities or mixed with parents based on ages and behavior"
                ]
              }
            ]}
            tips={[
              "Start seating your most important guests first, then fill in around them",
              "Create a guest personality 'cheat sheet' to help with grouping decisions",
              "Ask close family and friends for input on guest compatibility",
              "Consider dietary restrictions when grouping to make serving easier"
            ]}
          />
        </TabsContent>

        <TabsContent value="layout">
          <GuidedNotePage
            title="Table Layout & Logistics"
            description="Design the physical arrangement and logistics of your reception space"
            sections={[
              {
                title: "Venue Layout Planning",
                prompts: [
                  "What's your venue layout and how many tables do you need total?",
                  "What table sizes work best for your guest count (rounds of 8, 10, or long tables)?",
                  "Where will you place the head table or sweetheart table for optimal visibility?",
                  "How will you optimize the layout for dancing, bar access, and guest flow?"
                ],
                examples: [
                  "10 tables of 8 guests each for 80 people, or 8 tables of 10 for similar count",
                  "Round tables encourage conversation, long tables work for intimate gatherings",
                  "Head table centered with clear view of dance floor, not blocking guest sight lines",
                  "Tables arranged around dance floor, clear paths to bar and bathrooms"
                ]
              },
              {
                title: "Accessibility & Special Needs",
                prompts: [
                  "How will you accommodate guests with mobility or accessibility needs?",
                  "Where will you place elderly guests for their comfort and convenience?",
                  "What considerations do you need for children's seating and high chairs?",
                  "How will you handle guests with hearing or visual impairments?"
                ],
                examples: [
                  "Reserve accessible spots near entrance for wheelchairs and walkers",
                  "Seat older guests away from loud speakers and close to bathrooms",
                  "High chairs positioned with easy server access, kids near responsible adults",
                  "Front tables for guests who need to see speakers clearly for lip reading"
                ]
              },
              {
                title: "Practical Logistics",
                prompts: [
                  "How will you number or name your tables for easy guest navigation?",
                  "What's your plan for table spacing and server accessibility?",
                  "How will you handle the head table setup and wedding party seating?",
                  "What backup plans do you have for last-minute seating changes?"
                ],
                examples: [
                  "Number tables 1-10 or use meaningful names related to your relationship",
                  "Ensure 6 feet between tables for servers and guest movement",
                  "Long head table facing guests vs. sweetheart table for just the couple",
                  "Keep 1-2 flex tables that can accommodate 8 or 10 depending on final count"
                ]
              }
            ]}
            tips={[
              "Visit your venue to visualize the space before finalizing your layout",
              "Work with your venue coordinator to ensure your layout meets safety requirements",
              "Consider the view from every table - everyone should see key moments",
              "Plan table positions based on natural conversation and energy flow"
            ]}
          />
        </TabsContent>

        <TabsContent value="considerations">
          <GuidedNotePage
            title="Special Considerations & Sensitive Situations"
            description="Navigate complex family dynamics and special guest needs thoughtfully"
            sections={[
              {
                title: "Family Dynamics & Conflicts",
                prompts: [
                  "How will you handle divorced parents or family conflicts diplomatically?",
                  "What's your strategy for managing different sides of the family?",
                  "How will you seat step-family and blended family situations?",
                  "What's your plan for handling family members who don't get along?"
                ],
                examples: [
                  "Seat divorced parents at separate tables with buffer zones and mutual friends",
                  "Balance bride and groom's families evenly throughout the space",
                  "Include step-family based on relationships and comfort levels",
                  "Use strategic placement and neutral party buffers for difficult relationships"
                ]
              },
              {
                title: "Cultural & Religious Considerations",
                prompts: [
                  "Are there any cultural or religious seating traditions to honor?",
                  "How will you accommodate different dietary restrictions by table?",
                  "What language considerations do you need for international guests?",
                  "How will you respect different family traditions and customs?"
                ],
                examples: [
                  "Honor cultural traditions like elder placement or gender-specific seating if appropriate",
                  "Group guests with similar dietary needs to simplify service",
                  "Seat bilingual guests with non-English speakers to help with translation",
                  "Balance tradition with modern mixed seating based on your family's preferences"
                ]
              },
              {
                title: "Last-Minute Adjustments",
                prompts: [
                  "What's your plan for handling no-shows on the wedding day?",
                  "How will you manage unexpected plus-ones or last-minute additions?",
                  "What's your strategy for guests who request seating changes?",
                  "How will you handle divorced couples who both attend with new partners?"
                ],
                examples: [
                  "Have a plan to quickly fill empty seats or remove place settings",
                  "Keep 1-2 tables flexible that can expand or contract as needed",
                  "Politely redirect requests to your wedding coordinator or designated family member",
                  "Seat ex-couples strategically with good sight line buffers and supportive friends"
                ]
              }
            ]}
            tips={[
              "Communicate with key family members about sensitive situations beforehand",
              "Have your wedding coordinator handle day-of seating questions and changes",
              "Create backup seating arrangements for common last-minute scenarios",
              "Focus on what will make the majority of guests most comfortable"
            ]}
          />
        </TabsContent>

        <TabsContent value="execution">
          <GuidedNotePage
            title="Final Execution & Day-Of Management"
            description="Implement your seating plan smoothly on wedding day"
            sections={[
              {
                title: "Seating Display & Communication",
                prompts: [
                  "How will you display the seating chart for guests to find their tables?",
                  "What format will work best for your guest count and venue layout?",
                  "How will you make the seating display easy to read and navigate?",
                  "What backup communication methods will you have for confused guests?"
                ],
                examples: [
                  "Large display board with table numbers and alphabetical guest name list",
                  "Individual escort cards with guest names and table assignments",
                  "Clear, large fonts with good lighting for easy reading",
                  "Ushers or family members stationed to help direct guests to tables"
                ]
              },
              {
                title: "Day-Of Coordination",
                prompts: [
                  "Who will help direct guests to their tables during cocktail hour?",
                  "What's your plan for handling seating questions or confusion?",
                  "How will you manage place cards and table assignments?",
                  "Who will handle any last-minute seating adjustments?"
                ],
                examples: [
                  "Assign ushers, family members, or wedding party to help guide guests",
                  "Designate one person as the seating 'expert' to answer all questions",
                  "Place cards at each seat vs. just table assignments for more organization",
                  "Wedding coordinator or designated family member handles all changes"
                ]
              },
              {
                title: "Contingency Planning",
                prompts: [
                  "What's your backup plan if people switch seats during the reception?",
                  "How will you handle guests who can't find their assigned seats?",
                  "What's your strategy if the seating display gets damaged or moved?",
                  "How will you manage if your table count changes at the last minute?"
                ],
                examples: [
                  "Don't stress about minor switches - focus on major table assignments",
                  "Have extra place cards and someone authorized to reassign seats quickly",
                  "Backup seating chart on phones or printed copies with key people",
                  "Pre-planned table combination or separation strategies for count changes"
                ]
              }
            ]}
            tips={[
              "Test your seating chart display setup during your venue walkthrough",
              "Have someone take a photo of your final seating chart as a backup",
              "Brief your wedding party on table locations so they can help guests",
              "Don't stress about minor seat switching - guests will naturally find their comfort zones"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}