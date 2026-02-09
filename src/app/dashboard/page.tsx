import Link from "next/link"
import { Plus, Check, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Welcome, Alex!</h2>
                <Button asChild>
                    <Link href="/dashboard/dogs/new">
                        <Plus className="mr-2 h-4 w-4" /> Add Dog
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>My Dogs</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <h3 className="font-semibold">Cooper</h3>
                                <p className="text-sm text-muted-foreground">Golden Retriever • 3 yrs</p>
                            </div>
                            <div className="flex items-center text-green-600 text-sm font-medium">
                                <Check className="h-4 w-4 mr-1" /> Ready to Play
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                                <h3 className="font-semibold">Sparky</h3>
                                <p className="text-sm text-muted-foreground">Pug • 7 mos</p>
                            </div>
                            <div className="flex items-center text-amber-600 text-sm font-medium">
                                <AlertTriangle className="h-4 w-4 mr-1" /> Vaccine Expiring
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Membership Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Current Plan</p>
                            <p className="text-2xl font-bold text-primary">Monthly Member</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Renews On</p>
                            <p className="text-lg">Aug 15, 2026</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">Manage Subscription</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="pb-4 border-b last:border-0 last:pb-0">
                                <p className="font-medium">Golden Retriever Meetup</p>
                                <p className="text-sm text-muted-foreground">Sat, Aug 12 • 2:00 PM</p>
                            </div>
                            <div className="pb-4 border-b last:border-0 last:pb-0">
                                <p className="font-medium">Yappy Hour</p>
                                <p className="text-sm text-muted-foreground">Fri, Aug 18 • 5:00 PM</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
