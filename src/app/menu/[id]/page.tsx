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
import { useState } from "react";

export default function VideoPage() {
  const [isReact, setIsReact] = useState(false);

  const [isNoShare, setIsNoShare] = useState(false);

  const { id } = useParams();

  const router = useRouter();

  const video = videos.find((item) => item.id === id);

  return (
    <>
      <div className="flex gap-10">
        <div className="border-8 w-3/5 border-rose-300 rounded-3xl">
          <iframe
            className="w-full h-full rounded-xl overflow-hidden"
            src={video?.link}
            title={video?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>

        <Image preview={false} src="/components/comment.png" alt="Comment Box"/>
      </div>

      <div className="flex mt-10 justify-between">
        {!isReact ? (
          <>
            <ReactionBar setIsReaction={setIsReact} />
            <div className="flex w-1/2">
              <CatConversation>
                Các bạn hãy{" "}
                <span className="text-emerald-400 font-semibold">
                  xem video
                </span>{" "}
                và{" "}
                <span className="text-emerald-400 font-semibold">
                  chia sẻ cảm xúc
                </span>{" "}
                với mình nhé!

                <AudioPlayer src="/audios/reaction.mp3"/>
              </CatConversation>

              <Image alt="Cat" width={250} preview={false} src="/icons/cat2.png" />
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-6 w-[65%] items-center">
              <Image alt="Cat" width={350} preview={false} src="/icons/cat.png" />
              <CatConversation>
                {!isNoShare && <>
                  Mình rất vui vì bạn đã chia sẻ cảm xúc với mình. Vậy bạn có muốn chia sẻ video này đến bạn bè không?

                  <AudioPlayer src="/audios/share.mp3"/>
                </>}

                {isNoShare && video?.isGood && <>
                  Không sao cả, mình xem video khác thôi. Lần sau, có nội dung hay, bạn hãy chia sẻ nhé!

                  <AudioPlayer src="/audios/noshare.mp3"/>
                </>}

                {isNoShare && !video?.isGood && <>
                  Đúng rồi, những nội dung có thể khiến người khác không vui thì chúng ta không nên chia sẻ!

                  <AudioPlayer src="/audios/goodNoShare.mp3"/>
                </>}
              </CatConversation>

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

                  <PrimaryButton icon={<HomeFilled />} onClick={() => router.replace('/menu')}>
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
