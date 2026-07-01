import Faq from './Faq'

const faqs = [
  {
    q: 'What areas does Lusso Executive Travel cover?',
    a: 'We are based in North Devon and cover Barnstaple, Bideford, Ilfracombe, Braunton, South Molton and Exeter, with executive travel available UK-wide.',
  },
  {
    q: 'How do I book a chauffeur?',
    a: 'Send your journey details through the quote form, WhatsApp, phone or email — we confirm a fixed fare before you travel.',
  },
  {
    q: 'Are your fares fixed?',
    a: 'Yes. Every fare is personalised to your route and confirmed up front. No meters and no hidden costs.',
  },
  {
    q: 'Do you track flights for airport pick-ups?',
    a: 'Yes — we monitor your flight in real time and automatically adjust your pick-up for delays or early arrivals, at no extra cost.',
  },
  {
    q: 'Are you available 24/7?',
    a: 'Yes, our chauffeur service operates 24 hours a day, 7 days a week, including early departures and late-night arrivals.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — Lusso is a fully licensed and insured private hire operator with DBS-checked chauffeurs.',
  },
]

export default function HomeFaq() {
  return <Faq eyebrow="Common Questions" title="Frequently Asked" titleEm="Questions" faqs={faqs} />
}
