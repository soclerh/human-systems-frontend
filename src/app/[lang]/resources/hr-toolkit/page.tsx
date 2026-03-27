import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResourceCard from "@/components/resources/ResourceCard";
import { getResourcesByCategory } from "@/data/resources";

export const metadata = {
  title: "AI Toolkit | NeuralOps",
  description: "Explore our AI Toolkit.",
};

export default function HRToolkitPage() {
  const toolkitItems = getResourcesByCategory("AI Toolkit");

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-emerald-100 pb-24">
      <header className="pt-24 pb-16 px-6 md:px-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#013228] transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold border border-gray-200 rounded-full text-[#013228] uppercase tracking-widest bg-gray-50">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#013228]">
              AI <span className="text-gray-900">Toolkit</span>
            </h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Templates, guides, and practical tools to accelerate your AI
              operations.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {toolkitItems.map((item) => (
            <div key={item.id} className="h-full">
              <ResourceCard resource={item} basePath="/resources/hr-toolkit" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
