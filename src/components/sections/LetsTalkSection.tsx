"use client";
import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from "motion/react";

export default function LetsTalkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskX = useMotionValue(-300);
  const maskY = useMotionValue(-300);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const maskSpringX = useSpring(maskX, { stiffness: 60, damping: 20 });
  const maskSpringY = useSpring(maskY, { stiffness: 60, damping: 20 });

  const maskImage = useMotionTemplate`radial-gradient(ellipse 300px 100% at ${maskSpringX}px ${maskSpringY}px, black 0%, transparent 80%)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.6, 1]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Text offset from center based on mouse position
      mouseX.set((x - centerX) * 0.95);
      mouseY.set((y - centerY) * 0.95);
      // Mask position for bright dots
      maskX.set(x);
      maskY.set(y);
    },
    [mouseX, mouseY, maskX, maskY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    maskX.set(-300);
    maskY.set(-300);
  }, [mouseX, mouseY, maskX, maskY]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-16 md:py-20 overflow-hidden bg-[#150d2a] cursor-none z-20"
    >
      {/* Scroll-activated glowing top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-30"
        style={{
          opacity: lineOpacity,
          scaleX: lineScaleX,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.9) 30%, rgba(212,180,100,1) 50%, rgba(139,92,246,0.9) 70%, transparent 95%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[6px] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.4) 30%, rgba(212,180,100,0.5) 50%, rgba(139,92,246,0.4) 70%, transparent 95%)",
            filter: "blur(4px)",
          }}
        />
      </motion.div>

      {/* Dotted grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(196,166,100,0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bright dots revealed by cursor mask */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,180,100,1) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />

      {/* Soft glow halo */}
      <motion.div
        className="absolute pointer-events-none opacity-25"
        style={{
          x: maskSpringX,
          y: maskSpringY,
          width: 240,
          height: 240,
          marginLeft: -120,
          marginTop: -120,
          background:
            "radial-gradient(circle, rgba(212,180,100,0.6) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Single text that moves with cursor */}
      <div className="container-custom relative z-10 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: springX, y: springY }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">
            Let&apos;s{" "}
            <span className="relative inline-block">
              Talk
              <span className="text-accent-400">!!</span>
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
