import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const StorySection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#013228] p-8 rounded-3xl text-[#E3FFCD] shadow-xl hidden md:block">
            <p className="text-4xl font-bold">10+</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-80">
              Years of AI Innovation
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#013228]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
              How we started
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            From a notebook to a{" "}
            <span className="text-[#013228]">global AI platform.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            What started as a custom ML tool for a small research team has evolved
            into a comprehensive AI operations platform trusted by hundreds of
            organizations worldwide. We noticed that existing AI tooling was
            too fragmented and disconnected from the actual needs of business teams.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our mission is to provide an all-in-one workspace where teams can
            build AI agents, automate workflows, and deploy models with precision, while
            business users enjoy a seamless, intuitive interface.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <button className="flex cursor-pointer items-center gap-2 bg-[#013228] rounded-full py-4 px-8 font-bold text-[#E3FFCD] hover:scale-105 transition-transform duration-300">
                Join our AI Journey
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StorySection;
