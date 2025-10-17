'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, Zap, Trophy, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Achievement {
  id: string;
  message: string;
  type: 'milestone' | 'streak' | 'completion' | 'speed';
  icon?: 'check' | 'star' | 'zap' | 'trophy' | 'target';
}

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onDismiss: () => void;
}

const icons = {
  check: CheckCircle,
  star: Star,
  zap: Zap,
  trophy: Trophy,
  target: Target,
};

const typeColors = {
  milestone: 'from-blue-500 to-blue-600',
  streak: 'from-orange-500 to-orange-600',
  completion: 'from-green-500 to-green-600',
  speed: 'from-purple-500 to-purple-600',
};

export function AchievementNotification({ achievement, onDismiss }: AchievementNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);

      // Auto-dismiss after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onDismiss, 300); // Wait for exit animation
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [achievement, onDismiss]);

  if (!achievement) return null;

  const Icon = icons[achievement.icon || 'check'];
  const gradientClass = typeColors[achievement.type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100]"
        >
          <motion.div
            initial={{ boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)' }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0.7)',
                '0 0 0 10px rgba(59, 130, 246, 0)',
                '0 0 0 0 rgba(59, 130, 246, 0)',
              ],
            }}
            transition={{ duration: 1.5, repeat: 1 }}
            className={cn(
              'flex items-center gap-3 px-5 py-3 rounded-full',
              'bg-gradient-to-r text-white',
              'shadow-lg backdrop-blur-sm',
              gradientClass
            )}
          >
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
            <span className="font-medium text-sm whitespace-nowrap">{achievement.message}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook to manage achievements
export function useAchievements() {
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [achievementQueue, setAchievementQueue] = useState<Achievement[]>([]);

  useEffect(() => {
    if (!currentAchievement && achievementQueue.length > 0) {
      setCurrentAchievement(achievementQueue[0]);
      setAchievementQueue((queue) => queue.slice(1));
    }
  }, [currentAchievement, achievementQueue]);

  const triggerAchievement = (achievement: Omit<Achievement, 'id'>) => {
    const newAchievement = {
      ...achievement,
      id: `achievement-${Date.now()}`,
    };
    setAchievementQueue((queue) => [...queue, newAchievement]);
  };

  const dismissAchievement = () => {
    setCurrentAchievement(null);
  };

  return {
    currentAchievement,
    triggerAchievement,
    dismissAchievement,
  };
}
