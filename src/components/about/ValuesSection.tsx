import React from "react";
import { Heart, ShieldCheck, Rocket, Lightbulb } from "lucide-react";

const ValuesSection = () => {
    const values = [
        {
            title: "Responsible AI",
            desc: "We design every model with fairness, transparency, and accountability at its core.",
            icon: <Heart size={32} />,
        },
        {
            title: "Privacy by Design",
            desc: "Your data is your most valuable asset. We protect it with enterprise-grade encryption and strict access controls.",
            icon: <ShieldCheck size={32} />,
        },
        {
            title: "Relentless Innovation",
            desc: "AI evolves daily. Our platform stays ahead with cutting-edge research and continuous improvement.",
            icon: <Rocket size={32} />,
        },
        {
            title: "Simplicity Wins",
            desc: "We believe in removing friction. If it's not intuitive, it doesn't belong in NeuralOps.",
            icon: <Lightbulb size={32} />,
        },
    ];

    return (
        <section className="py-24 bg-[#013228] rounded-[50px] mx-4 my-8 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-emerald-100/60 max-w-xl mx-auto">
                        The principles that guide every algorithm we build and every
                        partnership we create.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group cursor-default"
                        >
                            <div className="text-[#E3FFCD] mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                                {v.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                            <p className="text-sm text-emerald-100/60 leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
