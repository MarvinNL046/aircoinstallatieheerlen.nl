import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, AirVent, Calendar, Shield, Award } from "lucide-react"
import { ServicePageCTA } from "@/components/cta/content-cta"

export const metadata: Metadata = {
  title: "🔧 Airco Installatie Heerlen | Split Airco vanaf €1299 | StayCool",
  description: "Professionele airco installatie in Heerlen, Parkstad & Zuid-Limburg ⭐ 4.7/5. Erkend split airco installateur. Gratis offerte binnen 24u. Bel 046-202-1430!",
  keywords: [
    'airco installatie heerlen',
    'split airco installatie',
    'airco installateur heerlen',
    'airco montage parkstad',
    'professionele airco installatie limburg'
  ],
  openGraph: {
    title: "🔧 Airco Installatie Heerlen | Split Airco vanaf €1299",
    description: "Professionele airco installatie door StayCool ⭐ 4.7/5. Erkend installateur in Heerlen & Parkstad. Gratis offerte!",
    type: 'website',
    locale: 'nl_NL'
  }
}

export default function InstallatiePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 py-16 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Professionele Airco Installatie
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Laat uw airco vakkundig installeren door onze gecertificeerde monteurs. 
              Met jarenlange ervaring garanderen wij een perfecte installatie en optimale werking.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  Plan Installatie
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Ons Installatieproces</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "1. Gratis Adviesgesprek",
                description: "We bespreken uw wensen en adviseren over de beste airco oplossing voor uw situatie.",
                icon: <AirVent className="h-8 w-8 text-blue-600" />
              },
              {
                title: "2. Professionele Montage",
                description: "Onze monteurs installeren uw airco vakkundig, netjes en volgens alle veiligheidsnormen.",
                icon: <Shield className="h-8 w-8 text-blue-600" />
              },
              {
                title: "3. Oplevering & Garantie",
                description: "We testen de installatie grondig en u ontvangt 5 jaar garantie op de montage.",
                icon: <Award className="h-8 w-8 text-blue-600" />
              }
            ].map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner after process */}
      <ServicePageCTA service="installatie" />

      {/* What's Included */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold">Wat is inbegrepen?</h2>
            <div className="space-y-4">
              {[
                "Gratis voorrijkosten in heel Limburg",
                "Professionele montage door F-gassen gecertificeerde monteurs",
                "Alle benodigde materialen en bevestigingsmiddelen",
                "Elektrische aansluiting door erkend installateur",
                "Condensafvoer installatie",
                "Inbedrijfstelling en uitleg bediening",
                "5 jaar garantie op de installatie",
                "Snelle service tijdens kantooruren"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Klaar voor een perfecte airco installatie?</h2>
          <p className="mt-4 text-xl text-gray-300">
            Vraag vandaag nog een gratis offerte aan en geniet binnen een week van optimaal klimaatcomfort.
          </p>
          <div className="mt-8">
            <Link href="/offerte">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Gratis Offerte Aanvragen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}