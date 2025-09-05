# PROMPT 4: Core Pages Specification

## Overview
Create the core functional pages that make your template unique. These are the main workflow areas with domain-specific functionality, CRUD operations, and progress tracking.

## Study Reference Files
DO NOT copy wedding content - use these only for component structure patterns:
- `/src/components/templates/wedding/` (component patterns only)
- Wedding sidebar navigation structure for routing ideas

## Required Implementation

### 1. Create 6 Core Page Components in `/src/components/templates/[template-name]/`

**CRITICAL: Each page must be completely unique to your domain**

#### Overview Page: `[template-name]-overview.tsx`
Dashboard with key metrics and progress tracking:

```tsx
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  // Domain-specific icons
  Calendar,
  Target,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { useTemplateName } from "@/contexts/[template-name]-context"

export function TemplateNameOverview() {
  const { data } = useTemplateName()
  
  // Calculate domain-specific metrics
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    completedTasks: 0,
    upcomingDeadlines: 0,
    budgetUsed: 0,
    // Add 4-6 domain-specific metrics
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">[Template Display Name] Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and key milestones</p>
        </div>
        <Button>
          Quick Add
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalProgress}%</div>
            <Progress value={metrics.totalProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Domain Metric 1</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.completedTasks}</div>
            <p className="text-xs text-muted-foreground">out of X total</p>
          </CardContent>
        </Card>

        {/* Add 2-3 more metric cards specific to your domain */}
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and progress</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Domain-specific activity feed */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Domain-specific activity item</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              {/* Add more activity items */}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>What needs attention next</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Domain-specific upcoming tasks */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Important domain task</span>
                <Badge variant="outline">Due Soon</Badge>
              </div>
              {/* Add more task items */}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your [domain]</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Something</span>
            </Button>
            {/* Add 3-4 more quick action buttons */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

#### Core Functional Pages: `[page-name].tsx` (5 pages)
Each with CRUD operations and domain-specific functionality:

```tsx
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Plus,
  Edit,
  Trash2,
  // Domain-specific icons
} from "lucide-react"
import { useTemplateName } from "@/contexts/[template-name]-context"

