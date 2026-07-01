import Faq from './Faq'

const faqs = [
  {
    q: 'What makes Lusso different from a regular taxi?',
    a: 'Lusso is a licensed chauffeur service, not a taxi — fixed pricing agreed up front, a professional suited driver, and a premium, immaculately valeted vehicle for every journey.',
  },
  {
    q: 'Are your chauffeurs vetted?',
    a: 'Yes — every driver is DBS-checked, professional and experienced, so you can travel with complete confidence.',
  },
  {
    q: 'Is Lusso licensed and insured?',
    a: 'Yes — Lusso Executive Travel is a fully licensed and insured private hire operator.',
  },
  {
    q: 'Do you only operate in North Devon?',
    a: 'North Devon is our home base, but we also serve Exeter and offer executive travel and airport transfers UK-wide.',
  },
  {
    q: 'Can I request the same driver for repeat journeys?',
    a: 'Yes — corporate and regular clients can request a consistent driver as part of our business account service.',
  },
  {
    q: 'What types of journeys do you cover?',
    a: 'Airport transfers, corporate travel, private executive journeys and meet & greet service — see our Services page for full details.',
  },
]

export default function AboutFaq() {
  return <Faq eyebrow="Common Questions" title="About Us" titleEm="FAQs" faqs={faqs} />
}
