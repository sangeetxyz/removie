import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IMAGE_URL } from "../../utils/links/links";
import Img from "../../utils/lazyLoader/lazyLoader";
import "./custom.css";
const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigator = useNavigate();
  const randomMovieData = useFetch("/movie/popular").data;
  const [bg, setBg] = useState(null);
  const handleQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      search(query);
    }
  };
  const handleSearch = () => {
    if (query.length > 0) {
      search(query);
    }
  };
  const search = (value) => {
    navigator(`/search/${value}`);
  };
  useEffect(() => {
    if (randomMovieData) {
      setBg(
        IMAGE_URL +
          randomMovieData.results[Math.floor(Math.random() * 20)].backdrop_path
      );
    }
  }, [randomMovieData]);
  return (
    <div className="relative bg-slate-900 ">
      <Img
        src={bg}
        className="left-0 top-0 h-[400px] w-full object-cover md:h-[450px] lg:h-[500px] xl:h-[560px]"
        style={{ opacity: 0.5 }}
      />
      <div className="absolute left-0 top-0 z-10 mt-48 flex w-full flex-col items-center justify-center lg:mt-56 xl:mt-64 2xl:mt-72">
        <div className="py-2 text-2xl font-bold capitalize text-zinc-100 sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          welcome!
        </div>
        <div className="text-sm capitalize text-zinc-100 sm:text-sm lg:text-lg 2xl:text-xl">
          Millions of movies, TV shows and people to discover.
        </div>
        <div className="pb-4 text-sm capitalize text-zinc-100 sm:text-sm lg:text-lg 2xl:text-xl">
          Explore now!
        </div>
        <div className="flex w-full items-center justify-center px-4">
          <input
            type="text"
            value={query}
            onChange={(value) => {
              setQuery(value.target.value);
            }}
            onKeyUp={handleQuery}
            placeholder="Search for movies and tv shows"
            className="h-12 w-full max-w-2xl rounded-l-full px-5 focus:outline-none "
          />
          <div
            className="flex h-12 cursor-pointer items-center justify-center rounded-r-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 pl-3 pr-4 capitalize text-zinc-100"
            onClick={handleSearch}
          >
            {/* <BsSearch
              onClick={handleSearch}
              color="white"
              size={35}
              className="mx-2 pb-1 cursor-pointer"
            /> */}
            search
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-b from-transparent via-slate-900 to-slate-900"></div>
    </div>
  );
};

export default HeroSection;
