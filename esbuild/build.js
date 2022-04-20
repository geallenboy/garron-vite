const { build } = require('esbuild');
const httpImport = require('./plugins/html-import-plugin.js');
const html = require('./plugins/html-plugin.js');
async function runBuild() {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ['./src/index.jsx'],
    entryNames: '[dir]/[name]-[hash]',
    outdir: 'dist',
    bundle: true,
    format: 'esm',
    splitting: true,
    sourcemap: true,
    metafile: true,
    chunkNames: '[name]-[hash]',
    assetNames: 'assets/[name]-[hash]',
    plugins: [httpImport(), html()],
  }).then(() => {
    console.log('🚀 Build Finished!');
  });
}

runBuild();
