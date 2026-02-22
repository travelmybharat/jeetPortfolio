"use client";
import { motion } from "motion/react";

const brands = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Figma",
  "Shopify",
  "WordPress",
  "AWS",
  "Vercel",
  "Stripe",
  "Node.js",
  "PostgreSQL",
];

function BrandItem({ name }: { name: string }) {
  return (
    <div className="flex items-center px-4 md:px-6 shrink-0">
      <span className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold text-white/40 whitespace-nowrap tracking-widest uppercase">
        {name}
      </span>
    </div>
  );
}

export default function MissionSection() {
  return (
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden bg-[#150d2a] rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-10 z-10">
      {/* Central purple glow - concentrated in center */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(109,40,217,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Mission text */}
      <div className="container-custom relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-semibold max-w-4xl mx-auto"
        >
          At Pixelcraft Studio, we help businesses that grow as fast as they
          dream. We ensure your site stays{" "}
          <span className="text-accent-400 italic">optimized</span>,{" "}
          <span className="text-accent-400 italic">modern</span>, and{" "}
          <br />
          <span className="text-accent-400 italic">high-performing</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center text-base md:text-lg lg:text-xl leading-relaxed text-white/90 font-medium max-w-3xl mx-auto mt-8"
        >
          Perfect for brands needing ongoing updates, edits, and conversion
          optimization.
        </motion.p>
      </div>

      {/* Brands marquee */}
      <div className="relative mt-16 md:mt-20 overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#150d2a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#150d2a] to-transparent z-10" />

        {/* Scrolling row */}
        <div
          className="flex"
          style={{ animation: "marquee 15s linear infinite" }}
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <BrandItem key={`${brand}-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
