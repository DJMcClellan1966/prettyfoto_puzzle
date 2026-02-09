// PrettyFoto Daily Puzzle - Streamlined for Sales
// 20 unique PrettyFoto images - all driving to shop

// ============ PUZZLE DATA (16 Verified Images - All Direct Links) ============
// Each puzzle has: shopUrl (direct product page), galleryUrl (collection page), and story
const puzzles = [
    // Butterflies (2)
    { 
        id: 1, 
        title: "Cherry on Top", 
        category: "butterflies",
        featuredWeek: 1,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719947771/IMG_1842_z7mzjy.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-1842?product_gallery=303973&product_id=7351866",
        galleryUrl: "https://www.prettyfoto.com/butterflies-in-nature",
        story: {
            location: "Butterfly Garden, NC",
            season: "Summer",
            moment: "This Gulf Fritillary paused just long enough on the cherry-red bloom to capture its iridescent wings catching the afternoon light.",
            tags: ["butterfly", "nature", "wildlife", "macro", "orange butterfly", "garden"]
        }
    },
    { 
        id: 2, 
        title: "Nature's Jewel", 
        category: "butterflies",
        featuredWeek: 2,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1694475326/Jennifer_McClellan_008Cfc2f-1102-42Ba-Afef-D728dcafa2b5_o6h4nh.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-008cfc2f-1102-42ba-afef-d728dcafa2b5?product_gallery=303973&product_id=6389616",
        galleryUrl: "https://www.prettyfoto.com/butterflies-in-nature",
        story: {
            location: "Mountain Meadow",
            season: "Late Summer",
            moment: "Like a living gemstone, this butterfly's wings shimmer with colors that remind us nature is the greatest artist.",
            tags: ["butterfly", "nature", "jewel tones", "wildlife", "meadow", "colorful"]
        }
    },
    
    // Flowers - Tulips (3)
    { 
        id: 3, 
        title: "Love Blooms", 
        category: "flowers",
        featuredWeek: 1,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1737159071/2N4A4426_o4lj30.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a4426?product_gallery=302625&product_id=7841076",
        galleryUrl: "https://www.prettyfoto.com/tulips"
    },
    { 
        id: 4, 
        title: "My One and Only", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1737159079/IMG_0594_yndoza.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-0594?product_gallery=302625&product_id=7841105",
        galleryUrl: "https://www.prettyfoto.com/tulips"
    },
    { 
        id: 5, 
        title: "Love's Flame", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1737159079/IMG_0631_nuav1f.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-0631?product_gallery=302625&product_id=7841103",
        galleryUrl: "https://www.prettyfoto.com/tulips"
    },
    
    // Flowers - Orchids (2)
    { 
        id: 6, 
        title: "On the Move", 
        category: "flowers",
        featuredWeek: 2,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1693521613/Jennifer_McClellan_Img_0261_giehor.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-img-0261?product_gallery=302623&product_id=6350814",
        galleryUrl: "https://www.prettyfoto.com/orchids"
    },
    { 
        id: 7, 
        title: "Pretty on Point", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113391/2N4A5107_imfztx.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a5107?product_gallery=302623&product_id=7331073",
        galleryUrl: "https://www.prettyfoto.com/orchids"
    },
    
    // Flowers - Water Lilies (2)
    { 
        id: 8, 
        title: "Water Lily Afternoon", 
        category: "flowers",
        featuredWeek: 4,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1714324985/IMG_1453_ypftdw.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-1453?product_gallery=327276&product_id=7186902",
        galleryUrl: "https://www.prettyfoto.com/floating-gems-water-lilies"
    },
    { 
        id: 9, 
        title: "Best in Show", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700958423/IMG_8345_maatlv.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-8345?product_gallery=327276&product_id=6666746",
        galleryUrl: "https://www.prettyfoto.com/floating-gems-water-lilies"
    },
    
    // Flowers - Sunflowers (2)
    { 
        id: 10, 
        title: "Sunny Daze", 
        category: "flowers",
        featuredWeek: 3,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113429/2N4A5194_situp5.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a5194?product_gallery=342700&product_id=7331079",
        galleryUrl: "https://www.prettyfoto.com/sun-kissed-sunflowers"
    },
    { 
        id: 11, 
        title: "Center Stage", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113491/2N4A5195_d6urme.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a5195?product_gallery=342700&product_id=7331092",
        galleryUrl: "https://www.prettyfoto.com/sun-kissed-sunflowers"
    },
    
    // Flowers - Cherry Blossoms (1)
    { 
        id: 12, 
        title: "Cherry Swirl", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1737159084/IMG_1512_q9xltq.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-1512?product_gallery=332734&product_id=7841125",
        galleryUrl: "https://www.prettyfoto.com/pretty-in-pink-cherry-blossoms"
    },
    
    // Horses (2)
    { 
        id: 13, 
        title: "Golden Days", 
        category: "horses",
        featuredWeek: 1,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113644/2N4A4928_ugnovr.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a4928?product_gallery=331150&product_id=7331108",
        galleryUrl: "https://www.prettyfoto.com/equine-beauties"
    },
    { 
        id: 14, 
        title: "Magic Moment", 
        category: "horses",
        featuredWeek: 2,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1708488576/IMG_2866_b8y05a.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-2866?product_gallery=331150&product_id=6987885",
        galleryUrl: "https://www.prettyfoto.com/equine-beauties"
    },
    
    // Landscapes - Mountains (2)
    { 
        id: 15, 
        title: "Counting Sheep 2", 
        category: "landscapes",
        featuredWeek: 1,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113554/2N4A4751_ugqv2k.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a4751?product_gallery=303977&product_id=7331096",
        galleryUrl: "https://www.prettyfoto.com/mountains"
    },
    { 
        id: 16, 
        title: "An Unexpected View", 
        category: "landscapes",
        featuredWeek: 2,
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113577/IMG_2394_nbgkpf.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-2394?product_gallery=303977&product_id=7331099",
        galleryUrl: "https://www.prettyfoto.com/mountains"
    }
];

// ============ CONSTANTS ============
const STORAGE_KEY = 'prettyfoto_puzzle';
// Use explicit year/month/day to get local midnight (month is 0-indexed)
const EPOCH = new Date(2026, 1, 3, 0, 0, 0, 0).getTime();
const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

// ============ GAME STATE ============
let currentPuzzle = null;
let isDaily = false;
let gridSize = 4;
let tiles = [];
let emptyIndex = 0;
let moves = 0;
let seconds = 0;
let timerInterval = null;
let gameStarted = false;
let tileImages = [];
let cachedTileSize = 0; // avoid forced reflow: cache from renderBoard, reuse in shuffle/completion
let shuffleSeed = 0;
let soundEnabled = true;
let deferredPrompt = null;

// ============ GALLERY ROTATION ============
const GALLERY_SIZE = 12; // Show only 12 images at a time
let galleryOffset = 0; // Current rotation offset
const GALLERY_ROTATION_INTERVAL = 60000; // Rotate every 60 seconds (1 minute)
let galleryRotationTimer = null;

