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
import { CalendarIcon, ChevronLeft, ChevronRight, Car, DollarSign, Settings, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Define form schema with ALL fields optional
const carBuyingSetupSchema = z.object({
  // Step 1: Basic Information
  name: z.string().optional(),
  email: z.string().optional(),
  primaryGoal: z.string().optional(),
  timeline: z.string().optional(),
  
  // Step 2: Budget & Financing
  budgetRange: z.string().optional(),
  financing: z.string().optional(),
  downPayment: z.string().optional(),
  tradeInVehicle: z.string().optional(),
  
  // Step 3: Vehicle Preferences
  vehicleType: z.string().optional(),
  fuelType: z.string().optional(),
  features: z.string().optional(),
  brandPreference: z.string().optional(),
  
  // Step 4: Additional Context
  currentSituation: z.string().optional(),
  mustHaves: z.string().optional(),
  notes: z.string().optional(),
})

type CarBuyingSetupData = z.infer<typeof carBuyingSetupSchema>

const steps = [
  {
    id: 1,
    title: "Basic Information",
    description: "Tell us about yourself and your car buying goals",
    icon: FileText,
  },
  {
    id: 2,
    title: "Budget & Financing",
    description: "Your budget range and financing preferences",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Vehicle Preferences",
    description: "What type of vehicle are you looking for?",
    icon: Car,
  },
  {
    id: 4,
    title: "Additional Details",
    description: "Final context to personalize your experience",
    icon: Settings,
  },
]

interface CarBuyingSetupWizardProps {
  open: boolean
  onComplete: (data: CarBuyingSetupData) => void
}

export function CarBuyingSetupWizard({ open, onComplete }: CarBuyingSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<CarBuyingSetupData>({
    resolver: zodResolver(carBuyingSetupSchema),
    defaultValues: {
      name: "",
      email: "",
      primaryGoal: "",
      timeline: "",
      budgetRange: "",
      financing: "",
      downPayment: "",
      tradeInVehicle: "",
      vehicleType: "",
      fuelType: "",
      features: "",
      brandPreference: "",
      currentSituation: "",
      mustHaves: "",
      notes: "",
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

  const onSubmit = (data: CarBuyingSetupData) => {
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
                Let's start with some basic details about your car buying journey.
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
                        <SelectItem value="first-car">Buying my first car</SelectItem>
                        <SelectItem value="upgrade">Upgrading my current vehicle</SelectItem>
                        <SelectItem value="replacement">Replacing a broken vehicle</SelectItem>
                        <SelectItem value="additional">Getting an additional vehicle</SelectItem>
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
                        <SelectValue placeholder="When do you need to buy?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately (within 2 weeks)</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
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
              <h3 className="text-lg font-semibold">Budget & Financing</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your financial situation and preferences.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="budgetRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What's your budget range?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-15k">Under $15,000</SelectItem>
                        <SelectItem value="15k-25k">$15,000 - $25,000</SelectItem>
                        <SelectItem value="25k-35k">$25,000 - $35,000</SelectItem>
                        <SelectItem value="35k-50k">$35,000 - $50,000</SelectItem>
                        <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                        <SelectItem value="over-75k">Over $75,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Consider both down payment and monthly payments.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="financing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financing Preference</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How do you plan to pay?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash purchase</SelectItem>
                        <SelectItem value="bank-loan">Bank/Credit Union loan</SelectItem>
                        <SelectItem value="dealer-financing">Dealer financing</SelectItem>
                        <SelectItem value="lease">Lease</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="downPayment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Down Payment</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., $5,000 or 20%" {...field} />
                  </FormControl>
                  <FormDescription>
                    How much can you put down upfront?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tradeInVehicle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trade-in Vehicle</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 2018 Honda Civic" {...field} />
                  </FormControl>
                  <FormDescription>
                    Do you have a vehicle to trade in? (Year, Make, Model)
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
              <h3 className="text-lg font-semibold">Vehicle Preferences</h3>
              <p className="text-sm text-muted-foreground">
                What type of vehicle fits your needs and lifestyle?
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of vehicle?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="wagon">Wagon</SelectItem>
                        <SelectItem value="convertible">Convertible</SelectItem>
                        <SelectItem value="minivan">Minivan</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Type Preference</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What fuel type do you prefer?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gasoline">Gasoline</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="no-preference">No preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brandPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Preference</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Honda, Toyota, BMW (optional)" {...field} />
                  </FormControl>
                  <FormDescription>
                    Any specific brands you prefer or want to avoid?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Important Features</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., Apple CarPlay, AWD, heated seats, backup camera..." 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    What features are most important to you?
                  </FormDescription>
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
              <h3 className="text-lg font-semibold">Additional Details</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your situation and provide better guidance.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="currentSituation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Situation</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your current transportation situation..." 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Why are you buying a car now? What's your current situation?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mustHaves"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Must-Haves vs Nice-to-Haves</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Must have: reliability, good MPG. Nice to have: sunroof, premium audio..." 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    What are your deal-breakers vs things you'd like but could live without?
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
                      placeholder="Any other context, concerns, or questions about buying a car?" 
                      rows={3}
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

  const progress = (currentStep / totalSteps) * 100

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Car className="mr-2 h-6 w-6 text-primary" />
            Car Buying Setup Wizard
          </DialogTitle>
          <DialogDescription>
            Let's personalize your car buying experience with a quick setup.
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
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep - 1]?.title}</CardTitle>
                <CardDescription>
                  {steps[currentStep - 1]?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderStep()}
              </CardContent>
            </Card>

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