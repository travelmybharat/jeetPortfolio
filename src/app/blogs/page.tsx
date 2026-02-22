"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="container-custom">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-5 w-5 rounded bg-accent-500" />
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Blogs
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            All <span className="gradient-text">Articles</span>
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            Insights, trends, and tips from the Pixelcraft Studio team.
          </p>
        </motion.div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent-500/30 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-sm text-white/90 border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug mb-2 group-hover:text-accent-300 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="border-t border-border pt-4 flex items-center gap-4 text-xs text-muted uppercase tracking-wider font-medium">
                      <span>{post.date}</span>
                      <span className="text-border">|</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
