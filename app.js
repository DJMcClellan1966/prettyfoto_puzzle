// PrettyFoto Daily Puzzle - Like Wordle!
// Drives traffic to prettyfoto.com

// ============ PUZZLE DATA ============
const puzzles = [
    {
        id: 1,
        title: "Whimsical Wings",
        category: "butterflies",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942833/IMG_8687_vttrql.jpg",
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-img-8687?product_gallery=303973&product_id=6389633"
    },
    {
        id: 2,
        title: "Magic Moment",
        category: "butterflies",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700943044/2264CA79-BD70-48AD-966D-DD9AF33E3D96_wsxgg7.jpg",
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/magic-moment?product_gallery=302645&product_id=6412040"
    },
    {
        id: 3,
        title: "On The Move",
        category: "wildlife",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942833/IMG_0261_kxgqjx.jpg",
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-img-0261?product_gallery=302623&product_id=6350814"
    },
    {
        id: 4,
        title: "Pink Paradise",
        category: "flowers",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942939/IMG_8239_lxnueh.jpg",
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-img-8239?product_gallery=302637&product_id=6385536"
    },
    {
        id: 5,
        title: "Sitting Pretty",
        category: "butterflies",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942834/IMG_8255_mvuquo.jpg",
        shopUrl: "https://www.prettyfoto.com/warehouse-open-edition-prints/art_print_products/jennifer-mcclellan-img-8255?product_gallery=303973&product_id=6389632"
    },
    {
        id: 6,
        title: "Mountain Majesty",
        category: "landscapes",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1701103309/IMG_7621_eonzfe.jpg",
        shopUrl: "https://www.prettyfoto.com/mountains"
    },
    {
        id: 7,
        title: "Gentle Giant",
        category: "wildlife",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1701103235/IMG_0726_dk7hqu.jpg",
        shopUrl: "https://www.prettyfoto.com/wildlifefcmiacr2jse"
    },
    {
        id: 8,
        title: "Golden Bloom",
        category: "flowers",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942833/IMG_8687_vttrql.jpg",
        shopUrl: "https://www.prettyfoto.com/sun-kissed-sunflowers"
    },
    {
        id: 9,
        title: "Orchid Dream",
        category: "flowers",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700943044/2264CA79-BD70-48AD-966D-DD9AF33E3D96_wsxgg7.jpg",
        shopUrl: "https://www.prettyfoto.com/orchids"
    },
    {
        id: 10,
        title: "Wild Spirit",
        category: "wildlife",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942834/IMG_8255_mvuquo.jpg",
        shopUrl: "https://www.prettyfoto.com/equine-beauties"
    },
    {
        id: 11,
        title: "Sunset Glow",
        category: "landscapes",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942833/IMG_0261_kxgqjx.jpg",
        shopUrl: "https://www.prettyfoto.com/shimmering-sunshine-sunsets"
    },
    {
        id: 12,
        title: "Spring Colors",
        category: "flowers",
        image: "https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v1700942939/IMG_8239_lxnueh.jpg",
        shopUrl: "https://www.prettyfoto.com/tulips"
    }
];

// ============ CONSTANTS ============
const STORAGE_KEY = 'prettyfoto_puzzle';
const EPOCH = new Date('2026-02-03').getTime(); // Start date for puzzle numbering
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
    todayTime: 0
};

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

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    setupDailyPuzzle();
    renderGallery();
    setupEventListeners();
    startCountdown();
});

function setupEventListeners() {
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
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderGallery(e.target.dataset.category);
        });
    });
    
    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            gridSize = parseInt(btn.dataset.size);
            startGame();
        });
    });
    
    // Hint button
    document.getElementById('hintBtn').addEventListener('click', showHint);
    
    // Shuffle button
    document.getElementById('shuffleBtn').addEventListener('click', () => {
        if (isDaily) return; // Can't shuffle daily
        shuffleTiles();
        moves = 0;
        seconds = 0;
        gameStarted = false;
        updateStats();
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
    
    // Close modals
    hintModal.addEventListener('click', () => hintModal.classList.add('hidden'));
    statsModal.addEventListener('click', (e) => {
        if (e.target === statsModal) statsModal.classList.add('hidden');
    });
    completionModal.addEventListener('click', (e) => {
        if (e.target === completionModal) completionModal.classList.add('hidden');
    });
}

// ============ DAILY PUZZLE ============
function getDailyPuzzleNumber() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.floor((today.getTime() - EPOCH) / DAY_MS) + 1;
}

