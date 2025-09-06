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
  DollarSign,
  CreditCard,
  TrendingUp,
  FileText,
  Calculator
} from "lucide-react"
import { useCarBuying } from "@/contexts/car-buying-context"

interface FinancingOption {
  id: string
  lenderName: string
  lenderType: 'bank' | 'credit-union' | 'dealer' | 'online' | 'other'
  loanType: 'new-car' | 'used-car' | 'refinance'
  status: 'researching' | 'applied' | 'pre-approved' | 'approved' | 'denied' | 'accepted'
  interestRate: number
  loanTerm: number
  loanAmount: number
  approvedAmount?: number
  monthlyPayment: number
  totalInterest: number
  creditScoreRequired?: number
  downPaymentRequired: number
  applicationDate?: Date
  approvalDate?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function Financing() {
  const { data, updateData } = useCarBuying()
  const [financingOptions, setFinancingOptions] = useState<FinancingOption[]>([])
  const [isAddingOption, setIsAddingOption] = useState(false)
  const [editingOption, setEditingOption] = useState<FinancingOption | null>(null)

  const [formData, setFormData] = useState({
    lenderName: '',
    lenderType: 'bank' as const,
    loanType: 'used-car' as const,
    interestRate: 0,
    loanTerm: 60,
    loanAmount: 0,
    approvedAmount: 0,
    downPaymentRequired: 0,
    creditScoreRequired: 0,
    notes: '',
  })

  useEffect(() => {
    const savedOptions = localStorage.getItem('car-buying-financing-items')
    if (savedOptions) {
      const parsed = JSON.parse(savedOptions)
      setFinancingOptions(parsed.map((option: any) => ({
        ...option,
        applicationDate: option.applicationDate ? new Date(option.applicationDate) : undefined,
        approvalDate: option.approvalDate ? new Date(option.approvalDate) : undefined,
        createdAt: new Date(option.createdAt),
        updatedAt: new Date(option.updatedAt)
      })))
    }
  }, [])

  const saveFinancingOptions = (newOptions: FinancingOption[]) => {
    setFinancingOptions(newOptions)
    localStorage.setItem('car-buying-financing-items', JSON.stringify(newOptions))
  }

  const calculatePayment = (principal: number, rate: number, term: number) => {
    if (rate === 0) return principal / term
    const monthlyRate = rate / 100 / 12
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                   (Math.pow(1 + monthlyRate, term) - 1)
    return Math.round(payment * 100) / 100
  }

  const calculateTotalInterest = (principal: number, payment: number, term: number) => {
    return Math.round((payment * term - principal) * 100) / 100
  }

  const addFinancingOption = () => {
    const monthlyPayment = calculatePayment(formData.loanAmount, formData.interestRate, formData.loanTerm)
    const totalInterest = calculateTotalInterest(formData.loanAmount, monthlyPayment, formData.loanTerm)
    
    const newOption: FinancingOption = {
      id: Date.now().toString(),
      ...formData,
      approvedAmount: formData.approvedAmount || undefined,
      creditScoreRequired: formData.creditScoreRequired || undefined,
      status: 'researching',
      monthlyPayment,
      totalInterest,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveFinancingOptions([...financingOptions, newOption])
    resetForm()
    setIsAddingOption(false)
  }

  const updateFinancingOption = (id: string, updates: Partial<FinancingOption>) => {
    const updatedOptions = financingOptions.map(option => 
      option.id === id 
        ? { ...option, ...updates, updatedAt: new Date() }
        : option
    )
    saveFinancingOptions(updatedOptions)
  }

  const deleteFinancingOption = (id: string) => {
    const filteredOptions = financingOptions.filter(option => option.id !== id)
    saveFinancingOptions(filteredOptions)
  }

  const resetForm = () => {
    setFormData({
      lenderName: '',
      lenderType: 'bank',
      loanType: 'used-car',
      interestRate: 0,
      loanTerm: 60,
      loanAmount: 0,
      approvedAmount: 0,
      downPaymentRequired: 0,
      creditScoreRequired: 0,
      notes: '',
    })
  }

  const approvedCount = financingOptions.filter(option => option.status === 'approved' || option.status === 'pre-approved').length
  const bestRate = financingOptions.length > 0 ? Math.min(...financingOptions.map(o => o.interestRate)) : 0
  const avgPayment = financingOptions.length > 0 ? 
    financingOptions.reduce((sum, o) => sum + o.monthlyPayment, 0) / financingOptions.length : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'default'
      case 'pre-approved': return 'secondary'
      case 'applied': return 'outline'
      case 'denied': return 'destructive'
      case 'accepted': return 'default'
      default: return 'outline'
    }
  }

