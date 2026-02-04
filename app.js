// PrettyFoto Daily Puzzle - Streamlined for Sales
// 20 unique PrettyFoto images - all driving to shop

// ============ PUZZLE DATA (16 Verified Images - All Direct Links) ============
// Each puzzle has: shopUrl (direct product page) and galleryUrl (collection page)
const puzzles = [
    // Butterflies (2)
    { 
        id: 1, 
        title: "Cherry on Top", 
        category: "butterflies", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719947771/IMG_1842_z7mzjy.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-1842?product_gallery=303973&product_id=7351866",
        galleryUrl: "https://www.prettyfoto.com/butterflies-in-nature"
    },
    { 
        id: 2, 
        title: "Nature's Jewel", 
        category: "butterflies", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1694475326/Jennifer_McClellan_008Cfc2f-1102-42Ba-Afef-D728dcafa2b5_o6h4nh.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-008cfc2f-1102-42ba-afef-d728dcafa2b5?product_gallery=303973&product_id=6389616",
        galleryUrl: "https://www.prettyfoto.com/butterflies-in-nature"
    },
    
    // Flowers - Tulips (3)
    { 
        id: 3, 
        title: "Love Blooms", 
        category: "flowers", 
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
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113644/2N4A4928_ugnovr.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a4928?product_gallery=331150&product_id=7331108",
        galleryUrl: "https://www.prettyfoto.com/equine-beauties"
    },
    { 
        id: 14, 
        title: "Magic Moment", 
        category: "horses", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1708488576/IMG_2866_b8y05a.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-2866?product_gallery=331150&product_id=6987885",
        galleryUrl: "https://www.prettyfoto.com/equine-beauties"
    },
    
    // Landscapes - Mountains (2)
    { 
        id: 15, 
        title: "Counting Sheep 2", 
        category: "landscapes", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113554/2N4A4751_ugqv2k.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/2n4a4751?product_gallery=303977&product_id=7331096",
        galleryUrl: "https://www.prettyfoto.com/mountains"
    },
    { 
        id: 16, 
        title: "An Unexpected View", 
        category: "landscapes", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113577/IMG_2394_nbgkpf.jpg", 
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/img-2394?product_gallery=303977&product_id=7331099",
        galleryUrl: "https://www.prettyfoto.com/mountains"
    },
];

// ============ CONSTANTS ============
const STORAGE_KEY = 'prettyfoto_puzzle';
const EPOCH = new Date('2026-02-03').getTime();
const DAY_MS = 24 * 60 * 60 * 1000;

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
let shuffleSeed = 0;
let soundEnabled = true;
let deferredPrompt = null;

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
        landscapes: 0
    },
    // Game mode engagement
    gamePlays: {
        slider: 0,
        zoom: 0,
        auction: 0,
        personality: 0,
        frame: 0
    },
    // User's personality result
    natureSoul: null, // 'dreamer', 'explorer', 'nurturer', 'freeSpirit'
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
        userPrefs.categoryPlays = userPrefs.categoryPlays || { butterflies: 0, flowers: 0, horses: 0, landscapes: 0 };
        userPrefs.gamePlays = userPrefs.gamePlays || { slider: 0, zoom: 0, auction: 0, personality: 0, frame: 0 };
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
    let maxPlays = 0;
    let preferred = 'slider';
    for (const [game, plays] of Object.entries(userPrefs.gamePlays)) {
        if (plays > maxPlays) {
            maxPlays = plays;
            preferred = game;
        }
    }
    userPrefs.preferredGame = preferred;
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

function getPersonalizedImages(count = 4) {
    const favCat = getFavoriteCategory();
    if (!favCat) return puzzles.slice(0, count);
    
    // Mix: 60% from favorite category, 40% others
    const favImages = puzzles.filter(p => p.category === favCat);
    const otherImages = puzzles.filter(p => p.category !== favCat);
    
    const favCount = Math.ceil(count * 0.6);
    const otherCount = count - favCount;
    
    const shuffledFav = [...favImages].sort(() => Math.random() - 0.5);
    const shuffledOther = [...otherImages].sort(() => Math.random() - 0.5);
    
    return [...shuffledFav.slice(0, favCount), ...shuffledOther.slice(0, otherCount)];
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

// ============ LIVE ACTIVITY FEED ============
const ACTIVITY_MESSAGES = [
    { template: "{{name}} in {{city}} just solved the daily puzzle! 🎉", type: "solve" },
    { template: "{{name}} completed the {{category}} collection! 🏆", type: "collection" },
    { template: "{{count}} people are playing right now 🎮", type: "count" },
    { template: "{{name}} got a perfect score on Zoom! ⭐", type: "zoom" },
    { template: "{{name}} discovered they're a {{soul}}! ✨", type: "soul" },
    { template: "{{name}} just won {{prize}} on the spin wheel! 🎡", type: "spin" },
    { template: "{{name}} shared their {{category}} frame! 📸", type: "frame" }
];

const FAKE_NAMES = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Oliver", "Sophia", "James", "Isabella", "William", "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper", "Alexander", "Evelyn", "Michael"];
const FAKE_CITIES = ["London", "New York", "Sydney", "Toronto", "Dublin", "Austin", "Seattle", "Denver", "Miami", "Chicago", "Portland", "Boston", "Paris", "Berlin", "Tokyo"];
const SOUL_TYPES = ["Dreamer 🦋", "Explorer 🏔️", "Nurturer 🌸", "Free Spirit 🐴"];
const PRIZES = ["15% off", "20% off", "a free frame", "bonus XP"];

function startLiveActivityFeed() {
    updateActivityFeed();
    setInterval(updateActivityFeed, 5000 + Math.random() * 5000);
}

function updateActivityFeed() {
    const textEl = document.getElementById('activityText');
    if (!textEl) return;
    
    const msg = ACTIVITY_MESSAGES[Math.floor(Math.random() * ACTIVITY_MESSAGES.length)];
    let text = msg.template;
    
    text = text.replace('{{name}}', FAKE_NAMES[Math.floor(Math.random() * FAKE_NAMES.length)]);
    text = text.replace('{{city}}', FAKE_CITIES[Math.floor(Math.random() * FAKE_CITIES.length)]);
    text = text.replace('{{category}}', ['Butterfly', 'Flower', 'Horse', 'Landscape'][Math.floor(Math.random() * 4)]);
    text = text.replace('{{count}}', Math.floor(Math.random() * 200 + 50));
    text = text.replace('{{soul}}', SOUL_TYPES[Math.floor(Math.random() * SOUL_TYPES.length)]);
    text = text.replace('{{prize}}', PRIZES[Math.floor(Math.random() * PRIZES.length)]);
    
    textEl.style.animation = 'none';
    textEl.offsetHeight; // Trigger reflow
    textEl.style.animation = 'slideIn 0.5s ease';
    textEl.textContent = text;
}

// ============ COLLECTIONS ============
const COLLECTIONS = {
    butterflies: {
        emoji: '🦋',
        name: 'Butterfly Dreams',
        reward: '20% off butterfly prints',
        rewardCode: 'BUTTERFLY20'
    },
    flowers: {
        emoji: '🌸',
        name: 'Garden Glory',
        reward: '20% off flower prints',
        rewardCode: 'FLOWER20'
    },
    horses: {
        emoji: '🐴',
        name: 'Wild & Free',
        reward: '20% off horse prints',
        rewardCode: 'HORSE20'
    },
    landscapes: {
        emoji: '🏔️',
        name: 'Horizon Hunter',
        reward: '20% off landscape prints',
        rewardCode: 'LANDSCAPE20'
    }
};

function getCollectionProgress() {
    const progress = {};
    
    for (const category of Object.keys(COLLECTIONS)) {
        const totalInCategory = puzzles.filter(p => p.category === category).length;
        const completed = userPrefs.completedPuzzles ? 
            userPrefs.completedPuzzles.filter(id => {
                const puzzle = puzzles.find(p => p.id === id);
                return puzzle && puzzle.category === category;
            }).length : 0;
        
        progress[category] = {
            completed,
            total: totalInCategory,
            percent: totalInCategory > 0 ? Math.round((completed / totalInCategory) * 100) : 0
        };
    }
    
    return progress;
}

function renderCollections() {
    const grid = document.getElementById('collectionsGrid');
    if (!grid) return;
    
    const progress = getCollectionProgress();
    
    grid.innerHTML = Object.entries(COLLECTIONS).map(([category, data]) => {
        const p = progress[category];
        const isComplete = p.completed >= p.total && p.total > 0;
        
        return `
            <div class="collection-card ${isComplete ? 'completed' : ''}" onclick="showCollectionDetail('${category}')">
                ${isComplete ? '<span class="collection-badge">✓ Complete</span>' : ''}
                <div class="collection-emoji">${data.emoji}</div>
                <div class="collection-name">${data.name}</div>
                <div class="collection-progress">${p.completed}/${p.total} solved</div>
                <div class="collection-bar">
                    <div class="collection-bar-fill" style="width: ${p.percent}%"></div>
                </div>
                <div class="collection-reward">
                    ${isComplete ? `🎁 Use code: ${data.rewardCode}` : `🎁 ${data.reward}`}
                </div>
            </div>
        `;
    }).join('');
}

function markPuzzleCompleted(puzzleId) {
    if (!userPrefs.completedPuzzles) {
        userPrefs.completedPuzzles = [];
    }
    if (!userPrefs.completedPuzzles.includes(puzzleId)) {
        userPrefs.completedPuzzles.push(puzzleId);
        savePrefs();
        renderCollections();
    }
}

function showCollectionDetail(category) {
    playSound('click');
    // Filter gallery to show only this category
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderGallery(category);
    
    // Scroll to gallery
    document.querySelector('.free-play-section').scrollIntoView({ behavior: 'smooth' });
}

// ============ SPIN WHEEL ============
const SPIN_PRIZES = [
    { id: '10%', label: '10% OFF', emoji: '🎟️', code: 'SPIN10', message: 'Use code SPIN10 at checkout!' },
    { id: 'try', label: 'Try Again', emoji: '🔄', code: null, message: 'Better luck next time! Come back tomorrow.' },
    { id: '15%', label: '15% OFF', emoji: '🎟️', code: 'SPIN15', message: 'Use code SPIN15 at checkout!' },
    { id: 'xp', label: '+50 XP', emoji: '⭐', code: null, message: 'Bonus XP added to your account!' },
    { id: '20%', label: '20% OFF', emoji: '🎉', code: 'SPIN20', message: 'Use code SPIN20 at checkout!' },
    { id: 'frame', label: 'Free Frame', emoji: '🖼️', code: null, message: 'Premium Gold frame unlocked!' },
    { id: '25%', label: '25% OFF', emoji: '🏆', code: 'SPIN25', message: 'Amazing! Use code SPIN25 at checkout!' },
    { id: 'xp2', label: '+100 XP', emoji: '🌟', code: null, message: 'Big XP bonus added!' }
];

let spinState = {
    canSpin: false,
    spinning: false,
    lastSpinDate: null
};

function setupSpinWheel() {
    // Load spin state
    const savedSpin = localStorage.getItem('prettyfoto_spin');
    if (savedSpin) {
        spinState = JSON.parse(savedSpin);
    }
    
    // Check if can spin today
    const today = getTodayString();
    spinState.canSpin = spinState.lastSpinDate !== today;
    
    // Show spin button if available
    const spinBtn = document.getElementById('spinWheelBtn');
    if (spinBtn) {
        spinBtn.classList.toggle('hidden', !spinState.canSpin);
        spinBtn.onclick = openSpinModal;
    }
    
    // Setup modal
    document.getElementById('closeSpinModal').onclick = closeSpinModal;
    document.getElementById('spinBtn').onclick = doSpin;
    document.getElementById('spinDoneBtn').onclick = closeSpinModal;
    document.getElementById('copyCodeBtn').onclick = copyPrizeCode;
    
    // Close on backdrop click
    document.getElementById('spinModal').onclick = (e) => {
        if (e.target.id === 'spinModal') closeSpinModal();
    };
}

function openSpinModal() {
    playSound('click');
    document.getElementById('spinModal').classList.remove('hidden');
    document.getElementById('spinResult').classList.add('hidden');
    document.getElementById('spinBtn').classList.remove('hidden');
    document.getElementById('spinBtn').disabled = false;
    document.getElementById('spinWheel').style.transform = 'rotate(0deg)';
}

function closeSpinModal() {
    document.getElementById('spinModal').classList.add('hidden');
}

function doSpin() {
    if (spinState.spinning || !spinState.canSpin) return;
    
    playSound('click');
    spinState.spinning = true;
    
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    spinBtn.textContent = 'Spinning...';
    
    // Weighted random - make discounts less common
    const weights = [15, 20, 12, 18, 8, 5, 3, 19]; // Total 100
    let random = Math.random() * 100;
    let prizeIndex = 0;
    for (let i = 0; i < weights.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            prizeIndex = i;
            break;
        }
    }
    
    const prize = SPIN_PRIZES[prizeIndex];
    
    // Calculate rotation
    const segmentAngle = 360 / 8;
    const prizeAngle = prizeIndex * segmentAngle + segmentAngle / 2;
    const spins = 5 + Math.random() * 3; // 5-8 full spins
    const finalRotation = spins * 360 + (360 - prizeAngle);
    
    const wheel = document.getElementById('spinWheel');
    wheel.style.transform = `rotate(${finalRotation}deg)`;
    
    // Show result after spin
    setTimeout(() => {
        spinState.spinning = false;
        spinState.canSpin = false;
        spinState.lastSpinDate = getTodayString();
        localStorage.setItem('prettyfoto_spin', JSON.stringify(spinState));
        
        showSpinResult(prize);
        
        // Hide spin button
        document.getElementById('spinWheelBtn').classList.add('hidden');
    }, 4500);
}

