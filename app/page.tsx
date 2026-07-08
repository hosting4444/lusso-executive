import type { Metadata } from 'next'
import Script from 'next/script'
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

export const metadata: Metadata = {
  title: 'Barnstaple Taxi | Premium Executive Chauffeur Service',
  description:
    'Barnstaple Taxi - Professional chauffeur service & airport transfers to Heathrow, Bristol, Exeter. Licensed, DBS checked, fixed fares, 24/7 available now!',
}

export default function Home() {
  return (
    <div style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V7RFP5Y7KT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V7RFP5Y7KT');
        `}
      </Script>
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
