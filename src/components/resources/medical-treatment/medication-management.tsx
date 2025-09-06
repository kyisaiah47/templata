"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink,
  Pill,
  Clock,
  Shield,
  AlertCircle,
  Calendar,
  Phone
} from "lucide-react"

export function MedicationManagement() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Medication Management Guide</h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to safely managing your medications and maximizing treatment effectiveness
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Safety Critical</Badge>
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
            Essential medication management statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50%+</div>
              <p className="text-sm text-muted-foreground">Medication errors preventable</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$100B</div>
              <p className="text-sm text-muted-foreground">Annual non-adherence cost</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">125,000</div>
              <p className="text-sm text-muted-foreground">Deaths from non-adherence yearly</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Medication Safety Fundamentals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Medication Safety Fundamentals
            </CardTitle>
            <CardDescription>Essential safety practices for all medications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Medication safety is the foundation of effective treatment. Following these fundamental practices can prevent serious complications and ensure your medications work as intended.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Know Your Complete Medication List</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep an updated list of all medications, including prescription drugs, over-the-counter medications, vitamins, and supplements with dosages and frequencies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Understand Each Medication's Purpose</h4>
                  <p className="text-sm text-muted-foreground">
                    Know what each medication treats, how it works, and what to expect from treatment. Ask your pharmacist or doctor if anything is unclear.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Read All Labels and Instructions</h4>
                  <p className="text-sm text-muted-foreground">
                    Carefully read prescription labels, patient information leaflets, and follow all special instructions for storage, timing, and administration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Use One Pharmacy When Possible</h4>
                  <p className="text-sm text-muted-foreground">
                    Using a single pharmacy helps prevent dangerous drug interactions and ensures better monitoring of your complete medication profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Store Medications Properly</h4>
                  <p className="text-sm text-muted-foreground">
                    Follow storage instructions carefully - some need refrigeration, others must stay dry. Keep medications in original containers with labels intact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Check Expiration Dates Regularly</h4>
                  <p className="text-sm text-muted-foreground">
                    Expired medications can be ineffective or potentially harmful. Safely dispose of expired medications through pharmacy take-back programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Critical Safety Alert */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800">Never Share Medications</h4>
                  <p className="text-sm text-red-700">
                    Never share your medications with others or take someone else's medications, even for similar conditions. Medications are prescribed specifically for individual patients based on their unique medical history and needs.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adherence & Compliance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Medication Adherence & Timing
            </CardTitle>
            <CardDescription>Strategies for taking medications correctly and consistently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Adherence Strategies */}
            <div className="space-y-3">
              <h4 className="font-semibold">Proven Adherence Strategies:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Use pill organizers or weekly planners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Set phone alarms or app reminders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Link medication times to daily routines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Keep medications visible (safely stored)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Use automatic pharmacy refills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Track medications in a medication diary</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Involve family members in reminders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Use medication adherence apps</span>
                </div>
              </div>
            </div>

            {/* Timing Guidelines */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Timing Guidelines</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Consistent timing is crucial for medication effectiveness:
                  </p>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div><strong>"Once daily":</strong> Take at the same time every day, ideally with a routine activity</div>
                    <div><strong>"Twice daily":</strong> Space 12 hours apart (e.g., 8 AM and 8 PM)</div>
                    <div><strong>"Three times daily":</strong> Space 8 hours apart (e.g., 8 AM, 4 PM, midnight)</div>
                    <div><strong>"With food":</strong> Take during or within 30 minutes of eating</div>
                    <div><strong>"On empty stomach":</strong> Take 1 hour before or 2-3 hours after eating</div>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Side Effects & Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Side Effect Recognition & Response
            </CardTitle>
            <CardDescription>Understanding and managing medication side effects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Side Effect Categories */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Common/Mild</h4>
                  <p className="text-sm text-green-700">
                    Expected and manageable side effects like mild nausea, drowsiness, or dry mouth. Often improve with time.
                  </p>
                  <Badge variant="outline" className="mt-2 bg-green-100 text-green-800">Monitor & Report</Badge>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Concerning/Moderate</h4>
                  <p className="text-sm text-yellow-700">
                    Side effects that affect daily function or quality of life. May require dosage adjustment or alternative medication.
                  </p>
                  <Badge variant="outline" className="mt-2 bg-yellow-100 text-yellow-800">Contact Provider</Badge>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Serious/Severe</h4>
                  <p className="text-sm text-red-700">
                    Dangerous side effects requiring immediate medical attention, such as allergic reactions or organ toxicity.
                  </p>
                  <Badge variant="outline" className="mt-2 bg-red-100 text-red-800">Seek Emergency Care</Badge>
                </div>
              </div>

              {/* Emergency Warning Signs */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800">Seek Emergency Care Immediately For:</h4>
                    <div className="grid md:grid-cols-2 gap-2 mt-2 text-sm text-red-700">
                      <div>• Difficulty breathing or swallowing</div>
                      <div>• Severe rash, hives, or swelling</div>
                      <div>• Chest pain or irregular heartbeat</div>
                      <div>• Severe dizziness or fainting</div>
                      <div>• Signs of severe allergic reaction</div>
                      <div>• Severe stomach pain or bleeding</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Effect Documentation */}
              <div className="space-y-3">
                <h4 className="font-semibold">Documenting Side Effects:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>When:</strong> Date and time the side effect started</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>What:</strong> Detailed description of symptoms</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Severity:</strong> Rate impact on daily activities (1-10 scale)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Duration:</strong> How long symptoms lasted</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Actions:</strong> What helped or made it worse</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Drug Interactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Preventing Drug Interactions
            </CardTitle>
            <CardDescription>Understanding and avoiding dangerous medication combinations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Drug interactions can reduce medication effectiveness or cause dangerous side effects. Being proactive about interaction prevention is crucial for safe treatment.
            </p>

            <div className="space-y-4">
              {/* Types of Interactions */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h5 className="font-semibold text-blue-800 text-sm mb-1">Drug-Drug</h5>
                  <p className="text-xs text-blue-700">Prescription and OTC medications affecting each other</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h5 className="font-semibold text-green-800 text-sm mb-1">Drug-Food</h5>
                  <p className="text-xs text-green-700">Food or beverages affecting medication absorption</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h5 className="font-semibold text-purple-800 text-sm mb-1">Drug-Supplement</h5>
                  <p className="text-xs text-purple-700">Vitamins, herbs, and supplements causing interactions</p>
                </div>
              </div>

              {/* Prevention Strategies */}
              <div className="space-y-3">
                <h4 className="font-semibold">Interaction Prevention Checklist:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Maintain Complete Medication List:</strong> Include all prescriptions, OTC drugs, vitamins, and supplements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Use Interaction Checkers:</strong> Online tools or pharmacy software to screen for interactions
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Consult Healthcare Providers:</strong> Before adding any new medications or supplements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Time Medications Properly:</strong> Some interactions can be avoided with proper spacing
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Interaction Foods */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Foods That Commonly Cause Interactions</h4>
                    <div className="grid md:grid-cols-2 gap-2 mt-2 text-sm text-yellow-700">
                      <div>• Grapefruit and grapefruit juice</div>
                      <div>• High-vitamin K foods (leafy greens)</div>
                      <div>• Dairy products (calcium)</div>
                      <div>• Alcohol</div>
                      <div>• Caffeine</div>
                      <div>• High-sodium foods</div>
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
              Expert Medication Management Tips
            </CardTitle>
            <CardDescription>Professional insights from pharmacists and healthcare providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Pro Tip #1</h4>
                <p className="text-sm text-blue-700">
                  Take photos of your medication bottles before traveling. This provides backup information if medications are lost and helps emergency medical personnel.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip #2</h4>
                <p className="text-sm text-green-700">
                  Build relationships with your pharmacists. They're medication experts who can provide valuable insights about timing, interactions, and side effects.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Pro Tip #3</h4>
                <p className="text-sm text-purple-700">
                  Keep a 7-day emergency supply of critical medications. This protects against pharmacy closures, insurance delays, or natural disasters.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Pro Tip #4</h4>
                <p className="text-sm text-orange-700">
                  Use generic medications when appropriate - they contain the same active ingredients as brand names but cost significantly less.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Pro Tip #5</h4>
                <p className="text-sm text-red-700">
                  Never stop taking medications abruptly without medical supervision. Many medications require gradual tapering to prevent withdrawal or rebound effects.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Pro Tip #6</h4>
                <p className="text-sm text-teal-700">
                  Review your medication list with your doctor annually, even if nothing has changed. This helps identify medications that may no longer be necessary.
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
          <CardDescription>Helpful tools and further information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">FDA Drug Interaction Checker</h4>
                <p className="text-sm text-muted-foreground">Official tool for checking medication and supplement interactions</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">MedlinePlus Drug Information</h4>
                <p className="text-sm text-muted-foreground">Comprehensive medication information from the National Library of Medicine</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">GoodRx Medication Costs</h4>
                <p className="text-sm text-muted-foreground">Compare prescription prices and find discounts at local pharmacies</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">DEA Take Back Program</h4>
                <p className="text-sm text-muted-foreground">Find safe disposal locations for unused or expired medications</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Medication Adherence Apps</h4>
                <p className="text-sm text-muted-foreground">MyMeds, Medisafe, and other apps to help track medications</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact Card */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Medication Emergency Contacts
          </CardTitle>
          <CardDescription className="text-red-700">Keep these numbers readily available</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Lines</h4>
              <div className="space-y-1 text-red-700">
                <div><strong>Poison Control:</strong> 1-800-222-1222</div>
                <div><strong>Emergency Services:</strong> 911</div>
                <div><strong>Crisis Text Line:</strong> Text HOME to 741741</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Your Healthcare Team</h4>
              <div className="space-y-1 text-red-700">
                <div><strong>Primary Doctor:</strong> ________________</div>
                <div><strong>Pharmacy:</strong> ________________</div>
                <div><strong>Insurance:</strong> ________________</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Pill className="h-5 w-5" />
            Ready to Optimize Your Medication Management?
          </CardTitle>
          <CardDescription>Use our guided notes to apply these strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Medication Planning Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Medication Safety Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}