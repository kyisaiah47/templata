'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { Bold, Italic, Underline as UnderlineIcon, Strikethrough, Code, List, ListOrdered, Quote, Undo, Redo, Heading1, Heading2, Heading3 } from 'lucide-react'

interface SimpleEditorProps {
  content?: string
  onUpdate?: (content: string) => void
  placeholder?: string
  className?: string
}

export function SimpleEditor({ content = '', onUpdate, placeholder, className }: SimpleEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: className || 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="w-full min-h-[600px]">
      {/* Formatting Toolbar */}
      <div className="sticky top-0 z-10 bg-background border-b border-border/40 py-2 mb-4 flex items-center gap-1 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('bold') ? 'bg-muted text-primary' : ''}`}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('italic') ? 'bg-muted text-primary' : ''}`}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('underline') ? 'bg-muted text-primary' : ''}`}
          title="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('strike') ? 'bg-muted text-primary' : ''}`}
          title="Strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('code') ? 'bg-muted text-primary' : ''}`}
          title="Code"
        >
          <Code className="h-4 w-4" />
        </button>

        <div className="w-px h-6 bg-border mx-1" />

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('heading', { level: 1 }) ? 'bg-muted text-primary' : ''}`}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('heading', { level: 2 }) ? 'bg-muted text-primary' : ''}`}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('heading', { level: 3 }) ? 'bg-muted text-primary' : ''}`}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </button>

        <div className="w-px h-6 bg-border mx-1" />

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('bulletList') ? 'bg-muted text-primary' : ''}`}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('orderedList') ? 'bg-muted text-primary' : ''}`}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-muted ${editor.isActive('blockquote') ? 'bg-muted text-primary' : ''}`}
          title="Blockquote"
        >
          <Quote className="h-4 w-4" />
        </button>

        <div className="w-px h-6 bg-border mx-1" />

        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-muted"
          title="Undo"
          disabled={!editor.can().undo()}
        >
          <Undo className="h-4 w-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-muted"
          title="Redo"
          disabled={!editor.can().redo()}
        >
          <Redo className="h-4 w-4" />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="w-full min-h-[600px] [&_.ProseMirror]:min-h-[600px] [&_.ProseMirror]:outline-none [&_.ProseMirror]:border-0 [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:p-0"
        placeholder={placeholder}
      />
    </div>
  )
}