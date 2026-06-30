export default function TrustStrip() {
  return (
    <section style={{ background: '#0e0e0e' }}>
      <div className="trust-strip" data-reveal="1" style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 1, background: 'rgba(255,255,255,.05)' }}>
        <div style={{ background: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, padding: '24px 12px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.2"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>
          <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#bdbdb8' }}>Flight Monitoring</span>
        </div>
        <div style={{ background: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, padding: '24px 12px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.2"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.3"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><path d="M15 14c2.6.2 4.5 2.2 4.5 5"/></svg>
          <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#bdbdb8' }}>Meet &amp; Greet</span>
        </div>
        <div style={{ background: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, padding: '24px 12px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
          <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#bdbdb8' }}>24/7 Available</span>
        </div>
        <div style={{ background: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, padding: '24px 12px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.2"><rect x="3" y="6" width="18" height="12" rx="1.5"/><circle cx="12" cy="12" r="2.5"/></svg>
          <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#bdbdb8' }}>Fixed Fares</span>
        </div>
        <div style={{ background: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, padding: '24px 12px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.2"><rect x="3" y="5" width="18" height="11" rx="1"/><path d="M2 20h20"/></svg>
          <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#bdbdb8' }}>Corporate Accounts</span>
        </div>
        <div style={{ background: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, padding: '24px 12px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.2"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/></svg>
          <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#bdbdb8' }}>Fully Licensed</span>
        </div>
      </div>
    </section>
  )
}
