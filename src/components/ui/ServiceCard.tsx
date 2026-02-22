"use client";
import { motion } from "motion/react";
import {
  Palette,
  Code2,
  ShoppingCart,
  Search,
  Figma,
  Wrench,
} from "lucide-react";
import { Service } from "@/types";
import { Check } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Code2,
  ShoppingCart,
  Search,
  Figma,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group rounded-2xl bg-card border border-border p-8 hover:border-accent-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10">
        <IconComponent className="h-6 w-6 text-accent-500" />
      </div>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 group-hover:text-accent-400 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted">
            <Check className="h-4 w-4 text-accent-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
