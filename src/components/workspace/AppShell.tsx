'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useWorkspaceStore } from '@/stores/workspace-store';
import { TopNav } from './TopNav';
import { RightDock } from './RightDock';
import { Workspace } from './Workspace';
import { Toaster } from '@/components/ui/toaster';
import { GlobalSearch } from './shared/GlobalSearch';

/**
 * AppShell - Main Container
 *
 * Responsibilities:
 * - Bootstrap providers (theme, auth, data)
 * - Hold stage state machine
 * - Listen for keyboard shortcuts
 * - Manage global UI chrome
 */
export function AppShell() {
  const { stage, setStage, toggleSound, setReducedMotion } = useWorkspaceStore();
  const searchParams = useSearchParams();

  // Extract URL parameters for deep linking
  const lifeOSTab = searchParams.get('tab') as 'board' | 'timeline' | 'graph' | 'insights' | null;
  const lifeOSTimeRange = searchParams.get('timeRange');
  const lifeOSCategory = searchParams.get('category');
  const lifeOSMoodFilter = searchParams.get('mood');

  // Sync body data-stage attribute for CSS theme tokens
  useEffect(() => {
    document.body.setAttribute('data-stage', stage);
  }, [stage]);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [setReducedMotion]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // g+t → Template
      if (e.key === 'g') {
        const nextKey = (e: KeyboardEvent) => {
          if (e.key === 't') setStage('template');
          if (e.key === 'r') setStage('reflect');
          if (e.key === 'l') setStage('lifeos');
          window.removeEventListener('keydown', nextKey);
        };
        window.addEventListener('keydown', nextKey);
        setTimeout(() => window.removeEventListener('keydown', nextKey), 1000);
      }

      // Cmd+K → Global search (handled by GlobalSearch component)

      // Cmd+Enter → Next step in Template (future)
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        if (stage === 'template') {
          console.log('Next step');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, setStage]);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <TopNav />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Stage Viewport */}
        <div className="flex-1 overflow-hidden">
          <Workspace
            mode={stage}
            templateId="wedding-planning"
            workspaceId="demo-workspace"
            lifeOSTab={lifeOSTab || undefined}
            lifeOSTimeRange={lifeOSTimeRange || undefined}
            lifeOSCategory={lifeOSCategory || undefined}
            lifeOSMoodFilter={lifeOSMoodFilter || undefined}
          />
        </div>

        {/* Right Dock (collapsible) */}
        <RightDock />
      </div>

      {/* Global Toasts */}
      <Toaster />

      {/* Global Search (Cmd+K) */}
      <GlobalSearch />
    </div>
  );
}
