import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Do I need a membership to enter?",
        answer: "No! You can purchase a Day Pass for $15. However, memberships offer great value if you plan to visit more than twice a month.",
    },
    {
        question: "Are vaccinations required?",
        answer: "Absolutely. For the safety of all our guests, proof of Rabies, toxins (DHPP), and Bordetella vaccinations is required for all dogs entering the off-leash park.",
    },
    {
        question: "Can I bring my kids?",
        answer: "Humans of all ages are welcome in the on-leash dining area! The off-leash dog park is 21+ only for safety reasons.",
    },
    {
        question: "Do you serve food?",
        answer: "Yes! We have a full menu of human-grade food for you and plenty of treat options for your pup.",
    },
    {
        question: "Is there a limit on how many dogs I can bring?",
        answer: "We allow up to 2 dogs per human handler to ensure everyone stays safe and supervised.",
    },
]

export function FAQ() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Got questions? We've got answers.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-200 dark:border-zinc-800 py-2">
                            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
