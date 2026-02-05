/**
 * Edge-case tests for PrettyFoto Puzzles (run with: node test-edge-cases.js)
 * Tests solvability, daily puzzle index, and getThumbnailUrl.
 */

let passed = 0;
let failed = 0;

function ok(cond, name) {
  if (cond) { passed++; console.log('  ✓ ' + name); return; }
  failed++; console.log('  ✗ ' + name);
}

// ---------- Solvability (mirrors app.js logic) ----------
function countInversions(tiles, gridSize) {
  const totalTiles = gridSize * gridSize;
  const blank = totalTiles - 1;
  const arr = tiles.filter((t) => t !== blank);
  let inv = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) inv++;
    }
  }
  return inv;
}

function isSolvable(tiles, emptyIndex, gridSize) {
  const totalTiles = gridSize * gridSize;
  const inversions = countInversions(tiles, gridSize);
  const emptyRow = Math.floor(emptyIndex / gridSize);
  const emptyRowFromBottom = gridSize - 1 - emptyRow;
  return (inversions + emptyRowFromBottom) % 2 === 0;
}

function ensureSolvable(tiles, emptyIndex, gridSize) {
  const totalTiles = gridSize * gridSize;
  const blank = totalTiles - 1;
  const solvable = (t, e) => {
    const inv = countInversions(t, gridSize);
    const rowFromBottom = gridSize - 1 - Math.floor(e / gridSize);
    return (inv + rowFromBottom) % 2 === 0;
  };
  if (solvable(tiles, emptyIndex)) return;
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

console.log('\n--- Solvability (3×3) ---');
const EPOCH = new Date('2026-02-03').getTime();
const DAY_MS = 24 * 60 * 60 * 1000;

// Solved 3×3: blank at 8
let tiles3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
ok(isSolvable(tiles3, 8, 3), 'Solved 3×3 is solvable');

// One swap in 3×3 (unsolvable): swap 0 and 1
let unsolvable3 = [1, 0, 2, 3, 4, 5, 6, 7, 8];
ok(!isSolvable(unsolvable3, 8, 3), 'One-swap 3×3 is unsolvable');
ensureSolvable(unsolvable3, 8, 3);
ok(isSolvable(unsolvable3, 8, 3), 'After ensureSolvable, 3×3 is solvable');

console.log('\n--- Solvability (4×4) ---');
let tiles4 = Array.from({ length: 16 }, (_, i) => i);
ok(isSolvable(tiles4, 15, 4), 'Solved 4×4 is solvable');

// Unsolvable 4×4: one inversion (1,0) and blank at bottom row -> (1+0) odd
let unsolvable4 = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const empty4 = 15;
ok(!isSolvable(unsolvable4, empty4, 4), 'Unsolvable 4×4 (odd parity)');
ensureSolvable(unsolvable4, empty4, 4);
ok(isSolvable(unsolvable4, empty4, 4), 'After ensureSolvable, 4×4 is solvable');

// Blank in different row (still unsolvable before fix): e.g. inversions=1, blank row 0 from bottom = 3 -> 1+3=4 even -> solvable. So use a case that's odd.
// inversions=0, blank row from bottom=1 -> 0+1=1 odd -> unsolvable. So blank at row 1 from bottom = row 2 (0-indexed). emptyIndex 8 in 4x4 -> row 2. So tiles solved but empty at 8: [0,1,2,3,4,5,6,7,15,8,9,10,11,12,13,14]. Inversions: 15 vs 8,9,10,11,12,13,14 = 7. So 7 inversions. Row from bottom = 4-1-2 = 1. 7+1=8 even -> solvable. So we need odd. Swap two tiles so inversions change by 1: e.g. swap 0 and 1 -> [1,0,2,...] inversions 1. Blank at 8 -> row 2, from bottom 1. 1+1=2 even. Still even. So swap 0 and 2: [2,1,0,3,...] inversions: 2>1, 2>0, 1>0 = 3. 3+1=4 even. So swap to get inversions even and row from bottom odd: inversions=0, row from bottom=1 -> 1 odd. So blank at index 8 (row 2). So [0,1,2,3,4,5,6,7,15,8,9,10,11,12,13,14]. That's 7 inversions (15 with 8..14), 7+1=8 even. So unsolvable: inversions=1, row from bottom=1 -> 1+1=2 even. We need (inv + rowFromBottom) odd. So inv=0, rowFromBottom=1 gives 1 odd. So blank at row 2 (index 8). Solved except blank at 8: one inversion? If we have [1,0,2,3,4,5,6,7,15,8,9,10,11,12,13,14]: inversions for non-blank: 1>0 is 1. Row from bottom = 1. 1+1=2 even -> solvable. So [2,0,1,3,...] with blank at 8: inversions 2>0,2>1,0>1 = 2. 2+1=3 odd -> unsolvable. Good.
let unsolvable4b = [2, 0, 1, 3, 4, 5, 6, 7, 15, 8, 9, 10, 11, 12, 13, 14];
const empty4b = 8;
ok(!isSolvable(unsolvable4b, empty4b, 4), 'Another unsolvable 4×4');
ensureSolvable(unsolvable4b, empty4b, 4);
ok(isSolvable(unsolvable4b, empty4b, 4), 'After ensureSolvable, 4×4 (b) is solvable');

console.log('\n--- Solvability (5×5) ---');
const totalTiles5 = 25;
let tiles5 = Array.from({ length: totalTiles5 }, (_, i) => i);
ok(isSolvable(tiles5, 24, 5), 'Solved 5×5 is solvable');

// Unsolvable 5×5: one inversion, blank at bottom row
let unsolvable5 = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const empty5 = 24;
ok(!isSolvable(unsolvable5, empty5, 5), 'Unsolvable 5×5 (odd parity)');
ensureSolvable(unsolvable5, empty5, 5);
ok(isSolvable(unsolvable5, empty5, 5), 'After ensureSolvable, 5×5 is solvable');

console.log('\n--- 5×5 on small screens (tile size) ---');
function getTileSize(innerWidth, gridSize) {
  const maxBoardWidth = Math.min(340, innerWidth - 44);
  return Math.floor((maxBoardWidth - (gridSize - 1) * 3 - 12) / gridSize);
}
const tile5_320 = getTileSize(320, 5);
const tile5_360 = getTileSize(360, 5);
const tile5_375 = getTileSize(375, 5);
ok(tile5_320 >= 40, '5×5 tile size ≥40px at 320px width (small phone)');
ok(tile5_360 >= 50, '5×5 tile size ≥50px at 360px width');
ok(tile5_375 >= 50, '5×5 tile size ≥50px at 375px width');
ok(getTileSize(280, 5) >= 36, '5×5 tile size ≥36px at 280px (very small)');
const boardWidth5 = (n) => {
  const maxBoardWidth = Math.min(340, n - 44);
  const tileSize = Math.floor((maxBoardWidth - 12 - (5 - 1) * 3) / 5);
  return tileSize * 5 + (5 - 1) * 3 + 12;
};
ok(boardWidth5(320) <= 320, '5×5 board width fits within 320px viewport');

console.log('\n--- Daily puzzle index ---');
function getDailyPuzzleNumberFromTs(epoch, dayMs, timestamp) {
  return Math.floor((timestamp - epoch) / dayMs) + 1;
}
ok(getDailyPuzzleNumberFromTs(EPOCH, DAY_MS, EPOCH) === 1, 'Epoch timestamp is puzzle #1');
ok(getDailyPuzzleNumberFromTs(EPOCH, DAY_MS, EPOCH + DAY_MS) === 2, 'Epoch+1 day is puzzle #2');
ok(getDailyPuzzleNumberFromTs(EPOCH, DAY_MS, EPOCH - DAY_MS) <= 0, 'One day before epoch gives ≤0');
const idx = (p) => (p - 1) % 16;
ok(idx(1) === 0 && idx(16) === 15 && idx(17) === 0, 'Gallery index wraps at 16');

console.log('\n--- getThumbnailUrl ---');
function getThumbnailUrl(fullUrl, width = 280) {
  if (!fullUrl || typeof fullUrl !== 'string') return fullUrl;
  let u = fullUrl
    .replace(/w_\d+,h_\d+/, `w_${width},h_${width}`)
    .replace(/q_auto:best/, 'q_auto:good');
  if (u.includes('/image/upload/') && !u.includes('f_auto')) u = u.replace('/image/upload/', '/image/upload/f_auto,');
  return u;
}
ok(getThumbnailUrl(null) === null, 'getThumbnailUrl(null) returns null');
ok(getThumbnailUrl('') === '', 'getThumbnailUrl("") returns ""');
ok(getThumbnailUrl(123) === 123, 'getThumbnailUrl(non-string) returns as-is');
const sample = 'https://images.discerningassets.com/image/upload/c_fill,w_600,h_600,q_auto:best/v123/foo.jpg';
ok(getThumbnailUrl(sample).includes('w_280,h_280'), 'getThumbnailUrl uses default width 280');
ok(getThumbnailUrl(sample).includes('q_auto:good'), 'getThumbnailUrl replaces q_auto:best');
ok(getThumbnailUrl(sample, 400).includes('w_400,h_400'), 'getThumbnailUrl(_, 400) uses 400');
ok(getThumbnailUrl(sample).includes('f_auto'), 'getThumbnailUrl adds f_auto');

console.log('\n--- Streak logic (mirrors app.js puzzleComplete daily path) ---');
const defaultStats = () => ({
  played: 0, won: 0, currentStreak: 0, bestStreak: 0, totalMoves: 0, totalTime: 0,
  lastPlayedDate: null, todayCompleted: false, todayMoves: 0, todayTime: 0,
  dailyPlays: 0, galleryPlays: 0
});
function applyDailyCompletion(stats, todayStr, yesterdayStr) {
  if (stats.lastPlayedDate !== todayStr) {
    stats.currentStreak = stats.lastPlayedDate === yesterdayStr ? stats.currentStreak + 1 : 1;
  }
  stats.played++;
  stats.won++;
  stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
  stats.lastPlayedDate = todayStr;
  stats.todayCompleted = true;
  stats.dailyPlays = (stats.dailyPlays || 0) + 1;
}
const today = new Date().toDateString();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayStr = yesterday.toDateString();

let s = defaultStats();
applyDailyCompletion(s, today, yesterdayStr);
ok(s.currentStreak === 1 && s.bestStreak === 1, 'First daily win: streak 1');

s = defaultStats();
s.lastPlayedDate = yesterdayStr;
s.currentStreak = 5;
applyDailyCompletion(s, today, yesterdayStr);
ok(s.currentStreak === 6 && s.bestStreak === 6, 'Consecutive day: streak increments');

s = defaultStats();
s.lastPlayedDate = 'Mon Jan 01 2024';
s.currentStreak = 10;
s.bestStreak = 10;
applyDailyCompletion(s, today, yesterdayStr);
ok(s.currentStreak === 1 && s.bestStreak === 10, 'Gap day: streak resets to 1, best unchanged');

s = defaultStats();
s.lastPlayedDate = today;
s.currentStreak = 3;
s.todayCompleted = true;
applyDailyCompletion(s, today, yesterdayStr);
ok(s.currentStreak === 3, 'Same day second completion: streak unchanged (lastPlayedDate === today)');

s = defaultStats();
s.lastPlayedDate = yesterdayStr;
s.currentStreak = 998;
s.bestStreak = 998;
applyDailyCompletion(s, today, yesterdayStr);
ok(s.currentStreak === 999 && s.bestStreak === 999, 'Long streak: 998 -> 999');

console.log('\n--- Stats persistence (round-trip & defaults) ---');
const STORAGE_KEY = 'prettyfoto_puzzle';
const mockStore = {};
function mockLoadStats() {
  const stored = mockStore[STORAGE_KEY];
  const stats = defaultStats();
  if (stored) {
    const loaded = JSON.parse(stored);
    Object.assign(stats, loaded);
    stats.dailyFirstCount = stats.dailyFirstCount || 0;
    stats.galleryFirstCount = stats.galleryFirstCount || 0;
    stats.dailyPlays = stats.dailyPlays || 0;
    stats.galleryPlays = stats.galleryPlays || 0;
  }
  return stats;
}
function mockSaveStats(stats) {
  mockStore[STORAGE_KEY] = JSON.stringify(stats);
}

let stats1 = defaultStats();
stats1.played = 10;
stats1.won = 8;
stats1.currentStreak = 3;
stats1.bestStreak = 5;
stats1.dailyPlays = 4;
stats1.galleryPlays = 4;
mockSaveStats(stats1);
const loaded1 = mockLoadStats();
ok(loaded1.played === 10 && loaded1.bestStreak === 5 && loaded1.currentStreak === 3, 'Save/load round-trip preserves played, streak, best');

mockStore[STORAGE_KEY] = JSON.stringify({ played: 1, won: 1 });
const partial = mockLoadStats();
ok(partial.played === 1 && partial.won === 1 && partial.currentStreak === 0 && partial.dailyPlays === 0, 'Partial stored object: missing fields default to 0');

mockStore[STORAGE_KEY] = undefined;
const empty = mockLoadStats();
ok(empty.played === 0 && empty.lastPlayedDate === null, 'No storage: defaults only');

mockStore[STORAGE_KEY] = JSON.stringify({ played: 1000000, bestStreak: 9999, currentStreak: 100 });
const big = mockLoadStats();
ok(big.played === 1000000 && big.bestStreak === 9999 && big.currentStreak === 100, 'Large numbers persist');

try {
  mockStore[STORAGE_KEY] = 'not json';
  mockLoadStats();
  failed++;
  console.log('  ✗ Invalid JSON should not throw (app uses try/catch or defaults)');
} catch (e) {
  passed++;
  console.log('  ✓ Invalid JSON throws on parse (caller should try/catch)');
}

console.log('\n--- Summary ---');
console.log('Passed: ' + passed + ', Failed: ' + failed);
process.exit(failed > 0 ? 1 : 0);
