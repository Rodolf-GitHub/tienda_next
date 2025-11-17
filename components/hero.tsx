import { Button } from '@/components/ui/button'
import { Store, Clock, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="/uruguayan-grocery-store-colorful-fresh-products-fr.jpg"
          alt="El Pinareño - Almacén de Barrio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/90 backdrop-blur-sm text-secondary-foreground mb-6 border border-secondary">
            <Store className="w-4 h-4" />
            <span className="text-sm font-medium">Tu Almacén de Confianza</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance leading-tight">
            El <span className="text-secondary">Pinareño</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/95 mb-10 text-pretty max-w-2xl leading-relaxed">
            Productos frescos, fiambres de calidad, lácteos y todo lo que necesitás para tu mesa. Servicio personalizado desde 1998.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <a href="#productos">Ver Productos</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" asChild>
              <a href="#contacto">Hacer Pedido</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Horario</div>
                <div className="text-xs text-white/80">Lun-Sáb 8am-8pm</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Ubicación</div>
                <div className="text-xs text-white/80">Pinar Norte, Pando</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Store className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Atención</div>
                <div className="text-xs text-white/80">Personalizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
