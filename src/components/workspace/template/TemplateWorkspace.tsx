'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { PromptSidebar } from './PromptSidebar';
import { TemplateEditor } from './TemplateEditor';
import { ArticlePanel } from './ArticlePanel';
import { ProgressTracker } from './ProgressTracker';
import { WorkspaceDock } from '../shared/WorkspaceDock';
import { CompletionAnimation } from './CompletionAnimation';
import { AIHintDock } from './AIHintDock';
import { AchievementNotification, useAchievements } from './AchievementNotification';
import type { Article } from './DraggableArticleCard';

interface TemplateWorkspaceProps {
  templateId?: string;
  workspaceId?: string;
}

/**
 * Template Workspace - "Guided Progress"
 *
 * Emotional tone: Motivating, intelligent, interactive
 * Layout: Split-screen with prompts, editor, and articles
 * Feel: "Notion meets Duolingo for life-building"
 * Movement: Forward
 *
 * Features:
 * - Split-screen layout (left: prompts, center: editor, right: articles)
 * - Floating progress bar
 * - Drag & drop functionality
 * - Contextual article suggestions
 * - Ambient progress cues
 */
export function TemplateWorkspace({ templateId, workspaceId }: TemplateWorkspaceProps) {
  const [currentPromptId, setCurrentPromptId] = useState<string | null>(null);
  const [showArticles, setShowArticles] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [stepsCompleted, setStepsCompleted] = useState(0);
  const [droppedArticle, setDroppedArticle] = useState<Article | null>(null);

  const { currentAchievement, triggerAchievement, dismissAchievement } = useAchievements();

  // Trigger completion animation when progress reaches 100%
  useEffect(() => {
    if (progress >= 100 && !showCompletion) {
      setShowCompletion(true);
    }
  }, [progress, showCompletion]);

  // Trigger achievements based on steps completed
  useEffect(() => {
    if (stepsCompleted === 1) {
      triggerAchievement({
        message: 'Great start! First step complete',
        type: 'milestone',
        icon: 'check',
      });
    } else if (stepsCompleted === 3) {
      triggerAchievement({
        message: 'Nice work — completed 3 steps',
        type: 'milestone',
        icon: 'target',
      });
    } else if (stepsCompleted === 5) {
      triggerAchievement({
        message: 'On a roll! 5 steps down',
        type: 'streak',
        icon: 'zap',
      });
    } else if (stepsCompleted >= 6) {
      triggerAchievement({
        message: 'Amazing progress! All done',
        type: 'completion',
        icon: 'trophy',
      });
    }
  }, [stepsCompleted, triggerAchievement]);

  const handleProgressChange = (newProgress: number) => {
    setProgress(newProgress);
    // Calculate steps completed (assuming 6 total steps for this example)
    const totalSteps = 6;
    const completedSteps = Math.floor((newProgress / 100) * totalSteps);
    if (completedSteps > stepsCompleted) {
      setStepsCompleted(completedSteps);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Check if dropped over the editor
    if (over && over.id === 'template-editor-drop-zone') {
      const article = active.data.current?.article as Article;
      if (article) {
        setDroppedArticle(article);
        // Reset after a brief moment to allow the editor to process it
        setTimeout(() => setDroppedArticle(null), 100);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
    <div className="h-screen w-full bg-background flex flex-col overflow-hidden">
      {/* Floating Progress Tracker */}
      <ProgressTracker
        current={2}
        total={6}
        progress={progress}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-50"
      />

      {/* Main Split Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Prompt Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="w-80 border-r bg-card/50 backdrop-blur-sm overflow-y-auto"
        >
          <PromptSidebar
            templateId={templateId}
            currentPromptId={currentPromptId}
            onPromptSelect={setCurrentPromptId}
          />
        </motion.aside>

        {/* Center: Editor */}
        <motion.main
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex-1 overflow-y-auto"
        >
          <TemplateEditor
            templateId={templateId}
            currentPromptId={currentPromptId}
            onProgressChange={handleProgressChange}
            droppedArticle={droppedArticle}
          />
        </motion.main>

        {/* Right: Article Panel (collapsible) */}
        {showArticles && (
          <motion.aside
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="w-96 border-l bg-card/50 backdrop-blur-sm overflow-y-auto"
          >
            <ArticlePanel
              templateId={templateId}
              currentPromptId={currentPromptId}
              onClose={() => setShowArticles(false)}
            />
          </motion.aside>
        )}
      </div>

      {/* AI Hint Dock */}
      <AIHintDock currentPromptId={currentPromptId} />

      {/* Bottom Dock */}
      <WorkspaceDock
        mode="template"
        onToggleArticles={() => setShowArticles(!showArticles)}
        showArticles={showArticles}
      />

      {/* Completion Animation */}
      {showCompletion && (
        <CompletionAnimation onContinue={() => setShowCompletion(false)} />
      )}

      {/* Achievement Notification */}
      <AchievementNotification achievement={currentAchievement} onDismiss={dismissAchievement} />
    </div>
    </DndContext>
  );
}
