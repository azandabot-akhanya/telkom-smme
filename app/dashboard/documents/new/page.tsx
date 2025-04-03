import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from "lucide-react"

export default function NewDocumentPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/documents">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Upload New Document</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Document Title</Label>
              <Input id="title" placeholder="Enter document title" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Document Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business Document</SelectItem>
                  <SelectItem value="compliance">Compliance Document</SelectItem>
                  <SelectItem value="financial">Financial Document</SelectItem>
                  <SelectItem value="legal">Legal Document</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="registration">Company Registration</SelectItem>
                  <SelectItem value="tax">Tax Documents</SelectItem>
                  <SelectItem value="financial">Financial Statements</SelectItem>
                  <SelectItem value="bbbee">B-BBEE Documents</SelectItem>
                  <SelectItem value="business">Business Plans</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter document description" rows={4} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assignee">Assign To</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="mark">Mark Johnson</SelectItem>
                  <SelectItem value="none">No Assignment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Upload Document</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium">Drag and drop your file here</p>
                <p className="text-xs text-muted-foreground mb-4">Supports PDF, DOCX, JPG, PNG (max 10MB)</p>
                <Button variant="outline" size="sm">
                  Browse Files
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" asChild>
              <Link href="/dashboard/documents">Cancel</Link>
            </Button>
            <Button className="bg-[#0078C8] hover:bg-[#0069B4]" asChild>
              <Link href="/dashboard/documents">Upload Document</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

