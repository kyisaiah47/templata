# PROMPT 2: Sidebar Navigation Specification

## Overview
Create the sidebar navigation component for the template, defining the main sections, guided notes, and resources that will be available to users.

## Study Reference File
Examine the wedding template sidebar structure:
- `/src/components/templates/wedding/wedding-sidebar-left.tsx`

## Required Implementation

### 1. Create Sidebar Component: `/src/components/templates/[template-name]/[template-name]-sidebar-left.tsx`

```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  // Import relevant icons from lucide-react
  LayoutDashboard,
  FileText,
  BookOpen,
  ChevronDown,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export function TemplateNameSidebarLeft() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState({
    guidedNotes: true,
    resources: true
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="p-4">
        <h2 className="text-lg font-semibold">[Template Display Name]</h2>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          
          {/* Core Navigation */}
          <div className="space-y-2">
            <Link 
              href="/[template-name]/app"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                pathname === "/[template-name]/app" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>

            {/* Core Sections - 4-6 items specific to domain */}
            <Link 
              href="/[template-name]/app/section-1"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                pathname === "/[template-name]/app/section-1" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              Section Name 1
            </Link>
            
            {/* Repeat for each core section */}
          </div>

          <Separator />

          {/* Guided Notes Section */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleSection('guidedNotes')}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Guided Notes</span>
                <Badge variant="secondary" className="text-xs">8-12</Badge>
              </div>
              {expandedSections.guidedNotes ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>

            {expandedSections.guidedNotes && (
              <div className="ml-6 space-y-1">
                {/* 8-12 Guided Notes Items */}
                <Link 
                  href="/[template-name]/app/guided-note-1"
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md transition-colors",
                    pathname === "/[template-name]/app/guided-note-1" 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  )}
                >
                  Guided Note 1
                </Link>
                {/* Repeat for each guided note */}
              </div>
            )}
          </div>

          <Separator />

          {/* Resources Section */}
          <div className="space-y-2">
            <Button
              variant="ghost" 
              size="sm"
              onClick={() => toggleSection('resources')}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Resources</span>
                <Badge variant="secondary" className="text-xs">2-4</Badge>
              </div>
              {expandedSections.resources ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>

            {expandedSections.resources && (
              <div className="ml-6 space-y-1">
                {/* 2-4 Resource Items */}
                <Link 
                  href="/[template-name]/resources/resource-1"
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md transition-colors",
                    pathname === "/[template-name]/resources/resource-1" 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  )}
                >
                  Resource 1
                </Link>
                {/* Repeat for each resource */}
              </div>
            )}
          </div>

        </div>
      </ScrollArea>
    </div>
  )
}
```

### 2. Update Main App Page
Update `/src/components/templates/[template-name]/[template-name]-overview.tsx`:

```tsx
"use client"

import { TemplateNameSidebarLeft } from "./[template-name]-sidebar-left"

export function TemplateNameOverview() {
  return (
    <div className="flex h-screen">
      <TemplateNameSidebarLeft />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">[Template Display Name] Overview</h1>
        <p className="text-muted-foreground">Overview Coming Soon</p>
      </main>
    </div>
  )
}
```

## Domain-Specific Navigation Examples

### Planning Templates

**Baby Planning Template:**
- **Core Sections**: Health Tracking, Preparation, Budget, Timeline, Support
- **Guided Notes** (8-12): Birth Plan, Hospital Bag, Nursery Setup, Baby Registry, Maternity Leave, Childcare Search, Baby-Proofing, Feeding Plan, Sleep Schedule, Emergency Contacts, Pediatrician Research, Baby Clothes
- **Resources** (2-4): Pregnancy Guide, Baby Development Checklist

**Home Buying Template:**
- **Core Sections**: Property Search, Financing, Inspections, Moving, Legal
- **Guided Notes** (8-12): House Hunting Criteria, Mortgage Comparison, Down Payment, Home Inspection, Insurance, Closing Process, Moving Timeline, Utility Setup, Neighborhood Research, School Districts, Property Taxes, HOA Research  
- **Resources** (2-4): First-Time Buyer's Guide, Home Buying Checklist

