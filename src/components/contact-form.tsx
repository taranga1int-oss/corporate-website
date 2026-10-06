"use client";

import { FormEvent, useState } from "react";

const offerings = [
  "Bill to Company",
  "Corporate Rewards",
  "Gift Cards",
  "Concierge-Led Food & Dining",
] as const;

const cities = [
  "Bengaluru",
  "Mumbai",
  "Delhi",
  "Gurugram",
  "Noida",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
  "Kochi",
  "Coimbatore",
  "Indore",
  "Lucknow",
] as const;

const OTHER_CITY = "Other";

const contactFormEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ?? "";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [cityChoice, setCityChoice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedOfferings = formData
      .getAll("offering")
      .map((value) => String(value).trim())
      .filter(Boolean);

    const city =
      cityChoice === OTHER_CITY
        ? String(formData.get("otherCity") ?? "").trim()
        : cityChoice;

    if (!city) {
      setSubmissionState("error");
      setFeedbackMessage("Please select or enter your city.");
      return;
    }

    if (!selectedOfferings.length) {
      setSubmissionState("error");
      setFeedbackMessage("Select at least one solution before submitting.");
      return;
    }

    if (!contactFormEndpoint) {
      setSubmissionState("error");
      setFeedbackMessage(
        "The Google Sheets integration is not configured yet.",
      );
      return;
    }

    const payload = new URLSearchParams({
      name: String(formData.get("name") ?? "").trim(),
      designation: String(formData.get("designation") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      city,
      offerings: selectedOfferings.join(", "),
      pageUrl: window.location.href,
      source: "swiggy-for-work-website",
    });

    setSubmissionState("submitting");
    setFeedbackMessage("");

    try {
      await fetch(contactFormEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      form.reset();
      setCityChoice("");
      setSubmissionState("success");
      setFeedbackMessage(
        "Thanks. Your details have been shared with the team.",
      );
    } catch {
      setSubmissionState("error");
      setFeedbackMessage(
        "Something went wrong while submitting the form. Please try again.",
      );
    }
  }

  return (
    <form className="grid gap-4 text-sm text-ink" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-ink" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-ink" htmlFor="designation">
            Designation
          </label>
          <input
            id="designation"
            name="designation"
            autoComplete="organization-title"
            placeholder="Your role"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-ink" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-ink" htmlFor="phone">
            Mobile Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            required
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-ink" htmlFor="city">
            City
          </label>
          <select
            id="city"
            name="city"
            required
            value={cityChoice}
            onChange={(event) => setCityChoice(event.target.value)}
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink invalid:text-slate-400 [&>option]:text-ink"
          >
            <option value="" disabled>
              Select your city
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
            <option value={OTHER_CITY}>Other</option>
          </select>
        </div>
        {cityChoice === OTHER_CITY ? (
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-ink" htmlFor="otherCity">
              Your City
            </label>
            <input
              id="otherCity"
              name="otherCity"
              autoComplete="address-level2"
              placeholder="Enter your city"
              required
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
            />
          </div>
        ) : null}
      </div>
      <fieldset className="flex flex-col gap-3">
        <legend className="font-semibold text-ink">
          Solution that interests you
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {offerings.map((offering) => (
            <label
              key={offering}
              className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink"
            >
              <input
                type="checkbox"
                name="offering"
                value={offering}
                className="h-4 w-4 accent-brand"
              />
              <span>{offering}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={submissionState === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submissionState === "submitting" ? "Submitting..." : "Submit"}
      </button>
      {feedbackMessage ? (
        <p
          aria-live="polite"
          className={
            submissionState === "success"
              ? "text-sm font-medium text-green-700"
              : "text-sm font-medium text-brand"
          }
        >
          {feedbackMessage}
        </p>
      ) : null}
    </form>
  );
}
