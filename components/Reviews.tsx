const reviews = [
  {
    quote: '"Driver tracked my delayed Heathrow flight and was waiting the moment I landed. Spotless car, professional throughout. Faultless service."',
    name: 'James R.',
  },
  {
    quote: '"We use Lusso for all our corporate airport runs now. Always early, always immaculate, and the monthly invoicing makes it effortless."',
    name: 'Sarah T.',
  },
  {
    quote: '"Booked a transfer from Barnstaple to Bristol Airport. Fixed price, no surprises, and a genuinely lovely driver. Highly recommend."',
    name: 'Michael B.',
  },
]

export default function Reviews() {
  return (
    <section style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div className="sec-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px' }}>
        <div data-reveal="1">
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>What clients say</div>
          <h4 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 56px' }}>Customer <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Reviews</em></h4>
        </div>
        <div id="rev-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {reviews.map((r) => (
            <div key={r.name} className="rev-card rev-anim" style={{ background: '#111', border: '1px solid rgba(255,255,255,.07)', padding: '34px 30px', transition: 'transform .35s ease, border-color .35s ease' }}>
              <div style={{ color: '#d4af37', fontSize: 15, letterSpacing: 3, marginBottom: 20 }}>★★★★★</div>
              <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontStyle: 'italic', fontSize: 16, lineHeight: 1.75, color: '#d8d8d2', margin: '0 0 26px' }}>{r.quote}</p>
              <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: '#f5f5f0' }}>{r.name}</div>
              <div style={{ fontSize: 11, letterSpacing: 1, color: '#777', marginTop: 4 }}>Google Review</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
