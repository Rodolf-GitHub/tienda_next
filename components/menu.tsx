import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, Leaf } from 'lucide-react'

const menuItems = [
  {
    category: "Entradas",
    items: [
      {
        name: "Guacamole Tradicional",
        description: "Aguacate fresco machacado con cilantro, cebolla, tomate y limón. Servido con totopos.",
        price: "$180",
        image: "/fresh-authentic-guacamole-in-molcajete-with-tortil.jpg",
        spicy: false,
        vegetarian: true
      },
      {
        name: "Queso Fundido",
        description: "Queso Oaxaca derretido con chorizo y rajas de chile poblano.",
        price: "$220",
        image: "/melted-cheese-queso-fundido-chorizo-mexican-appeti.jpg",
        spicy: true,
        vegetarian: false
      },
      {
        name: "Ceviche de Camarón",
        description: "Camarones frescos marinados en limón con pepino, aguacate y cilantro.",
        price: "$280",
        image: "/fresh-shrimp-ceviche-lime-avocado-cilantro-colorfu.jpg",
        spicy: false,
        vegetarian: false
      }
    ]
  },
  {
    category: "Platos Fuertes",
    items: [
      {
        name: "Tacos al Pastor",
        description: "Tres tacos de cerdo marinado con achiote, piña, cilantro y cebolla.",
        price: "$250",
        image: "/authentic-tacos-al-pastor-pineapple-cilantro-onion.jpg",
        spicy: true,
        vegetarian: false
      },
      {
        name: "Mole Poblano",
        description: "Pollo bañado en mole tradicional de 27 ingredientes. Con arroz y frijoles.",
        price: "$320",
        image: "/mole-poblano-chicken-traditional-mexican-dark-sauc.jpg",
        spicy: true,
        vegetarian: false
      },
      {
        name: "Enchiladas Suizas",
        description: "Tortillas rellenas de pollo en salsa verde, gratinadas con queso y crema.",
        price: "$280",
        image: "/enchiladas-suizas-green-sauce-melted-cheese-cream-.jpg",
        spicy: false,
        vegetarian: false
      },
      {
        name: "Chile en Nogada",
        description: "Chile poblano relleno de picadillo, bañado en salsa de nuez y granada.",
        price: "$380",
        image: "/chile-en-nogada-walnut-sauce-pomegranate-mexican-n.jpg",
        spicy: false,
        vegetarian: false
      },
      {
        name: "Quesadillas de Flor",
        description: "Tortillas hechas a mano rellenas de flor de calabaza, queso y epazote.",
        price: "$240",
        image: "/quesadilla-squash-blossoms-cheese-mexican-vegetari.jpg",
        spicy: false,
        vegetarian: true
      },
      {
        name: "Pescado Veracruzano",
        description: "Filete de pescado en salsa de tomate, aceitunas, alcaparras y chiles.",
        price: "$350",
        image: "/pescado-veracruzano-fish-tomato-sauce-olives-caper.jpg",
        spicy: true,
        vegetarian: false
      }
    ]
  },
  {
    category: "Postres",
    items: [
      {
        name: "Churros con Chocolate",
        description: "Churros recién hechos espolvoreados con azúcar y canela. Con chocolate caliente.",
        price: "$150",
        image: "/fresh-churros-cinnamon-sugar-hot-chocolate-mexican.jpg",
        spicy: false,
        vegetarian: true
      },
      {
        name: "Flan Napolitano",
        description: "Flan casero de vainilla con caramelo. Receta tradicional de la abuela.",
        price: "$130",
        image: "/placeholder.svg?height=300&width=400",
        spicy: false,
        vegetarian: true
      },
      {
        name: "Pastel Tres Leches",
        description: "Bizcocho esponjoso bañado en tres tipos de leche, cubierto con crema batida.",
        price: "$140",
        image: "/placeholder.svg?height=300&width=400",
        spicy: false,
        vegetarian: true
      }
    ]
  }
]

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestro <span className="text-primary">Menú</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explora nuestra selección de platillos tradicionales preparados con ingredientes frescos y recetas auténticas
          </p>
        </div>

        {menuItems.map((category, categoryIdx) => (
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
                      {item.spicy && (
                        <Badge variant="destructive" className="bg-red-500">
                          <Flame className="w-3 h-3 mr-1" />
                          Picante
                        </Badge>
                      )}
                      {item.vegetarian && (
                        <Badge variant="secondary" className="bg-green-600 text-white">
                          <Leaf className="w-3 h-3 mr-1" />
                          Vegetariano
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-foreground">{item.name}</h4>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