function getDailyPuzzle() {
    const puzzleNum = getDailyPuzzleNumber();
    // Use puzzle number to select from array (cycles through)
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
    
    // Update daily card
    document.getElementById('puzzleNumber').textContent = puzzleNum;
    document.getElementById('puzzleDate').textContent = today.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
    document.getElementById('dailyImage').src = daily.image;
    document.getElementById('dailyTitle').textContent = daily.title;
    document.getElementById('dailyCategory').textContent = daily.category;
    
    // Check if already completed today
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
    isDaily = true;
    currentPuzzle = getDailyPuzzle();
    gridSize = 4; // Daily is always 4x4
    shuffleSeed = getDailyPuzzleNumber(); // Same shuffle for everyone
    
    // Update puzzle view
    puzzleTitle.textContent = currentPuzzle.title;
    puzzlePreview.src = currentPuzzle.image;
    shopLink.href = currentPuzzle.shopUrl;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('hintImage').src = currentPuzzle.image;
    
    // Show daily badge
    document.getElementById('dailyBadge').classList.remove('hidden');
    document.getElementById('dailyBadgeNum').textContent = getDailyPuzzleNumber();
    
    // Hide shuffle button for daily
    document.getElementById('shuffleBtn').classList.add('hidden');
    
    // Hide difficulty select, go straight to game
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

// ============ GALLERY (FREE PLAY) ============
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
    isDaily = false;
    currentPuzzle = puzzles.find(p => p.id === id);
    if (!currentPuzzle) return;
    
    shuffleSeed = Date.now(); // Random shuffle for free play
    
    // Update puzzle view
    puzzleTitle.textContent = currentPuzzle.title;
    puzzlePreview.src = currentPuzzle.image;
    shopLink.href = currentPuzzle.shopUrl;
    document.getElementById('completionShopLink').href = currentPuzzle.shopUrl;
    document.getElementById('hintImage').src = currentPuzzle.image;
    
    // Hide daily badge
    document.getElementById('dailyBadge').classList.add('hidden');
    
    // Show shuffle button
    document.getElementById('shuffleBtn').classList.remove('hidden');
    
    // Show puzzle view with difficulty select
    homeView.classList.add('hidden');
    puzzleView.classList.remove('hidden');
    difficultySelect.classList.remove('hidden');
    gameArea.classList.add('hidden');
    
    resetGame();
}

function goHome() {
    puzzleView.classList.add('hidden');
    homeView.classList.remove('hidden');
    resetGame();
    setupDailyPuzzle(); // Refresh daily status
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
    
    // Calculate tile size
    const maxBoardWidth = Math.min(340, window.innerWidth - 44);
    const tileSize = Math.floor((maxBoardWidth - (gridSize - 1) * 3 - 12) / gridSize);
    
    // Setup board grid
    puzzleBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
    puzzleBoard.style.gridTemplateRows = `repeat(${gridSize}, ${tileSize}px)`;
    
    // Initialize tiles array (solved state)
    tiles = Array.from({ length: totalTiles }, (_, i) => i);
    emptyIndex = totalTiles - 1;
    
    // Preload and slice the image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        // Create tile images
        for (let i = 0; i < totalTiles; i++) {
            const canvas = document.createElement('canvas');
            canvas.width = tileSize * 2;
            canvas.height = tileSize * 2;
            const ctx = canvas.getContext('2d');
            
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const srcSize = img.width / gridSize;
            
            ctx.drawImage(
                img,
                col * srcSize, row * srcSize, srcSize, srcSize,
                0, 0, canvas.width, canvas.height
            );
            
            tileImages[i] = canvas.toDataURL('image/jpeg', 0.9);
        }
        
        // Shuffle and render
        shuffleTiles();
        renderBoard(tileSize);
    };
    img.src = currentPuzzle.image;
}

