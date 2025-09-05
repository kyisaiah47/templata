"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Honeymoon() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Honeymoon Planning</h1>
        <p className="text-muted-foreground">Plan the perfect post-wedding getaway to celebrate your new marriage.</p>
      </div>

      <Tabs defaultValue="destination" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="destination" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Destination & Timing</span>
            <span className="sm:hidden">Destination</span>
          </TabsTrigger>
          <TabsTrigger value="budget" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Budget Planning</span>
            <span className="sm:hidden">Budget</span>
          </TabsTrigger>
          <TabsTrigger value="logistics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Logistics & Prep</span>
            <span className="sm:hidden">Logistics</span>
          </TabsTrigger>
          <TabsTrigger value="memories" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Creating Memories</span>
            <span className="sm:hidden">Memories</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="destination">
          <GuidedNotePage
            title="Destination & Timing Planning"
            description="Choose the perfect destination and timing for your honeymoon adventure"
            sections={[
              {
                title: "Honeymoon Vision & Preferences",
                prompts: [
                  "What type of honeymoon experience are you both dreaming of?",
                  "How do your individual travel styles and preferences align for this trip?",
                  "What destinations are on your bucket list and why do they appeal to you?",
                  "What kind of pace do you want - relaxing, adventurous, or a mix of both?"
                ],
                examples: [
                  "Beach relaxation, cultural exploration, adventure activities, city experiences, wine country",
                  "One loves beaches, other prefers mountains - find destinations with both options",
                  "Europe for history, Caribbean for beaches, Asia for culture, national parks for nature",
                  "Half relaxation/half adventure, all active exploration, complete rest and relaxation"
                ]
              },
              {
                title: "Timing & Travel Logistics",
                prompts: [
                  "When do you want to travel - immediately after the wedding or later?",
                  "What's your ideal length for the honeymoon trip?",
                  "How do work schedules and time off availability affect your timing?",
                  "What seasonal considerations matter for your preferred destinations?"
                ],
                examples: [
                  "Leave 2 days after wedding vs. wait a few weeks to decompress from wedding stress",
                  "1 week for nearby destinations, 2+ weeks for international travel with jet lag",
                  "Coordinate vacation time, busy seasons at work, coverage for responsibilities",
                  "Hurricane season in Caribbean, monsoons in Asia, winter in Europe considerations"
                ]
              },
              {
                title: "Research & Decision-Making",
                prompts: [
                  "How will you research and compare potential destinations together?",
                  "What factors are most important in your final destination choice?",
                  "How will you handle different destination preferences between partners?",
                  "What backup plans do you have if your first choice doesn't work out?"
                ],
                examples: [
                  "Travel blogs, guidebooks, friends' recommendations, travel agent consultation",
                  "Budget, flight time, activities available, weather, safety, visa requirements",
                  "Compromise with multiple stops, alternate years, focus on shared interests",
                  "Second choice destination, domestic options if international falls through"
                ]
              }
            ]}
            tips={[
              "Start destination research early but book closer to the wedding for better deals",
              "Consider your energy levels post-wedding - you may want relaxation over adventure",
              "Look into off-season travel for better prices and fewer crowds",
              "Make sure both partners are excited about the final destination choice"
            ]}
          />
        </TabsContent>

        <TabsContent value="budget">
          <GuidedNotePage
            title="Budget Planning & Cost Management"
            description="Create a realistic budget and find the best value for your honeymoon investment"
            sections={[
              {
                title: "Budget Setting & Allocation",
                prompts: [
                  "What's your realistic total budget for the entire honeymoon experience?",
                  "How will you divide costs between flights, accommodation, activities, and spending money?",
                  "What's your strategy for balancing splurges with practical spending?",
                  "How will you handle unexpected expenses or budget overruns?"
                ],
                examples: [
                  "Set total budget including all expenses, taxes, tips, and emergency fund",
                  "Allocate 40% accommodation, 30% flights, 30% food/activities/shopping",
                  "Splurge on romantic dinners and unique experiences, save on lunch and shopping",
                  "Build in 10-15% contingency fund for unexpected costs or opportunities"
                ]
              },
              {
                title: "Cost-Saving Strategies",
                prompts: [
                  "Are there ways to save money or find deals on your dream destination?",
                  "How can you maximize value without sacrificing the honeymoon experience?",
                  "What travel rewards, deals, or packages could reduce your costs?",
                  "Which expenses are worth splurging on vs. where you can be more practical?"
                ],
                examples: [
                  "Travel rewards credit cards, off-season dates, package deals, last-minute bookings",
                  "Mix luxury and budget accommodations, free activities, local transportation",
                  "Honeymoon registry funds, airline miles, hotel points, group travel discounts",
                  "Splurge on experiences and romantic dinners, save on transportation and lunch"
                ]
              },
              {
                title: "Payment & Financial Planning",
                prompts: [
                  "How will you handle payment timing for flights, hotels, and activities?",
                  "What's your plan for managing money and expenses during the trip?",
                  "How will you use honeymoon registry funds if you set up a cash fund?",
                  "What financial preparations do you need for international travel?"
                ],
                examples: [
                  "Book flights early for deals, pay for hotels closer to travel date",
                  "Shared travel credit card, daily spending limits, expense tracking app",
                  "Apply registry funds to specific expenses like flights or special dinners",
                  "Notify banks of travel plans, get appropriate credit cards, understand foreign fees"
                ]
              }
            ]}
            tips={[
              "Set your budget before you start looking at specific destinations to avoid overspending",
              "Research total trip costs including meals, activities, and incidentals, not just flights and hotels",
              "Consider using a honeymoon registry to help guests contribute to your dream trip",
              "Book refundable options when possible in case wedding planning affects your plans"
            ]}
          />
        </TabsContent>

        <TabsContent value="logistics">
          <GuidedNotePage
            title="Travel Logistics & Preparation"
            description="Handle all the practical details to ensure a smooth honeymoon experience"
            sections={[
              {
                title: "Travel Documentation & Requirements",
                prompts: [
                  "What travel documents and preparations do you need for your destination?",
                  "Are there any visa, vaccination, or health requirements to fulfill?",
                  "What's your timeline for getting passports, visas, or other required documents?",
                  "How will you handle travel insurance and emergency preparedness?"
                ],
                examples: [
                  "Valid passports with 6+ months remaining, visas for certain countries",
                  "Check CDC recommendations for vaccinations, health certificates, medical preparations",
                  "Allow 6-8 weeks for passport renewals, 2-4 weeks for visa processing",
                  "Comprehensive travel insurance, emergency contact list, medical information cards"
                ]
              },
              {
                title: "Packing & Travel Preparation",
                prompts: [
                  "How will you pack for your destination's climate and planned activities?",
                  "What essential items and special considerations do you need for this trip?",
                  "How will you handle luggage logistics and travel day preparations?",
                  "What technology, documents, and practical items should you bring?"
                ],
                examples: [
                  "Check weather forecasts, pack versatile outfits, comfortable walking shoes, dressy options",
                  "Sunscreen, medications, adapters for electronics, appropriate clothing for activities",
                  "Coordinate luggage space, pack essentials in carry-on, luggage locks and tags",
                  "Phone chargers, travel adapters, offline maps, printed confirmations, emergency contacts"
                ]
              },
              {
                title: "Work & Home Preparations",
                prompts: [
                  "How will you handle work responsibilities and time-off coordination?",
                  "What arrangements do you need for home, pets, or ongoing responsibilities?",
                  "How will you truly disconnect and enjoy your honeymoon without distractions?",
                  "What's your plan for staying connected vs. unplugging completely?"
                ],
                examples: [
                  "Set clear out-of-office messages, delegate urgent tasks, coordinate coverage",
                  "House/pet sitters, plant care, mail hold, security system settings",
                  "Turn off work notifications, limit social media, focus on being present together",
                  "Check in once daily vs. complete digital detox, emergency contact only"
                ]
              }
            ]}
            tips={[
              "Start visa and documentation processes early - they always take longer than expected",
              "Make copies of all important documents and store them separately from originals",
              "Research local customs, tipping practices, and cultural norms for your destination",
              "Set up automatic bill payments and delegate responsibilities before you leave"
            ]}
          />
        </TabsContent>

        <TabsContent value="memories">
          <GuidedNotePage
            title="Creating Lasting Honeymoon Memories"
            description="Plan meaningful experiences and capture memories from your first trip as newlyweds"
            sections={[
              {
                title: "Must-Do Experiences & Activities",
                prompts: [
                  "What experiences or activities are absolute must-dos for your honeymoon?",
                  "How do you want to balance planned activities with spontaneous exploration?",
                  "What unique or romantic experiences are available at your destination?",
                  "Are there any cultural experiences or local traditions you want to participate in?"
                ],
                examples: [
                  "Couple's massage, sunset dinner, local cultural sites, adventure activities you've dreamed of",
                  "Plan 2-3 key experiences, leave rest of time flexible for spontaneous discoveries",
                  "Hot air balloon ride, private beach dinner, wine tasting, cooking class together",
                  "Local festivals, traditional ceremonies, cultural workshops, historical site tours"
                ]
              },
              {
                title: "Romantic Moments & Surprises",
                prompts: [
                  "What romantic moments or surprises do you want to plan for each other?",
                  "How do you want to celebrate being newlyweds during this special trip?",
                  "What meaningful traditions do you want to start as a married couple?",
                  "How can you make this honeymoon uniquely yours and special to your relationship?"
                ],
                examples: [
                  "Surprise dinner reservation, couples spa day, meaningful gifts related to the destination",
                  "Champagne toasts at sunset, romantic room setup, celebrating with local specialties",
                  "Collect something from each place visited, take photos in same pose everywhere",
                  "Visit places meaningful to your relationship story, recreate early date experiences"
                ]
              },
              {
                title: "Memory Documentation & Keepsakes",
                prompts: [
                  "How do you want to document and remember your honeymoon experience?",
                  "What keepsakes or mementos do you want to collect during your travels?",
                  "How will you share your experiences with family and friends?",
                  "What's your plan for organizing and preserving honeymoon memories long-term?"
                ],
                examples: [
                  "Professional photo session, travel journal together, daily photo project",
                  "Local art, meaningful jewelry, pressed flowers, maps, postcards to yourselves",
                  "Social media highlights, photo albums for family, postcard updates to close friends",
                  "Create photo books, frame favorite memories, organize digital photos with dates/locations"
                ]
              }
            ]}
            tips={[
              "Book special experiences in advance, especially romantic dinners and unique activities",
              "Leave room in your schedule for spontaneous adventures and discoveries",
              "Take photos of each other, not just selfies - you'll treasure couples photos later",
              "Focus on being present with each other rather than documenting every moment"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}