"use client"

import { useState, useEffect } from "react"
import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import { WeddingOverview } from "@/components/wedding-overview"
import { VendorManagement } from "@/components/vendor-management"
import { GuestManagement } from "@/components/guest-management"
import { BudgetTracking } from "@/components/budget-tracking"
import { TaskManagement } from "@/components/task-management"
import { ThemeToggle, ThemeToggleSwitch } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { CalendarIcon, Clock } from "lucide-react"

export default function Page() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setActiveSection(hash)
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case "vendors":
        return <VendorManagement />
      case "guests":
        return <GuestManagement />
      case "budget":
        return <BudgetTracking />
      case "tasks":
        return <TaskManagement />
      case "overview":
      default:
        return <WeddingOverview />
    }
  }

  const getSectionTitle = () => {
    switch (activeSection) {
      case "vendors":
        return "Vendor Management"
      case "guests":
        return "Guest Management"
      case "budget":
        return "Budget Tracking"
      case "tasks":
        return "Task Management"
      case "overview":
      default:
        return "Wedding Overview"
    }
  }

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    {getSectionTitle()} - Sarah & Michael Thompson
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-3 px-3">
            <Badge variant="secondary" className="text-sm hidden sm:flex">
              <CalendarIcon className="mr-1 h-3 w-3" />
              June 15, 2024
            </Badge>
            <Badge variant="outline" className="text-sm hidden sm:flex">
              <Clock className="mr-1 h-3 w-3" />
              142 days left
            </Badge>
            <div className="flex items-center space-x-2">
              <ThemeToggleSwitch />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()}
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  )
}
