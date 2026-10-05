import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
export default function NotFound() {
  return (
    <div className="container-x pt-44 pb-32 text-center">
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <p className="eyebrow">404</p><h1 className="mt-4 text-5xl">Page not found</h1>
      <p className="mt-4 text-ink/70">The page you are looking for has drifted away.</p>
      <Link to="/collection" className="btn-dark mt-8">Explore collection</Link>
    </div>
  )
}
