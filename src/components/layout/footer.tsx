import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <span className="text-xl font-bold tracking-tight text-primary">
                        The Woof & Whisker
                    </span>
                    <p className="text-sm text-muted-foreground">
                        Where good dogs bring their humans for a drink.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © {new Date().getFullYear()} The Woof & Whisker. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-primary transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    )
}
