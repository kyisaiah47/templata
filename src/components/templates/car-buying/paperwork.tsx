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
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Plus,
  Trash2,
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Download,
  Upload,
  Calendar,
  DollarSign
} from "lucide-react"
import { useCarBuying } from "@/contexts/car-buying-context"

interface Document {
  id: string
  name: string
  type: 'contract' | 'title' | 'registration' | 'insurance' | 'financing' | 'warranty' | 'inspection' | 'other'
  status: 'needed' | 'in-progress' | 'completed' | 'expired'
  description?: string
  dueDate?: Date
  completedDate?: Date
  issuer?: string
  documentNumber?: string
  notes?: string
  attachments?: string[]
  createdAt: Date
  updatedAt: Date
}

interface Paperwork {
  id: string
  vehicleInfo: {
    make: string
    model: string
    year: number
    vin: string
  }
  dealerInfo: {
    name: string
    contactPerson?: string
  }
  purchaseDate?: Date
  finalPrice: number
  status: 'preparing' | 'in-progress' | 'completed' | 'issues'
  documents: Document[]
  
  // Key deadlines
  deadlines: {
    titleTransfer?: Date
    registrationRenewal?: Date
    insuranceExpiry?: Date
    warrantyExpiry?: Date
    tempTagExpiry?: Date
  }
  
