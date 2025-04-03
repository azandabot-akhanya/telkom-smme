import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, ShoppingCart, Package, Smartphone, Wifi, Server, Cloud, Shield } from "lucide-react"

export default function ProductsServicesPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Products & Services</h1>
          <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Cart (3)
          </Button>
        </div>

        <Card className="bg-gradient-to-r from-[#0078C8] to-[#0069B4] text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-2">Special Offer for SMEs</h2>
                <p className="text-white/80 mb-4">
                  Get 20% off on all business connectivity solutions and free setup when you sign up before April 30th.
                </p>
                <Button className="bg-white text-[#0078C8] hover:bg-white/90">Learn More</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Special offer"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & Hosting</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8" />
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
                  title: "Business Fibre",
                  category: "Connectivity",
                  price: "R1,499/month",
                  description: "High-speed fibre connectivity for businesses with 99.9% uptime guarantee.",
                  icon: Wifi,
                  popular: true,
                },
                {
                  title: "Business Mobile",
                  category: "Mobile",
                  price: "R399/month",
                  description: "Business mobile plans with unlimited calls and generous data allowances.",
                  icon: Smartphone,
                  popular: false,
                },
                {
                  title: "Cloud Hosting",
                  category: "Cloud & Hosting",
                  price: "R799/month",
                  description: "Secure and scalable cloud hosting solutions for your business applications.",
                  icon: Cloud,
                  popular: true,
                },
                {
                  title: "Dedicated Server",
                  category: "Cloud & Hosting",
                  price: "R2,999/month",
                  description: "Dedicated server hosting with full control and management options.",
                  icon: Server,
                  popular: false,
                },
                {
                  title: "Cybersecurity Suite",
                  category: "Security",
                  price: "R599/month",
                  description: "Comprehensive cybersecurity protection for your business network and data.",
                  icon: Shield,
                  popular: true,
                },
                {
                  title: "Business LTE",
                  category: "Connectivity",
                  price: "R699/month",
                  description: "Reliable LTE connectivity for businesses in areas without fibre coverage.",
                  icon: Wifi,
                  popular: false,
                },
              ].map((product, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="bg-slate-100 p-6 flex justify-center">
                    <product.icon className="h-12 w-12 text-[#0078C8]" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{product.title}</h3>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                      {product.popular && <Badge className="bg-green-100 text-green-800">Popular</Badge>}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-[#0078C8]">{product.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Details
                      </Button>
                      <Button size="sm" className="flex-1 bg-[#0078C8] hover:bg-[#0069B4]">
                        <Plus className="mr-1 h-3 w-3" /> Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recommended for Your Business</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Package className="h-10 w-10 text-[#0078C8]" />
                    <div>
                      <h3 className="font-medium">Business in a Box</h3>
                      <p className="text-xs text-gray-500 mb-2">Complete business solution package</p>
                      <p className="text-sm text-gray-600 mb-2">
                        Includes connectivity, voice, security and cloud storage.
                      </p>
                      <span className="font-bold text-[#0078C8] block mb-2">R1,999/month</span>
                      <Button size="sm" className="w-full bg-[#0078C8] hover:bg-[#0069B4]">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Wifi className="h-10 w-10 text-[#0078C8]" />
                    <div>
                      <h3 className="font-medium">Business Fibre Pro</h3>
                      <p className="text-xs text-gray-500 mb-2">Enhanced connectivity package</p>
                      <p className="text-sm text-gray-600 mb-2">
                        200Mbps symmetrical fibre with static IP and priority support.
                      </p>
                      <span className="font-bold text-[#0078C8] block mb-2">R2,499/month</span>
                      <Button size="sm" className="w-full bg-[#0078C8] hover:bg-[#0069B4]">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-10 w-10 text-[#0078C8]" />
                    <div>
                      <h3 className="font-medium">Security Essentials</h3>
                      <p className="text-xs text-gray-500 mb-2">Basic security package</p>
                      <p className="text-sm text-gray-600 mb-2">
                        Firewall, antivirus, and data backup for small businesses.
                      </p>
                      <span className="font-bold text-[#0078C8] block mb-2">R599/month</span>
                      <Button size="sm" className="w-full bg-[#0078C8] hover:bg-[#0069B4]">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

