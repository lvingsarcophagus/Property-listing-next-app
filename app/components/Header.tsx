import Link from 'next/link'
import { UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-foreground">
            PropertyFinder
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/listings" className="text-foreground hover:text-primary transition-colors">
              Listings
            </Link>
            <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" asChild>
              <Link href="/login">
                <UserCircle className="w-5 h-5 mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

