/**
 * SEO helpers — single source of truth for the site's absolute URLs.
 *
 * Update SITE_URL if the production domain ever changes; every canonical
 * link, og:url and the og:image below derive from it automatically.
 */
export const SITE_URL = "https://adncgroup.com";

/** Site-wide social preview image (absolute URL). */
export const OG_IMAGE = `${SITE_URL}/favicon.png`;

/** Absolute canonical URL for a route path (e.g. "/", "/about"). */
export function pageUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * Organization structured data (JSON-LD) for rich results in Google Search.
 * Rendered once, site-wide, from the root route.
 */
export const ORGANIZATION_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADNC Group",
  url: SITE_URL,
  logo: OG_IMAGE,
  description:
    "ADNC Group is a senior product studio that builds, scales and operates complex web and mobile applications.",
});

/**
 * Build a route `head()` payload with the page-specific meta plus the
 * canonical <link> and og:url <meta> derived from `path`.
 *
 * Usage:
 *   head: () =>
 *     seoHead("/about", [
 *       { title: "About | ADNC Group" },
 *       { name: "description", content: "..." },
 *     ]),
 *
 * Generic over the meta element type so each route keeps its own tag types
 * (no widening to Record<string, string>), staying assignable to TanStack's
 * expected head shape.
 */
export function seoHead<M>(path: string, meta: M[]) {
  const url = pageUrl(path);
  return {
    meta: [...meta, { property: "og:url", content: url }],
    links: [{ rel: "canonical", href: url }],
  };
}
