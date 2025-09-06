"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Paperwork() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Car Purchase Paperwork & Legal</h1>
        <p className="text-muted-foreground">Navigate the legal documents and paperwork required for car purchases.</p>
      </div>

      <Tabs defaultValue="purchase-documents" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 h-auto">
          <TabsTrigger value="purchase-documents" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Purchase Documents</span>
            <span className="sm:hidden">Purchase</span>
          </TabsTrigger>
          <TabsTrigger value="title-registration" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Title & Registration</span>
            <span className="sm:hidden">Title</span>
          </TabsTrigger>
          <TabsTrigger value="legal-protection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Legal Protection</span>
            <span className="sm:hidden">Legal</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="purchase-documents">
          <GuidedNotePage
            title="Purchase Documents & Contracts"
            description="Understand and review essential car purchase paperwork"
            sections={[
              {
                title: "Sales Contract Review",
                prompts: [
                  "What key elements should be included in your sales contract?",
                  "How do you verify all negotiated terms are accurately reflected?",
                  "What financing terms should be clearly documented?",
                  "Are there any clauses or terms you should refuse to sign?",
                  "What happens if you discover errors after signing?"
                ],
                examples: [
                  "Vehicle details (VIN, year, make, model), final price, trade value, tax/fees breakdown",
                  "Compare final contract to your notes, verify all verbal agreements included",
                  "APR, loan term, monthly payment, down payment, total amount financed",
                  "Arbitration clauses, binding commitments for unwanted add-ons, blank spaces",
                  "Contact dealer immediately, document discrepancies, know your cancellation rights"
                ]
              },
              {
                title: "Financing Paperwork",
                prompts: [
                  "What loan documents require your careful review?",
                  "How do you verify financing terms match your agreement?",
                  "What are your rights regarding loan disclosure requirements?",
                  "Should you review Truth in Lending disclosures carefully?",
                  "What payment and default terms should you understand?"
                ],
                examples: [
                  "Promissory note, security agreement, Truth in Lending disclosure, payment schedule",
                  "Check APR, payment amount, loan term, total interest cost match negotiations",
                  "Right to receive clear disclosure of all terms before signing",
                  "Yes, shows total cost of loan, APR, payment schedule, late fees",
                  "Due dates, grace periods, late fees, default consequences, repossession rights"
                ]
              },
              {
                title: "Trade-In Documentation",
                prompts: [
                  "What paperwork is required for your trade-in vehicle?",
                  "How do you ensure trade-in value is properly credited?",
                  "What happens to remaining loan balance on your trade?",
                  "Should you keep copies of trade-in related documents?",
                  "What if trade-in value is less than remaining loan balance?"
                ],
                examples: [
                  "Title (if owned), registration, keys, service records, lien payoff information",
                  "Verify trade value shown on purchase contract, confirm payoff amount accuracy",
                  "Dealer pays off existing loan, any excess goes toward new purchase",
                  "Yes, keep appraisal, payoff letter, any trade-related agreements",
                  "You're responsible for negative equity, often rolled into new loan"
                ]
              },
              {
                title: "Warranty & Service Documentation",
                prompts: [
                  "What warranty documentation should you receive?",
                  "How do you register your vehicle for warranty coverage?",
                  "What service and maintenance requirements affect warranty?",
                  "Should you purchase extended warranty coverage?",
                  "What documentation proves warranty compliance?"
                ],
                examples: [
                  "Factory warranty booklet, extended warranty contracts (if purchased), service requirements",
                  "Dealer usually handles, but verify registration within required timeframe",
                  "Regular maintenance at specified intervals, use of approved fluids/parts",
                  "Usually not recommended, but read terms carefully if considering",
                  "Service records, receipts for maintenance, warranty registration confirmation"
                ]
              }
            ]}
            tips={[
              "Never sign blank documents or agreements with missing information",
              "Take time to read everything carefully - don't let anyone rush you",
              "Keep copies of all signed documents in organized files",
              "Verify all numbers and terms match your negotiations before signing",
              "Ask questions about anything you don't understand completely"
            ]}
          />
        </TabsContent>

        <TabsContent value="title-registration">
          <GuidedNotePage
            title="Title & Registration Process"
            description="Handle vehicle title transfer and registration requirements"
            sections={[
              {
                title: "Title Transfer Requirements",
                prompts: [
                  "What documents are needed to transfer the vehicle title?",
                  "How long do you have to complete title transfer in your state?",
                  "What fees are associated with title transfer?",
                  "How does financing affect the title transfer process?",
                  "What happens if there are issues with the existing title?"
                ],
                examples: [
                  "Signed title, bill of sale, ID, proof of insurance, lien information if applicable",
                  "Usually 10-30 days, varies by state - check local requirements",
                  "Title transfer fee, sales tax, registration fees, inspection fees",
                  "Lender listed as lienholder, title held by lender until loan paid off",
                  "Title issues must be resolved before transfer - may delay process significantly"
                ]
              },
              {
                title: "Registration Process",
                prompts: [
                  "Where and how do you register your new vehicle?",
                  "What documents are required for vehicle registration?",
                  "How much will registration and associated fees cost?",
                  "What inspection or emissions requirements apply?",
                  "When does your registration expire and how do you renew?"
                ],
                examples: [
                  "DMV office, some dealers can handle, online in some states",
                  "Title, proof of insurance, ID, emissions certificate (if required)",
                  "Registration fee, license plates, inspection fees - varies significantly by state",
                  "Safety inspection, emissions testing - requirements vary by location",
                  "Usually annual or biennial, renewal notice sent by mail"
                ]
              },
              {
                title: "License Plates & Tags",
                prompts: [
                  "How do you obtain license plates for your new vehicle?",
                  "Can you transfer plates from your previous vehicle?",
                  "What temporary tags or permits are available?",
                  "Are there specialty plates you might want to consider?",
                  "How do you handle plates when trading in a vehicle?"
                ],
                examples: [
                  "DMV issues plates, dealer may provide temporary tags",
                  "Usually yes if same vehicle type and current registration",
                  "Temporary tags valid 30-90 days while processing permanent registration",
                  "Personalized plates, organizational plates, specialty designs available",
                  "Remove plates from trade-in, transfer to new vehicle or turn in to DMV"
                ]
              },
              {
                title: "Multi-State Considerations",
                prompts: [
                  "What happens if you buy a car in a different state?",
                  "How do you handle title and registration across state lines?",
                  "Are there tax implications for out-of-state purchases?",
                  "What if you move states after purchasing?",
                  "How do different state requirements affect the process?"
                ],
                examples: [
                  "Must register in home state, dealer may not handle out-of-state paperwork",
                  "Title transfer in your home state, may need inspection/emissions in home state",
                  "Pay sales tax to home state, may get credit for tax paid in purchase state",
                  "Must register in new state within required timeframe (usually 30-90 days)",
                  "Emissions requirements, inspection requirements, insurance minimums vary significantly"
                ]
              }
            ]}
            tips={[
              "Complete title transfer and registration as soon as possible after purchase",
              "Keep all title and registration documents in a safe, accessible place",
              "Understand your state's specific requirements and deadlines",
              "Budget for all associated fees - they can add up quickly",
              "Use reputable services if dealer offers to handle paperwork for you"
            ]}
          />
        </TabsContent>

        <TabsContent value="legal-protection">
          <GuidedNotePage
            title="Legal Protection & Rights"
            description="Understand your legal rights and protections as a car buyer"
            sections={[
              {
                title: "Consumer Protection Laws",
                prompts: [
                  "What consumer protection laws apply to car purchases in your state?",
                  "How do lemon laws protect you from defective vehicles?",
                  "What rights do you have regarding unfair or deceptive practices?",
                  "Are there cooling-off periods or cancellation rights?",
                  "What federal laws regulate auto lending and sales?"
                ],
                examples: [
                  "State lemon laws, unfair trade practice acts, truth in advertising requirements",
                  "Protection if car has substantial defects that can't be repaired after reasonable attempts",
                  "Right to accurate information, fair pricing, no bait-and-switch tactics",
                  "Very limited cooling-off rights for auto purchases - usually none",
                  "Truth in Lending Act, Equal Credit Opportunity Act, Fair Credit Reporting Act"
                ]
              },
              {
                title: "Warranty Rights & Remedies",
                prompts: [
                  "What warranty rights come with your vehicle purchase?",
                  "How do you enforce warranty claims if problems arise?",
                  "What's the difference between express and implied warranties?",
                  "Can dealers limit or disclaim warranty coverage?",
                  "What remedies are available for warranty violations?"
                ],
                examples: [
                  "Manufacturer warranty, dealer warranties, implied warranty of merchantability",
                  "Follow proper procedures, document issues, use authorized repair facilities",
                  "Express warranties are written guarantees, implied warranties automatic unless disclaimed",
                  "'As is' sales may disclaim implied warranties, but not manufacturer warranties",
                  "Repair, replacement, refund, or compensation depending on situation and law"
                ]
              },
              {
                title: "Fraud Prevention & Detection",
                prompts: [
                  "What are common types of auto sales fraud?",
                  "How do you recognize and avoid deceptive practices?",
                  "What should you do if you discover fraud after purchase?",
                  "How do you verify vehicle history and condition claims?",
                  "What documentation helps prove fraudulent practices?"
                ],
                examples: [
                  "Odometer fraud, title washing, undisclosed damage, financing scams",
                  "Verify all claims independently, get promises in writing, research market values",
                  "Document fraud, report to authorities, consult attorney, preserve evidence",
                  "Independent inspections, vehicle history reports, maintenance records review",
                  "All communications, advertisements, contracts, inspection reports, photos"
                ]
              },
              {
                title: "Dispute Resolution Options",
                prompts: [
                  "What options do you have for resolving disputes with dealers?",
                  "Should you try to resolve issues directly before involving authorities?",
                  "What government agencies handle auto sales complaints?",
                  "When should you consider legal action?",
                  "Are there arbitration requirements in your contracts?"
                ],
                examples: [
                  "Direct negotiation, manufacturer dispute programs, state agencies, legal action",
                  "Yes, often faster and less expensive than formal procedures",
                  "State consumer protection offices, DMV, attorney general, BBB",
                  "For significant financial loss, safety issues, or clear legal violations",
                  "Many contracts require arbitration rather than court action - review carefully"
                ]
              }
            ]}
            tips={[
              "Know your state's lemon law and how it applies to your purchase",
              "Keep detailed records of all communications and transactions",
              "Report suspected fraud to appropriate authorities promptly",
              "Consider legal consultation for significant disputes or potential fraud",
              "Understand dispute resolution requirements in your contracts"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}