import { absoluteUrl } from './site';
import { breadcrumbSchema } from './schemas';

/** @param {{ name: string, path: string }[]} crumbs */
export function buildBreadcrumbJsonLd(crumbs) {
  const items = [
    { name: 'Home', url: absoluteUrl('/') },
    ...crumbs.map((c) => ({ name: c.name, url: absoluteUrl(c.path) })),
  ];
  return breadcrumbSchema(items);
}
