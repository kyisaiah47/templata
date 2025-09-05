"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThankYou() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Thank You Card Tracking</h1>
        <p className="text-muted-foreground">Organize and track your wedding thank you notes to ensure everyone feels appreciated.</p>
      </div>

      <Tabs defaultValue="tracking" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="tracking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Gift Tracking</span>
            <span className="sm:hidden">Tracking</span>
          </TabsTrigger>
          <TabsTrigger value="planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Note Planning</span>
            <span className="sm:hidden">Planning</span>
          </TabsTrigger>
          <TabsTrigger value="writing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Writing Strategy</span>
            <span className="sm:hidden">Writing</span>
          </TabsTrigger>
          <TabsTrigger value="organization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Organization</span>
            <span className="sm:hidden">Organize</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tracking">
          <GuidedNotePage
            title="Gift & Guest Tracking System"
            description="Create an organized system for recording gifts and guest information"
            sections={[
              {
                title: "Gift Recording & Documentation",
                prompts: [
                  "How will you track what gifts you received from each guest?",
                  "What system will you use to record gift details accurately and completely?",
                  "How will you handle gifts that arrive at different times and locations?",
                  "What's your plan for tracking cash gifts and gift cards with specific amounts?"
                ],
                examples: [
                  "Master spreadsheet with guest name, gift description, date received, source",
                  "Include gift value estimates, store purchased from, specific item details",
                  "Log engagement gifts, shower gifts, and wedding gifts separately by event",
                  "Record exact cash amounts, gift card stores and values, check numbers"
                ]
              },
              {
                title: "Guest Information Management",
                prompts: [
                  "What guest contact information do you need for sending thank you notes?",
                  "How will you collect and organize guest addresses efficiently?",
                  "What's your system for tracking guest relationships and wedding roles?",
                  "How will you ensure no guest gets missed in your thank you process?"
                ],
                examples: [
                  "Full names, mailing addresses, email addresses for follow-up if needed",
                  "Collect addresses during RSVP process, ask family members, wedding website",
                  "Note relationship to bride/groom, wedding party role, special significance",
                  "Cross-reference with guest list, RSVP responses, and gift tracking"
                ]
              },
              {
                title: "Multi-Event Gift Coordination",
                prompts: [
                  "How will you coordinate gifts from engagement parties, showers, and wedding?",
                  "What's your strategy for tracking gifts from guests who give multiple times?",
                  "How will you handle group gifts or gifts from multiple family members?",
                  "What's your plan for tracking gifts from people who couldn't attend?"
                ],
                examples: [
                  "Separate tracking sheets for each event, then consolidate for thank you notes",
                  "Note all gifts from same person, thank for most recent or most significant",
                  "Record all contributors to group gifts, send individual thanks to each",
                  "Track gifts from distant relatives, work colleagues, or friends who sent gifts"
                ]
              }
            ]}
            tips={[
              "Start your gift tracking system at the engagement party to get into the habit",
              "Take photos of gifts before opening if you receive many at once",
              "Update your tracking system immediately when gifts arrive - don't wait",
              "Keep gift receipts and store information for potential exchanges"
            ]}
          />
        </TabsContent>

        <TabsContent value="planning">
          <GuidedNotePage
            title="Thank You Note Planning & Logistics"
            description="Plan the style, format, and logistics of your thank you card process"
            sections={[
              {
                title: "Card Style & Format Decisions",
                prompts: [
                  "What style and format do you want for your thank you cards?",
                  "How will you personalize the design to reflect your wedding or personalities?",
                  "What's your preference for photo cards vs. traditional stationery?",
                  "How many thank you cards should you order and when?"
                ],
                examples: [
                  "Photo cards from wedding, classic elegant stationery, custom designed cards",
                  "Include wedding colors, meaningful photos, monogram, or wedding venue",
                  "Wedding photo cards for personal touch vs. timeless stationery design",
                  "Order 25% more than number of gifts expected, order 4-6 weeks before wedding"
                ]
              },
              {
                title: "Writing Responsibilities & Timeline",
                prompts: [
                  "Who will write the thank you notes and how will you divide the task?",
                  "What's your realistic timeline for completing all thank you notes?",
                  "How will you coordinate writing with receiving gifts over several months?",
                  "What supplies and workspace do you need for efficient note writing?"
                ],
                examples: [
                  "Bride writes to her side, groom to his side, or alternate based on relationship",
                  "Send within 3 months of wedding, 2 weeks for shower/engagement gifts",
                  "Write in batches as gifts arrive, set weekly goals, final push after honeymoon",
                  "Good pens, stamps, address labels, comfortable writing space, good lighting"
                ]
              },
              {
                title: "Personalization & Special Considerations",
                prompts: [
                  "How will you personalize each note to mention specific gifts and relationships?",
                  "What's your approach for thanking guests who attended but didn't give gifts?",
                  "How will you handle thank you notes for very generous or special gifts?",
                  "What's your plan for guests who gave multiple gifts over several events?"
                ],
                examples: [
                  "Mention specific gift and how you plan to use it, reference their presence",
                  "Thank for attendance and support, mention meaningful moments from wedding",
                  "Extra personalization for significant gifts, phone call in addition to note",
                  "Acknowledge all gifts but focus on most recent or most meaningful"
                ]
              }
            ]}
            tips={[
              "Order thank you cards early so they're ready when gifts start arriving",
              "Choose cards that can be mailed in standard envelopes to save on postage",
              "Consider having return address labels printed to save time addressing",
              "Set up a dedicated thank you card writing station with all supplies"
            ]}
          />
        </TabsContent>

        <TabsContent value="writing">
          <GuidedNotePage
            title="Writing Strategy & Content Creation"
            description="Develop your approach to writing heartfelt and meaningful thank you notes"
            sections={[
              {
                title: "Thank You Note Structure & Elements",
                prompts: [
                  "What key elements will you include in every thank you note?",
                  "How will you structure your notes to feel personal but efficient to write?",
                  "What tone and style reflects your personality as a couple?",
                  "How will you make each note feel individual and heartfelt?"
                ],
                examples: [
                  "Greeting, specific gift mention, how you'll use it, gratitude for presence, closing",
                  "Thank you for [specific gift], we will [specific use], thank you for celebrating with us",
                  "Warm and genuine, formal vs. casual based on relationship, authentic to your voice",
                  "Reference conversation from wedding, shared memories, specific gift details"
                ]
              },
              {
                title: "Gift-Specific Thank You Approaches",
                prompts: [
                  "How will you handle different types of gifts (physical items, cash, experiences)?",
                  "What's your approach for thanking for handmade or very personal gifts?",
                  "How will you write thank you notes for gifts you might exchange?",
                  "What's your strategy for group gifts or contributions to funds?"
                ],
                examples: [
                  "Physical: mention gift and use; Cash: 'generous gift will help with home/honeymoon'",
                  "Extra appreciation for time and effort, mention specific details you love",
                  "Focus on thoughtfulness and generosity rather than specific item details",
                  "Thank each contributor individually, mention what fund will support"
                ]
              },
              {
                title: "Templates & Efficiency Strategies",
                prompts: [
                  "How will you create templates while keeping notes personal?",
                  "What's your strategy for writing efficiently without sacrificing sincerity?",
                  "How will you handle writer's block or note-writing fatigue?",
                  "What's your approach for proofreading and ensuring quality?"
                ],
                examples: [
                  "Basic structure template with personalized middle sections for each note",
                  "Set daily goals (5-10 notes), write in batches by gift type or guest group",
                  "Take breaks, change locations, write easier notes when feeling stuck",
                  "Read each note aloud, have partner review, check all names and details"
                ]
              }
            ]}
            tips={[
              "Write thank you notes as gifts arrive rather than waiting until after the wedding",
              "Keep a list of phrases and expressions that feel authentic to your voice",
              "Set a goal to write 5-10 thank you notes per day to avoid feeling overwhelmed",
              "Read examples of good thank you notes for inspiration but don't copy exactly"
            ]}
          />
        </TabsContent>

        <TabsContent value="organization">
          <GuidedNotePage
            title="Organization & Follow-Through Systems"
            description="Stay organized and ensure no thank you note gets missed or forgotten"
            sections={[
              {
                title: "Tracking & Progress Management",
                prompts: [
                  "How will you track completed vs. pending thank you notes?",
                  "What's your system for ensuring no guest gets missed?",
                  "How will you monitor your progress toward completion?",
                  "What backup systems will you have in case you lose track?"
                ],
                examples: [
                  "Spreadsheet with 'thank you sent' column and date, physical checklist",
                  "Cross-reference gift list with guest list, check off names as notes are sent",
                  "Weekly progress reviews, percentage complete tracking, deadline reminders",
                  "Backup digital copies of tracking sheets, photos of completed notes"
                ]
              },
              {
                title: "Late Gifts & Ongoing Management",
                prompts: [
                  "How will you handle gifts that arrive after you've sent initial thank you notes?",
                  "What's your plan for gifts that arrive months after the wedding?",
                  "How will you manage thank you notes during your honeymoon or busy periods?",
                  "What's your strategy for maintaining momentum over several months?"
                ],
                examples: [
                  "Send separate thank you note for late gifts within 2 weeks of receipt",
                  "Same appreciation and personalization regardless of when gift arrives",
                  "Batch writing sessions, ask family to help with addressing, maintain routine",
                  "Set weekly goals, reward yourself for milestones, enlist partner support"
                ]
              },
              {
                title: "Quality Control & Final Steps",
                prompts: [
                  "How will you ensure quality and accuracy in all your thank you notes?",
                  "What's your proofreading and error-checking process?",
                  "How will you handle mistakes or notes that need to be rewritten?",
                  "What's your plan for celebrating when all thank you notes are complete?"
                ],
                examples: [
                  "Double-check all names, addresses, and gift details before writing",
                  "Partner proofreads, spell-check names, verify addresses before mailing",
                  "Keep extra cards for rewrites, don't send notes with significant errors",
                  "Special dinner, small celebration, acknowledge completion of major milestone"
                ]
              }
            ]}
            tips={[
              "Keep a master list of guests who should receive thank you notes based on gifts and attendance",
              "Set up systems early and stick to them consistently throughout the process",
              "Don't let perfectionism prevent you from sending heartfelt, genuine notes",
              "Remember that guests care more about receiving acknowledgment than perfect prose"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}