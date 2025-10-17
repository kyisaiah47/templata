'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { WordCountBadge } from './WordCountBadge';
import { useDroppable } from '@dnd-kit/core';
import type { Article } from './DraggableArticleCard';

interface TemplateEditorProps {
  templateId?: string;
  currentPromptId: string | null;
  onProgressChange: (progress: number) => void;
  droppedArticle?: Article | null;
}

/**
 * Template Editor - Tiptap-based rich text editor
 *
 * Features:
 * - Rich text formatting
 * - Autosave (future)
 * - Drag & drop support (future)
 * - Prompt-specific content
 */
export function TemplateEditor({ templateId, currentPromptId, onProgressChange, droppedArticle }: TemplateEditorProps) {
  const [editorText, setEditorText] = useState('');

  const { setNodeRef, isOver } = useDroppable({
    id: 'template-editor-drop-zone',
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline cursor-pointer',
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your thoughts here...',
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    editorProps: {
      attributes: {
        class: cn(
          'prose prose-sm sm:prose lg:prose-lg xl:prose-xl',
          'max-w-none',
          'focus:outline-none',
          'min-h-[400px]',
          'p-8'
        ),
      },
    },
    content: '',
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      setEditorText(text);

      // Auto-save logic here (future)
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const estimatedProgress = Math.min((wordCount / 100) * 100, 100);
      onProgressChange(estimatedProgress);
    },
  });

  useEffect(() => {
    // Load content for current prompt (future)
    if (currentPromptId && editor) {
      // editor.commands.setContent(loadedContent);
    }
  }, [currentPromptId, editor]);

  // Handle article drops
  useEffect(() => {
    if (droppedArticle && editor) {
      // Insert article reference as a link at the current cursor position
      const articleReference = `<p><a href="${droppedArticle.url}" target="_blank" rel="noopener noreferrer">${droppedArticle.title}</a> — ${droppedArticle.excerpt}</p>`;
      editor.chain().focus().insertContent(articleReference).run();
    }
  }, [droppedArticle, editor]);

  if (!currentPromptId) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <div className="text-center space-y-2">
          <p className="text-lg">Select a prompt to begin</p>
          <p className="text-sm">Choose a prompt from the sidebar to start writing</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={setNodeRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'h-full transition-all',
        isOver && 'ring-2 ring-primary/30 bg-primary/5'
      )}
    >
      {/* Current Prompt Display */}
      <div className="border-b bg-card/30 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-foreground/90">
              What are your main goals for this project?
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Take your time to think through this deeply
            </p>
          </div>
          <WordCountBadge text={editorText} className="flex-shrink-0" />
        </div>
      </div>

      {/* Editor */}
      <div className="p-6">
        <EditorContent editor={editor} />
      </div>
    </motion.div>
  );
}
