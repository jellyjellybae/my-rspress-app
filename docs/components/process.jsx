import { useState, useEffect } from 'react';


export default function ReadingProgress(){
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // 计算滚动进度
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setProgress(progress > 100 ? 100 : progress);
    };

    // 添加滚动监听
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div>
      {/* 顶部进度条 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: '#eee',
        zIndex: 9999
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#007bff',
          transition: 'width 0.3s ease'
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
    </div>
  );
}