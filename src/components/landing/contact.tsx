import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
    return (
        <section className="py-24 bg-background border-t">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Have a question about an event or private rental? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Visit Us</h4>
                                    <p className="text-muted-foreground">123 Wagging Tail Blvd, Bark City, CA 90210</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Call Us</h4>
                                    <p className="text-muted-foreground">(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email Us</h4>
                                    <p className="text-muted-foreground">woof@woofandwhisker.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card text-card-foreground shadow-sm p-8">
                        <form className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                            </div>
                            <Button className="w-full text-lg py-6">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