function showSpinResult(prize) {
    playSound('win');
    
    document.getElementById('spinBtn').classList.add('hidden');
    document.getElementById('spinResult').classList.remove('hidden');
    
    document.getElementById('resultEmoji').textContent = prize.emoji;
    document.getElementById('resultTitle').textContent = prize.label + '!';
    document.getElementById('resultText').textContent = prize.message;
    
    if (prize.code) {
        document.getElementById('prizeCode').classList.remove('hidden');
        document.getElementById('codeText').textContent = prize.code;
    } else {
        document.getElementById('prizeCode').classList.add('hidden');
    }
    
    // Apply bonus XP if applicable
    if (prize.id === 'xp' || prize.id === 'xp2') {
        const xpAmount = prize.id === 'xp' ? 50 : 100;
        userPrefs.bonusXP = (userPrefs.bonusXP || 0) + xpAmount;
        savePrefs();
    }
    
    // Unlock frame if won
    if (prize.id === 'frame') {
        userPrefs.unlockedFrames = userPrefs.unlockedFrames || [];
        if (!userPrefs.unlockedFrames.includes('gold')) {
            userPrefs.unlockedFrames.push('gold');
            savePrefs();
        }
    }
    
    showConfetti();
}

function copyPrizeCode() {
    playSound('click');
    const code = document.getElementById('codeText').textContent;
    navigator.clipboard.writeText(code).then(() => {
        document.getElementById('copyCodeBtn').textContent = '✓';
        setTimeout(() => {
            document.getElementById('copyCodeBtn').textContent = '📋';
        }, 2000);
    });
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
const confettiCanvas = document.getElementById('confetti');

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    loadPrefs();
    registerServiceWorker();
    applyPersonalization();
    setupDailyPuzzle();
    renderGallery();
    renderCollections();
    setupEventListeners();
    startCountdown();
    checkOnboarding();
    setupPWAInstall();
    updateSoundButton();
    startLiveActivityFeed();
    setupSpinWheel();
});

function applyPersonalization() {
    // Apply personalized theme colors
    applyPersonalizedTheme();
    
    // Update welcome message
    const welcome = getWelcomeMessage();
    document.getElementById('welcomeTitle').textContent = welcome.title;
    document.getElementById('welcomeSubtitle').textContent = welcome.subtitle;
    
    // Show "For You" section if user has preferences
    const favCat = getFavoriteCategory();
    if (favCat || userPrefs.visitCount > 2) {
        showForYouSection();
    }
}

function showForYouSection() {
    const section = document.getElementById('forYouSection');
    const gallery = document.getElementById('forYouGallery');
    const catLabel = document.getElementById('forYouCategory');
    
    const favCat = getFavoriteCategory();
    const images = getPersonalizedImages(4);
    
    if (favCat) {
        const catEmojis = { butterflies: '🦋', flowers: '🌸', horses: '🐴', landscapes: '🏔️' };
        catLabel.textContent = `${catEmojis[favCat] || ''} Based on your favorites`;
    } else {
        catLabel.textContent = 'Recommended for you';
    }
    
    gallery.innerHTML = images.map(p => `
        <div class="for-you-item" onclick="selectPuzzle(${p.id})">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <button class="fav-btn ${isFavorite(p.id) ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleFavoriteBtn(${p.id}, this)">
                ${isFavorite(p.id) ? '❤️' : '🤍'}
            </button>
        </div>
    `).join('');
    
    section.classList.remove('hidden');
}

function toggleFavoriteBtn(puzzleId, btn) {
    playSound('click');
    const isFav = toggleFavorite(puzzleId);
    btn.textContent = isFav ? '❤️' : '🤍';
    btn.classList.toggle('active', isFav);
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }
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
    }
}

