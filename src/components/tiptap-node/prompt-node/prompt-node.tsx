'use client'

import { NodeViewWrapper } from "@tiptap/react"
import React from "react"
import { motion } from "framer-motion"
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
      <motion.div
        className={`prompt-node group relative ${
          selected ? "ring-1 ring-blue-400/30" : ""
        }`}
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <motion.div
          className="relative bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 backdrop-blur-md border border-white/10 rounded-xl p-2 my-2 shadow-lg shadow-black/5"
        >
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          />

          <div className="relative flex items-center gap-3">
            {/* Minimal prompt indicator */}
            <motion.div
              className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"
              whileHover={{
                scale: 1.3,
                boxShadow: "0 0 8px rgba(96, 165, 250, 0.6)",
                transition: { duration: 0.2 }
              }}
            />

            <div className="flex-1 min-w-0">
              <motion.p
                className="text-sm text-foreground/90 leading-relaxed truncate group-hover:text-clip"
                initial={{ opacity: 0.9 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.2 }
                }}
              >
                {text}
              </motion.p>
            </div>

            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0.8 }}
              whileHover={{
                opacity: 1,
                x: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.span
                className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-medium"
                whileHover={{
                  color: "rgb(156 163 175)",
                  transition: { duration: 0.15 }
                }}
              >
                {category}
              </motion.span>


              {deleteNode && (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={deleteNode}
                    className="h-5 w-5 p-0 text-muted-foreground/50 hover:text-red-400 transition-colors"
                  >
                    <X className="w-2.5 h-2.5" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </NodeViewWrapper>
  )
}