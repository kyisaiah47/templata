"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Music() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Music & Playlist Planning</h1>
        <p className="text-muted-foreground">Curate the perfect soundtrack for your wedding day, from ceremony to reception.</p>
      </div>

      <Tabs defaultValue="ceremony" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="ceremony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Ceremony Music</span>
            <span className="sm:hidden">Ceremony</span>
          </TabsTrigger>
          <TabsTrigger value="cocktail" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cocktail & Dinner</span>
            <span className="sm:hidden">Cocktail</span>
          </TabsTrigger>
          <TabsTrigger value="dancing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Dancing & Party</span>
            <span className="sm:hidden">Dancing</span>
          </TabsTrigger>
          <TabsTrigger value="special" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Special Moments</span>
            <span className="sm:hidden">Special</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ceremony">
          <GuidedNotePage
            title="Ceremony Music Selection"
            description="Choose meaningful music for your wedding ceremony moments"
            sections={[
              {
                title: "Processional & Recessional",
                prompts: [
                  "What songs do you want for the processional and recessional?",
                  "How do you want to handle different processional songs for different people?",
                  "What's your preference for live music vs. recorded music during ceremony?",
                  "Are there any family or cultural music traditions to incorporate?"
                ],
                examples: [
                  "Canon in D, At Last, Perfect by Ed Sheeran, A Thousand Years",
                  "Wedding party enters to one song, bride enters to special song",
                  "Live string quartet, recorded music with good sound system, or mix of both",
                  "Cultural wedding marches, family songs, religious traditions"
                ]
              },
              {
                title: "Unity Ceremony & Interludes",
                prompts: [
                  "Do you want music during special ceremony moments (signing, unity ceremony)?",
                  "What songs would be meaningful during quiet ceremony interludes?",
                  "How do you want to handle timing and cues for ceremony music?",
                  "Are there any instrumental versions of special songs you'd prefer?"
                ],
                examples: [
                  "Soft instrumental during ring exchange, acoustic version of your song",
                  "First dance song instrumental, meaningful lyrics that represent your love",
                  "Coordinate with officiant and musicians for smooth transitions",
                  "Acoustic versions of pop songs, instrumental versions of favorites"
                ]
              },
              {
                title: "Religious & Cultural Elements",
                prompts: [
                  "Are there any religious or cultural musical requirements for your ceremony?",
                  "How will you balance traditional and modern music choices?",
                  "What's your plan for incorporating both families' musical traditions?",
                  "Do you need specific versions or arrangements for cultural significance?"
                ],
                examples: [
                  "Ave Maria, Amazing Grace, Hebrew wedding songs, cultural blessing music",
                  "Mix of traditional wedding march with modern love songs",
                  "Include songs from both cultural backgrounds or family traditions",
                  "Specific religious versions, bilingual songs, traditional arrangements"
                ]
              }
            ]}
            tips={[
              "Have recorded backup versions ready even if using live musicians",
              "Consider the acoustics of your venue when choosing ceremony music",
              "Test music volume and timing during your rehearsal",
              "Coordinate music cues with your officiant and wedding coordinator"
            ]}
          />
        </TabsContent>

        <TabsContent value="cocktail">
          <GuidedNotePage
            title="Cocktail Hour & Dinner Music"
            description="Create the perfect ambient atmosphere for socializing and dining"
            sections={[
              {
                title: "Cocktail Hour Atmosphere",
                prompts: [
                  "What vibe do you want during cocktail hour (upbeat, mellow, sophisticated)?",
                  "How do you want the music to enhance conversation without overpowering?",
                  "What genres or artists best represent your style as a couple?",
                  "Do you want to take music requests from guests during this time?"
                ],
                examples: [
                  "Jazz standards for sophistication, acoustic indie for relaxed, light pop for upbeat",
                  "Background volume that allows easy conversation, instrumental preferred",
                  "Mix your favorite genres - indie rock, jazz, folk, contemporary covers",
                  "Request cards at bar or cocktail tables, online form, or just DJ discretion"
                ]
              },
              {
                title: "Dinner Music Selection",
                prompts: [
                  "What dinner music will encourage conversation but stay in the background?",
                  "Are there any songs that represent your relationship story or memories?",
                  "How do you want to transition from cocktail hour to dinner music?",
                  "What's your preference for vocals vs. instrumental during dining?"
                ],
                examples: [
                  "Soft acoustic covers, instrumental versions, singer-songwriter classics",
                  "Songs from your first date, travel playlist, meaningful lyrics from your journey",
                  "Gradual tempo decrease, similar genres but softer volume and energy",
                  "Mix of both - soft vocals for emotional connection, instrumental for conversation"
                ]
              },
              {
                title: "Personal Touches & Memories",
                prompts: [
                  "Which songs hold special meaning for your relationship that guests should hear?",
                  "How do you want to incorporate music from important moments in your story?",
                  "What songs remind you of family members or friends who are celebrating with you?",
                  "Are there any inside jokes or fun songs that represent your personalities?"
                ],
                examples: [
                  "Song from first dance, music from your proposal, travel soundtrack",
                  "Concert you attended together, songs you always sing in the car",
                  "Parents' wedding song, friends' favorite songs, family tradition music",
                  "Silly songs you both love, karaoke favorites, songs that make you laugh"
                ]
              }
            ]}
            tips={[
              "Keep volume at conversation level - guests should easily talk over the music",
              "Create a longer playlist than needed to avoid repetition",
              "Consider your venue's acoustics and speaker placement for even sound",
              "Mix familiar crowd-pleasers with personal favorites for broad appeal"
            ]}
          />
        </TabsContent>

        <TabsContent value="dancing">
          <GuidedNotePage
            title="Dancing & Party Music"
            description="Get everyone on the dance floor with the perfect party playlist"
            sections={[
              {
                title: "First Dance & Special Dances",
                prompts: [
                  "What's your first dance song and do you want it edited for length?",
                  "How do you want to handle parent dances and other special dance moments?",
                  "Are there any special choreography or surprise elements for your dances?",
                  "What backup songs do you have in case your first choices don't work technically?"
                ],
                examples: [
                  "Full 4-minute song vs. 2-3 minute edit for comfort, fade out vs. natural ending",
                  "Father-daughter and mother-son dances, anniversary dance for long-married couples",
                  "Simple choreographed moves, surprise song change, involvement of wedding party",
                  "Similar tempo and mood alternatives in case of technical difficulties"
                ]
              },
              {
                title: "Multi-Generational Party Music",
                prompts: [
                  "What songs will get different generations dancing together?",
                  "How will you balance current hits with classic crowd-pleasers?",
                  "What's your strategy for keeping energy high throughout the reception?",
                  "Are there any cultural or family dance traditions to include?"
                ],
                examples: [
                  "Mix of current Top 40, 80s/90s hits, Motown classics, country favorites",
                  "Start with familiar oldies, build to current hits, end with sing-alongs",
                  "Plan energy peaks and valleys, slow songs for breaks, group dances",
                  "Electric Slide, cultural circle dances, family tradition songs"
                ]
              },
              {
                title: "Must-Play & Do-Not-Play Lists",
                prompts: [
                  "What songs absolutely must be played during your reception?",
                  "Are there any songs you definitely do NOT want played?",
                  "How will you handle explicit lyrics or potentially offensive content?",
                  "What's your policy on guest requests vs. sticking to your planned playlist?"
                ],
                examples: [
                  "Your favorite songs, family requests, songs with special meaning",
                  "Ex's favorite song, overplayed wedding songs, music that brings bad memories",
                  "Clean versions only, explicit lyrics okay after certain time, no restrictions",
                  "Take requests but DJ has final say, stick to planned list, open to all requests"
                ]
              }
            ]}
            tips={[
              "Test your first dance song timing - most couples prefer shorter versions",
              "Create separate playlists for different energy levels and times of night",
              "Give your DJ flexibility to read the crowd and adjust on the fly",
              "Consider your venue's sound restrictions and neighbor noise policies"
            ]}
          />
        </TabsContent>

        <TabsContent value="special">
          <GuidedNotePage
            title="Special Moments & Timeline Music"
            description="Perfect musical accompaniment for key reception events and transitions"
            sections={[
              {
                title: "Reception Event Music",
                prompts: [
                  "What songs do you want for cake cutting, bouquet toss, and other traditions?",
                  "How will music cue and enhance your reception timeline events?",
                  "What's your vision for grand entrance and exit music?",
                  "Are there any surprise musical moments or announcements planned?"
                ],
                examples: [
                  "Sweet songs for cake cutting, fun upbeat for bouquet toss, romantic for last dance",
                  "Music builds anticipation, signals transitions, creates energy for each moment",
                  "Upbeat entrance song, meaningful or celebratory exit music",
                  "Special performances, anniversary recognition, birthday surprises"
                ]
              },
              {
                title: "Transition & Flow Management",
                prompts: [
                  "How will you use music to manage the flow and transitions between events?",
                  "What's your plan for maintaining energy during dinner service or breaks?",
                  "How will music signal important moments to your guests?",
                  "What's your strategy for the last dance and send-off music?"
                ],
                examples: [
                  "Fade music for announcements, build energy for dancing, soften for speeches",
                  "Upbeat background during dinner service, smooth transitions between courses",
                  "Special songs to gather guests for events, volume changes for attention",
                  "Romantic slow song for last dance, celebratory send-off music"
                ]
              },
              {
                title: "Vendor Coordination & Technical Planning",
                prompts: [
                  "How will you communicate timing and music cues to your DJ or band?",
                  "What technical backup plans do you need for music equipment failures?",
                  "How will you ensure music volume is appropriate for your venue and guests?",
                  "What's your plan for coordinating music with other vendors (photographers, etc.)?"
                ],
                examples: [
                  "Detailed timeline with music cues, specific songs noted for each moment",
                  "Backup playlist on multiple devices, spare equipment, alternate power sources",
                  "Sound check before guests arrive, volume adjustments for elderly guests",
                  "Coordinate with photographer for first dance timing, videographer needs"
                ]
              }
            ]}
            tips={[
              "Create a detailed timeline with specific music cues for your DJ or band",
              "Have backup devices with your playlists in case of technical issues",
              "Do a sound check before guests arrive to test volume and quality",
              "Designate someone to communicate last-minute music changes to your DJ"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}