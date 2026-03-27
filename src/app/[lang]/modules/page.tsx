import ModulesHero from "@/components/modules/ModulesHero";
import ModuleGrid from "@/components/modules/ModuleGrid";
import SharedCta from "@/components/shared/SharedCta";

export const metadata = {
    title: "Products \u2014 NeuralOps",
    description:
        "Explore all 9 products of the NeuralOps AI platform \u2014 from AI Agents and Workflow Automation to Predictive Analytics, Model Training, and Platform Administration.",
};

export default function ModulesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ModulesHero />
            <ModuleGrid />
            <SharedCta />
        </main>
    );
}
