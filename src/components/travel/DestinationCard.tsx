import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Destination } from "@/data/travels";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
    >
      <div className="relative h-64 overflow-hidden sm:h-72">
        <Image
          src={destination.image}
          alt={`Explore ${destination.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="mb-2 flex items-center gap-1.5 text-sm text-white/80">
            <MapPin size={15} />
            {destination.state}
          </div>

          <div className="flex items-end justify-between gap-3">
            <h3 className="text-2xl font-bold">{destination.name}</h3>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:bg-orange-500 group-hover:text-white">
              <ArrowUpRight size={19} />
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">
          {destination.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-600">
          Explore destination
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}