// ============ STATS ============
let stats = {
    played: 0,
    won: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalMoves: 0,
    totalTime: 0,
    lastPlayedDate: null,
    todayCompleted: false,
    todayMoves: 0,
    todayTime: 0,
    hasSeenOnboarding: false,
    hasSeenPromo: false,
    hasSubscribed: false,    // Track if user has subscribed to emails
    subscribedEmail: null,   // Store subscribed email
    // Behavior tracking
    dailyFirstCount: 0,      // Sessions where user played daily first
    galleryFirstCount: 0,    // Sessions where user played gallery first  
    dailySkippedCount: 0,    // Sessions where user never played daily
    galleryPlays: 0,         // Total gallery puzzles completed
    dailyPlays: 0,           // Total daily puzzles completed
    shopClicks: 0            // Track shop link clicks
};

// Session tracking (resets on page reload)
let sessionState = {
    dailyStarted: false,
    galleryStarted: false,
    firstAction: null,       // 'daily' or 'gallery'
    sessionRecorded: false   // Whether we've recorded this session's behavior
};

// ============ PERSONALIZATION ============
let userPrefs = {
    // Category engagement (auto-tracked)
    categoryPlays: {
        butterflies: 0,
        flowers: 0,
        horses: 0,
        landscapes: 0,
        'animal friends': 0,
        'rural': 0,
        'city safari': 0
    },
    gamePlays: { slider: 0 },
    natureSoul: null,
    // Favorites
    favoriteImages: [],
    // Visit tracking
    visitCount: 0,
    lastVisit: null,
    // Preferred game mode
    preferredGame: 'slider'
};

const PREFS_KEY = 'prettyfoto_prefs';

function loadPrefs() {
    const stored = localStorage.getItem(PREFS_KEY);
    if (stored) {
        const loaded = JSON.parse(stored);
        userPrefs = { ...userPrefs, ...loaded };
        // Ensure nested objects exist
        userPrefs.categoryPlays = userPrefs.categoryPlays || { butterflies: 0, flowers: 0, horses: 0, landscapes: 0, 'animal friends': 0, 'rural': 0, 'city safari': 0 };
        // Add new categories if missing from old saves
        if (!userPrefs.categoryPlays['animal friends']) userPrefs.categoryPlays['animal friends'] = 0;
        if (!userPrefs.categoryPlays['rural']) userPrefs.categoryPlays['rural'] = 0;
        if (!userPrefs.categoryPlays['city safari']) userPrefs.categoryPlays['city safari'] = 0;
        userPrefs.gamePlays = userPrefs.gamePlays || { slider: 0 };
        userPrefs.favoriteImages = userPrefs.favoriteImages || [];
    }
    // Track visit
    userPrefs.visitCount++;
    userPrefs.lastVisit = new Date().toISOString();
    savePrefs();
}

function savePrefs() {
    localStorage.setItem(PREFS_KEY, JSON.stringify(userPrefs));
}

function trackCategoryPlay(category) {
    if (userPrefs.categoryPlays[category] !== undefined) {
        userPrefs.categoryPlays[category]++;
        savePrefs();
    }
}

function trackGamePlay(game) {
    if (userPrefs.gamePlays[game] !== undefined) {
        userPrefs.gamePlays[game]++;
        updatePreferredGame();
        savePrefs();
    }
}

function updatePreferredGame() {
    userPrefs.preferredGame = 'slider';
}

function getFavoriteCategory() {
    let maxPlays = 0;
    let favorite = null;
    for (const [cat, plays] of Object.entries(userPrefs.categoryPlays)) {
        if (plays > maxPlays) {
            maxPlays = plays;
            favorite = cat;
        }
    }
    return maxPlays > 0 ? favorite : null;
}

function getWelcomeMessage() {
    const soul = userPrefs.natureSoul;
    const visits = userPrefs.visitCount;
    const favCat = getFavoriteCategory();
    
    const soulEmojis = {
        dreamer: '🦋',
        explorer: '🏔️',
        nurturer: '🌸',
        freeSpirit: '🐴'
    };
    
    const soulNames = {
        dreamer: 'Dreamer',
        explorer: 'Explorer',
        nurturer: 'Nurturer',
        freeSpirit: 'Free Spirit'
    };
    
    if (visits === 1) {
        return { title: 'Welcome!', subtitle: 'Discover beautiful nature photography' };
    }
    
    if (soul && soulNames[soul]) {
        return { 
            title: `Welcome back, ${soulNames[soul]}! ${soulEmojis[soul]}`, 
            subtitle: `Ready for today's ${favCat || 'nature'} adventure?`
        };
    }
    
    if (visits > 5) {
        const catEmojis = { butterflies: '🦋', flowers: '🌸', horses: '🐴', landscapes: '🏔️' };
        if (favCat) {
            return { 
                title: `Welcome back! ${catEmojis[favCat] || '🌟'}`, 
                subtitle: `We have new ${favCat} for you!`
            };
        }
    }
    
    return { title: 'Welcome back!', subtitle: 'New puzzles await you' };
}

function getThemeColors() {
    const soul = userPrefs.natureSoul;
    const favCat = getFavoriteCategory();
    
    const themes = {
        dreamer: { primary: '#9b59b6', light: '#e8daef' },
        explorer: { primary: '#3498db', light: '#d6eaf8' },
        nurturer: { primary: '#e91e63', light: '#fce4ec' },
        freeSpirit: { primary: '#e67e22', light: '#fdebd0' }
    };
    
    const catToSoul = {
        butterflies: 'dreamer',
        landscapes: 'explorer',
        flowers: 'nurturer',
        horses: 'freeSpirit'
    };
    
    if (soul && themes[soul]) return themes[soul];
    if (favCat && catToSoul[favCat]) return themes[catToSoul[favCat]];
    
    return null; // Use default theme
}

function applyPersonalizedTheme() {
    const colors = getThemeColors();
    if (colors) {
        document.documentElement.style.setProperty('--accent', colors.primary);
        document.documentElement.style.setProperty('--accent-light', colors.light);
    }
}

function toggleFavorite(puzzleId) {
    const idx = userPrefs.favoriteImages.indexOf(puzzleId);
    if (idx > -1) {
        userPrefs.favoriteImages.splice(idx, 1);
    } else {
        userPrefs.favoriteImages.push(puzzleId);
    }
    savePrefs();
    return userPrefs.favoriteImages.includes(puzzleId);
}

function isFavorite(puzzleId) {
    return userPrefs.favoriteImages.includes(puzzleId);
}

function markPuzzleCompleted(puzzleId) {
    if (!userPrefs.completedPuzzles) {
        userPrefs.completedPuzzles = [];
    }
    if (!userPrefs.completedPuzzles.includes(puzzleId)) {
        userPrefs.completedPuzzles.push(puzzleId);
        savePrefs();
    }
}

