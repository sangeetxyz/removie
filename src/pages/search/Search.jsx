import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IMAGE_URL } from "../../utils/links/links";
import DefaultPoster from "../../assets/no-poster.png";
import NoResults from "../../assets/no-results.png";

import dayjs from "dayjs";
import Img from "../../utils/lazyLoader/lazyLoader";
import Spinner from "../../components/spinner/Spinner";
const Search = () => {
  const { query } = useParams();
  const navigator = useNavigate();
  const { data, isLoading } = useFetch(`/search/multi?query=${query}`);
  return isLoading ? (
    <div className="h-screen">
      <Spinner />
    </div>
  ) : data?.results.length === 0 ? (
    <div>
      <Header />
      <div className="flex h-screen flex-col items-center justify-center bg-slate-900">
        <img src={NoResults} className="h-96" />
        <div className="-mt-10 text-xl capitalize text-zinc-100">
          No results found!
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full bg-slate-900">
      <Header />
      <div className="flex h-full w-full flex-col items-center pt-12">
        <div className="ml-4 mt-8 w-full max-w-5xl text-lg font-bold capitalize text-zinc-100 md:px-2">
          {`search results for "${query}" `}
        </div>
        <div className="m-3 grid h-full w-full max-w-5xl grid-cols-2 items-center justify-center md:grid-cols-3 xl:grid-cols-4">
          {data?.results.map((result, index) => {
            const bg = result.poster_path
              ? IMAGE_URL + result.poster_path
              : DefaultPoster;
            return (
              <div
                onClick={() => {
                  navigator(`/${result.media_type}/${result.id}`);
                }}
                key={index}
                className="m-4 flex shrink-0 flex-col items-center"
              >
                <Img src={bg} className="rounded-xl" />
                <div className="mt-1 text-center text-lg text-zinc-100">
                  {`${result.name || result?.title} (${dayjs(
                    result.release_date
                  ).format("YYYY")})`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
