export interface ThemeColors {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  border: string
  input: string
  ring: string
  chart1: string
  chart2: string
  chart3: string
  chart4: string
  chart5: string
  sidebar: string
  sidebarForeground: string
  sidebarPrimary: string
  sidebarPrimaryForeground: string
  sidebarAccent: string
  sidebarAccentForeground: string
  sidebarBorder: string
  sidebarRing: string
}

export interface Theme {
  id: string
  name: string
  description: string
  colors: {
    light: ThemeColors
    dark: ThemeColors
  }
}

// ============================================================================
// 1. NOIR - Pure black/white, maximum contrast
// ============================================================================

const noirDark: ThemeColors = {
  background: 'oklch(0 0 0)', // pure black
  foreground: 'oklch(1 0 0)', // pure white
  card: 'oklch(0.12 0 0)',
  cardForeground: 'oklch(1 0 0)',
  popover: 'oklch(0.15 0 0)',
  popoverForeground: 'oklch(1 0 0)',
  primary: 'oklch(1 0 0)', // white
  primaryForeground: 'oklch(0 0 0)', // black
  secondary: 'oklch(0.25 0 0)',
  secondaryForeground: 'oklch(1 0 0)',
  muted: 'oklch(0.20 0 0)',
  mutedForeground: 'oklch(0.70 0 0)',
  accent: 'oklch(0.30 0 0)',
  accentForeground: 'oklch(1 0 0)',
  destructive: 'oklch(0.60 0.25 30)', // red
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0 0)',
  input: 'oklch(0.25 0 0)',
  ring: 'oklch(0.80 0 0)',
  chart1: 'oklch(0.70 0.15 250)',
  chart2: 'oklch(0.65 0.20 180)',
  chart3: 'oklch(0.75 0.18 350)',
  chart4: 'oklch(0.70 0.22 140)',
  chart5: 'oklch(0.65 0.16 60)',
  sidebar: 'oklch(0.08 0 0)',
  sidebarForeground: 'oklch(0.95 0 0)',
  sidebarPrimary: 'oklch(1 0 0)',
  sidebarPrimaryForeground: 'oklch(0 0 0)',
  sidebarAccent: 'oklch(0.20 0 0)',
  sidebarAccentForeground: 'oklch(1 0 0)',
  sidebarBorder: 'oklch(0.20 0 0)',
  sidebarRing: 'oklch(0.80 0 0)',
}

const noirLight: ThemeColors = {
  background: 'oklch(1 0 0)', // pure white
  foreground: 'oklch(0 0 0)', // pure black
  card: 'oklch(0.98 0 0)',
  cardForeground: 'oklch(0 0 0)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0 0 0)',
  primary: 'oklch(0 0 0)', // black
  primaryForeground: 'oklch(1 0 0)', // white
  secondary: 'oklch(0.92 0 0)',
  secondaryForeground: 'oklch(0 0 0)',
  muted: 'oklch(0.95 0 0)',
  mutedForeground: 'oklch(0.45 0 0)',
  accent: 'oklch(0.90 0 0)',
  accentForeground: 'oklch(0 0 0)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0 0)',
  input: 'oklch(0.88 0 0)',
  ring: 'oklch(0.30 0 0)',
  chart1: 'oklch(0.50 0.15 250)',
  chart2: 'oklch(0.45 0.20 180)',
  chart3: 'oklch(0.55 0.18 350)',
  chart4: 'oklch(0.50 0.22 140)',
  chart5: 'oklch(0.45 0.16 60)',
  sidebar: 'oklch(0.96 0 0)',
  sidebarForeground: 'oklch(0.10 0 0)',
  sidebarPrimary: 'oklch(0 0 0)',
  sidebarPrimaryForeground: 'oklch(1 0 0)',
  sidebarAccent: 'oklch(0.92 0 0)',
  sidebarAccentForeground: 'oklch(0 0 0)',
  sidebarBorder: 'oklch(0.88 0 0)',
  sidebarRing: 'oklch(0.30 0 0)',
}

// ============================================================================
// 2. SLATE - Cool gray with blue undertones
// ============================================================================