// ============ STORY MODE ============
const DEFAULT_STORIES = {
    butterflies: {
        locations: ["Butterfly Garden, NC", "Mountain Meadow", "Wildflower Field", "Nature Reserve"],
        seasons: ["Spring", "Summer", "Late Summer", "Early Fall"],
        moments: [
            "A fleeting moment of stillness captured as delicate wings catch the golden light.",
            "Nature's living artwork - each wing pattern tells a story millions of years in the making.",
            "Time seemed to stop as this beautiful creature paused in its endless dance among the flowers."
        ]
    },
    flowers: {
        locations: ["Botanical Garden", "Private Garden", "Meadow Trail", "Countryside"],
        seasons: ["Spring", "Early Summer", "Peak Bloom", "Golden Hour"],
        moments: [
            "Petals unfurling in the morning dew, a daily miracle we often overlook.",
            "Each bloom is a celebration - nature's way of showing us that beauty needs no purpose.",
            "In the quiet of the garden, this flower seemed to glow from within."
        ]
    },
    horses: {
        locations: ["Open Range, Montana", "Countryside Pasture", "Mountain Valley", "Golden Fields"],
        seasons: ["Autumn", "Summer Evening", "Spring Morning", "Winter Light"],
        moments: [
            "Wild and free - this majestic creature embodies the spirit we all long for.",
            "A moment of connection between photographer and subject, trust earned through patience.",
            "The golden light transformed an ordinary moment into something magical."
        ]
    },
    landscapes: {
        locations: ["Blue Ridge Mountains", "Pacific Northwest", "Rocky Mountains", "Coastal Cliffs"],
        seasons: ["Golden Hour", "Blue Hour", "Misty Morning", "After the Storm"],
        moments: [
            "Standing here, the world felt infinite and all worries seemed impossibly small.",
            "Nature's grandeur reminds us we're part of something much larger than ourselves.",
            "I waited hours for this light - some moments are worth any amount of patience."
        ]
    }
};

function getStoryForPuzzle(puzzle) {
    // Return existing story if defined
    if (puzzle.story) return puzzle.story;
    
    // Generate default story based on category
    const defaults = DEFAULT_STORIES[puzzle.category] || DEFAULT_STORIES.flowers;
    const seed = puzzle.id;
    
    return {
        location: defaults.locations[seed % defaults.locations.length],
        season: defaults.seasons[seed % defaults.seasons.length],
        moment: defaults.moments[seed % defaults.moments.length],
        tags: getCategoryTags(puzzle.category, puzzle.title)
    };
}

function getCategoryTags(category, title) {
    const baseTags = {
        butterflies: ["butterfly", "nature", "wildlife", "macro", "wings", "garden"],
        flowers: ["flower", "botanical", "bloom", "garden", "nature", "floral"],
        horses: ["horse", "equine", "wildlife", "freedom", "nature", "majestic"],
        landscapes: ["landscape", "scenic", "nature", "mountains", "travel", "adventure"]
    };
    
    const tags = [...(baseTags[category] || baseTags.flowers)];
    // Add words from title
    title.toLowerCase().split(' ').forEach(word => {
        if (word.length > 3 && !tags.includes(word)) tags.push(word);
    });
    return tags.slice(0, 8);
}

function showStoryModal(puzzle) {
    if (!puzzle) return;
    
    playSound('click');
    const story = getStoryForPuzzle(puzzle);
    
    setImageSrcWithFallback(document.getElementById('storyImage'), getThumbnailUrl(puzzle.image, 400));
    document.getElementById('storyTitle').textContent = puzzle.title;
    document.getElementById('storyLocation').textContent = story.location;
    document.getElementById('storySeason').textContent = story.season;
    document.getElementById('storyMoment').textContent = `"${story.moment}"`;
    document.getElementById('storyShopLink').href = puzzle.shopUrl;
    
    // Render tags
    document.getElementById('storyTags').innerHTML = story.tags
        .map(tag => `<span class="story-tag">${tag}</span>`).join('');
    
    // Play button
    document.getElementById('storyPlayBtn').onclick = () => {
        const s = document.getElementById('storyModal');
        s.classList.add('hidden');
        setModalAria(s, false);
        selectPuzzle(puzzle.id);
    };
    
    const sm = document.getElementById('storyModal');
    sm.classList.remove('hidden');
    setModalAria(sm, true);
}

function setupStoryModal() {
    document.getElementById('closeStoryModal').onclick = () => {
        const s = document.getElementById('storyModal');
        s.classList.add('hidden');
        setModalAria(s, false);
    };
    document.getElementById('storyModal').onclick = (e) => {
        if (e.target.id === 'storyModal') {
            const s = document.getElementById('storyModal');
            s.classList.add('hidden');
            setModalAria(s, false);
        }
    };
    
    // View Story button in completion modal
    document.getElementById('viewStoryBtn').onclick = () => {
        showStoryModal(currentPuzzle);
    };
}


// ============ AUDIO ============
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playSound(type) {
    if (!soundEnabled) return;
    
    try {
        const ctx = initAudio();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        switch(type) {
            case 'slide':
                oscillator.frequency.setValueAtTime(400, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.1);
                break;
                
            case 'win':
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
                    gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.15);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3);
                    osc.start(ctx.currentTime + i * 0.15);
                    osc.stop(ctx.currentTime + i * 0.15 + 0.3);
                });
                break;
                
            case 'click':
                oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.05);
                break;
        }
    } catch (e) {}
}

function vibrate(pattern) {
    if (navigator.vibrate) navigator.vibrate(pattern);
}

// ============ DOM ELEMENTS ============
const homeView = document.getElementById('homeView');
const puzzleView = document.getElementById('puzzleView');
const puzzleGallery = document.getElementById('puzzleGallery');
const puzzleTitle = document.getElementById('puzzleTitle');
const puzzlePreview = document.getElementById('puzzlePreview');
const difficultySelect = document.getElementById('difficultySelect');
const gameArea = document.getElementById('gameArea');
const puzzleBoard = document.getElementById('puzzleBoard');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const shopLink = document.getElementById('shopLink');
const completionModal = document.getElementById('completionModal');
const hintModal = document.getElementById('hintModal');
const statsModal = document.getElementById('statsModal');
const onboardingModal = document.getElementById('onboardingModal');
const emailModal = document.getElementById('emailModal');

function setModalAria(modal, open) {
    if (modal) modal.setAttribute('aria-hidden', open ? 'false' : 'true');
}
function setViewAria(view, hidden) {
    if (view) view.setAttribute('aria-hidden', hidden ? 'true' : 'false');
}
const confettiCanvas = document.getElementById('confetti');

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    loadPrefs();
    setViewAria(homeView, false);
    setViewAria(puzzleView, true);
    registerServiceWorker();
    applyPersonalization();
    setupDailyPuzzle();
    renderGallery();
    setupEventListeners();
    startCountdown();
    checkOnboarding();
    setupPWAInstall();
    updateSoundButton();
    setupStoryModal();
    
    // Stop gallery rotation when page is hidden to save resources
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopGalleryRotation();
        } else if (!puzzleView.classList.contains('hidden')) {
            // Don't restart rotation if we're in puzzle view
            return;
        } else {
            // Restart rotation when returning to gallery
            const activeFilter = document.querySelector('.filter-btn.active');
            const category = activeFilter ? activeFilter.dataset.category : 'all';
            renderGallery(category);
        }
    });
});

function applyPersonalization() {
    // Apply personalized theme colors
    applyPersonalizedTheme();
    
    // Update welcome message
    const welcome = getWelcomeMessage();
    document.getElementById('welcomeTitle').textContent = welcome.title;
    document.getElementById('welcomeSubtitle').textContent = welcome.subtitle;
    
}

