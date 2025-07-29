"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, ShieldCheck, Clock, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

const benefits = [
  {
    icon: FileText,
    title: "Gratis Offerte",
    description: "Geheel vrijblijvend een offerte op maat voor uw situatie"
  },
  {
    icon: ShieldCheck,
    title: "Gecertificeerde Monteurs",
    description: "Alleen F-gassen gecertificeerde en ervaren installateurs"
  },
  {
    icon: Clock,
    title: "Bereikbaar tijdens kantooruren",
    description: "Ma-Vr van 8:00 tot 17:00 voor al uw vragen en service"
  },
  {
    icon: Award,
    title: "5 Jaar Garantie",
    description: "Uitgebreide garantie op alle installaties en producten"
  }
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current.slice()
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (section) {
      observer.observe(section)
    }

    cards.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      cards.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 opacity-0">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Waarom Kiezen voor StayCool?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Met StayCool Airco bent u verzekerd van professionele service en kwaliteit
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <Link href="/contact">
              Vraag Uw Gratis Offerte Aan
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}