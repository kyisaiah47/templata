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

export interface Item {
  id: string;
  user_id: string;
  track_id: string | null;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'done';
  due_date: string | null;
  start_time: string | null;
  end_time: string | null;
  all_day: boolean;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

// Type aliases for different item uses
export type Task = Item;
export type CalendarEvent = Item & { date: string };
