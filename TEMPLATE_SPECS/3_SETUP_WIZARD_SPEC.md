# PROMPT 3: Setup Wizard Specification

## Overview
Create the setup wizard component for initial data collection that appears on first visit and personalizes the template experience for the user.

## Study Reference File
Examine the wedding template setup wizard structure:
- `/src/components/templates/wedding/wedding-setup-wizard.tsx`
- `/src/contexts/wedding-context.tsx` (for data structure patterns)

## Required Implementation

### 1. Create Setup Wizard Component: `/src/components/templates/[template-name]/[template-name]-setup-wizard.tsx`

```tsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTemplateName } from "@/contexts/[template-name]-context"

// Define form schema with ALL fields optional
const templateNameSetupSchema = z.object({
  // Step 1: Basic Information
  name: z.string().optional(),
  email: z.string().optional(),
  primaryGoal: z.string().optional(),
  timeline: z.string().optional(),
  
  // Step 2: Domain-specific fields
  // Add 4-6 fields relevant to your template
  domainField1: z.string().optional(),
  domainField2: z.date().optional(),
  domainField3: z.string().optional(),
  
  // Step 3: Preferences
  preferenceField1: z.string().optional(),
  preferenceField2: z.string().optional(),
  
  // Step 4: Additional Context
  contextField1: z.string().optional(),
  contextField2: z.string().optional(),
  notes: z.string().optional(),
})

type TemplateNameSetupData = z.infer<typeof templateNameSetupSchema>

interface TemplateNameSetupWizardProps {
  open: boolean
  onComplete: (data: TemplateNameSetupData) => void
}

export function TemplateNameSetupWizard({ open, onComplete }: TemplateNameSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<TemplateNameSetupData>({
    resolver: zodResolver(templateNameSetupSchema),
    defaultValues: {
      name: "",
      email: "",
      primaryGoal: "",
      timeline: "",
      // Initialize all optional fields
    },
  })

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: TemplateNameSetupData) => {
    onComplete(data)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <p className="text-sm text-muted-foreground">
                Let's start with some basic details about your [domain] journey.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This helps us personalize your experience.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="primaryGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Goal</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What's your main objective?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="goal1">Domain-specific goal 1</SelectItem>
                        <SelectItem value="goal2">Domain-specific goal 2</SelectItem>
                        <SelectItem value="goal3">Domain-specific goal 3</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you plan to complete this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="12months+">12+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Step 2 Title</h3>
              <p className="text-sm text-muted-foreground">
                Step 2 description specific to your domain.
              </p>
            </div>
            
            {/* Add 3-4 domain-specific fields */}
            <FormField
              control={form.control}
              name="domainField1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domain Field 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Domain-specific placeholder" {...field} />
                  </FormControl>
                  <FormDescription>
                    Explanation of why this field is important.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date picker example for domainField2 */}
            <FormField
              control={form.control}
              name="domainField2"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Important Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When is your target date for this milestone?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Step 3 Title</h3>
              <p className="text-sm text-muted-foreground">
                Step 3 description focusing on preferences.
              </p>
            </div>
            
            {/* Add preference fields */}
            <FormField
              control={form.control}
              name="preferenceField1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preference 1</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Final Details</h3>
              <p className="text-sm text-muted-foreground">
                Any additional context or notes to personalize your experience.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific goals, concerns, or context you'd like to share?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This will help us provide more relevant guidance.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Welcome to [Template Display Name]</DialogTitle>
          <DialogDescription>
            Let's personalize your experience with a quick setup.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {renderStep()}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button type="submit">
                  Complete Setup
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
```

### 2. Update Context File: `/src/contexts/[template-name]-context.tsx`

Update your context to handle the wizard data and show/hide logic:

```tsx
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Extend your existing interface to include wizard fields
interface TemplateNameData {
  // Existing fields
  name: string
  email: string
  
  // Add wizard fields that match your schema
  primaryGoal: string
  timeline: string
  domainField1: string
  domainField2: Date | undefined
  domainField3: string
  preferenceField1: string
  preferenceField2: string
  contextField1: string
  contextField2: string
  notes: string
  
  // Add setup tracking
  setupCompleted: boolean
}

interface TemplateNameContextType {
  data: TemplateNameData
  updateData: (newData: Partial<TemplateNameData>) => void
  resetData: () => void
  showSetupWizard: boolean
  setShowSetupWizard: (show: boolean) => void
}

const defaultData: TemplateNameData = {
  // Initialize all fields with empty values
  name: "",
  email: "",
  primaryGoal: "",
  timeline: "",
  domainField1: "",
  domainField2: undefined,
  domainField3: "",
  preferenceField1: "",
  preferenceField2: "",
  contextField1: "",
  contextField2: "",
  notes: "",
  setupCompleted: false,
}

const STORAGE_KEY = '[template-name]-data'

const TemplateNameContext = createContext<TemplateNameContextType | undefined>(undefined)

export function TemplateNameProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<TemplateNameData>(defaultData)
  const [showSetupWizard, setShowSetupWizard] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setData({ ...defaultData, ...parsed })
        setShowSetupWizard(!parsed.setupCompleted)
      } catch (error) {
        console.error('Failed to parse saved data:', error)
        setShowSetupWizard(true)
      }
    } else {
      setShowSetupWizard(true)
    }
  }, [])

  const updateData = (newData: Partial<TemplateNameData>) => {
    setData(prev => {
      const updated = { ...prev, ...newData }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const resetData = () => {
    setData(defaultData)
    localStorage.removeItem(STORAGE_KEY)
    setShowSetupWizard(true)
  }

  return (
    <TemplateNameContext.Provider value={{ 
      data, 
      updateData, 
      resetData,
      showSetupWizard,
      setShowSetupWizard 
    }}>
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

### 3. Update Overview Component: `/src/components/templates/[template-name]/[template-name]-overview.tsx`

Integrate the setup wizard with your main app:

```tsx
"use client"

