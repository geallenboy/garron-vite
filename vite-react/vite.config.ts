import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import inspect from 'vite-plugin-inspect';
// import testHooks from './plugins/test-hooks-plugin';
// import virtual from './plugins/virtual-module'
// import svgr from './plugins/svgr'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // inspect(),
    react(),
    // testHooks(),
    // virtual(),
    // svgr({ defaultExport: 'component' }),
    visualizer({
      open:true
    })
  ],
  build: {
    minify:'esbuild',
    target:'modules'
  }
})
