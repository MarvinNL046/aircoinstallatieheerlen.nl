"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

interface ContactFormProps {
  cityName?: string
}

export function ContactForm({ cityName }: ContactFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: cityName || "Heerlen",
    message: cityName 
      ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
      : "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Track analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        })
      }

      // Track Facebook Pixel if available
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'contact_form',
          city: formData.city,
          status: 'success'
        })
      }

      toast.success("Uw aanvraag is succesvol verzonden!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: cityName || "Heerlen",
        message: cityName 
          ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
          : "",
      })
      
      // Redirect to thank you page
      setTimeout(() => {
        router.push('/tot-snel')
      }, 1000)
    } catch (error) {
      toast.error("Er ging iets mis. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Uw naam"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Uw e-mailadres"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        type="tel"
        placeholder="Uw telefoonnummer"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <Input
        placeholder="Uw stad"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        required
      />
      <Textarea
        placeholder="Uw bericht"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
      />
      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Bezig met verzenden...
          </>
        ) : (
          "Verstuur Aanvraag"
        )}
      </Button>
    </form>
  )
}