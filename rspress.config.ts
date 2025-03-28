import { defineConfig } from 'rspress/config';
import path from 'path';
export default defineConfig({
  // 文档根目录
  root: 'docs',
  base: '/my-rspress-app/', // 根据仓库名填写
  themeConfig: {
    // 添加布局配置
    
  },
  globalUIComponents: [path.join(__dirname, 'docs/components/MyComponent.tsx')],
});