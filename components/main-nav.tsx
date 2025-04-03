"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="hidden md:flex h-screen w-64 flex-col fixed inset-y-0 z-50 bg-[#0078C8] text-white">
        <div className="p-4 border-b border-[#0069B4]">
          <h1 className="text-xl font-bold">Telkom</h1>
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
        <div className="p-4 border-t border-[#0069B4]">
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-[#0069B4]"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0078C8] text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Telkom</h1>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-[#0069B4]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0078C8] text-white pt-16">
          <nav className="grid gap-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-white transition-all hover:bg-[#0069B4]",
                  pathname === item.href ? "bg-[#0069B4]" : "transparent",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
            <Link
              href="/login"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-white transition-all hover:bg-[#0069B4] mt-4 border-t border-[#0069B4] pt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

