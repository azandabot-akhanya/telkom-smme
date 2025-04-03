import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TelkomHeader } from "@/components/telkom-header"
import { TelkomFooter } from "@/components/telkom-footer"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TelkomHeader />

      <main className="flex-1 flex items-center justify-center p-4 bg-slate-50">
        <Card className="w-full max-w-[580px]">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Register</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username (Your email address)</Label>
                <Input id="username" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmUsername">Confirm Username</Label>
                <Input id="confirmUsername" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surname">Surname</Label>
                <Input id="surname" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idType">ID Type</Label>
                <Select>
                  <SelectTrigger id="idType">
                    <SelectValue placeholder="Select ID Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sa-id">South African ID</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="drivers">Driver's License</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">ID/Passport Number</Label>
                <Input id="idNumber" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs">✓</div>
                <span className="text-sm">8 Characters Long</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs">✓</div>
                <span className="text-sm">One Uppercase Letter</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs">✓</div>
                <span className="text-sm">One Lowercase Letter</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs">✓</div>
                <span className="text-sm">One Number</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                You need to accept our terms and conditions to continue, then also select the option below if you'd like
                to be notified about the latest offers from Telkom.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-[#0078C8] hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-[#0078C8] hover:underline">
                      Privacy Policy Statement
                    </Link>
                  </label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="marketing" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="marketing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Receive the latest offers from Telkom
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-[#0078C8] hover:bg-[#0069B4] px-8">Register Account</Button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0078C8] hover:underline">
                  Login
                </Link>
              </p>
              <p className="text-sm mt-2">
                Need to register a business?{" "}
                <Link href="/register-business" className="text-[#0078C8] hover:underline">
                  Business Registration
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

