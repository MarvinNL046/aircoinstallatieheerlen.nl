import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyUsSection } from "@/components/sections/why-us"
import { BrandLogosSection } from "@/components/sections/brand-logos"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { CTABanner as NewCTABanner } from "@/components/cta/cta-banner-variants"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: '✨ Airco Heerlen #1 | Split Airco vanaf €11/mnd | 4.7⭐',
  description: 'Airco installatie Heerlen & Parkstad door StayCool. Erkend split airco specialist met 4.7/5 sterren! Klimaatbeheersing voor woning & bedrijf. Gratis advies: 046-202-1430',
  keywords: [
    'airco heerlen',
    'airco installatie heerlen',
    'split airco heerlen',
    'airco parkstad',
    'klimaatbeheersing heerlen',
    'airco service limburg'
  ],
  alternates: {
    canonical: 'https://aircoinstallatieheerlen.nl'
  },
  openGraph: {
    title: '✨ Airco Heerlen #1 | Split Airco vanaf €11/mnd | 4.7⭐',
    description: 'Airco installatie Heerlen & Parkstad door StayCool. Erkend split airco specialist met 4.7/5 sterren! Klimaatbeheersing voor woning & bedrijf.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://aircoinstallatieheerlen.nl',
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'StayCool Airco Heerlen - Split Airco Specialist'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: '✨ Airco Heerlen #1 | Split Airco vanaf €11/mnd',
    description: 'Airco installatie Heerlen door StayCool ⭐ 4.7/5. Erkend specialist in Parkstad & Zuid-Limburg. Gratis advies!'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <CTABanner theme="light" />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <NewCTABanner variant="full" theme="gradient" showTrust={true} />
        <WhyUsSection />
        <BrandLogosSection />
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Bekijk Onze Bedrijfsvideo</h2>
            <div className="max-w-3xl mx-auto aspect-video">
              <iframe 
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/9m-jkGgfLog" 
                title="StayCool Airco Bedrijfsvideo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                Ontdek hoe StayCool Airco uw ideale partner is voor airconditioning in Heerlen en omgeving.
              </p>
              <p className="mt-4">
                <a 
                  href="https://staycoolairco.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Bezoek onze hoofdwebsite voor meer informatie
                </a>
              </p>
            </div>
          </div>
        </section>
        <TestimonialsSection />
        <CTASection />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
