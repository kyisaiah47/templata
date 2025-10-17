'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Mood = 'happy' | 'neutral' | 'sad' | null;

interface MoodSelectorProps {
  selectedMood: Mood;
  onMoodChange: (mood: Mood) => void;
  className?: string;
}

const moods = [
  {
    value: 'happy' as const,
    emoji: '😊',
    label: 'Happy',
    color: 'from-green-500/20 to-emerald-500/20',
    textColor: 'text-green-300',
    borderColor: 'border-green-500/50',
    glowColor: 'shadow-green-500/20',
  },
  {
    value: 'neutral' as const,
    emoji: '😐',
    label: 'Neutral',
    color: 'from-slate-500/20 to-gray-500/20',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-500/50',
    glowColor: 'shadow-slate-500/20',
  },
  {
    value: 'sad' as const,
    emoji: '😔',
    label: 'Sad',
    color: 'from-blue-500/20 to-indigo-500/20',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/50',
    glowColor: 'shadow-blue-500/20',
  },
];

export function MoodSelector({ selectedMood, onMoodChange, className }: MoodSelectorProps) {
  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <p className="text-sm text-slate-400">How are you feeling?</p>
      <div className="flex items-center gap-4">
        {moods.map((mood) => {
          const isSelected = selectedMood === mood.value;

          return (
            <motion.button
              key={mood.value}
              onClick={() => onMoodChange(mood.value)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative flex flex-col items-center gap-2 p-4 rounded-xl',
                'border-2 transition-all duration-300',
                'backdrop-blur-sm',
                isSelected
                  ? cn(
                      'bg-gradient-to-br shadow-lg',
                      mood.color,
                      mood.borderColor,
                      mood.glowColor
                    )
                  : 'border-slate-700 hover:border-slate-600 bg-slate-900/30'
              )}
            >
              <motion.div
                animate={isSelected ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.6, repeat: isSelected ? Infinity : 0, repeatDelay: 2 }}
                className="text-4xl"
              >
                {mood.emoji}
              </motion.div>
              <span
                className={cn(
                  'text-xs font-medium transition-colors',
                  isSelected ? mood.textColor : 'text-slate-500'
                )}
              >
                {mood.label}
              </span>

              {isSelected && (
                <motion.div
                  layoutId="mood-indicator"
                  className={cn(
                    'absolute inset-0 rounded-xl border-2',
                    mood.borderColor
                  )}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
