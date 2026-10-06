import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import CtaBand from "@/components/cta-band";
import BackToHomeButton from "@/components/back-to-home-button";
import { ConciergeIcon } from "@/components/icons";

const seo = {
  name: "Concierge-Led Food & Dining",
  title: "Bulk Office Food Orders & Corporate Dining",
  description:
    "One concierge for bulk office meals (50+ thalis), onboarding lunches, workshops, team outings, offsites and town halls, with curated options and consolidated billing.",
  path: "/concierge-led-food-dining",
};

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: ["bulk food order for office", "corporate catering", "team lunch delivery", "office party food", "corporate dining"],
});

const useCases = [
  "Large-scale meal delivery (50+ thalis)",
  "Onboarding lunches and new-joiner welcomes",
  "Working lunches and day-long workshops",
  "Team outings and offsites",
  "Quarterly celebrations and town halls",
];

const highlights = [
  {
    title: "Reliable execution at scale",
    detail:
      "From team lunches to town halls, every request is managed end to end.",
  },
  {
    title: "Single point of coordination",
    detail:
      "One call to the concierge team with zero follow-ups across vendors.",
  },
  {
    title: "Curated restaurants and caterers",
    detail:
      "Options tailored to budget, dietary needs, and location preferences.",
  },
];

const paymentOptions = [
  "Pre-paid after option locking",
  "Pay on delivery via secure payment link",
  "Open PO with monthly consolidated billing",
  "Request-level PO at order confirmation",
];

const flow = [
  {
    title: "Share requirements",
    detail: "Headcount, dietary preferences, location, and timelines.",
  },
  {
    title: "Get suitable options",
    detail: "Concierge returns 3-5 curated options with pricing.",
  },
  {
    title: "Confirm option and pay",
    detail: "Lock the option and select the payment method.",
  },
  {
    title: "Enjoy a seamless experience",
    detail: "On-ground coordination with real-time updates.",
  },
];

export default function ConciergeLedFoodDiningPage() {
  return (
    <div className="px-6 py-14">
      <JsonLd
        data={serviceJsonLd({
          name: seo.name,
          description: seo.description,
          path: seo.path,
          serviceType: "Corporate catering and dining concierge",
        })}
      />
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <BackToHomeButton />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Concierge-Led Food & Dining
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Large-scale corporate meals, handled end to end
            </h1>
            <p className="text-lg text-white/85">
              From onboarding lunches to quarterly celebrations, Swiggy for Work
              offers a concierge-led experience that keeps your teams fed and
              your operations teams in control.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white">
              <span className="rounded-full border border-white/40 px-4 py-2">
                50+ thali deliveries
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                Dedicated concierge team
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                Single consolidated invoice
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <ConciergeIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Concierge control center
                </p>
                <p className="text-sm text-white/75">
                  Track events, ETA, and vendor communications in one view.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/85">
              <p className="font-semibold text-white">Typical use cases</p>
              <ul className="space-y-2">
                {useCases.slice(0, 3).map((useCase) => (
                  <li key={useCase}>- {useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Flexible payment options
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
            {paymentOptions.map((option) => (
              <li
                key={option}
                className="rounded-2xl border border-black/5 bg-surface-muted px-4 py-3"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How it works
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              A curated dining journey in four steps
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Every event is managed by a dedicated concierge so your internal
              teams can focus on the agenda.
            </p>
          </div>
          <div className="space-y-4">
            {flow.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Built for enterprise moments
          </p>
          <div className="mt-4 grid gap-3 text-sm text-slate-500 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-2xl border border-black/5 bg-surface-muted px-4 py-3"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>

        <CtaBand
          title="Give your teams an elevated dining experience."
          description="Plan the next onboarding lunch, offsite, or celebration with a single Swiggy for Work concierge."
        />
      </section>
    </div>
  );
}
