/** Which proposal sections exist in parsed JSON and should render */

const SECTION_KEYS = [
  'overview',
  'services',
  'timeline',
  'pricing',
  'terms',
  'signature',
  'closing',
  'about',
  'footer',
];

export function isSectionVisible(key, section) {
  if (section === undefined || section === null) return false;

  switch (key) {
    case 'overview':
      return Boolean(section.title) || (section.paragraphs?.length ?? 0) > 0;
    case 'services':
      return (section.items?.length ?? 0) > 0;
    case 'timeline':
      return (section.phases?.length ?? 0) > 0;
    case 'pricing':
      return (
        (section.lineItems?.length ?? 0) > 0 ||
        Boolean(section.total) ||
        Boolean(section.paymentNote)
      );
    case 'terms':
      return (section.items?.length ?? 0) > 0;
    case 'signature':
      return Boolean(section.title || section.providerLabel || section.clientLabel);
    case 'closing':
      return Boolean(section.message || section.name || section.role);
    case 'about':
      return Boolean(section.title) || (section.paragraphs?.length ?? 0) > 0;
    case 'footer':
      return [section.tagline, section.disclaimer, section.brand].some(
        (value) => typeof value === 'string' && value.trim().length > 0
      );
    default:
      return false;
  }
}

export function pickVisibleSections(data, defaults = {}) {
  const picked = {};

  for (const key of SECTION_KEYS) {
    if (!(key in data)) continue;

    const section = data[key];
    if (section === null) continue;

    const merged =
      defaults[key] !== undefined
        ? { ...defaults[key], ...section }
        : section;

    if (isSectionVisible(key, merged)) {
      picked[key] = merged;
    }
  }

  return picked;
}

export { SECTION_KEYS };
