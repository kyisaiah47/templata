"use client"

import { useState } from "react"
import { CarBuyingProvider } from '@/contexts/car-buying-context'
import { SidebarLeft } from '@/components/templates/car-buying/car-buying-sidebar-left'
import { CarBuyingSetupWizard } from '@/components/templates/car-buying/car-buying-setup-wizard'
import { CarBuyingOverview } from '@/components/templates/car-buying/car-buying-overview'
import { VehicleSearch } from '@/components/templates/car-buying/vehicle-search'
import { Financing } from '@/components/templates/car-buying/financing'
import { Inspections } from '@/components/templates/car-buying/inspections'
import { Negotiations } from '@/components/templates/car-buying/negotiations'
import { PaperworkComponent } from '@/components/templates/car-buying/paperwork'
import { MyNotes } from '@/components/templates/car-buying/my-notes'
import { BuyingGuide } from '@/components/resources/car-buying/buying-guide'
import { FinancingGuide } from '@/components/resources/car-buying/financing-guide'
import { InspectionChecklist } from '@/components/resources/car-buying/inspection-checklist'
import { NegotiationGuide } from '@/components/resources/car-buying/negotiation-guide'
import { useCarBuying } from '@/contexts/car-buying-context'

export default function CarBuyingAppPage() {
  return (
    <CarBuyingProvider>
      <CarBuyingAppContent />
    </CarBuyingProvider>
  )
}

function CarBuyingAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  const { isWizardOpen, updateCarBuyingData } = useCarBuying()

  const handleSetupComplete = (wizardData: Record<string, unknown>) => {
    updateCarBuyingData({
      ...wizardData,
      setupCompleted: true,
    })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <CarBuyingOverview />
      case 'research':
        return <VehicleSearch />
      case 'financing':
        return <Financing />
      case 'inspection':
        return <Inspections />
      case 'purchase':
        return <Negotiations />
      case 'ownership':
        return <PaperworkComponent />
      case 'my-notes':
        return <MyNotes />
      case 'buying-guide':
        return <BuyingGuide />
      case 'financing-guide':
        return <FinancingGuide />
      case 'inspection-checklist':
        return <InspectionChecklist />
      case 'negotiation-guide':
        return <NegotiationGuide />
      default:
        return <CarBuyingOverview />
    }
  }

  // Handle navigation clicks from sidebar
  const handleNavClick = (href: string) => {
    const page = href.replace('#', '')
    setCurrentPage(page)
  }

  return (
    <>
      <div className="flex h-screen">
        <div onClick={(e) => {
          const target = e.target as HTMLElement
          const link = target.closest('a')
          if (link && link.href.includes('#')) {
            e.preventDefault()
            const href = new URL(link.href).hash
            handleNavClick(href)
          }
        }}>
          <SidebarLeft activeSection={currentPage} />
        </div>
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      <CarBuyingSetupWizard
        open={isWizardOpen}
        onComplete={handleSetupComplete}
      />
    </>
  )
}