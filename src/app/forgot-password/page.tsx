import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
    return (
        <div className="container relative min-h-screen flex items-center justify-center py-10">
            <Link
                href="/login"
                className="absolute left-4 top-4 md:left-8 md:top-8 z-20 flex items-center text-sm font-medium text-primary hover:text-primary/80"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
            </Link>
            <Card className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Reset Password</CardTitle>
                    <CardDescription>
                        Enter your email address and we&apos;ll send you a link to reset your password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <Button className="w-full">
                            Send Reset Link
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="text-sm text-muted-foreground w-full text-center">
                        Remember your password?{" "}
                        <Link href="/login" className="underline hover:text-primary">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
