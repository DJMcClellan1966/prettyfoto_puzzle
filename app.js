// PrettyFoto Daily Puzzle - With Custom Upload Feature
// 12 unique PrettyFoto images + user uploaded photos

// ============ PUZZLE DATA (12 Unique Images) ============
const puzzles = [
    // Butterflies
    { 
        id: 1, 
        title: "Whimsical Wings", 
        category: "butterflies", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942833/IMG_8687_vttrql.jpg", 
        shopUrl: "https://www.prettyfoto.com/butterflies-in-nature" 
    },
    { 
        id: 2, 
        title: "Magic Moment", 
        category: "butterflies", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700943044/2264CA79-BD70-48AD-966D-DD9AF33E3D96_wsxgg7.jpg", 
        shopUrl: "https://www.prettyfoto.com/butterflies-in-nature" 
    },
    { 
        id: 3, 
        title: "Sitting Pretty", 
        category: "butterflies", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942834/IMG_8255_mvuquo.jpg", 
        shopUrl: "https://www.prettyfoto.com/butterflies-in-nature" 
    },
    
    // Flowers  
    { 
        id: 4, 
        title: "Pink Paradise", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942939/IMG_8239_lxnueh.jpg", 
        shopUrl: "https://www.prettyfoto.com/flowersqzw7qvx8g60" 
    },
    { 
        id: 5, 
        title: "My One and Only", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1737159079/IMG_0594_yndoza.jpg", 
        shopUrl: "https://www.prettyfoto.com/tulips" 
    },
    { 
        id: 6, 
        title: "Love's Flame", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1737159079/IMG_0631_nuav1f.jpg", 
        shopUrl: "https://www.prettyfoto.com/tulips" 
    },
    { 
        id: 7, 
        title: "On the Move", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1693521613/Jennifer_McClellan_Img_0261_giehor.jpg", 
        shopUrl: "https://www.prettyfoto.com/orchids" 
    },
    { 
        id: 8, 
        title: "Pretty on Point", 
        category: "flowers", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113391/2N4A5107_imfztx.jpg", 
        shopUrl: "https://www.prettyfoto.com/orchids" 
    },
    
    // Wildlife
    { 
        id: 9, 
        title: "Gentle Giant", 
        category: "wildlife", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1701103235/IMG_0726_dk7hqu.jpg", 
        shopUrl: "https://www.prettyfoto.com/wildlifefcmiacr2jse" 
    },
    { 
        id: 10, 
        title: "Wild Motion", 
        category: "wildlife", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942833/IMG_0261_kxgqjx.jpg", 
        shopUrl: "https://www.prettyfoto.com/wildlifefcmiacr2jse" 
    },
    
    // Landscapes
    { 
        id: 11, 
        title: "Mountain Majesty", 
        category: "landscapes", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1701103309/IMG_7621_eonzfe.jpg", 
        shopUrl: "https://www.prettyfoto.com/mountains" 
    },
    { 
        id: 12, 
        title: "An Unexpected View", 
        category: "landscapes", 
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1719113577/IMG_2394_nbgkpf.jpg", 
        shopUrl: "https://www.prettyfoto.com/mountains" 
    },
];

// ============ CONSTANTS ============
const STORAGE_KEY = 'prettyfoto_puzzle';
const EPOCH = new Date('2026-02-03').getTime();
const DAY_MS = 24 * 60 * 60 * 1000;

