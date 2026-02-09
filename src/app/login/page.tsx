import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/"
                className="absolute left-4 top-4 md:left-8 md:top-8 z-20 flex items-center text-sm font-medium text-primary hover:text-primary/80"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-zinc-900" />
                <Image
                    src="/assets/Hero.png"
                    alt="Dog Bar Atmosphere"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <div className="relative h-8 w-8 mr-2 overflow-hidden rounded-full border border-primary">
                        <Image
                            src="/assets/Logo.png"
                            alt="Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    The Woof & Whisker
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;The perfect place to unwind after a long day. My retriever, Cooper, pulls me to the door every time we walk by!&rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8 flex items-center justify-center p-4">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email to sign in to your account
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <form>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <Link
                                            href="/forgot-password"
                                            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" />
                                </div>
                                <Button>Sign In</Button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <Button variant="outline" type="button" disabled>
                            Google (Comming Soon)
                        </Button>
                    </div>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        <Link
                            href="/register"
                            className="hover:text-primary underline underline-offset-4"
                        >
                            Don&apos;t have an account? Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
