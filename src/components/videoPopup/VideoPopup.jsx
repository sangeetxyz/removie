import React from "react";
import ReactPlayer from "react-player/youtube";
const VideoPopup = ({ videoPopup, setVideoPopup, videoId, setVideoId }) => {
  const closeVideoPopup = () => {
    setVideoPopup(false);
    setVideoId(null);
  };
  return (
    <div
      className={`fixed left-0 top-0 z-40 h-screen w-screen items-center justify-center backdrop-blur-sm ${
        videoPopup ? "flex" : "hidden"
      }`}
      onClick={closeVideoPopup}
    >
      <div className="mx-8 h-[250px] w-full max-w-5xl items-center sm:h-[350px] sm:w-[600px] md:h-[400px] md:w-[700px] lg:h-[450px] lg:w-[800px] xl:h-[500px] xl:w-[900px] 2xl:h-[550px] 2xl:w-[1000px]">
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
