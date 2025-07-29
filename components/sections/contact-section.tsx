"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { sendEmail } from "@/lib/emailjs"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendEmail(formData)
      toast.success("Uw aanvraag is succesvol verzonden!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      toast.error("Er ging iets mis. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefoon',
      content: '046 202 1430',
      href: 'tel:0462021430',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '06 3648 1054',
      href: 'https://wa.me/31636481054',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'info@staycoolairco.nl',
      href: 'mailto:info@staycoolairco.nl',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Aan de Bogen 11, 6118 AS Nieuwstadt',
      subtext: '(geen bezoekadres)',
    },
  ]

  const businessHours = [
    { days: 'Maandag, Dinsdag, Donderdag', hours: '09:00 - 17:00' },
    { days: 'Woensdag, Vrijdag', hours: '09:00 - 16:00' },
    { days: 'Zaterdag, Zondag', hours: 'Gesloten' },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Neem Contact Op</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? 
            Neem gerust contact met ons op via onderstaand formulier of bel ons direct.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contactgegevens</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-gray-600 hover:text-orange-500 transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                        {item.subtext && (
                          <p className="text-sm text-gray-500">{item.subtext}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Openingstijden</h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Clock className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{schedule.days}</p>
                      <p className="text-gray-600">{schedule.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Stuur ons een bericht</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam *
                </label>
                <Input
                  id="name"
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mailadres *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="uw@email.nl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="06 12345678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht *
                </label>
                <Textarea
                  id="message"
                  placeholder="Waar kunnen we u mee helpen?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Bezig met verzenden...
                  </>
                ) : (
                  "Verstuur Bericht"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}