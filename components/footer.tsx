import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">El Pinareño</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-md">
              Tu almacén de barrio de confianza. Más de 25 años ofreciendo productos frescos 
              y de calidad con la atención personalizada que merecés.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>099 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>elpinareno@ejemplo.com.uy</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Seguinos</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Mantente al día con nuestras ofertas y productos de temporada
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:elpinareno@ejemplo.com.uy"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} El Pinareño. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
