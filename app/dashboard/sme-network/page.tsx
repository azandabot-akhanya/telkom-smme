import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, MessageSquare, Users, Building, MapPin, Calendar, Plus } from "lucide-react"

export default function SmeNetworkPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">SME Network</h1>
          <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
            <Plus className="mr-2 h-4 w-4" />
            Create Connection
          </Button>
        </div>

        <Card className="bg-gradient-to-r from-[#0078C8] to-[#0069B4] text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-2">Upcoming SME Networking Event</h2>
                <p className="text-white/80 mb-4">
                  Join us for a virtual networking event connecting SMEs across South Africa. Share experiences, find
                  partners, and grow your business network.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-white/80" />
                  <span>April 15, 2025 • 10:00 AM - 12:00 PM</span>
                </div>
                <Button className="bg-white text-[#0078C8] hover:bg-white/90">Register Now</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Networking event"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">My Network</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0078C8]" />
                  <span className="text-sm font-medium">Connections</span>
                </div>
                <span className="text-sm font-medium">24</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-[#0078C8]" />
                  <span className="text-sm font-medium">Companies</span>
                </div>
                <span className="text-sm font-medium">18</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#0078C8]" />
                  <span className="text-sm font-medium">Messages</span>
                </div>
                <span className="text-sm font-medium">5 new</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View All Connections
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
                    alt="Contact"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Sarah Nkosi</p>
                    <span className="text-xs text-gray-500">1h ago</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Hi there! I saw your business profile and would love to discuss a potential collaboration
                    opportunity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Contact"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">David Moyo</p>
                    <span className="text-xs text-gray-500">3h ago</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Thanks for connecting! I'd like to learn more about your IT services and how we might work together.
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
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md">
                <h3 className="font-medium">SME Virtual Networking</h3>
                <p className="text-xs text-gray-500 mt-1">April 15, 2025 • 10:00 AM</p>
                <div className="flex items-center gap-2 mt-2">
                  <Users className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">45 attendees</span>
                </div>
                <Button size="sm" className="w-full mt-2 bg-[#0078C8] hover:bg-[#0069B4]">
                  Register
                </Button>
              </div>

              <div className="p-3 bg-blue-50 rounded-md">
                <h3 className="font-medium">Tech Startup Showcase</h3>
                <p className="text-xs text-gray-500 mt-1">April 22, 2025 • 2:00 PM</p>
                <div className="flex items-center gap-2 mt-2">
                  <Users className="h-4 w-4 text-[#0078C8]" />
                  <span className="text-xs">32 attendees</span>
                </div>
                <Button size="sm" className="w-full mt-2 bg-[#0078C8] hover:bg-[#0069B4]">
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="all">All Businesses</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search businesses..." className="pl-8" />
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
                  name: "TechSolutions SA",
                  industry: "Technology",
                  location: "Johannesburg",
                  description: "Software development and IT consulting services for businesses.",
                  connected: false,
                },
                {
                  name: "GreenEnergy Solutions",
                  industry: "Energy",
                  location: "Cape Town",
                  description: "Renewable energy solutions for homes and businesses.",
                  connected: true,
                },
                {
                  name: "Digital Marketing Pro",
                  industry: "Marketing",
                  location: "Durban",
                  description: "Full-service digital marketing agency specializing in SME growth.",
                  connected: false,
                },
                {
                  name: "Innovative Manufacturing",
                  industry: "Manufacturing",
                  location: "Pretoria",
                  description: "Custom manufacturing solutions with modern technology.",
                  connected: true,
                },
                {
                  name: "Financial Advisors Group",
                  industry: "Financial Services",
                  location: "Johannesburg",
                  description: "Financial planning and advisory services for businesses.",
                  connected: false,
                },
                {
                  name: "Logistics Express",
                  industry: "Logistics",
                  location: "Cape Town",
                  description: "Fast and reliable logistics services across South Africa.",
                  connected: false,
                },
              ].map((business, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{business.name}</h3>
                        {business.connected && <Badge className="bg-green-100 text-green-800">Connected</Badge>}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-500">{business.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-500">{business.location}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{business.description}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Profile
                        </Button>
                        <Button
                          size="sm"
                          className={`flex-1 ${business.connected ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-[#0078C8] hover:bg-[#0069B4]"}`}
                          disabled={business.connected}
                        >
                          {business.connected ? "Connected" : "Connect"}
                        </Button>
                      </div>
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

