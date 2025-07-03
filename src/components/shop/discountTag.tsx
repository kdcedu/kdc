'use client';

import { useEffect, useState } from 'react';
import { Tag } from 'antd';

const colors = ['#f5222d', '#ff4d4f', '#a8071a'];

const bestSellerColors = ['#52c41a', '#73d13d', '#389e0d'];

export default function DiscountTag({ discount }: { discount?: number }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tag className="absolute top-0 z-10" color={discount ? colors[colorIndex] : bestSellerColors[colorIndex]}>
      {discount ? `${discount}%` : 'Best seller'}
    </Tag>
  );
}
