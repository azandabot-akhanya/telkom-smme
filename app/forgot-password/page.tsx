import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Business Portal</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 bg-slate-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <h2 className="text-2xl font-bold text-center">Reset Password</h2>
            <p className="text-sm text-muted-foreground text-center">
              Enter your email to receive a password reset link
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Reset Link</Button>
            <div className="text-center text-sm">
              <Link href="/login" className="text-blue-600 hover:underline">
                Back to Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

