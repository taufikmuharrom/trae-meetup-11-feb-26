"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black text-[#f5f5f7]"
    >
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y, scale }} className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/iphone-17-pro/hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-semibold tracking-tight mb-4"
        >
          iPhone 17 Pro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-medium text-gray-200"
        >
          Titanium. Tangguh. Tanpa Tanding.
        </motion.p>
      </motion.div>
    </section>
  );
}
