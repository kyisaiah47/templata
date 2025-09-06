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
  Car,
  Heart,
  Eye,
  DollarSign,
  Calendar,
  MapPin,
  Star
} from "lucide-react"
import { useCarBuying } from "@/contexts/car-buying-context"

interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  location: string
  dealerName: string
  condition: 'new' | 'used' | 'certified'
  status: 'researching' | 'interested' | 'test-drove' | 'considering' | 'rejected'
  transmission: 'manual' | 'automatic' | 'cvt'
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric'
  exteriorColor: string
  interiorColor: string
  features: string[]
  notes?: string
  dateAdded: Date
  lastViewed: Date
}

export function VehicleSearch() {
  const { data, updateData } = useCarBuying()
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [isAddingVehicle, setIsAddingVehicle] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null)

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    location: '',
    dealerName: '',
    condition: 'used' as const,
    transmission: 'automatic' as const,
    fuelType: 'gasoline' as const,
    exteriorColor: '',
    interiorColor: '',
    features: [] as string[],
    notes: '',
  })

  useEffect(() => {
    const savedVehicles = localStorage.getItem('car-buying-vehicle-search-items')
    if (savedVehicles) {
      const parsed = JSON.parse(savedVehicles)
      setVehicles(parsed.map((v: any) => ({
        ...v,
        dateAdded: new Date(v.dateAdded),
        lastViewed: new Date(v.lastViewed)
      })))
    }
  }, [])

  const saveVehicles = (newVehicles: Vehicle[]) => {
    setVehicles(newVehicles)
    localStorage.setItem('car-buying-vehicle-search-items', JSON.stringify(newVehicles))
  }

  const addVehicle = () => {
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      ...formData,
      status: 'researching',
      features: formData.features.filter(f => f.trim() !== ''),
      dateAdded: new Date(),
      lastViewed: new Date(),
    }
    saveVehicles([...vehicles, newVehicle])
    resetForm()
    setIsAddingVehicle(false)
  }

  const updateVehicle = (id: string, updates: Partial<Vehicle>) => {
    const updatedVehicles = vehicles.map(vehicle => 
      vehicle.id === id 
        ? { ...vehicle, ...updates, lastViewed: new Date() }
        : vehicle
    )
    saveVehicles(updatedVehicles)
  }

  const deleteVehicle = (id: string) => {
    const filteredVehicles = vehicles.filter(vehicle => vehicle.id !== id)
    saveVehicles(filteredVehicles)
  }

  const resetForm = () => {
    setFormData({
      make: '',
      model: '',
      year: new Date().getFullYear(),
      price: 0,
      mileage: 0,
      location: '',
      dealerName: '',
      condition: 'used',
      transmission: 'automatic',
      fuelType: 'gasoline',
      exteriorColor: '',
      interiorColor: '',
      features: [],
      notes: '',
    })
  }

  const interestedCount = vehicles.filter(v => v.status === 'interested').length
  const testDroveCount = vehicles.filter(v => v.status === 'test-drove').length
  const avgPrice = vehicles.length > 0 ? vehicles.reduce((sum, v) => sum + v.price, 0) / vehicles.length : 0

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'interested': return 'default'
      case 'test-drove': return 'secondary'
      case 'considering': return 'outline'
      case 'rejected': return 'destructive'
      default: return 'outline'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vehicle Search</h1>
          <p className="text-muted-foreground">Find and track potential vehicles</p>
        </div>
        <Dialog open={isAddingVehicle} onOpenChange={setIsAddingVehicle}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Vehicle
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Vehicle</DialogTitle>
              <DialogDescription>
                Add a vehicle you're considering to your list.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="make">Make</Label>
                  <Input
                    id="make"
                    value={formData.make}
                    onChange={(e) => setFormData({...formData, make: e.target.value})}
                    placeholder="Honda, Toyota, Ford..."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                    placeholder="Civic, Corolla, F-150..."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
                    min="1990"
                    max={new Date().getFullYear() + 1}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                    min="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mileage">Mileage</Label>
                  <Input
                    id="mileage"
                    type="number"
                    value={formData.mileage}
                    onChange={(e) => setFormData({...formData, mileage: parseInt(e.target.value)})}
                    min="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, State"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dealerName">Dealer/Seller</Label>
                  <Input
                    id="dealerName"
                    value={formData.dealerName}
                    onChange={(e) => setFormData({...formData, dealerName: e.target.value})}
                    placeholder="Dealer name or private seller"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Condition</Label>
                  <Select value={formData.condition} onValueChange={(value: any) => setFormData({...formData, condition: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="certified">Certified Pre-Owned</SelectItem>
                      <SelectItem value="used">Used</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Transmission</Label>
                  <Select value={formData.transmission} onValueChange={(value: any) => setFormData({...formData, transmission: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automatic">Automatic</SelectItem>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="cvt">CVT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this vehicle..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addVehicle}>
                Add Vehicle
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Search Progress</CardTitle>
            <CardDescription>
              {interestedCount} of {vehicles.length} vehicles marked as interested
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={vehicles.length > 0 ? (interestedCount / vehicles.length) * 100 : 0} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">
              {vehicles.length > 0 ? ((interestedCount / vehicles.length) * 100).toFixed(1) : 0}% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Drives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testDroveCount}</div>
            <p className="text-xs text-muted-foreground">vehicles test driven</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${avgPrice.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">across all vehicles</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vehicle List</CardTitle>
          <CardDescription>All vehicles you're tracking</CardDescription>
        </CardHeader>
        <CardContent>
          {vehicles.length === 0 ? (
            <div className="text-center py-8">
              <Car className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No vehicles yet. Add your first vehicle to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your vehicle search list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Mileage</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {vehicle.condition} • {vehicle.transmission}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>${vehicle.price.toLocaleString()}</TableCell>
                    <TableCell>{vehicle.mileage.toLocaleString()} mi</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {vehicle.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(vehicle.status)}>
                        {vehicle.status.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateVehicle(vehicle.id, { 
                            status: vehicle.status === 'interested' ? 'researching' : 'interested' 
                          })}
                        >
                          <Heart className={`h-4 w-4 ${vehicle.status === 'interested' ? 'fill-red-500 text-red-500' : ''}`} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteVehicle(vehicle.id)}
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