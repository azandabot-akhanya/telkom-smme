import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function HealthAssessmentPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Business Health Assessment</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-40 h-40 mx-auto mb-4">
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
              <p className="text-center text-sm text-gray-500">
                Your business is performing well but has room for improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">SWOT Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Strengths</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" indicatorColor="bg-green-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Weaknesses</span>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2" indicatorColor="bg-red-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Opportunities</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" indicatorColor="bg-blue-500" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Threats</span>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <Progress value={45} className="h-2" indicatorColor="bg-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Business Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Documentation</span>
                  <span className="text-sm font-medium">70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Process Review</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Improvement Methods</span>
                  <span className="text-sm font-medium">55%</span>
                </div>
                <Progress value={55} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Communication</span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Marketing & Sales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Advertising</span>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Social Media</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Campaigns</span>
                  <span className="text-sm font-medium">50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Pricing Strategy</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md">
                <h3 className="font-medium mb-1">Improve Marketing Campaigns</h3>
                <p className="text-sm text-gray-600">
                  Develop a more structured approach to marketing campaigns with clear goals and metrics.
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-md">
                <h3 className="font-medium mb-1">Document Business Processes</h3>
                <p className="text-sm text-gray-600">
                  Enhance documentation of key business processes to improve consistency and training.
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-md">
                <h3 className="font-medium mb-1">Address Identified Threats</h3>
                <p className="text-sm text-gray-600">
                  Develop mitigation strategies for the key threats identified in your SWOT analysis.
                </p>
              </div>
              <Button className="w-full bg-[#0078C8] hover:bg-[#0069B4]">View Full Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

