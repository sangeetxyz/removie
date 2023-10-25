import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Img = ({ src, className, style }) => {
  const navigator = useNavigate();
  return (
    <LazyLoadImage
      className={className || ""}
      style={style || {}}
      alt=""
      effect="blur"
      src={src}
      
    />
  );
};

export default Img;
