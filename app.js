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
    registerServiceWorker();
    setupDailyPuzzle();
    renderGallery();
    setupEventListeners();
    startCountdown();
    checkOnboarding();
    setupPWAInstall();
    updateSoundButton();
});

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
            case 'ranking':
                setupRankingHome();
                break;
            case 'shapeku':
                setupShapekuHome();
                break;
            case 'wordsearch':
                setupWordsearchHome();
                break;
        }
    }
}

// ============================================================
// ==================== PHOTO RANKING =========================
// ============================================================

let rankingState = {
    comparisons: [],
    scores: {},
    currentPair: 0,
    totalPairs: 10
};

function setupRankingHome() {
    document.getElementById('startRankingBtn').onclick = startRanking;
    document.getElementById('rankingBackBtn').onclick = () => {
        document.getElementById('rankingView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
}

function startRanking() {
    playSound('click');
    
    // Reset state
    rankingState = {
        comparisons: generateComparisons(),
        scores: {},
        currentPair: 0,
        totalPairs: 10
    };
    
    // Initialize scores
    puzzles.forEach(p => rankingState.scores[p.id] = 0);
    
    // Show ranking view
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('rankingView').classList.remove('hidden');
    
    showRankingPair();
}

function generateComparisons() {
    const pairs = [];
    const shuffled = [...puzzles].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < Math.min(10, Math.floor(shuffled.length / 2)); i++) {
        pairs.push([shuffled[i * 2], shuffled[i * 2 + 1]]);
    }
    return pairs;
}

function showRankingPair() {
    if (rankingState.currentPair >= rankingState.comparisons.length) {
        finishRanking();
        return;
    }
    
    const [img1, img2] = rankingState.comparisons[rankingState.currentPair];
    
    document.getElementById('rankingProgress').textContent = 
        `${rankingState.currentPair + 1} of ${rankingState.comparisons.length}`;
    
    document.getElementById('rankingImg1').src = img1.image;
    document.getElementById('rankingTitle1').textContent = img1.title;
    document.getElementById('rankingImg2').src = img2.image;
    document.getElementById('rankingTitle2').textContent = img2.title;
    
    // Set up click handlers
    document.getElementById('rankingCard1').onclick = () => selectRanking(img1.id, img2.id);
    document.getElementById('rankingCard2').onclick = () => selectRanking(img2.id, img1.id);
}

function selectRanking(winnerId, loserId) {
    playSound('click');
    vibrate(10);
    
    rankingState.scores[winnerId] += 1;
    rankingState.currentPair++;
    
    // Animate transition
    const cards = document.querySelectorAll('.ranking-card');
    cards.forEach(c => c.style.opacity = '0.5');
    
    setTimeout(() => {
        cards.forEach(c => c.style.opacity = '1');
        showRankingPair();
    }, 200);
}

function finishRanking() {
    playSound('win');
    showConfetti();
    
    // Sort by score
    const sorted = Object.entries(rankingState.scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    
    const topPicks = document.getElementById('topPicks');
    topPicks.innerHTML = sorted.map(([id, score], i) => {
        const puzzle = puzzles.find(p => p.id === parseInt(id));
        return `
            <div class="top-pick" onclick="window.open('${puzzle.shopUrl}', '_blank')">
                <span class="top-pick-rank">${i + 1}</span>
                <img src="${puzzle.image}" alt="${puzzle.title}">
            </div>
        `;
    }).join('');
    
    document.getElementById('rankingView').classList.add('hidden');
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('rankingResults').classList.remove('hidden');
    
    stats.shopClicks = (stats.shopClicks || 0);
    saveStats();
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
// ==================== SHAPEKU (PICTURE SUDOKU) ==============
// ============================================================

let shapekuState = {
    size: 4,
    board: [],
    solution: [],
    fixedCells: [],  // Track which cells are given clues
    images: [],
    selectedImage: null
};

function setupShapekuHome() {
    document.querySelectorAll('.shapeku-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.shapeku-size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            shapekuState.size = parseInt(btn.dataset.size);
        });
    });
    
    document.getElementById('startShapekuBtn').onclick = startShapeku;
    document.getElementById('shapekuBackBtn').onclick = () => {
        document.getElementById('shapekuView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
    document.getElementById('shapekuCheckBtn').onclick = checkShapeku;
}

function startShapeku() {
    playSound('click');
    
    const size = shapekuState.size;
    
    // Pick images for this game
    const shuffled = [...puzzles].sort(() => Math.random() - 0.5);
    shapekuState.images = shuffled.slice(0, size);
    
    // Generate valid solved board
    shapekuState.solution = generateShapekuSolution(size);
    
    // Create puzzle by keeping some cells as clues (about 40%)
    shapekuState.board = [];
    shapekuState.fixedCells = [];
    
    for (let y = 0; y < size; y++) {
        const row = [];
        const fixedRow = [];
        for (let x = 0; x < size; x++) {
            // Keep about 40% of cells as clues
            const isFixed = Math.random() < 0.4;
            row.push(isFixed ? shapekuState.solution[y][x] : null);
            fixedRow.push(isFixed);
        }
        shapekuState.board.push(row);
        shapekuState.fixedCells.push(fixedRow);
    }
    
    shapekuState.selectedImage = null;
    
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('shapekuView').classList.remove('hidden');
    
    renderShapeku();
}

function generateShapekuSolution(size) {
    // Generate a valid Latin square (each number once per row/column)
    const board = [];
    
    // For 4x4: use a known valid pattern and shuffle
    if (size === 4) {
        // Base valid 4x4 Latin square
        const base = [
            [0, 1, 2, 3],
            [1, 2, 3, 0],
            [2, 3, 0, 1],
            [3, 0, 1, 2]
        ];
        
        // Shuffle rows
        const rowOrder = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        // Shuffle columns
        const colOrder = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        // Shuffle symbols
        const symbolMap = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        
        for (let y = 0; y < 4; y++) {
            const row = [];
            for (let x = 0; x < 4; x++) {
                row.push(symbolMap[base[rowOrder[y]][colOrder[x]]]);
            }
            board.push(row);
        }
    } else {
        // For 6x6: use a simple valid pattern
        const base = [
            [0, 1, 2, 3, 4, 5],
            [2, 3, 4, 5, 0, 1],
            [4, 5, 0, 1, 2, 3],
            [1, 2, 3, 4, 5, 0],
            [3, 4, 5, 0, 1, 2],
            [5, 0, 1, 2, 3, 4]
        ];
        
        const rowOrder = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
        const colOrder = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
        const symbolMap = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
        
        for (let y = 0; y < 6; y++) {
            const row = [];
            for (let x = 0; x < 6; x++) {
                row.push(symbolMap[base[rowOrder[y]][colOrder[x]]]);
            }
            board.push(row);
        }
    }
    
    return board;
}

function renderShapeku() {
    const size = shapekuState.size;
    
    // Render palette
    const palette = document.getElementById('shapekuPalette');
    palette.innerHTML = shapekuState.images.map((img, i) => `
        <img src="${img.image}" alt="${img.title}" class="palette-img ${shapekuState.selectedImage === i ? 'selected' : ''}" 
             data-index="${i}" onclick="selectShapekuImage(${i})">
    `).join('');
    
    // Render board
    const board = document.getElementById('shapekuBoard');
    const cellSize = size === 4 ? 60 : 45;
    board.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    board.innerHTML = '';
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const cell = document.createElement('div');
            cell.className = 'shapeku-cell';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.dataset.x = x;
            cell.dataset.y = y;
            
            const val = shapekuState.board[y][x];
            if (val !== null && shapekuState.images[val]) {
                const img = document.createElement('img');
                img.src = shapekuState.images[val].image;
                cell.appendChild(img);
            }
            
            // Mark fixed cells (given clues)
            if (shapekuState.fixedCells[y][x]) {
                cell.classList.add('fixed');
            }
            
            cell.onclick = () => clickShapekuCell(x, y);
            board.appendChild(cell);
        }
    }
}

