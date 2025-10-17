'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { BoardView } from './BoardView';
import { TimelineView } from './TimelineView';
import { GraphView } from './GraphView';
import { InsightsView } from './InsightsView';
import { WelcomeScreen } from './WelcomeScreen';
import { ExportButton } from './ExportButton';
import { useWorkspaceStore } from '@/stores/workspace-store';

interface LifeOSWorkspaceProps {
  workspaceId?: string;
  defaultTab?: 'board' | 'timeline' | 'graph' | 'insights';
  defaultTimeRange?: string;
  defaultCategory?: string;
  defaultMoodFilter?: string;
}

export function LifeOSWorkspace({
  workspaceId,
  defaultTab = 'board',
  defaultTimeRange = '30d',
  defaultCategory = 'all',
  defaultMoodFilter = 'all'
}: LifeOSWorkspaceProps) {
  const [timeRange, setTimeRange] = useState(defaultTimeRange);
  const [category, setCategory] = useState(defaultCategory);
  const [moodFilter, setMoodFilter] = useState(defaultMoodFilter);
  const [showWelcome, setShowWelcome] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);

  const { setStage, openTemplate, openReflection } = useWorkspaceStore();

  // Check if this is the first visit to Life OS (can be improved with localStorage)
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('lifeos-welcome-seen');
    if (!hasSeenWelcome) {
      setShowWelcome(true);
      sessionStorage.setItem('lifeos-welcome-seen', 'true');
    }
  }, []);

  // Mock data - would come from store/API in production
  const welcomeData = {
    currentStreak: 5,
    totalTemplates: 4,
    totalReflections: 7,
    recentActivity: [
      { id: '1', title: 'Wedding Planning', type: 'template' as const, category: 'Life Event' },
      { id: '2', title: 'Career Reflection', type: 'reflection' as const, category: 'Career' },
      { id: '3', title: 'Financial Planning', type: 'template' as const, category: 'Finance' },
    ],
  };

  const handleDismissWelcome = () => {
    setShowWelcome(false);
  };

  const handleStartTemplate = () => {
    setShowWelcome(false);
    setStage('template');
  };

  const handleStartReflection = () => {
    setShowWelcome(false);
    setStage('reflect');
  };

  const handleViewInsights = () => {
    setShowWelcome(false);
    setActiveTab('insights');
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen
            userName="Explorer"
            currentStreak={welcomeData.currentStreak}
            totalTemplates={welcomeData.totalTemplates}
            totalReflections={welcomeData.totalReflections}
            recentActivity={welcomeData.recentActivity}
            onDismiss={handleDismissWelcome}
            onStartTemplate={handleStartTemplate}
            onStartReflection={handleStartReflection}
            onViewInsights={handleViewInsights}
          />
        )}
      </AnimatePresence>
    </>(
    <div className="h-screen w-full bg-gradient-to-br from-background to-muted/30 overflow-auto">
      <div className="container mx-auto max-w-7xl p-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Your Life OS</h1>
          <p className="text-muted-foreground">A panoramic view of all your template work and life planning</p>
        </motion.div>

        {/* Filters & Actions */}
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="career">Career</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="wellness">Wellness</SelectItem>
              <SelectItem value="life-events">Life Events</SelectItem>
            </SelectContent>
          </Select>
          <Select value={moodFilter} onValueChange={setMoodFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Mood" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Moods</SelectItem>
              <SelectItem value="happy">😊 Happy</SelectItem>
              <SelectItem value="neutral">😐 Neutral</SelectItem>
              <SelectItem value="sad">😔 Sad</SelectItem>
            </SelectContent>
          </Select>
          </div>

          {/* Export Button */}
          <ExportButton
            templates={[]} // TODO: Get from store
            reflections={[]} // TODO: Get from store
            insights={undefined} // TODO: Get from analytics engine
          />
        </div>

        {/* View Mode Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="board">Board</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="graph">Graph</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="board"><BoardView /></TabsContent>
          <TabsContent value="timeline"><TimelineView /></TabsContent>
          <TabsContent value="graph"><GraphView /></TabsContent>
          <TabsContent value="insights"><InsightsView /></TabsContent>
        </Tabs>
      </div>
    </div>
    </>
  );
}
