<p align="center">
  <img src="public/images/logo/taylors-tacos-chicago-logo-stacked.webp" alt="Taylor's Tacos Chicago" width="280" />
</p>

# Taylor's Tacos Chicago

Website for Taylor's Tacos Chicago — the #1 taco catering company in the Chi. Built to showcase the brand, attract customers, and make it easy to book events.

**Live site:** [taylorstacoschicago.com](https://www.taylorstacoschicago.com)

---

## What's on the site

- Hero section with rotating banner slideshow
- About / Our Story section
- Services — food truck, staffed catering, corporate events, weddings, Taco Tuesday
- Photo gallery
- Menu
- Contact & booking form
- Custom taco cursor, floating book button, animated marquee

---

## Tech

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project structure

```
src/
  app/          → layout, page, global styles, sitemap, robots
  components/
    sections/   → Hero, About, Services, Gallery, Menu, Contact, etc.
    ui/         → Navbar, Footer, TacoCursor, FloatingBookButton, StructuredData

public/
  images/       → banners, behind-the-scenes, brand, events, food, logo
  fonts/        → Hannik, Hannik-Italic
```

---

## Brand

- **Colors:** Red `#BB2423`, Yellow `#FBAF1C`, Deep Purple `#551A3A`, Green `#BCDC9A`
- **Font:** Hannik (custom brand font) + DM Sans
- **Location:** 135 N. Kedzie, Chicago, IL 60612
- **Phone:** (773) 226-1596
- **Email:** info@taylorstacoschicago.com

---

Built by [Sachhsoft](https://www.sachhsoft.com/)

---

## Pending Tasks

These things are not done yet and need to be completed:

### 1. Google Search Console
- Ask client for their Gmail account
- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Add property → enter `https://www.taylorstacoschicago.com`
- Verify ownership using the HTML tag method
- Submit sitemap: `https://www.taylorstacoschicago.com/sitemap.xml`
- This tells Google the site exists and starts SEO indexing

### 2. Google Analytics
- Ask client for their Gmail account
- Go to [analytics.google.com](https://analytics.google.com)
- Create a new property for `taylorstacoschicago.com`
- Get the Measurement ID (looks like `G-XXXXXXXXXX`)
- Add it to the project code
- This tracks visitors, traffic sources, and user behaviour

### 3. When connecting the main domain to Vercel
- Go to Vercel → Settings → Environment Variables
- Find `NEXT_PUBLIC_SITE_URL`
- Change the value from `https://taylors-tacos-chicago.vercel.app` to `https://www.taylorstacoschicago.com`
- Click Save → Redeploy
- This fixes the OG image preview on WhatsApp and Slack