function setupEventListeners() {
    // Sound toggle
    document.getElementById('soundBtn').addEventListener('click', toggleSound);
    
    // Stats button
    document.getElementById('statsBtn').addEventListener('click', showStats);
    document.getElementById('closeStats').addEventListener('click', () => statsModal.classList.add('hidden'));
    
    // Daily play button
    document.getElementById('playDailyBtn').addEventListener('click', playDaily);
    
    // Back button
    document.getElementById('backBtn').addEventListener('click', goHome);
    
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
    
    // Share buttons
    document.getElementById('shareBtn').addEventListener('click', shareCard);
    document.getElementById('downloadCardBtn').addEventListener('click', downloadShareCard);
    document.getElementById('shareCardBtn').addEventListener('click', shareCard);
    document.getElementById('copyTextBtn').addEventListener('click', copyShareText);
    
    // Completion modal buttons
    document.getElementById('playAgainBtn').addEventListener('click', () => {
        completionModal.classList.add('hidden');
        if (isDaily) {
            goHome();
        } else {
            startGame();
        }
    });
    
    document.getElementById('newPuzzleBtn').addEventListener('click', () => {
        completionModal.classList.add('hidden');
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
    document.getElementById('closeEmail').addEventListener('click', () => emailModal.classList.add('hidden'));
    document.getElementById('skipEmail').addEventListener('click', () => {
        emailModal.classList.add('hidden');
        stats.hasSeenPromo = true;
        saveStats();
    });
    
    // Track shop link clicks
    document.querySelectorAll('a[href*="prettyfoto.com"]').forEach(link => {
        link.addEventListener('click', () => {
            stats.shopClicks = (stats.shopClicks || 0) + 1;
            saveStats();
        });
    });
    
    // Close modals
    hintModal.addEventListener('click', () => hintModal.classList.add('hidden'));
    statsModal.addEventListener('click', (e) => {
        if (e.target === statsModal) statsModal.classList.add('hidden');
    });
    completionModal.addEventListener('click', (e) => {
        if (e.target === completionModal) completionModal.classList.add('hidden');
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

// ============ DAILY PUZZLE ============
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
    document.getElementById('dailyImage').src = daily.image;
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
    isDaily = true;
    currentPuzzle = getDailyPuzzle();
    gridSize = 4;
    shuffleSeed = getDailyPuzzleNumber();
    
    // Track behavior - daily started
    if (!sessionState.dailyStarted) {
        sessionState.dailyStarted = true;
        if (!sessionState.firstAction) {
            sessionState.firstAction = 'daily';
        }
    }
    
    puzzleTitle.textContent = currentPuzzle.title;
    puzzlePreview.src = currentPuzzle.image;
    shopLink.href = currentPuzzle.shopUrl;
    document.getElementById('galleryLink').href = currentPuzzle.galleryUrl;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('completionGalleryLink').href = currentPuzzle.galleryUrl;
    document.getElementById('hintImage').src = currentPuzzle.image;
    
    document.getElementById('dailyBadge').classList.remove('hidden');
    document.getElementById('dailyBadgeNum').textContent = getDailyPuzzleNumber();
    document.getElementById('shuffleBtn').classList.add('hidden');
    
    homeView.classList.add('hidden');
    puzzleView.classList.remove('hidden');
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

// ============ GALLERY ============
function renderGallery(category = 'all') {
    const filtered = category === 'all' 
        ? puzzles 
        : puzzles.filter(p => p.category === category);
    
    puzzleGallery.innerHTML = filtered.map(puzzle => `
        <div class="puzzle-card" onclick="selectPuzzle(${puzzle.id})">
            <img src="${puzzle.image}" alt="${puzzle.title}" class="puzzle-card-image" loading="lazy">
            <div class="puzzle-card-info">
                <div class="puzzle-card-title">${puzzle.title}</div>
                <div class="puzzle-card-category">${puzzle.category}</div>
            </div>
        </div>
    `).join('');
}

function selectPuzzle(id) {
    playSound('click');
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
    puzzlePreview.src = currentPuzzle.image;
    shopLink.href = currentPuzzle.shopUrl;
    document.getElementById('galleryLink').href = currentPuzzle.galleryUrl;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('completionGalleryLink').href = currentPuzzle.galleryUrl;
    document.getElementById('hintImage').src = currentPuzzle.image;
    
    document.getElementById('dailyBadge').classList.add('hidden');
    document.getElementById('shuffleBtn').classList.remove('hidden');
    
    homeView.classList.add('hidden');
    puzzleView.classList.remove('hidden');
    difficultySelect.classList.remove('hidden');
    gameArea.classList.add('hidden');
    
    resetGame();
}

function goHome() {
    playSound('click');
    puzzleView.classList.add('hidden');
    homeView.classList.remove('hidden');
    resetGame();
    setupDailyPuzzle();
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
    img.crossOrigin = 'anonymous';
    img.onload = () => {
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
    img.src = currentPuzzle.image;
}

function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
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
    
    if (puzzleBoard.children.length > 0) {
        const tileSize = puzzleBoard.children[0].offsetWidth;
        renderBoard(tileSize);
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
    const tileSize = tile.offsetWidth + 3;
    
    const posRow = Math.floor(position / gridSize);
    const posCol = position % gridSize;
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    
    tile.classList.add('sliding');
    tile.style.transform = `translate(${(emptyCol - posCol) * tileSize}px, ${(emptyRow - posRow) * tileSize}px)`;
    
    setTimeout(() => {
        tiles[emptyIndex] = tiles[position];
        tiles[position] = gridSize * gridSize - 1;
        emptyIndex = position;
        
        moves++;
        updateGameStats();
        
        renderBoard(tile.offsetWidth);
        
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
    
    // Track for collections
    markPuzzleCompleted(currentPuzzle.id);
    
    document.getElementById('completedImage').src = currentPuzzle.image;
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
        
        // Generate share card
        generateShareCard(
            'slider',
            getDailyPuzzleNumber(),
            currentPuzzle.title,
            rating,
            formatTime(seconds),
            `${moves} moves`,
            currentPuzzle.image,
            stats.currentStreak
        );
        
        // Show promo after first completion
        if (!stats.hasSeenPromo && stats.played === 1) {
            setTimeout(() => emailModal.classList.remove('hidden'), 2000);
        }
    } else {
        document.getElementById('shareSection').classList.remove('hidden');
        document.getElementById('playAgainBtn').textContent = 'Play Again';
        stats.galleryPlays++; // Track gallery completions
        saveStats();
        
        // Generate share card for gallery puzzles too
        generateShareCard(
            'slider',
            currentPuzzle.id,
            currentPuzzle.title,
            rating,
            formatTime(seconds),
            `${moves} moves`,
            currentPuzzle.image,
            0
        );
    }
    
    renderCompletedBoard();
    setTimeout(() => completionModal.classList.remove('hidden'), 500);
}

function renderCompletedBoard() {
    const totalTiles = gridSize * gridSize;
    const tileSize = puzzleBoard.children[0].offsetWidth;
    
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
}

// ============ SHARE CARDS ============
let shareCardData = {
    gameType: 'slider',
    puzzleNum: 1,
    title: '',
    rating: '',
    stat1: '',
    stat2: '',
    imageUrl: '',
    streak: 0
};

function generateShareCard(gameType, puzzleNum, title, rating, stat1, stat2, imageUrl, streak = 0) {
    shareCardData = { gameType, puzzleNum, title, rating, stat1, stat2, imageUrl, streak };
    
    const canvas = document.getElementById('shareCardCanvas');
    const ctx = canvas.getContext('2d');
    
    // Card dimensions
    const width = 400;
    const height = 500;
    canvas.width = width;
    canvas.height = height;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#fff5f3');
    gradient.addColorStop(1, '#ffeee8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Header bar
    ctx.fillStyle = '#e17055';
    ctx.fillRect(0, 0, width, 60);
    
    // Logo text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px "Playfair Display", serif';
    ctx.textAlign = 'left';
    ctx.fillText('🌸 PrettyFoto', 20, 38);
    
    // Game type badge
    const gameEmoji = {
        'slider': '🧩',
        'zoom': '🔍',
        'ranking': '❤️',
        'shapeku': '🎨',
        'wordsearch': '🔤'
    }[gameType] || '🎮';
    
    ctx.textAlign = 'right';
    ctx.font = '16px Inter, sans-serif';
    ctx.fillText(`${gameEmoji} #${puzzleNum}`, width - 20, 38);
    
    // Image area with blur effect (spoiler protection)
    const imgY = 80;
    const imgSize = 200;
    const imgX = (width - imgSize) / 2;
    
    // Draw blurred/styled image background
    ctx.fillStyle = '#e0e0e0';
    ctx.beginPath();
    ctx.roundRect(imgX - 10, imgY - 10, imgSize + 20, imgSize + 20, 12);
    ctx.fill();
    
    // Load and draw image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        // Draw image with circular mask
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(imgX, imgY, imgSize, imgSize, 8);
        ctx.clip();
        
        // Apply slight blur effect by drawing multiple offset copies
        ctx.filter = 'blur(3px)';
        ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
        ctx.filter = 'none';
        
        // Overlay for spoiler protection
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillRect(imgX, imgY, imgSize, imgSize);
        
        ctx.restore();
        
        // "Solved!" badge on image
        ctx.fillStyle = '#27ae60';
        ctx.beginPath();
        ctx.roundRect(imgX + imgSize/2 - 40, imgY + imgSize - 30, 80, 35, 20);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('✓ Solved!', imgX + imgSize/2, imgY + imgSize - 7);
        
        finishShareCard(ctx, width, height, imgY, imgSize);
    };
    img.onerror = () => {
        // If image fails, draw placeholder
        ctx.fillStyle = '#ccc';
        ctx.beginPath();
        ctx.roundRect(imgX, imgY, imgSize, imgSize, 8);
        ctx.fill();
        ctx.fillStyle = '#999';
        ctx.font = '60px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('🖼️', imgX + imgSize/2, imgY + imgSize/2 + 20);
        
        finishShareCard(ctx, width, height, imgY, imgSize);
    };
    img.src = imageUrl;
}

function finishShareCard(ctx, width, height, imgY, imgSize) {
    const { title, rating, stat1, stat2, streak } = shareCardData;
    
    // Title
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 22px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, width/2, imgY + imgSize + 45);
    
    // Rating
    ctx.fillStyle = '#e17055';
    ctx.font = 'bold 28px Inter, sans-serif';
    ctx.fillText(rating, width/2, imgY + imgSize + 85);
    
    // Stats row
    ctx.fillStyle = '#636e72';
    ctx.font = '16px Inter, sans-serif';
    const statsY = imgY + imgSize + 120;
    
    // Draw stats in boxes
    const boxWidth = 100;
    const boxGap = 20;
    const startX = (width - (boxWidth * 2 + boxGap)) / 2;
    
    // Stat 1 box
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(startX, statsY, boxWidth, 50, 8);
    ctx.fill();
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 18px Inter';
    ctx.fillText(stat1, startX + boxWidth/2, statsY + 32);
    
    // Stat 2 box
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(startX + boxWidth + boxGap, statsY, boxWidth, 50, 8);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#2d3436';
    ctx.fillText(stat2, startX + boxWidth + boxGap + boxWidth/2, statsY + 32);
    
    // Streak (if applicable)
    if (streak > 0) {
        ctx.fillStyle = '#f39c12';
        ctx.font = '16px Inter';
        ctx.fillText(`🔥 ${streak} day streak`, width/2, statsY + 75);
    }
    
    // Footer CTA
    ctx.fillStyle = '#e17055';
    ctx.beginPath();
    ctx.roundRect(50, height - 60, width - 100, 40, 20);
    ctx.fill();
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px Inter';
    ctx.fillText('Play at prettyfoto.com/puzzles', width/2, height - 34);
}

function downloadShareCard() {
    playSound('click');
    const canvas = document.getElementById('shareCardCanvas');
    const link = document.createElement('a');
    link.download = `prettyfoto-${shareCardData.gameType}-${shareCardData.puzzleNum}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

async function shareCard() {
    playSound('click');
    const canvas = document.getElementById('shareCardCanvas');
    
    try {
        // Try to share as image
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], 'prettyfoto-result.png', { type: 'image/png' });
        
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'PrettyFoto Games',
                text: getShareText()
            });
        } else if (navigator.share) {
            // Fall back to text only
            await navigator.share({ text: getShareText() });
        } else {
            // Fall back to download
            downloadShareCard();
        }
    } catch (err) {
        // If sharing fails, download instead
        downloadShareCard();
    }
}

function getShareText() {
    const { gameType, puzzleNum, rating, stat1, stat2, streak } = shareCardData;
    const gameNames = {
        'slider': 'Puzzle',
        'zoom': 'Zoom',
        'ranking': 'Ranking',
        'shapeku': 'Shapeku',
        'wordsearch': 'Words'
    };
    
    let text = `🌸 PrettyFoto ${gameNames[gameType]} #${puzzleNum}\n\n${rating}\n📊 ${stat1} | ${stat2}`;
    if (streak > 0) text += `\n🔥 ${streak} day streak`;
    text += '\n\nPlay at prettyfoto.com/puzzles';
    return text;
}

function copyShareText() {
    playSound('click');
    const text = getShareText();
    navigator.clipboard.writeText(text).then(() => {
        const msg = document.getElementById('copiedMsg');
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 2000);
    });
}

// Legacy function for backward compatibility
function shareResult() {
    copyShareText();
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const msg = document.getElementById('copiedMsg');
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 2000);
    });
}

function showHint() {
    playSound('click');
    hintModal.classList.remove('hidden');
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
        
        // Initialize the game mode
        switch(mode) {
            case 'slider':
                setupDailyPuzzle();
                break;
            case 'zoom':
                setupZoomHome();
                break;
            case 'auction':
                setupAuctionHome();
                break;
            case 'personality':
                setupPersonalityHome();
                break;
            case 'frame':
                setupFrameHome();
                break;
        }
    }
}

// ============================================================
// ==================== PHOTO AUCTION =========================
// ============================================================

let auctionState = {
    currentPair: [],
    currentStreak: 0,
    bestStreak: 0,
    totalPlays: 0,
    revealed: false
};

// Simulated popularity scores (would come from real data in production)
function getPopularityScore(puzzle) {
    // Generate consistent "popularity" based on puzzle properties
    const seed = puzzle.id * 7 + puzzle.title.length * 13;
    return Math.floor(seededRandom(seed) * 900 + 100); // 100-999
}

function setupAuctionHome() {
    // Load saved stats
    const savedAuction = localStorage.getItem('auctionStats');
    if (savedAuction) {
        const data = JSON.parse(savedAuction);
        auctionState.bestStreak = data.bestStreak || 0;
        auctionState.totalPlays = data.totalPlays || 0;
    }
    
    document.getElementById('auctionBestStreak').textContent = auctionState.bestStreak;
    document.getElementById('auctionTotalPlays').textContent = auctionState.totalPlays;
    
    document.getElementById('startAuctionBtn').onclick = startAuction;
    document.getElementById('auctionBackBtn').onclick = () => {
        document.getElementById('auctionView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    document.getElementById('auctionNextBtn').onclick = nextAuctionRound;
}

function startAuction() {
    playSound('click');
    auctionState.currentStreak = 0;
    auctionState.revealed = false;
    
    document.getElementById('auctionCurrentStreak').textContent = '0';
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('auctionView').classList.remove('hidden');
    
    loadAuctionPair();
}

function loadAuctionPair() {
    auctionState.revealed = false;
    
    // Pick two random different puzzles
    const shuffled = [...puzzles].sort(() => Math.random() - 0.5);
    auctionState.currentPair = [shuffled[0], shuffled[1]];
    
    const [p1, p2] = auctionState.currentPair;
    
    document.getElementById('auctionImg1').src = p1.image;
    document.getElementById('auctionTitle1').textContent = p1.title;
    document.getElementById('auctionImg2').src = p2.image;
    document.getElementById('auctionTitle2').textContent = p2.title;
    
    // Reset card states
    document.getElementById('auctionCard1').className = 'auction-card';
    document.getElementById('auctionCard2').className = 'auction-card';
    document.getElementById('auctionValue1').classList.add('hidden');
    document.getElementById('auctionValue2').classList.add('hidden');
    document.getElementById('auctionFeedback').classList.add('hidden');
}

function selectAuctionCard(index) {
    if (auctionState.revealed) return;
    
    playSound('click');
    auctionState.revealed = true;
    auctionState.totalPlays++;
    
    // Track for personalization
    trackGamePlay('auction');
    
    const [p1, p2] = auctionState.currentPair;
    const score1 = getPopularityScore(p1);
    const score2 = getPopularityScore(p2);
    
    const winnerIndex = score1 >= score2 ? 0 : 1;
    const userCorrect = index === winnerIndex;
    
    // Show values
    document.querySelector('#auctionValue1 .value-score').textContent = score1;
    document.querySelector('#auctionValue2 .value-score').textContent = score2;
    document.getElementById('auctionValue1').classList.remove('hidden');
    document.getElementById('auctionValue2').classList.remove('hidden');
    
    // Mark winner/loser
    document.getElementById('auctionCard1').classList.add(winnerIndex === 0 ? 'winner' : 'loser');
    document.getElementById('auctionCard2').classList.add(winnerIndex === 1 ? 'winner' : 'loser');
    document.getElementById(`auctionCard${index + 1}`).classList.add('selected');
    
    // Show feedback
    const feedback = document.getElementById('auctionFeedback');
    const feedbackText = feedback.querySelector('.feedback-text');
    
    if (userCorrect) {
        auctionState.currentStreak++;
        if (auctionState.currentStreak > auctionState.bestStreak) {
            auctionState.bestStreak = auctionState.currentStreak;
        }
        feedbackText.textContent = `✓ Correct! Streak: ${auctionState.currentStreak} 🔥`;
        feedbackText.className = 'feedback-text correct';
        playSound('success');
    } else {
        feedbackText.textContent = `✗ Wrong! The ${winnerIndex === 0 ? 'left' : 'right'} photo was more popular. Streak ended at ${auctionState.currentStreak}.`;
        feedbackText.className = 'feedback-text wrong';
        auctionState.currentStreak = 0;
        vibrate(100);
    }
    
    document.getElementById('auctionCurrentStreak').textContent = auctionState.currentStreak;
    feedback.classList.remove('hidden');
    
    // Save stats
    localStorage.setItem('auctionStats', JSON.stringify({
        bestStreak: auctionState.bestStreak,
        totalPlays: auctionState.totalPlays
    }));
}

function nextAuctionRound() {
    playSound('click');
    loadAuctionPair();
}

// ============================================================
// ==================== ZOOM IN GAME ==========================
// ============================================================

let zoomState = {
    puzzle: null,
    isDaily: false,
    currentZoom: 1,      // 1 = most zoomed, 5 = full image
    maxZoom: 5,
    guessesUsed: 0,
    options: [],
    correctAnswer: null,
    offsetX: 0,
    offsetY: 0,
    completed: false
};

function setupZoomHome() {
    const daily = getDailyPuzzle();
    document.getElementById('zoomNumber').textContent = getDailyPuzzleNumber();
    document.getElementById('zoomDate').textContent = new Date().toLocaleDateString('en-US', { 
        month: 'short', day: 'numeric', year: 'numeric' 
    });
    
    document.getElementById('playZoomBtn').onclick = () => startZoom(daily, true);
    document.getElementById('zoomBackBtn').onclick = () => {
        document.getElementById('zoomView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    document.getElementById('zoomOutBtn').onclick = zoomOut;
    
    // Render gallery
    const gallery = document.getElementById('zoomGallery');
    gallery.innerHTML = puzzles.slice(0, 8).map(p => `
        <div class="puzzle-card" onclick="startZoom(puzzles.find(x => x.id === ${p.id}), false)">
            <img src="${p.image}" alt="${p.title}" class="puzzle-card-image" loading="lazy">
            <div class="puzzle-card-info">
                <div class="puzzle-card-title">${p.title}</div>
            </div>
        </div>
    `).join('');
}

function startZoom(puzzle, isDaily) {
    playSound('click');
    zoomState.puzzle = puzzle;
    zoomState.isDaily = isDaily;
    zoomState.currentZoom = 1;
    zoomState.guessesUsed = 0;
    zoomState.completed = false;
    zoomState.correctAnswer = puzzle.id;
    
    // Random offset for zoomed view (between 20-80% of image)
    zoomState.offsetX = 20 + Math.random() * 60;
    zoomState.offsetY = 20 + Math.random() * 60;
    
    // Generate 4 options (1 correct + 3 random)
    const otherPuzzles = puzzles.filter(p => p.id !== puzzle.id);
    const shuffledOthers = otherPuzzles.sort(() => Math.random() - 0.5).slice(0, 3);
    zoomState.options = [puzzle, ...shuffledOthers].sort(() => Math.random() - 0.5);
    
    if (isDaily) {
        document.getElementById('zoomDailyBadge').classList.remove('hidden');
        document.getElementById('zoomBadgeNum').textContent = getDailyPuzzleNumber();
    } else {
        document.getElementById('zoomDailyBadge').classList.add('hidden');
    }
    
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('zoomView').classList.remove('hidden');
    
    renderZoom();
}

function renderZoom() {
    const img = document.getElementById('zoomImage');
    const wrapper = document.getElementById('zoomImageWrapper');
    
    img.src = zoomState.puzzle.image;
    
    // Calculate zoom level (1 = 800%, 5 = 100%)
    const zoomLevels = [8, 5, 3, 1.8, 1];
    const scale = zoomLevels[zoomState.currentZoom - 1];
    
    const containerSize = 280;
    const imgSize = containerSize * scale;
    
    // Position image so the interesting part is visible
    const offsetX = (zoomState.offsetX / 100) * (imgSize - containerSize);
    const offsetY = (zoomState.offsetY / 100) * (imgSize - containerSize);
    
    img.style.width = `${imgSize}px`;
    img.style.height = `${imgSize}px`;
    img.style.left = `-${offsetX}px`;
    img.style.top = `-${offsetY}px`;
    
    // Update zoom dots
    document.querySelectorAll('.zoom-dot').forEach((dot, i) => {
        dot.classList.remove('active', 'used');
        if (i + 1 === zoomState.currentZoom) {
            dot.classList.add('active');
        } else if (i + 1 < zoomState.currentZoom) {
            dot.classList.add('used');
        }
    });
    
    // Render choices
    const choices = document.getElementById('zoomChoices');
    choices.innerHTML = zoomState.options.map(p => `
        <button class="zoom-choice" data-id="${p.id}" onclick="makeZoomGuess(${p.id})">
            ${p.title}
        </button>
    `).join('');
    
    // Update zoom out button
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    if (zoomState.currentZoom >= zoomState.maxZoom) {
        zoomOutBtn.disabled = true;
        zoomOutBtn.textContent = 'Fully zoomed out';
    } else {
        zoomOutBtn.disabled = false;
        zoomOutBtn.textContent = `🔍 Zoom Out (${zoomState.maxZoom - zoomState.currentZoom} left)`;
    }
}

function makeZoomGuess(id) {
    if (zoomState.completed) return;
    
    playSound('click');
    zoomState.guessesUsed++;
    
    const choiceBtn = document.querySelector(`.zoom-choice[data-id="${id}"]`);
    
    if (id === zoomState.correctAnswer) {
        // Correct!
        choiceBtn.classList.add('correct');
        zoomState.completed = true;
        zoomComplete();
    } else {
        // Wrong - disable this choice and zoom out
        choiceBtn.classList.add('wrong');
        choiceBtn.classList.add('disabled');
        vibrate(100);
        
        // Auto zoom out on wrong guess
        if (zoomState.currentZoom < zoomState.maxZoom) {
            setTimeout(() => {
                zoomState.currentZoom++;
                renderZoom();
                // Re-disable already wrong choices
                document.querySelectorAll('.zoom-choice.wrong').forEach(btn => {
                    btn.classList.add('disabled');
                });
            }, 500);
        }
    }
}

function zoomOut() {
    if (zoomState.currentZoom >= zoomState.maxZoom || zoomState.completed) return;
    
    playSound('click');
    zoomState.guessesUsed++;
    zoomState.currentZoom++;
    renderZoom();
}

function zoomComplete() {
    playSound('win');
    showConfetti();
    vibrate([100, 50, 100, 50, 200]);
    
    // Track for personalization
    trackGamePlay('zoom');
    if (zoomState.puzzle && zoomState.puzzle.category) {
        trackCategoryPlay(zoomState.puzzle.category);
    }
    
    // Track for collections
    markPuzzleCompleted(zoomState.puzzle.id);
    
    // Calculate score based on zoom level when guessed
    const score = zoomState.maxZoom - zoomState.currentZoom + 1;
    const rating = score === 5 ? '🏆 Perfect! First try!' :
                   score === 4 ? '⭐ Excellent!' :
                   score === 3 ? '👍 Great!' :
                   score === 2 ? '✅ Good!' : '🎉 Got it!';
    
    setTimeout(() => {
        document.getElementById('completedImage').src = zoomState.puzzle.image;
        document.getElementById('finalTime').textContent = rating;
        document.getElementById('finalMoves').textContent = `${zoomState.guessesUsed} guesses`;
        document.getElementById('completionShopLink').href = zoomState.puzzle.shopUrl;
        document.getElementById('completionGalleryLink').href = zoomState.puzzle.galleryUrl;
        
        // Always show share section
        document.getElementById('shareSection').classList.remove('hidden');
        
        // Generate share card
        generateShareCard(
            'zoom',
            zoomState.isDaily ? getDailyPuzzleNumber() : zoomState.puzzle.id,
            zoomState.puzzle.title,
            rating,
            `Zoom ${zoomState.currentZoom}/5`,
            `${zoomState.guessesUsed} guesses`,
            zoomState.puzzle.image,
            0
        );
        
        completionModal.classList.remove('hidden');
        
        document.getElementById('playAgainBtn').onclick = () => {
            completionModal.classList.add('hidden');
            // Pick a new random puzzle for replay
            const newPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
            startZoom(newPuzzle, false);
        };
        
        document.getElementById('newPuzzleBtn').onclick = () => {
            completionModal.classList.add('hidden');
            document.getElementById('zoomView').classList.add('hidden');
            document.getElementById('homeView').classList.remove('hidden');
        };
    }, 800);
}

// ============================================================
// ==================== PERSONALITY QUIZ ======================
// ============================================================

const PERSONALITY_TYPES = {
    dreamer: {
        emoji: '🦋',
        title: 'The Dreamer',
        description: 'You see beauty in delicate details and find magic in fleeting moments. Your soul is drawn to the ethereal and transformative nature of butterflies - symbols of change and hope.',
        traits: ['Creative', 'Sensitive', 'Imaginative', 'Hopeful'],
        categories: ['butterflies'],
        color: '#9b59b6'
    },
    explorer: {
        emoji: '🏔️',
        title: 'The Explorer',
        description: 'Vast horizons call to your adventurous spirit. You find peace in grand landscapes and feel most alive when surrounded by the raw majesty of nature.',
        traits: ['Adventurous', 'Independent', 'Curious', 'Bold'],
        categories: ['landscapes'],
        color: '#3498db'
    },
    nurturer: {
        emoji: '🌸',
        title: 'The Nurturer',
        description: 'Your heart blooms with compassion and warmth. Like flowers, you bring color and joy to those around you, finding fulfillment in growth and beauty.',
        traits: ['Caring', 'Gentle', 'Patient', 'Generous'],
        categories: ['flowers'],
        color: '#e91e63'
    },
    freeSpirit: {
        emoji: '🐴',
        title: 'The Free Spirit',
        description: 'Untamed and authentic, you value freedom above all else. Like wild horses, your spirit cannot be contained - you follow your own path with grace and power.',
        traits: ['Free', 'Authentic', 'Strong', 'Passionate'],
        categories: ['horses'],
        color: '#e67e22'
    }
};

let personalityState = {
    currentQuestion: 0,
    totalQuestions: 10,
    comparisons: [],
    scores: {
        butterflies: 0,
        flowers: 0,
        horses: 0,
        landscapes: 0
    }
};

function setupPersonalityHome() {
    document.getElementById('startPersonalityBtn').onclick = startPersonality;
    document.getElementById('personalityBackBtn').onclick = () => {
        document.getElementById('personalityView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    document.getElementById('shareSoulBtn').onclick = shareSoulResult;
    document.getElementById('retakeSoulBtn').onclick = () => {
        document.getElementById('personalityResultView').classList.add('hidden');
        startPersonality();
    };
}

function startPersonality() {
    playSound('click');
    
    // Reset state
    personalityState = {
        currentQuestion: 0,
        totalQuestions: 10,
        comparisons: generatePersonalityPairs(),
        scores: { butterflies: 0, flowers: 0, horses: 0, landscapes: 0 }
    };
    
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('personalityView').classList.remove('hidden');
    document.getElementById('personalityResultView').classList.add('hidden');
    
    showPersonalityQuestion();
}

function generatePersonalityPairs() {
    const pairs = [];
    const usedImages = new Set();
    const categories = ['butterflies', 'flowers', 'horses', 'landscapes'];
    
    // Create pools of available images per category
    const pools = {};
    for (const cat of categories) {
        pools[cat] = puzzles.filter(p => p.category === cat).sort(() => Math.random() - 0.5);
    }
    
    // Generate 10 pairs, each comparing different categories
    // Ensure no image is repeated
    for (let i = 0; i < 10; i++) {
        // Shuffle category pairs for variety
        const catPairs = [
            ['butterflies', 'flowers'],
            ['butterflies', 'horses'],
            ['butterflies', 'landscapes'],
            ['flowers', 'horses'],
            ['flowers', 'landscapes'],
            ['horses', 'landscapes']
        ];
        
        // Pick a category pair we haven't exhausted
        const shuffledCatPairs = catPairs.sort(() => Math.random() - 0.5);
        let foundPair = false;
        
        for (const [cat1, cat2] of shuffledCatPairs) {
            // Find unused images from each category
            const available1 = pools[cat1].filter(p => !usedImages.has(p.id));
            const available2 = pools[cat2].filter(p => !usedImages.has(p.id));
            
            if (available1.length > 0 && available2.length > 0) {
                const img1 = available1[0];
                const img2 = available2[0];
                
                usedImages.add(img1.id);
                usedImages.add(img2.id);
                
                pairs.push([img1, img2]);
                foundPair = true;
                break;
            }
        }
        
        // Fallback if we've used all images - reset and allow reuse
        if (!foundPair) {
            usedImages.clear();
            const shuffled = [...puzzles].sort(() => Math.random() - 0.5);
            const img1 = shuffled[0];
            const img2 = shuffled[1];
            usedImages.add(img1.id);
            usedImages.add(img2.id);
            pairs.push([img1, img2]);
        }
    }
    
    return pairs;
}

function showPersonalityQuestion() {
    if (personalityState.currentQuestion >= personalityState.comparisons.length) {
        finishPersonality();
        return;
    }
    
    const [img1, img2] = personalityState.comparisons[personalityState.currentQuestion];
    
    document.getElementById('personalityProgress').textContent = 
        `${personalityState.currentQuestion + 1} of ${personalityState.totalQuestions}`;
    
    document.getElementById('personalityImg1').src = img1.image;
    document.getElementById('personalityImg2').src = img2.image;
    
    // Reset card states
    document.getElementById('personalityCard1').classList.remove('selected');
    document.getElementById('personalityCard2').classList.remove('selected');
}

function selectPersonality(index) {
    playSound('click');
    vibrate(10);
    
    const [img1, img2] = personalityState.comparisons[personalityState.currentQuestion];
    const selected = index === 0 ? img1 : img2;
    
    // Add score for the selected category
    if (selected.category && personalityState.scores.hasOwnProperty(selected.category)) {
        personalityState.scores[selected.category]++;
    }
    
    // Show selection briefly
    document.getElementById(`personalityCard${index + 1}`).classList.add('selected');
    
    setTimeout(() => {
        personalityState.currentQuestion++;
        showPersonalityQuestion();
    }, 300);
}

function finishPersonality() {
    playSound('win');
    showConfetti();
    
    // Track for personalization
    trackGamePlay('personality');
    
    // Determine personality type based on highest scoring category
    const scores = personalityState.scores;
    let topCategory = 'butterflies';
    let topScore = 0;
    
    for (const [cat, score] of Object.entries(scores)) {
        if (score > topScore) {
            topScore = score;
            topCategory = cat;
        }
    }
    
    // Map category to personality type
    const typeMap = {
        butterflies: 'dreamer',
        flowers: 'nurturer',
        horses: 'freeSpirit',
        landscapes: 'explorer'
    };
    
    const personalityType = PERSONALITY_TYPES[typeMap[topCategory]];
    
    // Save to user preferences for personalization
    userPrefs.natureSoul = typeMap[topCategory];
    savePrefs();
    applyPersonalizedTheme(); // Apply new theme colors immediately
    
    // Show result view
    document.getElementById('personalityView').classList.add('hidden');
    document.getElementById('personalityResultView').classList.remove('hidden');
    
    // Populate result
    document.getElementById('soulEmoji').textContent = personalityType.emoji;
    document.getElementById('soulTitle').textContent = personalityType.title;
    document.getElementById('soulDescription').textContent = personalityType.description;
    
    // Set card color
    document.getElementById('soulResultCard').style.background = 
        `linear-gradient(135deg, ${personalityType.color} 0%, ${adjustColor(personalityType.color, -30)} 100%)`;
    
    // Traits
    document.getElementById('soulTraits').innerHTML = personalityType.traits
        .map(t => `<span class="trait-tag">${t}</span>`).join('');
    
    // Matching images
    const matchingImages = puzzles.filter(p => 
        personalityType.categories.includes(p.category)
    ).slice(0, 3);
    
    document.getElementById('soulMatch').innerHTML = matchingImages
        .map(img => `<img src="${img.image}" alt="${img.title}">`).join('');
    
    // Shop link
    const catLinks = {
        butterflies: 'https://www.prettyfoto.com/gallery-butterflies',
        flowers: 'https://www.prettyfoto.com/gallery-flowers',
        horses: 'https://www.prettyfoto.com/gallery-horses',
        landscapes: 'https://www.prettyfoto.com/gallery-mountains'
    };
    document.getElementById('soulShopLink').href = catLinks[topCategory] || 'https://www.prettyfoto.com/shop-art';
    
    // Store result for sharing
    personalityState.result = {
        type: typeMap[topCategory],
        ...personalityType,
        matchingImages
    };
}

function adjustColor(hex, amount) {
    // Simple color adjustment
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

function shareSoulResult() {
    playSound('click');
    
    const result = personalityState.result;
    if (!result) return;
    
    // Generate share card for personality
    const matchImg = result.matchingImages[0];
    generateShareCard(
        'personality',
        Math.floor(Math.random() * 1000),
        result.title,
        `${result.emoji} ${result.title}`,
        result.traits.slice(0, 2).join(' • '),
        'Nature Soul Quiz',
        matchImg ? matchImg.image : puzzles[0].image,
        0
    );
    
    // Show completion modal with share options
    document.getElementById('completedImage').src = matchImg ? matchImg.image : puzzles[0].image;
    document.getElementById('finalTime').textContent = `${result.emoji} ${result.title}`;
    document.getElementById('finalMoves').textContent = result.traits.slice(0, 2).join(' • ');
    document.getElementById('shareSection').classList.remove('hidden');
    
    completionModal.classList.remove('hidden');
    
    document.getElementById('playAgainBtn').onclick = () => {
        completionModal.classList.add('hidden');
        startPersonality();
    };
    
    document.getElementById('newPuzzleBtn').onclick = () => {
        completionModal.classList.add('hidden');
        document.getElementById('personalityResultView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
}

// ============================================================
// ==================== PHOTO FRAME ===========================
// ============================================================

const FRAME_STYLES = {
    dreamer: {
        emoji: '🦋',
        name: 'Dreamer',
        colors: ['#9b59b6', '#8e44ad'],
        accent: '#e8daef',
        category: 'butterflies'
    },
    explorer: {
        emoji: '🏔️',
        name: 'Explorer',
        colors: ['#3498db', '#2980b9'],
        accent: '#d6eaf8',
        category: 'landscapes'
    },
    nurturer: {
        emoji: '🌸',
        name: 'Nurturer',
        colors: ['#e91e63', '#c2185b'],
        accent: '#fce4ec',
        category: 'flowers'
    },
    spirit: {
        emoji: '🐴',
        name: 'Free Spirit',
        colors: ['#e67e22', '#d35400'],
        accent: '#fdebd0',
        category: 'horses'
    }
};

let frameState = {
    userImage: null,
    currentStyle: 'dreamer',
    stream: null,
    facingMode: 'user'
};

function setupFrameHome() {
    const uploadArea = document.getElementById('frameUploadArea');
    const fileInput = document.getElementById('frameFileInput');
    
    // Click to upload
    uploadArea.onclick = () => fileInput.click();
    
    // File selected
    fileInput.onchange = (e) => {
        if (e.target.files[0]) {
            loadUserImage(e.target.files[0]);
        }
    };
    
    // Drag and drop
    uploadArea.ondragover = (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    };
    uploadArea.ondragleave = () => uploadArea.classList.remove('dragover');
    uploadArea.ondrop = (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        if (e.dataTransfer.files[0]) {
            loadUserImage(e.dataTransfer.files[0]);
        }
    };
    
    // Camera button
    document.getElementById('frameCameraBtn').onclick = openCamera;
    
    // Frame view buttons
    document.getElementById('frameBackBtn').onclick = () => {
        document.getElementById('frameView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    document.getElementById('frameNewBtn').onclick = () => {
        document.getElementById('frameView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    document.getElementById('downloadFrameBtn').onclick = downloadFrame;
    document.getElementById('shareFrameBtn').onclick = shareFrame;
    
    // Style buttons
    document.querySelectorAll('.frame-style-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.frame-style-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            frameState.currentStyle = btn.dataset.style;
            renderFrame();
        };
    });
    
    // Camera modal
    document.getElementById('closeCameraBtn').onclick = closeCamera;
    document.getElementById('switchCameraBtn').onclick = switchCamera;
    document.getElementById('captureBtn').onclick = capturePhoto;
}

function loadUserImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            frameState.userImage = img;
            showFrameEditor();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function showFrameEditor() {
    playSound('click');
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('frameView').classList.remove('hidden');
    renderFrame();
}

function renderFrame() {
    const canvas = document.getElementById('frameCanvas');
    const ctx = canvas.getContext('2d');
    const style = FRAME_STYLES[frameState.currentStyle];
    
    const width = 400;
    const height = 520;
    canvas.width = width;
    canvas.height = height;
    
    // Get images for this style's category
    const styleImages = puzzles.filter(p => p.category === style.category).slice(0, 4);
    
    // Load all decoration images first, then render
    const imagesToLoad = styleImages.map(p => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = p.image;
        return img;
    });
    
    // Wait for images to load (or timeout)
    let loadedCount = 0;
    const maxWait = setTimeout(() => drawFrameContent(ctx, width, height, style, []), 2000);
    
    imagesToLoad.forEach(img => {
        img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === imagesToLoad.length) {
                clearTimeout(maxWait);
                drawFrameContent(ctx, width, height, style, imagesToLoad);
            }
        };
    });
    
    // If no images in category, render immediately
    if (imagesToLoad.length === 0) {
        clearTimeout(maxWait);
        drawFrameContent(ctx, width, height, style, []);
    }
}

function drawFrameContent(ctx, width, height, style, decorImages) {
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, style.colors[0]);
    gradient.addColorStop(1, style.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Decorative circles (subtle)
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let i = 0; i < 15; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 40 + 20;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Photo area
    const photoX = 30;
    const photoY = 55;
    const photoW = width - 60;
    const photoH = 280;
    
    // White frame border
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(photoX - 5, photoY - 5, photoW + 10, photoH + 10, 16);
    ctx.fill();
    
    // Draw user photo
    if (frameState.userImage) {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(photoX, photoY, photoW, photoH, 12);
        ctx.clip();
        
        const img = frameState.userImage;
        const imgRatio = img.width / img.height;
        const frameRatio = photoW / photoH;
        
        let sx = 0, sy = 0, sw = img.width, sh = img.height;
        if (imgRatio > frameRatio) {
            sw = img.height * frameRatio;
            sx = (img.width - sw) / 2;
        } else {
            sh = img.width / frameRatio;
            sy = (img.height - sh) / 2;
        }
        
        ctx.drawImage(img, sx, sy, sw, sh, photoX, photoY, photoW, photoH);
        ctx.restore();
    } else {
        // Placeholder
        ctx.fillStyle = '#f0f0f0';
        ctx.beginPath();
        ctx.roundRect(photoX, photoY, photoW, photoH, 12);
        ctx.fill();
    }
    
    // Header with logo
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.beginPath();
    ctx.roundRect(width/2 - 80, 12, 160, 32, 16);
    ctx.fill();
    
    ctx.fillStyle = style.colors[0];
    ctx.font = 'bold 15px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.fillText('🌸 PrettyFoto', width / 2, 34);
    
    // Style badge below photo
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${style.emoji} ${style.name}`, width / 2, photoY + photoH + 30);
    
    // Image strip at bottom - real photos from the collection
    if (decorImages.length > 0) {
        const stripY = photoY + photoH + 50;
        const imgSize = 65;
        const gap = 12;
        const totalWidth = decorImages.length * imgSize + (decorImages.length - 1) * gap;
        let startX = (width - totalWidth) / 2;
        
        // Strip background
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.beginPath();
        ctx.roundRect(startX - 10, stripY - 5, totalWidth + 20, imgSize + 10, 12);
        ctx.fill();
        
        decorImages.forEach((img, i) => {
            const x = startX + i * (imgSize + gap);
            
            // Draw circular image
            ctx.save();
            ctx.beginPath();
            ctx.arc(x + imgSize/2, stripY + imgSize/2, imgSize/2 - 2, 0, Math.PI * 2);
            ctx.clip();
            
            // Cover fit
            const imgRatio = img.width / img.height;
            let sx = 0, sy = 0, sw = img.width, sh = img.height;
            if (imgRatio > 1) {
                sw = img.height;
                sx = (img.width - sw) / 2;
            } else {
                sh = img.width;
                sy = (img.height - sh) / 2;
            }
            
            ctx.drawImage(img, sx, sy, sw, sh, x, stripY, imgSize, imgSize);
            ctx.restore();
            
            // White border
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(x + imgSize/2, stripY + imgSize/2, imgSize/2 - 2, 0, Math.PI * 2);
            ctx.stroke();
        });
    }
    
    // Footer CTA
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.beginPath();
    ctx.roundRect(width/2 - 90, height - 45, 180, 32, 16);
    ctx.fill();
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillText('Shop prints at prettyfoto.com', width / 2, height - 24);
}

function downloadFrame() {
    playSound('click');
    
    // Track for personalization
    trackGamePlay('frame');
    
    const canvas = document.getElementById('frameCanvas');
    const link = document.createElement('a');
    link.download = `prettyfoto-${frameState.currentStyle}-frame.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

async function shareFrame() {
    playSound('click');
    const canvas = document.getElementById('frameCanvas');
    
    try {
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], 'prettyfoto-frame.png', { type: 'image/png' });
        
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'My PrettyFoto Frame',
                text: `Check out my ${FRAME_STYLES[frameState.currentStyle].name} nature frame! 🌸 prettyfoto.com`
            });
        } else if (navigator.share) {
            await navigator.share({
                title: 'My PrettyFoto Frame',
                text: `Check out my ${FRAME_STYLES[frameState.currentStyle].name} nature frame! 🌸 prettyfoto.com`
            });
        } else {
            downloadFrame();
        }
    } catch (err) {
        downloadFrame();
    }
}

// Camera functions
async function openCamera() {
    playSound('click');
    const modal = document.getElementById('cameraModal');
    const video = document.getElementById('cameraVideo');
    
    try {
        frameState.stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: frameState.facingMode }
        });
        video.srcObject = frameState.stream;
        modal.classList.remove('hidden');
    } catch (err) {
        alert('Could not access camera. Please check permissions.');
    }
}

function closeCamera() {
    const modal = document.getElementById('cameraModal');
    const video = document.getElementById('cameraVideo');
    
    if (frameState.stream) {
        frameState.stream.getTracks().forEach(track => track.stop());
        frameState.stream = null;
    }
    video.srcObject = null;
    modal.classList.add('hidden');
}

async function switchCamera() {
    playSound('click');
    frameState.facingMode = frameState.facingMode === 'user' ? 'environment' : 'user';
    
    if (frameState.stream) {
        frameState.stream.getTracks().forEach(track => track.stop());
    }
    
    const video = document.getElementById('cameraVideo');
    try {
        frameState.stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: frameState.facingMode }
        });
        video.srcObject = frameState.stream;
    } catch (err) {
        console.error('Could not switch camera');
    }
}

