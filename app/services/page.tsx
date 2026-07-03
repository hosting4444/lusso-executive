import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Nav from '@/components/Nav'
import BookingBar from '@/components/BookingBar'
import TrustStrip from '@/components/TrustStrip'
import ServicesFaq from '@/components/ServicesFaq'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollEffects from '@/components/ScrollEffects'

export const metadata: Metadata = {
  title: 'Lusso Executive Travel',
  description:
    'Licensed private hire chauffeur service in North Devon offering executive airport transfers, corporate travel and meet & greet across Devon and all major UK airports.',
}

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{
      display: 'flex', gap: 14, alignItems: 'flex-start',
      padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)',
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD}
        strokeWidth="2.2" style={{ flexShrink: 0, marginTop: 3 }}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span style={{ fontSize: 13.5, lineHeight: 1.65, color: '#999' }}>{text}</span>
    </div>
  )
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      color: GOLD, fontSize: 13, letterSpacing: 1.5,
      textTransform: 'uppercase', fontWeight: 600,
      transition: 'gap .25s ease',
    }}>
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  )
}

function ServiceNum({ n }: { n: string }) {
  return (
    <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, display: 'block', marginBottom: 16 }}>
      Service {n}
    </span>
  )
}

function IncludedBox({ items }: { items: string[] }) {
  return (
    <div style={{
      background: '#111', border: '1px solid rgba(255,255,255,.07)',
      padding: '30px 28px', borderRadius: 14,
    }}>
      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#555', marginBottom: 20 }}>
        What&apos;s included
      </div>
      {items.map(item => <CheckItem key={item} text={item} />)}
    </div>
  )
}

