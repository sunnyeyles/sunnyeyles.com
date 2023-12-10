'use client'
import { useState, useRef } from 'react'

import Image from 'next/image'
import { Landing } from '@/components/fullPages/Landing'
import { About } from '@/components/fullPages/About'
import { Projects } from '@/components/fullPages/Projects'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import backgroundSpaceImage from '../pexels-sam-kolder-2387877.jpg'
import { useScroll } from '@react-spring/web'
import { ProjectCard } from '@/components/ui/ProjectCard'
import svg1 from '../something.svg'
import svg2 from '../svg2.svg'
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
