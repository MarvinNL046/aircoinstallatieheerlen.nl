import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://aircoinstallatieheerlen.nl'),
  title: {
    default: 'Airco Installatie Heerlen | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    template: '%s | StayCool Airco Heerlen'
  },
  description: 'Dé airco specialist in Heerlen! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit ✓ 5 jaar garantie. Bel nu: 046 202 1430',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png' },
    ],
  },
  keywords: [
    // Primaire zoektermen
    'airco installatie heerlen',
    'airco specialist heerlen',
    'airco monteur heerlen',
    'airco bedrijf heerlen',
    'airconditioning heerlen',
    
    // Installatie en service
    'professionele airco installatie',
    'airco installatie kosten',
    'split airco installatie',
    'multisplit airco heerlen',
    'airco onderhoud heerlen',
    'airco storing oplossen',
    'snelle airco service',
    
    // Producten en systemen
    'energiezuinige airco',
    'split airco systemen',
    'multi-split airconditioning',
    'stille airco installatie',
    'airco met verwarming',
    
    // Doelgroep specifiek
    'airco voor woning',
    'airco voor bedrijf',
    'airco voor slaapkamer',
    'beste airco voor thuis',
    
    // Commercieel
    'airco kopen heerlen',
    'airco heerlen prijzen',
    'airco prijsvergelijking',
    'airco financiering',
    'goedkope airco installatie',
    
    // Expertise en advies
    'airco showroom heerlen',
    'airco advies op maat',
    'gecertificeerde airco monteurs',
    'airco merken',
    'premium airco merken',
    
    // Conversie gericht
    'airco offerte aanvragen',
    'airco laten plaatsen',
    'airco installatie advies',
    
    // Seizoensgebonden
    'airco voor zomer en winter',
    'klimaatbeheersing',
    'duurzame koeling',
    'warmtepomp'
  ],
  authors: [{ name: 'StayCool Airco' }],
  creator: 'StayCool Airco',
  publisher: 'StayCool Airco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'StayCool Airco Heerlen',
    title: 'Airco Installatie Heerlen | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Heerlen! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'StayCool Airco Heerlen - Professionele Airconditioning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Installatie Heerlen | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Heerlen! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie',
    images: ['/opengraph-image'],
    creator: '@staycoolairco',
    site: '@staycoolairco'
  },
  alternates: {
    canonical: 'https://aircoinstallatieheerlen.nl'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'HrgblwGVj9zZi2p4pSopqj7zi5sjzZEQXlRpd7RJSi4',
    yandex: 'verification_token',
    yahoo: 'verification_token',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="nl" 
      suppressHydrationWarning
      className="scroll-smooth antialiased"
    >
      <head />
      <body 
        className={`${inter.className} min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
