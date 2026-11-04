"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: pathname === "/" ? "#about" : "/#about" },
    { label: "Work", href: pathname === "/" ? "#work" : "/#work" },
    { label: "Contact", href: pathname === "/" ? "#contact" : "/#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F4F2ED]/95 backdrop-blur-md border-b border-hairline py-3.5 shadow-sm"
            : "bg-[#F4F2ED] border-b border-hairline/60 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 focus-visible:outline-none"
          >
            <span className="font-sans font-bold tracking-tight text-lg text-ink group-hover:text-ink/80 transition-colors">
              AKASH JOSEPH<span className="text-xs align-super ml-0.5">®</span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-ink-muted hidden md:inline">
              UI/UX &amp; Front-End
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
            {navLinks.map((link) => {
              const isWorkActive =
                link.label === "Work" && pathname.startsWith("/work");
              const isHomeActive = link.label === "Home" && pathname === "/";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-ink transition-colors duration-200 group ${
                    isHomeActive || isWorkActive ? "text-ink font-semibold" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-ink transform origin-left transition-transform duration-300 ease-out ${
                      isHomeActive || isWorkActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Quick Status Indicator */}
            <div className="pl-4 border-l border-hairline flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
              <span className="text-[11px] font-mono tracking-wide uppercase text-ink-muted">
                Available for Q2/Q3
              </span>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 text-ink hover:text-ink-muted focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-40 bg-[#F4F2ED] md:hidden flex flex-col justify-between p-8 border-t border-hairline animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl font-bold tracking-tight text-ink border-b border-hairline pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-ink-muted">0{idx + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-hairline space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Available for selected design &amp; engineering projects</span>
            </div>
            <div className="flex justify-between text-xs font-mono text-ink-muted">
              <span>KOCHI / REMOTE</span>
              <span>© {new Date().getFullYear()} AKASH JOSEPH</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

