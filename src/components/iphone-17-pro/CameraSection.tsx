"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CameraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="bg-black text-[#f5f5f7] py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-[980px] mx-auto">
        <div ref={ref} className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-gray-100">
              Sistem Kamera Pro Terbarukan.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
              Temukan inovasi luar biasa di keseluruhan sistem kamera iPhone 17
              Pro. Kini dengan lensa Telefoto 48 MP.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#1d1d1f] rounded-3xl p-8 md:p-12 flex flex-col justify-between h-[500px] overflow-hidden relative group"
            >
              <div className="z-10 relative">
                <span className="text-6xl font-bold block mb-2 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
                  48MP
                </span>
                <h3 className="text-2xl font-semibold">Kamera Utama Fusion</h3>
                <p className="mt-4 text-gray-400">
                  Foto resolusi super tinggi 24 MP secara default. Detail yang
                  belum pernah Anda lihat sebelumnya.
                </p>
              </div>
              <div
                className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-no-repeat bg-cover bg-bottom opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-br-3xl"
                style={{
                  backgroundImage:
                    "url('/assets/iphone-17-pro/camera_main.jpg')",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#1d1d1f] rounded-3xl p-8 md:p-12 flex flex-col justify-between h-[500px] overflow-hidden relative group"
            >
              <div className="z-10 relative">
                <span className="text-6xl font-bold block mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-600">
                  8x
                </span>
                <h3 className="text-2xl font-semibold">Zoom Optik</h3>
                <p className="mt-4 text-gray-400">
                  Telefoto iPhone terpanjang yang pernah ada. Setara lensa 200
                  mm di saku Anda.
                </p>
              </div>
              <div
                className="absolute -right-10 -bottom-10 w-full h-full bg-no-repeat bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('/assets/iphone-17-pro/camera_zoom.jpg')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
