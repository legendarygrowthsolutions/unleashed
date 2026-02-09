"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, CheckCircle2, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const myDogs = [
    {
        id: 1,
        name: "Buddy",
        breed: "Golden Retriever",
        age: 3,
        status: "Active",
        image: "/assets/dog1.png", // Fallback will be used
        vaccines: "Up to date",
    },
    {
        id: 2,
        name: "Luna",
        breed: "French Bulldog",
        age: 2,
        status: "Pending Review",
        image: "/assets/dog2.png", // Fallback will be used
        vaccines: "Expiring soon",
    },
]

export default function MyDogsPage() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">My Dogs</h1>
                <Button asChild>
                    <Link href="/dashboard/dogs/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Dog
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myDogs.map((dog) => (
                    <Card key={dog.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4 bg-secondary/10 pb-4">
                            <Avatar className="h-16 w-16 border-2 border-background">
                                <AvatarImage src={dog.image} alt={dog.name} />
                                <AvatarFallback className="text-lg bg-primary/20 text-primary font-bold">
                                    {dog.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <CardTitle>{dog.name}</CardTitle>
                                <div className="text-sm text-muted-foreground">{dog.breed}, {dog.age}y</div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Membership Status</span>
                                <Badge variant={dog.status === "Active" ? "default" : "secondary"}>
                                    {dog.status}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Vaccinations</span>
                                <div className="flex items-center text-sm">
                                    {dog.vaccines === "Up to date" ? (
                                        <span className="flex items-center text-green-600 dark:text-green-400">
                                            <CheckCircle2 className="mr-1 h-4 w-4" />
                                            Valid
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-amber-600 dark:text-amber-400">
                                            <AlertCircle className="mr-1 h-4 w-4" />
                                            Check
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href={`/dashboard/dogs/${dog.id}`}>Manage Profile</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* Empty state or Add New Card */}
                <Link href="/dashboard/dogs/new" className="block">
                    <Card className="flex flex-col items-center justify-center border-dashed p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer h-full">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                            <Plus className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold text-lg">Register Another Dog</h3>
                        <p className="text-sm text-muted-foreground mt-1">Add a new pup to your pack</p>
                    </Card>
                </Link>
            </div>
        </div>
    )
}
