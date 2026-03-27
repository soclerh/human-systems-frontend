import Link from "next/link";
import React from "react";
import {
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardList,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default function OurModules() {
  const modules = [
    {
      title: "AI Agent Builder",
      description:
        "Design, train, and deploy custom AI agents with a visual drag-and-drop interface, pre-built templates, and real-time performance monitoring.",
      icon: <HiOutlineUserGroup size={32} />,
    },
    {
      title: "Workflow Automator",
      description:
        "Build intelligent automation workflows with AI-powered conditional branching, event triggers, parallel execution, and comprehensive audit logging.",
      icon: <HiOutlineCalendar size={32} />,
    },
    {
      title: "Knowledge Vault",
      description:
        "AI-powered knowledge base with semantic search, automatic document indexing, role-based access control, and dynamic knowledge graph visualization.",
      icon: <HiOutlineShieldCheck size={32} />,
    },
    {
      title: "Predictive Analytics",
      description:
        "ML-powered forecasting with time series analysis, churn prediction, what-if scenario modeling, and automated model retraining pipelines.",
      icon: <HiOutlineChartBar size={32} />,
    },
    {
      title: "Model Training Studio",
      description:
        "End-to-end ML lifecycle management with experiment tracking, hyperparameter optimization, model versioning, and one-click production deployment.",
      icon: <HiOutlineCurrencyDollar size={32} />,
    },
    {
      title: "Data Pipeline Manager",
      description:
        "Visual ETL pipeline builder with 100+ pre-built connectors, AI-assisted data transformation, real-time streaming, and data quality monitoring.",
      icon: <HiOutlineClipboardList size={32} />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#FCFDFB]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-fit px-6 py-1.5 border border-gray-900 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful AI Products
          </h2>
          <p className="max-w-2xl text-gray-500 text-lg leading-relaxed">
            NeuralOps provides a complete suite of AI products built with
            enterprise-grade infrastructure, robust security, and scalable
            multi-tenant architecture.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            /* Replaced outer div with Link */
            <Link
              href="/modules"
              key={index}
              className="group relative bg-white border border-gray-300 p-10 rounded-[40px] 
                         transition-all hover:border-[#013228] cursor-pointer flex flex-col h-full"
            >
              {/* Icon */}
              <div className="text-gray-900 mb-8 transition-all duration-500 transform group-hover:scale-110 origin-left">
                {module.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-500">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mb-10 leading-relaxed transition-colors duration-500 flex-grow">
                {module.description}
              </p>

              {/* The "Read More" Full Button Transformation (Removed inner Link) */}
              <div
                className="w-fit inline-flex items-center gap-3 px-0 py-2 rounded-full transition-all duration-500 ease-in-out
                           group-hover:bg-[#013228] group-hover:px-6 group-hover:py-3 mt-auto"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-white transition-colors duration-500">
                  Read More
                </span>

                <HiOutlineArrowNarrowRight
                  size={20}
                  className="text-gray-900 group-hover:text-white transition-all duration-500 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
