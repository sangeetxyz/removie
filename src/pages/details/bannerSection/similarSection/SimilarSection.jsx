import React from "react";
import { useFetch } from "../../../../hooks/useFetch";
import Carousel from "../../../../components/carousel/Carousel";

const SimilarSection = (props) => {
  const { data, isLoading } = useFetch(
    `/${props.mediaType}/${props.id}/similar`
  );
  const title =
    props.mediaType === "tv" ? "similar tV shows" : "similar movies";
  return isLoading ? (
    <div></div>
  ) : (
    <div className="flex w-full flex-col items-center">
      <div className="mt-4 w-full max-w-5xl text-lg font-bold capitalize text-zinc-100 md:px-2">
        {title}
      </div>
      <Carousel
        data={data?.results}
        isLoading={isLoading}
        endPoint={props.mediaType}
      />
    </div>
  );
};

export default SimilarSection;
