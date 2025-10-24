'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { PenLine, Save, Trash2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface JournalEntry {
  id: string;
  title: string | null;
  content: string;
  tags: string[];
  mood: string | null;
  created_at: string;
  updated_at: string;
}

export default function JournalPage() {
  const searchParams = useSearchParams();
  const entryId = searchParams.get('entryId');

  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  // Fetch entry if entryId exists
  useEffect(() => {
    if (entryId) {
      fetchEntry(entryId);
    } else {
      // Reset for new entry
      setEntry(null);
      setTitle('');
      setContent('');
      setTags('');
    }
  }, [entryId]);

  const fetchEntry = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/journal/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch entry');
      }

      const data = await response.json();
      setEntry(data.entry);
      setTitle(data.entry.title || '');
      setContent(data.entry.content);
      setTags(data.entry.tags.join(', '));
    } catch (error) {
      console.error('Error fetching entry:', error);
      toast.error('Failed to load entry');
    } finally {
      setLoading(false);
    }
  };

  // Save entry (create or update)
  const handleSave = async () => {
    if (!content.trim()) {
      toast.error('Content is required');
      return;
    }

    const tagsArray = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    try {
      setSaving(true);

      if (entryId) {
        // Update existing entry
        const response = await fetch(`/api/journal/${entryId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title.trim() || null,
            content: content.trim(),
            tags: tagsArray,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update entry');
        }

        const data = await response.json();
        setEntry(data.entry);
        toast.success('Entry updated successfully');
      } else {
        // Create new entry
        const response = await fetch('/api/journal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title.trim() || null,
            content: content.trim(),
            tags: tagsArray,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create entry');
        }

        const data = await response.json();
        setEntry(data.entry);
        toast.success('Entry created successfully');

        // Reload to update sidebar
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving entry:', error);
      toast.error('Failed to save entry');
    } finally {
      setSaving(false);
    }
  };

  // Delete entry
  const handleDelete = async () => {
    if (!entryId) return;

    if (!confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    try {
      const response = await fetch(`/api/journal/${entryId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete entry');
      }

      toast.success('Entry deleted successfully');

      // Clear form and reload
      setEntry(null);
      setTitle('');
      setContent('');
      setTags('');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting entry:', error);
      toast.error('Failed to delete entry');
    }
  };

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
              <PenLine className="w-4 h-4 text-[#6366f1]" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                {entryId ? 'Edit Entry' : 'New Entry'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {entryId ? 'Update your journal entry' : 'Create a new journal entry'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {entryId && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleDelete}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            )}
            <Button onClick={handleSave} disabled={saving} size="sm">
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="h-full flex flex-col gap-4">
            {/* Title */}
            <Input
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-medium"
            />

            {/* Tags */}
            <Input
              placeholder="Tags (comma separated, e.g., personal, work, goals)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="text-sm"
            />

            {/* Content */}
            <Textarea
              placeholder="Write your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 resize-none text-base"
            />
          </div>
        )}
      </div>
    </div>
  );
}
