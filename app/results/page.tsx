import { Metadata } from 'next'
import ListingGrid from '../components/ListingGrid'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Search Results | PropertyFinder',
  description: 'View properties matching your search criteria',
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <div className="flex gap-4 mb-8">
        <Input placeholder="Refine your search..." className="flex-grow" />
        <Button>Search</Button>
      </div>
      <ListingGrid />
    </div>
  )
}

