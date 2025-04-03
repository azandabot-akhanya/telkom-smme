import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Calendar, Building, Clock, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function MarketAccessPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Access to Market</h1>
          <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
            <Building className="mr-2 h-4 w-4" />
            Register for Opportunities
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Opportunity Match</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold">78</span>
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
                    stroke="#0078C8"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="62"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-gray-500">
                Your business profile matches well with available opportunities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">IT Services Tender</h3>
                    <p className="text-xs text-gray-500">Telkom Business Solutions</p>
                  </div>
                  <Badge className="bg-red-100 text-red-800">3 Days Left</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">Deadline: April 6, 2025</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Software Development RFP</h3>
                    <p className="text-xs text-gray-500">Telkom Enterprise</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">1 Week Left</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">Deadline: April 10, 2025</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                View All Deadlines
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Application Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Approved</span>
                </div>
                <span className="text-sm font-medium">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">Pending</span>
                </div>
                <span className="text-sm font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Rejected</span>
                </div>
                <span className="text-sm font-medium">1</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Applications
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="all">All Opportunities</TabsTrigger>
              <TabsTrigger value="tenders">Tenders</TabsTrigger>
              <TabsTrigger value="rfps">RFPs</TabsTrigger>
              <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search opportunities..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "IT Services Tender",
                  org: "Telkom Business Solutions",
                  deadline: "April 6, 2025",
                  match: 95,
                  description: "Seeking IT service providers for network infrastructure maintenance and support.",
                },
                {
                  title: "Software Development RFP",
                  org: "Telkom Enterprise",
                  deadline: "April 10, 2025",
                  match: 85,
                  description: "Looking for software development partners to build custom business applications.",
                },
                {
                  title: "Digital Marketing Partnership",
                  org: "Telkom SME",
                  deadline: "April 15, 2025",
                  match: 75,
                  description: "Partnership opportunity for digital marketing agencies to support SME customers.",
                },
                {
                  title: "Cloud Migration Services",
                  org: "Telkom Cloud",
                  deadline: "April 20, 2025",
                  match: 80,
                  description: "Seeking partners to assist with cloud migration services for enterprise clients.",
                },
                {
                  title: "Mobile App Development",
                  org: "Telkom Digital",
                  deadline: "April 25, 2025",
                  match: 90,
                  description: "RFP for mobile application development for customer-facing services.",
                },
                {
                  title: "Cybersecurity Services",
                  org: "Telkom Security",
                  deadline: "April 30, 2025",
                  match: 70,
                  description: "Tender for cybersecurity assessment and implementation services.",
                },
              ].map((opportunity, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="bg-[#0078C8] p-3 flex justify-between items-center">
                    <h3 className="font-medium text-white">{opportunity.title}</h3>
                    <Badge className="bg-white text-[#0078C8]">{opportunity.match}% Match</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <p className="text-sm font-medium">{opportunity.org}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-500">Deadline: {opportunity.deadline}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{opportunity.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Save
                      </Button>
                      <Button size="sm" className="flex-1 bg-[#0078C8] hover:bg-[#0069B4]">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

