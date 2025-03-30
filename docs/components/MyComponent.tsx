import { useState, useEffect } from 'react';
import { usePageData } from 'rspress/runtime';

const ReadingProgress = () => {
  // --------------------------------------------------------------------------
  // 关键点：所有 Hooks 必须放在条件判断之前，且顺序固定！
  // --------------------------------------------------------------------------
  const { page } = usePageData();
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // 初始化挂载状态
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 滚动监听逻辑（必须放在条件判断之前）
  useEffect(() => {
    // 如果条件满足，提前返回不执行逻辑
    if (page?.frontmatter?.hideProgress || !isMounted) {
      return;
    }

    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.max(0, window.scrollY);
      const progressValue = Math.min((scrolled / windowHeight) * 100, 100);

      if (windowHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress(progressValue);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, [page?.frontmatter?.hideProgress, isMounted]); // 添加依赖项

  // --------------------------------------------------------------------------
  // 条件判断必须放在所有 Hooks 之后！
  // --------------------------------------------------------------------------
  if (page?.frontmatter?.hideProgress || !isMounted) {
    return null;
  }

  // 渲染逻辑保持不变
  return (
    <>
      {/* 进度条 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: '#f0f0f0',
        zIndex: 9999
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#2563eb',
          transition: 'width 0.2s ease-out'
        }} />
      </div>

      {/* 圆形进度盘 */}
      <div style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 9999
      }}>
        <svg width="100" height="100">
          {/* 背景圆环 */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#eee"
            strokeWidth="8"
          />
          {/* 进度圆环 */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#007bff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${251.2}`} // 2πr (2 * 3.14 * 40)
            strokeDashoffset={`${251.2 * (1 - progress / 100)}`}
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
          {/* 进度文字 */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#007bff"
            fontSize="16"
            fontWeight="bold"
          >
            {Math.round(progress)}%
          </text>
        </svg>
      </div>
    </>
  );
};

// 全局布局组件
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ReadingProgress />
      {children} {/* 页面内容 */}
    </div>
  );
}