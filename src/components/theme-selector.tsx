"use client"

import * as React from "react"
import { Check, Palette } from "lucide-react"
import { useCustomTheme } from "@/components/theme-provider-custom"
import { themes } from "@/lib/themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ThemeSelectorProps {
  iconOnly?: boolean;
}

export function ThemeSelector({ iconOnly = false }: ThemeSelectorProps) {
  const { currentTheme, setTheme: setCustomTheme } = useCustomTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Only set default theme on initial mount
    if (!localStorage.getItem('templata-theme')) {
      // Set default theme to Noir (pure black/white)
      const defaultTheme = themes[0] // Noir theme
      setCustomTheme(defaultTheme.colors.dark)
    }
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className={iconOnly ? "w-9 h-9 p-0" : "gap-2"} disabled>
        <Palette className="h-4 w-4" />
        {!iconOnly && <span className="hidden sm:inline">Loading...</span>}
      </Button>
    )
  }

  // Find current theme name
  const currentThemeInfo = themes.find(t => 
    JSON.stringify(t.colors.dark) === JSON.stringify(currentTheme)
  ) || themes[0]

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = themes.find(t => t.id === themeId)
    if (selectedTheme) {
      // Always use dark mode colors
      setCustomTheme(selectedTheme.colors.dark)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={iconOnly ? "w-9 h-9 p-0" : "gap-2"}>
          <Palette className="h-4 w-4" />
          {!iconOnly && <span className="hidden sm:inline">{currentThemeInfo.name}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {themes.map((themeOption) => {
          // Create visual swatch based on actual theme colors
          const getThemeSwatch = (id: string) => {
            switch (id) {
              case 'noir': return 'bg-gradient-to-r from-black to-gray-600';
              case 'slate': return 'bg-gradient-to-r from-slate-500 to-blue-400';
              case 'midnight': return 'bg-gradient-to-r from-blue-700 to-blue-500';
              case 'ocean': return 'bg-gradient-to-r from-cyan-600 to-teal-400';
              case 'forest': return 'bg-gradient-to-r from-emerald-700 to-green-500';
              case 'lavender': return 'bg-gradient-to-r from-purple-600 to-violet-400';
              case 'sunset': return 'bg-gradient-to-r from-orange-500 to-pink-400';
              case 'cherry-blossom': return 'bg-gradient-to-r from-pink-400 to-rose-300';
              default: return 'bg-gradient-to-r from-gray-500 to-gray-400';
            }
          };

          return (
            <DropdownMenuItem
              key={themeOption.id}
              onClick={() => handleThemeChange(themeOption.id)}
              className="flex items-center gap-3"
            >
              <div className={`w-4 h-4 rounded-full ${getThemeSwatch(themeOption.id)} ring-1 ring-border flex-shrink-0`} />
              <span className="flex-1">{themeOption.name}</span>
              {currentThemeInfo.id === themeOption.id && (
                <Check className="h-3 w-3 text-primary" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}