function capturePhoto() {
    playSound('click');
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('cameraCapture');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    // Mirror the capture for selfie mode
    if (frameState.facingMode === 'user') {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0);
    
    // Convert to image
    const img = new Image();
    img.onload = () => {
        frameState.userImage = img;
        closeCamera();
        showFrameEditor();
    };
    img.src = canvas.toDataURL('image/png');
}

// ============================================================
// ==================== WORD SEARCH ===========================
// ============================================================

const NATURE_WORDS = {
    butterflies: ['BUTTERFLY', 'MONARCH', 'SWALLOWTAIL', 'WINGS', 'FLUTTER', 'NECTAR', 'CHRYSALIS', 'CATERPILLAR', 'MIGRATION', 'ANTENNAE'],
    flowers: ['BLOSSOM', 'PETAL', 'ORCHID', 'TULIP', 'SUNFLOWER', 'GARDEN', 'BOUQUET', 'FRAGRANCE', 'POLLINATE', 'BOTANICAL'],
    horses: ['STALLION', 'GALLOP', 'EQUINE', 'PASTURE', 'MUSTANG', 'FOAL', 'MANE', 'BRIDLE', 'CANTER', 'THOROUGHBRED'],
    landscapes: ['MOUNTAIN', 'VALLEY', 'HORIZON', 'PANORAMA', 'WILDERNESS', 'CANYON', 'SUMMIT', 'MEADOW', 'OVERLOOK', 'TERRAIN']
};

