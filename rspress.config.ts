import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';
import path from 'path';
export default defineConfig({

  // 文档根目录
  root: 'docs',
  base: '/my-rspress-app/', // 根据仓库名填写
  themeConfig: {
    outlineTitle: '目录',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/jellyjellybae',
      },
    ],
  },
  globalUIComponents: [path.join(__dirname, 'docs/components/MyComponent.tsx')],
  plugins: [mermaid()],
});