"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Diensten", 
    href: "/diensten",
    submenu: [
      { name: "Installatie", href: "/diensten/installatie" },
      { name: "Onderhoud", href: "/diensten/onderhoud" },
      { name: "Reparatie", href: "/diensten/reparatie" },
    ]
  },
  { name: "Producten", href: "/producten" },
  { name: "Merken", href: "/merken" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-white/95 backdrop-blur-md border-b border-gray-200",
        scrolled ? "shadow-sm" : ""
      )} 
      role="banner"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue">
        Skip to main content
      </a>
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center text-lg font-semibold transition-colors text-gray-900 hover:text-orange-500"
          aria-label="Airco Installatie Heerlen - Home"
        >
          aircoinstallatieheerlen.nl
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList role="menubar" aria-label="Main Navigation">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.href} role="none">
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger 
                      className={cn(
                        "h-9 px-4 py-2 text-sm font-medium transition-colors",
                        "text-gray-700 hover:text-orange-500",
                        pathname.startsWith(item.href) && "text-orange-500"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.href}>
                            <Link href={subItem.href} legacyBehavior passHref>
                              <NavigationMenuLink
                                className={cn(
                                  "block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600",
                                  pathname === subItem.href && "bg-orange-50 text-orange-600"
                                )}
                              >
                                {subItem.name}
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                        "text-gray-700 hover:text-orange-500",
                        pathname === item.href && "text-orange-500"
                      )}
                      role="menuitem"
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="tel:0462021430">
            <Button 
              size="icon" 
              variant="ghost"
              className="text-gray-700 hover:text-orange-500"
            >
              <Phone className="h-5 w-5" />
              <span className="sr-only">Bel ons</span>
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Open menu"
                className="text-gray-700 hover:text-orange-500"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-3 text-base font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 rounded-md block min-h-[48px] flex items-center",
                        pathname === item.href && "bg-orange-50 text-orange-600"
                      )}
                      onClick={() => !item.submenu && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "px-4 py-3 text-base transition-colors hover:bg-orange-50 hover:text-orange-600 rounded-md block min-h-[48px] flex items-center",
                              pathname === subItem.href && "bg-orange-50 text-orange-600"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 space-y-3">
                  <Link 
                    href="https://afspraken.staycoolairco.nl/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Plan Afspraak
                    </Button>
                  </Link>
                  <Link href="tel:0462021430" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      046 202 1430
                    </Button>
                  </Link>
                  <Link 
                    href="https://wa.me/310636481054?text=Hallo,%20ik%20heb%20interesse%20in%20een%20airco%20installatie" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                        alt="WhatsApp" 
                        width={20} 
                        height={20} 
                        className="mr-2"
                      />
                      WhatsApp
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link 
            href="https://afspraken.staycoolairco.nl/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline"
              className="border-2 transition-all border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              aria-label="Plan een afspraak"
            >
              Plan Afspraak
            </Button>
          </Link>
          <Link 
            href="https://wa.me/310636481054?text=Hallo,%20ik%20heb%20interesse%20in%20een%20airco%20installatie" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline"
              className="border-2 transition-all border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              aria-label="Contact via WhatsApp"
            >
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                width={20} 
                height={20} 
                className="mr-2"
              />
              WhatsApp
            </Button>
          </Link>
          <Link href="tel:0462021430">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition-all hover:shadow-xl"
              aria-label="Bel ons direct"
            >
              <Phone className="mr-2 h-4 w-4" />
              046 202 1430
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