import { TemplateNameSidebarLeft } from "./[template-name]-sidebar-left"
import { TemplateNameSetupWizard } from "./[template-name]-setup-wizard"
import { useTemplateName } from "@/contexts/[template-name]-context"

export function TemplateNameOverview() {
  const { showSetupWizard, setShowSetupWizard, updateData } = useTemplateName()

  const handleSetupComplete = (wizardData: any) => {
    updateData({
      ...wizardData,
      setupCompleted: true,
    })
    setShowSetupWizard(false)
  }

  return (
    <>
      <div className="flex h-screen">
        <TemplateNameSidebarLeft />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-4">[Template Display Name] Overview</h1>
          <p className="text-muted-foreground">Overview Coming Soon</p>
        </main>
      </div>

      <TemplateNameSetupWizard
        open={showSetupWizard}
        onComplete={handleSetupComplete}
      />
    </>
  )
}
```

## Domain-Specific Step Examples

### Baby Planning Template
```
Step 1: Basic Info (due date, partner name, baby name ideas)
Step 2: Healthcare (doctor, hospital, insurance info)
Step 3: Preparation (nursery timeline, budget range, childcare needs)
Step 4: Preferences (birth plan basics, feeding preferences, parenting style)
```

### Home Buying Template
```
Step 1: Basic Info (budget range, timeline, current housing situation)
Step 2: Financing (pre-approval status, loan type, down payment)
Step 3: Preferences (house type, location, must-haves vs nice-to-haves)
Step 4: Team (realtor contact, lender info, attorney if needed)
```

### Job Search Template
```
Step 1: Basic Info (current role, target role, timeline)
Step 2: Career Goals (industry preferences, salary expectations, location)
Step 3: Experience (key skills, years of experience, education)
Step 4: Strategy (networking approach, application goals, interview prep needs)
```

### Fitness Journey Template
```
Step 1: Basic Info (current fitness level, primary goal, timeline)
Step 2: Health Status (any limitations, previous injuries, medical clearance)
Step 3: Preferences (workout types, schedule availability, equipment access)
Step 4: Support (trainer interest, accountability needs, tracking preferences)
```

## Form Field Guidelines

### Field Types to Use
- **Text Input**: Names, contact info, free-form responses
- **Select Dropdown**: Predefined options (goals, timelines, preferences)
- **Date Picker**: Target dates, deadlines, important milestones
- **Textarea**: Notes, additional context, longer responses

### Validation Requirements
- ✅ ALL fields must be optional using `z.string().optional()` and `z.date().optional()`
- ✅ No required validation - users should be able to skip any step
- ✅ Form should submit successfully even if completely empty
- ✅ Graceful handling of undefined/empty values

### Step Structure Requirements
- **4 steps total** - no more, no less
- **3-4 fields per step** - focused and not overwhelming
- **Logical progression** - basic info → domain specifics → preferences → context
- **Clear step titles and descriptions** - users should understand the purpose

## Quality Checklist

### Functionality
- ✅ Wizard appears on first visit to template
- ✅ All form fields work correctly
- ✅ Next/Previous navigation works
- ✅ Progress bar updates correctly
- ✅ Data saves to localStorage on completion
- ✅ Setup wizard doesn't reappear after completion

### User Experience
- ✅ Clear step progression (1/4, 2/4, etc.)
- ✅ Intuitive form layout with proper labels
- ✅ Helpful descriptions for each field
- ✅ Responsive design works on mobile
- ✅ Easy to skip or go back to previous steps

### Technical Requirements
- ✅ Proper TypeScript types throughout
- ✅ Form validation with Zod schema
- ✅ Integration with context provider
- ✅ localStorage persistence working
- ✅ Build passes without errors

## Validation Steps

1. **Initial Load Test**: Visit template for first time - wizard should appear
2. **Navigation Test**: Go through all 4 steps using Next/Previous buttons
3. **Form Test**: Fill out various fields and verify they save properly
4. **Completion Test**: Complete wizard and verify it closes and doesn't reappear
5. **Data Test**: Check that data persists in localStorage and context
6. **Reset Test**: Clear localStorage and verify wizard reappears

## Success Criteria

When complete, you should have:
- ✅ Working 4-step setup wizard with domain-appropriate fields
- ✅ Proper integration with context and localStorage
- ✅ Wizard appears on first visit and disappears after completion
- ✅ All form fields working correctly with no required validation
- ✅ Clean TypeScript build with no errors
- ✅ Responsive design that works on all devices

**Output**: "STEP 3 COMPLETE" when wizard works and saves data properly.