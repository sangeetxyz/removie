import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const PageNotFound = () => {
  const [first, setFirst] = useState(true);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900">
      <div className="text-xl capitalize text-zinc-100">galti charso char</div>
      <div className="hidden aspect-auto h-full w-full">
        <ReactPlayer
          width="100%"
          height="100%"
          volume={0.1}
          muted={first}
          url={"https://www.youtube.com/watch?v=ruKlY2yLIj4"}
          playing={true}
          onPlay={() => {
            setFirst(false);
          }}
        />
      </div>
    </div>
  );
};

export default PageNotFound;
