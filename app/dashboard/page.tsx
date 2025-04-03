import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CircleCheck, CircleX, Clock, Settings } from "lucide-react"

export default function DashboardPage() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Business Profile</h1>
          <p className="text-sm text-gray-500">
            {today.getHours()}:{today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}
            <br />
            {formattedDate}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Admin Settings</span>
          <div className="w-8 h-8 rounded-full bg-[#0078C8] text-white flex items-center justify-center">
            <Settings size={16} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Company logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Akhanya IT Innovations</h2>
              <p className="text-sm text-blue-600">www.akhanya.co.za</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Company Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Company Registration</p>
                    <p className="text-sm font-medium">2023/123456/07</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Registration Status</p>
                    <p className="text-sm font-medium">Active</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Business Sector</p>
                    <p className="text-sm font-medium">ICT Sector</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">VAT Registration Number</p>
                    <p className="text-sm font-medium">4567890123</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">B-BBEE Status</p>
                    <p className="text-sm font-medium">Level 1</p>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Registration Name of Company</p>
                    <p className="text-sm font-medium">Akhanya IT Innovations (Pty) Ltd</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Trading Name</p>
                    <p className="text-sm font-medium">Akhanya IT</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Email Address</p>
                    <p className="text-sm font-medium">info@akhanya.co.za</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Phone Number</p>
                    <p className="text-sm font-medium">+27 12 345 6789</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Physical Address</p>
                    <p className="text-sm font-medium">123 Business Park, Pretoria, Gauteng, 0001</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Supporting Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">ID Document</p>
                    <p className="text-xs text-blue-600">View ID Document.pdf</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Company Document</p>
                    <p className="text-xs text-blue-600">View Company Document.pdf</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">VAT Document</p>
                    <p className="text-xs text-blue-600">View VAT Document.pdf</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">B-BBEE Certificate/Affidavit</p>
                    <p className="text-xs text-blue-600">View B-BBEE Certificate.pdf</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Tasks</CardTitle>
              <Badge className="bg-red-500">4</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CircleX size={18} className="text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Marketing and Sales SWOT</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">Task Pending</p>
                      <p className="text-xs text-gray-500">12/04/2025</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CircleX size={18} className="text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Sales Tracking</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">Task Pending</p>
                      <p className="text-xs text-gray-500">15/04/2025</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CircleX size={18} className="text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Compliance Work</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">Task Pending</p>
                      <p className="text-xs text-gray-500">18/04/2025</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CircleCheck size={18} className="text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Onboarding Plan</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">Completed</p>
                      <p className="text-xs text-gray-500">10/04/2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Business Health Assessment Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold">72</span>
                    <span className="text-sm">/100</span>
                  </div>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#FFA500"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="79"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Mentor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Mentor"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold">Anathi Madiba</h3>
                <p className="text-sm text-gray-500 mb-3">Business Development Specialist</p>
                <Button className="bg-[#0078C8] hover:bg-[#0069B4]">Contact</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Access to market</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">Telkom opportunities aligned with your business profile</p>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#0078C8]" />
                </div>
              </div>
              <Button className="w-full bg-[#0078C8] hover:bg-[#0069B4]">View Opportunities</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

