import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BookingBar from '@/components/BookingBar'
import TrustStrip from '@/components/TrustStrip'
import Services from '@/components/Services'
import WhyLusso from '@/components/WhyLusso'
import Fleet from '@/components/Fleet'
import About from '@/components/About'
import ServiceAreas from '@/components/ServiceAreas'
import Reviews from '@/components/Reviews'
import Corporate from '@/components/Corporate'
import CtaBand from '@/components/CtaBand'
import Contact from '@/components/Contact'
import HomeFaq from '@/components/HomeFaq'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollEffects from '@/components/ScrollEffects'

export default function Home() {
  return (
    <div style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <BookingBar />
      <TrustStrip />
      <Services />
      <WhyLusso />
      <Fleet />
      <About />
      <ServiceAreas />
      <Reviews />
      <Corporate />
      <CtaBand />
      <Contact />
      <HomeFaq />
      <Footer />
      <WhatsAppFloat />
      <ScrollEffects />
    </div>
  )
}
