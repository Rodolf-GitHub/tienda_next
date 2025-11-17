import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans' 
});
const inter = Inter({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'El Pinareño - Almacén de Barrio en Uruguay',
  description: 'Tu almacén de confianza en el corazón del barrio. Productos frescos, fiambres, lácteos, panadería y todo lo que necesitás para tu hogar.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
