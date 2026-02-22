"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  return (
    <article className="pt-32 pb-20 md:pb-28">
      <div className="container-custom max-w-4xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Category */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-300 border border-accent-500/20">
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center gap-6 text-sm text-muted mb-10"
        >
          <span className="flex items-center gap-2">
            <Calendar size={14} className="text-accent-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <User size={14} className="text-accent-500" />
            {post.author}
          </span>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-12 border border-border"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="prose prose-invert prose-lg max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted prose-p:leading-relaxed prose-a:text-accent-400 prose-strong:text-foreground"
        >
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-foreground">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-muted leading-relaxed">
                {block}
              </p>
            );
          })}
        </motion.div>

        {/* Bottom nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex items-center justify-between"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            All Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
