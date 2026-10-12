import Link from "next/link";
import { ArrowRight, Compass, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[540px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
            <Compass size={16} />
            Your Journey, Our Priority
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Every Journey
            <span className="block text-orange-500">Starts with a Dream.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover new places, plan memorable holidays, and make every journey
            special with Chamunda Tours & Travels.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tours"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold"
            >
              Explore Our Tours
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-orange-300 hover:bg-orange-50"
            >
              <MapPin size={18} className="text-orange-500" />
              Plan Your Trip
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Tell us where you want to go. Let&apos;s plan the journey together.
          </p>
        </div>

        <div className="relative hidden min-h-[360px] items-center justify-center lg:flex">
          <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-blue-900 to-blue-700 shadow-2xl" />

          <div className="relative mx-12 flex min-h-[330px] flex-col items-center justify-center rounded-[1.5rem] border border-white/20 bg-white/10 p-10 text-center text-white backdrop-blur-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 shadow-lg">
              <Compass size={42} />
            </div>

            <h2 className="mt-6 text-3xl font-bold">Your Next Adventure</h2>

            <p className="mt-3 max-w-xs text-sm leading-7 text-blue-100">
              New destinations. Beautiful memories. Journeys worth remembering.
            </p>

            <div className="mt-7 h-1 w-16 rounded-full bg-orange-400" />
          </div>

          <div className="absolute -bottom-1 right-0 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Travel with confidence
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              Chamunda Tours & Travels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
