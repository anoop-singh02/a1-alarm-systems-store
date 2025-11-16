import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/a1-alarm-logo.png" 
            alt="A1 Alarm Systems" 
            className="h-10 w-auto"
          />
          <span className="hidden sm:inline text-lg font-bold text-foreground">
            A1 Alarm
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/store"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Store
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/quote">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="/store"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Store
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </Link>
            <Link href="/quote" onClick={closeMenu}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
