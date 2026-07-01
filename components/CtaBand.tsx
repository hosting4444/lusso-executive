export default function CtaBand() {
  return (
    <section id="quote" style={{ background: '#d4af37' }}>
      <div data-reveal="1" style={{ maxWidth: 1280, margin: '0 auto', padding: '78px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,42px)', color: '#0e0e0e', margin: '0 0 16px' }}>
          Ready to book your journey?
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(14,14,14,.72)', maxWidth: 520, margin: '0 auto 38px' }}>
          No pricing online — every quote is personalised to your route and requirements.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#booking" className="cta-btn" style={{ background: '#0e0e0e', color: '#d4af37', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px', minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center' }}>
            Request a Quote
          </a>
          <a href="https://wa.me/447557261273" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ background: '#0e0e0e', color: '#d4af37', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px', minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center' }}>
            WhatsApp Us
          </a>
          <a href="tel:+447557261273" className="cta-btn" style={{ background: '#0e0e0e', color: '#d4af37', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px', minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center' }}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
