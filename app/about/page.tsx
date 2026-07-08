import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollEffects from '@/components/ScrollEffects'
import AboutFaq from '@/components/AboutFaq'

export const metadata: Metadata = {
  title: 'Executive Chauffeur North Devon | Lusso Travel',
  description:
    'Executive Chauffeur North Devon - Premium airport transfers & luxury chauffeur service. DBS checked, professional drivers, fixed pricing. Book now!',
}

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

const services = [
  {
    title: 'Airport Transfers',
    desc: 'Reliable transfers to Heathrow, Gatwick, Bristol, Exeter, Birmingham, Luton, and other major UK airports.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><path d="M2 16l9-2 5-9 1.5.5-2.5 8 5-1 1.5 2-3 1.5-1 4-1.5-.5-.5-3-5 1.2L8 22l-1.5-.5 1-4-5 1z"/></svg>,
  },
  {
    title: 'Corporate Travel',
    desc: 'Professional business transportation for meetings, events, and executive journeys.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 13h18"/></svg>,
  },
  {
    title: 'Private Executive Travel',
    desc: 'Comfortable long-distance travel for clients who value privacy, convenience, and style.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><path d="M3 13l2-5a2 2 0 012-1.5h10A2 2 0 0119 8l2 5"/><path d="M3 13h18v4H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>,
  },
  {
    title: 'Meet & Greet Service',
    desc: 'A personal airport welcome with assistance from arrivals to your vehicle.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><circle cx="12" cy="8" r="3.5"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/><path d="M12 4.5V2"/></svg>,
  },
]

const whyItems = [
  'Professional chauffeur service',
  'Comfortable executive travel',
  'Fixed and transparent pricing',
  'Reliable journey planning',
  'Airport flight monitoring',
  'Customer-focused experience',
]

const locations = [
  'North Devon', 'Barnstaple', 'Bideford', 'Braunton',
  'Ilfracombe', 'South Molton', 'Exeter',
]

