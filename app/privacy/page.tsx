import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Privacy Policy | Lusso Executive Travel',
  description: 'How Lusso Executive Travel collects, uses and protects your personal information.',
}

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

function Section({ title, children, level = 'h4' }: { title: string; children: React.ReactNode; level?: 'h2' | 'h4' }) {
  const Heading = level
  return (
    <div style={{ marginBottom: 40 }}>
      <Heading style={{ fontFamily: serif, fontWeight: 400, fontSize: 22, color: '#f0f0ea', margin: '0 0 14px' }}>{title}</Heading>
      <div style={{ fontSize: 14, lineHeight: 1.85, color: '#999' }}>{children}</div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <div className="sp" style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Nav />

      <section style={{ background: '#0b0b0b', paddingTop: 74, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 56px' }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>Legal</div>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(32px,5vw,48px)', margin: '0 0 16px', lineHeight: 1.1 }}>
            Privacy <em style={{ color: GOLD, fontStyle: 'italic' }}>Policy</em>
          </h1>
          <p style={{ fontSize: 13, color: '#666' }}>Last updated: 1 July 2026</p>
        </div>
      </section>

      <section style={{ background: '#0e0e0e' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 96px' }}>

          <Section title="Who we are" level="h2">
            <p>
              Lusso Executive Travel (&quot;Lusso&quot;, &quot;we&quot;, &quot;us&quot;) is a licensed private hire chauffeur
              service operating across North Devon, Exeter and the wider UK. This policy explains what personal data
              we collect when you contact us or book a journey, why we collect it, and how we look after it.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>When you make an enquiry or booking, we may collect:</p>
            <ul style={{ margin: '10px 0', paddingLeft: 20 }}>
              <li>Your name, phone number and email address</li>
              <li>Pick-up and drop-off locations, journey date/time and flight details</li>
              <li>Any messages you send us via the contact form, phone, email or WhatsApp</li>
            </ul>
          </Section>

          <Section title="How we use your information">
            <p>We use your information to:</p>
            <ul style={{ margin: '10px 0', paddingLeft: 20 }}>
              <li>Confirm quotes and arrange your chauffeur journey</li>
              <li>Contact you about your booking, including flight-tracking updates</li>
              <li>Respond to enquiries sent through our website, phone, email or WhatsApp</li>
              <li>Meet our legal obligations as a licensed private hire operator</li>
            </ul>
            <p>We do not sell or share your personal data with third parties for marketing purposes.</p>
          </Section>

          <Section title="How long we keep your data">
            <p>
              We retain booking and enquiry information only for as long as necessary to provide our service and
              meet our legal and accounting obligations, after which it is securely deleted.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under UK GDPR, you can ask us to access, correct or delete the personal data we hold about you at any
              time. To make a request, contact us using the details below.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              If you have any questions about this policy or how we handle your data, contact us at{' '}
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
