# SEO Action Plan — Rank #1 for "Abhinav Atul"

Your **on-page SEO is done** (meta tags, schema, sitemap, robots, llms.txt, noscript content).
Ranking for your name is now **90% off-page work**. Do these in order.

---

## STEP 1 — Rename the Vercel deployment (do this FIRST)
The code now points everywhere to `https://abhinavatul.vercel.app`. Make Vercel match:

1. Vercel Dashboard → your project → **Settings → Domains** (or **Project Name**).
2. Change the production URL to **`abhinavatul.vercel.app`**.
3. Redeploy. Confirm the site loads at the new URL.

> Getting your name into the URL is the biggest free ranking signal available to you.
> A real custom domain (`abhinavatul.com`, ~$10/yr) would be even stronger — consider it later.

---

## STEP 2 — Google Search Console (this is what gets you INDEXED)
Without this, Google may never rank you. ~10 minutes.

1. Go to https://search.google.com/search-console → **Add property** → URL prefix → `https://abhinavatul.vercel.app`.
2. Verify via the **HTML tag** method — copy the token, paste it into the commented line in `index.html`:
   ```html
   <meta name="google-site-verification" content="PASTE_YOUR_TOKEN_HERE" />
   ```
   (uncomment it, redeploy, then click Verify.)
3. In Search Console → **Sitemaps** → submit `sitemap.xml`.
4. Use **URL Inspection** on your homepage → **Request Indexing**.

Repeat the same for **Bing Webmaster Tools** (https://www.bing.com/webmasters) — powers Bing + ChatGPT search.

---

## STEP 3 — Make your profiles point back to the site (backlinks + entity trust)
Google confirms "which Abhinav Atul" by cross-checking the `sameAs` links in your schema
against those profiles linking back. Add `https://abhinavatul.vercel.app` to:

- [ ] **LinkedIn** → Contact info → Website (use type "Portfolio"). Also add it to your About section.
- [ ] **GitHub** → Profile → Bio **website** field. Also add to your pinned-repo / profile README.
- [ ] **LeetCode** profile → website field.
- [ ] **Twitter/X** bio (if you have one) — add the link.
- [ ] Any hackathon / Devfolio / Unstop / Devpost profiles.

The URL text on these should ideally read `abhinavatul.vercel.app` (matches the name → reinforces the entity).

---

## STEP 4 — Build a few authoritative name-matching links
Name queries rank on **corroboration**. Create profiles that (a) use your full name and (b) link to the site:

- [ ] **GitHub profile README** (`github.com/abhinav-atul/abhinav-atul`) with "Abhinav Atul" as an H1 + site link.
- [ ] **dev.to** or **Hashnode** account — write 1 short post, link back. (Indexes fast, strong domain.)
- [ ] **Polywork / Read.cv / about.me** one-pager.
- [ ] Google Developer Profile, Credly (for your Oracle/Google certs) — all let you add a website.

Quality > quantity. 4–5 real profiles that link back beats dozens of spammy ones.

---

## STEP 5 — Verify & monitor
- [ ] Test structured data: https://search.google.com/test/rich-results (paste your URL).
- [ ] Test social preview: https://www.opengraph.xyz (paste your URL).
- [ ] Run Lighthouse in Chrome DevTools → aim for SEO 100 / Performance 90+.
- [ ] After ~1–2 weeks, check Search Console → **Performance** for impressions on "abhinav atul".

---

## Realistic timeline
- **Indexed:** 2–7 days after Step 2.
- **Ranking on page 1 for your name:** 2–6 weeks, as profiles get crawled and links corroborate.
- Uniqueness of your name is on your side — there aren't many "Abhinav Atul"s competing.

## What I already changed in the code
- All URLs → `abhinavatul.vercel.app` (index.html, robots.txt, sitemap.xml, llms.txt)
- Favicon → `/favicon.svg` (was the default `/vite.svg`)
- `robots` meta → added `max-image-preview:large` (richer results)
- Added a ready-to-fill Google Search Console verification meta line
- Person + WebSite schema now linked via `@id` (helps Google form one entity for you)
- Added `nationality` / country to Person schema
