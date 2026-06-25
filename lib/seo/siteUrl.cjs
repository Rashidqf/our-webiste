/** Canonical production origin — always use www for ryzonix.pro */
const CANONICAL_ORIGIN = 'https://www.ryzonix.pro';

/**
 * Force https + www for the Ryzonix production domain.
 * @param {string | undefined} raw
 */
function normalizeSiteOrigin(raw) {
  const candidate = (raw || '').trim().replace(/\/$/, '');
  if (!candidate) return CANONICAL_ORIGIN;

  try {
    const url = new URL(candidate.includes('://') ? candidate : `https://${candidate}`);
    const host = url.hostname.toLowerCase();

    if (host === 'ryzonix.pro' || host === 'www.ryzonix.pro') {
      return CANONICAL_ORIGIN;
    }

    return `${url.protocol}//${url.host}`;
  } catch {
    return CANONICAL_ORIGIN;
  }
}

/** Normalize paths for canonical URLs (no trailing slash except root). */
function normalizeCanonicalPath(path = '/') {
  if (!path || path === '/') return '/';
  const withLeading = path.startsWith('/') ? path : `/${path}`;
  return withLeading.replace(/\/+$/, '') || '/';
}

function absoluteUrl(siteUrl, path = '/') {
  return `${siteUrl}${normalizeCanonicalPath(path)}`;
}

module.exports = {
  CANONICAL_ORIGIN,
  normalizeSiteOrigin,
  normalizeCanonicalPath,
  absoluteUrl,
};
