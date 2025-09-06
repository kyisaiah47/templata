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
  Handshake,
  DollarSign,
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Calendar,
  CheckCircle2,
  XCircle
} from "lucide-react"
import { useCarBuying } from "@/contexts/car-buying-context"

interface NegotiationOffer {
  id: string
  type: 'buyer' | 'seller'
  amount: number
  date: Date
  notes?: string
}

interface Negotiation {
  id: string
  vehicleInfo: {
    make: string
    model: string
    year: number
    vin?: string
  }
  dealerInfo: {
    name: string
    salespersonName?: string
    phone?: string
    email?: string
  }
  listingPrice: number
  targetPrice: number
  currentOffer: number
  status: 'researching' | 'initial-contact' | 'offer-submitted' | 'negotiating' | 'accepted' | 'rejected' | 'withdrawn'
  
  // Trade-in information
  hasTradeIn: boolean
  tradeInInfo?: {
    make: string
    model: string
    year: number
    estimatedValue: number
    dealerOffer?: number
  }
  
  // Additional costs
  taxesAndFees: number
  extendedWarranty?: number
  addOns?: {
    name: string
    cost: number
  }[]
  
  offers: NegotiationOffer[]
  communications: {
    id: string
    date: Date
    type: 'call' | 'email' | 'in-person' | 'text'
    summary: string
  }[]
  
