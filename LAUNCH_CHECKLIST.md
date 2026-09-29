# Launch Checklist

## Foundation / Search Launch — Site 16

- [x] Astro static output and route acceptance checks.
- [x] Site-specific minimum homepage plus About, Privacy, Contact, and Editorial
      Policy.
- [x] Per-route title, description, canonical, social metadata, and Trust links.
- [x] `robots.txt`, five-URL public sitemap, custom noindex 404, and public
      IndexNow key file.
- [x] Local `astro check`, production build, and six acceptance tests.
- [x] Existing Cloudflare Pages project, active custom domain, and previous
      successful deployment rechecked before edits.
- [x] Deploy commit `f43649e5e336fd4bcf8edfb1d1b8168eeb4a4878` to Production via
      Cloudflare deployment `04db2570`.
- [x] Review Production visually in Chrome at 1440×900, 390×844, and 320×844;
      inspect Home/About/Contact and custom 404 content; keyboard skip link.
- [ ] Confirm live robots/sitemap responses and actual HTTP 404 status; raw
      endpoint/status evidence was not available under the current browser
      inspection restriction. Generated-output tests passed.
- [x] Google Search Console property is automatically owner-verified;
      `https://storage.emfls.com/sitemap.xml` submission was accepted for
      processing. URL indexing is not confirmed.
- [ ] Naver Search Advisor: **BLOCKED** on login; no account login was started.
- [ ] IndexNow: five public canonical URLs submitted twice; both requests
      returned HTTP 202 (`key validation pending`), so the success-receipt gate
      remains unresolved.
- [ ] Daum lookup: `미등록 사이트`. Registration requires applicant name/email
      plus required personal-data and service consent; stopped before consent or
      submission. Daum provides no sitemap-submission surface in the checked
      Search Registration workflow.
- [x] Synchronize evidence and conservative status to the Site Registry,
      Site Control Page, and Handoff Index current status.
- [ ] Central review/approval — independent gate, not a reason to stop the next
      site's foundation cycle.

Deep guide content, advanced tools, fine visual polish, GA4, and AdSense work are
deferred until the network-wide Foundation/Search Launch pass is complete.
