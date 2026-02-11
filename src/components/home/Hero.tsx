import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  cta1?: string;
  cta2?: string;
  backgroundImage?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  cta1 = "Selengkapnya",
  cta2 = "Beli",
  backgroundImage,
  theme = "dark",
  className,
}: HeroProps) {
  const textColor = theme === "dark" ? "text-[#f5f5f7]" : "text-[#1d1d1f]";

  return (
    <div
      className={cn(
        "relative w-full h-[600px] md:h-[700px] flex flex-col items-center justify-start pt-16 md:pt-24 text-center overflow-hidden",
        theme === "dark" ? "bg-black" : "bg-[#fbfbfd]",
        className,
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <div className={cn("z-10 px-4", textColor)}>
        <h1 className="text-4xl md:text-6xl font-semibold mb-2 tracking-tight">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl font-normal mb-4">{subtitle}</h2>
        {description && (
          <p className="text-lg text-gray-500 mb-4 max-w-lg mx-auto">
            {description}
          </p>
        )}
        <div className="flex gap-6 justify-center mt-4">
          <Link
            href="#"
            className="text-[#2997ff] hover:underline text-lg md:text-xl font-medium"
          >
            {cta1} &gt;
          </Link>
          <Link
            href="#"
            className="text-[#2997ff] hover:underline text-lg md:text-xl font-medium"
          >
            {cta2} &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
