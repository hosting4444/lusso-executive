import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import LocationFaq from '@/components/LocationFaq'

export const metadata: Metadata = {
  title: 'Luxury Airport Transfers | North Devon Taxi Service',
  description:
    'Luxury Airport Transfers from North Devon to Heathrow, Bristol & more. Reliable chauffeur service, fixed fares & flight tracking included. Book now!',
}

const GOLD = '#d4af37'
const serif = "'Playfair Display',Georgia,serif"

const pickups = [
  {
    num: '01',
    name: 'Barnstaple',
    desc: 'The main market town of North Devon and our home base for Barnstaple Airport Transfers — door-to-door collection for all airport and executive transfers.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Barnstaple%20Long%20Bridge%20(8178574763).jpg?width=1024',
    credit: 'Darren Shilson, CC BY 2.0, via Wikimedia Commons',
  },
  {
    num: '02',
    name: 'Bideford',
    desc: 'Historic port town on the Torridge estuary — early-morning and late-night pickups available, fixed fare confirmed up front.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bideford%20Bridge%2C%20River%20Torridge%2C%20North%20Devon.jpg?width=1024',
    credit: 'Rosser1954, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    num: '03',
    name: 'Ilfracombe',
    desc: "North Devon's seaside resort — reliable chauffeur collection with ample luggage space for family or group travel.",
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Damien%20Hirst%27s%20Verity%20at%20Ilfracombe%20harbour%20-%20geograph.org.uk%20-%203505495.jpg?width=1024',
    credit: 'Gareth James, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '04',
    name: 'Braunton',
    desc: 'Gateway to Croyde and Saunton beaches — flexible pickups at any hour to any major UK airport.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/The%20church%20of%20St%20Brannock%20at%20Braunton%20-%20geograph.org.uk%20-%203702368.jpg?width=1024',
    credit: 'Peter Wood, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '05',
    name: 'South Molton',
    desc: 'A traditional Devon market town fully covered for all airport transfers and long-distance executive journeys.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Market%20House%2C%20South%20Molton%20-%20geograph.org.uk%20-%204677984.jpg?width=1024',
    credit: 'Derek Harper, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '06',
    name: 'Exeter',
    desc: "Devon's vibrant capital — corporate travel, airport transfers and executive journeys served with punctuality and care.",
    img: 'https://images.unsplash.com/photo-1713039677353-d93496e5da44?auto=format&fit=crop&w=1000&q=75',
  },
  {
    num: '07',
    name: 'Croyde',
    desc: "Devon's premier surf village — flexible chauffeur pickups to any UK airport, any time of day or night.",
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cottages%20on%20Pathdown%20Lane%2C%20Croyde%20-%20geograph.org.uk%20-%201930263.jpg?width=1024',
    credit: 'Roger A Smith, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '08',
    name: 'Westward Ho!',
    desc: 'Classic North Devon seaside town — all airport transfers covered with a fixed fare and no surprises.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Holy%20Trinity%20Church%20at%20Westward%20Ho%5E%20-%20geograph.org.uk%20-%203702291.jpg?width=1024',
    credit: 'Peter Wood, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '09',
    name: 'Lynton',
    desc: 'Scenic cliff-top village on the edge of Exmoor — full chauffeur service including early departures and late returns.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Railway%20carriage%20on%20Cliff%20Railway%2C%20Lynton%20-%20geograph.org.uk%20-%207122595.jpg?width=1024',
    credit: 'David Smith, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '10',
    name: 'Tiverton',
    desc: 'Historic market town on the edge of Exmoor National Park — full chauffeur coverage for airport and executive transfers.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tiverton%20Castle%2C%20Devon%20-%20geograph.org.uk%20-%203682883.jpg?width=1024',
    credit: 'Derek Voller, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '11',
    name: 'Okehampton',
    desc: 'Gateway town to Dartmoor National Park — reliable door-to-door pickups for airport and long-distance journeys.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Okehampton%20Castle%20-%20geograph.org.uk%20-%207760989.jpg?width=1024',
    credit: 'Michael Garlick, CC BY-SA 2.0, via Wikimedia Commons',
  },
]

