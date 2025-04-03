import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Printer, Share2, FileText } from "lucide-react"

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  // Determine document details based on ID
  const documentId = Number.parseInt(params.id)
  let documentDetails = {
    name: "Document",
    category: "Business",
    date: new Date().toLocaleDateString(),
    status: "Verified",
    type: "PDF",
  }

  if (documentId <= 10) {
    documentDetails = {
      name:
        documentId <= 3
          ? ["Company Registration", "Business Plan", "Business Proposal"][documentId - 1]
          : "Business Document",
      category: "Business",
      date: "15 Mar 2025",
      status: documentId === 3 ? "Draft" : "Verified",
      type: "PDF",
    }
  } else if (documentId <= 20) {
    documentDetails = {
      name: ["VAT Certificate", "B-BBEE Certificate", "Tax Clearance"][(documentId - 11) % 3],
      category: "Compliance",
      date: "15 Mar 2025",
      status: documentId === 12 ? "Pending" : documentId === 13 ? "Expired" : "Verified",
      type: "PDF",
    }
  } else {
    documentDetails = {
      name: "Financial Statement 2024",
      category: "Financial",
      date: "05 Mar 2025",
      status: "Verified",
      type: "PDF",
    }
  }

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/documents">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{documentDetails.name}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Document Preview</CardTitle>
                <CardDescription>{documentDetails.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center border rounded-lg p-4 bg-white">
                  <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-100">
                    <FileText className="h-24 w-24 text-gray-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=600&width=400"
                        alt="Document preview"
                        width={400}
                        height={600}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-96">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardContent className="pt-6">
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Document ID</dt>
                        <dd className="text-sm">DOC-{1000 + documentId}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Document Type</dt>
                        <dd className="text-sm">{documentDetails.type}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Category</dt>
                        <dd className="text-sm">{documentDetails.category}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Created Date</dt>
                        <dd className="text-sm">{documentDetails.date}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Last Updated</dt>
                        <dd className="text-sm">{documentDetails.date}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                        <dd className="text-sm">
                          <Badge
                            className={
                              documentDetails.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : documentDetails.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : documentDetails.status === "Expired"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-slate-100 text-slate-800"
                            }
                          >
                            {documentDetails.status}
                          </Badge>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Created By</dt>
                        <dd className="text-sm">John Doe</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Assigned To</dt>
                        <dd className="text-sm">Jane Smith</dd>
                      </div>
                    </dl>
                    {documentDetails.status === "Pending" && (
                      <div className="flex gap-2 mt-6">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">Approve</Button>
                        <Button className="flex-1 bg-red-600 hover:bg-red-700">Reject</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {[
                        "Document created by John Doe",
                        "Document assigned to Jane Smith",
                        "Document reviewed by Mark Johnson",
                        "Document updated by Jane Smith",
                        documentDetails.status === "Verified"
                          ? "Document verified by Admin"
                          : documentDetails.status === "Pending"
                            ? "Waiting for approval"
                            : "Document status updated",
                      ].map((activity, i) => (
                        <div key={i} className="flex gap-4 pb-4 border-b">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-medium">{activity}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
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

