import { Navigation, HashNavigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./slider.scss";

function Slider({ images, onSlideChange }) {
  const handleSlideChange = (swiper) => {
    onSlideChange(swiper.realIndex);
  };

  return (
    <div className="slider">
      <Swiper
        loop
        spaceBetween={50}
        modules={[HashNavigation, Navigation]}
        navigation={{
          nextEl: ".slider__button-next",
          prevEl: ".slider__button-prev",
        }}
        hashNavigation={{
          // watchState: true,
          replaceState: true,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={handleSlideChange}
      >
        {images.map(({ img }, i) => (
          <SwiperSlide key={Math.random()} data-hash={`slide${i}`}>
            <img className="slider__image" src={img} alt="Product" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="slider__button-prev"></button>
      <button className="slider__button-next"></button>
    </div>
  );
}

export default Slider;
