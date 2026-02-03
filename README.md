# 🌸 PrettyFoto Puzzles

A Wordle-style daily sliding tile puzzle game featuring beautiful nature photography from [PrettyFoto.com](https://www.prettyfoto.com).

## Features

### Daily Puzzle
- **New puzzle every day** at midnight
- **Same puzzle for everyone** - compete with friends!
- **Statistics tracking** - games played, win streak, average moves/time
- **Shareable results** - share your score like Wordle

### Gameplay
- **Sliding tile puzzle** - tap tiles adjacent to the empty space to slide them
- **3 difficulty levels** - Easy (3×3), Medium (4×4), Hard (5×5)
- **Mobile-optimized** - designed for phones, works on desktop too
- **Hint system** - peek at the reference image anytime

### Marketing Integration
- **Shop This Print** buttons throughout the experience
- Links directly to product pages on PrettyFoto.com
- Completion screen encourages art purchases

## How to Play

1. **Daily Puzzle**: Play the featured puzzle of the day (4×4, same for everyone)
2. **Free Play**: Practice with any puzzle at any difficulty
3. **Tap to Slide**: Tap any tile next to the empty space to slide it
4. **Complete the Image**: Arrange all tiles to recreate the photograph
5. **Share Your Score**: Share your results with friends!

## Sharing Format

```
🌸 PrettyFoto Puzzle #42

⭐ Excellent!
⏱️ 2:45
👆 67 moves
🔥 5 day streak

Play at prettyfoto.com/puzzles
```

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Mobile-first responsive design
- **Vanilla JavaScript** - No frameworks, fast loading
- **LocalStorage** - Stats persistence
- **Canvas API** - Image slicing for puzzle tiles

## Deployment

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
Simply upload all files to your web server. No build step required!

## Files

```
puzzle/
├── index.html    # Main HTML structure
├── styles.css    # Mobile-first styles
├── app.js        # Game logic & daily puzzle system
└── README.md     # This file
```

## Customization

### Adding More Puzzles
Edit the `puzzles` array in `app.js`:

```javascript
{
    id: 13,
    title: "Your Title",
    category: "flowers", // butterflies, flowers, wildlife, landscapes
    image: "https://your-image-url.jpg",
    shopUrl: "https://prettyfoto.com/your-product-page"
}
```

### Changing the Start Date
Modify the `EPOCH` constant in `app.js` to change puzzle #1's date:

```javascript
const EPOCH = new Date('2026-02-03').getTime();
```

## Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari (iOS 12+)
- Chrome for Android

## License

Images © [PrettyFoto.com](https://www.prettyfoto.com) - Jennifer McClellan

## Links

- 🌐 [PrettyFoto.com](https://www.prettyfoto.com)
- 🛒 [Shop Art](https://www.prettyfoto.com/shop-art)
- 📧 [Contact](mailto:jennifer@prettyfoto.com)
