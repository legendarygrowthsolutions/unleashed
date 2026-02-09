import { Beer, Dog, ShieldCheck, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Concept() {
    return (
        <section id="concept" className="w-full py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        More Than Just a Dog Park
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        We are a community-focused social club designed for both ends of the leash.
                        Relax with a drink while your dog plays in a safe, monitored environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-secondary/10 border-none relative overflow-hidden group hover:bg-secondary/20 transition-colors">
                        <CardHeader className="pb-2">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl">Safe & Supervised</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Our "Rufferees" monitor play at all times. All dogs are vetted for vaccinations and temperament to ensure a safe pack.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary/10 border-none relative overflow-hidden group hover:bg-secondary/20 transition-colors">
                        <CardHeader className="pb-2">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Beer className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl">Full Bar & Kitchen</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Enjoy a rotating selection of locally sourced craft brews, wines, and signature cocktails. Hungry? We have ease-bites too.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary/10 border-none relative overflow-hidden group hover:bg-secondary/20 transition-colors">
                        <CardHeader className="pb-2">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl">Community Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Trivia nights, breed meetups, and adoption events happen weekly. There's always something going on at the park.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
