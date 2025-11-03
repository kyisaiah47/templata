'use client';

import { NotesView } from './NotesView';
import { TrackTabsWrapper } from '@/components/TrackTabsWrapper';
import { FileText } from 'lucide-react';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

interface NotesViewWrapperProps {
  selectedTrackIds: string[];
}

export function NotesViewWrapper({ selectedTrackIds }: NotesViewWrapperProps) {
  return (
    <TrackTabsWrapper
      selectedTrackIds={selectedTrackIds}
      emptyState={
        <div className="h-full flex items-center justify-center">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileText />
              </EmptyMedia>
              <EmptyTitle>No tracks selected</EmptyTitle>
              <EmptyDescription>
                Select a track to write freeform notes
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </div>
      }
      renderView={(track) => {
        const displayName = track.custom_name || track.guides.name;
        return (
          <NotesView
            trackId={track.id}
            trackName={displayName}
          />
        );
      }}
    />
  );
}
