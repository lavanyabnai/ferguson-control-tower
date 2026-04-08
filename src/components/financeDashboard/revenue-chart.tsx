"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    PlumbingPipe: 3.8,
    HVACEquip: 2.1,
    WaterworksFP: 1.2,
  },
  {
    quarter: "Q2 2023",
    PlumbingPipe: 4.0,
    HVACEquip: 2.3,
    WaterworksFP: 1.3,
  },
  {
    quarter: "Q3 2023",
    PlumbingPipe: 4.2,
    HVACEquip: 2.4,
    WaterworksFP: 1.4,
  },
  {
    quarter: "Q4 2023",
    PlumbingPipe: 4.5,
    HVACEquip: 2.6,
    WaterworksFP: 1.5,
  },
  {
    quarter: "Q1 2024",
    PlumbingPipe: 4.7,
    HVACEquip: 2.7,
    WaterworksFP: 1.6,
  },
]

export function RevenueChart() {
  return (
    <ChartContainer
      config={{
        PlumbingPipe: {
          label: "Plumbing & Pipe",
          color: "hsl(var(--chart-1))",
        },
        HVACEquip: {
          label: "HVAC Equipment",
          color: "hsl(var(--chart-2))",
        },
        WaterworksFP: {
          label: "Waterworks & Fire Protection",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stackOffset="sign"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis label={{ value: "Revenue ($B)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="PlumbingPipe" stackId="a" fill="var(--color-PlumbingPipe)" />
          <Bar dataKey="HVACEquip" stackId="a" fill="var(--color-HVACEquip)" />
          <Bar dataKey="WaterworksFP" stackId="a" fill="var(--color-WaterworksFP)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
