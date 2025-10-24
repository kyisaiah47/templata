'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CreateWorkspaceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EMOJI_OPTIONS = ['📁', '💼', '🎯', '🚀', '💡', '📊', '🎨', '⚡', '🌟', '🔥', '💻', '📚'];

export function CreateWorkspaceModal({ open, onOpenChange }: CreateWorkspaceModalProps) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('📁');
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    if (!name.trim()) return;

    try {
      setCreating(true);
      const response = await fetch('/api/workspaces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          icon: selectedIcon,
        }),
      });

      if (!response.ok) throw new Error('Failed to create workspace');

      const data = await response.json();
      onOpenChange(false);
      router.push(`/app/${data.workspace.id}`);
      router.refresh();

      // Reset form
      setName('');
      setSelectedIcon('📁');
    } catch (error) {
      console.error('Error creating workspace:', error);
    } finally {
      setCreating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-md p-0 gap-0 overflow-hidden" showCloseButton={false}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between">
          <DialogTitle className="text-lg font-semibold">Create Workspace</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Icon Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Icon
            </label>
            <div className="grid grid-cols-6 gap-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedIcon(emoji)}
                  className={`
                    h-12 w-12 rounded-md border-2 transition-all flex items-center justify-center text-2xl
                    ${selectedIcon === emoji
                      ? 'border-foreground bg-muted'
                      : 'border-border/40 hover:border-foreground/40 hover:bg-muted/50'
                    }
                  `}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Workspace Name
            </label>
            <input
              type="text"
              placeholder="My Workspace"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && name.trim()) {
                  handleCreate();
                }
              }}
              className="w-full px-3 py-2 border border-border rounded-md bg-transparent text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
              autoFocus
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/40 flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
            disabled={creating}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleCreate}
            disabled={!name.trim() || creating}
          >
            {creating ? 'Creating...' : 'Create Workspace'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
