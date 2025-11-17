import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, ShoppingBasket } from 'lucide-react'

const productCategories = [
  {
    category: "Fiambres y Quesos",
    items: [
      {
        name: "Jamón Cocido Premium",
        description: "Jamón cocido de primera calidad, ideal para sándwiches y picadas.",
        price: "$380/kg",
        image: "/cooked-ham-sliced-deli-meat-uruguayan-premium-qual.jpg",
        fresh: true
      },
      {
        name: "Queso Colonia",
        description: "Queso uruguayo tipo colonia, suave y cremoso. Perfecto para el desayuno.",
        price: "$420/kg",
        image: "/uruguayan-colonia-cheese-creamy-fresh-dairy-local-p.jpg",
        fresh: true
      },
      {
        name: "Salchichón Italiano",
        description: "Salchichón curado con especias tradicionales, cortado fino.",
        price: "$450/kg",
        image: "/italian-salami-sliced-cured-meat-uruguayan-deli-de.jpg",
        fresh: false
      }
    ]
  },
  {
    category: "Frutas y Verduras",
    items: [
      {
        name: "Tomates Frescos",
        description: "Tomates perita y redondos de productores locales, cosecha del día.",
        price: "$90/kg",
        image: "/fresh-ripe-tomatoes-red-produce-local-uruguayan-veg.jpg",
        fresh: true
      },
      {
        name: "Lechuga Criolla",
        description: "Lechuga fresca y crujiente, ideal para ensaladas. Producto uruguayo.",
        price: "$60/unidad",
        image: "/fresh-green-lettuce-crisp-leafy-vegetables-organic-.jpg",
        fresh: true
      },
      {
        name: "Manzanas Rojas",
        description: "Manzanas rojas dulces y jugosas, perfectas para toda la familia.",
        price: "$110/kg",
        image: "/fresh-red-apples-crisp-fruit-local-produce-healthy.jpg",
        fresh: true
      },
      {
        name: "Bananas",
        description: "Bananas frescas en su punto perfecto de maduración.",
        price: "$85/kg",
        image: "/fresh-yellow-bananas-ripe-fruit-tropical-produce-h.jpg",
        fresh: true
      },
      {
        name: "Zanahoria",
        description: "Zanahorias frescas y dulces, ideales para ensaladas y guisos.",
        price: "$70/kg",
        image: "/fresh-carrots-orange-vegetables-root-produce-health.jpg",
        fresh: true
      },
      {
        name: "Papa Blanca",
        description: "Papas blancas de calidad, perfectas para puré, fritas o al horno.",
        price: "$55/kg",
        image: "/fresh-white-potatoes-root-vegetables-uruguayan-prod.jpg",
        fresh: true
      }
    ]
  },
  {
    category: "Lácteos y Panadería",
    items: [
      {
        name: "Leche Entera Conaprole",
        description: "Leche entera fresca de la mejor calidad uruguaya.",
        price: "$65/litro",
        image: "/fresh-whole-milk-bottle-dairy-uruguayan-conaprole-w.jpg",
        fresh: true
      },
      {
        name: "Pan Francés (Artesanal)",
        description: "Pan francés recién horneado todas las mañanas. Crujiente y esponjoso.",
        price: "$80",
        image: "/fresh-french-bread-baguette-bakery-uruguayan-artisa.jpg",
        fresh: true
      },
      {
        name: "Manteca La Blanqueada",
        description: "Manteca cremosa uruguaya, ideal para untar y cocinar.",
        price: "$180/250g",
        image: "/butter-dairy-spread-uruguayan-yellow-creamy-product.jpg",
        fresh: true
      }
    ]
  },
  {
    category: "Almacén y Despensa",
    items: [
      {
        name: "Arroz Saman",
        description: "Arroz blanco de grano largo, marca líder uruguaya. Bolsa de 1kg.",
        price: "$95",
        image: "/white-rice-bag-dry-grain-uruguayan-pantry-staple-fo.jpg",
        fresh: false
      },
      {
        name: "Fideos Barilla (500g)",
        description: "Pasta italiana de calidad premium. Variedad de formatos disponibles.",
        price: "$120/500g",
        image: "/italian-pasta-dry-noodles-spaghetti-pantry-food-pa.jpg",
        fresh: false
      },
      {
        name: "Aceite Cocinero 900ml",
        description: "Aceite vegetal uruguayo para cocinar. Botella de 900ml.",
        price: "$180",
        image: "/cooking-oil-bottle-vegetable-oil-uruguayan-kitchen-.jpg",
        fresh: false
      }
    ]
  }
]

export function Products() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestros <span className="text-primary">Productos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Productos frescos y de calidad seleccionados especialmente para vos y tu familia
          </p>
        </div>

        {productCategories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16 last:mb-0">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIdx) => (
                <Card key={itemIdx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {item.fresh && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Leaf className="w-3 h-3 mr-1" />
                          Fresco
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-foreground">{item.name}</h4>
                      <span className="text-xl font-bold text-primary whitespace-nowrap ml-2">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <ShoppingBasket className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contamos con más de 500 productos en tienda. Visitanos o contactanos para conocer todo lo que tenemos para ofrecerte.
          </p>
        </div>
      </div>
    </section>
  )
}
