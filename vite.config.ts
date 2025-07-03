import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
// 代码压缩
// import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    // viteCompression({
    //   // 压缩代码
    //   verbose: true, // 是否在控制台输出压缩结果，默认为true
    //   disable: false, // 是否禁用压缩，默认为false
    //   threshold: 10240, // 文件大小超过10240字节（10KB）时才进行压缩
    //   algorithm: 'gzip', // 压缩算法，可选['gzip', 'brotliCompress', 'deflate', 'deflateRaw']
    //   ext: '.gz', // 压缩文件的扩展名
    //   compressionOptions: {}, // 压缩算法的参数
    //   deleteOriginFile: false, // 压缩后是否删除源文件
    // }),
    visualizer({
      gzipSize: true, // 显示各文件在经过 gzip 压缩后的大小
      brotliSize: true, // 显示各文件在经过 brotli 压缩后的
      open: false,
      filename: 'visualizer.html', // 生成的报告文件名称
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd'],
          typescript: ['typescript'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