const PWA_CACHE_NAME = 'prettyfoto-puzzle-v2';

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => {
            if (navigator.serviceWorker.controller) {
                precachePuzzleImages();
            } else {
                navigator.serviceWorker.ready.then(precachePuzzleImages);
            }
        }).catch(() => {});
    }
}

// Precache external puzzle images for offline; run in background with limited concurrency
function precachePuzzleImages() {
    if (!('caches' in window)) return;
    const urls = [...new Set(puzzles.map((p) => p.image))];
    const concurrency = 3;
    let index = 0;
    function next() {
        if (index >= urls.length) return;
        const url = urls[index++];
        fetch(url, { mode: 'cors' })
            .then((r) => r.ok ? r : Promise.reject())
            .then((r) => {
                const clone = r.clone();
                return caches.open(PWA_CACHE_NAME).then((cache) => cache.put(url, clone)).then(() => r);
            })
            .then(() => next(), () => next());
    }
    for (let i = 0; i < concurrency; i++) next();
}

// If image load fails (e.g. offline), try serving from cache
function loadImageWithCacheFallback(url, img, onload, onerror) {
    img.onload = onload;
    img.onerror = () => {
        if (!('caches' in window)) {
            if (onerror) onerror();
            return;
        }
        caches.match(url).then((res) => {
            if (!res) {
                if (onerror) onerror();
                return;
            }
            res.blob().then((blob) => {
                img.src = URL.createObjectURL(blob);
                img.onerror = onerror;
            });
        });
    };
    img.crossOrigin = 'anonymous';
    img.src = url;
}

// Set img element src with cache fallback for offline
function setImageSrcWithFallback(element, url) {
    if (!element || !url) return;
    element.onerror = function onImgError() {
        element.onerror = null;
        if (!('caches' in window)) return;
        caches.match(url).then((res) => {
            if (res) res.blob().then((blob) => { element.src = URL.createObjectURL(blob); });
        });
    };
    element.src = url;
}

function setupPWAInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('installBtn').classList.remove('hidden');
    });
    
    document.getElementById('installBtn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            deferredPrompt = null;
            document.getElementById('installBtn').classList.add('hidden');
        }
    });
}

function checkOnboarding() {
    if (!stats.hasSeenOnboarding) {
        onboardingModal.classList.remove('hidden');
        setModalAria(onboardingModal, true);
    }
}

function setupEventListeners() {
    // Sound toggle
    document.getElementById('soundBtn').addEventListener('click', toggleSound);
    
    // Stats button
    document.getElementById('statsBtn').addEventListener('click', showStats);
    document.getElementById('closeStats').addEventListener('click', () => {
        statsModal.classList.add('hidden');
        setModalAria(statsModal, false);
    });
    
    // Daily play button
    document.getElementById('playDailyBtn').addEventListener('click', playDaily);
    
    // Share app (header) - for Instagram, Facebook, etc.
    document.getElementById('shareAppBtn').addEventListener('click', () => shareApp());
    
    // Share from completion modal (with result message)
    document.getElementById('shareResultBtn').addEventListener('click', () => {
        const message = isDaily
            ? "I just completed today's PrettyFoto puzzle! 🧩 New puzzle every day — try it:"
            : "Just finished a nature photo puzzle from PrettyFoto! 🧩 Try it:";
        shareApp({ text: message });
    });
    
    // Back button
    document.getElementById('backBtn').addEventListener('click', goHome);
    
    // Browse gallery (escape hatch when daily is too hard)
    document.getElementById('browseGalleryLink').addEventListener('click', (e) => {
        e.preventDefault();
        goHomeAndShowGallery();
    });
    
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            playSound('click');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderGallery(e.target.dataset.category);
        });
    });
    
    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('click');
            gridSize = parseInt(btn.dataset.size);
            startGame();
        });
    });
    
    // Hint button
    document.getElementById('hintBtn').addEventListener('click', showHint);
    
    // Shuffle button (non-daily only)
    document.getElementById('shuffleBtn').addEventListener('click', () => {
        if (isDaily) return;
        shuffleSeed = Date.now();
        shuffleTiles();
        moves = 0;
        seconds = 0;
        gameStarted = false;
        updateGameStats();
    });
    
    // Completion modal buttons
    document.getElementById('playAgainBtn').addEventListener('click', () => {
        completionModal.classList.add('hidden');
        setModalAria(completionModal, false);
        if (isDaily) {
            goHome();
        } else {
            startGame();
        }
    });
    
    document.getElementById('newPuzzleBtn').addEventListener('click', () => {
        completionModal.classList.add('hidden');
        setModalAria(completionModal, false);
        goHome();
    });
    
    // Onboarding
    let currentSlide = 1;
    document.getElementById('onboardingNext').addEventListener('click', () => {
        playSound('click');
        if (currentSlide < 3) {
            currentSlide++;
            updateOnboardingSlide(currentSlide);
        } else {
            onboardingModal.classList.add('hidden');
            setModalAria(onboardingModal, false);
            stats.hasSeenOnboarding = true;
            saveStats();
        }
    });
    
    document.querySelectorAll('.onboarding-dots .dot').forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.dataset.slide);
            updateOnboardingSlide(currentSlide);
        });
    });
    
    // Email/Promo modal
    document.getElementById('closeEmail').addEventListener('click', () => {
        emailModal.classList.add('hidden');
        setModalAria(emailModal, false);
    });
    document.getElementById('skipEmail').addEventListener('click', () => {
        emailModal.classList.add('hidden');
        setModalAria(emailModal, false);
        stats.hasSeenPromo = true;
        saveStats();
    });
    
    // Email subscription form handler
    const subscribeForm = document.getElementById('emailSubscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('subscribeEmail').value.trim();
            const dailyPuzzle = subscribeForm.querySelector('input[name="dailyPuzzle"]').checked;
            const newsletter = subscribeForm.querySelector('input[name="newsletter"]').checked;
            const sales = subscribeForm.querySelector('input[name="sales"]').checked;
            
            if (!email) return;
            
            // Prepare subscription data
            const subscriptionData = {
                email: email,
                preferences: {
                    dailyPuzzle: dailyPuzzle,
                    newsletter: newsletter,
                    sales: sales
                },
                source: 'puzzle_game',
                timestamp: new Date().toISOString()
            };
            
            // Try to submit to prettyfoto.com contact endpoint
            // Note: This requires CORS to be enabled on the server
            // If no endpoint is available, we'll store locally and provide fallback
            try {
                // Attempt to send to prettyfoto.com (configure endpoint as needed)
                const endpoint = 'https://www.prettyfoto.com/api/subscribe';
                
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(subscriptionData),
                    mode: 'cors'
                });
                
                if (!response.ok) throw new Error('Server error');
                
                console.log('Subscription successful:', subscriptionData);
            } catch (error) {
                // If API fails, store locally and log for manual export
                console.log('Subscription stored locally (API unavailable):', subscriptionData);
                
                // Store in localStorage for potential manual export
                const storedSubs = JSON.parse(localStorage.getItem('pendingSubscriptions') || '[]');
                storedSubs.push(subscriptionData);
                localStorage.setItem('pendingSubscriptions', JSON.stringify(storedSubs));
            }
            
            // Update stats
            stats.hasSubscribed = true;
            stats.subscribedEmail = email;
            stats.hasSeenPromo = true;
            saveStats();
            
            // Show success state
            subscribeForm.classList.add('hidden');
            document.getElementById('subscribeSuccess').classList.remove('hidden');
            document.getElementById('skipEmail').classList.add('hidden');
            
            // Track conversion
            stats.emailSubscribes = (stats.emailSubscribes || 0) + 1;
            saveStats();
        });
    }
    
    // Track shop link clicks
    document.querySelectorAll('a[href*="prettyfoto.com"]').forEach(link => {
        link.addEventListener('click', () => {
            stats.shopClicks = (stats.shopClicks || 0) + 1;
            saveStats();
        });
    });
    
    // Close modals
    hintModal.addEventListener('click', () => {
        hintModal.classList.add('hidden');
        setModalAria(hintModal, false);
    });
    statsModal.addEventListener('click', (e) => {
        if (e.target === statsModal) {
            statsModal.classList.add('hidden');
            setModalAria(statsModal, false);
        }
    });
    completionModal.addEventListener('click', (e) => {
        if (e.target === completionModal) {
            completionModal.classList.add('hidden');
            setModalAria(completionModal, false);
        }
    });
}

