# PROMPT 1: File Structure Setup Specification

## Overview
Set up the basic file structure for a new template following the wedding template pattern. This creates the foundational architecture with placeholder content.

## Study Reference Files
Before starting, examine the wedding template structure:
- `/src/components/templates/wedding/`
- `/src/app/wedding-planning/`
- `/src/contexts/wedding-context.tsx`

## Required File Creation

### 1. Context File: `/src/contexts/[template-name]-context.tsx`
```tsx
"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

// Define interface matching your domain
interface TemplateNameData {
  // Add fields specific to your template domain
  // Example: name: string, email: string, etc.
}

interface TemplateNameContextType {
  data: TemplateNameData
  updateData: (newData: Partial<TemplateNameData>) => void
  resetData: () => void
}

const defaultData: TemplateNameData = {
  // Initialize with default values
}

const TemplateNameContext = createContext<TemplateNameContextType | undefined>(undefined)

export function TemplateNameProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<TemplateNameData>(defaultData)

  const updateData = (newData: Partial<TemplateNameData>) => {
    setData(prev => ({ ...prev, ...newData }))
  }

  const resetData = () => {
    setData(defaultData)
  }

  return (
    <TemplateNameContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </TemplateNameContext.Provider>
  )
}

export function useTemplateName() {
  const context = useContext(TemplateNameContext)
  if (!context) {
    throw new Error('useTemplateName must be used within TemplateNameProvider')
  }
  return context
}
```

### 2. Landing Page: `/src/app/[template-name]/page.tsx`
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Template Display Name] - Templata',
  description: 'Brief description of what this template helps with'
}

export default function TemplateNamePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">[Template Display Name]</h1>
      <p className="text-muted-foreground">Landing page placeholder - will be implemented later</p>
    </div>
  )
}
```

### 3. App Dashboard: `/src/app/[template-name]/app/page.tsx`
```tsx
import { TemplateNameProvider } from '@/contexts/[template-name]-context'
import { TemplateNameOverview } from '@/components/templates/[template-name]/[template-name]-overview'

export default function TemplateNameAppPage() {
  return (
    <TemplateNameProvider>
      <TemplateNameOverview />
    </TemplateNameProvider>
  )
}
```

### 4. Overview Component: `/src/components/templates/[template-name]/[template-name]-overview.tsx`
```tsx
"use client"

export function TemplateNameOverview() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">[Template Display Name] Overview</h1>
      <p className="text-muted-foreground">Overview Coming Soon</p>
    </div>
  )
}
```

### 5. Create Empty Directories
- `/src/components/guided-notes/[template-name]/` (empty folder)
- `/src/components/resources/[template-name]/` (empty folder)

## Naming Conventions

### Template Names
- **URL/Route**: kebab-case (`template-name`)
- **Context**: PascalCase (`TemplateNameContext`)
- **Components**: PascalCase (`TemplateNameOverview`)
- **Hooks**: camelCase (`useTemplateName`)

### File Names
- Context files: `[template-name]-context.tsx`
- Component files: `[template-name]-overview.tsx`
- Page files: `page.tsx`

## Domain-Specific Considerations

### Template Categories & Context Fields

**Planning Templates** (wedding, event, project):
```tsx
interface PlanningData {
  name: string
  date: string
  budget: number
  location: string
  // category-specific fields
}
```

**Business Templates** (startup, marketing):
```tsx
interface BusinessData {
  companyName: string
  industry: string
  targetMarket: string
  budget: number
  // category-specific fields
}
```

**Personal Templates** (fitness, education):
```tsx
interface PersonalData {
  name: string
  goal: string
  timeline: string
  // category-specific fields
}
```

## Quality Checklist

### Before Completion:
- ✅ All 6 items created with correct file paths
- ✅ Context follows wedding-context pattern with domain-appropriate interface
- ✅ All imports use correct paths
- ✅ TypeScript interfaces match domain requirements
- ✅ File naming follows conventions
- ✅ `npm run build` passes without errors

### Validation Steps:
1. Run `npm run build` - must pass without TypeScript errors
2. Check all import paths are correct
3. Verify context hook works properly
4. Ensure placeholder content displays correctly

## Success Criteria
When complete, you should have:
- ✅ Working file structure matching wedding template pattern
- ✅ Domain-appropriate context with proper TypeScript interfaces
- ✅ Clean TypeScript build with no errors
- ✅ Placeholder pages that render correctly
- ✅ Ready foundation for next development steps

**Output**: "STEP 1 COMPLETE" when all files created and build passes.