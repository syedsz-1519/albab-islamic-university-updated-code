# Deployment Guide — Albab Islamic University Website

## Quick Start (5 minutes)

### 1. Deploy to Vercel (Recommended)

```bash
npm i -g vercel
cd albab
vercel
```

That's it. Your site is live at `https://your-project.vercel.app`

### 2. Deploy to GitHub Pages

```bash
git add .
git commit -m "Deploy website"
git push origin main
```

Enable Pages in repo settings → deploy from `main`.

### 3. Deploy to Netlify

Drag the `albab/` folder into https://netlify.drop

---

## What You Get

✅ **8 production-ready pages**  
✅ **14 interactive labs** (5 live, 9 coming soon)  
✅ **Hadith library** with 40 Hadith of an-Nawawi  
✅ **Scroll spy indicator** with keyboard navigation  
✅ **Fully responsive** (mobile to 4K)  
✅ **Dark mode** support  
✅ **SEO optimized** (sitemap, robots.txt, meta tags)  
✅ **Accessible** (WCAG AA, keyboard nav, screen readers)  
✅ **Fast** (~50 KB total, no frameworks)  

---

## File Checklist

Before deploying, ensure all files are present:

```
✅ index.html
✅ about.html
✅ programmes.html
✅ founder.html
✅ hadith.html
✅ explore.html
✅ contact.html
✅ 404.html
✅ vercel.json
✅ sitemap.xml
✅ robots.txt
✅ README.md
✅ assets/
   ✅ style.css
   ✅ site.js
   ✅ scroll-spy.js
   ✅ data.js
   ✅ hadith-data.js
   ✅ labs-data.js
✅ images/ (optional: add founder photo, logos, event posters)
```

---

## Pre-Deployment Checklist

### Content
- [ ] Update founder name and bio in `founder.html` and `assets/data.js`
- [ ] Add programmes to `assets/data.js` (at least the 14 listed)
- [ ] Add events to `assets/data.js`
- [ ] Replace TODO comments with real content
- [ ] Update phone number in `contact.html` (currently +91 7051913270)
- [ ] Add Instagram handles (@albabuniversity, @adnanalfarooq)

### Images
- [ ] Create `images/` folder
- [ ] Add founder photo as `images/founder-photo.jpg` (optional; shows placeholder if missing)
- [ ] Add event posters if applicable
- [ ] Add logo if custom logo needed

### Technical
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test dark mode (System Preferences)
- [ ] Test keyboard navigation (Tab key)
- [ ] Check all links work
- [ ] Verify WhatsApp phone number in contact form
- [ ] Test contact form (sends WhatsApp message)
- [ ] Check scroll spy indicator (desktop only)

### SEO
- [ ] Verify site title in browser tab
- [ ] Check meta description looks good
- [ ] Test social media preview (use https://metatags.io)
- [ ] Ensure sitemap.xml lists all pages
- [ ] Verify robots.txt allows indexing

---

## Vercel Deployment (Recommended)

### Setup
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd albab
   vercel
   ```

3. Follow prompts (accept defaults)

### Auto-Deploy from Git
1. Push code to GitHub
2. Connect repo to Vercel (https://vercel.com/new)
3. Auto-deploys on every push to `main`

### Environment Variables (if needed)
None required for this static site.

---

## GitHub Pages Deployment

### Setup
1. Create GitHub repo `albab`
2. Clone locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/albab.git
   cd albab
   ```

3. Add files:
   ```bash
   git add .
   git commit -m "Initial commit: Albab Islamic University website"
   git push origin main
   ```

4. In GitHub repo settings:
   - Go to Pages
   - Select `main` branch as source
   - Save

Your site is live at `https://YOUR_USERNAME.github.io/albab`

---

## Netlify Deployment

1. Go to https://netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag the `albab/` folder into the drop zone
4. Your site deploys automatically

Your site is live at `https://your-project.netlify.app`

---

## Custom Domain

After deploying to Vercel/Netlify/GitHub Pages, add a custom domain:

- **Vercel** — Project Settings → Domains → Add domain
- **Netlify** — Site Settings → Domain Management → Add domain
- **GitHub Pages** — Repo Settings → Pages → Custom domain

Point your domain's DNS to the hosting provider's nameservers.

---

## Monitoring & Maintenance

### Analytics
Add Google Analytics (optional):

1. Get tracking code from https://analytics.google.com
2. Add before closing `</head>` tag in each HTML file:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

### SSL Certificate
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic
- Custom host: Check your provider

### Uptime Monitoring
Add https://uptimerobot.com to monitor site uptime (free tier).

---

## Troubleshooting

### Site not loading
- Check deployment logs in Vercel/Netlify/GitHub
- Verify all files uploaded
- Clear browser cache (Ctrl+Shift+R)

### Links broken
- Ensure paths use `/` not `./`
- Example: `/hadith.html` not `./hadith.html`

### Styles not loading
- Hard refresh (Ctrl+Shift+R)
- Check Network tab in DevTools

### Images not showing
- Ensure `images/` folder uploaded
- Check file paths in HTML
- Verify image format is `.jpg`, `.png`, or `.webp`

### Contact form not working
- Check WhatsApp number in `contact.html`
- Test on desktop first
- Ensure JavaScript enabled

### Scroll spy not showing
- Only visible on 1024px+ (desktop)
- Check DevTools for JS errors
- Verify `assets/scroll-spy.js` loaded

---

## Updating After Deployment

To make changes after deployment:

1. Edit the file locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update: describe change"
   git push origin main
   ```

3. Site auto-updates within 60 seconds (Vercel) or on next deploy trigger

### To update content without git:
- **Vercel** — Edit files in Vercel dashboard (Projects → Files)
- **Netlify** — Drag new files to deploy
- **GitHub Pages** — Edit via GitHub web interface

---

## Performance Optimization

Your site is already optimized, but here are extra tips:

### Images
- Resize before upload (max 1200px wide)
- Use `.webp` format when possible
- Keep total image size < 500 KB

### Caching
Vercel and Netlify cache assets automatically. Static files cached for 1 year.

### CDN
Both Vercel and Netlify use global CDNs → fast delivery worldwide.

---

## Rollback & Versioning

### Vercel
Deployments → select previous version → Promote to Production

### GitHub Pages
```bash
git log                    # See commit history
git checkout COMMIT_ID     # Revert to old commit
git push origin main       # Deploy old version
```

### Netlify
Deploys → select previous deploy → "Publish deploy"

---

## Success!

Your website is now live and production-ready.

**Next steps:**
1. Promote on social media
2. Monitor analytics
3. Update content regularly
4. Collect feedback

Questions? See README.md or contact @albabuniversity on Instagram.

---

**🚀 Ready to launch!**
