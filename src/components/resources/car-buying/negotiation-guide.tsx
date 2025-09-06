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
  ExternalLink,
  Target,
  Shield,
  Users,
  DollarSign
} from "lucide-react"

export function NegotiationGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Car Negotiation Master Guide</h1>
        <p className="text-xl text-muted-foreground">
          Professional strategies to negotiate the best deal and save thousands
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Money-Saving Tips</Badge>
          <Badge variant="outline">Proven Strategies</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Negotiation Power Stats
          </CardTitle>
          <CardDescription>
            Why negotiation matters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$3,000+</div>
              <p className="text-sm text-muted-foreground">Average savings possible</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15-20%</div>
              <p className="text-sm text-muted-foreground">Typical markup on used cars</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">80%</div>
              <p className="text-sm text-muted-foreground">Of buyers who don't negotiate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Pre-Negotiation Preparation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Pre-Negotiation Preparation
            </CardTitle>
            <CardDescription>Build your negotiating position before you arrive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Successful negotiation starts long before you meet the seller. Preparation is your most powerful weapon in securing a great deal.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Research Market Values</h4>
                  <p className="text-sm text-muted-foreground">
                    Know KBB, Edmunds, and NADA values. Check 10+ similar local listings to understand real market prices. Document your findings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Get Pre-Approved Financing</h4>
                  <p className="text-sm text-muted-foreground">
                    Having your own financing gives you negotiating power and prevents dealer markup. Shop 3+ lenders for best rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Identify All Costs</h4>
                  <p className="text-sm text-muted-foreground">
                    Research typical fees in your area. Know which are negotiable (doc fees, warranties) and which aren't (taxes, registration).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Set Your Walk-Away Price</h4>
                  <p className="text-sm text-muted-foreground">
                    Determine your maximum budget including all costs. Write it down and stick to it. This prevents emotional overspending.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Prepare Comparison Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Print listings of similar cars at lower prices. This gives you concrete evidence for price reductions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Time Your Visit Strategically</h4>
                  <p className="text-sm text-muted-foreground">
                    End of month, quarter, or model year offer best deals. Weekdays are often better than weekends for dealer attention.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Negotiation Strategies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Core Negotiation Strategies
            </CardTitle>
            <CardDescription>Proven tactics that work</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                  <DollarSign className="h-5 w-5" />
                  The "Separate Elements" Strategy
                </h4>
                <p className="text-sm text-blue-700 mb-3">
                  Never negotiate all aspects together. Handle each element separately to maintain control.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="bg-white p-2 rounded border border-blue-300">
                    <strong>Step 1:</strong> Negotiate vehicle price first (ignore trade-in and financing)
                  </div>
                  <div className="bg-white p-2 rounded border border-blue-300">
                    <strong>Step 2:</strong> Discuss trade-in value separately (if applicable)
                  </div>
                  <div className="bg-white p-2 rounded border border-blue-300">
                    <strong>Step 3:</strong> Handle financing options last
                  </div>
                  <div className="bg-white p-2 rounded border border-blue-300">
                    <strong>Step 4:</strong> Address add-ons and extras (usually decline)
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800">
                  <Users className="h-5 w-5" />
                  Psychological Tactics That Work
                </h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-green-700">
                  <div className="bg-white p-3 rounded border border-green-300">
                    <strong>Silence is Power:</strong> After making an offer, stay quiet. Let them respond first.
                  </div>
                  <div className="bg-white p-3 rounded border border-green-300">
                    <strong>Multiple Options:</strong> Shop 3+ dealers to create competition and alternatives.
                  </div>
                  <div className="bg-white p-3 rounded border border-green-300">
                    <strong>Anchoring:</strong> Start with a reasonable but low offer based on market research.
                  </div>
                  <div className="bg-white p-3 rounded border border-green-300">
                    <strong>Time Pressure:</strong> Don't rush. Be prepared to leave and return later.
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-purple-50 border-purple-200">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-purple-800">
                  <Star className="h-5 w-5" />
                  Advanced Negotiation Phrases
                </h4>
                <div className="space-y-2 text-sm text-purple-700">
                  <div className="bg-white p-2 rounded border border-purple-300">
                    "Based on my research, similar cars are selling for $X. Can you meet that price?"
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-300">
                    "I'm ready to buy today if we can agree on $X for the vehicle."
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-300">
                    "I have financing at X%, can you beat that rate?"
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-300">
                    "What's the best price you can offer on this vehicle?"
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-300">
                    "I need to think about it. Can I have your card?"
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Dealer Tactics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Recognize and Counter Dealer Tactics
            </CardTitle>
            <CardDescription>How to handle pressure tactics and manipulation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              
              <div className="grid md:grid-cols-1 gap-4">
                <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-800">🎯 "Four Square" Method</h4>
                  <p className="text-sm text-red-700 mb-2">
                    <strong>Tactic:</strong> Dealer draws four squares showing vehicle price, trade value, down payment, and monthly payment, then manipulates numbers.
                  </p>
                  <p className="text-sm text-red-700">
                    <strong>Counter:</strong> Refuse the four square. Negotiate each element separately. Focus only on total vehicle price first.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-800">💸 "Payment Packing"</h4>
                  <p className="text-sm text-orange-700 mb-2">
                    <strong>Tactic:</strong> "What payment can you afford?" then structures deal around payment, hiding true vehicle cost.
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong>Counter:</strong> Never discuss payments until vehicle price is agreed. Always calculate total cost of ownership.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded">
                  <h4 className="font-semibold text-yellow-800">⏰ False Time Pressure</h4>
                  <p className="text-sm text-yellow-700 mb-2">
                    <strong>Tactic:</strong> "This price is only good today" or "Another buyer is coming tomorrow."
                  </p>
                  <p className="text-sm text-yellow-700">
                    <strong>Counter:</strong> Real deals don't disappear overnight. Be prepared to walk away and return later.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800">🔄 "Let Me Check with My Manager"</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    <strong>Tactic:</strong> Salesperson claims they need manager approval for any price changes.
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong>Counter:</strong> Ask to speak directly with the decision-maker. Don't waste time with back-and-forth.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800">📋 Add-On Assault</h4>
                  <p className="text-sm text-green-700 mb-2">
                    <strong>Tactic:</strong> Pushing extended warranties, gap insurance, fabric protection, and other add-ons in financing office.
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Counter:</strong> Research add-on costs beforehand. Most can be purchased elsewhere for 50-70% less, if needed at all.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800">🎭 Good Cop, Bad Cop</h4>
                  <p className="text-sm text-purple-700 mb-2">
                    <strong>Tactic:</strong> Salesperson is friendly while manager is "tough" on pricing.
                  </p>
                  <p className="text-sm text-purple-700">
                    <strong>Counter:</strong> Remember they're on the same team. Stay focused on your target price regardless of personalities.
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Negotiation Process Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Negotiation Process</CardTitle>
            <CardDescription>Your roadmap to a successful deal</CardDescription>
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
                      <h4 className="font-semibold">Opening Move</h4>
                      <p className="text-sm text-muted-foreground">
                        Present your research. Make initial offer 10-15% below your target price. Show competing listings as evidence.
                      </p>
                      <Badge variant="outline" className="mt-2">Set the anchor</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Counter and Respond</h4>
                      <p className="text-sm text-muted-foreground">
                        They'll counteroffer high. Move up slowly in small increments. Justify every concession with reasoning.
                      </p>
                      <Badge variant="outline" className="mt-2">Stay patient</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Find Middle Ground</h4>
                      <p className="text-sm text-muted-foreground">
                        Look for creative solutions: throwing in maintenance, accessories, or longer warranty instead of pure price cuts.
                      </p>
                      <Badge variant="outline" className="mt-2">Win-win solutions</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Final Push</h4>
                      <p className="text-sm text-muted-foreground">
                        When close to agreement, make final offer: "If you can do $X, I'll buy today." Be prepared to walk if they won't meet it.
                      </p>
                      <Badge variant="outline" className="mt-2">Decision time</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Closing & Documentation</h4>
                      <p className="text-sm text-muted-foreground">
                        Review all paperwork carefully. Ensure agreed price matches documents. Don't rush through financing office add-ons.
                      </p>
                      <Badge variant="outline" className="mt-2">Verify everything</Badge>
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
              Master Negotiator Tips
            </CardTitle>
            <CardDescription>Advanced strategies from the pros</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Use Multiple Dealers</h4>
                <p className="text-sm text-blue-700">
                  Get quotes from 3+ dealers and play them against each other. "Dealer A offered $X, can you beat it?"
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Email Negotiations</h4>
                <p className="text-sm text-green-700">
                  Get initial quotes via email to avoid high-pressure tactics. Create a paper trail of offers and counteroffers.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Timing Advantage</h4>
                <p className="text-sm text-purple-700">
                  Shop during slow periods (bad weather, weekday mornings) when salespeople are hungrier for deals.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Cash vs. Financing</h4>
                <p className="text-sm text-orange-700">
                  Don't mention cash upfront - dealers make money on financing. Negotiate price first, then reveal payment method.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Walk-Away Power</h4>
                <p className="text-sm text-red-700">
                  The person willing to walk away has the most power. Mean it when you say you'll leave - often gets best offers.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Documentation Strategy</h4>
                <p className="text-sm text-teal-700">
                  Bring printouts of competing offers and market research. Visual evidence is much more persuasive than verbal claims.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Negotiation Resources</CardTitle>
          <CardDescription>Tools and calculators to support your negotiation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">True Market Value Calculator</h4>
                <p className="text-sm text-muted-foreground">Edmunds TMV pricing tool</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">CarGurus Price Analysis</h4>
                <p className="text-sm text-muted-foreground">Compare local market pricing</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Analyze
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Auto Loan Comparison Tool</h4>
                <p className="text-sm text-muted-foreground">Compare financing offers</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Negotiation Worksheet</h4>
                <p className="text-sm text-muted-foreground">Track offers and counteroffers</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Negotiate?</CardTitle>
          <CardDescription>Apply these strategies to your next car purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Negotiation Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Strategy Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}