  deadlines?: {
    offerExpires?: Date
    financingExpires?: Date
    inspectionDeadline?: Date
  }
  
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function Negotiations() {
  const { data, updateData } = useCarBuying()
  const [negotiations, setNegotiations] = useState<Negotiation[]>([])
  const [isAddingNegotiation, setIsAddingNegotiation] = useState(false)
  const [editingNegotiation, setEditingNegotiation] = useState<Negotiation | null>(null)

  const [formData, setFormData] = useState({
    vehicleInfo: {
      make: '',
      model: '',
      year: new Date().getFullYear(),
      vin: '',
    },
    dealerInfo: {
      name: '',
      salespersonName: '',
      phone: '',
      email: '',
    },
    listingPrice: 0,
    targetPrice: 0,
    currentOffer: 0,
    hasTradeIn: false,
    tradeInInfo: {
      make: '',
      model: '',
      year: new Date().getFullYear(),
      estimatedValue: 0,
      dealerOffer: 0,
    },
    taxesAndFees: 0,
    notes: '',
  })

  useEffect(() => {
    const savedNegotiations = localStorage.getItem('car-buying-negotiations-items')
    if (savedNegotiations) {
      const parsed = JSON.parse(savedNegotiations)
      setNegotiations(parsed.map((negotiation: any) => ({
        ...negotiation,
        offers: negotiation.offers.map((offer: any) => ({
          ...offer,
          date: new Date(offer.date)
        })),
        communications: negotiation.communications.map((comm: any) => ({
          ...comm,
          date: new Date(comm.date)
        })),
        deadlines: negotiation.deadlines ? {
          ...negotiation.deadlines,
          offerExpires: negotiation.deadlines.offerExpires ? new Date(negotiation.deadlines.offerExpires) : undefined,
          financingExpires: negotiation.deadlines.financingExpires ? new Date(negotiation.deadlines.financingExpires) : undefined,
          inspectionDeadline: negotiation.deadlines.inspectionDeadline ? new Date(negotiation.deadlines.inspectionDeadline) : undefined,
        } : undefined,
        createdAt: new Date(negotiation.createdAt),
        updatedAt: new Date(negotiation.updatedAt)
      })))
    }
  }, [])

  const saveNegotiations = (newNegotiations: Negotiation[]) => {
    setNegotiations(newNegotiations)
    localStorage.setItem('car-buying-negotiations-items', JSON.stringify(newNegotiations))
  }

  const addNegotiation = () => {
    const newNegotiation: Negotiation = {
      id: Date.now().toString(),
      ...formData,
      tradeInInfo: formData.hasTradeIn ? formData.tradeInInfo : undefined,
      status: 'initial-contact',
      offers: [{
        id: '1',
        type: 'buyer',
        amount: formData.currentOffer,
        date: new Date(),
        notes: 'Initial offer'
      }],
      communications: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveNegotiations([...negotiations, newNegotiation])
    resetForm()
    setIsAddingNegotiation(false)
  }

  const updateNegotiation = (id: string, updates: Partial<Negotiation>) => {
    const updatedNegotiations = negotiations.map(negotiation => 
      negotiation.id === id 
        ? { ...negotiation, ...updates, updatedAt: new Date() }
        : negotiation
    )
    saveNegotiations(updatedNegotiations)
  }

  const addOffer = (negotiationId: string, offer: Omit<NegotiationOffer, 'id'>) => {
    const negotiation = negotiations.find(n => n.id === negotiationId)
    if (!negotiation) return
    
    const newOffer: NegotiationOffer = {
      ...offer,
      id: Date.now().toString(),
    }
    
    updateNegotiation(negotiationId, {
      offers: [...negotiation.offers, newOffer],
      currentOffer: offer.type === 'buyer' ? offer.amount : negotiation.currentOffer,
    })
  }

  const deleteNegotiation = (id: string) => {
    const filteredNegotiations = negotiations.filter(negotiation => negotiation.id !== id)
    saveNegotiations(filteredNegotiations)
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
        salespersonName: '',
        phone: '',
        email: '',
      },
      listingPrice: 0,
      targetPrice: 0,
      currentOffer: 0,
      hasTradeIn: false,
      tradeInInfo: {
        make: '',
        model: '',
        year: new Date().getFullYear(),
        estimatedValue: 0,
        dealerOffer: 0,
      },
      taxesAndFees: 0,
      notes: '',
    })
  }

  const activeCount = negotiations.filter(n => n.status === 'negotiating' || n.status === 'offer-submitted').length
  const acceptedCount = negotiations.filter(n => n.status === 'accepted').length
  const avgSavings = negotiations.length > 0 ? 
    negotiations.reduce((sum, n) => sum + (n.listingPrice - n.currentOffer), 0) / negotiations.length : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'default'
      case 'negotiating':
      case 'offer-submitted': return 'secondary'
      case 'initial-contact':
      case 'researching': return 'outline'
      case 'rejected':
      case 'withdrawn': return 'destructive'
      default: return 'outline'
    }
  }

  const getSavingsColor = (listingPrice: number, currentOffer: number) => {
    const savings = listingPrice - currentOffer
    return savings > 0 ? 'text-green-600' : savings < 0 ? 'text-red-600' : 'text-muted-foreground'
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Negotiations & Offers</h1>
          <p className="text-muted-foreground">Track your offers and negotiate deals</p>
        </div>
        <Dialog open={isAddingNegotiation} onOpenChange={setIsAddingNegotiation}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Start Negotiation
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Start New Negotiation</DialogTitle>
              <DialogDescription>
                Begin negotiating the purchase of a vehicle.
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
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Dealer Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="dealerName">Dealer Name</Label>
                    <Input
                      id="dealerName"
                      value={formData.dealerInfo.name}
                      onChange={(e) => setFormData({
                        ...formData, 
                        dealerInfo: {...formData.dealerInfo, name: e.target.value}
                      })}
                      placeholder="Dealer name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="salespersonName">Salesperson Name</Label>
                    <Input
                      id="salespersonName"
                      value={formData.dealerInfo.salespersonName}
                      onChange={(e) => setFormData({
                        ...formData, 
                        dealerInfo: {...formData.dealerInfo, salespersonName: e.target.value}
                      })}
                      placeholder="Salesperson name"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Pricing Information</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="listingPrice">Listing Price ($)</Label>
                    <Input
                      id="listingPrice"
                      type="number"
                      value={formData.listingPrice}
                      onChange={(e) => setFormData({...formData, listingPrice: parseInt(e.target.value)})}
                      min="0"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="targetPrice">Target Price ($)</Label>
                    <Input
                      id="targetPrice"
                      type="number"
                      value={formData.targetPrice}
                      onChange={(e) => setFormData({...formData, targetPrice: parseInt(e.target.value)})}
                      min="0"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="currentOffer">Initial Offer ($)</Label>
                    <Input
                      id="currentOffer"
                      type="number"
                      value={formData.currentOffer}
                      onChange={(e) => setFormData({...formData, currentOffer: parseInt(e.target.value)})}
                      min="0"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="taxesAndFees">Estimated Taxes & Fees ($)</Label>
                  <Input
                    id="taxesAndFees"
                    type="number"
                    value={formData.taxesAndFees}
                    onChange={(e) => setFormData({...formData, taxesAndFees: parseInt(e.target.value)})}
                    min="0"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    id="hasTradeIn"
                    type="checkbox"
                    checked={formData.hasTradeIn}
                    onChange={(e) => setFormData({...formData, hasTradeIn: e.target.checked})}
                  />
                  <Label htmlFor="hasTradeIn">I have a trade-in vehicle</Label>
                </div>

                {formData.hasTradeIn && (
                  <div className="space-y-4 border rounded-lg p-4">
                    <h5 className="font-medium">Trade-in Vehicle</h5>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="tradeInMake">Make</Label>
                        <Input
                          id="tradeInMake"
                          value={formData.tradeInInfo.make}
                          onChange={(e) => setFormData({
                            ...formData, 
                            tradeInInfo: {...formData.tradeInInfo, make: e.target.value}
                          })}
                          placeholder="Make"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tradeInModel">Model</Label>
                        <Input
                          id="tradeInModel"
                          value={formData.tradeInInfo.model}
                          onChange={(e) => setFormData({
                            ...formData, 
                            tradeInInfo: {...formData.tradeInInfo, model: e.target.value}
                          })}
                          placeholder="Model"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tradeInYear">Year</Label>
                        <Input
                          id="tradeInYear"
                          type="number"
                          value={formData.tradeInInfo.year}
                          onChange={(e) => setFormData({
                            ...formData, 
                            tradeInInfo: {...formData.tradeInInfo, year: parseInt(e.target.value)}
                          })}
                          min="1990"
                          max={new Date().getFullYear()}
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tradeInValue">Estimated Value ($)</Label>
                      <Input
                        id="tradeInValue"
                        type="number"
                        value={formData.tradeInInfo.estimatedValue}
                        onChange={(e) => setFormData({
                          ...formData, 
                          tradeInInfo: {...formData.tradeInInfo, estimatedValue: parseInt(e.target.value)}
                        })}
                        min="0"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this negotiation..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addNegotiation}>
                Start Negotiation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Negotiations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCount}</div>
            <p className="text-xs text-muted-foreground">ongoing discussions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accepted Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{acceptedCount}</div>
            <p className="text-xs text-muted-foreground">successful negotiations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${avgSavings.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">off listing price</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {negotiations.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Handshake className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No negotiations yet. Start your first negotiation!</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          negotiations.map((negotiation) => (
            <Card key={negotiation.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">
                      {negotiation.vehicleInfo.year} {negotiation.vehicleInfo.make} {negotiation.vehicleInfo.model}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {negotiation.dealerInfo.name}
                      {negotiation.dealerInfo.salespersonName && ` • ${negotiation.dealerInfo.salespersonName}`}
                    </p>
                    <Badge variant={getStatusColor(negotiation.status)} className="mt-1">
                      {negotiation.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const nextStatus = negotiation.status === 'offer-submitted' ? 'accepted' : 
                                         negotiation.status === 'accepted' ? 'offer-submitted' : 'negotiating'
                        updateNegotiation(negotiation.id, { status: nextStatus })
                      }}
                    >
                      Update Status
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteNegotiation(negotiation.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Listing Price</div>
                    <div className="font-semibold">${negotiation.listingPrice.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Current Offer</div>
                    <div className="font-semibold">${negotiation.currentOffer.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Target Price</div>
                    <div className="font-semibold">${negotiation.targetPrice.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Potential Savings</div>
                    <div className={`font-semibold ${getSavingsColor(negotiation.listingPrice, negotiation.currentOffer)}`}>
                      ${(negotiation.listingPrice - negotiation.currentOffer).toLocaleString()}
                    </div>
                  </div>
                </div>

                {negotiation.offers.length > 1 && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Offer History</h4>
                    <div className="space-y-2">
                      {negotiation.offers.slice(-3).map((offer) => (
                        <div key={offer.id} className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2">
                            {offer.type === 'buyer' ? (
                              <TrendingUp className="h-4 w-4 text-blue-500" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-orange-500" />
                            )}
                            <span>{offer.type === 'buyer' ? 'Your offer' : 'Counter offer'}</span>
                            <span className="text-muted-foreground">• {offer.date.toLocaleDateString()}</span>
                          </div>
                          <div className="font-medium">${offer.amount.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {negotiation.notes && (
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">{negotiation.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}