'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react'

export function Reservation() {
  return (
    <section id="reservar" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            <span className="text-primary">Reserva</span> tu Mesa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Asegura tu lugar en la mejor experiencia gastronómica mexicana de la ciudad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Juan Pérez" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="55 1234 5678" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="date" type="date" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Hora</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="time" type="time" className="pl-10" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Número de Personas</Label>
                  <Input id="guests" type="number" min="1" max="20" placeholder="4" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Solicitudes Especiales (Opcional)</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Alergias, celebraciones, preferencias de mesa..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Confirmar Reservación
                </Button>
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
                        Av. Juárez 123, Centro Histórico<br />
                        Ciudad de México, 06000
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
                        +52 55 1234 5678<br />
                        +52 55 8765 4321
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
                        reservas@saborautentico.com<br />
                        info@saborautentico.com
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
                        Martes a Domingo: 1:00 PM - 11:00 PM<br />
                        Lunes: Cerrado
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Política de Reservaciones</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Las reservaciones se mantienen por 15 minutos</li>
                  <li>• Para grupos de 8+ personas, llamar directamente</li>
                  <li>• Cancelaciones con 24 horas de anticipación</li>
                  <li>• Aceptamos todas las formas de pago</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
