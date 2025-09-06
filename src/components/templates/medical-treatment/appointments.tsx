"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Trash2,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  MapPin
} from "lucide-react"
import { useMedicalTreatment } from "@/contexts/medical-treatment-context"

interface Appointment {
  id: string
  title: string
  doctorName: string
  specialty: string
  appointmentType: 'consultation' | 'follow-up' | 'test' | 'procedure' | 'therapy'
  date: Date
  time: string
  duration: number
  location: string
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled'
  notes: string
  preparationInstructions: string
  results: string
  createdAt: Date
  updatedAt: Date
}

export function Appointments() {
  const { medicalData } = useMedicalTreatment()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isAddingAppointment, setIsAddingAppointment] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    doctorName: medicalData?.primaryDoctor || '',
    specialty: '',
    appointmentType: 'consultation' as Appointment['appointmentType'],
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    duration: 60,
    location: medicalData?.hospitalClinic || '',
    preparationInstructions: '',
    notes: '',
  })

  useEffect(() => {
    const savedAppointments = localStorage.getItem('medical-treatment-appointments')
    if (savedAppointments) {
      const parsedAppointments = JSON.parse(savedAppointments).map((apt: any) => ({
        ...apt,
        date: new Date(apt.date),
        createdAt: new Date(apt.createdAt),
        updatedAt: new Date(apt.updatedAt)
      }))
      setAppointments(parsedAppointments)
    }
  }, [])

  const saveAppointments = (newAppointments: Appointment[]) => {
    setAppointments(newAppointments)
    localStorage.setItem('medical-treatment-appointments', JSON.stringify(newAppointments))
  }

  const addAppointment = () => {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...formData,
      date: new Date(formData.date),
      status: 'scheduled',
      results: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveAppointments([...appointments, newAppointment])
    resetForm()
    setIsAddingAppointment(false)
  }

  const updateAppointment = (id: string, updates: Partial<Appointment>) => {
    const updatedAppointments = appointments.map(apt => 
      apt.id === id 
        ? { ...apt, ...updates, updatedAt: new Date() }
        : apt
    )
    saveAppointments(updatedAppointments)
  }

  const deleteAppointment = (id: string) => {
    const filteredAppointments = appointments.filter(apt => apt.id !== id)
    saveAppointments(filteredAppointments)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      doctorName: medicalData?.primaryDoctor || '',
      specialty: '',
      appointmentType: 'consultation',
      date: new Date().toISOString().split('T')[0],
      time: '09:00',
      duration: 60,
      location: medicalData?.hospitalClinic || '',
      preparationInstructions: '',
      notes: '',
    })
  }

  const upcomingAppointments = appointments.filter(apt => 
    apt.date >= new Date() && apt.status === 'scheduled'
  ).length

  const completedAppointments = appointments.filter(apt => apt.status === 'completed').length
  const totalAppointments = appointments.length
  const completionRate = totalAppointments > 0 ? (completedAppointments / totalAppointments) * 100 : 0

  const getTypeColor = (type: string) => {
    const colors = {
      consultation: 'bg-blue-100 text-blue-800',
      'follow-up': 'bg-green-100 text-green-800',
      test: 'bg-yellow-100 text-yellow-800',
      procedure: 'bg-red-100 text-red-800',
      therapy: 'bg-purple-100 text-purple-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'scheduled':
        return <Clock className="h-4 w-4 text-blue-600" />
      case 'cancelled':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case 'rescheduled':
        return <Calendar className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const isUpcoming = (date: Date) => {
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays >= 0 && diffDays <= 7
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Schedule and track your medical appointments</p>
        </div>
        <Dialog open={isAddingAppointment} onOpenChange={setIsAddingAppointment}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
              <DialogDescription>
                Add a new medical appointment to your calendar.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Appointment Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Annual Check-up, MRI Scan"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="doctorName">Doctor Name</Label>
                  <Input
                    id="doctorName"
                    value={formData.doctorName}
                    onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                    placeholder="Dr. Smith"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="specialty">Specialty</Label>
                  <Input
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    placeholder="e.g., Cardiology, Oncology"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="appointmentType">Appointment Type</Label>
                <Select
                  value={formData.appointmentType}
                  onValueChange={(value) => setFormData({...formData, appointmentType: value as Appointment['appointmentType']})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="follow-up">Follow-up</SelectItem>
                    <SelectItem value="test">Test/Lab Work</SelectItem>
                    <SelectItem value="procedure">Procedure</SelectItem>
                    <SelectItem value="therapy">Therapy Session</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration (min)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                    placeholder="60"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Hospital, clinic, or address"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="preparationInstructions">Preparation Instructions</Label>
                <Textarea
                  id="preparationInstructions"
                  value={formData.preparationInstructions}
                  onChange={(e) => setFormData({...formData, preparationInstructions: e.target.value})}
                  placeholder="Fasting required, bring ID, etc."
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
              <Button type="submit" onClick={addAppointment}>
                Schedule Appointment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments}</div>
            <p className="text-xs text-muted-foreground">scheduled appointments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedAppointments}</div>
            <p className="text-xs text-muted-foreground">out of {totalAppointments} total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completionRate.toFixed(0)}%</div>
            <Progress value={completionRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {upcomingAppointments > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming This Week</CardTitle>
            <CardDescription>Your scheduled appointments for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {appointments
                .filter(apt => apt.status === 'scheduled' && isUpcoming(apt.date))
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map(apt => (
                  <div key={apt.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(apt.status)}
                      <div>
                        <p className="font-medium">{apt.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {apt.doctorName} • {apt.date.toLocaleDateString()} at {apt.time}
                        </p>
                      </div>
                    </div>
                    <Badge className={getTypeColor(apt.appointmentType)}>
                      {apt.appointmentType}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>All Appointments</CardTitle>
          <CardDescription>Complete history of your medical appointments</CardDescription>
        </CardHeader>
        <CardContent>
          {appointments.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No appointments scheduled yet. Add your first appointment!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your appointment history</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Appointment</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments
                  .sort((a, b) => b.date.getTime() - a.date.getTime())
                  .map((apt) => (
                    <TableRow key={apt.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{apt.title}</p>
                          <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                        </div>
                      </TableCell>
                      <TableCell>{apt.doctorName}</TableCell>
                      <TableCell>
                        <Badge className={getTypeColor(apt.appointmentType)}>
                          {apt.appointmentType}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{apt.date.toLocaleDateString()}</p>
                          <p className="text-sm text-muted-foreground">{apt.time}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm truncate max-w-xs">{apt.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(apt.status)}
                          <span className="text-sm capitalize">{apt.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateAppointment(apt.id, { 
                              status: apt.status === 'completed' ? 'scheduled' : 'completed'
                            })}
                          >
                            {apt.status === 'completed' ? 'Reschedule' : 'Complete'}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteAppointment(apt.id)}
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