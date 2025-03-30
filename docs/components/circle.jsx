import { useState, useEffect } from 'react';

const CircleProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // 修复1：增加安全计算逻辑
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.max(0, window.scrollY); // 确保不出现负值
      
      // 修复2：处理不可滚动的情况
      if (windowHeight <= 0) {
        setProgress(0);
        return;
      }

      // 修复3：限制数值范围
      let calculated = Math.min((scrolled / windowHeight) * 100, 100);
      calculated = Math.max(0, calculated);  // 双重保险
      
      setProgress(calculated);
    };

    // 修复4：初始计算
    updateProgress();
    
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 9999 }}>
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
          strokeDasharray={251.2} // 2πr (2 * 3.14 * 40)
          strokeDashoffset={251.2 * (1 - Math.max(0, progress) / 100)} // 修复5
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
          {Math.max(0, Math.round(progress))}% {/* 修复6 */}
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;