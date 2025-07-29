import Link from "next/link"
import { AirVent, Mail, Phone, Clock, Star, CheckCircle, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const cities = [
  "Heerlen",
  "Maastricht",
  "Venlo",
  "Roermond",
  "Sittard",
  "Weert",
  "Kerkrade",
  "Brunssum",
]

const services = [
  "Airco Installatie",
  "Airco Onderhoud",
  "Airco Reparatie",
  "Warmtepompen",
  "Multi-split Systemen",
  "Klimaatadvies",
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top CTA Section */}
      <div className="bg-blue-900 py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Klaar voor een koel en comfortabel binnenklimaat?</h3>
              <p className="text-gray-200">Vraag nu uw gratis offerte aan en ontvang binnen 24 uur een reactie!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <Link href="/contact">Gratis Offerte</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm">
                <a href="tel:0462021430">Bel Direct</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info & Trust Indicators */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <AirVent className="h-8 w-8 text-orange-500" />
              <div>
                <h2 className="text-xl font-bold">StayCool Airco</h2>
                <p className="text-sm text-gray-400">aircoinstallatieheerlen.nl</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Uw betrouwbare partner voor professionele airconditioning installatie in heel Limburg. Erkend, gecertificeerd en altijd dichtbij.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-orange-500" />
                <span className="font-semibold">4.7/5</span>
                <span className="text-gray-400">uit 163 Google reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Erkend F-gassen certificaat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">5 jaar garantie op installaties</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact & Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-orange-500">Contact & Openingstijden</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0462021430" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>046 202 1430</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/31636481054" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>WhatsApp: 06 3648 1054</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:info@staycoolairco.nl" className="hover:text-orange-500 transition-colors">info@staycoolairco.nl</a>
              </li>
              <li className="flex items-start space-x-2 pt-3">
                <Clock className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>
                  <p className="font-semibold">Openingstijden:</p>
                  <p className="text-gray-400">Ma-Di: 09:00 - 17:00</p>
                  <p className="text-gray-400">Wo-Do: 09:00 - 17:00</p>
                  <p className="text-gray-400">Vr: 09:00 - 16:00</p>
                  <p className="text-gray-400">Za-Zo: Gesloten</p>
                  <p className="text-xs text-gray-400 mt-1">Adres: Aan de Bogen 11, 6118 AS Nieuwstadt</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-orange-500">Onze Diensten</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/diensten" className="hover:text-orange-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-orange-500">Werkgebied Limburg</h3>
            <ul className="space-y-2 text-sm">
              {cities.map((city) => (
                <li key={city}>
                  <Link href={`/steden/${city.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
                    Airco {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} StayCool Airco - Onderdeel van StayCool Group B.V.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              <Link href="/kennisbank" className="hover:text-white transition-colors">Kennisbank</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