let wsState = {
    puzzle: null,
    grid: [],
    words: [],
    wordPositions: [], // Store where words are placed
    foundWords: [],
    selecting: false,
    startCell: null,
    selection: []
};

function setupWordsearchHome() {
    const preview = puzzles[0];
    document.getElementById('wsPreviewImage').src = preview.image;
    document.getElementById('wsPreviewTitle').textContent = preview.title;
    
    document.getElementById('startWordsearchBtn').onclick = () => startWordsearch(preview);
    document.getElementById('wsBackBtn').onclick = () => {
        document.getElementById('wordsearchView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    
    // Render gallery
    const gallery = document.getElementById('wordsearchGallery');
    gallery.innerHTML = puzzles.slice(0, 8).map(p => `
        <div class="puzzle-card" onclick="startWordsearch(puzzles.find(x => x.id === ${p.id}))">
            <img src="${p.image}" alt="${p.title}" class="puzzle-card-image" loading="lazy">
            <div class="puzzle-card-info">
                <div class="puzzle-card-title">${p.title}</div>
            </div>
        </div>
    `).join('');
}

function startWordsearch(puzzle) {
    playSound('click');
    wsState.puzzle = puzzle;
    wsState.foundWords = [];
    wsState.wordPositions = [];
    
    // Get words for this category - pick 8 random words
    const categoryWords = NATURE_WORDS[puzzle.category] || NATURE_WORDS.flowers;
    const shuffled = [...categoryWords].sort(() => Math.random() - 0.5);
    wsState.words = shuffled.slice(0, 8);
    
    // Generate larger grid (12x12)
    wsState.grid = generateWordSearchGrid(wsState.words, 12);
    
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('wordsearchView').classList.remove('hidden');
    
    document.getElementById('wsGameImage').src = puzzle.image;
    document.getElementById('wsGameTitle').textContent = puzzle.title;
    document.getElementById('wsShopLink').href = puzzle.shopUrl;
    
    renderWordsearch();
}

function generateWordSearchGrid(words, size) {
    // Create empty grid
    const grid = Array(size).fill(null).map(() => Array(size).fill(''));
    
    // Sort words by length (longest first - easier to place)
    const sortedWords = [...words].sort((a, b) => b.length - a.length);
    
    // Place words
    sortedWords.forEach(word => {
        placeWord(grid, word, size);
    });
    
    // Fill empty spaces with letters that appear in words (makes it harder!)
    const wordLetters = words.join('').split('');
    const commonLetters = 'AEIOULNSTR'; // Common letters to add confusion
    const fillLetters = wordLetters.join('') + commonLetters;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (!grid[y][x]) {
                grid[y][x] = fillLetters[Math.floor(Math.random() * fillLetters.length)];
            }
        }
    }
    
    return grid;
}

