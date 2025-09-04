"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function VowsCeremony() {
  return (
    <GuidedNotePage
      title="Vows & Ceremony Script"
      description="Draft your personal wedding vows and plan your ceremony flow."
      prompts={[
        "What are 3 things you love most about your partner?",
        "What promises do you want to make for your future together?",
        "What is your favorite memory together?",
        "How has your partner made you a better person?",
        "What are your hopes and dreams as a married couple?",
        "What traditions or readings do you want to include in your ceremony?"
      ]}
      examples={[
        "'I promise to support your dreams, even when they scare me'",
        "'I vow to laugh with you through all of life's adventures'",
        "'I promise to be your partner in all things, big and small'",
        "Include a meaningful quote, poem, or religious text",
        "Consider writing separate vows to each other"
      ]}
      tips={[
        "Keep vows to 1-2 minutes when spoken aloud",
        "Practice reading your vows out loud beforehand",
        "Have a backup copy for your officiant",
        "Consider whether you want to share vows privately first",
        "Write from the heart - be authentic to your relationship"
      ]}
    />
  )
}