'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="text-primary">Contactanos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hacé tu pedido o consultanos lo que necesites. Estamos para ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Juan Rodríguez" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="099 123 456" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Opcional)</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección de Entrega</Label>
                  <Input id="address" placeholder="Calle 123, Pinar Norte" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tu Pedido o Consulta</Label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ejemplo: 2kg de tomates, 1kg de jamón cocido, 1 litro de leche..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Pedido
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Te responderemos a la brevedad para confirmar tu pedido
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Dirección</div>
                      <div className="text-muted-foreground">
                        Calle Principal 456, Pinar Norte<br />
                        Pando, Canelones, Uruguay
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Teléfono</div>
                      <div className="text-muted-foreground">
                        099 123 456<br />
                        2292 1234
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Email</div>
                      <div className="text-muted-foreground">
                        elpinareno@ejemplo.com.uy
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Horario</div>
                      <div className="text-muted-foreground">
                        Lunes a Sábado: 8:00 AM - 8:00 PM<br />
                        Domingos: 9:00 AM - 1:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Envíos a Domicilio</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Entregas en Pinar Norte y zonas cercanas</li>
                  <li>• Pedido mínimo $500 para delivery</li>
                  <li>• Envío gratis en compras mayores a $1500</li>
                  <li>• También aceptamos pedidos por WhatsApp</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
