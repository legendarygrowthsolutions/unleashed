import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
    {
        name: "Day Pass",
        price: "$15",
        description: "Perfect for trying us out or dropping by occasionally.",
        features: ["Access for 1 dog", "Unlimited play for the day", "Human entry is always free"],
        href: "/register?plan=day",
        cta: "Get Pass",
    },
    {
        name: "Monthly Membership",
        price: "$45",
        description: "The best value for regular visitors.",
        features: [
            "Unlimited access for 1 dog",
            "10% off at the bar",
            "Priority entry during peak hours",
            "Exclusive member events",
        ],
        href: "/register?plan=monthly",
        cta: "Join Monthly",
        featured: true,
    },
    {
        name: "Annual Membership",
        price: "$399",
        description: "Pay for the year and save big!",
        features: [
            "All Monthly perks",
            "2 months free",
            "Free birthday party rental",
            "Exclusive swag bag",
        ],
        href: "/register?plan=annual",
        cta: "Join Annually",
    },
]

export function Pricing() {
    return (
        <section id="membership" className="w-full py-16 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
                        Pricing
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        Simple, Transparent Memberships
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        Choose the plan that fits your schedule. No hidden fees.
                    </p>
                </div>
                <div className="grid gap-8 mt-12 md:grid-cols-3 lg:gap-12">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:scale-105 hover:shadow-md ${tier.featured ? "border-primary ring-1 ring-primary" : ""
                                }`}
                        >
                            {tier.featured && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold">{tier.name}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                <span className="text-muted-foreground">
                                    {tier.name === "Day Pass" ? "/day" : tier.name === "Monthly Membership" ? "/mo" : "/yr"}
                                </span>
                            </div>
                            <ul className="mb-8 space-y-4 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className={`w-full ${tier.featured ? "" : "bg-muted text-foreground hover:bg-muted/80"}`}
                                variant={tier.featured ? "default" : "secondary"}
                                asChild
                            >
                                <Link href={tier.href}>{tier.cta}</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
