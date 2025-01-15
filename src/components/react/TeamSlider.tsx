import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { NextButton, PrevButton } from "./SwiperNextBtn";
import { SplitTextAnim } from "./TextAnimations";
import { cn, containerClass } from "../../lib/utils";

const containerClasses = containerClass(false);

const teams = [
  {
    name: "Chrisben Nii",
    title: "Photographer",
    image: "/sample.png",
  },
  {
    name: "Afrakuma",
    title: "Social Media Manager",
    image: "/sample.png",
  },
  {
    name: "Frank",
    title: "Photographer",
    image: "/sample.png",
  },
  {
    name: "Dove",
    title: "Graphic Designer",
    image: "/sample.png",
  },
  {
    name: "Korea",
    title: "Social Media Manager",
    image: "/sample.png",
  },
];

const TeamSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex flex-col gap-8 pb-[120px] font-helvetica">
      <div
        className={cn(
          containerClasses,
          `w-full pt-[80px] flex items-center justify-between`
        )}
      >
        <div className="max-w-[750px]">
          <SplitTextAnim
            text="Team Members"
            className=" leading-[100%] font-helvetica font-[500]"
            duration={1.5}
            wrapper="h1"
          />
        </div>
        <div className="flex space-x-4">
          <PrevButton swiperRef={swiperRef} />
          <NextButton swiperRef={swiperRef} />
        </div>
      </div>

      <div className=" py-12 overflow-visible">
        <Swiper
          onSwiper={(swiper: any) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          //   autoHeight={true}
          modules={[Autoplay]}
          navigation={true}
          centeredSlides={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper w-full overflow-visible"
        >
          {teams.map((team, index) => {
            const randomRotation = Math.random() * 12 - 6;
            return (
              <SwiperSlide className=" w-full flex items-center justify-center my-6">
                <a
                  href=""
                  className={` w-full aspect-[1/1.2] flex flex-col gap-3 overflow-visible`}
                >
                  <div
                    className=" w-full h-full bg-slate-700"
                    style={{
                      transform: `rotate(${randomRotation}deg)`,
                    }}
                  />
                  <div className="flex-flex-col">
                    <h5 className=" font-medium">{team.name}</h5>
                    <p>{team.title}</p>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
