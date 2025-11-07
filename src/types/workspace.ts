export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done';
  user_id: string;
  track_id?: string;
  due_date?: string;
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  all_day?: boolean;
  start_time: string;
  end_time?: string;
  user_id: string;
  track_id?: string;
  created_at?: string;
  updated_at?: string;
}
