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
import { Separator } from "@/components/ui/separator"
import { 
  Plus,
  Trash2,
  Wrench,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  DollarSign
} from "lucide-react"
import { useCarBuying } from "@/contexts/car-buying-context"

interface Inspection {
  id: string
  vehicleInfo: {
    make: string
    model: string
    year: number
    vin?: string
  }
  inspectionType: 'pre-purchase' | 'general' | 'specialty' | 'warranty'
  inspectorName: string
  inspectorType: 'dealership' | 'independent' | 'mobile' | 'diy'
  scheduledDate: Date
  completedDate?: Date
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
  cost: number
  location: string
  
  // Inspection Results
  overallRating?: 'excellent' | 'good' | 'fair' | 'poor'
  engineCondition?: 'excellent' | 'good' | 'fair' | 'poor'
  transmissionCondition?: 'excellent' | 'good' | 'fair' | 'poor'
  brakesCondition?: 'excellent' | 'good' | 'fair' | 'poor'
  tiresCondition?: 'excellent' | 'good' | 'fair' | 'poor'
  bodyCondition?: 'excellent' | 'good' | 'fair' | 'poor'
  interiorCondition?: 'excellent' | 'good' | 'fair' | 'poor'
  
  majorIssues: string[]
  minorIssues: string[]
  recommendedRepairs: string[]
  estimatedRepairCost?: number
  
  notes?: string
  reportUrl?: string
  createdAt: Date
  updatedAt: Date
}

