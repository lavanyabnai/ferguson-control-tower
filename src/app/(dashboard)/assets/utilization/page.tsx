"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import CapacityPlanningDashboard from "@/app/(dashboard)/controlKpi/manfDash/Assets"

export default function AssetUtilization() {
  return (
    <div className="w-full space-y-4 p-6">
      <Link href="/controlKpi/supplyChain">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Supply Chain Control Tower
        </Button>
      </Link>
      <h1 className="text-2xl font-bold">Asset Utilization</h1>
      <CapacityPlanningDashboard />
    </div>
  )
}
