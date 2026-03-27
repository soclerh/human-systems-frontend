"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

  const faqContent = [
    {
      title: "What is NeuralOps, and how can it benefit my business?",
      content: "NeuralOps is a comprehensive, cloud-based AI operations platform that centralizes agent building, workflow automation, predictive analytics, model training, data pipelines, and more. It helps businesses accelerate AI adoption, reduce operational overhead, and unlock data-driven decision making.",
    },
    {
      title: "How do I get started with NeuralOps?",
      content: "Getting started is easy — simply choose a plan that fits your team size, and our onboarding team will guide you through the setup. You can connect your data sources, deploy pre-built AI agents, and configure workflows. Your team will be up and running within days.",
    },
    {
      title: "Can I customize NeuralOps to match my business processes?",
      content: "Absolutely. NeuralOps supports custom agent configurations, workflow templates, data pipeline connectors, model training parameters, and notification preferences. The Admin Console gives your team full control to tailor the platform to your needs.",
    },
    {
      title: "How secure is our data on NeuralOps?",
      content: "Security is a top priority. NeuralOps uses end-to-end encryption at rest and in transit, role-based access controls (RBAC), multi-tenant isolation, SOC 2 compliance, and regular automated backups. The platform is deployed on enterprise-grade infrastructure with 99.9% uptime SLA.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-white overflow-hidden">
      {/* Subtle background question marks (Watermarks) */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* --- Left Column: Header --- */}
        <div className="flex flex-col items-start space-y-6">
          <div className="w-fit px-4 py-1 border border-gray-900 rounded-full">
            <p className="text-lg">FAQ's</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Find answers to the most common questions about NeuralOps' features, security, and getting started with the platform.
          </p>
        </div>

        {/* --- Right Column: Accordion --- */}
        <div className="space-y-4">
          {faqContent.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 ${isOpen ? "bg-[#f3f4f6]" : "bg-[#f3f4f6]"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-[#04231d] pr-4">
                    {faq.title}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isOpen ? "bg-[#04231d] border-[#04231d] text-white" : "border-gray-300 text-gray-500"}`}
                  >
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-8 text-gray-500 leading-relaxed text-base">
                    {faq.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
