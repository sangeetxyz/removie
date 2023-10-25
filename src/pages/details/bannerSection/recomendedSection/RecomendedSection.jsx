import React from "react";
import { useFetch } from "../../../../hooks/useFetch";
import Carousel from "../../../../components/carousel/Carousel";

const RecomendedSection = (props) => {
  const { data, isLoading } = useFetch(
    `/${props.mediaType}/${props.id}/recommendations`
  );

  return data?.results.length == 0 ? (
    <div></div>
  ) : (
    <div className="flex w-full flex-col items-center">
      <div className="mt-4 w-full max-w-5xl text-lg font-bold capitalize text-zinc-100 md:px-2">
        recommendations
      </div>
      <Carousel
        data={data?.results}
        isLoading={isLoading}
        endPoint={props.mediaType}
      />
    </div>
  );
};

export default RecomendedSection;
