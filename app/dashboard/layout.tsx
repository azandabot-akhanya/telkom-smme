import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardSidebar />
      <div className="md:pl-64 pt-0">{children}</div>
    </div>
  )
}

