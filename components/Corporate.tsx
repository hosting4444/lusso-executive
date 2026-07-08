const rows = [
  { num: '01', title: 'Monthly Invoicing', desc: 'One consolidated invoice — no per-trip card payments or expense chasing.' },
  { num: '02', title: 'Priority Booking', desc: 'Account clients are booked first — even at short notice and peak times.' },
  { num: '03', title: 'Consistent Drivers', desc: 'The same trusted, professional chauffeurs your team comes to know.' },
  { num: '04', title: 'Single Point of Contact', desc: 'A dedicated account manager for bookings, changes and queries.' },
]

export default function Corporate() {
  return (
    <section id="corporate" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>

        <div data-reveal="1">
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>For business</div>
          <h4 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 24px', lineHeight: 1.15 }}>
            Corporate <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Accounts</em>
          </h4>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#9b9b95', margin: '0 0 30px', maxWidth: 440 }}>
            Priority booking, consistent drivers, and one simple monthly invoice. Built for businesses that need to move people on time, every time.
          </p>
          <a href="#contact" className="corp-open-btn" style={{ display: 'inline-flex', alignItems: 'center', background: '#d4af37', color: '#0e0e0e', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px', minHeight: 44, boxSizing: 'border-box' }}>
            Open an Account
          </a>
        </div>

        <div id="corp-rows" style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.08)' }}>
          {rows.map((r) => (
            <div key={r.num} className="corp-row corp-anim" style={{ background: '#0e0e0e', padding: '24px 26px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span className="corp-num" style={{ fontFamily: "'Playfair Display',Georgia,serif", fontStyle: 'italic', color: 'rgba(212,175,55,.5)', fontSize: 20, lineHeight: 1 }}>{r.num}</span>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 6 }}>{r.title}</div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
