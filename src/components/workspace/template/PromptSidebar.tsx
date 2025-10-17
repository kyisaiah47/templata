'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Circle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { DailyPromptSelector } from './DailyPromptSelector';

interface Prompt {
  id: string;
  text: string;
  category: string;
  completed: boolean;
}

interface PromptSidebarProps {
  templateId?: string;
  currentPromptId: string | null;
  onPromptSelect: (promptId: string) => void;
}

// Mock data - replace with real data
const mockPrompts: Prompt[] = [
  { id: '1', text: 'What are your main goals for this project?', category: 'Getting Started', completed: true },
  { id: '2', text: "What's your realistic budget range?", category: 'Planning', completed: false },
  { id: '3', text: 'Who are the key stakeholders?', category: 'Planning', completed: false },
  { id: '4', text: 'What timeline are you working with?', category: 'Planning', completed: false },
  { id: '5', text: 'What potential obstacles do you foresee?', category: 'Risk Assessment', completed: false },
  { id: '6', text: 'What success metrics will you use?', category: 'Evaluation', completed: false },
];

export function PromptSidebar({ templateId, currentPromptId, onPromptSelect }: PromptSidebarProps) {
  const [prompts] = useState<Prompt[]>(mockPrompts);

  // Group prompts by category
  const groupedPrompts = prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  return (
    <div className="h-full flex flex-col p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Action Prompts</h2>
        <p className="text-sm text-muted-foreground">
          Work through each prompt to build your plan
        </p>
      </div>

      {/* Daily Prompt Selector */}
      <div className="mb-6">
        <DailyPromptSelector onPromptSelect={(prompt) => console.log('Selected daily prompt:', prompt)} />
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-6">
          {Object.entries(groupedPrompts).map(([category, categoryPrompts], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="mb-2">
                <Badge variant="outline" className="text-xs">
                  {category}
                </Badge>
              </div>

              <div className="space-y-2">
                {categoryPrompts.map((prompt) => {
                  const isActive = currentPromptId === prompt.id;
                  const isCompleted = prompt.completed;

                  return (
                    <motion.button
                      key={prompt.id}
                      onClick={() => onPromptSelect(prompt.id)}
                      className={cn(
                        'w-full text-left p-3 rounded-lg transition-all',
                        'flex items-start gap-3 group',
                        isActive && 'bg-primary/10 border-l-4 border-primary',
                        !isActive && 'hover:bg-accent/50',
                        isCompleted && !isActive && 'opacity-60'
                      )}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Status Icon */}
                      <div className="mt-0.5 flex-shrink-0">
                        {isCompleted ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>

                      {/* Prompt Text */}
                      <div className="flex-1 text-sm">
                        <p className={cn(
                          'leading-relaxed',
                          isActive && 'font-medium text-primary',
                          isCompleted && 'line-through'
                        )}>
                          {prompt.text}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      {isActive && (
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
