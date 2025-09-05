"use client"

import { useState } from "react"
import { NoteEditor } from "@/components/note-editor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Lightbulb, CheckCircle2, HelpCircle, ChevronDown, ChevronRight, GripVertical } from "lucide-react"

interface GuidedSection {
  title: string
  prompts: string[]
  examples?: string[]
}

interface GuidedNotePageProps {
  title: string
  description: string
  sections: GuidedSection[]
  tips?: string[]
}


interface QuestionCard {
  id: string;
  sectionTitle: string;
  prompt: string;
  blocks: any[];
  tips: string[];
}

export function GuidedNotePage({ 
  title, 
  description, 
  sections,
  tips = [] 
}: GuidedNotePageProps) {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({})
  
  const toggleCardTips = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  // Build cards from sections
  const buildInitialCards = (): QuestionCard[] => {
    const cards: QuestionCard[] = []
    let cardId = 1
    
    sections.forEach((section, sectionIndex) => {
      section.prompts.forEach((prompt, promptIndex) => {
        // Get all examples for this prompt as tips
        const cardTips: string[] = []
        if (section.examples && section.examples[promptIndex]) {
          const example = section.examples[promptIndex]
          // Split long examples into multiple tips if they contain bullets or semicolons
          if (example.includes('•') || example.includes(';')) {
            const splitTips = example.split(/[•;]/).filter(tip => tip.trim().length > 0)
            cardTips.push(...splitTips.map(tip => tip.trim()))
          } else {
            cardTips.push(example)
          }
          
          // Add some additional contextual tips based on the prompt content
          if (prompt.toLowerCase().includes('budget')) {
            cardTips.push("Track expenses in a spreadsheet or wedding planning app", "Set aside 5-10% of budget for unexpected costs")
          } else if (prompt.toLowerCase().includes('venue')) {
            cardTips.push("Ask about setup/teardown time included", "Check if tables, chairs, linens are provided")
          } else if (prompt.toLowerCase().includes('guest')) {
            cardTips.push("Consider plus-ones for married couples and long-term partners", "Account for potential declines (typically 10-15%)")
          }
        }
        
        cards.push({
          id: `card-${cardId++}`,
          sectionTitle: section.title,
          prompt,
          blocks: [
            {
              id: `${cardId}-heading`,
              type: 'heading2',
              content: prompt
            },
            {
              id: `${cardId}-text`,
              type: 'text',
              content: ''
            }
          ],
          tips: cardTips
        })
      })
    })
    
    return cards
  }
  
  const [cards, setCards] = useState<QuestionCard[]>(buildInitialCards())

  const moveCard = (fromIndex: number, toIndex: number) => {
    const newCards = [...cards]
    const [movedCard] = newCards.splice(fromIndex, 1)
    newCards.splice(toIndex, 0, movedCard)
    setCards(newCards)
  }

  const handleCardDragStart = (e: React.DragEvent, cardIndex: number) => {
    e.stopPropagation() // Prevent block drag interference
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("card-drag", cardIndex.toString())
    
    // Style the entire card during drag
    setTimeout(() => {
      const cardElement = (e.target as HTMLElement).closest('[data-card-id]') as HTMLElement
      if (cardElement) {
        cardElement.style.opacity = "0.5"
      }
    }, 0)
  }

  const handleCardDragOver = (e: React.DragEvent) => {
    // Only handle card drags, not block drags
    if (!e.dataTransfer.types.includes('text/plain')) {
      e.preventDefault()
      e.stopPropagation()
      e.dataTransfer.dropEffect = "move"
      
      // Add visual feedback
      const cardElement = e.currentTarget as HTMLElement
      cardElement.classList.add('ring-2', 'ring-blue-300', 'bg-blue-50/50')
    }
  }

  const handleCardDragLeave = (e: React.DragEvent) => {
    const cardElement = e.currentTarget as HTMLElement
    cardElement.classList.remove('ring-2', 'ring-blue-300', 'bg-blue-50/50')
  }

  const handleCardDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault()
    
    // Remove visual feedback
    const cardElement = e.currentTarget as HTMLElement
    cardElement.classList.remove('ring-2', 'ring-blue-300', 'bg-blue-50/50')
    
    const sourceIndex = parseInt(e.dataTransfer.getData("card-drag"))
    if (sourceIndex !== targetIndex) {
      moveCard(sourceIndex, targetIndex)
    }
  }

  const updateCardBlocks = (cardIndex: number, blocks: any[]) => {
    const newCards = [...cards]
    newCards[cardIndex].blocks = blocks
    setCards(newCards)
    // Progress will re-calculate automatically since it depends on cards state
  }


  return (
    <div className="relative">

      {/* Floating Tips Button */}
      {tips.length > 0 && (
        <div className="fixed right-4 bottom-20 z-50">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-lg bg-background"
              >
                <Lightbulb className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <div className="text-sm font-medium">💡 Planning Tips</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {tips.map((tip, index) => (
                    <div key={index}>• {tip}</div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}

      {/* Cards with Mini Note Editors */}
      <div className="space-y-6">
        {cards.map((card, cardIndex) => (
          <div
            key={card.id}
            data-card-id={card.id}
            className="bg-card border border-border rounded-lg shadow-sm transition-all duration-200 hover:shadow-md group"
            onDragOver={handleCardDragOver}
            onDragLeave={handleCardDragLeave}
            onDrop={(e) => handleCardDrop(e, cardIndex)}
          >
            <div className="flex">
              {/* Card Drag Handle */}
              <div 
                className="flex items-start justify-center pt-4 pl-2 pr-1 opacity-60 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
                draggable
                onDragStart={(e) => handleCardDragStart(e, cardIndex)}
                onDragEnd={(e) => {
                  // Reset card styling
                  const cardElement = (e.target as HTMLElement).closest('[data-card-id]') as HTMLElement
                  if (cardElement) {
                    cardElement.style.opacity = ""
                  }
                }}
              >
                <GripVertical className="h-5 w-5 text-muted-foreground" />
              </div>
              
              {/* Mini Note Editor */}
              <div className="flex-1 p-4 pl-2">
                <NoteEditor
                  initialBlocks={card.blocks}
                  onSave={(title, blocks) => updateCardBlocks(cardIndex, blocks)}
                  showTitle={false}
                  readOnlyBlockTypes={['heading2']}
                />
                
                {/* Tips Section */}
                {card.tips.length > 0 && (
                  <div className="mt-4 border-t border-border pt-3">
                    <div className="space-y-2">
                      {/* First tip (always visible) */}
                      <div className="text-xs text-muted-foreground/70 bg-muted/30 p-2 rounded">
                        💡 {card.tips[0]}
                      </div>
                      
                      {/* Additional tips (expandable) */}
                      {card.tips.length > 1 && (
                        <>
                          {expandedCards[card.id] && card.tips.slice(1).map((tip, index) => (
                            <div key={index + 1} className="text-xs text-muted-foreground/70 bg-muted/30 p-2 rounded">
                              💡 {tip}
                            </div>
                          ))}
                          
                          {/* Expand/Collapse Button */}
                          <button
                            onClick={() => toggleCardTips(card.id)}
                            className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 p-1 rounded hover:bg-muted/30 transition-colors"
                          >
                            {expandedCards[card.id] ? (
                              <>
                                <ChevronDown className="h-3 w-3" />
                                Show less tips ({card.tips.length - 1} hidden)
                              </>
                            ) : (
                              <>
                                <ChevronRight className="h-3 w-3" />
                                Show {card.tips.length - 1} more tip{card.tips.length > 2 ? 's' : ''}
                              </>
                            )}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}