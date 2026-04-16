"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ManufacturingDashboard from "@/app/(dashboard)/controlKpi/manfDash/Dashboard"

export default function MasterScheduling() {
  return (
    <div className="w-full space-y-4">
      <Link href="/controlKpi/supplyChain">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Supply Chain Control Tower
        </Button>
      </Link>
      <ManufacturingDashboard />
    </div>
  )
}
