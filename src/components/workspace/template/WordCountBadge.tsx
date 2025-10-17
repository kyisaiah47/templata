'use client';

import { useMemo } from 'react';
import { FileText, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface WordCountBadgeProps {
  text: string;
  className?: string;
}

function calculateWordCount(text: string): number {
  return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
}

function calculateReadingTime(wordCount: number): number {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function WordCountBadge({ text, className }: WordCountBadgeProps) {
  const stats = useMemo(() => {
    const wordCount = calculateWordCount(text);
    const readingTime = calculateReadingTime(wordCount);
    return { wordCount, readingTime };
  }, [text]);

  if (stats.wordCount === 0) return null;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Badge variant="secondary" className="gap-1.5 px-2 py-1">
        <FileText className="h-3 w-3" />
        <span className="text-xs">{stats.wordCount} words</span>
      </Badge>
      <Badge variant="secondary" className="gap-1.5 px-2 py-1">
        <Clock className="h-3 w-3" />
        <span className="text-xs">{stats.readingTime} min read</span>
      </Badge>
    </div>
  );
}
