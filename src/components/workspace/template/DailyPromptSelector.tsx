'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format, isSameDay } from 'date-fns';

interface DailyPrompt {
  id: string;
  date: Date;
  title: string;
  description: string;
  category: string;
}

interface DailyPromptSelectorProps {
  onPromptSelect: (prompt: DailyPrompt) => void;
  className?: string;
}

// Generate prompts for the week
const generateWeeklyPrompts = (startDate: Date): DailyPrompt[] => {
  const prompts = [
    {
      title: 'What are you grateful for today?',
      description: 'Reflect on three things that brought you joy',
      category: 'Gratitude',
    },
    {
      title: 'What challenge did you overcome?',
      description: 'Think about a difficulty you faced and how you handled it',
      category: 'Growth',
    },
    {
      title: 'What did you learn recently?',
      description: 'Document a new insight or skill you gained',
      category: 'Learning',
    },
    {
      title: 'Who made a difference in your day?',
      description: 'Acknowledge someone who positively impacted you',
      category: 'Connection',
    },
    {
      title: 'What are you looking forward to?',
      description: 'Identify something exciting on your horizon',
      category: 'Anticipation',
    },
    {
      title: 'How did you take care of yourself?',
      description: 'Reflect on your self-care and wellbeing practices',
      category: 'Wellness',
    },
    {
      title: 'What would you do differently?',
      description: 'Think about a moment and how you might approach it next time',
      category: 'Reflection',
    },
  ];

  return prompts.map((prompt, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return {
      id: `prompt-${date.toISOString()}`,
      date,
      ...prompt,
    };
  });
};

export function DailyPromptSelector({ onPromptSelect, className }: DailyPromptSelectorProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStart, setWeekStart] = useState(new Date());

  const weeklyPrompts = generateWeeklyPrompts(weekStart);
  const selectedPrompt = weeklyPrompts.find((p) => isSameDay(p.date, selectedDate));

  const handlePreviousWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(weekStart.getDate() - 7);
    setWeekStart(newStart);
  };

  const handleNextWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(weekStart.getDate() + 7);
    setWeekStart(newStart);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const prompt = weeklyPrompts.find((p) => isSameDay(p.date, date));
    if (prompt) {
      onPromptSelect(prompt);
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Daily Prompts</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handlePreviousWeek}>
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <span className="text-xs text-muted-foreground px-2">
            {format(weekStart, 'MMM d')} - {format(new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000), 'MMM d')}
          </span>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleNextWeek}>
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Day Selector */}
      <div className="grid grid-cols-7 gap-2">
        {weeklyPrompts.map((prompt) => {
          const isSelected = isSameDay(prompt.date, selectedDate);
          const isToday = isSameDay(prompt.date, new Date());

          return (
            <motion.button
              key={prompt.id}
              onClick={() => handleDateSelect(prompt.date)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative p-3 rounded-lg border text-center transition-all',
                'hover:shadow-md',
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                  : 'bg-card border-border hover:bg-accent',
                isToday && !isSelected && 'ring-2 ring-primary ring-offset-2'
              )}
            >
              <div className="text-xs font-medium mb-1">{format(prompt.date, 'EEE')}</div>
              <div className={cn('text-lg font-bold', isSelected ? 'text-primary-foreground' : 'text-foreground')}>
                {format(prompt.date, 'd')}
              </div>
              {isToday && (
                <div className="absolute -top-1 -right-1">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Prompt */}
      <AnimatePresence mode="wait">
        {selectedPrompt && (
          <motion.div
            key={selectedPrompt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{selectedPrompt.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                    {selectedPrompt.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedPrompt.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
