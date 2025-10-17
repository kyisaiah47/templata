'use client';

import { useWorkspaceStore } from '@/stores/workspace-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Layout, Maximize2, Grid3x3, Search, User, Volume2, VolumeX, Moon, Sun, Contrast } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useSoundCues } from '@/hooks/useSoundCues';

/**
 * TopNav - Global Navigation
 *
 * Features:
 * - Stage switcher with visual indication
 * - Global search (Cmd+K)
 * - User menu (theme, sound, profile)
 * - Logo + branding
 */
export function TopNav() {
  const { stage, setStage, soundEnabled, toggleSound, highContrastMode, toggleHighContrast } = useWorkspaceStore();
  const { theme, setTheme } = useTheme();
  const { playActivationClick } = useSoundCues();

  const handleStageChange = (stageId: typeof stage) => {
    playActivationClick();
    setStage(stageId);
  };

  const handleSoundToggle = () => {
    playActivationClick();
    toggleSound();
  };

  const handleHighContrastToggle = () => {
    playActivationClick();
    toggleHighContrast();
  };

  const stages = [
    { id: 'template' as const, label: 'Template', icon: Layout, shortcut: 'g→t' },
    { id: 'reflect' as const, label: 'Reflection', icon: Maximize2, shortcut: 'g→r' },
    { id: 'lifeos' as const, label: 'Life OS', icon: Grid3x3, shortcut: 'g→l' },
  ];

  return (
    <header className="border-b bg-card/95 backdrop-blur-sm px-6 py-3 flex items-center justify-between gap-6 relative z-50">
      {/* Left: Logo + Stage Switcher */}
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-semibold">Templata</h1>

        <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
          {stages.map((s) => {
            const Icon = s.icon;
            const isActive = stage === s.id;

            return (
              <Button
                key={s.id}
                variant={isActive ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleStageChange(s.id)}
                className={cn(
                  'gap-2 relative',
                  isActive && 'shadow-sm'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{s.label}</span>

                {/* Keyboard shortcut hint */}
                {!isActive && (
                  <span className="text-xs text-muted-foreground ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {s.shortcut}
                  </span>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Center: Global Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates, reflections, tags... (⌘K)"
            className="pl-10 bg-muted/50"
            onClick={() => {
              // TODO: Open command palette
              console.log('Open search');
            }}
          />
        </div>
      </div>

      {/* Right: User Menu */}
      <div className="flex items-center gap-2">
        {/* Sound Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSoundToggle}
          className="relative"
        >
          {soundEnabled ? (
            <Volume2 className="h-4 w-4" />
          ) : (
            <VolumeX className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>

        {/* High Contrast Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleHighContrastToggle}
          className={cn(highContrastMode && "bg-primary/10")}
          title="Toggle high contrast mode"
        >
          <Contrast className={cn("h-4 w-4", highContrastMode && "text-primary")} />
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Help & Feedback</DropdownMenuItem>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
