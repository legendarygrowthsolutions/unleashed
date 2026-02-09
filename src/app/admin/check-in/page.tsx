import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Search } from "lucide-react"

export default function CheckInPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">Member Check-In</h1>
                <p className="text-muted-foreground">Scan QR code or search for member to check them in.</p>
            </div>

            <Card className="w-full">
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px] border-dashed border-2 rounded-xl bg-muted/20">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <QrCode className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg font-medium">Ready to Scan</p>
                    <p className="text-sm text-muted-foreground mt-2">Waiting for camera input...</p>
                    <Button className="mt-6" variant="secondary">
                        Use Manual Search Instead
                    </Button>
                </CardContent>
            </Card>

            <div className="w-full relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or search manually
                    </span>
                </div>
            </div>

            <div className="flex w-full space-x-2">
                <Input placeholder="Search member name, email or dog..." />
                <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </div>
        </div>
    )
}
