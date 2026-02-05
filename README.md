# 🌸 PrettyFoto Puzzles

A daily sliding tile puzzle game featuring nature photography from [PrettyFoto.com](https://www.prettyfoto.com). One new puzzle every day; play from the gallery at any difficulty.

## ✨ Features

### Core gameplay
- **Daily puzzle** – New puzzle at midnight (3×3 for an easier solve).
- **Gallery** – Browse by category (butterflies, flowers, horses, landscapes); pick any image and difficulty.
- **Difficulty** – Easy (3×3), Medium (4×4), Hard (5×5).
- **Hint** – Peek at the full image; tap tiles next to the empty space to slide.
- **Stats** – Played, won, streak, best streak; play patterns (daily vs gallery).
- **See Story** – Short story and metadata for each image; links to shop.

### Accessibility & markup
- **Semantic HTML** – `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, landmarks.
- **ARIA** – `role="banner"`, `role="main"`, `role="dialog"`, `aria-modal`, `aria-label`, `aria-labelledby`, `aria-live` for timer/moves, `aria-hidden` synced when showing/hiding views and modals.
- **Skip link** – “Skip to main content” for keyboard/screen reader users.
- **Button types and labels** – Icon buttons have `aria-label`; dialogs have clear titles.

### Progressive Web App (PWA)
- **Install** – Add to home screen (install prompt when supported).
- **Manifest** – `manifest.json` with name, short_name, theme_color, background_color, icons (any + maskable), `start_url`, `scope`, `display: standalone`.
- **Offline** – Service worker caches app shell (HTML, CSS, JS, manifest) and uses cache-first for images with network fallback.
- **Precache** – Puzzle images are fetched and cached in the background after load for offline play.
- **Apple** – `apple-mobile-web-app-capable`, `apple-mobile-web-app-title`, `apple-touch-icon` in HTML.

### Other
- **Sound** – Slide and win sounds; toggle in header.
- **Haptics** – Light vibration on slide/win when supported.
- **Share** – Web Share API (or copy link) from header and completion modal; Open Graph / Twitter Card meta for link previews.
- **Shop** – Direct product links and discount code (EVERYWHERE26) in completion and gallery.

## 🎮 How to play

1. **Daily** – Tap “Play Today’s Puzzle” (3×3). Or use “Browse gallery” from the puzzle screen to pick another image.
2. **Gallery** – Filter by category, tap a card to choose that image and then Easy / Medium / Hard.
3. **Solve** – Tap a tile next to the empty space to slide it. Match the full image to win.
4. **After solve** – See Story, Share, or go to Shop / Browse collection.

## 📁 Files

```
puzzle/
├── index.html      # Semantic HTML + ARIA, PWA meta, skip link
├── styles.css      # Layout and visuals
├── app.js          # Source (edit this)
├── app.min.js      # Minified bundle (loads in production)
├── manifest.json   # PWA manifest (icons, scope, start_url)
├── sw.js           # Service worker (cache shell + images, fetch fallback)
└── README.md       # This file
```

## 🛠️ Tech stack

- **HTML5** – Semantic structure, ARIA, PWA meta and links.
- **CSS3** – Mobile-first, custom properties, responsive.
- **JavaScript** – Vanilla; Web Audio, Canvas (tiles, confetti), Cache API, optional Web Share.
- **Service worker** – Install/activate, fetch with cache-first for images and fallback for app shell.

## 🚀 Deployment

- **Netlify** – Drag folder to [netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages** – Push repo, enable Pages on main branch.
- **Any host** – Upload all files; use HTTPS so the service worker and manifest work.

## ⚙️ Customization

- **Puzzles** – Edit the `puzzles` array in `app.js` (id, title, category, image, shopUrl, galleryUrl, story).
- **Daily epoch** – Change `EPOCH` in `app.js` for the first daily puzzle date.
- **Re-minify JS** – After editing `app.js`, run: `npx terser app.js -o app.min.js -c -m`

## 📱 Sharing (Instagram, Facebook, etc.)

- **Share button** – Opens system share (or copies link) so users can paste the URL in Stories, DMs, or posts.
- **Link previews** – OG and Twitter meta tags so shared links show title, description, and image.

## 📄 License

Images © [PrettyFoto.com](https://www.prettyfoto.com) – Jennifer McClellan

## 🔗 Links

- [PrettyFoto.com](https://www.prettyfoto.com) · [Shop Art](https://www.prettyfoto.com/shop-art)
- [Facebook](https://www.facebook.com/profile.php?id=61550723549342) · [Instagram](https://www.instagram.com/jennifer_at_prettyfoto/)
