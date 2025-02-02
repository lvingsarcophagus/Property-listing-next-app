import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const listings = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    image: '/images/apartment1.jpg',
    price: '$250,000',
    location: 'Downtown, City',
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Apartment',
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    image: '/images/house1.jpg',
    price: '$450,000',
    location: 'Suburbs, City',
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: 'House',
  },
  {
    id: 3,
    title: 'Luxury Condo with Ocean View',
    image: '/images/condo1.jpg',
    price: '$750,000',
    location: 'Beachfront, City',
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: 'Condo',
  },
  {
    id: 4,
    title: 'Charming Cottage in the Woods',
    image: '/images/cottage1.jpg',
    price: '$350,000',
    location: 'Woodland, Outskirts',
    beds: 2,
    baths: 1,
    sqft: 1000,
    type: 'Cottage',
  },
  {
    id: 5,
    title: 'Modern Townhouse in Gated Community',
    image: '/images/townhouse1.jpg',
    price: '$550,000',
    location: 'Gated Community, Suburb',
    beds: 3,
    baths: 2.5,
    sqft: 2000,
    type: 'Townhouse',
  },
  {
    id: 6,
    title: 'Renovated Loft in Historic Building',
    image: '/images/loft1.jpg',
    price: '$400,000',
    location: 'Downtown, City',
    beds: 1,
    baths: 1,
    sqft: 1500,
    type: 'Loft',
  },
]

export default function ListingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((listing) => (
        <Card key={listing.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative h-48">
              <Image
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-2 right-2">{listing.type}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-xl mb-2">{listing.title}</CardTitle>
            <p className="text-muted-foreground mb-2">{listing.location}</p>
            <p className="text-primary font-bold mb-2">{listing.price}</p>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{listing.beds} beds</span>
              <span>{listing.baths} baths</span>
              <span>{listing.sqft} sqft</span>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/property/${listing.id}`} className="w-full">
              <Button variant="outline" className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

