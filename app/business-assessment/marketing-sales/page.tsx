import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function MarketingAndSalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex bg-white">
        <div className="w-1/4 bg-[#0078C8] text-white p-6">
          <div className="mb-12 flex justify-center">
            <h1 className="text-2xl font-bold">Telkom</h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center font-bold">
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
              <div className="w-8 h-8 rounded-full bg-white text-[#0078C8] flex items-center justify-center font-bold">
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
              <h1 className="text-2xl font-bold">Marketing & Sales</h1>
              <p className="text-sm text-gray-500">Please capture key Marketing & Sales Details</p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Does the company advertise? <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, a great extent</SelectItem>
                    <SelectItem value="somewhat">To a certain extent</SelectItem>
                    <SelectItem value="no">Not at all</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Assessor Comment" className="h-24" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Does your company use social media platforms for marketing?
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, a great extent</SelectItem>
                    <SelectItem value="somewhat">To a certain extent</SelectItem>
                    <SelectItem value="no">Not at all</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Assessor Comment" className="h-24" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  How often does the company conduct sales or marketing campaigns?
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Assessor Comment" className="h-24" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Is data used when the company sets pricing strategies?
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, a great extent</SelectItem>
                    <SelectItem value="somewhat">To a certain extent</SelectItem>
                    <SelectItem value="no">Not at all</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Assessor Comment" className="h-24" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium">What most described your pricing strategy?</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium pricing</SelectItem>
                    <SelectItem value="competitive">Competitive pricing</SelectItem>
                    <SelectItem value="economy">Economy pricing</SelectItem>
                    <SelectItem value="penetration">Penetration pricing</SelectItem>
                    <SelectItem value="skimming">Price skimming</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Assessor Comment" className="h-24" />
              </div>
            </div>

            <div className="flex justify-between">
              <Button asChild variant="outline" className="px-8">
                <Link href="/business-assessment/process-management">Previous</Link>
              </Button>

              <Button asChild className="bg-[#0078C8] hover:bg-[#0069B4] px-8">
                <Link href="/business-assessment/success">Next</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

