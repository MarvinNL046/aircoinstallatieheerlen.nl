"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MobileCTAButton() {
  return (
    <Link
      href="tel:0462021430"
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50",
        "flex items-center justify-center gap-2",
        "bg-orange-500 text-white",
        "rounded-full py-4 px-6",
        "shadow-lg hover:shadow-xl",
        "transform transition-all duration-200",
        "hover:scale-105 active:scale-95",
        "font-semibold text-lg",
        "md:hidden" // Only show on mobile
      )}
      aria-label="Bel nu voor een gratis offerte"
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
      <span>Bel Nu</span>
    </Link>
  )
}