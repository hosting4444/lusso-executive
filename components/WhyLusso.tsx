const items = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><circle cx="12" cy="7" r="3.5"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/></svg>,
    title: 'Professional Chauffeur',
    desc: 'Suited, courteous drivers with years of private hire experience.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M2 16l9-2 5-9 1.5.5-2.5 8 5-1 1.5 2-3 1.5-1 4-1.5-.5-.5-3-5 1.2L8 22l-1.5-.5 1-4-5 1z"/></svg>,
    title: 'Flight Tracking',
    desc: 'We monitor your flight in real time and adjust for delays automatically.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 6h2"/></svg>,
    title: 'Phone Charging',
    desc: 'USB and wireless charging in every vehicle as standard.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M7 10V8a5 5 0 0110 0v2"/><rect x="5" y="10" width="14" height="10" rx="2"/></svg>,
    title: 'Complimentary Water',
    desc: 'Chilled water provided on every journey, no extra charge.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><circle cx="12" cy="12" r="4"/></svg>,
    title: 'Fixed, Transparent Fares',
    desc: 'Every fare is agreed up front. No meters, no surprises — just a fixed price confirmed before you travel.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>,
    title: '24/7 Availability',
    desc: 'Early flights, late arrivals, midnight runs — we are always here.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><path d="M3 13l2-5a2 2 0 012-1.5h10A2 2 0 0119 8l2 5"/><path d="M3 13h18v4H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>,
    title: 'Executive Vehicle',
    desc: 'Immaculately presented, valeted and maintained before every journey.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.3"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.3"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><path d="M15 14c2.6.2 4.5 2.2 4.5 5"/></svg>,
    title: 'Meet & Greet',
    desc: 'Your driver waits at arrivals with a name board and helps with your luggage.',
  },
]

export default function WhyLusso() {
  return (
    <section style={{ background: '#0a0a0a' }}>
      <div className="sec-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px' }}>
        <div data-reveal="1">
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>Why Lusso</div>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 56px' }}>The Lusso <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Difference</em></h2>
        </div>
        <div id="why-grid" style={{ display: 'grid', gap: '0 64px' }}>
          {items.map((item) => (
            <div key={item.title} className="diff-anim" style={{ display: 'flex', alignItems: 'flex-start', gap: 18, padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <div className="diff-icon" style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(212,175,55,.08)', border: '1px solid rgba(212,175,55,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#d4af37', margin: '0 0 6px' }}>{item.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: '#666', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
