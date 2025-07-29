import { Metadata } from 'next';
import { Breadcrumb } from "@/components/navigation/breadcrumb";
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: '📞 Contact StayCool Airco Heerlen | Direct: 046-202-1430',
  description: 'Contact StayCool Airco Heerlen voor split airco installatie & service ⭐ 4.7/5. Gratis advies voor Parkstad & Zuid-Limburg. Binnen 24u reactie!',
  keywords: [
    'contact airco heerlen',
    'airco specialist heerlen contact',
    'staycool airco contact',
    'airco advies limburg'
  ],
  openGraph: {
    title: '📞 Contact StayCool Airco Heerlen | Direct: 046-202-1430',
    description: 'Neem contact op met StayCool ⭐ 4.7/5. Dé airco specialist van Heerlen & Parkstad. Gratis advies!',
    type: 'website',
    locale: 'nl_NL'
  }
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ContactSection />
    </>
  );
}
