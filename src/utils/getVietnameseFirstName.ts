export function getVietnameseFirstName(fullName: string): string {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/); // tách theo khoảng trắng
  return parts[parts.length - 1]; // phần cuối là tên
}
