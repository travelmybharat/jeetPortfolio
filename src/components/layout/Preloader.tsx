"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const BRAND_TEXT = "PIXELCRAFT";
const LETTER_DELAY = 100; // ms between each letter
const HOLD_DURATION = 600; // ms to hold after fully typed
const TOTAL_DURATION = BRAND_TEXT.length * LETTER_DELAY + HOLD_DURATION + 300;

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < BRAND_TEXT.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setTypedText(BRAND_TEXT.slice(0, i + 1));
        }, i * LETTER_DELAY + 300)
      );
    }

    const exitTimer = setTimeout(() => setIsLoading(false), TOTAL_DURATION);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#150d2a]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-baseline">
            <span className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider">
              {typedText}
            </span>

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block w-[3px] md:w-[4px] h-[3rem] md:h-[4.5rem] lg:h-[6rem] bg-accent-500 ml-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
