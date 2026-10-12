import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MapPin, Plane } from "lucide-react";

import SectionHeading from "@/components/travel/SectionHeading";
import DestinationCard from "@/components/travel/DestinationCard";
import { destinations } from "@/data/travels";

export const metadata: Metadata = {
  title: "Explore Destinations",
  description:
    "Discover beautiful destinations across India with Chamunda Tours & Travels. Explore Kashmir, Rajasthan, Kerala, Goa, Himachal Pradesh, and more.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-orange-300">
            <Compass className="h-4 w-4" />
            Discover Incredible India
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Explore Places
            <span className="block text-orange-400">Worth Remembering</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            From the mountains of Kashmir to the beaches of Goa, discover
            inspiring destinations and plan your next memorable journey with
            Chamunda Tours & Travels.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#all-destinations"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Explore Destinations
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-950"
            >
              View Tour Packages
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-400" />
              Beautiful Indian destinations
            </span>

            <span className="flex items-center gap-2">
              <Plane className="h-4 w-4 text-orange-400" />
              Flexible travel options
            </span>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section
        id="all-destinations"
        className="section-padding scroll-mt-24 bg-gray-50"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Find Your Next Destination"
            title="Where Would You Like to Go?"
            description="Explore our destination collection and find the perfect place for your next holiday."
          />

          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {destinations.length === 0 && (
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
              <MapPin className="mx-auto h-10 w-10 text-gray-400" />

              <h2 className="mt-4 text-xl font-bold text-blue-950">
                Destinations coming soon
              </h2>

              <p className="mt-2 text-gray-500">
                We're preparing exciting destinations for your next trip.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* International Travel Teaser */}
      <section className="section-padding bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-3xl sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Eiffel Tower in Paris"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Coming in the future
              </p>

              <p className="mt-1 text-xl font-bold text-blue-950">
                International Adventures
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              <Plane className="h-4 w-4" />
              Beyond India
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
              Your Next Big Adventure Could Be Across the World
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We're focusing on memorable journeys across India, with
              international travel as a future expansion. Whether you dream of
              mountains, beaches, or vibrant cities, your next adventure starts
              with a plan.
            </p>

            <Link href="/contact" className="btn-primary mt-8">
              Discuss Your Travel Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-950 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not Sure Where to Go?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Tell us what kind of holiday you're planning, and explore the
            possibilities with Chamunda Tours & Travels.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
