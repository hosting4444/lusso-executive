import Faq from './Faq'

const faqs = [
  {
    q: 'Which areas do you collect from?',
    a: 'We collect door-to-door across North Devon and Exeter, including Barnstaple, Bideford, Ilfracombe, Braunton, South Molton, Croyde, Westward Ho!, Lynton, Tiverton and Okehampton.',
  },
  {
    q: 'Do you travel outside North Devon?',
    a: 'Yes — alongside our North Devon and Exeter base, we provide executive transfers UK-wide and to all major UK airports.',
  },
  {
    q: 'Which airports do you serve?',
    a: 'Heathrow, Gatwick, Bristol, Exeter, Birmingham, Luton and all other major UK airports.',
  },
  {
    q: "My town isn't listed — can you still collect me?",
    a: 'Almost certainly. We cover the whole North Devon and Exeter area, so get in touch and we will confirm your pick-up.',
  },
  {
    q: 'Do you charge extra for early or late pickups?',
    a: 'No — your fare is fixed and confirmed up front regardless of the time of day or night.',
  },
  {
    q: 'How far in advance should I book an airport transfer?',
    a: 'We recommend booking as early as possible to guarantee availability, though we can often accommodate short-notice requests.',
  },
]

export default function LocationFaq() {
  return <Faq eyebrow="Common Questions" title="Location" titleEm="FAQs" faqs={faqs} />
}
