import { Metadata } from "next"

export const metadata: Metadata = {
  title: "🛒 Airco Producten Heerlen | Split, Mobiel & Accessoires | StayCool",
  description: "Bekijk ons complete airco assortiment in Heerlen ⭐ Daikin, LG, Samsung, Toshiba & meer. Split airco's, mobiele units & accessoires. Gratis advies!",
  keywords: [
    "airco producten heerlen",
    "split airco heerlen",
    "mobiele airco heerlen",
    "daikin airco modellen",
    "lg airco units",
    "samsung windfree",
    "toshiba haori",
    "tosot airco",
    "airco accessoires",
    "airco covers",
    "airconditioning assortiment",
    "airco showroom heerlen"
  ],
  openGraph: {
    title: "🛒 Complete Airco Producten Catalogus | StayCool Heerlen",
    description: "Ontdek alle airco modellen van topmerken. Split units, mobiele airco's en accessoires. Expert advies en scherpe prijzen!",
    type: 'website',
    locale: 'nl_NL',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StayCool Airco Producten Heerlen'
      }
    ]
  },
  alternates: {
    canonical: 'https://aircoinstallatieheerlen.nl/producten'
  }
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}