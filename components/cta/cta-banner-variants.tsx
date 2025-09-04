"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar, Star, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// Rotating messages for different seasons/offers
const rotatingMessages = [
  {
    icon: "❄️",
    text: "Winterkorting! Bespaar tot €250 op uw airco installatie",
    season: "winter"
  },
  {
    icon: "🌞",
    text: "Klaar voor de zomer? Laat nu uw airco installeren",
    season: "summer"
  },
  {
    icon: "🛠️",
    text: "Airco onderhoud vanaf €11/maand - inclusief 5 jaar garantie",
    season: "maintenance"
  },
  {
    icon: "⚡",
    text: "Gratis offerte binnen 24 uur - Bel nu!",
    season: "general"
  },
  {
    icon: "🏠",
    text: "Gecertificeerde installateurs in Heerlen en omgeving",
    season: "local"
  }
]

interface CTABannerProps {
  variant?: "full" | "compact" | "sidebar" | "inline"
  theme?: "orange" | "blue" | "gradient"
  showTrust?: boolean
  customMessage?: string
  className?: string
}

export function CTABanner({ 
  variant = "full", 
  theme = "gradient",
  showTrust = true,
  customMessage,
  className 
}: CTABannerProps) {
  const [currentMessage, setCurrentMessage] = useState(0)
  
  useEffect(() => {
    if (!customMessage) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % rotatingMessages.length)
      }, 8000) // Rotate every 8 seconds
      return () => clearInterval(interval)
    }
  }, [customMessage])

  const message = customMessage || rotatingMessages[currentMessage]
  
  const themeClasses = {
    orange: "bg-orange-500 text-white",
    blue: "bg-blue-600 text-white",
    gradient: "bg-gradient-to-r from-orange-500 to-blue-600 text-white"
  }

  if (variant === "compact") {
    return (
      <div className={cn(
        "rounded-lg p-4 shadow-lg",
        themeClasses[theme],
        className
      )}>
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-sm">
            {typeof message === 'string' ? message : `${message.icon} ${message.text}`}
          </p>
          <Button size="sm" variant="secondary" asChild>
            <Link href="https://afspraken.staycoolairco.nl/" target="_blank" rel="noopener noreferrer">
              Plan Afspraak
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (variant === "sidebar") {
    return (
      <div className={cn(
        "rounded-lg p-6 shadow-xl",
        themeClasses[theme],
        className
      )}>
        <h3 className="font-bold text-lg mb-3">Bespaar nu op uw airco!</h3>
        <p className="text-sm mb-4 opacity-90">
          {typeof message === 'string' ? message : message.text}
        </p>
        {showTrust && (
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">4.7/5 (250+ reviews)</span>
          </div>
        )}
        <div className="space-y-2">
          <Button size="sm" variant="secondary" className="w-full" asChild>
            <Link href="tel:0462021430">
              <Phone className="mr-2 h-4 w-4" />
              046 202 1430
            </Link>
          </Button>
          <Button size="sm" variant="secondary" className="w-full" asChild>
            <Link href="https://wa.me/31636481054" target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={cn(
        "rounded-lg p-6 my-8",
        themeClasses[theme],
        className
      )}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">
                {typeof message === 'string' ? message : `${message.icon} ${message.text}`}
              </h3>
              {showTrust && (
                <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    4.7/5 sterren
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    5 jaar garantie
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    24u reactie
                  </span>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" asChild>
                <Link href="tel:0462021430">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel Nu
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="https://afspraken.staycoolairco.nl/" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Plan Direct Afspraak
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Full variant (default)
  return (
    <section className={cn(
      "py-12 relative overflow-hidden",
      themeClasses[theme],
      className
    )}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {typeof message === 'string' ? message : `${message.icon} ${message.text}`}
          </h2>
          
          {showTrust && (
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn(
                      "h-5 w-5",
                      i < 4 ? "fill-current" : "fill-current opacity-30"
                    )} />
                  ))}
                </div>
                <span>4.7/5 (250+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Gecertificeerde installateurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>5 jaar garantie</span>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:0462021430" className="min-w-[200px]">
                <Phone className="mr-2 h-5 w-5" />
                046 202 1430
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://wa.me/31636481054" target="_blank" className="min-w-[200px]">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Contact
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://afspraken.staycoolairco.nl/" target="_blank" rel="noopener noreferrer" className="min-w-[200px]">
                <Calendar className="mr-2 h-5 w-5" />
                Plan Direct Afspraak
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            Maandag - Vrijdag: 08:00 - 18:00 | Zaterdag: 09:00 - 16:00
          </p>
        </div>
      </div>
    </section>
  )
}

// Mobile-optimized floating CTA
export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!isVisible) return null
  
  return (
    <div className="fixed bottom-20 left-4 right-4 z-40 md:hidden">
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg p-4 shadow-xl">
        <p className="text-white text-sm font-semibold mb-3 text-center">
          Bespaar tot €250 op uw airco!
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Button size="sm" variant="secondary" asChild>
            <Link href="tel:0462021430">
              <Phone className="mr-1 h-4 w-4" />
              Bel Nu
            </Link>
          </Button>
          <Button size="sm" variant="secondary" asChild>
            <Link href="https://afspraken.staycoolairco.nl/" target="_blank" rel="noopener noreferrer">
              Afspraak
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}