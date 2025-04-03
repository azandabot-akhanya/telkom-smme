"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { User, FileText, BarChart2, Users, Network, HelpCircle, Settings, Calendar, LogOut, Home } from "lucide-react"

const navItems = [
  {
    title: "Business Profile",
    href: "/dashboard",
    icon: User,
  },
  {
    title: "Business Health Assessment",
    href: "/dashboard/health-assessment",
    icon: BarChart2,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "Business Process",
    href: "/dashboard/business-process",
    icon: Settings,
  },
  {
    title: "Mentor Network",
    href: "/dashboard/mentor-network",
    icon: Network,
  },
  {
    title: "Access to Market",
    href: "/dashboard/market-access",
    icon: Home,
  },
  {
    title: "Products & Services",
    href: "/dashboard/products-services",
    icon: HelpCircle,
  },
  {
    title: "Access to Funding",
    href: "/dashboard/funding",
    icon: FileText,
  },
  {
    title: "SME Network",
    href: "/dashboard/sme-network",
    icon: Users,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Do you know how",
    href: "/dashboard/knowledge-base",
    icon: HelpCircle,
  },
  {
    title: "Log Out",
    href: "/login",
    icon: LogOut,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="h-screen w-64 flex-col fixed inset-y-0 z-50 bg-[#0078C8] text-white">
      <div className="p-4 border-b border-[#0069B4] flex justify-center">
      <h1 className="text-xl font-bold text-left">Telkom</h1>

      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#0069B4]",
                pathname === item.href ? "bg-[#0069B4]" : "transparent",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

