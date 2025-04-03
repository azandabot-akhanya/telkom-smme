import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { TelkomHeader } from "@/components/telkom-header"
import { TelkomFooter } from "@/components/telkom-footer"

export default function RegisterBusinessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TelkomHeader />

      <main className="flex-1 flex items-center justify-center p-4 bg-slate-50">
        <Card className="w-full max-w-[580px]">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">Business Registration</h2>
              <p className="text-xs text-right">
                <span className="text-red-500">*</span> - Requires Supporting Documentation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="idNumber">
                  ID Number <span className="text-red-500">*</span>
                </Label>
                <Input id="idNumber" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blackWomenOwnership">Black Women Ownership %</Label>
                <Input id="blackWomenOwnership" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tradingName">Trading Name</Label>
                <Input id="tradingName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabledOwnership">Does the company ownership include people with disabilities?</Label>
                <Input id="disabledOwnership" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessRegNumber">
                  Business Registration Number <span className="text-red-500">*</span>
                </Label>
                <Input id="businessRegNumber" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bbbeeLevel">B-BBEE Level</Label>
                <Input id="bbbeeLevel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessWebsite">Business Website Address</Label>
                <Input id="businessWebsite" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blackOwnership">Black Ownership %</Label>
                <Input id="blackOwnership" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vatNumber">
                  VAT Registration Number <span className="text-red-500">*</span>
                </Label>
                <Input id="vatNumber" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blackYouthOwnership">Black Youth Ownership</Label>
                <Input id="blackYouthOwnership" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registeredName">Registered Name Of Company</Label>
                <Input id="registeredName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bbbeeClassification">
                  B-BBEE Company Classification <span className="text-red-500">*</span>
                </Label>
                <Input id="bbbeeClassification" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Input id="companyAddress" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bbbeeAffidavit">
                  B-BBEE Certificate/ Affidavit <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Choose File
                  </Button>
                  <span className="text-xs text-gray-500 flex items-center">No file chosen</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Supporting Documents</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="idDocument" className="flex-1">
                    ID Document <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Choose File
                    </Button>
                    <span className="text-xs text-gray-500 flex items-center">No file chosen</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="companyDocument" className="flex-1">
                    Company Document <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Choose File
                    </Button>
                    <span className="text-xs text-gray-500 flex items-center">No file chosen</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="taxDocument" className="flex-1">
                    Tax Document <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Choose File
                    </Button>
                    <span className="text-xs text-gray-500 flex items-center">No file chosen</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="vatDocument" className="flex-1">
                    VAT Document <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Choose File
                    </Button>
                    <span className="text-xs text-gray-500 flex items-center">No file chosen</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild className="bg-[#0078C8] hover:bg-[#0069B4] px-8">
                <Link href="/business-assessment">Register Business Account</Link>
              </Button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0078C8] hover:underline">
                  Login
                </Link>
              </p>
              <p className="text-sm mt-2">
                Need to register a personal account?{" "}
                <Link href="/register" className="text-[#0078C8] hover:underline">
                  Personal Registration
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <TelkomFooter />
    </div>
  )
}

