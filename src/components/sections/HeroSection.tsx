"use client";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const ParticleCanvas = dynamic(
  () => import("@/components/canvas/ParticleCanvas"),
  { ssr: false }
);

const StarfieldCanvas = dynamic(
  () => import("@/components/canvas/StarfieldCanvas"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Starfield background */}
      <div className="absolute inset-0 z-0">
        <StarfieldCanvas />
      </div>

      {/* Particle constellation */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Nebula gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top-left purple cloud */}
        <div
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(88,28,180,0.3) 0%, rgba(60,20,140,0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Center-right deep blue cloud */}
        <div
          className="absolute top-[10%] -right-[5%] w-[50%] h-[50%] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(30,50,180,0.25) 0%, rgba(40,30,160,0.08) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Bottom-center violet cloud */}
        <div
          className="absolute -bottom-[10%] left-[20%] w-[55%] h-[45%] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(120,40,200,0.25) 0%, rgba(80,20,160,0.08) 40%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Small accent highlight */}
        <div
          className="absolute top-[40%] left-[35%] w-[30%] h-[25%] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.35) 0%, transparent 60%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/5 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-accent-500 animate-[pulse-glow_2s_infinite]" />
          <span className="text-sm text-accent-300 font-medium">
            Web Development Agency — Dehradun, India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6"
          initial="hidden"
          animate="visible"
        >
          {["We", "Craft", "Digital"].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: 2.6 + i * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {["Experiences", "That"].map((word, i) => (
            <motion.span
              key={word}
              className={`inline-block mr-[0.25em] ${
                word === "Experiences" ? "gradient-text" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: 2.9 + i * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="inline-block gradient-text"
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  delay: 3.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            Convert
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed text-center"
        >
          From custom websites to full-stack web apps — we design, build, and
          optimize digital products that turn visitors into paying customers.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GradientButton href="/contact">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </GradientButton>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-muted hover:text-foreground hover:border-accent-500/50 transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
