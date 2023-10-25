import React, { useEffect, useState } from "react";
import Switcher from "../../../components/switcher/Switcher";
import { useFetch } from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, isLoading, error } = useFetch(`/trending/all/${endPoint}`);
  const tabTrigger = (tab, index) => {
    setEndPoint(tab);
  };
  useEffect(() => {}, [data]);
  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full max-w-5xl items-center justify-between self-center">
        <div className="mt-1 text-xl font-bold capitalize text-zinc-100">
          trending
        </div>
        <Switcher tabs={["day", "week"]} onTabChange={tabTrigger} />
      </div>
      <div>
        <Carousel data={data?.results} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Trending;
