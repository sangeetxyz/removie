import React, { useRef } from "react";
import { IMAGE_URL } from "../../utils/links/links";
import DefaultPoster from "../../assets/no-poster.png";
import Img from "../../utils/lazyLoader/lazyLoader";
import dayjs from "dayjs";
import RatingCircle from "../ratingCircle/RatingCircle";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const Carousel = ({ data, isLoading, endPoint }) => {
  const carouselContainer = useRef();
  const navigator = useNavigate();
  const handleScroll = (direction) => {
    const container = carouselContainer.current;
    if (container) {
      const scrollAmount =
        direction === "left"
          ? container.scrollLeft - container.offsetWidth
          : container.scrollLeft + container.offsetWidth;
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return isLoading ? (
    <div className="h-44">
      <Spinner />
    </div>
  ) : (
    <div className="mt-4 flex w-full justify-center">
      <div className="absolute hidden h-64 w-full max-w-5xl items-center justify-between md:flex md:px-6 xl:px-4">
        <div className="z-30">
          <BiSolidLeftArrowCircle
            color="white"
            size={30}
            className="cursor-pointer"
            onClick={() => handleScroll("left")}
          />
        </div>
        <div className="z-30">
          <BiSolidRightArrowCircle
            color="white"
            size={30}
            className="cursor-pointer"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
      <div
        ref={carouselContainer}
        className="flex max-w-5xl gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data?.map((card, index) => {
          const posterUrl = card.poster_path
            ? IMAGE_URL + card.poster_path
            : DefaultPoster;
          let filteredGenres = [];

          card.genre_ids.map((element) => {
            if (
              element !== 878 &&
              element !== 10759 &&
              element !== 10765 &&
              element !== 10768 &&
              element !== 10770
            ) {
              filteredGenres.push(element);
            }
          });

          return (
            <div key={index} className="relative w-40 flex-shrink-0">
              <Img src={posterUrl} alt="Poster" className="h-64 rounded-xl" />
              <div
                className="absolute top-0 z-20 h-64 w-full rounded-xl"
                onClick={() => {
                  navigator(`/${card.media_type || endPoint}/${card.id}`);
                }}
              ></div>
              <div className="relative ml-2 mt-[-40px] flex justify-between">
                <RatingCircle rating={card.vote_average.toFixed(1)} />
                <Genres ids={filteredGenres.slice(0, 2)} />
              </div>
              <div className="mt-2 max-h-12 overflow-clip font-bold text-zinc-100">
                {card.title || card.name}
              </div>
              <div className="text-xs text-zinc-100 opacity-75">
                {dayjs(card.relese_Date).format("MMM D, YYYY")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
