import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import BookingBar from '@/components/BookingBar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollEffects from '@/components/ScrollEffects'
import ContactFaq from '@/components/ContactFaq'

export const metadata: Metadata = {
  title: 'Contact Us | Lusso Executive Travel — North Devon Chauffeur Service',
  description:
    'Get in touch with Lusso Executive Travel for airport transfers, corporate travel and executive chauffeur services across North Devon, Exeter and all major UK airports.',
}

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

const contactItems = [
  {
    label: 'Call Us',
    value: '+44 7557 261273',
    sub: 'Available 24 hours · 7 days a week',
    href: 'tel:+447557261273',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>,
  },
  {
    label: 'Email Us',
    value: 'lussoexecutive@gmail.com',
    sub: 'We reply within a few hours',
    href: 'mailto:lussoexecutive@gmail.com',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>,
  },
  {
    label: 'WhatsApp',
    value: '+44 7557 261273',
    sub: 'Message us instantly',
    href: 'https://wa.me/447557261273',
    isWhatsApp: true,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm4.6 12.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.97-.14.17-.29.19-.54.06a6.7 6.7 0 01-3.3-2.9c-.25-.43.25-.4.71-1.32.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.72 4.3 3.81 2.51 1.08 2.51.72 2.96.68.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18z"/></svg>,
  },
  {
    label: 'Service Area',
    value: 'North Devon, Exeter & UK-wide travel',
    sub: 'All major UK airports covered',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  },
]

const canContactFor = [
  'Airport transfers',
  'Corporate travel',
  'Executive journeys',
  'Meet & greet service',
  'Private transportation',
]

const quoteIncludes = [
  'Pick-up location',
  'Destination',
  'Date & time',
  'Number of passengers',
  'Flight details (if required)',
]