  const getLenderTypeIcon = (type: string) => {
    switch (type) {
      case 'bank': return <CreditCard className="h-4 w-4" />
      case 'credit-union': return <TrendingUp className="h-4 w-4" />
      case 'dealer': return <FileText className="h-4 w-4" />
      default: return <DollarSign className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financing Options</h1>
          <p className="text-muted-foreground">Compare loans and payment options</p>
        </div>
        <Dialog open={isAddingOption} onOpenChange={setIsAddingOption}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Financing Option
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Financing Option</DialogTitle>
              <DialogDescription>
                Compare different loan options from various lenders.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="lenderName">Lender Name</Label>
                  <Input
                    id="lenderName"
                    value={formData.lenderName}
                    onChange={(e) => setFormData({...formData, lenderName: e.target.value})}
                    placeholder="Chase, Wells Fargo, Local Credit Union..."
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Lender Type</Label>
                  <Select value={formData.lenderType} onValueChange={(value: any) => setFormData({...formData, lenderType: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank</SelectItem>
                      <SelectItem value="credit-union">Credit Union</SelectItem>
                      <SelectItem value="dealer">Dealer Financing</SelectItem>
                      <SelectItem value="online">Online Lender</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Loan Type</Label>
                  <Select value={formData.loanType} onValueChange={(value: any) => setFormData({...formData, loanType: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-car">New Car Loan</SelectItem>
                      <SelectItem value="used-car">Used Car Loan</SelectItem>
                      <SelectItem value="refinance">Refinance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    value={formData.interestRate}
                    onChange={(e) => setFormData({...formData, interestRate: parseFloat(e.target.value)})}
                    min="0"
                    max="30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({...formData, loanAmount: parseInt(e.target.value)})}
                    min="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="loanTerm">Loan Term (months)</Label>
                  <Select value={formData.loanTerm.toString()} onValueChange={(value) => setFormData({...formData, loanTerm: parseInt(value)})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="36">36 months (3 years)</SelectItem>
                      <SelectItem value="48">48 months (4 years)</SelectItem>
                      <SelectItem value="60">60 months (5 years)</SelectItem>
                      <SelectItem value="72">72 months (6 years)</SelectItem>
                      <SelectItem value="84">84 months (7 years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="downPaymentRequired">Down Payment Required ($)</Label>
                  <Input
                    id="downPaymentRequired"
                    type="number"
                    value={formData.downPaymentRequired}
                    onChange={(e) => setFormData({...formData, downPaymentRequired: parseInt(e.target.value)})}
                    min="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="creditScoreRequired">Credit Score Required (optional)</Label>
                  <Input
                    id="creditScoreRequired"
                    type="number"
                    value={formData.creditScoreRequired}
                    onChange={(e) => setFormData({...formData, creditScoreRequired: parseInt(e.target.value)})}
                    min="300"
                    max="850"
                    placeholder="650"
                  />
                </div>
              </div>

              {formData.loanAmount > 0 && formData.interestRate > 0 && (
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Loan Calculator</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Monthly Payment:</span>
                      <div className="font-bold">${calculatePayment(formData.loanAmount, formData.interestRate, formData.loanTerm).toFixed(2)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Interest:</span>
                      <div className="font-bold">${calculateTotalInterest(formData.loanAmount, calculatePayment(formData.loanAmount, formData.interestRate, formData.loanTerm), formData.loanTerm).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this financing option..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addFinancingOption}>
                Add Financing Option
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Approved Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedCount}</div>
            <p className="text-xs text-muted-foreground">out of {financingOptions.length} applications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bestRate.toFixed(2)}%</div>
            <p className="text-xs text-muted-foreground">lowest rate found</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${avgPayment.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">per month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financing Options</CardTitle>
          <CardDescription>Compare your loan options</CardDescription>
        </CardHeader>
        <CardContent>
          {financingOptions.length === 0 ? (
            <div className="text-center py-8">
              <Calculator className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No financing options yet. Add your first option to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your financing options comparison</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Lender</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Monthly Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financingOptions.map((option) => (
                  <TableRow key={option.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getLenderTypeIcon(option.lenderType)}
                        <div>
                          <div className="font-medium">{option.lenderName}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {option.lenderType.replace('-', ' ')} • {option.loanType.replace('-', ' ')}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{option.interestRate}%</TableCell>
                    <TableCell>{option.loanTerm} months</TableCell>
                    <TableCell>${option.monthlyPayment.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(option.status)}>
                        {option.status.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const nextStatus = option.status === 'researching' ? 'applied' : 
                                             option.status === 'applied' ? 'approved' : 
                                             option.status === 'approved' ? 'accepted' : 'researching'
                            updateFinancingOption(option.id, { status: nextStatus })
                          }}
                        >
                          Update Status
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteFinancingOption(option.id)}
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