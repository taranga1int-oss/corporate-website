"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// The "Swiggy for Work — Talk to our team" form in the FMP-Corporate Tally workspace.
// Every submission is stored in Tally, emailed to the team and synced to Google Sheets.
const TALLY_FORM_ID =
  process.env.NEXT_PUBLIC_TALLY_FORM_ID?.trim() || "1WkZDb";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

function buildSrc(pageUrl: string) {
  const params = new URLSearchParams({
    alignLeft: "1",
    hideTitle: "1",
    transparentBackground: "1",
    dynamicHeight: "1",
    // Hidden fields in the Tally form.
    page_url: pageUrl,
    source: "swiggy-for-work-website",
  });
  return `https://tally.so/embed/${TALLY_FORM_ID}?${params.toString()}`;
}

export default function TallyForm() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    // Set after mount so the hidden page_url field gets the real page address.
    const next = buildSrc(window.location.href);
    const raf = requestAnimationFrame(() => {
      setSrc(next);
      // Let Tally's script load the form so it can also auto-resize the iframe.
      requestAnimationFrame(() => window.Tally?.loadEmbeds());
    });
    // Fallback: if Tally's script is blocked, load the form directly.
    const fallback = window.setTimeout(() => {
      const frame = document.querySelector<HTMLIFrameElement>(
        "iframe[data-tally-src]",
      );
      if (frame && !frame.getAttribute("src")) {
        frame.src = next;
        frame.style.height = "980px";
      }
    }, 5000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="min-h-[720px]">
      {src ? (
        <iframe
          data-tally-src={src}
          loading="lazy"
          width="100%"
          height={720}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Talk to our team"
          className="w-full"
        />
      ) : null}
      <noscript>
        <a href={`https://tally.so/r/${TALLY_FORM_ID}`}>Open the contact form</a>
      </noscript>
      {/* Tally's embed script resizes the iframe to the form's height. */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
    </div>
  );
}
