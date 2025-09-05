"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Emergency() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Day Emergency Kit</h1>
        <p className="text-muted-foreground">Prepare for common wedding day mishaps with a comprehensive emergency kit.</p>
      </div>

      <Tabs defaultValue="beauty" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="beauty" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Beauty & Touch-Ups</span>
            <span className="sm:hidden">Beauty</span>
          </TabsTrigger>
          <TabsTrigger value="wardrobe" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Wardrobe Fixes</span>
            <span className="sm:hidden">Wardrobe</span>
          </TabsTrigger>
          <TabsTrigger value="health" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Health & Comfort</span>
            <span className="sm:hidden">Health</span>
          </TabsTrigger>
          <TabsTrigger value="tools" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tools & Practical</span>
            <span className="sm:hidden">Tools</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="beauty">
          <GuidedNotePage
            title="Beauty & Touch-Up Essentials"
            description="Maintain your perfect look throughout the wedding day"
            sections={[
              {
                title: "Makeup Touch-Up Kit",
                prompts: [
                  "What makeup items will need the most touch-ups throughout the day?",
                  "Which specific products match your wedding day makeup look?",
                  "How will you handle makeup emergencies like smudging or crying?",
                  "What tools do you need for quick touch-ups between events?"
                ],
                examples: [
                  "Lipstick in exact wedding shade, powder for shine control, mascara for tears",
                  "Bring exact foundation shade, concealer, and setting spray used by makeup artist",
                  "Waterproof mascara backup, makeup remover wipes, tissues for tear cleanup",
                  "Small mirror, makeup brushes, blotting papers for oil control"
                ]
              },
              {
                title: "Hair Care & Styling",
                prompts: [
                  "What hair products will help maintain your wedding day style?",
                  "Which styling tools might you need for quick fixes?",
                  "How will you handle humidity or weather effects on your hair?",
                  "What backup hair accessories should you have available?"
                ],
                examples: [
                  "Hair spray in travel size, bobby pins that match your hair color",
                  "Small brush or comb, hair straightener or curling iron for touch-ups",
                  "Anti-humidity spray, hair oil for frizz control in damp weather",
                  "Extra hair pins, backup veil clips, hair ties that match your style"
                ]
              },
              {
                title: "Nail & Skin Care",
                prompts: [
                  "What nail care items should you pack for last-minute fixes?",
                  "How will you handle chipped polish or broken nails?",
                  "What skincare items will help you stay fresh all day?",
                  "What products will help with wedding day stress effects on skin?"
                ],
                examples: [
                  "Clear nail polish for small chips, nail file for rough edges",
                  "Exact nail polish color match, cuticle oil, nail glue for emergencies",
                  "Face mist for refreshing, lip balm, hand cream for dry hands from handshakes",
                  "Oil-absorbing sheets, spot concealer for stress breakouts"
                ]
              }
            ]}
            tips={[
              "Test all products beforehand to ensure they won't cause allergic reactions",
              "Pack items in a clear, labeled container for easy access by wedding party",
              "Ask your makeup artist what specific products they used for exact matches",
              "Assign a reliable bridesmaid to be your 'beauty guardian' for the day"
            ]}
          />
        </TabsContent>

        <TabsContent value="wardrobe">
          <GuidedNotePage
            title="Fashion & Wardrobe Emergency Solutions"
            description="Handle dress, suit, and accessory mishaps with confidence"
            sections={[
              {
                title: "Dress & Suit Emergencies",
                prompts: [
                  "What sewing supplies are essential for dress or suit emergencies?",
                  "How will you handle potential stains on wedding attire?",
                  "What backup plans do you have for broken zippers or torn fabric?",
                  "Which wardrobe malfunctions are most likely with your specific outfits?"
                ],
                examples: [
                  "Safety pins in white and clear, needle and white thread, fabric tape for hems",
                  "Stain removal pens, white chalk for covering small stains, club soda",
                  "Small sewing kit, super glue for emergency repairs, backup buttons",
                  "Consider your dress style - strapless needs fashion tape, long train needs bustle pins"
                ]
              },
              {
                title: "Shoe & Comfort Solutions",
                prompts: [
                  "What items will help with shoe discomfort during long wedding day?",
                  "How will you handle blisters or foot pain from new shoes?",
                  "What backup footwear options should you consider?",
                  "How will you protect your shoes from outdoor elements?"
                ],
                examples: [
                  "Band-aids, heel grips, gel insoles, foot powder for comfort",
                  "Blister cushions, pain relief gel, backup comfortable shoes for reception",
                  "Flip flops for after-party, flats that match dress color for dancing",
                  "Shoe covers for outdoor photos, towels for cleaning muddy shoes"
                ]
              },
              {
                title: "Undergarments & Accessories",
                prompts: [
                  "What undergarment backups might be needed for your dress style?",
                  "Which accessories are most likely to break or get lost?",
                  "How will you handle fashion tape failures or bra issues?",
                  "What jewelry backup plan do you have for broken pieces?"
                ],
                examples: [
                  "Extra strapless bra, fashion tape, shapewear backup, spare stockings",
                  "Backup earrings, extra boutonniere, spare hair accessories, replacement corsage",
                  "More fashion tape than you think you need, safety pins for strap emergencies",
                  "Simple backup jewelry in same metal tone, extra earring backs"
                ]
              }
            ]}
            tips={[
              "Do a full dress rehearsal including walking, sitting, and dancing",
              "Break in your wedding shoes weeks before the wedding day",
              "Keep emergency supplies in a small bag that matches your wedding colors",
              "Designate someone reliable to manage the wardrobe emergency kit"
            ]}
          />
        </TabsContent>

        <TabsContent value="health">
          <GuidedNotePage
            title="Health & Comfort Essentials"
            description="Stay comfortable and healthy throughout your wedding celebration"
            sections={[
              {
                title: "Medications & Pain Relief",
                prompts: [
                  "What medications might you or your wedding party need during the day?",
                  "How will you handle headaches, cramps, or other common discomforts?",
                  "What allergy medications should you have on hand?",
                  "Which anxiety or stress-relief items would be helpful?"
                ],
                examples: [
                  "Advil/Tylenol, antacids for nervous stomach, any prescription medications",
                  "Migraine medication, heating pads for cramps, muscle relaxers for tension",
                  "Antihistamines for seasonal allergies, eye drops for pollen irritation",
                  "Essential oils, stress relief tablets, rescue remedy for anxiety"
                ]
              },
              {
                title: "Personal Care & Hygiene",
                prompts: [
                  "What personal care items will help you feel fresh all day?",
                  "How will you handle excessive sweating or deodorant needs?",
                  "What feminine hygiene products should be easily accessible?",
                  "Which breath and dental care items are important for photos and kisses?"
                ],
                examples: [
                  "Deodorant, wet wipes, dry shampoo, face refreshing mist",
                  "Extra-strength deodorant, sweat-proof undershirts, cooling towels",
                  "Tampons, pads, panty liners, and feminine wipes in easy-access bag",
                  "Mints, breath strips, travel toothbrush, lip balm for kissable lips"
                ]
              },
              {
                title: "Weather & Comfort Protection",
                prompts: [
                  "What weather-related items might be necessary for outdoor events?",
                  "How will you handle temperature changes throughout the day?",
                  "What sun or rain protection should you have available?",
                  "Which comfort items will help with long day fatigue?"
                ],
                examples: [
                  "Umbrella that matches wedding colors, sunscreen, bug spray for outdoor venues",
                  "Shawl or jacket for air conditioning, hand warmers for cold weather",
                  "SPF lip balm, sunglasses for outdoor photos, rain boots if needed",
                  "Energy bars, electrolyte drinks, comfortable shoes for tired feet"
                ]
              }
            ]}
            tips={[
              "Pack snacks and water to maintain energy levels throughout the day",
              "Include contact information for local urgent care in case of emergencies",
              "Test any new medications or supplements before the wedding day",
              "Create a separate smaller kit for immediate family members' needs"
            ]}
          />
        </TabsContent>

        <TabsContent value="tools">
          <GuidedNotePage
            title="Tools & Practical Problem Solvers"
            description="Handle logistical issues and coordinate wedding day activities smoothly"
            sections={[
              {
                title: "Setup & Fix-It Tools",
                prompts: [
                  "What tools might be needed for last-minute setup or decoration fixes?",
                  "How will you handle broken decorations or signage issues?",
                  "What electrical or technical backup supplies should you have?",
                  "Which tools could help with venue or vendor problems?"
                ],
                examples: [
                  "Scissors, duct tape, zip ties, screwdriver, hammer for setup issues",
                  "Extra ribbon, glue gun, pushpins, poster board for sign repairs",
                  "Extension cords, power strips, batteries for microphones or devices",
                  "Multi-tool, flashlight, rope or twine for unexpected needs"
                ]
              },
              {
                title: "Communication & Coordination",
                prompts: [
                  "What communication tools will help coordinate the wedding day?",
                  "How will you keep important contact information accessible?",
                  "What backup plans do you need for vendor or timeline issues?",
                  "Which coordination supplies will help your wedding party stay organized?"
                ],
                examples: [
                  "Phone chargers, portable batteries, walkie-talkies for large venues",
                  "Vendor contact list, venue coordinator info, emergency contact numbers",
                  "Printed timeline copies, backup playlist, vendor payment envelopes",
                  "Clipboards for organizing, pens, sticky notes for last-minute changes"
                ]
              },
              {
                title: "Cleaning & Maintenance",
                prompts: [
                  "What cleaning supplies could handle spills or stains during the reception?",
                  "How will you deal with makeup stains on dresses or unexpected messes?",
                  "What supplies do you need for post-ceremony cleanup tasks?",
                  "Which maintenance items will help keep everything looking perfect?"
                ],
                examples: [
                  "Stain removal pens, paper towels, disinfecting wipes, trash bags",
                  "Makeup remover wipes, white vinegar for stains, salt for wine spills",
                  "Cleaning supplies for personal items, storage containers for leftover cake",
                  "Touch-up paint for decorations, extra flowers for arrangements"
                ]
              }
            ]}
            tips={[
              "Pack everything in a clearly labeled container that's easy to find",
              "Assign a responsible person (not bride or groom) to manage the emergency kit",
              "Include cash for tips and unexpected vendor payments or emergencies",
              "Create an inventory list so you know what's available in crisis moments"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}