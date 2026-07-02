import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Lusso Executive Travel',
  description: 'The terms and conditions that apply when you book a journey with Lusso Executive Travel.',
}

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 22, color: '#f0f0ea', margin: '0 0 14px' }}>{title}</h2>
      <div style={{ fontSize: 14, lineHeight: 1.85, color: '#999' }}>{children}</div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <div className="sp" style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Nav />

      <section style={{ background: '#0b0b0b', paddingTop: 74, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 56px' }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>Legal</div>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(32px,5vw,48px)', margin: '0 0 16px', lineHeight: 1.1 }}>
            Terms &amp; <em style={{ color: GOLD, fontStyle: 'italic' }}>Conditions</em>
          </h1>
          <p style={{ fontSize: 13, color: '#666' }}>Last updated: 1 July 2026</p>
        </div>
      </section>

      <section style={{ background: '#0e0e0e' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 96px' }}>

          <Section title="About us">
            <p>
              Lusso Executive Travel is a licensed and insured private hire operator providing chauffeur services
              across North Devon, Exeter and the wider UK. These terms apply to every booking made with us by phone,
              WhatsApp, email or our website enquiry form.
            </p>
          </Section>

          <Section title="Bookings and quotes">
            <p>
              Every journey is quoted individually based on route, timing and requirements. A quote is confirmed as
              a fixed fare once we have your full journey details. Prices are not published online because they
              depend on distance, timing and vehicle availability.
            </p>
          </Section>

          <Section title="Cancellations and changes">
            <p>
              We understand plans change. Please contact us by phone or WhatsApp as early as possible if you need to
              amend or cancel a booking, and we will do our best to accommodate the change. Cancellations made with
              very short notice, or missed pick-ups without notice, may be subject to a charge.
            </p>
          </Section>

          <Section title="Flight delays">
            <p>
              For airport transfers, we monitor your flight in real time and adjust your pick-up time automatically
              at no extra cost. A reasonable amount of complimentary waiting time is included for delayed arrivals.
            </p>
          </Section>

          <Section title="Passengers and luggage">
            <p>
              Please let us know in advance of any special requirements, including passenger numbers, luggage,
              child seats or accessibility needs, so we can ensure the right vehicle is provided.
            </p>
          </Section>

          <Section title="Our responsibilities">
            <p>
              We are a fully licensed and insured private hire operator. All chauffeurs are DBS-checked and vehicles
              are maintained and valeted to a high standard before every journey.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:lussoexecutive@gmail.com" style={{ color: GOLD }}>lussoexecutive@gmail.com</a> or{' '}
              <a href="tel:+447557261273" style={{ color: GOLD }}>+44 7557 261273</a>.
            </p>
          </Section>

        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