function placeWord(grid, word, size) {
    // All 8 directions: horizontal, vertical, diagonal, and their reverses
    const directions = [
        [0, 1],   // right
        [0, -1],  // left
        [1, 0],   // down
        [-1, 0],  // up
        [1, 1],   // diagonal down-right
        [1, -1],  // diagonal down-left
        [-1, 1],  // diagonal up-right
        [-1, -1]  // diagonal up-left
    ];
    
    // Shuffle directions for variety
    const shuffledDirs = [...directions].sort(() => Math.random() - 0.5);
    
    for (let attempts = 0; attempts < 200; attempts++) {
        const dir = shuffledDirs[attempts % shuffledDirs.length];
        const startX = Math.floor(Math.random() * size);
        const startY = Math.floor(Math.random() * size);
        
        // Check if word fits
        let fits = true;
        const positions = [];
        
        for (let i = 0; i < word.length; i++) {
            const x = startX + dir[1] * i;
            const y = startY + dir[0] * i;
            
            if (x < 0 || x >= size || y < 0 || y >= size) {
                fits = false;
                break;
            }
            
            if (grid[y][x] && grid[y][x] !== word[i]) {
                fits = false;
                break;
            }
            
            positions.push({x, y});
        }
        
        if (fits) {
            for (let i = 0; i < word.length; i++) {
                const x = startX + dir[1] * i;
                const y = startY + dir[0] * i;
                grid[y][x] = word[i];
            }
            wsState.wordPositions.push({word, positions});
            return true;
        }
    }
    
    // Word couldn't be placed, remove it from list
    const idx = wsState.words.indexOf(word);
    if (idx > -1) wsState.words.splice(idx, 1);
    return false;
}

