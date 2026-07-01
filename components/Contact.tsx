export default function Contact() {
  return (
    <section id="contact" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 52, alignItems: 'stretch' }}>

          {/* Left: header + contact rows */}
          <div id="contact-col">
            <div data-reveal="1" style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 14 }}>Get in touch</div>
              <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(24px,3.5vw,36px)', margin: '0 0 10px' }}>
                Contact <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Lusso</em>
              </h2>
              <p style={{ fontSize: 14, color: '#777', margin: 0, maxWidth: 400, lineHeight: 1.7 }}>Available 24/7 — call, email, or WhatsApp, whatever suits you.</p>
            </div>

            <a href="tel:+447557261273" className="contact-row contact-anim">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
              </div>
              <div>
                <div className="c-label">Call us</div>
                <div className="c-val">+44 7557 261273</div>
              </div>
            </a>

            <a href="mailto:lussoexecutive@gmail.com" className="contact-row contact-anim">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>
              </div>
              <div>
                <div className="c-label">Email us</div>
                <div className="c-val">lussoexecutive@gmail.com</div>
              </div>
            </a>

            <a href="https://wa.me/447557261273" target="_blank" rel="noopener noreferrer" className="contact-row contact-anim">
              <div className="c-icon" style={{ background: 'rgba(37,211,102,.08)', borderColor: 'rgba(37,211,102,.25)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm4.6 12.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.97-.14.17-.29.19-.54.06a6.7 6.7 0 01-3.3-2.9c-.25-.43.25-.4.71-1.32.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.72 4.3 3.81 2.51 1.08 2.51.72 2.96.68.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18z"/></svg>
              </div>
              <div>
                <div className="c-label" style={{ color: '#25d366' }}>WhatsApp</div>
                <div className="c-val">Message us instantly</div>
              </div>
            </a>

            <div className="contact-row contact-anim">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
              </div>
              <div>
                <div className="c-label">Availability</div>
                <div className="c-val" style={{ color: '#d4af37' }}>24 hours · 7 days a week</div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div data-reveal="1" style={{ padding: 10, boxSizing: 'border-box' }}>
            <div className="about-img-wrap" style={{ height: '100%' }}>
              <iframe
                title="Lusso Executive Travel — North Devon service area"
                src="https://www.google.com/maps?q=Barnstaple,+North+Devon,+UK&z=10&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '1px solid rgba(255,255,255,.07)', width: '100%', height: '100%', minHeight: 340, display: 'block', filter: 'grayscale(0.3) contrast(1.05) brightness(0.88)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
