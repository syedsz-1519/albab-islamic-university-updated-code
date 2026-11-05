# Albab Islamic University — Website

A professional, static, single-page marketing website for Albab Islamic University. Deployed as-is on Vercel with no build step required.

## What's Included

### Files
- **Albab Islamic University.html** — Complete single-page site with all sections
- **images/** — Folder for logo, founder photo, and event posters
- **UPDATE_GUIDE.md** — Detailed instructions for editing content
- **FOUNDER_IMAGE_INSTRUCTIONS.txt** — Setup guide for founder photo

### Sections

1. **Hero** — Deep green band with headline, lead text, two CTAs, and established year
2. **Hadith Banner** — Arabic hadith with English translation and Sunan reference
3. **Branches of Study** — 11 fields with 5 branches each (rendered from JS array)
4. **Five Pillars Foundation** — Accessible tabs: Shahadah, Salah, Zakat, Sawm, Hajj
5. **What We Study** — Four core focus areas with descriptions
6. **Deen Through Mapping** — Teaching method explanation (3 columns)
7. **Programmes & Events** — Event list auto-sorted by date; past events archived
8. **Founder** — Quote + bio + Instagram link + optional photo
9. **Contact** — Phone, Instagram links, and commented placeholders for YouTube/email
10. **Footer** — Copyright and credit

## Design & Performance

✅ **Fully responsive** — Mobile first, tested down to 320px  
✅ **Accessible** — Keyboard navigation, semantic HTML, WCAG color contrast, reduced-motion support  
✅ **Fast** — Single HTML file, no framework dependencies, no remote images except Google Fonts  
✅ **Dark mode** — Auto-detects system preference with CSS variables  
✅ **SEO** — Meta tags, Open Graph, structured title, theme-color, favicon  

**Colors:**
- Deep green: #0f3d2e (header, hero, pillars band, footer)
- Gold: #c9a24b (accents, buttons, dividers)
- Light surface: #f2f5f1 with dark mode override

**Fonts:**
- Amiri (serif) — headings, Arabic text, brand name
- Source Sans 3 — body copy

## Quick Start

### 1. Add Images
Create these in the `images/` folder:
- `founder-photo.jpg` — Founder headshot (280px max-width, portrait)
- `logo.svg` — University logo (or PNG)
- `event-*.jpg` — Event poster images (optional)

### 2. Edit Content
Open **Albab Islamic University.html** in a text editor.

All editable content is in the `<script>` block near the top. Update:
- `window.PROGRAMMES` — Event dates, titles, descriptions
- `window.BRANCHES` — Study fields and sub-disciplines
- `window.PILLARS` — Five Pillars rules, steps, significance
- `window.FOUNDER` — Name, bio, quote, Instagram handle
- `window.LOGO_URL` — Path to logo image

See **UPDATE_GUIDE.md** for detailed examples.

### 3. Deploy
Upload the entire folder to Vercel, AWS S3, Netlify, or any static host:
```bash
vercel deploy
```

No build step needed. It's pure HTML + CSS + vanilla JS.

## Features

### Events Auto-Archive
Edit the `date` field (YYYY-MM-DD format). Events move to "Past programmes" when the date passes.

```javascript
{
  title: "Event Name",
  date: "2026-12-15",  // Auto-sorts and archives based on this
  dateDisplay: "15 Dec 2026",
  // ...
}
```

### Accessible Tabs (Five Pillars)
Click through Shahadah, Salah, Zakat, Sawm, Hajj. Fully keyboard accessible with focus styling.

### Floating Instagram Button
Mobile only: sticky button on bottom-right to drive followers.

### Responsive Grid Layouts
- **Branches of Study**: 3-column grid on desktop, 1 column on mobile
- **Founder**: 2-column layout on desktop, stacked on mobile
- **Events**: Single-column list with date on left (desktop), stacked on mobile

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile: iOS Safari, Chrome Mobile
- Dark mode: macOS, Windows 11, Android, iOS 13+

## Customization

### Change Colors
Edit CSS variables in `:root` block (line ~30):
```css
:root {
  --green: #0f3d2e;
  --gold: #c9a24b;
  --bg: #f2f5f1;
  /* ... */
}
```

### Rename the HTML File
Feel free to rename "Albab Islamic University.html" to "index.html" or anything else.

### Add More Events
Simply add a new object to `window.PROGRAMMES` array. It'll render automatically.

### Disable Dark Mode
Set `data-theme="light"` on the `<html>` tag to force light mode only.

## Files NOT Needed

- ❌ Node.js or npm
- ❌ Build tools (Webpack, Vite, etc.)
- ❌ Backend/database
- ❌ Student login or authentication
- ❌ Progress tracking
- ❌ Payment processing

This is pure static content.

## Support

Refer to **UPDATE_GUIDE.md** for:
- How to update programmes and events
- How to add founder photo
- How to add logo
- How to add more branches of study
- How to modify Five Pillars content

All changes are made by editing JavaScript arrays and object literals at the top of the HTML file.

---

**Built for Ulul Albab** — people who think.

© 2024–2026 Albab Islamic University. All rights reserved.
