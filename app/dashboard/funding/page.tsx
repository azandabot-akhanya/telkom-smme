import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Filter, Calendar, DollarSign, Clock } from "lucide-react"

export default function FundingPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Access to Funding</h1>
          <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
            <DollarSign className="mr-2 h-4 w-4" />
            Apply for Funding
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Funding Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold">82</span>
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
                    strokeDashoffset="51"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-gray-500">
                Your business has a high eligibility score for funding opportunities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Funding Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Business Registration</span>
                  <span className="text-sm font-medium">Complete</span>
                </div>
                <Progress value={100} className="h-2" indicatorColor="bg-green-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Financial Statements</span>
                  <span className="text-sm font-medium">Complete</span>
                </div>
                <Progress value={100} className="h-2" indicatorColor="bg-green-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Business Plan</span>
                  <span className="text-sm font-medium">Partial</span>
                </div>
                <Progress value={70} className="h-2" indicatorColor="bg-yellow-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Tax Compliance</span>
                  <span className="text-sm font-medium">Complete</span>
                </div>
                <Progress value={100} className="h-2" indicatorColor="bg-green-500" />
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Complete Requirements
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Application Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">SME Growth Fund</h3>
                    <p className="text-xs text-gray-500">Telkom Business Finance</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">In Review</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">Submitted: March 25, 2025</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Technology Innovation Grant</h3>
                    <p className="text-xs text-gray-500">Telkom Foundation</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">Approved: March 10, 2025</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                View All Applications
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="all">All Funding</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="grants">Grants</TabsTrigger>
              <TabsTrigger value="equity">Equity</TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search funding..." className="pl-8" />
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
                  title: "SME Growth Fund",
                  type: "Loan",
                  amount: "Up to R500,000",
                  provider: "Telkom Business Finance",
                  deadline: "April 30, 2025",
                  description: "Low-interest loans for small businesses looking to expand operations.",
                  match: 95,
                },
                {
                  title: "Technology Innovation Grant",
                  type: "Grant",
                  amount: "Up to R250,000",
                  provider: "Telkom Foundation",
                  deadline: "May 15, 2025",
                  description: "Non-repayable grants for innovative technology solutions.",
                  match: 85,
                },
                {
                  title: "Digital Transformation Fund",
                  type: "Loan",
                  amount: "R100,000 - R1,000,000",
                  provider: "Telkom Enterprise",
                  deadline: "May 30, 2025",
                  description: "Funding for businesses undergoing digital transformation initiatives.",
                  match: 80,
                },
                {
                  title: "Startup Seed Investment",
                  type: "Equity",
                  amount: "R500,000 - R2,000,000",
                  provider: "Telkom Ventures",
                  deadline: "Ongoing",
                  description: "Equity investment for promising tech startups with growth potential.",
                  match: 75,
                },
                {
                  title: "Women in Tech Grant",
                  type: "Grant",
                  amount: "Up to R300,000",
                  provider: "Telkom Foundation",
                  deadline: "June 15, 2025",
                  description: "Grants specifically for women-owned technology businesses.",
                  match: 70,
                },
                {
                  title: "Green Technology Fund",
                  type: "Loan",
                  amount: "Up to R750,000",
                  provider: "Telkom Sustainability",
                  deadline: "June 30, 2025",
                  description: "Funding for businesses developing environmentally sustainable technologies.",
                  match: 65,
                },
              ].map((funding, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="bg-[#0078C8] p-3 flex justify-between items-center">
                    <h3 className="font-medium text-white">{funding.title}</h3>
                    <Badge className="bg-white text-[#0078C8]">{funding.match}% Match</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <Badge
                        className={
                          funding.type === "Loan"
                            ? "bg-blue-100 text-blue-800"
                            : funding.type === "Grant"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }
                      >
                        {funding.type}
                      </Badge>
                      <span className="font-bold text-[#0078C8]">{funding.amount}</span>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm font-medium">{funding.provider}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-500">Deadline: {funding.deadline}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{funding.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Details
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

