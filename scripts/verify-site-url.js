/**
 * Verifies ryzonix.pro origins always normalize to https://www.ryzonix.pro
 */
const { normalizeSiteOrigin, CANONICAL_ORIGIN } = require("../lib/seo/siteUrl.cjs");

const cases = [
  ["https://ryzonix.pro", CANONICAL_ORIGIN],
  ["https://ryzonix.pro/", CANONICAL_ORIGIN],
  ["https://www.ryzonix.pro", CANONICAL_ORIGIN],
  ["http://ryzonix.pro", CANONICAL_ORIGIN],
  [undefined, CANONICAL_ORIGIN],
  ["", CANONICAL_ORIGIN],
];

let failed = 0;
for (const [input, expected] of cases) {
  const result = normalizeSiteOrigin(input);
  if (result !== expected) {
    console.error(`FAIL: normalizeSiteOrigin(${JSON.stringify(input)}) => ${result}, expected ${expected}`);
    failed += 1;
  }
}

if (failed) {
  process.exit(1);
}

console.log("OK: all site URL normalization cases passed");
console.log(`Canonical origin: ${CANONICAL_ORIGIN}`);
