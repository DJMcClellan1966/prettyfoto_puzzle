# Security Issues & Fixes

## 1. Inline Event Handlers (XSS Risk)

**Issue**: Using `onclick` attributes in dynamically generated HTML
**Location**: app.js lines 1220, 1224, 1225

**Risk**: Potential XSS vulnerability if puzzle data contains malicious code

**Current Code**:
```javascript
<img src="${getThumbnailUrl(puzzle.image)}" alt="${puzzle.title}" ... onclick="selectPuzzle(${puzzle.id})">
<button ... onclick="event.stopPropagation(); showStoryModal(puzzles.find(p=>p.id===${puzzle.id}))">
```

**Fix**: Use event delegation instead of inline handlers

## 2. unscanitized innerHTML Usage

**Issue**: Direct innerHTML assignment without sanitization
**Location**: app.js line 502

**Risk**: Potential XSS if tag data contains HTML

**Current Code**:
```javascript
document.getElementById('storyTags').innerHTML = story.tags
    .map(tag => `<span class="story-tag">${tag}</span>`).join('');
```

**Fix**: Use textContent or sanitize HTML

## 3. Alert() Usage in Production

**Issue**: Using alert() for error messages
**Location**: app.js (email subscription error handling)

**Problem**: Poor user experience, blocks UI

**Fix**: Use toast notifications instead