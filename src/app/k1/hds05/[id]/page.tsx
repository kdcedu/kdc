"use client";

import AudioPlayer from "@/components/audioPlayer";
import CatConversation from "@/components/catConversation";
import HeartGiven from "@/components/heartGiven";
import PrimaryButton from "@/components/primaryButton";
import ReactionBar from "@/components/reactionBar";
import ShareButton from "@/components/shareButton";
import { videos } from "@/constant/videos";
import { BackwardOutlined, HomeFilled } from "@ant-design/icons";
import { Image } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function VideoPage() {
  const [isReact, setIsReact] = useState(false);

  const [isNoShare, setIsNoShare] = useState(false);

  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const handlePause = () => {
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: [],
      }),
      "*"
    );
  };

  const handleReact = (value: boolean) => {
    setIsReact(value);
    handlePause();
  }

  const { id } = useParams();

  const router = useRouter();

  const video = videos.find((item) => item.id === id);

  return (
    <>
      <div className="flex gap-10">
        <div className="border-8 w-3/5 border-rose-300 rounded-3xl">
          <iframe
            ref={videoRef}
            className="w-full h-full rounded-xl overflow-hidden"
            src={`${video?.link}&enablejsapi=1`}
            title={video?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>

        <div className="flex flex-1">
          <Image preview={false} width="100%" height="100%" src="/components/comment.png" alt="Comment Box"/>
        </div>
      </div>

      <div className="flex mt-10 justify-between items-center gap-10">
        {!isReact ? (
          <>
            <ReactionBar setIsReaction={handleReact} />
            <div className="flex items-center gap-5">
              <CatConversation icon={<AudioPlayer onClick={handlePause} src="/audios/reaction.mp3"/>}>
                Các bạn hãy{" "}
                <span className="text-emerald-400 font-semibold">
                  xem video
                </span>{" "}
                và{" "}
                <span className="text-emerald-400 font-semibold">
                  chia sẻ cảm xúc
                </span>{" "}
                với mình nhé!
              </CatConversation>
              <div className="w-40">
                <Image alt="Cat" preview={false} src="/icons/robot.gif" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-6 w-3/5 items-center">
            <div className="w-52">
              <Image alt="Cat" preview={false} src="/icons/robot.gif" />
            </div>
                {!isNoShare && <CatConversation icon={<AudioPlayer onClick={handlePause} src="/audios/share.mp3"/>}>
                  Mình rất vui vì bạn đã chia sẻ cảm xúc với mình. Vậy bạn có muốn chia sẻ video này đến bạn bè không?
                </CatConversation>}

                {isNoShare && video?.isGood && <CatConversation icon={<AudioPlayer onClick={handlePause} src="/audios/noshare.mp3"/>}>
                  Không sao cả, mình xem video khác thôi. Lần sau, có nội dung hay, bạn hãy chia sẻ nhé!
                </CatConversation>}

                {isNoShare && !video?.isGood && <CatConversation icon={<AudioPlayer onClick={handlePause} src="/audios/goodNoShare.mp3"/>}>
                  Đúng rồi, những nội dung có thể khiến người khác không vui thì chúng ta không nên chia sẻ!
                </CatConversation>}

              {isNoShare && !video?.isGood && <HeartGiven />}
            </div>

            <div className={`flex ${!isNoShare && 'flex-col'} gap-5 mr-8`}>
              {!isNoShare ? (
                <>
                  <ShareButton />
                  <ShareButton setNoShare={setIsNoShare} />
                </>
              ) : (
                <div className="flex m-auto gap-5">
                  <PrimaryButton icon={<BackwardOutlined />} onClick={() => setIsNoShare(false)}>
                    Trở lại
                  </PrimaryButton>

                  <PrimaryButton icon={<HomeFilled />} onClick={() => router.replace('/k1/hds05')}>
                    Trang chủ
                  </PrimaryButton>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
