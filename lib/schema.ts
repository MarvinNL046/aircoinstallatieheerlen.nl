import { Organization, WithContext, Service, LocalBusiness, BreadcrumbList } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StayCool Airco Heerlen",
    url: "https://aircoinstallatieheerlen.nl",
    logo: "https://staycoolairco.nl/logo.png",
    description: "Professionele airco installatie in Heerlen, Parkstad en Zuid-Limburg. Erkend installateur met 4.7/5 sterren beoordeling.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Heerlen",
      addressRegion: "Limburg",
      addressCountry: "NL",
      postalCode: "6411"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
      availableLanguage: ["nl", "en"],
      contactOption: "TollFree",
      areaServed: ["NL"]
    },
    sameAs: [
      "https://staycoolairco.nl",
      "https://facebook.com/staycoolairco",
      "https://instagram.com/staycoolairco",
      "https://linkedin.com/company/staycoolairco",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Heerlen"
      },
      {
        "@type": "City",
        name: "Brunssum"
      },
      {
        "@type": "City",
        name: "Landgraaf"
      },
      {
        "@type": "City",
        name: "Kerkrade"
      },
      {
        "@type": "City",
        name: "Parkstad"
      },
      {
        "@type": "City",
        name: "Zuid-Limburg"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "124"
    }
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "StayCool Airco",
    },
    areaServed: {
      "@type": "City",
      name: "Heerlen",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://aircoinstallatieheerlen.nl/steden/${city.toLowerCase()}#localbusiness`,
    name: `StayCool Airco - Airco Installatie ${city}`,
    alternateName: `Airco ${city} - StayCool`,
    description: `Professionele airco installatie en service in ${city}. Split airco specialist met 4.7/5 sterren. Erkend installateur voor alle merken. Vanaf €11/maand.`,
    url: `https://aircoinstallatieheerlen.nl/steden/${city.toLowerCase()}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    image: [
      "https://staycoolairco.nl/logo.png",
      "https://aircoinstallatieheerlen.nl/images/showroom.jpg",
      "https://aircoinstallatieheerlen.nl/images/installation.jpg"
    ],
    areaServed: {
      "@type": "City",
      name: city,
      containedIn: {
        "@type": "State",
        name: "Limburg",
        containedIn: {
          "@type": "Country",
          name: "Nederland"
        }
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "Limburg",
      addressCountry: "NL",
      postalCode: "6411"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.8880",
      longitude: "5.9790"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "EUR",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "124",
      reviewCount: "89"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Airco Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Airco Installatie",
          description: "Professionele installatie van split airco systemen"
        },
        {
          "@type": "Service",
          name: "Airco Onderhoud",
          description: "Jaarlijks onderhoud voor optimale prestaties"
        },
        {
          "@type": "Service",
          name: "Airco Reparatie",
          description: "Snelle reparatie service voor alle merken"
        }
      ]
    }
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aircoinstallatieheerlen.nl${item.item}`,
    })),
  }
}