export function Inspections() {
  const { data, updateData } = useCarBuying()
  const [inspections, setInspections] = useState<Inspection[]>([])
  const [isAddingInspection, setIsAddingInspection] = useState(false)
  const [editingInspection, setEditingInspection] = useState<Inspection | null>(null)

  const [formData, setFormData] = useState({
    vehicleInfo: {
      make: '',
      model: '',
      year: new Date().getFullYear(),
      vin: '',
    },
    inspectionType: 'pre-purchase' as const,
    inspectorName: '',
    inspectorType: 'independent' as const,
    scheduledDate: new Date().toISOString().split('T')[0],
    cost: 0,
    location: '',
    notes: '',
  })

  useEffect(() => {
    const savedInspections = localStorage.getItem('car-buying-inspections-items')
    if (savedInspections) {
      const parsed = JSON.parse(savedInspections)
      setInspections(parsed.map((inspection: any) => ({
        ...inspection,
        scheduledDate: new Date(inspection.scheduledDate),
        completedDate: inspection.completedDate ? new Date(inspection.completedDate) : undefined,
        createdAt: new Date(inspection.createdAt),
        updatedAt: new Date(inspection.updatedAt)
      })))
    }
  }, [])

  const saveInspections = (newInspections: Inspection[]) => {
    setInspections(newInspections)
    localStorage.setItem('car-buying-inspections-items', JSON.stringify(newInspections))
  }

  const addInspection = () => {
    const newInspection: Inspection = {
      id: Date.now().toString(),
      ...formData,
      scheduledDate: new Date(formData.scheduledDate),
      status: 'scheduled',
      majorIssues: [],
      minorIssues: [],
      recommendedRepairs: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveInspections([...inspections, newInspection])
    resetForm()
    setIsAddingInspection(false)
  }

  const updateInspection = (id: string, updates: Partial<Inspection>) => {
    const updatedInspections = inspections.map(inspection => 
      inspection.id === id 
        ? { ...inspection, ...updates, updatedAt: new Date() }
        : inspection
    )
    saveInspections(updatedInspections)
  }

  const deleteInspection = (id: string) => {
    const filteredInspections = inspections.filter(inspection => inspection.id !== id)
    saveInspections(filteredInspections)
  }

  const resetForm = () => {
    setFormData({
      vehicleInfo: {
        make: '',
        model: '',
        year: new Date().getFullYear(),
        vin: '',
      },
      inspectionType: 'pre-purchase',
      inspectorName: '',
      inspectorType: 'independent',
      scheduledDate: new Date().toISOString().split('T')[0],
      cost: 0,
      location: '',
      notes: '',
    })
  }

  const completedCount = inspections.filter(i => i.status === 'completed').length
  const scheduledCount = inspections.filter(i => i.status === 'scheduled').length
  const avgCost = inspections.length > 0 ? 
    inspections.reduce((sum, i) => sum + i.cost, 0) / inspections.length : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default'
      case 'scheduled': return 'secondary'
      case 'in-progress': return 'outline'
      case 'cancelled': return 'destructive'
      default: return 'outline'
    }
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-600'
      case 'good': return 'text-green-500'
      case 'fair': return 'text-yellow-500'
      case 'poor': return 'text-red-500'
      default: return 'text-muted-foreground'
    }
  }

  const getConditionIcon = (condition: string) => {
    switch (condition) {
      case 'excellent':
      case 'good': return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case 'fair': return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'poor': return <XCircle className="h-4 w-4 text-red-500" />
      default: return null
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vehicle Inspections</h1>
          <p className="text-muted-foreground">Schedule and track vehicle inspections</p>
        </div>
        <Dialog open={isAddingInspection} onOpenChange={setIsAddingInspection}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Schedule Inspection
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Schedule Vehicle Inspection</DialogTitle>
              <DialogDescription>
                Schedule a professional inspection for a vehicle you're considering.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <h4 className="font-medium">Vehicle Information</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="make">Make</Label>
                    <Input
                      id="make"
                      value={formData.vehicleInfo.make}
                      onChange={(e) => setFormData({
                        ...formData, 
                        vehicleInfo: {...formData.vehicleInfo, make: e.target.value}
                      })}
                      placeholder="Honda, Toyota..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      value={formData.vehicleInfo.model}
                      onChange={(e) => setFormData({
                        ...formData, 
                        vehicleInfo: {...formData.vehicleInfo, model: e.target.value}
                      })}
                      placeholder="Civic, Corolla..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.vehicleInfo.year}
                      onChange={(e) => setFormData({
                        ...formData, 
                        vehicleInfo: {...formData.vehicleInfo, year: parseInt(e.target.value)}
                      })}
                      min="1990"
                      max={new Date().getFullYear() + 1}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="vin">VIN (optional)</Label>
                  <Input
                    id="vin"
                    value={formData.vehicleInfo.vin}
                    onChange={(e) => setFormData({
                      ...formData, 
                      vehicleInfo: {...formData.vehicleInfo, vin: e.target.value}
                    })}
                    placeholder="Vehicle Identification Number"
                    maxLength={17}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Inspection Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Inspection Type</Label>
                    <Select value={formData.inspectionType} onValueChange={(value: any) => setFormData({...formData, inspectionType: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-purchase">Pre-Purchase</SelectItem>
                        <SelectItem value="general">General Inspection</SelectItem>
                        <SelectItem value="specialty">Specialty Inspection</SelectItem>
                        <SelectItem value="warranty">Warranty Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Inspector Type</Label>
                    <Select value={formData.inspectorType} onValueChange={(value: any) => setFormData({...formData, inspectorType: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="independent">Independent Inspector</SelectItem>
                        <SelectItem value="dealership">Dealership Service</SelectItem>
                        <SelectItem value="mobile">Mobile Inspector</SelectItem>
                        <SelectItem value="diy">DIY Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="inspectorName">Inspector/Company Name</Label>
                    <Input
                      id="inspectorName"
                      value={formData.inspectorName}
                      onChange={(e) => setFormData({...formData, inspectorName: e.target.value})}
                      placeholder="Inspector or company name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cost">Cost ($)</Label>
                    <Input
                      id="cost"
                      type="number"
                      value={formData.cost}
                      onChange={(e) => setFormData({...formData, cost: parseInt(e.target.value)})}
                      min="0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="scheduledDate">Scheduled Date</Label>
                    <Input
                      id="scheduledDate"
                      type="date"
                      value={formData.scheduledDate}
                      onChange={(e) => setFormData({...formData, scheduledDate: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Inspection location"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Additional notes about the inspection..."
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addInspection}>
                Schedule Inspection
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledCount}</div>
            <p className="text-xs text-muted-foreground">upcoming inspections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCount}</div>
            <p className="text-xs text-muted-foreground">inspections completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${avgCost.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">per inspection</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inspection Schedule</CardTitle>
          <CardDescription>Track your vehicle inspections</CardDescription>
        </CardHeader>
        <CardContent>
          {inspections.length === 0 ? (
            <div className="text-center py-8">
              <Wrench className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No inspections scheduled yet. Schedule your first inspection!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {inspections.map((inspection) => (
                <Card key={inspection.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">
                          {inspection.vehicleInfo.year} {inspection.vehicleInfo.make} {inspection.vehicleInfo.model}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {inspection.inspectorName} • {inspection.scheduledDate.toLocaleDateString()}
                        </p>
                        <Badge variant={getStatusColor(inspection.status)} className="mt-1">
                          {inspection.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="font-semibold">${inspection.cost}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {inspection.inspectionType.replace('-', ' ')}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const nextStatus = inspection.status === 'scheduled' ? 'completed' : 'scheduled'
                            updateInspection(inspection.id, { 
                              status: nextStatus,
                              completedDate: nextStatus === 'completed' ? new Date() : undefined
                            })
                          }}
                        >
                          {inspection.status === 'scheduled' ? 'Mark Complete' : 'Mark Scheduled'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteInspection(inspection.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {inspection.status === 'completed' && inspection.overallRating && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-3">Inspection Results</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { label: 'Overall', value: inspection.overallRating },
                            { label: 'Engine', value: inspection.engineCondition },
                            { label: 'Transmission', value: inspection.transmissionCondition },
                            { label: 'Brakes', value: inspection.brakesCondition },
                          ].map((item, index) => (
                            <div key={index} className="text-center">
                              <div className="flex items-center justify-center gap-1 mb-1">
                                {getConditionIcon(item.value || '')}
                                <span className={`text-sm font-medium ${getConditionColor(item.value || '')}`}>
                                  {item.value || 'Not rated'}
                                </span>
                              </div>
                              <div className="text-xs text-muted-foreground">{item.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {inspection.notes && (
                      <div className="border-t pt-4 mt-4">
                        <p className="text-sm text-muted-foreground">{inspection.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}