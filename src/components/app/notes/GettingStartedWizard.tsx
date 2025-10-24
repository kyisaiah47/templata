'use client';

import { useState } from 'react';
import { FileText, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GettingStartedWizardProps {
  workspaceId: string;
  onCreateBlank: () => void;
  onChooseTemplate: () => void;
}

export function GettingStartedWizard({
  workspaceId,
  onCreateBlank,
  onChooseTemplate,
}: GettingStartedWizardProps) {
  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Workspace</h1>
          <p className="text-lg text-muted-foreground">
            Create your first note to get started
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blank Note */}
          <button
            onClick={onCreateBlank}
            className={cn(
              "group relative p-8 rounded-lg border-2 border-border",
              "hover:border-[#6366f1] hover:bg-[#6366f1]/5",
              "transition-all duration-200",
              "text-left"
            )}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted/50 group-hover:bg-[#6366f1]/10 flex items-center justify-center transition-colors">
                <FileText className="w-6 h-6 text-muted-foreground group-hover:text-[#6366f1] transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Start from Blank</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create an empty note and build it from scratch, just like Notion.
            </p>
            <div className="flex items-center text-sm font-medium text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity">
              Create blank note
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>

          {/* Guided Template */}
          <button
            onClick={onChooseTemplate}
            className={cn(
              "group relative p-8 rounded-lg border-2 border-border",
              "hover:border-[#6366f1] hover:bg-[#6366f1]/5",
              "transition-all duration-200",
              "text-left"
            )}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted/50 group-hover:bg-[#6366f1]/10 flex items-center justify-center transition-colors">
                <Sparkles className="w-6 h-6 text-muted-foreground group-hover:text-[#6366f1] transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Use a Guide Template</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get started quickly with a structured template from our guide library.
            </p>
            <div className="flex items-center text-sm font-medium text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity">
              Choose a template
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            You can always create more notes from the sidebar
          </p>
        </div>
      </div>
    </div>
  );
}
