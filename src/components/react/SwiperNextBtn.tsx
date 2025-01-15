import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

export const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <div
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-orange-600 text-white py-2 px-4  hover:bg-orange-700  flex items-center justify-center aspect-square rounded-full transition"
    >
      <ArrowRight width={20} height={20} weight="bold" />
    </div>
  );
};

export const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <div
      onClick={() => swiperRef.current?.slidePrev()}
      className="bg-purple-600 text-white py-2 px-4  hover:bg-purple-700  flex items-center justify-center aspect-square rounded-full transition"
    >
      <ArrowLeft width={20} height={20} weight="bold" />
    </div>
  );
};
