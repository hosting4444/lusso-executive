export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(212,175,55,.18)' }}>

      {/* 3-column grid */}
      <div className="footer-grid" style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 44px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 56, alignItems: 'start' }}>

        {/* Col 1: Brand + contact */}
        <div>
          <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 20, fontWeight: 400, marginBottom: 10 }}>
            <span style={{ color: '#d4af37', letterSpacing: 4 }}>LUSSO</span>
            <span style={{ color: '#f5f5f0', marginLeft: 7, fontStyle: 'italic' }}>Executive Travel</span>
          </div>
          <div style={{ width: 36, height: 1, background: 'rgba(212,175,55,.5)', marginBottom: 16 }} />
          <p style={{ fontSize: 12.5, lineHeight: 1.75, color: '#555', margin: '0 0 24px', maxWidth: 260 }}>
            Licensed private hire chauffeur service — North Devon, Exeter &amp; all major UK airports.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+447557261273" className="footer-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
              +44 7557 261273
            </a>
            <a href="mailto:lussoexecutive@gmail.com" className="footer-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>
              lussoexecutive@gmail.com
            </a>
            <a href="https://wa.me/447557261273" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#25d366' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#25d366" style={{ flexShrink: 0 }}><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm4.6 12.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.97-.14.17-.29.19-.54.06a6.7 6.7 0 01-3.3-2.9c-.25-.43.25-.4.71-1.32.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.72 4.3 3.81 2.51 1.08 2.51.72 2.96.68.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18z"/></svg>
              WhatsApp Us
            </a>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
            <a href="#" aria-label="Facebook" className="footer-social-link" style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-link" style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer-social-link" style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.45 20h-3.37v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.06 2.26 4.06 5.19V20z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#d4af37', marginBottom: 20 }}>Services</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <a href="/services#airport-transfers" className="footer-nav-link">Airport Transfers</a>
            <a href="/services#corporate-travel" className="footer-nav-link">Corporate Travel</a>
            <a href="/services#meet-greet" className="footer-nav-link">Meet &amp; Greet</a>
            <a href="/services#executive-transfers" className="footer-nav-link">Executive Transfers</a>
          </nav>
        </div>

        {/* Col 3: Company */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#d4af37', marginBottom: 20 }}>Company</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <a href="/about"   className="footer-nav-link">About Us</a>
            <a href="/location" className="footer-nav-link">Location</a>
            <a href="/contact" className="footer-nav-link">Contact Us</a>
            <a href="/services" className="footer-nav-link">Our Services</a>
            <a href="/contact#booking" className="footer-nav-link">Get a Quote</a>
          </nav>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-strip" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, letterSpacing: .3, color: '#404040' }}>© 2026 Lusso Executive Travel. All rights reserved. &nbsp;·&nbsp; Licensed Private Hire Operator.</span>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="/privacy" className="footer-bottom-link">Privacy</a>
            <a href="/terms" className="footer-bottom-link">Terms</a>
            <a href="/cookies" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
