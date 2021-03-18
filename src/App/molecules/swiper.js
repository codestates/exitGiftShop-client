import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slider = ({ settings, children }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    ...settings,
  };

  return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
