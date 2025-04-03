import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TelkomHeader } from "@/components/telkom-header"
import { TelkomFooter } from "@/components/telkom-footer"

export default function BusinessHealthCheckPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TelkomHeader />

      <main className="flex-1 flex flex-col bg-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h1 className="text-2xl font-bold mb-2">Business Health Check</h1>
              <p className="text-sm mb-6">
                Before you can proceed, please complete the registration form to assess the health of your business.
              </p>
              <div>
                <Button asChild className="bg-[#0078C8] hover:bg-[#0069B4] px-8">
                  <Link href="/business-assessment/swot">Begin Registration</Link>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-[300px] md:h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-white/80 rounded-lg">
                    <h2 className="text-xl font-bold text-green-700 mb-2">Small Business Accounting Checklist</h2>
                    <p className="text-sm text-gray-600">
                      Complete our assessment to get personalized recommendations for your business.
                    </p>
                  </div>
                </div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Business documents with glasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <TelkomFooter />
    </div>
  )
}

