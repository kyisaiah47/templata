# PROMPT 6: Resources + My Notes Section Specification

## Overview
Create educational resource components and integrate the free-form notes section. Resources provide static informational content while My Notes offers flexible note-taking capability.

## Study Reference Files
Examine existing resource structure:
- `/src/components/resources/wedding/` (for component patterns)
- `/src/components/note-editor.tsx` (for My Notes integration)
- Wedding sidebar navigation for resource linking patterns

## Part A: Create 2-4 Resource Components

### 1. Create Resource Files in `/src/components/resources/[template-name]/`

Each resource should be educational/reference material with static content:

```tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink
} from "lucide-react"

export function ResourceName() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Resource Title</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive guide to [specific domain topic]
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Guide</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Quick Overview
          </CardTitle>
          <CardDescription>
            Key information at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Key Stat 1</div>
              <p className="text-sm text-muted-foreground">Description</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Key Stat 2</div>
              <p className="text-sm text-muted-foreground">Description</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Key Stat 3</div>
              <p className="text-sm text-muted-foreground">Description</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Section 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Section 1 Title</CardTitle>
            <CardDescription>What this section covers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Introduction paragraph explaining the section's purpose and importance.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Important Point 1</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed explanation of this important concept or tip.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Important Point 2</h4>
                  <p className="text-sm text-muted-foreground">
                    Another key piece of information users should know.
                  </p>
                </div>
              </div>

              {/* Add 4-6 important points per section */}
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Section 2 Title</CardTitle>
            <CardDescription>Focus area for this section</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Checklist Format */}
            <div className="space-y-3">
              <h4 className="font-semibold">Essential Checklist:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Checklist item 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Checklist item 2</span>
                </div>
                {/* Add 8-12 checklist items */}
              </div>
            </div>

            {/* Warning/Tip Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Important Warning</h4>
                  <p className="text-sm text-yellow-700">
                    Critical information users should be aware of to avoid common mistakes.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Timeline/Process */}
        <Card>
          <CardHeader>
            <CardTitle>Section 3: Process Timeline</CardTitle>
            <CardDescription>Step-by-step breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Timeline Steps */}
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Step 1 Title</h4>
                      <p className="text-sm text-muted-foreground">
                        Description of what happens in step 1 and why it's important.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: X weeks</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Step 2 Title</h4>
                      <p className="text-sm text-muted-foreground">
                        What users should focus on in step 2.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: X weeks</Badge>
                    </div>
                  </div>

                  {/* Add 4-6 timeline steps */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Expert Tips
            </CardTitle>
            <CardDescription>Professional insights and best practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Pro Tip #1</h4>
                <p className="text-sm text-blue-700">
                  Expert advice that can save time, money, or prevent common mistakes.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip #2</h4>
                <p className="text-sm text-green-700">
                  Another valuable insight from domain experts.
                </p>
              </div>

              {/* Add 4-6 pro tips */}
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Helpful links and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">External Resource 1</h4>
                <p className="text-sm text-muted-foreground">Brief description of what this resource provides</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            {/* Add 3-5 additional resources */}
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Get Started?</CardTitle>
          <CardDescription>Use our guided notes to apply what you've learned</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Guided Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
```

## Part B: Integrate My Notes Section

### 1. Update Sidebar Navigation: `/src/components/templates/[template-name]/[template-name]-sidebar-left.tsx`

Add My Notes section to your existing sidebar:

```tsx
// Add to existing sidebar component - after Resources section

<Separator />

{/* My Notes Section */}
<div className="space-y-2">
  <Link 
    href="/[template-name]/app/my-notes"
    className={cn(
      "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
      pathname === "/[template-name]/app/my-notes" 
        ? "bg-primary text-primary-foreground" 
        : "hover:bg-muted"
    )}
  >
    <Edit className="h-4 w-4" />
    My Notes
  </Link>
</div>
```

### 2. Create My Notes Page Component: `/src/components/templates/[template-name]/my-notes.tsx`

```tsx
"use client"

import { CreateNote } from "@/components/note-editor"

export function MyNotes() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-muted-foreground">
          Create free-form notes alongside your structured planning
        </p>
      </div>
      
      <CreateNote />
    </div>
  )
}
```

### 3. Update Main App Routing

Add My Notes and Resource routing to your main app page:

```tsx
// Add to existing routing in main app page

import { MyNotes } from '@/components/templates/[template-name]/my-notes'
import { ResourceName1 } from '@/components/resources/[template-name]/resource-name-1'
import { ResourceName2 } from '@/components/resources/[template-name]/resource-name-2'
// Import other resources...

// Add to renderPage switch statement:
case 'my-notes':
  return <MyNotes />
case 'resource1':
  return <ResourceName1 />
case 'resource2':
  return <ResourceName2 />
// Add other resource cases...
```