function renderWordsearch() {
    const size = wsState.grid.length;
    const cellSize = size > 10 ? 24 : 28;
    
    // Render grid
    const gridEl = document.getElementById('wsGrid');
    gridEl.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    gridEl.innerHTML = '';
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const cell = document.createElement('div');
            cell.className = 'ws-cell';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.fontSize = `${cellSize > 24 ? 14 : 12}px`;
            cell.textContent = wsState.grid[y][x];
            cell.dataset.x = x;
            cell.dataset.y = y;
            
            // Check if this cell is part of a found word
            for (const foundWord of wsState.foundWords) {
                const wordPos = wsState.wordPositions.find(wp => wp.word === foundWord);
                if (wordPos && wordPos.positions.some(p => p.x === x && p.y === y)) {
                    cell.classList.add('found');
                }
            }
            
            cell.onmousedown = cell.ontouchstart = (e) => {
                e.preventDefault();
                startWsSelection(x, y);
            };
            cell.onmouseenter = (e) => {
                if (wsState.selecting) {
                    extendWsSelection(x, y);
                }
            };
            
            gridEl.appendChild(cell);
        }
    }
    
    // Handle touch move separately for mobile
    gridEl.ontouchmove = (e) => {
        if (!wsState.selecting) return;
        e.preventDefault();
        const touch = e.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.classList.contains('ws-cell')) {
            const x = parseInt(element.dataset.x);
            const y = parseInt(element.dataset.y);
            extendWsSelection(x, y);
        }
    };
    
    document.onmouseup = document.ontouchend = endWsSelection;
    
    // Render word list (2 columns for more words)
    const wordList = document.getElementById('wsWordList');
    wordList.innerHTML = wsState.words.map(word => `
        <span class="ws-word ${wsState.foundWords.includes(word) ? 'found' : ''}">${word}</span>
    `).join('');
}