// ============ GAME STATE ============
let currentPuzzle = null;
let isDaily = false;
let isCustom = false;
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
let customImageData = null;

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
    hasSeenEmailPrompt: false,
    email: null
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
    
    // Shuffle button
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
    document.getElementById('shareBtn').addEventListener('click', shareResult);
    document.getElementById('shareResultBtn').addEventListener('click', shareResult);
    
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
        if (currentSlide < 4) {
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
    
    // Email modal
    document.getElementById('closeEmail').addEventListener('click', () => emailModal.classList.add('hidden'));
    document.getElementById('skipEmail').addEventListener('click', () => {
        emailModal.classList.add('hidden');
        stats.hasSeenEmailPrompt = true;
        saveStats();
    });
    
    document.getElementById('emailForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        stats.email = email;
        stats.hasSeenEmailPrompt = true;
        saveStats();
        emailModal.classList.add('hidden');
        alert('Thanks! Check your email for your 20% discount code.');
    });
    
    // Custom puzzle upload
    document.getElementById('uploadInput').addEventListener('change', handleImageUpload);
    document.getElementById('cameraBtn').addEventListener('click', () => {
        // Trigger file input with camera on mobile
        const input = document.getElementById('uploadInput');
        input.setAttribute('capture', 'environment');
        input.click();
        input.removeAttribute('capture');
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

// ============ CUSTOM PUZZLE UPLOAD ============
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    playSound('click');
    
    const reader = new FileReader();
    reader.onload = (event) => {
        // Create square cropped version
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const size = Math.min(img.width, img.height);
            canvas.width = 600;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            
            // Center crop to square
            const sx = (img.width - size) / 2;
            const sy = (img.height - size) / 2;
            ctx.drawImage(img, sx, sy, size, size, 0, 0, 600, 600);
            
            customImageData = canvas.toDataURL('image/jpeg', 0.9);
            startCustomPuzzle();
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    
    // Reset input so same file can be selected again
    e.target.value = '';
}

function startCustomPuzzle() {
    isDaily = false;
    isCustom = true;
    currentPuzzle = {
        title: "Your Photo",
        category: "custom",
        image: customImageData,
        shopUrl: null
    };
    
    shuffleSeed = Date.now();
    
    puzzleTitle.textContent = "Your Photo";
    puzzlePreview.src = customImageData;
    document.getElementById('hintImage').src = customImageData;
    
    // Hide shop button for custom puzzles
    shopLink.classList.add('hidden');
    document.getElementById('dailyBadge').classList.add('hidden');
    document.getElementById('customBadge').classList.remove('hidden');
    document.getElementById('shuffleBtn').classList.remove('hidden');
    
    homeView.classList.add('hidden');
    puzzleView.classList.remove('hidden');
    difficultySelect.classList.remove('hidden');
    gameArea.classList.add('hidden');
    
    resetGame();
}

function updateOnboardingSlide(num) {
    document.querySelectorAll('.onboarding-slide').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.onboarding-dots .dot').forEach(d => d.classList.remove('active'));
    
    document.querySelector(`.onboarding-slide[data-slide="${num}"]`).classList.add('active');
    document.querySelector(`.dot[data-slide="${num}"]`).classList.add('active');
    
    document.getElementById('onboardingNext').textContent = num === 4 ? "Let's Play!" : 'Next';
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
    isCustom = false;
    currentPuzzle = getDailyPuzzle();
    gridSize = 4;
    shuffleSeed = getDailyPuzzleNumber();
    
    puzzleTitle.textContent = currentPuzzle.title;
    puzzlePreview.src = currentPuzzle.image;
    shopLink.href = currentPuzzle.shopUrl;
    shopLink.classList.remove('hidden');
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('hintImage').src = currentPuzzle.image;
    
    document.getElementById('dailyBadge').classList.remove('hidden');
    document.getElementById('dailyBadgeNum').textContent = getDailyPuzzleNumber();
    document.getElementById('customBadge').classList.add('hidden');
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
    isCustom = false;
    currentPuzzle = puzzles.find(p => p.id === id);
    if (!currentPuzzle) return;
    
    shuffleSeed = Date.now();
    
    puzzleTitle.textContent = currentPuzzle.title;
    puzzlePreview.src = currentPuzzle.image;
    shopLink.href = currentPuzzle.shopUrl;
    shopLink.classList.remove('hidden');
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('hintImage').src = currentPuzzle.image;
    
    document.getElementById('dailyBadge').classList.add('hidden');
    document.getElementById('customBadge').classList.add('hidden');
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
    
    // Show/hide shop CTA based on puzzle type
    const completionCta = document.getElementById('completionCta');
    if (isCustom) {
        completionCta.classList.add('hidden');
    } else {
        completionCta.classList.remove('hidden');
        document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    }
    
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
        
        saveStats();
        
        if (!stats.hasSeenEmailPrompt && stats.played === 1) {
            setTimeout(() => emailModal.classList.remove('hidden'), 2000);
        }
    } else {
        document.getElementById('shareSection').classList.add('hidden');
        document.getElementById('playAgainBtn').textContent = 'Play Again';
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
    if (stored) stats = { ...stats, ...JSON.parse(stored) };
    
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
    
    statsModal.classList.remove('hidden');
}

// ============ SHARING ============
function shareResult() {
    playSound('click');
    const puzzleNum = getDailyPuzzleNumber();
    const rating = stats.todayMoves <= 50 ? '🏆 Perfect!' :
                   stats.todayMoves <= 80 ? '⭐ Excellent!' :
                   stats.todayMoves <= 120 ? '👍 Great!' :
                   stats.todayMoves <= 180 ? '✅ Good!' : '🎉 Solved!';
    
    const shareText = `🌸 PrettyFoto Puzzle #${puzzleNum}\n\n${rating}\n⏱️ ${formatTime(stats.todayTime)}\n👆 ${stats.todayMoves} moves\n🔥 ${stats.currentStreak} day streak\n\nPlay at prettyfoto.com/puzzles`;
    
    if (navigator.share) {
        navigator.share({ text: shareText }).catch(() => copyToClipboard(shareText));
    } else {
        copyToClipboard(shareText);
    }
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
