"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Star, Shield, Zap, Users, Clock, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import productsData from "@/data/products.json"
import { ArrowRight, Check, Filter } from "lucide-react"

// Client component, so we define metadata in layout.tsx
export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")

  const breadcrumbItems = [
    { label: "Producten", href: "/producten" }
  ]

  // Filter products based on selected category and brand
  const filteredProducts = useMemo(() => {
    return productsData.products.filter(product => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
      const brandMatch = selectedBrand === "all" || product.brand === selectedBrand
      return categoryMatch && brandMatch
    })
  }, [selectedCategory, selectedBrand])

  // Get unique brands from filtered products
  const availableBrands = useMemo(() => {
    const brands = new Set<string>()
    productsData.products
      .filter(p => selectedCategory === "all" || p.category === selectedCategory)
      .forEach(p => brands.add(p.brand))
    return Array.from(brands).sort()
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-600/20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container relative py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Breadcrumb items={breadcrumbItems} variant="light" />
                </div>
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Airco's van <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Topmerken</span>
              </h1>
              <p className="mb-8 text-xl text-gray-300 leading-relaxed">
                Ontdek ons uitgebreide assortiment airconditioners. 
                Van stijlvolle design units tot krachtige klimaatsystemen voor elk interieur.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">A+++ Label</div>
                    <div className="text-sm text-gray-400">Maximaal energiezuinig</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Shield className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">5 Jaar Garantie</div>
                    <div className="text-sm text-gray-400">Volledige dekking</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Star className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold">4.8/5 Score</div>
                    <div className="text-sm text-gray-400">250+ tevreden klanten</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Service</div>
                    <div className="text-sm text-gray-400">Altijd bereikbaar</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="#producten">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0">
                    <Filter className="mr-2 h-5 w-5" />
                    Bekijk Alle Producten
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/50 hover:bg-white hover:text-gray-900 transition-all">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis Adviesgesprek
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Floating product cards */}
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">A+++</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Daikin Emura</div>
                      <div className="text-sm text-gray-300">Design airco</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">-40%</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Energiebesparing</div>
                      <div className="text-sm text-gray-300">t.o.v. oude airco</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-1/4 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Fluisterstil</div>
                      <div className="text-sm text-gray-300">Vanaf 19 dB(A)</div>
                    </div>
                  </div>
                </div>
                
                {/* Center graphic */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full blur-3xl" />
                  <div className="absolute inset-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-orange-400">50+</div>
                      <div className="text-gray-300 mt-2">Premium Modellen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Filters Section */}
      <section id="producten" className="container py-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Filter className="h-5 w-5 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Filter Producten</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Categorie
              </label>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full h-auto p-1">
                  <TabsTrigger value="all" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Alle</TabsTrigger>
                  <TabsTrigger value="split-airco" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Split Airco</TabsTrigger>
                  <TabsTrigger value="mobiele-airco" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Mobiele Airco</TabsTrigger>
                  <TabsTrigger value="accessoires" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Accessoires</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Merk
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedBrand === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedBrand("all")}
                  className={selectedBrand === "all" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Alle merken
                </Button>
                {availableBrands.map(brand => (
                  <Button
                    key={brand}
                    variant={selectedBrand === brand ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBrand(brand)}
                    className={selectedBrand === brand ? "bg-orange-500 hover:bg-orange-600" : ""}
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{filteredProducts.length}</span> producten gevonden
            </div>
            <div className="text-sm text-gray-500">
              Alle prijzen zijn inclusief BTW en installatie
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-gray-200"
            >
              <div className="aspect-square relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.model} airco`}
                  className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                />
                <Badge 
                  className="absolute top-4 right-4 backdrop-blur-sm"
                  variant={product.category === "split-airco" ? "default" : "secondary"}
                >
                  {productsData.categories[product.category as keyof typeof productsData.categories].name}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-600">{product.brand}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{product.model}</h3>
                </div>
                
                <p className="text-gray-600 line-clamp-2">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {product.capacities && (
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-500 mb-2">Capaciteiten:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.capacities.map((capacity, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-200">
                          {capacity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Link href={`/contact?product=${product.id}`} className="block">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-md transition-all">
                    Vraag offerte aan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Geen producten gevonden met de huidige filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all")
                setSelectedBrand("all")
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom kiezen voor StayCool Airco's?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Met meer dan 10 jaar ervaring zijn wij uw betrouwbare partner voor klimaatbeheersing
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto transform transition-transform group-hover:scale-110 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Merken</h3>
              <p className="text-gray-600">
                Officieel dealer van Daikin, LG, Samsung en andere A-merken
              </p>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto transform transition-transform group-hover:scale-110 shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Energiezuinig</h3>
              <p className="text-gray-600">
                Tot A+++ energielabel voor maximale besparing op energiekosten
              </p>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto transform transition-transform group-hover:scale-110 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Installatie</h3>
              <p className="text-gray-600">
                F-gassen gecertificeerde monteurs met 10+ jaar ervaring
              </p>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto transform transition-transform group-hover:scale-110 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">5 Jaar Garantie</h3>
              <p className="text-gray-600">
                Uitgebreide fabrieksgarantie met optie tot verlenging
              </p>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.8/5</span>
                <span className="text-gray-600">uit 250+ reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">F-gassen gecertificeerd</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">24/7 service beschikbaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAWithForm 
        title="Hulp nodig bij het kiezen?" 
        description="Onze experts helpen u graag bij het vinden van de perfecte airco voor uw situatie. Vraag vrijblijvend advies aan!"
      />
    </div>
  )
}