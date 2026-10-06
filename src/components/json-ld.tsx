/**
 * Renders schema.org structured data as a plain <script> tag so it is part of
 * the static HTML that crawlers read (next/script would inject it client-side).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
