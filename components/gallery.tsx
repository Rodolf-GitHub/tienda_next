export function Gallery() {
  const images = [
    {
      src: "/fresh-vegetables-produce-local-uruguayan-market-c.jpg",
      alt: "Interior del Almacén"
    },
    {
      src: "/fresh-bread-bakery-uruguayan-groceries-artisan-b.jpg",
      alt: "Sección de Frutas y Verduras"
    },
    {
      src: "/uruguayan-deli-meats-cheese-fiambre-display-loca.jpg",
      alt: "Mostrador de Fiambres"
    },
    {
      src: "/fresh-bread-bakery-uruguayan-groceries-artisan-b.jpg",
      alt: "Panadería Fresca"
    },
    {
      src: "/friendly-uruguayan-store-owner-serving-customers.jpg",
      alt: "Sección de Lácteos"
    },
    {
      src: "/uruguayan-grocery-store-colorful-fresh-products-fr.jpg",
      alt: "Productos Seleccionados"
    }
  ]

  return (
    <section id="galeria" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="text-primary">Conocé</span> Nuestro Almacén
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un vistazo a nuestras instalaciones y la variedad de productos frescos que ofrecemos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64 md:h-80"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
