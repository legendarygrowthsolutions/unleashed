import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
            <div className="container relative z-10 px-4 md:px-6 space-y-8">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl animate-fade-in-up">
                        Unleash the Fun at <span className="text-primary relative inline-block">
                            The Woof & Whisker
                            <svg className="absolute -bottom-2 w-full h-3 text-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground sm:text-xl max-w-[700px] mx-auto">
                        The ultimate social club for dogs and their humans. Sip craft cocktails while your pup plays in our safe, supervised park.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-100">
                    <Button size="lg" className="rounded-full px-8 text-lg shadow-lg hover:scale-105 transition-transform" asChild>
                        <Link href="/register">Join the Pack</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 text-lg hover:bg-secondary transition-colors" asChild>
                        <Link href="#membership">View Memberships</Link>
                    </Button>
                </div>

                <div className="relative w-full max-w-5xl mx-auto mt-12 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image
                        src="/assets/Barshot.png"
                        alt="Dogs having a blast at the bar"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 text-white text-left">
                        <p className="font-bold text-lg drop-shadow-md">Verified Fun</p>
                        <div className="flex items-center space-x-2 text-sm drop-shadow-md">
                            <span className="bg-green-500 rounded-full h-2 w-2 animate-pulse" />
                            <span>Vaccination Required</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Paw Prints */}
            <div className="absolute top-20 left-10 opacity-10 rotate-12 animate-float">
                <span className="text-6xl">🐾</span>
            </div>
            <div className="absolute bottom-40 right-10 opacity-10 -rotate-12 animate-float-delayed">
                <span className="text-8xl">🐾</span>
            </div>
        </section>
    )
}
