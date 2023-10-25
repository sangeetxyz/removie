import React, { useState } from "react";
import VideoPopup from "../../../../components/videoPopup/VideoPopup";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Img from "../../../../utils/lazyLoader/lazyLoader";
const VideoSection = (props) => {
  const [videoId, setVideoId] = useState(null);
  const [videoPopup, setVideoPopup] = useState(false);
  return props.videos?.results.length === 0 ? (
    <div></div>
  ) : (
    <div className="flex w-full flex-col items-center">
      <div className="mt-2 w-full max-w-5xl text-lg font-bold capitalize text-zinc-100 md:px-2">
        official videos
      </div>
      <div className="mt-2 flex w-full max-w-5xl space-x-4 overflow-auto scrollbar-hide md:overflow-clip">
        {props.videos?.results.map((video, index) => {
          return (
            <div key={index} className="relative shrink-0 ">
              <Img
                src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                className="aspect-auto h-40 rounded-xl"
              />
              <div className="absolute -top-5 left-0 flex h-full w-full items-center justify-center">
                <AiOutlinePlayCircle
                  size={50}
                  color="white"
                  className="cursor-pointer"
                  onClick={() => {
                    setVideoPopup(true);
                    setVideoId(video.key);
                  }}
                />
              </div>
              <div className="mt-2 h-10 w-[284px] overflow-hidden text-sm text-zinc-100">
                {video.name}
              </div>
            </div>
          );
        })}
      </div>
      <VideoPopup
        videoPopup={videoPopup}
        setVideoPopup={setVideoPopup}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
