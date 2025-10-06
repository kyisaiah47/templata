"use client"

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { templateRegistry, getAllCategories } from '@/registry/templates';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { PageLayout } from '@/components/layout';


export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Group templates by category and sort alphabetically
  const groupedTemplates = useMemo(() => {
    const filtered = searchQuery.trim()
      ? templateRegistry.filter(t =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : templateRegistry;

    const grouped: Record<string, typeof templateRegistry> = {};

    filtered.forEach(template => {
      if (!grouped[template.category]) {
        grouped[template.category] = [];
      }
      grouped[template.category].push(template);
    });

    // Sort templates within each category alphabetically
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }, [searchQuery]);

  const categories = Object.keys(groupedTemplates).sort();

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            All Templates
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {templateRegistry.length} expert-crafted templates across {categories.length} categories.
            Each template includes prompts, articles, and structured guidance.
          </p>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* Templates List - Grouped by Category */}
        <div className="space-y-12">
          {categories.map(category => (
            <section key={category} className="border-t pt-8">
              <h2 className="text-xs font-semibold text-muted-foreground mb-6 tracking-wider uppercase">
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                {groupedTemplates[category].map((template) => (
                  <Link
                    key={template.id}
                    href={`/${template.id}/template`}
                    className="group block py-2 hover:text-primary transition-colors"
                  >
                    <div className="text-base">
                      {template.name}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}