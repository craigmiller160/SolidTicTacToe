import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
    root: path.join(process.cwd(), 'src'),
    plugins: [solidPlugin()],
    build: {
        target: 'esnext'
    }
})