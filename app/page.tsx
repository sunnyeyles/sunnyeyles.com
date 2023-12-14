'use client'
import Image from 'next/image'
import { Landing } from '@/components/fullPages/Landing'
import { Projects } from '@/components/fullPages/Projects'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { ContactForm } from '@/components/ui/ContactForm'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}
