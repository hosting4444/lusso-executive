'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const onServices = pathname === '/services'
  const onAbout    = pathname === '/about'
  const onContact  = pathname === '/contact'
  const onLocation = pathname === '/location'
  const isSubPage  = onServices || onAbout || onContact || onLocation

  // On any sub-page, anchor-only links must navigate back to the homepage first
  const hp = (hash: string) => isSubPage ? `/${hash}` : hash

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }
  const toggle = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <nav
      data-nav="1"
      className={scrolled ? 'scrolled' : ''}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80,
        background: 'rgba(14,14,14,.78)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,175,55,.16)',
        transition: 'background .35s ease, border-color .35s ease, box-shadow .35s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href={isSubPage ? '/' : '#top'} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 400, whiteSpace: 'nowrap', zIndex: 71 }}>
          <span style={{ color: '#d4af37', letterSpacing: 3 }}>LUSSO</span>
          <span style={{ color: '#f5f5f0', marginLeft: 8, fontStyle: 'italic', fontSize: 20 }}>Executive</span>
        </a>

        {/* scrim */}
        <div
          data-scrim="1"
          data-open={String(menuOpen)}
          onClick={close}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 60,
            opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none',
            transition: 'opacity .35s ease',
          }}
        />

        {/* nav links */}
        <div
          data-navlinks="1"
          data-open={String(menuOpen)}
          onClick={close}
          style={{ display: 'flex', alignItems: 'center', gap: 32 }}
        >
          <a href="/services" style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: onServices ? '#d4af37' : '#bdbdb8' }}>Services</a>
          <a href="/about"    style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: onAbout    ? '#d4af37' : '#bdbdb8' }}>About Us</a>
          <a href="/contact"  style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: onContact ? '#d4af37' : '#bdbdb8' }}>Contact Us</a>
          <a href="/location" style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: onLocation ? '#d4af37' : '#bdbdb8' }}>Location</a>
          <a
            href={onAbout || onLocation ? '/#booking' : '#booking'}
            className="nav-quote-btn"
            style={{ background: '#d4af37', color: '#0e0e0e', fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, padding: '13px 22px', whiteSpace: 'nowrap' }}
          >
            Request a Quote
          </a>
        </div>

        {/* hamburger */}
        <button
          data-hamburger="1"
          data-open={String(menuOpen)}
          onClick={(e) => { e.stopPropagation(); toggle() }}
          aria-label="Menu"
          style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', gap: 6, width: 46, height: 46, alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 71 }}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
