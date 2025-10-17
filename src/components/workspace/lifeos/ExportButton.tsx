'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Download, FileText, Code, Printer } from 'lucide-react';
import { exportAsMarkdown, exportAsJSON, exportAsHTML } from '@/lib/export-utils';
import { TemplateSession, ReflectionEntry } from '@/stores/workspace-store';
import { InsightDashboard } from '@/types/insight';

interface ExportButtonProps {
  templates: TemplateSession[];
  reflections: ReflectionEntry[];
  insights?: InsightDashboard;
}

export function ExportButton({ templates, reflections, insights }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: 'markdown' | 'json' | 'html') => {
    setIsExporting(true);
    try {
      switch (format) {
        case 'markdown':
          exportAsMarkdown(templates, reflections, insights);
          break;
        case 'json':
          exportAsJSON(templates, reflections, insights);
          break;
        case 'html':
          exportAsHTML(templates, reflections, insights);
          break;
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isExporting} className="gap-2">
          <Download className="h-4 w-4" />
          {isExporting ? 'Exporting...' : 'Export'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleExport('markdown')} className="gap-2">
          <FileText className="h-4 w-4" />
          <div className="flex flex-col">
            <span>Markdown</span>
            <span className="text-xs text-muted-foreground">Text-based summary</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleExport('json')} className="gap-2">
          <Code className="h-4 w-4" />
          <div className="flex flex-col">
            <span>JSON</span>
            <span className="text-xs text-muted-foreground">Structured data export</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleExport('html')} className="gap-2">
          <Printer className="h-4 w-4" />
          <div className="flex flex-col">
            <span>Print / PDF</span>
            <span className="text-xs text-muted-foreground">Opens printable view</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
