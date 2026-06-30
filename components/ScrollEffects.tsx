'use client'
import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    function revealGrid(id: string, sel: string) {
      const g = document.getElementById(id)
      if (!g) return
      if (!window.IntersectionObserver) {
        g.querySelectorAll(sel).forEach((c) => c.classList.add('in'))
        return
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.querySelectorAll(sel).forEach((c) => c.classList.add('in'))
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1 }
      )
      io.observe(g)
    }

    revealGrid('srv-grid',   '.srv-anim')
    revealGrid('why-grid',   '.diff-anim')
    revealGrid('fleet-grid', '.fleet-anim')
    revealGrid('rev-grid',   '.rev-anim')
    revealGrid('corp-rows',  '.corp-anim')
    revealGrid('contact-col','.contact-anim')

    // service areas panels
    document.querySelectorAll<HTMLElement>('.areas-panel').forEach((p) => {
      if (!window.IntersectionObserver) { p.classList.add('in'); return }
      new IntersectionObserver(
        (entries, io) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add('in'); io.disconnect() }
          })
        },
        { threshold: 0.15 }
      ).observe(p)
    })
  }, [])

  return null
}
