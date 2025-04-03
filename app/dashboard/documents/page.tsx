import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Download, Plus, FileText, FilePlus } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Documents</h1>
          <Button asChild className="bg-[#0078C8] hover:bg-[#0069B4]">
            <Link href="/dashboard/documents/new">
              <Plus className="mr-2 h-4 w-4" />
              Upload Document
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList className="bg-slate-100">
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
            </TabsList>

            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search documents..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date Uploaded</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Company Registration", category: "Business", date: "15 Mar 2025", status: "Verified" },
                      { name: "VAT Certificate", category: "Compliance", date: "15 Mar 2025", status: "Verified" },
                      { name: "B-BBEE Certificate", category: "Compliance", date: "15 Mar 2025", status: "Pending" },
                      { name: "Business Plan", category: "Business", date: "10 Mar 2025", status: "Verified" },
                      {
                        name: "Financial Statement 2024",
                        category: "Financial",
                        date: "05 Mar 2025",
                        status: "Verified",
                      },
                      { name: "Tax Clearance", category: "Compliance", date: "01 Mar 2025", status: "Expired" },
                      { name: "Business Proposal", category: "Business", date: "25 Feb 2025", status: "Draft" },
                      { name: "ID Document", category: "Personal", date: "20 Feb 2025", status: "Verified" },
                    ].map((doc, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-[#0078C8]" />
                            <span className="font-medium">{doc.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{doc.category}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              doc.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : doc.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.status === "Expired"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-slate-100 text-slate-800"
                            }
                          >
                            {doc.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/dashboard/documents/${i + 1}`}>View</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Company Registration", date: "15 Mar 2025", status: "Verified" },
                    { name: "Business Plan", date: "10 Mar 2025", status: "Verified" },
                    { name: "Business Proposal", date: "25 Feb 2025", status: "Draft" },
                  ].map((doc, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="bg-slate-100 p-6 flex justify-center">
                        <FileText className="h-12 w-12 text-[#0078C8]" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{doc.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">{doc.date}</span>
                          <Badge
                            className={
                              doc.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : doc.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.status === "Expired"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-slate-100 text-slate-800"
                            }
                          >
                            {doc.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-3 w-3 mr-1" /> Download
                          </Button>
                          <Button size="sm" className="flex-1 bg-[#0078C8] hover:bg-[#0069B4]" asChild>
                            <Link href={`/dashboard/documents/${i + 1}`}>View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Card className="overflow-hidden border-dashed">
                    <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                      <FilePlus className="h-12 w-12 text-gray-400 mb-2" />
                      <h3 className="font-medium text-gray-600">Upload New Document</h3>
                      <p className="text-xs text-gray-500 mb-4">Add a new business document</p>
                      <Button asChild className="bg-[#0078C8] hover:bg-[#0069B4]">
                        <Link href="/dashboard/documents/new">Upload</Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "VAT Certificate", date: "15 Mar 2025", status: "Verified" },
                    { name: "B-BBEE Certificate", date: "15 Mar 2025", status: "Pending" },
                    { name: "Tax Clearance", date: "01 Mar 2025", status: "Expired" },
                  ].map((doc, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="bg-slate-100 p-6 flex justify-center">
                        <FileText className="h-12 w-12 text-[#0078C8]" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{doc.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">{doc.date}</span>
                          <Badge
                            className={
                              doc.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : doc.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.status === "Expired"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-slate-100 text-slate-800"
                            }
                          >
                            {doc.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-3 w-3 mr-1" /> Download
                          </Button>
                          <Button size="sm" className="flex-1 bg-[#0078C8] hover:bg-[#0069B4]" asChild>
                            <Link href={`/dashboard/documents/${i + 10}`}>View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[{ name: "Financial Statement 2024", date: "05 Mar 2025", status: "Verified" }].map((doc, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="bg-slate-100 p-6 flex justify-center">
                        <FileText className="h-12 w-12 text-[#0078C8]" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{doc.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">{doc.date}</span>
                          <Badge
                            className={
                              doc.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : doc.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.status === "Expired"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-slate-100 text-slate-800"
                            }
                          >
                            {doc.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-3 w-3 mr-1" /> Download
                          </Button>
                          <Button size="sm" className="flex-1 bg-[#0078C8] hover:bg-[#0069B4]" asChild>
                            <Link href={`/dashboard/documents/${i + 20}`}>View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

