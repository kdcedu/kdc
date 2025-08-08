export const getResponsiveQrBoxSize = () => {
  const width = window.innerWidth;

  if (width < 640) return { width: 200, height: 200 }; // Mobile
  if (width < 1024) return { width: 250, height: 250 }; // Tablet
  return { width: 300, height: 300 }; // Laptop/Desktop
};
