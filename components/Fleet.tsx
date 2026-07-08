const tayronInterior = [
  {
    src: '/images/lusso-interior-orange-leather.jpeg',
    label: 'Leather Seats',
  },
  {
    src: '/images/lusso-interior-starlight.jpeg',
    label: 'Ambient Lighting',
  },
  {
    src: '/images/lusso-interior-vip-lounge.jpeg',
    label: 'VIP Lounge Seating',
  },
  {
    src: '/images/lusso-refreshments.png',
    label: 'Refreshments Onboard',
  },
]

const vehicles = [
  {
    src: '/images/tayron-front-beach.jpeg',
    name: 'Volkswagen Tayron',
    badge: 'Executive SUV',
    tags: ['Up to 5 passengers', 'Ample luggage', 'Leather interior'],
  },
  {
    src: '/images/executive-saloon-black-sedan.jpeg',
    name: 'Executive Saloon',
    badge: 'Business Class',
    tags: ['Up to 4 passengers', 'Climate control', 'USB charging'],
  },
  {
    src: '/images/large-mpv-black-van.jpeg',
    name: 'Large MPV',
    badge: 'Group Travel',
    tags: ['Up to 6 passengers', 'Extra luggage', 'Airport ready'],
  },
]

export default function Fleet() {
  return (
    <section id="fleet" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '104px 32px' }}>
        <div data-reveal="1">
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#d4af37', marginBottom: 18 }}>Our vehicles</div>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 56px' }}>The <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Fleet</em></h2>
        </div>
        <div id="fleet-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {vehicles.map((v) => (
            <div key={v.name} className="fleet-card fleet-anim" style={{ background: '#111', border: '1px solid rgba(255,255,255,.07)', transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease', overflow: 'hidden' }}>
              <div
                className="fleet-img"
                style={{
                  width: '100%', aspectRatio: '16/10',
                  backgroundImage: `url('${v.src}')`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}
              />
              <div style={{ padding: '26px 26px 30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
                  <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 21, margin: 0 }}>{v.name}</h3>
                  <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#d4af37', whiteSpace: 'nowrap' }}>{v.badge}</span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {v.tags.map((tag) => (
                    <span key={tag} style={{ border: '1px solid rgba(255,255,255,.12)', color: '#aaa', fontSize: 11, letterSpacing: .5, padding: '6px 11px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#d4af37', marginBottom: 16 }}>Inside the Tayron</div>
          <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 400, fontSize: 22, margin: '0 0 24px' }}>Interior <em style={{ color: '#d4af37', fontStyle: 'italic' }}>Comfort</em></h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
            {tayronInterior.map((shot) => (
              <div key={shot.label}>
                <div className="about-img-wrap">
                  <div style={{
                    width: '100%', aspectRatio: '4/3',
                    backgroundImage: `url('${shot.src}')`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    border: '1px solid rgba(255,255,255,.07)',
                  }} />
                </div>
                <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#888', marginTop: 14, textAlign: 'center' }}>{shot.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
