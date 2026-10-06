import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Bill to Company", href: "/corporate-wallet" },
  { label: "Corporate Rewards", href: "/corporate-rewards" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Concierge Dining", href: "/concierge-led-food-dining" },
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
  : "";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-ink">
              <Image
                src={`${assetBase}/swiggy-logo.png`}
                alt="Swiggy logo"
                width={44}
                height={44}
              />
              <span className="font-heading tracking-tight">
                Swiggy for Work
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Enterprise-grade meal programs, rewards, and corporate dining
              built on Swiggy&apos;s unmatched delivery network.
            </p>
            <div className="text-sm text-slate-500">
              <p>Corporate HQ: Bengaluru, India</p>
              <p>Email: swiggyforwork@swiggy.in</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-ink">Solutions</p>
            <ul className="space-y-2 text-slate-500">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-6 text-xs text-slate-500">
          <p>© 2026 Swiggy for Work. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
