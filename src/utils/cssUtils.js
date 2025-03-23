const fs = require('fs');
const path = require('path');

// AI generated

// Cache for CSS content and parsed variables
const cssCache = new Map();
const varCache = new Map();

function getCssVar(varName) {
    
  // Return cached value if exists
  if (varCache.has(varName)) {
    return varCache.get(varName);
  }

  const cssFiles = [
    path.resolve(__dirname, '../css/custom.css'),
    path.resolve(__dirname, '../css/catppuccin.css')
  ];

  for (const cssPath of cssFiles) {
    try {
      let cssContent = cssCache.get(cssPath);

      if (!cssContent) {
        cssContent = fs.readFileSync(cssPath, 'utf8');
        cssCache.set(cssPath, cssContent);
      }

      const regex = new RegExp(`${varName}:\\s*([^;]+);`, 'g');
      let lastValue = null;
      let match;

      while ((match = regex.exec(cssContent)) !== null) {
        lastValue = match[1].replace(/!important/g, '').trim();
        
        if (lastValue.startsWith('var(')) {
          const nestedVar = lastValue.match(/var\((--[^)]+)\)/)[1];
          const resolvedValue = getCssVar(nestedVar);

          varCache.set(varName, resolvedValue);
          return resolvedValue;
        }
      }

      if (lastValue) {
        varCache.set(varName, lastValue);
        return lastValue;
      }

    } catch (err) {
      console.warn(`Warning: Could not read ${cssPath}`);
    }
  }

  throw new Error(`CSS variable ${varName} not found`);
}

module.exports = { getCssVar };