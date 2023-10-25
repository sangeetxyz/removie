import React, { useEffect, useState } from "react";
import Switcher from "../../../components/switcher/Switcher";
import { useFetch } from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, isLoading, error } = useFetch(`/${endPoint}/top_rated`);
  const tabTrigger = (tab, index) => {
    setEndPoint(tab === "movie" ? "movie" : "tv");
  };
  useEffect(() => {}, [data]);
  return (
    <div className="relative my-12 flex flex-col px-4">
      <div className="flex w-full max-w-5xl items-center justify-between self-center">
        <div className="mt-1 text-xl font-bold capitalize text-zinc-100">
          top rated
        </div>
        <Switcher tabs={["movie", "tV show"]} onTabChange={tabTrigger} />
      </div>
      <div>
        <Carousel
          data={data?.results}
          isLoading={isLoading}
          endPoint={endPoint}
        />
      </div>
    </div>
  );
};

export default TopRated;
