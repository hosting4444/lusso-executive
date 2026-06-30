import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lusso Executive Travel — North Devon Chauffeur Service & Airport Transfers',
  description:
    'Premium chauffeur service in North Devon. Executive airport transfers from Barnstaple, Bideford, Braunton, Ilfracombe & Exeter to Heathrow, Bristol and all UK airports. Licensed, insured, DBS checked. Request a personalised quote.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lusso Executive Travel',
  description:
    'Licensed private hire chauffeur service in North Devon offering executive airport transfers, corporate travel and meet & greet across Devon and all major UK airports.',
  areaServed: ['Barnstaple', 'Bideford', 'Braunton', 'Ilfracombe', 'Exeter', 'North Devon', 'Devon'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Devon',
    addressCountry: 'GB',
    addressLocality: 'Barnstaple',
  },
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: 'Quote on request',
  makesOffer: [
    { '@type': 'Service', name: 'Airport Transfers' },
    { '@type': 'Service', name: 'Corporate Travel' },
    { '@type': 'Service', name: 'Executive Transfers' },
    { '@type': 'Service', name: 'Meet & Greet' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