function selectShapekuImage(index) {
    playSound('click');
    shapekuState.selectedImage = index;
    renderShapeku(); // Re-render to show selection
}

function clickShapekuCell(x, y) {
    // Don't allow changing fixed cells (given clues)
    if (shapekuState.fixedCells[y][x]) {
        return;
    }
    
    playSound('click');
    
    // If no image selected, clear the cell
    if (shapekuState.selectedImage === null) {
        shapekuState.board[y][x] = null;
    } else {
        shapekuState.board[y][x] = shapekuState.selectedImage;
    }
    
    renderShapeku();
}

function checkShapeku() {
    playSound('click');
    const size = shapekuState.size;
    let correct = true;
    let hasEmpty = false;
    
    // Clear previous errors
    document.querySelectorAll('.shapeku-cell').forEach(c => c.classList.remove('error'));
    
    // Check for empty cells
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (shapekuState.board[y][x] === null) {
                hasEmpty = true;
                document.querySelector(`.shapeku-cell[data-x="${x}"][data-y="${y}"]`).classList.add('error');
            }
        }
    }
    
    if (hasEmpty) {
        return; // Don't check further if there are empty cells
    }
    
    // Check rows
    for (let y = 0; y < size; y++) {
        const row = shapekuState.board[y];
        if (new Set(row).size !== size) {
            correct = false;
            for (let x = 0; x < size; x++) {
                document.querySelector(`.shapeku-cell[data-x="${x}"][data-y="${y}"]`).classList.add('error');
            }
        }
    }
    
    // Check columns
    for (let x = 0; x < size; x++) {
        const col = shapekuState.board.map(row => row[x]);
        if (new Set(col).size !== size) {
            correct = false;
            for (let y = 0; y < size; y++) {
                document.querySelector(`.shapeku-cell[data-x="${x}"][data-y="${y}"]`).classList.add('error');
            }
        }
    }
    
    if (correct) {
        shapekuComplete();
    }
}

function shapekuComplete() {
    playSound('win');
    showConfetti();
    
    const randomImg = shapekuState.images[Math.floor(Math.random() * shapekuState.images.length)];
    
    document.getElementById('completedImage').src = randomImg.image;
    document.getElementById('finalTime').textContent = '🎨 Solved!';
    document.getElementById('finalMoves').textContent = shapekuState.size + '×' + shapekuState.size;
    document.getElementById('completionShopLink').href = randomImg.shopUrl;
    document.getElementById('completionGalleryLink').href = randomImg.galleryUrl;
    document.getElementById('shareSection').classList.remove('hidden');
    
    // Generate share card
    generateShareCard(
        'shapeku',
        Math.floor(Math.random() * 1000),
        'Picture Sudoku',
        '🎨 Solved!',
        `${shapekuState.size}×${shapekuState.size}`,
        'Grid complete',
        randomImg.image,
        0
    );
    
    completionModal.classList.remove('hidden');
    
    document.getElementById('playAgainBtn').onclick = () => {
        completionModal.classList.add('hidden');
        startShapeku();
    };
    
    document.getElementById('newPuzzleBtn').onclick = () => {
        completionModal.classList.add('hidden');
        document.getElementById('shapekuView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
    };
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
