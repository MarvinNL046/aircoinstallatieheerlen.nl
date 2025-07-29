"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const brands = [
  {
    name: "Daikin Comfora",
    logo: "/images/daikin-comfora-right.webp",
    alt: "Daikin Comfora airconditioning",
    link: "/producten#daikin-comfora"
  },
  {
    name: "Daikin Emura",
    logo: "/images/daikin-emura-wit.webp",
    alt: "Daikin Emura design airco",
    link: "/producten#daikin-emura"
  },
  {
    name: "Daikin Stylish",
    logo: "/images/daikin-stylish-wit.webp",
    alt: "Daikin Stylish airconditioning",
    link: "/producten#daikin-stylish"
  },
  {
    name: "Daikin Perfera",
    logo: "/images/daikin-perfera-wit.webp",
    alt: "Daikin Perfera airco",
    link: "/producten#daikin-perfera"
  },
  {
    name: "Daikin Ururu Sarara",
    logo: "/images/Ururu-Sarara-right.webp",
    alt: "Daikin Ururu Sarara premium airco",
    link: "/producten#daikin-ururu-sarara"
  },
  {
    name: "LG ArtCool",
    logo: "/images/lg-artcool-mirror.webp",
    alt: "LG ArtCool design airconditioning",
    link: "/producten#lg-artcool"
  },
  {
    name: "LG DualCool Premium",
    logo: "/images/LG-dualcool-indoor-premium.webp",
    alt: "LG DualCool Premium airco",
    link: "/producten#lg-dualcool-premium"
  },
  {
    name: "Samsung WindFree",
    logo: "/images/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp",
    alt: "Samsung WindFree airconditioning",
    link: "/producten#samsung-windfree"
  },
  {
    name: "Samsung Luzon",
    logo: "/images/samsung/luzon/Luzon_S2_Front_Web_RGB.webp",
    alt: "Samsung Luzon airco",
    link: "/producten#samsung-luzon"
  },
  {
    name: "Mitsubishi Heavy Industries",
    logo: "/images/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-510x510.webp",
    alt: "Mitsubishi Heavy Industries airconditioning",
    link: "/producten#mitsubishi-heavy-srk-zs"
  },
  {
    name: "Toshiba Haori",
    logo: "/images/Haori-zwart-vooraanzicht_3_11zon.webp",
    alt: "Toshiba Haori design airco",
    link: "/producten#toshiba-haori"
  },
  {
    name: "Toshiba Daiseikai",
    logo: "/images/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp",
    alt: "Toshiba Daiseikai airconditioning",
    link: "/producten#toshiba-daiseikai"
  },
  {
    name: "Toshiba Kazumi",
    logo: "/images/Kazumi-plus-white-vooraanzicht_8_11zon.webp",
    alt: "Toshiba Kazumi airco",
    link: "/producten#toshiba-kazumi"
  },
  {
    name: "Toshiba Seiya",
    logo: "/images/Seiya-plus-wit-vooraanzicht_12_11zon.webp",
    alt: "Toshiba Seiya airconditioning",
    link: "/producten#toshiba-seiya"
  },
  {
    name: "Tosot Pular",
    logo: "/images/568-Pular-indoor-vooraanzicht.webp",
    alt: "Tosot Pular airco",
    link: "/producten#tosot-pular"
  },
  {
    name: "Tosot Clivia",
    logo: "/images/724-clivia-wit-vooraanzicht.webp",
    alt: "Tosot Clivia airconditioning",
    link: "/producten#tosot-clivia"
  },
  {
    name: "Tosot Cosmo",
    logo: "/images/787-cosmo-indoor-vooraanzicht.webp",
    alt: "Tosot Cosmo airco",
    link: "/producten#tosot-cosmo"
  }
]

export function BrandLogosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const logosRef = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const logos = logosRef.current.slice()
    
    // Fallback: make section visible if IntersectionObserver fails
    const timer = setTimeout(() => {
      if (section && section.classList.contains("opacity-0")) {
        section.classList.remove("opacity-0")
        section.classList.add("animate-fade-in")
      }
      logos.forEach((logo) => {
        if (logo && logo.classList.contains("opacity-0")) {
          logo.classList.remove("opacity-0")
          logo.classList.add("animate-fade-in")
        }
      })
    }, 1000)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (section) {
      observer.observe(section)
    }

    logos.forEach((logo) => {
      if (logo) observer.observe(logo)
    })

    return () => {
      clearTimeout(timer)
      if (section) {
        observer.unobserve(section)
      }
      logos.forEach((logo) => {
        if (logo) observer.unobserve(logo)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24 opacity-0">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Wij Werken met Topmerken
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            StayCool Airco is officieel dealer van alle grote airco merken
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={brand.link}
              ref={(el) => {
                if (el) logosRef.current[index] = el
              }}
              className="opacity-0 group cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden border border-gray-200">
                <div className="aspect-square relative p-6 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                    loading="lazy"
                    onError={() => {
                      console.error(`Failed to load image: ${brand.logo}`);
                    }}
                  />
                </div>
                <div className="bg-gradient-to-t from-gray-900/80 to-transparent absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-xs font-medium truncate">{brand.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Alle topmerken onder één dak. Wij adviseren u graag over de beste keuze voor uw situatie.
          </p>
          <Link 
            href="/producten" 
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Bekijk alle producten
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-fade-in) {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}