'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

/**
 * RightDock - Contextual Inspector
 *
 * Collapsible panel that shows:
 * - Template details when hovering templates
 * - Reflection preview when selecting entries
 * - Article content when reading
 * - Graph node details in Life OS
 */
export function RightDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  return (
    <>
      {/* Toggle Button (always visible) */}
      {!isOpen && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-40"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(true)}
            className="rounded-l-lg rounded-r-none shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </motion.div>
      )}

      {/* Dock Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={cn(
              'w-96 border-l bg-card/50 backdrop-blur-sm',
              'flex flex-col'
            )}
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Inspector</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1 p-4">
              {content || (
                <div className="text-center text-muted-foreground text-sm py-12">
                  Select an item to view details
                </div>
              )}
            </ScrollArea>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
