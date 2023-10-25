import React from "react";
import DefaultDp from "../../../../assets/no-dp.png";
import { IMAGE_URL } from "../../../../utils/links/links";
import Img from "../../../../utils/lazyLoader/lazyLoader";

const CastSection = (props) => {
  return props.isLoading ? (
    <div>laoding</div>
  ) : (
    <div className="flex w-full flex-col items-center">
      <div className="mt-4 w-full max-w-5xl text-lg font-bold capitalize text-zinc-100 md:px-2">
        top cast
      </div>
      <div className="mt-2 flex w-full max-w-5xl space-x-4 overflow-auto scrollbar-hide md:overflow-clip">
        {props?.cast?.map((cast, index) => {
          let url = cast?.profile_path
            ? IMAGE_URL + cast?.profile_path
            : DefaultDp;
          return (
            <div key={index} className="shrink-0">
              <Img src={url} className="h-28 w-28 rounded-full object-cover" />
              <div className="h-5 w-28 overflow-hidden text-center text-sm font-semibold text-zinc-100">
                {cast.name}
              </div>
              <div className="h-9 w-28 overflow-hidden text-center text-xs font-semibold text-zinc-400">
                {cast.character}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastSection;
