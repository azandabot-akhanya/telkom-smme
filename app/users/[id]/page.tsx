import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, Building, MapPin } from "lucide-react"

export default function UserDetailPage({ params }: { params: { id: string } }) {
  // Sample user data
  const user = {
    id: params.id,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    phone: "+1 (555) 123-4567",
    company: "Acme Inc.",
    address: "123 Business St, New York, NY 10001",
    joinDate: "Jan 15, 2023",
  }

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/users">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">User Profile</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Card className="w-full lg:w-80">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="User avatar"
                    fill
                    className="rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>
              </div>
              <CardTitle>{user.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{user.role}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.address}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <Button variant="outline" className="flex-1">
                  Message
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Edit</Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex-1">
            <Tabs defaultValue="activity">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Logged in",
                        "Updated document #123",
                        "Approved document #456",
                        "Added new user Jane Smith",
                        "Updated profile information",
                        "Rejected document #789",
                      ].map((activity, i) => (
                        <div key={i} className="flex gap-4 pb-4 border-b">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-medium">{activity}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(Date.now() - i * 3600000).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>User Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex justify-between items-center pb-4 border-b">
                          <div>
                            <p className="font-medium">Document #{1000 + i}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                            </p>
                          </div>
                          <Link href={`/documents/${i + 1}`} className="text-blue-600 hover:underline">
                            View
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>User Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="font-medium">Account Status</p>
                          <p className="text-sm text-muted-foreground">User can log in and access the system</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.status}
                          </span>
                          <Button variant="outline" size="sm">
                            Change
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="font-medium">Role</p>
                          <p className="text-sm text-muted-foreground">User's permission level in the system</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{user.role}</span>
                          <Button variant="outline" size="sm">
                            Change
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Additional security for account login</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enable
                        </Button>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="font-medium">Password Reset</p>
                          <p className="text-sm text-muted-foreground">Send password reset email to user</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

