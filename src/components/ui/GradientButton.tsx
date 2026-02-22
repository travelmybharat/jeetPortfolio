"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function GradientButton({
  children,
  className,
  onClick,
  href,
}: GradientButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[2px] overflow-hidden group cursor-pointer",
        className
      )}
    >
      {/* Rotating conic gradient — spins around the button */}
      <span
        className="absolute inset-[-150%] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 40%, #8b5cf6 50%, #c4b5fd 55%, #8b5cf6 60%, transparent 70%, transparent 100%)",
          animation: "rotate-border 3s linear infinite",
        }}
      />

      {/* Subtle glow layer underneath */}
      <span
        className="absolute inset-[-2px] rounded-full opacity-30 blur-[3px]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 40%, #8b5cf6 50%, #c4b5fd 55%, #8b5cf6 60%, transparent 70%, transparent 100%)",
          animation: "rotate-border 3s linear infinite",
        }}
      />

      {/* Inner background */}
      <span className="relative flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 group-hover:bg-background/80">
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("#");
    if (isExternal) {
      return (
        <a href={href} onClick={onClick} className="inline-flex">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className="inline-flex">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-flex">
      {content}
    </button>
  );
}
