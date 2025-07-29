import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Phone, Wrench, Clock, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "🆘 Airco Reparatie Heerlen | 24u Storing Service | StayCool",
  description: "Airco storing? Snelle reparatie service in Heerlen & Limburg ⭐ 4.7/5. Split airco specialist lost elke storing op. Direct contact: 046-202-1430!",
  keywords: [
    'airco reparatie heerlen',
    'airco storing heerlen',
    'airco service limburg',
    'split airco reparatie',
    'airco storingsdienst parkstad'
  ],
  openGraph: {
    title: "🆘 Airco Reparatie Heerlen | 24u Storing Service",
    description: "Airco storing? StayCool lost het op ⭐ 4.7/5. Snelle service in heel Limburg. Bel direct voor hulp!",
    type: 'website',
    locale: 'nl_NL'
  }
}

export default function ReparatiePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 to-orange-700 py-16 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Airco Reparatie & Storingsdienst
            </h1>
            <p className="mt-6 text-xl text-orange-100">
              Airco defect? Onze ervaren monteurs lossen elk probleem snel en vakkundig op. 
              Direct bereikbaar tijdens kantooruren voor reparaties in heel Limburg.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="tel:0462021430">
                <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel Direct: 046 202 1430
                </Button>
              </Link>
              <Link href="/offerte">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                  <Wrench className="mr-2 h-5 w-5" />
                  Reparatie Aanvragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Veelvoorkomende Storingen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Airco koelt/verwarmt niet",
                description: "Problemen met koudemiddel, compressor of thermostaat",
                icon: <AlertCircle className="h-6 w-6 text-red-600" />
              },
              {
                title: "Vreemde geluiden",
                description: "Rammelende, piepende of kloppende geluiden",
                icon: <AlertCircle className="h-6 w-6 text-red-600" />
              },
              {
                title: "Waterlekkage",
                description: "Verstopte afvoer of condensproblemen",
                icon: <AlertCircle className="h-6 w-6 text-red-600" />
              },
              {
                title: "Airco start niet op",
                description: "Elektrische storing of defecte afstandsbediening",
                icon: <AlertCircle className="h-6 w-6 text-red-600" />
              },
              {
                title: "Onaangename geur",
                description: "Vervuilde filters of bacteriegroei",
                icon: <AlertCircle className="h-6 w-6 text-red-600" />
              },
              {
                title: "Hoge energierekening",
                description: "Inefficiënte werking door gebrek aan onderhoud",
                icon: <AlertCircle className="h-6 w-6 text-red-600" />
              }
            ].map((issue, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {issue.icon}
                    <CardTitle className="text-lg">{issue.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{issue.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner after common problems */}

      {/* Service Promise */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Onze Service Belofte</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Clock className="h-12 w-12 text-orange-500" />,
                title: "Snelle Response",
                description: "Binnen 24 uur ter plaatse, bij spoed vaak dezelfde dag"
              },
              {
                icon: <Shield className="h-12 w-12 text-orange-500" />,
                title: "Alle Merken",
                description: "Wij repareren alle merken en types airconditioning"
              },
              {
                icon: <Zap className="h-12 w-12 text-orange-500" />,
                title: "Vaste Prijzen",
                description: "Transparante prijzen, geen verrassingen achteraf"
              }
            ].map((promise, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{promise.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{promise.title}</h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Transparante Tarieven</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Voorrijkosten Heerlen e.o.</span>
                    <span className="font-bold">Gratis</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Diagnose & eerste half uur</span>
                    <span className="font-bold">€65,-</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Arbeid per uur (na eerste half uur)</span>
                    <span className="font-bold">€75,-</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Kantooruren: Ma-Di-Do 09:00-17:00, Wo-Vr 09:00-16:00</span>
                    <span className="font-bold">Direct contact</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  * Alle prijzen zijn exclusief BTW en eventuele onderdelen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Airco storing? Wij helpen direct!</h2>
          <p className="mt-4 text-xl text-gray-300">
            Bel nu voor snelle service of vraag online een reparatie aan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="tel:0462021430">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                Bel: 046 202 1430
              </Button>
            </Link>
            <Link href="/offerte">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Online Reparatie Aanvragen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}