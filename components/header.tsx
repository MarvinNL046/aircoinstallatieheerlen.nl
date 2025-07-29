"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue">
            Airco Offerte Limburg
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/diensten" className="text-muted-foreground hover:text-blue">
              Diensten
            </Link>
            <Link href="/over-ons" className="text-muted-foreground hover:text-blue">
              Over Ons
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-blue">
              Contact
            </Link>
            <ThemeToggle />
            <Button className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Bel Nu</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 ml-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/diensten"
                className="text-muted-foreground hover:text-blue px-2"
              >
                Diensten
              </Link>
              <Link
                href="/over-ons"
                className="text-muted-foreground hover:text-blue px-2"
              >
                Over Ons
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-blue px-2"
              >
                Contact
              </Link>
              <Button className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Bel Nu</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}