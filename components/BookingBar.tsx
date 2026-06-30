'use client'
import { useState, FormEvent } from 'react'

export default function BookingBar() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = e.currentTarget
    const val = (n: string) => { const el = f.elements.namedItem(n) as HTMLInputElement | null; return el?.value?.trim() || '' }
    const msg = [
      'New quote request — Lusso Executive Travel',
      '',
      'Pick-up: ' + (val('pickup') || '—'),
      'Destination: ' + (val('destination') || '—'),
      'Date & time: ' + (val('datetime') || '—'),
      'Passengers: ' + (val('passengers') || '—'),
    ].join('\n')
    window.open('https://wa.me/447700000000?text=' + encodeURIComponent(msg), '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 10000)
  }

  return (
    <section id="booking" style={{ position: 'relative', background: '#0b0b0b', borderTop: '1px solid rgba(212,175,55,.2)', borderBottom: '1px solid rgba(212,175,55,.16)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=40')", backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.07, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg,rgba(11,11,11,.97) 0%,rgba(11,11,11,.86) 60%,rgba(11,11,11,.97) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -120, left: -80, width: 580, height: 580, background: 'radial-gradient(circle,rgba(212,175,55,.07),rgba(212,175,55,0) 65%)', pointerEvents: 'none' }} />
      <div style={{ height: 2, background: 'linear-gradient(90deg,rgba(212,175,55,0),rgba(212,175,55,.7),rgba(212,175,55,0))', position: 'relative', zIndex: 1 }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '44px 32px', position: 'relative', zIndex: 1 }}>
        {/* Thank you state */}
        {submitted && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '14px 4px' }}>
            <span style={{ color: '#d4af37', fontSize: 30, lineHeight: 1 }}>✓</span>
            <div>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 400 }}>Thank you — request received.</div>
              <div style={{ fontSize: 13, color: '#999', marginTop: 5 }}>We've opened WhatsApp with your request — just press send and we'll confirm your personalised fixed fare.</div>
            </div>
          </div>
        )}

        {/* Form */}
        {!submitted && (
          <div className="booking-flex" style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div data-reveal="1" style={{ flex: '1 1 230px', minWidth: 220 }}>
              <div style={{ width: 32, height: 2, background: '#d4af37', marginBottom: 20 }} />
              <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#d4af37', marginBottom: 14 }}>Get a fixed quote</div>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 28, lineHeight: 1.25 }}>Tell us your route —<br /><em style={{ fontStyle: 'italic', color: '#d4af37' }}>we handle the rest.</em></div>
              <div style={{ fontSize: 12, color: '#888', marginTop: 14, lineHeight: 1.7 }}>No pricing online. Every fare is personalised<br />to your journey and confirmed up front.</div>
              <div style={{ display: 'flex', gap: 20, marginTop: 22, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#666' }}><span style={{ width: 5, height: 5, background: '#d4af37', borderRadius: '50%', flexShrink: 0 }} />Fixed fare confirmed upfront</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#666' }}><span style={{ width: 5, height: 5, background: '#d4af37', borderRadius: '50%', flexShrink: 0 }} />No card required</span>
              </div>
            </div>

            <form
              className="booking-form"
              onSubmit={onSubmit}
              style={{ flex: '2 1 540px', minWidth: 300, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(212,175,55,.18)', border: '1px solid rgba(212,175,55,.22)', alignItems: 'stretch' }}
            >
              <label style={{ background: '#181818', padding: '12px 14px', display: 'block' }}>
                <span style={{ display: 'block', fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 6 }}>Pick-up</span>
                <input type="text" name="pickup" placeholder="Barnstaple, Bideford…" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', outline: 'none', color: '#f5f5f0', fontFamily: 'Arial,sans-serif' }} />
              </label>
              <label style={{ background: '#181818', padding: '12px 14px', display: 'block' }}>
                <span style={{ display: 'block', fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 6 }}>Destination</span>
                <input type="text" name="destination" placeholder="Heathrow, Bristol…" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', outline: 'none', color: '#f5f5f0', fontFamily: 'Arial,sans-serif' }} />
              </label>
              <label style={{ background: '#181818', padding: '12px 14px', display: 'block' }}>
                <span style={{ display: 'block', fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 6 }}>Date &amp; Time</span>
                <input type="datetime-local" name="datetime" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', outline: 'none', color: '#f5f5f0', fontFamily: 'Arial,sans-serif', colorScheme: 'dark' }} />
              </label>
              <label style={{ background: '#181818', padding: '12px 14px', display: 'block' }}>
                <span style={{ display: 'block', fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 6 }}>Passengers</span>
                <select name="passengers" style={{ width: '100%', boxSizing: 'border-box', border: 'none', outline: 'none', color: '#f5f5f0', fontFamily: 'Arial,sans-serif' }}>
                  <option>1 passenger</option>
                  <option>2 passengers</option>
                  <option>3 passengers</option>
                  <option>4 passengers</option>
                  <option>5 passengers</option>
                  <option>6 passengers</option>
                </select>
              </label>
              <button type="submit" className="booking-submit" style={{ gridColumn: '1/-1', background: '#d4af37', color: '#0e0e0e', border: 'none', cursor: 'pointer', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, fontFamily: 'Arial,sans-serif', padding: '16px 24px', minHeight: 44 }}>
                Get Quote →
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
