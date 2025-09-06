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
  Edit,
  Trash2,
  ClipboardList,
  Target,
  Calendar,
  CheckCircle2
} from "lucide-react"
import { useMedicalTreatment } from "@/contexts/medical-treatment-context"

interface TreatmentPlan {
  id: string
  title: string
  description: string
  category: 'surgery' | 'medication' | 'therapy' | 'lifestyle' | 'monitoring'
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'completed' | 'on-hold'
  startDate: Date
  targetDate: Date
  progress: number
  doctor: string
  notes: string
  createdAt: Date
  updatedAt: Date
}

export function TreatmentPlan() {
  const { medicalData } = useMedicalTreatment()
  const [plans, setPlans] = useState<TreatmentPlan[]>([])
  const [isAddingPlan, setIsAddingPlan] = useState(false)
  const [editingPlan, setEditingPlan] = useState<TreatmentPlan | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'medication' as TreatmentPlan['category'],
    priority: 'medium' as TreatmentPlan['priority'],
    startDate: new Date().toISOString().split('T')[0],
    targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    doctor: medicalData?.primaryDoctor || '',
    notes: '',
  })

  useEffect(() => {
    const savedPlans = localStorage.getItem('medical-treatment-plans')
    if (savedPlans) {
      const parsedPlans = JSON.parse(savedPlans).map((plan: any) => ({
        ...plan,
        startDate: new Date(plan.startDate),
        targetDate: new Date(plan.targetDate),
        createdAt: new Date(plan.createdAt),
        updatedAt: new Date(plan.updatedAt)
      }))
      setPlans(parsedPlans)
    }
  }, [])

  const savePlans = (newPlans: TreatmentPlan[]) => {
    setPlans(newPlans)
    localStorage.setItem('medical-treatment-plans', JSON.stringify(newPlans))
  }

  const addPlan = () => {
    const newPlan: TreatmentPlan = {
      id: Date.now().toString(),
      ...formData,
      startDate: new Date(formData.startDate),
      targetDate: new Date(formData.targetDate),
      status: 'pending',
      progress: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    savePlans([...plans, newPlan])
    resetForm()
    setIsAddingPlan(false)
  }

  const updatePlan = (id: string, updates: Partial<TreatmentPlan>) => {
    const updatedPlans = plans.map(plan => 
      plan.id === id 
        ? { ...plan, ...updates, updatedAt: new Date() }
        : plan
    )
    savePlans(updatedPlans)
  }

  const deletePlan = (id: string) => {
    const filteredPlans = plans.filter(plan => plan.id !== id)
    savePlans(filteredPlans)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'medication',
      priority: 'medium',
      startDate: new Date().toISOString().split('T')[0],
      targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      doctor: medicalData?.primaryDoctor || '',
      notes: '',
    })
    setEditingPlan(null)
  }

  const completedCount = plans.filter(plan => plan.status === 'completed').length
  const progressPercentage = plans.length > 0 ? (completedCount / plans.length) * 100 : 0
  const averageProgress = plans.length > 0 ? plans.reduce((sum, plan) => sum + plan.progress, 0) / plans.length : 0

  const getCategoryColor = (category: string) => {
    const colors = {
      surgery: 'bg-red-100 text-red-800',
      medication: 'bg-blue-100 text-blue-800',
      therapy: 'bg-green-100 text-green-800',
      lifestyle: 'bg-yellow-100 text-yellow-800',
      monitoring: 'bg-purple-100 text-purple-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    }
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Treatment Plans</h1>
          <p className="text-muted-foreground">Manage your treatment strategies and track progress</p>
        </div>
        <Dialog open={isAddingPlan} onOpenChange={setIsAddingPlan}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Treatment Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Treatment Plan</DialogTitle>
              <DialogDescription>
                Create a new treatment plan to track your medical progress.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Treatment Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Physical Therapy for Back Pain"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Detailed treatment description..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({...formData, category: value as TreatmentPlan['category']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="medication">Medication</SelectItem>
                      <SelectItem value="therapy">Therapy</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="monitoring">Monitoring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({...formData, priority: value as TreatmentPlan['priority']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                  <Label htmlFor="targetDate">Target Completion</Label>
                  <Input
                    id="targetDate"
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({...formData, targetDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="doctor">Assigned Doctor</Label>
                <Input
                  id="doctor"
                  value={formData.doctor}
                  onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                  placeholder="Doctor or specialist name"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes or instructions..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addPlan}>
                Add Treatment Plan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Plans Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCount}</div>
            <p className="text-xs text-muted-foreground">
              out of {plans.length} total plans
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(0)}%</div>
            <Progress value={progressPercentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageProgress.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">across all plans</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Treatment Plans List</CardTitle>
          <CardDescription>Manage and track your treatment plans</CardDescription>
        </CardHeader>
        <CardContent>
          {plans.length === 0 ? (
            <div className="text-center py-8">
              <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No treatment plans yet. Add your first plan to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your treatment plans and progress</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Treatment</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Target Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{plan.title}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-xs">{plan.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getCategoryColor(plan.category)}>
                        {plan.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(plan.priority)}>
                        {plan.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        plan.status === 'completed' ? 'default' :
                        plan.status === 'in-progress' ? 'secondary' :
                        plan.status === 'on-hold' ? 'destructive' : 'outline'
                      }>
                        {plan.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="w-16">
                        <Progress value={plan.progress} />
                        <span className="text-xs text-muted-foreground">{plan.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{plan.targetDate.toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updatePlan(plan.id, { 
                            status: plan.status === 'completed' ? 'pending' : 'completed',
                            progress: plan.status === 'completed' ? 0 : 100
                          })}
                        >
                          {plan.status === 'completed' ? 'Reopen' : 'Complete'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deletePlan(plan.id)}
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