import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, MessageSquare, Star, Filter } from "lucide-react"

export default function MentorNetworkPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Mentor Network</h1>
          <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Session
          </Button>
        </div>

        <Card className="bg-gradient-to-r from-[#0078C8] to-[#0069B4] text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Mentor"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-bold">Anathi Madiba</h2>
                <p className="text-white/80">Business Development Specialist</p>
                <div className="flex items-center gap-1 mt-1 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  ))}
                  <span className="text-sm ml-1">5.0</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <Button className="bg-white text-[#0078C8] hover:bg-white/90">View Profile</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Business Strategy Review</h3>
                    <p className="text-xs text-gray-500">With Anathi Madiba</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Tomorrow</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">April 4, 2025 • 10:00 AM</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Marketing Plan Discussion</h3>
                    <p className="text-xs text-gray-500">With Anathi Madiba</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Next Week</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">April 10, 2025 • 2:00 PM</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                View All Sessions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Mentor"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Anathi Madiba</p>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    I've reviewed your business plan and have some suggestions for improving your marketing strategy.
                    Let's discuss this in our next meeting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Mentor"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Anathi Madiba</p>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Don't forget to prepare the financial projections for our session tomorrow. Looking forward to
                    seeing your progress!
                  </p>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                View All Messages
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Resources Shared</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-md">
                <h3 className="font-medium">Business Plan Template</h3>
                <p className="text-xs text-gray-500 mt-1">Shared on April 1, 2025</p>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Download
                </Button>
              </div>

              <div className="p-3 border rounded-md">
                <h3 className="font-medium">Marketing Strategy Guide</h3>
                <p className="text-xs text-gray-500 mt-1">Shared on March 28, 2025</p>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Download
                </Button>
              </div>

              <div className="p-3 border rounded-md">
                <h3 className="font-medium">Financial Projection Spreadsheet</h3>
                <p className="text-xs text-gray-500 mt-1">Shared on March 25, 2025</p>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="all">All Mentors</TabsTrigger>
              <TabsTrigger value="business">Business Development</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search mentors..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Anathi Madiba", role: "Business Development Specialist", rating: 5.0 },
                { name: "Thabo Nkosi", role: "Financial Advisor", rating: 4.8 },
                { name: "Nomsa Dlamini", role: "Marketing Strategist", rating: 4.9 },
                { name: "Sipho Mabaso", role: "Operations Expert", rating: 4.7 },
                { name: "Lerato Molefe", role: "Sales Coach", rating: 4.6 },
                { name: "Bongani Ndlovu", role: "Technology Consultant", rating: 4.9 },
              ].map((mentor, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={mentor.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{mentor.name}</h3>
                        <p className="text-xs text-gray-500">{mentor.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${star <= mentor.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                          <span className="text-xs ml-1">{mentor.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageSquare className="mr-1 h-3 w-3" /> Message
                      </Button>
                      <Button size="sm" className="flex-1 bg-[#0078C8] hover:bg-[#0069B4]">
                        View Profile
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

