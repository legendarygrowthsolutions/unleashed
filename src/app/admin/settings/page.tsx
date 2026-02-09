import { Construction } from "lucide-react"

export default function PlaceholderPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
            <div className="p-4 bg-muted rounded-full">
                <Construction className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-muted-foreground max-w-md">
                This feature is currently under development. Check back later!
            </p>
        </div>
    )
}
