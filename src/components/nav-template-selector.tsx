"use client"

import { IconTemplate, IconFileText, IconFileAi } from "@tabler/icons-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { templateRegistry } from "@/registry/templates"

interface NavTemplateSelectorProps {
  selectedTemplateId: string | null;
  onTemplateChange: (templateId: string) => void;
}

export function NavTemplateSelector({ selectedTemplateId, onTemplateChange }: NavTemplateSelectorProps) {
  const selectedTemplate = templateRegistry.find(t => t.id === selectedTemplateId);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Active Template</SidebarGroupLabel>
      <SidebarGroupContent>
        <Select value={selectedTemplateId || ''} onValueChange={onTemplateChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a template..." />
          </SelectTrigger>
          <SelectContent>
            {templateRegistry.map((template) => (
              <SelectItem key={template.id} value={template.id}>
                <div className="flex items-center gap-2">
                  <IconTemplate className="h-4 w-4" />
                  <span className="truncate">{template.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedTemplate && (
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                {selectedTemplate.category}
              </Badge>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="flex items-center gap-1">
                <IconFileAi className="h-3.5 w-3.5" />
                <span>~80 prompts</span>
              </div>
              <div className="flex items-center gap-1">
                <IconFileText className="h-3.5 w-3.5" />
                <span>~160 articles</span>
              </div>
            </div>
          </div>
        )}
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
