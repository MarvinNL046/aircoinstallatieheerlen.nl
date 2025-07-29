import { Metadata } from "next"
import { CityContent } from "@/components/city/city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cities = await getCities()
  const cityData = cities.find(city => city.city.toLowerCase() === params.city)
  
  if (!cityData) {
    return {
      title: "Stad niet gevonden | StayCool Airco Heerlen",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  // Special metadata for key cities
  const cityMetadata: Record<string, { title: string; description: string }> = {
    heerlen: {
      title: "🏠 Airco Heerlen | #1 Split Airco Specialist | 4.7⭐ StayCool",
      description: "Airco installatie Heerlen centrum & omgeving door StayCool ⭐ 4.7/5. Dé split airco specialist van Parkstad. Gratis offerte binnen 24u. Bel 046-202-1430!"
    },
    brunssum: {
      title: "🌟 Airco Brunssum | Split Airco vanaf €11/mnd | StayCool",
      description: "Airco installatie Brunssum door erkend specialist StayCool ⭐ 4.7/5. Professionele split airco service in Parkstad. Gratis advies: 046-202-1430!"
    },
    landgraaf: {
      title: "✨ Airco Landgraaf | Installatie & Service | StayCool Parkstad",
      description: "Airco specialist Landgraaf - StayCool ⭐ 4.7/5 sterren. Split airco installatie & onderhoud in heel Parkstad. Direct contact: 046-202-1430!"
    },
    kerkrade: {
      title: "🏡 Airco Kerkrade | Split Airco Expert | StayCool Limburg",
      description: "Airco installatie Kerkrade & omgeving door StayCool ⭐ 4.7/5. Erkend split airco installateur in Parkstad. Gratis offerte: 046-202-1430!"
    }
  }

  const customMeta = cityMetadata[cityData.city.toLowerCase()]

  return {
    title: customMeta?.title || `🌟 Airco ${cityData.city} | Split Airco Installatie | StayCool`,
    description: customMeta?.description || `Professionele airco installatie in ${cityData.city} door StayCool ⭐ 4.7/5. Split airco specialist voor Limburg. Erkend installateur. Bel 046-202-1430!`,
    keywords: [
      `airco ${cityData.city.toLowerCase()}`,
      `airco installatie ${cityData.city.toLowerCase()}`,
      `split airco ${cityData.city.toLowerCase()}`,
      `airco service ${cityData.city.toLowerCase()}`,
      'airco limburg',
      'klimaatbeheersing'
    ],
    openGraph: {
      title: customMeta?.title || `🌟 Airco ${cityData.city} | Split Airco Installatie | StayCool`,
      description: customMeta?.description || `Professionele airco installatie in ${cityData.city} door StayCool. Erkend specialist met 4.7/5 sterren beoordeling.`,
      url: `https://aircoinstallatieheerlen.nl/steden/${params.city}`,
      siteName: "StayCool Airco Heerlen",
      locale: "nl_NL",
      type: "website",
      images: [{
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `StayCool Airco ${cityData.city}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: customMeta?.title?.substring(0, 70) || `Airco ${cityData.city} | StayCool`,
      description: customMeta?.description?.substring(0, 120) || `Airco installatie ${cityData.city} door StayCool ⭐ 4.7/5. Bel 046-202-1430!`
    },
    alternates: {
      canonical: `https://aircoinstallatieheerlen.nl/steden/${params.city}`
    }
  }
}

export async function generateStaticParams() {
  const cities = await getCities()
  return cities.map((city) => ({
    city: city.city.toLowerCase(),
  }))
}

export default async function CityPage({ params }: CityPageProps) {
  const cities = await getCities()
  const cityData = cities.find(
    (city) => city.city.toLowerCase() === params.city
  )

  if (!cityData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(cityData.city)

  // Enhanced description for all cities
  let description = `Professionele airconditioning services in ${cityData.city} door StayCool Airco. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven.`
  
  // Add more detailed content for Maastricht
  if (cityData.city.toLowerCase() === 'maastricht') {
    description = `Professionele airconditioning installatie in Maastricht door StayCool Airco. Als lokale specialist bieden wij complete airco-oplossingen voor woningen en bedrijven in Maastricht en omgeving. Onze ervaren monteurs kennen de stad en haar gebouwen goed en zorgen voor een perfecte installatie. Bekijk ook onze <a href="https://staycoolairco.nl/kennisbank/airco-maastricht" class="text-blue hover:underline">kennisbank over airco's in Maastricht</a>.`
  }

  const city = {
    title: cityData.city,
    description: description,
    region: cityData.region,
    population: cityData.population,
    postal_codes: cityData.postal_codes
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CityContent city={city} />
    </>
  )
}
