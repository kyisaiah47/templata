'use client'

import { NodeViewWrapper } from "@tiptap/react"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface PromptNodeProps {
  node: {
    attrs: {
      id: string
      text: string
      category: string
      helpText?: string
    }
  }
  deleteNode?: () => void
  selected?: boolean
}

export const PromptNode: React.FC<PromptNodeProps> = ({
  node,
  deleteNode,
  selected,
}) => {
  const { text, category, helpText } = node.attrs

  return (
    <NodeViewWrapper className="prompt-node-wrapper">
      <div
        className={`prompt-node group relative ${
          selected ? "ring-1 ring-blue-400/30" : ""
        }`}
      >
        <div
          className="relative bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 backdrop-blur-md border border-white/10 rounded-xl p-2 my-2 shadow-lg shadow-black/5"
        >
          <div className="relative flex items-center gap-3">
            {/* Minimal prompt indicator */}
            <div
              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
              <p
                className="text-sm text-foreground/90 leading-relaxed truncate group-hover:text-clip"
              >
                {text}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-medium">
                {category}
              </span>

              {deleteNode && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={deleteNode}
                  className="h-5 w-5 p-0 text-muted-foreground/50 hover:text-red-400 transition-colors"
                >
                  <X className="w-2.5 h-2.5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  )
}