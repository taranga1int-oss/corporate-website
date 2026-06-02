import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/components/contact-form";
import { testimonials } from "@/data/testimonials";
import {
  ChevronRight,
  ConciergeIcon,
  GiftIcon,
  RewardsIcon,
  WalletIcon,
} from "@/components/icons";

const solutions = [
  {
    title: "Bill to Company",
    description:
      "Eliminate reimbursements with a streamlined bill-to-company workflow.",
    href: "/corporate-wallet",
    icon: WalletIcon,
    showExploreOfferingCta: true,
  },
  {
    title: "Corporate Rewards",
    description:
      "Get access to exclusive corporate rewards on Food, Instamart, Dineout and more.",
    href: "/corporate-rewards",
    icon: RewardsIcon,
    showExploreOfferingCta: false,
  },
  {
    title: "Gift Cards",
    description: "Reward great work with Swiggy Gift Cards.",
    href: "/gift-cards",
    icon: GiftIcon,
    showExploreOfferingCta: false,
  },
  {
    title: "Concierge-Led Food & Dining",
    description:
      "Hassle-free bulk food delivery and seamless restaurant bookings for team outings.",
    href: "/concierge-led-food-dining",
    icon: ConciergeIcon,
    showExploreOfferingCta: false,
  },
];

const whySwiggy: Array<{
  title: string;
  description: string;
  imageSrc: string;
}> = [
  {
    title: "Long Standing Expertise",
    description:
      "10+ years pioneering food delivery and dining out - a trusted, category-defining brand embedded in daily Indian life.",
    imageSrc: "/why-swiggy/1.png",
  },
  {
    title: "Vast Restaurant Network",
    description:
      "A wide choice that delights, without the hassle of coordinating with multiple restaurants or dealing with inconsistent experiences.",
    imageSrc: "/why-swiggy/2.png",
  },
  {
    title: "Effortlessly Simple",
    description:
      "Fast onboarding with seamless ordering, billing, and support - adding meaningful value to your everyday food needs.",
    imageSrc: "/why-swiggy/3.png",
  },
];

export default function Home() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
    : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swiggy for Work",
    provider: {
      "@type": "Organization",
      name: "Swiggy for Work",
      url: "https://www.swiggyforwork.com",
    },
    serviceType: "Corporate food delivery, rewards, and dining services",
    areaServed: "IN",
    audience: {
      "@type": "BusinessAudience",
      name: "Enterprise HR, Admin, and Finance teams",
    },
  };

  return (
    <div className="bg-hero">
      <Script
        id="schema-b2b"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative overflow-hidden px-6 pb-6 pt-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5 text-white">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Introducing Swiggy for Work
              </h1>
              <p className="text-2xl font-semibold text-white">
                Unparalleled convenience for workplace meals.
              </p>
              <p className="text-lg text-white/85">
                Simplify food for every workplace moment &mdash; from team dinners at
                restaurants and quick lunches on the go, to in-office
                celebrations.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="flex h-[405px] w-full max-w-[38rem] items-center justify-center overflow-hidden rounded-3xl sm:h-[459px]">
                <Image
                  src={`${assetBase}/table-swiggy.png`}
                  alt="Swiggy for Work team meals"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 pb-14 pt-6">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-white">
              Solutions
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              Get in Touch <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-[rgba(237,82,15,0.6)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">
                        {solution.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  {solution.showExploreOfferingCta ? (
                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-ink">
                      Explore solution
                      <ChevronRight className="h-4 w-4 text-brand" />
                    </div>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-swiggy" className="px-6 py-14">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-white">
              Why choose Swiggy for Work
            </h2>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              Trusted by HR, Admin & Finance teams
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whySwiggy.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-black/10 bg-white p-6 text-center shadow-soft"
                >
                  <div className="mx-auto">
                    <Image
                      src={`${assetBase}${item.imageSrc}`}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="mx-auto h-[150px] w-[150px] object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-14">
        <div className="mx-auto w-full max-w-6xl space-y-8">
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
                      <p className="whitespace-nowrap text-[15px] text-slate-700">
                        {testimonial.designation}
                      </p>
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
        </div>
      </section>

      <section id="contact" className="px-6 pb-16 pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 rounded-3xl border border-white/60 bg-white p-10 text-ink shadow-soft lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Get in touch
              </p>
              <h2 className="text-3xl font-semibold text-ink">Talk to our team</h2>
              <p className="text-slate-700">
                Looking for more info? Share your details and our team will get
                in touch with relevant details within 24 working hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
