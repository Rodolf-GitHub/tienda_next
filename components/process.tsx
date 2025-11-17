import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consulta Inicial',
    description: 'Conversamos sobre tu negocio, objetivos y visión. Entiendo tus necesidades específicas.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Diseño Personalizado',
    description: 'Creo mockups y prototipos adaptados a tu marca. Revisamos juntos hasta que esté perfecto.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Desarrollo',
    description: 'Codifico tu sitio con las últimas tecnologías. Rápido, seguro y optimizado para SEO.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Publico tu sitio y te capacito en su uso. Soporte continuo para que siempre estés online.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Proceso Simple y Transparente
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            De la idea al lanzamiento en 4 pasos claros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative border-border hover:border-secondary transition-all duration-300">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 mt-6">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
