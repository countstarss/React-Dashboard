import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*
  TODO: @导入的设置
  MARK: - @导入的设置
  */
  resolve:{
    alias: [{find:'@', replacement: path.resolve(__dirname,"src")}]
  }
})
