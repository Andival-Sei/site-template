import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
	},
	// Добавьте эти настройки для сервера
  server: {
    host: '0.0.0.0', // Позволяет подключаться с любого IP
    port: 5173      // Порт (можно оставить по умолчанию)
  },
  css: {
    preprocessorOptions: {
      scss: {
        // настройки SCSS
      }
    }
  },
  plugins: [
    // Копирование статических файлов
    viteStaticCopy({
      targets: [
        {
          src: 'src/**/*.html',
          dest: './'
        },
        {
          src: 'src/fonts/**/*',
          dest: './fonts/'
        },
        {
          // Просто копирование изображений без оптимизации
          src: 'src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}',
          dest: './images/'
        },
        {
          // Копирование видео файлов
          src: 'src/videos/**/*.{mp4,webm,ogg}',
          dest: './videos/'
        }
      ]
    })
  ],
  publicDir: 'public',
});