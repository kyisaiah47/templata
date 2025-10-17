'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface ProgressTrackerProps {
  current: number;
  total: number;
  progress: number;
  className?: string;
}

/**
 * Floating Progress Tracker
 *
 * Shows current step in the journey with ambient gradient highlight
 * Feels like a progress journey, not just a number
 */
export function ProgressTracker({ current, total, progress, className }: ProgressTrackerProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        'bg-card/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border',
        'flex items-center gap-4',
        className
      )}
    >
      {/* Step Indicator */}
      <div className="text-sm font-medium">
        <span className="text-primary">Step {current}</span>
        <span className="text-muted-foreground"> of {total}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-32">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Milestone Indicator */}
      <div className="text-xs text-muted-foreground">
        {progress}% complete
      </div>
    </motion.div>
  );
}