## Domain-Specific Resource Examples

### Baby Planning Resources (2-4 files)
1. **pregnancy-guide.tsx**: Trimester-by-trimester development, symptoms, appointments
2. **baby-gear-checklist.tsx**: Essential vs optional items, budget considerations, safety ratings
3. **newborn-care-guide.tsx**: Feeding, sleeping, diaper changing, basic health monitoring
4. **postpartum-guide.tsx**: Recovery timeline, mental health, returning to work

### Home Buying Resources (2-4 files)
1. **buyers-guide.tsx**: Complete process from pre-approval to closing, timeline expectations
2. **mortgage-guide.tsx**: Loan types, qualification requirements, rate comparison strategies
3. **inspection-checklist.tsx**: What inspectors check, red flags, negotiation strategies
4. **closing-guide.tsx**: Final walkthrough, document signing, key transfer process

### Job Search Resources (2-4 files)
1. **job-search-guide.tsx**: Application strategies, ATS optimization, networking approaches
2. **interview-guide.tsx**: Preparation techniques, common questions, follow-up protocols
3. **salary-negotiation.tsx**: Research methods, negotiation tactics, benefits evaluation
4. **career-transition.tsx**: Industry switching, skill gap analysis, timeline planning

### Fitness Journey Resources (2-4 files)
1. **exercise-guide.tsx**: Workout types, progression principles, form guidelines
2. **nutrition-guide.tsx**: Macro basics, meal planning, supplement information
3. **goal-setting-guide.tsx**: SMART goals, tracking methods, plateau management
4. **injury-prevention.tsx**: Warm-up routines, common mistakes, recovery protocols

## Content Guidelines

### Resource Content Requirements
- ✅ **Educational Focus**: Teaching and informing rather than note-taking
- ✅ **Comprehensive Coverage**: 4-6 major sections per resource
- ✅ **Actionable Information**: Practical tips users can implement
- ✅ **Expert Insights**: Professional advice and best practices
- ✅ **Visual Organization**: Cards, checklists, timelines for easy scanning

### Content Structure Standards
- ✅ **Clear Hierarchy**: Headers, subheaders, organized sections
- ✅ **Scannable Format**: Bullet points, checklists, highlighted key points
- ✅ **Visual Indicators**: Icons for tips, warnings, important information
- ✅ **Progressive Disclosure**: Information organized from basic to advanced
- ✅ **Consistent Styling**: Use design system components throughout

### Domain Relevance Requirements
- ✅ **Specific to Template**: Content directly serves your template's purpose
- ✅ **Expert-Level Quality**: Information that provides real value beyond basic knowledge
- ✅ **Complementary to Guided Notes**: Deeper information that supports note-taking activities
- ✅ **Unique Content**: No generic information that could apply to any domain

## Quality Checklist

### Content Quality
- ✅ All resources contain substantial, valuable information
- ✅ Content is specific to your template domain
- ✅ Information is organized logically and easy to navigate
- ✅ Visual elements enhance rather than distract from content
- ✅ Expert tips and insights provide real value

### Technical Implementation
- ✅ All resource components render correctly
- ✅ My Notes integration works properly
- ✅ Navigation links to all resources function
- ✅ Responsive design works on all screen sizes
- ✅ TypeScript compiles without errors

### User Experience
- ✅ Resources are easily discoverable from navigation
- ✅ Content is scannable and not overwhelming
- ✅ My Notes provides flexible note-taking capability
- ✅ Navigation between resources and notes is intuitive
- ✅ Visual hierarchy guides users through content

## Validation Steps

1. **Navigation Test**: Click through all resource links from sidebar
2. **Content Test**: Read through each resource for completeness and relevance
3. **My Notes Test**: Create and edit notes using the integrated note editor
4. **Responsive Test**: Check all resources display properly on mobile
5. **Integration Test**: Verify resources complement your guided notes sections
6. **Build Test**: Ensure `npm run build` passes without errors

## Success Criteria

When complete, you should have:
- ✅ 2-4 comprehensive resource components with domain-specific content
- ✅ Working My Notes section integrated into navigation
- ✅ All resource links function properly from sidebar
- ✅ Educational content that complements guided notes
- ✅ Professional-quality information presentation
- ✅ Responsive design across all devices
- ✅ Clean TypeScript build with no errors

**Output**: "STEP 6 COMPLETE" when all resources are created and My Notes integration works.