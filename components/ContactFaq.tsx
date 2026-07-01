import Faq from './Faq'

const faqs = [
  {
    q: 'How can I get in touch with Lusso?',
    a: 'You can call, WhatsApp, email or use the enquiry form on this page — whichever suits you best. We are available 24/7.',
  },
  {
    q: 'How quickly will I get a quote?',
    a: 'We typically reply within a few hours with a fixed, personalised fare for your journey.',
  },
  {
    q: 'What information do you need for a quote?',
    a: 'Your pick-up location, destination, date and time, number of passengers and, if relevant, your flight details.',
  },
  {
    q: 'Can I book a chauffeur at short notice?',
    a: 'Yes — we operate 24 hours a day, 7 days a week and can often accommodate last-minute bookings, subject to availability.',
  },
  {
    q: 'Can I change or cancel my booking?',
    a: 'Yes, just contact us by phone or WhatsApp as soon as possible and we will help rearrange your journey.',
  },
  {
    q: 'Do you offer accounts for businesses?',
    a: 'Yes — corporate accounts include priority booking, consistent drivers and consolidated monthly invoicing.',
  },
]

export default function ContactFaq() {
  return <Faq eyebrow="Common Questions" title="Contact" titleEm="FAQs" faqs={faqs} />
}
