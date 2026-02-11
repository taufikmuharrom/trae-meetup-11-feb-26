"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ChipSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section ref={ref} className="bg-[#101010] py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

      <div className="max-w-[1024px] mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          style={{ rotate, scale }}
          className="w-64 h-64 md:w-96 md:h-96 rounded-3xl bg-[#1d1d1f] flex items-center justify-center mb-12 shadow-2xl shadow-blue-900/50 border border-white/10 overflow-hidden relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: "url('/assets/iphone-17-pro/chip.jpg')" }}
          />
          <div className="relative z-10 text-[#f5f5f7] font-bold text-4xl md:text-6xl tracking-tighter drop-shadow-lg">
            A19 Pro
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-semibold text-[#f5f5f7] mb-6"
        >
          Monster Performa.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl"
        >
          GPU 6-core hingga 2x lebih cepat. Neural Accelerators terintegrasi
          untuk AI lokal yang lebih cerdas. Chip paling andal yang pernah ada di
          smartphone.
        </motion.p>
      </div>
    </section>
  );
}
