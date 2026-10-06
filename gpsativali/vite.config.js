import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'images/logo.png'
      ],

      manifest: {
        name: 'ग्रामपंचायत सातिवली',
        short_name: 'सातिवली GP',

        description:
          'ग्रामपंचायत सातिवली - तालुका पालघर | जिल्हा पालघर',

        theme_color: '#0b3d91',
        background_color: '#ffffff',

        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '/images/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],

  server: {
    hmr: {
      overlay: false
    }
  }
})