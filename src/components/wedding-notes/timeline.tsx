"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Timeline() {
  return (
    <GuidedNotePage
      title="Wedding Timeline & Countdown"
      description="Track important milestones and create your wedding day timeline."
      prompts={[
        "What tasks need to be completed 12 months before?",
        "What needs to happen 6 months before the wedding?",
        "What are your 3-month priorities?",
        "What needs to be finalized 1 month before?",
        "What is your detailed wedding day timeline?",
        "What are your day-after and honeymoon plans?"
      ]}
      examples={[
        "12 months: Book venue, set date, create guest list",
        "6 months: Send save-the-dates, book major vendors",
        "3 months: Order flowers, finalize menu, send invitations",
        "1 month: Confirm headcount, pick up dress, rehearsal dinner",
        "Wedding day: Hair/makeup at 9am, photos at 2pm, ceremony at 4pm"
      ]}
      tips={[
        "Build in buffer time for each activity",
        "Assign point people for different timeline items",
        "Share timeline with all vendors and wedding party",
        "Have a backup plan for outdoor ceremonies"
      ]}
    />
  )
}