import React, { useRef } from "react";

interface YoutubeEmbedProps {
  link: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ link, title = "YouTube video" }) => {
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  return (
    <div className="aspect-video w-full">
        {link.includes("youtube") ? (
            <iframe
                ref={videoRef}
                className="w-full h-full overflow-hidden"
                src={`${link}&enablejsapi=1`}
                title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ) : (
            <video
                className="w-full h-full overflow-hidden"
                src={link}
                title={title}
                controls
            />
        )}
    </div>
  );
};

export default YoutubeEmbed;
