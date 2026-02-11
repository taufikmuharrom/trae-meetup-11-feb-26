"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const movies = [
  {
    id: 1,
    title: "The Family Plan",
    genre: "Komedi • Keluarga yang sama. Misi yang beda.",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Monarch: Legacy of Monsters",
    genre: "Sci-Fi • Rahasia terkubur. Monster bangkit.",
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ted Lasso",
    genre: "Komedi • Kebaikan akan menang.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "For All Mankind",
    genre: "Drama • Perlombaan luar angkasa tak pernah berakhir.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black py-4">
      <div className="viewport" ref={emblaRef}>
        <div className="flex">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative min-w-[80%] md:min-w-[60%] lg:min-w-[50%] px-2 md:px-4 aspect-video flex-[0_0_auto]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2">
                    {movie.title}
                  </h3>
                  <p className="text-sm md:text-lg font-medium mb-4">
                    {movie.genre}
                  </p>
                  <Button className="w-fit bg-white text-black hover:bg-gray-200 rounded-full px-6">
                    Streaming sekarang
                  </Button>
                </div>
                {/* Always visible title for mobile/default state if needed, or keeping clean like Apple TV UI */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 md:hidden">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-200 rounded-full"
                  >
                    Tonton
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex
                ? "bg-gray-800 dark:bg-gray-200"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
