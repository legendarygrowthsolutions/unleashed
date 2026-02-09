import Image from "next/image"
import { CheckCircle2, Heart, ShieldCheck, Bone } from "lucide-react"

const benefits = [
    {
        title: "Premium Nutrition",
        description: "Our menu features locally sourced, high-quality dog treats and meals. No fillers, just the good stuff.",
        icon: Bone,
    },
    {
        title: "Curated Toys",
        description: "From tough chewers to gentle squeakers, we have a rotating selection of the best toys on the market.",
        icon: Heart,
    },
    {
        title: "Safe Environment",
        description: "Every dog is temperment tested and vaccination verified. Our 'Rufferees' ensure safe play for everyone.",
        icon: ShieldCheck,
    },
]

export function Benefits() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
                        <div className="relative rounded-3xl overflow-hidden border-8 border-white dark:border-zinc-800 shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500">
                            {/* Using Barshot.png as placeholder for Dogshot.png since Dogshot was not found */}
                            <Image
                                src="/assets/Hero.png"
                                alt="Happy dog enjoying the bar"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-lg rotate-12 animate-wiggle">
                            <span className="text-4xl">🦴</span>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Only the Best for Your <span className="text-primary italic">Best Friend</span>
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                We believe dogs deserve the same quality of experience as humans. That's why we've obsessed over every detail.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl bg-background border shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <benefit.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-1">{benefit.title}</h3>
                                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
