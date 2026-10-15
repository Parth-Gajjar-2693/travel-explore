import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chamunda Tours & Travels and our approach to helping travellers explore destinations across India.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Traveller First",
    description:
      "We put your travel preferences, comfort, and expectations at the centre of every trip we help you plan.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Communication",
    description:
      "We believe travel planning should feel straightforward, with clear package information and transparent communication.",
  },
  {
    icon: Compass,
    title: "Meaningful Experiences",
    description:
      "From peaceful landscapes to vibrant cities, we help you discover destinations that match your travel interests.",
  },
  {
    icon: Sparkles,
    title: "Personalised Planning",
    description:
      "Every traveller is different. Our goal is to help you explore suitable options for your destination, schedule, and budget.",
  },
];

const travelHighlights = [
  {
    number: "01",
    title: "Explore India",
    description:
      "Discover mountains, beaches, cultural landmarks, spiritual destinations, and memorable holiday experiences.",
  },
  {
    number: "02",
    title: "Find Your Package",
    description:
      "Explore available tour options and enquire about the details that matter to you before making a decision.",
  },
  {
    number: "03",
    title: "Plan Your Journey",
    description:
      "Share your travel preferences with us so we can discuss suitable options for your next trip.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[420px] items-center bg-[#172554] sm:min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=85"
          alt="Beautiful mountain lake surrounded by green landscapes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1738]/95 via-[#172554]/75 to-[#172554]/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Compass size={16} className="text-orange-400" />
              Discover Chamunda Tours & Travels
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every journey begins with a{" "}
              <span className="text-orange-400">dream.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              We help you explore travel possibilities across India, discover
              destinations worth experiencing, and plan your next adventure with
              confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Tour Packages
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#172554]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
                alt="Majestic mountains waiting to be explored"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 max-w-[230px] rounded-xl bg-white p-5 shadow-xl sm:-right-5 sm:p-6">
              <MapPinned className="mb-3 text-orange-500" size={30} />

              <p className="text-lg font-bold text-[#172554]">Discover India</p>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Find destinations that inspire your next journey.
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172554] sm:text-4xl lg:text-5xl">
              Your journey, our priority.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600">
              <p>
                At{" "}
                <strong className="font-semibold text-[#172554]">
                  Chamunda Tours & Travels
                </strong>
                , we believe travelling is about more than reaching a
                destination. It is about discovering new places, spending
                quality time with loved ones, and creating memories along the
                way.
              </p>

              <p>
                Our focus is on helping travellers explore destinations across
                India and enquire about suitable travel packages. Whether you
                are dreaming of a mountain escape, a relaxing beach holiday, or
                a cultural journey, we want to make exploring your options
                easier.
              </p>

              <p>
                We also look forward to expanding our travel offerings to
                international destinations in the future, bringing more
                possibilities to travellers who want to explore beyond India.
              </p>
            </div>

            <Link
              href="/destinations"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#172554] transition hover:text-orange-500"
            >
              Discover Our Destinations
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              What Matters to Us
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#172554] sm:text-4xl">
              A better travel planning experience
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We want you to feel informed and confident while exploring your
              travel options. These principles guide the experience we aim to
              provide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 transition group-hover:bg-orange-500">
                    <Icon
                      size={27}
                      className="text-orange-500 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#172554]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel highlights */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Your Next Adventure
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172554] sm:text-4xl">
                Start exploring the possibilities.
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Every journey is different. Browse our destinations, explore
                available packages, and contact us to discuss your travel
                requirements.
              </p>

              <Link
                href="/tours"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#172554] px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
              >
                Find Your Next Trip
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-7">
              {travelHighlights.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-5 border-b border-gray-200 pb-7 last:border-b-0 last:pb-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-bold text-orange-500">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#172554]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future international travel */}
      <section className="relative isolate overflow-hidden bg-[#172554]">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85"
          alt="Travel essentials ready for an adventure"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#101e43]/90" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/15">
            <Compass className="text-orange-400" size={29} />
          </div>

          <span className="mt-5 inline-block text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Looking Ahead
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            India today. The world tomorrow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/80">
            India has countless places waiting to be explored. As we grow, our
            vision is to introduce international travel opportunities and help
            travellers discover even more of the world.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Plan With Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-7 rounded-2xl border border-orange-100 bg-orange-50 p-7 sm:p-10 lg:flex-row lg:items-center lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-[#172554] sm:text-3xl">
                Have a destination in mind?
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Tell us where you would like to go, and let&apos;s explore
                suitable travel options together.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Send an Enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
