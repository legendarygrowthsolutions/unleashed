"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Users, QrCode, Settings, LogOut, LayoutDashboard } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Members", href: "/admin/members", icon: Users },
    { name: "Check-In", href: "/admin/check-in", icon: QrCode },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex flex-col h-screen w-64 border-r bg-card">
            <div className="p-6 border-b">
                <h1 className="text-xl font-bold tracking-tight text-primary">
                    Admin Portal
                </h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {sidebarItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>
            <div className="p-4 border-t">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive" asChild>
                    <Link href="/login">
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                    </Link>
                </Button>
            </div>
        </div>
    )
}
