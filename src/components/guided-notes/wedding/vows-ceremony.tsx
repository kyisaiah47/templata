"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VowsCeremony() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vows & Ceremony Script</h1>
        <p className="text-muted-foreground">Draft your personal wedding vows and plan your ceremony flow.</p>
      </div>

      <Tabs defaultValue="reflection" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="reflection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Relationship Reflection</span>
            <span className="sm:hidden">Reflect</span>
          </TabsTrigger>
          <TabsTrigger value="promises" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Promises & Commitments</span>
            <span className="sm:hidden">Promises</span>
          </TabsTrigger>
          <TabsTrigger value="dreams" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Future Dreams</span>
            <span className="sm:hidden">Dreams</span>
          </TabsTrigger>
          <TabsTrigger value="ceremony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Ceremony Planning</span>
            <span className="sm:hidden">Ceremony</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reflection">
          <GuidedNotePage
            title="Reflecting on Your Relationship"
            description="Think deeply about what makes your partnership special and unique"
            sections={[
              {
                title: "What You Love Most",
                prompts: [
                  "What are 3 things you love most about your partner?",
                  "What unique qualities does your partner have that you want to celebrate?",
                  "How does your partner make you feel when you're together?",
                  "What do you admire most about how your partner treats others?"
                ],
                examples: [
                  "I love how you make me laugh even on my worst days",
                  "Your kindness to strangers, your determination, your silly sense of humor",
                  "Safe, supported, like I can be completely myself",
                  "Your patience with children, generosity to friends, respect for family"
                ]
              },
              {
                title: "Your Journey Together",
                prompts: [
                  "What is your favorite memory together as a couple?",
                  "What moment did you know they were 'the one'?",
                  "How has your partner made you a better person?",
                  "What challenges have you overcome together that strengthened your bond?"
                ],
                examples: [
                  "Our first trip together when we got completely lost but had the best time",
                  "When you took care of me when I was sick without being asked",
                  "You've taught me to be more patient and understanding",
                  "Getting through job loss together, supporting each other through family illness"
                ]
              },
              {
                title: "Partnership & Growth",
                prompts: [
                  "How do you complement each other as partners?",
                  "What have you learned about love from being with your partner?",
                  "How do you support each other's dreams and goals?",
                  "What makes your relationship different from other relationships you've had?"
                ],
                examples: [
                  "You're organized where I'm creative, calm where I'm anxious",
                  "That love is choosing each other every day, not just a feeling",
                  "Encouraging career changes, celebrating successes, being there for failures",
                  "Complete honesty, genuine friendship, wanting to grow together"
                ]
              }
            ]}
            tips={[
              "Write from the heart using specific examples and stories",
              "Focus on personality traits and character rather than just physical attributes",
              "Think about moments that show your partner's true character",
              "Consider how your relationship has evolved and deepened over time"
            ]}
          />
        </TabsContent>

        <TabsContent value="promises">
          <GuidedNotePage
            title="Promises & Commitments"
            description="The vows and commitments you want to make to each other for your future"
            sections={[
              {
                title: "Daily Life Commitments",
                prompts: [
                  "What promises do you want to make about your everyday life together?",
                  "How do you want to support each other through daily challenges?",
                  "What does 'being a team' mean to you in practical terms?",
                  "How will you prioritize your relationship in busy times?"
                ],
                examples: [
                  "I promise to share household responsibilities and make decisions together",
                  "I vow to listen when you need to vent and celebrate your daily wins",
                  "Making decisions together, dividing responsibilities fairly, supporting each other's goals",
                  "Weekly date nights, daily check-ins, putting phones away during dinner"
                ]
              },
              {
                title: "Through Challenges & Growth",
                prompts: [
                  "What promises will you make about facing difficulties together?",
                  "How do you want to handle disagreements and conflicts as a married couple?",
                  "What commitments will you make about growing and changing together?",
                  "How will you support each other through major life changes?"
                ],
                examples: [
                  "I promise to face challenges as a team and never give up on us",
                  "We'll fight fair, listen to understand, and never go to bed angry",
                  "I vow to grow with you and love who you become, not just who you are today",
                  "Supporting career changes, family additions, health challenges, new adventures"
                ]
              },
              {
                title: "Love & Devotion Promises",
                prompts: [
                  "What promises do you want to make about your love and faithfulness?",
                  "How will you keep romance and intimacy alive in your marriage?",
                  "What traditions do you want to create together as a married couple?",
                  "What does 'choosing each other every day' look like practically?"
                ],
                examples: [
                  "I promise to be faithful in heart, mind, and body for all our days",
                  "Regular date nights, surprise gestures, physical affection, emotional intimacy",
                  "Annual trips, holiday traditions, weekly rituals, celebration customs",
                  "Small daily choices to show love, putting each other first, working on our relationship"
                ]
              }
            ]}
            tips={[
              "Make promises that are specific and actionable rather than just general statements",
              "Consider both big life promises and small daily commitments",
              "Think about what your partner most needs to hear from you",
              "Balance aspirational goals with realistic, achievable promises"
            ]}
          />
        </TabsContent>

        <TabsContent value="dreams">
          <GuidedNotePage
            title="Future Dreams & Hopes"
            description="Your shared vision for the life you want to build together"
            sections={[
              {
                title: "Life Goals & Adventures",
                prompts: [
                  "What are your biggest dreams and goals as a married couple?",
                  "What adventures do you want to share together?",
                  "How do you envision your life in 5, 10, or 20 years?",
                  "What experiences are on your 'couple's bucket list'?"
                ],
                examples: [
                  "Build a loving family, travel the world, create a beautiful home together",
                  "Hiking adventures, international travel, learning new skills together",
                  "Established in careers, maybe with kids, deeper friendships, financial security",
                  "See the Northern Lights, visit all the national parks, learn to cook Italian food"
                ]
              },
              {
                title: "Legacy & Impact",
                prompts: [
                  "What kind of legacy do you want to build together?",
                  "How do you want to impact your community and family as a couple?",
                  "What values do you want to be known for as a partnership?",
                  "How do you want to give back to the world together?"
                ],
                examples: [
                  "A family known for generosity, kindness, and always having an open door",
                  "Volunteering together, mentoring young couples, supporting local causes",
                  "Integrity, compassion, humor, reliability, unconditional love",
                  "Charitable giving, environmental stewardship, community service, mentoring"
                ]
              },
              {
                title: "Growing Old Together",
                prompts: [
                  "How do you envision growing old together?",
                  "What do you hope your relationship looks like in your later years?",
                  "What traditions do you want to maintain throughout your marriage?",
                  "How do you want to continue showing love when you're 80 years old?"
                ],
                examples: [
                  "Sitting on our front porch together, still laughing at inside jokes",
                  "Best friends who still hold hands, still learning new things together",
                  "Annual anniversary trips, Sunday morning coffee, evening walks",
                  "Still bringing you flowers, still dancing in the kitchen, still saying 'I love you' every day"
                ]
              }
            ]}
            tips={[
              "Paint a picture that feels both aspirational and achievable",
              "Include both big dreams and small, everyday hopes",
              "Think about the kind of couple you want to be, not just what you want to have",
              "Consider how your individual dreams can support and enhance each other"
            ]}
          />
        </TabsContent>

        <TabsContent value="ceremony">
          <GuidedNotePage
            title="Ceremony Planning & Structure"
            description="Plan the structure and special elements of your wedding ceremony"
            sections={[
              {
                title: "Ceremony Elements & Flow",
                prompts: [
                  "What traditions or readings do you want to include in your ceremony?",
                  "Are there any cultural or religious elements to incorporate?",
                  "How do you want to structure the order of your ceremony?",
                  "What special unity ceremonies or rituals do you want to include?"
                ],
                examples: [
                  "Include meaningful quotes, poems, religious texts, family readings",
                  "Cultural traditions, religious blessings, family customs, heritage elements",
                  "Processional, opening words, vows, rings, pronouncement, kiss, recessional",
                  "Unity candle, handfasting, sand ceremony, tree planting, cultural rituals"
                ]
              },
              {
                title: "Personalization & Music",
                prompts: [
                  "What music do you want during different parts of the ceremony?",
                  "How will you personalize the ceremony to reflect your relationship?",
                  "What role do you want family members or friends to play?",
                  "Are there any surprise elements or special moments planned?"
                ],
                examples: [
                  "Special songs for processional, recessional, unity ceremony, or transitions",
                  "Personal vows, meaningful locations, symbols that represent your journey",
                  "Parents walking you down aisle, friends doing readings, family blessing",
                  "Musical performances, special announcements, meaningful object exchanges"
                ]
              },
              {
                title: "Officiant Coordination & Final Details",
                prompts: [
                  "Who will officiate and what tone do you want for the ceremony?",
                  "What specific instructions or preferences do you have for your officiant?",
                  "How will you handle ring exchange and any special wording?",
                  "What final touches will make the ceremony uniquely yours?"
                ],
                examples: [
                  "Friend, family member, or professional officiant with warm, personal style",
                  "Include humor, keep it short, focus on love and commitment, mention families",
                  "Traditional vows vs. personal vows, ring warming, special ring presentation",
                  "Personalized ceremony programs, meaningful venue choice, special decorations"
                ]
              }
            ]}
            tips={[
              "Work with your officiant to create a ceremony that feels authentic to you",
              "Practice reading your vows out loud beforehand to check timing and emotion",
              "Have backup plans for outdoor ceremonies or technical elements",
              "Keep ceremony length appropriate for your guest comfort (15-30 minutes typical)"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}