export default function ContactPage() {
  return (
    <div className="sp" style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Nav />

      {/* ─── PAGE HERO ─── */}
      <section style={{ background: '#0b0b0b', paddingTop: 74, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '80px 32px 72px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 64, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              Contact Us
            </div>
            <h1 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(34px,5.5vw,58px)', lineHeight: 1.08,
              margin: '0 0 24px',
            }}>
              Get In Touch For Your{' '}
              <em style={{ color: GOLD, fontStyle: 'italic' }}>Next Journey</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.82, color: '#9b9b95', margin: 0 }}>
              Whether you need an airport transfer, corporate chauffeur service, or private executive
              travel, our team is ready to help. Contact Lusso Executive Travel today and receive a
              personalised quote for your journey.
            </p>
          </div>

          <div className="about-img-wrap">
            <div style={{
              width: '100%', aspectRatio: '4/3',
              backgroundImage: "url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=72')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)', borderRadius: 4,
            }} />
          </div>
        </div>
      </section>

      {/* ─── CONTACT INFO + MAP ─── */}
      <section style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '88px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 56, alignItems: 'stretch',
        }}>

          {/* Contact rows */}
          <div id="contact-col">
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 14 }}>
                Get in touch
              </div>
              <h2 style={{
                fontFamily: serif, fontWeight: 400,
                fontSize: 'clamp(24px,3.5vw,36px)', margin: '0 0 10px',
              }}>
                Contact <em style={{ color: GOLD, fontStyle: 'italic' }}>Lusso</em>
              </h2>
              <p style={{ fontSize: 14, color: '#666', margin: 0, lineHeight: 1.7 }}>
                Available 24/7 — call, email or WhatsApp, whatever suits you.
              </p>
            </div>

            {contactItems.map(item => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-row contact-anim"
                >
                  <div
                    className="c-icon"
                    style={item.isWhatsApp ? { background: 'rgba(37,211,102,.08)', borderColor: 'rgba(37,211,102,.25)' } : undefined}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="c-label" style={item.isWhatsApp ? { color: '#25d366' } : undefined}>
                      {item.label}
                    </div>
                    <div className="c-val">{item.value}</div>
                    <div style={{ fontSize: 11, color: '#555', marginTop: 3 }}>{item.sub}</div>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="contact-row contact-anim">
                  <div className="c-icon">{item.icon}</div>
                  <div>
                    <div className="c-label">{item.label}</div>
                    <div className="c-val">{item.value}</div>
                    <div style={{ fontSize: 11, color: '#555', marginTop: 3 }}>{item.sub}</div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Map */}
          <div data-reveal="1" style={{ padding: 10, boxSizing: 'border-box' }}>
            <div className="about-img-wrap" style={{ height: '100%' }}>
              <iframe
                title="Lusso Executive Travel — North Devon service area"
                src="https://www.google.com/maps?q=Barnstaple,+North+Devon,+UK&z=10&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: '1px solid rgba(255,255,255,.07)',
                  width: '100%', height: '100%', minHeight: 380,
                  display: 'block',
                  filter: 'grayscale(0.3) contrast(1.05) brightness(0.88)',
                  borderRadius: 12,
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── BOOK YOUR CHAUFFEUR SERVICE ─── */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '88px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 64, alignItems: 'start',
        }}>

          {/* Left: services list */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              How We Can Help
            </div>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(26px,3.5vw,36px)', margin: '0 0 18px', lineHeight: 1.15,
            }}>
              Book Your Chauffeur <em style={{ color: GOLD, fontStyle: 'italic' }}>Service</em>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.82, color: '#888', margin: '0 0 30px' }}>
              Tell us your travel details and we will arrange a smooth and reliable chauffeur experience.
            </p>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#555', marginBottom: 18 }}>
              You can contact us for
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {canContactFor.map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,.05)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.2" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 14, color: '#999' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: what to include */}
          <div style={{
            background: '#111', border: '1px solid rgba(255,255,255,.07)',
            padding: '36px 32px', borderRadius: 14,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>
              Request A Quote
            </div>
            <h3 style={{
              fontFamily: serif, fontWeight: 400, fontSize: 22, margin: '0 0 16px', lineHeight: 1.3,
            }}>
              What to include in your enquiry
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.78, color: '#777', margin: '0 0 26px' }}>
              Complete our enquiry form with your journey details and we will get back to you
              with a fixed travel quote.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 32 }}>
              {quoteIncludes.map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,.05)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.2" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 14, color: '#999' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#booking" style={{
                background: GOLD, color: '#0e0e0e', fontSize: 12, letterSpacing: 1.5,
                textTransform: 'uppercase', fontWeight: 700, padding: '14px 24px',
                display: 'inline-flex', alignItems: 'center', borderRadius: 6,
              }}>
                Request A Quote
              </a>
              <a href="tel:+447557261273" style={{
                border: `1px solid rgba(212,175,55,.45)`, color: GOLD, fontSize: 12,
                letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700,
                padding: '14px 24px', display: 'inline-flex', alignItems: 'center', borderRadius: 6,
              }}>
                Call Us Now
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── BOOKING FORM ─── */}
      <BookingBar />

      <ContactFaq />

      {/* ─── TRAVEL WITH CONFIDENCE ─── */}
      <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 20 }}>
            Travel With Confidence
          </div>
          <h2 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(26px,3.5vw,38px)', margin: '0 0 18px', lineHeight: 1.2,
          }}>
            Professional chauffeurs.{' '}
            <em style={{ color: GOLD, fontStyle: 'italic' }}>Comfortable vehicles.</em>{' '}
            Reliable service.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#777', maxWidth: 480, margin: '0 auto 38px' }}>
            Experience a premium chauffeur journey with Lusso Executive Travel.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#booking" className="btn-shimmer" style={{
              background: GOLD, color: '#0e0e0e', fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '17px 32px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              Request A Quote
            </a>
            <a href="tel:+447557261273" className="hero-call-btn" style={{
              border: '1px solid rgba(212,175,55,.55)', color: GOLD, fontSize: 13,
              letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700,
              padding: '17px 32px', minHeight: 44, boxSizing: 'border-box',
              display: 'inline-flex', alignItems: 'center', borderRadius: 8,
            }}>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollEffects />
    </div>
  )
}
