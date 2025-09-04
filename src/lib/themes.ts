export interface ThemeColors {
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string
  muted: string
  mutedForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  ring: string
}

// Main Templata brand theme - Vercel theme (clean black/white/gray with OKLCH)
export const templataTheme: ThemeColors = {
  primary: 'oklch(0 0 0)', // Pure black
  primaryForeground: 'oklch(1 0 0)', // Pure white
  secondary: 'oklch(0.9400 0 0)', // Light gray
  secondaryForeground: 'oklch(0 0 0)', // Black
  accent: 'oklch(0.9400 0 0)', // Light gray
  accentForeground: 'oklch(0 0 0)', // Black
  muted: 'oklch(0.9700 0 0)', // Very light gray
  mutedForeground: 'oklch(0.4400 0 0)', // Medium gray
  card: 'oklch(1 0 0)', // Pure white
  cardForeground: 'oklch(0 0 0)', // Black
  border: 'oklch(0.9200 0 0)', // Border gray
  input: 'oklch(0.9400 0 0)', // Input background
  ring: 'oklch(0 0 0)' // Black ring
}

// Wedding template theme - romantic rose/pink (we already have this)
export const weddingTheme: ThemeColors = {
  primary: '350 89% 60%', // Rose
  primaryForeground: '0 0% 98%',
  secondary: '350 30% 96%',
  secondaryForeground: '350 10% 10%',
  accent: '350 20% 92%',
  accentForeground: '350 10% 15%',
  muted: '350 15% 95%',
  mutedForeground: '350 8% 45%',
  card: '0 0% 100%',
  cardForeground: '350 10% 10%',
  border: '350 20% 88%',
  input: '350 20% 88%',
  ring: '350 89% 60%'
}

// Business template theme - professional blue
export const businessTheme: ThemeColors = {
  primary: '213 94% 68%', // Blue
  primaryForeground: '0 0% 98%',
  secondary: '213 30% 96%',
  secondaryForeground: '213 10% 10%',
  accent: '213 20% 92%',
  accentForeground: '213 10% 15%',
  muted: '213 15% 95%',
  mutedForeground: '213 8% 45%',
  card: '0 0% 100%',
  cardForeground: '213 10% 10%',
  border: '213 20% 88%',
  input: '213 20% 88%',
  ring: '213 94% 68%'
}

export const applyTheme = (theme: ThemeColors) => {
  const root = document.documentElement
  
  Object.entries(theme).forEach(([key, value]) => {
    const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    root.style.setProperty(cssVar, value)
  })
}

export const getThemeForTemplate = (templateId: string): ThemeColors => {
  switch (templateId) {
    case 'wedding-planning':
      return weddingTheme
    case 'home-buying':
    case 'job-search':
    case 'college-planning':
      return businessTheme
    default:
      return templataTheme
  }
}