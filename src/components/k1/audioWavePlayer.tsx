"use client";

import { convertTime } from "@/utils/convertTime";
import {
  PauseCircleFilled,
  PlayCircleFilled,
  SoundFilled,
} from "@ant-design/icons";
import { Button, Slider } from "antd";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface Props {
  audioUrl: string;
  source?: string;
}

export default function AudioWavePlayer({ audioUrl, source }: Props) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (waveformRef.current && !waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#f50",
        height: 280,
      });

      waveSurferRef.current.load(audioUrl);

      waveSurferRef.current?.setVolume(volume);

      waveSurferRef.current.on("ready", () => {
        setDuration(waveSurferRef.current!.getDuration());
      });

      waveSurferRef.current.on("audioprocess", () => {
        setCurrentTime(waveSurferRef.current!.getCurrentTime());
      });

      waveSurferRef.current.on("seeking", () => {
        setCurrentTime(waveSurferRef.current!.getCurrentTime());
      });

      waveSurferRef.current.on("finish", () => {
        setIsPlaying(false);
      });
    }

    // return () => {
    //   waveSurferRef.current?.destroy();
    // };
  }, [audioUrl, volume]);

  const togglePlay = () => {
    waveSurferRef.current?.playPause();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number) => {
    waveSurferRef.current?.setVolume(value);
    setVolume(value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white p-5">
      <div className="h-3/4" ref={waveformRef} />
      <div className="flex items-center gap-10 w-full">
        <Button
          size="large"
          icon={
            <span className="text-5xl">
              {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
            </span>
          }
          variant="link"
          color="orange"
          onClick={togglePlay}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{source}</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {currentTime ? convertTime(currentTime) : "0:00"}
              </span>
              <span className="text-sm text-gray-500">-</span>
              <span className="text-sm text-gray-500">
                {duration ? convertTime(duration) : "0:00"}
              </span>
            </div>
            <div className="w-1/4 flex items-center gap-2">
              <span className="text-orange-400">
                <SoundFilled />
              </span>
              <div className="w-full">
                <Slider
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
