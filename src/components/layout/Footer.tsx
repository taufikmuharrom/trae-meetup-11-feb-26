import Link from "next/link";

const footerLinks = [
  {
    title: "Belanja dan Belajar",
    links: [
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Rumah",
      "AirTag",
    ],
  },
  {
    title: "Dompet Apple",
    links: ["Dompet"],
  },
  {
    title: "Akun",
    links: ["Kelola Akun Apple Anda", "iCloud.com"],
  },
  {
    title: "Hiburan",
    links: [
      "Apple One",
      "Apple TV",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Untuk Bisnis",
    links: ["Apple dan Bisnis"],
  },
  {
    title: "Untuk Pendidikan",
    links: ["Apple dan Pendidikan"],
  },
  {
    title: "Nilai-nilai Apple",
    links: [
      "Aksesibilitas",
      "Pendidikan",
      "Lingkungan",
      "Privasi",
      "Inovasi Rantai Pasok",
    ],
  },
  {
    title: "Tentang Apple",
    links: [
      "Newsroom",
      "Kepemimpinan Apple",
      "Investor",
      "Etika & Kepatuhan",
      "Acara",
      "Hubungi Apple",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs py-10 px-4 md:px-0">
      <div className="max-w-[1024px] mx-auto">
        <div className="border-b border-[#d2d2d7] pb-5 mb-5 space-y-2 text-[#6e6e73]">
          <p>
            Aplikasi Tanda Vital hanya untuk tujuan kesehatan dan bukan untuk
            penggunaan medis.
          </p>
          <p>Langganan diperlukan untuk Apple TV.</p>
          <p>
            Fitur dapat berubah sewaktu-waktu. Beberapa fitur, aplikasi, dan
            layanan mungkin tersedia tidak di semua wilayah atau dalam semua
            bahasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* We'll use a simplified masonry-like layout for columns since the data structure is flat list of categories */}
          <div className="space-y-6">
            <FooterSection section={footerLinks[0]} />
            <FooterSection section={footerLinks[1]} />
          </div>
          <div className="space-y-6">
            <FooterSection section={footerLinks[2]} />
            <FooterSection section={footerLinks[3]} />
          </div>
          <div className="space-y-6">
            <FooterSection section={footerLinks[4]} />
            <FooterSection section={footerLinks[5]} />
          </div>
          <div className="space-y-6">
            <FooterSection section={footerLinks[6]} />
          </div>
          <div className="space-y-6">
            <FooterSection section={footerLinks[7]} />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between text-[#6e6e73]">
          <div className="mb-4 md:mb-0">
            <p className="mb-2">Temukan retailer di dekat Anda.</p>
            <p>Indonesia</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <p>
              Hak cipta © 2026 Apple Inc. Seluruh hak cipta dilindungi
              undang-undang.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:underline">
                Ketentuan Penggunaan
              </Link>
              <Link href="#" className="hover:underline">
                Legal
              </Link>
              <Link href="#" className="hover:underline">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({
  section,
}: {
  section: { title: string; links: string[] };
}) {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-[#1d1d1f]">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-[#424245] hover:underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
