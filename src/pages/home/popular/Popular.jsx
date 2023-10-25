import React, { useEffect, useState } from "react";
import Switcher from "../../../components/switcher/Switcher";
import { useFetch } from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, isLoading, error } = useFetch(`/${endPoint}/popular`);
  const tabTrigger = (tab, index) => {
    setEndPoint(tab === "movie" ? "movie" : "tv");
  };
  useEffect(() => {}, [data]);
  return (
    <div className="mt-12 flex flex-col px-4">
      <div className="flex w-full max-w-5xl items-center justify-between self-center">
        <div className="mt-1 text-xl font-bold capitalize text-zinc-100">
          what's popular
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

export default Popular;
