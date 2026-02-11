import { Hero } from "@/components/home/Hero";
import { ProductGrid, PromoTile } from "@/components/home/ProductGrid";
import { Carousel } from "@/components/home/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-black">
      {/* Hero 1: iPhone (Generasi Terbaru) */}
      <Hero
        title="iPhone"
        subtitle="Sambut iPhone generasi terbaru."
        cta1="Selengkapnya"
        cta2="Beli iPhone"
        theme="light"
        backgroundImage="https://images.unsplash.com/photo-1696446702183-cbd133767588?q=80&w=2070&auto=format&fit=crop"
        className="bg-[#f5f5f7] text-black"
      />

      {/* Hero 2: iPad Air */}
      <Hero
        title="iPad Air"
        subtitle="Kini bertenaga super berkat chip M3."
        cta1="Selengkapnya"
        cta2="Beli"
        theme="light"
        backgroundImage="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2062&auto=format&fit=crop"
        className="bg-white"
      />

      {/* Hero 3: MacBook Pro 14" */}
      <Hero
        title='MacBook Pro 14"'
        subtitle="Bertenaga super berkat M5."
        cta1="Selengkapnya"
        cta2="Beli"
        theme="dark"
        backgroundImage="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=2026&auto=format&fit=crop"
        className="bg-black"
      />

      {/* Grid Section */}
      <ProductGrid>
        <PromoTile
          title="WATCH SERIES 11"
          subtitle="Tepat untuk memantau kesehatan Anda."
          theme="light"
          backgroundImage="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop"
          className="bg-[#f5f5f7]"
        />
        <PromoTile
          title="AirPods Pro 3"
          subtitle="Peredam Kebisingan Aktif dalam rungu terbaik di dunia."
          theme="light"
          backgroundImage="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=2070&auto=format&fit=crop"
          className="bg-[#f5f5f7]"
        />
        <PromoTile
          title="MacBook Air"
          subtitle="Warna biru langit. Performa setinggi langit dengan M4."
          theme="light"
          backgroundImage="https://images.unsplash.com/photo-1521939094609-b034b2f46a65?q=80&w=2070&auto=format&fit=crop"
          className="bg-[#fbfbfd]"
        />
        <PromoTile
          title="WATCH ULTRA 3"
          subtitle="Partner tangguh."
          theme="dark"
          backgroundImage="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=2071&auto=format&fit=crop"
          className="bg-black"
        />
        <PromoTile
          title="WATCH SE 3"
          subtitle="Cocok. Bicara. Pantau. Sukses."
          theme="light"
          backgroundImage="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop"
          className="bg-[#f5f5f7]"
        />
        <PromoTile
          title="iPad Pro"
          subtitle="Performa AI canggih dan kemampuan yang mengubah segalanya."
          theme="dark"
          backgroundImage="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2062&auto=format&fit=crop"
          className="bg-black"
        />
      </ProductGrid>

      {/* Carousel Section */}
      <Carousel />
    </div>
  );
}