// Seeded random for consistent daily puzzles
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffleTiles() {
    const totalTiles = gridSize * gridSize;
    
    // Reset to solved state
    tiles = Array.from({ length: totalTiles }, (_, i) => i);
    emptyIndex = totalTiles - 1;
    
    // Use seeded shuffle for daily (same for everyone)
    let seed = shuffleSeed;
    const shuffleMoves = gridSize * gridSize * 25;
    
    for (let i = 0; i < shuffleMoves; i++) {
        const neighbors = getMovableNeighbors(emptyIndex);
        const randomIndex = Math.floor(seededRandom(seed + i) * neighbors.length);
        const randomNeighbor = neighbors[randomIndex];
        
        // Swap
        tiles[emptyIndex] = tiles[randomNeighbor];
        tiles[randomNeighbor] = totalTiles - 1;
        emptyIndex = randomNeighbor;
    }
    
    // Re-render if board exists
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
            img.alt = `Tile ${tileValue + 1}`;
            tile.appendChild(img);
            
            if (isAdjacentToEmpty(i)) {
                tile.classList.add('movable');
            }
            
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
    
    // Start timer on first move
    if (!gameStarted) {
        gameStarted = true;
        startTimer();
    }
    
    // Animate the slide
    const tile = puzzleBoard.children[position];
    const tileSize = tile.offsetWidth + 3;
    
    const posRow = Math.floor(position / gridSize);
    const posCol = position % gridSize;
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    
    const deltaX = (emptyCol - posCol) * tileSize;
    const deltaY = (emptyRow - posRow) * tileSize;
    
    tile.classList.add('sliding');
    tile.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    
    setTimeout(() => {
        // Swap in array
        tiles[emptyIndex] = tiles[position];
        tiles[position] = gridSize * gridSize - 1;
        emptyIndex = position;
        
        moves++;
        updateGameStats();
        
        const tileSize = tile.offsetWidth;
        renderBoard(tileSize);
        
        if (checkWin()) {
            setTimeout(puzzleComplete, 300);
        }
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
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
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
    
    // Update completion modal
    document.getElementById('completedImage').src = currentPuzzle.image;
    document.getElementById('finalTime').textContent = formatTime(seconds);
    document.getElementById('finalMoves').textContent = moves;
    
    // Show share section for daily
    if (isDaily) {
        document.getElementById('shareSection').classList.remove('hidden');
        document.getElementById('playAgainBtn').textContent = 'Back Home';
    } else {
        document.getElementById('shareSection').classList.add('hidden');
        document.getElementById('playAgainBtn').textContent = 'Play Again';
    }
    
    // Update stats
    if (isDaily) {
        const todayStr = getTodayString();
        
        // Check if this is a new day
        if (stats.lastPlayedDate !== todayStr) {
            // Check for streak
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (stats.lastPlayedDate === yesterday.toDateString()) {
                stats.currentStreak++;
            } else {
                stats.currentStreak = 1;
            }
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
    }
    
    // Render completed board
    renderCompletedBoard();
    
    // Show modal
    setTimeout(() => {
        completionModal.classList.remove('hidden');
    }, 500);
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

// ============ STATS ============
function loadStats() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        stats = { ...stats, ...JSON.parse(stored) };
    }
}

function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function showStats() {
    document.getElementById('statPlayed').textContent = stats.played;
    document.getElementById('statWon').textContent = stats.won;
    document.getElementById('statStreak').textContent = stats.currentStreak;
    document.getElementById('statBest').textContent = stats.bestStreak;
    
    // Averages
    if (stats.won > 0) {
        const avgMoves = Math.round(stats.totalMoves / stats.won);
        const avgTime = Math.round(stats.totalTime / stats.won);
        document.getElementById('statAvgMoves').textContent = avgMoves;
        document.getElementById('statAvgTime').textContent = formatTime(avgTime);
    } else {
        document.getElementById('statAvgMoves').textContent = '-';
        document.getElementById('statAvgTime').textContent = '-';
    }
    
    // Today's result
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
    const puzzleNum = getDailyPuzzleNumber();
    const rating = getPerformanceRating();
    
    const shareText = `🌸 PrettyFoto Puzzle #${puzzleNum}

${rating.emoji} ${rating.label}
⏱️ ${formatTime(stats.todayTime)}
👆 ${stats.todayMoves} moves
🔥 ${stats.currentStreak} day streak

Play at prettyfoto.com/puzzles`;
    
    if (navigator.share) {
        navigator.share({
            text: shareText
        }).catch(() => {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

function getPerformanceRating() {
    // Rate based on moves for 4x4 puzzle
    if (stats.todayMoves <= 50) return { emoji: '🏆', label: 'Perfect!' };
    if (stats.todayMoves <= 80) return { emoji: '⭐', label: 'Excellent!' };
    if (stats.todayMoves <= 120) return { emoji: '👍', label: 'Great!' };
    if (stats.todayMoves <= 180) return { emoji: '✅', label: 'Good!' };
    return { emoji: '🎉', label: 'Solved!' };
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const msg = document.getElementById('copiedMsg');
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 2000);
    });
}

// ============ HINT ============
function showHint() {
    hintModal.classList.remove('hidden');
}

// ============ WINDOW RESIZE ============
window.addEventListener('resize', () => {
    if (currentPuzzle && !gameArea.classList.contains('hidden') && tileImages.length > 0) {
        const maxBoardWidth = Math.min(340, window.innerWidth - 44);
        const tileSize = Math.floor((maxBoardWidth - (gridSize - 1) * 3 - 12) / gridSize);
        
        puzzleBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
        puzzleBoard.style.gridTemplateRows = `repeat(${gridSize}, ${tileSize}px)`;
        
        renderBoard(tileSize);
    }
});
