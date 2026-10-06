import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import CtaBand from "@/components/cta-band";
import BackToHomeButton from "@/components/back-to-home-button";
import { RewardsIcon } from "@/components/icons";

const seo = {
  name: "Corporate Rewards",
  title: "Corporate Rewards & Employee Offers",
  description:
    "Onboard your company so verified employees unlock exclusive Swiggy offers on Food Delivery, Dineout and Instamart, with real-time redemption tracking for HR.",
  path: "/corporate-rewards",
};

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: ["corporate rewards", "employee benefits", "employee discounts", "Swiggy corporate offers", "employee rewards program"],
});

const stats = [
  { label: "Verified employees", value: "3.1 lakh" },
  { label: "Corporate partners", value: "10K+" },
  { label: "Tier-1 audience", value: "High-quality" },
  { label: "Repeat rate", value: "1.85x" },
  { label: "Monthly visits", value: "90%+" },
];

const rewardTypes = [
  {
    title: "Exclusive Swiggy offers",
    detail:
      "Verified employees unlock offers across Food Delivery, Dineout, and Instamart.",
  },
  {
    title: "Swiggy One membership",
    detail:
      "Premium membership benefits for top performers and high-impact teams.",
  },
  {
    title: "Lifestyle partnerships",
    detail:
      "Select partnerships across Tech, Travel, Fashion, and Entertainment.",
  },
];

const journey = [
  {
    title: "Company onboarding",
    detail:
      "Share headcount, budgets, and reward cadences. We configure an admin dashboard within days.",
  },
  {
    title: "Employee access",
    detail:
      "Verified employees receive a personalized rewards storefront with curated offers.",
  },
  {
    title: "Redemption & analytics",
    detail:
      "Real-time redemption data, preference insights, and spend tracking for HR and Finance.",
  },
];

export default function CorporateRewardsPage() {
  return (
    <div className="px-6 py-14">
      <JsonLd
        data={serviceJsonLd({
          name: seo.name,
          description: seo.description,
          path: seo.path,
          serviceType: "Employee rewards and benefits",
        })}
      />
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <BackToHomeButton />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Corporate Rewards
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Onboard your company for exclusive Swiggy offers
            </h1>
            <p className="text-lg text-white/85">
              Enable verified employees to access exclusive Swiggy offers and
              rewards. Built for Tier-1 corporate audiences who value quality,
              convenience, and choice.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white">
              <span className="rounded-full border border-white/40 px-4 py-2">
                Tier-1 audience
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                High engagement
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                Verified employees
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <RewardsIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Rewards dashboard
                </p>
                <p className="text-sm text-white/75">
                  Track engagement, redemptions, and budgets in real time.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm"
                >
                  <p className="text-xs text-white/70">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {rewardTypes.map((reward) => (
            <div
              key={reward.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold text-ink">{reward.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{reward.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Employee journey
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              From signup to redemption in three steps
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              The experience is designed to feel premium, frictionless, and
              consistently rewarding.
            </p>
          </div>
          <div className="space-y-4">
            {journey.map((item, index) => (
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

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              What employees get
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>- Swiggy One membership benefits</li>
              <li>- Food, Instamart, and Dineout offers</li>
              <li>- Lifestyle partnerships across Tech, Travel, Fashion</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How companies onboard
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>- Dedicated enterprise manager for rollout</li>
              <li>- SSO-ready employee verification</li>
              <li>- Budget and reward cadence controls</li>
            </ul>
          </div>
        </div>

        <CtaBand
          title="Launch a rewards experience that keeps top talent engaged."
          description="Reach verified employees at scale with premium Swiggy and lifestyle rewards, backed by transparent reporting."
        />
      </section>
    </div>
  );
}
