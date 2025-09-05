"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Photos() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Photography Shot List</h1>
        <p className="text-muted-foreground">Create a comprehensive shot list to ensure your photographer captures all the important moments.</p>
      </div>

      <Tabs defaultValue="pre-ceremony" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="pre-ceremony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Pre-Ceremony</span>
            <span className="sm:hidden">Pre</span>
          </TabsTrigger>
          <TabsTrigger value="ceremony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Ceremony</span>
            <span className="sm:hidden">Ceremony</span>
          </TabsTrigger>
          <TabsTrigger value="groups" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Group Photos</span>
            <span className="sm:hidden">Groups</span>
          </TabsTrigger>
          <TabsTrigger value="reception" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Reception</span>
            <span className="sm:hidden">Reception</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pre-ceremony">
          <GuidedNotePage
            title="Pre-Ceremony Photography"
            description="Capture getting ready moments and important details before your ceremony"
            sections={[
              {
                title: "Getting Ready Moments",
                prompts: [
                  "What getting-ready moments do you want captured for both bride and groom?",
                  "Which family members should be included in pre-ceremony photos?",
                  "What's the timeline for getting ready photos and when should they start?",
                  "Are there any special traditions or moments during preparation to document?"
                ],
                examples: [
                  "Bride getting makeup done, putting on dress, first look with parents, bridesmaids helping",
                  "Parents seeing bride in dress, siblings reactions, grandparents emotional moments",
                  "Start photos 2 hours before ceremony to capture relaxed, natural moments",
                  "Something old/new/borrowed/blue, family heirloom placement, blessing ceremonies"
                ]
              },
              {
                title: "Detail & Styling Shots",
                prompts: [
                  "Which detail shots are most important to you (rings, dress, shoes, bouquet)?",
                  "What styling elements should the photographer focus on?",
                  "How do you want your wedding attire and accessories documented?",
                  "Are there any special items with sentimental value to photograph?"
                ],
                examples: [
                  "Wedding rings on invitation or bouquet, shoes with dress, bouquet close-ups",
                  "Dress hanging in beautiful light, boutonniere details, jewelry arrangements",
                  "Full dress photos, suit details, accessories laid out artistically",
                  "Grandmother's pearl necklace, father's watch, family Bible, wedding gift from partner"
                ]
              },
              {
                title: "Venue & Setup Documentation",
                prompts: [
                  "What venue and decoration photos do you want before guests arrive?",
                  "Which setup elements should be captured while they're pristine?",
                  "How do you want the ceremony space documented?",
                  "Are there any special setup details that represent your relationship?"
                ],
                examples: [
                  "Venue exterior, ceremony aisle, altar setup, floral arrangements",
                  "Place cards display, centerpieces, welcome signs, bar setup",
                  "Empty ceremony space with perfect lighting, decorated arch or backdrop",
                  "Photos from your travels as table numbers, custom signage with meaningful quotes"
                ]
              }
            ]}
            tips={[
              "Share your shot list with your photographer at least 2 weeks before the wedding",
              "Consider natural lighting when scheduling getting ready photos",
              "Include backup indoor locations in case of bad weather",
              "Ask your photographer about timeline recommendations for each type of shot"
            ]}
          />
        </TabsContent>

        <TabsContent value="ceremony">
          <GuidedNotePage
            title="Ceremony Photography Coverage"
            description="Document your wedding ceremony from multiple angles and perspectives"
            sections={[
              {
                title: "Key Ceremony Moments",
                prompts: [
                  "What are the most important ceremony moments that must be captured?",
                  "How do you want your processional and recessional documented?",
                  "Which specific parts of your vows or ceremony are most meaningful?",
                  "Are there any cultural or religious elements that require special attention?"
                ],
                examples: [
                  "First look walking down aisle, vows, ring exchange, first kiss, recessional celebration",
                  "Bride's entrance, groom's reaction, wedding party processional, parents walking bride",
                  "Exchange of personal vows, ring ceremony, unity candle or cultural traditions",
                  "Religious rituals, cultural ceremonies, blessing moments, family traditions"
                ]
              },
              {
                title: "Guest Reactions & Emotions",
                prompts: [
                  "Which guests' reactions are most important to photograph during the ceremony?",
                  "How do you want emotional moments and tears documented?",
                  "What family dynamics or relationships should the photographer focus on?",
                  "Are there any surprise reactions or special moments you're anticipating?"
                ],
                examples: [
                  "Parents' reactions, grandparents crying, best friend's joy, siblings' emotions",
                  "Happy tears during vows, laughter at funny moments, emotional embraces",
                  "Both sets of parents, close family members, wedding party expressions",
                  "Surprise elements, children's reactions, elderly relatives' special moments"
                ]
              },
              {
                title: "Ceremony Coverage Angles",
                prompts: [
                  "What angles and perspectives do you prefer for ceremony photography?",
                  "How do you want wide shots vs. close-up moments balanced?",
                  "Are there any restrictions or preferences for photographer positioning?",
                  "What's your preference for color vs. black and white ceremony photos?"
                ],
                examples: [
                  "Mix of altar view, guest perspective, side angles, and behind-the-scenes shots",
                  "Wide shots of full ceremony space, intimate close-ups of vows and rings",
                  "Photographer positioned to not block guest views, altar access permissions",
                  "Full color for flowers and details, black and white for emotional portraits"
                ]
              }
            ]}
            tips={[
              "Discuss ceremony photography restrictions with your officiant beforehand",
              "Consider having a second photographer for multiple angles during key moments",
              "Plan ceremony timing to take advantage of the best natural lighting",
              "Communicate any family sensitivities or dynamics to your photographer"
            ]}
          />
        </TabsContent>

        <TabsContent value="groups">
          <GuidedNotePage
            title="Family & Group Photography"
            description="Organize efficient group photo sessions with all important family combinations"
            sections={[
              {
                title: "Family Photo Combinations",
                prompts: [
                  "Which family combinations are most important to capture?",
                  "How do you want to organize immediate vs. extended family photos?",
                  "What's your strategy for including step-families or complex family situations?",
                  "Are there any family members who need priority due to travel or health?"
                ],
                examples: [
                  "Couple with each set of parents, siblings, grandparents, immediate family groups",
                  "Start with immediate family, then add extended family, then close friends",
                  "Include step-parents respectfully, separate photos if needed for comfort",
                  "Prioritize elderly or traveling family members for early photo sessions"
                ]
              },
              {
                title: "Wedding Party & Friend Groups",
                prompts: [
                  "What wedding party combinations do you want photographed?",
                  "Which friend groups or special relationships should be documented?",
                  "How do you want to balance posed vs. candid group shots?",
                  "Are there any college friends, work colleagues, or special groups to include?"
                ],
                examples: [
                  "Full wedding party, bridesmaids only, groomsmen only, couple with each side",
                  "College roommates, childhood friends, work friends, hobby or sports groups",
                  "Mix of formal posed shots and fun, relaxed candid moments",
                  "Sorority sisters, military buddies, travel companions, shared interest groups"
                ]
              },
              {
                title: "Group Photo Logistics",
                prompts: [
                  "What's your plan for organizing and timing group photos efficiently?",
                  "Who will help gather people and coordinate the photo sessions?",
                  "How will you handle group photos if weather doesn't cooperate?",
                  "What's your backup plan for missing family members or last-minute changes?"
                ],
                examples: [
                  "Assign specific family members to gather each group, create timeline",
                  "Wedding coordinator or designated family member as photo wrangler",
                  "Indoor backup locations identified, covered outdoor areas planned",
                  "Pre-planned smaller groups if key people can't make it, Photoshop options"
                ]
              }
            ]}
            tips={[
              "Create a detailed list with names and relationships for your photographer",
              "Assign helpers to gather groups - don't make the couple responsible",
              "Plan group photos for optimal lighting times, usually golden hour",
              "Keep group photo sessions under 30 minutes to maintain guest energy"
            ]}
          />
        </TabsContent>

        <TabsContent value="reception">
          <GuidedNotePage
            title="Reception & Celebration Photography"
            description="Capture the joy and celebration of your wedding reception"
            sections={[
              {
                title: "Reception Events & Traditions",
                prompts: [
                  "Which reception events and traditions do you want fully documented?",
                  "How do you want your first dance and special dances captured?",
                  "What's important about cake cutting, toasts, and other milestone moments?",
                  "Are there any special performances or surprise elements to photograph?"
                ],
                examples: [
                  "Grand entrance, first dance, parent dances, cake cutting, bouquet toss",
                  "Wide shots and close-ups of dancing, emotional moments during special dances",
                  "Toasts expressions, cake cutting process, champagne toasts, special traditions",
                  "Surprise performances, cultural dances, special announcements, guest surprises"
                ]
              },
              {
                title: "Candid Celebration Moments",
                prompts: [
                  "What candid moments and interactions are most meaningful to capture?",
                  "How do you want dancing and party atmosphere documented?",
                  "Which guest interactions or relationships should the photographer focus on?",
                  "What's your preference for documenting the overall reception energy?"
                ],
                examples: [
                  "Guests laughing, emotional conversations, children playing, elderly relatives enjoying",
                  "Dance floor energy, group dancing, silly moments, celebration atmosphere",
                  "Old friends reconnecting, family bonding, intergenerational interactions",
                  "Wide shots of packed dance floor, intimate table conversations, joyful moments"
                ]
              },
              {
                title: "Reception Details & Atmosphere",
                prompts: [
                  "What reception decor and details should be photographed throughout the night?",
                  "How do you want the venue transformation from ceremony to reception documented?",
                  "What final shots do you want at the end of the celebration?",
                  "Are there any late-night or after-party moments to capture?"
                ],
                examples: [
                  "Centerpieces, lighting changes, food displays, guest book area, favors",
                  "Room flip process, lighting changes, decoration transitions, ambiance shifts",
                  "Last dance, send-off preparations, cleanup moments, final farewell hugs",
                  "After-party setup, late-night snacks, guest departures, sparkler send-off"
                ]
              }
            ]}
            tips={[
              "Discuss lighting preferences for reception dancing - flash vs. ambient",
              "Plan timing for key events to optimize photographer positioning",
              "Consider guest comfort when planning flash photography during dinner",
              "Communicate your send-off plans so photographer can prepare for final shots"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}