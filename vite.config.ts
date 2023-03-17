import { resolve } from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), tsconfigPaths()],
  resolve: {
    preserveSymlinks: true,
  },
  // just in case your dealing with libraries:
  /* build: {
    lib: {
      entry: [
        resolve("src", "index.tsx")
      ],
      name: "home",
      formats: ["es"],
      fileName: (format, entryName) => {
        console.log(entryName)
        return `${entryName}.js`
      }
    },
    rollupOptions: {
      output: {
        globals: {
          "react-router-dom": "react-router-dom",
          "react-redux": "react-redux",
          "react-query": "react-query",
          "redux": "redux",
          "react": "react",
          "react-dom": "react-dom",
        }
      },
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-redux",
        "react-query",
        "redux",
      ]
    }
  } */
})
