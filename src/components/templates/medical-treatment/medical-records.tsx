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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus,
  Trash2,
  FileText,
  Download,
  Eye,
  Upload,
  TestTube,
  Image,
  FileType,
  Calendar,
  AlertCircle,
  CheckCircle2
} from "lucide-react"
import { useMedicalTreatment } from "@/contexts/medical-treatment-context"

interface MedicalRecord {
  id: string
  title: string
  type: 'test-result' | 'imaging' | 'report' | 'prescription' | 'insurance' | 'other'
  category: string
  date: Date
  provider: string
  description: string
  results: string
  normalRange: string
  status: 'normal' | 'abnormal' | 'pending' | 'needs-followup'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  attachments: string[]
  notes: string
  tags: string[]
  relatedAppointment: string
  createdAt: Date
  updatedAt: Date
}

interface TestResult {
  testName: string
  value: string
  unit: string
  normalRange: string
  status: 'normal' | 'high' | 'low' | 'critical'
}

export function MedicalRecords() {
  const { medicalData } = useMedicalTreatment()
  const [records, setRecords] = useState<MedicalRecord[]>([])
  const [isAddingRecord, setIsAddingRecord] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    type: 'test-result' as MedicalRecord['type'],
    category: '',
    date: new Date().toISOString().split('T')[0],
    provider: medicalData?.primaryDoctor || '',
    description: '',
    results: '',
    normalRange: '',
    status: 'pending' as MedicalRecord['status'],
    priority: 'medium' as MedicalRecord['priority'],
    notes: '',
    tags: '',
    relatedAppointment: '',
  })

  useEffect(() => {
    const savedRecords = localStorage.getItem('medical-treatment-records')
    if (savedRecords) {
      const parsedRecords = JSON.parse(savedRecords).map((record: any) => ({
        ...record,
        date: new Date(record.date),
        createdAt: new Date(record.createdAt),
        updatedAt: new Date(record.updatedAt)
      }))
      setRecords(parsedRecords)
    }
  }, [])

  const saveRecords = (newRecords: MedicalRecord[]) => {
    setRecords(newRecords)
    localStorage.setItem('medical-treatment-records', JSON.stringify(newRecords))
  }

  const addRecord = () => {
    const newRecord: MedicalRecord = {
      id: Date.now().toString(),
      ...formData,
      date: new Date(formData.date),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      attachments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveRecords([...records, newRecord])
    resetForm()
    setIsAddingRecord(false)
  }

  const updateRecord = (id: string, updates: Partial<MedicalRecord>) => {
    const updatedRecords = records.map(record => 
      record.id === id 
        ? { ...record, ...updates, updatedAt: new Date() }
        : record
    )
    saveRecords(updatedRecords)
  }

  const deleteRecord = (id: string) => {
    const filteredRecords = records.filter(record => record.id !== id)
    saveRecords(filteredRecords)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      type: 'test-result',
      category: '',
      date: new Date().toISOString().split('T')[0],
      provider: medicalData?.primaryDoctor || '',
      description: '',
      results: '',
      normalRange: '',
      status: 'pending',
      priority: 'medium',
      notes: '',
      tags: '',
      relatedAppointment: '',
    })
  }

  // Analytics
  const recentRecords = records.filter(record => {
    const monthAgo = new Date()
    monthAgo.setMonth(monthAgo.getMonth() - 1)
    return record.date >= monthAgo
  }).length

  const abnormalResults = records.filter(record => 
    record.status === 'abnormal' || record.status === 'needs-followup'
  ).length

  const pendingRecords = records.filter(record => record.status === 'pending').length

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'test-result':
        return <TestTube className="h-4 w-4" />
      case 'imaging':
        return <Image className="h-4 w-4" />
      case 'report':
        return <FileText className="h-4 w-4" />
      default:
        return <FileType className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    const colors = {
      'test-result': 'bg-blue-100 text-blue-800',
      'imaging': 'bg-purple-100 text-purple-800',
      'report': 'bg-green-100 text-green-800',
      'prescription': 'bg-orange-100 text-orange-800',
      'insurance': 'bg-yellow-100 text-yellow-800',
      'other': 'bg-gray-100 text-gray-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      normal: 'bg-green-100 text-green-800',
      abnormal: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
      'needs-followup': 'bg-orange-100 text-orange-800'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600'
      case 'high':
        return 'text-orange-600'
      case 'medium':
        return 'text-yellow-600'
      default:
        return 'text-green-600'
    }
  }

  const filterRecordsByType = (type: string) => {
    return records.filter(record => record.type === type)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Medical Records</h1>
          <p className="text-muted-foreground">Store and organize your medical documents and test results</p>
        </div>
        <Dialog open={isAddingRecord} onOpenChange={setIsAddingRecord}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Record
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Medical Record</DialogTitle>
              <DialogDescription>
                Add a new medical record, test result, or document to your health records.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Record Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Blood Test Results, MRI Scan"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Record Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({...formData, type: value as MedicalRecord['type']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="test-result">Test Result</SelectItem>
                      <SelectItem value="imaging">Imaging</SelectItem>
                      <SelectItem value="report">Medical Report</SelectItem>
                      <SelectItem value="prescription">Prescription</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="e.g., Lab Work, Radiology"
                  />
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
                  <Label htmlFor="provider">Provider/Doctor</Label>
                  <Input
                    id="provider"
                    value={formData.provider}
                    onChange={(e) => setFormData({...formData, provider: e.target.value})}
                    placeholder="Doctor or facility name"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Brief description of the record or test..."
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="results">Results/Findings</Label>
                <Textarea
                  id="results"
                  value={formData.results}
                  onChange={(e) => setFormData({...formData, results: e.target.value})}
                  placeholder="Test results, findings, or conclusions..."
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="normalRange">Normal Range (if applicable)</Label>
                <Input
                  id="normalRange"
                  value={formData.normalRange}
                  onChange={(e) => setFormData({...formData, normalRange: e.target.value})}
                  placeholder="e.g., 70-100 mg/dL"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({...formData, status: value as MedicalRecord['status']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="abnormal">Abnormal</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="needs-followup">Needs Follow-up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({...formData, priority: value as MedicalRecord['priority']})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="e.g., diabetes, cardiology, annual"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="relatedAppointment">Related Appointment</Label>
                <Input
                  id="relatedAppointment"
                  value={formData.relatedAppointment}
                  onChange={(e) => setFormData({...formData, relatedAppointment: e.target.value})}
                  placeholder="Associated appointment or visit"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any additional information or observations..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addRecord}>
                Add Record
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{records.length}</div>
            <p className="text-xs text-muted-foreground">medical records</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentRecords}</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Needs Attention</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{abnormalResults}</div>
            <p className="text-xs text-muted-foreground">abnormal results</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingRecords}</div>
            <p className="text-xs text-muted-foreground">awaiting results</p>
          </CardContent>
        </Card>
      </div>

      {abnormalResults > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Records Requiring Attention
            </CardTitle>
            <CardDescription>Medical records that need follow-up or review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {records
                .filter(record => record.status === 'abnormal' || record.status === 'needs-followup')
                .slice(0, 3)
                .map(record => (
                  <div key={record.id} className="flex items-center justify-between p-3 border rounded-lg bg-orange-50">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <div>
                        <p className="font-medium">{record.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {record.provider} • {record.date.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                      <span className={`text-sm font-medium ${getPriorityColor(record.priority)}`}>
                        {record.priority}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Medical Records</CardTitle>
          <CardDescription>View and manage your complete medical record collection</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="test-result">Tests</TabsTrigger>
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="report">Reports</TabsTrigger>
              <TabsTrigger value="prescription">Prescriptions</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              {records.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No medical records yet. Add your first record to get started!</p>
                </div>
              ) : (
                <RecordsTable records={records} onDelete={deleteRecord} />
              )}
            </TabsContent>

            <TabsContent value="test-result" className="mt-4">
              <RecordsTable records={filterRecordsByType('test-result')} onDelete={deleteRecord} />
            </TabsContent>

            <TabsContent value="imaging" className="mt-4">
              <RecordsTable records={filterRecordsByType('imaging')} onDelete={deleteRecord} />
            </TabsContent>

            <TabsContent value="report" className="mt-4">
              <RecordsTable records={filterRecordsByType('report')} onDelete={deleteRecord} />
            </TabsContent>

            <TabsContent value="prescription" className="mt-4">
              <RecordsTable records={filterRecordsByType('prescription')} onDelete={deleteRecord} />
            </TabsContent>

            <TabsContent value="other" className="mt-4">
              <RecordsTable records={filterRecordsByType('other')} onDelete={deleteRecord} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function RecordsTable({ records, onDelete }: { records: MedicalRecord[], onDelete: (id: string) => void }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'test-result':
        return <TestTube className="h-4 w-4" />
      case 'imaging':
        return <Image className="h-4 w-4" />
      case 'report':
        return <FileText className="h-4 w-4" />
      default:
        return <FileType className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    const colors = {
      'test-result': 'bg-blue-100 text-blue-800',
      'imaging': 'bg-purple-100 text-purple-800',
      'report': 'bg-green-100 text-green-800',
      'prescription': 'bg-orange-100 text-orange-800',
      'insurance': 'bg-yellow-100 text-yellow-800',
      'other': 'bg-gray-100 text-gray-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      normal: 'bg-green-100 text-green-800',
      abnormal: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
      'needs-followup': 'bg-orange-100 text-orange-800'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  if (records.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No records found for this category.</p>
      </div>
    )
  }

  return (
    <Table>
      <TableCaption>Medical records sorted by date</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Record</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Provider</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((record) => (
          <TableRow key={record.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                {getTypeIcon(record.type)}
                <div>
                  <p className="font-medium">{record.title}</p>
                  <p className="text-sm text-muted-foreground truncate max-w-xs">{record.description}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge className={getTypeColor(record.type)}>
                {record.type}
              </Badge>
            </TableCell>
            <TableCell>{record.date.toLocaleDateString()}</TableCell>
            <TableCell>{record.provider}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(record.status)}>
                {record.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {record.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {record.tags.length > 2 && (
                  <span className="text-xs text-muted-foreground">
                    +{record.tags.length - 2}
                  </span>
                )}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(record.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}