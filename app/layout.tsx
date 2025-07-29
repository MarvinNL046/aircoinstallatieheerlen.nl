import { Poppins } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileCTAButton } from "@/components/mobile-cta-button"
import { MobileFloatingCTA } from "@/components/cta/cta-banner-variants"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '600'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://aircoinstallatieheerlen.nl'),
  title: {
    default: '🌟 Airco Heerlen | Installatie vanaf €11/mnd | StayCool',
    template: '%s | Airco Heerlen - StayCool'
  },
  description: 'Airco installatie Heerlen door StayCool ⭐ 4.7/5 sterren. Split airco specialist in Parkstad & Zuid-Limburg. Gratis offerte binnen 24u. Bel 046-202-1430!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
    'airco heerlen',
    'airco installatie heerlen',
    'airconditioning heerlen',
    'airco specialist heerlen',
    'airco monteur heerlen',
    
    // Secundaire zoektermen
    'airco limburg',
    'airco service limburg',
    'split airco',
    'split airco heerlen',
    'klimaatbeheersing',
    'klimaatbeheersing heerlen',
    
    // Lokale zoektermen
    'airco parkstad',
    'airco zuid limburg',
    'airco brunssum',
    'airco landgraaf',
    'airco kerkrade',
    
    // Service gerelateerd
    'airco installatie',
    'airco onderhoud',
    'airco reparatie',
    'airco service',
    'professionele airco installatie',
    
    // Product types
    'split airco systemen',
    'multi-split airco',
    'monosplit airco',
    'airco met verwarming',
    'warmtepomp airco',
    
    // Commercieel
    'airco offerte',
    'airco prijzen',
    'airco kosten',
    'airco vanaf 11 euro',
    'airco lease',
    
    // Merken en kwaliteit
    'daikin airco heerlen',
    'mitsubishi airco heerlen',
    'erkend airco installateur',
    'gecertificeerd airco bedrijf',
    
    // USPs
    '24 uur service airco',
    'gratis airco advies',
    '5 jaar garantie airco',
    'beste airco installateur'
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
    title: '🌟 Airco Heerlen | Installatie vanaf €11/mnd | StayCool',
    description: 'Airco installatie Heerlen door StayCool ⭐ 4.7/5 sterren. Split airco specialist in Parkstad & Zuid-Limburg. Gratis offerte binnen 24u. Bel 046-202-1430!',
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
    title: '🌟 Airco Heerlen | Installatie vanaf €11/mnd | StayCool',
    description: 'Airco installatie Heerlen door StayCool ⭐ 4.7/5 sterren. Split airco specialist in Parkstad & Zuid-Limburg. Gratis offerte binnen 24u!',
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
        className={`${poppins.variable} min-h-screen flex flex-col`}
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
          <MobileCTAButton />
          <MobileFloatingCTA />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
