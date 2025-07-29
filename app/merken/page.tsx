import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import brandsData from "@/data/brands.json"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "🎯 Top Airco Merken Heerlen | Daikin, Mitsubishi & Meer | StayCool",
  description: "Alle top airco merken bij StayCool Heerlen ⭐ 4.7/5. Officieel dealer van Daikin, Mitsubishi, Samsung & LG. Split airco specialist in Limburg. Bel 046-202-1430!",
  keywords: [
    "airco merken heerlen",
    "daikin airco heerlen",
    "mitsubishi airco limburg",
    "samsung split airco",
    "lg airco parkstad",
    "tosot airco",
    "gree airco",
    "airco dealer limburg",
    "klimaatbeheersing merken"
  ],
  openGraph: {
    title: "🎯 Top Airco Merken | Daikin, Mitsubishi & Meer",
    description: "Officieel dealer van alle top airco merken in Heerlen. StayCool ⭐ 4.7/5. Expert advies voor de beste keuze!",
    type: 'website',
    locale: 'nl_NL'
  }
}

export default function BrandsPage() {
  const breadcrumbItems = [
    { label: "Merken", href: "/merken" }
  ]

  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="mb-8 text-4xl font-bold">Airconditioning Merken</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Wij werken uitsluitend met de beste merken voor optimale kwaliteit en betrouwbaarheid
        </p>
        <div className="mb-12">
          <Link href="/producten" className="inline-flex items-center text-blue hover:text-blue-700 font-medium">
            Bekijk alle producten van deze merken
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brandsData.brands.map((brand) => (
            <Link key={brand.slug} href={`/merken/${brand.slug}`}>
              <Card className="h-full p-6 transition-shadow hover:shadow-lg">
                <h2 className="mb-4 text-2xl font-semibold">{brand.name}</h2>
                <p className="mb-4 text-muted-foreground">{brand.description}</p>
                <ul className="mb-4 space-y-2">
                  {brand.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-blue">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center text-sm text-blue">
                  Meer informatie
                  <svg
                    className="ml-2 h-4 w-4"
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
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <CTAWithForm 
        title="Advies over het Beste Merk voor uw Situatie?" 
        description="Onze experts helpen u graag bij het kiezen van de juiste airconditioning"
      />
    </>
  )
}