const slateDark: ThemeColors = {
  background: 'oklch(0.12 0.01 250)',
  foreground: 'oklch(0.95 0.01 250)',
  card: 'oklch(0.15 0.01 250)',
  cardForeground: 'oklch(0.95 0.01 250)',
  popover: 'oklch(0.18 0.01 250)',
  popoverForeground: 'oklch(0.95 0.01 250)',
  primary: 'oklch(0.65 0.12 250)', // cool blue
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.25 0.02 250)',
  secondaryForeground: 'oklch(0.95 0.01 250)',
  muted: 'oklch(0.22 0.01 250)',
  mutedForeground: 'oklch(0.70 0.01 250)',
  accent: 'oklch(0.28 0.02 250)',
  accentForeground: 'oklch(0.95 0.01 250)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.01 250)',
  input: 'oklch(0.25 0.01 250)',
  ring: 'oklch(0.65 0.12 250)',
  chart1: 'oklch(0.70 0.15 250)',
  chart2: 'oklch(0.65 0.20 180)',
  chart3: 'oklch(0.75 0.18 320)',
  chart4: 'oklch(0.70 0.22 140)',
  chart5: 'oklch(0.65 0.16 60)',
  sidebar: 'oklch(0.10 0.01 250)',
  sidebarForeground: 'oklch(0.90 0.01 250)',
  sidebarPrimary: 'oklch(0.65 0.12 250)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.20 0.02 250)',
  sidebarAccentForeground: 'oklch(0.95 0.01 250)',
  sidebarBorder: 'oklch(0.22 0.01 250)',
  sidebarRing: 'oklch(0.65 0.12 250)',
}

const slateLight: ThemeColors = {
  background: 'oklch(0.98 0.005 250)',
  foreground: 'oklch(0.15 0.01 250)',
  card: 'oklch(0.96 0.005 250)',
  cardForeground: 'oklch(0.15 0.01 250)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.01 250)',
  primary: 'oklch(0.45 0.12 250)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.01 250)',
  secondaryForeground: 'oklch(0.15 0.01 250)',
  muted: 'oklch(0.94 0.01 250)',
  mutedForeground: 'oklch(0.45 0.01 250)',
  accent: 'oklch(0.92 0.01 250)',
  accentForeground: 'oklch(0.15 0.01 250)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 250)',
  input: 'oklch(0.88 0.01 250)',
  ring: 'oklch(0.45 0.12 250)',
  chart1: 'oklch(0.50 0.15 250)',
  chart2: 'oklch(0.45 0.20 180)',
  chart3: 'oklch(0.55 0.18 320)',
  chart4: 'oklch(0.50 0.22 140)',
  chart5: 'oklch(0.45 0.16 60)',
  sidebar: 'oklch(0.95 0.005 250)',
  sidebarForeground: 'oklch(0.20 0.01 250)',
  sidebarPrimary: 'oklch(0.45 0.12 250)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.01 250)',
  sidebarAccentForeground: 'oklch(0.15 0.01 250)',
  sidebarBorder: 'oklch(0.88 0.01 250)',
  sidebarRing: 'oklch(0.45 0.12 250)',
}

// ============================================================================
// 3. MIDNIGHT - Deep navy blue, focused and calm
// ============================================================================

const midnightDark: ThemeColors = {
  background: 'oklch(0.12 0.03 250)',
  foreground: 'oklch(0.95 0.01 250)',
  card: 'oklch(0.15 0.03 250)',
  cardForeground: 'oklch(0.95 0.01 250)',
  popover: 'oklch(0.18 0.03 250)',
  popoverForeground: 'oklch(0.95 0.01 250)',
  primary: 'oklch(0.65 0.20 260)', // vibrant blue
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.25 0.04 250)',
  secondaryForeground: 'oklch(0.95 0.01 250)',
  muted: 'oklch(0.22 0.03 250)',
  mutedForeground: 'oklch(0.70 0.02 250)',
  accent: 'oklch(0.28 0.04 250)',
  accentForeground: 'oklch(0.95 0.01 250)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.03 250)',
  input: 'oklch(0.25 0.03 250)',
  ring: 'oklch(0.65 0.20 260)',
  chart1: 'oklch(0.70 0.20 260)',
  chart2: 'oklch(0.65 0.22 180)',
  chart3: 'oklch(0.75 0.18 300)',
  chart4: 'oklch(0.70 0.24 140)',
  chart5: 'oklch(0.65 0.18 60)',
  sidebar: 'oklch(0.10 0.03 250)',
  sidebarForeground: 'oklch(0.90 0.01 250)',
  sidebarPrimary: 'oklch(0.65 0.20 260)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.20 0.04 250)',
  sidebarAccentForeground: 'oklch(0.95 0.01 250)',
  sidebarBorder: 'oklch(0.22 0.03 250)',
  sidebarRing: 'oklch(0.65 0.20 260)',
}

