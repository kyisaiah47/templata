'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronUp, ChevronDown, Lightbulb, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AIHintDockProps {
  currentPromptId: string | null;
  className?: string;
}

interface Hint {
  id: string;
  text: string;
  type: 'suggestion' | 'tip' | 'example';
}

// Mock Gemini API response - In production, this would call the actual Gemini API
async function fetchHints(promptId: string): Promise<Hint[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock hints based on prompt ID
  const hintDatabase: Record<string, Hint[]> = {
    'prompt-1': [
      { id: '1', text: 'Start with your "why" - what drives this goal?', type: 'tip' },
      { id: '2', text: 'Try breaking this into 3-5 smaller milestones', type: 'suggestion' },
      { id: '3', text: 'Example: "Increase team productivity by 20% through better tools"', type: 'example' },
    ],
    'prompt-2': [
      { id: '1', text: 'Consider both fixed and variable costs', type: 'tip' },
      { id: '2', text: 'Add a 15-20% buffer for unexpected expenses', type: 'suggestion' },
      { id: '3', text: 'Example budget breakdown: Personnel 60%, Tools 20%, Contingency 20%', type: 'example' },
    ],
    'prompt-3': [
      { id: '1', text: 'Map stakeholders by influence and interest level', type: 'tip' },
      { id: '2', text: 'Identify who approves, who advises, and who implements', type: 'suggestion' },
      { id: '3', text: 'Example: CEO (high influence, high interest), IT team (low influence, high interest)', type: 'example' },
    ],
  };

  return hintDatabase[promptId] || [
    { id: 'default-1', text: 'Take your time to think through your response', type: 'tip' },
    { id: 'default-2', text: 'Consider both short-term and long-term implications', type: 'suggestion' },
  ];
}

export function AIHintDock({ currentPromptId, className }: AIHintDockProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [hints, setHints] = useState<Hint[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch hints when prompt changes
  useEffect(() => {
    if (currentPromptId) {
      setIsLoading(true);
      fetchHints(currentPromptId)
        .then(setHints)
        .finally(() => setIsLoading(false));
    }
  }, [currentPromptId]);

  const handleRefresh = () => {
    if (currentPromptId) {
      setIsLoading(true);
      fetchHints(currentPromptId)
        .then(setHints)
        .finally(() => setIsLoading(false));
    }
  };

  if (!currentPromptId) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className={cn(
        'fixed bottom-0 left-80 right-96 z-40',
        'bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30',
        'border-t border-x rounded-t-xl shadow-lg backdrop-blur-sm',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b bg-white/50 dark:bg-black/20 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium">AI Hints</span>
          </div>
          {isLoading && (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
              <RefreshCw className="h-3 w-3 text-muted-foreground" />
            </motion.div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
          </Button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-3 max-h-48 overflow-y-auto">
              {hints.map((hint, index) => (
                <motion.div
                  key={hint.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    'flex items-start gap-2 p-3 rounded-lg',
                    'bg-white/80 dark:bg-black/20',
                    'border border-transparent hover:border-purple-200 dark:hover:border-purple-800',
                    'transition-colors'
                  )}
                >
                  <div className="mt-0.5">
                    {hint.type === 'tip' && <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />}
                    {hint.type === 'suggestion' && <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    {hint.type === 'example' && <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{hint.text}</p>
                    {hint.type === 'example' && (
                      <span className="text-xs text-muted-foreground italic">Example</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
