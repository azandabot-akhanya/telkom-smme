import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Book, FileText, Video, HelpCircle, ExternalLink } from "lucide-react"

export default function KnowledgeBasePage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Do you know how</h1>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search knowledge base..." className="pl-8 w-full" />
          </div>
        </div>

        <Card className="bg-gradient-to-r from-[#0078C8] to-[#0069B4] text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold mb-2">Welcome to the Knowledge Base</h2>
                <p className="text-white/80 mb-4">
                  Find guides, tutorials, and resources to help you manage and grow your business. Browse by category or
                  search for specific topics.
                </p>
                <div className="flex gap-2">
                  <Button className="bg-white text-[#0078C8] hover:bg-white/90">
                    <Book className="mr-2 h-4 w-4" />
                    Browse Guides
                  </Button>
                  <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Tutorials
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <HelpCircle className="h-24 w-24 text-white/80" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="popular">
          <TabsList className="bg-slate-100 mb-4">
            <TabsTrigger value="popular">Popular Topics</TabsTrigger>
            <TabsTrigger value="business">Business Management</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="tech">Technology</TabsTrigger>
          </TabsList>

          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "How to Create a Business Plan",
                  category: "Business Management",
                  type: "Guide",
                  icon: FileText,
                  description: "A step-by-step guide to creating an effective business plan for your company.",
                },
                {
                  title: "Understanding Cash Flow",
                  category: "Finance",
                  type: "Tutorial",
                  icon: Video,
                  description: "Learn the basics of cash flow management and why it's crucial for your business.",
                },
                {
                  title: "Digital Marketing Basics",
                  category: "Marketing",
                  type: "Guide",
                  icon: FileText,
                  description: "An introduction to digital marketing strategies for small businesses.",
                },
                {
                  title: "Setting Up Your Business Email",
                  category: "Technology",
                  type: "Tutorial",
                  icon: Video,
                  description: "A tutorial on how to set up and manage professional email for your business.",
                },
                {
                  title: "Tax Compliance for SMEs",
                  category: "Finance",
                  type: "Guide",
                  icon: FileText,
                  description: "Essential information about tax compliance requirements for small businesses.",
                },
                {
                  title: "Social Media Marketing",
                  category: "Marketing",
                  type: "Tutorial",
                  icon: Video,
                  description: "Learn how to effectively use social media platforms to market your business.",
                },
              ].map((resource, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-blue-100 p-2 rounded-md">
                          <resource.icon className="h-5 w-5 text-[#0078C8]" />
                        </div>
                        <div>
                          <h3 className="font-medium">{resource.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">{resource.category}</span>
                            <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">{resource.type}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Resource <ExternalLink className="ml-2 h-3 w-3" />
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
            <CardTitle className="text-lg">Recently Viewed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border rounded-md">
                <Video className="h-5 w-5 text-[#0078C8]" />
                <div>
                  <h3 className="font-medium">How to Apply for Business Funding</h3>
                  <p className="text-xs text-gray-500 mt-1">Finance • Tutorial</p>
                  <p className="text-sm text-gray-600 mt-1">
                    A comprehensive guide to preparing and submitting successful funding applications.
                  </p>
                  <Button variant="link" size="sm" className="p-0 h-auto mt-1 text-[#0078C8]">
                    Continue watching
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-md">
                <FileText className="h-5 w-5 text-[#0078C8]" />
                <div>
                  <h3 className="font-medium">Marketing Strategy Template</h3>
                  <p className="text-xs text-gray-500 mt-1">Marketing • Guide</p>
                  <p className="text-sm text-gray-600 mt-1">
                    A downloadable template to help you create an effective marketing strategy.
                  </p>
                  <Button variant="link" size="sm" className="p-0 h-auto mt-1 text-[#0078C8]">
                    Continue reading
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

