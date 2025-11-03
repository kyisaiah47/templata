'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Plus, FolderOpen, Settings, Trash2, Archive, Loader2 } from 'lucide-react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string | null;
}

interface Track {
  id: string;
  guide_id: string;
  custom_name: string | null;
  progress: number;
  archived: boolean;
  created_at: string;
  guides: Guide;
}

interface TracksViewProps {
  onSelectTrack?: (trackId: string) => void;
}

export function TracksView({ onSelectTrack }: TracksViewProps) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [guides, setGuides] = useState<Guide[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchTracks();
    fetchGuides();
  }, []);

  async function fetchTracks() {
    try {
      setLoading(true);
      const res = await fetch('/api/tracks?archived=false');

      if (!res.ok) {
        if (res.status === 401) {
          setTracks([]);
          setLoading(false);
          return;
        }
        throw new Error('Failed to fetch tracks');
      }

      const data = await res.json();
      setTracks(data.tracks || []);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchGuides() {
    try {
      const res = await fetch('/api/guides?all=true');
      const data = await res.json();
      setGuides(data.guides || []);
    } catch (error) {
      console.error('Error fetching guides:', error);
    }
  }

  async function createTrack(guideId: string) {
    try {
      setCreating(true);
      const res = await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guide_id: guideId }),
      });

      if (!res.ok) {
        throw new Error('Failed to create track');
      }

      const data = await res.json();
      setTracks(prev => [data.track, ...prev]);
      setCreateDialogOpen(false);
      setSearchQuery('');

      // Auto-select the newly created track
      if (onSelectTrack) {
        onSelectTrack(data.track.id);
      }
    } catch (error) {
      console.error('Error creating track:', error);
    } finally {
      setCreating(false);
    }
  }

  async function archiveTrack(trackId: string) {
    try {
      const res = await fetch(`/api/tracks/${trackId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived: true }),
      });

      if (!res.ok) {
        throw new Error('Failed to archive track');
      }

      setTracks(prev => prev.filter(t => t.id !== trackId));
    } catch (error) {
      console.error('Error archiving track:', error);
    }
  }

  const filteredGuides = searchQuery.trim()
    ? guides.filter(g =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : guides;

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Your Tracks</h1>
              <p className="text-xs text-muted-foreground">
                {tracks.length} active track{tracks.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Track
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Start a New Track</DialogTitle>
                <DialogDescription>
                  Choose a guide to start working on. You can create multiple tracks from the same guide.
                </DialogDescription>
              </DialogHeader>

              <Command className="rounded-lg border">
                <CommandInput
                  placeholder="Search guides..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
                <CommandList className="max-h-[400px]">
                  <CommandEmpty>No guides found.</CommandEmpty>
                  <CommandGroup>
                    {filteredGuides.map((guide) => (
                      <CommandItem
                        key={guide.id}
                        onSelect={() => createTrack(guide.id)}
                        disabled={creating}
                      >
                        <div className="flex-1">
                          <div className="font-medium">{guide.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {guide.description}
                          </div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="flex-1 overflow-auto p-6">
        {tracks.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FolderOpen />
                </EmptyMedia>
                <EmptyTitle>No tracks yet</EmptyTitle>
                <EmptyDescription>
                  Start a track from a guide to begin working
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button onClick={() => setCreateDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Track
                </Button>
              </EmptyContent>
            </Empty>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div
                    onClick={() => onSelectTrack?.(track.id)}
                    className="mb-3"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {track.custom_name || track.guides.name}
                        </h3>
                        {track.custom_name && (
                          <p className="text-xs text-muted-foreground">
                            From: {track.guides.name}
                          </p>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {track.progress}%
                      </Badge>
                    </div>

                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${track.progress}%` }}
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Started {new Date(track.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-border/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Open settings modal
                      }}
                      className="flex-1"
                    >
                      <Settings className="h-3 w-3 mr-1" />
                      Settings
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('Archive this track?')) {
                          archiveTrack(track.id);
                        }
                      }}
                      className="flex-1"
                    >
                      <Archive className="h-3 w-3 mr-1" />
                      Archive
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
