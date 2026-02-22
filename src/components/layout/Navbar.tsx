"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import GradientButton from "@/components/ui/GradientButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();
  const glowScaleX = useTransform(scrollY, [0, 300], [0, 1]);
  const glowOpacity = useTransform(scrollY, [0, 50, 300], [0, 0.5, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible",
          scrolled
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={handleNavClick}
          >
            <div className="h-9 w-9 rounded-lg bg-accent-500 flex items-center justify-center group-hover:bg-accent-600 transition-colors">
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-white">
                P
              </span>
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold hidden sm:block">
              Pixelcraft
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <GradientButton href="tel:+919779766740">Book a Call</GradientButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 text-foreground hover:text-accent-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Scroll-activated glowing bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{
            opacity: glowOpacity,
            scaleX: glowScaleX,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.9) 30%, rgba(139,92,246,1) 50%, rgba(139,92,246,0.9) 70%, transparent 95%)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[8px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.3) 30%, rgba(139,92,246,0.5) 50%, rgba(139,92,246,0.3) 70%, transparent 95%)",
              filter: "blur(4px)",
            }}
          />
        </motion.div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground hover:text-accent-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
              >
                <GradientButton href="tel:+919779766740">Book a Call</GradientButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
