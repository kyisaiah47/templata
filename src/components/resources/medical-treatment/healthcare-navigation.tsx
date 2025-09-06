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
  MapPin,
  Phone,
  FileText,
  CreditCard,
  Building,
  Users,
  Shield,
  Search
} from "lucide-react"

export function HealthcareNavigation() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Healthcare Navigation Guide</h1>
        <p className="text-xl text-muted-foreground">
          Master the complex healthcare system and advocate effectively for your care
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Knowledge</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Healthcare System Overview
          </CardTitle>
          <CardDescription>
            Understanding the key components of modern healthcare
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6,000+</div>
              <p className="text-sm text-muted-foreground">Hospitals in the US</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">220+</div>
              <p className="text-sm text-muted-foreground">Medical specialties</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40%</div>
              <p className="text-sm text-muted-foreground">Patients need navigation help</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Understanding Insurance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Understanding Your Insurance Coverage
            </CardTitle>
            <CardDescription>Maximizing benefits and minimizing costs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Understanding your insurance coverage is crucial for making informed healthcare decisions and avoiding unexpected costs. Your insurance plan determines which providers you can see, what treatments are covered, and how much you'll pay.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Know Your Plan Type</h4>
                  <p className="text-sm text-muted-foreground">
                    Understand whether you have an HMO, PPO, EPO, or POS plan, as this affects provider choices and referral requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Master Your Benefits</h4>
                  <p className="text-sm text-muted-foreground">
                    Know your deductible, out-of-pocket maximum, copays, and coinsurance. Keep your benefits summary handy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Use In-Network Providers</h4>
                  <p className="text-sm text-muted-foreground">
                    Stay within your insurance network whenever possible to minimize costs. Use your insurer's provider directory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Understand Prior Authorization</h4>
                  <p className="text-sm text-muted-foreground">
                    Some treatments require pre-approval. Work with your doctor's office to obtain authorization before treatment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Appeal Denied Claims</h4>
                  <p className="text-sm text-muted-foreground">
                    If treatment is denied, you have the right to appeal. Keep detailed records and work with your provider's staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Track Your Spending</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your deductible progress and out-of-pocket spending throughout the year using online portals or apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance Plan Comparison */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">Common Insurance Plan Types</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-700">
                <div>
                  <strong>HMO (Health Maintenance Organization):</strong>
                  <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
                    <li>Primary care physician required</li>
                    <li>Referrals needed for specialists</li>
                    <li>Lower costs, limited network</li>
                  </ul>
                </div>
                <div>
                  <strong>PPO (Preferred Provider Organization):</strong>
                  <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
                    <li>No referrals required</li>
                    <li>Can see out-of-network providers</li>
                    <li>Higher costs, more flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Finding the Right Providers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Finding the Right Healthcare Providers
            </CardTitle>
            <CardDescription>Researching and selecting qualified providers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Provider Research Checklist */}
            <div className="space-y-3">
              <h4 className="font-semibold">Provider Research Checklist:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Board certification in relevant specialty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Hospital affiliations and privileges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Experience with your condition</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Patient reviews and satisfaction scores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Insurance network participation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Office location and accessibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Communication style and approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Availability and scheduling flexibility</span>
                </div>
              </div>
            </div>

            {/* Research Resources */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Top Provider Research Resources</h4>
                  <div className="mt-2 space-y-1 text-sm text-green-700">
                    <div><strong>State medical boards:</strong> License verification and disciplinary history</div>
                    <div><strong>Hospital websites:</strong> Provider profiles and credentials</div>
                    <div><strong>Healthgrades/Vitals:</strong> Patient reviews and quality ratings</div>
                    <div><strong>Professional societies:</strong> Directory of board-certified specialists</div>
                    <div><strong>Insurance directories:</strong> In-network provider search tools</div>
                  </div>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Patient Rights and Advocacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Patient Rights and Self-Advocacy
            </CardTitle>
            <CardDescription>Understanding your rights and advocating for quality care</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Patient Rights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Your Fundamental Rights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Informed consent:</strong> Full information about treatments, risks, and alternatives</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Privacy protection:</strong> HIPAA rights to medical record confidentiality</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Second opinions:</strong> Right to consult other healthcare providers</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Medical records:</strong> Access to complete medical records and test results</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Treatment refusal:</strong> Right to refuse treatments or procedures</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Effective Advocacy Strategies</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Prepare thoroughly:</strong> Research your condition and prepare questions in advance</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Bring an advocate:</strong> Have a trusted person accompany you to appointments</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Document everything:</strong> Keep detailed records of all interactions and treatments</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Ask clarifying questions:</strong> Don't leave appointments with unanswered questions</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Escalate when necessary:</strong> Speak to supervisors or file complaints when needed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* When to Escalate */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">When to Escalate Your Concerns</h4>
                    <div className="grid md:grid-cols-2 gap-2 mt-2 text-sm text-yellow-700">
                      <div>• Safety concerns or medical errors</div>
                      <div>• Discrimination or disrespectful treatment</div>
                      <div>• Unreasonable delays in care</div>
                      <div>• Billing errors or insurance issues</div>
                      <div>• Lack of communication from providers</div>
                      <div>• Inadequate pain management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Managing Medical Records */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Medical Records Management
            </CardTitle>
            <CardDescription>Organizing and accessing your health information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Proper medical record management ensures continuity of care, prevents duplicate testing, and empowers you to make informed healthcare decisions.
            </p>

            <div className="space-y-4">
              {/* Organization System */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Physical Records Organization</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Three-ring binders with divider tabs by provider or condition</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Chronological filing within each section</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Master summary sheet with key information</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Portable folder for appointments</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Digital Records Management</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Cloud storage with encrypted, organized folders</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Patient portal access for all providers</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Mobile access through secure health apps</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>Regular backups and security updates</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Essential Documents */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3">Essential Documents to Maintain</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-700">
                  <div className="space-y-1">
                    <div>• Complete medication list with dosages</div>
                    <div>• Allergy and adverse reaction records</div>
                    <div>• Vaccination history and immunization records</div>
                    <div>• Family medical history summary</div>
                  </div>
                  <div className="space-y-1">
                    <div>• Lab results and diagnostic imaging reports</div>
                    <div>• Surgical and procedure reports</div>
                    <div>• Insurance cards and policy information</div>
                    <div>• Emergency contact and healthcare proxy forms</div>
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
              Expert Healthcare Navigation Tips
            </CardTitle>
            <CardDescription>Insider knowledge from healthcare professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Pro Tip #1</h4>
                <p className="text-sm text-blue-700">
                  Schedule follow-up appointments before leaving the office. Popular specialists can have months-long wait times for new appointments.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip #2</h4>
                <p className="text-sm text-green-700">
                  Build relationships with office staff - they often control scheduling and can provide valuable insights about providers and processes.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Pro Tip #3</h4>
                <p className="text-sm text-purple-700">
                  Keep a running list of questions on your phone. Add items as they occur to you, so you're prepared for every appointment.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Pro Tip #4</h4>
                <p className="text-sm text-orange-700">
                  Request itemized bills for all medical services. Review them carefully for errors - medical billing mistakes are surprisingly common.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Pro Tip #5</h4>
                <p className="text-sm text-red-700">
                  Always confirm your insurance benefits directly with your insurer before expensive procedures, even if your provider's office says it's covered.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Pro Tip #6</h4>
                <p className="text-sm text-teal-700">
                  Use telemedicine when appropriate - it's often more convenient and cost-effective for routine follow-ups and minor health concerns.
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
          <CardDescription>Tools and organizations for healthcare navigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Healthcare.gov Consumer Resources</h4>
                <p className="text-sm text-muted-foreground">Official guide to understanding insurance and patient rights</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Patient Advocate Foundation</h4>
                <p className="text-sm text-muted-foreground">Free professional case management and healthcare navigation</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Centers for Medicare & Medicaid Services</h4>
                <p className="text-sm text-muted-foreground">Medicare and Medicaid program information and resources</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Joint Commission Patient Safety Resources</h4>
                <p className="text-sm text-muted-foreground">Quality and safety information for healthcare consumers</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">National Patient Safety Foundation</h4>
                <p className="text-sm text-muted-foreground">Patient safety resources and advocacy tools</p>
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
          <CardTitle className="text-primary flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Ready to Navigate Healthcare with Confidence?
          </CardTitle>
          <CardDescription>Use our guided notes to build your navigation skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Healthcare Navigation Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Navigation Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}