function updateOnboardingSlide(num) {
    document.querySelectorAll('.onboarding-slide').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.onboarding-dots .dot').forEach(d => d.classList.remove('active'));
    
    document.querySelector(`.onboarding-slide[data-slide="${num}"]`).classList.add('active');
    document.querySelector(`.dot[data-slide="${num}"]`).classList.add('active');
    
    document.getElementById('onboardingNext').textContent = num === 3 ? "Let's Play!" : 'Next';
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    updateSoundButton();
    if (soundEnabled) playSound('click');
}

function updateSoundButton() {
    const btn = document.getElementById('soundBtn');
    btn.textContent = soundEnabled ? '🔊' : '🔇';
    btn.classList.toggle('muted', !soundEnabled);
}

// ============ DAILY PUZZLE & WEEKLY FEATURED ============
function getDailyPuzzleNumber() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.floor((today.getTime() - EPOCH) / DAY_MS) + 1;
}

function getDailyPuzzle() {
    const puzzleNum = getDailyPuzzleNumber();
    const index = (puzzleNum - 1) % puzzles.length;
    return puzzles[index];
}

function getCurrentWeekNumber() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekNum = Math.floor((today.getTime() - EPOCH) / WEEK_MS) + 1;
    // Cycle through weeks 1-4
    return ((weekNum - 1) % 4) + 1;
}

function isPuzzleFeaturedThisWeek(puzzle) {
    if (!puzzle.featuredWeek) return false;
    return puzzle.featuredWeek === getCurrentWeekNumber();
}

function getTodayString() {
    return new Date().toDateString();
}

function setupDailyPuzzle() {
    const daily = getDailyPuzzle();
    const puzzleNum = getDailyPuzzleNumber();
    const today = new Date();
    
    document.getElementById('puzzleNumber').textContent = puzzleNum;
    document.getElementById('puzzleDate').textContent = today.toLocaleDateString('en-US', { 
        month: 'short', day: 'numeric', year: 'numeric' 
    });
    const dailyImgEl = document.getElementById('dailyImage');
    dailyImgEl.fetchPriority = 'high';
    setImageSrcWithFallback(dailyImgEl, getThumbnailUrl(daily.image, 400));
    document.getElementById('dailyTitle').textContent = daily.title;
    document.getElementById('dailyCategory').textContent = daily.category;
    
    const todayStr = getTodayString();
    if (stats.lastPlayedDate === todayStr && stats.todayCompleted) {
        showDailyCompleted();
    } else {
        hideDailyCompleted();
    }
}

function showDailyCompleted() {
    document.getElementById('dailyOverlay').classList.remove('hidden');
    document.getElementById('playDailyBtn').classList.add('hidden');
    document.getElementById('dailyCompleted').classList.remove('hidden');
}

function hideDailyCompleted() {
    document.getElementById('dailyOverlay').classList.add('hidden');
    document.getElementById('playDailyBtn').classList.remove('hidden');
    document.getElementById('dailyCompleted').classList.add('hidden');
}

function playDaily() {
    playSound('click');
    stopGalleryRotation(); // Stop rotation when leaving gallery
    isDaily = true;
    currentPuzzle = getDailyPuzzle();
    gridSize = 3; // Easier default so more people complete the daily without frustration
    shuffleSeed = getDailyPuzzleNumber();
    
    // Track behavior - daily started
    if (!sessionState.dailyStarted) {
        sessionState.dailyStarted = true;
        if (!sessionState.firstAction) {
            sessionState.firstAction = 'daily';
        }
    }
    
    puzzleTitle.textContent = currentPuzzle.title;
    setImageSrcWithFallback(puzzlePreview, getThumbnailUrl(currentPuzzle.image, 400));
    shopLink.href = currentPuzzle.shopUrl;
    document.getElementById('galleryLink').href = currentPuzzle.galleryUrl;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('completionGalleryLink').href = currentPuzzle.galleryUrl;
    setImageSrcWithFallback(document.getElementById('hintImage'), getThumbnailUrl(currentPuzzle.image, 400));
    
    document.getElementById('dailyBadge').classList.remove('hidden');
    document.getElementById('dailyBadgeNum').textContent = getDailyPuzzleNumber();
    document.getElementById('shuffleBtn').classList.add('hidden');
    document.getElementById('browseGalleryLink').classList.remove('hidden');
    
    homeView.classList.add('hidden');
    puzzleView.classList.remove('hidden');
    setViewAria(homeView, true);
    setViewAria(puzzleView, false);
    difficultySelect.classList.add('hidden');
    gameArea.classList.remove('hidden');
    
    resetGame();
    createTiles();
}

function startCountdown() {
    function update() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    update();
    setInterval(update, 1000);
}

// ============ IMAGE DELIVERY ============
// Thumbnail URL: f_auto (WebP/AVIF), sized dimensions, q_auto:good. Reduces payload and improves Lighthouse.
function getThumbnailUrl(fullUrl, width = 280) {
    if (!fullUrl || typeof fullUrl !== 'string') return fullUrl;
    let u = fullUrl
        .replace(/w_\d+,h_\d+/, `w_${width},h_${width}`)
        .replace(/q_auto:best/, 'q_auto:good');
    if (u.includes('/image/upload/') && !u.includes('f_auto')) u = u.replace('/image/upload/', '/image/upload/f_auto,');
    return u;
}

