import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Compass,
  Clock,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours & Packages", href: "/tours" },
  { name: "Contact Us", href: "/contact" },
];

const travelServices = [
  { name: "Family Tours", href: "/tours" },
  { name: "Holiday Packages", href: "/tours" },
  { name: "Group Travel", href: "/tours" },
  { name: "Custom Trip Planning", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FaFacebookF,
  },
  {
    name: "X",
    href: "https://x.com/",
    Icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Chamunda Tours & Travels home"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src="/images/chamunda-logo.png"
                  alt="Chamunda Tours & Travels logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="max-w-[210px] text-lg font-extrabold leading-tight sm:text-xl">
                Chamunda
                <span className="block text-orange-400">Tours & Travels</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your journey, our priority. Let Chamunda Tours & Travels help you
              plan comfortable journeys and memorable holidays.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-orange-400"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold">Our Travel Services</h3>

            <ul className="mt-5 space-y-3.5">
              {travelServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition hover:text-orange-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold">Get in Touch</h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Have a trip in mind? Let&apos;s plan your next journey.
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-orange-400" />
                <p className="text-sm leading-6 text-slate-400">
                  Ahmedabad, Gujarat, India
                </p>
              </div>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="flex items-center gap-3 break-all text-sm text-slate-400 transition hover:text-orange-400"
              >
                <Mail size={18} className="shrink-0 text-orange-400" />
                YOUR_EMAIL@example.com
              </a>

              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-orange-400"
              >
                <Phone size={18} className="shrink-0 text-orange-400" />
                +91 XXXXX XXXXX
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Clock size={18} className="shrink-0 text-orange-400" />
                Contact us for travel assistance
              </div>
            </div>
          </div>
        </div>

        {/* Travel CTA */}
        <div className="mt-12 flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-orange-400">
              Your next journey awaits
            </p>

            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Where would you love to go?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Tell us your travel plans, and let&apos;s explore the
              possibilities together.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold"
          >
            Plan Your Trip
            <Compass size={17} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs leading-5 text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} Chamunda Tours & Travels. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 sm:text-sm">
            <Link
              href="/privacy-policy"
              className="transition hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-orange-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
