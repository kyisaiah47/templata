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
  DialogFooter,
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
import { CalendarIcon, ChevronLeft, ChevronRight, Heart, User, Stethoscope, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const medicalTreatmentSetupSchema = z.object({
  // Step 1: Basic Information
  patientName: z.string().optional(),
  dateOfBirth: z.date().optional(),
  condition: z.string().optional(),
  treatmentGoal: z.string().optional(),
  
  // Step 2: Healthcare Team
  primaryDoctor: z.string().optional(),
  hospitalClinic: z.string().optional(),
  insurance: z.string().optional(),
  emergencyContact: z.string().optional(),
  
  // Step 3: Treatment Details
  treatmentType: z.string().optional(),
  startDate: z.date().optional(),
  frequency: z.string().optional(),
  
  // Step 4: Preferences & Notes
  communicationPreference: z.string().optional(),
  specialNeeds: z.string().optional(),
  notes: z.string().optional(),
})

type MedicalTreatmentSetupData = z.infer<typeof medicalTreatmentSetupSchema>

const steps = [
  {
    id: 1,
    title: "Basic Information",
    description: "Tell us about yourself and your condition",
    icon: User,
  },
  {
    id: 2,
    title: "Healthcare Team",
    description: "Your doctors, hospital, and emergency contacts",
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Treatment Details",
    description: "Treatment type, schedule, and timeline",
    icon: Heart,
  },
  {
    id: 4,
    title: "Preferences & Notes",
    description: "Communication preferences and additional information",
    icon: FileText,
  },
]

interface MedicalTreatmentSetupWizardProps {
  open: boolean
  onComplete: (data: MedicalTreatmentSetupData) => void
}

export function MedicalTreatmentSetupWizard({ open, onComplete }: MedicalTreatmentSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [allFormData, setAllFormData] = useState<Partial<MedicalTreatmentSetupData>>({})
  const totalSteps = steps.length

  const form = useForm<MedicalTreatmentSetupData>({
    resolver: zodResolver(medicalTreatmentSetupSchema),
    defaultValues: allFormData,
  })

  const nextStep = async () => {
    const currentData = form.getValues()
    const updatedData = { ...allFormData, ...currentData }
    setAllFormData(updatedData)

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      form.reset(updatedData)
    } else {
      onComplete(updatedData)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const currentData = form.getValues()
      setAllFormData({ ...allFormData, ...currentData })
      setCurrentStep(currentStep - 1)
      form.reset({ ...allFormData, ...currentData })
    }
  }

  const onSubmit = () => {
    nextStep()
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <p className="text-sm text-muted-foreground">
                Let&apos;s start with some basic details about your medical treatment journey.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter patient&apos;s name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This helps us personalize your treatment plan.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
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
                        disabled={(date) => date > new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical Condition</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Diabetes, Heart Disease, Cancer" {...field} />
                  </FormControl>
                  <FormDescription>
                    What condition are you receiving treatment for?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="treatmentGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Goal</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What&apos;s your primary treatment goal?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cure">Complete cure/recovery</SelectItem>
                        <SelectItem value="management">Manage symptoms</SelectItem>
                        <SelectItem value="prevention">Prevent progression</SelectItem>
                        <SelectItem value="palliative">Comfort and quality of life</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
              <h3 className="text-lg font-semibold">Healthcare Team</h3>
              <p className="text-sm text-muted-foreground">
                Information about your medical providers and support network.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="primaryDoctor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Doctor/Specialist</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr. Smith, Oncology" {...field} />
                  </FormControl>
                  <FormDescription>
                    Name and specialty of your main treating physician.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hospitalClinic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital/Clinic</FormLabel>
                  <FormControl>
                    <Input placeholder="City General Hospital" {...field} />
                  </FormControl>
                  <FormDescription>
                    Where you receive most of your treatment.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="insurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insurance Provider</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your insurance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="medicaid">Medicaid</SelectItem>
                        <SelectItem value="private">Private Insurance</SelectItem>
                        <SelectItem value="employer">Employer Provided</SelectItem>
                        <SelectItem value="none">No Insurance</SelectItem>
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
              name="emergencyContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="Name and phone number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Someone to contact in case of emergency.
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
              <h3 className="text-lg font-semibold">Treatment Details</h3>
              <p className="text-sm text-muted-foreground">
                Information about your treatment plan and schedule.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="treatmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of treatment?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medication">Medication/Drug therapy</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                        <SelectItem value="chemotherapy">Chemotherapy</SelectItem>
                        <SelectItem value="radiation">Radiation therapy</SelectItem>
                        <SelectItem value="physical-therapy">Physical therapy</SelectItem>
                        <SelectItem value="dialysis">Dialysis</SelectItem>
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
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Treatment Start Date</FormLabel>
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
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When did or will your treatment begin?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Frequency</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How often do you receive treatment?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="bi-weekly">Every 2 weeks</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="as-needed">As needed</SelectItem>
                        <SelectItem value="one-time">One-time treatment</SelectItem>
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
              <h3 className="text-lg font-semibold">Preferences & Notes</h3>
              <p className="text-sm text-muted-foreground">
                Communication preferences and additional information to help us support you.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="communicationPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Communication Preference</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like to receive updates?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone calls</SelectItem>
                        <SelectItem value="text">Text messages</SelectItem>
                        <SelectItem value="portal">Patient portal</SelectItem>
                        <SelectItem value="mail">Physical mail</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Needs or Accommodations</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Mobility assistance, dietary restrictions, language interpretation, etc." 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Any special accommodations you need during treatment.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any other information, concerns, or goals you&apos;d like to share?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This will help us provide more relevant guidance and support.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-primary" />
                  Ready to Begin!
                </CardTitle>
                <CardDescription>
                  You&apos;re all set to start managing your medical treatment journey with personalized guidance and support.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Heart className="mr-2 h-6 w-6 text-primary" />
            Medical Treatment Setup
          </DialogTitle>
          <DialogDescription>
            Let&apos;s personalize your medical treatment management experience with a quick setup.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {steps.map((step) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id

            return (
              <div
                key={step.id}
                className={cn(
                  "p-3 rounded-lg border text-center transition-colors",
                  isActive && "border-primary bg-primary/5",
                  isCompleted && "border-primary bg-primary/10",
                  !isActive && !isCompleted && "border-border bg-muted/30"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 mx-auto mb-2",
                    isActive && "text-primary",
                    isCompleted && "text-primary",
                    !isActive && !isCompleted && "text-muted-foreground"
                  )}
                />
                <p className="text-xs font-medium">{step.title}</p>
              </div>
            )
          })}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="min-h-96">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  {steps[currentStep - 1]?.title}
                </h3>
                <p className="text-muted-foreground">
                  {steps[currentStep - 1]?.description}
                </p>
              </div>
              {renderStep()}
            </div>

            <DialogFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <Button type="submit">
                {currentStep === totalSteps ? (
                  <>
                    Complete Setup
                    <Heart className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}