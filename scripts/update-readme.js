const fs = require('fs');
const path = require('path');

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getAllDailyEntries(dirPath, entries = []) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules' && item.name !== 'scripts') {
      getAllDailyEntries(fullPath, entries);
    } else if (item.isFile() && item.name === 'progress.json') {
      const folderPath = path.dirname(fullPath);
      const relativePath = folderPath.replace(process.cwd(), '').replace(/\\/g, '/').replace(/^\//, '');
      const parts = relativePath.split('/');

      if (parts.length >= 3) {
        const [year, monthStr, day] = parts;
        try {
          const progressData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
          entries.push({
            year: parseInt(year),
            monthStr,
            day: parseInt(day),
            date: new Date(`${monthStr} ${day}, ${year}`),
            path: relativePath,
            title: progressData.title || progressData.challenge || 'FreeCodeCamp Challenge',
            url: progressData.url || progressData.link || 'https://www.freecodecamp.org/learn/',
            fccSource: 'freeCodeCamp'
          });
        } catch (err) {
          console.error(`Error reading ${fullPath}:`, err);
        }
      }
    }
  }
  return entries;
}

const challenges = getAllDailyEntries(process.cwd());

// Sort chronologically ascending for streak calculation
challenges.sort((a, b) => a.date - b.date);

// Calculate streaks
let currentStreak = 0;
let longestStreak = 0;
let prevDate = null;

challenges.forEach(c => {
  if (!prevDate) {
    currentStreak = 1;
  } else {
    const diffDays = Math.round((c.date - prevDate) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      currentStreak += 1;
    } else if (diffDays > 1) {
      currentStreak = 1;
    }
  }
  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }
  prevDate = c.date;
});

// Group by Month for current year (2026)
const currentYear = 2026;
const monthlyCounts = Array(12).fill(0);
let thisMonthCount = 0;

challenges.forEach(c => {
  if (c.year === currentYear) {
    const mIndex = c.date.getMonth();
    monthlyCounts[mIndex] += 1;
    
    const now = new Date();
    if (mIndex === now.getMonth()) {
      thisMonthCount += 1;
    }
  }
});

// Get latest challenge
const latestChallenge = challenges[challenges.length - 1];

// Build Markdown Output
let markdown = `# 🚀 Daily Coding Challenges

> My daily journey to improve problem-solving, algorithms, and JavaScript skills using **freeCodeCamp** challenges.

[![Daily Coding](https://img.shields.io/badge/Daily-Coding%20Challenge-blue)](#)
[![JavaScript](https://img.shields.io/badge/Primary%20Language-JavaScript-yellow)](#)
[![Source](https://img.shields.io/badge/Platform-freeCodeCamp-green)](https://www.freecodecamp.org/)
[![Status](https://img.shields.io/badge/Status-In%20Progress-success)](#)

---

## 📊 Progress Dashboard

| Metric | Progress |
|---|---:|
| 🏆 Total Challenges | **${challenges.length}** |
| 🔥 Current Streak | **${currentStreak} days** |
| 🏅 Longest Streak | **${longestStreak} days** |
| 📅 This Month | **${thisMonthCount}** |
| 💻 Primary Language | **JavaScript** |

> Dashboard statistics update automatically as daily challenges are pushed.

---

`;

if (latestChallenge) {
  markdown += `## 📌 Latest Solved Challenge

- **Challenge:** [${latestChallenge.title}](${latestChallenge.url})
- **Platform:** [freeCodeCamp](https://www.freecodecamp.org/)
- **Solution:** [View Code](./${latestChallenge.path}/solution.js)
- **Date:** ${latestChallenge.year}-${latestChallenge.monthStr}-${latestChallenge.day}

---

`;
}

markdown += `## 📈 Coding Progress

### ${currentYear}

| Month | Challenges |
|---|---:|
`;

MONTH_NAMES.forEach((m, idx) => {
  const count = monthlyCounts[idx];
  if (count > 0) {
    markdown += `| **${m}** | **${count}** |\n`;
  } else {
    markdown += `| ${m} | ${count} |\n`;
  }
});

markdown += `
---

## 🔥 Coding Streak

\`\`\`text
Current Streak : 🔥 ${currentStreak} days
Longest Streak : 🏆 ${longestStreak} days
\`\`\`
`;

fs.writeFileSync('README.md', markdown);
console.log('README.md dynamically generated and saved!');