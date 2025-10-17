'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Calendar, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface ReflectionEntry {
  id: string;
  date: Date;
  excerpt: string;
  mood?: 'happy' | 'neutral' | 'sad';
  tags: string[];
}

interface EntryArchiveDrawerProps {
  entries: ReflectionEntry[];
  onEntrySelect: (entry: ReflectionEntry) => void;
  className?: string;
}

// Mock entries for demonstration
const mockEntries: ReflectionEntry[] = [
  {
    id: '1',
    date: new Date('2025-10-16'),
    excerpt: 'Today was a productive day. Finished the project and felt accomplished...',
    mood: 'happy',
    tags: ['work', 'achievement'],
  },
  {
    id: '2',
    date: new Date('2025-10-15'),
    excerpt: 'Feeling a bit overwhelmed with all the tasks ahead. Need to focus...',
    mood: 'neutral',
    tags: ['work', 'planning'],
  },
  {
    id: '3',
    date: new Date('2025-10-14'),
    excerpt: 'Had a difficult conversation today. Learning to handle emotions better...',
    mood: 'sad',
    tags: ['personal', 'growth'],
  },
  {
    id: '4',
    date: new Date('2025-10-13'),
    excerpt: 'Grateful for the support from friends and family. Feeling blessed...',
    mood: 'happy',
    tags: ['gratitude', 'relationships'],
  },
  {
    id: '5',
    date: new Date('2025-10-12'),
    excerpt: 'Reflecting on my progress this week. Small wins add up...',
    mood: 'neutral',
    tags: ['reflection', 'progress'],
  },
];

const moodEmojis = {
  happy: '😊',
  neutral: '😐',
  sad: '😔',
};

export function EntryArchiveDrawer({ entries = mockEntries, onEntrySelect, className }: EntryArchiveDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isExpanded ? -300 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50',
        'bg-slate-900/95 backdrop-blur-md border-t border-slate-700',
        className
      )}
    >
      {/* Handle */}
      <div className="flex justify-center py-2 border-b border-slate-800">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="gap-2 text-slate-400 hover:text-slate-200"
        >
          <Calendar className="h-4 w-4" />
          <span className="text-xs">Past Reflections ({entries.length})</span>
          {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
        </Button>
      </div>

      {/* Drawer Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 300 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ScrollArea className="h-[300px] px-6 py-4">
              <div className="space-y-3">
                {entries.map((entry, index) => (
                  <motion.button
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => onEntrySelect(entry)}
                    className={cn(
                      'w-full text-left p-4 rounded-lg',
                      'bg-slate-800/50 hover:bg-slate-800 transition-colors',
                      'border border-slate-700/50 hover:border-slate-600',
                      'group'
                    )}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">{format(entry.date, 'MMM dd, yyyy')}</span>
                        {entry.mood && (
                          <span className="text-sm">{moodEmojis[entry.mood]}</span>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {entry.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-slate-700/50 text-slate-400 border-slate-600"
                          >
                            #{tag}
                          </Badge>
                        ))}
                        {entry.tags.length > 2 && (
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-slate-700/50 text-slate-400 border-slate-600"
                          >
                            +{entry.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 line-clamp-2 group-hover:text-slate-100 transition-colors">
                      {entry.excerpt}
                    </p>
                  </motion.button>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
