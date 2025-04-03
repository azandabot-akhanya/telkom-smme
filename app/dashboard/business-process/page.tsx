import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, ArrowRight, FileText, Settings, Users, BarChart2 } from "lucide-react"

export default function BusinessProcessPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Business Process Management</h1>
          <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
            <Settings className="mr-2 h-4 w-4" />
            Configure Processes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Process Maturity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold">65</span>
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
                    strokeDashoffset="99"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-gray-500">Your business processes are developing well</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Process Documentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Core Processes</span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <Progress value={80} className="h-2" indicatorColor="bg-green-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Support Processes</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" indicatorColor="bg-blue-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Management Processes</span>
                  <span className="text-sm font-medium">50%</span>
                </div>
                <Progress value={50} className="h-2" indicatorColor="bg-yellow-500" />
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Documentation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Process Improvement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
                <span className="text-sm font-medium">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">In Progress</span>
                </div>
                <span className="text-sm font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Not Started</span>
                </div>
                <span className="text-sm font-medium">2</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Improvements
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="core">
          <TabsList className="bg-slate-100 mb-4">
            <TabsTrigger value="core">Core Processes</TabsTrigger>
            <TabsTrigger value="support">Support Processes</TabsTrigger>
            <TabsTrigger value="management">Management Processes</TabsTrigger>
          </TabsList>

          <TabsContent value="core">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sales Process", status: "Optimized", icon: BarChart2, color: "bg-green-100" },
                { name: "Product Development", status: "Managed", icon: Settings, color: "bg-blue-100" },
                { name: "Customer Service", status: "Defined", icon: Users, color: "bg-yellow-100" },
                { name: "Order Fulfillment", status: "Managed", icon: FileText, color: "bg-blue-100" },
              ].map((process, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className={`${process.color} p-6 flex justify-center`}>
                    <process.icon className="h-12 w-12 text-[#0078C8]" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{process.name}</h3>
                      <Badge
                        className={
                          process.status === "Optimized"
                            ? "bg-green-100 text-green-800"
                            : process.status === "Managed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {process.status}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        View Process <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Human Resources", status: "Defined", icon: Users, color: "bg-yellow-100" },
                { name: "IT Support", status: "Managed", icon: Settings, color: "bg-blue-100" },
                { name: "Financial Management", status: "Defined", icon: BarChart2, color: "bg-yellow-100" },
              ].map((process, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className={`${process.color} p-6 flex justify-center`}>
                    <process.icon className="h-12 w-12 text-[#0078C8]" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{process.name}</h3>
                      <Badge
                        className={
                          process.status === "Optimized"
                            ? "bg-green-100 text-green-800"
                            : process.status === "Managed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {process.status}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        View Process <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="management">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Strategic Planning", status: "Defined", icon: BarChart2, color: "bg-yellow-100" },
                { name: "Performance Management", status: "Initial", icon: Settings, color: "bg-red-100" },
              ].map((process, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className={`${process.color} p-6 flex justify-center`}>
                    <process.icon className="h-12 w-12 text-[#0078C8]" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{process.name}</h3>
                      <Badge
                        className={
                          process.status === "Optimized"
                            ? "bg-green-100 text-green-800"
                            : process.status === "Managed"
                              ? "bg-blue-100 text-blue-800"
                              : process.status === "Defined"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                        }
                      >
                        {process.status}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        View Process <ArrowRight className="ml-2 h-3 w-3" />
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

