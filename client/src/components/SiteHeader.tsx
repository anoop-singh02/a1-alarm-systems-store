import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

type HeaderPage =
  | "home"
  | "about"
  | "services"
  | "residential"
  | "securityOptions"
  | "store"
  | "contact";

type SiteHeaderProps = {
  currentPage: HeaderPage;
};

const navItems: Array<{ label: string; path: string; key: HeaderPage }> = [
  { label: "Home", path: "/", key: "home" },
  { label: "About", path: "/about", key: "about" },
  {
    label: "Residential & Commercial",
    path: "/residential-commercial-security",
    key: "residential",
  },
  {
    label: "Security Options",
    path: "/security-options",
    key: "securityOptions",
  },
  { label: "Services", path: "/services", key: "services" },
  { label: "Store", path: "/store", key: "store" },
  { label: "Contact", path: "/contact", key: "contact" },
];

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <span className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold text-foreground">
              A-1 Alarm Systems
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[1.05rem] font-semibold tracking-[0.02em] text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`hover:text-primary transition-colors leading-tight ${
                currentPage === item.key ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full bg-[#0096c7] hover:bg-[#0077a8] text-white px-7 py-2.5 text-base font-semibold tracking-[0.02em]">
              Get Quote
            </Button>
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-muted"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4 text-lg font-semibold tracking-[0.02em] text-foreground">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="hover:text-primary transition-colors leading-tight"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMobile}>
              <Button className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white text-lg font-semibold tracking-[0.02em] py-3">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
