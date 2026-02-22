"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-accent-500/30 transition-all duration-300"
    >
      {/* Project image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold group-hover:text-accent-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 capitalize">
            {project.category.replace("-", " ")}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-card-hover border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
