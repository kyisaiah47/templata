'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ListTodo, Loader2 } from 'lucide-react';
import { KanbanBoard } from '@/components/app/tasks/KanbanBoard';
import { Task } from '@/types/workspace';
import { toast } from 'sonner';
import { useDataCache } from '@/contexts/DataCacheContext';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

interface ExtendedTask extends Task {
  tracks?: {
    id: string;
    guides: {
      name: string;
      icon: string | null;
    };
  } | null;
}

interface TasksViewProps {
  selectedTrackIds: string[];
}

export function TasksView({ selectedTrackIds }: TasksViewProps) {
  const { items: cachedItems, fetchItems, invalidateItems } = useDataCache();
  const [allItems, setAllItems] = useState<ExtendedTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Fetch tasks using cache
  const loadTasks = useCallback(async () => {
    // Try cached items first
    if (cachedItems && cachedItems.length > 0) {
      setAllItems(cachedItems as any);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const items = await fetchItems(false);
      setAllItems(items as any);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch tasks'));
    } finally {
      setIsLoading(false);
    }
  }, [cachedItems, fetchItems]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // Filter tasks by selected tracks
  const data = selectedTrackIds.length > 0
    ? (allItems || []).filter(task => task.track_id && selectedTrackIds.includes(task.track_id))
    : (allItems || []);

  // Create task
  const createTask = async (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    track_id: string | null;
  }) => {
    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!res.ok) throw new Error('Failed to create task');

      invalidateItems();
      await loadTasks();
      toast.success('Task created successfully');
    } catch (err) {
      console.error('Error creating task:', err);
      toast.error('Failed to create task');
    }
  };

  // Delete task
  const deleteTask = async (taskId: string) => {
    try {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete task');

      invalidateItems();
      await loadTasks();
      toast.success('Task deleted successfully');
    } catch (err) {
      console.error('Error deleting task:', err);
      toast.error('Failed to delete task');
    }
  };

  // Update task status
  const updateTaskStatus = async (taskId: string, status: 'todo' | 'in_progress' | 'done') => {
    try {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update task');

      invalidateItems();
      await loadTasks();
    } catch (err) {
      console.error('Error updating task status:', err);
      toast.error('Failed to update task status');
    }
  };

  // Update task
  const updateTask = async (taskId: string, updates: {
    title: string;
    description: string;
    due_date: string | null;
  }) => {
    try {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error('Failed to update task');

      invalidateItems();
      await loadTasks();
      toast.success('Task updated successfully');
    } catch (err) {
      console.error('Error updating task:', err);
      toast.error('Failed to update task');
    }
  };

  const handleCreateTask = (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    track_id: string | null;
  }) => {
    createTask(task);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
  };

  const handleUpdateTaskStatus = (
    taskId: string,
    newStatus: 'todo' | 'in_progress' | 'done'
  ) => {
    updateTaskStatus(taskId, newStatus);
  };

  const handleUpdateTask = (
    taskId: string,
    updates: {
      title: string;
      description: string;
      due_date: string | null;
    }
  ) => {
    updateTask(taskId, updates);
  };

  if (isLoading) {
    return (
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="h-full w-full p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <ListTodo className="w-5 h-5 text-destructive" />
            </div>
            <h1 className="text-3xl font-bold">Tasks</h1>
          </div>
          <p className="text-destructive">
            Failed to load tasks. Please try again later.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Kanban Board */}
      <div className="flex-1 overflow-auto">
        {selectedTrackIds.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <ListTodo />
                </EmptyMedia>
                <EmptyTitle>No tracks selected</EmptyTitle>
                <EmptyDescription>
                  Select tracks from the header to see tasks
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (data || []).length === 0 && selectedTrackIds.length > 0 ? (
          <div className="flex items-center justify-center h-96">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <ListTodo />
                </EmptyMedia>
                <EmptyTitle>No tasks found</EmptyTitle>
                <EmptyDescription>
                  The selected tracks don't have any tasks yet
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (
          <KanbanBoard
            tasks={data || []}
            onCreateTask={handleCreateTask}
            onDeleteTask={handleDeleteTask}
            onUpdateTaskStatus={handleUpdateTaskStatus}
            onUpdateTask={handleUpdateTask}
            workspaceId=""
          />
        )}
      </div>
    </motion.div>
  );
}
