import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'La Bella Pasta',
    category: 'Restaurante Italiano',
    description: 'Sistema de reservaciones online y menú digital interactivo',
    image: '/modern-italian-restaurant-website-with-elegant-des.jpg',
    tags: ['E-commerce', 'Reservaciones', 'Menú Digital'],
  },
  {
    title: 'StyleHub Boutique',
    category: 'Tienda de Ropa',
    description: 'E-commerce completo con más de 500 productos y carrito de compras',
    image: '/fashion-e-commerce-website-with-clothing-products-.jpg',
    tags: ['E-commerce', 'Catálogo', 'Pagos Online'],
  },
  {
    title: 'Fresh Market',
    category: 'Supermercado',
    description: 'Plataforma de pedidos online con entrega a domicilio',
    image: '/grocery-store-website-with-product-categories-and-.jpg',
    tags: ['Pedidos Online', 'Delivery', 'Inventario'],
  },
  {
    title: 'Café Aroma',
    category: 'Cafetería',
    description: 'Sitio web con programa de lealtad y pedidos para llevar',
    image: '/modern-coffee-shop-website-with-menu-and-cozy-atmo.jpg',
    tags: ['Menú Digital', 'Programa Lealtad', 'Pedidos'],
  },
  {
    title: 'Urban Threads',
    category: 'Moda Urbana',
    description: 'Tienda online con lookbooks y sistema de tallas personalizado',
    image: '/urban-fashion-website-with-streetwear-and-modern-d.jpg',
    tags: ['E-commerce', 'Lookbook', 'Responsive'],
  },
  {
    title: 'Spa & Beauty',
    category: 'Cuidado Personal',
    description: 'Portal de reservas de citas y venta de productos de belleza',
    image: '/spa-and-beauty-salon-website-with-appointments-and.jpg',
    tags: ['Reservaciones', 'E-commerce', 'Catálogo'],
  },
]

export function Portfolio() {
  return (
    <section id="portafolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Proyectos que Hablan por Sí Mismos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Cada proyecto es una historia de éxito. Mira cómo he ayudado a negocios como el tuyo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border hover:border-secondary transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-secondary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
