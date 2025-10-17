/**
 * Category Color System
 *
 * Provides consistent color coding for template categories throughout the UI.
 * Uses OKLCH for smooth color transitions and accessibility.
 */

export type Category =
  | 'career'
  | 'finance'
  | 'wellness'
  | 'life-events'
  | 'relationships'
  | 'personal-growth'
  | 'productivity'
  | 'creativity'
  | 'learning'
  | 'planning'
  | 'reflection';

export interface CategoryColor {
  bg: string; // Background color (OKLCH)
  text: string; // Text color (OKLCH)
  border: string; // Border color (OKLCH)
  hue: number; // Hue value for gradients
}

/**
 * Category color mappings with OKLCH values
 * Each category has a distinct hue while maintaining consistent lightness/chroma
 */
export const categoryColors: Record<Category, CategoryColor> = {
  career: {
    bg: 'oklch(95% 0.05 250)', // Blue
    text: 'oklch(35% 0.12 250)',
    border: 'oklch(75% 0.08 250)',
    hue: 250,
  },
  finance: {
    bg: 'oklch(95% 0.05 140)', // Green
    text: 'oklch(30% 0.12 140)',
    border: 'oklch(75% 0.08 140)',
    hue: 140,
  },
  wellness: {
    bg: 'oklch(95% 0.05 180)', // Cyan
    text: 'oklch(35% 0.12 180)',
    border: 'oklch(75% 0.08 180)',
    hue: 180,
  },
  'life-events': {
    bg: 'oklch(95% 0.05 330)', // Pink
    text: 'oklch(35% 0.12 330)',
    border: 'oklch(75% 0.08 330)',
    hue: 330,
  },
  relationships: {
    bg: 'oklch(95% 0.05 0)', // Red
    text: 'oklch(35% 0.12 0)',
    border: 'oklch(75% 0.08 0)',
    hue: 0,
  },
  'personal-growth': {
    bg: 'oklch(95% 0.05 290)', // Purple
    text: 'oklch(35% 0.12 290)',
    border: 'oklch(75% 0.08 290)',
    hue: 290,
  },
  productivity: {
    bg: 'oklch(95% 0.05 50)', // Orange
    text: 'oklch(35% 0.12 50)',
    border: 'oklch(75% 0.08 50)',
    hue: 50,
  },
  creativity: {
    bg: 'oklch(95% 0.05 310)', // Magenta
    text: 'oklch(35% 0.12 310)',
    border: 'oklch(75% 0.08 310)',
    hue: 310,
  },
  learning: {
    bg: 'oklch(95% 0.05 220)', // Indigo
    text: 'oklch(35% 0.12 220)',
    border: 'oklch(75% 0.08 220)',
    hue: 220,
  },
  planning: {
    bg: 'oklch(95% 0.05 100)', // Lime
    text: 'oklch(30% 0.12 100)',
    border: 'oklch(75% 0.08 100)',
    hue: 100,
  },
  reflection: {
    bg: 'oklch(95% 0.05 270)', // Violet
    text: 'oklch(35% 0.12 270)',
    border: 'oklch(75% 0.08 270)',
    hue: 270,
  },
};

/**
 * Get category color by category name (case-insensitive)
 */
export function getCategoryColor(category: string): CategoryColor {
  const normalized = category.toLowerCase().replace(/\s+/g, '-') as Category;
  return categoryColors[normalized] || categoryColors['planning']; // Default fallback
}

/**
 * Get CSS custom properties for a category
 */
export function getCategoryStyles(category: string): React.CSSProperties {
  const colors = getCategoryColor(category);
  return {
    '--category-bg': colors.bg,
    '--category-text': colors.text,
    '--category-border': colors.border,
    backgroundColor: colors.bg,
    color: colors.text,
    borderColor: colors.border,
  } as React.CSSProperties;
}

/**
 * Get Tailwind-compatible color classes for a category
 */
export function getCategoryClasses(category: string): string {
  // This generates inline styles instead of Tailwind classes for better OKLCH support
  const colors = getCategoryColor(category);
  return `bg-[${colors.bg}] text-[${colors.text}] border-[${colors.border}]`;
}

/**
 * Get a gradient background for a category
 */
export function getCategoryGradient(category: string, direction: 'to-r' | 'to-b' | 'to-br' = 'to-br'): string {
  const { hue } = getCategoryColor(category);
  const from = `oklch(97% 0.04 ${hue})`;
  const to = `oklch(93% 0.06 ${hue})`;

  const directionMap = {
    'to-r': 'to right',
    'to-b': 'to bottom',
    'to-br': 'to bottom right',
  };

  return `linear-gradient(${directionMap[direction]}, ${from}, ${to})`;
}
