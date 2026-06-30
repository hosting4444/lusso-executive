export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: 'relative', minHeight: 'clamp(640px,92vh,920px)', paddingTop: 74,
        background: '#0b0b0b', overflow: 'hidden', display: 'flex', boxSizing: 'border-box',
      }}
    >
      {/* Ken Burns background */}
      <div
        data-kb="1"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1564779067972-d2c2672776f9?auto=format&fit=crop&w=2000&q=72')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />
      {/* Gradients */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(5,5,5,.97) 0%,rgba(5,5,5,.82) 38%,rgba(5,5,5,.28) 65%,rgba(5,5,5,.45) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(5,5,5,.88) 0%,rgba(5,5,5,0) 48%)' }} />
      {/* Gold glow */}
      <div style={{ position: 'absolute', top: -220, right: -160, width: 780, height: 780, background: 'radial-gradient(circle,rgba(212,175,55,.20),rgba(212,175,55,0) 62%)', animation: 'heroGlow 7s ease-in-out infinite', pointerEvents: 'none' }} />
      {/* Vertical line */}
      <div className="hero-line" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg,rgba(212,175,55,0),rgba(212,175,55,.6),rgba(212,175,55,0))' }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1280, width: '100%', margin: '0 auto', padding: '0 32px 88px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div>
          <div className="h-a1" style={{ fontFamily: 'Arial,sans-serif', fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 28 }}>
            North Devon · Exeter · UK Airports
          </div>
          <h1 className="h-a2" style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(36px,6.4vw,66px)', lineHeight: 1.06, margin: '0 0 26px', maxWidth: 780, letterSpacing: -.5 }}>
            Executive Travel,<br /><em style={{ color: '#d4af37', fontStyle: 'italic' }}>Perfectly Timed.</em>
          </h1>
          <p className="h-a3" style={{ fontSize: 17, lineHeight: 1.75, color: '#bcbcb6', maxWidth: 500, margin: '0 0 38px' }}>
            Professional chauffeur service covering North Devon, Exeter, and all major UK airports. Fixed fares, flight tracking, no surprises.
          </p>
          <div className="h-a4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
            <a href="#booking" className="btn-shimmer" style={{ background: '#d4af37', color: '#0e0e0e', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '17px 32px', minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center' }}>
              Get a Fixed Quote
            </a>
            <a href="tel:+441234567890" className="hero-call-btn" style={{ border: '1px solid rgba(212,175,55,.55)', color: '#d4af37', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '17px 32px', minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', borderRadius: 8 }}>
              Call Us Now
            </a>
          </div>
          <div className="h-a5" style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, letterSpacing: 1, color: '#9a9a94' }}><span style={{ color: '#d4af37' }}>●</span>&nbsp;&nbsp;Licensed &amp; Insured</span>
            <span style={{ fontSize: 12, letterSpacing: 1, color: '#9a9a94' }}><span style={{ color: '#d4af37' }}>●</span>&nbsp;&nbsp;DBS Checked Drivers</span>
            <span style={{ fontSize: 12, letterSpacing: 1, color: '#9a9a94' }}><span style={{ color: '#d4af37' }}>●</span>&nbsp;&nbsp;24/7 Availability</span>
          </div>
        </div>
      </div>
    </header>
  )
}
