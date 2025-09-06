"use client"

import { useState } from "react"
import { MedicalTreatmentProvider } from '@/contexts/medical-treatment-context'
import { SidebarLeft } from '@/components/templates/medical-treatment/medical-treatment-sidebar-left'
import { MedicalTreatmentSetupWizard } from '@/components/templates/medical-treatment/medical-treatment-setup-wizard'
import { MedicalTreatmentOverview } from '@/components/templates/medical-treatment/medical-treatment-overview'
import { TreatmentPlan } from '@/components/templates/medical-treatment/treatment-plan'
import { Appointments } from '@/components/templates/medical-treatment/appointments'
import { Medications } from '@/components/templates/medical-treatment/medications'
import { SymptomsTracking } from '@/components/templates/medical-treatment/symptoms-tracking'
import { MedicalRecords } from '@/components/templates/medical-treatment/medical-records'
import { DiagnosisPlanning } from '@/components/guided-notes/medical-treatment/diagnosis-planning'
import { TreatmentOptions } from '@/components/guided-notes/medical-treatment/treatment-options'
import { DoctorConsultations } from '@/components/guided-notes/medical-treatment/doctor-consultations'
import { InsuranceCoverage } from '@/components/guided-notes/medical-treatment/insurance-coverage'
import { MedicationManagement } from '@/components/guided-notes/medical-treatment/medication-management'
import { LifestyleAdjustments } from '@/components/guided-notes/medical-treatment/lifestyle-adjustments'
import { SupportNetwork } from '@/components/guided-notes/medical-treatment/support-network'
import { EmergencyPlanning } from '@/components/guided-notes/medical-treatment/emergency-planning'
import { RecoveryMonitoring } from '@/components/guided-notes/medical-treatment/recovery-monitoring'
import { FinancialPlanning } from '@/components/guided-notes/medical-treatment/financial-planning'
import { MyNotes } from '@/components/templates/medical-treatment/my-notes'
import { TreatmentPlanningGuide } from '@/components/resources/medical-treatment/treatment-planning-guide'
import { MedicationManagement as MedicationResource } from '@/components/resources/medical-treatment/medication-management'
import { HealthcareNavigation } from '@/components/resources/medical-treatment/healthcare-navigation'
import { AppointmentPreparation } from '@/components/resources/medical-treatment/appointment-preparation'
import { useMedicalTreatment, MedicalTreatmentData } from '@/contexts/medical-treatment-context'

export default function MedicalTreatmentAppPage() {
  return (
    <MedicalTreatmentProvider>
      <MedicalTreatmentAppContent />
    </MedicalTreatmentProvider>
  )
}

function MedicalTreatmentAppContent() {
  const [currentPage, setCurrentPage] = useState('overview')
  const { isWizardOpen, updateMedicalData } = useMedicalTreatment()

  const handleSetupComplete = (wizardData: Record<string, unknown>) => {
    const medicalData: MedicalTreatmentData = {
      patientName: wizardData.patientName || "",
      dateOfBirth: wizardData.dateOfBirth,
      condition: wizardData.condition || "",
      treatmentGoal: wizardData.treatmentGoal || "",
      primaryDoctor: wizardData.primaryDoctor || "",
      hospitalClinic: wizardData.hospitalClinic || "",
      insurance: wizardData.insurance || "",
      emergencyContact: wizardData.emergencyContact || "",
      treatmentType: wizardData.treatmentType || "",
      startDate: wizardData.startDate,
      frequency: wizardData.frequency || "",
      communicationPreference: wizardData.communicationPreference || "",
      specialNeeds: wizardData.specialNeeds || "",
      notes: wizardData.notes || "",
      setupCompleted: true,
    }
    updateMedicalData(medicalData)
  }
  
  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <MedicalTreatmentOverview />
      case 'treatment':
        return <TreatmentPlan />
      case 'appointments':
        return <Appointments />
      case 'medication':
        return <Medications />
      case 'symptoms':
        return <SymptomsTracking />
      case 'records':
        return <MedicalRecords />
      case 'diagnosis-planning':
        return <DiagnosisPlanning />
      case 'treatment-options':
        return <TreatmentOptions />
      case 'doctor-consultations':
        return <DoctorConsultations />
      case 'insurance-coverage':
        return <InsuranceCoverage />
      case 'medication-management':
        return <MedicationManagement />
      case 'lifestyle-adjustments':
        return <LifestyleAdjustments />
      case 'support-network':
        return <SupportNetwork />
      case 'emergency-planning':
        return <EmergencyPlanning />
      case 'recovery-monitoring':
        return <RecoveryMonitoring />
      case 'financial-planning':
        return <FinancialPlanning />
      case 'my-notes':
        return <MyNotes />
      case 'treatment-planning-guide':
        return <TreatmentPlanningGuide />
      case 'medication-resource':
        return <MedicationResource />
      case 'healthcare-navigation':
        return <HealthcareNavigation />
      case 'appointment-preparation':
        return <AppointmentPreparation />
      default:
        return <MedicalTreatmentOverview />
    }
  }

  return (
    <>
      <div className="flex h-screen">
        <SidebarLeft activeSection={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>

      <MedicalTreatmentSetupWizard
        open={isWizardOpen}
        onComplete={handleSetupComplete}
      />
    </>
  )
}