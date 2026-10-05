import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Accordion from '../components/Accordion'
import { faqs } from '../data/faq'
export default function FAQ() {
  return (<>
    <Seo title="FAQ" description="Answers about shipping, returns, longevity, ingredients, payment and order tracking." />
    <PageHeader eyebrow="CUSTOMER CARE" title="Frequently Asked Questions" subtitle="Shipping, returns, ingredients and more." />
    <section className="section container-x max-w-3xl"><Accordion defaultOpen={0} items={faqs.map(f => ({ q: f.q, a: f.a }))} /></section>
  </>)
}
