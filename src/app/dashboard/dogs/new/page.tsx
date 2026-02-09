import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadCloud } from "lucide-react"

export default function AddDogPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Register a New Dog</h2>
                <p className="text-muted-foreground">Add your pup's details and vaccination records.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Dog Information</CardTitle>
                    <CardDescription>Tell us about your furry friend.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Rx. Cooper" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="breed">Breed</Label>
                            <Input id="breed" placeholder="Ex. Golden Retriever" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Input id="dob" type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="weight">Weight (lbs)</Label>
                            <Input id="weight" type="number" placeholder="65" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Vaccination Records</CardTitle>
                    <CardDescription>Upload proof of Rabies, DHPP, and Bordetella.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="mx-auto h-12 w-12 text-muted-foreground mb-4">
                            <UploadCloud className="h-full w-full" />
                        </div>
                        <h3 className="text-lg font-semibold">Drag & drop files or Browse</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Recommended: Clear photo or PDF of vet records.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Rabies Expiration</Label>
                            <Input type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label>DHPP Expiration</Label>
                            <Input type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label>Bordetella Expiration</Label>
                            <Input type="date" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button>Complete Registration</Button>
            </div>
        </div>
    )
}