// ============ GALLERY ============
function renderGallery(category = 'all') {
    let filtered = category === 'all' 
        ? puzzles 
        : puzzles.filter(p => p.category === category);
    
    // Sort: featured puzzles first, then rest
    filtered = filtered.sort((a, b) => {
        const aFeatured = isPuzzleFeaturedThisWeek(a);
        const bFeatured = isPuzzleFeaturedThisWeek(b);
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        return 0;
    });
    
    // Rotate through images: show only GALLERY_SIZE at a time
    const totalImages = filtered.length;
    const displayImages = [];
    
    console.log(`Gallery: Total images=${totalImages}, Display limit=${GALLERY_SIZE}, Offset=${galleryOffset}`);
    
    if (totalImages <= GALLERY_SIZE) {
        // If we have fewer images than the display size, show all
        displayImages.push(...filtered);
    } else {
        // Rotate through images using galleryOffset
        for (let i = 0; i < GALLERY_SIZE; i++) {
            const index = (galleryOffset + i) % totalImages;
            displayImages.push(filtered[index]);
        }
    }
    
    console.log(`Displaying ${displayImages.length} images:`, displayImages.map(p => p.title));
    
    puzzleGallery.innerHTML = displayImages.map(puzzle => {
        const isFeatured = isPuzzleFeaturedThisWeek(puzzle);
        const badge = isFeatured ? '<span class="featured-badge">✨ New This Week</span>' : '';
        
        return `
        <div class="puzzle-card ${isFeatured ? 'featured' : ''}">
            ${badge}
            <img src="${getThumbnailUrl(puzzle.image)}" alt="${puzzle.title}" class="puzzle-card-image" loading="lazy" decoding="async" width="280" height="280" onclick="selectPuzzle(${puzzle.id})">
            <div class="puzzle-card-info">
                <div class="puzzle-card-title">${puzzle.title}</div>
                <div class="puzzle-card-actions">
                    <button class="card-story-btn" onclick="event.stopPropagation(); showStoryModal(puzzles.find(p=>p.id===${puzzle.id}))">📖</button>
                    <button class="card-play-btn" onclick="selectPuzzle(${puzzle.id})">▶️ Play</button>
                </div>
            </div>
        </div>
    `;
    }).join('');
    
    // Start rotation timer if not already running
    startGalleryRotation(category);
}

function startGalleryRotation(category = 'all') {
    // Clear existing timer
    if (galleryRotationTimer) {
        clearInterval(galleryRotationTimer);
    }
    
    // Set up new rotation timer
    galleryRotationTimer = setInterval(() => {
        const filtered = category === 'all' 
            ? puzzles 
            : puzzles.filter(p => p.category === category);
        
        // Only rotate if we have more images than display size
        if (filtered.length > GALLERY_SIZE) {
            galleryOffset = (galleryOffset + GALLERY_SIZE) % filtered.length;
            renderGallery(category);
        }
    }, GALLERY_ROTATION_INTERVAL);
}

function stopGalleryRotation() {
    if (galleryRotationTimer) {
        clearInterval(galleryRotationTimer);
        galleryRotationTimer = null;
    }
}

function selectPuzzle(id) {
    playSound('click');
    stopGalleryRotation(); // Stop rotation when leaving gallery
    isDaily = false;
    currentPuzzle = puzzles.find(p => p.id === id);
    if (!currentPuzzle) return;
    
    // Track behavior - gallery started
    if (!sessionState.galleryStarted) {
        sessionState.galleryStarted = true;
        if (!sessionState.firstAction) {
            sessionState.firstAction = 'gallery';
        }
    }
    
    shuffleSeed = Date.now();
    
    puzzleTitle.textContent = currentPuzzle.title;
    setImageSrcWithFallback(puzzlePreview, getThumbnailUrl(currentPuzzle.image, 400));
    shopLink.href = currentPuzzle.shopUrl;
    document.getElementById('galleryLink').href = currentPuzzle.galleryUrl;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('completionGalleryLink').href = currentPuzzle.galleryUrl;
    setImageSrcWithFallback(document.getElementById('hintImage'), getThumbnailUrl(currentPuzzle.image, 400));
    
    document.getElementById('dailyBadge').classList.add('hidden');
    document.getElementById('shuffleBtn').classList.remove('hidden');
    document.getElementById('browseGalleryLink').classList.add('hidden');
    
    homeView.classList.add('hidden');
    puzzleView.classList.remove('hidden');
    setViewAria(homeView, true);
    setViewAria(puzzleView, false);
    difficultySelect.classList.remove('hidden');
    gameArea.classList.add('hidden');
    
    resetGame();
}

function goHome() {
    playSound('click');
    puzzleView.classList.add('hidden');
    homeView.classList.remove('hidden');
    setViewAria(puzzleView, true);
    setViewAria(homeView, false);
    resetGame();
    setupDailyPuzzle();
    // Restart gallery rotation when returning home
    const activeFilter = document.querySelector('.filter-btn.active');
    const category = activeFilter ? activeFilter.dataset.category : 'all';
    renderGallery(category);
}

function goHomeAndShowGallery() {
    goHome();
    requestAnimationFrame(() => {
        const gallery = document.querySelector('.free-play-section');
        if (gallery) gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ============ SHARING (Instagram, Facebook, etc.) ============
function getShareUrl() {
    // Use canonical URL when possible so shared links show correct OG preview
    const canonical = 'https://prettyfoto.com/puzzles';
    if (typeof window !== 'undefined' && window.location && window.location.origin !== 'file://') {
        try {
            const url = new URL(window.location.href);
            if (url.origin.includes('prettyfoto.com')) return url.origin + (url.pathname || '/puzzles');
        } catch (_) {}
    }
    return canonical;
}

function shareApp(options = {}) {
    const url = getShareUrl();
    const title = options.title || 'PrettyFoto Daily Puzzles';
    const text = options.text || "Daily nature photo puzzles — new puzzle every day! 🧩🌸";
    const shareData = { title, text, url };

    if (typeof navigator !== 'undefined' && navigator.share) {
        navigator.share(shareData).catch(() => copyShareFallback(url, text));
    } else {
        copyShareFallback(url, text);
    }
}

function copyShareFallback(url, text) {
    const full = text ? `${text}\n${url}` : url;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).then(() => showShareToast('Link copied! Paste it in Instagram, Facebook, or any app.'));
    } else {
        const ta = document.createElement('textarea');
        ta.value = full;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            showShareToast('Link copied! Paste it in Instagram, Facebook, or any app.');
        } catch (_) {
            showShareToast('Share: ' + url);
        }
        document.body.removeChild(ta);
    }
}

function showShareToast(message) {
    const existing = document.getElementById('shareToast');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.id = 'shareToast';
    el.className = 'share-toast';
    el.textContent = message;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 300);
    }, 3000);
}

// ============ GAME LOGIC ============
function startGame() {
    difficultySelect.classList.add('hidden');
    gameArea.classList.remove('hidden');
    
    resetGame();
    createTiles();
}

function resetGame() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    seconds = 0;
    moves = 0;
    gameStarted = false;
    tiles = [];
    tileImages = [];
    
    updateGameStats();
    puzzleBoard.innerHTML = '';
}

