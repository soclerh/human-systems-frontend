"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { getRecentBlogs } from "@/data/blogs";

export default function RecentBlogs() {
  const recentBlogs = getRecentBlogs(3);

  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold border border-gray-200 rounded-full text-[#013228] uppercase tracking-widest bg-gray-50">
              Latest Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#013228] leading-tight">
              Read Our <br />
              <span className="text-gray-500">Latest Blogs</span>
            </h2>
          </div>

          <Link href="/blog">
            <button className="group flex items-center justify-center gap-2 border border-[#013228] rounded-full py-4 px-8 text-xs uppercase tracking-widest font-bold text-[#013228] hover:bg-[#013228] cursor-pointer hover:text-white transition-all">
              VIEW ALL POSTS
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <div key={blog.id} className="h-full">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
