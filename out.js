// create out directory for static Chrome Extension

const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('out/**/*.html');
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const modifiedContent = content.replace(/\/_next/g, './next');
  fs.writeFileSync(file, modifiedContent, 'utf-8');
});

const sourcePath = 'out/_next';
const destinationPath = 'out/next';

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } else {
    console.log('Renamed "_next" directory to "next" successfully.');
  }
});

// Copy background.js to out/scripts
const backgroundSrc = path.join(__dirname, 'scripts', 'background.js');
const backgroundDest = path.join(__dirname, 'out', 'scripts', 'background.js');

fs.mkdirSync(path.join(__dirname, 'out', 'scripts'), { recursive: true });
fs.copyFileSync(backgroundSrc, backgroundDest);
console.log('Copied background.js to out/scripts successfully.');

// Copy contentScript.js to out/scripts
const contentScriptSrc = path.join(__dirname, 'scripts', 'contentScript.js');
const contentScriptDest = path.join(__dirname, 'out', 'scripts', 'contentScript.js');

fs.copyFileSync(contentScriptSrc, contentScriptDest);
console.log('Copied contentScript.js to out/scripts successfully.');