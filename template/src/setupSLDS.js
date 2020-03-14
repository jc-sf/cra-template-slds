const shell = require('shelljs');

// Copy SLDS assets to public directory
console.log(`Start setting up SLDS assets`);

// // Salesforce Lightning CSS
shell.cp(
  '-f',
  'node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css',
  'public/'
);

// //Salesforce Lightning Fonts
shell.rm('-rf', 'public/fonts');
shell.cp('-r', 'node_modules/@salesforce-ux/design-system/assets/fonts', 'public/');

// //Salesforce Lightning Icon SVGs
shell.rm('-rf', 'public/assets');
shell.mkdir('public/assets');
shell.cp('-r', 'node_modules/@salesforce-ux/design-system/assets/icons', 'public/assets');

// //Salesforce Lightning Images / Illustrations
shell.cp('-r', 'node_modules/@salesforce/design-system-react/assets/images', 'public/assets');
