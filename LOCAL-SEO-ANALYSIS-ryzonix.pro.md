# Local SEO Analysis: ryzonix.pro

**Audit date:** 2026-09-26  
**Scope:** Live production site plus the corresponding SEO and contact implementation in this workspace.  
**Status:** Baseline captured before the Karachi SEO implementation. The follow-up below records source changes; the public site remains unchanged until deployment.  
**Business model detected:** Remote-first software development and IT consulting for clients worldwide.  
**Industry:** Software / IT services and consulting; no local vertical subtype applies.

## Score

**Local SEO signal score: 15/100.** This is a score against the skill's local-business dimensions, based only on public website signals. It is not an overall SEO score. Because Ryzonix describes itself as remote-first and worldwide, local-pack optimization may not apply unless the business has a real, eligible physical base or defined in-person service area.

| Dimension | Score | Evidence |
|---|---:|---|
| GBP signals (25%) | 0/25 | No profile details, category, hours, or review link visible. A map embed exists, but it points to New York City and does not establish a Ryzonix profile. GBP status is unverified. |
| Reviews and reputation (20%) | 0/20 | No on-site review count, rating, review widget, or `aggregateRating`. This does not establish that external reviews do not exist. |
| Local on-page SEO (20%) | 5/20 | Service and contact pages are available, but no target city, local service page, or location page is present. Company name and email are visible. |
| NAP and citations (15%) | 3/15 | Name and email are visible; no address or phone is published. External citation consistency could not be confirmed. |
| Local schema (10%) | 5/10 | `ProfessionalService` schema declares worldwide service coverage and email. No address, geo, hours, or telephone is asserted. |
| Local authority signals (10%) | 2/10 | Facebook, Instagram, and LinkedIn are linked as sameAs profiles; no local press, chamber, BBB, or community links were visible. |

## Business Type and Market Fit

Ryzonix is best classified as a **remote-first, worldwide digital service business**, not a conventional brick-and-mortar business or a clearly geographic service-area business. The site does not state a city or in-person service region. Do not publish a fabricated office address or create city pages solely to pursue local rankings.

