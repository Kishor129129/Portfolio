// Simple build script for performance optimization
const fs = require('fs');
const path = require('path');

// Minify CSS
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
    .replace(/,\s+/g, ',') // Remove spaces after commas
    .replace(/:\s+/g, ':') // Remove spaces after colons
    .replace(/{\s+/g, '{') // Remove spaces after opening braces
    .replace(/}\s+/g, '}') // Remove spaces after closing braces
    .trim();
}

// Minify JavaScript
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
    .replace(/,\s+/g, ',') // Remove spaces after commas
    .replace(/:\s+/g, ':') // Remove spaces after colons
    .replace(/{\s+/g, '{') // Remove spaces after opening braces
    .replace(/}\s+/g, '}') // Remove spaces after closing braces
    .trim();
}

// Create build directory
const buildDir = path.join(__dirname, 'dist');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Minify CSS
const cssPath = path.join(__dirname, 'assets', 'css', 'style.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const minifiedCSS = minifyCSS(cssContent);
fs.writeFileSync(path.join(buildDir, 'style.min.css'), minifiedCSS);

// Minify JavaScript
const jsPath = path.join(__dirname, 'assets', 'js', 'script.js');
const jsContent = fs.readFileSync(jsPath, 'utf8');
const minifiedJS = minifyJS(jsContent);
fs.writeFileSync(path.join(buildDir, 'script.min.js'), minifiedJS);

// Copy HTML with minified references
const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');
htmlContent = htmlContent
  .replace('assets/css/style.css', 'style.min.css')
  .replace('assets/js/script.js', 'script.min.js');

fs.writeFileSync(path.join(buildDir, 'index.html'), htmlContent);

// Copy images and other assets
const assetsToCopy = [
  'WhatsApp Image 2025-10-13 at 5.56.31 PM.jpeg',
  'datawise.jpeg',
  'retailrevenue.jpeg',
  'energydemand.jpeg',
  'agentflow.jpeg',
  'guthubmcp.jpeg',
  'sw.js'
];

assetsToCopy.forEach(asset => {
  const srcPath = path.join(__dirname, asset);
  const destPath = path.join(buildDir, asset);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Copy assets directory
const assetsDir = path.join(__dirname, 'assets');
const destAssetsDir = path.join(buildDir, 'assets');
if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, destAssetsDir, { recursive: true });
}

console.log('Build completed successfully!');
console.log('Minified files created in dist/ directory');
console.log('CSS: style.min.css');
console.log('JS: script.min.js');
console.log('HTML: index.html (with minified references)');
