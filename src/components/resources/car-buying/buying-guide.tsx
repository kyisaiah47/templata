"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink
} from "lucide-react"

export function BuyingGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Complete Car Buying Guide</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive guide to buying your next vehicle with confidence
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Guide</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Quick Overview
          </CardTitle>
          <CardDescription>
            Key information at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6-12 weeks</div>
              <p className="text-sm text-muted-foreground">Average buying timeline</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10-20%</div>
              <p className="text-sm text-muted-foreground">Typical down payment</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-7 years</div>
              <p className="text-sm text-muted-foreground">Common loan terms</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Pre-Purchase Planning */}
        <Card>
          <CardHeader>
            <CardTitle>Phase 1: Pre-Purchase Planning</CardTitle>
            <CardDescription>Set your foundation for success</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The most successful car purchases start with thorough planning. This phase sets you up for negotiating power and prevents costly mistakes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Set Your Budget</h4>
                  <p className="text-sm text-muted-foreground">
                    Include down payment, monthly payments, insurance, maintenance, and registration fees. Follow the 20/4/10 rule: 20% down, 4-year max loan, 10% of gross income max.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Check Your Credit Score</h4>
                  <p className="text-sm text-muted-foreground">
                    Know your score before shopping. Scores above 740 get the best rates. If needed, improve your score for 3-6 months before buying.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Research Vehicle Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Compare reliability ratings, safety scores, fuel economy, and total cost of ownership. Consider certified pre-owned for better value.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Get Pre-approved for Financing</h4>
                  <p className="text-sm text-muted-foreground">
                    Shop rates with banks, credit unions, and online lenders. Having pre-approval gives you negotiating power and spending limits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Research Fair Market Values</h4>
                  <p className="text-sm text-muted-foreground">
                    Use KBB, Edmunds, and NADA to understand pricing. Check local listings to see actual market prices in your area.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Prepare Required Documents</h4>
                  <p className="text-sm text-muted-foreground">
                    Gather driver's license, insurance proof, income verification, and trade-in title. Having everything ready speeds up the process.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopping Phase */}
        <Card>
          <CardHeader>
            <CardTitle>Phase 2: Shopping and Evaluation</CardTitle>
            <CardDescription>Find and assess your ideal vehicle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Shopping Checklist */}
            <div className="space-y-3">
              <h4 className="font-semibold">Essential Shopping Steps:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Visit multiple dealers for comparison</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Test drive in various conditions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Check vehicle history report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Inspect exterior and interior thoroughly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Review maintenance records</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Verify title status and liens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Calculate total cost of ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Compare warranty coverage</span>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Avoid Common Pitfalls</h4>
                  <p className="text-sm text-yellow-700">
                    Don't focus solely on monthly payments, avoid extended warranties from dealers, and never sign anything without reading it completely. Emotional decisions often lead to buyer's remorse.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Purchase Process Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Phase 3: Purchase Process Timeline</CardTitle>
            <CardDescription>Step-by-step breakdown of the buying process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Timeline Steps */}
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Price Negotiation</h4>
                      <p className="text-sm text-muted-foreground">
                        Start with market value research. Negotiate the vehicle price first, separate from trade-in and financing discussions.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 1-2 visits</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Financing Arrangements</h4>
                      <p className="text-sm text-muted-foreground">
                        Compare dealer financing with your pre-approval. Negotiate interest rates and avoid unnecessary add-ons.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 1-2 hours</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Final Inspection</h4>
                      <p className="text-sm text-muted-foreground">
                        Conduct thorough pre-purchase inspection, verify all features work, and check for any new damage.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 30-60 minutes</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Documentation & Closing</h4>
                      <p className="text-sm text-muted-foreground">
                        Review all paperwork carefully, verify loan terms match negotiations, and complete title transfer.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 1-2 hours</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Post-Purchase Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        Register vehicle, update insurance, schedule first service, and set up maintenance reminders.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 1 week</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Expert Tips
            </CardTitle>
            <CardDescription>Professional insights and best practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Timing Your Purchase</h4>
                <p className="text-sm text-blue-700">
                  End of month, quarter, and model year offer best deals. Dealers have quotas and incentives that work in your favor.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Trade-In Strategy</h4>
                <p className="text-sm text-green-700">
                  Negotiate vehicle price first, then discuss trade-in separately. Consider selling privately for 15-25% more value.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Hidden Costs to Watch</h4>
                <p className="text-sm text-purple-700">
                  Documentation fees vary widely. Avoid expensive add-ons like extended warranties, gap insurance, and fabric protection.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Research Tools</h4>
                <p className="text-sm text-orange-700">
                  Use multiple sources: KBB, Edmunds, Cars.com, AutoTrader. Check local listings to understand real market conditions.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Negotiation Power</h4>
                <p className="text-sm text-red-700">
                  Cash or pre-approved financing gives you leverage. Be prepared to walk away if terms don't meet your requirements.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Maintenance Planning</h4>
                <p className="text-sm text-teal-700">
                  Budget 15-20% of car's value annually for maintenance. Research common issues for your model and year.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Helpful tools and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Kelley Blue Book</h4>
                <p className="text-sm text-muted-foreground">Vehicle values and pricing information</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Consumer Reports</h4>
                <p className="text-sm text-muted-foreground">Reliability ratings and reviews</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">CARFAX</h4>
                <p className="text-sm text-muted-foreground">Vehicle history reports</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Credit Karma</h4>
                <p className="text-sm text-muted-foreground">Free credit score monitoring</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">NHTSA Safety Ratings</h4>
                <p className="text-sm text-muted-foreground">Vehicle safety information and recalls</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Get Started?</CardTitle>
          <CardDescription>Use our guided notes to apply what you've learned</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Guided Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}