"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeColors, templataTheme, applyTheme, getThemeForTemplate } from '@/lib/themes'

interface ThemeContextType {
  currentTheme: ThemeColors
  setTheme: (theme: ThemeColors) => void
  applyTemplateTheme: (templateId: string) => void
  resetToDefault: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useCustomTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider')
  }
  return context
}

interface CustomThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeColors
}

export function CustomThemeProvider({ children, defaultTheme = templataTheme }: CustomThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(defaultTheme)

  useEffect(() => {
    applyTheme(currentTheme)
  }, [currentTheme])

  const setTheme = (theme: ThemeColors) => {
    setCurrentTheme(theme)
  }

  const applyTemplateTheme = (templateId: string) => {
    const theme = getThemeForTemplate(templateId)
    setCurrentTheme(theme)
  }

  const resetToDefault = () => {
    setCurrentTheme(defaultTheme)
  }

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      applyTemplateTheme,
      resetToDefault
    }}>
      {children}
    </ThemeContext.Provider>
  )
}