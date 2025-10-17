'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { WorkspaceMode } from '@/types/workspace';
import { TemplateWorkspace } from './template/TemplateWorkspace';
import { ReflectionWorkspace } from './reflection/ReflectionWorkspace';
import { LifeOSWorkspace } from './lifeos/LifeOSWorkspace';

interface WorkspaceProps {
  mode: WorkspaceMode;
  templateId?: string;
  workspaceId?: string;
  // Deep linking props for Life OS
  lifeOSTab?: 'board' | 'timeline' | 'graph' | 'insights';
  lifeOSTimeRange?: string;
  lifeOSCategory?: string;
  lifeOSMoodFilter?: string;
}

/**
 * Main Workspace Component
 *
 * Orchestrates between three distinct workspace modes:
 * - Template: Guided, structured flow (Notion meets Duolingo)
 * - Reflection: Stillness and depth (sanctuary for introspection)
 * - Life OS: Synthesis and perspective (panoramic life view)
 *
 * Each mode has its own emotional tone, layout, and interaction patterns.
 * Transitions are spatial and meaningful, not just tab switches.
 */
export function Workspace({
  mode,
  templateId,
  workspaceId,
  lifeOSTab,
  lifeOSTimeRange,
  lifeOSCategory,
  lifeOSMoodFilter
}: WorkspaceProps) {
  // Transition variants for spatial movement
  const variants = {
    template: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    reflect: {
      initial: { opacity: 0, filter: 'brightness(1.2)' },
      animate: { opacity: 1, filter: 'brightness(1)' },
      exit: { opacity: 0, filter: 'brightness(0.8)' },
    },
    lifeos: {
      initial: { opacity: 0, scale: 1.05 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={variants[mode].initial}
        animate={variants[mode].animate}
        exit={variants[mode].exit}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
        }}
        className="h-full w-full"
      >
        {mode === 'template' && (
          <TemplateWorkspace
            templateId={templateId}
            workspaceId={workspaceId}
          />
        )}

        {mode === 'reflect' && (
          <ReflectionWorkspace
            templateId={templateId}
            workspaceId={workspaceId}
          />
        )}

        {mode === 'lifeos' && (
          <LifeOSWorkspace
            workspaceId={workspaceId}
            defaultTab={lifeOSTab}
            defaultTimeRange={lifeOSTimeRange}
            defaultCategory={lifeOSCategory}
            defaultMoodFilter={lifeOSMoodFilter}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
