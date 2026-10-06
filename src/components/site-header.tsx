import Image from "next/image";
import Link from "next/link";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
  : "";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="https://www.swiggy.com/corporate/"
          className="flex items-center"
        >
          <Image
            src={`${assetBase}/swiggy-logo.png`}
            alt="Swiggy logo"
            width={120}
            height={120}
            priority
          />
        </Link>
        <nav aria-label="Main navigation" className="grid w-full min-w-0 grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
          <a
            href="https://tally.so/embed/44074O?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-black sm:px-4"
          >
            Explore Solutions
          </a>
          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-black bg-black px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-[var(--ink)] sm:px-4"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
