import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blogs";

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) notFound();

    return (
        <main className="min-h-screen bg-white">
            {/* 1. Refined, Minimal Top Nav */}
            <nav className="pt-8 px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-[#013228] transition-colors"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400">
                        <span>Blog</span>
                        <ChevronRight size={12} />
                        <span className="text-[#013228] font-bold">{blog.category}</span>
                    </div>
                </div>
            </nav>

            {/* 2. Impactful Header Section */}
            <header className="pt-16 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Category Tag */}
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#E3FFCD] bg-[#E3FFCD] text-[#013228] rounded-full">
                        {blog.category}
                    </span>

                    {/* The Title - Bold, No Italics */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#013228] mb-8 leading-[1.1]">
                        {blog.title}
                    </h1>

                    {/* Excerpt/Sub-headline */}
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                        {blog.excerpt}
                    </p>

                    {/* Metadata Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 py-6 border-y border-gray-200">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 relative overflow-hidden ring-2 ring-white">
                                <Image
                                    src={blog.author.avatar}
                                    alt={blog.author.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <span className="text-sm font-bold text-[#013228]">{blog.author.name}</span>
                        </div>

                        <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-[#013228] uppercase">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-gray-400" />
                                {blog.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} className="text-gray-400" />
                                {blog.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. Hero Image - Integrated into the flow */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
                <div className="relative aspect-21/10 md:aspect-21/9 rounded-[32px] overflow-hidden bg-gray-100 shadow-xl shadow-gray-200">
                    {blog.coverImage && (
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    )}
                </div>
            </section>

            {/* 4. Article Body */}
            <article className="max-w-6xl mx-auto px-6 pb-32">
                <div className="prose prose-lg md:prose-xl prose-stone w-full max-w-none 
                    prose-headings:text-[#013228] prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
                    prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-8 prose-p:font-medium prose-p:text-lg md:prose-p:text-xl
                    prose-strong:text-[#013228] prose-strong:font-bold
                    prose-blockquote:border-[#85D036] prose-blockquote:bg-[#E3FFCD]/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-10 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#013228] prose-blockquote:font-medium prose-blockquote:italic">

                    {blog.content.split('\n').map((paragraph, idx) => {
                        if (!paragraph.trim()) return null;
                        if (paragraph.startsWith('### ')) return <h3 key={idx} className="text-2xl md:text-3xl">{paragraph.replace('### ', '')}</h3>;
                        if (paragraph.startsWith('## ')) return <h2 key={idx} className="text-3xl md:text-4xl">{paragraph.replace('## ', '')}</h2>;
                        return <p key={idx}>{paragraph}</p>;
                    })}
                </div>

                {/* Footer Bio */}
                <footer className="mt-20 pt-16 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-50 rounded-3xl border border-gray-200">
                        <div className="w-16 h-16 rounded-full relative overflow-hidden shrink-0 border border-gray-200">
                            <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" unoptimized />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-[#013228]">{blog.author.name}</h4>
                            <p className="text-gray-500 font-medium text-sm leading-relaxed">{blog.author.role}</p>
                        </div>
                        <Link
                            href="/blog"
                            className="md:ml-auto px-6 py-3 bg-white border border-[#013228] rounded-full text-xs font-bold uppercase tracking-widest text-[#013228] hover:bg-[#013228] hover:text-[#E3FFCD] transition-all shadow-sm"
                        >
                            All Posts
                        </Link>
                    </div>
                </footer>
            </article>
        </main>
    );
}