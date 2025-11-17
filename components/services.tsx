import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Store, ShoppingBag, Utensils, Sparkles, Smartphone, Search } from 'lucide-react'

const services = [
  {
    icon: Utensils,
    title: 'Restaurantes & Cafeterías',
    description: 'Menús digitales, reservaciones online y sistemas de pedidos que aumentan tus ventas hasta un 40%.',
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas de Ropa',
    description: 'E-commerce elegante con catálogos visuales, carrito de compras y pasarelas de pago integradas.',
  },
  {
    icon: Store,
    title: 'Tiendas de Aseo & Retail',
    description: 'Sitios optimizados para conversión con gestión de inventario y seguimiento de pedidos.',
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsive',
    description: 'Tu sitio se verá perfecto en cualquier dispositivo: móvil, tablet o escritorio.',
  },
  {
    icon: Search,
    title: 'SEO Optimizado',
    description: 'Aparece en Google cuando tus clientes buscan. Optimización completa para motores de búsqueda.',
  },
  {
    icon: Sparkles,
    title: 'Diseño Personalizado',
    description: 'Cada proyecto es único. Diseño 100% personalizado que refleja la identidad de tu marca.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Servicios que Impulsan tu Negocio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Soluciones digitales completas diseñadas específicamente para tu industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-secondary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
