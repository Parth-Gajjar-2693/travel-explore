"use client";

import { useMemo, useState } from "react";
import { Compass, MapPin, Search } from "lucide-react";

import SectionHeading from "@/components/travel/SectionHeading";
import TourCard from "@/components/travel/TourCard";
import TourFilters, {
  type TourFilterValues,
} from "@/components/travel/TourFilters";
import { destinations, tourPackages } from "@/data/travels";


const initialFilters: TourFilterValues = {
  search: "",
  destination: "",
  budget: "",
  duration: "",
  transport: "",
};

export default function ToursPage() {
  const [filters, setFilters] =
    useState<TourFilterValues>(initialFilters);

  const filteredTours = useMemo(() => {
    return tourPackages.filter((tour) => {
      const searchTerm = filters.search.trim().toLowerCase();

      const matchesSearch =
        !searchTerm ||
        tour.title.toLowerCase().includes(searchTerm) ||
        tour.destination.toLowerCase().includes(searchTerm) ||
        tour.description.toLowerCase().includes(searchTerm);

      const matchesDestination =
        !filters.destination ||
        tour.destinationSlug === filters.destination;

      const matchesBudget =
        !filters.budget ||
        tour.startingPrice === undefined ||
        tour.startingPrice === null ||
        tour.startingPrice <= Number(filters.budget);

      const matchesDuration =
        !filters.duration ||
        (filters.duration === "short" &&
          tour.days <= 3) ||
        (filters.duration === "medium" &&
          tour.days >= 4 &&
          tour.days <= 7) ||
        (filters.duration === "long" &&
          tour.days >= 8);

      const matchesTransport =
        !filters.transport ||
        tour.transportTypes.includes(
          filters.transport as "Bus" | "Train" | "Flight"
        );

      return (
        matchesSearch &&
        matchesDestination &&
        matchesBudget &&
        matchesDuration &&
        matchesTransport
      );
    });
  }, [filters]);

  const handleFilterChange = (
    key: keyof TourFilterValues,
    value: string
  ) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setFilters({ ...initialFilters });
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-blue-950 px-4 py-20 sm:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-orange-300">
            <Compass className="h-4 w-4" />
            Discover your next adventure
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find the Perfect
            <span className="block text-orange-400">
              Tour Package
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Explore beautiful destinations across India, discover
            memorable experiences, and find a trip that suits your
            travel plans.
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-400" />
              Beautiful destinations
            </span>

            <span className="flex items-center gap-2">
              <Search className="h-4 w-4 text-orange-400" />
              Packages for every journey
            </span>
          </div>
        </div>
      </section>

      {/* Tours Listing */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore Our Packages"
            title="Your Next Journey Starts Here"
            description="Browse our sample tour packages and use the filters to find destinations and travel options that match your preferences."
          />

          <div className="mt-10">
            <TourFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              destinations={destinations}
            />
          </div>

          {/* Results */}
          <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-bold text-blue-950">
                {filteredTours.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-blue-950">
                {tourPackages.length}
              </span>{" "}
              tour packages
            </p>

            {(filters.search ||
              filters.destination ||
              filters.budget ||
              filters.duration ||
              filters.transport) && (
              <button
                type="button"
                onClick={handleReset}
                className="self-start text-sm font-semibold text-orange-600 hover:text-orange-700 sm:self-auto"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Tour Cards */}
          {filteredTours.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <Search className="mx-auto h-10 w-10 text-gray-400" />

              <h2 className="mt-4 text-xl font-bold text-blue-950">
                No tours found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or removing some filters.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="btn-primary mt-6"
              >
                View All Packages
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}