const airports = [
  {
    num: '01',
    name: 'Heathrow',
    tag: 'London',
    desc: "London's largest international airport. Our Heathrow Airport Transfers include real-time flight tracking and full meet & greet.",
    img: 'https://images.unsplash.com/photo-1571514926545-c61ae8be36be?auto=format&fit=crop&w=1000&q=75',
  },
  {
    num: '02',
    name: 'Gatwick',
    tag: 'London',
    desc: "London's second international hub. Fixed-fare transfers from North Devon with a name board at arrivals.",
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gatwick%20North%20Terminal%20122.JPG?width=1024',
  },
  {
    num: '03',
    name: 'Bristol',
    tag: 'Bristol',
    desc: 'The South West\'s gateway airport. Our Bristol Airport Taxi route is one of our most popular — comfortable, punctual and fixed price.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bristol%20Airport%20terminal%20and%20Control%20Tower%20-%20June%202025.jpg?width=1024',
    credit: 'Captain Galaxy, CC BY 4.0, via Wikimedia Commons',
  },
  {
    num: '04',
    name: 'Exeter',
    tag: 'Local',
    desc: 'The closest airport to North Devon. Short transfer time with full meet & greet included as standard.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Departures%20at%20Exeter%20International%20Airport%20-%20geograph.org.uk%20-%202541798.jpg?width=1024',
    credit: 'Bill Boaden, CC BY-SA 2.0, via Wikimedia Commons',
  },
  {
    num: '05',
    name: 'Birmingham',
    tag: 'Midlands',
    desc: "The Midlands' main international hub. Long-distance executive transfer in a comfortable, immaculate vehicle.",
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Birmingham%20airport%20entrance.JPG?width=1024',
  },
  {
    num: '06',
    name: 'Luton',
    tag: 'London',
    desc: "London's fourth airport. Fixed fares, flight tracking and complimentary waiting time for delayed flights.",
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Control%20Tower%20at%20London%20Luton%20Airport%20-%20geograph.org.uk%20-%205703549.jpg?width=1024',
    credit: 'Geographer, CC BY-SA 2.0, via Wikimedia Commons',
  },
]

