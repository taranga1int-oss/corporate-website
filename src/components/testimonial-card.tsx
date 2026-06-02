import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  assetBase: string;
  testimonial: Testimonial;
};

export default function TestimonialCard({
  assetBase,
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="snap-start flex h-full flex-col rounded-[28px] border border-white/60 bg-white p-5 shadow-soft sm:p-6 md:p-7">
      <div className="grid min-h-[92px] grid-cols-1 content-start items-start gap-3 sm:min-h-16 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
        <span className="inline-flex justify-self-start whitespace-nowrap rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-semibold text-brand sm:px-4">
          {testimonial.offering}
        </span>
        <div className="flex min-w-0 items-center justify-end overflow-visible">
          <Image
            src={`${assetBase}${testimonial.companyLogo}`}
            alt={testimonial.companyLogoAlt}
            width={testimonial.companyLogoWidth}
            height={testimonial.companyLogoHeight}
            className={`h-auto w-auto max-w-full object-contain ${
              testimonial.companyLogoClassName ??
              "max-h-11 max-w-[240px] sm:max-h-14 sm:max-w-full"
            }`}
          />
        </div>
      </div>

      <p className="mt-5 text-[17px] leading-[1.65] text-slate-800 sm:text-base sm:leading-relaxed lg:flex-1">
        {testimonial.quote}
      </p>

      <div className="mt-1 grid min-h-[92px] grid-cols-[minmax(0,1fr)_88px] items-center gap-3 sm:mt-2 sm:min-h-[100px] sm:grid-cols-[minmax(0,1fr)_96px] sm:gap-4 lg:mt-4">
        <div className="min-w-0 pb-1 text-base leading-snug">
          <p className="text-xl font-bold text-ink sm:text-lg">
            {testimonial.name}
          </p>
          <p className="whitespace-nowrap text-[12px] text-slate-700 sm:text-[15px]">
            {testimonial.designation}
          </p>
          <p className="text-slate-700">{testimonial.company}</p>
        </div>

        {testimonial.headshot ? (
          <div className="flex h-[88px] w-[88px] shrink-0 items-end justify-center overflow-hidden rounded-2xl bg-white sm:h-24 sm:w-24">
            <Image
              src={`${assetBase}${testimonial.headshot}`}
              alt={testimonial.headshotAlt ?? testimonial.name}
              width={110}
              height={110}
              className={`h-full w-full ${
                testimonial.headshotClassName ?? "object-cover object-top"
              }`}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
