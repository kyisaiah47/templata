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
  Pill,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Calendar
} from "lucide-react"
import { useMedicalTreatment } from "@/contexts/medical-treatment-context"

interface Medication {
  id: string
  name: string
  genericName: string
  dosage: string
  frequency: string
  route: 'oral' | 'injection' | 'topical' | 'inhaler' | 'other'
  prescribedBy: string
  startDate: Date
  endDate: Date | null
  refillDate: Date | null
  status: 'active' | 'completed' | 'discontinued' | 'paused'
  instructions: string
  sideEffects: string[]
  notes: string
  reminderTimes: string[]
  currentStock: number
  totalPrescribed: number
  createdAt: Date
  updatedAt: Date
}

export function Medications() {
  const { medicalData } = useMedicalTreatment()
  const [medications, setMedications] = useState<Medication[]>([])
  const [isAddingMedication, setIsAddingMedication] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    genericName: '',
    dosage: '',
    frequency: '',
    route: 'oral' as Medication['route'],
    prescribedBy: medicalData?.primaryDoctor || '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    refillDate: '',
    instructions: '',
    sideEffects: '',
    notes: '',
    reminderTimes: '08:00',
    currentStock: 30,
    totalPrescribed: 30,
  })

  useEffect(() => {
    const savedMedications = localStorage.getItem('medical-treatment-medications')
    if (savedMedications) {
      const parsedMedications = JSON.parse(savedMedications).map((med: any) => ({
        ...med,
        startDate: new Date(med.startDate),
        endDate: med.endDate ? new Date(med.endDate) : null,
        refillDate: med.refillDate ? new Date(med.refillDate) : null,
        createdAt: new Date(med.createdAt),
        updatedAt: new Date(med.updatedAt)
      }))
      setMedications(parsedMedications)
    }
  }, [])

  const saveMedications = (newMedications: Medication[]) => {
    setMedications(newMedications)
    localStorage.setItem('medical-treatment-medications', JSON.stringify(newMedications))
  }

  const addMedication = () => {
    const sideEffectsArray = formData.sideEffects
      .split(',')
      .map(effect => effect.trim())
      .filter(effect => effect.length > 0)

    const reminderTimesArray = formData.reminderTimes
      .split(',')
      .map(time => time.trim())
      .filter(time => time.length > 0)

    const newMedication: Medication = {
      id: Date.now().toString(),
      ...formData,
      endDate: formData.endDate ? new Date(formData.endDate) : null,
      refillDate: formData.refillDate ? new Date(formData.refillDate) : null,
      startDate: new Date(formData.startDate),
      sideEffects: sideEffectsArray,
      reminderTimes: reminderTimesArray,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveMedications([...medications, newMedication])
    resetForm()
    setIsAddingMedication(false)
  }

  const updateMedication = (id: string, updates: Partial<Medication>) => {
    const updatedMedications = medications.map(med => 
      med.id === id 
        ? { ...med, ...updates, updatedAt: new Date() }
        : med
    )
    saveMedications(updatedMedications)
  }

  const deleteMedication = (id: string) => {
    const filteredMedications = medications.filter(med => med.id !== id)
    saveMedications(filteredMedications)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      genericName: '',
      dosage: '',
      frequency: '',
      route: 'oral',
      prescribedBy: medicalData?.primaryDoctor || '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      refillDate: '',
      instructions: '',
      sideEffects: '',
      notes: '',
      reminderTimes: '08:00',
      currentStock: 30,
      totalPrescribed: 30,
    })
  }

  const activeMedications = medications.filter(med => med.status === 'active').length
  const needRefill = medications.filter(med => 
    med.status === 'active' && med.currentStock <= 7
  ).length
  const totalAdherence = medications.length > 0 
    ? medications.filter(med => med.status === 'active').length / medications.length * 100 
    : 0

  const getRouteColor = (route: string) => {
    const colors = {
      oral: 'bg-blue-100 text-blue-800',
      injection: 'bg-red-100 text-red-800',
      topical: 'bg-green-100 text-green-800',
      inhaler: 'bg-purple-100 text-purple-800',
      other: 'bg-gray-100 text-gray-800'
    }
    return colors[route as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStockStatus = (medication: Medication) => {
    const stockPercentage = (medication.currentStock / medication.totalPrescribed) * 100
    if (stockPercentage <= 20) return { color: 'text-red-600', status: 'Low' }
    if (stockPercentage <= 50) return { color: 'text-yellow-600', status: 'Medium' }
    return { color: 'text-green-600', status: 'Good' }
  }

  const isRefillNeeded = (medication: Medication) => {
    if (!medication.refillDate) return false
    const today = new Date()
    const refillDate = new Date(medication.refillDate)
    return refillDate <= today
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Medications</h1>
          <p className="text-muted-foreground">Manage your prescriptions and track medication adherence</p>
        </div>
        <Dialog open={isAddingMedication} onOpenChange={setIsAddingMedication}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Medication
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Medication</DialogTitle>
              <DialogDescription>
                Add a new medication to track dosage, timing, and refills.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Medication Name (Brand)</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g., Advil, Lipitor"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="genericName">Generic Name</Label>
                  <Input
                    id="genericName"
                    value={formData.genericName}
                    onChange={(e) => setFormData({...formData, genericName: e.target.value})}
                    placeholder="e.g., Ibuprofen, Atorvastatin"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    value={formData.dosage}
                    onChange={(e) => setFormData({...formData, dosage: e.target.value})}
                    placeholder="e.g., 200mg, 5ml"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Input
                    id="frequency"
                    value={formData.frequency}
                    onChange={(e) => setFormData({...formData, frequency: e.target.value})}
                    placeholder="e.g., Twice daily, Every 8 hours"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="route">Route</Label>
                  <Select
                    value={formData.route}
                    onValueChange={(value) => setFormData({...formData, route: value as Medication['route']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select route" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oral">Oral</SelectItem>
                      <SelectItem value="injection">Injection</SelectItem>
                      <SelectItem value="topical">Topical</SelectItem>
                      <SelectItem value="inhaler">Inhaler</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="prescribedBy">Prescribed By</Label>
                  <Input
                    id="prescribedBy"
                    value={formData.prescribedBy}
                    onChange={(e) => setFormData({...formData, prescribedBy: e.target.value})}
                    placeholder="Doctor name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="endDate">End Date (Optional)</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="refillDate">Next Refill</Label>
                  <Input
                    id="refillDate"
                    type="date"
                    value={formData.refillDate}
                    onChange={(e) => setFormData({...formData, refillDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="reminderTimes">Reminder Times (comma-separated)</Label>
                <Input
                  id="reminderTimes"
                  value={formData.reminderTimes}
                  onChange={(e) => setFormData({...formData, reminderTimes: e.target.value})}
                  placeholder="08:00, 14:00, 20:00"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="currentStock">Current Stock</Label>
                  <Input
                    id="currentStock"
                    type="number"
                    value={formData.currentStock}
                    onChange={(e) => setFormData({...formData, currentStock: parseInt(e.target.value)})}
                    placeholder="30"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="totalPrescribed">Total Prescribed</Label>
                  <Input
                    id="totalPrescribed"
                    type="number"
                    value={formData.totalPrescribed}
                    onChange={(e) => setFormData({...formData, totalPrescribed: parseInt(e.target.value)})}
                    placeholder="30"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  placeholder="Take with food, avoid alcohol, etc."
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="sideEffects">Side Effects (comma-separated)</Label>
                <Input
                  id="sideEffects"
                  value={formData.sideEffects}
                  onChange={(e) => setFormData({...formData, sideEffects: e.target.value})}
                  placeholder="Drowsiness, nausea, headache"
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
              <Button type="submit" onClick={addMedication}>
                Add Medication
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeMedications}</div>
            <p className="text-xs text-muted-foreground">currently taking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Need Refill</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{needRefill}</div>
            <p className="text-xs text-muted-foreground">medications low stock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Adherence Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAdherence.toFixed(0)}%</div>
            <Progress value={totalAdherence} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {needRefill > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Refill Alerts
            </CardTitle>
            <CardDescription>Medications that need attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {medications
                .filter(med => med.status === 'active' && (med.currentStock <= 7 || isRefillNeeded(med)))
                .map(med => (
                  <div key={med.id} className="flex items-center justify-between p-3 border rounded-lg bg-orange-50">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <div>
                        <p className="font-medium">{med.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {med.currentStock <= 7 ? `Only ${med.currentStock} left` : 'Refill due'}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Refill Now
                    </Button>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Medication List</CardTitle>
          <CardDescription>All your prescriptions and over-the-counter medications</CardDescription>
        </CardHeader>
        <CardContent>
          {medications.length === 0 ? (
            <div className="text-center py-8">
              <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No medications added yet. Add your first medication to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your medication schedule and tracking</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications.map((medication) => {
                  const stockStatus = getStockStatus(medication)
                  return (
                    <TableRow key={medication.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{medication.name}</p>
                          <p className="text-sm text-muted-foreground">{medication.genericName}</p>
                        </div>
                      </TableCell>
                      <TableCell>{medication.dosage}</TableCell>
                      <TableCell>
                        <Badge className={getRouteColor(medication.route)}>
                          {medication.route}
                        </Badge>
                      </TableCell>
                      <TableCell>{medication.frequency}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={stockStatus.color}>
                            {medication.currentStock}/{medication.totalPrescribed}
                          </span>
                          <span className="text-xs text-muted-foreground">({stockStatus.status})</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          medication.status === 'active' ? 'default' :
                          medication.status === 'completed' ? 'secondary' :
                          medication.status === 'discontinued' ? 'destructive' : 'outline'
                        }>
                          {medication.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateMedication(medication.id, { 
                              status: medication.status === 'active' ? 'completed' : 'active'
                            })}
                          >
                            {medication.status === 'active' ? 'Stop' : 'Resume'}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteMedication(medication.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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