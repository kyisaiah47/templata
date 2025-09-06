"use client"

import * as React from "react"
import {
  Heart,
  Stethoscope,
  ClipboardList,
  Pill,
  Calendar,
  CreditCard,
  Settings2,
  FileText,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useMedicalTreatment, getMedicalTreatmentDisplayData } from "@/contexts/medical-treatment-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const getData = (patientName: string, activeSection: string = "overview", setCurrentPage?: (page: string) => void) => ({
  teams: [
    {
      name: "Medical Treatment",
      logo: Heart,
      plan: patientName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Heart,
      isActive: activeSection === "overview",
      onClick: () => setCurrentPage?.('overview'),
    },
    {
      title: "Treatment Plan",
      url: "#treatment",
      icon: ClipboardList,
      isActive: activeSection === "treatment",
      onClick: () => setCurrentPage?.('treatment'),
    },
    {
      title: "Appointments",
      url: "#appointments",
      icon: Calendar,
      isActive: activeSection === "appointments",
      onClick: () => setCurrentPage?.('appointments'),
    },
    {
      title: "Medications",
      url: "#medication",
      icon: Pill,
      isActive: activeSection === "medication",
      onClick: () => setCurrentPage?.('medication'),
    },
    {
      title: "Symptoms",
      url: "#symptoms",
      icon: Stethoscope,
      isActive: activeSection === "symptoms",
      onClick: () => setCurrentPage?.('symptoms'),
    },
    {
      title: "Medical Records",
      url: "#records",
      icon: FileText,
      isActive: activeSection === "records",
      onClick: () => setCurrentPage?.('records'),
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#settings",
      icon: Settings2,
    },
  ],
  guidedNotes: [
    {
      name: "Diagnosis Planning",
      url: "#diagnosis-planning",
      emoji: "🔍",
      onClick: () => setCurrentPage?.('diagnosis-planning'),
    },
    {
      name: "Treatment Options",
      url: "#treatment-options",
      emoji: "⚕️",
      onClick: () => setCurrentPage?.('treatment-options'),
    },
    {
      name: "Doctor Consultations",
      url: "#doctor-consultations",
      emoji: "👩‍⚕️",
      onClick: () => setCurrentPage?.('doctor-consultations'),
    },
    {
      name: "Insurance Coverage",
      url: "#insurance-coverage",
      emoji: "💳",
      onClick: () => setCurrentPage?.('insurance-coverage'),
    },
    {
      name: "Medication Management",
      url: "#medication-management",
      emoji: "💊",
      onClick: () => setCurrentPage?.('medication-management'),
    },
    {
      name: "Lifestyle Adjustments",
      url: "#lifestyle-adjustments",
      emoji: "🔄",
      onClick: () => setCurrentPage?.('lifestyle-adjustments'),
    },
    {
      name: "Support Network",
      url: "#support-network",
      emoji: "🤝",
      onClick: () => setCurrentPage?.('support-network'),
    },
    {
      name: "Emergency Planning",
      url: "#emergency-planning",
      emoji: "🆘",
      onClick: () => setCurrentPage?.('emergency-planning'),
    },
    {
      name: "Recovery Monitoring",
      url: "#recovery-monitoring",
      emoji: "📈",
      onClick: () => setCurrentPage?.('recovery-monitoring'),
    },
    {
      name: "Financial Planning",
      url: "#financial-planning",
      emoji: "💰",
      onClick: () => setCurrentPage?.('financial-planning'),
    },
  ],
  resources: [
    {
      name: "Treatment Planning Guide",
      url: "#treatment-planning-guide",
      emoji: "📚",
      onClick: () => setCurrentPage?.('treatment-planning-guide'),
    },
    {
      name: "Medication Management",
      url: "#medication-resource",
      emoji: "💊",
      onClick: () => setCurrentPage?.('medication-resource'),
    },
    {
      name: "Healthcare Navigation",
      url: "#healthcare-navigation",
      emoji: "🗺️",
      onClick: () => setCurrentPage?.('healthcare-navigation'),
    },
    {
      name: "Appointment Preparation",
      url: "#appointment-preparation",
      emoji: "📅",
      onClick: () => setCurrentPage?.('appointment-preparation'),
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "#my-notes",
      emoji: "📝",
      onClick: () => setCurrentPage?.('my-notes'),
    },
  ],
})

export function SidebarLeft({
  activeSection,
  setCurrentPage,
  ...props
}: React.ComponentProps<typeof Sidebar> & { 
  activeSection?: string
  setCurrentPage?: (page: string) => void 
}) {
  const { medicalData } = useMedicalTreatment()
  const displayData = getMedicalTreatmentDisplayData(medicalData)
  const data = getData(displayData.patientName, activeSection, setCurrentPage)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGuidedNotes guidedNotes={data.guidedNotes} activeSection={activeSection} />
        <NavResources resources={data.resources} />
        <NavMyNotes myNotes={data.myNotes} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}