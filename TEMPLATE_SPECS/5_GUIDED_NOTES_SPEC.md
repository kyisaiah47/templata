# Guided Notes Layout Specification

Based on the `timeline.tsx` implementation, here's the complete specification for the guided notes layout:

## File Structure

```typescript
"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ComponentName() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold">Page Title</h1>
        <p className="text-muted-foreground">Page description</p>
      </div>

      {/* Tab Structure */}
      <Tabs defaultValue="first-tab" className="w-full">
        <TabsList className="grid w-full grid-cols-X h-auto">
          {/* Responsive tab triggers */}
        </TabsList>

        {/* Each tab contains a GuidedNotePage */}
        <TabsContent value="tab-name">
          <GuidedNotePage
            title="Tab-specific title"
            description="Tab-specific description"
            sections={[...]}
            tips={[...]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}
```

## Key Components

### 1. Header Section
```tsx
<div>
  <h1 className="text-3xl font-bold">Main Page Title</h1>
  <p className="text-muted-foreground">Brief description of the page's purpose</p>
</div>
```

### 2. Responsive Tab Navigation
```tsx
<TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
  <TabsTrigger value="tab-key" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
    <span className="hidden sm:inline">Full Tab Name</span>
    <span className="sm:hidden">Short</span>
  </TabsTrigger>
</TabsList>
```

### 3. Tab Content Structure
**Every tab must contain a `GuidedNotePage` component:**

```tsx
<TabsContent value="tab-key">
  <GuidedNotePage
    title="Tab-Specific Title (with context)"
    description="What this tab section helps accomplish"
    sections={[
      {
        title: "Section Name",
        prompts: [
          "Question 1 as a prompt for user input?",
          "Question 2 that guides thinking?",
          // 4-6 prompts per section
        ],
        examples: [
          "Specific example or tip for prompt 1",
          "Guidance for prompt 2",
          // Matching examples for each prompt
        ]
      },
      // 3-4 sections per tab
    ]}
    tips={[
      "Practical tip for this entire tab section",
      "Key insight or best practice",
      // 4-6 tips per tab
    ]}
  />
</TabsContent>
```

## Content Organization Principles

### Sections (3-4 per tab)
- **Logical grouping** of related prompts
- **Action-oriented titles** ("Initial Planning Questions", "Vendor Coordination")
- **4-6 prompts per section** for focused thinking

### Prompts (4-6 per section)
- **Question format** that guides user input
- **Specific and actionable** rather than vague
- **Progressive flow** from broad to specific

### Examples (1:1 with prompts)
- **Concrete guidance** for each prompt
- **Practical tips** not just theoretical advice
- **Real scenarios** users can relate to

### Tips (4-6 per tab)
- **Best practices** for the entire tab topic
- **Common pitfalls** to avoid
- **Key insights** from experience

## Content Quality Standards

### Prompts Should:
- ✅ Be written as questions ending with `?`
- ✅ Guide specific decision-making or planning
- ✅ Progress logically within each section
- ✅ Be actionable and concrete

### Examples Should:
- ✅ Provide specific guidance for the corresponding prompt
- ✅ Include concrete details (numbers, timeframes, specifics)
- ✅ Offer practical options or considerations
- ✅ Help users understand what a good answer looks like

### Tips Should:
- ✅ Be universal best practices for the tab topic
- ✅ Help users avoid common mistakes
- ✅ Provide strategic insights
- ✅ Be actionable and memorable

## Responsive Design
- **Mobile-first** tab labels (short names for small screens)
- **Flexible grid** layouts for tab triggers
- **Auto-height** tab lists to accommodate content
- **Accessible** spacing and touch targets

## Implementation Notes

### DO NOT:
- ❌ Use static `Card` components for content
- ❌ Have tabs with just guidance text
- ❌ Mix static content with GuidedNotePage
- ❌ Create "My Notes" tabs - all tabs should be interactive

### DO:
- ✅ Every tab uses `GuidedNotePage` component
- ✅ Convert existing guidance into prompts and examples
- ✅ Make all content interactive and editable
- ✅ Preserve helpful guidance as examples and tips

## Reference Implementation
See `src/components/guided-notes/wedding/timeline.tsx` for the canonical example of this specification.

This specification ensures all guided notes pages provide **interactive, guided planning experiences** rather than static information displays.