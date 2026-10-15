import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import EnquiryForm from "@/components/travel/EnquiryForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Chamunda Tours & Travels to discuss destinations, tour packages, travel dates, and your next holiday across India.",
};

export default function ContactPage() {
  const emailIsConfigured =
    siteConfig.email.trim() !== "" &&
    siteConfig.email !== "your-email@example.com";

  const phoneIsConfigured =
    siteConfig.phone.trim() !== "" &&
    siteConfig.phone !== "+910000000000";

  const phoneHref = siteConfig.phone.replace(/[^\d+]/g, "");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-orange-300">
            <MessageCircle className="h-4 w-4" />
            We're Here to Help
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Plan Your
            <span className="block text-orange-400">
              Next Adventure
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            Have a destination in mind? Tell us about your travel plans
            and explore the possibilities with Chamunda Tours & Travels.
          </p>

          <Link
            href="/tours"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Explore Tour Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Information */}
          <div>
            <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
              Get in Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
              We'd Love to Hear From You
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you're planning a family holiday, a getaway with
              friends, or a solo adventure, share your preferences and
              we'll help you explore your options.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-blue-950">
                    Email Us
                  </h3>

                  {emailIsConfigured ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-2 block break-all text-sm text-gray-600 transition hover:text-orange-600"
                    >
                      {siteConfig.email}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">
                      Email address to be configured
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-blue-950">
                    Call Us
                  </h3>

                  {phoneIsConfigured ? (
                    <a
                      href={`tel:${phoneHref}`}
                      className="mt-2 block text-sm text-gray-600 transition hover:text-orange-600"
                    >
                      {siteConfig.phone}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">
                      Phone number to be configured
                    </p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-blue-950">
                    Location
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-blue-950">
                    Enquiry Availability
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Send us your travel requirements through the enquiry
                    form. We'll need to confirm our response hours and
                    availability before publishing them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div id="travel-enquiry" className="scroll-mt-24">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-orange-50 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">
            Still Exploring Your Options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Browse our available destinations and sample packages before
            deciding where to go.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/destinations" className="btn-primary">
              Explore Destinations
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-full border border-blue-950 px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-950 hover:text-white"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}