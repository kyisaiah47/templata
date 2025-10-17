'use client';

import { motion } from 'framer-motion';
import { FileText, BookOpen, Layout, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { WorkspaceMode } from '@/types/workspace';

interface WorkspaceDockProps {
  mode: WorkspaceMode;
  onToggleArticles?: () => void;
  showArticles?: boolean;
}

/**
 * Workspace Dock - Quick Access Bar
 *
 * Bottom-aligned dock for quick access to:
 * - Templates browser
 * - Prompts library
 * - Articles panel
 * - AI assistant (future)
 *
 * Adapts based on workspace mode
 */
export function WorkspaceDock({ mode, onToggleArticles, showArticles }: WorkspaceDockProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className={cn(
        'border-t bg-card/95 backdrop-blur-md',
        'px-6 py-3',
        'flex items-center justify-between'
      )}
    >
      {/* Left: Quick Actions */}
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Layout className="h-4 w-4" />
                <span className="text-sm">Templates</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Browse all templates</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="text-sm">Prompts</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>15,000+ action prompts</p>
            </TooltipContent>
          </Tooltip>

          {mode === 'template' && onToggleArticles && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={showArticles ? 'default' : 'ghost'}
                  size="sm"
                  className="gap-2"
                  onClick={onToggleArticles}
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Articles</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle article panel</p>
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </div>

      {/* Center: Mode Indicator */}
      <div className="text-xs text-muted-foreground flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <span>
          {mode === 'template' && 'Guided Progress'}
          {mode === 'reflect' && 'Quiet Depth'}
          {mode === 'lifeos' && 'Life Overview'}
        </span>
      </div>

      {/* Right: AI Assistant (Future) */}
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">AI Assistant</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
}
