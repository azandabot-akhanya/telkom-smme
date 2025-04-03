"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Plus, ChevronLeft, ChevronRight, Users, Video } from "lucide-react"
import { useState } from "react"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState("April 2025")

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex gap-2">
            <Select defaultValue="month">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#0078C8] hover:bg-[#0069B4]">
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
            <Badge className="bg-[#0078C8]">3 Today</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Business Strategy Review</h3>
                  <p className="text-xs text-gray-500">With Anathi Madiba</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Today</Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">10:00 AM - 11:00 AM</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Video className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">Virtual Meeting</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Team Check-in</h3>
                  <p className="text-xs text-gray-500">Weekly team meeting</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Today</Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">2:00 PM - 3:00 PM</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Video className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">Virtual Meeting</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Client Presentation</h3>
                  <p className="text-xs text-gray-500">Project proposal presentation</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Today</Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">4:00 PM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Users className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">In-person Meeting</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Marketing Plan Discussion</h3>
                  <p className="text-xs text-gray-500">With Anathi Madiba</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Tomorrow</Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">11:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Video className="h-4 w-4 text-[#0078C8]" />
                <span className="text-xs">Virtual Meeting</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">{currentMonth}</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium py-2">
                  {day}
                </div>
              ))}

              {/* Calendar days - first row */}
              {[null, 1, 2, 3, 4, 5, 6].map((day, i) => (
                <div
                  key={`week1-${i}`}
                  className={`min-h-[80px] p-1 border rounded-md ${!day ? "bg-gray-50" : "hover:bg-gray-50 cursor-pointer"}`}
                >
                  {day && (
                    <>
                      <div className="text-right text-sm">{day}</div>
                      {day === 3 && (
                        <div className="mt-1 p-1 text-xs bg-blue-100 text-blue-800 rounded">Team Meeting</div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Calendar days - second row */}
              {[7, 8, 9, 10, 11, 12, 13].map((day, i) => (
                <div
                  key={`week2-${i}`}
                  className={`min-h-[80px] p-1 border rounded-md hover:bg-gray-50 cursor-pointer`}
                >
                  <div className="text-right text-sm">{day}</div>
                  {day === 10 && (
                    <div className="mt-1 p-1 text-xs bg-green-100 text-green-800 rounded">Client Meeting</div>
                  )}
                </div>
              ))}

              {/* Calendar days - third row */}
              {[14, 15, 16, 17, 18, 19, 20].map((day, i) => (
                <div
                  key={`week3-${i}`}
                  className={`min-h-[80px] p-1 border rounded-md hover:bg-gray-50 cursor-pointer`}
                >
                  <div className="text-right text-sm">{day}</div>
                  {day === 15 && (
                    <div className="mt-1 p-1 text-xs bg-purple-100 text-purple-800 rounded">Networking Event</div>
                  )}
                </div>
              ))}

              {/* Calendar days - fourth row */}
              {[21, 22, 23, 24, 25, 26, 27].map((day, i) => (
                <div
                  key={`week4-${i}`}
                  className={`min-h-[80px] p-1 border rounded-md hover:bg-gray-50 cursor-pointer`}
                >
                  <div className="text-right text-sm">{day}</div>
                  {day === 22 && (
                    <div className="mt-1 p-1 text-xs bg-yellow-100 text-yellow-800 rounded">Tech Showcase</div>
                  )}
                </div>
              ))}

              {/* Calendar days - fifth row */}
              {[28, 29, 30, null, null, null, null].map((day, i) => (
                <div
                  key={`week5-${i}`}
                  className={`min-h-[80px] p-1 border rounded-md ${!day ? "bg-gray-50" : "hover:bg-gray-50 cursor-pointer"}`}
                >
                  {day && <div className="text-right text-sm">{day}</div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

