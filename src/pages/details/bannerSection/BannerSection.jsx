import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import Img from "../../../utils/lazyLoader/lazyLoader";
import { IMAGE_URL } from "../../../utils/links/links";
import DefaultPoster from "../../../assets/no-poster.png";
import dayjs from "dayjs";
import RatingCircle from "../../../components/ratingCircle/RatingCircle";
import { AiOutlinePlayCircle } from "react-icons/ai";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import CastSection from "./castSection/CastSection";
import VideoSection from "./videoSection/VideoSection";
import SimilarSection from "./similarSection/SimilarSection";
import RecomendedSection from "./recomendedSection/RecomendedSection";
import Spinner from "../../../components/spinner/Spinner";
const BannerSection = (props) => {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}`);
  const [videoId, setVideoId] = useState(null);
  const [videoPopup, setVideoPopup] = useState(false);
  let director = props.crew?.filter((person) => person.job === "Director");
  let writer = props.crew?.filter(
    (person) =>
      person.job === "Screenplay" ||
      person.job === "Story" ||
      person.job === "Writer"
  );
  director = arrayCropper(director);
  writer = arrayCropper(writer);
  function arrayCropper(originalArray) {
    if (originalArray?.length >= 3) {
      return originalArray.slice(0, 3);
    } else {
      return originalArray;
    }
  }

  function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return { hours, minutes: remainingMinutes };
  }
  return props.isVideoLoading ? (
    <div className="h-screen">
      <Spinner />
    </div>
  ) : (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col items-center bg-slate-900 px-4 pb-10">
        <div className="mx-4 mt-16 grid w-full max-w-5xl grid-cols-6 md:mt-20">
          <div className="col-span-6 flex justify-center md:col-span-2">
            {data?.poster_path ? (
              <Img
                src={IMAGE_URL + data.poster_path}
                className="h-full w-full rounded-xl object-cover md:h-full md:w-64"
              />
            ) : (
              <Img
                src={DefaultPoster}
                className="h-full w-full rounded-xl object-cover md:h-full md:w-64"
              />
            )}
          </div>
          <div className="col-span-6 mt-4 bg-slate-900 md:col-span-4 md:mt-0 md:bg-transparent">
            <div className="text-3xl font-bold capitalize text-zinc-100">
              {`${data?.name || data?.title} (${dayjs(
                data?.release_date
              ).format("YYYY")})`}
            </div>
            <div className="mt-1 text-sm italic text-zinc-400">
              {data?.tagline}
            </div>
            <div className="my-4 flex space-x-2">
              {data?.genres.map((genreData, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-full bg-pink-500 px-2 py-1 text-xs text-zinc-100"
                  >
                    {genreData.name}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <RatingCircle rating={data?.vote_average.toFixed(1)} />
              <div className="flex items-center ">
                <AiOutlinePlayCircle
                  size={54}
                  onClick={() => {
                    setVideoPopup(true);
                    setVideoId(props.video.key);
                  }}
                  className="ml-2 cursor-pointer fill-white hover:fill-pink-500"
                />
                <div className="ml-2 text-sm capitalize text-zinc-100">
                  watch trailer
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm font-semibold capitalize text-zinc-100">
              overview
            </div>
            <div className="mt-1 text-xs  text-zinc-400">{data?.overview}</div>
            <div className="mt-2 h-[1px] w-full bg-zinc-500"></div>
            <div className="mt-2 flex max-w-md flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
              <div className="flex">
                <div className="mr-1.5 text-sm font-semibold capitalize text-zinc-100">
                  status:
                </div>
                <div className="text-sm font-light capitalize text-zinc-400">
                  {data?.status || "coming soon"}
                </div>
              </div>
              <div className="flex">
                <div className="mr-1.5 text-sm font-semibold capitalize text-zinc-100">
                  release date:
                </div>
                <div className="text-sm font-light capitalize text-zinc-400">
                  {dayjs(data?.relese_date).format("MMM D, YYYY")}
                </div>
              </div>
              {data?.runtime && (
                <div className="flex">
                  <div className="mr-1.5 text-sm font-semibold capitalize text-zinc-100">
                    runtime:
                  </div>
                  <div className="text-sm font-light capitalize text-zinc-400">
                    {`${convertToHoursAndMinutes(data.runtime).hours}h ${
                      convertToHoursAndMinutes(data.runtime).minutes
                    }m`}
                  </div>
                </div>
              )}
            </div>
            {director?.[0] !== undefined ? (
              <div>
                <div className="mt-2 h-[1px] w-full bg-zinc-500"></div>
                <div className="mt-2 flex">
                  <div className="flex">
                    <div className="mr-1.5 text-sm font-semibold capitalize text-zinc-100">
                      director:
                    </div>
                    {director?.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className="mr-1 text-sm font-light capitalize text-zinc-400"
                        >
                          {element.name}
                          {director?.length - 1 !== index && ","}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {writer?.[0] !== undefined ? (
              <div>
                <div className="mt-2 h-[1px] w-full bg-zinc-500"></div>
                <div className="mt-2 flex">
                  <div className="flex">
                    <div className="mr-1.5 text-sm font-semibold capitalize text-zinc-100">
                      writer:
                    </div>
                    {writer?.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className="mr-1 text-sm font-light capitalize text-zinc-400"
                        >
                          {element.name}
                          {writer?.length - 1 !== index && ","}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {data?.created_by?.length > 0 && (
              <div>
                <div className="mt-2 h-[1px] w-full bg-zinc-500"></div>

                <div className="mt-2 flex">
                  <div className="mr-1.5 text-sm font-semibold capitalize text-zinc-100">
                    creator:
                  </div>

                  {data.created_by.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="mr-1 text-sm font-light capitalize text-zinc-400"
                      >
                        {element.name}
                        {data.created_by.length - 1 !== index && ","}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="mt-2 h-[1px] w-full bg-zinc-500"></div>
          </div>
        </div>
        <CastSection cast={props.cast} isLoading={props.isLoading} />
        <VideoSection
          videos={props.videosData}
          isLoading={props.isVideoLoading}
        />
        <SimilarSection mediaType={props.mediaType} id={props.id} />
        <RecomendedSection mediaType={props.mediaType} id={props.id} />
      </div>

      <VideoPopup
        videoPopup={videoPopup}
        setVideoPopup={setVideoPopup}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default BannerSection;

//    <div className="flex w-full flex-col items-center rounded-xl bg-slate-950 px-12 py-12">
//      <div className="flex w-full max-w-md justify-between">
//        {/* <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
//                 terms of use
//               </div> */}
//        <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
//          privacy policy
//        </div>
//        <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
//          about
//        </div>
//        <div className="cursor-pointer text-sm capitalize text-zinc-100 hover:text-pink-500">
//          blog
//        </div>
//        <div className="cursor-pointer text-sm uppercase text-zinc-100 hover:text-pink-500">
//          faq
//        </div>
//      </div>
//      <div className="mt-10 text-center text-sm text-zinc-100">
//        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quasi
//        repellendus magnam, voluptate, ut eligendi odit sunt delectus officia
//        numquam soluta itaque debitis sit dolorem animi, neque assumenda
//        molestias natus? Lorem ipsum dolor, sit amet consectetur adipisicing
//        elit. Magni quasi repellendus magnam?
//      </div>
//      <div className="mt-10 flex w-full max-w-[250px] justify-between">
//        <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
//          <FaFacebook color="white" size={20} />
//        </div>
//        <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
//          <FaInstagram color="white" size={20} />
//        </div>
//        <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
//          <FaLinkedin color="white" size={20} />
//        </div>
//        <div className="cursor-pointer rounded-full bg-slate-900 p-3 hover:scale-110 hover:outline hover:outline-2 hover:outline-pink-500">
//          <FaWhatsapp color="white" size={20} />
//        </div>
//      </div>
//    </div>
//  </footer>;
