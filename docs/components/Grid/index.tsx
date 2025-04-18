import React from 'react';

// 模拟数据接口
interface CardItem {
  id: number;
  title: string;
  content: string;
  height: 'short' | 'medium' | 'tall'; // 模拟不同高度
}

// 卡片组件
const Card = ({ item }: { item: CardItem }) => {
  return (
    <div className="mb-4 break-inside-avoid group">
      <div className={`
        bg-white rounded-xl shadow-lg p-6
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        ${item.height === 'short' ? 'h-48' : 
          item.height === 'medium' ? 'h-64' : 'h-80'}
      `}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {item.content}
        </p>
      </div>
    </div>
  );
};

// 瀑布流容器组件
const MasonryGrid = ({ items }: { items: CardItem[] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 响应式列数 */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// 使用示例
const Grid = () => {
  // 示例数据
  const cards: CardItem[] = [
    {
      id: 1,
      title: '卡片标题 1',
      content: '为什么不说呢？“我说不出口”...这是示例卡片内容，用于演示不同长度的文本展示效果。',
      height: 'short'
    },
    {
      id: 2,
      title: '较长标题的卡片',
      content: '这个卡片包含更多内容。Tailwind CSS 让我们可以快速构建现代网页设计，无需编写自定义 CSS。配合 React 组件化开发，能够高效实现复杂的布局需求。瀑布流布局的关键在于 columns 属性和 break-inside-avoid 的组合使用。',
      height: 'tall'
    },
    // 添加更多卡片...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MasonryGrid items={cards} />
    </div>
  );
};

export default Grid;