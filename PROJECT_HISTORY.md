# Project History

## 2026-09-30 — Foundation / Search Launch horizontal pass

- Owner Directive 11 supersedes the earlier Stage 2 sequencing for this
  network-wide foundation pass. Scope is limited to Site 16 `emfls-storage`; no
  other repository or Cloudflare/DNS setting was changed.
- Replaced the placeholder with a small Korean storage-method homepage and
  shared responsive site layout. Added About, Privacy, Contact, Editorial
  Policy, and custom 404 routes. Contact uses the verified public GitHub Issues
  channel and warns against including private information.
- Added per-route title/description/canonical/social metadata, `robots.txt`, a
  sitemap for the five indexable public pages, noindex on the 404, and the
  public IndexNow key file. Updated project instructions/checklists to match
  Foundation-first priorities and defer deep guides, advanced tools, polish,
  GA4, and AdSense.
- Local verification before this history update: `npm run check` passed with 0
  diagnostics; `npm run build` generated six pages plus the search assets;
  `npm test` passed 6/6 built-output checks.
- Local Preview did not remain available: two invocations exited with the
  wrapper message `Preview server process exited before becoming ready`; the
  existing Chrome localhost tab showed `ERR_CONNECTION_REFUSED`. No underlying
  Astro error was exposed, so local visual QA is not claimed. Production visual
  QA and live HTTP/404 behavior remain pending deployment.
- Before changes, the existing Cloudflare Pages project and active custom
  domain were verified along with the successful placeholder deployment.
  This Foundation revision has not yet been deployed. Google/Naver site
  registration, sitemap submissions, actual IndexNow submission, Daum status,
  Registry synchronization, and central review remain pending; none is claimed
  complete by a local build.

## 2026-09-16 — Stage 2 Minimal Bootstrap (superseded)

- Created the original minimal Astro + TypeScript static scaffold and its
  temporary thin-site `noindex, nofollow` placeholder.
- Site-specific identity/content had been deferred at that stage. Owner
  Directive 11 later authorized this repository's minimum Foundation/Search
  Launch work.
