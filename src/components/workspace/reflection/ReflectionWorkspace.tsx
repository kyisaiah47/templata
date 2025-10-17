'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MoodSelector } from './MoodSelector';
import { TagPicker } from './TagPicker';
import { EntryArchiveDrawer } from './EntryArchiveDrawer';
import { AmbientModeToggle } from './AmbientModeToggle';
import { SoftSaveCue, useAutosave } from './SoftSaveCue';
import { ConnectionsModal } from './ConnectionsModal';
import { cn } from '@/lib/utils';
import { detectSentiment, getSentimentGradient, type Sentiment } from '@/lib/sentiment-detection';
import { useReflectionAmbient, useSoundCues } from '@/hooks/useSoundCues';

type Mood = 'happy' | 'neutral' | 'sad' | null;

interface ReflectionWorkspaceProps {
  templateId?: string;
  workspaceId?: string;
}

const moodGradients: Record<NonNullable<Mood>, string> = {
  happy: 'from-green-950 to-emerald-950',
  neutral: 'from-slate-950 to-slate-900',
  sad: 'from-blue-950 to-indigo-950',
};

/**
 * Reflection Workspace - "Quiet Depth"
 *
 * Emotional tone: Calm, honest, personal
 * Layout: Fullscreen minimal editor
 * Feel: "Sanctuary for introspection"
 * Movement: Inward
 *
 * Features:
 * - Fullscreen focus mode (no sidebars, no clutter)
 * - Daily rotating prompts
 * - Soft dim background
 * - Generous typography spacing
 * - Autosave (implied, no visible buttons)
 */
export function ReflectionWorkspace({ templateId, workspaceId }: ReflectionWorkspaceProps) {
  const [selectedMood, setSelectedMood] = useState<Mood>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [reflectionText, setReflectionText] = useState('');
  const [isDimMode, setIsDimMode] = useState(true);
  const [showConnectionsModal, setShowConnectionsModal] = useState(false);

  // Autosave hook
  const { isSaving, lastSaved } = useAutosave(reflectionText);

  // Ambient sound for reflection mode
  useReflectionAmbient();

  // Sound cues
  const { resumeAudio } = useSoundCues();

  // Show connections modal after substantial content is saved
  useEffect(() => {
    if (lastSaved && !isSaving && reflectionText.length > 100) {
      const timer = setTimeout(() => {
        setShowConnectionsModal(true);
      }, 3000); // Show 3 seconds after save
      return () => clearTimeout(timer);
    }
  }, [lastSaved, isSaving, reflectionText.length]);

  // Detect sentiment from text (debounced)
  const detectedSentiment = useMemo(() => {
    if (reflectionText.length < 20) {
      return { sentiment: 'neutral' as Sentiment, score: 0 };
    }
    return detectSentiment(reflectionText);
  }, [reflectionText]);

  // Update background gradient based on mood, sentiment, and ambient mode
  const backgroundGradient = isDimMode
    ? selectedMood
      ? moodGradients[selectedMood]
      : detectedSentiment.sentiment !== 'neutral'
      ? getSentimentGradient(detectedSentiment.sentiment, Math.abs(detectedSentiment.score))
      : 'from-slate-950 to-slate-900'
    : 'from-slate-100 to-slate-50'; // Light mode

  const textColor = isDimMode ? 'text-slate-100' : 'text-slate-900';

  // Resume audio on first user interaction
  const handleFirstInteraction = () => {
    resumeAudio();
  };

  return (
    <motion.div
      onClick={handleFirstInteraction}
      initial={{ opacity: 0, filter: 'brightness(1.2)' }}
      animate={{ opacity: 1, filter: 'brightness(1)' }}
      className={cn(
        'h-screen w-full bg-gradient-to-b transition-colors duration-1000',
        backgroundGradient,
        textColor
      )}
    >
      {/* Ambient Mode Toggle */}
      <AmbientModeToggle isDimMode={isDimMode} onToggle={() => setIsDimMode(!isDimMode)} />

      {/* Soft Save Cue */}
      <SoftSaveCue isSaving={isSaving} lastSaved={lastSaved} />

      <div className="container mx-auto max-w-3xl h-full flex flex-col justify-center px-8">
        {/* Daily Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-center"
        >
          <p className="text-sm text-slate-400 mb-4">Today's Reflection</p>
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-slate-200">
            What drained your energy most this week?
          </h2>
        </motion.div>

        {/* Mood Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <MoodSelector selectedMood={selectedMood} onMoodChange={setSelectedMood} />
        </motion.div>

        {/* Minimal Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-1 max-h-[400px]"
        >
          <textarea
            className={cn(
              'w-full h-full bg-transparent border-none outline-none resize-none text-lg leading-relaxed',
              isDimMode ? 'text-slate-300 placeholder:text-slate-600' : 'text-slate-700 placeholder:text-slate-400'
            )}
            placeholder="Take your time... this is your space"
            value={reflectionText}
            onChange={(e) => setReflectionText(e.target.value)}
            autoFocus
          />
        </motion.div>

        {/* Tag Picker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <TagPicker selectedTags={selectedTags} onTagsChange={setSelectedTags} />
        </motion.div>

        {/* Subtle Auto-save Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-xs text-slate-600 py-8"
        >
          Your thoughts are safe here
        </motion.div>
      </div>

      {/* Entry Archive Drawer */}
      <EntryArchiveDrawer
        entries={[]}
        onEntrySelect={(entry) => console.log('Selected entry:', entry)}
      />

      {/* Connections Modal */}
      <ConnectionsModal
        isOpen={showConnectionsModal}
        onClose={() => setShowConnectionsModal(false)}
        onViewConnections={() => {
          setShowConnectionsModal(false);
          if (typeof window !== 'undefined') {
            window.location.href = '/workspace-new?view=lifeos&tab=graph';
          }
        }}
      />
    </motion.div>
  );
}
