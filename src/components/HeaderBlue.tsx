"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import { GlobalSearch } from "./global-search";

import { TowerControl, Boxes, PackageCheck, Warehouse, HandCoins, Banknote, Truck } from "lucide-react";

import { MegaDropdownCategories } from "@/components/mega-dropdown-categories";

const WORKSPACE_ID = "67a60a37003b04bcd9ff";

export const HeaderBlue = () => {
  const workspaceId = WORKSPACE_ID;

  const categories = [
    {
      category: "Supply Chain Modules",
      items: [
        {
          name: "Control Tower",
          description: "Distribution network performance & OTIF monitoring",
          shortDescription: "Network Performance & OTIF",
          to: `/workspaces/${workspaceId}/controlKpi/supplyChain`,
          icon: TowerControl,
          iconBackground: "bg-violet-100",
          iconForeground: "text-violet-700",
          highlight: true,
        },
        {
          name: "e2e Supply Chain",
          description: "End-to-end wholesale distribution pipeline",
          shortDescription: "End to End Distribution",
          to: `/workspaces/${workspaceId}/inventory/dashboard`,
          icon: Boxes,
          iconBackground: "bg-blue-100",
          iconForeground: "text-blue-700",
        },
        {
          name: "Orders",
          description: "Customer order management & allocation",
          shortDescription: "Order Management",
          to: `/workspaces/${workspaceId}/orders/home`,
          icon: PackageCheck,
          iconBackground: "bg-emerald-100",
          iconForeground: "text-emerald-700",
        },
        {
          name: "Warehousing",
          description: "Distribution center operations",
          shortDescription: "Distribution Center Ops",
          to: `/workspaces/${workspaceId}/warehouse/control`,
          icon: Warehouse,
          iconBackground: "bg-purple-100",
          iconForeground: "text-purple-700",
        },
        {
          name: "Procurement",
          description: "Vendor & supplier management",
          shortDescription: "Vendor Management",
          to: `/workspaces/${workspaceId}/procure/procureGov`,
          icon: HandCoins,
          iconBackground: "bg-orange-100",
          iconForeground: "text-orange-700",
        },
        {
          name: "Finance",
          description: "Manage finance",
          shortDescription: "Finance Management",
          to: `/workspaces/${workspaceId}/financeRoute/finance`,
          icon: Banknote,
          iconBackground: "bg-yellow-100",
          iconForeground: "text-yellow-700",
        },
        {
          name: "Transportation",
          description: "Manage transportation",
          shortDescription: "Transportation Management",
          to: `/workspaces/${workspaceId}/transport/alerts`,
          icon: Truck,
          iconBackground: "bg-indigo-100",
          iconForeground: "text-indigo-700",
        },
      
      ],
    },
  
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="py-4 px-6 flex items-center justify-between bg-[#00446a]">
        <div className="flex items-center gap-x-2">
          <MobileSidebar />
          <Link href="/" className="flex items-center gap-2">
       <Image className="block lg:hidden" src="/assets/ferguson-logo.jpeg" alt="Ferguson logo" width={40} height={40} />
            <Image className="hidden lg:block" src="/assets/ferguson-light.svg" alt="Ferguson" width={142} height={18} />
      </Link>
        </div>
        <GlobalSearch />
        <div className="flex items-center gap-2">
          <MegaDropdownCategories categories={categories} />
        </div>
      </nav>
    </header>
  );
};