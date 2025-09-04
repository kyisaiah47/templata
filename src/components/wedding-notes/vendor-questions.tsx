"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function VendorQuestions() {
  return (
    <GuidedNotePage
      title="Vendor Questions & Contracts"
      description="Essential questions to ask potential vendors and important contract details to track."
      prompts={[
        "What is your cancellation policy and refund terms?",
        "What happens if you're unable to provide service on my wedding day?",
        "Can you provide references from recent weddings?",
        "What is included in your base package vs. additional costs?",
        "When do you need final headcount and menu selections?",
        "What is your payment schedule and accepted payment methods?"
      ]}
      examples={[
        "Photography: 'Do you provide edited photos online or physical prints?'",
        "Catering: 'Can you accommodate dietary restrictions and allergies?'",
        "Venue: 'What time can we access the space for setup?'",
        "DJ/Band: 'Do you have backup equipment and personnel?'"
      ]}
      tips={[
        "Always get contracts in writing before making deposits",
        "Ask about backup plans for outdoor events",
        "Confirm who will be your point of contact on wedding day",
        "Review cancellation policies carefully before signing"
      ]}
    />
  )
}