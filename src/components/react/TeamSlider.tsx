import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { NextButton, PrevButton } from "./SwiperNextBtn";
import { SplitTextAnim, SplitWordAnim } from "./TextAnimations";
import { cn, containerClass } from "../../lib/utils";
import SlitText from "../../components/react/reactbits/SplitText";
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
    <div className="flex flex-col gap-8 pb-[120px] font-helvetica overflow-hidden">
      <div
        className={cn(
          containerClasses,
          `w-full pt-[80px] flex flex-col gap-16 overflow-visible`
        )}
      >
        <div className="max-w-[750px] flex flex-col gap-16">
          <SplitTextAnim
            text="Our Team"
            className=" leading-[100%] font-helvetica font-[500] dark:text-white"
            duration={1.5}
            wrapper="h1"
          />
          <SplitWordAnim
            text={`The creative team behind our creative success. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repellendus tempore quam sapiente! Repellendus molestias labore, sequi nobis quas qui.`}
            fontSize={"text-e-7xl dark:text-others-text-dark"}
          />
        </div>
        <div className={`!overflow-visible`}>
          <Swiper
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            // slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            //   autoHeight={true}
            modules={[Autoplay]}
            navigation={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.00": {
                slidesPerView: "auto",
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
            }}
            className="mySwiper !w-full !overflow-visible"
          >
            {teams.map((team, index) => {
              return (
                <SwiperSlide className=" !w-[416px]  flex flex-col my-6">
                  <a href="/" className={`w-full h-full`}>
                    <div className=" relative w-full h-full  flex flex-col">
                      <div className=" w-full  bg-slate-700 aspect-[1/1.2]">
                        image goes here
                      </div>
                      <div className="flex flex-col dark:text-others-text-dark">
                        <h5 className=" font-medium">{team.name}</h5>
                        <p>{team.title}</p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex justify-end space-x-4">
          <PrevButton swiperRef={swiperRef} />
          <NextButton swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
