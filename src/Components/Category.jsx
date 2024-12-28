import Header from "../Shared/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../assets/assets/home/slide1.jpg";
import slide2 from "../assets/assets/home/slide2.jpg";
import slide3 from "../assets/assets/home/slide3.jpg";
import slide4 from "../assets/assets/home/slide4.jpg";
import slide5 from "../assets/assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <Header
          heading={"---From 11:00am to 10:00pm---"}
          subHeading={"ORDER ONLINE"}
        ></Header>
      </div>
      <div className="py-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img src={slide1} />
            <h3 className="text-4xl absolute bottom-10 left-5 uppercase text-center text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide2} />
            <h3 className="text-4xl absolute bottom-10 left-5 uppercase text-center text-white">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide3} />
            <h3 className="text-4xl absolute bottom-10 left-5 uppercase text-center text-white">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide4} />
            <h3 className="text-4xl absolute bottom-10 left-5 uppercase text-center text-white">
              desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide5} />
            <h3 className="text-4xl absolute bottom-10 left-5 uppercase text-center text-white">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
