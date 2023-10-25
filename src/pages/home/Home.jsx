import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero/HeroSection";
import Footer from "../../components/footer/Footer";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div className="overflow-y-auto bg-slate-900 scrollbar-hide">
      <Header />
      <HeroSection />
      <Trending />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
};

export default Home;