const midnightLight: ThemeColors = {
  background: 'oklch(0.98 0.01 250)',
  foreground: 'oklch(0.15 0.02 250)',
  card: 'oklch(0.96 0.01 250)',
  cardForeground: 'oklch(0.15 0.02 250)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.02 250)',
  primary: 'oklch(0.45 0.18 260)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.02 250)',
  secondaryForeground: 'oklch(0.15 0.02 250)',
  muted: 'oklch(0.94 0.01 250)',
  mutedForeground: 'oklch(0.45 0.02 250)',
  accent: 'oklch(0.92 0.02 250)',
  accentForeground: 'oklch(0.15 0.02 250)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 250)',
  input: 'oklch(0.88 0.01 250)',
  ring: 'oklch(0.45 0.18 260)',
  chart1: 'oklch(0.50 0.20 260)',
  chart2: 'oklch(0.45 0.22 180)',
  chart3: 'oklch(0.55 0.18 300)',
  chart4: 'oklch(0.50 0.24 140)',
  chart5: 'oklch(0.45 0.18 60)',
  sidebar: 'oklch(0.95 0.01 250)',
  sidebarForeground: 'oklch(0.20 0.02 250)',
  sidebarPrimary: 'oklch(0.45 0.18 260)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.02 250)',
  sidebarAccentForeground: 'oklch(0.15 0.02 250)',
  sidebarBorder: 'oklch(0.88 0.01 250)',
  sidebarRing: 'oklch(0.45 0.18 260)',
}

// ============================================================================
// 4. OCEAN - Teal/cyan, peaceful and clear
// ============================================================================

const oceanDark: ThemeColors = {
  background: 'oklch(0.12 0.02 200)',
  foreground: 'oklch(0.95 0.01 200)',
  card: 'oklch(0.15 0.02 200)',
  cardForeground: 'oklch(0.95 0.01 200)',
  popover: 'oklch(0.18 0.02 200)',
  popoverForeground: 'oklch(0.95 0.01 200)',
  primary: 'oklch(0.65 0.18 200)', // teal/cyan
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.25 0.03 200)',
  secondaryForeground: 'oklch(0.95 0.01 200)',
  muted: 'oklch(0.22 0.02 200)',
  mutedForeground: 'oklch(0.70 0.02 200)',
  accent: 'oklch(0.28 0.03 200)',
  accentForeground: 'oklch(0.95 0.01 200)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.02 200)',
  input: 'oklch(0.25 0.02 200)',
  ring: 'oklch(0.65 0.18 200)',
  chart1: 'oklch(0.70 0.18 200)',
  chart2: 'oklch(0.65 0.20 170)',
  chart3: 'oklch(0.75 0.16 230)',
  chart4: 'oklch(0.70 0.22 140)',
  chart5: 'oklch(0.65 0.18 280)',
  sidebar: 'oklch(0.10 0.02 200)',
  sidebarForeground: 'oklch(0.90 0.01 200)',
  sidebarPrimary: 'oklch(0.65 0.18 200)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.20 0.03 200)',
  sidebarAccentForeground: 'oklch(0.95 0.01 200)',
  sidebarBorder: 'oklch(0.22 0.02 200)',
  sidebarRing: 'oklch(0.65 0.18 200)',
}

