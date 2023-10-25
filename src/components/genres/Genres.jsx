import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ ids }) => {
  const configuration = useSelector((state) => state.home.configuration);

  return (
    <div className="relative bottom-4 hidden flex-col items-end justify-end md:flex">
      {configuration.genres ? (
        ids.map((id) => {
          if (!configuration.genres[id]?.name.split("&").length === 1) return;
          return (
            <div
              className="mr-1 mt-1 flex rounded-full bg-pink-500 px-2 pb-[2px] text-center text-xs text-zinc-100"
              key={id}
            >
              <div className="whitespace-nowrap">
                {configuration.genres[id]?.name}
              </div>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Genres;
