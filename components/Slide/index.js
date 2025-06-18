"use client";

import React from "react";
import Slider from "react-slick";

function Slide({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    arrows: false,
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default Slide;
