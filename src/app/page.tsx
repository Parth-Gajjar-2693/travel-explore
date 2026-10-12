import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bus,
  TrainFront,
  Plane,
  ShieldCheck,
  MapPinned,
  Headset,
} from "lucide-react";
import SectionHeading from "../components/travel/SectionHeading";
import DestinationCard from "../components/travel/DestinationCard";
import TourCard from "../components/travel/TourCard";
import { destinations, tourPackages } from "../data/travels";


const travelOptions = [
  {
    title: "Bus Tours",
    description:
      "Explore travel packages with bus transportation options.",
    Icon: Bus,
  },
  {
    title: "Train Journeys",
    description:
      "Discover packages that can include train travel.",
    Icon: TrainFront,
  },
  {
    title: "Flight Packages",
    description:
      "Explore packages with flight options for longer journeys.",
    Icon: Plane,
  },
];

const benefits = [
  {
    title: "Multiple Destinations",
    description:
      "Explore different destinations and discover suitable holiday packages.",
    Icon: MapPinned,
  },
  {
    title: "Flexible Travel Options",
    description:
      "Explore packages with different transport arrangements.",
    Icon: Bus,
  },
  {
    title: "Personal Assistance",
    description:
      "Contact the team to discuss your travel requirements.",
    Icon: Headset,
  },
  {
    title: "Plan with Confidence",
    description:
      "Review your itinerary and confirm the arrangements before travelling.",
    Icon: ShieldCheck,
  },
];

export default function HomePage() {
  const featuredTours = tourPackages.filter((tour) => tour.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90"
            alt="Beautiful travel landscape in India"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
        </div>

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:min-h-[680px] lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-orange-300 backdrop-blur sm:text-sm">
              Your Journey, Our Priority
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Discover India,
              <span className="block text-orange-400">
                One Journey at a Time.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore beautiful destinations, discover exciting holiday
              packages, and plan your next journey with Chamunda Tours & Travels.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600"
              >
                Explore Tour Packages
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Plan Your Trip
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <span>Explore India</span>
              <span>Bus, Train & Flight Options</span>
              <span>Flexible Enquiries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Explore India"
              title="Find Your Next Destination"
              description="From beautiful mountains to relaxing beaches, discover places that inspire your next journey."
            />

            <Link
              href="/destinations"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
            >
              View All Destinations
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Travel Packages"
              title="Explore Our Tour Packages"
              description="Discover sample holiday packages and explore the possibilities for your next trip."
            />

            <Link
              href="/tours"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
            >
              Browse All Tours
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.slice(0, 6).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Travel Your Way"
            title="Choose Your Travel Style"
            description="Explore packages with different transportation options, depending on the destination and available arrangements."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {travelOptions.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <Icon size={27} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>

                <Link
                  href="/tours"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                >
                  Explore Packages
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Chamunda"
            title="Let's Make Your Journey Memorable"
            description="Discover destinations, explore your options, and plan your journey with a clear understanding of the arrangements."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, description, Icon }) => (
              <div key={title} className="border-l-2 border-orange-400 pl-5">
                <Icon size={28} className="text-orange-400" />

                <h3 className="mt-4 text-lg font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-blue-100/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future International Travel */}
      <section className="section-padding bg-orange-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[2px] text-orange-600">
                Looking Ahead
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                More Destinations. More Possibilities.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our website is designed to grow with Chamunda Tours & Travels,
                with room to introduce international travel destinations in
                the future.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Talk to Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Where Will Your Next Journey Take You?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Explore available packages or contact Chamunda Tours & Travels to
            discuss your travel plans.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Make an Enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}