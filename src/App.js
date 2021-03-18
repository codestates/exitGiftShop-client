import React from "react";
import "./style.css";
import Slider from "./swiper";
export default function App() {
  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 40, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
  };
  const data = [...Array(10).keys()];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Slider settings={settings}>
        {data.map((item) => (
          <img src="https://picsum.photos/200/300" key={item} alt="swipe" />
        ))}
      </Slider>
    </div>
  );
}
