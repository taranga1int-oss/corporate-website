import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import CtaBand from "@/components/cta-band";
import BackToHomeButton from "@/components/back-to-home-button";
import { GiftIcon, RewardsIcon, WalletIcon } from "@/components/icons";

const seo = {
  name: "Swiggy Gift Cards",
  title: "Swiggy Gift Cards for Corporate Gifting",
  description:
    "Reward great work and celebrate birthdays and festivals with Swiggy Gift Cards, usable across Food, Dineout and Instamart and delivered instantly via email or SMS.",
  path: "/gift-cards",
};

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: ["Swiggy gift cards", "corporate gift cards", "employee gift cards", "Diwali gifts for employees", "bulk gift cards"],
});

const useCases = [
  {
    title: "Rewards",
    detail: "Recognize high-impact teams with instant Swiggy Gift Cards.",
  },
  {
    title: "Birthdays",
    detail: "Celebrate milestones and moments with easy distribution.",
  },
  {
    title: "Allowances",
    detail: "Offer flexible meal allowances with prepaid cards.",
  },
];

const flow = [
  {
    title: "Choose a budget",
    detail: "Set denominations, volumes, and delivery dates in one dashboard.",
  },
  {
    title: "Upload recipients",
    detail:
      "Securely share employee lists or integrate HRIS for automated distribution.",
  },
  {
    title: "Send instantly",
    detail:
      "Gift cards are delivered via email or SMS with redemption instructions.",
  },
  {
    title: "Track usage",
    detail:
      "Monitor redemption rates, expiry status, and engagement outcomes.",
  },
];

const workflowVisuals = [
  { title: "Budget setup", Icon: WalletIcon },
  { title: "Bulk dispatch", Icon: GiftIcon },
  { title: "Live tracking", Icon: RewardsIcon },
];

export default function GiftCardsPage() {
  return (
    <div className="px-6 py-14">
      <JsonLd
        data={serviceJsonLd({
          name: seo.name,
          description: seo.description,
          path: seo.path,
          serviceType: "Corporate gift cards",
        })}
      />
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <BackToHomeButton />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Gift Cards
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Reward great work with Swiggy Gift Cards
            </h1>
            <p className="text-lg text-white/85">
              Instant, hassle-free gifting for rewards, birthdays, and
              allowances, backed by enterprise-grade controls.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white">
              <span className="rounded-full border border-white/40 px-4 py-2">
                Prepaid solutions
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                Instant distribution
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                Centralized reporting
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <GiftIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Gift card command center
                </p>
                <p className="text-sm text-white/75">
                  Schedule, distribute, and track redemptions in one portal.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {["Multiple denominations", "Bulk distribution", "Usage analytics"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/85"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Why choose Swiggy Gift Cards?
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
            {[
              "Attractive bulk discounts",
              "Pan-India acceptance",
              "Use across Food, Dineout and Instamart",
              "Instant, hassle-free distribution",
              "Flexible denominations",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-black/5 bg-surface-muted px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How it works
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              A simple, scalable gifting workflow
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Designed for enterprise HR and Admin teams with automation and
              reporting built in.
            </p>
            <div className="mt-6 rounded-2xl border border-black/5 bg-surface-muted p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {workflowVisuals.map((item) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-black/5 bg-white px-3 py-3 text-center"
                    >
                      <span className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-2 text-xs font-semibold text-ink">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-full bg-brand/15 p-1">
                <div className="h-1.5 w-2/3 rounded-full bg-brand" />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Automated gifting progress
              </p>
            </div>
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

        <CtaBand
          title="Launch gifting campaigns without operational load."
          description="Recognize teams, celebrate festivals, and reward performance with enterprise-grade prepaid cards."
        />
      </section>
    </div>
  );
}
