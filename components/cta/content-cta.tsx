"use client"

import { CTABanner } from "./cta-banner-variants"

interface ContentCTAProps {
  position?: "after-intro" | "mid-content" | "before-conclusion"
  variant?: "full" | "compact" | "inline"
}

export function ContentCTA({ position = "mid-content", variant = "inline" }: ContentCTAProps) {
  // Different messages based on position
  const positionMessages = {
    "after-intro": "Wilt u ook profiteren van een energiezuinige airco? Vraag nu een gratis offerte aan!",
    "mid-content": "Ontdek hoeveel u kunt besparen met een moderne airco installatie",
    "before-conclusion": "Klaar om te starten? Onze experts staan voor u klaar"
  }
  
  return (
    <CTABanner
      variant={variant}
      theme="gradient"
      customMessage={positionMessages[position]}
      className="my-8"
    />
  )
}

// Specific CTA for blog posts
export function BlogPostCTA() {
  return (
    <div className="my-12 border-t border-b border-gray-200 py-8">
      <CTABanner
        variant="inline"
        theme="gradient"
        customMessage="Heeft u vragen over dit onderwerp? Onze experts helpen u graag verder!"
        showTrust={true}
      />
    </div>
  )
}

// CTA for service pages
export function ServicePageCTA({ service }: { service: string }) {
  const serviceMessages = {
    installatie: "Start vandaag nog met uw airco installatie - Gratis offerte binnen 24 uur",
    onderhoud: "Professioneel onderhoud vanaf €11/maand - Inclusief 5 jaar garantie",
    reparatie: "Airco storing? Wij zijn er binnen 24 uur - Bel nu voor directe hulp"
  }
  
  return (
    <CTABanner
      variant="full"
      theme="gradient"
      customMessage={serviceMessages[service as keyof typeof serviceMessages]}
      showTrust={true}
      className="my-16"
    />
  )
}

// CTA for city pages
export function CityPageCTA({ city }: { city: string }) {
  return (
    <CTABanner
      variant="inline"
      theme="blue"
      customMessage={`Zoekt u een betrouwbare airco installateur in ${city}? Wij zijn uw lokale specialist!`}
      showTrust={true}
      className="my-12"
    />
  )
}

// Sidebar CTA widget
export function SidebarCTA() {
  return (
    <div className="sticky top-24">
      <CTABanner
        variant="sidebar"
        theme="orange"
        showTrust={true}
      />
    </div>
  )
}