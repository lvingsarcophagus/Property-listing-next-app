import Link from 'next/link'
import dynamic from 'next/dynamic'
import SearchBar from './components/SearchBar'
import FeaturedProperties from './components/FeaturedProperties'

const MapWithNoSSR = dynamic(() => import('./components/Map'), {
  ssr: false
})

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Property</h1>
      <SearchBar />
      <div className="mt-8 h-[400px]">
        <MapWithNoSSR />
      </div>
      <FeaturedProperties />
      <div className="text-center mt-12">
        <Link href="/listings" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition duration-300">
          View All Listings
        </Link>
      </div>
    </div>
  )
}

