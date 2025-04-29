import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      exposes: {
        './fields': './src/components/fields/index.js',
      },
      remotes: {
        remoteOne: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand", "@tanstack/react-query"],
      // shared: {
      //   react: { singleton: true, requiredVersion: '^19.0.0' },
      //   'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
      //   'react-router-dom':  { singleton: true, requiredVersion: '^6.4.0' },
      //   zustand:   { singleton: true, eager: true, requiredVersion: '^5.0.3' },
      //   '@tanstack/react-query': { singleton: true, eager: true, requiredVersion: '^5.68.0' },
        
      // },
    }),


  ],
  
  build: {
    modulePreload: false,
    target: "esnext",
    // minify: false,
    cssCodeSplit: false,
  }
})
