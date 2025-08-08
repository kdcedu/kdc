"use client";

import BackButton from "@/components/backButton";

const h5pContentHtml = `
  <iframe src="https://wp.dongtrantd.io.vn/wp-admin/admin-ajax.php?action=h5p_embed&id=3" width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" title="K1_THS01"></iframe>
  <script src="https://wp.dongtrantd.io.vn/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>
`;

export default function HDS01Page() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center p-4">
      <BackButton />
      <div className="w-full max-w-7xl h-[90vh] bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: h5pContentHtml }}
        />
      </div>
    </div>
  );
}
