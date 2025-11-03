'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle, FileText, Archive as ArchiveIcon } from 'lucide-react';
import { useDataCache } from '@/contexts/DataCacheContext';

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  archived: boolean;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string | null;
  };
}

interface TrackProgress {
  track: Track;
  questionsAnswered: number;
  totalQuestions: number;
  readingsRead: number;
  totalReadings: number;
}

export function OverviewView() {
  const { tracks: cachedTracks, fetchTracks } = useDataCache();
  const [trackProgress, setTrackProgress] = useState<TrackProgress[]>([]);
  const [showArchived, setShowArchived] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, [cachedTracks]);

  const loadProgress = async () => {
    try {
      setLoading(true);

      // Get tracks
      const allTracks = cachedTracks || await fetchTracks(false);

      // Fetch progress for each track
      const progressData: TrackProgress[] = [];

      for (const track of allTracks) {
        // Fetch questions for this guide
        const questionsRes = await fetch(`/api/guides/${track.guide_id}/questions`);
        const questionsData = await questionsRes.json();
        const totalQuestions = questionsData.questions?.length || 0;

        // Fetch answers for this track
        const answersRes = await fetch(`/api/answers?track_id=${track.id}`);
        const answersData = await answersRes.json();
        const questionsAnswered = answersData.answers?.filter((a: any) => a.response?.trim()).length || 0;

        // Fetch readings for this guide
        const readingsRes = await fetch(`/api/guides/${track.guide_id}/readings`);
        const readingsData = await readingsRes.json();
        const totalReadings = readingsData.readings?.length || 0;

        // For now, we don't track which readings were read, so set to 0
        const readingsRead = 0;

        progressData.push({
          track,
          questionsAnswered,
          totalQuestions,
          readingsRead,
          totalReadings,
        });
      }

      setTrackProgress(progressData);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const activeTracks = trackProgress.filter(p => !p.track.archived);
  const archivedTracks = trackProgress.filter(p => p.track.archived);
  const displayedTracks = showArchived ? archivedTracks : activeTracks;

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading progress...</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-background">
      <div className="container mx-auto max-w-5xl px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Overview</h1>
          <p className="text-muted-foreground">Track your progress across all guides</p>
        </div>

        {/* Toggle between Active and Archive */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={!showArchived ? 'default' : 'outline'}
            onClick={() => setShowArchived(false)}
          >
            Active ({activeTracks.length})
          </Button>
          <Button
            variant={showArchived ? 'default' : 'outline'}
            onClick={() => setShowArchived(true)}
          >
            <ArchiveIcon className="h-4 w-4 mr-2" />
            Archive ({archivedTracks.length})
          </Button>
        </div>

        {/* Tracks List */}
        {displayedTracks.length === 0 ? (
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium mb-2">
                {showArchived ? 'No archived guides' : 'No active guides'}
              </p>
              <p className="text-sm">
                {showArchived
                  ? 'Completed guides will appear here'
                  : 'Start a guide to track your progress'}
              </p>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {displayedTracks.map((item, index) => {
              const { track, questionsAnswered, totalQuestions, readingsRead, totalReadings } = item;
              const progressPercent = totalQuestions > 0
                ? Math.round((questionsAnswered / totalQuestions) * 100)
                : 0;
              const isComplete = questionsAnswered === totalQuestions && totalQuestions > 0;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">
                            {track.custom_name || track.guides?.name || 'Untitled Track'}
                          </h3>
                          {isComplete && (
                            <Badge variant="default" className="bg-green-500">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Complete
                            </Badge>
                          )}
                        </div>
                        {track.guides?.description && (
                          <p className="text-sm text-muted-foreground">
                            {track.guides.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{progressPercent}%</span>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {questionsAnswered}/{totalQuestions}
                          </p>
                          <p className="text-xs text-muted-foreground">Questions answered</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {totalReadings}
                          </p>
                          <p className="text-xs text-muted-foreground">Readings available</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
