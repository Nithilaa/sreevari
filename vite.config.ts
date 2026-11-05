import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// GitHub Pages: the workflow sets VITE_BASE to "/<repo-name>/". Locally it falls back to "./" (works at any path).
export default defineConfig({ plugins: [react()], base: process.env.VITE_BASE || './' });