function LocationCard({
  num, name, desc, img, tag, isFirst,
}: {
  num: string; name: string; desc: string; img: string; tag?: string; isFirst?: boolean
}) {
  const NameHeading = isFirst ? 'h3' : 'h5'
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', borderRadius: 14,
      aspectRatio: '3/4',
      backgroundImage: `url('${img}')`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      cursor: 'default',
    }}
      className="loc-card"
    >
      {/* gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,.18) 0%, rgba(0,0,0,.15) 40%, rgba(0,0,0,.82) 100%)',
      }} />

      {/* number + tag row */}
      <div style={{
        position: 'absolute', top: 22, left: 22, right: 22,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <span style={{
          fontFamily: serif, fontStyle: 'italic',
          fontSize: 28, lineHeight: 1, color: 'rgba(212,175,55,.65)',
        }}>
          {num}
        </span>
        {tag && (
          <span style={{
            fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)',
            background: 'rgba(0,0,0,.35)', padding: '5px 10px', borderRadius: 4,
          }}>
            {tag}
          </span>
        )}
      </div>

      {/* name + desc */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px' }}>
        <NameHeading style={{
          fontFamily: serif, fontWeight: 400, fontSize: 'clamp(22px,2.5vw,28px)',
          margin: '0 0 10px', lineHeight: 1.1, color: '#f5f5f0',
        }}>
          {name}
        </NameHeading>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,.72)', margin: 0 }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function LocationPage() {
  return (
    <div className="sp" style={{ background: '#0e0e0e', overflowX: 'hidden' }}>
      <Nav />

      {/* ─── PAGE HERO ─── */}
      <section style={{ background: '#0b0b0b', paddingTop: 74, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '80px 32px 72px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 64, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 18 }}>
              Where We Go
            </div>
            <h1 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(34px,5.5vw,58px)', lineHeight: 1.08,
              margin: '0 0 24px',
            }}>
              Our Service <em style={{ color: GOLD, fontStyle: 'italic' }}>Locations</em>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.82, color: '#9b9b95', margin: '0 0 38px' }}>
              Looking for a North Devon taxi alternative? We collect from across North Devon and Exeter
              and travel to all major UK airports with luxury airport transfers — fixed fare confirmed
              up front, flight tracking included.
            </p>
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              {['Licensed & Insured', 'DBS-Checked Drivers', '24/7 Availability', 'Fixed Fares'].map(t => (
                <span key={t} style={{ fontSize: 12, letterSpacing: 1, color: '#9a9a94' }}>
                  <span style={{ color: GOLD }}>●</span>&nbsp;&nbsp;{t}
                </span>
              ))}
            </div>
          </div>

          <div className="about-img-wrap">
            <div style={{
              width: '100%', aspectRatio: '4/3',
              backgroundImage: "url('/images/lusso-tayron-hotel.png')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,.07)', borderRadius: 4,
            }} />
          </div>
        </div>
      </section>

      {/* ─── PICKUP LOCATIONS ─── */}
      <section style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 16 }}>
              Pick-up Locations
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 14px' }}>
              North Devon <em style={{ color: GOLD, fontStyle: 'italic' }}>&amp; Exeter</em>
            </h2>
            <p style={{ fontSize: 14, color: '#666', margin: 0, lineHeight: 1.75, maxWidth: 520 }}>
              We collect door-to-door from anywhere across North Devon and Exeter. No detours,
              no waiting — your chauffeur comes to you.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
            gap: 18,
          }}>
            {pickups.map((p, i) => (
              <LocationCard key={p.name} {...p} isFirst={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── AIRPORTS ─── */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: GOLD, marginBottom: 16 }}>
              Airport Transfers
            </div>
            <h4 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(28px,4vw,40px)', margin: '0 0 14px' }}>
              Airports <em style={{ color: GOLD, fontStyle: 'italic' }}>We Serve</em>
            </h4>
            <p style={{ fontSize: 14, color: '#666', margin: 0, lineHeight: 1.75, maxWidth: 520 }}>
              We travel to Heathrow, Gatwick, Bristol, Exeter, Birmingham, Luton and all other
              major UK airports — with real-time flight tracking and free waiting time for delays.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
            gap: 18,
          }}>
            {airports.map(a => (
              <LocationCard key={a.name} {...a} />
            ))}
          </div>

          <div style={{
            marginTop: 32, padding: '22px 28px',
            background: '#111', border: '1px solid rgba(212,175,55,.15)',
            borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.3">
              <circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>
            </svg>
            <span style={{ fontSize: 13.5, color: '#888', lineHeight: 1.6 }}>
              Not seeing your airport?{' '}
              <a href="/contact" style={{ color: GOLD, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Get in touch
              </a>
              {' '}— we cover all UK airports, not just the ones listed above.
            </span>
          </div>
          <p style={{ fontSize: 10.5, lineHeight: 1.8, color: '#3a3a3a', margin: '28px 0 0', maxWidth: 900 }}>
            Photo credits: {[...pickups, ...airports].filter(p => p.credit).map(p => `${p.name} — ${p.credit}`).join(' · ')}
          </p>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginTop: 28 }}>
            <a href="/services" style={{ color: GOLD, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
              Our Services
            </a>
            <a href="/about" style={{ color: GOLD, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
              About Lusso
            </a>
          </div>
        </div>
      </section>

      <LocationFaq />

      {/* ─── CTA ─── */}
      <section style={{ background: GOLD }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '78px 32px', textAlign: 'center' }}>
          <h4 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(28px,4vw,42px)', color: '#0e0e0e', margin: '0 0 16px',
          }}>
            Ready to book your journey?
          </h4>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(14,14,14,.72)', maxWidth: 480, margin: '0 auto 38px' }}>
            No pricing online — every quote is personalised to your route and requirements.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/contact" className="cta-btn" style={{
              background: '#0e0e0e', color: GOLD, fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              Request a Quote
            </a>
            <a href="https://wa.me/447557261273" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{
              background: '#0e0e0e', color: GOLD, fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              WhatsApp Us
            </a>
            <a href="tel:+447557261273" className="cta-btn" style={{
              background: '#0e0e0e', color: GOLD, fontSize: 13, letterSpacing: 1.5,
              textTransform: 'uppercase', fontWeight: 700, padding: '16px 30px',
              minHeight: 44, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center',
            }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
