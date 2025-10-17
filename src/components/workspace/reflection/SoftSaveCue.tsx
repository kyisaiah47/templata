'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SoftSaveCueProps {
  lastSaved: Date | null;
  isSaving: boolean;
  className?: string;
}

export function SoftSaveCue({ lastSaved, isSaving, className }: SoftSaveCueProps) {
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    if (lastSaved && !isSaving) {
      setShowSaved(true);
      const timer = setTimeout(() => setShowSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastSaved, isSaving]);

  return (
    <div className={cn('fixed top-6 left-1/2 -translate-x-1/2 z-50', className)}>
      <AnimatePresence>
        {isSaving && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full"
            />
            <span className="text-xs text-slate-400">Saving...</span>
          </motion.div>
        )}

        {showSaved && !isSaving && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/80 backdrop-blur-sm border border-green-700"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Check className="w-3 h-3 text-green-400" />
            </motion.div>
            <span className="text-xs text-green-400">Saved</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Hook to manage autosave
export function useAutosave(text: string, delay: number = 2000) {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      setIsSaving(true);

      // Simulate save operation
      setTimeout(() => {
        setIsSaving(false);
        setLastSaved(new Date());
      }, 500);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return { isSaving, lastSaved };
}
