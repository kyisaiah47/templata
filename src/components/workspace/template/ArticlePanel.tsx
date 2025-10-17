'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useMemo } from 'react';
import { DraggableArticleCard, type Article } from './DraggableArticleCard';

interface ArticlePanelProps {
  templateId?: string;
  currentPromptId: string | null;
  onClose: () => void;
}

// Expanded mock data with tags for contextual matching
const allArticles: Article[] = [
  {
    id: '1',
    title: 'Setting SMART Goals',
    excerpt: 'Learn how to set goals that are Specific, Measurable, Achievable, Relevant, and Time-bound.',
    url: 'https://example.com/smart-goals',
    readTime: 5,
    tags: ['goals', 'planning', 'objectives', 'start'],
  },
  {
    id: '2',
    title: 'Budget Planning Fundamentals',
    excerpt: 'Essential principles for creating and maintaining a realistic budget for any project.',
    url: 'https://example.com/budget-planning',
    readTime: 8,
    tags: ['finance', 'budget', 'money', 'resources'],
  },
  {
    id: '3',
    title: 'Stakeholder Mapping',
    excerpt: 'Identify and analyze all parties involved in your project for better collaboration.',
    url: 'https://example.com/stakeholder-mapping',
    readTime: 6,
    tags: ['stakeholders', 'people', 'team', 'collaboration'],
  },
  {
    id: '4',
    title: 'Time Management Strategies',
    excerpt: 'Proven techniques for managing your time effectively and avoiding procrastination.',
    url: 'https://example.com/time-management',
    readTime: 7,
    tags: ['time', 'schedule', 'productivity', 'timeline'],
  },
  {
    id: '5',
    title: 'Risk Assessment Framework',
    excerpt: 'Identify potential risks and develop mitigation strategies for your projects.',
    url: 'https://example.com/risk-assessment',
    readTime: 9,
    tags: ['risk', 'challenges', 'obstacles', 'mitigation'],
  },
  {
    id: '6',
    title: 'Reflection & Learning',
    excerpt: 'How to reflect on your work and extract valuable insights for continuous improvement.',
    url: 'https://example.com/reflection-learning',
    readTime: 6,
    tags: ['reflection', 'learning', 'retrospective', 'review'],
  },
];

// Contextual mapping: prompt patterns → article tags
const promptToTagsMapping: Record<string, string[]> = {
  // Default prompts based on common template patterns
  'prompt-1': ['goals', 'planning', 'start'],
  'prompt-2': ['budget', 'resources', 'finance'],
  'prompt-3': ['stakeholders', 'people', 'team'],
  'prompt-4': ['time', 'schedule', 'timeline'],
  'prompt-5': ['risk', 'challenges', 'obstacles'],
  'prompt-6': ['reflection', 'learning', 'review'],
};

export function ArticlePanel({ templateId, currentPromptId, onClose }: ArticlePanelProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  // Filter articles contextually based on current prompt
  const contextualArticles = useMemo(() => {
    if (!currentPromptId) {
      // Return default articles if no prompt is selected
      return allArticles.slice(0, 3);
    }

    // Get tags for the current prompt
    const relevantTags = promptToTagsMapping[currentPromptId] || [];

    // Score each article by tag matches
    const scoredArticles = allArticles.map((article) => {
      const matchCount = article.tags.filter((tag) =>
        relevantTags.some((rt) => tag.includes(rt) || rt.includes(tag))
      ).length;
      return { article, score: matchCount };
    });

    // Sort by score and return top 3
    return scoredArticles
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.article);
  }, [currentPromptId]);

  // Trigger update animation when prompt changes
  useEffect(() => {
    if (currentPromptId) {
      setIsUpdating(true);
      const timer = setTimeout(() => setIsUpdating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [currentPromptId]);

  return (
    <div className="h-full flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-lg font-semibold">Related Articles</h2>
            {isUpdating && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {currentPromptId
              ? 'Updated for your current prompt'
              : 'Contextual guidance for your current step'}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Articles List */}
      <ScrollArea className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPromptId || 'default'}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {contextualArticles.length > 0 ? (
              contextualArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DraggableArticleCard article={article} />
                </motion.div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <p className="text-sm">No articles found for this prompt</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </ScrollArea>

      {/* Drag & Drop Hint */}
      <div className="mt-4 p-3 border border-dashed rounded-lg text-center text-xs text-muted-foreground">
        💡 Drag articles into your editor to reference them
      </div>
    </div>
  );
}
