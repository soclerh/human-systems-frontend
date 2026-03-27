"use client";

import React, { useEffect, useState } from "react";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // If the document is already fully loaded, hide the loader with a tiny delay for smoothness
        if (document.readyState === "complete") {
            const timer = setTimeout(() => setIsLoading(false), 300);
            return () => clearTimeout(timer);
        } else {
            // Otherwise wait for the window load event
            const handleLoad = () => {
                setTimeout(() => setIsLoading(false), 300);
            };
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F9FAFB] transition-opacity duration-500">
            <div className="relative flex items-center justify-center">
                {/* Outer spinner */}
                <div className="w-16 h-16 border-4 border-gray-200 border-t-[#013228] border-r-[#013228] rounded-full animate-spin"></div>
                {/* Inner spinner */}
                <div className="absolute w-10 h-10 border-4 border-gray-200 border-b-[#85D036] border-l-[#85D036] rounded-full animate-[spin_1s_linear_reverse]"></div>
            </div>
            <p className="mt-6 text-sm font-semibold tracking-widest text-[#013228] uppercase animate-pulse">
                NeuralOps
            </p>
        </div>
    );
}
