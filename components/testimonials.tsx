import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    business: 'Restaurante El Sabor',
    image: '/professional-woman-restaurant-owner.png',
    text: 'Desde que lanzamos nuestro sitio web, las reservaciones aumentaron un 60%. El diseño es hermoso y muy fácil de usar.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    business: 'Boutique Fashion Store',
    image: '/professional-man-fashion-store-owner.jpg',
    text: 'Increíble trabajo. Nuestras ventas online se triplicaron en los primeros 3 meses. Totalmente recomendado.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    business: 'Café Dulce Aroma',
    image: '/professional-cafe-owner.png',
    text: 'Profesional, puntual y creativo. El sitio web captura perfectamente la esencia de nuestro café. ¡Gracias!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            La satisfacción de mis clientes es mi mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
