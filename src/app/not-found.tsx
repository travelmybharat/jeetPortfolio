"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-7xl sm:text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <GradientButton href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
