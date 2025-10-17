'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AmbientModeToggleProps {
  isDimMode: boolean;
  onToggle: () => void;
  className?: string;
}

export function AmbientModeToggle({ isDimMode, onToggle, className }: AmbientModeToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      onClick={onToggle}
      className={cn(
        'fixed top-6 right-6 z-50',
        'flex items-center gap-2 px-4 py-2 rounded-full',
        'bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm',
        'border border-slate-700 hover:border-slate-600',
        'transition-all duration-300',
        'group',
        className
      )}
    >
      <motion.div
        animate={{ rotate: isDimMode ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isDimMode ? (
          <Moon className="h-4 w-4 text-slate-400 group-hover:text-slate-300" />
        ) : (
          <Sun className="h-4 w-4 text-slate-400 group-hover:text-slate-300" />
        )}
      </motion.div>
      <span className="text-xs text-slate-400 group-hover:text-slate-300">
        {isDimMode ? 'Dim' : 'Light'}
      </span>

      {/* Toggle Track */}
      <div className="relative w-10 h-5 rounded-full bg-slate-700 ml-1">
        <motion.div
          animate={{ x: isDimMode ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-slate-300"
        />
      </div>
    </motion.button>
  );
}
