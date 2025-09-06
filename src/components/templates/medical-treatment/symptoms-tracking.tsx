"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
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
import { 
  Plus,
  Trash2,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  AlertCircle
} from "lucide-react"
import { useMedicalTreatment } from "@/contexts/medical-treatment-context"

interface SymptomEntry {
  id: string
  symptomName: string
  severity: number // 1-10 scale
  duration: string
  frequency: 'once' | 'occasional' | 'frequent' | 'constant'
  triggers: string[]
  description: string
  bodyPart: string
  date: Date
  time: string
  mood: number // 1-10 scale
  sleepQuality: number // 1-10 scale
  painLocation: string[]
  medications: string[]
  weather: string
  activities: string[]
  notes: string
  createdAt: Date
  updatedAt: Date
}

export function SymptomsTracking() {
  const { medicalData } = useMedicalTreatment()
  const [symptoms, setSymptoms] = useState<SymptomEntry[]>([])
  const [isAddingSymptom, setIsAddingSymptom] = useState(false)

  const [formData, setFormData] = useState({
    symptomName: '',
    severity: [5],
    duration: '',
    frequency: 'once' as SymptomEntry['frequency'],
    triggers: '',
    description: '',
    bodyPart: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    mood: [5],
    sleepQuality: [7],
    painLocation: '',
    medications: '',
    weather: '',
    activities: '',
    notes: '',
  })

  useEffect(() => {
    const savedSymptoms = localStorage.getItem('medical-treatment-symptoms')
    if (savedSymptoms) {
      const parsedSymptoms = JSON.parse(savedSymptoms).map((symptom: any) => ({
        ...symptom,
        date: new Date(symptom.date),
        createdAt: new Date(symptom.createdAt),
        updatedAt: new Date(symptom.updatedAt)
      }))
      setSymptoms(parsedSymptoms)
    }
  }, [])

  const saveSymptoms = (newSymptoms: SymptomEntry[]) => {
    setSymptoms(newSymptoms)
    localStorage.setItem('medical-treatment-symptoms', JSON.stringify(newSymptoms))
  }

  const addSymptom = () => {
    const newSymptom: SymptomEntry = {
      id: Date.now().toString(),
      symptomName: formData.symptomName,
      severity: formData.severity[0],
      duration: formData.duration,
      frequency: formData.frequency,
      triggers: formData.triggers.split(',').map(t => t.trim()).filter(t => t),
      description: formData.description,
      bodyPart: formData.bodyPart,
      date: new Date(formData.date),
      time: formData.time,
      mood: formData.mood[0],
      sleepQuality: formData.sleepQuality[0],
      painLocation: formData.painLocation.split(',').map(p => p.trim()).filter(p => p),
      medications: formData.medications.split(',').map(m => m.trim()).filter(m => m),
      weather: formData.weather,
      activities: formData.activities.split(',').map(a => a.trim()).filter(a => a),
      notes: formData.notes,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveSymptoms([...symptoms, newSymptom])
    resetForm()
    setIsAddingSymptom(false)
  }

  const deleteSymptom = (id: string) => {
    const filteredSymptoms = symptoms.filter(symptom => symptom.id !== id)
    saveSymptoms(filteredSymptoms)
  }

  const resetForm = () => {
    setFormData({
      symptomName: '',
      severity: [5],
      duration: '',
      frequency: 'once',
      triggers: '',
      description: '',
      bodyPart: '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      mood: [5],
      sleepQuality: [7],
      painLocation: '',
      medications: '',
      weather: '',
      activities: '',
      notes: '',
    })
  }

  // Analytics
  const thisWeekSymptoms = symptoms.filter(symptom => {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return symptom.date >= weekAgo
  }).length

  const averageSeverity = symptoms.length > 0 
    ? symptoms.reduce((sum, symptom) => sum + symptom.severity, 0) / symptoms.length 
    : 0

  const mostCommonSymptom = symptoms.length > 0 
    ? symptoms.reduce((acc, symptom) => {
        acc[symptom.symptomName] = (acc[symptom.symptomName] || 0) + 1
        return acc
      }, {} as Record<string, number>)
    : {}

  const topSymptom = Object.entries(mostCommonSymptom)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || 'None'

  const getSeverityColor = (severity: number) => {
    if (severity <= 3) return 'text-green-600'
    if (severity <= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getSeverityBadge = (severity: number) => {
    if (severity <= 3) return { variant: 'secondary' as const, label: 'Mild' }
    if (severity <= 6) return { variant: 'outline' as const, label: 'Moderate' }
    return { variant: 'destructive' as const, label: 'Severe' }
  }

  const getFrequencyColor = (frequency: string) => {
    const colors = {
      once: 'bg-green-100 text-green-800',
      occasional: 'bg-yellow-100 text-yellow-800',
      frequent: 'bg-orange-100 text-orange-800',
      constant: 'bg-red-100 text-red-800'
    }
    return colors[frequency as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getTrendIcon = () => {
    if (symptoms.length < 2) return <Minus className="h-4 w-4 text-gray-400" />
    
    const recent = symptoms.slice(-7) // Last 7 entries
    const older = symptoms.slice(-14, -7) // Previous 7 entries
    
    const recentAvg = recent.reduce((sum, s) => sum + s.severity, 0) / recent.length
    const olderAvg = older.length > 0 ? older.reduce((sum, s) => sum + s.severity, 0) / older.length : recentAvg
    
    if (recentAvg > olderAvg) return <TrendingUp className="h-4 w-4 text-red-500" />
    if (recentAvg < olderAvg) return <TrendingDown className="h-4 w-4 text-green-500" />
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Symptoms Tracking</h1>
          <p className="text-muted-foreground">Monitor and track your symptoms to identify patterns</p>
        </div>
        <Dialog open={isAddingSymptom} onOpenChange={setIsAddingSymptom}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Log Symptom
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Log New Symptom</DialogTitle>
              <DialogDescription>
                Record a symptom to track patterns and triggers over time.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="symptomName">Symptom Name</Label>
                  <Input
                    id="symptomName"
                    value={formData.symptomName}
                    onChange={(e) => setFormData({...formData, symptomName: e.target.value})}
                    placeholder="e.g., Headache, Nausea, Fatigue"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bodyPart">Body Part/Location</Label>
                  <Input
                    id="bodyPart"
                    value={formData.bodyPart}
                    onChange={(e) => setFormData({...formData, bodyPart: e.target.value})}
                    placeholder="e.g., Head, Stomach, Chest"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="severity">Severity (1 = Mild, 10 = Severe)</Label>
                <div className="px-3">
                  <Slider
                    id="severity"
                    min={1}
                    max={10}
                    step={1}
                    value={formData.severity}
                    onValueChange={(value) => setFormData({...formData, severity: value})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Mild (1)</span>
                    <span className="font-medium">Current: {formData.severity[0]}</span>
                    <span>Severe (10)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    placeholder="e.g., 2 hours, All day"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select
                    value={formData.frequency}
                    onValueChange={(value) => setFormData({...formData, frequency: value as SymptomEntry['frequency']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once</SelectItem>
                      <SelectItem value="occasional">Occasional</SelectItem>
                      <SelectItem value="frequent">Frequent</SelectItem>
                      <SelectItem value="constant">Constant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe the symptom in detail..."
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="triggers">Possible Triggers (comma-separated)</Label>
                <Input
                  id="triggers"
                  value={formData.triggers}
                  onChange={(e) => setFormData({...formData, triggers: e.target.value})}
                  placeholder="e.g., Stress, Certain foods, Weather"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mood">Mood (1 = Poor, 10 = Excellent)</Label>
                <div className="px-3">
                  <Slider
                    id="mood"
                    min={1}
                    max={10}
                    step={1}
                    value={formData.mood}
                    onValueChange={(value) => setFormData({...formData, mood: value})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Poor (1)</span>
                    <span className="font-medium">Current: {formData.mood[0]}</span>
                    <span>Excellent (10)</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="sleepQuality">Sleep Quality Last Night (1 = Poor, 10 = Excellent)</Label>
                <div className="px-3">
                  <Slider
                    id="sleepQuality"
                    min={1}
                    max={10}
                    step={1}
                    value={formData.sleepQuality}
                    onValueChange={(value) => setFormData({...formData, sleepQuality: value})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Poor (1)</span>
                    <span className="font-medium">Current: {formData.sleepQuality[0]}</span>
                    <span>Excellent (10)</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="medications">Medications Taken (comma-separated)</Label>
                <Input
                  id="medications"
                  value={formData.medications}
                  onChange={(e) => setFormData({...formData, medications: e.target.value})}
                  placeholder="e.g., Ibuprofen, Prescribed medication"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="weather">Weather</Label>
                  <Input
                    id="weather"
                    value={formData.weather}
                    onChange={(e) => setFormData({...formData, weather: e.target.value})}
                    placeholder="e.g., Rainy, Hot, Cold"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="activities">Recent Activities (comma-separated)</Label>
                  <Input
                    id="activities"
                    value={formData.activities}
                    onChange={(e) => setFormData({...formData, activities: e.target.value})}
                    placeholder="e.g., Exercise, Work, Travel"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any other relevant information..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addSymptom}>
                Log Symptom
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{thisWeekSymptoms}</div>
            <p className="text-xs text-muted-foreground">symptoms logged</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Severity</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getSeverityColor(averageSeverity)}`}>
              {averageSeverity.toFixed(1)}/10
            </div>
            <p className="text-xs text-muted-foreground">across all symptoms</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Common</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold truncate">{topSymptom}</div>
            <p className="text-xs text-muted-foreground">
              {mostCommonSymptom[topSymptom] || 0} occurrences
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trend</CardTitle>
            {getTrendIcon()}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {symptoms.length < 2 ? 'N/A' : 'Tracking'}
            </div>
            <p className="text-xs text-muted-foreground">recent trend</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Symptom History</CardTitle>
          <CardDescription>Your complete symptom log with patterns and analysis</CardDescription>
        </CardHeader>
        <CardContent>
          {symptoms.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No symptoms logged yet. Start tracking to identify patterns!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Complete symptom tracking history</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date/Time</TableHead>
                  <TableHead>Symptom</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Triggers</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {symptoms
                  .sort((a, b) => b.date.getTime() - a.date.getTime())
                  .map((symptom) => {
                    const severityBadge = getSeverityBadge(symptom.severity)
                    return (
                      <TableRow key={symptom.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{symptom.date.toLocaleDateString()}</p>
                            <p className="text-sm text-muted-foreground">{symptom.time}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{symptom.symptomName}</p>
                            <p className="text-sm text-muted-foreground">{symptom.bodyPart}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Badge variant={severityBadge.variant}>{severityBadge.label}</Badge>
                            <span className="text-sm text-muted-foreground">{symptom.severity}/10</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getFrequencyColor(symptom.frequency)}>
                            {symptom.frequency}
                          </Badge>
                        </TableCell>
                        <TableCell>{symptom.duration}</TableCell>
                        <TableCell>
                          <div className="max-w-xs">
                            {symptom.triggers.slice(0, 2).map((trigger, index) => (
                              <Badge key={index} variant="outline" className="mr-1 mb-1">
                                {trigger}
                              </Badge>
                            ))}
                            {symptom.triggers.length > 2 && (
                              <span className="text-xs text-muted-foreground">
                                +{symptom.triggers.length - 2} more
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteSymptom(symptom.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}