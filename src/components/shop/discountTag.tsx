"use client";

import { useEffect, useState } from "react";
import { Image, Tag } from "antd";

const colors = ["#f5222d", "#ff4d4f", "#a8071a"];

const bestSellerColors = ["#52c41a", "#73d13d", "#389e0d"];

export default function DiscountTag({ discount }: { discount?: number }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const hasDiscount = discount && discount > 0;

  return (
    <div className="flex w-full justify-between absolute top-0 z-10">
      {hasDiscount ? (
        <Image
          src="/images/k8/sale.gif"
          preview={false}
          alt="sale"
          width={35}
          className="absolute top-0 left-0 z-10"
        />
      ) : (
        <Image
          src="/images/k8/hot.gif"
          preview={false}
          alt="hot"
          width={35}
          className="absolute top-0 left-0 z-10"
        />
      )}
      {hasDiscount && (
        <Tag
          color={discount ? colors[colorIndex] : bestSellerColors[colorIndex]}
        >
          {discount}%
        </Tag>
      )}
    </div>
  );
}
