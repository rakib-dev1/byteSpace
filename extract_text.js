const fs = require('fs');
const svg = fs.readFileSync('design/Home.svg', 'utf-8');

// Match <text> and <tspan> content or <text ...>...</text> loosely
const matches = [...svg.matchAll(/<text[^>]*>(.*?)<\/text>/gi)];
const textNodes = matches.map(m => m[1].replace(/<[^>]*>/g, '').trim()).filter(t => t.length > 0);

console.log(textNodes.slice(0, 100).join('\n'));
