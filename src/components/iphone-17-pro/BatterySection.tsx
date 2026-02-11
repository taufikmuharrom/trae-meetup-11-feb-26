"use client";

import { motion } from "framer-motion";

export function BatterySection() {
  return (
    <section className="bg-black text-[#f5f5f7] py-32 px-4">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            Baterai Pro. <br />
            <span className="text-green-500">Terkuat Sejauh Ini.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Hingga 37 jam pemutaran video di iPhone 17 Pro Max. Desain internal
            baru memberikan ruang lebih untuk daya tahan yang lebih lama.
          </motion.p>

          <div className="space-y-6">
            <div className="border-l-2 border-white/20 pl-6">
              <h4 className="text-3xl font-bold mb-1">37 Jam</h4>
              <p className="text-gray-500">Pemutaran video di Pro Max</p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <h4 className="text-3xl font-bold mb-1">31 Jam</h4>
              <p className="text-gray-500">Pemutaran video di Pro</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] md:h-[600px] bg-[#1d1d1f] rounded-3xl overflow-hidden flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: "url('/assets/iphone-17-pro/battery.jpg')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl text-green-500/20 font-bold blur-xl animate-pulse">
              ⚡
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
