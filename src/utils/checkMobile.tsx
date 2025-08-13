export const getResponsiveQrBoxSize = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 0;
  if (width >= 1024) return { width: 300, height: 300 };
  if (width >= 768) return { width: 250, height: 250 };
  return { width: 200, height: 200 };
};
