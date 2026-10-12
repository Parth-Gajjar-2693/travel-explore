import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  MapPin,
  Mountain,
} from "lucide-react";

import SectionHeading from "@/components/travel/SectionHeading";
import TourCard from "@/components/travel/TourCard";

import { siteConfig } from "@/config/site";
import { destinations, tourPackages } from "@/data/travels";

interface DestinationDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({
  params,
}: DestinationDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `Explore ${destination.name}`,
    description: destination.description,
    openGraph: {
      title: `${destination.name} | ${siteConfig.name}`,
      description: destination.description,
      images: [destination.image],
    },
  };
}

export default async function DestinationDetailsPage({
  params,
}: DestinationDetailsPageProps) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  const destinationTours = tourPackages.filter(
    (tour) => tour.destinationSlug === destination.slug
  );

  const enquirySubject = `Travel Enquiry: ${destination.name}`;

  const enquiryBody = [
    "Hello Chamunda Tours & Travels,",
    "",
    `I am interested in travelling to ${destination.name}.`,
    "",
    "Please share the available tour packages, prices, and travel dates.",
    "",
    "Thank you.",
  ].join("\n");

  const enquiryUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    enquirySubject
  )}&body=${encodeURIComponent(enquiryBody)}`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm text-gray-500 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="transition hover:text-orange-600"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/destinations"
            className="transition hover:text-orange-600"
          >
            Destinations
          </Link>

          <span>/</span>

          <span className="truncate font-medium text-blue-950">
            {destination.name}
          </span>
        </div>
      </div>

      {/* Destination Hero */}
      <section className="relative overflow-hidden bg-blue-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <Link
              href="/destinations"
              className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-orange-400"
            >
              <ArrowLeft className="h-4 w-4" />
              All destinations
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-orange-300">
              <Compass className="h-4 w-4" />
              Discover India
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore
              <span className="block text-orange-400">
                {destination.name}
              </span>
            </h1>

            <p className="mt-5 flex items-center gap-2 text-blue-100">
              <MapPin className="h-5 w-5 shrink-0 text-orange-400" />
              {destination.state}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100">
              {destination.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#available-tours"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore Packages
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={enquiryUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-950"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-2xl sm:h-[440px]">
            <Image
              src={destination.image}
              alt={`Explore ${destination.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <Mountain className="h-6 w-6 text-orange-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Discover your next adventure
                  </p>

                  <p className="text-lg font-bold text-blue-950">
                    {destination.name}, {destination.state}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Overview */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Discover the Destination"
            title={`Why Visit ${destination.name}?`}
            description={destination.description}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-blue-950">
                Memorable Places
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Discover local attractions, beautiful scenery, and
                experiences that make {destination.name} special.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                <CalendarDays className="h-6 w-6 text-orange-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-blue-950">
                Flexible Travel Plans
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Explore available packages and discuss travel dates
                and duration with our team.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                <CheckCircle2 className="h-6 w-6 text-orange-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-blue-950">
                Find Your Package
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Compare the available tour options and enquire about
                the arrangements that suit your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tour Packages */}
      <section
        id="available-tours"
        className="section-padding scroll-mt-24 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore Tour Packages"
            title={`Tours in ${destination.name}`}
            description={`Explore available packages for ${destination.name} and find an itinerary that suits your travel plans.`}
          />

          {destinationTours.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {destinationTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-14 text-center">
              <Compass className="mx-auto h-10 w-10 text-gray-400" />

              <h2 className="mt-4 text-xl font-bold text-blue-950">
                Packages coming soon
              </h2>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-gray-500">
                We're preparing tour options for {destination.name}.
                Contact our team to discuss your travel requirements.
              </p>

              <a
                href={enquiryUrl}
                className="btn-primary mt-6"
              >
                Enquire About This Destination
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-orange-50 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">
            Ready to Explore {destination.name}?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Tell us about your travel plans and enquire about
            packages, dates, and pricing.
          </p>

          <a
            href={enquiryUrl}
            className="btn-primary mt-8"
          >
            Plan My Trip
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}