import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Compass,
  Mail,
  MapPin,
  Plane,
  ShieldCheck,
  TrainFront,
  Bus,
} from "lucide-react";

import SectionHeading from "@/components/travel/SectionHeading";
import TourCard from "@/components/travel/TourCard";

import { siteConfig } from "@/config/site";
import { destinations, tourPackages } from "@/data/travels";

interface TourDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return tourPackages.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const tour = tourPackages.find((item) => item.slug === slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      title: `${tour.title} | ${siteConfig.name}`,
      description: tour.description,
      images: [tour.image],
    },
  };
}

export default async function TourDetailsPage({
  params,
}: TourDetailsPageProps) {
  const { slug } = await params;

  const tour = tourPackages.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  const destination = destinations.find(
    (item) => item.slug === tour.destinationSlug,
  );

  const relatedTours = tourPackages
    .filter(
      (item) =>
        item.destinationSlug === tour.destinationSlug &&
        item.slug !== tour.slug,
    )
    .slice(0, 3);

  const transportIcons = {
    Bus,
    Train: TrainFront,
    Flight: Plane,
  };

  const enquirySubject = `Tour Enquiry: ${tour.title}`;

  const enquiryBody = [
    "Hello Chamunda Tours & Travels,",
    "",
    "I am interested in the following tour package:",
    `Package: ${tour.title}`,
    `Destination: ${tour.destination}`,
    `Duration: ${tour.duration}`,
    "",
    "Please share the package price, available dates, and booking details.",
    "",
    "Thank you.",
  ].join("\n");

  const enquiryUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    enquirySubject,
  )}&body=${encodeURIComponent(enquiryBody)}`;

  return (
    <>
      {/* Breadcrumb / Back Navigation */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm text-gray-500 sm:px-6 lg:px-8">
          <Link href="/" className="transition hover:text-orange-600">
            Home
          </Link>

          <span>/</span>

          <Link href="/tours" className="transition hover:text-orange-600">
            Tour Packages
          </Link>

          <span>/</span>

          <span className="truncate font-medium text-blue-950">
            {tour.title}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Link
              href="/tours"
              className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-orange-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all packages
            </Link>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-orange-300">
              <Compass className="h-4 w-4" />
              {tour.category}
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {tour.title}
            </h1>

            <p className="mt-5 flex items-center gap-2 text-blue-100">
              <MapPin className="h-5 w-5 shrink-0 text-orange-400" />
              {tour.destination}
              {destination ? `, ${destination.state}` : ""}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100">
              {tour.description}
            </p>

            {/* Package Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white">
                <CalendarDays className="h-4 w-4 text-orange-400" />
                {tour.duration}
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white">
                <Clock className="h-4 w-4 text-orange-400" />
                {tour.days} days, {tour.nights} nights
              </span>
            </div>

            {/* Transport */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-white">
                Available transport options
              </p>

              <div className="flex flex-wrap gap-3">
                {tour.transportTypes.map((transport) => {
                  const Icon = transportIcons[transport];

                  return (
                    <span
                      key={transport}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-950"
                    >
                      <Icon className="h-4 w-4 text-orange-500" />
                      {transport}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={enquiryUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <Mail className="h-5 w-5" />
                Enquire About This Tour
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-950"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-4 text-xs leading-6 text-blue-200">
              Package pricing and availability will be confirmed by our travel
              team.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-2xl sm:h-[440px]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-sm font-medium text-gray-500">
                  Your next adventure
                </p>

                <p className="mt-1 text-xl font-bold text-blue-950">
                  {tour.destination}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 -z-10 h-32 w-32 rounded-full bg-orange-400/30 blur-2xl sm:-right-5" />
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_340px]">
          {/* Main Column */}
          <div className="space-y-10">
            {/* Highlights */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-blue-950">
                Tour Highlights
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Discover what makes this journey special.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {tour.highlights.map((highlight, index) => (
                  <div
                    key={`${highlight}-${index}`}
                    className="flex items-start gap-3 rounded-xl bg-orange-50/70 p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Check className="h-4 w-4" />
                    </span>

                    <p className="text-sm leading-6 text-gray-700">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-blue-950">
                Tour Itinerary
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                A day-by-day overview of your journey.
              </p>

              <div className="mt-8 space-y-0">
                {tour.itinerary.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      {index !== tour.itinerary.length - 1 && (
                        <div className="absolute bottom-0 left-[21px] top-11 w-px bg-orange-200" />
                      )}
                    </div>

                    {/* Itinerary Content */}
                    <div className="flex-1 pb-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        Day {item.day}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-blue-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions and Exclusions */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-7">
                <h2 className="text-xl font-bold text-blue-950">
                  What's Included
                </h2>

                <div className="mt-6 space-y-4">
                  {tour.inclusions.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-start gap-3"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                      <p className="text-sm leading-6 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm sm:p-7">
                <h2 className="text-xl font-bold text-blue-950">
                  What's Not Included
                </h2>

                <div className="mt-6 space-y-4">
                  {tour.exclusions.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />

                      <p className="text-sm leading-6 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Enquiry Card */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <ShieldCheck className="h-4 w-4" />
                Plan Your Trip
              </span>

              <h2 className="mt-5 text-2xl font-bold text-blue-950">
                Ready to Explore?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Contact our team to discuss your travel dates, group size,
                transport options, and package pricing.
              </p>

              <div className="mt-6 space-y-4 border-y border-gray-100 py-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">Destination</span>

                  <span className="text-right text-sm font-semibold text-blue-950">
                    {tour.destination}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">Duration</span>

                  <span className="text-sm font-semibold text-blue-950">
                    {tour.days} days / {tour.nights} nights
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">Transport</span>

                  <span className="text-right text-sm font-semibold text-blue-950">
                    {tour.transportTypes.join(", ")}
                  </span>
                </div>
              </div>

              <a
                href={enquiryUrl}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                <Mail className="h-5 w-5" />
                Send an Enquiry
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                No online payment required to enquire.
              </p>
            </div>

            {/* Destination Link */}
            {destination && (
              <Link
                href={`/destinations/${destination.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-orange-200 hover:shadow-md"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="64px"
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-500">
                    Explore destination
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    {destination.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {destination.state}
                  </p>
                </div>

                <ArrowRight className="h-5 w-5 shrink-0 text-orange-500 transition group-hover:translate-x-1" />
              </Link>
            )}
          </aside>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Keep Exploring"
              title="You May Also Like"
              description="Explore more packages for your next memorable journey."
            />

            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((relatedTour) => (
                <TourCard key={relatedTour.id} tour={relatedTour} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full border border-blue-950 px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-950 hover:text-white"
              >
                View All Tour Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
