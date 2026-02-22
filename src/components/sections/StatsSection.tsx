"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { stats } from "@/data/stats";
import { useCounter } from "@/hooks/useCounter";

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 2000, ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-left"
    >
      <div className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
        {count}
        <span className="text-white/80">{suffix}</span>
      </div>
      <p className="text-white text-base md:text-lg font-medium flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent-400" />
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden"
    >
      {/* Background with purple gradient + vertical pillar effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#1a0a2e] to-[#2d1065]" />

        {/* Vertical pillars / curtain effect */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-x border-white/[0.03]"
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,${0.3 + (i % 2) * 0.15}) 0%, rgba(139,92,246,${0.05 + (i % 3) * 0.03}) 50%, rgba(109,40,217,${0.1 + (i % 2) * 0.08}) 100%)`,
              }}
            />
          ))}
        </div>

        {/* Curved highlight at top of each pillar */}
        <div className="absolute inset-x-0 top-0 h-24 flex">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                background: `radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,0,0,${0.5 + (i % 2) * 0.2}) 0%, transparent 100%)`,
              }}
            />
          ))}
        </div>

        {/* Bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent-700/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 pt-20 md:pt-28 mb-16"
        >
          <span className="h-5 w-5 rounded bg-accent-500" />
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
            Stats & Facts
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 pb-20 md:pb-28 px-4 md:px-12" style={{ columnGap: "clamp(3rem, 8vw, 8rem)" , rowGap: "3rem" }}>
          {stats.map((stat, index) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
}
