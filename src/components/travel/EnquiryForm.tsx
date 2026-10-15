"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CalendarDays,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
  Users,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { destinations } from "@/data/travels";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number.")
    .max(15, "Phone number is too long.")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number."),
  destination: z.string().min(1, "Please select a destination."),
  travelDate: z.string().optional(),
  travellers: z
    .string()
    .min(1, "Please select the number of travellers."),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10";

const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      travellers: "2",
      message: "",
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setSubmitted(false);
    setFormError("");

    const destinationName =
      destinations.find((item) => item.slug === values.destination)?.name ??
      values.destination;

    const subject = `Travel Enquiry - ${destinationName}`;

    const body = [
      "Hello Chamunda Tours & Travels,",
      "",
      "I would like to enquire about a travel package.",
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Destination: ${destinationName}`,
      `Travel Date: ${values.travelDate || "Flexible"}`,
      `Travellers: ${values.travellers}`,
      "",
      "Message:",
      values.message,
      "",
      "Thank you.",
    ].join("\n");

    const mailtoUrl =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoUrl;
      setSubmitted(true);
      reset();
    } catch {
      setFormError(
        "We couldn't open your email application. Please contact us directly."
      );
    }
  };

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-8 lg:p-10">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-600">
          <MessageSquare className="h-4 w-4" />
          Travel Enquiry
        </span>

        <h2 className="mt-5 text-2xl font-bold text-blue-950 sm:text-3xl">
          Tell Us About Your Trip
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          Share your travel preferences, and prepare an enquiry for our team.
        </p>
      </div>

      {submitted && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

          <div>
            <p className="font-semibold text-green-800">
              Your enquiry details are ready.
            </p>

            <p className="mt-1 text-sm leading-6 text-green-700">
              If your email application opened, review the message and press
              Send to contact us. If it didn't open, please use our contact
              details instead.
            </p>
          </div>
        </div>
      )}

      {formError && (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="name"
                autoComplete="name"
                {...register("name")}
                placeholder="Enter your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`${inputClass} pl-10`}
              />
            </div>

            {errors.name && (
              <p id="name-error" className="mt-2 text-xs text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`${inputClass} pl-10`}
              />
            </div>

            {errors.email && (
              <p id="email-error" className="mt-2 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                {...register("phone")}
                placeholder="+91 98765 43210"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`${inputClass} pl-10`}
              />
            </div>

            {errors.phone && (
              <p id="phone-error" className="mt-2 text-xs text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Destination */}
          <div>
            <label htmlFor="destination" className={labelClass}>
              Preferred Destination <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <select
                id="destination"
                {...register("destination")}
                aria-invalid={!!errors.destination}
                aria-describedby={
                  errors.destination ? "destination-error" : undefined
                }
                className={`${inputClass} pl-10`}
              >
                <option value="">Select destination</option>

                {destinations.map((destination) => (
                  <option key={destination.id} value={destination.slug}>
                    {destination.name}
                  </option>
                ))}

                <option value="other">Other / Not decided</option>
              </select>
            </div>

            {errors.destination && (
              <p
                id="destination-error"
                className="mt-2 text-xs text-red-600"
              >
                {errors.destination.message}
              </p>
            )}
          </div>

          {/* Travel Date */}
          <div>
            <label htmlFor="travelDate" className={labelClass}>
              Preferred Travel Date
            </label>

            <div className="relative">
              <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="travelDate"
                type="date"
                min={minDate}
                {...register("travelDate")}
                className={`${inputClass} pl-10`}
              />
            </div>

            {errors.travelDate && (
              <p className="mt-2 text-xs text-red-600">
                {errors.travelDate.message}
              </p>
            )}
          </div>

          {/* Travellers */}
          <div>
            <label htmlFor="travellers" className={labelClass}>
              Number of Travellers <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Users className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <select
                id="travellers"
                {...register("travellers")}
                aria-invalid={!!errors.travellers}
                className={`${inputClass} pl-10`}
              >
                <option value="">Select travellers</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3-5">3–5 people</option>
                <option value="6-10">6–10 people</option>
                <option value="11+">11+ people</option>
              </select>
            </div>

            {errors.travellers && (
              <p className="mt-2 text-xs text-red-600">
                {errors.travellers.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Tell Us About Your Trip{" "}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Tell us about your preferred destination, budget, travel plans, or any special requirements..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${inputClass} resize-y`}
            />

            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <LoaderCircle className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}

          Prepare Enquiry Email
        </button>

        <p className="mt-4 text-xs leading-6 text-gray-400">
          Your email application must be configured to send the enquiry.
          Submitting this form does not send or store your information on
          our website.
        </p>
      </form>
    </div>
  );
}