import Seo from '../components/Seo'
import Hero from '../components/Hero'
import CollectionSection from '../components/CollectionSection'
import StorySection from '../components/StorySection'
import BenefitsSection from '../components/BenefitsSection'
export default function Home() {
  return (<>
    <Seo title="Luxury Fragrances" description="Luxury fragrances made with the finest ingredients to evoke elegance, confidence and unforgettable memories." />
    <Hero /><CollectionSection /><StorySection /><BenefitsSection />
  </>)
}
