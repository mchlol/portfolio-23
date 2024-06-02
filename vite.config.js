import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VITE_REACT_APP_PROJECTID__: `"${process.env.VITE_REACT_APP_PROJECTID}"`
  },
  plugins: [react()],
})
