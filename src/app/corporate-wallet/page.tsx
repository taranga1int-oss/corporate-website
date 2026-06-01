import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/cta-band";
import BackToHomeButton from "@/components/back-to-home-button";
import { testimonials } from "@/data/testimonials";
import {
  CelebrationIcon,
  LateNightIcon,
  MeetingsIcon,
  TeamDinnerIcon,
  TrainingIcon,
  TravelMealIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Bill to Company",
  description:
    "Digitize corporate meal and travel expenses with a bill-to-company workflow and myBiz integration.",
};

const platformBlocks = [
  {
    title: "No out-of-pocket spends",
    bullets: [
      "Reimbursements eliminated",
      "No bills, submissions, or follow-ups",
      "Corporate payment at checkout",
    ],
  },
  {
    title: "Single monthly invoice",
    bullets: [
      "Simpler invoicing and audit trail",
      "Budget control with real-time visibility",
      "Lower admin ops for finance teams",
    ],
  },
  {
    title: "Simplified compliance",
    bullets: [
      "GST billing issues resolved",
      "Centralized reporting and invoices",
      "Policy-led spend limits by employee group.",
    ],
  },
];

const heroTiles = [
  "No out-of-pocket spends",
  "Single monthly invoice",
  "Simplified compliance",
];

const useCaseColumns = [
  {
    title: "Employees",
    items: [
      {
        label: "Meals while travelling at restaurants or at office",
        icon: TravelMealIcon,
      },
      { label: "Late night meals in office", icon: LateNightIcon },
      { label: "Team dinners at restaurants", icon: TeamDinnerIcon },
      { label: "Client meetings", icon: MeetingsIcon },
    ],
  },
  {
    title: "HR / Admin Team",
    items: [
      { label: "Celebrations and townhalls", icon: CelebrationIcon },
      { label: "Hiring drives", icon: TrainingIcon },
      { label: "Trainings", icon: TrainingIcon },
      { label: "Team meetings", icon: MeetingsIcon },
    ],
  },
];

export default function CorporateWalletPage() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
    : "";

  return (
    <div className="px-6 py-14">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-white">
            <BackToHomeButton />
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Bill to Company
            </h1>
            <p className="text-lg text-white/85">
              Eliminating reimbursements, enhancing efficiency. Transform how
              your organization manages employee meal benefits with a
              streamlined, digital-first solution that saves time and reduces
              administrative effort.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroTiles.map((tile) => (
                <div
                  key={tile}
                  className="flex min-h-[72px] items-center justify-center rounded-2xl border border-white/35 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {tile}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[82%] min-w-[320px] max-w-[460px] overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-soft">
              <Image
                src={`${assetBase}/corporate-hero-banner.jpeg?v=20260216-2232`}
                alt="Bill to Company hero"
                width={1400}
                height={900}
                priority
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 52vw, 34vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Use cases
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {useCaseColumns.map((column) => {
              return (
                <div
                  key={column.title}
                  className="rounded-2xl border border-black/5 bg-surface-muted/70 p-3"
                >
                  <div className="mb-3 rounded-xl bg-brand px-3 py-2 text-center text-white">
                    <p className="text-center text-sm font-semibold text-white">
                      {column.title}
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-slate-600">
                    {column.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-3 py-2.5"
                        >
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                            <ItemIcon className="h-4 w-4" />
                          </span>
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-left text-3xl font-bold text-white">
            Unparalleled convenience for corporates
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {platformBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
              >
                <h2 className="text-xl font-semibold text-ink">{block.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  {block.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <section id="testimonials" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Customer Cheers</h2>
          </div>
          <div className="grid snap-x snap-mandatory grid-flow-col auto-cols-[92%] gap-6 overflow-x-auto pb-4 pt-2 sm:auto-cols-[78%] md:auto-cols-[58%] lg:auto-cols-[calc((100%-3rem)/3)]">
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.companyLogo}`}
                className="snap-start flex h-full flex-col rounded-3xl border border-white/60 bg-white p-6 shadow-soft md:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex whitespace-nowrap rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand">
                    {testimonial.offering}
                  </span>
                  <div className="flex h-12 min-w-0 flex-1 items-center justify-center overflow-hidden">
                    <Image
                      src={`${assetBase}${testimonial.companyLogo}`}
                      alt={testimonial.companyLogoAlt}
                      width={testimonial.companyLogoWidth}
                      height={testimonial.companyLogoHeight}
                      className="h-auto max-h-16 w-auto max-w-full object-contain"
                    />
                  </div>
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-slate-800">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div className="text-base">
                    <p className="font-bold text-ink">{testimonial.name}</p>
                    <p className="text-slate-700">{testimonial.designation}</p>
                    <p className="text-slate-700">{testimonial.company}</p>
                  </div>
                  {testimonial.headshot ? (
                    <Image
                      src={`${assetBase}${testimonial.headshot}`}
                      alt={testimonial.headshotAlt ?? testimonial.name}
                      width={110}
                      height={110}
                      className={
                        testimonial.headshotClassName ??
                        "h-[92px] w-[92px] shrink-0 rounded-2xl object-cover"
                      }
                    />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand
          title="Replace manual reimbursements with a digital corporate wallet."
          description="Launch policy-driven meal allowances, monitor spend in real time, and close books faster with myBiz integration."
        />
      </section>
    </div>
  );
}