export default function AboutPage() {
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
              About Us
            </div>
            <h1 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(34px,5.5vw,58px)', lineHeight: 1.08,
              margin: '0 0 24px',
            }}>
              Luxury Chauffeur Travel With A{' '}
              <em style={{ color: GOLD, fontStyle: 'italic' }}>Personal Touch</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.82, color: '#9b9b95', margin: 0 }}>
              At Lusso Executive Travel, we provide professional chauffeur services designed to make
              every journey comfortable, reliable, and stress-free.
            </p>
          </div>

          <div className="about-img-wrap">
            <div style={{
              width: '100%', aspectRatio: '4/3',
              backgroundImage: "url('/images/tayron-front-beach.jpeg')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)', borderRadius: 4,
            }} />
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 80, alignItems: 'center',
        }}>
          <div data-reveal="1" style={{ borderLeft: '2px solid rgba(212,175,55,.35)', paddingLeft: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              Who We Are
            </div>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(26px,3.5vw,36px)', margin: '0 0 24px', lineHeight: 1.15,
            }}>
              Lusso <em style={{ color: GOLD, fontStyle: 'italic' }}>Executive Travel</em>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 18px' }}>
              Based in North Devon, we serve clients across Exeter, Devon, and major UK airports
              with premium airport transfers, executive travel, and private chauffeur services.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 36px' }}>
              Our focus is simple — delivering a smooth travel experience with professional drivers,
              luxury comfort, and attention to every detail.
            </p>
            <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 28 }}>
              {[
                { stat: '500+', label: 'Journeys' },
                { stat: '24/7', label: 'Available' },
                { stat: 'DBS', label: 'Checked' },
              ].map((item, i) => (
                <div key={item.stat} style={{ flex: 1, textAlign: 'center', padding: '0 8px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,.07)' : undefined }}>
                  <div style={{ fontFamily: serif, fontSize: 30, color: GOLD, fontWeight: 400, lineHeight: 1, marginBottom: 8 }}>
                    {item.stat}
                  </div>
                  <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: '#555' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="1" style={{ padding: 10 }}>
            <div className="about-img-wrap">
              <div style={{
                display: 'block', width: '100%', aspectRatio: '4/3',
                backgroundImage: "url('/images/tayron-side-studio.jpeg')",
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid rgba(255,255,255,.07)',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE LUSSO DIFFERENCE ─── */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 72, alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
                What Sets Us Apart
              </div>
              <h2 style={{
                fontFamily: serif, fontWeight: 400,
                fontSize: 'clamp(28px,4vw,42px)', margin: '0 0 28px', lineHeight: 1.12,
              }}>
                The Lusso <em style={{ color: GOLD, fontStyle: 'italic' }}>Difference</em>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.88, color: '#888', margin: '0 0 20px' }}>
                Luxury is more than just a vehicle. It is arriving on time, being treated
                professionally, and knowing your journey is handled with care.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.88, color: '#888', margin: 0 }}>
                Every journey is carefully planned, from route preparation to passenger comfort.
                With fixed pricing, reliable service, and a premium executive vehicle, Lusso
                provides travel you can trust.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(212,175,55,.1)', border: '1px solid rgba(212,175,55,.12)', borderRadius: 14, overflow: 'hidden' }}>
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>, label: 'Always on time — every journey planned in advance' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><circle cx="12" cy="7" r="3.5"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/></svg>, label: 'Professional, suited, DBS-checked chauffeurs' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>, label: 'Fixed, transparent pricing agreed up front' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><path d="M3 13l2-5a2 2 0 012-1.5h10A2 2 0 0119 8l2 5"/><path d="M3 13h18v4H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>, label: 'Immaculate vehicle valeted before every trip' },
              ].map((item, i, arr) => (
                <div key={i} style={{
                  background: '#0e0e0e', padding: '22px 26px',
                  display: 'flex', alignItems: 'center', gap: 18,
                  borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,.05)' : undefined,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(212,175,55,.08)', border: '1px solid rgba(212,175,55,.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 13.5, lineHeight: 1.65, color: '#999' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-img-wrap" style={{ marginTop: 56 }}>
            <div style={{
              width: '100%', aspectRatio: '1221/211',
              backgroundImage: "url('/images/lusso-amenities-strip.png')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)',
            }} />
          </div>
        </div>
      </section>

      {/* ─── OUR SERVICES ─── */}
      <section style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <div data-reveal="1" style={{ marginBottom: 52 }}>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              What We Offer
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 14px' }}>
              Our <em style={{ color: GOLD, fontStyle: 'italic' }}>Services</em>
            </h2>
            <p style={{ fontSize: 14, color: '#666', margin: 0, lineHeight: 1.75 }}>
              We offer chauffeur solutions for every journey — from airport transfers to private executive travel.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {services.map(s => (
              <a key={s.title} href="/services" style={{
                background: '#111', border: '1px solid rgba(255,255,255,.07)',
                padding: '36px 28px', borderRadius: 14, textDecoration: 'none', color: 'inherit',
                display: 'block', transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease',
              }}
                className="srv-card"
              >
                <div style={{ marginBottom: 22 }}>{s.icon}</div>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 20, margin: '0 0 12px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.72, color: '#888', margin: 0 }}>{s.desc}</p>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <a href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              color: GOLD, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600,
            }}>
              View all services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE LUSSO ─── */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 72, alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
                Why Us
              </div>
              <h2 style={{
                fontFamily: serif, fontWeight: 400,
                fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 20px', lineHeight: 1.12,
              }}>
                Why Choose <em style={{ color: GOLD, fontStyle: 'italic' }}>Lusso?</em>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.82, color: '#777', margin: 0 }}>
                Every aspect of your journey is designed around reliability, comfort, and a
                professional experience from first contact to final drop-off.
              </p>
            </div>

            <div className="about-why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {whyItems.map((item, i) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                  padding: '16px 12px 16px 0',
                  borderBottom: i < whyItems.length - 2 ? '1px solid rgba(255,255,255,.05)' : undefined,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 13.5, lineHeight: 1.65, color: '#999' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVING NORTH DEVON & BEYOND ─── */}
      <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 64, alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
                Where We Serve
              </div>
              <h2 style={{
                fontFamily: serif, fontWeight: 400,
                fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 24px', lineHeight: 1.12,
              }}>
                Serving North Devon{' '}
                <em style={{ color: GOLD, fontStyle: 'italic' }}>&amp; Beyond</em>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 18px' }}>
                We proudly cover North Devon, Barnstaple, Bideford, Braunton, Ilfracombe,
                South Molton, Exeter, and surrounding areas.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 36px' }}>
                Whether you need a single airport transfer or regular business travel, Lusso
                Executive Travel is ready to deliver a premium journey.
              </p>
              <a href="/contact" className="btn-shimmer" style={{
                background: GOLD, color: '#0e0e0e', fontSize: 13, letterSpacing: 1.5,
                textTransform: 'uppercase', fontWeight: 700, padding: '17px 32px',
                minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
              }}>
                Request a Quote Today
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'flex-start' }}>
              {locations.map(place => (
                <span key={place} style={{
                  border: '1px solid rgba(255,255,255,.1)', color: '#888',
                  fontSize: 13, letterSpacing: .5, padding: '9px 18px', borderRadius: 4,
                }}>
                  {place}
                </span>
              ))}
              <span style={{
                border: '1px solid rgba(212,175,55,.3)', color: GOLD,
                fontSize: 13, letterSpacing: .5, padding: '9px 18px', borderRadius: 4, fontStyle: 'italic',
              }}>
                &amp; surrounding areas
              </span>
              <div style={{ width: '100%', marginTop: 12, padding: '18px', background: '#0e0e0e', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>
                  Airports Covered
                </div>
                <div style={{ fontSize: 13, color: '#777', lineHeight: 1.75 }}>
                  Heathrow · Gatwick · Bristol · Exeter · Birmingham · Luton · All UK Airports
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutFaq />

      {/* ─── CLOSING CTA ─── */}
      <section style={{ background: GOLD }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '78px 32px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(28px,4vw,42px)', color: '#0e0e0e', margin: '0 0 16px',
          }}>
            Ready to book your journey?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(14,14,14,.72)', maxWidth: 480, margin: '0 auto 38px' }}>
            No pricing online — every quote is personalised to your route and requirements.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/#booking" className="cta-btn" style={{
              background: '#0e0e0e', color: GOLD, fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              Request a Quote
            </a>
            <a href="https://wa.me/447557261273" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{
              background: '#0e0e0e', color: GOLD, fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              WhatsApp Us
            </a>
            <a href="tel:+447557261273" className="cta-btn" style={{
              background: '#0e0e0e', color: GOLD, fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              Call Now
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
