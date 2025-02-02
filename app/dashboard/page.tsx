import type { Metadata } from "next"
import DashboardContent from "../components/DashboardContent"

export const metadata: Metadata = {
  title: "Dashboard | PropertyFinder",
  description: "Manage your property listings and favorites",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardContent />
    </div>
  )
}

