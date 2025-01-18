import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import { NextButton, PrevButton } from "./SwiperNextBtn";
import { SplitTextAnim } from "./TextAnimations";
import { cn, containerClass, splitText } from "../../lib/utils";
import type { EVENTS_QUERYResult } from "../../../sanity.types";
import { EffectFade } from "swiper/modules";
import { urlForImage } from "../../lib/sanity/urlForImage";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type ProjectSLider = {
  data: EVENTS_QUERYResult;
};

const ProjectPageSLider = ({ data }: ProjectSLider) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const incrementSlider = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2));
  };
  const decrementSlider = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const ptl = gsap.timeline();
    splitText({
      elementTarget: `slide-text-${currentIndex}`,
      wordClass: "word-style",
      charClass: "char-style",
    });
    ptl.from(".word-style", { opacity: 0, x: 50, stagger: 0.2 });
  }, [currentIndex, splitText, data]);

  return (
    <div className="relative min-h-[650px] flex flex-col gap-8 h-full">
      <div className=" absolute bottom-0 z-10 left-0 p-20 flex space-x-4">
        <div className=" cursor-pointer" onClick={decrementSlider}>
          <div className="bg-orange-600 text-white py-2 px-4  hover:bg-orange-700  flex items-center justify-center aspect-square rounded-full transition">
            <ArrowLeft width={20} height={20} weight="bold" />
          </div>
        </div>
        <div className=" cursor-pointer" onClick={incrementSlider}>
          <div className="bg-orange-600 text-white py-2 px-4  hover:bg-orange-700  flex items-center justify-center aspect-square rounded-full transition">
            <ArrowRight width={20} height={20} weight="bold" />
          </div>
        </div>
      </div>

      <div className=" absolute top-0 left-0 w-full h-full">
        {data?.slice(0, 3).map((data, index) => {
          return (
            <a
              href={`/projects/${data.slug?.current}`}
              className={`${
                currentIndex === index ? "flex" : "hidden"
              } w-full h-full flex-col gap-3 overflow-visible absolute inset-0`}
            >
              <div className="absolute w-full h-full top-0 left-0 bg-slate-900">
                {data.image && (
                  <img
                    src={urlForImage(data.image).url()}
                    alt=""
                    className=" object-cover w-full h-full "
                  />
                )}
              </div>
              <div className=" p-20 max-w-[650px] absolute right-0 z-[999] bottom-0 text-white ">
                <h2
                  className={` font-medium leading-[120%] slide-text-${index}`}
                >
                  {data.name}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPageSLider;
