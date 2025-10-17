/**
 * Workspace Types
 *
 * Three workspace modes representing different states of mind:
 * - template: Guided progress (structure, learning)
 * - reflect: Quiet depth (introspection, stillness)
 * - lifeos: Synthesis & perspective (mastery, panoramic view)
 */

export type WorkspaceMode = 'template' | 'reflect' | 'lifeos';

export interface WorkspaceProps {
  mode: WorkspaceMode;
  templateId?: string;
  workspaceId?: string;
}

export interface TemplatePrompt {
  id: string;
  text: string;
  category: string;
  order: number;
  completed?: boolean;
}

export interface TemplateArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: number;
  category: string;
}

export interface WorkspaceSession {
  id: string;
  templateId: string;
  mode: WorkspaceMode;
  progress: number;
  lastModified: Date;
  prompts: TemplatePrompt[];
  responses: Record<string, string>;
}

export interface ReflectionEntry {
  id: string;
  date: Date;
  promptId: string;
  promptText: string;
  content: string;
  templateId?: string;
}
