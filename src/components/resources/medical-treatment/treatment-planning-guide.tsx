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
  Heart,
  ClipboardList,
  Users,
  Calendar,
  Brain,
  Shield
} from "lucide-react"

export function TreatmentPlanningGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Treatment Planning Guide</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive guide to developing and managing your medical treatment plan
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
            Key components of effective treatment planning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-7 Steps</div>
              <p className="text-sm text-muted-foreground">Average planning stages</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2-4 Weeks</div>
              <p className="text-sm text-muted-foreground">Planning timeframe</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3-5 Specialists</div>
              <p className="text-sm text-muted-foreground">Typical team size</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Understanding Your Diagnosis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Understanding Your Diagnosis
            </CardTitle>
            <CardDescription>Building a foundation of knowledge about your condition</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Understanding your diagnosis is the first step toward effective treatment planning. This knowledge empowers you to make informed decisions and communicate effectively with your healthcare team.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Get the Complete Picture</h4>
                  <p className="text-sm text-muted-foreground">
                    Request detailed information about your condition, including stage, severity, and prognosis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Understand Medical Terminology</h4>
                  <p className="text-sm text-muted-foreground">
                    Ask for explanations in plain language and keep a glossary of terms related to your condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Research Reputable Sources</h4>
                  <p className="text-sm text-muted-foreground">
                    Use trusted medical websites, patient organizations, and academic resources for additional information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Document Everything</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep detailed records of your diagnosis, test results, and all communications with healthcare providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Prepare Questions</h4>
                  <p className="text-sm text-muted-foreground">
                    Write down questions about your condition, treatment options, and expected outcomes before appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Consider Second Opinions</h4>
                  <p className="text-sm text-muted-foreground">
                    For complex or serious conditions, seeking additional medical opinions can provide valuable perspective.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Building Your Healthcare Team */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Building Your Healthcare Team
            </CardTitle>
            <CardDescription>Assembling the right specialists and support professionals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Team Members Checklist */}
            <div className="space-y-3">
              <h4 className="font-semibold">Essential Team Members:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Primary Care Physician (coordinator)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Relevant Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Nurse Navigator (if available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Pharmacist for medication guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Mental Health Professional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Social Worker (insurance/resources)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Physical/Occupational Therapist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Dietitian or Nutritionist</span>
                </div>
              </div>
            </div>

            {/* Team Coordination Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Team Coordination Tips</h4>
                  <p className="text-sm text-blue-700">
                    Ensure all team members communicate effectively by designating a primary coordinator, sharing records across the team, and maintaining a master contact list with all providers and their specialties.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Treatment Options & Decision Making */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Treatment Options & Decision Making
            </CardTitle>
            <CardDescription>Evaluating and choosing the best treatment approach</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Decision Framework */}
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Explore All Options</h4>
                      <p className="text-sm text-muted-foreground">
                        Work with your team to identify all possible treatment approaches, from conservative to aggressive interventions.
                      </p>
                      <Badge variant="outline" className="mt-2">Research Phase</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Evaluate Risks & Benefits</h4>
                      <p className="text-sm text-muted-foreground">
                        Create a detailed comparison of each treatment option, including success rates, side effects, and quality of life impact.
                      </p>
                      <Badge variant="outline" className="mt-2">Analysis Phase</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Consider Personal Factors</h4>
                      <p className="text-sm text-muted-foreground">
                        Factor in your personal values, lifestyle, family considerations, and financial situation when making decisions.
                      </p>
                      <Badge variant="outline" className="mt-2">Personal Assessment</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Plan for Contingencies</h4>
                      <p className="text-sm text-muted-foreground">
                        Develop backup plans and discuss what happens if first-line treatments don't work as expected.
                      </p>
                      <Badge variant="outline" className="mt-2">Contingency Planning</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Create Treatment Timeline</h4>
                      <p className="text-sm text-muted-foreground">
                        Establish clear timelines for treatment phases, monitoring milestones, and decision points for adjustments.
                      </p>
                      <Badge variant="outline" className="mt-2">Implementation Phase</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance & Financial Planning */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Insurance & Financial Considerations
            </CardTitle>
            <CardDescription>Managing the financial aspects of your treatment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Understanding insurance coverage and planning for treatment costs is crucial for avoiding financial stress during medical care.
            </p>

            {/* Warning Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Get Pre-Authorization</h4>
                  <p className="text-sm text-yellow-700">
                    Always obtain pre-authorization from your insurance company before starting expensive treatments or procedures to avoid unexpected costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Review Insurance Benefits</h4>
                  <p className="text-sm text-muted-foreground">
                    Understand your coverage limits, deductibles, co-pays, and out-of-network costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Explore Financial Assistance</h4>
                  <p className="text-sm text-muted-foreground">
                    Look into hospital charity care programs, pharmaceutical assistance, and non-profit support organizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Budget for Treatment Costs</h4>
                  <p className="text-sm text-muted-foreground">
                    Create a comprehensive budget including direct medical costs, travel, lodging, and lost income.
                  </p>
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
              Expert Tips for Treatment Planning
            </CardTitle>
            <CardDescription>Professional insights and best practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Pro Tip #1</h4>
                <p className="text-sm text-blue-700">
                  Keep a treatment journal to track symptoms, side effects, and questions. This helps you communicate more effectively with your healthcare team.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip #2</h4>
                <p className="text-sm text-green-700">
                  Bring a trusted friend or family member to important appointments. They can help remember information and provide emotional support.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Pro Tip #3</h4>
                <p className="text-sm text-purple-700">
                  Don't hesitate to ask for written summaries of treatment plans and next steps. Having documentation helps prevent misunderstandings.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Pro Tip #4</h4>
                <p className="text-sm text-orange-700">
                  Consider joining patient support groups or online communities for your condition. They provide valuable insights and emotional support.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Pro Tip #5</h4>
                <p className="text-sm text-red-700">
                  Always get copies of all medical records, test results, and imaging studies. Keep both physical and digital copies organized and accessible.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Pro Tip #6</h4>
                <p className="text-sm text-teal-700">
                  Plan for both best-case and worst-case scenarios. Having contingency plans reduces anxiety and ensures you're prepared for different outcomes.
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
          <CardDescription>Helpful links and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">National Patient Advocate Foundation</h4>
                <p className="text-sm text-muted-foreground">Free case management and resource navigation for patients</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Healthcare.gov Treatment Rights</h4>
                <p className="text-sm text-muted-foreground">Understanding your rights as a patient in treatment decisions</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">NeedyMeds Financial Assistance Database</h4>
                <p className="text-sm text-muted-foreground">Comprehensive database of patient assistance programs</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Joint Commission Patient Resources</h4>
                <p className="text-sm text-muted-foreground">Quality and safety standards for healthcare organizations</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">MedlinePlus Treatment Information</h4>
                <p className="text-sm text-muted-foreground">Reliable medical information from the National Library of Medicine</p>
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
            <Heart className="h-5 w-5" />
            Ready to Start Planning?
          </CardTitle>
          <CardDescription>Use our guided notes to apply what you've learned</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Guided Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Planning Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}