"use client"

import * as React from "react"
import {
  Car,
  Search,
  DollarSign,
  FileCheck,
  CheckSquare,
  Truck,
  Shield,
  Calculator,
  Settings2,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useCarBuying, getCarBuyingDisplayData } from "@/contexts/car-buying-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (displayName: string, activeSection: string = "overview") => ({
  teams: [
    {
      name: "Car Buying",
      logo: Car,
      plan: displayName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Car,
      isActive: activeSection === "overview",
    },
    {
      title: "Research",
      url: "#research",
      icon: Search,
      isActive: activeSection === "research",
    },
    {
      title: "Financing",
      url: "#financing",
      icon: DollarSign,
      isActive: activeSection === "financing",
    },
    {
      title: "Inspection",
      url: "#inspection",
      icon: FileCheck,
      isActive: activeSection === "inspection",
    },
    {
      title: "Purchase",
      url: "#purchase",
      icon: CheckSquare,
      isActive: activeSection === "purchase",
    },
    {
      title: "Ownership",
      url: "#ownership",
      icon: Shield,
      isActive: activeSection === "ownership",
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
      name: "Budget Planning & Financing",
      url: "/car-buying/guided-notes/budget-planning",
      emoji: "💰",
    },
    {
      name: "Car Research & Selection",
      url: "/car-buying/guided-notes/car-research",
      emoji: "🔍",
    },
    {
      name: "Dealership Shopping Strategy",
      url: "/car-buying/guided-notes/dealership-shopping",
      emoji: "🏢",
    },
    {
      name: "Test Drive & Vehicle Evaluation",
      url: "/car-buying/guided-notes/test-drive",
      emoji: "🚗",
    },
    {
      name: "Car Buying Negotiation",
      url: "/car-buying/guided-notes/negotiation",
      emoji: "🤝",
    },
    {
      name: "Car Insurance Planning",
      url: "/car-buying/guided-notes/insurance",
      emoji: "🛡️",
    },
    {
      name: "Car Purchase Paperwork & Legal",
      url: "/car-buying/guided-notes/paperwork",
      emoji: "📄",
    },
    {
      name: "Pre-Purchase Inspection",
      url: "/car-buying/guided-notes/pre-purchase-inspection",
      emoji: "🔧",
    },
    {
      name: "Post-Purchase Setup",
      url: "/car-buying/guided-notes/post-purchase",
      emoji: "📝",
    },
  ],
  resources: [
    {
      name: "Complete Buying Guide",
      url: "#buying-guide",
      emoji: "📖",
    },
    {
      name: "Financing Guide",
      url: "#financing-guide",
      emoji: "💳",
    },
    {
      name: "Inspection Checklist",
      url: "#inspection-checklist",
      emoji: "✅",
    },
    {
      name: "Negotiation Guide",
      url: "#negotiation-guide",
      emoji: "🤝",
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "#my-notes",
      emoji: "📝",
    },
  ],
})

export function SidebarLeft({
  activeSection,
  ...props
}: React.ComponentProps<typeof Sidebar> & { activeSection?: string }) {
  const { carBuyingData } = useCarBuying()
  const displayData = getCarBuyingDisplayData(carBuyingData)
  const data = getData(displayData.name, activeSection)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGuidedNotes guidedNotes={data.guidedNotes} />
        <NavResources resources={data.resources} />
        <NavMyNotes myNotes={data.myNotes} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}