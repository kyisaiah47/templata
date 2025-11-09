'use client';

import { GuidesView } from './GuidesView';
import { TrackTabsWrapper } from '@/components/TrackTabsWrapper';

interface GuidesViewWrapperProps {
  selectedTrackIds: string[];
}

export function GuidesViewWrapper({
  selectedTrackIds
}: GuidesViewWrapperProps) {
  return (
    <TrackTabsWrapper
      selectedTrackIds={selectedTrackIds}
      renderBrowseMode={() => (
        <GuidesView />
      )}
      renderView={(track) => (
        <GuidesView
          trackId={track.id}
        />
      )}
    />
  );
}
