import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { TelkomHeader } from "@/components/telkom-header"
import { TelkomFooter } from "@/components/telkom-footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TelkomHeader />

      <main className="flex-1 flex items-center justify-center p-4 bg-slate-50">
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Business professionals working"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <Card className="w-full">
            <CardHeader className="space-y-1">
              <h2 className="text-2xl font-bold text-center">Login</h2>
              <p className="text-sm text-muted-foreground text-center">Enter your credentials to access your account</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-[#0078C8] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button asChild className="w-full bg-[#0078C8] hover:bg-[#0069B4]">
                <Link href="/dashboard">Login</Link>
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-[#0078C8] hover:underline">
                  Register
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <TelkomFooter />
    </div>
  )
}

