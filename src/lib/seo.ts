import type { Metadata } from "next";

export const SITE_URL = "https://www.swiggyforwork.in";
export const SITE_NAME = "Swiggy for Work";
export const CONTACT_EMAIL = "swiggyforwork@swiggy.in";
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Swiggy for Work - workplace meals, rewards, gift cards and corporate dining",
};

export const SITE_KEYWORDS = [
  "Swiggy for Work",
  "Swiggy corporate",
  "corporate food delivery",
  "corporate meal solutions",
  "bill to company",
  "employee meal benefits",
  "corporate rewards",
  "Swiggy gift cards",
  "corporate gift cards India",
  "bulk food order for office",
  "team lunch delivery",
  "corporate dining",
];

/** Absolute URL for a site path. Paths end with "/" because the site uses trailingSlash. */
export function absoluteUrl(path = "/") {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${SITE_URL}${clean}`;
}

type PageSeo = {
  /** Used in <title> (the root layout appends " | Swiggy for Work"). */
  title: string;
  /** Social share title; defaults to `${title} | Swiggy for Work`. */
  socialTitle?: string;
  description: string;
  path: string;
  keywords?: string[];
};

/**
 * Builds per-page metadata. Next.js replaces (not merges) openGraph/twitter
 * objects from parent layouts, so every page needs its own complete set.
 */
export function pageMetadata({
  title,
  socialTitle,
  description,
  path,
  keywords = [],
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const shareTitle = socialTitle ?? `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [...keywords, ...SITE_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: absoluteUrl("/"),
  logo: `${SITE_URL}/swiggy-logo.png`,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Swiggy",
    url: "https://www.swiggy.com",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT_EMAIL,
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: absoluteUrl("/"),
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/** Service + breadcrumb structured data for a solution page. */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  const url = absoluteUrl(path);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType,
      url,
      areaServed: { "@type": "Country", name: "India" },
      audience: {
        "@type": "BusinessAudience",
        name: "HR, Admin and Finance teams",
      },
      provider: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
  ];
}
