"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Car,
  DollarSign,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Search,
  FileText,
  Wrench,
  Handshake
} from "lucide-react"
import { useCarBuying } from "@/contexts/car-buying-context"

export function CarBuyingOverview() {
  const { data } = useCarBuying()
  
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    vehiclesViewed: 0,
    offersSubmitted: 0,
    budgetUsed: 0,
    inspectionsScheduled: 0,
    daysSearching: 0
  })

  useEffect(() => {
    // Load data from localStorage and calculate metrics
    const vehicles = JSON.parse(localStorage.getItem('car-buying-vehicle-search-items') || '[]')
    const negotiations = JSON.parse(localStorage.getItem('car-buying-negotiations-items') || '[]')
    const inspections = JSON.parse(localStorage.getItem('car-buying-inspections-items') || '[]')
    const financing = JSON.parse(localStorage.getItem('car-buying-financing-items') || '[]')
    
    const vehiclesViewed = vehicles.length
    const offersSubmitted = negotiations.filter((n: any) => n.status === 'offer-submitted' || n.status === 'negotiating' || n.status === 'accepted').length
    const inspectionsScheduled = inspections.filter((i: any) => i.status === 'scheduled' || i.status === 'completed').length
    
    // Calculate budget used from financing
    const totalBudget = financing.reduce((sum: number, f: any) => sum + (f.approvedAmount || 0), 0)
    const budgetUsed = negotiations.filter((n: any) => n.status === 'accepted').reduce((sum: number, n: any) => sum + (n.offerAmount || 0), 0)
    const budgetPercentage = totalBudget > 0 ? (budgetUsed / totalBudget) * 100 : 0
    
    // Calculate overall progress
    const completedTasks = [
      vehicles.some((v: any) => v.status === 'interested'),
      financing.some((f: any) => f.status === 'approved'),
      inspections.some((i: any) => i.status === 'completed'),
      negotiations.some((n: any) => n.status === 'accepted')
    ].filter(Boolean).length
    
    const totalProgress = (completedTasks / 4) * 100
    
    // Calculate days searching
    const startDate = localStorage.getItem('car-buying-start-date')
    const daysSearching = startDate ? Math.floor((Date.now() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) : 0
    
    setMetrics({
      totalProgress,
      vehiclesViewed,
      offersSubmitted,
      budgetUsed: budgetPercentage,
      inspectionsScheduled,
      daysSearching
    })
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Car Buying Dashboard</h1>
          <p className="text-muted-foreground">Track your car buying journey and key milestones</p>
        </div>
        <Button>
          Quick Add Vehicle
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalProgress.toFixed(0)}%</div>
            <Progress value={metrics.totalProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vehicles Viewed</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.vehiclesViewed}</div>
            <p className="text-xs text-muted-foreground">cars researched</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offers Submitted</CardTitle>
            <Handshake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.offersSubmitted}</div>
            <p className="text-xs text-muted-foreground">active negotiations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Searching</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.daysSearching}</div>
            <p className="text-xs text-muted-foreground">since you started</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Found 3 potential vehicles within budget</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Submitted offer on Honda Civic</span>
                <Badge variant="outline">Yesterday</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm">Scheduled inspection for Toyota Corolla</span>
                <Badge variant="outline">2 days ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>What needs attention next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Follow up on loan pre-approval</span>
                <Badge variant="destructive">Due Today</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Schedule test drive for Mazda CX-5</span>
                <Badge variant="outline">This Week</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Research insurance quotes</span>
                <Badge variant="outline">Next Week</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your car buying journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Search className="h-6 w-6" />
              <span className="text-sm">Find Vehicles</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Check Financing</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Wrench className="h-6 w-6" />
              <span className="text-sm">Schedule Inspection</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Review Paperwork</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}