export default function ServicesPage() {
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

          {/* Left: heading + buttons */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              What We Do
            </div>
            <h1 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(34px,5.5vw,58px)', lineHeight: 1.08,
              margin: '0 0 24px',
            }}>
              Our Chauffeur <em style={{ color: GOLD, fontStyle: 'italic' }}>Services</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.82, color: '#9b9b95', margin: '0 0 38px' }}>
              From early-morning airport runs to corporate travel and long-distance journeys, Lusso Executive Travel
              delivers professional, punctual chauffeur service across North Devon, Exeter and all major UK airports.
              Every journey comes with a fixed fare confirmed up front, real-time flight tracking and an immaculately
              presented executive vehicle — no meters, no surprises.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#booking" className="btn-shimmer" style={{
                background: GOLD, color: '#0e0e0e', fontSize: 13, letterSpacing: 1.5,
                textTransform: 'uppercase', fontWeight: 700, padding: '17px 32px',
                minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
              }}>
                Get a Fixed Quote
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
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              {['Licensed & Insured', 'DBS-Checked Drivers', '24/7 Availability', 'Fixed Fares'].map(t => (
                <span key={t} style={{ fontSize: 12, letterSpacing: 1, color: '#9a9a94' }}>
                  <span style={{ color: GOLD }}>●</span>&nbsp;&nbsp;{t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="about-img-wrap">
            <div style={{
              width: '100%', aspectRatio: '4/3',
              backgroundImage: "url('https://images.unsplash.com/photo-1772468237159-674f05233185?auto=format&fit=crop&w=1400&q=72')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)',
              borderRadius: 4,
            }} />
          </div>

        </div>
      </section>

      <BookingBar />
      <TrustStrip />

      {/* ─── SERVICE 1: AIRPORT TRANSFERS ─── */}
      <section id="airport-transfers" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 60, alignItems: 'start',
        }}>
          <div>
            <ServiceNum n="01" />
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(26px,3.5vw,38px)', margin: '0 0 16px', lineHeight: 1.15 }}>
              Airport <em style={{ color: GOLD, fontStyle: 'italic' }}>Transfers</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: GOLD, margin: '0 0 18px', fontStyle: 'italic' }}>
              Stress-free transfers to and from every major UK airport.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 28px' }}>
              We provide reliable chauffeur-driven transfers to Heathrow, Gatwick, Bristol, Exeter, Birmingham,
              Luton and all other major UK airports. We track your flight in real time and adjust your pick-up
              automatically — so whether you land early or late, your driver is already there.
            </p>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#555', marginBottom: 10 }}>
              Ideal for
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666', margin: '0 0 32px' }}>
              Holidaymakers, business travellers and families who want a calm, reliable start and end to every trip.
            </p>
            <ArrowLink href="#booking">Get an Airport Transfer Quote</ArrowLink>
          </div>

          <IncludedBox items={[
            'Real-time flight tracking with automatic pick-up adjustment',
            'Free waiting time for delayed flights',
            'Meet & greet at arrivals with a name board',
            'Help with luggage to and from the vehicle',
            'Fixed fare confirmed before you travel',
            'Chilled water, phone charging and a spotless cabin',
          ]} />

          <div className="about-img-wrap">
            <div style={{
              width: '100%', aspectRatio: '4/3',
              backgroundImage: "url('/images/lusso-airport-transfers-banner.png')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)', borderRadius: 4,
            }} />
          </div>
        </div>
      </section>

      {/* ─── SERVICE 2: CORPORATE TRAVEL ─── */}
      <section id="corporate-travel" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 60, alignItems: 'start',
        }}>
          <IncludedBox items={[
            'Dedicated corporate account with monthly invoicing',
            'Priority booking — even at short notice and peak times',
            'Consistent, trusted chauffeurs your team will recognise',
            'A single point of contact for bookings and changes',
            'Quiet, professional vehicles for calls and prep on the move',
          ]} />

          <div>
            <ServiceNum n="02" />
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(26px,3.5vw,38px)', margin: '0 0 16px', lineHeight: 1.15 }}>
              Corporate <em style={{ color: GOLD, fontStyle: 'italic' }}>Travel</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: GOLD, margin: '0 0 18px', fontStyle: 'italic' }}>
              Dependable business travel, with the admin taken care of.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 28px' }}>
              Lusso corporate accounts give your business priority booking, consistent professional drivers and one
              consolidated monthly invoice. Whether it&apos;s executive airport runs, client collection or moving
              your team to meetings and events, we deliver punctual, discreet travel every time.
            </p>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#555', marginBottom: 10 }}>
              Ideal for
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666', margin: '0 0 32px' }}>
              Businesses that move executives, staff or clients regularly and want reliability without the expense-chasing.
            </p>
            <ArrowLink href="/contact">Open a Corporate Account</ArrowLink>
          </div>
        </div>
      </section>

      {/* ─── SERVICE 3: EXECUTIVE TRANSFERS ─── */}
      <section id="executive-transfers" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 60, alignItems: 'start',
        }}>
          <div>
            <ServiceNum n="03" />
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(26px,3.5vw,38px)', margin: '0 0 16px', lineHeight: 1.15 }}>
              Executive <em style={{ color: GOLD, fontStyle: 'italic' }}>Transfers</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: GOLD, margin: '0 0 18px', fontStyle: 'italic' }}>
              Long-distance UK travel in comfort and style.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 28px' }}>
              For meetings, events and private journeys across the UK, our executive transfers offer a comfortable,
              refined alternative to driving or the train. Travel in a clean, well-presented executive vehicle with
              a professional chauffeur who handles the route, the traffic and the timing — so you arrive composed
              and on schedule.
            </p>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#555', marginBottom: 10 }}>
              Ideal for
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666', margin: '0 0 32px' }}>
              Executives, professionals and individuals who value comfort, privacy and punctuality on longer journeys.
            </p>
            <ArrowLink href="#booking">Request an Executive Transfer</ArrowLink>
          </div>

          <IncludedBox items={[
            'Door-to-door, point-to-point travel anywhere in the UK',
            'Route and traffic planned in advance',
            'A quiet, comfortable cabin to work or relax',
            'Discreet, professional chauffeur',
            'Fixed fare agreed before departure',
          ]} />

          <div className="about-img-wrap">
            <div style={{
              width: '100%', aspectRatio: '4/3',
              backgroundImage: "url('/images/lusso-wedding-banner.png')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)', borderRadius: 4,
            }} />
          </div>
        </div>
      </section>

      {/* ─── SERVICE 4: MEET & GREET ─── */}
      <section id="meet-greet" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 60, alignItems: 'start',
        }}>
          <IncludedBox items={[
            'Driver waiting at arrivals with a personalised name board',
            'Assistance with luggage and trolleys',
            'Calm, guided walk to the vehicle',
            'Included as standard on all airport pick-ups',
          ]} />

          <div>
            <ServiceNum n="04" />
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(26px,3.5vw,38px)', margin: '0 0 16px', lineHeight: 1.15 }}>
              Meet &amp; <em style={{ color: GOLD, fontStyle: 'italic' }}>Greet</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: GOLD, margin: '0 0 18px', fontStyle: 'italic' }}>
              A seamless welcome from terminal to vehicle.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.88, color: '#888', margin: '0 0 28px' }}>
              No searching for your driver, no confusion at arrivals. Your chauffeur waits inside the terminal with
              a name board, helps with your luggage and walks you straight to your waiting vehicle — a smooth,
              personal handover every time.
            </p>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#555', marginBottom: 10 }}>
              Ideal for
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666', margin: '0 0 32px' }}>
              First-time visitors, international arrivals and anyone who wants a welcome rather than a wait.
            </p>
            <ArrowLink href="#booking">Book a Meet &amp; Greet</ArrowLink>
          </div>
        </div>
      </section>

      {/* ─── WHY LUSSO STRIP ─── */}
      <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
          <div style={{ marginBottom: 52, textAlign: 'center' }}>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              Why Lusso
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: 0 }}>
              Why Travel With <em style={{ color: GOLD, fontStyle: 'italic' }}>Lusso</em>
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 1, background: 'rgba(212,175,55,.1)',
            border: '1px solid rgba(212,175,55,.12)',
            borderRadius: 14, overflow: 'hidden',
          }}>
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>,
                title: 'Always On Time',
                desc: 'Routes and flights planned and monitored in advance — your driver is there before you are.',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>,
                title: 'Fixed, Transparent Fares',
                desc: 'Agreed up front before every journey. No meters, no hidden costs, no surprises.',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><circle cx="12" cy="7" r="3.5"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/></svg>,
                title: 'Professional Chauffeurs',
                desc: 'Suited, courteous, DBS-checked drivers with years of private hire experience.',
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3"><path d="M3 13l2-5a2 2 0 012-1.5h10A2 2 0 0119 8l2 5"/><path d="M3 13h18v4H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>,
                title: 'Immaculate Vehicle',
                desc: 'Valeted and maintained before every journey so you travel in comfort and style.',
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#0e0e0e', padding: '36px 28px', textAlign: 'center' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(212,175,55,.08)', border: '1px solid rgba(212,175,55,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>
                  {item.title}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: '#666', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              color: GOLD, fontSize: 12, letterSpacing: 2,
              textTransform: 'uppercase', fontWeight: 600,
            }}>
              See all reasons
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── BOOKING PROCESS ─── */}
      <section style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
          <div style={{ marginBottom: 52, textAlign: 'center' }}>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              How It Works
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: 0 }}>
              Booking Made <em style={{ color: GOLD, fontStyle: 'italic' }}>Simple</em>
            </h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 1, background: 'rgba(255,255,255,.06)',
            border: '1px solid rgba(255,255,255,.07)',
            borderRadius: 14, overflow: 'hidden',
          }}>
            {[
              {
                num: '1',
                title: 'Book',
                desc: 'Send your journey details by phone, WhatsApp, email or the quote form.',
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>,
              },
              {
                num: '2',
                title: 'Confirm',
                desc: 'We confirm availability and send a fixed, all-inclusive quote before you commit.',
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><polyline points="9 12 11 14 15 10"/></svg>,
              },
              {
                num: '3',
                title: 'Travel',
                desc: 'Your chauffeur arrives on time and takes care of everything from there.',
                icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.2"><path d="M2 16l9-2 5-9 1.5.5-2.5 8 5-1 1.5 2-3 1.5-1 4-1.5-.5-.5-3-5 1.2L8 22l-1.5-.5 1-4-5 1z"/></svg>,
              },
            ].map(step => (
              <div key={step.num} style={{ background: '#111', padding: '44px 32px', position: 'relative' }}>
                <div style={{ marginBottom: 24 }}>{step.icon}</div>
                <div style={{
                  fontFamily: serif, fontStyle: 'italic',
                  fontSize: 48, color: 'rgba(212,175,55,.14)', lineHeight: 1,
                  position: 'absolute', top: 28, right: 28,
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 22, margin: '0 0 14px', color: '#f0f0ea' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS COMPACT ─── */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 48, alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
                Where We Travel
              </div>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(26px,3.5vw,36px)', margin: '0 0 20px', lineHeight: 1.2 }}>
                Service <em style={{ color: GOLD, fontStyle: 'italic' }}>Areas</em>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: '#777', margin: '0 0 28px', maxWidth: 520 }}>
                We collect across North Devon and Exeter — including Barnstaple, Bideford, Braunton, Ilfracombe,
                South Molton, Croyde, Westward Ho! and Lynton — and travel to all major UK airports including
                Heathrow, Gatwick, Bristol, Exeter, Birmingham and Luton.
              </p>
              <a href="/location" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: GOLD, fontSize: 13, letterSpacing: 1.5,
                textTransform: 'uppercase', fontWeight: 600,
              }}>
                View All Service Areas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[
                'Barnstaple', 'Bideford', 'Braunton', 'Ilfracombe',
                'South Molton', 'Exeter', 'Croyde', 'Westward Ho!', 'Lynton',
                'Heathrow', 'Gatwick', 'Bristol', 'Birmingham', 'Luton',
              ].map(place => (
                <span key={place} style={{
                  border: '1px solid rgba(255,255,255,.1)', color: '#888',
                  fontSize: 12, letterSpacing: .5, padding: '7px 14px', borderRadius: 4,
                }}>
                  {place}
                </span>
              ))}
              <span style={{
                border: '1px solid rgba(212,175,55,.3)', color: GOLD,
                fontSize: 12, letterSpacing: .5, padding: '7px 14px', borderRadius: 4, fontStyle: 'italic',
              }}>
                + all UK airports
              </span>
            </div>
          </div>
        </div>
      </section>

      <ServicesFaq />

      {/* ─── CLOSING CTA ─── */}
      <section style={{ background: GOLD }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '78px 32px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(28px,4vw,42px)', color: '#0e0e0e', margin: '0 0 16px',
          }}>
            Ready to book your journey?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(14,14,14,.72)', maxWidth: 520, margin: '0 auto 38px' }}>
            No pricing online — every quote is personalised to your route and requirements.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#booking" className="cta-btn" style={{
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
