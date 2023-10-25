import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BannerSection from "./bannerSection/BannerSection";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videosData, isLoading: videosLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: creditsData, isLoading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return videosLoading || creditsLoading ? (
    <div className="h-screen">
      <Spinner />
    </div>
  ) : (
    <div>
      <Header />
      <BannerSection
        video={videosData?.results[0]}
        isVideoLoading={videosLoading}
        crew={creditsData?.crew}
        cast={creditsData?.cast}
        isLoading={creditsLoading}
        videosData={videosData}
        mediaType={mediaType}
        id={id}
      />
      <Footer />
    </div>
  );
};

export default Details;
