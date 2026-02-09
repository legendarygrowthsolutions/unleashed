import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        name: "Sarah & Buster",
        role: "Golden Retriever Owner",
        content: "The best place in town! Buster gets his energy out, and I get to enjoy a great IPA. The staff is amazing.",
        rating: 5,
        initials: "SB",
    },
    {
        name: "Mike & Luna",
        role: "Husky Dad",
        content: "I was worried about Luna playing with other dogs, but the 'Rufferees' are so attentive. We feel totally safe here.",
        rating: 5,
        initials: "ML",
    },
    {
        name: "Emily & Cocoa",
        role: "Monthly Member",
        content: "The membership pays for itself in just two visits. We come here every Saturday for the community events!",
        rating: 5,
        initials: "EC",
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Paws Up from Our Pack
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take our word for it—hear what the humans (and their pups) have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-secondary/10 border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar>
                                    <AvatarFallback className="bg-primary/20 text-primary font-bold">
                                        {t.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold">{t.name}</h4>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex text-amber-500">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic">"{t.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
