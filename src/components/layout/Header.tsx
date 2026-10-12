"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours & Packages", href: "/tours" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="brand-link flex min-w-0 items-center gap-3"
          aria-label="Chamunda Tours & Travels home"
        >
          {/* Add your actual logo at public/images/chamunda-logo.png */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/chamunda-logo.png"
              alt="Chamunda Tours & Travels logo"
              width={48}
              height={48}
              className="h-full w-full object-contain"
              priority
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="brand-logo-fallback" aria-hidden="true">
              C
            </span>
          </div>

          <div className="min-w-0">
            <span className="block truncate text-base font-extrabold tracking-tight text-slate-900 sm:text-xl">
              Chamunda
              <span className="text-orange-500"> Tours & Travels</span>
            </span>

            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[2px] text-slate-500 sm:text-[10px]">
              Your Journey, Our Priority
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link whitespace-nowrap text-sm font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="btn-primary hidden shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold lg:inline-flex"
        >
          <Phone size={17} />
          Plan Your Trip
          <ChevronRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:border-orange-200 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 xl:hidden"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-xl sm:px-6 xl:hidden"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                {item.name}
                <ChevronRight size={16} />
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="btn-primary mt-3 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold"
            >
              <MapPin size={17} />
              Plan Your Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}