### Business Templates

**Startup Template:**
- **Core Sections**: Business Plan, Financing, Legal, Marketing, Operations
- **Guided Notes** (8-12): Market Research, Competitive Analysis, Financial Projections, Funding Strategy, Legal Structure, Team Building, Product Development, Brand Identity, Launch Strategy, Customer Acquisition, Operations Plan, Exit Strategy
- **Resources** (2-4): Startup Guide, Legal Checklist

**Marketing Campaign Template:**
- **Core Sections**: Strategy, Content, Channels, Budget, Analytics
- **Guided Notes** (8-12): Target Audience, Brand Messaging, Content Calendar, Social Media, Email Marketing, SEO Strategy, Paid Advertising, Influencer Outreach, Event Planning, PR Strategy, Budget Allocation, Performance Tracking
- **Resources** (2-4): Marketing Guide, Campaign Templates

### Personal Templates

**Fitness Journey Template:**
- **Core Sections**: Goals, Workout Plan, Nutrition, Progress, Support
- **Guided Notes** (8-12): Fitness Assessment, Goal Setting, Workout Schedule, Meal Planning, Supplement Research, Progress Tracking, Injury Prevention, Motivation Strategies, Equipment Needs, Trainer Selection, Recovery Plan, Long-term Maintenance
- **Resources** (2-4): Exercise Guide, Nutrition Facts

## Navigation Structure Requirements

### Core Sections (4-6 items)
- Always include "Overview" as first item
- 3-5 domain-specific functional areas
- Use descriptive, action-oriented names
- Each should represent a major workflow or feature area

### Guided Notes (8-12 items)
- Specific planning documents users will create
- Action-oriented names (ending in words like "Plan", "Checklist", "Research")
- Logical progression from early to late in process
- Cover all major decision points and tasks

### Resources (2-4 items)  
- Educational content to help users learn
- Usually include a main guide and specialized checklists
- Names should indicate educational/reference nature

## Icon Selection Guidelines

### Core Section Icons
Choose icons that clearly represent each functional area:
- Overview: `LayoutDashboard`
- Planning: `Calendar`, `ClipboardList`
- Financial: `DollarSign`, `CreditCard`
- Research: `Search`, `FileSearch`
- Communication: `Users`, `Mail`

### Standard Icons
- Guided Notes: `FileText`
- Resources: `BookOpen`
- Expand/Collapse: `ChevronDown`, `ChevronRight`

## Quality Checklist

### Navigation Logic
- ✅ Logical grouping of related functions
- ✅ Intuitive flow from early to late process steps
- ✅ Clear distinction between functional areas and planning tools

### User Experience  
- ✅ Collapsible sections for cleaner interface
- ✅ Badge counts showing number of available items
- ✅ Active state highlighting for current page
- ✅ Responsive design considerations

### Technical Requirements
- ✅ Proper TypeScript interfaces
- ✅ Correct import paths for all icons
- ✅ Consistent styling with design system
- ✅ Accessible navigation patterns

## Validation Steps

1. **Visual Test**: Sidebar renders correctly with all sections
2. **Navigation Test**: Links work (even if they lead to placeholder pages)  
3. **Interaction Test**: Expand/collapse functionality works
4. **Responsive Test**: Sidebar works on different screen sizes
5. **Build Test**: `npm run build` passes without errors

## Success Criteria

When complete, you should have:
- ✅ Fully functional sidebar navigation
- ✅ Domain-appropriate section organization
- ✅ 8-12 planned guided notes items
- ✅ 2-4 planned resource items  
- ✅ Clean, intuitive user interface
- ✅ Ready structure for implementing actual pages

**Output**: "STEP 2 COMPLETE" when sidebar navigation works and displays properly.