'use client';

import React from 'react';

/**
 * Component để hiển thị nội dung H5P.
 * Nhận một chuỗi HTML chứa iframe và script H5P.
 *
 * @param {object} props - Các props của component.
 * @param {string} props.h5pContentHtml - Chuỗi HTML của nội dung H5P (bao gồm iframe và script resizer).
 */
export default function H5PViewer({ h5pContentHtml }) {
  if (!h5pContentHtml) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        Đã có lỗi xảy ra, vui lòng thử lại hoặc báo lại cho đội ngũ phát triển
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl h-[90vh] bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: h5pContentHtml }}
        />
      </div>
    </div>
  );
}
