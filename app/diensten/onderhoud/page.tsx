import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Wrench, Calendar, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "🔧 Airco Onderhoud Heerlen | Service vanaf €11/maand | StayCool",
  description: "Airco onderhoud & service in Heerlen, Parkstad & Limburg ⭐ 4.7/5. Onderhoudscontract voor split airco systemen vanaf €11/maand. Bel 046-202-1430!",
  keywords: [
    'airco onderhoud heerlen',
    'airco service limburg',
    'split airco onderhoud',
    'airco onderhoudscontract',
    'airco service parkstad'
  ],
  openGraph: {
    title: "🔧 Airco Onderhoud Heerlen | Service vanaf €11/maand",
    description: "Professioneel airco onderhoud door StayCool ⭐ 4.7/5. Service in heel Limburg. Onderhoudscontracten vanaf €11/maand met garantie!",
    type: 'website',
    locale: 'nl_NL'
  }
}

export default function OnderhoudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-700 py-16 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Airco Onderhoud Service
            </h1>
            <p className="mt-6 text-xl text-green-100">
              Regelmatig onderhoud zorgt voor een langere levensduur, optimale prestaties 
              en lagere energiekosten. Onze experts houden uw airco in topconditie.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  Plan Onderhoud
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Onderhoudscontracten</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Losse Beurt</CardTitle>
                <div className="text-3xl font-bold text-green-600">€149</div>
                <div className="text-sm text-gray-600">Eenmalig</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Jaarlijkse controle",
                    "Filter reiniging",
                    "Visuele inspectie",
                    "Basisrapportage"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-500">
              <CardHeader>
                <CardTitle>Onderhoudscontract</CardTitle>
                <div className="text-3xl font-bold text-orange-500">€11/maand</div>
                <div className="text-sm text-orange-500">Meest gekozen - €132/jaar</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Jaarlijkse uitgebreide controle",
                    "Professionele reiniging",
                    "Koudemiddel check",
                    "Prestatierapport",
                    "Voorrang bij storingen",
                    "10% korting op reparaties"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Plus</CardTitle>
                <div className="text-3xl font-bold text-blue-600">€19/maand</div>
                <div className="text-sm text-gray-600">€228/jaar</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "2x per jaar controle",
                    "Volledige reiniging & desinfectie",
                    "Prioriteit bij storingen",
                    "Gratis kleine reparaties",
                    "20% korting op onderdelen",
                    "Garantie op alle werkzaamheden"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Why Maintenance */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Waarom regelmatig onderhoud?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Langere levensduur",
                description: "Goed onderhouden airco's gaan tot 50% langer mee"
              },
              {
                icon: <Wrench className="h-8 w-8 text-blue-600" />,
                title: "Minder storingen",
                description: "Preventief onderhoud voorkomt dure reparaties"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Optimale prestaties",
                description: "Behoud maximale koeling en verwarming capaciteit"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Start vandaag met professioneel onderhoud</h2>
          <p className="mt-4 text-xl text-gray-300">
            Kies een onderhoudscontract dat bij u past en geniet van zorgeloos comfort.
          </p>
          <div className="mt-8">
            <Link href="/offerte">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Onderhoudscontract Afsluiten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}