function startWsSelection(x, y) {
    wsState.selecting = true;
    wsState.startCell = {x, y};
    wsState.selection = [{x, y}];
    updateWsSelection();
}

function extendWsSelection(x, y) {
    if (!wsState.startCell) return;
    
    // Build selection as a line from start to current
    const dx = x - wsState.startCell.x;
    const dy = y - wsState.startCell.y;
    
    // Determine direction (must be straight line: horizontal, vertical, or diagonal)
    let stepX = 0, stepY = 0;
    if (dx !== 0) stepX = dx > 0 ? 1 : -1;
    if (dy !== 0) stepY = dy > 0 ? 1 : -1;
    
    // Check if it's a valid straight line
    if (dx !== 0 && dy !== 0 && Math.abs(dx) !== Math.abs(dy)) {
        return; // Not a valid diagonal
    }
    
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    wsState.selection = [];
    
    for (let i = 0; i <= steps; i++) {
        wsState.selection.push({
            x: wsState.startCell.x + stepX * i,
            y: wsState.startCell.y + stepY * i
        });
    }
    
    updateWsSelection();
}

function updateWsSelection() {
    document.querySelectorAll('.ws-cell').forEach(cell => {
        cell.classList.remove('selected');
    });
    
    wsState.selection.forEach(({x, y}) => {
        const cell = document.querySelector(`.ws-cell[data-x="${x}"][data-y="${y}"]`);
        if (cell) cell.classList.add('selected');
    });
}

function endWsSelection() {
    if (!wsState.selecting) return;
    wsState.selecting = false;
    wsState.startCell = null;
    
    // Check if selection forms a word
    const selectedWord = wsState.selection.map(({x, y}) => wsState.grid[y][x]).join('');
    const reversedWord = selectedWord.split('').reverse().join('');
    
    if (wsState.words.includes(selectedWord) && !wsState.foundWords.includes(selectedWord)) {
        foundWsWord(selectedWord, wsState.selection);
    } else if (wsState.words.includes(reversedWord) && !wsState.foundWords.includes(reversedWord)) {
        foundWsWord(reversedWord, wsState.selection);
    } else {
        // Clear selection
        document.querySelectorAll('.ws-cell.selected').forEach(c => c.classList.remove('selected'));
    }
    
    wsState.selection = [];
}

function foundWsWord(word, selection) {
    playSound('click');
    vibrate(50);
    
    wsState.foundWords.push(word);
    
    // Mark cells as found
    selection.forEach(({x, y}) => {
        const cell = document.querySelector(`.ws-cell[data-x="${x}"][data-y="${y}"]`);
        if (cell) {
            cell.classList.add('found');
            cell.classList.remove('selected');
        }
    });
    
    // Update word list
    document.querySelectorAll('.ws-word').forEach(el => {
        if (el.textContent === word) el.classList.add('found');
    });
    
    // Check if complete
    if (wsState.foundWords.length === wsState.words.length) {
        wordsearchComplete();
    }
}

function wordsearchComplete() {
    playSound('win');
    showConfetti();
    
    document.getElementById('completedImage').src = wsState.puzzle.image;
    document.getElementById('finalTime').textContent = '🔤 Found all!';
    document.getElementById('finalMoves').textContent = wsState.foundWords.length + ' words';
    document.getElementById('completionShopLink').href = wsState.puzzle.shopUrl;
    document.getElementById('completionGalleryLink').href = wsState.puzzle.galleryUrl;
    document.getElementById('shareSection').classList.remove('hidden');
    
    // Generate share card
    generateShareCard(
        'wordsearch',
        wsState.puzzle.id,
        wsState.puzzle.title,
        '🔤 All words found!',
        `${wsState.foundWords.length} words`,
        wsState.puzzle.category,
        wsState.puzzle.image,
        0
    );
    
    setTimeout(() => completionModal.classList.remove('hidden'), 500);
    
    document.getElementById('playAgainBtn').onclick = () => {
        completionModal.classList.add('hidden');
        startWordsearch(wsState.puzzle);
    };
    
    document.getElementById('newPuzzleBtn').onclick = () => {
        completionModal.classList.add('hidden');
        document.getElementById('wordsearchView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
}

// ============ INITIALIZE NEW GAMES ============
document.addEventListener('DOMContentLoaded', () => {
    setupGameModeTabs();
});