function createTiles() {
    const totalTiles = gridSize * gridSize;
    
    const maxBoardWidth = Math.min(340, window.innerWidth - 44);
    const tileSize = Math.floor((maxBoardWidth - (gridSize - 1) * 3 - 12) / gridSize);
    
    puzzleBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
    puzzleBoard.style.gridTemplateRows = `repeat(${gridSize}, ${tileSize}px)`;
    
    tiles = Array.from({ length: totalTiles }, (_, i) => i);
    emptyIndex = totalTiles - 1;
    
    const img = new Image();
    const done = () => {
        for (let i = 0; i < totalTiles; i++) {
            const canvas = document.createElement('canvas');
            canvas.width = tileSize * 2;
            canvas.height = tileSize * 2;
            const ctx = canvas.getContext('2d');
            
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const srcSize = img.width / gridSize;
            
            ctx.drawImage(img, col * srcSize, row * srcSize, srcSize, srcSize, 0, 0, canvas.width, canvas.height);
            tileImages[i] = canvas.toDataURL('image/jpeg', 0.9);
        }
        shuffleTiles();
        renderBoard(tileSize);
    };
    loadImageWithCacheFallback(getThumbnailUrl(currentPuzzle.image, 400), img, done, () => {
        if (puzzleBoard.children.length === 0) puzzleBoard.innerHTML = '<p class="offline-hint">Image unavailable. Try again when online, or play another puzzle.</p>';
    });
}

function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Count inversions in permutation of non-blank tiles (row-major order).
// Solvable iff (inversions + row_of_blank_from_bottom) is even.
function countInversions() {
    const totalTiles = gridSize * gridSize;
    const blank = totalTiles - 1;
    const arr = [];
    for (let i = 0; i < totalTiles; i++) {
        if (tiles[i] !== blank) arr.push(tiles[i]);
    }
    let inv = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) inv++;
        }
    }
    return inv;
}

function isSolvable() {
    const totalTiles = gridSize * gridSize;
    const blank = totalTiles - 1;
    const inversions = countInversions();
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyRowFromBottom = gridSize - 1 - emptyRow;
    return (inversions + emptyRowFromBottom) % 2 === 0;
}

// If puzzle is unsolvable, swap two non-blank tiles to flip parity.
function ensureSolvable() {
    if (isSolvable()) return;
    const totalTiles = gridSize * gridSize;
    const blank = totalTiles - 1;
    let a = -1, b = -1;
    for (let i = 0; i < totalTiles && b === -1; i++) {
        if (tiles[i] === blank) continue;
        if (a === -1) { a = i; continue; }
        b = i;
    }
    if (a !== -1 && b !== -1) {
        const t = tiles[a];
        tiles[a] = tiles[b];
        tiles[b] = t;
    }
}

function shuffleTiles() {
    const totalTiles = gridSize * gridSize;
    tiles = Array.from({ length: totalTiles }, (_, i) => i);
    emptyIndex = totalTiles - 1;
    
    let seed = shuffleSeed;
    const shuffleMoves = gridSize * gridSize * 25;
    
    for (let i = 0; i < shuffleMoves; i++) {
        const neighbors = getMovableNeighbors(emptyIndex);
        const randomIndex = Math.floor(seededRandom(seed + i) * neighbors.length);
        const randomNeighbor = neighbors[randomIndex];
        
        tiles[emptyIndex] = tiles[randomNeighbor];
        tiles[randomNeighbor] = totalTiles - 1;
        emptyIndex = randomNeighbor;
    }
    
    ensureSolvable();
    
    if (cachedTileSize > 0) {
        renderBoard(cachedTileSize);
    }
}

function getMovableNeighbors(emptyIdx) {
    const neighbors = [];
    const row = Math.floor(emptyIdx / gridSize);
    const col = emptyIdx % gridSize;
    
    if (row > 0) neighbors.push(emptyIdx - gridSize);
    if (row < gridSize - 1) neighbors.push(emptyIdx + gridSize);
    if (col > 0) neighbors.push(emptyIdx - 1);
    if (col < gridSize - 1) neighbors.push(emptyIdx + 1);
    
    return neighbors;
}

function renderBoard(tileSize) {
    cachedTileSize = tileSize;
    const totalTiles = gridSize * gridSize;
    puzzleBoard.innerHTML = '';
    
    for (let i = 0; i < totalTiles; i++) {
        const tileValue = tiles[i];
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.position = i;
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        
        if (tileValue === totalTiles - 1) {
            tile.classList.add('empty');
        } else {
            const img = document.createElement('img');
            img.src = tileImages[tileValue];
            tile.appendChild(img);
            
            if (isAdjacentToEmpty(i)) tile.classList.add('movable');
            tile.addEventListener('click', () => handleTileClick(i));
        }
        
        puzzleBoard.appendChild(tile);
    }
}

function isAdjacentToEmpty(position) {
    return getMovableNeighbors(emptyIndex).includes(position);
}

function handleTileClick(position) {
    if (!isAdjacentToEmpty(position)) return;
    
    playSound('slide');
    vibrate(10);
    
    if (!gameStarted) {
        gameStarted = true;
        startTimer();
    }
    
    const tile = puzzleBoard.children[position];
    const tileW = tile.offsetWidth;
    const tileSizeWithGap = tileW + 3;
    
    const posRow = Math.floor(position / gridSize);
    const posCol = position % gridSize;
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    
    tile.classList.add('sliding');
    tile.style.transform = `translate(${(emptyCol - posCol) * tileSizeWithGap}px, ${(emptyRow - posRow) * tileSizeWithGap}px)`;
    
    setTimeout(() => {
        tiles[emptyIndex] = tiles[position];
        tiles[position] = gridSize * gridSize - 1;
        emptyIndex = position;
        
        moves++;
        updateGameStats();
        
        renderBoard(tileW);
        
        if (checkWin()) setTimeout(puzzleComplete, 300);
    }, 120);
}

function checkWin() {
    const totalTiles = gridSize * gridSize;
    for (let i = 0; i < totalTiles; i++) {
        if (tiles[i] !== i) return false;
    }
    return true;
}

// ============ TIMER ============
function startTimer() {
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        updateGameStats();
    }, 1000);
}

function formatTime(secs) {
    const mins = Math.floor(secs / 60);
    return `${mins}:${(secs % 60).toString().padStart(2, '0')}`;
}

function updateGameStats() {
    timerDisplay.textContent = formatTime(seconds);
    movesDisplay.textContent = moves;
}

