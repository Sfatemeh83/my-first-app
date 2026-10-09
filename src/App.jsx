import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SignatureDish from './components/SignatureDish.jsx'
import FeaturedMenu from './components/FeaturedMenu.jsx'
import FullMenu from './components/FullMenu.jsx'
import About from './components/About.jsx'
import Reservation from './components/Reservation.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureDish />
        <FeaturedMenu />
        <FullMenu />
        <About />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}
