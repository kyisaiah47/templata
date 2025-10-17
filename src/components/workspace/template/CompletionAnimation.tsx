'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useWorkspaceStore } from '@/stores/workspace-store';
import { useSoundCues } from '@/hooks/useSoundCues';

interface CompletionAnimationProps {
  onContinue?: () => void;
}

export function CompletionAnimation({ onContinue }: CompletionAnimationProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const { setStage } = useWorkspaceStore();
  const { playHarmonicSwell } = useSoundCues();

  useEffect(() => {
    // Play completion sound
    playHarmonicSwell();

    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Show prompt after confetti starts
    setTimeout(() => {
      setShowPrompt(true);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    onContinue?.();
    setStage('reflect');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="max-w-md mx-4 p-8 bg-white rounded-2xl shadow-2xl text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
              className="flex justify-center"
            >
              <div className="relative">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-gray-900"
              >
                Template Complete!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-lg"
              >
                Take a moment to reflect on your responses
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 space-y-3"
            >
              <Button
                size="lg"
                onClick={handleContinue}
                className="w-full text-base font-medium"
              >
                Continue to Reflection
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  onContinue?.();
                  // Navigate to Life OS with deep link
                  if (typeof window !== 'undefined') {
                    window.location.href = '/workspace-new?view=lifeos&tab=board';
                  }
                }}
                className="w-full text-base font-medium"
              >
                View in Life OS
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
