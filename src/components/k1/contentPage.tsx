import { useRouter, useParams } from "next/navigation";
import { contents } from "@/constant/content";
import AudioWavePlayer from "./audioWavePlayer";
import { useMemo, useState } from "react";
import { Button, Image } from "antd";
import VideoPlayer from "./videoPlayer";
import ReactionBar from "../reactionBar";
import CatConversation from "../catConversation";
import { ArrowLeftOutlined, CheckCircleFilled, CloseCircleFilled, HomeFilled } from "@ant-design/icons";

export default function ContentPage() {
  const { id } = useParams();

  const [isReact, setIsReact] = useState(false);

  const [isSafe, setIsSafe] = useState<boolean | null>(null);

  const content = useMemo(
    () => contents.find((content) => content.id === id),
    [id]
  );

  const contentComponent = useMemo(() => {
    switch (content?.type) {
      case "Audio":
        return (
          <AudioWavePlayer
            audioUrl={content?.url || ""}
            source={content?.source || ""}
          />
        );
      case "Image":
        return <Image src={content?.url || ""} alt="Content" preview={false} />;
      case "Video":
        return <VideoPlayer link={content?.url || ""} />;
    }
  }, [content]);

  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-14">
      <div className="flex justify-between">
        <div className="w-3/5 bg-white rounded-xl overflow-hidden flex items-center justify-center border-4 border-orange-400 relative">
          {contentComponent}
          {content?.source && content?.type !== "Audio" && (
            <div className="absolute top-0 left-0 bg-white opacity-80 z-10 text-sm p-2 rounded-br-lg">
              Nguồn: {content?.source}
            </div>
          )}
        </div>
        <div>
          <Image
            width={400}
            src="/components/comment.png"
            alt="Content"
            preview={false}
          />
        </div>
      </div>

      {isReact ? (
        <div className="flex items-center justify-between">
          <CatConversation>
            <div className="flex items-center gap-5">
              <Image
                width={100}
                alt="Cat"
                preview={false}
                src="/icons/robot.gif"
              />
              <span>
                {isSafe === null ? "Mình rất vui vì bạn đã chia sẻ cảm xúc với mình. Vậy bạn đánh giá nội dung này như thế nào?" : "Cảm ơn bạn đã đưa ra đánh giá về nội dung này"}
              </span>
            </div>
          </CatConversation>

          {isSafe === null ? <div className="flex flex-col gap-5 w-1/5">
            <Button icon={<CheckCircleFilled />} className="!h-12" variant="solid" color="green" onClick={() => setIsSafe(true)}>
              Phù hợp
            </Button>
            <Button icon={<CloseCircleFilled />} className="!h-12" variant="solid" color="red" onClick={() => setIsSafe(false)}>
              Không phù hợp
            </Button>
          </div> : <div className="flex flex-col gap-5 w-1/5">
            <Button icon={<ArrowLeftOutlined />} className="!h-12" variant="solid" color="orange" onClick={() => setIsSafe(null)}>
              Đánh giá lại
            </Button>
            <Button icon={<HomeFilled />} className="!h-12" variant="solid" color="orange" onClick={() => router.push("/k1/hds02")}>
              Về trang chủ
            </Button>
          </div>}
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <ReactionBar setIsReaction={setIsReact} />

          <CatConversation>
            <div className="flex items-center gap-5">
              <Image
                width={100}
                alt="Cat"
                preview={false}
                src="/icons/robot.gif"
              />
              <span>
                Bạn hãy xem nội dung trên và chia sẻ cảm xúc của bạn nhé!
              </span>
            </div>
          </CatConversation>
        </div>
      )}
    </div>
  );
}
