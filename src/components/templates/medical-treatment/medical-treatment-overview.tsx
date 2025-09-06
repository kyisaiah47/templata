"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar,
  Target,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  Pill,
  Stethoscope,
  FileText,
  Plus
} from "lucide-react"
import { useMedicalTreatment, getMedicalTreatmentDisplayData } from "@/contexts/medical-treatment-context"

export function MedicalTreatmentOverview() {
  const { medicalData } = useMedicalTreatment()
  const displayData = getMedicalTreatmentDisplayData(medicalData)
  
  // Calculate medical-specific metrics
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    appointmentsCompleted: 0,
    medicationsActive: 0,
    treatmentDays: 0,
    upcomingTasks: 0,
    symptomsTracked: 0
  })

  useEffect(() => {
    // Load data from localStorage and calculate metrics
    const appointments = JSON.parse(localStorage.getItem('medical-treatment-appointments') || '[]')
    const medications = JSON.parse(localStorage.getItem('medical-treatment-medications') || '[]')
    const symptoms = JSON.parse(localStorage.getItem('medical-treatment-symptoms') || '[]')
    const treatmentPlans = JSON.parse(localStorage.getItem('medical-treatment-plans') || '[]')
    
    const completedAppointments = appointments.filter((apt: any) => apt.status === 'completed').length
    const activeMedications = medications.filter((med: any) => med.status === 'active').length
    const recentSymptoms = symptoms.filter((sym: any) => {
      const symDate = new Date(sym.date)
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return symDate >= weekAgo
    }).length
    
    const totalTasks = appointments.length + medications.length + treatmentPlans.length
    const completedTasks = appointments.filter((apt: any) => apt.status === 'completed').length + 
                          medications.filter((med: any) => med.status === 'completed').length + 
                          treatmentPlans.filter((plan: any) => plan.status === 'completed').length
    
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
    
    setMetrics({
      totalProgress: Math.round(progress),
      appointmentsCompleted: completedAppointments,
      medicationsActive: activeMedications,
      treatmentDays: displayData.daysInTreatment,
      upcomingTasks: appointments.filter((apt: any) => apt.status === 'scheduled').length,
      symptomsTracked: recentSymptoms
    })
  }, [displayData.daysInTreatment])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Medical Treatment Dashboard</h1>
          <p className="text-muted-foreground">Track your health journey and treatment progress</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
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
            <CardTitle className="text-sm font-medium">Treatment Days</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.treatmentDays}</div>
            <p className="text-xs text-muted-foreground">days since start</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.medicationsActive}</div>
            <p className="text-xs text-muted-foreground">current prescriptions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Symptoms Tracked</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.symptomsTracked}</div>
            <p className="text-xs text-muted-foreground">this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest medical updates and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Started new medication tracking</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Completed appointment with {displayData.primaryDoctor}</span>
                <Badge variant="outline">Yesterday</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Updated symptoms tracker</span>
                <Badge variant="outline">2 days ago</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm">Received test results</span>
                <Badge variant="outline">3 days ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>What needs attention next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Take evening medication</span>
                <Badge variant="outline">Due Today</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Follow-up appointment</span>
                <Badge variant="secondary">This Week</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Update symptom log</span>
                <Badge variant="outline">Overdue</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Refill prescription</span>
                <Badge variant="secondary">Next Week</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Info Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Treatment Overview</CardTitle>
          <CardDescription>Current treatment details for {displayData.patientName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Condition</p>
              <p className="text-lg">{displayData.condition}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Primary Doctor</p>
              <p className="text-lg">{displayData.primaryDoctor}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Treatment Start</p>
              <p className="text-lg">{displayData.startDate?.toLocaleDateString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your medical treatment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Appointment</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Activity className="h-6 w-6" />
              <span className="text-sm">Log Symptoms</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Pill className="h-6 w-6" />
              <span className="text-sm">Add Medication</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">View Records</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}