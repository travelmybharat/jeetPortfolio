"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, categories } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import GradientButton from "@/components/ui/GradientButton";
import { cn } from "@/lib/utils";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="portfolio" className="relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-[70%]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.45) 0%, rgba(139,92,246,0.2) 30%, rgba(76,29,149,0.1) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[400px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[350px]"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Recent Work"
          subtitle="Explore our portfolio of premium digital experiences crafted for brands that demand excellence."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "relative px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 cursor-pointer",
                activeCategory === cat.value
                  ? "text-white"
                  : "text-muted bg-card border border-border hover:text-foreground hover:border-accent-500/40"
              )}
            >
              {activeCategory === cat.value && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent-500 rounded-full"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All button */}
        <div className="flex justify-center mt-14">
          <GradientButton href="#portfolio">View All</GradientButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
