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
  Calendar,
  Clock,
  FileText,
  User,
  Briefcase,
  Phone,
  Clipboard,
  MessageSquare
} from "lucide-react"

export function AppointmentPreparation() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Appointment Preparation Guide</h1>
        <p className="text-xl text-muted-foreground">
          Maximize every healthcare appointment with thorough preparation and effective communication
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Communication Essential</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Appointment Success Statistics
          </CardTitle>
          <CardDescription>
            Why preparation matters for healthcare outcomes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60%</div>
              <p className="text-sm text-muted-foreground">Better outcomes with preparation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">18 Minutes</div>
              <p className="text-sm text-muted-foreground">Average appointment length</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40%</div>
              <p className="text-sm text-muted-foreground">Patients forget key questions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Pre-Appointment Preparation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clipboard className="h-5 w-5" />
              Pre-Appointment Preparation
            </CardTitle>
            <CardDescription>Essential steps to take before your healthcare visit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Proper preparation before your appointment ensures you make the most of your limited time with healthcare providers and helps them give you the best possible care.
            </p>
            
            <div className="space-y-6">
              {/* 48-72 Hours Before */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-800 mb-3">48-72 Hours Before Appointment</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Gather medical records:</strong> Recent test results, imaging reports, and relevant medical history
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Update medication list:</strong> Include all prescriptions, over-the-counter drugs, and supplements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Review insurance benefits:</strong> Verify coverage and understand copay requirements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Prepare symptom timeline:</strong> Document when symptoms started and how they've changed
                    </div>
                  </div>
                </div>
              </div>

              {/* 24 Hours Before */}
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800 mb-3">24 Hours Before Appointment</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Confirm appointment details:</strong> Time, location, parking, and check-in procedures
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Complete any required forms:</strong> Patient portals often allow pre-registration
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Plan your transportation:</strong> Account for traffic and parking time
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Arrange for an advocate:</strong> Consider bringing a trusted person for support and note-taking
                    </div>
                  </div>
                </div>
              </div>

              {/* Morning of Appointment */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-800 mb-3">Morning of Appointment</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Pack your appointment bag:</strong> Insurance cards, ID, medication list, and questions
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Follow pre-visit instructions:</strong> Fasting, medication timing, or other specific requirements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Review your question list:</strong> Prioritize your most important concerns
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Plan to arrive early:</strong> Allow 15-30 minutes for check-in and paperwork
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Effective Communication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Effective Communication During Appointments
            </CardTitle>
            <CardDescription>Strategies for clear, productive conversations with providers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Communication Framework */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">The SBAR Communication Framework</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <strong>Situation:</strong> "I've been experiencing [symptoms] for [duration]"
                </div>
                <div>
                  <strong>Background:</strong> "My medical history includes [relevant conditions]"
                </div>
                <div>
                  <strong>Assessment:</strong> "I'm concerned this might be [your thoughts]"
                </div>
                <div>
                  <strong>Request:</strong> "I'd like to discuss [specific action or test]"
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Communication Best Practices */}
              <div className="space-y-3">
                <h4 className="font-semibold">Communication Best Practices:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Start with your most important concern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Be specific about symptoms and timing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ask questions if you don't understand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Request written instructions or summaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Take notes or bring someone to help remember</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Confirm next steps before leaving</span>
                  </div>
                </div>
              </div>

              {/* Question Types */}
              <div className="space-y-3">
                <h4 className="font-semibold">Types of Questions to Ask:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h5 className="font-semibold text-green-800 text-sm mb-2">Diagnostic Questions</h5>
                    <div className="space-y-1 text-xs text-green-700">
                      <div>• "What do you think is causing this?"</div>
                      <div>• "What tests do we need?"</div>
                      <div>• "When will we get results?"</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h5 className="font-semibold text-blue-800 text-sm mb-2">Treatment Questions</h5>
                    <div className="space-y-1 text-xs text-blue-700">
                      <div>• "What are my treatment options?"</div>
                      <div>• "What are the risks and benefits?"</div>
                      <div>• "What happens if I don't treat this?"</div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <h5 className="font-semibold text-purple-800 text-sm mb-2">Follow-up Questions</h5>
                    <div className="space-y-1 text-xs text-purple-700">
                      <div>• "When should I schedule follow-up?"</div>
                      <div>• "What symptoms should concern me?"</div>
                      <div>• "How will we monitor progress?"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Different Appointment Types */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Preparing for Different Appointment Types
            </CardTitle>
            <CardDescription>Specific preparation strategies for various healthcare visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* New Patient Appointments */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  New Patient Appointments
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div className="space-y-1">
                    <div><strong>Bring:</strong></div>
                    <div>• Complete medical history</div>
                    <div>• List of current medications</div>
                    <div>• Family medical history</div>
                    <div>• Previous test results</div>
                  </div>
                  <div className="space-y-1">
                    <div><strong>Prepare to discuss:</strong></div>
                    <div>• Your main health concerns</div>
                    <div>• Lifestyle factors (diet, exercise, stress)</div>
                    <div>• Health goals and preferences</div>
                    <div>• Insurance and billing questions</div>
                  </div>
                </div>
              </div>

              {/* Follow-up Appointments */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Follow-up Appointments
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div className="space-y-1">
                    <div><strong>Track since last visit:</strong></div>
                    <div>• Symptom changes and severity</div>
                    <div>• Medication side effects</div>
                    <div>• Treatment effectiveness</div>
                    <div>• New symptoms or concerns</div>
                  </div>
                  <div className="space-y-1">
                    <div><strong>Questions to ask:</strong></div>
                    <div>• "How are my numbers/results?"</div>
                    <div>• "Should we adjust treatment?"</div>
                    <div>• "When do I need to return?"</div>
                    <div>• "Any new precautions needed?"</div>
                  </div>
                </div>
              </div>

              {/* Specialist Consultations */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Specialist Consultations
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                  <div className="space-y-1">
                    <div><strong>Essential preparation:</strong></div>
                    <div>• Referral documentation</div>
                    <div>• Complete records related to condition</div>
                    <div>• Specific questions for specialist</div>
                    <div>• Previous treatment history</div>
                  </div>
                  <div className="space-y-1">
                    <div><strong>Key discussion points:</strong></div>
                    <div>• Specialist's assessment and opinion</div>
                    <div>• Treatment recommendations</div>
                    <div>• Coordination with other providers</div>
                    <div>• Timeline for improvement</div>
                  </div>
                </div>
              </div>

              {/* Emergency/Urgent Care */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Emergency/Urgent Care Visits
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-700">
                  <div className="space-y-1">
                    <div><strong>Always bring:</strong></div>
                    <div>• Photo ID and insurance cards</div>
                    <div>• Current medication list</div>
                    <div>• Emergency contact information</div>
                    <div>• Medical alert information</div>
                  </div>
                  <div className="space-y-1">
                    <div><strong>Be prepared to describe:</strong></div>
                    <div>• Exact timing of symptoms</div>
                    <div>• What triggered the problem</div>
                    <div>• Pain level and characteristics</div>
                    <div>• What you've tried already</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Post-Appointment Follow-up */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Post-Appointment Follow-up
            </CardTitle>
            <CardDescription>Making the most of your visit after you leave</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The work doesn't end when you leave the appointment. Proper follow-up ensures you get the full benefit of your healthcare visit and maintain continuity of care.
            </p>

            <div className="space-y-4">
              {/* Immediate Actions (Same Day) */}
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800 mb-3">Immediately After Appointment (Same Day)</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Review and organize notes:</strong> While the conversation is fresh in your memory
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Schedule follow-up appointments:</strong> Book any required future visits or tests
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Fill new prescriptions:</strong> Start medications as directed
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Contact insurance if needed:</strong> Verify coverage for new treatments or procedures
                    </div>
                  </div>
                </div>
              </div>

              {/* Within 24-48 Hours */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-800 mb-3">Within 24-48 Hours</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Follow up on test results:</strong> Confirm when and how you'll receive results
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Contact other providers:</strong> Share relevant information with your healthcare team
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Update medical records:</strong> Add new information to your personal health record
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong>Research new diagnoses:</strong> Learn about any new conditions from reliable sources
                    </div>
                  </div>
                </div>
              </div>

              {/* Ongoing Monitoring */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Ongoing Monitoring & Communication</h4>
                    <div className="mt-2 space-y-1 text-sm text-yellow-700">
                      <div>• Track symptoms and medication effects in a journal or app</div>
                      <div>• Set reminders for follow-up appointments and medication refills</div>
                      <div>• Contact your provider if symptoms worsen or new concerns arise</div>
                      <div>• Stay engaged with patient portals for test results and messages</div>
                      <div>• Prepare for your next appointment by documenting changes and questions</div>
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
              Expert Appointment Preparation Tips
            </CardTitle>
            <CardDescription>Insider advice from healthcare professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Pro Tip #1</h4>
                <p className="text-sm text-blue-700">
                  Bring your actual medication bottles to appointments, not just a list. This helps providers verify dosages and identify potential issues with different manufacturers.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip #2</h4>
                <p className="text-sm text-green-700">
                  Use the "teach-back" method: repeat important instructions back to your provider to ensure you understood correctly. This prevents miscommunication.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Pro Tip #3</h4>
                <p className="text-sm text-purple-700">
                  Schedule complex appointments (like new patient visits) in the morning when both you and your provider are at peak energy and focus levels.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Pro Tip #4</h4>
                <p className="text-sm text-orange-700">
                  Keep a running "questions for doctor" note on your phone. Add items as they occur to you, so you're always prepared and don't forget important concerns.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Pro Tip #5</h4>
                <p className="text-sm text-red-700">
                  If you have anxiety about appointments, tell your provider at the beginning. They can adjust their communication style and pace to help you feel more comfortable.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Pro Tip #6</h4>
                <p className="text-sm text-teal-700">
                  Prepare a one-page summary of your health status for new providers. Include current symptoms, medical history, and goals - it saves time and ensures nothing is missed.
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
          <CardDescription>Tools and templates for appointment preparation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Agency for Healthcare Research and Quality</h4>
                <p className="text-sm text-muted-foreground">Questions to ask your doctor and appointment preparation tools</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">National Institute on Aging</h4>
                <p className="text-sm text-muted-foreground">Talking with your doctor and healthcare communication tips</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">MedlinePlus Interactive Health Tutorials</h4>
                <p className="text-sm text-muted-foreground">Visual guides for understanding medical procedures and conditions</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Joint Commission Speak Up Campaign</h4>
                <p className="text-sm text-muted-foreground">Patient safety and communication resources</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">MyHealthfinder.gov</h4>
                <p className="text-sm text-muted-foreground">Personalized healthcare recommendations and appointment preparation</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointment Checklist */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Quick Appointment Checklist
          </CardTitle>
          <CardDescription className="text-green-700">Print this checklist for easy reference</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Items to Bring</h4>
              <div className="space-y-1 text-green-700">
                <div>□ Photo ID and insurance cards</div>
                <div>□ Current medication list</div>
                <div>□ Questions list (prioritized)</div>
                <div>□ Symptom timeline/journal</div>
                <div>□ Previous test results</div>
                <div>□ Payment method for copay</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Before You Leave</h4>
              <div className="space-y-1 text-green-700">
                <div>□ Understand the diagnosis</div>
                <div>□ Have clear next steps</div>
                <div>□ Know when to follow up</div>
                <div>□ Understand all medications</div>
                <div>□ Have contact information</div>
                <div>□ Know warning signs to watch</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Ready to Master Your Healthcare Appointments?
          </CardTitle>
          <CardDescription>Use our guided notes to prepare for your next visit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Appointment Preparation Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Appointment Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}