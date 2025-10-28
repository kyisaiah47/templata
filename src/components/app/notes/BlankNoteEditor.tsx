'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SimpleEditor } from '@/components/ui/simple-editor';
import { Loader2, Save, Check } from 'lucide-react';
import { toast } from 'sonner';
import { debounce } from '@/lib/utils';

interface BlankNoteEditorProps {
  noteId: string;
  workspaceId: string;
}

export function BlankNoteEditor({ noteId, workspaceId }: BlankNoteEditorProps) {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Fetch note content
  useEffect(() => {
    async function fetchNote() {
      try {
        setLoading(true);
        const response = await fetch(`/api/notes/${noteId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch note');
        }

        const data = await response.json();
        setContent(data.userGuide?.content || '');
        setTitle(data.userGuide?.custom_name || '');
      } catch (error) {
        console.error('Error fetching note:', error);
        toast.error('Failed to load note');
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [noteId]);

  // Debounced save function
  const saveNote = useCallback(
    debounce(async (updates: { content?: string; name?: string }) => {
      try {
        setSaving(true);
        const response = await fetch(`/api/notes/${noteId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates),
        });

        if (!response.ok) {
          throw new Error('Failed to save note');
        }

        setLastSaved(new Date());
      } catch (error) {
        console.error('Error saving note:', error);
        toast.error('Failed to save note');
      } finally {
        setSaving(false);
      }
    }, 1000),
    [noteId]
  );

  // Handle content updates
  const handleContentUpdate = (newContent: string) => {
    setContent(newContent);
    saveNote({ content: newContent });
  };

  // Handle title updates
  const handleTitleUpdate = (newTitle: string) => {
    setTitle(newTitle);
    saveNote({ name: newTitle });
  };

  if (loading) {
    return (
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title Editor */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleUpdate(e.target.value)}
            placeholder="Untitled Note"
            className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/40"
          />
        </div>
      </div>

      {/* Save Indicator */}
      <div className="border-b border-border/40 px-6 py-2">
        <div className="max-w-4xl mx-auto flex items-center justify-end">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {saving ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Saving...</span>
              </>
            ) : lastSaved ? (
              <>
                <Check className="w-3 h-3 text-green-500" />
                <span>Saved {lastSaved.toLocaleTimeString()}</span>
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-8">
          <SimpleEditor
            content={content}
            onUpdate={handleContentUpdate}
            placeholder="Start writing..."
            className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl dark:prose-invert focus:outline-none max-w-none"
          />
        </div>
      </div>
    </motion.div>
  );
}