const oceanLight: ThemeColors = {
  background: 'oklch(0.98 0.01 200)',
  foreground: 'oklch(0.15 0.02 200)',
  card: 'oklch(0.96 0.01 200)',
  cardForeground: 'oklch(0.15 0.02 200)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.02 200)',
  primary: 'oklch(0.45 0.16 200)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.02 200)',
  secondaryForeground: 'oklch(0.15 0.02 200)',
  muted: 'oklch(0.94 0.01 200)',
  mutedForeground: 'oklch(0.45 0.02 200)',
  accent: 'oklch(0.92 0.02 200)',
  accentForeground: 'oklch(0.15 0.02 200)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 200)',
  input: 'oklch(0.88 0.01 200)',
  ring: 'oklch(0.45 0.16 200)',
  chart1: 'oklch(0.50 0.18 200)',
  chart2: 'oklch(0.45 0.20 170)',
  chart3: 'oklch(0.55 0.16 230)',
  chart4: 'oklch(0.50 0.22 140)',
  chart5: 'oklch(0.45 0.18 280)',
  sidebar: 'oklch(0.95 0.01 200)',
  sidebarForeground: 'oklch(0.20 0.02 200)',
  sidebarPrimary: 'oklch(0.45 0.16 200)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.02 200)',
  sidebarAccentForeground: 'oklch(0.15 0.02 200)',
  sidebarBorder: 'oklch(0.88 0.01 200)',
  sidebarRing: 'oklch(0.45 0.16 200)',
}

// ============================================================================
// 5. FOREST - Deep emerald green, grounding and natural
// ============================================================================

const forestDark: ThemeColors = {
  background: 'oklch(0.12 0.02 150)',
  foreground: 'oklch(0.95 0.01 150)',
  card: 'oklch(0.15 0.02 150)',
  cardForeground: 'oklch(0.95 0.01 150)',
  popover: 'oklch(0.18 0.02 150)',
  popoverForeground: 'oklch(0.95 0.01 150)',
  primary: 'oklch(0.65 0.18 150)', // emerald green
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.25 0.03 150)',
  secondaryForeground: 'oklch(0.95 0.01 150)',
  muted: 'oklch(0.22 0.02 150)',
  mutedForeground: 'oklch(0.70 0.02 150)',
  accent: 'oklch(0.28 0.03 150)',
  accentForeground: 'oklch(0.95 0.01 150)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.02 150)',
  input: 'oklch(0.25 0.02 150)',
  ring: 'oklch(0.65 0.18 150)',
  chart1: 'oklch(0.70 0.18 150)',
  chart2: 'oklch(0.65 0.20 180)',
  chart3: 'oklch(0.75 0.16 120)',
  chart4: 'oklch(0.70 0.22 90)',
  chart5: 'oklch(0.65 0.18 200)',
  sidebar: 'oklch(0.10 0.02 150)',
  sidebarForeground: 'oklch(0.90 0.01 150)',
  sidebarPrimary: 'oklch(0.65 0.18 150)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.20 0.03 150)',
  sidebarAccentForeground: 'oklch(0.95 0.01 150)',
  sidebarBorder: 'oklch(0.22 0.02 150)',
  sidebarRing: 'oklch(0.65 0.18 150)',
}

const forestLight: ThemeColors = {
  background: 'oklch(0.98 0.01 150)',
  foreground: 'oklch(0.15 0.02 150)',
  card: 'oklch(0.96 0.01 150)',
  cardForeground: 'oklch(0.15 0.02 150)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.02 150)',
  primary: 'oklch(0.45 0.16 150)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.02 150)',
  secondaryForeground: 'oklch(0.15 0.02 150)',
  muted: 'oklch(0.94 0.01 150)',
  mutedForeground: 'oklch(0.45 0.02 150)',
  accent: 'oklch(0.92 0.02 150)',
  accentForeground: 'oklch(0.15 0.02 150)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 150)',
  input: 'oklch(0.88 0.01 150)',
  ring: 'oklch(0.45 0.16 150)',
  chart1: 'oklch(0.50 0.18 150)',
  chart2: 'oklch(0.45 0.20 180)',
  chart3: 'oklch(0.55 0.16 120)',
  chart4: 'oklch(0.50 0.22 90)',
  chart5: 'oklch(0.45 0.18 200)',
  sidebar: 'oklch(0.95 0.01 150)',
  sidebarForeground: 'oklch(0.20 0.02 150)',
  sidebarPrimary: 'oklch(0.45 0.16 150)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.02 150)',
  sidebarAccentForeground: 'oklch(0.15 0.02 150)',
  sidebarBorder: 'oklch(0.88 0.01 150)',
  sidebarRing: 'oklch(0.45 0.16 150)',
}

