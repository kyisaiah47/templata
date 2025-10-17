'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Hash } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TagPickerProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  className?: string;
}

// Pre-defined suggested tags
const suggestedTags = [
  'work',
  'personal',
  'growth',
  'relationships',
  'health',
  'gratitude',
  'challenge',
  'achievement',
  'learning',
  'goals',
];

export function TagPicker({ selectedTags, onTagsChange, className }: TagPickerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = (tag: string) => {
    const normalizedTag = tag.toLowerCase().trim();
    if (normalizedTag && !selectedTags.includes(normalizedTag)) {
      onTagsChange([...selectedTags, normalizedTag]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    onTagsChange(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      handleAddTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && selectedTags.length > 0) {
      handleRemoveTag(selectedTags[selectedTags.length - 1]);
    } else if (e.key === 'Escape') {
      setIsExpanded(false);
      setInputValue('');
    }
  };

  const filteredSuggestions = suggestedTags.filter(
    (tag) =>
      !selectedTags.includes(tag) &&
      (inputValue === '' || tag.includes(inputValue.toLowerCase()))
  );

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center gap-2">
        <Hash className="h-4 w-4 text-slate-400" />
        <span className="text-sm text-slate-400">Tags</span>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {/* Selected Tags */}
        <AnimatePresence mode="popLayout">
          {selectedTags.map((tag) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              layout
            >
              <Badge
                variant="secondary"
                className="pl-3 pr-1 py-1.5 bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800"
              >
                <span className="text-xs">#{tag}</span>
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 p-0.5 rounded-sm hover:bg-slate-700 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add Tag Button / Input */}
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="relative"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => {
                if (!inputValue) {
                  setIsExpanded(false);
                }
              }}
              placeholder="Type a tag..."
              className="w-32 px-3 py-1.5 text-xs bg-slate-800/50 border border-slate-700 rounded-md text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </motion.div>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsExpanded(true)}
            className="h-7 px-2 text-xs border-slate-700 bg-slate-800/30 hover:bg-slate-800/50 text-slate-400 hover:text-slate-300"
          >
            <Plus className="h-3 w-3 mr-1" />
            Add tag
          </Button>
        )}
      </div>

      {/* Suggested Tags */}
      {isExpanded && filteredSuggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2"
        >
          <span className="text-xs text-slate-500 w-full">Suggestions:</span>
          {filteredSuggestions.slice(0, 5).map((tag) => (
            <button
              key={tag}
              onClick={() => handleAddTag(tag)}
              className="px-2 py-1 text-xs rounded-md bg-slate-800/30 border border-slate-700/50 text-slate-400 hover:bg-slate-800/50 hover:text-slate-300 hover:border-slate-600 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