  // Fees and payments
  fees: {
    name: string
    amount: number
    paid: boolean
    dueDate?: Date
  }[]
  
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function PaperworkComponent() {
  const { data, updateData } = useCarBuying()
  const [paperworkItems, setPaperworkItems] = useState<Paperwork[]>([])
  const [isAddingPaperwork, setIsAddingPaperwork] = useState(false)
  const [isAddingDocument, setIsAddingDocument] = useState(false)
  const [selectedPaperworkId, setSelectedPaperworkId] = useState<string>('')

  const [formData, setFormData] = useState({
    vehicleInfo: {
      make: '',
      model: '',
      year: new Date().getFullYear(),
      vin: '',
    },
    dealerInfo: {
      name: '',
      contactPerson: '',
    },
    finalPrice: 0,
    purchaseDate: new Date().toISOString().split('T')[0],
    notes: '',
  })

  const [documentFormData, setDocumentFormData] = useState({
    name: '',
    type: 'contract' as const,
    description: '',
    dueDate: '',
    issuer: '',
    documentNumber: '',
    notes: '',
  })

  useEffect(() => {
    const savedPaperwork = localStorage.getItem('car-buying-paperwork-items')
    if (savedPaperwork) {
      const parsed = JSON.parse(savedPaperwork)
      setPaperworkItems(parsed.map((item: any) => ({
        ...item,
        purchaseDate: item.purchaseDate ? new Date(item.purchaseDate) : undefined,
        documents: item.documents.map((doc: any) => ({
          ...doc,
          dueDate: doc.dueDate ? new Date(doc.dueDate) : undefined,
          completedDate: doc.completedDate ? new Date(doc.completedDate) : undefined,
          createdAt: new Date(doc.createdAt),
          updatedAt: new Date(doc.updatedAt)
        })),
        deadlines: item.deadlines ? {
          ...item.deadlines,
          titleTransfer: item.deadlines.titleTransfer ? new Date(item.deadlines.titleTransfer) : undefined,
          registrationRenewal: item.deadlines.registrationRenewal ? new Date(item.deadlines.registrationRenewal) : undefined,
          insuranceExpiry: item.deadlines.insuranceExpiry ? new Date(item.deadlines.insuranceExpiry) : undefined,
          warrantyExpiry: item.deadlines.warrantyExpiry ? new Date(item.deadlines.warrantyExpiry) : undefined,
          tempTagExpiry: item.deadlines.tempTagExpiry ? new Date(item.deadlines.tempTagExpiry) : undefined,
        } : { },
        fees: item.fees.map((fee: any) => ({
          ...fee,
          dueDate: fee.dueDate ? new Date(fee.dueDate) : undefined,
        })),
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      })))
    }
  }, [])

  const savePaperwork = (newPaperworkItems: Paperwork[]) => {
    setPaperworkItems(newPaperworkItems)
    localStorage.setItem('car-buying-paperwork-items', JSON.stringify(newPaperworkItems))
  }

  const addPaperwork = () => {
    const essentialDocuments: Document[] = [
      {
        id: '1',
        name: 'Purchase Contract',
        type: 'contract',
        status: 'needed',
        description: 'Main purchase agreement',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Title Transfer',
        type: 'title',
        status: 'needed',
        description: 'Transfer of vehicle title',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'Vehicle Registration',
        type: 'registration',
        status: 'needed',
        description: 'Register vehicle with DMV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        name: 'Auto Insurance',
        type: 'insurance',
        status: 'needed',
        description: 'Valid auto insurance policy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    const newPaperwork: Paperwork = {
      id: Date.now().toString(),
      ...formData,
      vehicleInfo: {
        ...formData.vehicleInfo,
        vin: formData.vehicleInfo.vin || ''
      },
      purchaseDate: new Date(formData.purchaseDate),
      status: 'preparing',
      documents: essentialDocuments,
      deadlines: {},
      fees: [
        { name: 'Registration Fee', amount: 150, paid: false },
        { name: 'Title Fee', amount: 75, paid: false },
        { name: 'Sales Tax', amount: Math.round(formData.finalPrice * 0.08), paid: false }
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    savePaperwork([...paperworkItems, newPaperwork])
    resetForm()
    setIsAddingPaperwork(false)
  }

  const updatePaperwork = (id: string, updates: Partial<Paperwork>) => {
    const updatedItems = paperworkItems.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    savePaperwork(updatedItems)
  }

  const addDocument = () => {
    if (!selectedPaperworkId) return
    
    const paperwork = paperworkItems.find(p => p.id === selectedPaperworkId)
    if (!paperwork) return

    const newDocument: Document = {
      id: Date.now().toString(),
      ...documentFormData,
      dueDate: documentFormData.dueDate ? new Date(documentFormData.dueDate) : undefined,
      status: 'needed',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    updatePaperwork(selectedPaperworkId, {
      documents: [...paperwork.documents, newDocument]
    })

    resetDocumentForm()
    setIsAddingDocument(false)
    setSelectedPaperworkId('')
  }

  const updateDocument = (paperworkId: string, documentId: string, updates: Partial<Document>) => {
    const paperwork = paperworkItems.find(p => p.id === paperworkId)
    if (!paperwork) return

    const updatedDocuments = paperwork.documents.map(doc =>
      doc.id === documentId 
        ? { ...doc, ...updates, updatedAt: new Date() }
        : doc
    )

    updatePaperwork(paperworkId, { documents: updatedDocuments })
  }

  const deletePaperwork = (id: string) => {
    const filteredItems = paperworkItems.filter(item => item.id !== id)
    savePaperwork(filteredItems)
  }

  const resetForm = () => {
    setFormData({
      vehicleInfo: {
        make: '',
        model: '',
        year: new Date().getFullYear(),
        vin: '',
      },
      dealerInfo: {
        name: '',
        contactPerson: '',
      },
      finalPrice: 0,
      purchaseDate: new Date().toISOString().split('T')[0],
      notes: '',
    })
  }

  const resetDocumentForm = () => {
    setDocumentFormData({
      name: '',
      type: 'contract',
      description: '',
      dueDate: '',
      issuer: '',
      documentNumber: '',
      notes: '',
    })
  }

  const completedCount = paperworkItems.reduce((sum, item) => 
    sum + item.documents.filter(doc => doc.status === 'completed').length, 0
  )
  const totalDocuments = paperworkItems.reduce((sum, item) => sum + item.documents.length, 0)
  const completionRate = totalDocuments > 0 ? (completedCount / totalDocuments) * 100 : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default'
      case 'in-progress': return 'secondary'
      case 'needed': return 'outline'
      case 'expired': return 'destructive'
      default: return 'outline'
    }
  }

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'contract': return <FileText className="h-4 w-4" />
      case 'title': return <FileText className="h-4 w-4" />
      case 'registration': return <FileText className="h-4 w-4" />
      case 'insurance': return <FileText className="h-4 w-4" />
      case 'financing': return <DollarSign className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Paperwork & Documentation</h1>
          <p className="text-muted-foreground">Track all your car buying documents</p>
        </div>
        <Dialog open={isAddingPaperwork} onOpenChange={setIsAddingPaperwork}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Purchase
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Start New Purchase Documentation</DialogTitle>
              <DialogDescription>
                Create a new paperwork tracking for a vehicle purchase.
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
                  <Label htmlFor="vin">VIN</Label>
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
                <h4 className="font-medium">Purchase Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="dealerName">Dealer/Seller Name</Label>
                    <Input
                      id="dealerName"
                      value={formData.dealerInfo.name}
                      onChange={(e) => setFormData({
                        ...formData, 
                        dealerInfo: {...formData.dealerInfo, name: e.target.value}
                      })}
                      placeholder="Dealer or seller name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input
                      id="contactPerson"
                      value={formData.dealerInfo.contactPerson}
                      onChange={(e) => setFormData({
                        ...formData, 
                        dealerInfo: {...formData.dealerInfo, contactPerson: e.target.value}
                      })}
                      placeholder="Contact person name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="finalPrice">Final Purchase Price ($)</Label>
                    <Input
                      id="finalPrice"
                      type="number"
                      value={formData.finalPrice}
                      onChange={(e) => setFormData({...formData, finalPrice: parseInt(e.target.value)})}
                      min="0"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="purchaseDate">Purchase Date</Label>
                    <Input
                      id="purchaseDate"
                      type="date"
                      value={formData.purchaseDate}
                      onChange={(e) => setFormData({...formData, purchaseDate: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Additional notes about this purchase..."
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addPaperwork}>
                Create Purchase
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Document Completion</CardTitle>
            <CardDescription>
              {completedCount} of {totalDocuments} documents completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={completionRate} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">
              {completionRate.toFixed(1)}% complete
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{paperworkItems.length}</div>
            <p className="text-xs text-muted-foreground">vehicles being processed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDocuments - completedCount}</div>
            <p className="text-xs text-muted-foreground">documents needed</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {paperworkItems.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No paperwork yet. Start tracking your first purchase!</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          paperworkItems.map((paperwork) => (
            <Card key={paperwork.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">
                      {paperwork.vehicleInfo.year} {paperwork.vehicleInfo.make} {paperwork.vehicleInfo.model}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {paperwork.dealerInfo.name} • ${paperwork.finalPrice.toLocaleString()}
                    </p>
                    {paperwork.vehicleInfo.vin && (
                      <p className="text-xs text-muted-foreground">VIN: {paperwork.vehicleInfo.vin}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedPaperworkId(paperwork.id)
                        setIsAddingDocument(true)
                      }}
                    >
                      Add Document
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deletePaperwork(paperwork.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Documents</h4>
                  <div className="grid gap-3">
                    {paperwork.documents.map((document) => (
                      <div key={document.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {getDocumentIcon(document.type)}
                          <div>
                            <div className="font-medium">{document.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {document.description}
                              {document.dueDate && ` • Due ${document.dueDate.toLocaleDateString()}`}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getStatusColor(document.status)}>
                            {document.status.replace('-', ' ')}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateDocument(paperwork.id, document.id, {
                              status: document.status === 'completed' ? 'needed' : 'completed',
                              completedDate: document.status === 'completed' ? undefined : new Date()
                            })}
                          >
                            {document.status === 'completed' ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Clock className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {paperwork.fees.length > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-medium mb-3">Fees & Payments</h4>
                    <div className="space-y-2">
                      {paperwork.fees.map((fee, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span>{fee.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">${fee.amount}</span>
                            <Badge variant={fee.paid ? 'default' : 'outline'}>
                              {fee.paid ? 'Paid' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {paperwork.notes && (
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">{paperwork.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Dialog open={isAddingDocument} onOpenChange={setIsAddingDocument}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Document</DialogTitle>
            <DialogDescription>
              Add a new document to track for this vehicle purchase.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="documentName">Document Name</Label>
              <Input
                id="documentName"
                value={documentFormData.name}
                onChange={(e) => setDocumentFormData({...documentFormData, name: e.target.value})}
                placeholder="Document name"
              />
            </div>

            <div className="grid gap-2">
              <Label>Document Type</Label>
              <Select value={documentFormData.type} onValueChange={(value: any) => setDocumentFormData({...documentFormData, type: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Purchase Contract</SelectItem>
                  <SelectItem value="title">Title Document</SelectItem>
                  <SelectItem value="registration">Registration</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="financing">Financing Document</SelectItem>
                  <SelectItem value="warranty">Warranty</SelectItem>
                  <SelectItem value="inspection">Inspection Report</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="documentDescription">Description</Label>
              <Textarea
                id="documentDescription"
                value={documentFormData.description}
                onChange={(e) => setDocumentFormData({...documentFormData, description: e.target.value})}
                placeholder="Brief description of the document"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="documentDueDate">Due Date (optional)</Label>
              <Input
                id="documentDueDate"
                type="date"
                value={documentFormData.dueDate}
                onChange={(e) => setDocumentFormData({...documentFormData, dueDate: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={addDocument}>
              Add Document
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}