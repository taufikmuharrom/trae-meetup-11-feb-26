import Link from "next/link";
import { Search, ShoppingBag, Apple, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPad", href: "#" },
  { name: "iPhone", href: "/iphone-17-pro" },
  { name: "Watch", href: "#" },
  { name: "AirPods", href: "#" },
  { name: "TV & Rumah", href: "#" },
  { name: "Hiburan", href: "#" },
  { name: "Aksesori", href: "#" },
  { name: "Dukungan", href: "#" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161617]/95 backdrop-blur-md text-[#f5f5f7] text-xs">
      <div className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Apple className="w-4 h-4 fill-current" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between w-full max-w-2xl mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors opacity-80 hover:opacity-100"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <button className="hover:opacity-80 transition-opacity">
              <Search className="w-4 h-4" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#f5f5f7] hover:bg-transparent hover:text-white"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-screen bg-[#161617] border-none text-[#f5f5f7] pt-16"
              >
                <div className="flex flex-col gap-4 text-2xl font-semibold">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="hover:text-white transition-colors py-2 border-b border-white/10"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
