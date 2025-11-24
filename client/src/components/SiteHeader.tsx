import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

type SiteHeaderProps = {
  currentPage: "home" | "about" | "services" | "store" | "contact";
};

const baseHref = (() => {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.endsWith("/") ? base : `${base}/`;
})();

const homeUrl = baseHref === "/" ? "/" : baseHref;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Store", path: "/store" },
  { label: "Contact", path: "/contact" },
];

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a
          href={currentPage === "home" ? "#home" : homeUrl}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
          <span className="text-xl font-bold text-foreground">
            A-1 Alarm Systems
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path === "/" ? "/" : item.path}
              className={`hover:text-primary transition-colors ${
                currentPage === (item.path === "/" ? "home" : item.path.slice(1))
                  ? "text-primary"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full bg-[#0096c7] hover:bg-[#0077a8] text-white px-6 py-2 text-sm">
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
          <div className="container py-4 flex flex-col gap-4 text-sm font-medium text-foreground">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path === "/" ? "/" : item.path}
                className="hover:text-primary transition-colors"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMobile}>
              <Button className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