The clearest local mismatch is on the contact page: a section labeled “Office location map” embeds a map centered on New York City, while the company is described as remote-first and worldwide. No New York address or office relationship is disclosed. This can mislead visitors and search systems about the business location. See [Contactpage.js](components/Contactpage/Contactpage.js#L205).

## Findings

### GBP and Reviews

- No Google Business Profile identifier, category, hours, review count, rating, or profile link was found in the production page markup inspected.
- The Google Maps iframe is a generic New York City map, not evidence of an owned or verified Ryzonix listing.
- No review profile is linked from the site and no review markup was found.
- Google search result pages blocked automated inspection during this audit. Yelp, BBB, Facebook citations, Google profile existence, and review volume are therefore **unverified**, not confirmed absent.

### Local On-Page and Services

- Production pages inspected: homepage, contact, and services. The contact page has an email link and a contact form; no `tel:` links were found.
- The service page links to dedicated pages for Web Development, Tech Consulting, Startup MVPs, SaaS Applications, Mobile App Development, and Deployment & Maintenance.
- Metadata targets general services and brand terms, not a local city. The contact page title is “Contact | Ryzonix – Web Development & IT Consulting.”
- The live sitemap contains 35 URLs and no location-style URL paths. No multi-location structure or store locator was found.
- This is reasonable for a global remote provider; local landing pages are only recommended if Ryzonix actually serves specific markets and can provide useful market-specific proof.

### NAP and Citations

- **Name:** Ryzonix is consistent in visible page content and schema.
- **Address:** Not published in the homepage/contact HTML or structured data inspected.
- **Phone:** Not published; no click-to-call link found.
- **Email:** `sales@ryzonix.pro` appears in visible content and schema.
- **GBP comparison:** Not possible without a verified profile URL or listing data.
- **Directory citations:** External presence is unverified. Do not treat the blocked search attempts as evidence of no listings.

### Local Schema

Production JSON-LD contains `Organization`, `ProfessionalService`, and `WebSite` sitewide. `ProfessionalService` is the schema type used for a professional service business; it includes `areaServed: Worldwide`, service types, email, and social profiles. Contact also has breadcrumb and FAQ schema. No LocalBusiness-specific address, geo, telephone, opening hours, or aggregate rating is supplied.

The current schema is directionally consistent with a remote worldwide provider. **Do not add made-up address, coordinates, phone, hours, or ratings.** If Ryzonix confirms an eligible real-world office or defined in-person service area, add only verified details and use a suitable subtype. The relevant implementation is in [schemas.js](lib/seo/schemas.js#L29) and company facts in [site.js](lib/seo/site.js#L16).

### Location Page Quality

No location pages or location URLs were found in the 35-URL live sitemap. Multi-location uniqueness and doorway-page checks are not applicable. Current service pages are service-specific rather than city-swapped pages.

## Prioritized Actions

1. **Critical:** Remove the New York map and “Office location map” label from the contact page unless Ryzonix confirms a real office there. If remote-only, replace it with a clear remote/worldwide service statement or omit the map. Source: [Contactpage.js](components/Contactpage/Contactpage.js#L205).
2. **High:** Decide and document whether local visibility is a business goal. Identify the real operating location or in-person service markets before pursuing local-pack tactics.
3. **High, conditional:** If eligible for a Google Business Profile, verify the real business, choose the accurate primary category, and link the profile from the site. For a remote-only business without an eligible real-world presence, do not create a profile just for rankings.
4. **High, conditional:** If targeting named markets, build useful service/market pages with local case studies, client evidence, and genuinely relevant details. Avoid templated city swaps and doorway pages.
5. **High:** Keep company facts consistent across the site and any verified directory or profile. Publish a street address only if it is a real, appropriate public business address; otherwise keep it private.
6. **Medium:** Keep the existing Organization/ProfessionalService schema for the remote model. Add local address, geo, phone, or hours only after those facts are confirmed.
7. **Medium, conditional:** Audit Yelp, BBB, Facebook, Bing Places, and relevant industry citations against verified company details. Presence and consistency were not established in this pass.
8. **Medium:** Link to verified review profiles if available and request feedback neutrally. Do not gate reviews or add `aggregateRating` unless it reflects genuine, visible review data.
9. **Medium:** Add a `tel:` link only if the business offers a public phone contact. Email and the contact form currently provide contact paths.
10. **Low / conditional:** Consider Apple Business Connect and other local listings only if Ryzonix meets their eligibility rules and has a real location or applicable service area.

## Limitations

This review could not assess geo-grid rankings, real-time local pack position, GBP ownership/Insights, review velocity or owner responses, comprehensive backlinks/domain authority, or definitive third-party citation coverage. Google search pages blocked automated result extraction, and no GBP URL or target city was supplied. To complete a market-specific audit, provide the verified GBP/listing URL and the actual location or service markets. Paid local rank-tracking and backlink tools can fill ranking and link-data gaps.

## Implementation Follow-up

The following changes are present in the local source as of 2026-09-26; deploy before treating them as live-site fixes:

- Removed the New York map embeds from the contact page and alternate footer. Replaced them with remote-first service-area copy for Karachi and worldwide clients; removed unsupported weekday hours.
- Added one substantive `/karachi` page, linked from the homepage, service hub, featured service details, portfolio, contact page, and footer. It uses existing services and portfolio examples without claiming Karachi clients or an office.
- Centralized company description, service areas, service types, email, and social profiles in `lib/seo/site.js`; updated Organization/ProfessionalService and page-specific WebPage, Service, breadcrumb, and visible FAQ schema.
- Added `/karachi` and six active service-detail URLs to the sitemap. Added plural `/services` and `/projects` redirects to the established singular routes; trailing slashes redirect to canonical paths.
- Verified production build and local runtime: 11 key routes return 200 with one H1, unique title/description, matching canonical/OG/Twitter URLs, index/follow, and parseable JSON-LD. All 31 checked internal links resolve. Sitemap XML is valid with 42 URLs; robots allows Karachi. Desktop and mobile overflow checks pass.

The 15/100 score above is retained as a **pre-implementation local-signal baseline**, not recomputed. GBP ownership, external citations, reviews, local rankings, and local client evidence remain unverified; no address, phone, hours, coordinates, GBP, or review data was added.