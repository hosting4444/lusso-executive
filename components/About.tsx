export default function About() {
  return (
    <section id="about" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 80, alignItems: 'center' }}>

        <div data-reveal="1" style={{ borderLeft: '2px solid rgba(212,175,55,.35)', paddingLeft: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>About us</div>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 24px', lineHeight: 1.15 }}>
            Lusso <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Executive Travel</em>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: '#888', margin: '0 0 16px' }}>
            Based in North Devon, Lusso Executive Travel is a licensed and insured private hire operator providing professional chauffeur services across the region and beyond.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: '#888', margin: '0 0 36px' }}>
            We cover airport transfers to all major UK airports, corporate travel, and executive journeys for individuals and businesses who expect punctuality, comfort, and professionalism. Every driver is DBS checked, every vehicle is immaculately maintained.
          </p>
          <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 28 }}>
            <div style={{ flex: 1, textAlign: 'center', padding: '0 8px' }}>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: '#d4af37', fontWeight: 400, lineHeight: 1, marginBottom: 8 }}>500+</div>
              <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: '#555' }}>Journeys</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,.07)', flexShrink: 0 }} />
            <div style={{ flex: 1, textAlign: 'center', padding: '0 8px' }}>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: '#d4af37', fontWeight: 400, lineHeight: 1, marginBottom: 8 }}>24/7</div>
              <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: '#555' }}>Available</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,.07)', flexShrink: 0 }} />
            <div style={{ flex: 1, textAlign: 'center', padding: '0 8px' }}>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: '#d4af37', fontWeight: 400, lineHeight: 1, marginBottom: 8 }}>DBS</div>
              <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: '#555' }}>Checked</div>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              color: '#d4af37', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600,
            }}>
              Learn more about us
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div data-reveal="1" style={{ padding: 10 }}>
          <div className="about-img-wrap">
            <div
              style={{
                display: 'block', width: '100%', aspectRatio: '4/3',
                backgroundImage: "url('/images/tayron-front-street.jpeg')",
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid rgba(255,255,255,.07)',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
