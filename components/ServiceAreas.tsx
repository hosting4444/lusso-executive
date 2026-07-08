const pickups = ['Barnstaple', 'Bideford', 'Braunton', 'Ilfracombe', 'Exeter', 'South Molton', 'Croyde', 'Westward Ho!', 'Lynton']

const airports = [
  { name: 'Heathrow Airport', tag: 'London' },
  { name: 'Gatwick Airport', tag: 'London' },
  { name: 'Bristol Airport', tag: 'Bristol' },
  { name: 'Exeter Airport', tag: 'Local' },
  { name: 'Birmingham Airport', tag: 'Midlands' },
  { name: 'Luton Airport', tag: 'London' },
  { name: 'All UK Airports', tag: 'Nationwide', highlight: true },
]

export default function ServiceAreas() {
  return (
    <section id="areas" style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px' }}>
        <div data-reveal="1" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 56 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>Where we go</div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: 0 }}>Service <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Areas</em></h2>
          </div>
          <div style={{ maxWidth: 380 }}>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, margin: '0 0 14px' }}>We collect from across North Devon and travel to any major airport in the UK — fixed fare, confirmed upfront.</p>
            <a href="/location" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              color: '#d4af37', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600,
            }}>
              View all locations
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="areas-grid" data-reveal="1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(212,175,55,.12)' }}>

          {/* Pick-up locations panel */}
          <div className="areas-panel left" style={{ background: '#111', padding: '40px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(212,175,55,.08)', border: '1px solid rgba(212,175,55,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#d4af37', marginBottom: 4 }}>Pick-up Locations</div>
                <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 18, color: '#f0f0ea' }}>North Devon &amp; Exeter</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {pickups.map((place) => (
                <div key={place} className="area-row" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span className="dot" style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(212,175,55,.6)', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#999' }}>{place}</span>
                </div>
              ))}
              <div className="area-row" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 0' }}>
                <span className="dot" style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(212,175,55,.3)', flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: '#555', fontStyle: 'italic' }}>&amp; surrounding areas</span>
              </div>
            </div>
          </div>

          {/* Airports panel */}
          <div className="areas-panel right" style={{ background: '#0e0e0e', padding: '40px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(212,175,55,.08)', border: '1px solid rgba(212,175,55,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M2 16l9-2 5-9 1.5.5-2.5 8 5-1 1.5 2-3 1.5-1 4-1.5-.5-.5-3-5 1.2L8 22l-1.5-.5 1-4-5 1z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#d4af37', marginBottom: 4 }}>Airport Transfers</div>
                <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 18, color: '#f0f0ea' }}>Airports Served</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {airports.map((ap, i) => (
                <div key={ap.name} className="apt-row" style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '13px 0', borderBottom: i < airports.length - 1 ? '1px solid rgba(255,255,255,.04)' : undefined }}>
                  <span style={{ fontSize: 13, color: ap.highlight ? '#d4af37' : '#ccc', flex: 1 }}>{ap.name}</span>
                  <span className="atag" style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: ap.highlight ? '#d4af37' : '#444', opacity: ap.highlight ? .5 : 1 }}>{ap.tag}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
