import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/iphone-17-pro/HeroSection";
import { CameraSection } from "@/components/iphone-17-pro/CameraSection";
import { ChipSection } from "@/components/iphone-17-pro/ChipSection";
import { BatterySection } from "@/components/iphone-17-pro/BatterySection";

export default function IPhone17ProPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-11">
        <HeroSection />
        <CameraSection />
        <ChipSection />
        <BatterySection />

        {/* Call to Action Footer */}
        <section className="bg-[#f5f5f7] py-24 text-center text-black">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            iPhone 17 Pro
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Titanium. A19 Pro. Kamera Fusion 48 MP.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full hover:bg-[#0077ed] transition-colors font-medium text-lg">
              Beli
            </button>
            <button className="text-[#0071e3] hover:underline font-medium text-lg">
              Pelajari lebih lanjut &gt;
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
