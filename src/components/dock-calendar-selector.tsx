'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

interface DockCalendarSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  noWrapper?: boolean;
}

export function DockCalendarSelector({
  isOpen,
  onClose,
  noWrapper = false
}: DockCalendarSelectorProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  if (!isOpen) return null;

  const calendarContent = (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md"
    />
  );

  return noWrapper ? (
    calendarContent
  ) : (
    <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden p-3">
      {calendarContent}
    </div>
  );
}
