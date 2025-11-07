'use client';

import { GuidesView } from './GuidesView';
import { TrackTabsWrapper } from '@/components/TrackTabsWrapper';

interface GuidesViewWrapperProps {
  selectedTrackIds: string[];
  setActions?: (actions: any) => void;
}

export function GuidesViewWrapper({
  selectedTrackIds,
  setActions
}: GuidesViewWrapperProps) {
  return (
    <TrackTabsWrapper
      selectedTrackIds={selectedTrackIds}
      renderBrowseMode={() => (
        <GuidesView
          setActions={setActions}
        />
      )}
      renderView={(track) => (
        <GuidesView
          trackId={track.id}
          setActions={setActions}
        />
      )}
    />
  );
}
