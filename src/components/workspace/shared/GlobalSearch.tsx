'use client';

import { useState, useEffect, useCallback } from 'react';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Search, FileText, MessageSquare, Hash, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getCategoryStyles, getCategoryColor } from '@/lib/category-colors';

interface SearchResult {
  id: string;
  type: 'template' | 'reflection' | 'tag' | 'insight';
  title: string;
  excerpt?: string;
  category?: string;
  icon: typeof FileText;
}

const mockResults: SearchResult[] = [
  { id: '1', type: 'template', title: 'Wedding Planning', excerpt: 'Main goals and timeline...', category: 'Life Event', icon: FileText },
  { id: '2', type: 'template', title: 'Career Transition', excerpt: 'Next steps for growth...', category: 'Career', icon: FileText },
  { id: '3', type: 'reflection', title: 'Today's Reflection', excerpt: 'Feeling grateful for...', icon: MessageSquare },
  { id: '4', type: 'tag', title: '#growth', icon: Hash },
  { id: '5', type: 'tag', title: '#work', icon: Hash },
  { id: '6', type: 'insight', title: 'Weekly Progress', excerpt: 'Completed 5 templates', icon: TrendingUp },
];

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredResults = mockResults.filter((result) =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = useCallback((result: SearchResult) => {
    setOpen(false);
    console.log('Selected:', result);
    // Navigate to result
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search templates, reflections, tags..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {/* Templates */}
        {filteredResults.some((r) => r.type === 'template') && (
          <CommandGroup heading="Templates">
            {filteredResults
              .filter((r) => r.type === 'template')
              .map((result) => {
                const categoryColor = result.category ? getCategoryColor(result.category) : null;
                return (
                  <CommandItem
                    key={result.id}
                    onSelect={() => handleSelect(result)}
                    className="flex items-start gap-3 py-3"
                  >
                    <FileText
                      className="h-4 w-4 mt-0.5"
                      style={{ color: categoryColor?.border || 'hsl(var(--primary))' }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{result.title}</span>
                        {result.category && (
                          <Badge variant="outline" className="text-xs" style={getCategoryStyles(result.category)}>
                            {result.category}
                          </Badge>
                        )}
                      </div>
                      {result.excerpt && (
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {result.excerpt}
                        </div>
                      )}
                    </div>
                  </CommandItem>
                );
              })}
          </CommandGroup>
        )}

        {/* Reflections */}
        {filteredResults.some((r) => r.type === 'reflection') && (
          <CommandGroup heading="Reflections">
            {filteredResults
              .filter((r) => r.type === 'reflection')
              .map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="flex items-start gap-3 py-3"
                >
                  <MessageSquare className="h-4 w-4 mt-0.5 text-green-500" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{result.title}</div>
                    {result.excerpt && (
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        {result.excerpt}
                      </div>
                    )}
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        )}

        {/* Tags */}
        {filteredResults.some((r) => r.type === 'tag') && (
          <CommandGroup heading="Tags">
            {filteredResults
              .filter((r) => r.type === 'tag')
              .map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="flex items-center gap-3 py-3"
                >
                  <Hash className="h-4 w-4 text-purple-500" />
                  <div className="font-medium text-sm">{result.title}</div>
                </CommandItem>
              ))}
          </CommandGroup>
        )}

        {/* Insights */}
        {filteredResults.some((r) => r.type === 'insight') && (
          <CommandGroup heading="Insights">
            {filteredResults
              .filter((r) => r.type === 'insight')
              .map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="flex items-start gap-3 py-3"
                >
                  <TrendingUp className="h-4 w-4 mt-0.5 text-orange-500" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{result.title}</div>
                    {result.excerpt && (
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        {result.excerpt}
                      </div>
                    )}
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
