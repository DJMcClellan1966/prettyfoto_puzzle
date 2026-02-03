# 🌸 PrettyFoto Puzzles

A Wordle-style daily sliding tile puzzle game featuring beautiful nature photography from [PrettyFoto.com](https://www.prettyfoto.com).

## ✨ Features

### Daily Puzzle (Like Wordle!)
- **New puzzle every day** at midnight
- **Same puzzle for everyone** - compete with friends!
- **Statistics tracking** - games played, win streak, best streak
- **Shareable results** - share your score with emoji summary
- **Countdown timer** to next puzzle

### 17 Puzzle Images
- 🦋 Butterflies (3 images)
- 🌸 Flowers - tulips, orchids, water lilies, sunflowers, cherry blossoms (10 images)
- 🐴 Horses (2 images)
- 🏔️ Mountain landscapes (2 images)
- All images link directly to purchasable art prints

### Sound Effects & Haptics
- Satisfying tile slide sounds
- Victory fanfare on completion
- Haptic feedback on mobile devices
- Toggle sound on/off in header

### Progressive Web App (PWA)
- **Install on home screen** - works like a native app
- **Offline support** - cached for offline play
- **Fast loading** - service worker caching

### Shop Integration
- Direct product page links (not gallery pages)
- "Buy This Print" button during gameplay
- "Shop This Print - 25% Off" on completion
- Prominent discount code display (EVERYWHERE26)

### Gameplay
- **Tap to slide** - mobile-optimized controls
- **3 difficulty levels** - 3×3, 4×4, 5×5
- **Hint button** - peek at reference image
- **Confetti celebration** on completion

## 🎮 How to Play

1. **Daily Puzzle**: Play the featured puzzle of the day (4×4)
2. **Free Play**: Practice with any puzzle at any difficulty
3. **Tap to Slide**: Tap any tile next to the empty space
4. **Complete the Image**: Arrange all tiles correctly
5. **Share Your Score**: Share results with friends!

## 📤 Sharing Format

```
🌸 PrettyFoto Puzzle #42

⭐ Excellent!
⏱️ 2:45
👆 67 moves
🔥 5 day streak

Play at prettyfoto.com/puzzles
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with PWA meta tags
- **CSS3** - Mobile-first responsive design
- **Vanilla JavaScript** - No frameworks, fast loading
- **Web Audio API** - Sound effects without external files
- **Canvas API** - Image slicing & confetti animation
- **Service Worker** - Offline caching
- **LocalStorage** - Stats persistence

## 📁 Files

```
puzzle/
├── index.html      # Main HTML with PWA support
├── styles.css      # Mobile-first styles
├── app.js          # Game logic & puzzle data
├── manifest.json   # PWA manifest
├── sw.js           # Service worker for offline
└── README.md       # This file
```

## 🚀 Deployment

### Option 1: Netlify (Easiest)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire folder onto the page
3. Get your live URL instantly!

### Option 2: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select "main" branch
4. Your site will be live at `username.github.io/repo-name`

### Option 3: Any Web Host
Upload all files to your web server. No build step required!

## ⚙️ Customization

### Adding More Puzzles
Edit the `puzzles` array in `app.js`:

```javascript
{
    id: 18,
    title: "Your Title",
    category: "flowers", // butterflies, flowers, horses, landscapes
    image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/YOUR_IMAGE_ID.jpg",
    shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/your-product?product_gallery=xxx&product_id=xxx"
}
```

**Note**: Use direct product URLs (with `product_gallery` and `product_id` parameters) for best user experience.

### Changing the Start Date
Modify the `EPOCH` constant in `app.js`:

```javascript
const EPOCH = new Date('2026-02-03').getTime();
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari (iOS 12+)
- Chrome for Android

## 📄 License

Images © [PrettyFoto.com](https://www.prettyfoto.com) - Jennifer McClellan

## 🔗 Links

- 🌐 [PrettyFoto.com](https://www.prettyfoto.com)
- 🛒 [Shop Art](https://www.prettyfoto.com/shop-art)
- 📘 [Facebook](https://www.facebook.com/profile.php?id=61550723549342)
- 📸 [Instagram](https://www.instagram.com/jennifer_at_prettyfoto/)
