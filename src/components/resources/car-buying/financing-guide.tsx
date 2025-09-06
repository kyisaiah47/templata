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
  Calculator,
  TrendingUp
} from "lucide-react"

export function FinancingGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Auto Financing Guide</h1>
        <p className="text-xl text-muted-foreground">
          Master car loans, rates, and financing strategies to save thousands
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Money-Saving Guide</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Financing Quick Facts
          </CardTitle>
          <CardDescription>
            Key numbers to know before you shop
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">740+</div>
              <p className="text-sm text-muted-foreground">Credit score for best rates</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3-5%</div>
              <p className="text-sm text-muted-foreground">Average interest rates (good credit)</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60 months</div>
              <p className="text-sm text-muted-foreground">Recommended max loan term</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Credit Score Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Credit Score Impact on Rates
            </CardTitle>
            <CardDescription>How your credit score affects your interest rate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your credit score is the single most important factor in determining your interest rate. Even small improvements can save thousands over the loan term.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-semibold">Excellent (740+)</span>
                </div>
                <span className="text-green-700 font-semibold">2.9% - 4.5% APR</span>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg bg-blue-50 border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="font-semibold">Good (680-739)</span>
                </div>
                <span className="text-blue-700 font-semibold">4.5% - 6.5% APR</span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="font-semibold">Fair (620-679)</span>
                </div>
                <span className="text-yellow-700 font-semibold">6.5% - 12% APR</span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg bg-red-50 border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="font-semibold">Poor (300-619)</span>
                </div>
                <span className="text-red-700 font-semibold">12%+ APR</span>
              </div>
            </div>

            {/* Credit Improvement Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-blue-800 mb-2">Quick Credit Boosters</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Pay down credit card balances below 30% of limits</li>
                <li>• Pay all bills on time for 3-6 months before applying</li>
                <li>• Don't close old credit accounts</li>
                <li>• Dispute any errors on your credit report</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Loan Types and Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Financing Options Comparison</CardTitle>
            <CardDescription>Understanding different sources and their pros/cons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Bank/Credit Union Financing */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <h4 className="font-semibold">Banks & Credit Unions</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-green-600 font-medium">✓ Often best rates</div>
                  <div className="text-green-600 font-medium">✓ No dealer markups</div>
                  <div className="text-green-600 font-medium">✓ Pre-approval available</div>
                  <div className="text-red-600 font-medium">✗ Stricter requirements</div>
                  <div className="text-red-600 font-medium">✗ More paperwork</div>
                </div>
                <Badge variant="outline" className="mt-2">Recommended</Badge>
              </div>

              {/* Dealer Financing */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <h4 className="font-semibold">Dealer Financing</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-green-600 font-medium">✓ Convenient one-stop shop</div>
                  <div className="text-green-600 font-medium">✓ Special manufacturer incentives</div>
                  <div className="text-green-600 font-medium">✓ May accept lower credit scores</div>
                  <div className="text-red-600 font-medium">✗ Higher rates possible</div>
                  <div className="text-red-600 font-medium">✗ Pressure tactics</div>
                </div>
                <Badge variant="secondary" className="mt-2">Compare Carefully</Badge>
              </div>

              {/* Online Lenders */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold">Online Lenders</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-green-600 font-medium">✓ Quick pre-approval</div>
                  <div className="text-green-600 font-medium">✓ Competitive rates</div>
                  <div className="text-green-600 font-medium">✓ Easy comparison shopping</div>
                  <div className="text-red-600 font-medium">✗ Limited local support</div>
                  <div className="text-red-600 font-medium">✗ Varying quality</div>
                </div>
                <Badge variant="outline" className="mt-2">Research Required</Badge>
              </div>

              {/* Manufacturer Financing */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-purple-500" />
                  <h4 className="font-semibold">Manufacturer Financing</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-green-600 font-medium">✓ 0% APR promotions</div>
                  <div className="text-green-600 font-medium">✓ Special incentives</div>
                  <div className="text-green-600 font-medium">✓ Strong backing</div>
                  <div className="text-red-600 font-medium">✗ Excellent credit required</div>
                  <div className="text-red-600 font-medium">✗ Limited to specific models</div>
                </div>
                <Badge variant="outline" className="mt-2">If Qualified</Badge>
              </div>
            </div>

            {/* Pro Shopping Strategy */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Star className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Smart Shopping Strategy</h4>
                  <p className="text-sm text-green-700">
                    Get pre-approved from 2-3 lenders before visiting dealers. This gives you negotiating power and prevents dealer rate markups. Compare all offers including any special incentives.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Loan Terms and Payment Strategy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Loan Terms & Payment Strategy
            </CardTitle>
            <CardDescription>Optimizing your loan structure for savings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              {/* Loan Term Analysis */}
              <div>
                <h4 className="font-semibold mb-3">Loan Term Impact Analysis</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 text-left font-semibold">Loan Term</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Monthly Payment</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Total Interest</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3">36 months</td>
                        <td className="border border-gray-200 p-3 font-semibold">$575</td>
                        <td className="border border-gray-200 p-3 text-green-600">$1,215</td>
                        <td className="border border-gray-200 p-3">$21,215</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-200 p-3">48 months ⭐</td>
                        <td className="border border-gray-200 p-3 font-semibold">$442</td>
                        <td className="border border-gray-200 p-3 text-green-600">$1,634</td>
                        <td className="border border-gray-200 p-3">$21,634</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">60 months</td>
                        <td className="border border-gray-200 p-3 font-semibold">$367</td>
                        <td className="border border-gray-200 p-3 text-yellow-600">$2,072</td>
                        <td className="border border-gray-200 p-3">$22,072</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">72 months</td>
                        <td className="border border-gray-200 p-3 font-semibold">$316</td>
                        <td className="border border-gray-200 p-3 text-red-600">$2,731</td>
                        <td className="border border-gray-200 p-3">$22,731</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-2">*Based on $20,000 loan at 4.5% APR</p>
              </div>

              {/* Payment Strategy Tips */}
              <div className="space-y-4">
                <h4 className="font-semibold">Smart Payment Strategies</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Extra Principal Payments</h5>
                    <p className="text-sm text-blue-700 mb-2">
                      Adding $50-100/month to principal can save thousands in interest and shorten loan term significantly.
                    </p>
                    <Badge variant="outline" className="text-blue-700 border-blue-300">High Impact</Badge>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Bi-weekly Payments</h5>
                    <p className="text-sm text-green-700 mb-2">
                      Pay half your monthly payment every two weeks. This equals 13 months of payments per year.
                    </p>
                    <Badge variant="outline" className="text-green-700 border-green-300">Easy Setup</Badge>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 mb-2">Refinancing Strategy</h5>
                    <p className="text-sm text-purple-700 mb-2">
                      Consider refinancing if your credit improves or rates drop by 1%+ after 12+ months.
                    </p>
                    <Badge variant="outline" className="text-purple-700 border-purple-300">Future Option</Badge>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-800 mb-2">Gap Insurance Decision</h5>
                    <p className="text-sm text-orange-700 mb-2">
                      Only needed if you put less than 20% down or choose a loan term longer than the car's value curve.
                    </p>
                    <Badge variant="outline" className="text-orange-700 border-orange-300">Situational</Badge>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Common Financing Mistakes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Common Financing Mistakes to Avoid
            </CardTitle>
            <CardDescription>Learn from others' expensive errors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Focusing Only on Monthly Payment</h4>
                  <p className="text-sm text-red-700">
                    Low monthly payments often mean longer terms and much higher total cost. Always calculate total interest paid.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Rolling Negative Equity</h4>
                  <p className="text-sm text-red-700">
                    Adding your old loan balance to a new loan creates a debt spiral. Pay off negative equity first if possible.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Skipping Pre-Approval</h4>
                  <p className="text-sm text-red-700">
                    Going to dealers without financing lined up gives them all the power. Get approved elsewhere first.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Accepting Add-On Products</h4>
                  <p className="text-sm text-red-700">
                    Extended warranties, gap insurance, and protection packages are usually overpriced and unnecessary.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Not Reading Fine Print</h4>
                  <p className="text-sm text-red-700">
                    Promotional rates often have strict requirements. Ensure you qualify before assuming you'll get advertised rates.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Choosing Long Loan Terms</h4>
                  <p className="text-sm text-red-700">
                    72+ month loans mean years of being underwater on the loan and paying excessive interest charges.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Financing Resources & Tools</CardTitle>
          <CardDescription>Calculate payments and compare options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Auto Loan Calculator</h4>
                <p className="text-sm text-muted-foreground">Calculate monthly payments and total costs</p>
              </div>
              <Button variant="outline" size="sm">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Credit Karma</h4>
                <p className="text-sm text-muted-foreground">Free credit score and loan pre-qualification</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">MyFico</h4>
                <p className="text-sm text-muted-foreground">Official FICO scores from all three bureaus</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">LightStream</h4>
                <p className="text-sm text-muted-foreground">Online auto loans with competitive rates</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Local Credit Union Finder</h4>
                <p className="text-sm text-muted-foreground">Find credit unions in your area for better rates</p>
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
          <CardTitle className="text-primary">Ready to Secure Financing?</CardTitle>
          <CardDescription>Apply these strategies to your car purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Track Your Financing
            </Button>
            <Button variant="outline">
              <Calculator className="h-4 w-4 mr-2" />
              Payment Calculator
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}