"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AirVent, Settings, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    slug: 'installatie',
    icon: AirVent,
    title: 'Professionele Installatie',
    description: 'Vakkundige installatie van premium airconditioning systemen door gecertificeerde monteurs.',
    features: [
      'Gratis inspectie en advies',
      'Installatie binnen 48 uur',
      '5 jaar garantie',
      'Energie-efficiënte systemen'
    ],
    price: 'Vanaf €1.299',
    ctaText: 'Plan Installatie'
  },
  {
    slug: 'onderhoud',
    icon: Settings,
    title: 'Preventief Onderhoud',
    description: 'Houd uw airco in topconditie met ons betaalbare onderhoudsabonnement.',
    features: [
      'Complete systeeminspectie',
      'Filter reiniging & vervanging',
      'Prestatie optimalisatie',
      'Jaarlijks onderhoudsrapport'
    ],
    price: 'Vanaf €11/maand',
    subPrice: 'of €149 eenmalig',
    ctaText: 'Start Onderhoud'
  },
  {
    slug: 'reparatie',
    icon: Wrench,
    title: 'Snelle Reparatie',
    description: 'Deskundige reparatie tijdens kantooruren voor alle merken airconditioners.',
    features: [
      'Diagnose binnen 24 uur',
      'Transparante prijzen',
      'Originele onderdelen',
      'Garantie op reparaties'
    ],
    price: 'Vanaf €129',
    ctaText: 'Reparatie Aanvragen'
  }
]

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Onze Expertise, Uw Comfort
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Van installatie tot onderhoud - wij zorgen voor een perfect klimaat in uw woning of bedrijf.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <div
                key={service.slug}
                className="group transform transition-all duration-300 hover:-translate-y-1"
              >
                <Card className="relative h-full overflow-hidden bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  {/* Icon Header */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Pricing */}
                  <div className="mt-8">
                    <p className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </p>
                    {service.subPrice && (
                      <p className="text-sm text-gray-600">{service.subPrice}</p>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700" 
                    size="lg"
                    asChild
                  >
                    <Link href={`/diensten/${service.slug}`}>
                      {service.ctaText}
                    </Link>
                  </Button>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Products CTA */}
        <div className="mt-12 text-center">
          <Link href="/producten">
            <Button size="lg" variant="outline" className="group">
              Bekijk alle airco producten
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        </div>

        {/* YouTube Video Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
              Zie Onze Experts in Actie
            </h3>
            <div className="relative overflow-hidden rounded-lg bg-gray-900 shadow-xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog?si=6GTgN4qAxCJ7tMec"
                title="Airconditioning Installatie Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}