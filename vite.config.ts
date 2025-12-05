import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // VercelやNetlifyで公開する場合は '/' に設定
  // GitHub Pagesで公開する場合は '/my-portfolio/' に変更してください
  base: '/',
  assetsInclude: ['**/*.md'],
})