// ============================================================================
// 6. LAVENDER - Purple/violet, creative and dreamy
// ============================================================================

const lavenderDark: ThemeColors = {
  background: 'oklch(0.12 0.02 290)',
  foreground: 'oklch(0.95 0.01 290)',
  card: 'oklch(0.15 0.02 290)',
  cardForeground: 'oklch(0.95 0.01 290)',
  popover: 'oklch(0.18 0.02 290)',
  popoverForeground: 'oklch(0.95 0.01 290)',
  primary: 'oklch(0.70 0.20 290)', // lavender purple
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.25 0.03 290)',
  secondaryForeground: 'oklch(0.95 0.01 290)',
  muted: 'oklch(0.22 0.02 290)',
  mutedForeground: 'oklch(0.70 0.02 290)',
  accent: 'oklch(0.28 0.03 290)',
  accentForeground: 'oklch(0.95 0.01 290)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.02 290)',
  input: 'oklch(0.25 0.02 290)',
  ring: 'oklch(0.70 0.20 290)',
  chart1: 'oklch(0.70 0.20 290)',
  chart2: 'oklch(0.65 0.18 320)',
  chart3: 'oklch(0.75 0.16 260)',
  chart4: 'oklch(0.70 0.22 350)',
  chart5: 'oklch(0.65 0.18 220)',
  sidebar: 'oklch(0.10 0.02 290)',
  sidebarForeground: 'oklch(0.90 0.01 290)',
  sidebarPrimary: 'oklch(0.70 0.20 290)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.20 0.03 290)',
  sidebarAccentForeground: 'oklch(0.95 0.01 290)',
  sidebarBorder: 'oklch(0.22 0.02 290)',
  sidebarRing: 'oklch(0.70 0.20 290)',
}

const lavenderLight: ThemeColors = {
  background: 'oklch(0.98 0.01 290)',
  foreground: 'oklch(0.15 0.02 290)',
  card: 'oklch(0.96 0.01 290)',
  cardForeground: 'oklch(0.15 0.02 290)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.02 290)',
  primary: 'oklch(0.50 0.18 290)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.02 290)',
  secondaryForeground: 'oklch(0.15 0.02 290)',
  muted: 'oklch(0.94 0.01 290)',
  mutedForeground: 'oklch(0.45 0.02 290)',
  accent: 'oklch(0.92 0.02 290)',
  accentForeground: 'oklch(0.15 0.02 290)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 290)',
  input: 'oklch(0.88 0.01 290)',
  ring: 'oklch(0.50 0.18 290)',
  chart1: 'oklch(0.50 0.20 290)',
  chart2: 'oklch(0.45 0.18 320)',
  chart3: 'oklch(0.55 0.16 260)',
  chart4: 'oklch(0.50 0.22 350)',
  chart5: 'oklch(0.45 0.18 220)',
  sidebar: 'oklch(0.95 0.01 290)',
  sidebarForeground: 'oklch(0.20 0.02 290)',
  sidebarPrimary: 'oklch(0.50 0.18 290)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.02 290)',
  sidebarAccentForeground: 'oklch(0.15 0.02 290)',
  sidebarBorder: 'oklch(0.88 0.01 290)',
  sidebarRing: 'oklch(0.50 0.18 290)',
}

// ============================================================================
// 7. SUNSET - Warm coral/peach, comforting
// ============================================================================

