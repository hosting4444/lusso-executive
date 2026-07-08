export default function Services() {
  return (
    <section id="services" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'center', marginBottom: 56 }}>
          <div data-reveal="1">
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>What we do</div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: 0 }}>Our <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Services</em></h2>
          </div>
          <div data-reveal="1" style={{ padding: 10 }}>
            <div className="about-img-wrap">
              <div style={{
                width: '100%', aspectRatio: '4/3',
                backgroundImage: "url('/images/lusso-departures-luggage.jpeg')",
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid rgba(255,255,255,.07)',
              }} />
            </div>
          </div>
        </div>
        <div id="srv-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>

          <div className="srv-card srv-anim" style={{ background: '#111', border: '1px solid rgba(255,255,255,.07)', padding: '38px 30px', transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 26 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.1"><path d="M2 16l9-2 5-9 1.5.5-2.5 8 5-1 1.5 2-3 1.5-1 4-1.5-.5-.5-3-5 1.2L8 22l-1.5-.5 1-4-5 1z"/></svg>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: 'rgba(212,175,55,.34)', fontStyle: 'italic' }}>01</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 22, margin: '0 0 14px' }}>Airport Transfers</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#999', margin: 0 }}>Heathrow, Gatwick, Bristol, Exeter, Birmingham, Luton and all major UK airports. We track your flight in real time and adjust your pick-up automatically — so your driver is there whether you land early or late.</p>
          </div>

          <div className="srv-card srv-anim" style={{ background: '#111', border: '1px solid rgba(255,255,255,.07)', padding: '38px 30px', transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 26 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.1"><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 13h18"/></svg>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: 'rgba(212,175,55,.34)', fontStyle: 'italic' }}>02</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 22, margin: '0 0 14px' }}>Corporate Travel</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#999', margin: 0 }}>Priority booking, consistent professional drivers and one consolidated monthly invoice. Airport runs, client collection or team travel — punctual, discreet service every time.</p>
          </div>

          <div className="srv-card srv-anim" style={{ background: '#111', border: '1px solid rgba(255,255,255,.07)', padding: '38px 30px', transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 26 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.1"><path d="M3 13l2-5a2 2 0 012-1.5h10A2 2 0 0119 8l2 5"/><path d="M3 13h18v4H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: 'rgba(212,175,55,.34)', fontStyle: 'italic' }}>03</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 22, margin: '0 0 14px' }}>Executive Transfers</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#999', margin: 0 }}>Long-distance UK travel in comfort. Meetings, events, private journeys — always in a clean, well-presented executive vehicle.</p>
          </div>

          <div className="srv-card srv-anim" style={{ background: '#111', border: '1px solid rgba(255,255,255,.07)', padding: '38px 30px', transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 26 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.1"><circle cx="12" cy="8" r="3.5"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/><path d="M12 4.5V2"/></svg>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, color: 'rgba(212,175,55,.34)', fontStyle: 'italic' }}>04</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 22, margin: '0 0 14px' }}>Meet &amp; Greet</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#999', margin: 0 }}>Your driver waits at arrivals with a name board. No waiting, no confusion — a smooth handover from terminal to vehicle.</p>
          </div>

        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <a href="/services" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            color: '#d4af37', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600,
          }}>
            View all services
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
