'use client'

import { Button } from '@/components/ui/button'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-bold text-primary">El Pinareño</div>
            <span className="hidden sm:inline text-sm text-muted-foreground">Almacén de Barrio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#productos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Productos
            </a>
            <a href="#galeria" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Galería
            </a>
            <Button asChild className="gap-2">
              <a href="#contacto">
                <ShoppingCart size={18} />
                Contactanos
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#productos"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="#galeria"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </a>
              <Button asChild className="w-full gap-2">
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart size={18} />
                  Contactanos
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
