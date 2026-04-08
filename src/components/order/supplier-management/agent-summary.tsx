"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgentSummary() {
  return (
    <Card className="bg-purple-50 border-purple-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-purple-700 flex items-center">
          <span className="mr-2">🤖</span>
          Agent Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-700">The agent summary of the alert and the proposed solution.</p>
        <p className="text-sm text-gray-700">
          There is insufficient inventory to fulfill upcoming contractor orders for{" "}
          <strong>1/2in PEX TUBING 100FT</strong> across your network. There are{" "}
          <span className="text-blue-600 underline cursor-pointer">8,302 pallets</span> available in your network and an
          additional <span className="text-blue-600 underline cursor-pointer">10,284 pallets</span> needed to reach the
          seasonal demand peak period.
        </p>
        <p className="text-sm text-gray-700">
          Based on the existing inventory available at the suppliers, you should immediately place orders for the
          remaining <span className="text-blue-600 underline cursor-pointer">3,512 pallets</span> from Charlotte Pipe & Foundry,
          as well as send out instructions to produce{" "}
          <span className="text-blue-600 underline cursor-pointer">2,821</span> additional pallets of 1/2in PEX TUBING
          100FT.
        </p>
      </CardContent>
    </Card>
  )
}
