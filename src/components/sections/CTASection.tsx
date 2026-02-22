"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-900/20 via-background to-accent-800/10 px-8 py-16 md:px-16 md:py-24 text-center"
        >
          {/* Decorative blurred orbs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-700/10 rounded-full blur-[120px]" />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Ready", "to", "Build", "Something"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
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
              <br />
              <motion.span
                className="inline-block gradient-text"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.4,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                Amazing?
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Tell us what you&apos;re building. We&apos;ll show you how we can
              make it happen — no commitment, no BS, just a straight-up strategy call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GradientButton href="/contact">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
