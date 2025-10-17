'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smile, Meh, Frown } from 'lucide-react';
import { getCategoryStyles, getCategoryColor } from '@/lib/category-colors';
import { useWorkspaceStore } from '@/stores/workspace-store';
import { useSoundCues } from '@/hooks/useSoundCues';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  type: 'template' | 'reflection';
  mood?: 'happy' | 'neutral' | 'sad';
  category: string;
  templateId?: string;
  reflectionId?: string;
}

const events: TimelineEvent[] = [
  { id: '1', date: '2h ago', title: 'Wedding Planning Session', type: 'template', category: 'Life Event', templateId: 'template-1' },
  { id: '2', date: '1d ago', title: 'Reflection on Career Goals', type: 'reflection', mood: 'happy', category: 'Career', reflectionId: 'reflection-1' },
  { id: '3', date: '3d ago', title: 'Financial Planning Update', type: 'template', category: 'Finance', templateId: 'template-3' },
  { id: '4', date: '5d ago', title: 'Reflection on Work-Life Balance', type: 'reflection', mood: 'neutral', category: 'Wellness', reflectionId: 'reflection-2' },
  { id: '5', date: '1w ago', title: 'Home Buying Research', type: 'template', category: 'Real Estate', templateId: 'template-4' },
  { id: '6', date: '1w ago', title: 'Reflection on Moving Anxiety', type: 'reflection', mood: 'sad', category: 'Wellness', reflectionId: 'reflection-3' },
];

export function TimelineView() {
  const { openTemplate, openReflection } = useWorkspaceStore();
  const { playActivationClick } = useSoundCues();

  const moodIcons = {
    happy: <Smile className="h-4 w-4 text-green-500" />,
    neutral: <Meh className="h-4 w-4 text-yellow-500" />,
    sad: <Frown className="h-4 w-4 text-blue-500" />,
  };

  const handleEventClick = (event: TimelineEvent) => {
    playActivationClick();
    if (event.type === 'template' && event.templateId) {
      openTemplate(event.templateId);
    } else if (event.type === 'reflection' && event.reflectionId) {
      openReflection(event.reflectionId);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Your Journey Timeline</h2>
        <p className="text-muted-foreground">Chronological view of templates and reflections</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-6">
          {events.map((event, index) => {
            const categoryStyle = getCategoryStyles(event.category);
            const categoryColor = getCategoryColor(event.category);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot with category color */}
                <div
                  className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-background"
                  style={{ backgroundColor: categoryColor.border }}
                />

                <Card
                  className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                  style={{ borderLeftWidth: '3px', borderLeftColor: categoryColor.border }}
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.mood && moodIcons[event.mood]}
                      <Badge variant={event.type === 'template' ? 'default' : 'secondary'}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs" style={categoryStyle}>{event.category}</Badge>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