// ============ COMPLETION ============
function puzzleComplete() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    playSound('win');
    vibrate([100, 50, 100, 50, 200]);
    showConfetti();
    
    // Track for personalization
    trackGamePlay('slider');
    if (currentPuzzle.category) {
        trackCategoryPlay(currentPuzzle.category);
    }
    
    markPuzzleCompleted(currentPuzzle.id);
    
    setImageSrcWithFallback(document.getElementById('completedImage'), getThumbnailUrl(currentPuzzle.image, 400));
    document.getElementById('finalTime').textContent = formatTime(seconds);
    document.getElementById('finalMoves').textContent = moves;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    
    // Record session behavior on first completion
    if (!sessionState.sessionRecorded) {
        sessionState.sessionRecorded = true;
        if (sessionState.firstAction === 'daily') {
            stats.dailyFirstCount++;
        } else if (sessionState.firstAction === 'gallery') {
            stats.galleryFirstCount++;
        }
    }
    
    // Generate rating
    const rating = moves <= 50 ? '🏆 Perfect!' :
                   moves <= 80 ? '⭐ Excellent!' :
                   moves <= 120 ? '👍 Great!' :
                   moves <= 180 ? '✅ Good!' : '🎉 Solved!';
    
    if (isDaily) {
        document.getElementById('shareSection').classList.remove('hidden');
        document.getElementById('playAgainBtn').textContent = 'Back Home';
        
        const todayStr = getTodayString();
        
        if (stats.lastPlayedDate !== todayStr) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            stats.currentStreak = stats.lastPlayedDate === yesterday.toDateString() 
                ? stats.currentStreak + 1 : 1;
        }
        
        stats.played++;
        stats.won++;
        stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
        stats.totalMoves += moves;
        stats.totalTime += seconds;
        stats.lastPlayedDate = todayStr;
        stats.todayCompleted = true;
        stats.todayMoves = moves;
        stats.todayTime = seconds;
        stats.dailyPlays++; // Track daily completions
        
        saveStats();
        
        // Show email subscription modal after daily completion
        // Only show if user hasn't subscribed and hasn't dismissed recently
        if (!stats.hasSubscribed) {
            // Show on first completion, or periodically (every 3 daily plays)
            const shouldShowModal = stats.played === 1 || 
                (!stats.hasSeenPromo && stats.dailyPlays % 3 === 0);
            
            if (shouldShowModal) {
                setTimeout(() => {
                    // Reset form state in case it was shown before
                    const form = document.getElementById('emailSubscribeForm');
                    const success = document.getElementById('subscribeSuccess');
                    const skipBtn = document.getElementById('skipEmail');
                    if (form) form.classList.remove('hidden');
                    if (success) success.classList.add('hidden');
                    if (skipBtn) skipBtn.classList.remove('hidden');
                    
                    emailModal.classList.remove('hidden');
                    setModalAria(emailModal, true);
                }, 2500); // Show after completion modal
            }
        }
    } else {
        document.getElementById('shareSection').classList.remove('hidden');
        document.getElementById('playAgainBtn').textContent = 'Play Again';
        stats.galleryPlays++; // Track gallery completions
        saveStats();
    }
    
    renderCompletedBoard();
    setTimeout(() => completionModal.classList.remove('hidden'), 500);
}

function renderCompletedBoard() {
    const totalTiles = gridSize * gridSize;
    const tileSize = cachedTileSize || 80;
    
    puzzleBoard.innerHTML = '';
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        
        const img = document.createElement('img');
        img.src = tileImages[i];
        tile.appendChild(img);
        puzzleBoard.appendChild(tile);
    }
}

// ============ CONFETTI ============
function showConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#e17055', '#00b894', '#fdcb6e', '#6c5ce7', '#fd79a8'];
    
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: -20 - Math.random() * 100,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
            
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1;
            p.rotation += p.rotationSpeed;
        });
        
        if (++frame < 150) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
    animate();
}

// ============ STATS ============
function loadStats() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        const loaded = JSON.parse(stored);
        stats = { ...stats, ...loaded };
        // Ensure new tracking fields have defaults
        stats.dailyFirstCount = stats.dailyFirstCount || 0;
        stats.galleryFirstCount = stats.galleryFirstCount || 0;
        stats.dailySkippedCount = stats.dailySkippedCount || 0;
        stats.galleryPlays = stats.galleryPlays || 0;
        stats.dailyPlays = stats.dailyPlays || 0;
        stats.shopClicks = stats.shopClicks || 0;
    }
    
    const soundPref = localStorage.getItem('prettyfoto_sound');
    if (soundPref !== null) soundEnabled = soundPref === 'true';
}

function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    localStorage.setItem('prettyfoto_sound', soundEnabled.toString());
}

function showStats() {
    playSound('click');
    document.getElementById('statPlayed').textContent = stats.played;
    document.getElementById('statWon').textContent = stats.won;
    document.getElementById('statStreak').textContent = stats.currentStreak;
    document.getElementById('statBest').textContent = stats.bestStreak;
    
    if (stats.won > 0) {
        document.getElementById('statAvgMoves').textContent = Math.round(stats.totalMoves / stats.won);
        document.getElementById('statAvgTime').textContent = formatTime(Math.round(stats.totalTime / stats.won));
    }
    
    const todayStr = getTodayString();
    if (stats.lastPlayedDate === todayStr && stats.todayCompleted) {
        document.getElementById('todayResult').classList.remove('hidden');
        document.getElementById('todayResultText').textContent = 
            `Solved in ${stats.todayMoves} moves, ${formatTime(stats.todayTime)}`;
    } else {
        document.getElementById('todayResult').classList.add('hidden');
    }
    
    // Populate analytics
    document.getElementById('statDailyFirst').textContent = stats.dailyFirstCount || 0;
    document.getElementById('statGalleryFirst').textContent = stats.galleryFirstCount || 0;
    document.getElementById('statDailyPlays').textContent = stats.dailyPlays || 0;
    document.getElementById('statGalleryPlays').textContent = stats.galleryPlays || 0;
    
    // Generate insight
    const totalSessions = (stats.dailyFirstCount || 0) + (stats.galleryFirstCount || 0);
    const dailyPct = totalSessions > 0 ? Math.round((stats.dailyFirstCount || 0) / totalSessions * 100) : 0;
    const galleryPct = totalSessions > 0 ? Math.round((stats.galleryFirstCount || 0) / totalSessions * 100) : 0;
    
    let insight = '';
    if (totalSessions === 0) {
        insight = '🎮 Complete puzzles to see your play patterns!';
    } else if (dailyPct > galleryPct) {
        insight = `📅 ${dailyPct}% of sessions start with Daily - habit forming!`;
    } else if (galleryPct > dailyPct) {
        insight = `🖼️ ${galleryPct}% of sessions start with Gallery - browsing works!`;
    } else {
        insight = `⚖️ Equal mix of Daily & Gallery starts - variety is key!`;
    }
    document.getElementById('analyticsInsight').textContent = insight;
    
    statsModal.classList.remove('hidden');
    setModalAria(statsModal, true);
}

function showHint() {
    playSound('click');
    hintModal.classList.remove('hidden');
    setModalAria(hintModal, true);
}

// ============ RESIZE ============
window.addEventListener('resize', () => {
    if (currentPuzzle && !gameArea.classList.contains('hidden') && tileImages.length > 0) {
        const maxBoardWidth = Math.min(340, window.innerWidth - 44);
        const tileSize = Math.floor((maxBoardWidth - (gridSize - 1) * 3 - 12) / gridSize);
        
        puzzleBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
        puzzleBoard.style.gridTemplateRows = `repeat(${gridSize}, ${tileSize}px)`;
        renderBoard(tileSize);
    }
});

// ============================================================
// ==================== NEW GAME MODES ========================
// ============================================================

let currentGameMode = 'slider';

// ============ GAME MODE SWITCHING ============
function setupGameModeTabs() {
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            playSound('click');
            const mode = tab.dataset.mode;
            switchGameMode(mode);
        });
    });
}

function switchGameMode(mode) {
    currentGameMode = mode;
    
    // Update tabs
    document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.mode-tab[data-mode="${mode}"]`).classList.add('active');
    
    // Hide all game homes
    document.querySelectorAll('.game-home').forEach(h => h.classList.add('hidden'));
    
    // Show selected game home
    const homeId = `${mode}Home`;
    const homeEl = document.getElementById(homeId);
    if (homeEl) {
        homeEl.classList.remove('hidden');
        if (mode === 'slider') {
            setupDailyPuzzle();
        }
    }
}

