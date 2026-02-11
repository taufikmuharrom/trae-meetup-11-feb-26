import Link from "next/link";
import { cn } from "@/lib/utils";

interface PromoTileProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta1?: string;
  cta2?: string;
  backgroundImage?: string;
  theme?: "light" | "dark";
  className?: string;
  topContent?: boolean; // If true, text is at top. If false, text is at bottom or center? Usually top.
}

export function PromoTile({
  title,
  subtitle,
  description,
  cta1 = "Selengkapnya",
  cta2 = "Beli",
  backgroundImage,
  theme = "light",
  className,
}: PromoTileProps) {
  const textColor = theme === "dark" ? "text-[#f5f5f7]" : "text-[#1d1d1f]";

  return (
    <div
      className={cn(
        "relative w-full h-[500px] md:h-[580px] flex flex-col items-center pt-12 text-center overflow-hidden bg-white dark:bg-black group hover:scale-[1.01] transition-transform duration-500 ease-in-out cursor-pointer",
        className,
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className={cn("z-10 px-4", textColor)}>
        <h3 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-lg md:text-xl font-normal mb-2">{subtitle}</h4>
        )}
        {description && (
          <p className="text-base text-gray-500 mb-3 max-w-xs mx-auto">
            {description}
          </p>
        )}
        <div className="flex gap-4 justify-center mt-3">
          <Link
            href="#"
            className="text-[#2997ff] hover:underline text-base md:text-lg font-medium"
          >
            {cta1} &gt;
          </Link>
          <Link
            href="#"
            className="text-[#2997ff] hover:underline text-base md:text-lg font-medium"
          >
            {cta2} &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white dark:bg-black">
      {children}
    </div>
  );
}
