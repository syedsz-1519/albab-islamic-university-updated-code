# Albab Islamic University — Update Guide

## Quick Edit Points

All editable content is in a single `<script>` block near the top of the HTML file (after the `<style>` tag). You don't need to touch the HTML markup or CSS.

### 1. **Update Programmes & Events**

Find the `window.PROGRAMMES` array. Each event has:
- `title`: Event name
- `date`: Format `"YYYY-MM-DD"` (used for auto-sorting and archiving past events)
- `dateDisplay`: Human-readable date (e.g., `"05 Nov 2026"`)
- `time`: Time or null if no specific time
- `venue`: Location or null
- `desc`: Event description
- `type`: `"talk"`, `"course"`, `"ongoing"`, or `"workshop"`
- `poster`: Path to event poster image (or `null`)

**Example:**
```javascript
{
  title: "My Event",
  date: "2026-12-15",
  dateDisplay: "15 Dec 2026",
  time: "9:00 AM to 5:00 PM",
  venue: "Venue Name, City",
  desc: "Event description here.",
  type: "workshop",
  poster: "images/event-poster.jpg" // or null
}
```

Events are **auto-archived**: once a date passes today, the event moves to the "Past programmes" section.

---

### 2. **Update Branches of Study**

Find `window.BRANCHES` array. Each branch has:
- `name`: Field name (e.g., `"Hadith"`)
- `desc`: 1-line description
- `branches`: Array of exactly 5 sub-disciplines

To add a new branch (e.g., Quran), uncomment the commented slot at the end and fill in the fields.

---

### 3. **Update Five Pillars**

Find `window.PILLARS` array. Each pillar has:
- `name`: Pillar name (e.g., `"Salah"`)
- `arabic`: Arabic name
- `rules`: Rules & conditions
- `steps`: Practical steps (for Salah, this includes the five times: Fajr, Dhuhr, Asr, Maghrib, Isha)
- `significance`: Spiritual meaning
- `quote`: Optional scripture reference

Tabs render automatically in the order they appear.

---

### 4. **Update Founder Info**

Find `window.FOUNDER` object:
- `name`: Founder name
- `bio`: Short biography
- `quote`: A personal quote
- `instagramHandle`: Instagram handle (without `@`)
- `photo`: Path to founder photo (or `null`)

---

### 5. **Add Founder Photo**

The founder's photo already shows in the Founder section (left side of quote on desktop, above on mobile).

The HTML is configured to look for: `images/founder-photo.jpg`

To add or change the photo:
1. Save your image as `founder-photo.jpg` (JPG, PNG, or WebP format)
2. Place it in the `images/` folder
3. The image will appear automatically with max-width of 280px, rounded corners, and responsive sizing

If you want to use a different filename, edit this line (around line 176):
```javascript
photo: "images/founder-photo.jpg"  // Change the filename here
```

---

### 6. **Add Logo**

Find `window.LOGO_URL` and replace `null` with the path to your logo SVG or image:
```javascript
window.LOGO_URL = "images/logo.svg";
```

The logo will appear in the header next to the university name.

---

### 7. **Add Images**

Create an `images/` folder in the same directory as the HTML file. Add:
- `logo.svg` — Header and hero logo
- `founder-photo.jpg` — Founder section photo
- `event-*.jpg` — Event posters

Then update the corresponding `null` values in the config arrays above.

---

## What to Deploy

1. **index.html** — The main file (rename from `Albab Islamic University.html` if needed)
2. **images/** — Folder with all image assets

Upload to Vercel as a static site. No build step required.

---

## What NOT to Change

- The CSS (unless you want to customize colors/fonts)
- The HTML structure (sections are all in place)
- The render functions (they read from the arrays automatically)

The site is fully **responsive** (mobile-first), **accessible** (keyboard navigation, screen readers), and **fast** (no heavy libraries, no backend).

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Dark mode support (auto-detects `prefers-color-scheme`)

---

**Questions?** Edit the config arrays at the top, save, and refresh the browser. That's it!
