'use client';

import { useEffect, useState } from 'react';
import { GuidanceTemplate, Resource, ReflectionPrompt } from '@/types/template';
import { templateRegistry, searchTemplates } from '@/registry/templates';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { BookOpen, MessageCircle, Target, Hash, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CommandPaletteProps {
  template: GuidanceTemplate;
  onSectionChange: (sectionIndex: number) => void;
  onInsertPrompt: (prompt: ReflectionPrompt) => void;
  onOpenResource: (resource: Resource) => void;
}

export function CommandPalette({
  template,
  onSectionChange,
  onInsertPrompt,
  onOpenResource
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

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

  const handleSectionSelect = (sectionIndex: number) => {
    onSectionChange(sectionIndex);
    setOpen(false);
  };

  const handlePromptSelect = (prompt: ReflectionPrompt) => {
    onInsertPrompt(prompt);
    setOpen(false);
  };

  const handleResourceSelect = (resource: Resource) => {
    onOpenResource(resource);
    setOpen(false);
  };

  const handleTemplateSelect = (templateUrl: string) => {
    router.push(templateUrl);
    setOpen(false);
  };

  const allPrompts = template.sections.flatMap(section =>
    section.reflectionPrompts.map(prompt => ({ ...prompt, sectionTitle: section.title }))
  );

  const allResources = template.sections.flatMap(section =>
    (section.resources || []).map(resource => ({ ...resource, sectionTitle: section.title }))
  );

  // Parse prefix commands
  const parseQuery = (query: string) => {
    const prefixMatch = query.match(/^@(template|section|prompt|resource)\s+(.*)$/);
    if (prefixMatch) {
      return {
        prefix: prefixMatch[1],
        search: prefixMatch[2]
      };
    }
    return { prefix: null, search: query };
  };

  const { prefix, search } = parseQuery(searchQuery);

  // Filter based on search query and prefix
  const filteredTemplates = (!prefix || prefix === 'template')
    ? (search ? searchTemplates(search) : templateRegistry.slice(0, 8))
    : [];

  const filteredSections = (!prefix || prefix === 'section')
    ? template.sections.filter(section =>
        section.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const filteredPrompts = (!prefix || prefix === 'prompt')
    ? allPrompts.filter(prompt =>
        prompt.prompt.toLowerCase().includes(search.toLowerCase()) ||
        prompt.category.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const filteredResources = (!prefix || prefix === 'resource')
    ? allResources.filter(resource =>
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.type.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search or use @template, @section, @prompt, @resource..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList className="max-h-[500px]">
        <CommandEmpty>
          <div className="py-6 text-center">
            <div className="text-sm text-muted-foreground mb-4">No results found</div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>Try: <code className="bg-muted px-1 rounded">@template wedding</code></div>
              <div>Or: <code className="bg-muted px-1 rounded">@prompt budget</code></div>
            </div>
          </div>
        </CommandEmpty>

        {!searchQuery && (
          <CommandGroup heading="Search Prefixes">
            <div className="px-2 py-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                  <span>Switch templates</span>
                  <code className="bg-background px-1.5 py-0.5 rounded font-mono">@template</code>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                  <span>Jump to sections</span>
                  <code className="bg-background px-1.5 py-0.5 rounded font-mono">@section</code>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                  <span>Find prompts</span>
                  <code className="bg-background px-1.5 py-0.5 rounded font-mono">@prompt</code>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                  <span>Open resources</span>
                  <code className="bg-background px-1.5 py-0.5 rounded font-mono">@resource</code>
                </div>
              </div>
            </div>
          </CommandGroup>
        )}

        {filteredTemplates.length > 0 && (
          <CommandGroup heading="Switch Template">
            {filteredTemplates.map((templateEntry) => (
              <CommandItem
                key={templateEntry.id}
                onSelect={() => handleTemplateSelect(templateEntry.url)}
                className="flex items-center gap-2"
              >
                <span className="text-lg">{templateEntry.icon}</span>
                <div className="flex flex-col flex-1">
                  <span>{templateEntry.name}</span>
                  <span className="text-xs text-muted-foreground truncate">
                    {templateEntry.description}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {filteredSections.length > 0 && (
          <CommandGroup heading="Sections">
            {filteredSections.map((section, index) => {
              const actualIndex = template.sections.findIndex(s => s.id === section.id);
              return (
                <CommandItem
                  key={section.id}
                  onSelect={() => handleSectionSelect(actualIndex)}
                  className="flex items-center gap-2"
                >
                  <Hash className="w-4 h-4" />
                  <span>{section.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}

        {filteredPrompts.length > 0 && (
          <CommandGroup heading="Prompts">
            {filteredPrompts.slice(0, 8).map((prompt) => (
              <CommandItem
                key={prompt.id}
                onSelect={() => handlePromptSelect(prompt)}
                className="flex flex-col items-start gap-1"
              >
                <div className="flex items-center gap-2 w-full">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1 truncate">{prompt.prompt}</span>
                </div>
                <span className="text-xs text-muted-foreground ml-6">
                  {prompt.category} • from {prompt.sectionTitle}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {filteredResources.length > 0 && (
          <CommandGroup heading="Resources">
            {filteredResources.slice(0, 8).map((resource) => (
              <CommandItem
                key={resource.id}
                onSelect={() => handleResourceSelect(resource)}
                className="flex flex-col items-start gap-1"
              >
                <div className="flex items-center gap-2 w-full">
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1 truncate">{resource.title}</span>
                </div>
                <span className="text-xs text-muted-foreground ml-6">
                  {resource.type} • {resource.readTime} • from {resource.sectionTitle}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>

      {/* Footer with keyboard shortcuts */}
      <div className="border-t bg-muted/20 p-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <code className="bg-background px-1.5 py-0.5 rounded font-mono">↑↓</code>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <code className="bg-background px-1.5 py-0.5 rounded font-mono">Enter</code>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-1">
              <code className="bg-background px-1.5 py-0.5 rounded font-mono">Esc</code>
              <span>Close</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>Open with</span>
            <code className="bg-background px-1.5 py-0.5 rounded font-mono">⌘K</code>
          </div>
        </div>
      </div>
    </CommandDialog>
  );
}