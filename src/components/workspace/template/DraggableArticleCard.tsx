'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  tags: string[];
  readTime: number;
}

interface DraggableArticleCardProps {
  article: Article;
  onClick?: () => void;
}

export function DraggableArticleCard({ article, onClick }: DraggableArticleCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: article.id,
    data: {
      type: 'article',
      article,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        'group hover:border-primary/40 transition-all cursor-grab active:cursor-grabbing',
        isDragging && 'ring-2 ring-primary/20 shadow-lg'
      )}
    >
      <CardHeader className="relative">
        <div className="flex items-start gap-3">
          {/* Drag Handle */}
          <button
            {...listeners}
            {...attributes}
            className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity touch-none cursor-grab active:cursor-grabbing"
            aria-label="Drag to editor"
          >
            <GripVertical className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm flex items-center gap-2">
              <span className="truncate">{article.title}</span>
              <ExternalLink className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
            </CardTitle>
            <CardDescription className="text-xs line-clamp-2 mt-1.5">
              {article.excerpt}
            </CardDescription>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-muted-foreground">{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
