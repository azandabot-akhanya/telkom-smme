import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function OrganisationSwotPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex bg-white">
        <div className="w-1/4 bg-[#0078C8] text-white p-6">
          <div className="mb-12 flex justify-center">
            <h1 className="text-2xl font-bold">Telkom</h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-[#0078C8] flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h2 className="font-medium">Organisation SWOT</h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h2 className="font-medium">Business Process Management</h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h2 className="font-medium">Marketing and Sales</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Organisation SWOT</h1>
              <p className="text-sm text-gray-500">
                Organisation SWOT - Strengths, Weaknesses, Opportunities & Threats Analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  3 Strengths of Your Company <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Strength 1" className="mb-2" />
                <Input placeholder="Strength 2" className="mb-2" />
                <Input placeholder="Strength 3" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  3 Potential Opportunities of Your Company <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Opportunity 1" className="mb-2" />
                <Input placeholder="Opportunity 2" className="mb-2" />
                <Input placeholder="Opportunity 3" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  3 Weaknesses of Your Company <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Weakness 1" className="mb-2" />
                <Input placeholder="Weakness 2" className="mb-2" />
                <Input placeholder="Weakness 3" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  3 Potential Threats of Your Company <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Threat 1" className="mb-2" />
                <Input placeholder="Threat 2" className="mb-2" />
                <Input placeholder="Threat 3" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button asChild className="bg-[#0078C8] hover:bg-[#0069B4] px-8">
                <Link href="/business-assessment/process-management">Next</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

