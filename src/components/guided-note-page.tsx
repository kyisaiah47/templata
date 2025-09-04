"use client"

import { useState } from "react"
import { NoteEditor } from "@/components/note-editor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Lightbulb, CheckCircle2 } from "lucide-react"

interface GuidedNotePageProps {
  title: string
  description: string
  prompts: string[]
  examples?: string[]
  tips?: string[]
}

export function GuidedNotePage({ 
  title, 
  description, 
  prompts, 
  examples = [], 
  tips = [] 
}: GuidedNotePageProps) {
  const [noteBlocks, setNoteBlocks] = useState([
    { id: '1', type: 'heading1' as const, content: title },
    { id: '2', type: 'text' as const, content: description + '\n\n' }
  ])

  const handleSave = (noteTitle: string, blocks: any[]) => {
    // Here you would save to your storage system
    console.log('Saving note:', noteTitle, blocks)
  }

  return (
    <div className="space-y-6">
      {/* Guidance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prompts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Writing Prompts
            </CardTitle>
            <CardDescription>
              Use these prompts to guide your thinking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {prompts.map((prompt, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    {index + 1}
                  </Badge>
                  <span className="text-sm">{prompt}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Examples */}
        {examples.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Examples
              </CardTitle>
              <CardDescription>
                Sample ideas to inspire your writing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {examples.map((example, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {example}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Tips */}
        {tips.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
              <CardDescription>
                Helpful advice for this section
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li key={index} className="text-sm">
                    💡 {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      <Separator />

      {/* Note Editor */}
      <div>
        <NoteEditor
          title={title}
          initialBlocks={noteBlocks}
          onSave={handleSave}
        />
      </div>
    </div>
  )
}