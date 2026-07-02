import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Cookie Policy | Lusso Executive Travel',
  description: 'How Lusso Executive Travel uses cookies on this website.',
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

export default function CookiesPage() {
  return (
    <div className="sp" style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Nav />

      <section style={{ background: '#0b0b0b', paddingTop: 74, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 56px' }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>Legal</div>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(32px,5vw,48px)', margin: '0 0 16px', lineHeight: 1.1 }}>
            Cookie <em style={{ color: GOLD, fontStyle: 'italic' }}>Policy</em>
          </h1>
          <p style={{ fontSize: 13, color: '#666' }}>Last updated: 1 July 2026</p>
        </div>
      </section>

      <section style={{ background: '#0e0e0e' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 96px' }}>

          <Section title="What are cookies">
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the site
              function correctly and let us understand how it is used.
            </p>
          </Section>

          <Section title="Cookies we use">
            <p>This website uses a small number of essential and functional cookies, for example to:</p>
            <ul style={{ margin: '10px 0', paddingLeft: 20 }}>
              <li>Remember your preferences as you browse between pages</li>
              <li>Understand overall site usage so we can improve the experience</li>
            </ul>
            <p>We do not use cookies to sell your data or serve third-party advertising.</p>
          </Section>

          <Section title="Managing cookies">
            <p>
              Most web browsers let you control cookies through their settings, including blocking or deleting
              them. Please note that disabling cookies may affect how parts of this website function.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about this policy can be sent to{' '}
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
