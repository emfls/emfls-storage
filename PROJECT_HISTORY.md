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
  Astro error was exposed, so local visual QA is not claimed.
- Commit `f43649e5e336fd4bcf8edfb1d1b8168eeb4a4878` was pushed to `main` and
  deployed by Cloudflare Pages as successful production deployment
  `04db2570-d172-49a0-a37d-4ffd360c96d9`, alias `https://storage.emfls.com`.
  Build/deploy stages succeeded; no Pages or DNS settings changed.
- Chrome Production review: home, About, Contact, and custom missing-route
  content render. Visual review at 1440×900, 390×844, and 320×844 showed no
  apparent horizontal clipping; Tab reveals the visible skip link. The rendered
  missing-route page is confirmed, but HTTP 404 status is not. Current live
  `robots.txt`, sitemap body/status, IndexNow key response, and `scrollWidth`
  were not independently inspected, so do not claim those network measurements.
- Google Search Console: URL-prefix property `https://storage.emfls.com/`
  registered and shown as automatically owner-verified through the domain-name
  provider. Google accepted `https://storage.emfls.com/sitemap.xml` for
  processing. No crawl, indexing, or search visibility is established.
- Naver Search Advisor homepage showed an unauthenticated `로그인` action;
  stopped before login under the user-directed external-login boundary.
  Naver registration and sitemap submission remain blocked on authenticated
  access.
- Daum's public registration lookup says `미등록 사이트`. Its site request
  requires the applicant's name/email and two mandatory data/service consent
  checkboxes. Stopped before consent and submission; Daum registration remains
  unsubmitted. The checked Daum workflow provides no sitemap-submission form.
- IndexNow submission used the five public canonical URLs and the deployed
  public key location. First POST returned HTTP 202; after a 60-second wait,
  one retry again returned HTTP 202 (`URL received; key validation pending`).
  Per [official documentation](https://www.indexnow.org/documentation), this is
  not the 200 success receipt and does not prove indexing. No further immediate
  retry was issued; live key validation remains unresolved.
- Site 16's Registry row is synchronized as `LIVE / IN_PROGRESS / NONE / IN_PROGRESS`;
  Google `SET/SUBMITTED`, Naver `ISSUE/ISSUE`, Daum `ISSUE/N/A`, IndexNow
  `ISSUE`, sitemap summary `PARTIAL`. The Site Control Page now has a
  `Site Status Sync` section and the Handoff Index current status names Site 17
  `emfls-smarthome` as the next ascending runnable row. Keep Site 16's baseline
  and search launch in progress while live endpoint/status evidence and
  IndexNow validation remain incomplete; Naver and Daum blockers are per-site.

## 2026-09-16 — Stage 2 Minimal Bootstrap (superseded)

- Created the original minimal Astro + TypeScript static scaffold and its
  temporary thin-site `noindex, nofollow` placeholder.
- Site-specific identity/content had been deferred at that stage. Owner
  Directive 11 later authorized this repository's minimum Foundation/Search
  Launch work.
