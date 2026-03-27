import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import SharedCta from "@/components/shared/SharedCta";

export const metadata = {
    title: "Contact Us \u2014 NeuralOps",
    description:
        "Get in touch with the NeuralOps team. Request a demo, ask about pricing, or learn how NeuralOps can transform your AI operations.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactForm />
            <SharedCta />
        </main>
    );
}
