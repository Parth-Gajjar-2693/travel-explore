import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Bus,
  TrainFront,
  Plane,
} from "lucide-react";
import { TourPackage } from "@/data/travels";


interface TourCardProps {
  tour: TourPackage;
}

const transportIcons = {
  Bus,
  Train: TrainFront,
  Flight: Plane,
};

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/tours/${tour.slug}`}
        className="relative block h-60 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-orange-500"
      >
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
          {tour.category}
        </span>

        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-medium text-white">
          <MapPin size={15} />
          {tour.destination}
        </span>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug text-slate-900">
            <Link
              href={`/tours/${tour.slug}`}
              className="transition hover:text-orange-600"
            >
              {tour.title}
            </Link>
          </h3>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <CalendarDays size={17} className="shrink-0 text-orange-500" />
          {tour.duration}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tour.transportTypes.map((transport) => {
            const Icon = transportIcons[transport];

            return (
              <span
                key={transport}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600"
              >
                <Icon size={14} />
                {transport}
              </span>
            );
          })}
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
          {tour.description}
        </p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            View Package Details
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}