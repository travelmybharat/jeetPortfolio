"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";

export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 md:py-28">
      <div className="container-custom">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-5 w-5 rounded bg-accent-500" />
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Blogs
              </span>
            </motion.div>
            <motion.h2
              className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Recent", "Articles"].map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.3em] ${i === 1 ? "gradient-text" : ""}`}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        delay: i * 0.08,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/blogs"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-200 group shrink-0"
            >
              <span className="font-[family-name:var(--font-display)] font-medium">
                View All Blogs
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent-500/30 transition-all duration-300">
                  {/* Blog image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
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

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug mb-4 group-hover:text-accent-300 transition-colors duration-200">
                      {post.title}
                    </h3>

                    <div className="border-t border-border pt-4 flex items-center gap-4 text-xs text-muted uppercase tracking-wider font-medium">
                      <span>{post.date}</span>
                      <span className="text-border">|</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
