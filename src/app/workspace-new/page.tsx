'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppShell } from '@/components/workspace/AppShell';
import { useWorkspaceStore } from '@/stores/workspace-store';

/**
 * New Workspace Page with Deep Linking Support
 *
 * URL patterns:
 * - /workspace-new - Default (dashboard/template mode)
 * - /workspace-new?view=template&id=<templateId> - Open specific template
 * - /workspace-new?view=reflect&id=<entryId> - Open specific reflection
 * - /workspace-new?view=lifeos&tab=graph - Open Life OS with specific tab
 * - /workspace-new?view=lifeos&tab=board&filter=recent - Life OS with filters
 */
export default function WorkspaceNewPage() {
  const searchParams = useSearchParams();
  const { setStage, openTemplate, openReflection } = useWorkspaceStore();

  // Handle deep linking on mount
  useEffect(() => {
    const view = searchParams.get('view');
    const id = searchParams.get('id');
    const tab = searchParams.get('tab');

    if (view === 'template' && id) {
      // Deep link to specific template
      openTemplate(id);
    } else if (view === 'reflect' && id) {
      // Deep link to specific reflection
      openReflection(id);
    } else if (view === 'lifeos') {
      // Deep link to Life OS
      setStage('lifeos');
      // Tab parameter will be handled by LifeOSWorkspace component
    } else if (view === 'reflect') {
      // Just open reflection mode
      setStage('reflect');
    } else if (view === 'template') {
      // Just open template mode
      setStage('template');
    }
    // Default is template mode (handled by workspace store initial state)
  }, [searchParams, setStage, openTemplate, openReflection]);

  return <AppShell />;
}
