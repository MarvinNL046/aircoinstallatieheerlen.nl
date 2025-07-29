"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { 
  AirVent, 
  Phone, 
  Clock, 
  Star, 
  ShieldCheck,
  CheckCircle,
  Loader2
} from "lucide-react"
import { Typewriter } from "@/components/ui/typewriter"
import { useState } from "react"
import { sendEmailDual, trackFormSubmission, trackPixelFormSubmission } from "@/lib/email-client"

export function HeroStayCool() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Client-side dual submission (webhook + EmailJS)
      const result = await sendEmailDual({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        message: formData.message
      });
      
      if (!result.success) {
        throw new Error('Failed to send message through any method')
      }
      
      // Track analytics
      trackFormSubmission('hero_form', true);
      trackPixelFormSubmission('hero_form', true);
      
      toast.success("Uw aanvraag is succesvol verzonden! We nemen binnen 24 uur contact met u op.")
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      })
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Er ging iets mis. Probeer het later opnieuw.")
      
      // Track failure
      trackFormSubmission('hero_form', false);
      trackPixelFormSubmission('hero_form', false);
    } finally {
      setIsSubmitting(false)
    }
  }

  const rotatingHeadlines = [
    "Airco Installatie in Heerlen",
    "Professionele Airconditioning Service",
    "Snelle Montage & Onderhoud",
    "Lokale Experts in Klimaatbeheersing"
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-12 sm:py-20" data-hero="true">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8" />
      
      {/* Orange ribbon */}
      <div className="absolute right-8 top-8 sm:right-12 sm:top-12 lg:right-16 lg:top-16 xl:right-24 z-20 -rotate-12 transform">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 shadow-xl rounded-sm">
          <p className="flex items-center gap-2 text-sm font-bold text-white">
            <Clock className="h-4 w-4" />
            Binnen 24u reactie
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-700/50 blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center text-white">
            <div className="mb-6 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium text-green-400">
                Gecertificeerde installateurs
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <Typewriter 
                strings={rotatingHeadlines}
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
              />
            </h1>
            
            <p className="mb-8 text-lg text-gray-300 sm:text-xl">
              Ervaar optimaal comfort met onze premium airconditioning oplossingen. 
              Van installatie tot onderhoud, wij zijn uw betrouwbare partner in heel Heerlen en omgeving.
            </p>

            {/* Trust badges */}
            <div className="mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  4.7/5 op basis van 163 Google reviews
                </span>
              </div>
            </div>

            {/* Features list */}
            <ul className="mb-8 space-y-3">
              {[
                "Gratis adviesgesprek en offerte op maat",
                "Installatie binnen 3-5 werkdagen",
                "5 jaar garantie op alle installaties",
                "Snelle service tijdens kantooruren"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/offerte">
                <Button 
                  size="lg" 
                  className="w-full bg-orange-500 text-white hover:bg-orange-600 sm:w-auto font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <AirVent className="mr-2 h-5 w-5" />
                  Direct Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 sm:w-auto font-semibold bg-white/10 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Bel: 046 202 1430
                </Button>
              </Link>
            </div>

            {/* Urgency message */}
            <p className="mt-6 text-sm text-orange-400">
              ⚡ Let op: Door hoge vraag zijn onze installatieplekken beperkt beschikbaar
            </p>
          </div>

          {/* Right column - Contact form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-2xl border border-white/20">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Vraag Direct een Offerte Aan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Uw e-mailadres"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="tel"
                  placeholder="Uw telefoonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Uw woonplaats"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Vertel ons over uw project (optioneel)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg hover:shadow-xl transition-all" 
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Bezig met verzenden...
                    </>
                  ) : (
                    <>
                      Ontvang Gratis Offerte
                      <AirVent className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Veilig</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Snel</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>Betrouwbaar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}