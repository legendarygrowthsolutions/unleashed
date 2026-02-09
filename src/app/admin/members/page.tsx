import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter, MoreHorizontal } from "lucide-react"

const members = [
    { id: "1", name: "Alice Johnson", dog: "Cooper", breed: "Golden Retriever", status: "Active", vaccine: "Up to date" },
    { id: "2", name: "Bob Smith", dog: "Luna", breed: "Husky", status: "Active", vaccine: "Expiring Soon" },
    { id: "3", name: "Charlie Brown", dog: "Snoopy", breed: "Beagle", status: "Inactive", vaccine: "Expired" },
    { id: "4", name: "Diana Prince", dog: "Ace", breed: "German Shepherd", status: "Pending", vaccine: "Review Needed" },
]

export default function MembersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Members</h2>
                    <p className="text-muted-foreground">Manage members and their furry friends.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/members/new">Add New Member</Link>
                </Button>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search members or dogs..."
                        className="pl-8"
                    />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                        Member
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                        Dog
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                        Breed
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                        Status
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                        Vaccine Status
                                    </th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {members.map((member) => (
                                    <tr key={member.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle font-medium">{member.name}</td>
                                        <td className="p-4 align-middle">{member.dog}</td>
                                        <td className="p-4 align-middle">{member.breed}</td>
                                        <td className="p-4 align-middle">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${member.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                                                member.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" :
                                                    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                                                }`}>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="p-4 align-middle">
                                            <span className={`text-xs ${member.vaccine === "Up to date" ? "text-green-600" :
                                                member.vaccine === "Review Needed" ? "text-amber-600 font-bold" :
                                                    "text-destructive"
                                                }`}>
                                                {member.vaccine}
                                            </span>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
