import { Award, Heart, Package } from 'lucide-react'

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/fresh-vegetables-produce-local-uruguayan-market-c.jpg"
                alt="Productos Frescos"
                className="rounded-lg object-cover w-full h-64 shadow-xl"
              />
              <img
                src="/uruguayan-deli-meats-cheese-fiambre-display-loca.jpg"
                alt="Fiambres y Quesos"
                className="rounded-lg object-cover w-full h-64 shadow-xl mt-8"
              />
              <img
                src="/fresh-bread-bakery-uruguayan-groceries-artisan-b.jpg"
                alt="Panadería Fresca"
                className="rounded-lg object-cover w-full h-64 shadow-xl -mt-8"
              />
              <img
                src="/friendly-uruguayan-store-owner-serving-customers.jpg"
                alt="Atención Personalizada"
                className="rounded-lg object-cover w-full h-64 shadow-xl"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Un Almacén de{' '}
              <span className="text-primary">Tradición y Calidad</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde 1998, El Pinareño es el almacén de confianza del barrio. Don Carlos y su familia se enorgullecen de ofrecer los mejores productos frescos, fiambres de calidad premium y un servicio cercano que te hace sentir como en casa.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trabajamos con proveedores locales uruguayos para garantizar productos frescos todos los días. Desde lácteos hasta panadería, pasando por frutas, verduras y todo lo que necesitás para tu hogar.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Package className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Productos Disponibles</div>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Atención Familiar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
