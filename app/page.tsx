import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