const sunsetDark: ThemeColors = {
  background: 'oklch(0.12 0.02 40)',
  foreground: 'oklch(0.95 0.01 40)',
  card: 'oklch(0.15 0.02 40)',
  cardForeground: 'oklch(0.95 0.01 40)',
  popover: 'oklch(0.18 0.02 40)',
  popoverForeground: 'oklch(0.95 0.01 40)',
  primary: 'oklch(0.68 0.20 40)', // coral/peach
  primaryForeground: 'oklch(0.10 0 0)',
  secondary: 'oklch(0.25 0.03 40)',
  secondaryForeground: 'oklch(0.95 0.01 40)',
  muted: 'oklch(0.22 0.02 40)',
  mutedForeground: 'oklch(0.70 0.02 40)',
  accent: 'oklch(0.28 0.03 40)',
  accentForeground: 'oklch(0.95 0.01 40)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.02 40)',
  input: 'oklch(0.25 0.02 40)',
  ring: 'oklch(0.68 0.20 40)',
  chart1: 'oklch(0.70 0.20 40)',
  chart2: 'oklch(0.65 0.18 60)',
  chart3: 'oklch(0.75 0.16 20)',
  chart4: 'oklch(0.70 0.22 350)',
  chart5: 'oklch(0.65 0.18 80)',
  sidebar: 'oklch(0.10 0.02 40)',
  sidebarForeground: 'oklch(0.90 0.01 40)',
  sidebarPrimary: 'oklch(0.68 0.20 40)',
  sidebarPrimaryForeground: 'oklch(0.10 0 0)',
  sidebarAccent: 'oklch(0.20 0.03 40)',
  sidebarAccentForeground: 'oklch(0.95 0.01 40)',
  sidebarBorder: 'oklch(0.22 0.02 40)',
  sidebarRing: 'oklch(0.68 0.20 40)',
}

const sunsetLight: ThemeColors = {
  background: 'oklch(0.98 0.01 40)',
  foreground: 'oklch(0.15 0.02 40)',
  card: 'oklch(0.96 0.01 40)',
  cardForeground: 'oklch(0.15 0.02 40)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.02 40)',
  primary: 'oklch(0.48 0.18 40)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.02 40)',
  secondaryForeground: 'oklch(0.15 0.02 40)',
  muted: 'oklch(0.94 0.01 40)',
  mutedForeground: 'oklch(0.45 0.02 40)',
  accent: 'oklch(0.92 0.02 40)',
  accentForeground: 'oklch(0.15 0.02 40)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 40)',
  input: 'oklch(0.88 0.01 40)',
  ring: 'oklch(0.48 0.18 40)',
  chart1: 'oklch(0.50 0.20 40)',
  chart2: 'oklch(0.45 0.18 60)',
  chart3: 'oklch(0.55 0.16 20)',
  chart4: 'oklch(0.50 0.22 350)',
  chart5: 'oklch(0.45 0.18 80)',
  sidebar: 'oklch(0.95 0.01 40)',
  sidebarForeground: 'oklch(0.20 0.02 40)',
  sidebarPrimary: 'oklch(0.48 0.18 40)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.02 40)',
  sidebarAccentForeground: 'oklch(0.15 0.02 40)',
  sidebarBorder: 'oklch(0.88 0.01 40)',
  sidebarRing: 'oklch(0.48 0.18 40)',
}

// ============================================================================
// 8. CHERRY BLOSSOM - Soft pink, gentle and romantic
// ============================================================================

