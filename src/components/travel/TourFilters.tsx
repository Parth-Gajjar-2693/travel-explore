"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";

export interface TourFilterValues {
  search: string;
  destination: string;
  budget: string;
  duration: string;
  transport: string;
}

interface TourFiltersProps {
  filters: TourFilterValues;
  onFilterChange: (
    key: keyof TourFilterValues,
    value: string
  ) => void;
  onReset: () => void;
  destinations: {
    slug: string;
    name: string;
  }[];
}

export default function TourFilters({
  filters,
  onFilterChange,
  onReset,
  destinations,
}: TourFiltersProps) {
  const hasActiveFilters = Object.values(filters).some(
    (value) => value !== ""
  );

  const selectClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-orange-500" />

          <h2 className="text-lg font-bold text-blue-950">
            Find Your Trip
          </h2>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            <X className="h-4 w-4" />
            Clear filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* Search */}
        <div className="relative">
          <label
            htmlFor="tour-search"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Search
          </label>

          <Search className="absolute left-3 top-[42px] h-4 w-4 text-gray-400" />

          <input
            id="tour-search"
            type="search"
            value={filters.search}
            onChange={(event) =>
              onFilterChange("search", event.target.value)
            }
            placeholder="Search tours..."
            className={`${selectClass} pl-9`}
          />
        </div>

        {/* Destination */}
        <div>
          <label
            htmlFor="tour-destination"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Destination
          </label>

          <select
            id="tour-destination"
            value={filters.destination}
            onChange={(event) =>
              onFilterChange("destination", event.target.value)
            }
            className={selectClass}
          >
            <option value="">All destinations</option>

            {destinations.map((destination) => (
              <option
                key={destination.slug}
                value={destination.slug}
              >
                {destination.name}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="tour-budget"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Budget
          </label>

          <select
            id="tour-budget"
            value={filters.budget}
            onChange={(event) =>
              onFilterChange("budget", event.target.value)
            }
            className={selectClass}
          >
            <option value="">Any budget</option>
            <option value="10000">Under ₹10,000</option>
            <option value="20000">Under ₹20,000</option>
            <option value="50000">Under ₹50,000</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label
            htmlFor="tour-duration"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Duration
          </label>

          <select
            id="tour-duration"
            value={filters.duration}
            onChange={(event) =>
              onFilterChange("duration", event.target.value)
            }
            className={selectClass}
          >
            <option value="">Any duration</option>
            <option value="short">1–3 days</option>
            <option value="medium">4–7 days</option>
            <option value="long">8+ days</option>
          </select>
        </div>

        {/* Transport */}
        <div>
          <label
            htmlFor="tour-transport"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Transport
          </label>

          <select
            id="tour-transport"
            value={filters.transport}
            onChange={(event) =>
              onFilterChange("transport", event.target.value)
            }
            className={selectClass}
          >
            <option value="">Any transport</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Flight">Flight</option>
          </select>
        </div>
      </div>
    </div>
  );
}