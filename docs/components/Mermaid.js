import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export default function Mermaid({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        mermaid.parse(chart); // 校验语法
        mermaid.init(undefined, containerRef.current);
      } catch (err) {
        console.error('Mermaid 渲染失败:', err);
      }
    }
  }, [chart]);

  return <div className="mermaid" ref={containerRef}>{chart}</div>;
}