'use client';

import { useEffect, useState } from 'react';
import H5PViewer from '@/components/h5p/h5pViewer';
import { useParams } from 'next/navigation';

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

export default function H5PDisplayPage() {
  const params = useParams();
  const h5pContentId = params.h5pId; 

  const [h5pContentHtml, setH5pContentHtml] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!h5pContentId) {
      setLoading(false);
      setError("Không có nội dung H5P được cung cấp.");
      return;
    }

    const h5pEmbedBaseUrl = `${WP_API_URL}wp-admin/admin-ajax.php?action=h5p_embed&id=`;
    const h5pResizerScriptUrl = `${WP_API_URL}wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js`;

    const generatedHtml = `
      <iframe src="${h5pEmbedBaseUrl}${h5pContentId}" width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" title="H5P Content"></iframe>
      <script src="${h5pResizerScriptUrl}" charset="UTF-8"></script>
    `;

    setH5pContentHtml(generatedHtml);
    setLoading(false);
  }, [h5pContentId]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <p>Đang tải nội dung H5P...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100 text-red-500">
        <p>Lỗi khi tải nội dung H5P: {error}</p>
      </div>
    );
  }

  return <H5PViewer h5pContentHtml={h5pContentHtml} />;
}