const cherryBlossomDark: ThemeColors = {
  background: 'oklch(0.12 0.02 350)',
  foreground: 'oklch(0.95 0.01 350)',
  card: 'oklch(0.15 0.02 350)',
  cardForeground: 'oklch(0.95 0.01 350)',
  popover: 'oklch(0.18 0.02 350)',
  popoverForeground: 'oklch(0.95 0.01 350)',
  primary: 'oklch(0.72 0.16 350)', // soft pink
  primaryForeground: 'oklch(0.10 0 0)',
  secondary: 'oklch(0.25 0.03 350)',
  secondaryForeground: 'oklch(0.95 0.01 350)',
  muted: 'oklch(0.22 0.02 350)',
  mutedForeground: 'oklch(0.70 0.02 350)',
  accent: 'oklch(0.28 0.03 350)',
  accentForeground: 'oklch(0.95 0.01 350)',
  destructive: 'oklch(0.60 0.25 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.25 0.02 350)',
  input: 'oklch(0.25 0.02 350)',
  ring: 'oklch(0.72 0.16 350)',
  chart1: 'oklch(0.70 0.16 350)',
  chart2: 'oklch(0.65 0.18 320)',
  chart3: 'oklch(0.75 0.14 10)',
  chart4: 'oklch(0.70 0.20 290)',
  chart5: 'oklch(0.65 0.16 30)',
  sidebar: 'oklch(0.10 0.02 350)',
  sidebarForeground: 'oklch(0.90 0.01 350)',
  sidebarPrimary: 'oklch(0.72 0.16 350)',
  sidebarPrimaryForeground: 'oklch(0.10 0 0)',
  sidebarAccent: 'oklch(0.20 0.03 350)',
  sidebarAccentForeground: 'oklch(0.95 0.01 350)',
  sidebarBorder: 'oklch(0.22 0.02 350)',
  sidebarRing: 'oklch(0.72 0.16 350)',
}

const cherryBlossomLight: ThemeColors = {
  background: 'oklch(0.98 0.01 350)',
  foreground: 'oklch(0.15 0.02 350)',
  card: 'oklch(0.96 0.01 350)',
  cardForeground: 'oklch(0.15 0.02 350)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.15 0.02 350)',
  primary: 'oklch(0.52 0.14 350)',
  primaryForeground: 'oklch(0.98 0 0)',
  secondary: 'oklch(0.90 0.02 350)',
  secondaryForeground: 'oklch(0.15 0.02 350)',
  muted: 'oklch(0.94 0.01 350)',
  mutedForeground: 'oklch(0.45 0.02 350)',
  accent: 'oklch(0.92 0.02 350)',
  accentForeground: 'oklch(0.15 0.02 350)',
  destructive: 'oklch(0.55 0.22 30)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.88 0.01 350)',
  input: 'oklch(0.88 0.01 350)',
  ring: 'oklch(0.52 0.14 350)',
  chart1: 'oklch(0.50 0.16 350)',
  chart2: 'oklch(0.45 0.18 320)',
  chart3: 'oklch(0.55 0.14 10)',
  chart4: 'oklch(0.50 0.20 290)',
  chart5: 'oklch(0.45 0.16 30)',
  sidebar: 'oklch(0.95 0.01 350)',
  sidebarForeground: 'oklch(0.20 0.02 350)',
  sidebarPrimary: 'oklch(0.52 0.14 350)',
  sidebarPrimaryForeground: 'oklch(0.98 0 0)',
  sidebarAccent: 'oklch(0.90 0.02 350)',
  sidebarAccentForeground: 'oklch(0.15 0.02 350)',
  sidebarBorder: 'oklch(0.88 0.01 350)',
  sidebarRing: 'oklch(0.52 0.14 350)',
}

// ============================================================================
// Theme Collection
// ============================================================================

export const themes: Theme[] = [
  {
    id: 'noir',
    name: 'Noir',
    description: 'Pure black and white for maximum contrast and focus',
    colors: {
      light: noirLight,
      dark: noirDark
    }
  },
  {
    id: 'slate',
    name: 'Slate',
    description: 'Cool gray with subtle blue undertones',
    colors: {
      light: slateLight,
      dark: slateDark
    }
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep navy blue for calm, focused work',
    colors: {
      light: midnightLight,
      dark: midnightDark
    }
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Peaceful teal and cyan tones',
    colors: {
      light: oceanLight,
      dark: oceanDark
    }
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Deep emerald green for grounding and nature',
    colors: {
      light: forestLight,
      dark: forestDark
    }
  },
  {
    id: 'lavender',
    name: 'Lavender',
    description: 'Purple hues for creativity and dreaminess',
    colors: {
      light: lavenderLight,
      dark: lavenderDark
    }
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm coral and peach for comfort',
    colors: {
      light: sunsetLight,
      dark: sunsetDark
    }
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    description: 'Soft pink tones for gentle reflection',
    colors: {
      light: cherryBlossomLight,
      dark: cherryBlossomDark
    }
  },
]