// Define domain-specific data interface
interface DomainItem {
  id: string
  name: string
  status: 'pending' | 'in-progress' | 'completed'
  // Add domain-specific fields
  domainField1: string
  domainField2: number
  domainField3: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function PageNameComponent() {
  const { data, updateData } = useTemplateName()
  const [items, setItems] = useState<DomainItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)
  const [editingItem, setEditingItem] = useState<DomainItem | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    domainField1: '',
    domainField2: 0,
    domainField3: new Date(),
    notes: '',
  })

  // Load items from localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem('[template-name]-[page-name]-items')
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    }
  }, [])

  // Save items to localStorage
  const saveItems = (newItems: DomainItem[]) => {
    setItems(newItems)
    localStorage.setItem('[template-name]-[page-name]-items', JSON.stringify(newItems))
  }

  // CRUD Operations
  const addItem = () => {
    const newItem: DomainItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveItems([...items, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateItem = (id: string, updates: Partial<DomainItem>) => {
    const updatedItems = items.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    saveItems(updatedItems)
  }

  const deleteItem = (id: string) => {
    const filteredItems = items.filter(item => item.id !== id)
    saveItems(filteredItems)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      domainField1: '',
      domainField2: 0,
      domainField3: new Date(),
      notes: '',
    })
  }

  // Calculate progress/metrics
  const completedCount = items.filter(item => item.status === 'completed').length
  const progressPercentage = items.length > 0 ? (completedCount / items.length) * 100 : 0

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Page Title</h1>
          <p className="text-muted-foreground">Manage your [domain-specific items]</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New [Domain Item]</DialogTitle>
              <DialogDescription>
                Create a new item to track in your [domain area].
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter item name"
                />
              </div>
              
              {/* Add domain-specific form fields */}
              <div className="grid gap-2">
                <Label htmlFor="domainField1">Domain Field 1</Label>
                <Input
                  id="domainField1"
                  value={formData.domainField1}
                  onChange={(e) => setFormData({...formData, domainField1: e.target.value})}
                  placeholder="Domain-specific placeholder"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addItem}>
                Add Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>
            {completedCount} of {items.length} items completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% complete
          </p>
        </CardContent>
      </Card>

      {/* Items List */}
      <Card>
        <CardHeader>
          <CardTitle>[Domain Items] List</CardTitle>
          <CardDescription>Manage and track your items</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No items yet. Add your first item to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your [domain items] list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Domain Field 1</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.domainField1}</TableCell>
                    <TableCell>{item.createdAt.toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItem(item.id, { 
                            status: item.status === 'completed' ? 'pending' : 'completed' 
                          })}
                        >
                          {item.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
```

### 2. Update Main App Page: `/src/app/[template-name]/app/page.tsx`

Add routing to handle different page views:

```tsx
"use client"

import { useState } from "react"
import { TemplateNameProvider } from '@/contexts/[template-name]-context'
import { TemplateNameSidebarLeft } from '@/components/templates/[template-name]/[template-name]-sidebar-left'
import { TemplateNameSetupWizard } from '@/components/templates/[template-name]/[template-name]-setup-wizard'
import { TemplateNameOverview } from '@/components/templates/[template-name]/[template-name]-overview'
import { PageName1 } from '@/components/templates/[template-name]/page-name-1'
import { PageName2 } from '@/components/templates/[template-name]/page-name-2'
import { PageName3 } from '@/components/templates/[template-name]/page-name-3'
import { PageName4 } from '@/components/templates/[template-name]/page-name-4'
import { PageName5 } from '@/components/templates/[template-name]/page-name-5'

export default function TemplateNameAppPage() {
  return (
    <TemplateNameProvider>
      <TemplateAppContent />
    </TemplateNameProvider>
  )
}

function TemplateAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  
  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <TemplateNameOverview />
      case 'page1':
        return <PageName1 />
      case 'page2':
        return <PageName2 />
      case 'page3':
        return <PageName3 />
      case 'page4':
        return <PageName4 />
      case 'page5':
        return <PageName5 />
      default:
        return <TemplateNameOverview />
    }
  }

  return (
    <div className="flex h-screen">
      <TemplateNameSidebarLeft currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  )
}
```

## Domain-Specific Page Examples

### Baby Planning Template (6 Core Pages)
1. **Overview**: Weeks pregnant, appointment countdown, budget tracking, preparation progress
2. **Health Tracking**: Doctor appointments, test results, symptom logging, medication tracking
3. **Baby Preparation**: Nursery setup checklist, gear purchasing, baby-proofing tasks
4. **Budget Planning**: Expense categories (medical, gear, nursery), cost tracking, savings goals
5. **Timeline Management**: Key milestones, appointment scheduling, preparation deadlines
6. **Postpartum Planning**: Recovery planning, childcare arrangements, work leave management

### Home Buying Template (6 Core Pages)
1. **Overview**: Properties viewed, offers made, timeline progress, budget status
2. **Property Search**: Saved properties, viewing appointments, property comparison
3. **Financing Management**: Loan applications, pre-approval tracking, mortgage comparison
4. **Inspection Coordination**: Scheduled inspections, reports, repair negotiations
5. **Moving Planning**: Timeline creation, moving company quotes, utility transfers
6. **Legal Documentation**: Contract tracking, paperwork deadlines, closing preparation

### Job Search Template (6 Core Pages)
1. **Overview**: Applications sent, interviews scheduled, response rates, timeline tracking
2. **Application Tracking**: Job applications, status updates, follow-up scheduling
3. **Company Research**: Target companies, contact information, company notes
4. **Interview Management**: Upcoming interviews, preparation notes, feedback tracking
5. **Network Building**: Professional contacts, networking events, relationship management
6. **Skill Development**: Learning goals, course tracking, certification progress

### Fitness Journey Template (6 Core Pages)
1. **Overview**: Weight progress, workout streaks, goal achievement, measurements
2. **Workout Planning**: Exercise routines, scheduling, progress tracking
3. **Nutrition Tracking**: Meal planning, calorie counting, macro tracking
4. **Progress Monitoring**: Weight logs, measurements, progress photos, milestones
5. **Goal Setting**: Fitness targets, deadlines, achievement tracking
6. **Health Metrics**: Sleep tracking, energy levels, recovery monitoring

## Page Requirements

### Functionality Requirements
- ✅ **CRUD Operations**: Each page must have add, edit, delete functionality
- ✅ **Data Persistence**: All data saves to localStorage
- ✅ **Progress Tracking**: Visual progress indicators and metrics
- ✅ **Status Management**: Items can have different states/statuses
- ✅ **Search/Filter**: Ability to find and organize items
- ✅ **Real-time Updates**: Changes reflect immediately in UI

### User Interface Requirements
- ✅ **Responsive Design**: Works on all screen sizes
- ✅ **Consistent Styling**: Uses design system components
- ✅ **Intuitive Navigation**: Clear page structure and flow
- ✅ **Visual Feedback**: Loading states, success messages, error handling
- ✅ **Accessibility**: Proper labels, keyboard navigation, screen reader support

### Data Structure Requirements
- ✅ **Domain-Specific Fields**: Relevant to your template's purpose
- ✅ **Unique Identifiers**: Each item has unique ID
- ✅ **Timestamps**: Created/updated dates for tracking
- ✅ **Status Fields**: Track completion and progress states
- ✅ **Flexible Schema**: Easy to extend with new fields

## Quality Checklist

### Uniqueness Verification
- ✅ No wedding-related content or terminology
- ✅ All data structures are domain-appropriate
- ✅ Functionality serves the template's specific purpose
- ✅ UI elements match the domain context

### Technical Validation
- ✅ All imports resolve correctly
- ✅ TypeScript compiles without errors
- ✅ Data persists across browser refreshes
- ✅ All CRUD operations work properly
- ✅ Context integration functions correctly

### User Experience Testing
- ✅ All navigation works between pages
- ✅ Forms submit and validate properly
- ✅ Progress calculations display correctly
- ✅ Empty states are handled gracefully
- ✅ Responsive design works on mobile

## Validation Steps

1. **Navigation Test**: Click through all 6 core pages from sidebar
2. **CRUD Test**: Add, edit, and delete items on each functional page
3. **Data Persistence Test**: Refresh browser and verify data remains
4. **Progress Test**: Complete items and verify metrics update
5. **Responsive Test**: Check all pages work on different screen sizes
6. **Build Test**: Run `npm run build` and ensure no errors

## Success Criteria

When complete, you should have:
- ✅ 6 unique core pages with domain-specific functionality
- ✅ Working CRUD operations on all functional pages
- ✅ Progress tracking and metrics display
- ✅ Data persistence across browser sessions
- ✅ Responsive design that works on all devices
- ✅ Clean navigation between all pages
- ✅ TypeScript compilation with no errors

**Output**: "STEP 4 COMPLETE" when all 6 core pages work with unique functionality.