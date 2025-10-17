'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  TrendingUp,
  Calendar,
  ChevronRight,
  Sparkles,
  Target,
  Heart,
} from 'lucide-react';
import { useSoundCues } from '@/hooks/useSoundCues';

interface WelcomeScreenProps {
  userName?: string;
  currentStreak: number;
  totalTemplates: number;
  totalReflections: number;
  recentActivity: Array<{
    id: string;
    title: string;
    type: 'template' | 'reflection';
    category: string;
  }>;
  onDismiss: () => void;
  onStartTemplate: () => void;
  onStartReflection: () => void;
  onViewInsights: () => void;
}

export function WelcomeScreen({
  userName = 'there',
  currentStreak,
  totalTemplates,
  totalReflections,
  recentActivity,
  onDismiss,
  onStartTemplate,
  onStartReflection,
  onViewInsights,
}: WelcomeScreenProps) {
  const { playHarmonicSwell } = useSoundCues();

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  // Get personalized message based on activity
  const getPersonalizedMessage = () => {
    if (currentStreak >= 7) {
      return "You're on an incredible streak! Keep the momentum going.";
    }
    if (totalReflections > 0 && totalTemplates > 0) {
      return "You're making great progress on your journey.";
    }
    if (totalTemplates > 0) {
      return "Ready to reflect on your recent work?";
    }
    return "Ready to begin your journey?";
  };

  const handleAction = (callback: () => void) => {
    playHarmonicSwell();
    callback();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="max-w-2xl w-full"
      >
        <Card className="border-2">
          <CardContent className="p-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                <h1 className="text-3xl font-bold">
                  {getGreeting()}, {userName}!
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">{getPersonalizedMessage()}</p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <Card className="border-yellow-500/20 bg-yellow-500/5">
                <CardContent className="pt-6 text-center">
                  <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{currentStreak}</div>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </CardContent>
              </Card>

              <Card className="border-blue-500/20 bg-blue-500/5">
                <CardContent className="pt-6 text-center">
                  <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{totalTemplates}</div>
                  <p className="text-xs text-muted-foreground">Templates</p>
                </CardContent>
              </Card>

              <Card className="border-purple-500/20 bg-purple-500/5">
                <CardContent className="pt-6 text-center">
                  <Heart className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{totalReflections}</div>
                  <p className="text-xs text-muted-foreground">Reflections</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            {recentActivity.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Recent Activity
                </h3>
                <div className="space-y-2">
                  {recentActivity.slice(0, 3).map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <Badge variant={activity.type === 'template' ? 'default' : 'secondary'} className="text-xs">
                        {activity.type}
                      </Badge>
                      <span className="text-sm flex-1">{activity.title}</span>
                      <Badge variant="outline" className="text-xs">
                        {activity.category}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>

              <Button
                variant="default"
                className="w-full justify-between group"
                onClick={() => handleAction(onStartTemplate)}
              >
                <span>Start a New Template</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="w-full justify-between group"
                onClick={() => handleAction(onStartReflection)}
              >
                <span>Write a Reflection</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="w-full justify-between group"
                onClick={() => handleAction(onViewInsights)}
              >
                <span className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  View Your Insights
                </span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Dismiss Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center"
            >
              <Button variant="ghost" size="sm" onClick={onDismiss}>
                Continue to Life OS
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
