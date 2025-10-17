'use client';

import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GripVertical, Edit2, Trash2, Star, Check, X, ArrowUpDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { getCategoryStyles } from '@/lib/category-colors';
import { useWorkspaceStore } from '@/stores/workspace-store';
import { useSoundCues } from '@/hooks/useSoundCues';

interface BoardItem {
  id: string;
  title: string;
  category: string;
  progress: number;
  lastEdited: string;
  favorite: boolean;
  templateId?: string;
  type: 'template' | 'reflection';
}

function SortableCard({
  item,
  onCardClick,
  onUpdate,
  onDelete,
}: {
  item: BoardItem;
  onCardClick: (item: BoardItem) => void;
  onUpdate: (id: string, updates: Partial<BoardItem>) => void;
  onDelete: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editProgress, setEditProgress] = useState(item.progress);
  const [editFavorite, setEditFavorite] = useState(item.favorite);

  const categoryStyle = getCategoryStyles(item.category);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdate(item.id, {
      title: editTitle,
      progress: editProgress,
      favorite: editFavorite,
    });
    setIsEditing(false);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditTitle(item.title);
    setEditProgress(item.progress);
    setEditFavorite(item.favorite);
    setIsEditing(false);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Delete "${item.title}"?`)) {
      onDelete(item.id);
    }
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isEditing) {
      setEditFavorite(!editFavorite);
    }
  };

  return (
    <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }} {...attributes}>
      <Card
        className={`group hover:shadow-md transition-all mb-3 ${!isEditing ? 'cursor-pointer' : ''}`}
        style={{ borderLeftWidth: '4px', borderLeftColor: categoryStyle.borderColor }}
        onClick={() => !isEditing && onCardClick(item)}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {!isEditing && (
              <div {...listeners} className="mt-1 cursor-grab active:cursor-grabbing" onClick={(e) => e.stopPropagation()}>
                <GripVertical className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  {/* Edit Title */}
                  <div className="flex items-center gap-2">
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="h-8 flex-1"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={toggleFavorite}
                    >
                      <Star
                        className={`h-4 w-4 ${editFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                      />
                    </Button>
                  </div>

                  {/* Edit Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{editProgress}%</span>
                    </div>
                    <Slider
                      value={[editProgress]}
                      onValueChange={(value) => setEditProgress(value[0])}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  {/* Save/Cancel Buttons */}
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" onClick={handleSave} className="flex-1">
                      <Check className="h-3 w-3 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleCancel} className="flex-1">
                      <X className="h-3 w-3 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{item.title}</h4>
                      {item.favorite && <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />}
                    </div>
                    <Badge variant="outline" style={categoryStyle}>{item.category}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${item.progress}%` }} className="h-full bg-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Last edited {item.lastEdited}</p>
                  </div>
                </>
              )}
            </div>
            {!isEditing && (
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleEdit}>
                  <Edit2 className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleDelete}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type SortOption = 'recent' | 'category' | 'progress' | 'favorite' | 'title';

export function BoardView() {
  const [items, setItems] = useState<BoardItem[]>([
    { id: '1', title: 'Wedding Planning', category: 'Life Event', progress: 75, lastEdited: '2h ago', favorite: true, templateId: 'template-1', type: 'template' },
    { id: '2', title: 'Career Transition', category: 'Career', progress: 45, lastEdited: '1d ago', favorite: false, templateId: 'template-2', type: 'template' },
    { id: '3', title: 'Financial Planning', category: 'Finance', progress: 60, lastEdited: '3d ago', favorite: true, templateId: 'template-3', type: 'template' },
    { id: '4', title: 'Home Buying', category: 'Real Estate', progress: 30, lastEdited: '1w ago', favorite: false, templateId: 'template-4', type: 'template' },
  ]);
  const [sortBy, setSortBy] = useState<SortOption>('recent');

  const { openTemplate, openReflection } = useWorkspaceStore();
  const { playActivationClick } = useSoundCues();

  // Sort items based on selected option
  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        // Sort by most recently edited (mock: reverse order for demo)
        return parseLastEdited(a.lastEdited) - parseLastEdited(b.lastEdited);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'progress':
        return b.progress - a.progress; // Descending
      case 'favorite':
        return (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0);
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Helper function to parse "2h ago" style strings
  function parseLastEdited(timeStr: string): number {
    if (timeStr === 'just now') return 0;
    if (timeStr.includes('h')) return parseInt(timeStr) * 60;
    if (timeStr.includes('d')) return parseInt(timeStr) * 60 * 24;
    if (timeStr.includes('w')) return parseInt(timeStr) * 60 * 24 * 7;
    return 0;
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleCardClick(item: BoardItem) {
    playActivationClick();
    if (item.type === 'template' && item.templateId) {
      openTemplate(item.templateId);
    }
  }

  function handleUpdate(id: string, updates: Partial<BoardItem>) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updates, lastEdited: 'just now' } : item
      )
    );
  }

  function handleDelete(id: string) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Workspaces</h2>
          <p className="text-muted-foreground">Drag to reorder, click to open, or hover to quick-edit</p>
        </div>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowUpDown className="h-4 w-4" />
              Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSortBy('recent')}>
              Most Recent
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('category')}>
              Category
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('progress')}>
              Progress (High to Low)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('favorite')}>
              Favorites First
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('title')}>
              Title (A-Z)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sortedItems} strategy={verticalListSortingStrategy}>
          {sortedItems.map((item) => (
            <SortableCard
              key={item.id}
              item={item}
              onCardClick={handleCardClick}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
