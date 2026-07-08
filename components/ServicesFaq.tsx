'use client'
import { useState } from 'react'

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

const faqs = [
  {
    q: 'What chauffeur services do you offer?',
    a: 'Airport transfers, corporate travel, executive transfers and meet & greet, across North Devon, Exeter and all major UK airports.',
  },
  {
    q: 'Do you track flights for airport pick-ups?',
    a: 'Yes — we monitor your flight in real time and automatically adjust your pick-up for delays or early arrivals, at no extra cost.',
  },
  {
    q: 'Are your fares fixed?',
    a: 'Yes. Every fare is personalised to your route and confirmed up front. No meters and no hidden costs.',
  },
  {
    q: 'Which airports do you cover?',
    a: 'Heathrow, Gatwick, Bristol, Exeter, Birmingham, Luton and all other major UK airports.',
  },
  {
    q: 'How many passengers can you take?',
    a: 'Our black Volkswagen Tayron carries up to [CLIENT: confirm] passengers with room for luggage.',
  },
  {
    q: 'Do you offer accounts for businesses?',
    a: 'Yes — corporate accounts include priority booking, consistent drivers and consolidated monthly invoicing.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — Lusso is a fully licensed and insured private hire operator with DBS-checked chauffeurs.',
  },
]

export default function ServicesFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
            Common Questions
          </div>
          <h4 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: 0 }}>
            Service <em style={{ color: GOLD, fontStyle: 'italic' }}>FAQs</em>
          </h4>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 1,
          background: 'rgba(255,255,255,.05)',
          border: '1px solid rgba(255,255,255,.07)',
          borderRadius: 14, overflow: 'hidden',
        }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#0e0e0e' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: 16, padding: '22px 28px',
                  background: open === i ? 'rgba(212,175,55,.04)' : 'transparent',
                  border: 'none', cursor: 'pointer', color: '#f5f5f0',
                  textAlign: 'left', transition: 'background .25s ease',
                  borderBottom: open === i ? '1px solid rgba(255,255,255,.05)' : 'none',
                }}
              >
                <span style={{ fontFamily: serif, fontWeight: 400, fontSize: 16, lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke={GOLD} strokeWidth="1.5"
                  style={{
                    flexShrink: 0, transition: 'transform .3s ease',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>

              {open === i && (
                <div style={{ padding: '18px 28px 24px', fontSize: 14, lineHeight: 1.85, color: '#888' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
