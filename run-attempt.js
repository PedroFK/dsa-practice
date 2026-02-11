const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const lang = process.argv[2]; // 'ts' ou 'php'
const num = process.argv[3];  // '1', '2', etc.

if (!lang || !num) {
  console.error('Usage: npm run run-file -- <language> <number>');
  console.error('Example: npm run run-file -- ts 2');
  process.exit(1);
}

const dir = path.join(__dirname, 'code', 'attempts', lang);
if (!fs.existsSync(dir)) {
  console.error('Folder not found:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir);
const prefix = num + '-';
const file = files.find((f) => f.startsWith(prefix));

if (!file) {
  console.error('No file in', dir, 'starting with', prefix);
  process.exit(1);
}

const fullPath = path.join(dir, file);

if (lang === 'ts') {
  execSync(`npx ts-node "${fullPath}"`, { stdio: 'inherit' });
} else if (lang === 'php') {
  execSync(`php "${fullPath}"`, { stdio: 'inherit' });
} else {
  console.error('Unsupported language:', lang, '(use ts or php)');
  process.exit(1);
}
