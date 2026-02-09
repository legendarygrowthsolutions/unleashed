"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/layout/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Concept", href: "#concept" },
    { name: "Features", href: "#features" },
    { name: "Membership", href: "#membership" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 items-center w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary">
                        <Image
                            src="/assets/Logo.png"
                            alt="The Woof & Whisker Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary">
                        The Woof & Whisker
                    </span>
                </Link>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:flex md:items-center md:space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <ModeToggle />
                    <Button variant="ghost" asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/register">Join Now</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden space-x-4">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b bg-background md:hidden"
                    >
                        <div className="grid gap-4 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="grid gap-2 border-t pt-4">
                                <Button variant="outline" className="w-full justify-center" asChild>
                                    <Link href="/login">Log in</Link>
                                </Button>
                                <Button className="w-full justify-center" asChild>
                                    <Link href="/register">Join Now</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
