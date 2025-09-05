"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Registry() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Registry Management</h1>
        <p className="text-muted-foreground">Create and manage your wedding registry to help guests choose meaningful gifts.</p>
      </div>

      <Tabs defaultValue="planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Registry Planning</span>
            <span className="sm:hidden">Planning</span>
          </TabsTrigger>
          <TabsTrigger value="categories" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Gift Categories</span>
            <span className="sm:hidden">Categories</span>
          </TabsTrigger>
          <TabsTrigger value="management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Management</span>
            <span className="sm:hidden">Manage</span>
          </TabsTrigger>
          <TabsTrigger value="creative" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Creative Options</span>
            <span className="sm:hidden">Creative</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="planning">
          <GuidedNotePage
            title="Registry Planning & Strategy"
            description="Develop your approach to creating a meaningful and useful wedding registry"
            sections={[
              {
                title: "Registry Philosophy & Priorities",
                prompts: [
                  "What are your priorities for setting up a wedding registry?",
                  "How do you want to balance practical everyday items with special wish-list pieces?",
                  "What's your approach to building your life together through your registry choices?",
                  "How do you want your registry to reflect your style and values as a couple?"
                ],
                examples: [
                  "Focus on home essentials for new life together, upgrade current items, or build dream kitchen",
                  "Mix of everyday necessities (70%) with special splurge items (30%)",
                  "Items that help establish traditions, cooking together, entertaining friends",
                  "Sustainable brands, quality over quantity, items that reflect shared interests"
                ]
              },
              {
                title: "Store Selection & Strategy",
                prompts: [
                  "Which stores or online platforms work best for your guest demographics?",
                  "How will you ensure accessibility for guests with different shopping preferences?",
                  "What's your strategy for price range diversity across different retailers?",
                  "How will you handle shipping and delivery logistics for your guests?"
                ],
                examples: [
                  "Amazon for convenience, Target for accessibility, Crate & Barrel for quality",
                  "Online options for distant guests, physical stores for older relatives",
                  "Budget-friendly options at Target, mid-range at Amazon, luxury at specialty stores",
                  "Direct shipping to your address, multiple delivery dates, gift receipt options"
                ]
              },
              {
                title: "Budget Guidance & Guest Considerations",
                prompts: [
                  "What's your budget range guidance for different guest relationships?",
                  "How will you accommodate guests with varying financial situations?",
                  "What's your strategy for group gifts or larger items?",
                  "How will you handle gifts outside of your registry preferences?"
                ],
                examples: [
                  "Close family $100-300, friends $50-150, coworkers $25-75, distant relatives $25-100",
                  "Items from $25-500+ to accommodate all budgets, group gift options for expensive items",
                  "Mark expensive items for group purchasing, suggest cash fund contributions",
                  "Graciously accept all gifts, focus on the thoughtfulness behind them"
                ]
              }
            ]}
            tips={[
              "Start your registry early but don't complete it until closer to sending invitations",
              "Register for more items than you have guests to provide variety and options",
              "Include items at various price points from $25 to $300+ for all budget ranges",
              "Don't put registry info on invitations - use your wedding website instead"
            ]}
          />
        </TabsContent>

        <TabsContent value="categories">
          <GuidedNotePage
            title="Gift Categories & Item Selection"
            description="Choose meaningful items across different categories to build your home together"
            sections={[
              {
                title: "Kitchen & Cooking Essentials",
                prompts: [
                  "What kitchen and cooking items do you need most for your new home?",
                  "Which appliances would make the biggest difference in your daily cooking routine?",
                  "What cookware and bakeware gaps do you currently have?",
                  "How will you balance everyday cooking needs with special occasion items?"
                ],
                examples: [
                  "Stand mixer, quality knife set, non-stick pans, dinnerware for 8-12 people",
                  "Instant Pot for busy weeknights, coffee maker, blender for smoothies",
                  "Complete cookware set, baking sheets, mixing bowls, cutting boards",
                  "Daily use items like plates and glasses, special pieces like serving platters"
                ]
              },
              {
                title: "Home & Lifestyle Items",
                prompts: [
                  "Which bedroom, bathroom, and home decor items are priorities?",
                  "What storage and organization solutions would improve your daily life?",
                  "How do you want to upgrade your current home setup?",
                  "What items will help you establish your style as a couple?"
                ],
                examples: [
                  "Quality sheet sets, bath towels, artwork, furniture pieces, lighting",
                  "Closet organizers, storage containers, shelving systems, baskets",
                  "Upgrade from college furniture, match existing style, improve comfort",
                  "Items that reflect both your tastes, create cohesive home aesthetic"
                ]
              },
              {
                title: "Special Occasions & Entertainment",
                prompts: [
                  "What items do you need for entertaining guests and hosting gatherings?",
                  "Which special occasion pieces would you love but wouldn't buy yourselves?",
                  "How do you want to prepare for future holiday celebrations and traditions?",
                  "What items will help you create memorable experiences at home?"
                ],
                examples: [
                  "Serving pieces, wine glasses, cocktail tools, board games, outdoor furniture",
                  "Fine china, crystal stemware, silver serving pieces, expensive kitchen gadgets",
                  "Holiday dinnerware, seasonal decor, baking supplies for traditions",
                  "Items for dinner parties, movie nights, game nights, outdoor entertaining"
                ]
              }
            ]}
            tips={[
              "Review what you already own to avoid duplicates and identify gaps",
              "Consider your lifestyle - don't register for items you won't actually use",
              "Think about your space constraints and storage capabilities",
              "Include completion items for sets you already started (dishes, linens, etc.)"
            ]}
          />
        </TabsContent>

        <TabsContent value="management">
          <GuidedNotePage
            title="Registry Management & Maintenance"
            description="Keep your registry current and effectively communicate it to your guests"
            sections={[
              {
                title: "Registry Maintenance & Updates",
                prompts: [
                  "How will you organize and regularly update your registry as items are purchased?",
                  "What's your system for monitoring what's been bought vs. what's still available?",
                  "How often will you review and refresh your registry selections?",
                  "What's your plan for adding items if popular ones sell out quickly?"
                ],
                examples: [
                  "Check registry weekly, update quantities, remove discontinued items",
                  "Spreadsheet tracking across multiple stores, automated alerts from stores",
                  "Monthly review to add new items, remove things you no longer want",
                  "Keep a wishlist of backup items to add if main selections are purchased"
                ]
              },
              {
                title: "Guest Communication Strategy",
                prompts: [
                  "What's your plan for communicating registry information to guests?",
                  "How will you handle different guest preferences for shopping methods?",
                  "What information will you include on your wedding website about your registry?",
                  "How will you manage guests who ask for registry details directly?"
                ],
                examples: [
                  "Registry links on wedding website, word of mouth through family",
                  "Multiple store options, both online and physical locations listed",
                  "Brief note about registry purpose, links to stores, gift policy statement",
                  "Polite direction to wedding website, family members can share details"
                ]
              },
              {
                title: "Gift Tracking & Thank You Coordination",
                prompts: [
                  "How will you track gifts received vs. thank you notes sent?",
                  "What's your system for handling gifts that arrive before the wedding?",
                  "How will you manage duplicate gifts or items you need to return/exchange?",
                  "What's your strategy for coordinating gift tracking with thank you card writing?"
                ],
                examples: [
                  "Spreadsheet with gift received date, thank you note sent date, gift details",
                  "Designated space for early gifts, tracking system starting at engagement party",
                  "Research store return policies ahead of time, keep gift receipts organized",
                  "Update tracking immediately when gifts arrive, weekly thank you note sessions"
                ]
              }
            ]}
            tips={[
              "Set up registry tracking systems before your engagement party",
              "Research return and exchange policies for all your registry stores",
              "Keep gift boxes and receipts organized in case exchanges are needed",
              "Update your registry regularly, especially after engagement parties and showers"
            ]}
          />
        </TabsContent>

        <TabsContent value="creative">
          <GuidedNotePage
            title="Alternative & Creative Registry Options"
            description="Explore non-traditional registry ideas that fit your lifestyle and values"
            sections={[
              {
                title: "Experience & Fund Registries",
                prompts: [
                  "Would you prefer cash funds for specific goals (house, honeymoon, experiences)?",
                  "What experiences would be more meaningful to you than physical gifts?",
                  "How do you want to present fund options to traditional gift-giving guests?",
                  "What specific financial goals could your registry help you achieve?"
                ],
                examples: [
                  "Honeymoon fund, down payment fund, home renovation fund, date night fund",
                  "Cooking classes together, wine tastings, weekend getaways, concert tickets",
                  "Explain how funds help with life goals, still offer traditional gift options",
                  "First home down payment, debt payoff, starting emergency fund, travel goals"
                ]
              },
              {
                title: "Charitable & Meaningful Alternatives",
                prompts: [
                  "Are there charitable donations or causes you'd like guests to support instead?",
                  "How do you want to balance traditional gifts with charitable giving options?",
                  "What causes are meaningful to you as a couple that guests could contribute to?",
                  "How will you communicate charitable registry options without seeming preachy?"
                ],
                examples: [
                  "Charity registry where guests donate to your favorite causes in your honor",
                  "50/50 split between traditional registry and charitable donations",
                  "Animal shelters, education funds, environmental causes, local community organizations",
                  "Brief explanation of why causes matter to you, emphasize it's optional"
                ]
              },
              {
                title: "Handmade & Personal Gifts",
                prompts: [
                  "What handmade or personalized items would be meaningful to receive?",
                  "How will you handle guests who prefer to give cash or personal gifts?",
                  "What family heirlooms or sentimental items might be offered to you?",
                  "How do you want to encourage creativity while still getting items you need?"
                ],
                examples: [
                  "Custom artwork, photo albums, hand-knitted items, recipe collections",
                  "Graciously accept all gifts, focus on thoughtfulness over registry adherence",
                  "Family recipes, vintage items, handmade quilts, passed-down jewelry",
                  "Include note that handmade gifts are welcome alongside traditional registry"
                ]
              }
            ]}
            tips={[
              "Be clear about your preferences but remain flexible and gracious",
              "Consider your guest demographics - older relatives may prefer traditional gifts",
              "Make sure fund registry platforms are reputable and easy to use",
              "Remember that some guests will always prefer to shop off-registry"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}