/**
 * Failed to minify the file using Terser v5.17.1. Serving the original version.
 * Original file: /npm/ember@1.1.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const { spawn } = require('child_process');
const [_node, _bin, ...args] = process.argv;

console.log(
  '===================================================================='
);
console.log('');
console.log(
  '  The `ember` node module is a placeholder, you may be looking for:'
);
console.log('');
console.log('  * `ember-cli` (the command line tool) ');
console.log('  * `ember-source` (the framework code) ');
console.log('');
console.log('  Visit https://emberjs.com/ for more details');
console.log('');
console.log(
  '===================================================================='
);


if (args.includes('--postinstall')) {
  return;
}

console.log('');
console.log(
  `  Forwarding request to ember-cli via \`npx ember-cli ${args.join(' ')}\``
);

spawn('npx', ['ember-cli', ...args], {
  stdio: 'inherit',
}).on('exit', code => process.exit(code));
